/**
 * Vocabulary World - CEFR Vocabulary Dataset
 * Levels: A1, A2, B1, B2, C1
 * Topics: Family, Education, Sport, Free Time, Travelling, Shopping, Technology, Health, etc.
 * Fully expanded: A1 (10 words/topic), A2 (15 words/topic), B1 (20 words/topic), B2 (25 words/topic), C1 (30 words/topic).
 * Total: 310 CEFR words, 930 rich contextual examples with Uzbek translations.
 */

export const VOCAB_DATA = {
  A1: {
    levelName: "A1 - Boshlang'ich (Beginner)",
    description: "Kundalik hayotda eng ko'p ishlatiladigan sodda va muhim so'zlar",
    color: "emerald",
    badge: "A1 Boshlang'ich",
    topics: [
      {
        id: "a1-family",
        title: "Family (Oila)",
        icon: "fa-people-roof",
        color: "from-emerald-400 to-teal-500",
        words: [
          {
            id: "fam-1",
            word: "Parent",
            pos: "noun",
            phonetic: "/ˈpeərənt/",
            uzbek: "Ota yoki ona (validayn)",
            definition: "A mother or father of a person.",
            examples: [
              { en: "My parents live in a quiet countryside village.", uz: "Mening ota-onam tinch qishloqda yashashadi." },
              { en: "Children need love and support from their parents.", uz: "Bolalarga ota-onalarining mehri va qo'llab-quvvatlashi kerak." },
              { en: "Every parent wants the best future for their child.", uz: "Har bir ota-ona farzandi uchun eng yaxshi kelajakni xohlaydi." }
            ]
          },
          {
            id: "fam-2",
            word: "Sibling",
            pos: "noun",
            phonetic: "/ˈsɪblɪŋ/",
            uzbek: "Aka-uka yoki opa-singil",
            definition: "A brother or sister.",
            examples: [
              { en: "I have two siblings: an older brother and a younger sister.", uz: "Mening ikkita aka-singlim bor: akam va singlim." },
              { en: "Do you get along well with your siblings?", uz: "Aka-ukalaringiz bilan yaxshi chiqishasizmi?" },
              { en: "She has no siblings; she is an only child.", uz: "Uning aka-ukasi yoki opa-singlisi yo'q; u oilada yolg'iz farzand." }
            ]
          },
          {
            id: "fam-3",
            word: "Relative",
            pos: "noun",
            phonetic: "/ˈrelətɪv/",
            uzbek: "Qarindosh",
            definition: "A member of your family.",
            examples: [
              { en: "We invited all our close relatives to the wedding.", uz: "Biz to'yga barcha yaqin qarindoshlarimizni taklif qildik." },
              { en: "She is visiting her relatives in Samarkand this weekend.", uz: "U shu dam olish kunlari Samarqanddagi qarindoshlarini ko'rgani bormoqda." },
              { en: "My uncle is my favorite relative because he tells funny stories.", uz: "Tog'am mening eng sevimli qarindoshim, chunki u qiziq hikoyalar aytadi." }
            ]
          },
          {
            id: "fam-4",
            word: "Grandchild",
            pos: "noun",
            phonetic: "/ˈɡræntʃaɪld/",
            uzbek: "Nabira",
            definition: "A child of your son or daughter.",
            examples: [
              { en: "My grandmother loves playing in the garden with her grandchildren.", uz: "Buvim bog'da nabiralari bilan o'ynashni yaxshi ko'radi." },
              { en: "They have five grandchildren who visit every holiday.", uz: "Ularning har bayramda mehmonga keladigan beshta nabirasi bor." },
              { en: "He bought a bicycle for his oldest grandchild.", uz: "U eng katta nabirasiga velosiped sotib olib berdi." }
            ]
          },
          {
            id: "fam-5",
            word: "Cousin",
            pos: "noun",
            phonetic: "/ˈkʌzn/",
            uzbek: "Amakivachcha / Tog'avachcha / Xolavachcha",
            definition: "The child of your aunt or uncle.",
            examples: [
              { en: "My cousin and I go to the same school.", uz: "Amakivachcham ikkalamiz bir maktabga boramiz." },
              { en: "I received a cheerful letter from my cousin yesterday.", uz: "Kecha tog'avachchamdan quvnoq xat oldim." },
              { en: "We often play football together with our cousins.", uz: "Biz ko'pincha amakivachchalarimiz bilan birga futbol o'ynaymiz." }
            ]
          },
          {
            id: "fam-6",
            word: "Nephew",
            pos: "noun",
            phonetic: "/ˈnefjuː/",
            uzbek: "Jiyan (o'g'il bola)",
            definition: "The son of your brother or sister.",
            examples: [
              { en: "My nephew is only four years old and loves drawing.", uz: "Mening jiyanim bor-yo'g'i to'rt yoshda va rasm chizishni yaxshi ko'radi." },
              { en: "I bought a cool toy car for my nephew's birthday.", uz: "Men jiyanimning tug'ilgan kuniga ajoyib o'yinchoq mashina sotib oldim." },
              { en: "His nephew wants to become a doctor in the future.", uz: "Uning jiyani kelajakda shifokor bo'lishni xohlaydi." }
            ]
          },
          {
            id: "fam-7",
            word: "Aunt",
            pos: "noun",
            phonetic: "/ɑːnt/",
            uzbek: "Xola / Amma",
            definition: "The sister of your father or mother, or the wife of your uncle.",
            examples: [
              { en: "My aunt baked a delicious chocolate cake for us.", uz: "Xolam biz uchun mazali shokoladli tort pishirdi." },
              { en: "She went to visit her aunt in the village.", uz: "U qishloqdagi ammasini ko'rgani bordi." },
              { en: "Aunt Sarah always brings lovely gifts on holidays.", uz: "Sara xola bayramlarda doim ajoyib sovg'alar olib keladi." }
            ]
          },
          {
            id: "fam-8",
            word: "Uncle",
            pos: "noun",
            phonetic: "/ˈʌŋkl/",
            uzbek: "Tog'a / Amaki",
            definition: "The brother of your mother or father, or the husband of your aunt.",
            examples: [
              { en: "My uncle taught me how to ride a bicycle.", uz: "Tog'am menga velosiped haydashni o'rgatgan." },
              { en: "We often go fishing on the river with my uncle.", uz: "Biz ko'pincha amakim bilan daryoga baliq oviga boramiz." },
              { en: "His uncle works as an engineer in a large company.", uz: "Uning tog'asi katta kompaniyada muhandis bo'lib ishlaydi." }
            ]
          },
          {
            id: "fam-9",
            word: "Niece",
            pos: "noun",
            phonetic: "/niːs/",
            uzbek: "Jiyan (qiz bola)",
            definition: "A daughter of your brother or sister.",
            examples: [
              { en: "My niece started going to kindergarten this week.", uz: "Mening jiyanim bu hafta bolalar bog'chasiga borishni boshladi." },
              { en: "I bought a colorful picture book for my niece.", uz: "Men jiyanimga rang-barang rasmli kitob sotib oldim." },
              { en: "Her niece is very talented at singing.", uz: "Uning qiz jiyani qo'shiq aytishga juda qobiliyatli." }
            ]
          },
          {
            id: "fam-10",
            word: "Grandparent",
            pos: "noun",
            phonetic: "/ˈɡrænpeərənt/",
            uzbek: "Bobo yoki buvi (katta ota-ona)",
            definition: "A parent of your father or mother.",
            examples: [
              { en: "Children love visiting their grandparents in summer.", uz: "Bolalar yozda bobo-buvilarinikiga borishni yaxshi ko'rishadi." },
              { en: "My grandparents tell the most interesting historical stories.", uz: "Mening bobo-buvim eng qiziqarli tarixiy hikoyalarni aytib berishadi." },
              { en: "We celebrated our grandparents' fiftieth wedding anniversary.", uz: "Biz bobo-buvimizning ellik yillik oltin to'yini nishonladik." }
            ]
          }
        ]
      },
      {
        id: "a1-freetime",
        title: "Free Time (Bo'sh vaqt)",
        icon: "fa-gamepad",
        color: "from-green-400 to-emerald-600",
        words: [
          {
            id: "free-1",
            word: "Hobby",
            pos: "noun",
            phonetic: "/ˈhɒbi/",
            uzbek: "Sevimli mashg'ulot (xobbi)",
            definition: "An activity done regularly in one's leisure time for pleasure.",
            examples: [
              { en: "Reading books is my favorite hobby in the evening.", uz: "Kechqurun kitob o'qish mening eng sevimli mashg'ulotimdir." },
              { en: "He has many hobbies, including photography and painting.", uz: "Uning ko'plab xobbilari bor, jumladan suratga olish va rasm chizish." },
              { en: "What kind of hobby do you enjoy most?", uz: "Siz qanday mashg'ulotdan eng ko'p zavqlanasiz?" }
            ]
          },
          {
            id: "free-2",
            word: "Leisure",
            pos: "noun",
            phonetic: "/ˈleʒə/",
            uzbek: "Dam olish vaqti, bo'sh vaqt",
            definition: "Time when one is not working or occupied; free time.",
            examples: [
              { en: "Most people like to spend their leisure time with friends.", uz: "Ko'pchilik odamlar bo'sh vaqtlarini do'stlari bilan o'tkazishni yoqtirishadi." },
              { en: "She enjoys walking in the park in her leisure time.", uz: "U bo'sh vaqtida bog'da sayr qilishni yoqtiradi." },
              { en: "There are few leisure activities available in this small town.", uz: "Bu kichik shaharchada hordiq chiqarish mashg'ulotlari juda kam." }
            ]
          },
          {
            id: "free-3",
            word: "Relax",
            pos: "verb",
            phonetic: "/rɪˈlæks/",
            uzbek: "Dam olmoq, xordiq chiqarmoq",
            definition: "To rest and become less active and stressed.",
            examples: [
              { en: "Listening to soft music helps me relax after work.", uz: "Ishdan keyin sokin musiqa tinglash menga dam olishga yordam beradi." },
              { en: "Take a deep breath and try to relax.", uz: "Chuqur nafas oling va bo'shashishga harakat qiling." },
              { en: "On Sundays, we just stay at home and relax.", uz: "Yakshanba kunlari biz shunchaki uyda qolib dam olamiz." }
            ]
          },
          {
            id: "free-4",
            word: "Weekend",
            pos: "noun",
            phonetic: "/ˌwiːkˈend/",
            uzbek: "Hafta oxiri (dam olish kunlari)",
            definition: "Saturday and Sunday, the period between workweeks.",
            examples: [
              { en: "Have a wonderful weekend with your family!", uz: "Oilangiz bilan ajoyib dam olish kunlarini o'tkazing!" },
              { en: "What are your plans for the coming weekend?", uz: "Kelayotgan hafta oxiriga qanday rejalaringiz bor?" },
              { en: "I usually sleep late on the weekend.", uz: "Dam olish kunlari odatda kech turaman." }
            ]
          },
          {
            id: "free-5",
            word: "Cinema",
            pos: "noun",
            phonetic: "/ˈsɪnəmə/",
            uzbek: "Kinoteatr",
            definition: "A theater where films are shown for public entertainment.",
            examples: [
              { en: "Let's go to the cinema tonight to watch a comedy.", uz: "Keling, bugun kechqurun komediya ko'rish uchun kinoteatrga boraylik." },
              { en: "The cinema was completely full of excited people.", uz: "Kinoteatr hayajondagi odamlar bilan to'la edi." },
              { en: "We bought popcorn before entering the cinema hall.", uz: "Kinoteatr zaliga kirishdan oldin popkorn sotib oldik." }
            ]
          },
          {
            id: "free-6",
            word: "Music",
            pos: "noun",
            phonetic: "/ˈmjuːzɪk/",
            uzbek: "Musiqa",
            definition: "Vocal or instrumental sounds combined in such a way as to produce beauty of form.",
            examples: [
              { en: "I always listen to upbeat music while cleaning my room.", uz: "Xonamni tozalayotganda doim sho'x musiqa eshitaman." },
              { en: "Traditional music is very popular in Uzbekistan.", uz: "O'zbekistonda milliy musiqa juda mashhur." },
              { en: "Learning to play music takes time and patience.", uz: "Musiqa chalishni o'rganish vaqt va sabr talab qiladi." }
            ]
          },
          {
            id: "free-7",
            word: "Guitar",
            pos: "noun",
            phonetic: "/ɡɪˈtɑː/",
            uzbek: "Gitara",
            definition: "A musical instrument with strings played with the fingers or a pick.",
            examples: [
              { en: "He plays the acoustic guitar very well.", uz: "U akustik gitarani juda yaxshi chaladi." },
              { en: "I want to buy a new guitar next month.", uz: "Men kelasi oy yangi gitara sotib olmoqchiman." },
              { en: "They sang songs around the campfire with a guitar.", uz: "Ular gulxan atrofida gitara bilan qo'shiqlar kuylashdi." }
            ]
          },
          {
            id: "free-8",
            word: "Picnic",
            pos: "noun",
            phonetic: "/ˈpɪknɪk/",
            uzbek: "Piknik, ochiq havoda dam olish",
            definition: "An occasion when a packed meal is eaten outdoors in a park or countryside.",
            examples: [
              { en: "We had a sunny picnic in the central park on Saturday.", uz: "Shanba kuni markaziy bog'da quyoshli piknik qildik." },
              { en: "Pack some sandwiches and fruit for the family picnic.", uz: "Oilaviy piknik uchun sendvichlar va mevalar oling." },
              { en: "A picnic is a great way to enjoy nature with friends.", uz: "Piknik do'stlar bilan tabiatdan bahramand bo'lishning ajoyib usuli." }
            ]
          },
          {
            id: "free-9",
            word: "Dance",
            pos: "verb",
            phonetic: "/dɑːns/",
            uzbek: "Raqsga tushmoq",
            definition: "To move rhythmically to music, typically following a set sequence of steps.",
            examples: [
              { en: "The children love to dance to energetic music.", uz: "Bolalar jo'shqin musiqaga raqsga tushishni yaxshi ko'rishadi." },
              { en: "Would you like to dance with me?", uz: "Men bilan raqsga tushishni xohlaysizmi?" },
              { en: "They danced together throughout the entire wedding party.", uz: "Ular butun to'y davomida birga raqsga tushishdi." }
            ]
          },
          {
            id: "free-10",
            word: "Party",
            pos: "noun",
            phonetic: "/ˈpɑːti/",
            uzbek: "Ziyofat, bayram oqshomi",
            definition: "A social gathering of invited guests, involving eating, drinking, and entertainment.",
            examples: [
              { en: "We are organizing a surprise party for his birthday.", uz: "Biz uning tug'ilgan kuniga kutilmagan bayram oqshomi tashkil qilyapmiz." },
              { en: "Everyone had a lot of fun at yesterday's graduation party.", uz: "Kechagi bitiruv kechasida hamma juda yaxshi vaqt o'tkazdi." },
              { en: "Are you coming to the welcome party this Friday?", uz: "Bu juma kungi kutib olish ziyofatiga kelasizmi?" }
            ]
          }
        ]
      },
      {
        id: "a1-sport",
        title: "Sport (Sport)",
        icon: "fa-volleyball",
        color: "from-teal-400 to-emerald-700",
        words: [
          {
            id: "spt-1",
            word: "Match",
            pos: "noun",
            phonetic: "/mætʃ/",
            uzbek: "Musobaqa, o'yin",
            definition: "A sports competition or game in which two teams or players compete.",
            examples: [
              { en: "We watched an exciting football match yesterday.", uz: "Biz kecha hayajonli futbol o'yinini tomosha qildik." },
              { en: "Our school team won the final match.", uz: "Maktabimiz jamoasi final o'yinida g'alaba qozondi." },
              { en: "The tennis match lasted more than two hours.", uz: "Tennis musobaqasi ikki soatdan ko'proq davom etdi." }
            ]
          },
          {
            id: "spt-2",
            word: "Player",
            pos: "noun",
            phonetic: "/ˈpleɪə/",
            uzbek: "O'yinchi",
            definition: "A person who takes part in a game or sport.",
            examples: [
              { en: "Cristiano Ronaldo is a world-famous football player.", uz: "Krishtianu Ronaldu dunyoga mashhur futbolchi." },
              { en: "Each player gave their best effort during the game.", uz: "O'yin davomida har bir o'yinchi bor kuchini berdi." },
              { en: "She is the fastest player on our basketball team.", uz: "U bizning basketbol jamoamizdagi eng tezkor o'yinchi." }
            ]
          },
          {
            id: "spt-3",
            word: "Winner",
            pos: "noun",
            phonetic: "/ˈwɪnə/",
            uzbek: "G'olib",
            definition: "A person or team that wins a competition.",
            examples: [
              { en: "The winner received a shining gold medal.", uz: "G'olib yaltiroq oltin medal bilan taqdirlandi." },
              { en: "Everyone cheered loudly for the young winner.", uz: "Hamma yosh g'olibni qizg'in olqishladi." },
              { en: "Who was the winner of the 100-meter race?", uz: "100 metrga yugurish musobaqasining g'olibi kim bo'ldi?" }
            ]
          },
          {
            id: "spt-4",
            word: "Team",
            pos: "noun",
            phonetic: "/tiːm/",
            uzbek: "Jamoa",
            definition: "A group of players forming one side in a competitive game.",
            examples: [
              { en: "Our national team played with incredible energy.", uz: "Milliy jamoamiz aql bovar qilmas shijoat bilan o'ynadi." },
              { en: "Good teamwork is the key to winning championships.", uz: "Yaxshi jamoaviy harakat chempionlikni qo'lga kiritishning kalitidir." },
              { en: "There are eleven players in a football team.", uz: "Futbol jamoasida o'n bitta o'yinchi bo'ladi." }
            ]
          },
          {
            id: "spt-5",
            word: "Healthy",
            pos: "adjective",
            phonetic: "/ˈhelθi/",
            uzbek: "Sog'lom",
            definition: "In good physical or mental condition; in good health.",
            examples: [
              { en: "Doing sports every morning keeps your body healthy.", uz: "Har kuni ertalab sport bilan shug'ullanish tanangizni sog'lom saqlaydi." },
              { en: "Eating fresh fruits and vegetables is healthy.", uz: "Yangi meva va sabzavotlarni iste'mol qilish foydali/sog'lomdir." },
              { en: "She lives a very active and healthy lifestyle.", uz: "U juda faol va sog'lom hayot tarzini olib boradi." }
            ]
          },
          {
            id: "spt-6",
            word: "Coach",
            pos: "noun",
            phonetic: "/kəʊtʃ/",
            uzbek: "Murabbiy, trener",
            definition: "A person who trains and instructs athletes or a sports team.",
            examples: [
              { en: "Our football coach gave us great advice before the game.", uz: "Futbol murabbiyimiz o'yindan oldin bizga ajoyib maslahatlar berdi." },
              { en: "He works hard to become a certified swimming coach.", uz: "U sertifikatlangan suzish murabbiyi bo'lish uchun qattiq ishlamoqda." },
              { en: "The coach praised the team for their outstanding teamwork.", uz: "Murabbiy jamoani ajoyib jamoaviy o'yini uchun maqtadi." }
            ]
          },
          {
            id: "spt-7",
            word: "Champion",
            pos: "noun",
            phonetic: "/ˈtʃæmpiən/",
            uzbek: "Chempion, g'olib",
            definition: "A person or team that has defeated all rivals in a competition.",
            examples: [
              { en: "The boxer became the world champion after a tough fight.", uz: "Bokschi qiyin jangdan so'ng jahon chempioni bo'ldi." },
              { en: "Our school team are the city football champions this year.", uz: "Maktabimiz jamoasi bu yil shahar futbol chempioni bo'ldi." },
              { en: "Train like a champion if you want to win gold medals.", uz: "Oltin medallarni yutmoqchi bo'lsangiz, chempiondek mashq qiling." }
            ]
          },
          {
            id: "spt-8",
            word: "Stadium",
            pos: "noun",
            phonetic: "/ˈsteɪdiəm/",
            uzbek: "Stadion",
            definition: "A large sports ground surrounded by tiers of seats for spectators.",
            examples: [
              { en: "Thousands of excited fans gathered at the national stadium.", uz: "Minglab hayajondagi muxlislar milliy stadionda to'planishdi." },
              { en: "The new stadium has modern facilities and green grass.", uz: "Yangi stadion zamonaviy qulayliklar va maysazorga ega." },
              { en: "We bought our tickets early to get good seats in the stadium.", uz: "Stadionda yaxshi joylarni olish uchun chiptalarni ertaroq sotib oldik." }
            ]
          },
          {
            id: "spt-9",
            word: "Score",
            pos: "verb",
            phonetic: "/skɔː/",
            uzbek: "Hisob ochmoq, gol urmoq",
            definition: "To gain a point, goal, or run in a competitive game.",
            examples: [
              { en: "He managed to score the winning goal in the final minute.", uz: "U so'nggi daqiqada g'alaba to'pini kiritishga muvaffaq bo'ldi." },
              { en: "Can you check who scored the first point in the match?", uz: "O'yinda birinchi ochkoni kim olganini tekshirib bera olasizmi?" },
              { en: "She scored twenty points in the basketball championship.", uz: "U basketbol chempionatida yigirmata ochko to'pladi." }
            ]
          },
          {
            id: "spt-10",
            word: "Train",
            pos: "verb",
            phonetic: "/treɪn/",
            uzbek: "Mashq qilmoq, shug'ullanmoq",
            definition: "To practice sports or physical exercises regularly to become fit.",
            examples: [
              { en: "Athletes train every morning to maintain their top condition.", uz: "Sportchilar yuqori sport formasini saqlash uchun har kuni ertalab mashq qilishadi." },
              { en: "I train at the local gym three times every week.", uz: "Men mahalliy sport zalida haftasiga uch marta shug'ullanaman." },
              { en: "She trains hard to qualify for the Olympic Games.", uz: "U Olimpiya o'yinlariga yo'llanma olish uchun qattiq shug'ullanmoqda." }
            ]
          }
        ]
      },
      {
        id: "a1-shopping",
        title: "Shopping (Xaridlar)",
        icon: "fa-bag-shopping",
        color: "from-cyan-500 to-teal-600",
        words: [
          {
            id: "shp-1",
            word: "Cheap",
            pos: "adjective",
            phonetic: "/tʃiːp/",
            uzbek: "Arzon",
            definition: "Costing very little money; not expensive.",
            examples: [
              { en: "This market sells fresh vegetables at a cheap price.", uz: "Bu bozorda yangi sabzavotlar arzon narxda sotiladi." },
              { en: "Public transport in our city is very cheap.", uz: "Bizning shahrimizda jamoat transporti juda arzon." },
              { en: "I bought a cheap notebook for my English class.", uz: "Men ingliz tili darsim uchun arzon daftar sotib oldim." }
            ]
          },
          {
            id: "shp-2",
            word: "Expensive",
            pos: "adjective",
            phonetic: "/ɪkˈspensɪv/",
            uzbek: "Qimmat",
            definition: "Costing a lot of money.",
            examples: [
              { en: "Smartphones from famous brands are quite expensive.", uz: "Mashhur brendlarning smartfonlari ancha qimmat." },
              { en: "Living in the center of the capital is expensive.", uz: "Poytaxt markazida yashash qimmatga tushadi." },
              { en: "That watch is too expensive; I cannot afford it.", uz: "U soat juda qimmat; mening unga qurbim yetmaydi." }
            ]
          },
          {
            id: "shp-3",
            word: "Customer",
            pos: "noun",
            phonetic: "/ˈkʌstəmə/",
            uzbek: "Xaridor, mijoz",
            definition: "A person who buys goods or services from a shop or business.",
            examples: [
              { en: "The shopkeeper greeted each customer with a friendly smile.", uz: "Do'kondor har bir xaridorni samimiy tabassum bilan kutib oldi." },
              { en: "Satisfied customers often return to the same store.", uz: "Mamnun bo'lgan mijozlar tez-tez o'sha do'konga qaytib kelishadi." },
              { en: "There were several customers waiting at the cash desk.", uz: "Kassada bir nechta xaridorlar navbat kutib turishgan edi." }
            ]
          },
          {
            id: "shp-4",
            word: "Discount",
            pos: "noun",
            phonetic: "/ˈdɪskaʊnt/",
            uzbek: "Chegirma",
            definition: "A deduction from the usual cost of something.",
            examples: [
              { en: "Students can get a 20% discount on train tickets.", uz: "Talabalar poyezd chiptalariga 20% chegirma olishlari mumkin." },
              { en: "The clothing store offered huge discounts for New Year.", uz: "Kiyim do'koni Yangi yil munosabati bilan katta chegirmalar e'lon qildi." },
              { en: "Is there any special discount if I pay with cash?", uz: "Agar naqd pul bilan to'lasam, biron bir maxsus chegirma bormi?" }
            ]
          },
          {
            id: "shp-5",
            word: "Receipt",
            pos: "noun",
            phonetic: "/rɪˈsiːt/",
            uzbek: "Chek, kvitansiya",
            definition: "A piece of paper showing that you have paid for goods or services.",
            examples: [
              { en: "Always keep your receipt in case you want to return an item.", uz: "Agar mahsulotni qaytarishni istasangiz, chekni doim saqlab qo'ying." },
              { en: "The cashier handed me the receipt and my change.", uz: "Kassir menga chek va qaytimimni uzatdi." },
              { en: "Could you please give me a receipt for this payment?", uz: "Iltimos, ushbu to'lov uchun menga chek bera olasizmi?" }
            ]
          },
          {
            id: "shp-6",
            word: "Market",
            pos: "noun",
            phonetic: "/ˈmɑːkɪt/",
            uzbek: "Bozor",
            definition: "A regular gathering of people for the purchase and sale of provisions.",
            examples: [
              { en: "We buy fresh vegetables and sweet fruits at the local market.", uz: "Biz mahalliy bozordan yangi sabzavotlar va shirin mevalar sotib olamiz." },
              { en: "The market is always busy on Sunday mornings.", uz: "Yakshanba kunlari ertalab bozor doimo gavjum bo'ladi." },
              { en: "Chorsu Bazaar is one of the oldest markets in Tashkent.", uz: "Chorsu bozori Toshkentdagi eng qadimiy bozorlardan biridir." }
            ]
          },
          {
            id: "shp-7",
            word: "Price",
            pos: "noun",
            phonetic: "/praɪs/",
            uzbek: "Narx, qiymat",
            definition: "The amount of money expected or given in payment for something.",
            examples: [
              { en: "Could you please tell me the price of this warm jacket?", uz: "Iltimos, bu issiq kurtkaning narxini aytib bera olasizmi?" },
              { en: "The store offers high quality products at an affordable price.", uz: "Do'kon yuqori sifatli mahsulotlarni hamyonbop narxda taklif qiladi." },
              { en: "Food prices usually vary depending on the season.", uz: "Oziq-ovqat narxlari odatda mavsumga qarab o'zgaradi." }
            ]
          },
          {
            id: "shp-8",
            word: "Cash",
            pos: "noun",
            phonetic: "/kæʃ/",
            uzbek: "Naqd pul",
            definition: "Money in coins or notes, as distinct from credit cards or checks.",
            examples: [
              { en: "Do you prefer to pay with cash or by bank card?", uz: "Siz naqd pulda yoki bank kartasi orqali to'lashni afzal ko'rasizmi?" },
              { en: "I always keep a little cash in my pocket for emergencies.", uz: "Kutilmagan vaziyatlar uchun cho'ntagimda doim ozroq naqd pul saqlayman." },
              { en: "Some small market stalls only accept cash payments.", uz: "Ba'zi kichik bozor rastalari faqat naqd to'lovlarni qabul qiladi." }
            ]
          },
          {
            id: "shp-9",
            word: "Spend",
            pos: "verb",
            phonetic: "/spend/",
            uzbek: "Pul sarflamoq",
            definition: "To pay out money in buying goods, services, or entertainment.",
            examples: [
              { en: "Try not to spend too much money on unnecessary things.", uz: "Keraksiz narsalarga ortiqcha pul sarflamaslikka harakat qiling." },
              { en: "She spent twenty dollars on new English books.", uz: "U yangi ingliz tili kitoblariga yigirma dollar sarfladi." },
              { en: "Plan your monthly budget wisely so you don't overspend.", uz: "Oylik byudjetingizni oqilona rejalashtiring, ortiqcha sarflab qo'ymang." }
            ]
          },
          {
            id: "shp-10",
            word: "Wallet",
            pos: "noun",
            phonetic: "/ˈwɒlɪt/",
            uzbek: "Hamyon",
            definition: "A pocket-sized folding case for holding paper money and bank cards.",
            examples: [
              { en: "He accidentally left his leather wallet in the taxi.", uz: "U charm hamyonini tasodifan taksida qoldirib ketibdi." },
              { en: "I opened my wallet to take out my student card.", uz: "Talabalik guvohnomamni olish uchun hamyonimni ochdim." },
              { en: "Her wallet is full of discount cards and family photos.", uz: "Uning hamyoni chegirma kartalari va oilaviy suratlar bilan to'la." }
            ]
          }
        ]
      }
    ]
  },
  A2: {
    levelName: "A2 - Elementar (Elementary)",
    description: "O'qish, sayohat va salomatlik kabi amaliy mavzulardagi iboralar",
    color: "sky",
    badge: "A2 Elementar",
    topics: [
      {
        id: "a2-education",
        title: "Education (Ta'lim)",
        icon: "fa-graduation-cap",
        color: "from-sky-400 to-blue-600",
        words: [
          {
            id: "edu-1",
            word: "Subject",
            pos: "noun",
            phonetic: "/ˈsʌbdʒɪkt/",
            uzbek: "Fan, o'quv predmeti",
            definition: "An area of knowledge that is studied in school or college.",
            examples: [
              { en: "Mathematics is my favorite subject because I enjoy solving problems.", uz: "Matematika mening sevimli fanim, chunki masalalar yechishni yoqtiraman." },
              { en: "Students in high school choose several elective subjects.", uz: "Yuqori sinf o'quvchilari bir nechta tanlov fanlarini tanlashadi." },
              { en: "History is a fascinating subject that teaches us about the past.", uz: "Tarix bizga o'tmish haqida o'rgatadigan qiziqarli fan." }
            ]
          },
          {
            id: "edu-2",
            word: "Degree",
            pos: "noun",
            phonetic: "/dɪˈɡriː/",
            uzbek: "Diplom, ilmiy daraja",
            definition: "A qualification given to a student after completing university study.",
            examples: [
              { en: "She has a bachelor's degree in computer science.", uz: "U kompyuter fanlari bo'yicha bakalavr darajasiga (diplomiga) ega." },
              { en: "Getting a university degree opens many career opportunities.", uz: "Universitet diplomini olish ko'plab kasbiy imkoniyatlarni ochadi." },
              { en: "He plans to study abroad to obtain a master's degree.", uz: "U magistrlik darajasini olish uchun chet elda o'qishni rejalashtirmoqda." }
            ]
          },
          {
            id: "edu-3",
            word: "Library",
            pos: "noun",
            phonetic: "/ˈlaɪbrəri/",
            uzbek: "Kutubxona",
            definition: "A building or room containing collections of books and periodicals for reading.",
            examples: [
              { en: "I like to study in the library because it is very quiet.", uz: "Men kutubxonada dars qilishni yoqtiraman, chunki u yer juda tinch." },
              { en: "You can borrow up to three books from the school library.", uz: "Maktab kutubxonasidan uchtagacha kitob qarzga olishingiz mumkin." },
              { en: "The university library provides access to thousands of online journals.", uz: "Universitet kutubxonasi minglab onlayn jurnallardan foydalanish imkonini beradi." }
            ]
          },
          {
            id: "edu-4",
            word: "Homework",
            pos: "noun",
            phonetic: "/ˈhəʊmwɜːk/",
            uzbek: "Uy vazifasi",
            definition: "Schoolwork that a student is given to do at home.",
            examples: [
              { en: "Students must finish their English homework before tomorrow morning.", uz: "Talabalar ingliz tili uy vazifasini ertaga ertalabgacha bajarishlari shart." },
              { en: "Our teacher gives us useful homework assignments every week.", uz: "O'qituvchimiz har hafta bizga foydali uy vazifalari beradi." },
              { en: "I spent three hours finishing my physics homework.", uz: "Fizika uy vazifasini tugatish uchun uch soat vaqt sarfladim." }
            ]
          },
          {
            id: "edu-5",
            word: "Exam",
            pos: "noun",
            phonetic: "/ɪɡˈzæm/",
            uzbek: "Imtihon",
            definition: "A formal test of a person's knowledge or proficiency in a subject.",
            examples: [
              { en: "She studied diligently and passed the final exam with high marks.", uz: "U astoydil o'qidi va yakuniy imtihondan yuqori baholar bilan o'tdi." },
              { en: "The entrance exams will be held in the main university hall.", uz: "Kirish imtihonlari universitetning asosiy zalida o'tkaziladi." },
              { en: "Don't feel anxious; you are well prepared for this exam.", uz: "Xavotir olmang; siz bu imtihonga yaxshi tayyorgarlik ko'rgansiz." }
            ]
          },
          {
            id: "edu-6",
            word: "Scholarship",
            pos: "noun",
            phonetic: "/ˈskɒləʃɪp/",
            uzbek: "Grant, stipendiya",
            definition: "Financial aid awarded to a student to support their academic studies.",
            examples: [
              { en: "She won a full scholarship to study at Oxford University.", uz: "U Oksford universitetida o'qish uchun to'liq grant yutib oldi." },
              { en: "Many students apply for international government scholarships.", uz: "Ko'plab talabalar xalqaro davlat stipendiyalariga hujjat topshirishadi." },
              { en: "His high test scores helped him earn a merit scholarship.", uz: "Uning yuqori test ballari munosib stipendiya olishiga yordam berdi." }
            ]
          },
          {
            id: "edu-7",
            word: "Classmate",
            pos: "noun",
            phonetic: "/ˈklɑːsmeɪt/",
            uzbek: "Sinfdosh, guruhdosh",
            definition: "A fellow member of a class at school, college, or university.",
            examples: [
              { en: "I worked on the physics project together with my classmate.", uz: "Men sinfdoshim bilan fizika loyihasi ustida birga ishladim." },
              { en: "She invited all her former classmates to the reunion party.", uz: "U barcha sobiq sinfdoshlarini uchrashuv kechasiga taklif qildi." },
              { en: "My classmates are friendly and always ready to help each other.", uz: "Guruhdoshlarim samimiy va doim bir-birlariga yordam berishga tayyor." }
            ]
          },
          {
            id: "edu-8",
            word: "Grade",
            pos: "noun",
            phonetic: "/ɡreɪd/",
            uzbek: "Baho, o'zlashtirish darajasi",
            definition: "A mark indicating a student's level of accomplishment in an exam or course.",
            examples: [
              { en: "He was very pleased because he received an 'A' grade in mathematics.", uz: "U matematikadan 'A' a'lo baho olgani uchun juda xursand bo'ldi." },
              { en: "Studying consistently helps you achieve higher grades.", uz: "Doimiy va tartibli o'qish yuqori baholarga erishishga yordam beradi." },
              { en: "The teacher submitted the final semester grades online.", uz: "O'qituvchi yakuniy semestr baholarini onlayn tizimga kiritdi." }
            ]
          },
          {
            id: "edu-9",
            word: "Lecture",
            pos: "noun",
            phonetic: "/ˈlektʃə/",
            uzbek: "Ma'ruza (universitetda)",
            definition: "An educational talk given to students at a college or university.",
            examples: [
              { en: "The professor gave an inspiring lecture on world history.", uz: "Professor jahon tarixi bo'yicha ilhomlantiruvchi ma'ruza qildi." },
              { en: "Students took detailed notes throughout the two-hour lecture.", uz: "Talabalar ikki soatlik ma'ruza davomida batafsil konspekt yozishdi." },
              { en: "Attendance is compulsory for tomorrow's chemistry lecture.", uz: "Ertangi kimyo ma'ruzasiga qatnashish majburiydir." }
            ]
          },
          {
            id: "edu-10",
            word: "Course",
            pos: "noun",
            phonetic: "/kɔːs/",
            uzbek: "Kurs, o'quv kursi",
            definition: "A series of lessons or lectures on a particular subject.",
            examples: [
              { en: "I enrolled in an intensive English language course.", uz: "Men intensiv ingliz tili kursiga yozildim." },
              { en: "This practical course teaches essential computer programming skills.", uz: "Ushbu amaliy kurs dasturlashning asosiy ko'nikmalarini o'rgatadi." },
              { en: "She successfully completed the online graphic design course.", uz: "U onlayn grafik dizayn kursini muvaffaqiyatli yakunladi." }
            ]
          },
          {
            id: "edu-11",
            word: "Diploma",
            pos: "noun",
            phonetic: "/dɪˈpləʊmə/",
            uzbek: "Diplom, kasbiy guvohnoma",
            definition: "A certificate awarded by an educational institution verifying completed studies.",
            examples: [
              { en: "He proudly received his university diploma at graduation.", uz: "U bitiruv marosimida faxr bilan universitet diplomini qabul qilib oldi." },
              { en: "You need a high school diploma to apply for this college program.", uz: "Ushbu kollej dasturiga ariza topshirish uchun maktab diplomi talab qilinadi." },
              { en: "She framed her teaching diploma and hung it on the wall.", uz: "U o'qituvchilik diplomini ramkaga solib devorga ilib qo'ydi." }
            ]
          },
          {
            id: "edu-12",
            word: "Revise",
            pos: "verb",
            phonetic: "/rɪˈvaɪz/",
            uzbek: "Takrorlamoq, qayta ko'rib chiqmoq",
            definition: "To re-read and study work done previously in preparation for an exam.",
            examples: [
              { en: "I must revise all grammar rules before tomorrow's test.", uz: "Ertangi testdan oldin barcha grammatika qoidalarini takrorlab chiqishim shart." },
              { en: "She spends three hours revising her science notes each night.", uz: "U har kecha fan konspektlarini takrorlashga uch soat sarflaydi." },
              { en: "Revising regularly prevents last-minute stress before exams.", uz: "Muntazam takrorlash imtihon oldidagi so'nggi daqiqa hayajonining oldini oladi." }
            ]
          },
          {
            id: "edu-13",
            word: "Campus",
            pos: "noun",
            phonetic: "/ˈkæmpəs/",
            uzbek: "Talabalar shaharchasi, kampus",
            definition: "The grounds and buildings of a university, college, or school.",
            examples: [
              { en: "The university campus has modern dormitories and sports fields.", uz: "Universitet shaharchasida zamonaviy yotoqxonalar va sport maydonchalari bor." },
              { en: "Students love walking through the green campus in spring.", uz: "Talabalar bahorda ko'kalamzor kampus bo'ylab sayr qilishni yaxshi ko'rishadi." },
              { en: "There is a quiet cafe located in the center of the campus.", uz: "Talabalar shaharchasining markazida shinam qahvaxona joylashgan." }
            ]
          },
          {
            id: "edu-14",
            word: "Tutor",
            pos: "noun",
            phonetic: "/ˈtjuːtə/",
            uzbek: "Repetitor, shaxsiy o'qituvchi",
            definition: "A private teacher, typically one who teaches an individual student or small group.",
            examples: [
              { en: "His private tutor helped him understand difficult math equations.", uz: "Uning repetitori unga murakkab matematika tenglamalarini tushunishga ko'maklashdi." },
              { en: "We hired an experienced tutor to improve his IELTS score.", uz: "Uning IELTS ballini ko'tarish uchun tajribali repetitor yolladik." },
              { en: "A good tutor identifies the student's weaknesses and fixes them.", uz: "Yaxshi repetitor o'quvchining zaif tomonlarini aniqlab, ularni bartaraf etadi." }
            ]
          },
          {
            id: "edu-15",
            word: "Knowledge",
            pos: "noun",
            phonetic: "/ˈnɒlɪdʒ/",
            uzbek: "Bilim, ma'lumot",
            definition: "Facts, information, and skills acquired through experience or education.",
            examples: [
              { en: "Reading books is the most reliable way to expand your knowledge.", uz: "Kitob o'qish bilimingizni boyitishning eng ishonchli usulidir." },
              { en: "He has vast practical knowledge of computer networking.", uz: "U kompyuter tarmoqlari bo'yicha ulkan amaliy bilimga ega." },
              { en: "Knowledge gives people confidence and unlocks new opportunities.", uz: "Bilim odamga ishonch bag'ishlaydi va yangi imkoniyatlar eshigini ochadi." }
            ]
          }
        ]
      },
      {
        id: "a2-travelling",
        title: "Travelling (Sayohat)",
        icon: "fa-plane-departure",
        color: "from-blue-400 to-indigo-600",
        words: [
          {
            id: "trv-1",
            word: "Journey",
            pos: "noun",
            phonetic: "/ˈdʒɜːni/",
            uzbek: "Sayohat, uzoq safar",
            definition: "An act of traveling from one place to another.",
            examples: [
              { en: "Have a safe and pleasant journey to Tashkent!", uz: "Toshkentga sayohatingiz bexatar va yoqimli o'tsin!" },
              { en: "The train journey took nearly six hours through scenic mountains.", uz: "Poyezd safari go'zal tog'lar osha qariyb olti soat davom etdi." },
              { en: "Travelling is not just about the destination, but also about the journey.", uz: "Sayohat faqat manzil emas, balki safarning o'zi hamdir." }
            ]
          },
          {
            id: "trv-2",
            word: "Luggage",
            pos: "noun",
            phonetic: "/ˈlʌɡɪdʒ/",
            uzbek: "Yuk, bagaj",
            definition: "Suitcases or other bags in which to pack personal belongings for traveling.",
            examples: [
              { en: "Please make sure you do not leave your luggage unattended.", uz: "Iltimos, yuklaringizni qarovsiz qoldirmasligingizga ishonch hosil qiling." },
              { en: "The airline allows 23 kilograms of checked luggage.", uz: "Aviakompaniya 23 kilogrammgacha ro'yxatdan o'tgan bagajga ruxsat beradi." },
              { en: "He packed light luggage for his weekend city break.", uz: "U dam olish kunidagi qisqa safari uchun yengil yuk yig'di." }
            ]
          },
          {
            id: "trv-3",
            word: "Passport",
            pos: "noun",
            phonetic: "/ˈpɑːspɔːt/",
            uzbek: "Pasport",
            definition: "An official document issued by a government certifying identity and citizenship.",
            examples: [
              { en: "You must show your passport at the border control.", uz: "Chegara nazoratida pasportingizni ko'rsatishingiz shart." },
              { en: "My foreign passport will expire in six months.", uz: "Mening xorijiy pasportimning muddati olti oydan keyin tugaydi." },
              { en: "Keep your passport in a safe zippered pocket while walking.", uz: "Sayr qilayotganda pasportingizni xavfsiz zamokli cho'ntakda saqlang." }
            ]
          },
          {
            id: "trv-4",
            word: "Tourist",
            pos: "noun",
            phonetic: "/ˈtʊərɪst/",
            uzbek: "Sayyoh, turist",
            definition: "A person who is traveling or visiting a place for pleasure.",
            examples: [
              { en: "Thousands of tourists visit historical Samarkand every year.", uz: "Har yili minglab sayyohlar tarixiy Samarqandni ziyorat qilishadi." },
              { en: "The tourist took photos of the ancient minarets.", uz: "Sayyoh qadimiy minoralarni suratga oldi." },
              { en: "Local shops offer handmade souvenirs for foreign tourists.", uz: "Mahalliy do'konlar chet ellik sayyohlar uchun qo'lda yasalgan esdalik sovg'alarini taklif etadi." }
            ]
          },
          {
            id: "trv-5",
            word: "Destination",
            pos: "noun",
            phonetic: "/ˌdestɪˈneɪʃn/",
            uzbek: "Belgilangan manzil",
            definition: "The place to which someone or something is going or being sent.",
            examples: [
              { en: "Bukhara is a popular travel destination in Central Asia.", uz: "Buxoro Markaziy Osiyodagi mashhur sayohat manzilidir." },
              { en: "After a long flight, we finally reached our final destination.", uz: "Uzoq parvozdan so'ng biz nihoyat belgilangan manzilimizga yetib keldik." },
              { en: "What is your dream holiday destination?", uz: "Sizning orzuingizdagi ta'til manzili qayer?" }
            ]
          },
          {
            id: "trv-6",
            word: "Flight",
            pos: "noun",
            phonetic: "/flaɪt/",
            uzbek: "Parvoz, aviareys",
            definition: "A journey made through the air, especially in a passenger airplane.",
            examples: [
              { en: "Our international flight to London took seven hours.", uz: "Londonga xalqaro parvozimiz yetti soat davom etdi." },
              { en: "Please confirm your flight details at least one day before departure.", uz: "Iltimos, jo'nashdan kamida bir kun oldin reys ma'lumotlarini tasdiqlang." },
              { en: "The direct flight from Tashkent to Dubai was very comfortable.", uz: "Toshkentdan Dubayga to'g'ridan-to'g'ri parvoz juda qulay bo'ldi." }
            ]
          },
          {
            id: "trv-7",
            word: "Boarding",
            pos: "noun",
            phonetic: "/ˈbɔːdɪŋ/",
            uzbek: "Samolyotga yoki poyezdga chiqish",
            definition: "The action of getting on or into an aircraft, train, or ship.",
            examples: [
              { en: "Passengers must show their boarding pass before entering the plane.", uz: "Yo'lovchilar samolyotga chiqishdan oldin qo'nish talonini ko'rsatishlari kerak." },
              { en: "Boarding for flight TK370 begins in twenty minutes at gate 4.", uz: "TK370 reysiga chiqish yigirma daqiqadan so'ng 4-chiqish eshigida boshlanadi." },
              { en: "Hurry up, the airline announced final boarding for our flight!", uz: "Tezlashing, aviakompaniya bizning reysimiz uchun oxirgi qo'nishni e'lon qildi!" }
            ]
          },
          {
            id: "trv-8",
            word: "Souvenir",
            pos: "noun",
            phonetic: "/ˌsuːvəˈnɪə/",
            uzbek: "Esdalik sovg'asi",
            definition: "A thing kept as a reminder of a person, place, or memorable trip.",
            examples: [
              { en: "I bought traditional ceramic plates as souvenirs from Bukhara.", uz: "Men Buxorodan esdalik sovg'asi sifatida milliy sopol idishlar sotib oldim." },
              { en: "The shop sells magnets, postcards, and wooden souvenirs.", uz: "Do'kon magnitlar, otkritkalar va yog'och esdalik sovg'alarini sotadi." },
              { en: "Keep this souvenir to always remember our unforgettable trip.", uz: "Unutilmas sayohatimizni doim eslab yurish uchun bu esdalikni saqlang." }
            ]
          },
          {
            id: "trv-9",
            word: "Guide",
            pos: "noun",
            phonetic: "/ɡaɪd/",
            uzbek: "Gid, yo'l boshlovchi",
            definition: "A person who shows the way to others, especially to tourists.",
            examples: [
              { en: "Our tour guide explained the history of the ancient fortress.", uz: "Sayyohlik gidimiz qadimiy qal'aning tarixini tushuntirib berdi." },
              { en: "It is safer to climb mountains with an experienced local guide.", uz: "Tog'larga tajribali mahalliy yo'l boshlovchi bilan chiqish xavfsizroq." },
              { en: "She speaks four foreign languages and works as a cultural guide.", uz: "U to'rtta xorijiy tilni biladi va madaniy yo'l boshlovchi bo'lib ishlaydi." }
            ]
          },
          {
            id: "trv-10",
            word: "Reservation",
            pos: "noun",
            phonetic: "/ˌrezəˈveɪʃn/",
            uzbek: "Band qilish, bron",
            definition: "An arrangement where something such as a room or seat is kept for someone.",
            examples: [
              { en: "I made a reservation for a double room at the seaside hotel.", uz: "Men dengiz bo'yidagi mehmonxonadan ikki kishilik xona band qildim." },
              { en: "Do we need an advance table reservation for this restaurant?", uz: "Ushbu restoran uchun oldindan stol band qilish kerakmi?" },
              { en: "The hotel receptionist quickly confirmed our online reservation.", uz: "Mehmonxona xodimi onlayn buyurtmamizni tezda tasdiqladi." }
            ]
          },
          {
            id: "trv-11",
            word: "Departure",
            pos: "noun",
            phonetic: "/dɪˈpɑːtʃə/",
            uzbek: "Jo'nab ketish, jo'nash",
            definition: "The action of leaving, especially to start an international journey.",
            examples: [
              { en: "The departure board shows which flights are on time.", uz: "Jo'nash tablosida qaysi reyslar o'z vaqtida uchayotgani ko'rsatilgan." },
              { en: "Passengers should arrive two hours prior to scheduled departure.", uz: "Yo'lovchilar rejalashtirilgan jo'nashdan ikki soat oldin yetib kelishlari lozim." },
              { en: "Bad weather caused the sudden departure delay.", uz: "Noqulay ob-havo jo'nashning kutilmaganda kechikishiga sabab bo'ldi." }
            ]
          },
          {
            id: "trv-12",
            word: "Arrival",
            pos: "noun",
            phonetic: "/əˈraɪvl/",
            uzbek: "Yetib kelish, kelish",
            definition: "The act of arriving at a destination after traveling.",
            examples: [
              { en: "We were warmly greeted by our friends upon arrival at the airport.", uz: "Aeroportga yetib kelishimiz bilan do'stlarimiz bizni iliq kutib olishdi." },
              { en: "The train arrival time is estimated at six o'clock in the evening.", uz: "Poyezdning yetib kelish vaqti kechki soat oltiga mo'ljallangan." },
              { en: "Check the arrival terminal on your electronic ticket.", uz: "Elektron chiptangizdagi yetib kelish terminalini tekshiring." }
            ]
          },
          {
            id: "trv-13",
            word: "Explore",
            pos: "verb",
            phonetic: "/ɪkˈsplɔː/",
            uzbek: "Tadqiq qilmoq, yangi joylarni aylanmoq",
            definition: "To travel through an unfamiliar area in order to discover and learn about it.",
            examples: [
              { en: "We rented bicycles to explore the historic streets of Rome.", uz: "Biz Rimning tarixiy ko'chalarini aylanish uchun velosipedlar ijaraga oldik." },
              { en: "Tourists love exploring hidden waterfalls in the mountains.", uz: "Sayyohlar tog'lardagi yashirin sharsharalarni kashf etishni yoqtirishadi." },
              { en: "Take time to explore local markets and try regional food.", uz: "Mahalliy bozorlarni kezishga va mintaqaviy taomlarni tatib ko'rishga vaqt ajrating." }
            ]
          },
          {
            id: "trv-14",
            word: "Hotel",
            pos: "noun",
            phonetic: "/həʊˈtel/",
            uzbek: "Mehmonxona",
            definition: "An establishment providing accommodation, meals, and services for travelers.",
            examples: [
              { en: "We booked a quiet room in a four-star hotel downtown.", uz: "Biz shahar markazidagi to'rt yulduzli mehmonxonadan tinch xona bron qildik." },
              { en: "The hotel offers free high-speed WiFi and tasty buffet breakfast.", uz: "Mehmonxona bepul tezkor WiFi va mazali shved stoli nonushtasini taqdim etadi." },
              { en: "The helpful hotel staff carried our heavy bags to the third floor.", uz: "Xushmuomala mehmonxona xodimlari og'ir sumkalarimizni uchinchi qavatga ko'tarib berishdi." }
            ]
          },
          {
            id: "trv-15",
            word: "Customs",
            pos: "noun",
            phonetic: "/ˈkʌstəmz/",
            uzbek: "Bojxona nazorati",
            definition: "The official department that inspects luggage and collects duties on goods.",
            examples: [
              { en: "It took only ten minutes to pass through international customs.", uz: "Xalqaro bojxona nazoratidan o'tish bor-yo'g'i o'n daqiqa vaqt oldi." },
              { en: "You must declare expensive electronics at airport customs.", uz: "Aeroport bojxonasida qimmatbaho elektron jihozlarni deklaratsiya qilishingiz shart." },
              { en: "Customs officers politely checked our travel documents and luggage.", uz: "Bojxona xodimlari yo'l hujjatlarimiz va yuklarimizni muloyimlik bilan tekshirishdi." }
            ]
          }
        ]
      },
      {
        id: "a2-health",
        title: "Health (Salomatlik)",
        icon: "fa-heart-pulse",
        color: "from-cyan-400 to-blue-700",
        words: [
          {
            id: "hlt-1",
            word: "Headache",
            pos: "noun",
            phonetic: "/ˈhedeɪk/",
            uzbek: "Bosh og'rig'i",
            definition: "A continuous pain in the head.",
            examples: [
              { en: "I have had a bad headache since this morning.", uz: "Ertalabdan beri qattiq bosh og'rig'i meni qiynamoqda." },
              { en: "Drinking plenty of water often helps relieve a mild headache.", uz: "Ko'p suv ichish odatda yengil bosh og'rig'ini qoldirishga yordam beradi." },
              { en: "Looking at computer screens for too long causes headaches.", uz: "Kompyuter ekraniga uzoq vaqt qarash bosh og'rig'iga sabab bo'ladi." }
            ]
          },
          {
            id: "hlt-2",
            word: "Medicine",
            pos: "noun",
            phonetic: "/ˈmedsn/",
            uzbek: "Dori, davo",
            definition: "A substance or preparation used in treating disease or illness.",
            examples: [
              { en: "The doctor prescribed effective medicine for my cough.", uz: "Shifokor yo'talim uchun samarali dori yozib berdi." },
              { en: "Take this medicine twice a day after meals.", uz: "Ushbu dorini kuniga ikki marta ovqatdan so'ng iching." },
              { en: "Keep all medicines out of reach of small children.", uz: "Barcha dorilarni yosh bolalar qo'li yetmaydigan joyda saqlang." }
            ]
          },
          {
            id: "hlt-3",
            word: "Doctor",
            pos: "noun",
            phonetic: "/ˈdɒktə/",
            uzbek: "Shifokor, do'xtir",
            definition: "A person who is qualified to treat people who are ill.",
            examples: [
              { en: "You should see a doctor if your fever doesn't go down.", uz: "Agar isitma tushmasa, shifokorga ko'rinishingiz kerak." },
              { en: "The doctor explained the treatment plan clearly.", uz: "Shifokor davolash rejasini aniq tushuntirib berdi." },
              { en: "My brother decided to become a doctor to help people in need.", uz: "Akam muhtoj insonlarga yordam berish uchun shifokor bo'lishga qaror qildi." }
            ]
          },
          {
            id: "hlt-4",
            word: "Exercise",
            pos: "noun / verb",
            phonetic: "/ˈeksəsaɪz/",
            uzbek: "Jismoniy mashq / Mashq qilmoq",
            definition: "Activity requiring physical effort, carried out to sustain health and fitness.",
            examples: [
              { en: "Regular physical exercise improves both physical and mental health.", uz: "Doimiy jismoniy mashqlar jismoniy va ruhiy salomatlikni yaxshilaydi." },
              { en: "I try to exercise for at least thirty minutes every morning.", uz: "Men har kuni ertalab kamida o'ttiz daqiqa mashq qilishga harakat qilaman." },
              { en: "Swimming is considered an excellent full-body exercise.", uz: "Suzish butun tana uchun ajoyib mashq hisoblanadi." }
            ]
          },
          {
            id: "hlt-5",
            word: "Hospital",
            pos: "noun",
            phonetic: "/ˈhɒspɪtl/",
            uzbek: "Shifoxona, kasalxona",
            definition: "An institution providing medical and surgical treatment and nursing care.",
            examples: [
              { en: "The city opened a modern hospital equipped with advanced technology.", uz: "Shahar zamonaviy texnologiyalar bilan jihozlangan yangi shifoxonani ochdi." },
              { en: "The ambulance rushed the patient straight to the hospital.", uz: "Tez yordam mashinasi bemorni to'g'ridan-to'g'ri kasalxonaga yetkazdi." },
              { en: "She works as a dedicated nurse at the children's hospital.", uz: "U bolalar shifoxonasida jonkuyar hamshira bo'lib ishlaydi." }
            ]
          },
          {
            id: "hlt-6",
            word: "Stomachache",
            pos: "noun",
            phonetic: "/ˈstʌməkeɪk/",
            uzbek: "Qorin og'rig'i",
            definition: "A pain in a person's stomach or abdominal area.",
            examples: [
              { en: "Eating unripe fruit often causes an uncomfortable stomachache.", uz: "Xom mevalarni yeyish ko'pincha yoqimsiz qorin og'rig'iga sabab bo'ladi." },
              { en: "Drink warm chamomile tea to soothe your stomachache.", uz: "Qorin og'rig'ini yengillashtirish uchun iliq moychechak choyini iching." },
              { en: "He stayed home from school because of a severe stomachache.", uz: "U qattiq qorin og'rig'i sababli maktabga bormay uyda qoldi." }
            ]
          },
          {
            id: "hlt-7",
            word: "Fever",
            pos: "noun",
            phonetic: "/ˈfiːvə/",
            uzbek: "Isitma, yuqori harorat",
            definition: "An abnormally high body temperature, usually accompanied by shivering.",
            examples: [
              { en: "The thermometer showed he had a high fever of 39 degrees.", uz: "Termometr uning harorati 39 daraja yuqori isitma ekanini ko'rsatdi." },
              { en: "Drink plenty of warm liquids when recovering from a fever.", uz: "Isitmadan tuzalayotganingizda ko'proq iliq suyuqliklar iching." },
              { en: "Her fever went down after taking the prescribed syrup.", uz: "Buyurilgan siropni ichgandan so'ng uning isitmasi tushdi." }
            ]
          },
          {
            id: "hlt-8",
            word: "Prescription",
            pos: "noun",
            phonetic: "/prɪˈskrɪpʃn/",
            uzbek: "Retsept (dori uchun)",
            definition: "An instruction written by a doctor authorizing a patient to obtain medicine.",
            examples: [
              { en: "You need an official doctor's prescription to purchase this antibiotic.", uz: "Bu antibiotikni xarid qilish uchun shifokorning rasmiy retsepti kerak bo'ladi." },
              { en: "The pharmacist carefully checked the doctor's prescription.", uz: "Dorixona xodimi shifokor retseptini diqqat bilan tekshirdi." },
              { en: "Always follow the medical prescription strictly to recover quickly.", uz: "Tez tuzalish uchun doim shifokor retseptiga qat'iy amal qiling." }
            ]
          },
          {
            id: "hlt-9",
            word: "Nurse",
            pos: "noun",
            phonetic: "/nɜːs/",
            uzbek: "Hamshira",
            definition: "A person trained to care for the sick or infirm, especially in a clinic.",
            examples: [
              { en: "The caring nurse gave the patient an injection gently.", uz: "Mehribon hamshira bemorga sekingina dori ukolini qildi." },
              { en: "Nurses work day and night shifts to ensure patient health.", uz: "Hamshiralar bemorlar salomatligini ta'minlash uchun tunu-kun navbatchilik qilishadi." },
              { en: "The nurse checked his pulse and recorded his blood pressure.", uz: "Hamshira uning pulsini tekshirib, qon bosimini daftarga qayd etdi." }
            ]
          },
          {
            id: "hlt-10",
            word: "Patient",
            pos: "noun",
            phonetic: "/ˈpeɪʃnt/",
            uzbek: "Bemor, davolanuvchi",
            definition: "A person receiving or registered to receive professional medical care.",
            examples: [
              { en: "The doctor examined three patients before lunchtime.", uz: "Shifokor tushlikkacha uchta bemorni ko'rikdan o'tkazdi." },
              { en: "The recovering patient was finally discharged from hospital.", uz: "Sog'ayayotgan bemorga nihoyat kasalxonadan uyiga ruxsat berildi." },
              { en: "Doctors listen attentively to understand every patient's symptoms.", uz: "Shifokorlar har bir bemorning alomatlarini tushunish uchun diqqat bilan tinglaydilar." }
            ]
          },
          {
            id: "hlt-11",
            word: "Symptom",
            pos: "noun",
            phonetic: "/ˈsɪmptəm/",
            uzbek: "Alomat, belgi",
            definition: "A physical or mental sign indicating the presence of a illness.",
            examples: [
              { en: "Coughing and fatigue are common symptoms of the seasonal flu.", uz: "Yo'tal va charchoq mavsumiy grippning eng keng tarqalgan alomatlaridir." },
              { en: "Consult a healthcare specialist if your symptoms persist for days.", uz: "Agar alomatlar bir necha kun davom etsa, mutaxassis shifokorga murojaat qiling." },
              { en: "Loss of appetite can be an early symptom of infection.", uz: "Ishtahaning yo'qolishi infeksiyaning dastlabki belgisi bo'lishi mumkin." }
            ]
          },
          {
            id: "hlt-12",
            word: "Recovery",
            pos: "noun",
            phonetic: "/rɪˈkʌvəri/",
            uzbek: "Sog'ayish, tuzalish",
            definition: "A return to a normal state of health, vitality, or physical strength.",
            examples: [
              { en: "Adequate rest and healthy food speed up your recovery.", uz: "Yetarli dam olish va foydali taomlar sog'ayishingizni tezlashtiradi." },
              { en: "The surgery was successful and the athlete is on the road to recovery.", uz: "Jarrohlik muvaffaqiyatli o'tdi va sportchi tuzalish yo'lida." },
              { en: "We all wish you a rapid and complete recovery.", uz: "Barchamiz sizga tez va to'liq shifo tilaymiz." }
            ]
          },
          {
            id: "hlt-13",
            word: "Vitamin",
            pos: "noun",
            phonetic: "/ˈvɪtəmɪn/",
            uzbek: "Vitamin, darmondori",
            definition: "Essential organic compounds required in small quantities for healthy bodily function.",
            examples: [
              { en: "Fresh oranges and lemons are rich sources of Vitamin C.", uz: "Yangi apelsin va limonlar S vitaminining boy manbaidir." },
              { en: "Taking multivitamin supplements strengthens the body's immune system.", uz: "Polivitamin qo'shimchalarini qabul qilish tananing immunitet tizimini mustahkamlaydi." },
              { en: "Natural sunshine stimulates the production of Vitamin D.", uz: "Tabiiy quyosh nuri D vitamini ishlab chiqarilishini rag'batlantiradi." }
            ]
          },
          {
            id: "hlt-14",
            word: "Bandage",
            pos: "noun",
            phonetic: "/ˈbændɪdʒ/",
            uzbek: "Bog'ich, bint",
            definition: "A strip of fabric used to bind and protect a wound or injury.",
            examples: [
              { en: "The doctor wrapped a sterile bandage around his injured ankle.", uz: "Shifokor uning jarohatlangan to'pig'iga steril bint bog'lab qo'ydi." },
              { en: "Change the clean bandage daily to avoid dangerous wound infections.", uz: "Jarohatga infeksiya tushmasligi uchun toza bog'ichni har kuni almashtiring." },
              { en: "Keep a first aid kit with scissors and bandages in your vehicle.", uz: "Mashinangizda qaychi va bintlar bo'lgan birinchi tibbiy yordam qutisini saqlang." }
            ]
          },
          {
            id: "hlt-15",
            word: "Dentist",
            pos: "noun",
            phonetic: "/ˈdentɪst/",
            uzbek: "Tish shifokori, stomatolog",
            definition: "A doctor qualified to treat diseases and conditions affecting teeth and gums.",
            examples: [
              { en: "You should visit the dentist twice a year for routine checkups.", uz: "Muntazam ko'rik uchun tish shifokoriga yiliga ikki marta borish tavsiya etiladi." },
              { en: "The dentist filled the painful tooth quickly and without pain.", uz: "Stomatolog og'riyotgan tishni tez va og'riqsiz plomba qilib berdi." },
              { en: "Children are taught to brush their teeth properly by the dentist.", uz: "Bolalarga tishlarini to'g'ri yuvishni stomatolog o'rgatadi." }
            ]
          }
        ]
      }
    ]
  },
  B1: {
    levelName: "B1 - O'rta (Intermediate)",
    description: "Texnologiya, atrof-muhit va martabaga oid mustaqil so'zlashuv boyligi",
    color: "amber",
    badge: "B1 O'rta",
    topics: [
      {
        id: "b1-tech",
        title: "Technology (Texnologiya)",
        icon: "fa-microchip",
        color: "from-amber-400 to-orange-500",
        words: [
          {
            id: "tch-1",
            word: "Device",
            pos: "noun",
            phonetic: "/dɪˈvaɪs/",
            uzbek: "Qurilma, uskunacha",
            definition: "An object, machine, or piece of equipment made for a special purpose.",
            examples: [
              { en: "Electronic devices have revolutionized how modern students study.", uz: "Elektron qurilmalar zamonaviy talabalarning o'rganish usulini tubdan o'zgartirdi." },
              { en: "Please switch off all mobile devices during the airplane takeoff.", uz: "Iltimos, samolyot ko'tarilayotgan vaqtda barcha mobil qurilmalarni o'chiring." },
              { en: "Smart devices can be connected to the internet to automate your home.", uz: "Aqlli qurilmalarni uyingizni avtomatlashtirish uchun internetga ulash mumkin." }
            ]
          },
          {
            id: "tch-2",
            word: "Download",
            pos: "verb",
            phonetic: "/ˌdaʊnˈləʊd/",
            uzbek: "Yuklab olmoq (internetdan)",
            definition: "To copy data from one computer system to another, typically over the internet.",
            examples: [
              { en: "You can download this vocabulary app for free on your phone.", uz: "Siz bu lug'at ilovasini telefoningizga bepul yuklab olishingiz mumkin." },
              { en: "I downloaded a collection of English podcasts to listen offline.", uz: "Men internetsiz tinglash uchun ingliz tili podkastlari to'plamini yuklab oldim." },
              { en: "The file was too large and took ten minutes to download.", uz: "Fayl juda katta edi va yuklab olish uchun o'n daqiqa vaqt ketdi." }
            ]
          },
          {
            id: "tch-3",
            word: "Security",
            pos: "noun",
            phonetic: "/sɪˈkjʊərəti/",
            uzbek: "Xavfsizlik",
            definition: "The state of being free from danger, threat, or unauthorized access.",
            examples: [
              { en: "Always use strong passwords to ensure your online account security.", uz: "Onlayn akkauntingiz xavfsizligini ta'minlash uchun har doim murakkab parollardan foydalaning." },
              { en: "Cyber security has become a critical concern for modern businesses.", uz: "Kiberxavfsizlik zamonaviy bizneslar uchun eng muhim masalaga aylandi." },
              { en: "The new software update fixes several important security flaws.", uz: "Dasturiy ta'minotning yangi yangilanishi bir nechta muhim xavfsizlik kamchiliklarini bartaraf etadi." }
            ]
          },
          {
            id: "tch-4",
            word: "Connection",
            pos: "noun",
            phonetic: "/kəˈnekʃn/",
            uzbek: "Ulanish, aloqa",
            definition: "A link between two or more things, particularly telecommunications or computers.",
            examples: [
              { en: "A fast internet connection is essential for video conferencing.", uz: "Tezkor internet aloqasi video konferensiyalar uchun juda muhimdir." },
              { en: "My phone lost connection while I was riding the subway.", uz: "Metroda ketayotganimda telefonimning aloqasi uzilib qoldi." },
              { en: "There is a direct connection between daily practice and fluency.", uz: "Har kungi mashq bilan ravon so'zlashuv o'rtasida to'g'ridan-to'g'ri bog'liqlik bor." }
            ]
          },
          {
            id: "tch-5",
            word: "Application",
            pos: "noun",
            phonetic: "/ˌæplɪˈkeɪʃn/",
            uzbek: "Ilova (dastur) yoki Ariza",
            definition: "A program designed to fulfill a particular purpose; also a formal request.",
            examples: [
              { en: "This mobile application helps learners memorize words with flashcards.", uz: "Ushbu mobil ilova o'quvchilarga so'zlarni fleshkartalar bilan yodlashga yordam beradi." },
              { en: "He submitted his job application to three international firms.", uz: "U o'zining ishga kirish arizasini uchta xalqaro kompaniyaga topshirdi." },
              { en: "The application requires permission to access your microphone.", uz: "Ilova mikrofondan foydalanish uchun ruxsat so'raydi." }
            ]
          },
          {
            id: "tch-6",
            word: "Database",
            pos: "noun",
            phonetic: "/ˈdeɪtəbeɪs/",
            uzbek: "Ma'lumotlar bazasi",
            definition: "A structured set of data held in a computer, especially one accessible in various ways.",
            examples: [
              { en: "Our customer database stores contact details and order histories securely.", uz: "Mijozlar bazamiz aloqa ma'lumotlari va buyurtmalar tarixini xavfsiz saqlaydi." },
              { en: "The website connects to an SQL database to retrieve user information.", uz: "Veb-sayt foydalanuvchi ma'lumotlarini olish uchun SQL ma'lumotlar bazasiga ulanadi." },
              { en: "Always create daily backups of your company database.", uz: "Doimo kompaniyangiz ma'lumotlar bazasining kunlik zaxira nusxasini oling." }
            ]
          },
          {
            id: "tch-7",
            word: "Hardware",
            pos: "noun",
            phonetic: "/ˈhɑːdweə/",
            uzbek: "Texnik ta'minot, kompyuter qismlari",
            definition: "The physical parts and electrical components of a computer system.",
            examples: [
              { en: "Upgrading the hardware helped the old computer run much faster.", uz: "Texnik qismlarni yangilash eski kompyuterning ancha tezroq ishlashiga yordam berdi." },
              { en: "Computer hardware includes the processor, RAM, monitor, and motherboard.", uz: "Kompyuter apparati protsessor, operativ xotira, monitor va ona platani o'z ichiga oladi." },
              { en: "Check whether your computer hardware meets the minimum game requirements.", uz: "Kompyuteringiz apparat ta'minoti o'yinning minimal talablariga mos kelishini tekshiring." }
            ]
          },
          {
            id: "tch-8",
            word: "Software",
            pos: "noun",
            phonetic: "/ˈsɒftweə/",
            uzbek: "Dasturiy ta'minot, dasturlar",
            definition: "The programs and operating systems used by electronic computers.",
            examples: [
              { en: "Antivirus software protects your system against dangerous cyber threats.", uz: "Antivirus dasturi tizimingizni xavfli kiberxavflardan himoya qiladi." },
              { en: "The software engineer fixed several bugs in the mobile app.", uz: "Dasturchi mobil ilovadagi bir nechta xatoliklarni bartaraf etdi." },
              { en: "Always keep your operating system software up to date.", uz: "Operatsion tizim dasturingizni doimo yangilab turing." }
            ]
          },
          {
            id: "tch-9",
            word: "Algorithm",
            pos: "noun",
            phonetic: "/ˈælɡərɪðəm/",
            uzbek: "Algoritm",
            definition: "A step-by-step procedure or mathematical formula for solving a problem.",
            examples: [
              { en: "Search engines use complex algorithms to rank web pages efficiently.", uz: "Qidiruv tizimlari veb-sahifalarni samarali saralash uchun murakkab algoritmlardan foydalanadi." },
              { en: "Muhammad al-Khwarizmi laid the historical foundations of modern algorithms.", uz: "Muhammad al-Xorazmiy zamonaviy algoritmlarning tarixiy poydevorini yaratgan." },
              { en: "The recommendation algorithm suggests videos based on your viewing history.", uz: "Tavsiya algoritmi siz ko'rgan videolarga asoslanib yangi videolarni taklif qiladi." }
            ]
          },
          {
            id: "tch-10",
            word: "Network",
            pos: "noun",
            phonetic: "/ˈnetwɜːk/",
            uzbek: "Tarmoq, kompyuter tarmog'i",
            definition: "A group of interconnected computer systems sharing resources and data.",
            examples: [
              { en: "All company computers are connected to a secure local office network.", uz: "Kompaniyadagi barcha kompyuterlar xavfsiz mahalliy ofis tarmog'iga ulangan." },
              { en: "Network administrators monitor the traffic to maintain high connection speeds.", uz: "Tarmoq ma'murlari yuqori ulanish tezligini ta'minlash uchun trafikni nazorat qilishadi." },
              { en: "A stable WiFi network is indispensable for modern remote working.", uz: "Barqaror WiFi tarmog'i zamonaviy masofaviy ishlash uchun ajralmas zaruratdir." }
            ]
          },
          {
            id: "tch-11",
            word: "Browse",
            pos: "verb",
            phonetic: "/braʊz/",
            uzbek: "Internetda ko'rib chiqmoq, qidirmoq",
            definition: "To navigate through websites on the internet or look over products casually.",
            examples: [
              { en: "I usually browse informative news websites while drinking my morning coffee.", uz: "Ertalabki qahvamni ichayotganda odatda ma'lumot beruvchi yangiliklar saytlarini ko'rib chiqaman." },
              { en: "You can browse through thousands of online courses on this platform.", uz: "Ushbu platformada minglab onlayn kurslarni ko'rib chiqishingiz mumkin." },
              { en: "He opened an incognito window to browse privately.", uz: "U maxfiy ko'rib chiqish uchun inkognito oynasini ochdi." }
            ]
          },
          {
            id: "tch-12",
            word: "Storage",
            pos: "noun",
            phonetic: "/ˈstɔːrɪdʒ/",
            uzbek: "Xotira hajmi, saqlash joyi",
            definition: "The capacity of a computer or hard drive to retain electronic data.",
            examples: [
              { en: "My smartphone is running out of internal storage space.", uz: "Smartfonimning ichki xotirasi tugab bormoqda." },
              { en: "Cloud storage allows you to access important files from any device.", uz: "Bulutli xotira muhim fayllarga har qanday qurilmadan kirish imkonini beradi." },
              { en: "She bought an external hard drive with two terabytes of storage.", uz: "U ikki terabayt xotiraga ega tashqi qattiq disk sotib oldi." }
            ]
          },
          {
            id: "tch-13",
            word: "Backup",
            pos: "noun",
            phonetic: "/ˈbækʌp/",
            uzbek: "Zaxira nusxa",
            definition: "A duplicate copy of data files made to protect against accidental loss.",
            examples: [
              { en: "Always make a backup copy of your dissertation before formatting your PC.", uz: "Kompyuteringizni formatlashdan oldin ilmiy ishingizning zaxira nusxasini oling." },
              { en: "The automated system performs an encrypted cloud backup every midnight.", uz: "Avtomatlashtirilgan tizim har yarim kechada shifrlangan bulutli zaxira nusxasini yaratadi." },
              { en: "Thanks to the recent backup, no valuable client data was lost.", uz: "Yaqinda olingan zaxira nusxa tufayli hech qanday qimmatli mijoz ma'lumotlari yo'qolmadi." }
            ]
          },
          {
            id: "tch-14",
            word: "Interface",
            pos: "noun",
            phonetic: "/ˈɪntəfeɪs/",
            uzbek: "Interfeys, boshqaruv ko'rinishi",
            definition: "The visual layout and controls that allow humans to interact with software.",
            examples: [
              { en: "The mobile application has a clean, intuitive, and modern user interface.", uz: "Mobil ilova sodda, tushunarli va zamonaviy foydalanuvchi interfeysiga ega." },
              { en: "Designing an accessible interface helps all age groups use the system easily.", uz: "Qulay interfeys yaratish barcha yoshdagilarga tizimdan oson foydalanishga yordam beradi." },
              { en: "The dark mode interface is gentle on the eyes during nighttime study.", uz: "Qorong'i rejimdagi interfeys tunda o'qish paytida ko'zni charchatmaydi." }
            ]
          },
          {
            id: "tch-15",
            word: "Encrypt",
            pos: "verb",
            phonetic: "/ɪnˈkrɪpt/",
            uzbek: "Shifrlamoq, maxfiylashtirmoq",
            definition: "To convert digital data into a secret code to prevent unauthorized access.",
            examples: [
              { en: "Modern messaging apps encrypt chats to protect personal privacy.", uz: "Zamonaviy messenjerlar shaxsiy daxlsizlikni himoya qilish uchun yozishmalarni shifrlaydi." },
              { en: "Online banking websites encrypt sensitive transaction details automatically.", uz: "Onlayn banking saytlari nozik to'lov ma'lumotlarini avtomatik ravishda shifrlaydi." },
              { en: "Make sure your Wi-Fi router encrypts all transmitted passwords.", uz: "Wi-Fi routeringiz uzatiladigan barcha parollarni shifrlashiga ishonch hosil qiling." }
            ]
          },
          {
            id: "tch-16",
            word: "Update",
            pos: "verb",
            phonetic: "/ʌpˈdeɪt/",
            uzbek: "Yangilamoq (dasturni)",
            definition: "To install the latest version or security patches for software or system.",
            examples: [
              { en: "Remember to update your browser to receive the latest security fixes.", uz: "Eng so'nggi xavfsizlik tuzatishlarini olish uchun brauzeringizni yangilashni unutmang." },
              { en: "The developers regularly update the app with useful new features.", uz: "Dasturchilar ilovani foydali yangi imkoniyatlar bilan muntazam yangilab turishadi." },
              { en: "Updating your smartphone software fixes frequent crashing bugs.", uz: "Smartfon dasturini yangilash tez-tez uchraydigan qotish xatolarini bartaraf etadi." }
            ]
          },
          {
            id: "tch-17",
            word: "Install",
            pos: "verb",
            phonetic: "/ɪnˈstɔːl/",
            uzbek: "O'rnatmoq, dasturni yuklab o'rnatmoq",
            definition: "To set up software or hardware on a computer ready for practical use.",
            examples: [
              { en: "It takes just two minutes to install this lightweight vocabulary app.", uz: "Ushbu yengil so'z boyligi ilovasini o'rnatish bor-yo'g'i ikki daqiqa vaqt oladi." },
              { en: "Please install the official camera drivers from the manufacturer's website.", uz: "Iltimos, ishlab chiqaruvchi saytidan rasmiy kamera drayverlarini o'rnating." },
              { en: "I installed an ad-blocker extension to prevent intrusive popups.", uz: "Bezovta qiluvchi reklamalarni to'sish uchun reklama bloklovchi kengaytma o'rnatdim." }
            ]
          },
          {
            id: "tch-18",
            word: "Wireless",
            pos: "adjective",
            phonetic: "/ˈwaɪələs/",
            uzbek: "Simsiz",
            definition: "Operating via radio signals and waves without requiring physical cables.",
            examples: [
              { en: "Wireless headphones offer unmatched freedom of movement while jogging.", uz: "Simsiz quloqchinlar yugurish paytida harakatlanish uchun tengsiz erkinlik beradi." },
              { en: "The cafe provides fast wireless internet connection for all patrons.", uz: "Qahvaxona barcha mijozlarga tezkor simsiz internet ulanishini taqdim etadi." },
              { en: "Wireless phone chargers make your office desk much tidier.", uz: "Simsiz telefon quvvatlagichlari ish stolingizni ancha tartibli qiladi." }
            ]
          },
          {
            id: "tch-19",
            word: "Cloud",
            pos: "noun",
            phonetic: "/klaʊd/",
            uzbek: "Bulutli tizim (cloud computing)",
            definition: "A global network of remote servers on the Internet used to store and process data.",
            examples: [
              { en: "All our team documents are synchronized securely in the cloud.", uz: "Jamoamizning barcha hujjatlari bulutli tizimda xavfsiz sinxronlashtiriladi." },
              { en: "Moving business data to the cloud cuts hardware infrastructure costs.", uz: "Biznes ma'lumotlarini bulutga ko'chirish texnik infratuzilma xarajatlarini kamaytiradi." },
              { en: "You can access your favorite music library anywhere via cloud streaming.", uz: "Sevimli musiqa kutubxonangizga bulutli oqim orqali istalgan joydan kirishingiz mumkin." }
            ]
          },
          {
            id: "tch-20",
            word: "Gadget",
            pos: "noun",
            phonetic: "/ˈɡædʒɪt/",
            uzbek: "Elektron moslama, gadjet",
            definition: "A small mechanical or electronic tool designed to perform a particular task.",
            examples: [
              { en: "Smartwatches are versatile gadgets that track daily fitness and heart rates.", uz: "Smart-soatlar kunlik mashqlar va yurak urishini kuzatib boruvchi ko'p qirrali gadjetlardir." },
              { en: "He loves testing the newest high-tech kitchen gadgets.", uz: "U eng so'nggi yuqori texnologiyali oshxona moslamalarini sinab ko'rishni yaxshi ko'radi." },
              { en: "This pocket-sized gadget can translate speech into dozens of languages.", uz: "Ushbu cho'ntakbop moslama nutqni o'nlab tillarga tarjima qila oladi." }
            ]
          }
        ]
      },
      {
        id: "b1-environment",
        title: "Environment (Atrof-muhit)",
        icon: "fa-leaf",
        color: "from-yellow-500 to-amber-600",
        words: [
          {
            id: "env-1",
            word: "Pollution",
            pos: "noun",
            phonetic: "/pəˈluːʃn/",
            uzbek: "Ifloslanish (havo, suv, tuproq)",
            definition: "The presence in or introduction into the environment of a substance with harmful effects.",
            examples: [
              { en: "Air pollution is a major environmental challenge in huge metropolitan cities.", uz: "Havo ifloslanishi yirik megapolis shaharlarda asosiy ekologik muammodir." },
              { en: "Factories must reduce water pollution to protect river ecosystems.", uz: "Daryo ekotizimlarini himoya qilish uchun zavodlar suv ifloslanishini kamaytirishi shart." },
              { en: "Planting trees is one of the most effective ways to combat pollution.", uz: "Daraxt ekish ifloslanishga qarshi kurashishning eng samarali usullaridan biridir." }
            ]
          },
          {
            id: "env-2",
            word: "Recycle",
            pos: "verb",
            phonetic: "/ˌriːˈsaɪkl/",
            uzbek: "Qayta ishlamoq (chiqindini)",
            definition: "To convert waste into reusable material.",
            examples: [
              { en: "We should recycle plastic bottles and glass containers whenever possible.", uz: "Iloji boricha plastik idishlar va shisha qutilarni qayta ishlashga topshirishimiz kerak." },
              { en: "Many schools teach pupils how to separate and recycle trash.", uz: "Ko'plab maktablar o'quvchilarga chiqindilarni ajratish va qayta ishlashni o'rgatadi." },
              { en: "Recycling paper saves millions of trees across the globe every year.", uz: "Qog'ozni qayta ishlash butun dunyo bo'ylab har yili millionlab daraxtlarni saqlab qoladi." }
            ]
          },
          {
            id: "env-3",
            word: "Climate",
            pos: "noun",
            phonetic: "/ˈklaɪmət/",
            uzbek: "Iqlim",
            definition: "The weather conditions prevailing in an area in general or over a long period.",
            examples: [
              { en: "Climate change is causing global temperatures and sea levels to rise.", uz: "Iqlim o'zgarishi butun dunyoda harorat va dengiz sathining ko'tarilishiga sabab bo'lmoqda." },
              { en: "Uzbekistan has a continental climate with hot summers and chilly winters.", uz: "O'zbekiston yozlari issiq va qishlari sovuq bo'lgan kontinental iqlimga ega." },
              { en: "Scientists are working hard to monitor changes in global climate patterns.", uz: "Olimlar dunyo iqlimidagi o'zgarishlarni kuzatib borish uchun qattiq izlanishmoqda." }
            ]
          },
          {
            id: "env-4",
            word: "Protect",
            pos: "verb",
            phonetic: "/prəˈtekt/",
            uzbek: "Himoya qilmoq, asramoq",
            definition: "To keep safe from harm or injury.",
            examples: [
              { en: "National parks are established to protect endangered wildlife.", uz: "Milliy bog'lar yo'qolib ketish xavfi ostidagi yovvoyi tabiatni himoya qilish uchun tashkil etilgan." },
              { en: "Wearing sunglasses will protect your eyes from intense sunlight.", uz: "Quyosh ko'zoynagi taqish ko'zlaringizni kuchli quyosh nurlaridan asraydi." },
              { en: "It is our collective duty to protect the natural environment for posterity.", uz: "Tabiiy atrof-muhitni kelajak avlod uchun asrash bizning umumiy burchimizdir." }
            ]
          },
          {
            id: "env-5",
            word: "Wildlife",
            pos: "noun",
            phonetic: "/ˈwaɪldlaɪf/",
            uzbek: "Yovvoyi tabiat, yovvoyi hayvonot olami",
            definition: "Wild animals collectively; the native fauna of a region.",
            examples: [
              { en: "The nature reserve is home to a rich variety of wildlife.", uz: "Tabiat qo'riqxonasi turfa xil boy yovvoyi hayvonot olamining vatanidir." },
              { en: "Deforestation destroys the natural habitats of wildlife.", uz: "O'rmonlarning kesilishi yovvoyi hayvonlarning tabiiy yashash joylarini yo'q qiladi." },
              { en: "Wildlife photographers spend months waiting for the perfect shot.", uz: "Yovvoyi tabiat fotosuratchilari mukammal kadrni olish uchun oylab kutishadi." }
            ]
          },
          {
            id: "env-6",
            word: "Ecosystem",
            pos: "noun",
            phonetic: "/ˈiːkəʊsɪstəm/",
            uzbek: "Ekotizim",
            definition: "A biological community of interacting organisms and their physical environment.",
            examples: [
              { en: "Coral reefs form one of the richest ecosystems on the planet.", uz: "Marjon qoyalari sayyoramizdagi eng boy ekotizimlardan birini hosil qiladi." },
              { en: "Pollution disrupts the fragile ecological balance of the river ecosystem.", uz: "Ifloslanish daryo ekotizimining nozik ekologik muvozanatini buzadi." },
              { en: "Preserving national parks protects native ecosystems from destruction.", uz: "Milliy bog'larni saqlab qolish mahalliy ekotizimlarni yo'q bo'lib ketishdan asraydi." }
            ]
          },
          {
            id: "env-7",
            word: "Renewable",
            pos: "adjective",
            phonetic: "/rɪˈnjuːəbl/",
            uzbek: "Qayta tiklanuvchan (energiya)",
            definition: "Capable of being replenished naturally within a short human timescale.",
            examples: [
              { en: "Solar and wind power are leading clean forms of renewable energy.", uz: "Quyosh va shamol energiyasi qayta tiklanuvchi energiyaning yetakchi toza turlaridir." },
              { en: "Transitioning to renewable energy sources curbs greenhouse gas emissions.", uz: "Qayta tiklanuvchi energiya manbalariga o'tish issiqxona gazlari chiqishini kamaytiradi." },
              { en: "Uzbekistan is investing heavily in modern renewable solar stations.", uz: "O'zbekiston zamonaviy qayta tiklanuvchi quyosh stansiyalariga katta sarmoya kiritmoqda." }
            ]
          },
          {
            id: "env-8",
            word: "Conservation",
            pos: "noun",
            phonetic: "/ˌkɒnsəˈveɪʃn/",
            uzbek: "Tabiatni muhofaza qilish, tejash",
            definition: "The preservation, protection, or restoration of the natural environment and wildlife.",
            examples: [
              { en: "Wildlife conservation programs prevent rare snow leopards from disappearing.", uz: "Yovvoyi tabiatni muhofaza qilish dasturlari noyob qor qoplonlarining yo'qolib ketishini oldini oladi." },
              { en: "Water conservation is vital in arid and semi-arid desert climates.", uz: "Suvni tejash qurg'oqchil va cho'l iqlimlarida hayotiy ahamiyatga ega." },
              { en: "Volunteers participated enthusiastically in the forest conservation campaign.", uz: "Ko'ngillilar o'rmonni asrash kampaniyasida g'ayrat bilan ishtirok etishdi." }
            ]
          },
          {
            id: "env-9",
            word: "Habitat",
            pos: "noun",
            phonetic: "/ˈhæbɪtæt/",
            uzbek: "Tabiiy yashash muhiti",
            definition: "The natural home or natural environment of an animal, plant, or organism.",
            examples: [
              { en: "Deforestation threatens the natural habitat of endangered forest animals.", uz: "O'rmonlarning kesilishi yo'qolib borayotgan hayvonlarning tabiiy yashash muhitiga xavf solmoqda." },
              { en: "Wetlands provide an ideal habitat for migratory birds every spring.", uz: "Botqoqli joylar har bahorda ko'chmanchi qushlar uchun qulay yashash muhitini yaratadi." },
              { en: "Urban expansion has reduced the natural habitat of wild deer.", uz: "Shaharlarning kengayishi yovvoyi kiklarning tabiiy yashash muhitini qisqartirdi." }
            ]
          },
          {
            id: "env-10",
            word: "Deforestation",
            pos: "noun",
            phonetic: "/diːˌfɒrɪˈsteɪʃn/",
            uzbek: "O'rmonlarning ommaviy kesilishi",
            definition: "The clearing or thinning of forests by humans for logging or agriculture.",
            examples: [
              { en: "Massive deforestation in tropical regions accelerates catastrophic climate change.", uz: "Tropik hududlardagi ommaviy o'rmon kesilishi halokatli iqlim o'zgarishini tezlashtiradi." },
              { en: "Deforestation causes severe soil erosion and drives wild species away.", uz: "O'rmonlarning yo'q qilinishi tuproq eroziyasiga sabab bo'ladi va yovvoyi turlarni quvib chiqaradi." },
              { en: "Governments are enacting strict laws to halt illegal deforestation.", uz: "Hukumatlar noqonuniy o'rmon kesishni to'xtatish uchun qat'iy qonunlar qabul qilmoqda." }
            ]
          },
          {
            id: "env-11",
            word: "Emission",
            pos: "noun",
            phonetic: "/iˈmɪʃn/",
            uzbek: "Chiqindi gazlar ajralishi",
            definition: "The production and discharge of pollutants, especially carbon gases, into the air.",
            examples: [
              { en: "Electric cars produce zero tailpipe emissions on city roads.", uz: "Elektromobillar shahar yo'llarida nol darajadagi chiqindi gaz chiqaradi." },
              { en: "Factory emissions must be filtered thoroughly before release into the atmosphere.", uz: "Zavod chiqindi gazlari atmosferaga chiqarilishidan oldin yaxshilab filtrlanishi shart." },
              { en: "The summit aims to reduce global carbon emissions by forty percent.", uz: "Sammit global uglerod chiqindilarini qirq foizga kamaytirishni maqsad qilgan." }
            ]
          },
          {
            id: "env-12",
            word: "Global warming",
            pos: "noun",
            phonetic: "/ˌɡləʊbl ˈwɔːmɪŋ/",
            uzbek: "Global isish",
            definition: "The long-term heating of Earth's climate system driven by human activities.",
            examples: [
              { en: "Global warming causes glaciers to melt and sea levels to rise.", uz: "Global isish muzliklarning erishiga va dengiz sathining ko'tarilishiga sabab bo'lmoqda." },
              { en: "Scientists warn that global warming leads to frequent extreme weather events.", uz: "Olimlar global isish tez-tez uchraydigan ekstremal ob-havo hodisalariga olib kelishidan ogohlantirmoqda." },
              { en: "Planting millions of trees helps absorb carbon and mitigate global warming.", uz: "Millionlab daraxtlar ekish uglerodni yutishga va global isishni yumshatishga yordam beradi." }
            ]
          },
          {
            id: "env-13",
            word: "Biodegradable",
            pos: "adjective",
            phonetic: "/ˌbaɪəʊdɪˈɡreɪdəbl/",
            uzbek: "Tabiiy parchalanuvchi, biologik eriydigan",
            definition: "Capable of being decomposed by bacteria or biological living organisms safely.",
            examples: [
              { en: "Supermarkets should replace plastic bags with biodegradable paper alternatives.", uz: "Supermarketlar polietilen paketlarni tabiiy eriydigan qog'oz muqobillari bilan almashtirishlari lozim." },
              { en: "Biodegradable packaging breaks down within months without poisoning soil.", uz: "Tabiiy parchalanuvchi qadoqlar tuproqni zaharlamasdan bir necha oy ichida yo'q bo'lib ketadi." },
              { en: "Choose biodegradable cleaning detergents to safeguard aquatic life.", uz: "Suv jonivorlarini asrash uchun biologik parchalanuvchi tozalash vositalarini tanlang." }
            ]
          },
          {
            id: "env-14",
            word: "Extinct",
            pos: "adjective",
            phonetic: "/ɪkˈstɪŋkt/",
            uzbek: "Qirilib ketgan, yo'q bo'lgan",
            definition: "Having no living representatives left; completely vanished from Earth.",
            examples: [
              { en: "Dinosaurs became extinct millions of years before humans appeared.", uz: "Dinozavrlar inson paydo bo'lishidan millionlab yillar avval qirilib ketgan." },
              { en: "Without immediate conservation efforts, black rhinos may soon become extinct.", uz: "Kechiktirib bo'lmaydigan muhofaza choralarisiz qora karkidonlar tez orada yo'q bo'lib ketishi mumkin." },
              { en: "Hunting pushed the historic dodo bird to become completely extinct.", uz: "Ovchilik tarixiy dodo qushining butunlay yo'q bo'lib ketishiga olib keldi." }
            ]
          },
          {
            id: "env-15",
            word: "Ozone",
            pos: "noun",
            phonetic: "/ˈəʊzəʊn/",
            uzbek: "Ozon qatlami",
            definition: "A layer in the stratosphere that absorbs harmful ultraviolet rays from the sun.",
            examples: [
              { en: "The atmospheric ozone layer shields living organisms from harmful radiation.", uz: "Atmosferadagi ozon qatlami tirik mavjudotlarni zararli nurlanishdan himoya qiladi." },
              { en: "International treaties successfully banned chemicals that damaged the ozone layer.", uz: "Xalqaro shartnomalar ozon qatlamiga ziyon yetkazuvchi kimyoviy moddalarni taqiqlashga erishdi." },
              { en: "Recent scientific satellite data shows the ozone layer is slowly recovering.", uz: "So'nggi ilmiy sun'iy yo'ldosh ma'lumotlari ozon qatlami asta-sekin tiklanayotganini ko'rsatmoqda." }
            ]
          },
          {
            id: "env-16",
            word: "Solar",
            pos: "adjective",
            phonetic: "/ˈsəʊlə/",
            uzbek: "Quyoshga oid, quyosh energiyasi",
            definition: "Relating to or derived from the radiant light and heat of the sun.",
            examples: [
              { en: "Installing rooftop solar panels drastically cuts household electricity bills.", uz: "Tomga quyosh panellarini o'rnatish xonadonning elektr to'lovlarini keskin kamaytiradi." },
              { en: "Solar powered street lamps illuminate highway roads cleanly and reliably.", uz: "Quyosh energiyasida ishlovchi ko'cha chiroqlari magistral yo'llarni toza va ishonchli yoritadi." },
              { en: "Our solar system consists of the central sun and orbiting planets.", uz: "Quyosh tizimimiz markaziy quyosh va uning atrofida aylanuvchi sayyoralardan iborat." }
            ]
          },
          {
            id: "env-17",
            word: "Drought",
            pos: "noun",
            phonetic: "/draʊt/",
            uzbek: "Qurg'oqchilik",
            definition: "A prolonged period of abnormally low rainfall leading to severe water shortages.",
            examples: [
              { en: "The severe summer drought dried up local farming irrigation canals.", uz: "Kuchli yozgi qurg'oqchilik mahalliy qishloq xo'jaligi sug'orish kanallarini quritib qo'ydi." },
              { en: "Farmers suffered heavy crop losses during the two-year drought.", uz: "Ikki yillik qurg'oqchilik davrida dehqonlar katta hosil yo'qotishlariga duchor bo'lishdi." },
              { en: "Drip irrigation helps grow food efficiently even under extreme drought conditions.", uz: "Tomchilatib sug'orish o'ta qurg'oqchilik sharoitida ham ekinlarni samarali yetishtirishga yordam beradi." }
            ]
          },
          {
            id: "env-18",
            word: "Flood",
            pos: "noun",
            phonetic: "/flʌd/",
            uzbek: "Suv toshqini, sel",
            definition: "An overflowing of a large body of water beyond its normal confines.",
            examples: [
              { en: "Torrential rain triggered a massive flash flood in the river valley.", uz: "Jala yog'ishi daryo vodiysida kuchli to'satdan suv toshqinini keltirib chiqardi." },
              { en: "Emergency workers rescued residents stranded by the catastrophic flood.", uz: "Qutqaruvchilar halokatli toshqinda qolib ketgan aholini xavfsiz joyga ko'chirishdi." },
              { en: "Building strong dikes and levees protects low-lying coastal cities from flood risks.", uz: "Mustahkam to'g'onlar qurish past-tekislikdagi sohil shaharlarini toshqin xavfidan himoya qiladi." }
            ]
          },
          {
            id: "env-19",
            word: "Organic",
            pos: "adjective",
            phonetic: "/ɔːˈɡænɪk/",
            uzbek: "Organik, tabiiy, kimyoviy qo'shimchalarsiz",
            definition: "Produced without using artificial chemical fertilizers, pesticides, or GMOs.",
            examples: [
              { en: "Organic agriculture preserves soil fertility and groundwater purity.", uz: "Organik qishloq xo'jaligi tuproq unumdorligini va yerosti suvlari sofligini asraydi." },
              { en: "Many shoppers are willing to pay slightly more for certified organic vegetables.", uz: "Ko'plab xaridorlar sertifikatlangan organik sabzavotlar uchun biroz ko'proq to'lashga tayyor." },
              { en: "Organic farming avoids chemical pesticides that damage beneficial bees.", uz: "Tabiiy dehqonchilik foydali asalarilarga zarar yetkazuvchi kimyoviy vositalardan xolidir." }
            ]
          },
          {
            id: "env-20",
            word: "Threaten",
            pos: "verb",
            phonetic: "/ˈθretn/",
            uzbek: "Xavf solmoq, xavf ostida qoldirmoq",
            definition: "To cause a risk or danger to someone or something's existence.",
            examples: [
              { en: "Rising global temperatures threaten coastal communities worldwide.", uz: "Ko'tarilayotgan global harorat butun dunyo bo'ylab qirg'oqbo'yi aholisiga xavf solmoqda." },
              { en: "Plastic waste threatens marine life in the deep oceans.", uz: "Plastik chiqindilar chuqur okeanlardagi dengiz jonivorlariga xavf tug'diradi." },
              { en: "Air pollution threatens public health, especially for young children.", uz: "Havoning ifloslanishi aholi salomatligiga, ayniqsa yosh bolalarga jiddiy xavf soladi." }
            ]
          }
        ]
      },
      {
        id: "b1-career",
        title: "Career & Work (Kasb va Ish)",
        icon: "fa-briefcase",
        color: "from-orange-400 to-amber-600",
        words: [
          {
            id: "car-1",
            word: "Ambition",
            pos: "noun",
            phonetic: "/æmˈbɪʃn/",
            uzbek: "Maqsad, intilish, orzu",
            definition: "A strong desire to do or to achieve something.",
            examples: [
              { en: "Her lifelong ambition is to start an educational academy.", uz: "Uning butun umrlik maqsadi ta'lim akademiyasini ochishdir." },
              { en: "Young learners with clear ambition tend to achieve great success.", uz: "Aniq maqsadga ega yosh talabalar odatda katta muvaffaqiyatlarga erishadilar." },
              { en: "He lacks the ambition needed to lead a large corporation.", uz: "Unda yirik korporatsiyani boshqarish uchun zarur bo'lgan intilish yetishmaydi." }
            ]
          },
          {
            id: "car-2",
            word: "Deadline",
            pos: "noun",
            phonetic: "/ˈdedlaɪn/",
            uzbek: "Oxirgi muddat (dedlayn)",
            definition: "The latest time or date by which something should be completed.",
            examples: [
              { en: "We worked overtime to finish the software project before the deadline.", uz: "Dasturiy loyihani muddatidan oldin tugatish uchun qo'shimcha vaqt ishladik." },
              { en: "The application deadline for university enrollment is next Friday.", uz: "Universitetga qabul uchun arizalar topshirishning oxirgi muddati kelasi juma." },
              { en: "Missing the project deadline can lead to serious penalties.", uz: "Loyiha muddatini o'tkazib yuborish jiddiy jarimalarga olib kelishi mumkin." }
            ]
          },
          {
            id: "car-3",
            word: "Salary",
            pos: "noun",
            phonetic: "/ˈsæləri/",
            uzbek: "Oylik maosh",
            definition: "A fixed regular payment made by an employer to an employee.",
            examples: [
              { en: "The company offers a competitive salary along with annual bonuses.", uz: "Kompaniya raqobatbardosh oylik maosh bilan birga yillik bonuslarni ham taklif etadi." },
              { en: "He negotiated a higher starting salary during his final interview.", uz: "U so'nggi suhbat chog'ida yuqoriroq boshlang'ich maosh bo'yicha kelishib oldi." },
              { en: "Teachers deserve a generous salary for shaping the future generation.", uz: "Kelajak avlodni tarbiyalayotgani uchun o'qituvchilar munosib maoshga loyiqdir." }
            ]
          },
          {
            id: "car-4",
            word: "Colleague",
            pos: "noun",
            phonetic: "/ˈkɒliːɡ/",
            uzbek: "Hamkasb",
            definition: "A person with whom one works in a profession or business.",
            examples: [
              { en: "I regularly consult my senior colleagues when faced with tricky problems.", uz: "Murakkab muammolarga duch kelganda tajribali hamkasblarim bilan maslahatlashaman." },
              { en: "We organized a farewell party for our departing colleague.", uz: "Biz ishdan ketayotgan hamkasbimiz uchun xayrlashuv kechasini uyushtirdik." },
              { en: "Mutual respect among colleagues fosters a productive workplace environment.", uz: "Hamkasblar o'rtasidagi o'zaro hurmat ish joyida samarali muhit yaratadi." }
            ]
          },
          {
            id: "car-5",
            word: "Promote",
            pos: "verb",
            phonetic: "/prəˈməʊt/",
            uzbek: "Lavozimini ko'tarmoq / Targ'ib qilmoq",
            definition: "To raise someone to a higher position or rank; or to support something.",
            examples: [
              { en: "She was promoted to regional manager after demonstrating excellent leadership.", uz: "Ajoyib yetakchilik ko'rsatganidan so'ng uning lavozimi hududiy boshqaruvchiga ko'tarildi." },
              { en: "The campaign aims to promote reading habits among teenagers.", uz: "Kompaniya o'smirlar orasida kitobxonlik odatini targ'ib qilishni maqsad qilgan." },
              { en: "Hard work and reliability will eventually help you get promoted.", uz: "Mehnatsevarlik va ishonchlilik pirovardida sizning lavozimingiz ko'tarilishiga yordam beradi." }
            ]
          },
          {
            id: "car-6",
            word: "Employment",
            pos: "noun",
            phonetic: "/ɪmˈplɔɪmənt/",
            uzbek: "Bandlik, ish bilan ta'minlanganlik",
            definition: "The state of having paid work or a formal job.",
            examples: [
              { en: "Youth employment rates rose significantly after the new IT internship program.", uz: "Yangi IT amaliyot dasturidan so'ng yoshlar bandligi darajasi sezilarli darajada oshdi." },
              { en: "She signed an official employment contract with a leading international bank.", uz: "U yetakchi xalqaro bank bilan rasmiy mehnat shartnomasini imzoladi." },
              { en: "Vocational colleges aim to provide practical skills for rapid employment.", uz: "Kasb-hunar kollejlari tezda ish topish uchun amaliy ko'nikmalar berishni maqsad qiladi." }
            ]
          },
          {
            id: "car-7",
            word: "Interview",
            pos: "noun",
            phonetic: "/ˈɪntəvjuː/",
            uzbek: "Ishga kirish suhbati (intervyu)",
            definition: "A formal meeting in which an applicant is questioned to assess job suitability.",
            examples: [
              { en: "He prepared answers to typical questions before attending the job interview.", uz: "U ishga kirish suhbatiga borishdan oldin odatiy savollarga javoblarni tayyorlab oldi." },
              { en: "Making eye contact and dressing smartly leaves a great impression at an interview.", uz: "Suhbatda ko'z bilan aloqa qilish va saranjom kiyinish ajoyib taassurot qoldiradi." },
              { en: "She received a job offer right after the second technical interview.", uz: "U ikkinchi texnik suhbatdan so'ng darhol ishga taklif oldi." }
            ]
          },
          {
            id: "car-8",
            word: "Resume",
            pos: "noun",
            phonetic: "/ˈrezjuːmeɪ/",
            uzbek: "Rezyume, ob'ektivka",
            definition: "A formal document summarizing a job applicant's education, skills, and work history.",
            examples: [
              { en: "Ensure your resume is concise, well formatted, and free of spelling errors.", uz: "Rezyumeingiz ixcham, chiroyli formatlangan va imlo xatolaridan xoli ekaniga ishonch hosil qiling." },
              { en: "He highlighted his English proficiency and leadership experience on his resume.", uz: "U rezyumesida ingliz tili bilish darajasi va yetakchilik tajribasini alohida ajratib ko'rsatdi." },
              { en: "Send your updated resume directly to the human resources department.", uz: "Yangilangan rezyumeingizni to'g'ridan-to'g'ri inson resurslari bo'limiga yuboring." }
            ]
          },
          {
            id: "car-9",
            word: "Qualification",
            pos: "noun",
            phonetic: "/ˌkwɒlɪfɪˈkeɪʃn/",
            uzbek: "Malaka, kasbiy mutaxassislik",
            definition: "An official completion of a course or exam demonstrating suitability for a role.",
            examples: [
              { en: "A recognized master's qualification opened doors to top management positions.", uz: "Tan olingan magistrlik malakasi yuqori boshqaruv lavozimlariga yo'l ochdi." },
              { en: "Does the candidate hold the required technical qualifications for this project?", uz: "Nomzod ushbu loyiha uchun zaruriy texnik malakalarga egami?" },
              { en: "Continuous professional training improves qualifications throughout your career.", uz: "Doimiy kasbiy tayyorgarlik faoliyatingiz davomida malakangizni oshirib boradi." }
            ]
          },
          {
            id: "car-10",
            word: "Retire",
            pos: "verb",
            phonetic: "/rɪˈtaɪə/",
            uzbek: "Nafaqaga chiqmoq",
            definition: "To leave one's job and cease to work, usually upon reaching pension age.",
            examples: [
              { en: "My grandfather plans to retire next year and spend time gardening.", uz: "Bobom kelasi yili nafaqaga chiqib, vaqtini bog'dorchilik bilan o'tkazishni rejalashtirmoqda." },
              { en: "Many people choose to travel the world after they retire.", uz: "Ko'pchilik odamlar nafaqaga chiqqanlaridan so'ng dunyo bo'ylab sayohat qilishni tanlashadi." },
              { en: "She retired after thirty-five years of dedicated service as a school teacher.", uz: "U maktab o'qituvchisi sifatidagi o'ttiz besh yillik fidokorona xizmatdan so'ng nafaqaga chiqdi." }
            ]
          },
          {
            id: "car-11",
            word: "Contract",
            pos: "noun",
            phonetic: "/ˈkɒntrækt/",
            uzbek: "Mehnat shartnomasi, kontrakt",
            definition: "A formal, legally binding written agreement between employee and employer.",
            examples: [
              { en: "Read every clause carefully before signing the employment contract.", uz: "Mehnat shartnomasini imzolashdan oldin har bir bandini diqqat bilan o'qib chiqing." },
              { en: "The company renewed her one-year contract with an increased salary.", uz: "Kompaniya uning bir yillik shartnomasini oshirilgan maosh bilan uzaytirdi." },
              { en: "Breaching contract terms may lead to serious financial penalties.", uz: "Shartnoma shartlarini buzish jiddiy moliyaviy jarimalarga olib kelishi mumkin." }
            ]
          },
          {
            id: "car-12",
            word: "Overtime",
            pos: "noun",
            phonetic: "/ˈəʊvətaɪm/",
            uzbek: "Qo'shimcha ish vaqti",
            definition: "Time worked in addition to standard contracted working hours.",
            examples: [
              { en: "Employees receive double pay when working overtime on weekends.", uz: "Dam olish kunlarida qo'shimcha ishlagan xodimlarga ikki hissa haq to'lanadi." },
              { en: "She worked three hours of overtime to meet the urgent client deadline.", uz: "U mijozning shoshilinch muddatiga ulgurish uchun uch soat qo'shimcha ishladi." },
              { en: "Frequent unpaid overtime can quickly lead to professional burnout.", uz: "Tez-tez haq to'lanmaydigan qo'shimcha ishlash kasbiy toliqishga olib kelishi mumkin." }
            ]
          },
          {
            id: "car-13",
            word: "Bonus",
            pos: "noun",
            phonetic: "/ˈbəʊnəs/",
            uzbek: "Mukofot puli, bonus",
            definition: "An extra amount of money given to an employee for high performance.",
            examples: [
              { en: "The company awarded generous performance bonuses at the end of the year.", uz: "Kompaniya yil yakunida xodimlarga saxiylik bilan mukofot pullari tarqatdi." },
              { en: "He earned a handsome bonus for exceeding his sales target by thirty percent.", uz: "U savdo rejasini o'ttiz foizga ortig'i bilan bajargani uchun yaxshigina bonus oldi." },
              { en: "Annual bonuses serve as strong motivation for hardworking staff.", uz: "Yillik mukofot pullari mehnatkash xodimlar uchun kuchli motivatsiya vazifasini o'taydi." }
            ]
          },
          {
            id: "car-14",
            word: "Experience",
            pos: "noun",
            phonetic: "/ɪkˈspɪəriəns/",
            uzbek: "Ish tajribasi",
            definition: "The practical knowledge and skills acquired through years of involvement.",
            examples: [
              { en: "The job advertisement requires at least three years of managerial experience.", uz: "Ish e'lonida kamida uch yillik boshqaruv tajribasi talab qilinmoqda." },
              { en: "Hands-on experience is often more valuable than pure textbook theory.", uz: "Amaliy tajriba ko'pincha sof darslik nazariyasidan qimmatliroq hisoblanadi." },
              { en: "Working at a dynamic startup gave him valuable international experience.", uz: "Rivojlanayotgan startapda ishlash unga qimmatli xalqaro tajriba berdi." }
            ]
          },
          {
            id: "car-15",
            word: "Applicant",
            pos: "noun",
            phonetic: "/ˈæplɪkənt/",
            uzbek: "Nomzod, da'vogar",
            definition: "A person who formally submits an application for an open position.",
            examples: [
              { en: "Over two hundred applicants applied for the remote web designer role.", uz: "Masofaviy veb-dizayner lavozimiga ikki yuzdan ortiq nomzod ariza topshirdi." },
              { en: "The recruiter shortlisted the five most promising job applicants.", uz: "Xodimlarni tanlash mutaxassisi eng istiqbolli beshta nomzodni saralab oldi." },
              { en: "Each applicant must complete a short practical assessment task.", uz: "Har bir nomzod qisqa amaliy sinov topshirig'ini bajarishi shart." }
            ]
          },
          {
            id: "car-16",
            word: "Resign",
            pos: "verb",
            phonetic: "/rɪˈzaɪn/",
            uzbek: "Iste'fo bermoq, o'z xohishi bilan ishdan ketmoq",
            definition: "To voluntarily give up a job, office, or formal position.",
            examples: [
              { en: "He decided to resign from his position to start his own consulting firm.", uz: "U o'z konsalting firmasini ochish maqsadida lavozimidan iste'fo berishga qaror qildi." },
              { en: "The CEO resigned following disagreements over the company's future direction.", uz: "Bosh direktor kompaniyaning kelajak yo'nalishi bo'yicha kelishmovchiliklar ortidan iste'foga chiqdi." },
              { en: "Employees usually give two weeks' formal notice before they resign.", uz: "Xodimlar odatda ishdan bo'shashdan ikki hafta oldin rasmiy bildirishnoma berishadi." }
            ]
          },
          {
            id: "car-17",
            word: "Profession",
            pos: "noun",
            phonetic: "/prəˈfeʃn/",
            uzbek: "Kasb, mutaxassislik",
            definition: "A paid occupation that involves specialized training and formal education.",
            examples: [
              { en: "Medicine and law are respected professions requiring long years of study.", uz: "Tibbiyot va huquqshunoslik uzoq yillik o'qishni talab qiladigan hurmatli kasblardir." },
              { en: "She chose the teaching profession because she enjoys inspiring young minds.", uz: "U yosh avlodni ilhomlantirishni yoqtirgani sababli o'qituvchilik kasbini tanladi." },
              { en: "Ethical standards are strictly enforced across the accounting profession.", uz: "Buxgalteriya kasbida axloqiy me'yorlar qat'iy talab qilinadi." }
            ]
          },
          {
            id: "car-18",
            word: "Punctual",
            pos: "adjective",
            phonetic: "/ˈpʌŋktʃuəl/",
            uzbek: "Vaqtga qat'iy rioya qiluvchi, daqiq",
            definition: "Doing something or arriving exactly at the agreed or proper time.",
            examples: [
              { en: "Being punctual demonstrates respect and reliability to your employers.", uz: "Vaqtga rioya qilish ish beruvchilarga hurmat va ishonchlilikni namoyish etadi." },
              { en: "He is always punctual and arrives ten minutes before morning meetings.", uz: "U doim vaqtiga puxta va ertalabki majlislarga o'n daqiqa oldin keladi." },
              { en: "Punctual public transport makes city commuting stress-free.", uz: "O'z vaqtida yuradigan jamoat transporti shahardagi qatnovni tashvishsiz qiladi." }
            ]
          },
          {
            id: "car-19",
            word: "Vacancy",
            pos: "noun",
            phonetic: "/ˈveɪkənsi/",
            uzbek: "Bo'sh ish o'rni, vakansiya",
            definition: "An unoccupied position or job available for someone to fill.",
            examples: [
              { en: "Our department announced a new job vacancy for a senior data analyst.", uz: "Bo'limimiz katta ma'lumotlar tahlilchisi uchun yangi bo'sh ish o'rnini e'lon qildi." },
              { en: "Check the company careers page regularly for new employment vacancies.", uz: "Yangi bo'sh ish o'rinlari uchun kompaniyaning karyera sahifasini muntazam tekshirib turing." },
              { en: "The vacancy was filled quickly by an experienced internal candidate.", uz: "Bo'sh o'rin tajribali ichki nomzod tomonidan tezda to'ldirildi." }
            ]
          },
          {
            id: "car-20",
            word: "Trainee",
            pos: "noun",
            phonetic: "/ˌtreɪˈniː/",
            uzbek: "Stajyor, amaliyotchi",
            definition: "A person undergoing practical training for a specific job or profession.",
            examples: [
              { en: "The bank recruited twenty promising university graduates as management trainees.", uz: "Bank yigirmata iqtidorli universitet bitiruvchisini boshqaruv stajyori sifatida qabul qildi." },
              { en: "Senior engineers mentor new trainees during their first three months.", uz: "Yetakchi muhandislar dastlabki uch oy davomida yangi amaliyotchilarga ustozlik qiladi." },
              { en: "The trainee demonstrated rapid learning and exceptional problem-solving skills.", uz: "Stajyor tez o'rganish va ajoyib muammolarni hal qilish qobiliyatini namoyish etdi." }
            ]
          }
        ]
      }
    ]
  },
  B2: {
    levelName: "B2 - O'rtadan yuqori (Upper-Intermediate)",
    description: "Biznes, psixologiya va ilmiy bahslarda erkin fikr yuritish leksikasi",
    color: "indigo",
    badge: "B2 Yuqori-o'rta",
    topics: [
      {
        id: "b2-business",
        title: "Business & Economy (Biznes va Iqtisodiyot)",
        icon: "fa-chart-line",
        color: "from-indigo-500 to-purple-600",
        words: [
          {
            id: "biz-1",
            word: "Entrepreneur",
            pos: "noun",
            phonetic: "/ˌɒntrəprəˈnɜː/",
            uzbek: "Tadbirkor, biznes asoschisi",
            definition: "A person who sets up a business or businesses, taking on financial risks in the hope of profit.",
            examples: [
              { en: "Successful entrepreneurs identify problems in the market and design innovative solutions.", uz: "Muvaffaqiyatli tadbirkorlar bozordagi muammolarni aniqlab, innovatsion yechimlar yaratadilar." },
              { en: "He is a tech entrepreneur who founded several profitable startups.", uz: "U bir nechta daromadli startaplarga asos solgan texnologik tadbirkordir." },
              { en: "Government grants encourage young entrepreneurs to launch novel ventures.", uz: "Davlat grantlari yosh tadbirkorlarni yangi loyihalarni boshlashga undaydi." }
            ]
          },
          {
            id: "biz-2",
            word: "Investment",
            pos: "noun",
            phonetic: "/ɪnˈvestmənt/",
            uzbek: "Investitsiya, sarmoya",
            definition: "The action or process of investing money for profit or material result.",
            examples: [
              { en: "Investing in higher education is an investment that yields lifelong dividends.", uz: "Oliy ta'limga sarmoya kiritish — butun umr davomida foyda keltiradigan investitsiyadir." },
              { en: "The company secured a five-million-dollar investment from venture capitalists.", uz: "Kompaniya venchur sarmoyadorlaridan besh million dollarlik investitsiyani jalb qildi." },
              { en: "Foreign direct investment plays a crucial role in modernizing local industries.", uz: "To'g'ridan-to'g'ri xorijiy investitsiyalar mahalliy sanoatni modernizatsiya qilishda muhim rol o'ynaydi." }
            ]
          },
          {
            id: "biz-3",
            word: "Negotiate",
            pos: "verb",
            phonetic: "/nɪˈɡəʊʃieɪt/",
            uzbek: "Muzokara olib bormoq, kelishmoq",
            definition: "To try to reach an agreement or compromise by discussion with others.",
            examples: [
              { en: "Both corporate parties met yesterday to negotiate the contractual terms.", uz: "Har ikki korporativ tomon kecha shartnoma shartlarini kelishish uchun uchrashdi." },
              { en: "Skilled diplomats know how to negotiate effectively under pressure.", uz: "Tajribali diplomatlar bosim ostida ham qanday qilib samarali muzokara olib borishni bilishadi." },
              { en: "She managed to negotiate a substantial discount on the wholesale order.", uz: "U ulgurji buyurtma uchun sezilarli chegirma bo'yicha muzokara qila oldi." }
            ]
          },
          {
            id: "biz-4",
            word: "Revenue",
            pos: "noun",
            phonetic: "/ˈrevənjuː/",
            uzbek: "Daromad, tushum (kompaniya yoki davlat)",
            definition: "Income, especially when of a company or organization and of a substantial nature.",
            examples: [
              { en: "The company reported a 25% increase in annual revenue this fiscal quarter.", uz: "Kompaniya ushbu moliyaviy chorakda yillik daromadning 25% ga oshganini ma'lum qildi." },
              { en: "Tax revenue enables the government to build schools and hospitals.", uz: "Soliq tushumlari hukumatga maktab va kasalxonalar qurish imkonini beradi." },
              { en: "Subscription models provide predictable and steady recurring revenue.", uz: "Obuna modellari doimiy va oldindan prognoz qilinadigan daromadni ta'minlaydi." }
            ]
          },
          {
            id: "biz-5",
            word: "Strategy",
            pos: "noun",
            phonetic: "/ˈstrætədʒi/",
            uzbek: "Strategiya, uzoq muddatli reja",
            definition: "A plan of action or policy designed to achieve a major or overall aim.",
            examples: [
              { en: "Adopting a solid digital marketing strategy boosted brand awareness significantly.", uz: "Puxta raqamli marketing strategiyasini qo'llash brend tanilishini sezilarli darajada oshirdi." },
              { en: "The board members met to revise their five-year growth strategy.", uz: "Boshqaruv a'zolari o'zlarining besh yillik o'sish strategiyasini qayta ko'rib chiqish uchun yig'ilishdi." },
              { en: "A well-thought-out study strategy will help you master English much faster.", uz: "Yaxshi o'ylangan o'qish strategiyasi ingliz tilini ancha tezroq o'zlashtirishga yordam beradi." }
            ]
          },
          {
            id: "biz-6",
            word: "Acquisition",
            pos: "noun",
            phonetic: "/ˌækwɪˈzɪʃn/",
            uzbek: "Kompaniyani sotib olish (yutib olish)",
            definition: "An asset, company, or subsidiary bought or taken over by another corporation.",
            examples: [
              { en: "The tech giant announced the strategic acquisition of an AI startup.", uz: "Texnologiya giganti sun'iy intellekt startapining strategik sotib olinishini e'lon qildi." },
              { en: "Corporate acquisitions often create synergies and expand market share.", uz: "Korporativ sotib olishlar ko'pincha o'zaro hamkorlikni kuchaytiradi va bozor ulushini kengaytiradi." },
              { en: "Regulators scrutinized the multi-billion dollar acquisition for monopoly risks.", uz: "Nazoratchilar ko'p milliard dollarlik xaridni monopoliya xatarlari yuzasidan sinchiklab tekshirdilar." }
            ]
          },
          {
            id: "biz-7",
            word: "Bankruptcy",
            pos: "noun",
            phonetic: "/ˈbæŋkrəptsi/",
            uzbek: "Bankrotlik",
            definition: "The legal state of an organization unable to repay its outstanding financial debts.",
            examples: [
              { en: "Poor financial management drove the retail chain into sudden bankruptcy.", uz: "Moliyaviy boshqaruvning yomonligi chakana savdo tarmog'ini kutilmagan bankrotlikka olib keldi." },
              { en: "Filing for bankruptcy protects the company while restructuring its liabilities.", uz: "Bankrotlik to'g'risida ariza berish kompaniyani qarz majburiyatlarini qayta tuzish paytida himoya qiladi." },
              { en: "The airline avoided bankruptcy by negotiating debt relief with major lenders.", uz: "Aviakompaniya asosiy kreditorlar bilan qarzni yengillashtirish bo'yicha kelishib, bankrotlikdan qutulib qoldi." }
            ]
          },
          {
            id: "biz-8",
            word: "Capital",
            pos: "noun",
            phonetic: "/ˈkæpɪtl/",
            uzbek: "Sarmoya, kapital",
            definition: "Financial wealth or assets available for investment, production, or launching ventures.",
            examples: [
              { en: "Entrepreneurs need substantial starting capital to build modern factories.", uz: "Tadbirkorlarga zamonaviy fabrikalar qurish uchun katta boshlang'ich sarmoya kerak bo'ladi." },
              { en: "Venture capitalists injected fresh capital into the innovative fintech project.", uz: "Venchur sarmoyadorlari innovatsion fintex loyihasiga yangi sarmoya kiritdilar." },
              { en: "Access to liquid capital determines a business's ability to survive economic downturns.", uz: "Erkin kapitalga ega bo'lish biznesning iqtisodiy inqirozlardan omon chiqish qobiliyatini belgilaydi." }
            ]
          },
          {
            id: "biz-9",
            word: "Dividend",
            pos: "noun",
            phonetic: "/ˈdɪvɪdend/",
            uzbek: "Dividend (aksiyadorlik foydasi)",
            definition: "A share of profits paid regularly by a company to its shareholders.",
            examples: [
              { en: "Shareholders received a ten percent increase in annual dividend payouts.", uz: "Aksiyadorlar yillik dividend to'lovlarida o'n foizli o'sishga erishdilar." },
              { en: "The board decided to reinvest earnings rather than distributing dividends this quarter.", uz: "Kengash ushbu chorakda dividend tarqatishdan ko'ra daromadni qayta investitsiya qilishga qaror qildi." },
              { en: "High dividend yields make blue-chip utility stocks appealing to conservative investors.", uz: "Yuqori dividend daromadliligi yirik kommunal aksiyalarni konservativ investorlar uchun jozibador qiladi." }
            ]
          },
          {
            id: "biz-10",
            word: "Feasibility",
            pos: "noun",
            phonetic: "/ˌfiːzəˈbɪləti/",
            uzbek: "Amalga oshirish imkoniyati, maqsadga muvofiqlik",
            definition: "The state or degree of being easily, economically, or conveniently done.",
            examples: [
              { en: "We must conduct a thorough feasibility study before funding the railway project.", uz: "Temir yo'l loyihasini moliyalashtirishdan oldin uning har tomonlama texnik-iqtisodiy asosini o'rganishimiz kerak." },
              { en: "The engineering team evaluated the technical feasibility of the proposed solar plant.", uz: "Muhandislar guruhi taklif etilgan quyosh stansiyasining texnik amalga oshish imkoniyatini baholadilar." },
              { en: "Rising raw material costs cast serious doubts on the financial feasibility of the scheme.", uz: "Xomashyo narxining oshishi rejaning moliyaviy jihatdan o'zini oqlashiga jiddiy shubha uyg'otdi." }
            ]
          },
          {
            id: "biz-11",
            word: "Liability",
            pos: "noun",
            phonetic: "/ˌlaɪəˈbɪləti/",
            uzbek: "Moliyaviy majburiyat, qarz yuki",
            definition: "A debt or financial obligation recorded on a company's balance sheet.",
            examples: [
              { en: "A sound company should possess sufficient liquid assets to cover its short-term liabilities.", uz: "Barqaror kompaniya o'zining qisqa muddatli majburiyatlarini qoplash uchun yetarli likvid aktivlarga ega bo'lishi kerak." },
              { en: "The business assumed all legal liabilities of the merged organization.", uz: "Biznes qo'shilgan tashkilotning barcha qonuniy majburiyatlarini o'z zimmasiga oldi." },
              { en: "Uninsured property can quickly become a crippling financial liability in an accident.", uz: "Sug'urtalanmagan mulk baxtsiz hodisada tezda og'ir moliyaviy majburiyatga aylanishi mumkin." }
            ]
          },
          {
            id: "biz-12",
            word: "Monopoly",
            pos: "noun",
            phonetic: "/məˈnɒpəli/",
            uzbek: "Monopoliya",
            definition: "The exclusive possession or control of the supply of or trade in a commodity.",
            examples: [
              { en: "Antitrust regulations prevent any single firm from establishing a destructive monopoly.", uz: "Monopoliyaga qarshi qonunlar biron bir kompaniyaning halokatli monopoliya o'rnatishiga to'sqinlik qiladi." },
              { en: "State monopolies in telecommunications have been opened to private competition.", uz: "Telekommunikatsiyadagi davlat monopoliyalari xususiy raqobat uchun ochildi." },
              { en: "Consumers often suffer from higher prices and poorer service under a monopoly.", uz: "Iste'molchilar monopoliya sharoitida ko'pincha yuqori narxlar va sifatsiz xizmatdan aziyat chekishadi." }
            ]
          },
          {
            id: "biz-13",
            word: "Outsource",
            pos: "verb",
            phonetic: "/ˈaʊtsɔːs/",
            uzbek: "Autsorsing qilmoq, tashqi ijrochiga topshirmoq",
            definition: "To obtain services or produce goods from an outside or international supplier.",
            examples: [
              { en: "Many international banks outsource customer support and software maintenance to Asian firms.", uz: "Ko'plab xalqaro banklar mijozlarga xizmat ko'rsatish va dasturiy ta'minotni Osiyo firmalariga autsorsing qiladi." },
              { en: "Outsourcing non-core tasks allows managers to concentrate on strategic business growth.", uz: "Asosiy bo'lmagan vazifalarni autsorsing qilish rahbarlarga biznesning strategik o'sishiga e'tibor qaratish imkonini beradi." },
              { en: "The publisher decided to outsource graphic design and translation services.", uz: "Nashriyot grafik dizayn va tarjima xizmatlarini tashqi ijrochilarga topshirishga qaror qildi." }
            ]
          },
          {
            id: "biz-14",
            word: "Portfolio",
            pos: "noun",
            phonetic: "/pɔːtˈfəʊliəʊ/",
            uzbek: "Investitsiya portfeli",
            definition: "A collection of financial investments like stocks, bonds, and commodities held by an investor.",
            examples: [
              { en: "Financial advisors advise holding a well diversified portfolio across various industries.", uz: "Moliyaviy maslahatchilar turli sohalar bo'yicha yaxshi diversifikatsiyalangan portfelga ega bo'lishni tavsiya qiladilar." },
              { en: "Her investment portfolio includes high-yield tech stocks and government treasury bonds.", uz: "Uning investitsiya portfeli yuqori daromadli texnologik aksiyalar va davlat xazina obligatsiyalarini o'z ichiga oladi." },
              { en: "Managing a billion-dollar investment portfolio requires rigorous risk assessment.", uz: "Milliard dollarlik investitsiya portfelini boshqarish qat'iy xavf baholashni talab qiladi." }
            ]
          },
          {
            id: "biz-15",
            word: "Stakeholder",
            pos: "noun",
            phonetic: "/ˈsteɪkhəʊldə/",
            uzbek: "Manfaatdor tomon, manfaatdor shaxs",
            definition: "A person, group, or organization with an interest or concern in a business.",
            examples: [
              { en: "Executives must balance the competing demands of customers, workers, and shareholders.", uz: "Rahbarlar mijozlar, ishchilar va aksiyadorlar kabi manfaatdor tomonlarning talablarini muvozanatlashlari kerak." },
              { en: "Transparent communication builds long-term trust with key project stakeholders.", uz: "Shaffof muloqot loyihaning asosiy manfaatdor tomonlari bilan uzoq muddatli ishonch hosil qiladi." },
              { en: "Environmental organizations have emerged as crucial stakeholders in mining discussions.", uz: "Ekologik tashkilotlar konchilik bo'yicha muzokaralarda muhim manfaatdor tomon sifatida maydonga chiqdi." }
            ]
          },
          {
            id: "biz-16",
            word: "Subsidiary",
            pos: "noun",
            phonetic: "/səbˈsɪdiəri/",
            uzbek: "Sho''ba korxona",
            definition: "A company controlled by a holding or parent corporation.",
            examples: [
              { en: "The automotive giant established a regional subsidiary in Central Asia.", uz: "Avtomobil giganti Markaziy Osiyoda mintaqaviy sho''ba korxonasini tashkil etdi." },
              { en: "Each subsidiary operates semi-independently while following corporate governance guidelines.", uz: "Har bir sho''ba korxona korporativ boshqaruv ko'rsatmalariga amal qilgan holda yarim mustaqil ish yuritadi." },
              { en: "Profits generated by foreign subsidiaries are consolidated into group accounts annually.", uz: "Xorijiy sho''ba korxonalar tomonidan olingan foyda har yili guruh hisoblarida jamlanadi." }
            ]
          },
          {
            id: "biz-17",
            word: "Turnover",
            pos: "noun",
            phonetic: "/ˈtɜːnəʊvə/",
            uzbek: "Tovar aylanmasi, yalpi daromad",
            definition: "The total amount of money taken in by a business through sales during a given period.",
            examples: [
              { en: "The supermarket reported an annual sales turnover surpassing fifty million dollars.", uz: "Supermarket ellik million dollardan oshiq yillik tovar aylanmasini ma'lum qildi." },
              { en: "High inventory turnover indicates that products are moving off store shelves rapidly.", uz: "Tovar aylanmasining yuqoriligi mahsulotlarning peshtaxtalardan tez sotilayotganini ko'rsatadi." },
              { en: "Despite healthy revenue turnover, net operating profits declined due to inflationary costs.", uz: "Ijobiy daromad aylanmasiga qaramay, inflyatsiya xarajatlari tufayli sof operatsion foyda kamaydi." }
            ]
          },
          {
            id: "biz-18",
            word: "Benchmark",
            pos: "noun",
            phonetic: "/ˈbentʃmɑːk/",
            uzbek: "Etalon, mezon, solishtirish andozasi",
            definition: "A standard or point of reference against which things may be measured.",
            examples: [
              { en: "Customer service response times serve as a crucial quality benchmark in our firm.", uz: "Mijozlarga xizmat ko'rsatish tezligi firmamizda sifatning hal qiluvchi mezoni bo'lib xizmat qiladi." },
              { en: "The European Union automotive standards set a global benchmark for safety and emissions.", uz: "Yevropa Ittifoqining avtomobil standartlari xavfsizlik va chiqindilar bo'yicha global mezonni belgilab beradi." },
              { en: "We benchmark our marketing performance against the leading innovators in the field.", uz: "Biz marketing ko'rsatkichlarimizni sohadagi yetakchi innovatorlar bilan solishtirib baholaymiz." }
            ]
          },
          {
            id: "biz-19",
            word: "Compliance",
            pos: "noun",
            phonetic: "/kəmˈplaɪəns/",
            uzbek: "Qonuniy me'yorlarga muvofiqlik",
            definition: "The action of adhering to corporate rules, regulatory laws, or contractual specifications.",
            examples: [
              { en: "The internal compliance team audits all financial statements for regulatory alignment.", uz: "Ichki nazorat bo'limi barcha moliyaviy hisobotlarni me'yoriy muvofiqlik yuzasidan tekshiradi." },
              { en: "Failure to ensure regulatory compliance can lead to license revocations and massive fines.", uz: "Qonuniy muvofiqlikni ta'minlamaslik litsenziyani bekor qilishga va ulkan jarimalarga sabab bo'lishi mumkin." },
              { en: "Data privacy compliance is essential under international consumer protection laws.", uz: "Ma'lumotlar daxlsizligiga rioya qilish xalqaro iste'molchilar huquqlarini himoya qilish qonunlari bo'yicha shartdir." }
            ]
          },
          {
            id: "biz-20",
            word: "Diversify",
            pos: "verb",
            phonetic: "/daɪˈvɜːsɪfaɪ/",
            uzbek: "Diversifikatsiya qilmoq, xilma-xillashtirmoq",
            definition: "To expand the variety of products, markets, or investments to reduce commercial risk.",
            examples: [
              { en: "Wise farmers diversify their crops to survive changing market demands and weather shifts.", uz: "Oqil dehqonlar bozor talablari va ob-havo o'zgarishlariga bardosh berish uchun ekinlarini xilma-xillashtiradilar." },
              { en: "The corporation seeks to diversify into cloud computing and renewable clean energy.", uz: "Korporatsiya bulutli hisoblash va toza qayta tiklanuvchi energiya sohalariga diversifikatsiya qilishga intilmoqda." },
              { en: "Do not invest all savings in one company; diversify across multiple asset classes.", uz: "Barcha jamg'armangizni bitta kompaniyaga tikmang; mablag'larni turli xil aktivlar bo'yicha taqsimlang." }
            ]
          },
          {
            id: "biz-21",
            word: "Fiscal",
            pos: "adjective",
            phonetic: "/ˈfɪskl/",
            uzbek: "Moliyaviy, davlat byudjeti yoki xazinaga oid",
            definition: "Relating to government revenue, especially taxation, public debt, or financial budgeting.",
            examples: [
              { en: "The government introduced prudent fiscal reforms to stimulate domestic manufacturing.", uz: "Hukumat mahalliy ishlab chiqarishni rag'batlantirish uchun oqilona fiskal islohotlarni joriy qildi." },
              { en: "The corporate fiscal year concludes on the final working day of December.", uz: "Kompaniyaning moliyaviy yili dekabr oyining so'nggi ish kunida yakunlanadi." },
              { en: "Loose fiscal policy without revenue discipline often leads to escalating inflation.", uz: "Daromad intizomisiz erkin fiskal siyosat ko'pincha inflyatsiyaning kuchayishiga sabab bo'ladi." }
            ]
          },
          {
            id: "biz-22",
            word: "Incentive",
            pos: "noun",
            phonetic: "/ɪnˈsentɪv/",
            uzbek: "Rag'batlantiruvchi omil, rag'bat",
            definition: "A financial or motivational reward designed to encourage greater effort or performance.",
            examples: [
              { en: "Tax incentives attract multinational investors to build industrial hubs in rural zones.", uz: "Soliq imtiyozlari ko'pmillatli sarmoyadorlarni qishloq hududlarida sanoat markazlarini qurishga jalb qiladi." },
              { en: "Sales representatives have a strong incentive to surpass their quarterly sales targets.", uz: "Savdo vakillari har chorakdagi savdo rejalarini ortig'i bilan bajarish uchun kuchli rag'batga ega." },
              { en: "Offering gym memberships and education grants provides valuable employee incentives.", uz: "Sport zali a'zoligi va ta'lim grantlarini taklif qilish xodimlar uchun qimmatli rag'batdir." }
            ]
          },
          {
            id: "biz-23",
            word: "Merger",
            pos: "noun",
            phonetic: "/ˈmɜːdʒə/",
            uzbek: "Kompaniyalarning o'zaro birlashishi (qo'shilishi)",
            definition: "The formal combination of two commercial entities into one unified legal enterprise.",
            examples: [
              { en: "The proposed merger between the two airline carriers created a dominant industry leader.", uz: "Ikki aviatashuvchi o'rtasidagi birlashish sohaning yetakchi yetakchisini vujudga keltirdi." },
              { en: "Cultural friction between management teams can complicate post-merger integration.", uz: "Rahbariyat guruhlari o'rtasidagi madaniy kelishmovchiliklar birlashishdan keyingi uyg'unlikni qiyinlashtirishi mumkin." },
              { en: "The merger received formal antitrust approval without mandatory divestiture requirements.", uz: "Birlashish majburiy mulk sotish talablarisiz monopoliyaga qarshi rasmiy ruxsat oldi." }
            ]
          },
          {
            id: "biz-24",
            word: "Overhead",
            pos: "noun",
            phonetic: "/ˈəʊvəhed/",
            uzbek: "Qo'shimcha doimiy xarajatlar (ijara, kommunal)",
            definition: "Ongoing operating expenses not directly tied to creating a specific product or service.",
            examples: [
              { en: "Remote work allowed startups to slash office overhead expenses considerably.", uz: "Masofaviy ish startaplarga ofisning doimiy qo'shimcha xarajatlarini sezilarli darajada qisqartirish imkonini berdi." },
              { en: "Rent, building insurance, and administrative wages are standard business overheads.", uz: "Ijara haqi, binoni sug'urtalash va ma'muriy maoshlar odatiy biznes qo'shimcha xarajatlaridir." },
              { en: "Automation helps factory owners trim operational overhead and expand profit margins.", uz: "Avtomatlashtirish zavod egalariga operatsion xarajatlarni qisqartirish va daromad marjasini oshirishga yordam beradi." }
            ]
          },
          {
            id: "biz-25",
            word: "Venture",
            pos: "noun",
            phonetic: "/ˈventʃə/",
            uzbek: "Tavakkalli tadbirkorlik loyihasi, yangi biznes",
            definition: "A risky or daring commercial undertaking, typically involving capital investment.",
            examples: [
              { en: "Launching an electric aviation venture carries substantial scientific and financial risks.", uz: "Elektr aviatsiya bo'yicha yangi tadbirkorlik loyihasini boshlash katta ilmiy va moliyaviy xatarlarga ega." },
              { en: "The two engineering firms formed a joint venture to build the cross-border bridge.", uz: "Ikki muhandislik firmasi transchegaraviy ko'prikni qurish uchun qo'shma korxona tuzdilar." },
              { en: "Venture capitalists evaluate the founding team's grit as closely as their business plan.", uz: "Venchur sarmoyadorlari ta'sischilar jamoasining qat'iyatini biznes-reja kabi sinchkovlik bilan baholaydilar." }
            ]
          }
        ]
      },
      {
        id: "b2-psychology",
        title: "Psychology & Human Nature (Psixologiya)",
        icon: "fa-brain",
        color: "from-purple-500 to-indigo-700",
        words: [
          {
            id: "psy-1",
            word: "Empathy",
            pos: "noun",
            phonetic: "/ˈempəθi/",
            uzbek: "Empatiya (boshqaning his-tuyg'ularini tushuna olish qobiliyati)",
            definition: "The ability to understand and share the feelings of another.",
            examples: [
              { en: "True leaders demonstrate deep empathy towards the struggles of their team members.", uz: "Haqiqiy yetakchilar o'z jamoasi a'zolarining qiyinchiliklariga chuqur hamdardlik va tushunish bilan yondashadilar." },
              { en: "Reading literary fiction has been shown to enhance social empathy.", uz: "Badiiy adabiyot o'qish ijtimoiy empatiyani kuchaytirishi isbotlangan." },
              { en: "Without empathy, resolving interpersonal conflicts becomes nearly impossible.", uz: "Empatiyasiz insonlararo nizolarni hal qilish deyarli imkonsiz bo'lib qoladi." }
            ]
          },
          {
            id: "psy-2",
            word: "Behavior",
            pos: "noun",
            phonetic: "/bɪˈheɪvjə/",
            uzbek: "Xulq-atvor, xatti-harakat",
            definition: "The way in which one acts or conducts oneself, especially toward others.",
            examples: [
              { en: "Psychologists investigate how environment shapes human behavior.", uz: "Psixologlar atrof-muhit inson xulq-atvorini qanday shakllantirishini tadqiq etadilar." },
              { en: "His courteous behavior left a favorable impression on all interviewers.", uz: "Uning xushmuomala xulq-atvori barcha suhbatdoshlarda ijobiy taassurot qoldirdi." },
              { en: "Cognitive therapy helps patients recognize and adjust disruptive behavior patterns.", uz: "Kognitiv terapiya bemorlarga zararli xatti-harakat odatlarini anglash va o'zgartirishga ko'maklashadi." }
            ]
          },
          {
            id: "psy-3",
            word: "Resilience",
            pos: "noun",
            phonetic: "/rɪˈzɪliəns/",
            uzbek: "Chidamlilik, qiyinchilikdan tez tiklanish qobiliyati",
            definition: "The capacity to recover quickly from difficulties; toughness.",
            examples: [
              { en: "Emotional resilience allows people to bounce back after severe setbacks.", uz: "Hissiy chidamlilik odamlarga og'ir sinovlardan so'ng tezda o'zlarini tiklab olish imkonini beradi." },
              { en: "The resilient community rebuilt their houses promptly after the earthquake.", uz: "Matonatli xalq zilziladan so'ng o'z uylarini tezlik bilan qayta tikladi." },
              { en: "Developing resilience is an essential component of personal maturity.", uz: "Chidamlilikni rivojlantirish shaxsiy yetuklikning muhim tarkibiy qismidir." }
            ]
          },
          {
            id: "psy-4",
            word: "Perception",
            pos: "noun",
            phonetic: "/pəˈsepʃn/",
            uzbek: "Idrok, qarash, tushunish",
            definition: "The way in which something is regarded, understood, or interpreted.",
            examples: [
              { en: "Visual perception varies significantly depending on lighting conditions.", uz: "Ko'rish orqali idrok qilish yoritish sharoitiga qarab sezilarli darajada o'zgaradi." },
              { en: "Public perception of artificial intelligence has shifted over the past decade.", uz: "Sun'iy intellekt bo'yicha jamoatchilik qarashlari so'nggi o'n yillikda o'zgardi." },
              { en: "Travel broadens your worldview and alters your perception of foreign cultures.", uz: "Sayohat dunyoqarashni kengaytiradi va begona madaniyatlar haqidagi tasavvuringizni o'zgartiradi." }
            ]
          },
          {
            id: "psy-5",
            word: "Subconscious",
            pos: "adjective / noun",
            phonetic: "/ˌsʌbˈkɒnʃəs/",
            uzbek: "Ongosti, ongosti kechinmalari",
            definition: "Operating below the normal level of conscious awareness.",
            examples: [
              { en: "Dreams often reveal fears and desires hidden in our subconscious mind.", uz: "Tushlar ko'pincha ongosti qatlamimizda yashiringan qo'rquv va orzularni ochib beradi." },
              { en: "Subconscious biases can subtly influence the decisions we make daily.", uz: "Ongosti mayllari har kuni qabul qiladigan qarorlarimizga sezilarsiz ta'sir qilishi mumkin." },
              { en: "Hypnotherapy attempts to communicate directly with the patient's subconscious.", uz: "Gipnoterapiya bemorning ongosti bilan to'g'ridan-to'g'ri muloqot qilishga harakat qiladi." }
            ]
          },
          {
            id: "psy-6",
            word: "Cognition",
            pos: "noun",
            phonetic: "/kɒɡˈnɪʃn/",
            uzbek: "Idrok etish, bilish jarayoni",
            definition: "The mental action or process of acquiring knowledge and understanding through thought and sense.",
            examples: [
              { en: "Cognitive psychology investigates how attention, memory, and language influence perception.", uz: "Kognitiv psixologiya diqqat, xotira va til idrokka qanday ta'sir qilishini o'rganadi." },
              { en: "Healthy sleep patterns are critical for maintaining sharp cognitive function in old age.", uz: "Sog'lom uyqu tartibi keksayganda aqliy idrok faoliyatini o'tkir saqlash uchun juda muhimdir." },
              { en: "Chronic psychological stress significantly impairs human problem-solving cognition.", uz: "Surunkali ruhiy zo'riqish insonning muammolarni hal qilish idrokini sezilarli darajada susaytiradi." }
            ]
          },
          {
            id: "psy-7",
            word: "Conditioning",
            pos: "noun",
            phonetic: "/kənˈdɪʃənɪŋ/",
            uzbek: "Shartli refleks hosil qilish",
            definition: "The process of training a person or animal to behave in a certain way through repeated stimuli.",
            examples: [
              { en: "Pavlov demonstrated classical conditioning by training dogs to salivate at the sound of a bell.", uz: "Pavlov itlarni qo'ng'iroq ovoziga so'lak ajratishga o'rgatish orqali klassik shartli refleksni isbotladi." },
              { en: "Social conditioning subtly shapes how individuals perceive gender roles in society.", uz: "Ijtimoiy tarbiya insonlarning jamiyatdagi gender rollarini qanday qabul qilishini sezilarsiz shakllantiradi." },
              { en: "Operant conditioning relies on consistent reinforcement and penalties to mold human habits.", uz: "Operant o'rganish inson odatlarini shakllantirishda doimiy rag'batlantirish va jazolarga tayanadi." }
            ]
          },
          {
            id: "psy-8",
            word: "Conformity",
            pos: "noun",
            phonetic: "/kənˈfɔːməti/",
            uzbek: "Boshqalarga ergashish, konformizm",
            definition: "Behavior in accordance with socially accepted conventions, peer standards, or prevailing rules.",
            examples: [
              { en: "Asch's conformity experiments revealed that individuals frequently alter answers to agree with a group.", uz: "Eshning konformizm tajribalari odamlar guruh fikriga qo'shilish uchun o'z javoblarini tez-tez o'zgartirishini ko'rsatdi." },
              { en: "Creative breakthroughs often require rejecting rigid conformity in favor of unconventional thinking.", uz: "Ijodiy yutuqlar ko'pincha qotib qolgan konformizmni rad etib, noodatiy fikrlashni talab qiladi." },
              { en: "Teenage social anxiety can induce powerful pressure toward stylistic conformity.", uz: "O'smirlikdagi ijtimoiy xavotir kiyinish va xulqda boshqalarga o'xshashlikka kuchli bosim o'tkazishi mumkin." }
            ]
          },
          {
            id: "psy-9",
            word: "Ego",
            pos: "noun",
            phonetic: "/ˈiːɡəʊ/",
            uzbek: "O'zlik, «men»lik tuyg'usi",
            definition: "A person's sense of self-esteem, self-importance, or mediating conscious identity.",
            examples: [
              { en: "Constructive criticism from a mentor should not be taken as an attack on your personal ego.", uz: "Ustozning o'rinli tanqidini shaxsiy nafsoniyatingizga qaratilgan hujum deb qabul qilmaslik kerak." },
              { en: "Freud postulated that the conscious ego balances primal instinctual desires and social morality.", uz: "Freyd ongli 'men'lik ibtidoiy istaklar va ijtimoiy axloqni muvozanatlashini ilgari surgan." },
              { en: "Effective collaborative leaders keep their egos in check to empower team members.", uz: "Samarali jamoaviy yetakchilar jamoa a'zolarini qo'llab-quvvatlash uchun o'z kibrlarini jilovlaydilar." }
            ]
          },
          {
            id: "psy-10",
            word: "Extrovert",
            pos: "noun",
            phonetic: "/ˈekstrəvɜːt/",
            uzbek: "Ekstravert, kirishimli odam",
            definition: "An outgoing, overtly expressive person who gains mental energy from social interaction.",
            examples: [
              { en: "Being an extrovert, she thrives in bustling, collaborative office environments.", uz: "Ekstravert bo'lgani sababli, u gavjum va jamoaviy ofis muhitida o'zini juda yaxshi his qiladi." },
              { en: "Extroverts recharge their emotional batteries by interacting with friends and meeting new people.", uz: "Ekstravertlar do'stlar bilan muloqot qilish va yangi odamlar bilan uchrashish orqali ruhiy quvvat oladilar." },
              { en: "Public speaking events are rarely intimidating for a confident extrovert.", uz: "Ommaviy nutq so'zlash tadbirlari o'ziga ishongan ekstravertni kamdan-kam cho'chitadi." }
            ]
          },
          {
            id: "psy-11",
            word: "Introvert",
            pos: "noun",
            phonetic: "/ˈɪntrəvɜːt/",
            uzbek: "Introvert, ichimdagini top odam",
            definition: "A thoughtful, introspective person who recharges energy through quiet solitude.",
            examples: [
              { en: "An introvert often prefers reading a captivating novel at home over attending loud social parties.", uz: "Introvert ko'pincha shovqinli kechalarga borishdan ko'ra uyda qiziqarli roman o'qishni afzal ko'radi." },
              { en: "Introverts excel in roles that demand deep solo analytical focus and quiet deliberation.", uz: "Introvertlar chuqur mustaqil tahliliy diqqat va sokin fikrlashni talab qiladigan vazifalarda a'lo natija ko'rsatadilar." },
              { en: "Understanding introvert communication preferences enhances cross-functional team productivity.", uz: "Introvertlarning muloqot xususiyatlarini tushunish turli bo'limlar jamoasi unumdorligini oshiradi." }
            ]
          },
          {
            id: "psy-12",
            word: "Impulsive",
            pos: "adjective",
            phonetic: "/ɪmˈpʌlsɪv/",
            uzbek: "Hissiyotga beriluvchan, o'ylamay ish qiladigan",
            definition: "Acting or done suddenly without careful reflection, forethought, or planning.",
            examples: [
              { en: "Impulsive buying decisions often lead to unnecessary financial strain.", uz: "O'ylamasdan qilingan xaridlar ko'pincha keraksiz moliyaviy qiyinchiliklarga olib keladi." },
              { en: "Therapy helps individuals regulate impulsive emotional outbursts during heated arguments.", uz: "Psixoterapiya qizg'in bahslar paytida hissiy portlashlarni jilovlashga yordam beradi." },
              { en: "He regretted the impulsive message he sent late at night.", uz: "U kechasi o'ylamasdan yuborgan xabaridan afsuslandi." }
            ]
          },
          {
            id: "psy-13",
            word: "Insecurity",
            pos: "noun",
            phonetic: "/ˌɪnsɪˈkjʊərəti/",
            uzbek: "O'ziga ishonchsizlik, xavotir",
            definition: "Uncertainty or anxiety about oneself; lack of confidence in one's worth or abilities.",
            examples: [
              { en: "Comparing yourself constantly to social media influencers fuels self-doubt and deep insecurity.", uz: "O'zingizni ijtimoiy tarmoqdagi mashhurlar bilan doimiy solishtirish o'zingizga shubha va chuqur ishonchsizlikni kuchaytiradi." },
              { en: "A supportive mentor helped her overcome persistent imposter syndrome and career insecurity.", uz: "Qo'llab-quvvatlovchi ustoz unga o'ziga ishonchsizlik va soxtalik sindromini yengishga yordam berdi." },
              { en: "Childhood trauma frequently manifests in adult relationships as emotional insecurity.", uz: "Bolalikdagi ruhiy jarohat katta yoshdagi munosabatlarda ko'pincha hissiy ishonchsizlik sifatida namoyon bo'ladi." }
            ]
          },
          {
            id: "psy-14",
            word: "Instinct",
            pos: "noun",
            phonetic: "/ˈɪnstɪŋkt/",
            uzbek: "Instinkt, tug'ma mayl",
            definition: "An innate, biologically predetermined response to particular environmental triggers.",
            examples: [
              { en: "Mother birds act on pure parental instinct to protect their vulnerable hatchlings.", uz: "Ona qushlar himoyasiz jo'jalarini asrash uchun sof onalik instinkti asosida harakat qiladilar." },
              { en: "Trust your gut instinct when assessing whether an unfamiliar situation is safe.", uz: "Notanish vaziyatning xavfsiz yoki xavfli ekanini baholashda ichki instinktingizga ishoning." },
              { en: "The fight-or-flight instinct is an evolutionary survival mechanism hardwired in our brains.", uz: "'Jang qil yoki qoch' instinkti miyamizga muhrlangan evolyutsion omon qolish mexanizmidir." }
            ]
          },
          {
            id: "psy-15",
            word: "Neurotic",
            pos: "adjective",
            phonetic: "/njʊəˈrɒtɪk/",
            uzbek: "Nevrotik, ortiqcha xavotirga tushuvchi",
            definition: "Manifesting excessive emotional instability, obsessive anxiety, or compulsive fear.",
            examples: [
              { en: "Her neurotic obsession with cleanliness made relaxing in hotels difficult.", uz: "Uning tozalikka bo'lgan asabiy qiziqishi mehmonxonalarda dam olishini qiyinlashtirar edi." },
              { en: "Cognitive behavioral techniques assist patients in challenging neurotic irrational thoughts.", uz: "Kognitiv-xulq-atvor usullari bemorlarga asabiy mantiqsiz fikrlarni yengishga ko'maklashadi." },
              { en: "High levels of neurotic personality traits correlate with increased vulnerability to burnout.", uz: "Nevrotik xarakter belgilarining yuqoriligi kasbiy toliqishga moyillikning oshishi bilan bog'liqdir." }
            ]
          },
          {
            id: "psy-16",
            word: "Obsession",
            pos: "noun",
            phonetic: "/əbˈseʃn/",
            uzbek: "Qattiq berilish, vasvasa, g'oya",
            definition: "An idea or thought that continually preoccupies or intrudes on a person's mind.",
            examples: [
              { en: "His relentless passion for chess bordered on an unhealthy personal obsession.", uz: "Uning shaxmatga bo'lgan tinimsiz ishtiyoqi qattiq vasvasaga aylanib borayotgan edi." },
              { en: "The detective pursued the unsolved mystery with unwavering obsession.", uz: "Izquvar yechilmagan sirli jinoyatni so'nmas qiziqish va qat'iyat bilan tekshirdi." },
              { en: "Psychologists distinguish between healthy focused dedication and destructive clinical obsessions.", uz: "Psixologlar maqsadga sog'lom intilish bilan halokatli ruhiy vasvasa o'rtasidagi farqni ajratadilar." }
            ]
          },
          {
            id: "psy-17",
            word: "Phobia",
            pos: "noun",
            phonetic: "/ˈfəʊbiə/",
            uzbek: "Fobiya, kuchli asossiz qo'rquv",
            definition: "An irrational, persistent fear of a specific object, creature, or social situation.",
            examples: [
              { en: "Claustrophobia is the intense phobia of enclosed or cramped elevator spaces.", uz: "Klaustrofobiya tor yoki yopiq lift xonalaridan qattiq asossiz qo'rqishdir." },
              { en: "Gradual exposure therapy helps individuals conquer crippling animal phobias permanently.", uz: "Bosqichma-bosqich ko'niktirish terapiyasi odamlarga hayvonlarga oid kuchli qo'rquvlarni butunlay yengishga yordam beradi." },
              { en: "Social phobia makes interacting with large groups of strangers intensely distressing.", uz: "Ijtimoiy fobiya notanish odamlarning katta guruhlari bilan muloqot qilishni nihoyatda qiyinlashtiradi." }
            ]
          },
          {
            id: "psy-18",
            word: "Rationalize",
            pos: "verb",
            phonetic: "/ˈræʃnəlaɪz/",
            uzbek: "Mantiqan o'zini oqlamoq",
            definition: "To attempt to explain or justify problematic behavior with plausible, seemingly logical reasons.",
            examples: [
              { en: "People often rationalize unhealthy snacking habits by promising to exercise tomorrow.", uz: "Odamlar ko'pincha ertaga mashq qilishni va'da qilib, zararli ovqatlanish odatlarini oqlashga harakat qiladilar." },
              { en: "He attempted to rationalize breaking the company rules as a necessary shortcut.", uz: "U kompaniya qoidalarini buzganini zaruriy yengillik deb oqlashga urindi." },
              { en: "Psychological defense mechanisms lead individuals to rationalize unethical decisions.", uz: "Ruhiy himoya mexanizmlari insonlarni noaxloqiy qarorlarni mantiqan oqlashga undaydi." }
            ]
          },
          {
            id: "psy-19",
            word: "Repression",
            pos: "noun",
            phonetic: "/rɪˈpreʃn/",
            uzbek: "Hissiyotlarni ongsiz bostirish",
            definition: "The psychological attempt to exclude painful thoughts or traumatic memories from conscious awareness.",
            examples: [
              { en: "Repression of traumatic childhood experiences can cause unexpected emotional problems in adulthood.", uz: "Bolalikdagi og'ir kechinmalarni bostirish katta yoshda kutilmagan hissiy muammolarga sabab bo'lishi mumkin." },
              { en: "Psychotherapy helps patients gently uncover repressed grief and begin true healing.", uz: "Psixoterapiya bemorlarga bostirilgan qayg'uni ohista yuzaga chiqarishga va haqiqiy tuzalishni boshlashga ko'maklashadi." },
              { en: "Emotional repression often leads to physical symptoms such as chronic muscle tension.", uz: "Hissiyotlarni bostirish ko'pincha surunkali mushak tarangligi kabi jismoniy alomatlarga olib keladi." }
            ]
          },
          {
            id: "psy-20",
            word: "Self-esteem",
            pos: "noun",
            phonetic: "/ˌself ɪˈstiːm/",
            uzbek: "O'ziga bo'lgan hurmat, o'z qadrini bilish",
            definition: "Confidence in one's own worth, personal abilities, and fundamental self-respect.",
            examples: [
              { en: "Constructive encouragement from teachers boosts children's academic self-esteem.", uz: "O'qituvchilarning ijobiy dalda berishi bolalarning o'qishga bo'lgan ishonchi va o'z qadrini oshiradi." },
              { en: "Developing healthy self-esteem enables young adults to establish firm personal boundaries.", uz: "Sog'lom o'z-o'zini hurmat qilish yoshlarga mustahkam shaxsiy chegaralarni o'rnatish imkonini beradi." },
              { en: "Experiencing repeated failures without supportive guidance can erode a student's self-esteem.", uz: "Qo'llab-quvvatlashsiz ketma-ket muvaffaqiyatsizlikka uchrash talabaning o'ziga bo'lgan ishonchini yemirishi mumkin." }
            ]
          },
          {
            id: "psy-21",
            word: "Stimulus",
            pos: "noun",
            phonetic: "/ˈstɪmjələs/",
            uzbek: "Turtki, tashqi ta'sir, stimul",
            definition: "A thing or event that evokes a specific physiological or psychological reaction.",
            examples: [
              { en: "A sudden flash of lightning serves as a visual stimulus triggering an involuntary blink.", uz: "Chaqmoqning to'satdan chaqnashi ko'zning beixtiyor miltillashiga sabab bo'luvchi vizual ta'sirdir." },
              { en: "Children need engaging intellectual stimuli to foster brain development.", uz: "Bolalarga miya rivojlanishini rag'batlantirish uchun qiziqarli aqliy turtkilar zarur." },
              { en: "Researchers monitored how the brain responds to varied emotional musical stimuli.", uz: "Tadqiqotchilar miyaning turli hissiy musiqiy ta'sirlarga qanday munosabat bildirishini kuzatdilar." }
            ]
          },
          {
            id: "psy-22",
            word: "Suppression",
            pos: "noun",
            phonetic: "/səˈpreʃn/",
            uzbek: "Hissiyotni ongli to'xtatish (jilovlash)",
            definition: "The conscious act of stopping yourself from thinking or displaying particular emotions.",
            examples: [
              { en: "The deliberate suppression of righteous anger can elevate cardiovascular stress levels.", uz: "Haqli g'azabni ongli ravishda jilovlash yurak-qon tomir zo'riqishini oshirishi mumkin." },
              { en: "Unlike unconscious repression, emotional suppression involves a deliberate conscious effort.", uz: "Ongsiz bostirishdan farqli o'laroq, hissiyotni ongli tiyish qasddan qilingan irodaviy harakatni talab qiladi." },
              { en: "Actors learn expressive techniques to replace emotional suppression with authentic vulnerability.", uz: "Aktyorlar hissiyotni yashirish o'rniga samimiy his qilishni ifodalash texnikalarini o'rganadilar." }
            ]
          },
          {
            id: "psy-23",
            word: "Temperament",
            pos: "noun",
            phonetic: "/ˈtemprəmənt/",
            uzbek: "Mijoz, fe'l-atvor",
            definition: "A person's inborn emotional nature, disposition, and characteristic way of responding.",
            examples: [
              { en: "Her calm and patient temperament makes her an outstanding kindergarten instructor.", uz: "Uning bosiq va sabrli fe'l-atvori uni ajoyib bog'cha tarbiyachisiga aylantiradi." },
              { en: "Studies suggest that genetic predispositions account for core traits of human temperament.", uz: "Tadqiqotlar inson mijozining asosiy jihatlarida irsiy moyillik muhim o'rin tutishini ko'rsatadi." },
              { en: "Understanding differences in employee temperament helps leaders resolve office conflicts.", uz: "Xodimlar fe'l-atvoridagi farqlarni tushunish rahbarlarga ofisdagi kelishmovchiliklarni bartaraf etishga yordam beradi." }
            ]
          },
          {
            id: "psy-24",
            word: "Trauma",
            pos: "noun",
            phonetic: "/ˈtrɔːmə/",
            uzbek: "Ruhiy jarohat, ruhiy zarba",
            definition: "A deeply distressing or emotionally disturbing experience that impairs psychological functioning.",
            examples: [
              { en: "Surviving a catastrophic natural disaster can inflict deep emotional trauma on families.", uz: "Halokatli tabiiy ofatdan omon qolish oilalarga chuqur ruhiy zarba yetkazishi mumkin." },
              { en: "Specialized trauma counseling provides safe pathways toward emotional recovery.", uz: "Maxsus ruhiy jarohat maslahatlari hissiy sog'ayish sari xavfsiz yo'llarni taqdim etadi." },
              { en: "Childhood emotional neglect can leave psychological trauma lasting into adulthood.", uz: "Bolalikda e'tibordan chetda qolish katta yoshgacha davom etadigan ruhiy jarohat qoldirishi mumkin." }
            ]
          },
          {
            id: "psy-25",
            word: "Vulnerable",
            pos: "adjective",
            phonetic: "/ˈvʌlnərəbl/",
            uzbek: "Zaif, nozik, himoyasiz",
            definition: "Susceptible to emotional wounding, physical attack, or psychological harm.",
            examples: [
              { en: "Opening up about your deepest fears requires being emotionally honest and vulnerable.", uz: "Eng chuqur qo'rquvlaringiz haqida so'zlash hissiy jihatdan samimiy va zaif bo'lishni talab qiladi." },
              { en: "Elderly citizens are especially vulnerable to sophisticated internet scamming operations.", uz: "Keksa fuqarolar murakkab internet firibgarliklariga nisbatan ayniqsa himoyasizdirlar." },
              { en: "Creating a safe group atmosphere encourages vulnerable and authentic conversations.", uz: "Guruhda xavfsiz muhit yaratish samimiy va nozik suhbatlar qurishga imkon beradi." }
            ]
          }
        ]
      },
      {
        id: "b2-science",
        title: "Science & Innovation (Fan va Innovatsiya)",
        icon: "fa-atom",
        color: "from-blue-600 to-indigo-800",
        words: [
          {
            id: "sci-1",
            word: "Breakthrough",
            pos: "noun",
            phonetic: "/ˈbreɪkθruː/",
            uzbek: "Katta kashfiyot, burilish nuqtasi",
            definition: "A sudden, dramatic, and important discovery or development.",
            examples: [
              { en: "Scientists achieved a major medical breakthrough in cancer treatment.", uz: "Olimlar saratonni davolash sohasida ulkan ilmiy kashfiyotga erishdilar." },
              { en: "The discovery of antibiotics was a revolutionary breakthrough in medicine.", uz: "Antibiotiklarning kashf etilishi tibbiyotdagi inqilobiy burilish nuqtasi bo'ldi." },
              { en: "Researchers are hoping for a breakthrough in renewable battery technology.", uz: "Tadqiqotchilar qayta tiklanuvchi akkumulyator texnologiyasida yutuq kutmoqdalar." }
            ]
          },
          {
            id: "sci-2",
            word: "Hypothesis",
            pos: "noun",
            phonetic: "/haɪˈpɒθəsɪs/",
            uzbek: "Faraz, gipoteza",
            definition: "A proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
            examples: [
              { en: "The researcher designed a controlled experiment to test her hypothesis.", uz: "Tadqiqotchi o'z farazini (gipotezasini) tekshirish uchun nazoratli tajriba o'tkazdi." },
              { en: "The experimental data confirmed the initial hypothesis beyond doubt.", uz: "Tajriba ma'lumotlari dastlabki farazni shubhasiz tasdiqladi." },
              { en: "If the hypothesis is proven false, a new theoretical model must be proposed.", uz: "Agar gipoteza noto'g'ri ekani isbotlansa, yangi nazariy model taklif qilinishi kerak." }
            ]
          },
          {
            id: "sci-3",
            word: "Sustainable",
            pos: "adjective",
            phonetic: "/səˈsteɪnəbl/",
            uzbek: "Barqaror, tabiatga zarar yetkazmaydigan",
            definition: "Able to be maintained at a certain rate or level; conserving ecological balance.",
            examples: [
              { en: "Solar and wind energy are prime examples of sustainable energy sources.", uz: "Quyosh va shamol energiyasi barqaror energiya manbalarining yorqin namunasidir." },
              { en: "We must adopt sustainable agricultural practices to protect our soil.", uz: "Tuprog'imizni asrash uchun barqaror qishloq xo'jaligi usullarini qo'llashimiz kerak." },
              { en: "The company pledged to achieve 100% sustainable packaging by 2030.", uz: "Kompaniya 2030 yilga kelib 100% ekologik barqaror qadoqlashga o'tishni va'da qildi." }
            ]
          },
          {
            id: "sci-4",
            word: "Phenomenon",
            pos: "noun",
            phonetic: "/fəˈnɒmɪnən/",
            uzbek: "Hodisa, fenomen",
            definition: "A fact or situation that is observed to exist or happen, especially one whose cause is in question.",
            examples: [
              { en: "The northern lights are a breathtaking natural optical phenomenon.", uz: "Shimoliy yog'du aql bovar qilmas darajada go'zal tabiiy optik hodisadir." },
              { en: "Sociologists are studying the phenomenon of rapid urbanization.", uz: "Sotsiologlar tezkor urbanizatsiya (shaharlashish) fenomenini o'rganmoqdalar." },
              { en: "Gravity is a universal physical phenomenon that governs cosmic orbits.", uz: "Gravitatsiya (tortishish kuchi) samoviy orbitalarni boshqaradigan universal fizik hodisadir." }
            ]
          },
          {
            id: "sci-5",
            word: "Artificial",
            pos: "adjective",
            phonetic: "/ˌɑːtɪˈfɪʃl/",
            uzbek: "Sun'iy, qo'lda yasalgan",
            definition: "Made or produced by human beings rather than occurring naturally.",
            examples: [
              { en: "Artificial intelligence algorithms are transforming countless modern industries.", uz: "Sun'iy intellekt algoritmlari son-sanoqsiz zamonaviy sohalarni o'zgartirmoqda." },
              { en: "The greenhouse maintains artificial lighting to speed up plant growth.", uz: "Issiqxona o'simliklarning o'sishini tezlashtirish uchun sun'iy yoritishni ta'minlaydi." },
              { en: "Some foods contain artificial sweeteners instead of natural sugar.", uz: "Ba'zi mahsulotlar tabiiy shakar o'rniga sun'iy tatlandiruvchilarni o'z ichiga oladi." }
            ]
          },
          {
            id: "sci-6",
            word: "Acceleration",
            pos: "noun",
            phonetic: "/əkˌseləˈreɪʃn/",
            uzbek: "Tezlanish",
            definition: "The rate at which an object's velocity changes with respect to time.",
            examples: [
              { en: "Gravity causes falling objects near Earth to experience uniform downward acceleration.", uz: "Gravitatsiya Yer yaqinida tushayotgan jismlarga bir xil pastga yo'nalgan tezlanish beradi." },
              { en: "The sports car boasts incredible acceleration, reaching sixty miles per hour in three seconds.", uz: "Sport avtomobili aqlbovar qilmas tezlanishga ega bo'lib, uch soniyada soatiga oltmish mil tezlikka erishadi." },
              { en: "In physics, acceleration occurs whenever speed increases, decreases, or direction alters.", uz: "Fizikada tezlanish tezlik oshganda, kamayganda yoki yo'nalish o'zgarganda sodir bo'ladi." }
            ]
          },
          {
            id: "sci-7",
            word: "Biodiversity",
            pos: "noun",
            phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/",
            uzbek: "Biologik xilma-xillik",
            definition: "The rich variety of animal, plant, and microbiological life inhabiting an ecosystem.",
            examples: [
              { en: "Tropical rainforests harbor unmatched biodiversity, with thousands of undiscovered plant species.", uz: "Tropik yomg'ir o'rmonlari minglab kashf etilmagan o'simlik turlari bilan tengsiz biologik xilma-xillikni o'zida saqlaydi." },
              { en: "Protecting biodiversity is vital for maintaining ecological resilience against agricultural diseases.", uz: "Biologik xilma-xillikni asrash ekin kasalliklariga qarshi ekologik barqarorlikni ta'minlashda juda muhimdir." },
              { en: "Pollution and global warming pose an existential threat to ocean coral biodiversity.", uz: "Ifloslanish va global isish okean marjonlarining biologik xilma-xilligiga jiddiy xavf solmoqda." }
            ]
          },
          {
            id: "sci-8",
            word: "Catalyst",
            pos: "noun",
            phonetic: "/ˈkætəlɪst/",
            uzbek: "Katalizator, jarayonni tezlashtiruvchi omil",
            definition: "A substance that dramatically increases the rate of a chemical reaction without undergoing permanent alteration.",
            examples: [
              { en: "Enzymes act as biological catalysts enabling essential metabolic reactions inside living cells.", uz: "Fermentlar tirik hujayralar ichidagi muhim moddalar almashinuvi reaksiyalarini tezlashtiruvchi biologik katalizatorlardir." },
              { en: "The introduction of the high-speed internet proved to be a catalyst for economic modernization.", uz: "Tezkor internetning joriy etilishi iqtisodiyotni modernizatsiya qilish uchun kuchli turtki bo'lib xizmat qildi." },
              { en: "Automotive catalytic converters transform noxious exhaust gases into less harmful vapors.", uz: "Avtomobil katalizatorlari zararli gazlarni kamroq zaharli bug'larga aylantiradi." }
            ]
          },
          {
            id: "sci-9",
            word: "Cellular",
            pos: "adjective",
            phonetic: "/ˈseljələ/",
            uzbek: "Hujayraviy, hujayraga oid",
            definition: "Relating to or consisting of microscopic living cells.",
            examples: [
              { en: "Biologists utilize high-powered electron microscopes to examine detailed cellular structures.", uz: "Biologlar hujayraning batafsil tuzilishini o'rganish uchun yuqori quvvatli elektron mikroskoplardan foydalanadilar." },
              { en: "Cellular respiration converts glucose and oxygen into usable adenosine triphosphate energy.", uz: "Hujayra nafas olishi glyukoza va kislorodni foydali ATF energiyasiga aylantiradi." },
              { en: "Damage to cellular DNA can induce uncontrolled malignant tumor replication.", uz: "Hujayra DNKsining zararlanishi xavfli o'simta hujayralarining nazoratsiz ko'payishiga sabab bo'lishi mumkin." }
            ]
          },
          {
            id: "sci-10",
            word: "Chromosome",
            pos: "noun",
            phonetic: "/ˈkrəʊməsəʊm/",
            uzbek: "Xromosoma",
            definition: "A threadlike structure of nucleic acids carrying hereditary genetic information in living cells.",
            examples: [
              { en: "Typical human somatic cells contain forty-six chromosomes arranged in twenty-three pairs.", uz: "Odatdagi inson tanasi hujayralari yigirma uch juftlikda joylashgan qirq oltita xromosomani o'z ichiga oladi." },
              { en: "Chromosomes replicate precisely during mitosis to guarantee identical daughter cells.", uz: "Xromosomalar bir xil qiz hujayralarni ta'minlash uchun mitoz davrida aniq nusxalanadi." },
              { en: "Genetic screening identifies structural abnormalities across fetal chromosomes.", uz: "Genetik tekshiruv homila xromosomalaridagi tuzilmaviy buzilishlarni aniqlaydi." }
            ]
          },
          {
            id: "sci-11",
            word: "Combustion",
            pos: "noun",
            phonetic: "/kəmˈbʌstʃən/",
            uzbek: "Yonish jarayoni",
            definition: "A high-temperature chemical reaction between a fuel and oxidant producing heat and light.",
            examples: [
              { en: "Internal combustion engines burn gasoline to generate kinetic mechanical motion.", uz: "Ichki yonuv dvigatellari mexanik harakat hosil qilish uchun benzinni yoqadi." },
              { en: "Incomplete combustion of hydrocarbons produces dangerous carbon monoxide gas.", uz: "Uglevodorodlarning chala yonishi xavfli is gazi ajralishiga sabab bo'ladi." },
              { en: "Combustion requires three fundamental ingredients: sufficient fuel, oxygen, and ignition heat.", uz: "Yonish jarayoni uchta asosiy omilni talab qiladi: yetarli yoqilg'i, kislorod va o't oldirish harorati." }
            ]
          },
          {
            id: "sci-12",
            word: "Density",
            pos: "noun",
            phonetic: "/ˈdensəti/",
            uzbek: "Zichlik",
            definition: "The degree of compactness of a substance, defined as mass divided by unit volume.",
            examples: [
              { en: "Ice floats on water because its crystalline solid density is less than liquid water.", uz: "Muz suvda suzadi, chunki uning qattiq kristall zichligi suyuq suvnnikidan kamroqdir." },
              { en: "Lead is prized in radiation shielding owing to its exceptionally high atomic density.", uz: "Qo'rg'oshin o'ta yuqori atom zichligi sababli radiatsiyadan himoyalanishda yuqori baholanadi." },
              { en: "Astronomers calculated the astonishing density of collapsed neutron stars.", uz: "Astronomlar siqilgan neytron yulduzlarining hayratlanarli zichligini hisoblab chiqdilar." }
            ]
          },
          {
            id: "sci-13",
            word: "Electromagnetism",
            pos: "noun",
            phonetic: "/ɪˌlektrəʊˈmæɡnətɪzəm/",
            uzbek: "Elektromagnitizm",
            definition: "The fundamental physical interaction occurring between electrically charged subatomic particles.",
            examples: [
              { en: "James Clerk Maxwell formulated the unified mathematical equations of electromagnetism.", uz: "Jeyms Klerk Maksvell elektromagnitizmning yagona matematik tenglamalarini yaratgan." },
              { en: "Electric motors operate on principles of electromagnetism to convert current into rotation.", uz: "Elektr motorlari tokni aylanish harakatiga aylantirish uchun elektromagnitizm qonunlariga tayanadi." },
              { en: "Light itself travels as an electromagnetic wave through the vacuum of space.", uz: "Yorug'likning o'zi fazoning vakuumida elektromagnit to'lqin sifatida harakatlanadi." }
            ]
          },
          {
            id: "sci-14",
            word: "Equation",
            pos: "noun",
            phonetic: "/ɪˈkweɪʒn/",
            uzbek: "Tenglama",
            definition: "A mathematical statement demonstrating the equality of two quantified expressions.",
            examples: [
              { en: "Einstein's renowned equation E equals mc squared links mass directly to energy.", uz: "Eynshteynning mashhur 'E barobar mc kvadrat' tenglamasi massani to'g'ridan-to'g'ri energiyaga bog'laydi." },
              { en: "Solving non-linear differential equations often requires supercomputer calculations.", uz: "Chiziqli bo'lmagan differensial tenglamalarni yechish ko'pincha superkompyuter hisoblashlarini talab qiladi." },
              { en: "Balance the chemical equation before determining stoichiometric reaction yields.", uz: "Reaksiya mahsulotlari miqdorini aniqlashdan oldin kimyoviy tenglamani tenglashtirib oling." }
            ]
          },
          {
            id: "sci-15",
            word: "Friction",
            pos: "noun",
            phonetic: "/ˈfrɪkʃn/",
            uzbek: "Ishqalanish kuchi",
            definition: "The mechanical resistance encountered when one solid body glides or rolls over another.",
            examples: [
              { en: "Applying engine lubricant minimizes harmful friction between moving metal pistons.", uz: "Motor moyini qo'llash harakatlanuvchi metall porshenlar orasidagi zararli ishqalanishni kamaytiradi." },
              { en: "Bicycle brakes utilize high friction rubber pads to halt rotating wheels rapidly.", uz: "Velosiped tormozlari aylanayotgan g'ildiraklarni tezda to'xtatish uchun yuqori ishqalanishli rezina qoplamalardan foydalanadi." },
              { en: "Atmospheric friction generates intense heat when meteorites enter Earth's air.", uz: "Meteoritlar Yer atmosferasiga kirganda havodagi ishqalanish ulkan issiqlikni hosil qiladi." }
            ]
          },
          {
            id: "sci-16",
            word: "Genetics",
            pos: "noun",
            phonetic: "/dʒəˈnetɪks/",
            uzbek: "Genetika",
            definition: "The scientific discipline studying heredity and inherited traits across generations.",
            examples: [
              { en: "Modern genetics has revolutionized personalized cancer treatments and gene therapy.", uz: "Zamonaviy genetika saratonni davolash va gen terapiyasida tub burilish yasadi." },
              { en: "Mendel's experiments on pea plants uncovered the foundational principles of genetics.", uz: "Mendelning no'xat o'simliklari ustidagi tajribalari genetikaning asosiy tamoyillarini kashf etdi." },
              { en: "Agricultural genetics develops drought-resistant hybrid wheat cultivars.", uz: "Qishloq xo'jaligi genetikasi qurg'oqchilikka chidamli gibrid bug'doy navlarini yaratadi." }
            ]
          },
          {
            id: "sci-17",
            word: "Gravity",
            pos: "noun",
            phonetic: "/ˈɡrævəti/",
            uzbek: "Tortishish kuchi, gravitatsiya",
            definition: "The universal attractive force drawing celestial bodies and objects with mass toward each other.",
            examples: [
              { en: "Lunar gravity is roughly one-sixth the gravitational pull experienced on Earth.", uz: "Oyning tortishish kuchi Yerda his qilinadigan tortishish kuchining taxminan oltidan biriga teng." },
              { en: "Gravity keeps the solar planets moving in stable, predictable elliptical orbits.", uz: "Tortishish kuchi quyosh tizimidagi sayyoralarni barqaror va oldindan aytib bo'ladigan elliptik orbitalarda ushlab turadi." },
              { en: "Isaac Newton formulated the universal law of gravity after observing falling apples.", uz: "Isaak Nyuton tushayotgan olmalarni kuzatgandan so'ng butun olam tortishish qonunini yaratdi." }
            ]
          },
          {
            id: "sci-18",
            word: "Molecule",
            pos: "noun",
            phonetic: "/ˈmɒlɪkjuːl/",
            uzbek: "Molekula",
            definition: "The smallest unit of a compound that retains its chemical properties, consisting of bonded atoms.",
            examples: [
              { en: "A single water molecule consists of two hydrogen atoms bonded to one oxygen atom.", uz: "Bitta suv molekulasi bitta kislorod atomiga birikkan ikkita vodorod atomidan iborat." },
              { en: "Complex organic molecules form the fundamental building blocks of biological life.", uz: "Murakkab organik molekulalar biologik hayotning asosiy poydevorini tashkil etadi." },
              { en: "Researchers synthesized an innovative molecule designed to target antibiotic-resistant bacteria.", uz: "Tadqiqotchilar antibiotiklarga chidamli bakteriyalarni nishonga oluvchi innovatsion molekulani sintez qildilar." }
            ]
          },
          {
            id: "sci-19",
            word: "Mutation",
            pos: "noun",
            phonetic: "/mjuːˈteɪʃn/",
            uzbek: "Mutatsiya, genetik o'zgarish",
            definition: "A permanent alteration in the genetic sequence of a genomic sequence.",
            examples: [
              { en: "Beneficial genetic mutations drive biological adaptation through evolutionary natural selection.", uz: "Foydali genetik mutatsiyalar evolyutsion tabiiy tanlanish orqali biologik moslashuvni harakatlantiradi." },
              { en: "Exposure to ultraviolet radiation can cause harmful cellular mutations in skin cells.", uz: "Ultrabinafsha nurlanishiga uchrash teri hujayralarida zararli hujayra mutatsiyalarini keltirib chiqarishi mumkin." },
              { en: "Scientists tracked the rapid viral mutations across seasonal influenza strains.", uz: "Olimlar mavsumiy gripp shtammlaridagi tezkor virus mutatsiyalarini kuzatib bordilar." }
            ]
          },
          {
            id: "sci-20",
            word: "Nanotechnology",
            pos: "noun",
            phonetic: "/ˌnænəʊtekˈnɒlədʒi/",
            uzbek: "Nanotexnologiya",
            definition: "The engineering and manipulation of materials on an atomic or molecular scale.",
            examples: [
              { en: "Nanotechnology enables the fabrication of microscopic computer chips with immense computing speed.", uz: "Nanotexnologiya ulkan hisoblash tezligiga ega mikroskopik kompyuter chiplarini ishlab chiqarish imkonini beradi." },
              { en: "Medical nanotechnology is developing smart nanorobots capable of delivering chemotherapy directly to tumors.", uz: "Tibbiy nanotexnologiya kimyoterapiyani to'g'ridan-to'g'ri o'smalarga yetkazib beruvchi aqlli nanorobotlarni yaratmoqda." },
              { en: "Nanotechnology coatings make fabrics waterproof, stain-resistant, and scratch-proof.", uz: "Nanotexnologik qoplamalar matolarni suv o'tkazmaydigan, dog' yuqmaydigan va tirnalmaydigan qiladi." }
            ]
          },
          {
            id: "sci-21",
            word: "Optics",
            pos: "noun",
            phonetic: "/ˈɒptɪks/",
            uzbek: "Optika (yorug'lik fizikasi)",
            definition: "The branch of physics studying the properties, behaviors, and instruments of light.",
            examples: [
              { en: "Advances in fiber optics allow ultra-fast global internet data transmission under oceans.", uz: "Tolali optika sohasidagi yutuqlar okeanlar osti orqali o'ta tezkor global internet uzatilishini ta'minlaydi." },
              { en: "Precision optics in astronomical telescopes reveal galaxies billions of light-years away.", uz: "Astronomik teleskoplardagi aniq optika milliardlab yorug'lik yili uzoqlikdagi galaktikalarni namoyon etadi." },
              { en: "Optics research underlies laser technology, microscopy, and modern digital cameras.", uz: "Optika tadqiqotlari lazer texnologiyasi, mikroskopiya va zamonaviy raqamli kameralarning asosini tashkil qiladi." }
            ]
          },
          {
            id: "sci-22",
            word: "Radiation",
            pos: "noun",
            phonetic: "/ˌreɪdiˈeɪʃn/",
            uzbek: "Radiatsiya, nurlanish",
            definition: "Energy emitted as electromagnetic waves or moving subatomic particles.",
            examples: [
              { en: "Specialized lead shielding protects hospital radiographers from excess X-ray radiation.", uz: "Maxsus qo'rg'oshin himoyasi shifoxona rentgenologlarini ortiqcha rentgen nurlanishidan saqlaydi." },
              { en: "Solar radiation warms the planet and provides energy driving Earth's meteorological cycles.", uz: "Quyosh nurlanishi sayyoramizni isitadi va Yerning meteorologik davrlarini harakatlantiruvchi quvvatni beradi." },
              { en: "Radiation therapy is used with high precision to target and destroy localized tumors.", uz: "Radiatsiya terapiyasi mahalliy o'smalarni nishonga olish va yo'q qilish uchun yuqori aniqlikda qo'llaniladi." }
            ]
          },
          {
            id: "sci-23",
            word: "Spectrum",
            pos: "noun",
            phonetic: "/ˈspektrəm/",
            uzbek: "Spektr, nurlar qamrovi",
            definition: "The band of electromagnetic wavelengths produced by dispersing white light through a prism.",
            examples: [
              { en: "Passing sunlight through a glass prism splits light into the visible rainbow spectrum.", uz: "Quyosh nurini shisha prizmadan o'tkazish yorug'likni ko'rinuvchi kamalak spektriga ajratadi." },
              { en: "Infrared and ultraviolet wavelengths fall beyond the visible electromagnetic spectrum.", uz: "Infraqizil va ultrabinafsha to'lqin uzunliklari ko'rinadigan elektromagnit spektrdan tashqarida joylashgan." },
              { en: "Broad-spectrum antibiotics treat infections caused by a wide range of bacterial organisms.", uz: "Keng spektrli antibiotiklar keng doiradagi bakteriyalar keltirib chiqargan infeksiyalarni davolaydi." }
            ]
          },
          {
            id: "sci-24",
            word: "Thermodynamics",
            pos: "noun",
            phonetic: "/ˌθɜːməʊdaɪˈnæmɪks/",
            uzbek: "Termodinamika",
            definition: "The branch of physical science studying the relations between heat, work, temperature, and energy.",
            examples: [
              { en: "The first law of thermodynamics states that total energy in a closed system remains conserved.", uz: "Termodinamikaning birinchi qonuni yopiq tizimdagi umumiy energiya saqlanib qolishini ta'kidlaydi." },
              { en: "Engineering steam turbines requires an in-depth understanding of applied thermodynamics.", uz: "Bug' turbinalarini loyihalash amaliy termodinamikani chuqur tushunishni talab qiladi." },
              { en: "Entropy principles in thermodynamics dictate the irreversible direction of natural energy flow.", uz: "Termodinamikadagi entropiya qonunlari tabiiy energiya oqimining ortga qaytmas yo'nalishini belgilab beradi." }
            ]
          },
          {
            id: "sci-25",
            word: "Velocity",
            pos: "noun",
            phonetic: "/vəˈlɒsəti/",
            uzbek: "Tezlik (yo'nalishli vektor tezlik)",
            definition: "The rate of displacement of an object in a specified directional vector.",
            examples: [
              { en: "A spacecraft must attain escape velocity to break free from Earth's gravitational field.", uz: "Kosmik kema Yerning tortishish maydonidan chiqib ketish uchun ikkinchi kosmik tezlikka erishishi kerak." },
              { en: "Unlike scalar speed, physical velocity defines both the speed of travel and exact direction.", uz: "Skalyar tezlikdan farqli o'laroq, fizik vektor tezlik harakat tezligini ham, aniq yo'nalishni ham belgilaydi." },
              { en: "Wind velocity and atmospheric pressure dictate commercial aircraft flight paths.", uz: "Shamol tezligi va atmosfera bosimi fuqaro aviatsiyasi samolyotlarining parvoz yo'nalishini belgilaydi." }
            ]
          }
        ]
      }
    ]
  },
  C1: {
    levelName: "C1 - Ilg'or (Advanced)",
    description: "Akademik tahlil, nozik iboralar va falsafiy mulohazalar uchun boy lug'at",
    color: "rose",
    badge: "C1 Ilg'or",
    topics: [
      {
        id: "c1-academic",
        title: "Academic & Research Discourse (Akademik Nutq)",
        icon: "fa-book-bookmark",
        color: "from-rose-500 to-pink-600",
        words: [
          {
            id: "acd-1",
            word: "Paradigm",
            pos: "noun",
            phonetic: "/ˈpærədaɪm/",
            uzbek: "Paradigma, qolip, fundamental qarashlar tizimi",
            definition: "A typical example, pattern, or model of something; a distinct set of concepts or thought patterns.",
            examples: [
              { en: "Quantum mechanics triggered a profound paradigm shift in modern theoretical physics.", uz: "Kvant mexanikasi zamonaviy nazariy fizikada chuqur paradigma o'zgarishini yuzaga keltirdi." },
              { en: "The scholar introduced a brand-new educational paradigm centered on personalized learning.", uz: "Olim shaxsiy yondashuvga asoslangan butunlay yangi ta'lim paradigmasini ilgari surdi." },
              { en: "We must rethink the prevailing paradigm of limitless economic consumption.", uz: "Biz cheksiz iqtisodiy iste'molga asoslangan hukmron paradigmani qayta ko'rib chiqishimiz kerak." }
            ]
          },
          {
            id: "acd-2",
            word: "Comprehensive",
            pos: "adjective",
            phonetic: "/ˌkɒmprɪˈhensɪv/",
            uzbek: "Har tomonlama, keng qamrovli, mukammal",
            definition: "Complete; including all or nearly all elements or aspects of something.",
            examples: [
              { en: "The university published a comprehensive survey on global language acquisition trends.", uz: "Universitet xalqaro til o'rganish tendensiyalari bo'yicha har tomonlama to'liq so'rovnomani e'lon qildi." },
              { en: "Before making an informed decision, the committee conducted a comprehensive review.", uz: "Asosli qaror qabul qilishdan avval qo'mita keng qamrovli ko'rib chiqish o'tkazdi." },
              { en: "This dictionary provides comprehensive definitions alongside idiomatic expressions.", uz: "Bu lug'at iboralar bilan bir qatorda har tomonlama batafsil ta'riflarni ham taqdim etadi." }
            ]
          },
          {
            id: "acd-3",
            word: "Empirical",
            pos: "adjective",
            phonetic: "/ɪmˈpɪrɪkl/",
            uzbek: "Tajribaga / dalillarga asoslangan (empirik)",
            definition: "Based on, concerned with, or verifiable by observation or experience rather than theory or pure logic.",
            examples: [
              { en: "Scientific theories remain speculative until corroborated by robust empirical evidence.", uz: "Ilmiy nazariyalar mustahkam empirik dalillar bilan tasdiqlanmaguncha taxminiy bo'lib qoladi." },
              { en: "Her doctoral dissertation provides compelling empirical research on dialect variations.", uz: "Uning doktorlik dissertatsiyasi sheva xususiyatlari bo'yicha ishonarli empirik tadqiqotni o'z ichiga oladi." },
              { en: "We need rigorous empirical validation before approving the newly developed pharmaceutical.", uz: "Yangi ishlab chiqilgan dori vositasini tasdiqlashdan oldin bizga qat'iy empirik tekshiruv zarur." }
            ]
          },
          {
            id: "acd-4",
            word: "Refute",
            pos: "verb",
            phonetic: "/rɪˈfjuːt/",
            uzbek: "Radd etmoq, xatoligini isbotlamoq",
            definition: "To prove a statement or theory to be wrong or false; disprove.",
            examples: [
              { en: "The astronomer gathered conclusive data to refute the archaic cosmological model.", uz: "Astronom qadimiy kosmologik modelni radd etish uchun qat'iy ma'lumotlarni to'pladi." },
              { en: "Defense counsel presented indisputable surveillance footage to refute the accusations.", uz: "Himoyachi ayblovlarni rad etish uchun munozarasiz videokuzatuv kadrlarini taqdim etdi." },
              { en: "It is challenging to refute an argument rooted in solid mathematical foundations.", uz: "Mustahkam matematik asoslarga ega argumentni radd etish nihoyatda qiyindir." }
            ]
          },
          {
            id: "acd-5",
            word: "Methodology",
            pos: "noun",
            phonetic: "/ˌmeθəˈdɒlədʒi/",
            uzbek: "Metodologiya, tadqiqot usullari majmui",
            definition: "A system of methods used in a particular area of study or activity.",
            examples: [
              { en: "The research team thoroughly explained their statistical methodology in the appendix.", uz: "Tadqiqot guruhi o'zlarining statistik metodologiyasini ilovada batafsil tushuntirib berdi." },
              { en: "A transparent methodology allows other scientists to replicate the experimental findings.", uz: "Shaffof metodologiya boshqa olimlarga tajriba natijalarini qayta tekshirib ko'rish imkonini beradi." },
              { en: "The authors adopted a qualitative methodology to explore student motivation.", uz: "Mualliflar talabalar motivatsiyasini o'rganish uchun sifat metodologiyasini qo'lladilar." }
            ]
          },
          {
            id: "acd-6",
            word: "Corroborate",
            pos: "verb",
            phonetic: "/kəˈrɒbəreɪt/",
            uzbek: "Tasdiqlamoq, qo'shimcha dalillar bilan isbotlamoq",
            definition: "To confirm or give support to a statement, theory, or finding with independent evidence.",
            examples: [
              { en: "Subsequent laboratory experiments corroborated the initial findings of the research team.", uz: "Keyingi laboratoriya tajribalari tadqiqot guruhining dastlabki xulosalarini to'liq tasdiqladi." },
              { en: "Historical documents corroborate the eyewitness accounts of the ancient volcanic eruption.", uz: "Tarixiy hujjatlar qadimgi vulqon otilishining guvohlari bayonotlarini tasdiqlaydi." },
              { en: "The defense attorney presented digital video footage to corroborate his client's alibi.", uz: "Himoyachi advokat o'z mijozi alibisini isbotlash uchun raqamli video yozuvni taqdim etdi." }
            ]
          },
          {
            id: "acd-7",
            word: "Disseminate",
            pos: "verb",
            phonetic: "/dɪˈsemɪneɪt/",
            uzbek: "Keng tarqatmoq (ilmiy yoki rasmiy axborotni)",
            definition: "To spread information, knowledge, or research findings widely to a broad audience.",
            examples: [
              { en: "Open-access digital journals disseminate academic knowledge freely across developing nations.", uz: "Ochiq elektron jurnallar ilmiy bilimlarni rivojlanayotgan mamlakatlar bo'ylab bepul va keng tarqatadi." },
              { en: "Public health agencies disseminate vital prevention guidelines during epidemic outbreaks.", uz: "Sog'liqni saqlash idoralari epidemiyalar paytida muhim profilaktika qoidalarini keng tarqatadilar." },
              { en: "The university hosts an annual international symposium to disseminate breakthrough findings.", uz: "Universitet ilg'or ilmiy kashfiyotlarni keng tarqatish maqsadida har yili xalqaro simpozium o'tkazadi." }
            ]
          },
          {
            id: "acd-8",
            word: "Epistemology",
            pos: "noun",
            phonetic: "/ɪˌpɪstɪˈmɒlədʒi/",
            uzbek: "Epistemologiya (bilish nazariyasi)",
            definition: "The philosophical branch studying the nature, origin, scope, and validity of human knowledge.",
            examples: [
              { en: "Epistemology explores the fundamental boundaries separating justified true belief from mere opinion.", uz: "Epistemologiya asosli haqiqiy ishonchni shunchaki shaxsiy fikrdan ajratuvchi asosiy chegaralarni o'rganadi." },
              { en: "The seminar examined how feminist epistemology challenges traditional scientific objectivity.", uz: "Seminarda feministik bilish nazariyasi an'anaviy ilmiy xolislikka qanday yangicha yondashishi tahlil qilindi." },
              { en: "Understanding epistemology helps researchers critique unconscious cognitive biases in methodology.", uz: "Bilish nazariyasini tushunish tadqiqotchilarga metodologiyadagi ongsiz aqliy adashishlarni tanqidiy baholashga yordam beradi." }
            ]
          },
          {
            id: "acd-9",
            word: "Juxtaposition",
            pos: "noun",
            phonetic: "/ˌdʒʌkstəpəˈzɪʃn/",
            uzbek: "Qarama-qarshi qo'yish, yonma-yon taqqoslash",
            definition: "The act of placing contrasting elements close together to emphasize differences.",
            examples: [
              { en: "The author uses clever juxtaposition of extreme wealth and destitution to highlight social inequality.", uz: "Muallif ijtimoiy tengsizlikni yoritish uchun haddan tashqari boylik va qashshoqlikni yonma-yon taqqoslashdan mohirona foydalanadi." },
              { en: "The art exhibition stunned critics through the dramatic juxtaposition of classical and cubist styles.", uz: "Badiiy ko'rgazma mumtoz va kubistik uslublarning keskin qarama-qarshi qo'yilishi bilan tanqidchilarni lol qoldirdi." },
              { en: "The documentary's juxtaposition of pastoral scenes with smoking factories provoked thoughtful debate.", uz: "Hujjatli filmda go'zal tabiat manzaralari bilan tutayotgan zavodlarning yonma-yon qo'yilishi chuqur bahslarga sabab bo'ldi." }
            ]
          },
          {
            id: "acd-10",
            word: "Pedagogy",
            pos: "noun",
            phonetic: "/ˈpedəɡɒdʒi/",
            uzbek: "Pedagogika, ta'lim berish metodikasi",
            definition: "The theory, methodology, and practice of teaching in academic environments.",
            examples: [
              { en: "Modern educational pedagogy emphasizes student-centered collaborative problem-solving.", uz: "Zamonaviy ta'lim pedagogikasi o'quvchiga yo'naltirilgan birgalikdagi muammolarni hal qilishga urg'u beradi." },
              { en: "Digital classrooms require instructors to adapt their traditional pedagogy to interactive media.", uz: "Raqamli sinfxonalar o'qituvchilardan o'z an'anaviy metodikalarini interaktiv vositalarga moslashtirishni talab qiladi." },
              { en: "Critical pedagogy empowers pupils to question systemic societal norms and cultivate self-reflection.", uz: "Tanqidiy pedagogika o'quvchilarga ijtimoiy me'yorlarni tahlil qilish va mustaqil fikrlash imkoniyatini beradi." }
            ]
          },
          {
            id: "acd-11",
            word: "Proliferation",
            pos: "noun",
            phonetic: "/prəˌlɪfəˈreɪʃn/",
            uzbek: "Keng yoyilish, shiddatli ko'payish",
            definition: "A rapid and excessive increase or spread in numbers, quantity, or prevalence.",
            examples: [
              { en: "The unchecked proliferation of unverified news blogs makes discerning objective facts difficult.", uz: "Tekshirilmagan xabarlar bloglarining shiddatli ko'payishi xolis faktlarni ajratib olishni qiyinlashtirmoqda." },
              { en: "International non-proliferation treaties aim to curb the global spread of nuclear armaments.", uz: "Yadro qurollarini tarqatmaslik to'g'risidagi xalqaro shartnomalar qurollanishning global tarqalishini jilovlashni maqsad qilgan." },
              { en: "Recent decades witnessed a breathtaking proliferation of mobile communication devices.", uz: "So'nggi o'n yilliklar mobil aloqa vositalarining ko'z ko'rib quloq eshitmagan darajada ko'payishiga guvoh bo'ldi." }
            ]
          },
          {
            id: "acd-12",
            word: "Quintessential",
            pos: "adjective",
            phonetic: "/ˌkwɪntɪˈsenʃl/",
            uzbek: "Klassik namunasi bo'lgan, tipik",
            definition: "Representing the most perfect, purest, or most typical embodiment of a quality or class.",
            examples: [
              { en: "Watermelon and honeydew melons are quintessential symbols of an Uzbek summer.", uz: "Tarvuz va shirin qovunlar o'zbek yozining eng yorqin, klassik timsoli hisoblanadi." },
              { en: "The Registan in Samarkand is considered the quintessential masterpiece of Islamic architecture.", uz: "Samarqanddagi Registon maydoni islom me'morchiligining tengsiz, mumtoz durdonasi hisoblanadi." },
              { en: "His punctuality, dedication, and scholarly rigor make him the quintessential university academic.", uz: "Uning vaqtga rioyasi, sadoqati va ilmiy qat'iyati uni haqiqiy universitet olimining yorqin namunasiga aylantiradi." }
            ]
          },
          {
            id: "acd-13",
            word: "Repertoire",
            pos: "noun",
            phonetic: "/ˈrepətwɑː/",
            uzbek: "Mahoratlar zaxirasi, repertuar",
            definition: "A comprehensive stock of skills, techniques, or artistic pieces an individual possesses.",
            examples: [
              { en: "An adept language teacher commands a rich repertoire of interactive classroom activities.", uz: "Mohir til o'qituvchisi interaktiv dars mashg'ulotlarining boy zaxirasiga ega bo'ladi." },
              { en: "The renowned pianist expanded his classical performance repertoire to include jazz compositions.", uz: "Mashhur pianinochi o'zining mumtoz ijro repertuarini jaz kompozitsiyalari bilan boyitdi." },
              { en: "Negotiators draw upon a wide psychological repertoire when resolving diplomatic crises.", uz: "Muzokarachilar diplomatik inqirozlarni bartaraf etishda keng psixologik usullar zaxirasidan foydalanadilar." }
            ]
          },
          {
            id: "acd-14",
            word: "Scrutinize",
            pos: "verb",
            phonetic: "/ˈskruːtənaɪz/",
            uzbek: "Sinchkovlik bilan tekshirmoq, sinchiklab ko'zdan kechirmoq",
            definition: "To examine, inspect, or dissect closely and thoroughly with critical attention.",
            examples: [
              { en: "Independent peer reviewers rigorously scrutinize the experimental methodologies of submitted manuscripts.", uz: "Mustaqil taqrizchilar topshirilgan qo'lyozmalarning eksperimental metodologiyasini sinchiklab tekshiradilar." },
              { en: "Auditors were summoned to scrutinize the corporation's offshore accounting records.", uz: "Kompaniyaning xorijiy hisob-kitoblarini chuqur tekshirish uchun maxsus auditorlar jalb qilindi." },
              { en: "Scholars scrutinize ancient inscriptions under multispectral imaging to uncover faded letters.", uz: "Olimlar o'chib ketgan harflarni o'qish uchun qadimiy bitiklarni ko'p spektrli tasvirlar ostida sinchkovlik bilan tekshiradilar." }
            ]
          },
          {
            id: "acd-15",
            word: "Theoretical",
            pos: "adjective",
            phonetic: "/ˌθɪəˈretɪkl/",
            uzbek: "Nazariy",
            definition: "Concerned with the conceptual foundations of a discipline rather than applied practicalities.",
            examples: [
              { en: "Theoretical physicists formulate mathematical models describing black hole thermodynamics.", uz: "Nazariyotchi fiziklar qora tuynuklar termodinamikasini ifodalovchi matematik modellarni ishlab chiqadilar." },
              { en: "While the project sound in theoretical terms, its practical execution faces enormous engineering barriers.", uz: "Loyiha nazariy jihatdan to'g'ri bo'lsa-da, uning amaliy ijrosi ulkan muhandislik to'siqlariga duch kelmoqda." },
              { en: "The curriculum balances abstract theoretical lectures with mandatory hospital clinical rotations.", uz: "O'quv dasturi mavhum nazariy ma'ruzalarni majburiy shifoxona klinik amaliyotlari bilan muvozanatlashtiradi." }
            ]
          },
          {
            id: "acd-16",
            word: "Ubiquitous",
            pos: "adjective",
            phonetic: "/juːˈbɪkwɪtəs/",
            uzbek: "Hamma joyda hoziru-nozir, yalpi uchraydigan",
            definition: "Present, appearing, or encountered everywhere simultaneously.",
            examples: [
              { en: "Smartphones have become truly ubiquitous tools, shaping modern communication globally.", uz: "Smartfonlar butun dunyo bo'ylab zamonaviy muloqotni shakllantiruvchi hamma joyda uchraydigan vositaga aylandi." },
              { en: "Microplastic particles are now alarmingly ubiquitous throughout polar ice sheets and deep ocean trenches.", uz: "Mikroplastik zarralari hozirda qutb muzliklari va chuqur okean botiqlarida xavotirli darajada keng tarqalgan." },
              { en: "Ubiquitous surveillance cameras in major metropolitan hubs provoke fierce privacy controversies.", uz: "Yirik megapolislardagi hamma burchakda o'rnatilgan kuzatuv kameralari shaxsiy daxlsizlik bo'yicha qizg'in bahslarni keltirib chiqarmoqda." }
            ]
          },
          {
            id: "acd-17",
            word: "Valid",
            pos: "adjective",
            phonetic: "/ˈvælɪd/",
            uzbek: "Asosli, mantiqiy, qonuniy kuchga ega",
            definition: "Having a sound basis in rigorous logic or empirical fact; legally authoritative.",
            examples: [
              { en: "The researcher presented a statistically valid argument supported by large randomized trials.", uz: "Tadqiqotchi keng ko'lamli tasodifiy sinovlar bilan tasdiqlangan statistik jihatdan asosli dalilni ilgari surdi." },
              { en: "Without the official embassy stamp, this foreign passport is not considered legally valid.", uz: "Elchixonaning rasmiy muhri bo'lmasa, ushbu xorijiy pasport qonuniy kuchga ega deb hisoblanmaydi." },
              { en: "Critics raised valid ethical objections regarding unconsented genomic data mining.", uz: "Tanqidchilar roziliksiz olingan genomik ma'lumotlarni tahlil qilish bo'yicha o'rinli axloqiy e'tirozlarni bildirdilar." }
            ]
          },
          {
            id: "acd-18",
            word: "Ambivalent",
            pos: "adjective",
            phonetic: "/æmˈbɪvələnt/",
            uzbek: "Ikkilanuvchan, bir-biriga zid his-tuyg'ularga ega",
            definition: "Simultaneously holding contradictory convictions or mixed feelings about a topic.",
            examples: [
              { en: "The electorate remains largely ambivalent about the proposed economic pension adjustments.", uz: "Saylovchilar taklif etilgan iqtisodiy pensiya o'zgarishlariga nisbatan asosan ikkilanuvchan munosabatda qolmoqda." },
              { en: "Scholars hold ambivalent views regarding the net cultural impact of rapid globalization.", uz: "Olimlar jadal globallashuvning madaniy ta'siri borasida bir-biriga zid qarashlarga egadirlar." },
              { en: "She felt genuinely ambivalent about leaving her familiar hometown for a lucrative job abroad.", uz: "U xorijdagi daromadli ish uchun qadrdon shahrini tark etish haqida qattiq ikkilanayotgan edi." }
            ]
          },
          {
            id: "acd-19",
            word: "Cognizant",
            pos: "adjective",
            phonetic: "/ˈkɒɡnɪzənt/",
            uzbek: "Xabardor, yetarlicha anglagan",
            definition: "Having conscious knowledge, acute understanding, or mindful awareness of something.",
            examples: [
              { en: "Policy makers must remain cognizant of the severe economic consequences of rapid deflation.", uz: "Siyosatchilar tezkor deflyatsiyaning og'ir iqtisodiy oqibatlaridan doimo xabardor bo'lishlari shart." },
              { en: "Being fully cognizant of ethical dilemmas, the surgeon explained all prospective risks to the family.", uz: "Axloqiy masalalarni to'liq anglagan holda, jarroh oilaga barcha ehtimoliy xatarlarni tushuntirdi." },
              { en: "Scholars are acutely cognizant that language constructs subjective social realities.", uz: "Olimlar til sub'ektiv ijtimoiy voqelikni shakllantirishini chuqur anglaydilar." }
            ]
          },
          {
            id: "acd-20",
            word: "Delineate",
            pos: "verb",
            phonetic: "/dɪˈlɪnieɪt/",
            uzbek: "Aniq belgilab bermoq, chizib ko'rsatmoq",
            definition: "To portray, outline, or describe precisely in vivid detail or clear demarcation.",
            examples: [
              { en: "The legal statute clearly delineates the specific responsibilities of corporate directors.", uz: "Qonuniy hujjat korporativ direktorlarning aniq mas'uliyat doiralarini belgilab beradi." },
              { en: "The treaty painstakingly delineated the disputed mountain borders between both nations.", uz: "Shartnoma ikki davlat o'rtasidagi bahsli tog' chegaralarini sinchiklab chizib berdi." },
              { en: "The author delineates the psychological decline of the protagonist through poignant soliloquies.", uz: "Muallif bosh qahramonning ruhiy tushkunligini ta'sirchan monologlar orqali yorqin ifodalaydi." }
            ]
          },
          {
            id: "acd-21",
            word: "Exemplify",
            pos: "verb",
            phonetic: "/ɪɡˈzemplɪfaɪ/",
            uzbek: "Yorqin misol bo'lmoq, timsoli bo'lmoq",
            definition: "To illustrate, clarify, or constitute a prime archetypal example of something.",
            examples: [
              { en: "Her dedicated philanthropic career exemplifies selflessness and altruistic civic engagement.", uz: "Uning fidokorona xayriya faoliyati fidoyilik va xalqparvarlik fuqarolik burchining yorqin timsolidir." },
              { en: "The Silk Road cities of Bukhara and Khiva exemplify outstanding medieval Islamic urban planning.", uz: "Ipak yo'lining Buxoro va Xiva kabi shaharlari o'rta asrlar islomiy shaharsozligining yorqin namunasidir." },
              { en: "These experimental findings exemplify how temperature variations alter enzymatic reaction speeds.", uz: "Ushbu tajriba natijalari harorat o'zgarishi fermentativ reaksiya tezligini qanday o'zgartirishini misol qilib ko'rsatadi." }
            ]
          },
          {
            id: "acd-22",
            word: "Formidable",
            pos: "adjective",
            phonetic: "/ˈfɔːmɪdəbl/",
            uzbek: "Kuchli, haybatli, yuksak iroda talab qiluvchi",
            definition: "Inspiring fear, awe, or admiration through immense strength, intellect, or scale.",
            examples: [
              { en: "Eradicating endemic poverty across rural districts poses a formidable developmental challenge.", uz: "Qishloq hududlarida qashshoqlikni bartaraf etish yuksak iroda va sa'y-harakat talab qiladigan ulkan vazifadir." },
              { en: "The defending champion proved to be a formidable opponent with impenetrable defensive tactics.", uz: "Amaldagi chempion yorib o'tib bo'lmas himoya usullari bilan juda kuchli va haybatli raqib ekanini isbotladi." },
              { en: "She possesses a formidable intellect, authoring three pioneering scientific monographs before turning thirty.", uz: "U o'ttiz yoshga to'lmasdan turib uchta ilg'or ilmiy monografiya yaratgan kuchli aql egasidir." }
            ]
          },
          {
            id: "acd-23",
            word: "Hierarchy",
            pos: "noun",
            phonetic: "/ˈhaɪərɑːki/",
            uzbek: "Ierarxiya, pog'onali tuzilma",
            definition: "A graded system in which members are ranked according to relative authority or precedence.",
            examples: [
              { en: "Traditional corporate structures rely upon a rigid vertical hierarchy with centralized decision-making.", uz: "An'anaviy korporativ tuzilmalar markazlashgan qaror qabul qiluvchi qat'iy vertikal ierarxiyaga tayanadi." },
              { en: "Maslow's hierarchy of needs arranges human motivations from biological survival to self-actualization.", uz: "Maslouning ehtiyojlar ierarxiyasi insoniy motivatsiyalarni biologik omon qolishdan o'zlikni anglashgacha pog'onama-pog'ona tartiblaydi." },
              { en: "Feudal societies maintained an unyielding social hierarchy based on hereditary aristocratic status.", uz: "Feodal jamiyatlar nasliy aristokratik maqomga asoslangan o'zgarmas ijtimoiy ierarxiyani saqlab turgan." }
            ]
          },
          {
            id: "acd-24",
            word: "Inherent",
            pos: "adjective",
            phonetic: "/ɪnˈhɪərənt/",
            uzbek: "Ajralmas, ichki xos, tabiatiga xos",
            definition: "Existing as a permanent, essential, inalienable attribute or characteristic element.",
            examples: [
              { en: "Freedom of thought is recognized internationally as an inherent human right of every individual.", uz: "Fikrlash erkinligi xalqaro miqyosda har bir insonning ajralmas, tug'ma huquqi sifatida tan olingan." },
              { en: "Every financial speculative venture carries an inherent degree of unavoidable risk.", uz: "Har qanday moliyaviy tavakkal loyihasi o'z tabiatiga xos bo'lgan muqarrar xavf darajasini o'z ichiga oladi." },
              { en: "Ambiguity is an inherent feature of natural human spoken languages.", uz: "Noaniqlik tabiiy inson so'zlashuv tilining ajralmas xususiyatidir." }
            ]
          },
          {
            id: "acd-25",
            word: "Manifestation",
            pos: "noun",
            phonetic: "/ˌmænɪfeˈsteɪʃn/",
            uzbek: "Namoyon bo'lish, ko'rinish",
            definition: "An event, sign, or outward action clearly revealing an abstract principle or condition.",
            examples: [
              { en: "High fever and persistent fatigue are early clinical manifestations of respiratory viral infections.", uz: "Yuqori isitma va surunkali holsizlik nafas yo'llari virusli infeksiyalarining dastlabki klinik namoyon bo'lishidir." },
              { en: "Cultural folk dances are a vibrant manifestation of a nation's historic spirit and identity.", uz: "Milliy xalq raqslari xalqning tarixiy ruhiyati va o'zligining yorqin namoyon bo'lishidir." },
              { en: "Street protests were a visible manifestation of public discontent with rising fuel inflation.", uz: "Ko'cha namoyishlari yoqilg'i narxining ko'tarilishidan aholi noroziligining ochiq ko'rinishi edi." }
            ]
          },
          {
            id: "acd-26",
            word: "Nuanced",
            pos: "adjective",
            phonetic: "/ˈnjuːɑːnst/",
            uzbek: "Nozik farqlarga ega, ko'p qirrali",
            definition: "Characterized by subtle distinctions, multifaceted meanings, or delicate gradations.",
            examples: [
              { en: "The diplomat offered a nuanced appraisal of the delicate geopolitical deadlock in the region.", uz: "Diplomat mintaqadagi nozik geosiyosiy vaziyatga ko'p qirrali va chuqur baho berdi." },
              { en: "Complex sociopolitical dilemmas cannot be solved with simplistic solutions; they demand nuanced analysis.", uz: "Murakkab ijtimoiy-siyosiy muammolarni jo'n yondashuv bilan yechib bo'lmaydi; ular nozik va chuqur tahlilni talab qiladi." },
              { en: "The actor delivered an astonishingly nuanced performance, depicting conflicting inner agony.", uz: "Aktyor ziddiyatli ichki iztirobni mahorat bilan tasvirlab, hayratlanarli darajada ko'p qirrali ijro ko'rsatdi." }
            ]
          },
          {
            id: "acd-27",
            word: "Plausible",
            pos: "adjective",
            phonetic: "/ˈplɔːzəbl/",
            uzbek: "Aqlga sig'adigan, haqiqatga yaqin, ishonarli",
            definition: "Seeming reasonable, probable, or logically credible on surface examination.",
            examples: [
              { en: "Geologists advanced a plausible hypothesis connecting asteroid impacts to dinosaur extinctions.", uz: "Geologlar asteroid zarbasini dinozavrlarning qirilib ketishiga bog'lovchi aqlga sig'adigan farazni ilgari surdilar." },
              { en: "His delayed arrival was backed by a completely plausible explanation concerning icy highways.", uz: "Uning kechikishi muzlagan trassalar bo'yicha to'liq ishonarli sabab bilan izohlandi." },
              { en: "Without physical evidence, speculative conspiracy narratives rarely represent plausible historical reality.", uz: "Moddiy dalillarsiz taxminiy fitna nazariyalari haqiqatga yaqin tarixiy voqelikni deyarli ifodalamaydi." }
            ]
          },
          {
            id: "acd-28",
            word: "Pragmatic",
            pos: "adjective",
            phonetic: "/præɡˈmætɪk/",
            uzbek: "Pragmatik, amaliy manfaatlarga asoslangan",
            definition: "Dealing with circumstances realistically and practically rather than on abstract dogmas.",
            examples: [
              { en: "The administration adopted a pragmatic diplomatic approach, securing trade accords across competing blocs.", uz: "Rahbariyat pragmatik diplomatik yo'lni tanlab, raqobatchi bloklar o'rtasida manfaatli savdo bitimlariga erishdi." },
              { en: "In software development, opting for a pragmatic minimal architecture accelerates product deployment.", uz: "Dasturiy ta'minotda amaliy va ixcham arxitekturani tanlash mahsulotni ishga tushirishni tezlashtiradi." },
              { en: "He offered pragmatic advice on managing household expenditures during times of austerity.", uz: "U tejamkorlik davrida ro'zg'or xarajatlarini boshqarish bo'yicha o'rinli amaliy maslahatlar berdi." }
            ]
          },
          {
            id: "acd-29",
            word: "Synthesize",
            pos: "verb",
            phonetic: "/ˈsɪnθəsaɪz/",
            uzbek: "Sintez qilmoq, umumlashtirib yaxlit xulosaga kelmoq",
            definition: "To combine diverse disparate elements, theories, or observations into a coherent whole.",
            examples: [
              { en: "The concluding chapter seeks to synthesize sociological, economic, and historical perspectives into one model.", uz: "Yakuniy bob sotsiologik, iqtisodiy va tarixiy qarashlarni yagona modelda umumlashtirishga intiladi." },
              { en: "Chemists succeeded in synthesizing a complex organic molecule previously found solely in rare marine sponges.", uz: "Kimyogarlar avval faqat noyob dengiz bulutlarida topilgan murakkab organik molekulani sintez qilishga muvaffaq bo'ldilar." },
              { en: "Skilled executives synthesize vast volumes of market data to execute rapid strategic decisions.", uz: "Tajribali rahbarlar tezkor strategik qarorlar qabul qilish uchun ulkan bozor ma'lumotlarini umumlashtiradilar." }
            ]
          },
          {
            id: "acd-30",
            word: "Unequivocal",
            pos: "adjective",
            phonetic: "/ˌʌnɪˈkwɪvəkl/",
            uzbek: "Shubhasiz, mutlaqo aniq va ravshan",
            definition: "Leaving no doubt or ambiguity; clear, decisive, and unmistakable.",
            examples: [
              { en: "The scientific consensus provides unequivocal evidence that anthropogenic emissions drive global warming.", uz: "Ilmiy konsensus inson omili chiqindilari global isishga sabab bo'layotganining shubhasiz dalillarini taqdim etadi." },
              { en: "The foreign ministry issued an unequivocal condemnation of military aggression across the border.", uz: "Tashqi ishlar vazirligi chegara orqali harbiy tajovuzni mutlaqo aniq va keskin qoraladi." },
              { en: "The jury delivered an unequivocal verdict of not guilty based on indisputable DNA analysis.", uz: "Hakamlar hay'ati inkor etib bo'lmas DNK tahlili asosida mutlaqo oqlovchi hukm chiqardi." }
            ]
          }
        ]
      },
      {
        id: "c1-expression",
        title: "Advanced Expression & Nuance (Badiiy va Nozik Ifodalar)",
        icon: "fa-feather-pointed",
        color: "from-pink-500 to-rose-700",
        words: [
          {
            id: "exp-1",
            word: "Eloquent",
            pos: "adjective",
            phonetic: "/ˈeləkwənt/",
            uzbek: "Fasohotli, notiq, ta'sirchan so'zlovchi",
            definition: "Fluent or persuasive in speaking or writing; clearly expressing feelings or meaning.",
            examples: [
              { en: "The statesman delivered an eloquent speech that moved thousands of listeners to tears.", uz: "Davlat arbobi minglab tinglovchilarni ko'z yoshlariga g'arq etgan fasohatli nutq so'zladi." },
              { en: "Her prose is remarkably eloquent, weaving metaphors with effortless grace.", uz: "Uning nasriy uslubi nihoyatda fasohatli bo'lib, tashbehlarni beqiyos noziklik bilan uyg'unlashtiradi." },
              { en: "Silence can often be more eloquent than a cascade of empty promises.", uz: "Ba'zida sukut quruq va'dalar selidan ko'ra ancha ma'noli va ta'sirchan bo'lishi mumkin." }
            ]
          },
          {
            id: "exp-2",
            word: "Nuance",
            pos: "noun",
            phonetic: "/ˈnjuːɑːns/",
            uzbek: "Nuans, nozik farq, jilo",
            definition: "A subtle difference in or shade of meaning, expression, or sound.",
            examples: [
              { en: "A seasoned translator must capture every cultural nuance of the source literature.", uz: "Tajribali tarjimon asil adabiyotning har bir madaniy nozikligini (nuansini) ilg'ashi shart." },
              { en: "There is a subtle nuance between being self-confident and being arrogant.", uz: "O'ziga ishonch va kibr o'rtasida juda nozik bir chegara (farq) mavjud." },
              { en: "Advanced language learners pay close attention to nuances in tone and intonation.", uz: "Yuqori darajadagi til o'rganuvchilari ohang va intonatsiyadagi nozik farqlarga alohida e'tibor berishadi." }
            ]
          },
          {
            id: "exp-3",
            word: "Articulate",
            pos: "adjective / verb",
            phonetic: "/ɑːˈtɪkjulət/",
            uzbek: "Fikrni ravon ifodalovchi / Aniq ifodalamoq",
            definition: "Having or showing the ability to speak fluently and coherently.",
            examples: [
              { en: "He is an articulate speaker capable of conveying complex philosophical ideas simply.", uz: "U murakkab falsafiy g'oyalarni oddiy qilib tushuntirib bera oladigan notiq va ravon so'zlovchidir." },
              { en: "She struggled to articulate the deep sorrow she felt upon hearing the tragic news.", uz: "U mash'um xabarni eshitgach, qalbida his qilgan chuqur qayg'usini so'z bilan ifodalashga qiynaldi." },
              { en: "Being articulate is an indispensable asset during competitive international job interviews.", uz: "Fikrni aniq va ravon ifodalay olish xalqaro ish suhbatlarida beqiyos ustunlikdir." }
            ]
          },
          {
            id: "exp-4",
            word: "Profound",
            pos: "adjective",
            phonetic: "/prəˈfaʊnd/",
            uzbek: "Chuqur, teran, bepoyon",
            definition: "Very great or intense; having or showing great knowledge or insight.",
            examples: [
              { en: "The sudden departure of his mentor had a profound impact on his academic career.", uz: "Ustozining to'satdan ketishi uning akademik faoliyatiga chuqur ta'sir ko'rsatdi." },
              { en: "Eastern philosophy offers profound insights into human mindfulness and tranquility.", uz: "Sharq falsafasi inson xotirjamligi va ruhiy hushyorligi bo'yicha teran tushunchalarni taqdim etadi." },
              { en: "She expressed profound gratitude to everyone who supported her during difficult days.", uz: "U qiyin kunlarda o'zini qo'llab-quvvatlagan barcha insonlarga chuqur minnatdorchilik bildirdi." }
            ]
          },
          {
            id: "exp-5",
            word: "Ambiguity",
            pos: "noun",
            phonetic: "/ˌæmbɪˈɡjuːəti/",
            uzbek: "Noaniqlik, ikki xil ma'nolilik",
            definition: "The quality of being open to more than one interpretation; inexactness.",
            examples: [
              { en: "Legal contracts must be drafted with utmost precision to eliminate any ambiguity.", uz: "Har qanday ikki xil ma'nolilikni bartaraf etish uchun huquqiy shartnomalar nihoyatda aniq tuzilishi kerak." },
              { en: "The poet deliberately used ambiguity to let readers discover personal meanings.", uz: "Shoir kitobxonlar o'zlariga xos ma'nolarni kashf etishlari uchun ataylab ko'p ma'nolilikdan foydalangan." },
              { en: "Ambiguity in diplomatic treaties can unfortunately trigger future border disputes.", uz: "Diplomatik bitimlardagi noaniqlik, afsuski, kelajakda chegara mojarolariga sabab bo'lishi mumkin." }
            ]
          },
          {
            id: "exp-6",
            word: "Benevolent",
            pos: "adjective",
            phonetic: "/bəˈnevələnt/",
            uzbek: "Xayrixoh, saxovatpesha, mehr-oqibatli",
            definition: "Well-meaning, kindly, and charitably disposed toward helping others.",
            examples: [
              { en: "A benevolent anonymous donor funded the construction of the children's oncology hospital.", uz: "Saxovatpesha noma'lum homiy bolalar onkologiya shifoxonasi qurilishini to'liq moliyalashtirdi." },
              { en: "The monarch was remembered by historical chroniclers as a benevolent and wise sovereign.", uz: "Ushbu hukmdor tarixiy solnomalarda xalqparvar va dono yetakchi sifatida yodga olinadi." },
              { en: "His benevolent smile instantly dissipated the nervous anxiety in the audition room.", uz: "Uning xayrixoh tabassumi kasting xonasidagi asabiy hayajonni bir zumda tarqatib yubordi." }
            ]
          },
          {
            id: "exp-7",
            word: "Conundrum",
            pos: "noun",
            phonetic: "/kəˈnʌndrəm/",
            uzbek: "Jumboq, boshqotirma, chigal muammo",
            definition: "A confusing and intricate problem, paradox, or question with elusive solutions.",
            examples: [
              { en: "Balancing urgent economic development with wetland conservation remains a perplexing conundrum.", uz: "Shoshilinch iqtisodiy o'sishni botqoqliklarni asrash bilan muvozanatlash chigal jumboq bo'lib qolmoqda." },
              { en: "Ethicists wrestle with the moral conundrum posed by autonomous self-driving vehicle collision protocols.", uz: "Axloqshunoslar haydovchisiz avtomobillarning to'qnashuv algoritmlari keltirib chiqarayotgan axloqiy jumboq ustida bosh qotirmoqdalar." },
              { en: "The sudden disappearance of the expedition funds presented auditors with an impenetrable conundrum.", uz: "Ekspeditsiya mablag'larining to'satdan yo'qolishi auditorlar oldiga yechimi qiyin jumboqni qo'ydi." }
            ]
          },
          {
            id: "exp-8",
            word: "Debilitate",
            pos: "verb",
            phonetic: "/dɪˈbɪlɪteɪt/",
            uzbek: "Zaiflashtirmoq, holdan toydirmoq, kuchsizlantirmoq",
            definition: "To severely weaken or impair the physical strength, vitality, or structural integrity.",
            examples: [
              { en: "Chronic viral infections can debilitate patients for months, inhibiting daily occupational duties.", uz: "Surunkali virusli infeksiyalar bemorlarni oylab holdan toydirib, kundalik kasbiy faoliyatga to'sqinlik qilishi mumkin." },
              { en: "Prolonged economic sanctions can severely debilitate an adversary's industrial infrastructure.", uz: "Uzoq muddatli iqtisodiy sanksiyalar raqibning sanoat infratuzilmasini jiddiy zaiflashtirishi mumkin." },
              { en: "Severe heatwaves debilitating agricultural workers necessitated mandatory afternoon siestas.", uz: "Qishloq xo'jaligi ishchilarini holdan toydirgan kuchli issiq tushdan keyingi majburiy tanaffusni taqozo etdi." }
            ]
          },
          {
            id: "exp-9",
            word: "Euphemism",
            pos: "noun",
            phonetic: "/ˈjuːfəmɪzəm/",
            uzbek: "Evfemizm (yumshoqroq ifoda)",
            definition: "A mild, roundabout, or indirect phrase substituted for an expression deemed harsh or offensive.",
            examples: [
              { en: "Corporations often employ the euphemism 'rightsizing workforce' to soften news of mass dismissals.", uz: "Kompaniyalar ommaviy ishdan bo'shatishlarni yumshatish uchun ko'pincha 'xodimlarni maqbullashtirish' evfemizmidan foydalanadilar." },
              { en: "'Passing away' is a ubiquitous poetic euphemism used in condolence letters instead of 'dying'.", uz: "'Olamdan o'tmoq' ta'ziyanomalarda 'o'lmoq' so'zi o'rniga ishlatiladigan keng tarqalgan evfemizmdir." },
              { en: "Political speeches are notorious for deploying bureaucratic euphemisms to mask policy failures.", uz: "Siyosiy nutqlar rejalarning barbod bo'lganini yashirish uchun byurokratik evfemizmlarni ishlatish bilan mashhurdir." }
            ]
          },
          {
            id: "exp-10",
            word: "Facetious",
            pos: "adjective",
            phonetic: "/fəˈsiːʃəs/",
            uzbek: "O'rinsiz hazillashadigan, jiddiy masalaga yengiltak qarovchi",
            definition: "Treating serious issues with deliberately inappropriate, flippant, or misplaced levity.",
            examples: [
              { en: "His facetious remarks regarding the solemn budget shortfall infuriated the audit committee.", uz: "Uning jiddiy byudjet taqchilligi borasidagi o'rinsiz hazillari audit qo'mitasining qahrligini keltirdi." },
              { en: "Please stop being facetious and give me a straightforward, truthful explanation of the accident.", uz: "Iltimos, hazilni bas qiling va menga baxtsiz hodisaning to'g'ri, samimiy sababini tushuntirib bering." },
              { en: "Making facetious jokes during emergency evacuation briefings is strictly forbidden.", uz: "Favqulodda evakuatsiya yo'riqnomasi paytida behuda hazillashish qat'iyan taqiqlanadi." }
            ]
          },
          {
            id: "exp-11",
            word: "Gregarious",
            pos: "adjective",
            phonetic: "/ɡrɪˈɡeəriəs/",
            uzbek: "Xushchaqchaq, odamovi bo'lmagan, jamoatsevar",
            definition: "Fond of the company of others; exceptionally sociable, communicative, and lively.",
            examples: [
              { en: "Being naturally gregarious, he makes lifelong friendships wherever he travels across the globe.", uz: "Tabiatan xushchaqchaq va kirishimli bo'lgani uchun, u dunyo bo'ylab qayerga bormasin, umrboqiy do'stlar orttiradi." },
              { en: "Wolves and wild horses are gregarious species that operate within strictly disciplined social packs.", uz: "Bo'rilar va yovvoyi otlar qat'iy tartibli ijtimoiy to'dalarda yashovchi jamoaviy turlardir." },
              { en: "Her gregarious personality made her an ideal international public relations ambassador.", uz: "Uning xushmuomala va ochiq tabiati uni xalqaro jamoatchilik bilan aloqalar bo'yicha ajoyib elchiga aylantirdi." }
            ]
          },
          {
            id: "exp-12",
            word: "Hegemony",
            pos: "noun",
            phonetic: "/hɪˈdʒeməni/",
            uzbek: "Hukmronlik, gegemoniya, mutlaq yetakchilik",
            definition: "Leadership, prevailing dominance, or socio-economic hegemony exerted by one state or group.",
            examples: [
              { en: "The rise of multipolar trading alliances challenges Western financial hegemony globally.", uz: "Ko'pqutbli savdo ittifoqlarining kuchayishi G'arbning global moliyaviy gegemoniyasiga jiddiy raqobat tug'dirmoqda." },
              { en: "Cultural hegemony influences aesthetics and literature long after political empires dissolve.", uz: "Madaniy hukmronlik siyosiy imperiyalar parchalanib ketganidan keyin ham san'at va adabiyotga uzoq vaqt ta'sir ko'rsatadi." },
              { en: "Technological companies battle fiercely to achieve algorithmic hegemony in search engines.", uz: "Texnologiya korporatsiyalari qidiruv tizimlarida algoritmlar bo'yicha mutlaq yetakchilikka erishish uchun kurashmoqdalar." }
            ]
          },
          {
            id: "exp-13",
            word: "Idiosyncrasy",
            pos: "noun",
            phonetic: "/ˌɪdiəʊˈsɪŋkrəsi/",
            uzbek: "O'ziga xos g'alati odat, o'ziga xoslik",
            definition: "A distinctive behavioral quirk, personal habit, or individual trait peculiar to someone.",
            examples: [
              { en: "One peculiar idiosyncrasy of the celebrated mathematician was pacing furiously while solving proofs.", uz: "Mashhur matematikning g'alati odatlaridan biri isbotlarni yechayotganda tinimsiz xona bo'ylab yurish edi." },
              { en: "Every natural human language possesses historic grammatical idiosyncrasies that defy simple rules.", uz: "Har bir tabiiy inson tili oddiy qoidalarga bo'ysunmaydigan tarixiy o'ziga xos grammatik nozikliklarga ega." },
              { en: "Close friends learn to appreciate each other's lovable quirks and humorous idiosyncrasies.", uz: "Yaqin do'stlar bir-birlarining yoqimli xarakterlari va kulgili g'alati odatlarini qadrlashni o'rganadilar." }
            ]
          },
          {
            id: "exp-14",
            word: "Lethargic",
            pos: "adjective",
            phonetic: "/ləˈθɑːdʒɪk/",
            uzbek: "Loqayd, holsiz, uyqusiragan",
            definition: "Lacking all physical energy, enthusiasm, or alertness; sluggish and apathy-stricken.",
            examples: [
              { en: "Dehydration combined with intense summer sun leaves outdoor athletes feeling dangerously lethargic.", uz: "Suvsizlanish va yozgi jazirama oftob ochiq havodagi sportchilarni xavfli darajada holsiz qilib qo'yadi." },
              { en: "The economy endured a prolonged lethargic period characterized by stagnant wages.", uz: "Iqtisodiyot ish haqlarining o'smaganligi bilan ajralib turgan uzoq muddatli sustlik davrini boshdan kechirdi." },
              { en: "Thyroid imbalances can cause individuals to feel perpetually exhausted and mentally lethargic.", uz: "Qalqonsimon bez faoliyatining buzilishi insonning doimiy charchoq va aqliy zaiflik his qilishiga sabab bo'lishi mumkin." }
            ]
          },
          {
            id: "exp-15",
            word: "Magnanimous",
            pos: "adjective",
            phonetic: "/mæɡˈnænɪməs/",
            uzbek: "Olijanob, bag'rikeng, kechirimli",
            definition: "Noble-spirited, generous, or forgiving, particularly toward an adversary or vanquished rival.",
            examples: [
              { en: "In his victory speech, the elected statesman proved magnanimous, praising his rival's campaign.", uz: "O'zining g'alaba nutqida saylangan davlat arbobi olijanoblik ko'rsatib, raqibining saylovoldi kurashini maqtadi." },
              { en: "It was truly magnanimous of him to overlook the bitter public insults and collaborate on the charity.", uz: "Achchiq ommaviy haqoratlarni kechirib, xayriya loyihasida birga ishlash uning tom ma'nodagi bag'rikengligi edi." },
              { en: "True strength reveals itself when powerful champions remain humble and magnanimous in triumph.", uz: "Haqiqiy kuch qudratli chempionlar g'alaba nashidasida kamtar va olijanob bo'lib qolganida namoyon bo'ladi." }
            ]
          },
          {
            id: "exp-16",
            word: "Nostalgia",
            pos: "noun",
            phonetic: "/nɒˈstældʒə/",
            uzbek: "Nostalgiya, o'tmish qo'msashi",
            definition: "A sentimental yearning or wistful bittersweet longing for happiness experienced in past eras.",
            examples: [
              { en: "Listening to vinyl records from his youth evoked overwhelming nostalgia for the quiet 1980s.", uz: "Yoshlik davridagi gramplastinkalarni tinglash 1980-yillarning sokin davriga bo'lgan kuchli nostalgiya tuyg'usini uyg'otdi." },
              { en: "Vintage fashion brands leverage consumer nostalgia to market retro clothing designs successfully.", uz: "Vintaj kiyim brendlari retro liboslarni muvaffaqiyatli sotish uchun xaridorlarning o'tmish qo'msashidan unumli foydalanadi." },
              { en: "Returning to his childhood elementary school stirred sweet waves of deep nostalgia.", uz: "Bolalikdagi boshlang'ich maktabiga qaytish uning ko'nglida chuqur va yoqimli xotiralar to'lqinini qo'zg'atdi." }
            ]
          },
          {
            id: "exp-17",
            word: "Ostentatious",
            pos: "adjective",
            phonetic: "/ˌɒstenˈteɪʃəs/",
            uzbek: "Ko'z-ko'z qiluvchi, dabdabali, maqtanchoq",
            definition: "Characterized by pretentious, vulgar, or flamboyant display designed to impress spectators.",
            examples: [
              { en: "Flaunting gold-plated sports cars through quiet suburban avenues was criticized as ostentatious.", uz: "Tinch shahar chetidagi ko'chalarda tilla bilan qoplangan sport mashinalarini ko'z-ko'z qilish dabdabavozlik deb tanqid qilindi." },
              { en: "The billionaire avoided ostentatious displays of wealth, dressing in simple cotton shirts.", uz: "Milliarder oddiy paxtali ko'ylaklar kiyib, boyligini ko'z-ko'z qilishdan o'zini tiydi." },
              { en: "Her ostentatious diamond necklace dazzled photographers lining the prestigious red carpet.", uz: "Uning dabdabali olmos marjoni nufuzli qizil yo'lak bo'ylab saf tortgan fotosuratchilarni hayratda qoldirdi." }
            ]
          },
          {
            id: "exp-18",
            word: "Pernicious",
            pos: "adjective",
            phonetic: "/pəˈnɪʃəs/",
            uzbek: "Juda zararli, halokatli, bildirmay yemiruvchi",
            definition: "Having an insidious, gradual, and severely destructive impact over time.",
            examples: [
              { en: "Unchecked corruption exerts a pernicious effect upon judicial fairness and public trust.", uz: "Jilovlanmagan korrupsiya sud adolatiga va xalq ishonchiga juda zararli va yemiruvchi ta'sir ko'rsatadi." },
              { en: "Sedentary living poses a pernicious threat to modern cardiovascular longevity.", uz: "Kamharakat turmush tarzi zamonaviy yurak-qon tomir salomatligiga bildirmay jiddiy ziyon yetkazadi." },
              { en: "Propaganda spreads pernicious falsehoods that gradually polarize civic communities.", uz: "Targ'ibot asta-sekin fuqarolik jamiyatini ikkiga bo'lib yuboradigan halokatli yolg'onlarni tarqatadi." }
            ]
          },
          {
            id: "exp-19",
            word: "Quixotic",
            pos: "adjective",
            phonetic: "/kwɪkˈsɒtɪk/",
            uzbek: "Xayolparast, amaliyotga to'g'ri kelmaydigan, Don Kixotona",
            definition: "Extravagantly chivalrous, exceedingly idealistic, unrealistic, or hopelessly impractical.",
            examples: [
              { en: "His quixotic crusade to eliminate every single bureaucratic regulation within a month failed predictably.", uz: "Uning bir oy ichida barcha byurokratik qoidalarni yo'q qilishga qaratilgan xayolparast urinishi kutilganidek puchga chiqdi." },
              { en: "Venture capitalists dismissed the perpetual motion machine concept as an endearing but quixotic fantasy.", uz: "Venchur sarmoyadorlari abadiy dvigatel g'oyasini samimiy, ammo mutlaqo amalga oshmaydigan xayol deb rad etdilar." },
              { en: "Don Quixote's heroic endeavors embody the quintessential archetype of noble, quixotic folly.", uz: "Don Kixotning qahramonona harakatlari olijanob, xayolparast soddalikning mumtoz timsolidir." }
            ]
          },
          {
            id: "exp-20",
            word: "Reticent",
            pos: "adjective",
            phonetic: "/ˈretɪsnt/",
            uzbek: "Kamgap, sirlarini oshkor qilmaydigan, bosiq",
            definition: "Disinclined to speak readily; deeply reserved and quiet regarding one's private thoughts.",
            examples: [
              { en: "The reclusive author remained famously reticent about the autobiographical roots of his novels.", uz: "Guvohlardan yiroq yashaydigan yozuvchi romanlarining avtobiografik ildizlari haqida kamgap bo'lib qolishni ma'qul ko'rgan." },
              { en: "Witnesses were strangely reticent to speak with detectives investigating the syndicate.", uz: "Guvohlar jinoiy to'dani tekshirayotgan tergovchilar bilan gaplashishda negadir juda ehtiyotkor va bosiq edilar." },
              { en: "Despite his reticent demeanor in meetings, his written reports were remarkably expressive.", uz: "Majlislarda kamgapligiga qaramay, uning yozma hisobotlari nihoyatda mazmundor va ifodali edi." }
            ]
          },
          {
            id: "exp-21",
            word: "Superfluous",
            pos: "adjective",
            phonetic: "/suːˈpɜːfluəs/",
            uzbek: "Ortiqcha, keraksiz, ortiqchalik qiladigan",
            definition: "Exceeding what is sufficient, necessary, or practical; redundant and unneeded.",
            examples: [
              { en: "The editor excised three chapters of superfluous exposition to tighten the thriller's narrative.", uz: "Muharrir asarning o'qilishini tezlashtirish uchun ortiqcha bayon qilingan uchta bobni qisqartirib tashladi." },
              { en: "Modern minimalist interior decor strips away all superfluous trinkets in favor of spatial serenity.", uz: "Zamonaviy minimalist uy bezagi kenglik sokinligini ta'minlash uchun barcha keraksiz mayda-chuydalarni olib tashlaydi." },
              { en: "Bringing heavy winter coats to Dubai in July is utterly superfluous.", uz: "Iyul oyida Dubayga qalin qishki palto olib borish mutlaqo keraksiz va ortiqchadir." }
            ]
          },
          {
            id: "exp-22",
            word: "Tenacious",
            pos: "adjective",
            phonetic: "/təˈneɪʃəs/",
            uzbek: "Matonatli, o'jar darajada qat'iyatli",
            definition: "Holding firm, resolute, and persistent; refusing to capitulate in the face of adversity.",
            examples: [
              { en: "Thanks to tenacious investigative journalism, the multi-million dollar banking fraud was exposed.", uz: "Matonatli surishtiruv jurnalistikasi tufayli ko'p million dollarlik bank firibgarligi fosh qilindi." },
              { en: "The injured marathon runner displayed tenacious willpower to cross the finish line.", uz: "Jarohatlangan marafonchi marra chizig'ini kesib o'tish uchun matonatli iroda namoyon etdi." },
              { en: "Desert plants survive extreme drought due to their tenacious root systems anchoring deep underground.", uz: "Cho'l o'simliklari yer tubiga chuqur kirib borgan mustahkam ildiz tizimi tufayli qurg'oqchilikda omon qoladi." }
            ]
          },
          {
            id: "exp-23",
            word: "Venerable",
            pos: "adjective",
            phonetic: "/ˈvenərəbl/",
            uzbek: "Muhtaram, mo'tabar, hurmatga sazovor",
            definition: "Commanding profound respect and deference, especially owing to immense age, wisdom, or character.",
            examples: [
              { en: "Students listened in reverent silence as the venerable professor delivered his farewell academic address.", uz: "Mo'tabar professor o'zining xayrlashuv ilmiy nutqini so'zlaganda, talabalar ehtirom bilan jim tingladilar." },
              { en: "The historic madrasahs of Bukhara are venerable architectural landmarks revered across the globe.", uz: "Buxoroning tarixiy madrasalari butun dunyoda e'zozlanadigan muhtaram me'moriy obidalardir." },
              { en: "The venerable legal institution celebrated its bicentennial anniversary of judicial integrity.", uz: "Mo'tabar huquqiy dargoh sud adolati bo'yicha o'zining ikki yuz yillik yubileyini nishonladi." }
            ]
          },
          {
            id: "exp-24",
            word: "Whimsical",
            pos: "adjective",
            phonetic: "/ˈwɪmzɪkl/",
            uzbek: "G'aroyib, injiq-sho'x, o'ynoqi fantaziyaga boy",
            definition: "Playfully quaint, fanciful, capricious, or creatively lighthearted in appealing ways.",
            examples: [
              { en: "The animated film enchanted audiences through its whimsical universe filled with flying tea kettles.", uz: "Multiplikatsion film uchuvchi choynaklar bilan to'la g'aroyib olami orqali tomoshabinlarni maftun etdi." },
              { en: "Her whimsical paintings blend vivid pastel colors with surreal celestial creatures.", uz: "Uning o'ynoqi xayolotga boy rasmlari yorqin pastel ranglarni g'aroyib samoviy mavjudotlar bilan uyg'unlashtiradi." },
              { en: "Children adore the book's whimsical rhymes and humorous animal illustrations.", uz: "Bolalar kitobdagi sho'x qofiyalar va kulgili hayvon rasmlarini juda yaxshi ko'rishadi." }
            ]
          },
          {
            id: "exp-25",
            word: "Zealous",
            pos: "adjective",
            phonetic: "/ˈzeləs/",
            uzbek: "G'ayratli, fidoyi, ishtiyoqmand",
            definition: "Showing ardent enthusiasm, tireless devotion, and fervent commitment to a cause.",
            examples: [
              { en: "The zealous environmental volunteers planted over ten thousand saplings in a single weekend.", uz: "G'ayratli ekologik ko'ngillilar bitta dam olish kunida o'n mingdan ortiq ko'chat o'tqazdilar." },
              { en: "A zealous defender of consumer civil rights, the attorney worked pro bono for indigent families.", uz: "Iste'molchilar huquqlarining fidoyi himoyachisi bo'lgan advokat kam ta'minlangan oilalar uchun bepul ishladi." },
              { en: "Beware that overly zealous perfectionism does not paralyze creative teamwork productivity.", uz: "Haddan tashqari o'ta talabchanlik jamoaning ijodiy unumdorligini to'xtatib qo'ymasligiga e'tibor bering." }
            ]
          },
          {
            id: "exp-26",
            word: "Alacrity",
            pos: "noun",
            phonetic: "/əˈlækrəti/",
            uzbek: "Jon-dildan tayyorgarlik, chaqqonlik, shodlik bilan harakat",
            definition: "Brisk, enthusiastic, and cheerful readiness to act or assist.",
            examples: [
              { en: "The young apprentice accepted the challenging engineering assignment with genuine alacrity.", uz: "Yosh shogird murakkab muhandislik topshirig'ini chin dildan va katta mamnuniyat bilan qabul qildi." },
              { en: "Hotel concierges responded to customer luggage inquiries with polite speed and alacrity.", uz: "Mehmonxona xodimlari mijozlarning yuklar bo'yicha iltimoslariga xushmuomalalik va chaqqonlik bilan javob berdilar." },
              { en: "When asked to volunteer for the school play, she raised her hand with evident alacrity.", uz: "Maktab spektaklida qatnashish taklif qilinganda, u ko'rinib turgan shodlik bilan qo'l ko'tardi." }
            ]
          },
          {
            id: "exp-27",
            word: "Cacophony",
            pos: "noun",
            phonetic: "/kəˈkɒfəni/",
            uzbek: "Quloqni teshuvchi shovqin, tartibsiz tovushlar",
            definition: "A harsh, jarring, and discordant mixture of loud colliding sounds.",
            examples: [
              { en: "A jarring cacophony of blaring horns and construction drills echoed through the metropolitan intersection.", uz: "Metropoliten chorrahasida jaranglagan avtomobil signallari va qurilish burg'ularining noxush shovqini aks-sado berdi." },
              { en: "Stepping from the tranquil library into the bazaar plunged us into a colorful cacophony of vendors.", uz: "Sokin kutubxonadan bozorga qadam qo'yishimiz bilan sotuvchilarning shovqin-suronli to'lqiniga sho'ng'idik." },
              { en: "Before the conductor raised his baton, the tuning orchestra produced a chaotic acoustic cacophony.", uz: "Dirijyor tayog'ini ko'tarishdan oldin sozlanayotgan orkestr tartibsiz tovushlar shovqinini hosil qildi." }
            ]
          },
          {
            id: "exp-28",
            word: "Ephemeral",
            pos: "adjective",
            phonetic: "/ɪˈfemərəl/",
            uzbek: "Bir lahzalik, o'tkinchi, qisqa umr ko'ruvchi",
            definition: "Lasting for a remarkably fleeting, transient, or brief duration of time.",
            examples: [
              { en: "Cherry blossom blooms are beloved across Japan precisely because of their exquisite, ephemeral beauty.", uz: "Gilos gullari Yaponiyada aynan o'zlarining nafis va bir lahzalik o'tkinchi go'zalligi sababli seviladi." },
              { en: "Fame derived solely from viral internet memes is notoriously superficial and ephemeral.", uz: "Faqat internet memlaridan keladigan mashhurlik odatda yuzaki va o'tkinchidir." },
              { en: "Morning dew glittering on spiderwebs is an ephemeral spectacle vanishing under sunrise rays.", uz: "O'rgimchak to'rida jilvalangan ertalabki shudring quyosh nurlarida g'oyib bo'luvchi o'tkinchi manzaradir." }
            ]
          },
          {
            id: "exp-29",
            word: "Incongruous",
            pos: "adjective",
            phonetic: "/ɪnˈkɒŋɡruəs/",
            uzbek: "Nomutanosib, mos kelmaydigan, g'alati tarzda yot",
            definition: "Not in harmony, keeping, or conformity with surroundings or context.",
            examples: [
              { en: "The ultramodern glass skyscraper looked strikingly incongruous among medieval stone cottages.", uz: "Zamonaviy shisha osmono'par bino o'rta asr tosh uylari orasida hayratlanarli darajada nomutanosib ko'rindi." },
              { en: "Wearing flip-flops and athletic shorts to a formal diplomatic banquet was shockingly incongruous.", uz: "Rasmiy diplomatik ziyofatga shippak va sport kalta shimi kiyib kelish mutlaqo noo'rin va nomunosib edi." },
              { en: "His cheerful upbeat whistling sounded incongruous against the gloomy rainstorm backdrop.", uz: "Uning quvnoq hushtak chalishi ma'yus yomg'ir bo'roni fonida g'alati va nomutanosib eshitildi." }
            ]
          },
          {
            id: "exp-30",
            word: "Surreptitious",
            pos: "adjective",
            phonetic: "/ˌsʌrəpˈtɪʃəs/",
            uzbek: "Yashirincha, bildirmay qilingan, pana-pastqam",
            definition: "Kept strictly secret, covert, or stealthy, particularly because unauthorized.",
            examples: [
              { en: "He cast a surreptitious glance at his wristwatch while pretending to listen to the boring speaker.", uz: "U zerikarli ma'ruzachini tinglayotgandek ko'rinib, yashirincha qo'l soatiga ko'z tashlab qo'ydi." },
              { en: "The covert operative completed a surreptitious exchange of intelligence files in the subway.", uz: "Maxfiy josus metro bekatida razvedka fayllarini yashirincha topshirishni yakunladi." },
              { en: "Taking surreptitious photographs inside the classified military museum is strictly prohibited.", uz: "Maxfiy harbiy muzey ichida bildirmay suratga olish qat'iyan man etiladi." }
            ]
          }
        ]
      },
      {
        id: "c1-philosophy",
        title: "Philosophy & Society (Falsafa va Jamiyat)",
        icon: "fa-scale-balanced",
        color: "from-rose-600 to-red-800",
        words: [
          {
            id: "phi-1",
            word: "Autonomy",
            pos: "noun",
            phonetic: "/ˈpeləkwənt/",
            uzbek: "Mustaqillik, o'zini-o'zi boshqarish erkinligi",
            definition: "The right or condition of self-government; freedom from external control or influence.",
            examples: [
              { en: "Universities require institutional autonomy to foster unconstrained intellectual discovery.", uz: "Universitetlarga cheklovsiz intellektual kashfiyotlarni rivojlantirish uchun muassasa mustaqilligi kerak." },
              { en: "Encouraging learner autonomy inspires students to pursue their own academic inquiries.", uz: "O'quvchi mustaqilligini rag'batlantirish ularni mustaqil ilmiy izlanishlar olib borishga undaydi." },
              { en: "The automated vehicle operates with an astonishing degree of navigational autonomy.", uz: "Haydovchisiz avtomobil hayratlanarli darajadagi boshqaruv mustaqilligi bilan harakatlanadi." }
            ]
          },
          {
            id: "phi-2",
            word: "Paradox",
            pos: "noun",
            phonetic: "/ˈpærədɒks/",
            uzbek: "Paradoks (ziddiyatli, lekin haqiqatga ega holat)",
            definition: "A seemingly absurd or self-contradictory statement or proposition that when investigated may prove to be well founded or true.",
            examples: [
              { en: "The paradox of technology is that while it connects the globe, it can alienate individuals.", uz: "Texnologiyaning paradoksi shundaki, u dunyoni bog'lasa-da, insonlarni bir-biridan begonalashtirishi mumkin." },
              { en: "He explained the famous paradox where spending money on experiences brings more joy than possessions.", uz: "U tajribalarga pul sarflash buyumlarga qaraganda ko'proq quvonch keltirishi haqidagi mashhur paradoksni tushuntirdi." },
              { en: "It is an ironic paradox that the more knowledge we acquire, the more we realize our ignorance.", uz: "Qanchalik ko'p bilim olsak, o'z bilimsizligimizni shunchalik ko'p anglashimiz qiziq bir paradoksal haqiqatdir." }
            ]
          },
          {
            id: "phi-3",
            word: "Subjective",
            pos: "adjective",
            phonetic: "/səbˈdʒektɪv/",
            uzbek: "Subyektiv, shaxsiy qarashga asoslangan",
            definition: "Based on or influenced by personal feelings, tastes, or opinions.",
            examples: [
              { en: "Beauty is entirely subjective; what enchants one person may leave another unimpressed.", uz: "Go'zallik butunlay subyektiv tushunchadir; birini maftun etgan narsa boshqasini befarq qoldirishi mumkin." },
              { en: "Judges must strive to base their verdict on objective evidence rather than subjective bias.", uz: "Hakamlar o'z hukmlarini subyektiv hissiyotlarga emas, xolis obyektiv dalillarga asoslashga intilishlari kerak." },
              { en: "Art appreciation is largely a subjective experience governed by personal emotional resonance.", uz: "San'atni qadrlash ko'p jihatdan shaxsiy hissiy taassurotga bog'liq bo'lgan subyektiv tajribadir." }
            ]
          },
          {
            id: "phi-4",
            word: "Pervasive",
            pos: "adjective",
            phonetic: "/pəˈveɪsɪv/",
            uzbek: "Hamma joyda uchraydigan, keng tarqalgan, qamrab olgan",
            definition: "Spreading widely throughout an area or a group of people, especially of an unwelcome influence.",
            examples: [
              { en: "Smartphones have exerted a pervasive influence on modern human communication.", uz: "Smartfonlar zamonaviy insoniy muloqotga hamma joyda seziladigan keng qamrovli ta'sir ko'rsatdi." },
              { en: "Corruption remains a pervasive obstacle to economic prosperity in developing regions.", uz: "Korrupsiya rivojlanayotgan hududlarda iqtisodiy farovonlik yo'lidagi keng tarqalgan to'siq bo'lib qolmoqda." },
              { en: "The scent of blooming jasmine was pervasive throughout the evening courtyard.", uz: "Gullagan yasmin ifori butun kechki hovlini qamrab olgan edi." }
            ]
          },
          {
            id: "phi-5",
            word: "Cognitive",
            pos: "adjective",
            phonetic: "/ˈkɒɡnətɪv/",
            uzbek: "Kognitiv, aqliy, bilishga oid",
            definition: "Relating to conscious mental activities such as thinking, understanding, learning, and remembering.",
            examples: [
              { en: "Bilingual individuals often demonstrate superior cognitive flexibility in problem-solving.", uz: "Ikki tilda so'zlashuvchi insonlar muammolarni hal qilishda yuqori kognitiv moslashuvchanlikni namoyon etadilar." },
              { en: "Solving puzzles and learning new languages helps maintain cognitive sharpness in older age.", uz: "Boshqotirmalar yechish va yangi tillar o'rganish keksayganda aqliy teranlikni saqlashga yordam beradi." },
              { en: "Sleep deprivation impairs cognitive functioning, leading to lapses in memory and attention.", uz: "Uyqusizlik kognitiv faoliyatni buzadi, xotira va diqqatning susayishiga olib keladi." }
            ]
          },
          {
            id: "phi-6",
            word: "Altruism",
            pos: "noun",
            phonetic: "/ˈæltruɪzəm/",
            uzbek: "Altruizm, beg'arazlik, fidoyilik",
            definition: "The ethical practice of selfless concern and devotion to the welfare of other beings.",
            examples: [
              { en: "Organ donation by living donors represents the purest manifestation of human altruism.", uz: "Tirik insonlarning a'zolarini beg'araz hadya qilishi insoniy altruizmning eng yuksak namoyon bo'lishidir." },
              { en: "Biologists study whether reciprocal altruism in animal colonies has evolutionary survival advantages.", uz: "Biologlar hayvonlar jamoasidagi o'zaro beg'araz yordam evolyutsion omon qolish afzalliklariga egaligini o'rganadilar." },
              { en: "Ethical philosophies debate whether true altruism can exist entirely free of subtle psychological rewards.", uz: "Axloqiy falsafalar haqiqiy beg'arazlik insonning ichki ruhiy qoniqishidan xoli bo'la olishi mumkinligini bahslashadilar." }
            ]
          },
          {
            id: "phi-7",
            word: "Determinism",
            pos: "noun",
            phonetic: "/dɪˈtɜːmɪnɪzəm/",
            uzbek: "Determinizm (barcha hodisalar sababiy bog'langanligi)",
            definition: "The philosophical doctrine that all occurrences, including human choices, are strictly causal.",
            examples: [
              { en: "Hard determinism argues that genuine human free will is an illusion created by consciousness.", uz: "Qat'iy determinizm insonning haqiqiy erkin irodasi ongi tomonidan yaratilgan illyuziya ekanini ta'kidlaydi." },
              { en: "Quantum physics challenged classical mechanistic determinism by introducing fundamental probabilistic uncertainty.", uz: "Kvant fizikasi ehtimollik noaniqligini kiritish orqali klassik mexanik determinizmga e'tiroz bildirdi." },
              { en: "Legal scholars ponder how causal determinism affects individual moral responsibility for crimes.", uz: "Huquqshunoslar sababiy determinizm insonning jinoyatlar uchun individual axloqiy javobgarligiga qanday ta'sir qilishini tahlil qiladilar." }
            ]
          },
          {
            id: "phi-8",
            word: "Existentialism",
            pos: "noun",
            phonetic: "/ˌeɡzɪˈstenʃəlɪzəm/",
            uzbek: "Ekzistensializm (mavjudlik falsafasi)",
            definition: "A philosophical movement prioritizing individual existence, absolute freedom, and radical self-determination.",
            examples: [
              { en: "Sartre's existentialism asserts that existence precedes essence, obliging individuals to craft their own meaning.", uz: "Sartrning ekzistensializmi insonning avval mavjud bo'lishi va keyin o'z ma'nosini o'zi yaratishi shartligini ta'kidlaydi." },
              { en: "Post-war European literature resonated with existentialism's focus on personal authenticity and anxiety.", uz: "Urushdan keyingi Yevropa adabiyoti ekzistensializmning shaxsiy haqiqiylik va ruhiy iztirobga qaratilgan g'oyalari bilan hamohang bo'ldi." },
              { en: "Existentialism holds that individuals bear full accountability for the choices they author in life.", uz: "Ekzistensializm insonlar hayotda qilgan har bir tanlovlari uchun to'liq javobgar ekanini ilgari suradi." }
            ]
          },
          {
            id: "phi-9",
            word: "Hedonism",
            pos: "noun",
            phonetic: "/ˈhiːdənɪzəm/",
            uzbek: "Gedonizm (rohatlanishni oliy maqsad deb bilish)",
            definition: "The ethical theory declaring personal pleasure and avoidance of pain as humanity's paramount moral good.",
            examples: [
              { en: "Epicurus advocated a refined philosophical hedonism centered on mental peace rather than sensory excess.", uz: "Epikur hissiy ortiqchalikdan ko'ra ruhiy xotirjamlikka asoslangan nozik falsafiy gedonizmni yoqlagan." },
              { en: "Critics caution that unchecked hedonism often leads to moral emptiness and spiritual dissolution.", uz: "Tanqidchilar jilovlanmagan maishatparastlik ko'pincha axloqiy bo'shliq va ruhiy inqirozga olib kelishidan ogohlantiradilar." },
              { en: "Modern consumerism is frequently analyzed through the lens of psychological hedonism.", uz: "Zamonaviy iste'molchilik madaniyati ko'pincha psixologik gedonizm nuqtai nazaridan tahlil qilinadi." }
            ]
          },
          {
            id: "phi-10",
            word: "Nihilism",
            pos: "noun",
            phonetic: "/ˈnaɪɪlɪzəm/",
            uzbek: "Nigilizm (barcha qadriyatlarni inkor etish)",
            definition: "The rejection of all religious, moral, and epistemological tenets under the premise of cosmic meaninglessness.",
            examples: [
              { en: "Nietzsche warned that the historical demise of traditional values would precipitate widespread cultural nihilism.", uz: "Nitsshe an'anaviy qadriyatlarning yemirilishi ommaviy madaniy nigilizmni keltirib chiqarishidan ogohlantirgan edi." },
              { en: "Existential nihilism asserts that human life possesses no intrinsic purpose or cosmic significance.", uz: "Ekzistensial nigilizm inson hayotida hech qanday tug'ma maqsad yoki koinot miqyosidagi ma'no yo'qligini ta'kidlaydi." },
              { en: "Youth movements in nineteenth-century Russia embraced political nihilism to overturn the autocracy.", uz: "O'n to'qqizinchi asr Rossiyasidagi yoshlar harakatlari chor hokimiyatini ag'darish uchun siyosiy nigilizmni qabul qildilar." }
            ]
          },
          {
            id: "phi-11",
            word: "Solipsism",
            pos: "noun",
            phonetic: "/ˈsɒlɪpsɪzəm/",
            uzbek: "Solipsizm (faqat o'z ongi mavjudligiga ishonish)",
            definition: "The radical philosophical conviction that only one's personal mind is certain to exist.",
            examples: [
              { en: "Epistemological solipsism argues that proving the existence of any mind outside one's own is impossible.", uz: "Epistemologik solipsizm o'z ongidan tashqaridagi biron bir aql borligini isbotlash imkonsiz ekanini ta'kidlaydi." },
              { en: "Philosophers view extreme solipsism as a logical dead-end that paralyzes interpersonal ethics.", uz: "Falsafachilar ashaddiy solipsizmni insonlararo axloqni falaj qiladigan mantiqiy boshi berk ko'cha deb hisoblaydilar." },
              { en: "Virtual reality simulations have revived thought experiments investigating solipsism and simulated realities.", uz: "Virtual borliq texnologiyalari solipsizm va simulyatsiya qilingan voqelik bo'yicha falsafiy tajribalarni qayta jonlantirdi." }
            ]
          },
          {
            id: "phi-12",
            word: "Utilitarianism",
            pos: "noun",
            phonetic: "/juːˌtɪlɪˈteəriənɪzəm/",
            uzbek: "Utilitarizm (eng ko'p odamga foyda keltirish axloqi)",
            definition: "The normative doctrine advocating actions that maximize overall aggregate happiness and well-being.",
            examples: [
              { en: "Jeremy Bentham formulated classical utilitarianism around the principle of greatest happiness for the greatest number.", uz: "Jeremi Bentam klassik utilitarizmni eng ko'p sonli odamlar uchun eng katta baxt keltirish tamoyili asosida yaratdi." },
              { en: "Public healthcare triage protocols often rely on pragmatic utilitarianism during mass casualty disasters.", uz: "Ommaviy ofatlar paytida jamoat salomatligi saralash protokollari ko'pincha amaliy utilitarizmga tayanadi." },
              { en: "Critics argue that pure utilitarianism risks trampling the essential human rights of minority groups.", uz: "Tanqidchilar sof utilitarizm ozchilik guruhlarining asosiy inson huquqlarini poymol qilish xavfiga ega ekanini ta'kidlaydilar." }
            ]
          },
          {
            id: "phi-13",
            word: "Dogmatism",
            pos: "noun",
            phonetic: "/ˈdɒɡmətɪzəm/",
            uzbek: "Dogmatizm (ko'r-ko'rona qoidalarga yopishib olish)",
            definition: "The rigid assertion of opinions or doctrines as incontrovertible truth without empirical proof.",
            examples: [
              { en: "Scientific progress requires skepticism, open inquiry, and the total abandonment of ideological dogmatism.", uz: "Ilmiy taraqqiyot shubhalanishni, ochiq izlanishni va mafkuraviy dogmatizmdan butunlay voz kechishni talab qiladi." },
              { en: "Religious dogmatism historically resisted revolutionary cosmological revelations regarding planetary orbits.", uz: "Diniy qotib qolgan qarashlar tarixan sayyoralar harakati bo'yicha inqilobiy kashfiyotlarga qarshilik ko'rsatgan." },
              { en: "Critical thinking pedagogy equips students to dismantle unexamined intellectual dogmatism.", uz: "Tanqidiy fikrlash ta'limi talabalarni tahlil qilinmagan qotib qolgan aqidalarni yengishga o'rgatadi." }
            ]
          },
          {
            id: "phi-14",
            word: "Relativism",
            pos: "noun",
            phonetic: "/ˈrelətɪvɪzəm/",
            uzbek: "Relyativizm, nisbiylik nazariyasi (axloq va haqiqatda)",
            definition: "The philosophical belief that truth, morality, and knowledge are relative to cultural, social, or personal contexts.",
            examples: [
              { en: "Cultural relativism cautions against evaluating foreign customs through one's own subjective cultural standards.", uz: "Madaniy relyativizm o'zga yurt urf-odatlarini o'zining sub'ektiv mezonlari orqali baholashdan ogohlantiradi." },
              { en: "Opponents of moral relativism argue that universal human rights must supersede local traditions.", uz: "Axloqiy nisbiylik muxoliflari umuminsoniy huquqlar har qanday mahalliy an'analardan ustun turishi kerakligini ta'kidlaydilar." },
              { en: "Epistemic relativism questions whether any objective vantage point exists from which universal truth can be claimed.", uz: "Bilish relyativizmi mutlaq haqiqatni da'vo qilish mumkin bo'lgan xolis nuqtai nazar bor-yo'qligini shubha ostiga oladi." }
            ]
          },
          {
            id: "phi-15",
            word: "Skepticism",
            pos: "noun",
            phonetic: "/ˈskeptɪsɪzəm/",
            uzbek: "Skeptitsizm, shubhalanish falsafasi",
            definition: "A questioning, doubting attitude toward knowledge claims, beliefs, or established dogmas.",
            examples: [
              { en: "Healthy scientific skepticism demands rigorous reproducible evidence before accepting bold assertions.", uz: "Sog'lom ilmiy skeptitsizm dadil da'volarni qabul qilishdan oldin qat'iy qayta tekshiriladigan dalillarni talab qiladi." },
              { en: "Descartes employed methodical skepticism, doubting every sensory input to locate bedrock certainty.", uz: "Dekart mutlaq haqiqatni topish uchun barcha hissiy sezgilarni shubha ostiga qo'yuvchi uslubiy skeptitsizmdan foydalandi." },
              { en: "Voters greeted political campaign pledges with justifiable and seasoned skepticism.", uz: "Saylovchilar saylovoldi va'dalarini o'rinli va tajribali shubha bilan kutib oldilar." }
            ]
          },
          {
            id: "phi-16",
            word: "Consequentialism",
            pos: "noun",
            phonetic: "/ˌkɒnsɪˈkwenʃəlɪzəm/",
            uzbek: "Konsekvensializm (harakatni oqibatiga qarab baholash)",
            definition: "The ethical doctrine holding that the morality of an act depends entirely on the resulting outcome.",
            examples: [
              { en: "Under consequentialism, telling a benevolent lie is morally virtuous if it prevents devastating catastrophe.", uz: "Konsekvensializmga ko'ra, agar ezgu yolg'on dahshatli falokatning oldini olsa, u axloqan to'g'ri hisoblanadi." },
              { en: "Ethicists debate the tension between deontological duty rules and pragmatic consequentialism.", uz: "Axloqshunoslar burchga asoslangan qat'iy qoidalar bilan oqibatga tayanuvchi konsekvensializm o'rtasidagi ziddiyatni muhokama qiladilar." },
              { en: "Military strategists often default to consequentialism when calculating collateral casualties in conflict.", uz: "Harbiy strateglar qurolli to'qnashuvlarda kutilmagan talafotlarni hisoblashda ko'pincha konsekvensializmga suyanadilar." }
            ]
          },
          {
            id: "phi-17",
            word: "Deontology",
            pos: "noun",
            phonetic: "/ˌdiːɒnˈtɒlədʒi/",
            uzbek: "Deontologiya (burch va qat'iy axloqiy majburiyat)",
            definition: "The ethical theory that actions are intrinsically right or wrong, regardless of their consequences.",
            examples: [
              { en: "Kantian deontology dictates that lying is fundamentally wrong under any conceivable circumstance.", uz: "Kantning deontologiyasi har qanday sharoitda ham yolg'on gapirish tubdan noto'g'ri ekanini belgilaydi." },
              { en: "Medical codes of conduct embody deontology through absolute patient confidentiality duties.", uz: "Tibbiy odob-axloq qoidalari bemor sirlarini qat'iy saqlash majburiyati orqali deontologiyani ifodalaydi." },
              { en: "Deontology argues that individuals must never be treated merely as instruments to an end.", uz: "Deontologiya insonlarga hech qachon shunchaki maqsadga yetish vositasi sifatida qaralmasligi kerakligini ta'kidlaydi." }
            ]
          },
          {
            id: "phi-18",
            word: "Virtue",
            pos: "noun",
            phonetic: "/ˈvɜːtʃuː/",
            uzbek: "Fazilat, ezgulik, yuksak axloq",
            definition: "Moral excellence, righteousness, or a commendable character trait displayed in action.",
            examples: [
              { en: "Patience and humility are cardinal virtues esteemed across classical world civilizations.", uz: "Sabr va kamtarlik qadimgi jahon sivilizatsiyalarida eng ulug' fazilatlar sifatida e'zozlangan." },
              { en: "Aristotle's virtue ethics emphasizes cultivating habitual courage, temperance, and justice.", uz: "Aristotelning fazilatlar axloqi mardlik, o'zini tuta bilish va adolat kabi odatlarni shakllantirishga urg'u beradi." },
              { en: "Her intellectual integrity was a rare virtue in an era characterized by hyper-partisan deceit.", uz: "Uning ilmiy xolisligi va halolligi soxtalik avj olgan davrda noyob fazilat edi." }
            ]
          },
          {
            id: "phi-19",
            word: "Morality",
            pos: "noun",
            phonetic: "/məˈræləti/",
            uzbek: "Axloq, odob, ma'naviyat",
            definition: "Principles concerning the distinction between right and wrong conduct, intent, and decisions.",
            examples: [
              { en: "Philosophers investigate whether human morality arises from innate evolutionary instincts or cultural nurture.", uz: "Falsafachilar inson axloqi tug'ma evolyutsion xususiyatmi yoki madaniy tarbiya natijasimi degan savolni o'rganadilar." },
              { en: "Laws in democratic nations strive to reflect the evolving standards of public morality.", uz: "Demokratik davlatlardagi qonunlar jamiyat axloqining rivojlanib borayotgan me'yorlarini aks ettirishga intiladi." },
              { en: "Exercising power without genuine morality inevitably breeds tyranny and oppression.", uz: "Hokimiyatni haqiqiy axloqsiz yurgizish muqarrar ravishda istibdod va zulmga olib keladi." }
            ]
          },
          {
            id: "phi-20",
            word: "Conscience",
            pos: "noun",
            phonetic: "/ˈkɒnʃəns/",
            uzbek: "Vijdon, ichki axloqiy hakam",
            definition: "An inner moral faculty that guides and regulates ethical judgment and behavior.",
            examples: [
              { en: "His guilty conscience troubled him incessantly after he betrayed his colleague's confidential trust.", uz: "Hamkasbining maxfiy ishonchiga xiyonat qilganidan so'ng, uning aybdor vijdoni uni tinimsiz qiynadi." },
              { en: "Whistleblowers follow their conscience to expose systemic corporate corruption despite immense personal peril.", uz: "Haqiqatparvarlar katta xavf-xatarga qaramay, korporativ korrupsiyani fosh qilishda o'z vijdonlariga ergashadilar." },
              { en: "Acting in accordance with your clean conscience brings deep psychological tranquility.", uz: "Toza vijdon bilan ish ko'rish insonga chuqur ruhiy xotirjamlik bag'ishlaydi." }
            ]
          },
          {
            id: "phi-21",
            word: "Introspection",
            pos: "noun",
            phonetic: "/ˌɪntrəˈspekʃn/",
            uzbek: "O'z-o'zini tahlil qilish, ichki dunyoga nazar solish",
            definition: "The reflective examination of one's own internal thoughts, emotional states, and cognitive motivations.",
            examples: [
              { en: "Daily journaling provides a structured medium for disciplined philosophical introspection.", uz: "Har kuni kundalik yozib borish tartibli falsafiy o'z-o'zini tahlil qilish uchun qulay vositadir." },
              { en: "Introspection enables individuals to discover unconscious cognitive habits and self-limiting beliefs.", uz: "O'z-o'zini chuqur tahlil qilish insonga ongsiz odatlari va o'ziga qo'ygan to'siqlarini kashf etishga yordam beradi." },
              { en: "Excessive morbid introspection without creative action can slide into depressive rumination.", uz: "Harakatlarsiz haddan tashqari tushkun o'zini tahlil qilish ezuvchi qayg'uga aylanib ketishi mumkin." }
            ]
          },
          {
            id: "phi-22",
            word: "Metaphysics",
            pos: "noun",
            phonetic: "/ˌmetəˈfɪzɪks/",
            uzbek: "Metafizika (borliqning mohiyati haqidagi ta'limot)",
            definition: "The philosophical branch interrogating the fundamental nature of reality, existence, space, and being.",
            examples: [
              { en: "Metaphysics investigates ancient ontological queries: Why does something exist rather than nothing?", uz: "Metafizika qadimiy ontologik savollarni o'rganadi: Nega butkul yo'qlik emas, balki borliq mavjud?" },
              { en: "Aristotle's foundational treatise on metaphysics classified causation into four essential categories.", uz: "Aristotelning metafizika bo'yicha fundamental asari sababiylikni to'rtta asosiy toifaga ajratgan." },
              { en: "Modern cosmology often borders on speculative metaphysics when probing origins prior to the Big Bang.", uz: "Zamonaviy kosmologiya Katta Portlashdan oldingi holatni o'rganishda ko'pincha nazariy metafizika bilan tutashadi." }
            ]
          },
          {
            id: "phi-23",
            word: "Rationalism",
            pos: "noun",
            phonetic: "/ˈræʃnəlɪzəm/",
            uzbek: "Ratsionalizm (aqlga asoslangan bilish)",
            definition: "The philosophical position holding that reason and deductive logic are the chief sources of knowledge.",
            examples: [
              { en: "Continental rationalism, championed by Spinoza and Leibniz, celebrated pure intellect over sensory experience.", uz: "Spinoza va Leybnits tomonidan ilgari surilgan Yevropa ratsionalizmi sof aql-idrokni hissiy tajribadan ustun qo'ygan." },
              { en: "Mathematical proofs embody pure rationalism, establishing universally valid truths through logical deduction.", uz: "Matematik isbotlar mantiqiy xulosa chiqarish orqali mutlaq haqiqatlarni o'rnatib, sof ratsionalizmni ifodalaydi." },
              { en: "Enlightenment philosophers used rationalism to dispute superstitious traditions and promote scientific education.", uz: "Ma'rifatparvarlik davri allomalari xurofotlarga qarshi chiqish va ilmiy ta'limni rivojlantirish uchun ratsionalizmdan foydalandilar." }
            ]
          },
          {
            id: "phi-24",
            word: "Empiricism",
            pos: "noun",
            phonetic: "/ɪmˈpɪrɪsɪzəm/",
            uzbek: "Empirizm (tajriba va kuzatishga asoslangan bilish)",
            definition: "The epistemological theory asserting that all knowledge originates solely from sensory experience and observation.",
            examples: [
              { en: "John Locke's empiricism depicted the newborn human mind as a blank slate receiving sensory impressions.", uz: "Jon Lokkning empirizmi yangi tug'ilgan inson ongini hissiy taassurotlarni qabul qiluvchi oq qog'ozga o'xshatgan." },
              { en: "Modern clinical medical science is fundamentally grounded in rigorous statistical empiricism.", uz: "Zamonaviy klinik tibbiyot fani qat'iy statistik empirik tajribalarga asoslangan." },
              { en: "Empiricism mandates that bold theoretical claims must be tested against observable data.", uz: "Empirizm har qanday nazariy da'volarning kuzatilishi mumkin bo'lgan ma'lumotlar orqali sinovdan o'tishini talab qiladi." }
            ]
          },
          {
            id: "phi-25",
            word: "Aesthetic",
            pos: "adjective",
            phonetic: "/iːsˈθetɪk/",
            uzbek: "Estetik, go'zallikka oid",
            definition: "Relating to the philosophical appreciation, principles, and criticism of art, beauty, and taste.",
            examples: [
              { en: "Traditional Central Asian mosaics demonstrate exquisite aesthetic harmony between geometry and vibrant color.", uz: "An'anaviy Markaziy Osiyo mozaikalari geometriya va yorqin ranglar o'rtasidagi ajoyib estetik uyg'unlikni namoyish etadi." },
              { en: "The museum renovation enhanced both practical visitor mobility and refined aesthetic appeal.", uz: "Muzey ta'miri tashrif buyuruvchilarning qulay harakatlanishini ham, nozik estetik jozibasini ham oshirdi." },
              { en: "Kant's critique of judgment investigates universal aesthetic sensibilities across cultures.", uz: "Kantning tanqidiy qarashlari turli madaniyatlardagi umuminsoniy estetik go'zallik hissini o'rganadi." }
            ]
          },
          {
            id: "phi-26",
            word: "Dilemma",
            pos: "noun",
            phonetic: "/daɪˈlemə/",
            uzbek: "Dilemma, qiyin axloqiy tanlov",
            definition: "A difficult situation in which an actor must choose between equally undesirable or conflicting alternatives.",
            examples: [
              { en: "The trolley problem is a classic philosophical dilemma illustrating conflicting moral priorities.", uz: "'Vagoncha muammosi' bir-biriga zid axloqiy ustuvorliklarni ko'rsatib beruvchi klassik falsafiy dilemmadir." },
              { en: "Governments faced an agonizing dilemma between public health lockdowns and economic survival.", uz: "Hukumatlar karantin choralari va iqtisodiy tirik qolish o'rtasida mushkul dilemma oldida qoldilar." },
              { en: "Resolving ethical dilemmas demands deep introspection, empathy, and principled reflection.", uz: "Axloqiy dilemmalarni yechish chuqur ichki tahlilni, hamdardlikni va qat'iy mezonlarni talab qiladi." }
            ]
          },
          {
            id: "phi-27",
            word: "Equanimity",
            pos: "noun",
            phonetic: "/ˌekwəˈnɪməti/",
            uzbek: "Bosiqlik, ruhiy xotirjamlik, matonat",
            definition: "Mental calmness, composure, and emotional equilibrium, especially under high stress or adversity.",
            examples: [
              { en: "Stoic philosophy teaches practitioners to bear sudden fortune or grave misfortune with unbroken equanimity.", uz: "Stotsizm falsafasi insonlarga kutilmagan omadni ham, og'ir musibatni ham yuksak ruhiy bosiqlik bilan qarshi olishni o'rgatadi." },
              { en: "The veteran surgeon maintained remarkable equanimity throughout the perilous six-hour operation.", uz: "Tajribali jarroh xavfli olti soatlik operatsiya davomida hayratlanarli ruhiy xotirjamlikni saqlab qoldi." },
              { en: "Cultivating mindfulness meditation nurtures emotional resilience and everyday psychological equanimity.", uz: "Diqqatni jamlash meditatsiyasi hissiy bardoshlilikni va kundalik ruhiy osoyishtalikni tarbiyalaydi." }
            ]
          },
          {
            id: "phi-28",
            word: "Authenticity",
            pos: "noun",
            phonetic: "/ˌɔːθenˈtɪsəti/",
            uzbek: "Haqiqiylik, soxta emaslik, o'zligiga sodiqlik",
            definition: "The condition of being genuine, original, and faithful to one's true personal values and nature.",
            examples: [
              { en: "Existential philosophers prize personal authenticity above conformity to external societal pressures.", uz: "Ekzistensial faylasuflar tashqi jamiyat bosimiga ergashishdan ko'ra o'zligiga sodiq bo'lishni ustun qo'yadilar." },
              { en: "Art historians used carbon dating to verify the unquestionable historical authenticity of the manuscript.", uz: "San'atshunoslar qo'lyozmaning shubhasiz tarixiy haqiqiyligini tasdiqlash uchun radiokarbon tahlilidan foydalandilar." },
              { en: "True charismatic leadership stems from emotional vulnerability, honesty, and moral authenticity.", uz: "Haqiqiy yetakchilik samimiylik, halollik va axloqiy soxtasizlikdan kuch oladi." }
            ]
          },
          {
            id: "phi-29",
            word: "Altruistic",
            pos: "adjective",
            phonetic: "/ˌæltruˈɪstɪk/",
            uzbek: "Fidoyilarcha, o'z manfaatini ko'zlamaydigan",
            definition: "Showing unselfish concern for and devoted dedication to the welfare and uplift of others.",
            examples: [
              { en: "She spent her retirement pursuing altruistic missions providing clean drinking water to remote villages.", uz: "U nafaqadagi hayotini chekka qishloqlarga toza ichimlik suvi yetkazuvchi beg'araz fidoyi loyihalarga bag'ishladi." },
              { en: "Altruistic acts ignite neural pleasure centers in the brain, fostering positive collective well-being.", uz: "Beg'araz yaxshilik qilish miyadagi ijobiy markazlarni faollashtirib, jamiyatdagi umumiy baxtiyorlikni mustahkamlaydi." },
              { en: "Volunteering without monetary expectation is an altruistic contribution to building stronger communities.", uz: "Moddiy maqsadsiz ko'ngilli bo'lib xizmat qilish jamiyatni mustahkamlashga qo'shilgan fidokorona hissadir." }
            ]
          },
          {
            id: "phi-30",
            word: "Transcendent",
            pos: "adjective",
            phonetic: "/trænˈsendənt/",
            uzbek: "Oliy, idrok chegarasidan yuqori turuvchi, benaziyr",
            definition: "Surpassing ordinary limitations; existing beyond and independent of the material physical universe.",
            examples: [
              { en: "Listening to the majestic choral symphony was a transcendent spiritual experience for the audience.", uz: "Ushbu muhtasham xor simfoniyasini tinglash tomoshabinlar uchun yuksak ruhiy va benaziyr kechinma bo'ldi." },
              { en: "Mystics across civilizations seek communion with a transcendent divine reality beyond words.", uz: "Dunyo oriflari so'zlar bilan ifodalab bo'lmaydigan oliy va ilohiy haqiqatga yetishishga intiladilar." },
              { en: "Great artistic masterpieces possess a timeless, transcendent power that speaks to all generations.", uz: "Buyuk san'at durdonalari barcha avlodlar qalbiga yetib boruvchi mangu va oliy qudratga egadir." }
            ]
          }
        ]
      }
    ]
    ]
  }
};
