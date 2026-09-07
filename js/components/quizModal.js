/**
 * Quiz Engine Component
 * Generates interactive Multiple Choice Questions (MCQ) for any given topic.
 * Features instant feedback, sound effects, explanations, and confetti celebrations.
 */

export class QuizModalComponent {
  constructor(modalId, options = {}) {
    this.modal = document.getElementById(modalId);
    this.options = options;
    this.currentTopic = null;
    this.allLevelWords = [];
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.answered = false;
  }

  openQuiz(topic, allLevelWords = []) {
    this.currentTopic = topic;
    this.allLevelWords = allLevelWords.length > 0 ? allLevelWords : topic.words;
    this.currentIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.answered = false;

    this.buildQuestions();
    this.renderQuestion();
    this.showModal();
  }

  buildQuestions() {
    const topicWords = [...this.currentTopic.words];
    const generated = [];

    topicWords.forEach((word, index) => {
      // Pick question type based on index % 3
      const qType = index % 3;
      let questionObj = {};

      if (qType === 0) {
        // Type 1: English word -> Find Uzbek meaning
        const distractors = this.getDistractorUzbeks(word.uzbek, 3);
        const options = this.shuffle([word.uzbek, ...distractors]);
        questionObj = {
          title: `So'zning o'zbekcha to'g'ri tarjimasini toping:`,
          prompt: word.word,
          pos: word.pos,
          phonetic: word.phonetic,
          options: options,
          correctAnswer: word.uzbek,
          explanation: `"${word.word}" so'zi o'zbek tilida "${word.uzbek}" degan ma'noni bildiradi.`
        };
      } else if (qType === 1 && word.examples && word.examples.length > 0) {
        // Type 2: Gapdagi bo'sh joyni to'ldirish
        const example = word.examples[0];
        const regex = new RegExp(`\\b${word.word}\\b`, 'i');
        const blankSentence = example.en.replace(regex, '_______');

        const distractors = this.getDistractorWords(word.word, 3);
        const options = this.shuffle([word.word, ...distractors]);
        questionObj = {
          title: `Gapdagi bo'sh joyga mos keluvchi so'zni tanlang:`,
          prompt: blankSentence,
          pos: 'gap',
          phonetic: '',
          subPrompt: `Tarjimasi: "${example.uz}"`,
          options: options,
          correctAnswer: word.word,
          explanation: `Gapning ma'nosi: "${example.uz}". Bu yerda to'g'ri so'z — "${word.word}".`
        };
      } else {
        // Type 3: Definition -> Find English word
        const distractors = this.getDistractorWords(word.word, 3);
        const options = this.shuffle([word.word, ...distractors]);
        questionObj = {
          title: `Ushbu ta'rif (definition) qaysi so'zga tegishli?`,
          prompt: `"${word.definition}"`,
          pos: 'definition',
          phonetic: '',
          subPrompt: `O'zbekcha ma'nosi: ${word.uzbek}`,
          options: options,
          correctAnswer: word.word,
          explanation: `"${word.definition}" ta'rifi "${word.word}" (${word.uzbek}) so'ziga mos keladi.`
        };
      }

      generated.push(questionObj);
    });

    this.questions = this.shuffle(generated);
  }

  getDistractorUzbeks(correctUzbek, count) {
    const pool = this.allLevelWords
      .map(w => w.uzbek)
      .filter(u => u !== correctUzbek);
    const shuffled = this.shuffle(pool);
    return shuffled.slice(0, count);
  }

  getDistractorWords(correctWord, count) {
    const pool = this.allLevelWords
      .map(w => w.word)
      .filter(w => w.toLowerCase() !== correctWord.toLowerCase());
    const shuffled = this.shuffle(pool);
    return shuffled.slice(0, count);
  }

  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  showModal() {
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  renderQuestion() {
    const q = this.questions[this.currentIndex];
    const total = this.questions.length;
    const progressPct = ((this.currentIndex + 1) / total) * 100;

    const modalContent = this.modal.querySelector('.modal-content-box');
    if (!modalContent) return;

    this.answered = false;

    modalContent.innerHTML = `
      <div class="p-6 md:p-8 space-y-6">
        <!-- Top Bar: Progress & Close -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg border border-indigo-500/30 uppercase tracking-wider">
              ${this.currentTopic.title} Testi
            </span>
            <span class="text-xs text-slate-400 font-medium">Savol: <strong>${this.currentIndex + 1}</strong> / ${total}</span>
          </div>

          <button onclick="window.closeQuizModal()" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Progress bar -->
        <div class="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
          <div class="bg-gradient-to-r from-indigo-500 to-sky-400 h-2 transition-all duration-300" style="width: ${progressPct}%"></div>
        </div>

        <!-- Question Prompt Area -->
        <div class="bg-slate-900/70 border border-slate-700/80 rounded-2xl p-6 text-center space-y-2">
          <p class="text-xs font-semibold text-sky-400 uppercase tracking-wider">${q.title}</p>
          <h2 class="text-2xl md:text-3xl font-extrabold text-white leading-snug">${q.prompt}</h2>
          ${q.phonetic ? `<p class="text-indigo-400 font-mono text-base">${q.phonetic}</p>` : ''}
          ${q.subPrompt ? `<p class="text-slate-400 text-xs italic mt-1">${q.subPrompt}</p>` : ''}
        </div>

        <!-- 4 Options Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3" id="quiz-options-container">
          ${q.options.map((opt, optIdx) => `
            <button 
              onclick="window.selectQuizOption(${optIdx}, '${opt.replace(/'/g, "\\'")}')"
              class="quiz-option-btn p-4 rounded-xl text-left bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium flex items-center justify-between group active:scale-[0.99]"
              id="opt-btn-${optIdx}"
            >
              <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-lg bg-slate-700/80 group-hover:bg-indigo-600/40 text-xs font-bold flex items-center justify-center text-slate-300 shrink-0">
                  ${['A', 'B', 'C', 'D'][optIdx]}
                </span>
                <span class="text-sm md:text-base leading-snug">${opt}</span>
              </div>
              <i class="fa-regular fa-circle text-slate-500 group-hover:text-indigo-400 shrink-0" id="opt-icon-${optIdx}"></i>
            </button>
          `).join('')}
        </div>

        <!-- Feedback & Explanation (Hidden initially) -->
        <div id="quiz-feedback-box" class="hidden rounded-xl p-4 transition-all duration-300">
          <!-- Filled dynamically in handleOptionSelect -->
        </div>

        <!-- Bottom Action Bar -->
        <div class="flex items-center justify-between pt-2 border-t border-slate-800">
          <span class="text-xs text-slate-400">
            To'g'ri javoblar: <strong class="text-emerald-400">${this.score}</strong>
          </span>

          <button 
            id="quiz-next-btn"
            onclick="window.nextQuizQuestion()" 
            disabled
            class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold text-sm flex items-center gap-2 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-lg shadow-indigo-500/20"
          >
            <span>${this.currentIndex >= total - 1 ? 'Natijani ko\'rish' : 'Keyingi savol'}</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }

  handleOptionSelect(selectedIndex, selectedText) {
    if (this.answered) return;
    this.answered = true;

    const q = this.questions[this.currentIndex];
    const isCorrect = selectedText === q.correctAnswer;

    if (isCorrect) {
      this.score++;
      if (this.options.playChime) this.options.playChime(true);
    } else {
      if (this.options.playChime) this.options.playChime(false);
    }

    this.userAnswers.push({
      question: q.prompt,
      selected: selectedText,
      correct: q.correctAnswer,
      isCorrect: isCorrect,
      explanation: q.explanation
    });

    // Highlight options
    const container = document.getElementById('quiz-options-container');
    const buttons = container.querySelectorAll('.quiz-option-btn');

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      const optText = q.options[idx];
      const icon = document.getElementById(`opt-icon-${idx}`);

      if (optText === q.correctAnswer) {
        btn.classList.add('correct-choice');
        if (icon) icon.className = 'fa-solid fa-circle-check text-white';
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('wrong-choice');
        if (icon) icon.className = 'fa-solid fa-circle-xmark text-white';
      }
    });

    // Show feedback box
    const feedbackBox = document.getElementById('quiz-feedback-box');
    if (feedbackBox) {
      feedbackBox.className = `rounded-xl p-4 border ${isCorrect ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' : 'bg-rose-950/40 border-rose-500/40 text-rose-200'}`;
      feedbackBox.innerHTML = `
        <div class="flex items-start gap-3">
          <i class="fa-solid ${isCorrect ? 'fa-circle-check text-emerald-400' : 'fa-circle-exclamation text-rose-400'} text-xl mt-0.5"></i>
          <div class="space-y-1">
            <h4 class="font-bold text-sm text-white">${isCorrect ? 'Barakalla! To\'g\'ri javob!' : 'Afsuski, noto\'g\'ri!'}</h4>
            <p class="text-xs leading-relaxed opacity-90">${q.explanation}</p>
          </div>
        </div>
      `;
      feedbackBox.classList.remove('hidden');
    }

    // Enable next button
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) nextBtn.disabled = false;
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
    } else {
      this.renderResults();
    }
  }

  renderResults() {
    const total = this.questions.length;
    const percentage = Math.round((this.score / total) * 100);
    const modalContent = this.modal.querySelector('.modal-content-box');
    if (!modalContent) return;

    // Trigger celebration confetti
    if (percentage >= 70 && typeof confetti === 'function') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    let badgeText = "Yaxshi urinish!";
    let badgeClass = "bg-amber-500/20 text-amber-300 border-amber-500/30";
    let iconClass = "fa-star text-amber-400";

    if (percentage >= 80) {
      badgeText = "A'lo natija! Mukammal o'zlashtirdingiz!";
      badgeClass = "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      iconClass = "fa-trophy text-emerald-400";
    } else if (percentage < 50) {
      badgeText = "Mavzuni yana bir bor takrorlashni tavsiya qilamiz.";
      badgeClass = "bg-rose-500/20 text-rose-300 border-rose-500/30";
      iconClass = "fa-rotate-right text-rose-400";
    }

    modalContent.innerHTML = `
      <div class="p-6 md:p-8 space-y-6 text-center">
        <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center shadow-xl shadow-indigo-500/30">
          <i class="fa-solid ${iconClass} text-3xl text-white"></i>
        </div>

        <div class="space-y-2">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border ${badgeClass}">
            ${badgeText}
          </span>
          <h2 class="text-3xl font-extrabold text-white">Test Yakunlandi!</h2>
          <p class="text-slate-400 text-sm">${this.currentTopic.title} bo'yicha testingiz natijasi</p>
        </div>

        <!-- Score Meter -->
        <div class="grid grid-cols-3 gap-3 max-w-sm mx-auto">
          <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <span class="text-xs text-slate-400">To'g'ri</span>
            <p class="text-xl font-bold text-emerald-400">${this.score}</p>
          </div>
          <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <span class="text-xs text-slate-400">Noto'g'ri</span>
            <p class="text-xl font-bold text-rose-400">${total - this.score}</p>
          </div>
          <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <span class="text-xs text-slate-400">Foiz</span>
            <p class="text-xl font-bold text-sky-400">${percentage}%</p>
          </div>
        </div>

        <!-- Answers Review Accordion / Preview -->
        <div class="text-left bg-slate-900/60 rounded-xl p-4 border border-slate-800 max-h-48 overflow-y-auto space-y-2">
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Savollar tahlili:</h4>
          ${this.userAnswers.map((ans, idx) => `
            <div class="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/60">
              <div class="flex items-center gap-2 truncate pr-2">
                <i class="fa-solid ${ans.isCorrect ? 'fa-check text-emerald-400' : 'fa-xmark text-rose-400'}"></i>
                <span class="text-slate-300 truncate">${ans.question}</span>
              </div>
              <span class="${ans.isCorrect ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'} shrink-0">${ans.correct}</span>
            </div>
          `).join('')}
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button 
            onclick="window.restartTopicQuiz()" 
            class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm flex items-center gap-2 transition"
          >
            <i class="fa-solid fa-rotate-right"></i> Qayta topshirish
          </button>
          
          <button 
            onclick="window.closeQuizModal()" 
            class="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition shadow-lg shadow-indigo-500/25"
          >
            <i class="fa-solid fa-check"></i> Mavzuga qaytish
          </button>
        </div>
      </div>
    `;
  }
}
