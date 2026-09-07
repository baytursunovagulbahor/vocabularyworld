/**
 * Placement Test Dataset for CEFR Levels (A1, A2, B1, B2, C1)
 * 25 Diagnostic Questions (5 questions per level).
 * Evaluates vocabulary, collocations, context comprehension and nuances.
 */

export const PLACEMENT_QUESTIONS = [
  // --- A1 LEVEL (Questions 1 - 5) ---
  {
    id: 1,
    level: "A1",
    instruction: "Bo'sh joyga mos keluvchi to'g'ri so'zni tanlang:",
    question: "I love my mother and father very much. They are wonderful _______.",
    options: ["teachers", "parents", "friends", "drivers"],
    correct: 1,
    explanation: "'Mother and father' birgalikda 'parents' (ota-ona) deyiladi."
  },
  {
    id: 2,
    level: "A1",
    instruction: "Gap ma'nosiga mos so'zni tanlang:",
    question: "This T-shirt is only 2 dollars! It is really _______.",
    options: ["expensive", "heavy", "cheap", "difficult"],
    correct: 2,
    explanation: "Narxi bor-yo'g'i 2 dollar bo'lgan narsa 'cheap' (arzon) hisoblanadi."
  },
  {
    id: 3,
    level: "A1",
    instruction: "So'roq gapni to'ldiring:",
    question: "What do you like to do in your free _______?",
    options: ["time", "clock", "hour", "day"],
    correct: 0,
    explanation: "Bo'sh vaqt ingliz tilida barqaror birikma sifatida 'free time' deyiladi."
  },
  {
    id: 4,
    level: "A1",
    instruction: "Bo'sh joyga mos keluvchi so'zni tanlang:",
    question: "We watched a very exciting football _______ in the stadium.",
    options: ["song", "book", "match", "desk"],
    correct: 2,
    explanation: "Stadionda futbol o'yini/musobaqasi tomosha qilinadi, bu 'football match' deb ataladi."
  },
  {
    id: 5,
    level: "A1",
    instruction: "Qarindoshlik nomini aniqlang:",
    question: "My uncle's son is my _______.",
    options: ["brother", "nephew", "cousin", "grandfather"],
    correct: 2,
    explanation: "Tog'a yoki amakining farzandi ingliz tilida 'cousin' (amakivachcha/tog'avachcha) deb ataladi."
  },

  // --- A2 LEVEL (Questions 6 - 10) ---
  {
    id: 6,
    level: "A2",
    instruction: "Bo'sh joyga mos keluvchi so'zni tanlang:",
    question: "You cannot travel to another country without a valid _______.",
    options: ["ticket", "passport", "library", "recipe"],
    correct: 1,
    explanation: "Boshqa davlatga sayohat qilish uchun xalqaro shaxsni tasdiqlovchi hujjat — 'passport' kerak."
  },
  {
    id: 7,
    level: "A2",
    instruction: "Bo'sh joyga mos keluvchi so'zni tanlang:",
    question: "Mathematics is my favorite school _______ because I love numbers.",
    options: ["subject", "homework", "grade", "break"],
    correct: 0,
    explanation: "Maktabda o'qitiladigan fanlar 'school subject' deb nomlanadi."
  },
  {
    id: 8,
    level: "A2",
    instruction: "Salomatlikka oid so'zni toping:",
    question: "I took an aspirin because I had a severe _______.",
    options: ["stomach", "headache", "coughing", "exercise"],
    correct: 1,
    explanation: "Aspirin bosh og'rig'ini ('headache') qoldirish uchun ichiladi."
  },
  {
    id: 9,
    level: "A2",
    instruction: "Sayohat mavzusidagi so'zni aniqlang:",
    question: "We packed our _______ and took a taxi to the airport.",
    options: ["luggage", "furniture", "subjects", "presents"],
    correct: 0,
    explanation: "Aeroportga ketishdan oldin yig'iladigan chamadon va sumkalar 'luggage' (yuk/bagaj) deyiladi."
  },
  {
    id: 10,
    level: "A2",
    instruction: "To'g'ri so'zni tanlang:",
    question: "Doing regular morning _______ keeps you energized and healthy.",
    options: ["exam", "exercise", "degree", "disease"],
    correct: 1,
    explanation: "Ertalabki jismoniy mashqlar 'morning exercise' deb yuritiladi."
  },

  // --- B1 LEVEL (Questions 11 - 15) ---
  {
    id: 11,
    level: "B1",
    instruction: "Texnologiyaga oid so'zni toping:",
    question: "You can _______ this document directly to your smartphone.",
    options: ["download", "expire", "pollute", "recycle"],
    correct: 0,
    explanation: "Faylni internetdan telefonga ko'chirib olish 'download' (yuklab olmoq) deb ataladi."
  },
  {
    id: 12,
    level: "B1",
    instruction: "Ekologiyaga oid so'zni tanlang:",
    question: "Cars and heavy factories are the main causes of air _______ in urban cities.",
    options: ["protection", "connection", "pollution", "wildlife"],
    correct: 2,
    explanation: "Zavod va mashinalar havoning ifloslanishiga — 'air pollution'ga sabab bo'ladi."
  },
  {
    id: 13,
    level: "B1",
    instruction: "Kasbiy so'zni aniqlang:",
    question: "We stayed late in the office because the project _______ was tomorrow.",
    options: ["salary", "deadline", "ambition", "colleague"],
    correct: 1,
    explanation: "Ishni topshirishning oxirgi belgilangan vaqti 'deadline' deyiladi."
  },
  {
    id: 14,
    level: "B1",
    instruction: "Bo'sh joyga mos so'zni tanlang:",
    question: "To save natural resources, we should always _______ plastic and paper waste.",
    options: ["pollute", "destroy", "recycle", "refuse"],
    correct: 2,
    explanation: "Tabiiy resurslarni tejash uchun chiqindilarni 'recycle' (qayta ishlash) zarur."
  },
  {
    id: 15,
    level: "B1",
    instruction: "Ish joyi munosabatlariga oid so'zni tanlang:",
    question: "I often collaborate on marketing tasks with my close _______, Aziz.",
    options: ["tourist", "colleague", "ancestor", "patient"],
    correct: 1,
    explanation: "Ish joyidagi birga ishlovchi xodim yoki hamkor 'colleague' (hamkasb) deb ataladi."
  },

  // --- B2 LEVEL (Questions 16 - 20) ---
  {
    id: 16,
    level: "B2",
    instruction: "Biznesga oid so'zni toping:",
    question: "A daring _______ launched a green energy startup with huge risk and vision.",
    options: ["colleague", "entrepreneur", "applicant", "passenger"],
    correct: 1,
    explanation: "Tavakkal qilib yangi biznes va startap ochadigan shaxs 'entrepreneur' (tadbirkor) deb ataladi."
  },
  {
    id: 17,
    level: "B2",
    instruction: "Psixologiyaga oid so'zni toping:",
    question: "Showing genuine _______ helps counselors understand the inner pain of their clients.",
    options: ["empathy", "revenue", "breakthrough", "strategy"],
    correct: 0,
    explanation: "Boshqalarning his-tuyg'ularini chuqur his qila olish qobiliyati 'empathy' (empatiya) deyiladi."
  },
  {
    id: 18,
    level: "B2",
    instruction: "Ilmiy so'zni aniqlang:",
    question: "The scientist conducted rigorous lab tests to prove her new _______.",
    options: ["subconscious", "hypothesis", "receipt", "discount"],
    correct: 1,
    explanation: "Ilmiy tajribalar orqali tekshiriladigan dastlabki ilmiy faraz 'hypothesis' (gipoteza) deb ataladi."
  },
  {
    id: 19,
    level: "B2",
    instruction: "Barqaror rivojlanishga oid so'zni toping:",
    question: "Wind and solar power are vital parts of _______ energy development.",
    options: ["artificial", "sustainable", "accidental", "subjective"],
    correct: 1,
    explanation: "Tabiatga zarar keltirmaydigan, uzoq muddat barqaror ishlaydigan energiya 'sustainable energy' deyiladi."
  },
  {
    id: 20,
    level: "B2",
    instruction: "Qiyinchilikka bardoshlik ma'nosidagi so'zni tanlang:",
    question: "Her emotional _______ enabled her to bounce back quickly after losing her business.",
    options: ["resilience", "ambiguity", "paradox", "nuance"],
    correct: 0,
    explanation: "Qiyinchiliklar va muvaffaqiyatsizliklardan so'ng tezda tiklanish xususiyati 'resilience' (matonat, chidamlilik) deyiladi."
  },

  // --- C1 LEVEL (Questions 21 - 25) ---
  {
    id: 21,
    level: "C1",
    instruction: "Akademik/Falsafiy so'zni aniqlang:",
    question: "Einstein's theory caused an unprecedented _______ shift in contemporary physics.",
    options: ["paradigm", "nuance", "nephew", "leisure"],
    correct: 0,
    explanation: "Ilmiy sohada tub qarashlar o'zgarishi 'paradigm shift' (paradigma o'zgarishi) deb ataladi."
  },
  {
    id: 22,
    level: "C1",
    instruction: "Badiiy nutqqa oid so'zni toping:",
    question: "The diplomat was extraordinarily _______, articulating complex arguments with clarity.",
    options: ["pervasive", "eloquent", "artificial", "subconscious"],
    correct: 1,
    explanation: "Fikrni juda chiroyli, ravon va ta'sirchan yetkazib beradigan notiq kishi 'eloquent' (fasohatli) deb ataladi."
  },
  {
    id: 23,
    level: "C1",
    instruction: "Tadqiqot terminini aniqlang:",
    question: "Theoretical ideas must be corroborated by solid _______ data before acceptance.",
    options: ["subjective", "empirical", "temporary", "cheap"],
    correct: 1,
    explanation: "Haqiqiy tajriba, kuzatish va dalillarga asoslangan ma'lumotlar 'empirical' (empirik) deb yuritiladi."
  },
  {
    id: 24,
    level: "C1",
    instruction: "Ziddiyatli haqiqatni bildiruvchi so'zni tanlang:",
    question: "It is a bizarre _______ that the wealthier certain societies become, the lonelier citizens report feeling.",
    options: ["methodology", "paradox", "connection", "destination"],
    correct: 1,
    explanation: "Zohiran bir-biriga qarama-qarshi, ammo chuqur haqiqatga ega bo'lgan holat 'paradox' (paradoks) deyiladi."
  },
  {
    id: 25,
    level: "C1",
    instruction: "Keng tarqalganlikni bildiruvchi so'zni tanlang:",
    question: "Digital technology has exerted a _______ influence on virtually every aspect of human life.",
    options: ["pervasive", "articulate", "refuted", "resilient"],
    correct: 0,
    explanation: "Hamma joyga tarqalgan, butun sohaga singib ketgan ta'sir 'pervasive influence' deb ataladi."
  }
];

/**
 * Calculates student's CEFR level and assessment summary based on score
 * @param {number} score - Number of correct answers out of 25
 * @returns {object} - Level recommendation, title, description, badge color
 */
export function evaluatePlacementScore(score) {
  if (score <= 6) {
    return {
      level: "A1",
      title: "A1 - Boshlang'ich (Beginner)",
      color: "emerald",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
      description: "Siz ingliz tilini o'rganishning dastlabki bosqichidasiz. Kundalik eng zarur so'zlar va sodda iboralarni o'zlashtirishdan boshlashingizni tavsiya qilamiz.",
      recommendation: "A1 bo'limidagi 'Family', 'Free time', 'Sport' va 'Shopping' mavzularidagi so'zlarni puxta o'rganing!",
      suggestedLevelKey: "A1"
    };
  } else if (score <= 11) {
    return {
      level: "A2",
      title: "A2 - Elementar (Elementary)",
      color: "sky",
      badgeClass: "bg-sky-100 text-sky-800 border-sky-300",
      description: "Siz asosiy so'zlarni yaxshi bilasiz! Endi sayohat, ta'lim, sog'liq va jamiyat haqida erkinroq suhbatlashish uchun yangi so'zlarni o'rganish vaqti keldi.",
      recommendation: "A2 darajasidagi 'Education', 'Travelling' va 'Health' mavzulari sizning so'z boyligingizni tezda oshiradi.",
      suggestedLevelKey: "A2"
    };
  } else if (score <= 16) {
    return {
      level: "B1",
      title: "B1 - O'rta (Intermediate)",
      color: "amber",
      badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
      description: "Ajoyib! Siz mustaqil muloqot qila olasiz. Endi texnologiya, karyera, atrof-muhit kabi jiddiyroq mavzular bo'yicha so'z boyligingizni boyitish ayni muddao.",
      recommendation: "B1 darajasidagi 'Technology', 'Environment' va 'Career' mavzulariga sho'ng'ing!",
      suggestedLevelKey: "B1"
    };
  } else if (score <= 21) {
    return {
      level: "B2",
      title: "B2 - O'rtadan yuqori (Upper-Intermediate)",
      color: "indigo",
      badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-300",
      description: "Juda yuqori natija! Siz keng qamrovli leksikaga egasiz. Biznes, psixologiya va ilmiy terminologiyani o'zlashtirib, o'z bilimingizni professional darajaga ko'taring.",
      recommendation: "B2 darajasidagi 'Business', 'Psychology' va 'Science' mavzulari sizga mos keladi.",
      suggestedLevelKey: "B2"
    };
  } else {
    return {
      level: "C1",
      title: "C1 - Yetuk (Advanced)",
      color: "rose",
      badgeClass: "bg-rose-100 text-rose-800 border-rose-300",
      description: "Qoyilmaqom natija! Sizning so'z boyligingiz yuqori darajada shakllangan. Akademik, falsafiy va badiiy nuanslarni o'rganib, C1 darajangizni mukammallashtiring.",
      recommendation: "C1 bo'limidagi 'Academic Discourse', 'Advanced Expression' va 'Philosophy' mavzularidagi elita so'zlarni o'zlashtiring!",
      suggestedLevelKey: "C1"
    };
  }
}
