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
    this.renderLevelTabs();
    this.renderLevelsGrid();
    this.updateStatsUI();
    this.setupEventListeners();
    this.setupGlobalHandlers();
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

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (isCorrect) {
        // High, cheerful two-tone chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880.00, now + 0.1); // A5
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else {
        // Low gentle buzz
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.setValueAtTime(130, now + 0.1);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      }
    } catch (e) {
      console.warn("Audio chime error:", e);
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
      btn.className = 'w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 text-sky-400 flex items-center justify-center transition';
    } else {
      btn.innerHTML = '<i class="fa-solid fa-volume-xmark text-sm"></i>';
      btn.className = 'w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 text-slate-500 flex items-center justify-center transition';
    }
  }

  /* Persistence */
  loadLearnedWords() {
    try {
      const stored = localStorage.getItem('vw_learned_words');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveLearnedWords() {
    try {
      localStorage.setItem('vw_learned_words', JSON.stringify(this.learnedWordIds));
    } catch (e) {}
  }

  toggleLearnedWord(id) {
    if (this.learnedWordIds.includes(id)) {
      this.learnedWordIds = this.learnedWordIds.filter(item => item !== id);
    } else {
      this.learnedWordIds.push(id);
      this.playFeedbackSound(true);
      if (this.supabase) {
        this.supabase.recordLearnedWord(id);
      }
    }
    this.saveLearnedWords();
    this.updateStatsUI();
  }

  loadPlacementResult() {
    try {
      const stored = localStorage.getItem('vw_placement_result');
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  }

  savePlacementResult(level, score) {
    this.placementResult = { level, score, date: new Date().toLocaleDateString('uz-UZ') };
    try {
      localStorage.setItem('vw_placement_result', JSON.stringify(this.placementResult));
    } catch (e) {}
    if (this.supabase) {
      this.supabase.syncStudentProfile({
        current_level: level,
        placement_score: score,
        placement_completed_at: new Date().toISOString()
      });
    }
    this.updateStatsUI();
  }

  updateStatsUI() {
    const counterBadge = document.getElementById('learned-counter-badge');
    if (counterBadge) {
      counterBadge.textContent = `${this.learnedWordIds.length} ta yodlandi`;
    }
    this.updateSoundButtonUI();
  }

  /* UI Navigation & Views */
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
          class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${isActive ? 'bg-sky-500 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'}"
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
      A1: { header: 'from-emerald-500/20 via-teal-900/10 to-transparent', border: 'border-emerald-500/30', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      A2: { header: 'from-sky-500/20 via-blue-900/10 to-transparent', border: 'border-sky-500/30', badge: 'bg-sky-500/20 text-sky-300 border-sky-500/40' },
      B1: { header: 'from-amber-500/20 via-orange-900/10 to-transparent', border: 'border-amber-500/30', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
      B2: { header: 'from-indigo-500/20 via-purple-900/10 to-transparent', border: 'border-indigo-500/30', badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' },
      C1: { header: 'from-rose-500/20 via-pink-900/10 to-transparent', border: 'border-rose-500/30', badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40' }
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
        return `
          <div class="glass-card rounded-2xl p-5 border border-slate-700/60 bg-slate-800/40 hover:bg-slate-800/70 transition flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-tr ${topic.color} flex items-center justify-center text-white shadow-md">
                  <i class="fa-solid ${topic.icon} text-base"></i>
                </div>
                <span class="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  ${topic.words.length} ta so'z
                </span>
              </div>

              <div>
                <h4 class="text-lg font-bold text-white group-hover:text-sky-300 transition">${topic.title}</h4>
                <p class="text-xs text-slate-400 mt-0.5">3 tadan misol gap va talaffuz</p>
              </div>

              <!-- Topic mini progress -->
              <div class="space-y-1 pt-1">
                <div class="flex justify-between text-[11px] text-slate-400">
                  <span>O'zlashtirish:</span>
                  <span class="font-semibold text-emerald-400">${topicLearnedCount} / ${topic.words.length}</span>
                </div>
                <div class="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                  <div class="bg-emerald-500 h-1.5 transition-all duration-300" style="width: ${(topicLearnedCount / topic.words.length) * 100}%"></div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-2 gap-2 mt-5 pt-3 border-t border-slate-700/50">
              <button 
                onclick="window.openTopic('${key}', '${topic.id}')"
                class="py-2 px-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition"
              >
                <i class="fa-solid fa-book-open"></i> O'rganish
              </button>

              <button 
                onclick="window.quickStartTopicQuiz('${key}', '${topic.id}')"
                class="py-2 px-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <i class="fa-solid fa-circle-question"></i> Quiz
              </button>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="rounded-3xl border ${style.border} bg-gradient-to-b ${style.header} p-6 sm:p-8 space-y-6 shadow-xl" id="level-block-${key}">
          <!-- Level Header Info -->
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-3">
                <h3 class="text-2xl sm:text-3xl font-black text-white tracking-tight">${lvl.levelName}</h3>
                <span class="px-3 py-1 rounded-full text-xs font-bold border ${style.badge}">
                  ${lvl.badge}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 max-w-2xl">${lvl.description}</p>
            </div>

            <div class="flex items-center gap-4 bg-slate-900/80 px-4 py-2.5 rounded-2xl border border-slate-800">
              <div>
                <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Daraja progressi</span>
                <span class="text-sm font-bold text-white">${learnedInLevel} / ${totalWordsInLevel} so'z (${levelProgressPct}%)</span>
              </div>
              <div class="w-16 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                <div class="bg-gradient-to-r from-emerald-400 to-teal-400 h-2" style="width: ${levelProgressPct}%"></div>
              </div>
            </div>
          </div>

          <!-- Level's Topics Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      headerBadge.className = `px-3 py-1 rounded-full text-xs font-bold bg-${level.color}-500/20 text-${level.color}-300 border border-${level.color}-500/30`;
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
      if (btnList) btnList.className = 'px-3.5 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 bg-sky-500 text-white shadow';
      if (btnFlashcard) btnFlashcard.className = 'px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition flex items-center gap-1.5';
    } else {
      if (btnList) btnList.className = 'px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition flex items-center gap-1.5';
      if (btnFlashcard) btnFlashcard.className = 'px-3.5 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 bg-indigo-600 text-white shadow';
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
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) {
      this.showView('home');
      return;
    }

    const resultsContainer = document.getElementById('search-results-container');
    const summaryEl = document.getElementById('search-query-summary');
    if (summaryEl) summaryEl.textContent = `Qidiruv so'zi: "${query}"`;

    const matches = [];
    Object.keys(this.vocabData).forEach(lvlKey => {
      const level = this.vocabData[lvlKey];
      level.topics.forEach(topic => {
        topic.words.forEach(word => {
          if (
            word.word.toLowerCase().includes(cleanQuery) ||
            word.uzbek.toLowerCase().includes(cleanQuery) ||
            word.definition.toLowerCase().includes(cleanQuery)
          ) {
            matches.push({ word, levelKey: lvlKey, topic });
          }
        });
      });
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="glass-card rounded-2xl p-10 text-center space-y-3">
          <i class="fa-solid fa-magnifying-glass text-3xl text-slate-500"></i>
          <p class="text-base text-slate-300">"${query}" bo'yicha hech qanday so'z topilmadi.</p>
          <p class="text-xs text-slate-500">Iltimos, boshqa so'z bilan qidirib ko'ring yoki bosh sahifadagi mavzularni ko'zdan kechiring.</p>
        </div>
      `;
    } else {
      resultsContainer.innerHTML = matches.map(({ word, levelKey, topic }) => `
        <div class="glass-card rounded-2xl p-5 border border-slate-700 bg-slate-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">${levelKey}</span>
              <h3 class="text-xl font-bold text-white">${word.word}</h3>
              <span class="text-xs text-slate-400 font-mono">${word.phonetic}</span>
            </div>
            <p class="text-emerald-300 font-semibold text-sm">${word.uzbek}</p>
            <p class="text-slate-300 text-xs">${word.definition}</p>
          </div>

          <div class="flex items-center gap-2 shrink-0">
            <button 
              onclick="window.speakWord('${word.word}', this)" 
              class="w-9 h-9 rounded-xl bg-slate-700 text-slate-200 hover:bg-sky-500 hover:text-white flex items-center justify-center transition"
              title="Talaffuzni eshitish"
            >
              <i class="fa-solid fa-volume-high text-xs"></i>
            </button>
            <button 
              onclick="window.openTopic('${levelKey}', '${topic.id}')" 
              class="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1.5 transition"
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
