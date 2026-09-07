/**
 * Placement Test Component
 * Diagnostic 25-question test for determining the student's CEFR level (A1 to C1).
 */

import { PLACEMENT_QUESTIONS, evaluatePlacementScore } from '../data/placementData.js';

export class PlacementTestComponent {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.options = options;
    this.questions = PLACEMENT_QUESTIONS;
    this.currentIndex = 0;
    this.score = 0;
    this.levelScores = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
    this.selectedOption = null;
    this.isCompleted = false;
  }

  startTest() {
    this.currentIndex = 0;
    this.score = 0;
    this.levelScores = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
    this.selectedOption = null;
    this.isCompleted = false;
    this.render();
  }

  selectOption(index) {
    this.selectedOption = index;
    this.renderQuestionOptions();
  }

  submitAnswer() {
    if (this.selectedOption === null) return;

    const q = this.questions[this.currentIndex];
    const isCorrect = this.selectedOption === q.correct;

    if (isCorrect) {
      this.score++;
      this.levelScores[q.level] = (this.levelScores[q.level] || 0) + 1;
      if (this.options.playChime) this.options.playChime(true);
    } else {
      if (this.options.playChime) this.options.playChime(false);
    }

    this.selectedOption = null;

    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.render();
    } else {
      this.isCompleted = true;
      this.renderResults();
    }
  }

  render() {
    if (!this.container) return;
    if (this.isCompleted) {
      this.renderResults();
      return;
    }

    const q = this.questions[this.currentIndex];
    const total = this.questions.length;
    const progressPct = Math.round(((this.currentIndex + 1) / total) * 100);

    const levelColors = {
      A1: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      A2: "bg-sky-500/20 text-sky-400 border-sky-500/30",
      B1: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      B2: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      C1: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    };

    this.container.innerHTML = `
      <div class="max-w-3xl mx-auto space-y-6">
        <!-- Back and info header -->
        <div class="flex items-center justify-between">
          <button 
            onclick="window.showHomeView()" 
            class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-semibold flex items-center gap-2 transition"
          >
            <i class="fa-solid fa-arrow-left"></i> Bosh sahifaga qaytish
          </button>

          <span class="text-xs text-slate-400">
            Savol: <strong class="text-white text-sm">${this.currentIndex + 1}</strong> / ${total}
          </span>
        </div>

        <!-- Progress bar -->
        <div class="space-y-1.5">
          <div class="flex justify-between text-xs text-slate-400">
            <span>Diagnostik test jarayoni</span>
            <span class="text-sky-400 font-bold">${progressPct}%</span>
          </div>
          <div class="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700">
            <div class="bg-gradient-to-r from-teal-500 via-sky-500 to-indigo-500 h-2.5 transition-all duration-300" style="width: ${progressPct}%"></div>
          </div>
        </div>

        <!-- Test Question Card -->
        <div class="glass-card rounded-3xl p-6 md:p-10 border border-slate-700/80 bg-slate-800/60 shadow-2xl space-y-6">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold border ${levelColors[q.level] || 'bg-slate-700 text-slate-300'} uppercase tracking-wider">
              ${q.level} Savoli
            </span>
            <span class="text-xs text-slate-400 italic">
              <i class="fa-regular fa-clock"></i> Shoshilmasdan o'ylab javob bering
            </span>
          </div>

          <div class="space-y-3">
            <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">${q.instruction}</p>
            <h2 class="text-2xl md:text-3xl font-bold text-white leading-relaxed tracking-tight">
              ${q.question}
            </h2>
          </div>

          <!-- Options Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2" id="placement-options-container">
            <!-- Rendered by renderQuestionOptions -->
          </div>

          <!-- Submit Button -->
          <div class="pt-4 border-t border-slate-700/60 flex items-center justify-between">
            <span class="text-xs text-slate-400">
              Javobingizni tanlang va davom eting
            </span>

            <button 
              id="placement-submit-btn"
              onclick="window.submitPlacementAnswer()" 
              ${this.selectedOption === null ? 'disabled' : ''}
              class="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-sm flex items-center gap-2 hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-lg shadow-sky-500/20 active:scale-95"
            >
              <span>${this.currentIndex >= total - 1 ? 'Natijani hisoblash' : 'Keyingi savol'}</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    this.renderQuestionOptions();
  }

  renderQuestionOptions() {
    const q = this.questions[this.currentIndex];
    const container = document.getElementById('placement-options-container');
    const submitBtn = document.getElementById('placement-submit-btn');
    if (!container) return;

    container.innerHTML = q.options.map((opt, idx) => {
      const isSelected = this.selectedOption === idx;
      return `
        <button 
          onclick="window.selectPlacementOption(${idx})" 
          class="p-4 rounded-2xl text-left border font-medium flex items-center justify-between transition-all duration-200 active:scale-[0.99] ${isSelected ? 'bg-gradient-to-r from-indigo-600 to-sky-600 border-sky-400 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-200 hover:border-slate-500'}"
        >
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-700 text-slate-300'} text-xs font-bold flex items-center justify-center shrink-0">
              ${['A', 'B', 'C', 'D'][idx]}
            </span>
            <span class="text-base">${opt}</span>
          </div>
          <i class="fa-solid ${isSelected ? 'fa-circle-dot text-white' : 'fa-circle text-slate-600'} text-lg shrink-0"></i>
        </button>
      `;
    }).join('');

    if (submitBtn) {
      submitBtn.disabled = this.selectedOption === null;
    }
  }

  renderResults() {
    const total = this.questions.length;
    const result = evaluatePlacementScore(this.score);

    // Save placement result in options handler
    if (this.options.onSavePlacement) {
      this.options.onSavePlacement(result.level, this.score);
    }

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 }
      });
    }

    this.container.innerHTML = `
      <div class="max-w-2xl mx-auto space-y-6 text-center">
        <!-- Congratulation Card -->
        <div class="glass-card rounded-3xl p-8 md:p-10 border border-slate-700/80 bg-slate-800/70 shadow-2xl space-y-6">
          <div class="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/30">
            <i class="fa-solid fa-graduation-cap text-4xl text-white"></i>
          </div>

          <div class="space-y-2">
            <span class="px-4 py-1.5 rounded-full text-xs font-bold border ${result.badgeClass} uppercase tracking-wider inline-block">
              Aniqlangan CEFR Darajangiz
            </span>
            <h1 class="text-4xl md:text-5xl font-black text-white tracking-tight">
              ${result.title}
            </h1>
            <p class="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed pt-2">
              ${result.description}
            </p>
          </div>

          <!-- Total Score Counter -->
          <div class="bg-slate-900/70 rounded-2xl p-4 border border-slate-800 max-w-md mx-auto flex items-center justify-around">
            <div>
              <span class="text-xs text-slate-400">Umumiy ball:</span>
              <p class="text-2xl font-black text-sky-400">${this.score} <span class="text-sm font-normal text-slate-500">/ ${total}</span></p>
            </div>
            <div class="h-8 w-px bg-slate-800"></div>
            <div>
              <span class="text-xs text-slate-400">Ko'rsatkich:</span>
              <p class="text-2xl font-black text-emerald-400">${Math.round((this.score / total) * 100)}%</p>
            </div>
          </div>

          <!-- Breakdown by CEFR Level -->
          <div class="text-left bg-slate-900/60 rounded-2xl p-5 border border-slate-800 space-y-3">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Darajalar bo'yicha tahlil:</h4>
            
            ${['A1', 'A2', 'B1', 'B2', 'C1'].map(lvl => {
              const lvlScore = this.levelScores[lvl] || 0;
              const lvlPct = Math.round((lvlScore / 5) * 100);
              return `
                <div class="space-y-1">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-bold text-slate-300">${lvl} daraja:</span>
                    <span class="text-slate-400">${lvlScore} / 5 (${lvlPct}%)</span>
                  </div>
                  <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div class="bg-gradient-to-r from-sky-500 to-indigo-500 h-2" style="width: ${lvlPct}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Recommendation Alert -->
          <div class="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-xs text-left flex items-start gap-3">
            <i class="fa-solid fa-lightbulb text-indigo-400 text-base mt-0.5 shrink-0"></i>
            <div>
              <strong class="text-white block mb-0.5">Tavsiya:</strong>
              ${result.recommendation}
            </div>
          </div>

          <!-- Direct action buttons -->
          <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button 
              onclick="window.startPlacementTest()" 
              class="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm flex items-center gap-2 transition"
            >
              <i class="fa-solid fa-rotate-right"></i> Qayta topshirish
            </button>

            <button 
              onclick="window.selectLevel('${result.suggestedLevelKey}')" 
              class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm flex items-center gap-2 hover:opacity-95 transition shadow-lg shadow-emerald-500/25 active:scale-95"
            >
              <span>${result.suggestedLevelKey} darajasidagi so'zlarni boshlash</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
