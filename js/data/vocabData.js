/**
 * Vocabulary World - CEFR Vocabulary Dataset
 * Levels: A1, A2, B1, B2, C1
 * Topics: Family, Education, Sport, Free Time, Travelling, Shopping, Technology, Health, etc.
 * Each word includes: IPA phonetics, Part of speech, Uzbek translation, English definition, 3 rich examples with Uzbek translations.
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
          }
        ]
      }
    ]
  },

  A2: {
    levelName: "A2 - Boshlang'ichdan yuqori (Elementary)",
    description: "Sayohat, ta'lim, sog'liq va jamiyat haqida erkinroq gapirish uchun zarur so'zlar",
    color: "sky",
    badge: "A2 Elementary",
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
          }
        ]
      }
    ]
  },

  B1: {
    levelName: "B1 - O'rta (Intermediate)",
    description: "Ish, texnologiya, tabiat va mustaqil suhbatlar uchun zarur bo'lgan boy lug'at",
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
          }
        ]
      }
    ]
  },

  B2: {
    levelName: "B2 - O'rtadan yuqori (Upper-Intermediate)",
    description: "Iqtisodiyot, psixologiya, ilmiy tahlil va jamiyat mavzularidagi chuqurlashtirilgan leksika",
    color: "indigo",
    badge: "B2 Yuqori",
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
          }
        ]
      }
    ]
  },

  C1: {
    levelName: "C1 - Yetuk (Advanced)",
    description: "Akademik, falsafiy, professional va xalqaro miqyosdagi mukammal so'z boyligi",
    color: "rose",
    badge: "C1 Yetuk",
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
          }
        ]
      }
    ]
  }
};
