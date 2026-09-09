/**
 * Word Cards & Flashcards Component
 * Displays vocabulary with phonetics, audio, Uzbek translation, definition, and 3 example sentences.
 */

export class WordCardsComponent {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.options = options;
    this.currentTopic = null;
    this.words = [];
    this.viewMode = 'list'; // 'list' or 'flashcard'
    this.flashcardIndex = 0;
    this.speechSynth = window.speechSynthesis;
  }

  setTopic(topic) {
    this.currentTopic = topic;
    this.words = topic.words || [];
    this.flashcardIndex = 0;
    this.render();
  }

  setViewMode(mode) {
    this.viewMode = mode;
    this.render();
  }

  speak(word, buttonElement) {
    if (!('speechSynthesis' in window)) {
      alert("Kechirasiz, brauzeringizda ovozli talaffuz funksiyasi qo'llab-quvvatlanmaydi.");
      return;
    }

    this.speechSynth.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1.0;

    if (buttonElement) {
      buttonElement.classList.add('is-speaking');
      utterance.onend = () => buttonElement.classList.remove('is-speaking');
      utterance.onerror = () => buttonElement.classList.remove('is-speaking');
    }

    this.speechSynth.speak(utterance);
  }

  toggleLearned(wordId) {
    if (this.options.onToggleLearned) {
      this.options.onToggleLearned(wordId);
      this.render();
    }
  }

  render() {
    if (!this.container) return;
    if (!this.currentTopic) {
      this.container.innerHTML = '';
      return;
    }

    if (this.viewMode === 'flashcard') {
      this.renderFlashcardView();
    } else {
      this.renderListView();
    }
  }

  renderListView() {
    const learnedIds = this.options.getLearnedIds ? this.options.getLearnedIds() : [];

    const cardsHtml = this.words.map((word, idx) => {
      const isLearned = learnedIds.includes(word.id);
      
      const examplesHtml = word.examples.map((ex, exIdx) => {
        // Highlight word occurrences
        const regex = new RegExp(`(${word.word})`, 'gi');
        const highlightedEn = ex.en.replace(regex, '<span class="highlight-word">$1</span>');

        return `
          <div class="bg-slate-50/90 dark:bg-slate-900/60 rounded-xl p-3 border border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition shadow-xs">
            <div class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-400 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">${exIdx + 1}</span>
              <div class="space-y-1">
                <p class="text-slate-800 dark:text-slate-100 text-sm font-medium leading-relaxed">${highlightedEn}</p>
                <p class="text-slate-500 dark:text-slate-400 text-xs italic leading-relaxed font-light">${ex.uz}</p>
              </div>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/60 bg-white dark:bg-slate-800/50 hover:border-sky-400 dark:hover:border-slate-500 transition-all duration-300 relative group shadow-xs hover:shadow-md" id="word-${word.id}">
          <!-- Header: Word, POS, Phonetics & Action Buttons -->
          <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/80 dark:border-slate-700/50">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-transparent uppercase tracking-wider">${word.pos}</span>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">${word.word}</h3>
              <span class="text-sky-700 dark:text-sky-400 font-mono text-sm tracking-wide bg-sky-50 dark:bg-sky-950/40 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800/40">${word.phonetic}</span>
            </div>

            <div class="flex items-center gap-2">
              <button 
                onclick="window.speakWord('${word.word}', this)" 
                class="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-500 hover:text-white dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:hover:text-white transition flex items-center justify-center shadow-xs active:scale-95"
                title="Talaffuzni tinglash"
              >
                <i class="fa-solid fa-volume-high text-base"></i>
              </button>
              
              <button 
                onclick="window.toggleLearnedWord('${word.id}')" 
                class="px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${isLearned ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/90 dark:bg-slate-700/70 dark:text-slate-300 dark:hover:bg-slate-700 dark:border-transparent'}"
                title="${isLearned ? 'Yodlangan deb belgilangan' : 'Yodlangan deb belgilash'}"
              >
                <i class="fa-solid ${isLearned ? 'fa-circle-check text-white' : 'fa-check'}"></i>
                <span>${isLearned ? 'Yodlandi' : 'Yodlash'}</span>
              </button>
            </div>
          </div>

          <!-- Body: Uzbek Translation & English Definition -->
          <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-emerald-50/90 dark:bg-emerald-950/30 border border-emerald-200/90 dark:border-teal-800/30 rounded-xl p-3.5 shadow-2xs">
              <div class="flex items-center gap-1.5 text-xs text-emerald-800 dark:text-teal-400 font-semibold mb-1">
                <i class="fa-solid fa-language"></i> O'zbekcha tarjimasi:
              </div>
              <p class="text-emerald-950 dark:text-emerald-300 font-bold text-base">${word.uzbek}</p>
            </div>

            <div class="bg-sky-50/90 dark:bg-indigo-950/30 border border-sky-200/90 dark:border-blue-800/30 rounded-xl p-3.5 shadow-2xs">
              <div class="flex items-center gap-1.5 text-xs text-sky-800 dark:text-blue-400 font-semibold mb-1">
                <i class="fa-solid fa-book-open"></i> English Definition:
              </div>
              <p class="text-slate-700 dark:text-blue-200 text-sm leading-relaxed">${word.definition}</p>
            </div>
          </div>

          <!-- Examples Section (3 ta Misol) -->
          <div class="mt-4">
            <div class="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wider">
              <i class="fa-solid fa-quote-left text-sky-600 dark:text-sky-400"></i> Misollar (3 ta gap):
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              ${examplesHtml}
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.container.innerHTML = `
      <div class="space-y-5">
        ${cardsHtml}
      </div>
    `;
  }

  renderFlashcardView() {
    if (this.words.length === 0) {
      this.container.innerHTML = '<div class="text-center text-slate-500 py-10">Bu mavzuda hozircha so\'zlar mavjud emas.</div>';
      return;
    }

    const currentWord = this.words[this.flashcardIndex];
    const total = this.words.length;
    const learnedIds = this.options.getLearnedIds ? this.options.getLearnedIds() : [];
    const isLearned = learnedIds.includes(currentWord.id);

    this.container.innerHTML = `
      <div class="max-w-2xl mx-auto space-y-6">
        <!-- Progress Bar & Mode Header -->
        <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 px-2">
          <span>Kartochka: <strong class="text-slate-900 dark:text-white">${this.flashcardIndex + 1}</strong> / ${total}</span>
          <span>${Math.round(((this.flashcardIndex + 1) / total) * 100)}% yakunlandi</span>
        </div>
        <div class="w-full bg-slate-200 dark:bg-slate-700/60 rounded-full h-2 overflow-hidden">
          <div class="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 transition-all duration-300" style="width: ${((this.flashcardIndex + 1) / total) * 100}%"></div>
        </div>

        <!-- 3D Interactive Flashcard Container -->
        <div class="perspective-1000 h-[380px] cursor-pointer" onclick="this.classList.toggle('is-flipped')">
          <div class="flip-card-inner h-full shadow-lg">
            <!-- Front Face -->
            <div class="flip-card-front glass-card bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 p-8 flex flex-col justify-between items-center text-center">
              <div class="flex items-center justify-between w-full">
                <span class="px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-transparent text-xs font-bold rounded-lg uppercase tracking-wider">${currentWord.pos}</span>
                <span class="text-xs text-sky-600 dark:text-sky-400 flex items-center gap-1.5 animate-pulse">
                  <i class="fa-solid fa-arrows-rotate"></i> Ag'darish uchun bosing
                </span>
              </div>

              <div class="space-y-3 my-auto">
                <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">${currentWord.word}</h2>
                <p class="text-sky-600 dark:text-sky-400 font-mono text-xl">${currentWord.phonetic}</p>
                <p class="text-slate-500 dark:text-slate-400 text-sm pt-2">Ma'nosini eslashga harakat qiling va kartani ag'daring</p>
              </div>

              <div class="flex items-center gap-3">
                <button 
                  onclick="event.stopPropagation(); window.speakWord('${currentWord.word}', this)" 
                  class="px-4 py-2 bg-sky-50 text-sky-700 hover:bg-sky-500 hover:text-white border border-sky-200 dark:bg-sky-500/20 dark:text-sky-400 dark:border-transparent rounded-xl text-sm font-semibold transition flex items-center gap-2"
                >
                  <i class="fa-solid fa-volume-high"></i> Ovozli tinglash
                </button>
              </div>
            </div>

            <!-- Back Face -->
            <div class="flip-card-back glass-card bg-gradient-to-br from-white via-indigo-50/30 to-slate-50 dark:from-slate-900 dark:via-indigo-950/40 dark:to-slate-900 border-2 border-indigo-300 dark:border-indigo-500/40 p-6 flex flex-col justify-between text-left overflow-y-auto">
              <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 pb-3">
                <span class="text-sm font-bold text-sky-700 dark:text-sky-400">${currentWord.word} (${currentWord.pos})</span>
                <span class="text-xs text-indigo-700 dark:text-indigo-300"><i class="fa-solid fa-check-double text-indigo-500"></i> Orqa tomoni</span>
              </div>

              <div class="space-y-3 my-2">
                <div>
                  <span class="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">O'zbekcha:</span>
                  <p class="text-xl font-bold text-emerald-600 dark:text-emerald-400">${currentWord.uzbek}</p>
                </div>
                <div>
                  <span class="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Definition:</span>
                  <p class="text-sm text-slate-700 dark:text-slate-200">${currentWord.definition}</p>
                </div>
                <div>
                  <span class="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Misol:</span>
                  <p class="text-xs text-sky-800 dark:text-sky-200 italic mt-0.5">"${currentWord.examples[0].en}"</p>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">"${currentWord.examples[0].uz}"</p>
                </div>
              </div>

              <div class="pt-2 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                <button 
                  onclick="event.stopPropagation(); window.toggleLearnedWord('${currentWord.id}')"
                  class="px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${isLearned ? 'bg-emerald-500 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 dark:border-transparent'}"
                >
                  <i class="fa-solid fa-check"></i> ${isLearned ? 'Yodlandi' : 'Yodlangan deb belgilash'}
                </button>
                <span class="text-xs text-slate-400">Oldingi yuzaga qaytish uchun bosing</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Controls: Previous, Next, Shuffle -->
        <div class="flex items-center justify-between gap-4 pt-2">
          <button 
            onclick="window.prevFlashcard()" 
            ${this.flashcardIndex === 0 ? 'disabled' : ''}
            class="flex-1 py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-xs"
          >
            <i class="fa-solid fa-arrow-left"></i> Oldingisi
          </button>

          <button 
            onclick="window.nextFlashcard()" 
            ${this.flashcardIndex >= total - 1 ? 'disabled' : ''}
            class="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-md shadow-sky-500/20"
          >
            Keyingisi <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }

  nextFlashcard() {
    if (this.flashcardIndex < this.words.length - 1) {
      this.flashcardIndex++;
      this.render();
    }
  }

  prevFlashcard() {
    if (this.flashcardIndex > 0) {
      this.flashcardIndex--;
      this.render();
    }
  }
}
