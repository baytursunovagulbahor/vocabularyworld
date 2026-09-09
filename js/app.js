/**
 * Main Application Orchestrator
 * Vocabulary World - CEFR A1, A2, B1, B2, C1 Platform
 */

import { VOCAB_DATA } from './data/vocabData.js';
import { WordCardsComponent } from './components/wordCards.js';
import { QuizModalComponent } from './components/quizModal.js';
import { PlacementTestComponent } from './components/placementTest.js';
import { supabaseService } from './supabaseClient.js';

class VocabularyApp {
  constructor() {
    this.vocabData = VOCAB_DATA;
    this.supabase = supabaseService;
    this.currentLevelKey = 'A1';
    this.currentTopic = null;
    this.viewMode = 'list'; // 'list' or 'flashcard'
    this.activeFilterLevel = 'ALL';
    
    // Theme state (default to light mode as requested)
    this.currentTheme = localStorage.getItem('vw_theme') || 'light';

    // Persistent state
    this.learnedWordIds = this.loadLearnedWords();
    this.soundEnabled = localStorage.getItem('vw_sound_enabled') !== 'false';
    this.placementResult = this.loadPlacementResult();

    // Audio context for synthesized chimes
    this.audioCtx = null;

    // Components
    this.wordCardsComp = new WordCardsComponent('topic-words-container', {
      onToggleLearned: (id) => this.toggleLearnedWord(id),
      getLearnedIds: () => this.learnedWordIds
    });

    this.quizModalComp = new QuizModalComponent('quiz-modal', {
      playChime: (isCorrect) => this.playFeedbackSound(isCorrect),
      onSaveQuizResult: (topicId, score, total) => this.supabase.recordQuizResult(topicId, score, total)
    });

    this.placementTestComp = new PlacementTestComponent('placement-test-container', {
      playChime: (isCorrect) => this.playFeedbackSound(isCorrect),
      onSavePlacement: (level, score) => this.savePlacementResult(level, score)
    });

    this.init();
  }

  init() {
    this.initTheme();
    this.renderLevelTabs();
    this.renderLevelsGrid();
    this.updateStatsUI();
    this.setupEventListeners();
    this.setupGlobalHandlers();
  }

  /* Theme Management */
  initTheme() {
    this.setTheme(this.currentTheme);
  }

  setTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('vw_theme', theme);
    const html = document.documentElement;
    const icon = document.getElementById('theme-toggle-icon');
    const btn = document.getElementById('theme-toggle-btn');
    
    if (theme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
      if (icon) icon.className = 'fa-solid fa-moon text-sm text-indigo-400';
      if (btn) btn.title = "Yorug' rejimga o'tish";
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      if (icon) icon.className = 'fa-solid fa-sun text-sm text-amber-500';
      if (btn) btn.title = "To'q rejimga o'tish";
    }

    this.renderLevelTabs();
    this.renderLevelsGrid();
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  /* Audio Synthesis (No external sound files required) */
  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  playFeedbackSound(isCorrect) {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (isCorrect) {
        // High pleasant double-beep
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else {
        // Low gentle buzz
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.setValueAtTime(196, now + 0.1); // G3
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      }
    } catch (e) {
      console.warn("Audio synthesis error:", e);
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('vw_sound_enabled', this.soundEnabled);
    this.updateSoundButtonUI();
  }

  updateSoundButtonUI() {
    const btn = document.getElementById('sound-toggle-btn');
    if (!btn) return;
    if (this.soundEnabled) {
      btn.innerHTML = '<i class="fa-solid fa-volume-high text-sm"></i>';
      btn.classList.remove('opacity-50');
      btn.title = "Ovoz effektlari yoqilgan";
    } else {
      btn.innerHTML = '<i class="fa-solid fa-volume-xmark text-sm"></i>';
      btn.classList.add('opacity-50');
      btn.title = "Ovoz effektlari o'chirilgan";
    }
  }

  /* Persistence: Learned Words */
  loadLearnedWords() {
    try {
      const saved = localStorage.getItem('vw_learned_words');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveLearnedWords() {
    try {
      localStorage.setItem('vw_learned_words', JSON.stringify(this.learnedWordIds));
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }

  toggleLearnedWord(wordId) {
    const idx = this.learnedWordIds.indexOf(wordId);
    if (idx > -1) {
      this.learnedWordIds.splice(idx, 1);
      this.supabase.toggleWordLearned(wordId, false);
    } else {
      this.learnedWordIds.push(wordId);
      this.supabase.toggleWordLearned(wordId, true);
    }

    this.saveLearnedWords();
    this.updateStatsUI();
    this.renderLevelsGrid();

    // Re-render word cards if in topic view
    if (this.currentTopic) {
      this.wordCardsComp.render();
    }
  }

  /* Persistence: Placement Result */
  loadPlacementResult() {
    try {
      const saved = localStorage.getItem('vw_placement_result');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  }

  savePlacementResult(levelKey, score) {
    this.placementResult = { levelKey, score, date: new Date().toISOString() };
    try {
      localStorage.setItem('vw_placement_result', JSON.stringify(this.placementResult));
    } catch (e) {
      console.error("Local storage error:", e);
    }
    this.updateStatsUI();
  }

  /* Stats UI */
  updateStatsUI() {
    const countBadge = document.getElementById('learned-counter-badge');
    if (countBadge) {
      countBadge.textContent = `${this.learnedWordIds.length} so'z`;
    }
    this.updateSoundButtonUI();
  }

  /* Navigation & Views */
  showView(viewName) {
    const views = ['home', 'topic', 'placement', 'search'];
    views.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) {
        if (v === viewName) {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* Level Filter Tabs */
  renderLevelTabs() {
    const container = document.getElementById('level-nav-tabs');
    if (!container) return;

    const tabs = [
      { key: 'ALL', label: 'Barchasi' },
      { key: 'A1', label: 'A1' },
      { key: 'A2', label: 'A2' },
      { key: 'B1', label: 'B1' },
      { key: 'B2', label: 'B2' },
      { key: 'C1', label: 'C1' }
    ];

    container.innerHTML = tabs.map(t => {
      const isActive = this.activeFilterLevel === t.key;
      return `
        <button 
          onclick="window.filterByLevel('${t.key}')"
          class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${isActive ? 'bg-sky-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800'}"
        >
          ${t.label}
        </button>
      `;
    }).join('');
  }

  filterByLevel(levelKey) {
    this.activeFilterLevel = levelKey;
    this.renderLevelTabs();
    this.renderLevelsGrid();
  }

  renderLevelsGrid() {
    const container = document.getElementById('levels-container');
    if (!container) return;

    const levelKeys = Object.keys(this.vocabData);
    const filteredKeys = this.activeFilterLevel === 'ALL' ? levelKeys : [this.activeFilterLevel];

    const levelGradients = {
      A1: { 
        bg: 'bg-emerald-50/60 dark:bg-emerald-950/15', 
        border: 'border-emerald-200/90 dark:border-emerald-500/30', 
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/40' 
      },
      A2: { 
        bg: 'bg-sky-50/60 dark:bg-sky-950/15', 
        border: 'border-sky-200/90 dark:border-sky-500/30', 
        badge: 'bg-sky-100 text-sky-800 border-sky-300 dark:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/40' 
      },
      B1: { 
        bg: 'bg-amber-50/60 dark:bg-amber-950/15', 
        border: 'border-amber-200/90 dark:border-amber-500/30', 
        badge: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40' 
      },
      B2: { 
        bg: 'bg-indigo-50/60 dark:bg-indigo-950/15', 
        border: 'border-indigo-200/90 dark:border-indigo-500/30', 
        badge: 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/40' 
      },
      C1: { 
        bg: 'bg-rose-50/60 dark:bg-rose-950/15', 
        border: 'border-rose-200/90 dark:border-rose-500/30', 
        badge: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-500/20 dark:text-rose-300 dark:border-rose-500/40' 
      }
    };

    container.innerHTML = filteredKeys.map(key => {
      const lvl = this.vocabData[key];
      const style = levelGradients[key] || levelGradients.A1;

      // Count learned words in this level
      let totalWordsInLevel = 0;
      let learnedInLevel = 0;

      lvl.topics.forEach(t => {
        t.words.forEach(w => {
          totalWordsInLevel++;
          if (this.learnedWordIds.includes(w.id)) learnedInLevel++;
        });
      });

      const levelProgressPct = totalWordsInLevel > 0 ? Math.round((learnedInLevel / totalWordsInLevel) * 100) : 0;

      const topicsHtml = lvl.topics.map(topic => {
        let topicLearnedCount = topic.words.filter(w => this.learnedWordIds.includes(w.id)).length;
        const topicProgressPct = topic.words.length > 0 ? Math.round((topicLearnedCount / topic.words.length) * 100) : 0;
        const unitNumStr = topic.unitNumber ? `Unit ${String(topic.unitNumber).padStart(2, '0')}` : 'Unit';

        return `
          <div class="glass-card rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-700/60 bg-white/95 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800/80 hover:border-sky-400 dark:hover:border-slate-500 transition flex flex-col md:flex-row md:items-center justify-between gap-4 group shadow-xs hover:shadow-md">
            <!-- Left Info & Badges -->
            <div class="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
              <div class="w-11 h-11 rounded-xl bg-gradient-to-tr ${topic.color} flex items-center justify-center text-white shadow-md shrink-0">
                <i class="fa-solid ${topic.icon} text-lg"></i>
              </div>

              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-center gap-2 mb-1.5">
                  <span class="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-black tracking-wider bg-sky-50 text-sky-700 border border-sky-200 dark:bg-slate-700/90 dark:text-sky-300 dark:border-slate-600/70">
                    ${unitNumStr}
                  </span>
                  <span class="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                    ${topic.category || 'Mavzu'}
                  </span>
                  <span class="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    <i class="fa-solid fa-list-check text-sky-600 dark:text-sky-400 mr-1"></i>${topic.words.length} ta so'z
                  </span>
                </div>

                <h4 class="text-base sm:text-lg font-bold text-slate-800 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-300 transition truncate">${topic.title}</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">${topic.cambridge_source || "Cambridge English Vocabulary in Use | 3 tadan misol gap va IPA talaffuz"}</p>
              </div>
            </div>

            <!-- Middle Progress -->
            <div class="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1.5 md:w-44 shrink-0 bg-slate-50 dark:bg-slate-900/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border border-slate-200/80 dark:border-slate-800/60 sm:border-0">
              <div class="flex items-center gap-2 text-xs">
                <span class="text-slate-500 dark:text-slate-400 text-[11px]">O'zlashtirish:</span>
                <span class="font-bold ${topicLearnedCount === topic.words.length && topic.words.length > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200'}">${topicLearnedCount} / ${topic.words.length}</span>
              </div>
              <div class="w-24 sm:w-full bg-slate-200 dark:bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-1.5 transition-all duration-300" style="width: ${topicProgressPct}%"></div>
              </div>
            </div>

            <!-- Right Actions -->
            <div class="flex items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t border-slate-200/80 dark:border-slate-700/40 md:border-t-0">
              <button 
                onclick="window.openTopic('${key}', '${topic.id}')"
                class="flex-1 md:flex-initial py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 dark:bg-slate-700/90 dark:hover:bg-slate-600 dark:text-white dark:border-transparent text-xs font-semibold flex items-center justify-center gap-2 transition active:scale-95 shadow-xs"
              >
                <i class="fa-solid fa-book-open text-sky-600 dark:text-sky-400"></i>
                <span>O'rganish</span>
              </button>

              <button 
                onclick="window.quickStartTopicQuiz('${key}', '${topic.id}')"
                class="flex-1 md:flex-initial py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-md shadow-sky-500/20 active:scale-95"
              >
                <i class="fa-solid fa-circle-question"></i>
                <span>Quiz</span>
              </button>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="rounded-3xl border ${style.border} ${style.bg} p-6 sm:p-8 space-y-6 shadow-sm transition" id="level-block-${key}">
          <!-- Level Header Info -->
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-3">
                <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">${lvl.levelName}</h3>
                <span class="px-3 py-1 rounded-full text-xs font-bold border ${style.badge}">
                  ${lvl.badge}
                </span>
                <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-white text-sky-700 border border-sky-200 dark:bg-slate-800 dark:text-sky-300 dark:border-slate-700 shadow-xs">
                  10 ta Unit
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">${lvl.description}</p>
            </div>

            <div class="flex items-center gap-4 bg-white/90 dark:bg-slate-900/80 px-4 py-2.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <div>
                <span class="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-semibold">Daraja progressi</span>
                <span class="text-sm font-bold text-slate-800 dark:text-white">${learnedInLevel} / ${totalWordsInLevel} so'z (${levelProgressPct}%)</span>
              </div>
              <div class="w-16 bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-200 dark:border-slate-700">
                <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-2" style="width: ${levelProgressPct}%"></div>
              </div>
            </div>
          </div>

          <!-- Level's Topics Sequential List -->
          <div class="flex flex-col gap-3">
            ${topicsHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  /* Open Topic for Study */
  openTopic(levelKey, topicId) {
    const level = this.vocabData[levelKey];
    if (!level) return;

    const topic = level.topics.find(t => t.id === topicId);
    if (!topic) return;

    this.currentLevelKey = levelKey;
    this.currentTopic = topic;

    // Update Topic View Header & Breadcrumbs
    const bcLevel = document.getElementById('topic-breadcrumb-level');
    const bcTitle = document.getElementById('topic-breadcrumb-title');
    const headerTitle = document.getElementById('topic-header-title');
    const headerBadge = document.getElementById('topic-header-badge');

    if (bcLevel) bcLevel.textContent = `${levelKey} Darajasi`;
    if (bcTitle) bcTitle.textContent = topic.title;
    if (headerTitle) headerTitle.textContent = topic.title;
    if (headerBadge) {
      headerBadge.textContent = level.badge;
      const levelColors = {
        A1: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30',
        A2: 'bg-sky-100 text-sky-800 border-sky-300 dark:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/30',
        B1: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30',
        B2: 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30',
        C1: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-500/20 dark:text-rose-300 dark:border-rose-500/30'
      };
      headerBadge.className = `px-3 py-1 rounded-full text-xs font-bold border ${levelColors[levelKey] || levelColors.A1}`;
    }

    // Pass to component
    this.wordCardsComp.setTopic(topic);
    this.switchWordViewMode('list');

    this.showView('topic');
  }

  switchWordViewMode(mode) {
    this.viewMode = mode;
    const btnList = document.getElementById('mode-btn-list');
    const btnFlashcard = document.getElementById('mode-btn-flashcard');

    if (mode === 'list') {
      if (btnList) btnList.className = 'px-3.5 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 bg-sky-500 text-white shadow-xs';
      if (btnFlashcard) btnFlashcard.className = 'px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1.5';
    } else {
      if (btnList) btnList.className = 'px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1.5';
      if (btnFlashcard) btnFlashcard.className = 'px-3.5 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 bg-indigo-600 text-white shadow-xs';
    }

    this.wordCardsComp.setViewMode(mode);
  }

  /* Quizzes */
  startCurrentTopicQuiz() {
    if (!this.currentTopic) return;
    const levelWords = this.getAllWordsInLevel(this.currentLevelKey);
    this.quizModalComp.openQuiz(this.currentTopic, levelWords);
  }

  quickStartTopicQuiz(levelKey, topicId) {
    const level = this.vocabData[levelKey];
    if (!level) return;
    const topic = level.topics.find(t => t.id === topicId);
    if (!topic) return;

    this.currentLevelKey = levelKey;
    this.currentTopic = topic;
    const levelWords = this.getAllWordsInLevel(levelKey);
    this.quizModalComp.openQuiz(topic, levelWords);
  }

  getAllWordsInLevel(levelKey) {
    const level = this.vocabData[levelKey];
    if (!level) return [];
    let words = [];
    level.topics.forEach(t => {
      words = words.concat(t.words);
    });
    return words;
  }

  /* Placement Test */
  startPlacementTest() {
    this.showView('placement');
    this.placementTestComp.startTest();
  }

  /* Global Search */
  performSearch(query) {
    query = query.trim().toLowerCase();
    if (!query) {
      this.showView('home');
      return;
    }

    const resultsSummary = document.getElementById('search-query-summary');
    const resultsContainer = document.getElementById('search-results-container');
    if (resultsSummary) resultsSummary.textContent = `Qidiruv so'zi: "${query}"`;

    let matches = [];
    Object.keys(this.vocabData).forEach(levelKey => {
      const level = this.vocabData[levelKey];
      level.topics.forEach(topic => {
        topic.words.forEach(w => {
          const matchWord = w.word.toLowerCase().includes(query);
          const matchUzbek = w.uzbek.toLowerCase().includes(query);
          const matchDef = w.definition.toLowerCase().includes(query);

          if (matchWord || matchUzbek || matchDef) {
            matches.push({ word: w, levelKey, topic });
          }
        });
      });
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="glass-card rounded-2xl p-10 text-center space-y-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 shadow-xs">
          <i class="fa-solid fa-magnifying-glass text-3xl text-slate-400"></i>
          <p class="text-base font-semibold text-slate-700 dark:text-slate-300">"${query}" bo'yicha hech qanday so'z topilmadi.</p>
          <p class="text-xs text-slate-500">Iltimos, boshqa so'z bilan qidirib ko'ring yoki bosh sahifadagi mavzularni ko'zdan kechiring.</p>
        </div>
      `;
    } else {
      resultsContainer.innerHTML = matches.map(({ word, levelKey, topic }) => `
        <div class="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs hover:shadow-sm">
          <div class="space-y-1">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-700 border border-sky-200 dark:bg-sky-500/20 dark:text-sky-300 dark:border-transparent">${levelKey}</span>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">${word.word}</h3>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">${word.phonetic}</span>
            </div>
            <p class="text-emerald-700 dark:text-emerald-300 font-semibold text-sm">${word.uzbek}</p>
            <p class="text-slate-600 dark:text-slate-300 text-xs">${word.definition}</p>
          </div>

          <div class="flex items-center gap-2 shrink-0">
            <button 
              onclick="window.speakWord('${word.word}', this)" 
              class="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-sky-500 hover:text-white dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-sky-500 transition flex items-center justify-center"
              title="Talaffuzni eshitish"
            >
              <i class="fa-solid fa-volume-high text-xs"></i>
            </button>
            <button 
              onclick="window.openTopic('${levelKey}', '${topic.id}')" 
              class="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs"
            >
              <span>${topic.title} mavzusiga o'tish</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>
      `).join('');
    }

    this.showView('search');
  }

  setupEventListeners() {
    const globalInput = document.getElementById('global-search-input');
    const mobileInput = document.getElementById('mobile-search-input');

    const handleSearchInput = (e) => {
      if (e.key === 'Enter' || e.type === 'input') {
        if (e.target.value.trim().length >= 2) {
          this.performSearch(e.target.value);
        } else if (e.target.value.trim().length === 0) {
          this.showView('home');
        }
      }
    };

    if (globalInput) {
      globalInput.addEventListener('input', handleSearchInput);
    }
    if (mobileInput) {
      mobileInput.addEventListener('input', handleSearchInput);
    }
  }

  setupGlobalHandlers() {
    // Expose handlers to window for HTML onclick attributes
    window.showHomeView = () => this.showView('home');
    window.openTopic = (lvl, id) => this.openTopic(lvl, id);
    window.filterByLevel = (key) => this.filterByLevel(key);
    window.switchWordViewMode = (mode) => this.switchWordViewMode(mode);
    window.toggleSoundEffects = () => this.toggleSound();
    window.toggleTheme = () => this.toggleTheme();
    
    window.speakWord = (word, btn) => this.wordCardsComp.speak(word, btn);
    window.toggleLearnedWord = (id) => this.toggleLearnedWord(id);
    window.nextFlashcard = () => this.wordCardsComp.nextFlashcard();
    window.prevFlashcard = () => this.wordCardsComp.prevFlashcard();

    window.startCurrentTopicQuiz = () => this.startCurrentTopicQuiz();
    window.quickStartTopicQuiz = (lvl, id) => this.quickStartTopicQuiz(lvl, id);
    window.closeQuizModal = () => this.quizModalComp.closeModal();
    window.selectQuizOption = (idx, text) => this.quizModalComp.handleOptionSelect(idx, text);
    window.nextQuizQuestion = () => this.quizModalComp.nextQuestion();
    window.restartTopicQuiz = () => this.startCurrentTopicQuiz();

    window.startPlacementTest = () => this.startPlacementTest();
    window.selectPlacementOption = (idx) => this.placementTestComp.selectOption(idx);
    window.submitPlacementAnswer = () => this.placementTestComp.submitAnswer();
    window.selectLevel = (levelKey) => {
      this.filterByLevel(levelKey);
      this.showView('home');
      const el = document.getElementById(`level-block-${levelKey}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    window.scrollToLevels = () => {
      const el = document.getElementById('levels-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.app = new VocabularyApp();
});
