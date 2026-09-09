/**
 * Vocabulary World - CEFR 50 Cambridge Units Dataset
 * Levels: A1, A2, B1, B2, C1 (10 Units per Level = 50 Cambridge Units)
 * Sequential List Format: Unit 01 through Unit 10 for each level
 * Authentic material from Cambridge English Vocabulary in Use series (Elementary, Pre-Int/Int, Upper-Int, Advanced)
 * Total: 790 CEFR words, 2370 rich contextual examples with Uzbek translations and IPA phonetics.
 */

export const VOCAB_DATA = {
  "A1": {
    "levelName": "A1 - Boshlang'ich (Beginner)",
    "description": "Kundalik hayotda eng ko'p ishlatiladigan sodda va muhim so'zlar",
    "color": "emerald",
    "badge": "A1 Boshlang'ich",
    "topics": [
      {
        "id": "a1-family",
        "title": "Unit 01: Family & Relatives (Oila va qarindoshlar)",
        "icon": "fa-people-roof",
        "color": "from-emerald-400 to-teal-500",
        "words": [
          {
            "id": "fam-1",
            "word": "Parent",
            "pos": "noun",
            "phonetic": "/ˈpeərənt/",
            "uzbek": "Ota yoki ona (validayn)",
            "definition": "A mother or father of a person.",
            "examples": [
              {
                "en": "My parents live in a quiet countryside village.",
                "uz": "Mening ota-onam tinch qishloqda yashashadi."
              },
              {
                "en": "Children need love and support from their parents.",
                "uz": "Bolalarga ota-onalarining mehri va qo'llab-quvvatlashi kerak."
              },
              {
                "en": "Every parent wants the best future for their child.",
                "uz": "Har bir ota-ona farzandi uchun eng yaxshi kelajakni xohlaydi."
              }
            ]
          },
          {
            "id": "fam-2",
            "word": "Sibling",
            "pos": "noun",
            "phonetic": "/ˈsɪblɪŋ/",
            "uzbek": "Aka-uka yoki opa-singil",
            "definition": "A brother or sister.",
            "examples": [
              {
                "en": "I have two siblings: an older brother and a younger sister.",
                "uz": "Mening ikkita aka-singlim bor: akam va singlim."
              },
              {
                "en": "Do you get along well with your siblings?",
                "uz": "Aka-ukalaringiz bilan yaxshi chiqishasizmi?"
              },
              {
                "en": "She has no siblings; she is an only child.",
                "uz": "Uning aka-ukasi yoki opa-singlisi yo'q; u oilada yolg'iz farzand."
              }
            ]
          },
          {
            "id": "fam-3",
            "word": "Relative",
            "pos": "noun",
            "phonetic": "/ˈrelətɪv/",
            "uzbek": "Qarindosh",
            "definition": "A member of your family.",
            "examples": [
              {
                "en": "We invited all our close relatives to the wedding.",
                "uz": "Biz to'yga barcha yaqin qarindoshlarimizni taklif qildik."
              },
              {
                "en": "She is visiting her relatives in Samarkand this weekend.",
                "uz": "U shu dam olish kunlari Samarqanddagi qarindoshlarini ko'rgani bormoqda."
              },
              {
                "en": "My uncle is my favorite relative because he tells funny stories.",
                "uz": "Tog'am mening eng sevimli qarindoshim, chunki u qiziq hikoyalar aytadi."
              }
            ]
          },
          {
            "id": "fam-4",
            "word": "Grandchild",
            "pos": "noun",
            "phonetic": "/ˈɡræntʃaɪld/",
            "uzbek": "Nabira",
            "definition": "A child of your son or daughter.",
            "examples": [
              {
                "en": "My grandmother loves playing in the garden with her grandchildren.",
                "uz": "Buvim bog'da nabiralari bilan o'ynashni yaxshi ko'radi."
              },
              {
                "en": "They have five grandchildren who visit every holiday.",
                "uz": "Ularning har bayramda mehmonga keladigan beshta nabirasi bor."
              },
              {
                "en": "He bought a bicycle for his oldest grandchild.",
                "uz": "U eng katta nabirasiga velosiped sotib olib berdi."
              }
            ]
          },
          {
            "id": "fam-5",
            "word": "Cousin",
            "pos": "noun",
            "phonetic": "/ˈkʌzn/",
            "uzbek": "Amakivachcha / Tog'avachcha / Xolavachcha",
            "definition": "The child of your aunt or uncle.",
            "examples": [
              {
                "en": "My cousin and I go to the same school.",
                "uz": "Amakivachcham ikkalamiz bir maktabga boramiz."
              },
              {
                "en": "I received a cheerful letter from my cousin yesterday.",
                "uz": "Kecha tog'avachchamdan quvnoq xat oldim."
              },
              {
                "en": "We often play football together with our cousins.",
                "uz": "Biz ko'pincha amakivachchalarimiz bilan birga futbol o'ynaymiz."
              }
            ]
          },
          {
            "id": "fam-6",
            "word": "Nephew",
            "pos": "noun",
            "phonetic": "/ˈnefjuː/",
            "uzbek": "Jiyan (o'g'il bola)",
            "definition": "The son of your brother or sister.",
            "examples": [
              {
                "en": "My nephew is only four years old and loves drawing.",
                "uz": "Mening jiyanim bor-yo'g'i to'rt yoshda va rasm chizishni yaxshi ko'radi."
              },
              {
                "en": "I bought a cool toy car for my nephew's birthday.",
                "uz": "Men jiyanimning tug'ilgan kuniga ajoyib o'yinchoq mashina sotib oldim."
              },
              {
                "en": "His nephew wants to become a doctor in the future.",
                "uz": "Uning jiyani kelajakda shifokor bo'lishni xohlaydi."
              }
            ]
          },
          {
            "id": "fam-7",
            "word": "Aunt",
            "pos": "noun",
            "phonetic": "/ɑːnt/",
            "uzbek": "Xola / Amma",
            "definition": "The sister of your father or mother, or the wife of your uncle.",
            "examples": [
              {
                "en": "My aunt baked a delicious chocolate cake for us.",
                "uz": "Xolam biz uchun mazali shokoladli tort pishirdi."
              },
              {
                "en": "She went to visit her aunt in the village.",
                "uz": "U qishloqdagi ammasini ko'rgani bordi."
              },
              {
                "en": "Aunt Sarah always brings lovely gifts on holidays.",
                "uz": "Sara xola bayramlarda doim ajoyib sovg'alar olib keladi."
              }
            ]
          },
          {
            "id": "fam-8",
            "word": "Uncle",
            "pos": "noun",
            "phonetic": "/ˈʌŋkl/",
            "uzbek": "Tog'a / Amaki",
            "definition": "The brother of your mother or father, or the husband of your aunt.",
            "examples": [
              {
                "en": "My uncle taught me how to ride a bicycle.",
                "uz": "Tog'am menga velosiped haydashni o'rgatgan."
              },
              {
                "en": "We often go fishing on the river with my uncle.",
                "uz": "Biz ko'pincha amakim bilan daryoga baliq oviga boramiz."
              },
              {
                "en": "His uncle works as an engineer in a large company.",
                "uz": "Uning tog'asi katta kompaniyada muhandis bo'lib ishlaydi."
              }
            ]
          },
          {
            "id": "fam-9",
            "word": "Niece",
            "pos": "noun",
            "phonetic": "/niːs/",
            "uzbek": "Jiyan (qiz bola)",
            "definition": "A daughter of your brother or sister.",
            "examples": [
              {
                "en": "My niece started going to kindergarten this week.",
                "uz": "Mening jiyanim bu hafta bolalar bog'chasiga borishni boshladi."
              },
              {
                "en": "I bought a colorful picture book for my niece.",
                "uz": "Men jiyanimga rang-barang rasmli kitob sotib oldim."
              },
              {
                "en": "Her niece is very talented at singing.",
                "uz": "Uning qiz jiyani qo'shiq aytishga juda qobiliyatli."
              }
            ]
          },
          {
            "id": "fam-10",
            "word": "Grandparent",
            "pos": "noun",
            "phonetic": "/ˈɡrænpeərənt/",
            "uzbek": "Bobo yoki buvi (katta ota-ona)",
            "definition": "A parent of your father or mother.",
            "examples": [
              {
                "en": "Children love visiting their grandparents in summer.",
                "uz": "Bolalar yozda bobo-buvilarinikiga borishni yaxshi ko'rishadi."
              },
              {
                "en": "My grandparents tell the most interesting historical stories.",
                "uz": "Mening bobo-buvim eng qiziqarli tarixiy hikoyalarni aytib berishadi."
              },
              {
                "en": "We celebrated our grandparents' fiftieth wedding anniversary.",
                "uz": "Biz bobo-buvimizning ellik yillik oltin to'yini nishonladik."
              }
            ]
          }
        ],
        "unitNumber": 1,
        "category": "People & Family"
      },
      {
        "id": "a1-u2-body",
        "unitNumber": 2,
        "title": "Unit 02: Parts of the Body (Tana a'zolari)",
        "category": "People & Appearance",
        "icon": "fa-child-reaching",
        "color": "from-teal-400 to-emerald-600",
        "description": "Inson tanasining asosiy a'zolari va qismlari",
        "words": [
          {
            "id": "body-1",
            "word": "Shoulder",
            "pos": "noun",
            "phonetic": "/ˈʃəʊldə/",
            "uzbek": "Yelka",
            "definition": "The joint connecting the arm with the torso.",
            "examples": [
              {
                "en": "He carried the heavy backpack on his shoulder.",
                "uz": "U og'ir ryukzakni yelkasida ko'tarib ketdi."
              },
              {
                "en": "She looked over her shoulder to see who was following.",
                "uz": "U kim orqasidan kelayotganini ko'rish uchun yelkasi osha qaradi."
              },
              {
                "en": "The doctor gently examined his injured left shoulder.",
                "uz": "Shifokor uning jarohatlangan chap yelkasini ko'zdan kechirdi."
              }
            ]
          },
          {
            "id": "body-2",
            "word": "Knee",
            "pos": "noun",
            "phonetic": "/niː/",
            "uzbek": "Tizza",
            "definition": "The joint between the thigh and the lower leg.",
            "examples": [
              {
                "en": "She fell on the playground and scraped her knee.",
                "uz": "U o'yingohda yiqilib tizzasini shilib oldi."
              },
              {
                "en": "Bend your knees slightly before lifting heavy luggage.",
                "uz": "Og'ir yukni ko'tarishdan oldin tizzalaringizni biroz buking."
              },
              {
                "en": "The athlete had a successful operation on his injured knee.",
                "uz": "Sportchining jarohatlangan tizzasida muvaffaqiyatli jarrohlik amaliyoti o'tkazildi."
              }
            ]
          },
          {
            "id": "body-3",
            "word": "Elbow",
            "pos": "noun",
            "phonetic": "/ˈelbəʊ/",
            "uzbek": "Tirsak",
            "definition": "The joint between the forearm and the upper arm.",
            "examples": [
              {
                "en": "He rested his elbows on the wooden dining table.",
                "uz": "U tirsaklarini yog'och tushlik stoliga tirab o'tirdi."
              },
              {
                "en": "Be careful not to hit your elbow against the sharp corner.",
                "uz": "Tirsagingizni o'tkir burchakka urib olmaslikdan ehtiyot bo'ling."
              },
              {
                "en": "She touched his elbow gently to draw his attention.",
                "uz": "U e'tiborini qaratish uchun uning tirsagiga ohista tegib qo'ydi."
              }
            ]
          },
          {
            "id": "body-4",
            "word": "Chest",
            "pos": "noun",
            "phonetic": "/tʃest/",
            "uzbek": "Ko'krak qafasi",
            "definition": "The front surface of a person's body between the neck and the stomach.",
            "examples": [
              {
                "en": "Take a deep breath and expand your chest fully.",
                "uz": "Chuqur nafas oling va ko'krak qafasingizni to'liq kengaytiring."
              },
              {
                "en": "He felt a sudden pain in his chest after running.",
                "uz": "Yugurgandan so'ng u ko'kragida to'satdan og'riq sezdi."
              },
              {
                "en": "The sleepy baby rested peacefully against its mother's chest.",
                "uz": "Uyqusiragan chaqaloq onasining ko'kragiga bosh qo'yib tinch uxlab qoldi."
              }
            ]
          },
          {
            "id": "body-5",
            "word": "Stomach",
            "pos": "noun",
            "phonetic": "/ˈstʌmək/",
            "uzbek": "Oshqozon, qorin",
            "definition": "The internal organ where digestion of food begins.",
            "examples": [
              {
                "en": "You should never go swimming on a completely full stomach.",
                "uz": "Qorningiz to'la paytda hech qachon cho'milgani bormang."
              },
              {
                "en": "She had an upset stomach after eating spicy street food.",
                "uz": "Achchiq ko'cha taomini yegandan so'ng uning oshqozoni bezovta bo'ldi."
              },
              {
                "en": "Lie down on your stomach to let your back muscles rest.",
                "uz": "Orqa mushaklaringiz dam olishi uchun qorningiz bilan yoting."
              }
            ]
          },
          {
            "id": "body-6",
            "word": "Finger",
            "pos": "noun",
            "phonetic": "/ˈfɪŋɡə/",
            "uzbek": "Barmoq",
            "definition": "Each of the four slender jointed parts attached to either hand.",
            "examples": [
              {
                "en": "He pointed his finger toward the historic clock tower.",
                "uz": "U barmog'i bilan tarixiy soat minorasi tomon ishora qildi."
              },
              {
                "en": "She slipped a beautiful gold ring onto her finger.",
                "uz": "U barmog'iga chiroyli tilla uzuk taqdi."
              },
              {
                "en": "Watch out with that knife so you don't cut your finger.",
                "uz": "Barmog'ingizni kesib olmaslik uchun u pichoq bilan ehtiyot bo'ling."
              }
            ]
          },
          {
            "id": "body-7",
            "word": "Neck",
            "pos": "noun",
            "phonetic": "/nek/",
            "uzbek": "Bo'yin",
            "definition": "The part of the body that joins the head to the torso.",
            "examples": [
              {
                "en": "She wrapped a warm cashmere scarf around her neck.",
                "uz": "U bo'yniga issiq kashmir sharf o'rab oldi."
              },
              {
                "en": "He developed a stiff neck from sitting awkwardly at his computer.",
                "uz": "Kompyuter oldida noqulay o'tirganidan uning bo'yni qotib qoldi."
              },
              {
                "en": "A graceful pearl necklace looked radiant on her neck.",
                "uz": "Nafis dur marjon uning bo'ynida juda yarashib turardi."
              }
            ]
          },
          {
            "id": "body-8",
            "word": "Chin",
            "pos": "noun",
            "phonetic": "/tʃɪn/",
            "uzbek": "Iyak",
            "definition": "The protruding part of the face below the lower lip.",
            "examples": [
              {
                "en": "He stroked his chin thoughtfully before answering the question.",
                "uz": "U savolga javob berishdan oldin o'ylanib iyagini silab qo'ydi."
              },
              {
                "en": "She has a charming small dimple on the center of her chin.",
                "uz": "Uning iyagining o'rtasida yoqimli jajji kulgich bor."
              },
              {
                "en": "Hold your chin up and smile with genuine confidence.",
                "uz": "Iyagingizni baland ko'taring va samimiy ishonch bilan tabassum qiling."
              }
            ]
          },
          {
            "id": "body-9",
            "word": "Forehead",
            "pos": "noun",
            "phonetic": "/ˈfɔːhed/",
            "uzbek": "Peshona",
            "definition": "The part of the face above the eyes and below the hair.",
            "examples": [
              {
                "en": "The caring mother placed her palm on the child's forehead.",
                "uz": "G'amxo'r ona kaftini bolasining peshonasiga qo'yib ko'rdi."
              },
              {
                "en": "Wipe the perspiration from your forehead with a clean tissue.",
                "uz": "Peshonangizdagi terni toza salfetka bilan artib oling."
              },
              {
                "en": "He frowned, causing deep wrinkles to appear on his forehead.",
                "uz": "U qoshlarini chimirdi, natijada peshonasida chuqur ajinlar paydo bo'ldi."
              }
            ]
          },
          {
            "id": "body-10",
            "word": "Ankle",
            "pos": "noun",
            "phonetic": "/ˈæŋkl/",
            "uzbek": "To'piq",
            "definition": "The joint connecting the foot with the lower leg.",
            "examples": [
              {
                "en": "She twisted her ankle while jogging down the gravel path.",
                "uz": "U mayda toshli yo'ldan yugurayotganda to'pig'ini qayirib oldi."
              },
              {
                "en": "The doctor applied a firm elastic bandage to support his ankle.",
                "uz": "Shifokor uning to'pig'ini mahkamlash uchun elastik bint bog'ladi."
              },
              {
                "en": "Wear supportive athletic boots to protect your ankles on rocky ground.",
                "uz": "Toshloq yerda to'piqlaringizni himoya qilish uchun mustahkam sport botinkalarini kiying."
              }
            ]
          }
        ]
      },
      {
        "id": "a1-u3-clothes",
        "unitNumber": 3,
        "title": "Unit 03: Clothes & Fashion (Kiyimlar va liboslar)",
        "category": "Everyday Life",
        "icon": "fa-shirt",
        "color": "from-blue-400 to-indigo-600",
        "description": "Kundalik kiyim-kechaklar, poyabzallar va aksessuarlar",
        "words": [
          {
            "id": "clo-1",
            "word": "Jacket",
            "pos": "noun",
            "phonetic": "/ˈdʒækɪt/",
            "uzbek": "Kurtka, nimcha",
            "definition": "A short coat extending to the waist or hips.",
            "examples": [
              {
                "en": "Put on a warm jacket before you go outside into the chilly wind.",
                "uz": "Sovuq shamolda tashqariga chiqishdan oldin issiq kurtka kiyib oling."
              },
              {
                "en": "He hung his leather jacket on the hook behind the door.",
                "uz": "U charm kurtkasini eshik orqasidagi kiyim ilgichga ildi."
              },
              {
                "en": "She wore a tailored navy jacket for her job interview.",
                "uz": "U ish suhbati uchun bichilgan ko'k nimcha kiydi."
              }
            ]
          },
          {
            "id": "clo-2",
            "word": "Trousers",
            "pos": "noun",
            "phonetic": "/ˈtraʊzəz/",
            "uzbek": "Shim",
            "definition": "An outer garment covering the body from waist to ankle.",
            "examples": [
              {
                "en": "He bought a pair of smart dark trousers for the office.",
                "uz": "U ofis uchun bir juft chiroyli to'q rangli shim sotib oldi."
              },
              {
                "en": "These cotton trousers are lightweight and comfortable in the summer.",
                "uz": "Ushbu paxtali shim yozda juda yengil va qulay."
              },
              {
                "en": "Make sure your trousers are ironed and wrinkle-free.",
                "uz": "Shimingiz dazmollangan va g'ijimsiz ekaniga ishonch hosil qiling."
              }
            ]
          },
          {
            "id": "clo-3",
            "word": "Sweater",
            "pos": "noun",
            "phonetic": "/ˈswetə/",
            "uzbek": "Sviter",
            "definition": "A knitted warm garment with long sleeves.",
            "examples": [
              {
                "en": "She knitted a cosy woolen sweater for the winter season.",
                "uz": "U qish mavsumi uchun shinam jun sviter to'qib oldi."
              },
              {
                "en": "Take off your heavy sweater if the room is heated.",
                "uz": "Agar xona isitilgan bo'lsa, qalin sviteringizni yechib qo'ying."
              },
              {
                "en": "A soft cashmere sweater feels comfortable and warm.",
                "uz": "Yumshoq kashmir sviter qulay va issiq his bag'ishlaydi."
              }
            ]
          },
          {
            "id": "clo-4",
            "word": "Scarf",
            "pos": "noun",
            "phonetic": "/skɑːf/",
            "uzbek": "Sharf",
            "definition": "A strip of fabric worn around the neck for warmth or style.",
            "examples": [
              {
                "en": "Wrap this woollen scarf around your neck to stay warm.",
                "uz": "Issiq bo'lish uchun ushbu jun sharfni bo'yningizga o'rang."
              },
              {
                "en": "She tied a colorful silk scarf onto her handbag handle.",
                "uz": "U sumkasi dastasiga yorqin ipak sharf bog'lab oldi."
              },
              {
                "en": "He forgot his checkered scarf on the commuter train.",
                "uz": "U katakli sharfini yo'lovchi poyezdida unutib qoldiribdi."
              }
            ]
          },
          {
            "id": "clo-5",
            "word": "Gloves",
            "pos": "noun",
            "phonetic": "/ɡlʌvz/",
            "uzbek": "Qo'lqop",
            "definition": "Hand coverings with individual sheaths for each finger.",
            "examples": [
              {
                "en": "Wear warm gloves when walking in the winter snow.",
                "uz": "Qishki qorda sayr qilganda issiq qo'lqop kiyib oling."
              },
              {
                "en": "She slipped off her gloves to answer her smartphone.",
                "uz": "U telefoniga javob berish uchun qo'lqopini yechdi."
              },
              {
                "en": "He purchased sturdy leather gloves for gardening work.",
                "uz": "U bog'dorchilik ishlari uchun baquvvat charm qo'lqop xarid qildi."
              }
            ]
          },
          {
            "id": "clo-6",
            "word": "Boots",
            "pos": "noun",
            "phonetic": "/buːts/",
            "uzbek": "Etik, botinka",
            "definition": "Sturdy footwear covering the foot and part of the leg.",
            "examples": [
              {
                "en": "You will need reliable hiking boots for walking in the mountains.",
                "uz": "Tog'da yurish uchun sizga ishonchli sayohat etigi kerak bo'ladi."
              },
              {
                "en": "She wore waterproof boots on the muddy country trail.",
                "uz": "U loyli qishloq yo'lida suv o'tkazmaydigan etik kiydi."
              },
              {
                "en": "Leave your wet boots on the mat by the front door.",
                "uz": "Ho'l botinkalaringizni kirish eshigi yonidagi gilamchada qoldiring."
              }
            ]
          },
          {
            "id": "clo-7",
            "word": "Belt",
            "pos": "noun",
            "phonetic": "/belt/",
            "uzbek": "Kamar",
            "definition": "A band of leather or fabric worn around the waist.",
            "examples": [
              {
                "en": "Fasten your leather belt securely around your waist.",
                "uz": "Charm kamaringizni belingizga mahkam bog'lang."
              },
              {
                "en": "He tightened his belt after losing several kilograms.",
                "uz": "Bir necha kilogramm ozganidan so'ng u kamarini bir teshikka tortdi."
              },
              {
                "en": "The brown belt matched his polished leather shoes.",
                "uz": "Jigarrang kamar uning tozalangan charm poyabzaliga juda mos tushdi."
              }
            ]
          },
          {
            "id": "clo-8",
            "word": "Suit",
            "pos": "noun",
            "phonetic": "/suːt/",
            "uzbek": "Kostyum-shim",
            "definition": "A matching jacket and trousers worn together.",
            "examples": [
              {
                "en": "He wore a smart tailored suit to the international conference.",
                "uz": "U xalqaro anjumanga chiroyli bichilgan kostyum kiydi."
              },
              {
                "en": "All company directors wear formal business suits to boardroom meetings.",
                "uz": "Barcha kompaniya rahbarlari boshqaruv yig'ilishlariga rasmiy kostyum kiyishadi."
              },
              {
                "en": "He had his wedding suit dry-cleaned before the big day.",
                "uz": "U to'yidan oldin kostyumini kimyoviy tozalashdan o'tkazdi."
              }
            ]
          },
          {
            "id": "clo-9",
            "word": "Dress",
            "pos": "noun",
            "phonetic": "/dres/",
            "uzbek": "Ko'ylak (ayollar uchun)",
            "definition": "A one-piece outer garment for a woman or girl.",
            "examples": [
              {
                "en": "She wore an elegant evening dress to the theater.",
                "uz": "U teatrga nafis oqshom ko'ylagini kiyib bordi."
              },
              {
                "en": "The light summer dress is made of breathable cotton.",
                "uz": "Yengil yozgi ko'ylak havoni o'tkazuvchi paxtadan tikilgan."
              },
              {
                "en": "The bride looked breathtaking in her lace wedding dress.",
                "uz": "Kelin naqshli to'y ko'ylagida aql bovar qilmas darajada go'zal edi."
              }
            ]
          },
          {
            "id": "clo-10",
            "word": "Coat",
            "pos": "noun",
            "phonetic": "/kəʊt/",
            "uzbek": "Palto",
            "definition": "A heavy outer garment worn outdoors over other clothes.",
            "examples": [
              {
                "en": "Button up your warm coat before going out into the blizzard.",
                "uz": "Qor bo'roniga chiqishdan oldin issiq paltoingizni tugmalang."
              },
              {
                "en": "He hung his woollen overcoat on the hall stand.",
                "uz": "U jun ustki paltosini dahlizdagi ilgichga ildi."
              },
              {
                "en": "She bought a stylish trench coat for the rainy autumn months.",
                "uz": "U yomg'irli kuz oylari uchun zamonaviy plash-palto xarid qildi."
              }
            ]
          }
        ]
      },
      {
        "id": "a1-u4-describing",
        "unitNumber": 4,
        "title": "Unit 04: Describing People (Odamlarni tasvirlash)",
        "category": "People & Character",
        "icon": "fa-user-check",
        "color": "from-violet-400 to-purple-600",
        "description": "Insonlarning bo'yi, sochi, yuzi va tashqi ko'rinishini tasvirlash",
        "words": [
          {
            "id": "desc-1",
            "word": "Attractive",
            "pos": "adjective",
            "phonetic": "/əˈtræktɪv/",
            "uzbek": "Jozibali, ko'rkam",
            "definition": "Pleasing or appealing to the eye.",
            "examples": [
              {
                "en": "She has an attractive warm smile that makes friends easily.",
                "uz": "Uning oson do'st orttiradigan jozibali issiq tabassumi bor."
              },
              {
                "en": "The new modern building has an attractive glass facade.",
                "uz": "Yangi zamonaviy bino jozibali shisha fasadga ega."
              },
              {
                "en": "The boutique is located in an attractive part of the historic quarter.",
                "uz": "Do'kon tarixiy mavzening jozibador qismida joylashgan."
              }
            ]
          },
          {
            "id": "desc-2",
            "word": "Slender",
            "pos": "adjective",
            "phonetic": "/ˈslendə/",
            "uzbek": "Xushbichim, nozik",
            "definition": "Gracefully thin and well-proportioned.",
            "examples": [
              {
                "en": "The ballerina had a tall and slender frame.",
                "uz": "Balerina baland bo'yli va nozik-xushbichim qomatga ega edi."
              },
              {
                "en": "She wore an elegant dress that flattered her slender waist.",
                "uz": "U xushbichim beliga juda yarashgan nafis ko'ylak kiydi."
              },
              {
                "en": "Slender birch trees grew beside the tranquil mountain brook.",
                "uz": "Sokin tog' jilg'asi yonida xushbichim oq qayinlar o'sardi."
              }
            ]
          },
          {
            "id": "desc-3",
            "word": "Good-looking",
            "pos": "adjective",
            "phonetic": "/ˌɡʊdˈlʊkɪŋ/",
            "uzbek": "Kelishgan, chiroyli",
            "definition": "Having a pleasing physical appearance.",
            "examples": [
              {
                "en": "He is a very good-looking young man with friendly eyes.",
                "uz": "U ochiq chehrali, juda kelishgan yosh yigit."
              },
              {
                "en": "Both brother and sister are exceptionally good-looking.",
                "uz": "Aka ham, singil ham ajoyib darajada kelishgan."
              },
              {
                "en": "He has grown into a mature and good-looking doctor.",
                "uz": "U tajribali va kelishgan shifokor bo'lib yetishdi."
              }
            ]
          },
          {
            "id": "desc-4",
            "word": "Beard",
            "pos": "noun",
            "phonetic": "/bɪəd/",
            "uzbek": "Soqol",
            "definition": "Hair growing on the lower part of a man's face.",
            "examples": [
              {
                "en": "He grew a neat beard during the winter holidays.",
                "uz": "U qishki ta'tilda saranjom soqol qo'ydi."
              },
              {
                "en": "The barber trimmed his beard with professional care.",
                "uz": "Sartarosh uning soqolini mohirlik bilan tekislab berdi."
              },
              {
                "en": "The elderly professor has a distinguished white beard.",
                "uz": "Keksa professorning salobatli oq soqoli bor."
              }
            ]
          },
          {
            "id": "desc-5",
            "word": "Moustache",
            "pos": "noun",
            "phonetic": "/məˈstɑːʃ/",
            "uzbek": "Mo'ylov",
            "definition": "Hair growing on the upper lip of a man.",
            "examples": [
              {
                "en": "The police detective had a prominent dark moustache.",
                "uz": "Politsiya izquvarining yaqqol ajralib turadigan qora mo'ylovi bor edi."
              },
              {
                "en": "He stroked his moustache thoughtfully during the interview.",
                "uz": "U suhbat chog'ida o'ylanib mo'ylovini silab turdi."
              },
              {
                "en": "He decided to shave off his moustache before the wedding.",
                "uz": "U to'ydan oldin mo'ylovini qirtishlab tashlashga qaror qildi."
              }
            ]
          },
          {
            "id": "desc-6",
            "word": "Curly",
            "pos": "adjective",
            "phonetic": "/ˈkɜːli/",
            "uzbek": "Jingalak",
            "definition": "Formed into curls; not straight.",
            "examples": [
              {
                "en": "The boy has charming natural curly hair.",
                "uz": "Bolaning yoqimli tabiiy jingalak sochi bor."
              },
              {
                "en": "She uses rich conditioner to manage her thick curly curls.",
                "uz": "U qalin jingalak sochlarini parvarishlash uchun sifatli balzam ishlatadi."
              },
              {
                "en": "His curly dark hair reminds me of his father.",
                "uz": "Uning qora jingalak sochi menga otasini eslatadi."
              }
            ]
          },
          {
            "id": "desc-7",
            "word": "Straight",
            "pos": "adjective",
            "phonetic": "/streɪt/",
            "uzbek": "To'g'ri, tekis (soch)",
            "definition": "Without curves, curls or bends.",
            "examples": [
              {
                "en": "She has long silky straight hair that falls to her waist.",
                "uz": "Uning beligacha tushib turgan uzun ipakdek tekis sochi bor."
              },
              {
                "en": "He prefers his hair cut short and brushed straight back.",
                "uz": "U sochini kalta qilib orqaga tekis tarashni afzal ko'radi."
              },
              {
                "en": "Use a straight edge to align the photo frames on the wall.",
                "uz": "Devordagi rasmlarni tekis ilish uchun to'g'ri chizg'ichdan foydalaning."
              }
            ]
          },
          {
            "id": "desc-8",
            "word": "Handsome",
            "pos": "adjective",
            "phonetic": "/ˈhænsəm/",
            "uzbek": "Kelishgan (erkak kishi)",
            "definition": "Attractive in a dignified, impressive way.",
            "examples": [
              {
                "en": "The bridegroom looked very handsome in his formal suit.",
                "uz": "Kuyov rasmiy kostyumida juda kelishgan ko'rindi."
              },
              {
                "en": "He has a handsome face with sharp cheekbones.",
                "uz": "Uning qirrador yanoqli kelishgan yuzi bor."
              },
              {
                "en": "She was rewarded with a handsome bonus at the end of the term.",
                "uz": "U chorak yakunida yaxshigina saxiy bonus bilan taqdirlandi."
              }
            ]
          },
          {
            "id": "desc-9",
            "word": "Elderly",
            "pos": "adjective",
            "phonetic": "/ˈeldəli/",
            "uzbek": "Keksa, nuroniy",
            "definition": "Polite term for older people.",
            "examples": [
              {
                "en": "Offer your seat on public transport to elderly citizens.",
                "uz": "Jamoat transportida keksa fuqarolarga o'rningizni bering."
              },
              {
                "en": "An elderly gentleman was reading a morning newspaper on the bench.",
                "uz": "Nuroniy qariya o'rindiqda o'tirib ertalabki gazetani o'qiyotgan edi."
              },
              {
                "en": "Community centers offer special recreational clubs for elderly residents.",
                "uz": "Mahalla markazlari keksa yoshdagilar uchun maxsus to'garaklar tashkil etadi."
              }
            ]
          },
          {
            "id": "desc-10",
            "word": "Height",
            "pos": "noun",
            "phonetic": "/haɪt/",
            "uzbek": "Bo'y, balandlik",
            "definition": "Measurement from base to top or head to foot.",
            "examples": [
              {
                "en": "He is of medium height and athletic build.",
                "uz": "U o'rtacha bo'yli va sportcha qomatli."
              },
              {
                "en": "The pilot must meet strict minimum height requirements.",
                "uz": "Uchuvchi qat'iy minimal bo'y talablariga javob berishi shart."
              },
              {
                "en": "What is the total height of the newly built skyscraper?",
                "uz": "Yangi qurilgan osmono'par binoning umumiy balandligi qancha?"
              }
            ]
          }
        ]
      },
      {
        "id": "a1-u5-feelings",
        "unitNumber": 5,
        "title": "Unit 05: Feelings & Emotions (Tuyg'ular va his-tuyg'ular)",
        "category": "Feelings & Mind",
        "icon": "fa-face-smile",
        "color": "from-amber-400 to-orange-500",
        "description": "Insoniy his-tuyg'ular, quvonch, charchoq va minnatdorlik",
        "words": [
          {
            "id": "feel-1",
            "word": "Thirsty",
            "pos": "adjective",
            "phonetic": "/ˈθɜːsti/",
            "uzbek": "Chanqagan",
            "definition": "Feeling a need to drink liquid.",
            "examples": [
              {
                "en": "I was very thirsty after playing tennis under the hot sun.",
                "uz": "Qizigan quyosh ostida tennis o'ynaganimdan so'ng juda chanqab ketdim."
              },
              {
                "en": "Would you like a glass of fresh cold water? You look thirsty.",
                "uz": "Bir stakan muzdek toza suv xohlaysizmi? Chanqaganga o'xshaysiz."
              },
              {
                "en": "The garden flowers were thirsty after three days of dry heat.",
                "uz": "Uch kunlik quruq issiqdan keyin bog'dagi gullar suvga tashna edi."
              }
            ]
          },
          {
            "id": "feel-2",
            "word": "Exhausted",
            "pos": "adjective",
            "phonetic": "/ɪɡˈzɔːstɪd/",
            "uzbek": "Juda charchagan, toliqqan",
            "definition": "Completely drained of energy; extremely tired.",
            "examples": [
              {
                "en": "After working for twelve hours without a break, he was utterly exhausted.",
                "uz": "O'n ikki soat tanaffussiz ishlagach, u butunlay holdan toydi."
              },
              {
                "en": "The hikers were exhausted when they finally reached the mountain top.",
                "uz": "Sayyohlar tog' cho'qqisiga nihoyat yetib kelganda nihoyatda charchagan edilar."
              },
              {
                "en": "A hot bath helped the exhausted runner relax his tired muscles.",
                "uz": "Issiq vanna toliqqan yuguruvchining charchagan mushaklarini bo'shashtirishga yordam berdi."
              }
            ]
          },
          {
            "id": "feel-3",
            "word": "Proud",
            "pos": "adjective",
            "phonetic": "/praʊd/",
            "uzbek": "Faxrlanuvchi, g'ururlangan",
            "definition": "Feeling deep satisfaction as a result of an achievement.",
            "examples": [
              {
                "en": "Her parents were immensely proud when she received her university diploma.",
                "uz": "Universitet diplomini olganida ota-onasi u bilan cheksiz faxrlandilar."
              },
              {
                "en": "He was proud of the sturdy wooden table he had crafted himself.",
                "uz": "U o'z qo'llari bilan yasagan baquvvat yog'och stolidan faxrlandi."
              },
              {
                "en": "We are proud of our country's rich history and architectural heritage.",
                "uz": "Biz yurtimizning boy tarixi va me'moriy merosi bilan faxrlanamiz."
              }
            ]
          },
          {
            "id": "feel-4",
            "word": "Nervous",
            "pos": "adjective",
            "phonetic": "/ˈnɜːvəs/",
            "uzbek": "Hayajonlangan, xavotirli",
            "definition": "Anxious or apprehensive about something.",
            "examples": [
              {
                "en": "She felt nervous before giving her speech to the large audience.",
                "uz": "Katta auditoriya oldida nutq so'zlashdan oldin u juda hayajonlandi."
              },
              {
                "en": "Taking a deep breath helped calm his nervous racing heart.",
                "uz": "Chuqur nafas olish uning hayajondan tez urayotgan yuragini tinchlantirdi."
              },
              {
                "en": "He paced up and down the corridor looking visibly nervous.",
                "uz": "U dahlizda u yoqdan-bu yoqqa yurib, ko'rinib turganidek hayajonlanardi."
              }
            ]
          },
          {
            "id": "feel-5",
            "word": "Delighted",
            "pos": "adjective",
            "phonetic": "/dɪˈlaɪtɪd/",
            "uzbek": "Juda shod, mamnun",
            "definition": "Feeling or showing great pleasure.",
            "examples": [
              {
                "en": "We were delighted to receive an unexpected letter from our old schoolmate.",
                "uz": "Eski maktabdoshimizdan kutilmagan xat olganimizdan juda quvondik."
              },
              {
                "en": "The children were delighted with their surprise holiday presents.",
                "uz": "Bolalar kutilmagan bayram sovg'alaridan nihoyatda shod bo'lishdi."
              },
              {
                "en": "I would be delighted to join you for dinner tomorrow evening.",
                "uz": "Ertaga kechki ovqatda sizga mamnuniyat bilan qo'shilaman."
              }
            ]
          },
          {
            "id": "feel-6",
            "word": "Lonely",
            "pos": "adjective",
            "phonetic": "/ˈləʊnli/",
            "uzbek": "Yolg'iz, yakka",
            "definition": "Sad because one has no friends or companions.",
            "examples": [
              {
                "en": "He felt lonely when he first moved to the huge foreign city alone.",
                "uz": "Katta xorijiy shaharga yolg'iz ko'chib kelganida u o'zini yolg'iz his qildi."
              },
              {
                "en": "Adopting a friendly cat helped the elderly woman feel far less lonely.",
                "uz": "Mehribon mushuk asrab olish keksa ayolga o'zini ancha kamroq yolg'iz his qilishiga yordam berdi."
              },
              {
                "en": "She called her family every evening so she would not feel lonely.",
                "uz": "U o'zini yolg'iz his qilmaslik uchun har oqshom oilasiga qo'ng'iroq qilardi."
              }
            ]
          },
          {
            "id": "feel-7",
            "word": "Jealous",
            "pos": "adjective",
            "phonetic": "/ˈdʒeləs/",
            "uzbek": "Rashkchi, hasadgo'y",
            "definition": "Feeling envious of someone's achievements or possessions.",
            "examples": [
              {
                "en": "He was jealous of his brother's shiny new sports bicycle.",
                "uz": "U akasining yaltiragan yangi sport velosipediga hasad qildi."
              },
              {
                "en": "Try to celebrate your friends' success rather than feeling jealous.",
                "uz": "Hasad qilish o'rniga do'stlaringizning muvaffaqiyatini birga nishonlashga intiling."
              },
              {
                "en": "Her jealous attitude caused unnecessary arguments in the team.",
                "uz": "Uning rashkchi fe'l-atvori jamoada keraksiz bahslarga sabab bo'ldi."
              }
            ]
          },
          {
            "id": "feel-8",
            "word": "Confused",
            "pos": "adjective",
            "phonetic": "/kənˈfjuːzd/",
            "uzbek": "Boshi qotgan, sarosimada",
            "definition": "Unable to think clearly; bewildered.",
            "examples": [
              {
                "en": "The foreign tourist was confused by the complicated underground transit map.",
                "uz": "Chet ellik sayyoh metro xaritasining murakkabligidan boshi qotdi."
              },
              {
                "en": "If you are confused by any grammar rule, please raise your hand.",
                "uz": "Agar biron grammatik qoidaga tushunmay boshingiz qotgan bo'lsa, qo'lingizni ko'taring."
              },
              {
                "en": "His contradictory statements left the entire audience thoroughly confused.",
                "uz": "Uning bir-biriga zid gaplari butun tomoshabinlar boshini qotirdi."
              }
            ]
          },
          {
            "id": "feel-9",
            "word": "Upset",
            "pos": "adjective",
            "phonetic": "/ʌpˈset/",
            "uzbek": "Xafa, ranjigan",
            "definition": "Unhappy, disappointed, or worried.",
            "examples": [
              {
                "en": "She was deeply upset when her flight was cancelled due to fog.",
                "uz": "Tuman tufayli parvozi bekor qilinganida u juda xafa bo'ldi."
              },
              {
                "en": "There is no point getting upset over a minor accident that is already fixed.",
                "uz": "Allaqachon tuzatilgan kichik bir hodisa uchun xafa bo'lishning hojati yo'q."
              },
              {
                "en": "He sounded upset on the phone after hearing the bad news.",
                "uz": "Yomon xabarni eshitgach, uning telefondagi ovozi juda xafa eshitildi."
              }
            ]
          },
          {
            "id": "feel-10",
            "word": "Grateful",
            "pos": "adjective",
            "phonetic": "/ˈɡreɪtfəl/",
            "uzbek": "Minnatdor",
            "definition": "Feeling or showing appreciation for kindness.",
            "examples": [
              {
                "en": "I am truly grateful for all your kind help during my exams.",
                "uz": "Imtihonlarim paytidagi barcha ezgu yordamingiz uchun chin dildan minnatdorman."
              },
              {
                "en": "We are grateful to have such warm and supportive neighbours.",
                "uz": "Shunday ochiq ko'ngil va qo'llab-quvvatlovchi qo'shnilarimiz borligidan minnatdormiz."
              },
              {
                "en": "She wrote a lovely thank-you card to express how grateful she was.",
                "uz": "U qanchalik minnatdor ekanini izhor qilish uchun chiroyli minnatdorchilik xati yozdi."
              }
            ]
          }
        ]
      },
      {
        "id": "a1-freetime",
        "title": "Unit 06: Free Time & Hobbies (Bo'sh vaqt va mashg'ulotlar)",
        "icon": "fa-gamepad",
        "color": "from-green-400 to-emerald-600",
        "words": [
          {
            "id": "free-1",
            "word": "Hobby",
            "pos": "noun",
            "phonetic": "/ˈhɒbi/",
            "uzbek": "Sevimli mashg'ulot (xobbi)",
            "definition": "An activity done regularly in one's leisure time for pleasure.",
            "examples": [
              {
                "en": "Reading books is my favorite hobby in the evening.",
                "uz": "Kechqurun kitob o'qish mening eng sevimli mashg'ulotimdir."
              },
              {
                "en": "He has many hobbies, including photography and painting.",
                "uz": "Uning ko'plab xobbilari bor, jumladan suratga olish va rasm chizish."
              },
              {
                "en": "What kind of hobby do you enjoy most?",
                "uz": "Siz qanday mashg'ulotdan eng ko'p zavqlanasiz?"
              }
            ]
          },
          {
            "id": "free-2",
            "word": "Leisure",
            "pos": "noun",
            "phonetic": "/ˈleʒə/",
            "uzbek": "Dam olish vaqti, bo'sh vaqt",
            "definition": "Time when one is not working or occupied; free time.",
            "examples": [
              {
                "en": "Most people like to spend their leisure time with friends.",
                "uz": "Ko'pchilik odamlar bo'sh vaqtlarini do'stlari bilan o'tkazishni yoqtirishadi."
              },
              {
                "en": "She enjoys walking in the park in her leisure time.",
                "uz": "U bo'sh vaqtida bog'da sayr qilishni yoqtiradi."
              },
              {
                "en": "There are few leisure activities available in this small town.",
                "uz": "Bu kichik shaharchada hordiq chiqarish mashg'ulotlari juda kam."
              }
            ]
          },
          {
            "id": "free-3",
            "word": "Relax",
            "pos": "verb",
            "phonetic": "/rɪˈlæks/",
            "uzbek": "Dam olmoq, xordiq chiqarmoq",
            "definition": "To rest and become less active and stressed.",
            "examples": [
              {
                "en": "Listening to soft music helps me relax after work.",
                "uz": "Ishdan keyin sokin musiqa tinglash menga dam olishga yordam beradi."
              },
              {
                "en": "Take a deep breath and try to relax.",
                "uz": "Chuqur nafas oling va bo'shashishga harakat qiling."
              },
              {
                "en": "On Sundays, we just stay at home and relax.",
                "uz": "Yakshanba kunlari biz shunchaki uyda qolib dam olamiz."
              }
            ]
          },
          {
            "id": "free-4",
            "word": "Weekend",
            "pos": "noun",
            "phonetic": "/ˌwiːkˈend/",
            "uzbek": "Hafta oxiri (dam olish kunlari)",
            "definition": "Saturday and Sunday, the period between workweeks.",
            "examples": [
              {
                "en": "Have a wonderful weekend with your family!",
                "uz": "Oilangiz bilan ajoyib dam olish kunlarini o'tkazing!"
              },
              {
                "en": "What are your plans for the coming weekend?",
                "uz": "Kelayotgan hafta oxiriga qanday rejalaringiz bor?"
              },
              {
                "en": "I usually sleep late on the weekend.",
                "uz": "Dam olish kunlari odatda kech turaman."
              }
            ]
          },
          {
            "id": "free-5",
            "word": "Cinema",
            "pos": "noun",
            "phonetic": "/ˈsɪnəmə/",
            "uzbek": "Kinoteatr",
            "definition": "A theater where films are shown for public entertainment.",
            "examples": [
              {
                "en": "Let's go to the cinema tonight to watch a comedy.",
                "uz": "Keling, bugun kechqurun komediya ko'rish uchun kinoteatrga boraylik."
              },
              {
                "en": "The cinema was completely full of excited people.",
                "uz": "Kinoteatr hayajondagi odamlar bilan to'la edi."
              },
              {
                "en": "We bought popcorn before entering the cinema hall.",
                "uz": "Kinoteatr zaliga kirishdan oldin popkorn sotib oldik."
              }
            ]
          },
          {
            "id": "free-6",
            "word": "Music",
            "pos": "noun",
            "phonetic": "/ˈmjuːzɪk/",
            "uzbek": "Musiqa",
            "definition": "Vocal or instrumental sounds combined in such a way as to produce beauty of form.",
            "examples": [
              {
                "en": "I always listen to upbeat music while cleaning my room.",
                "uz": "Xonamni tozalayotganda doim sho'x musiqa eshitaman."
              },
              {
                "en": "Traditional music is very popular in Uzbekistan.",
                "uz": "O'zbekistonda milliy musiqa juda mashhur."
              },
              {
                "en": "Learning to play music takes time and patience.",
                "uz": "Musiqa chalishni o'rganish vaqt va sabr talab qiladi."
              }
            ]
          },
          {
            "id": "free-7",
            "word": "Guitar",
            "pos": "noun",
            "phonetic": "/ɡɪˈtɑː/",
            "uzbek": "Gitara",
            "definition": "A musical instrument with strings played with the fingers or a pick.",
            "examples": [
              {
                "en": "He plays the acoustic guitar very well.",
                "uz": "U akustik gitarani juda yaxshi chaladi."
              },
              {
                "en": "I want to buy a new guitar next month.",
                "uz": "Men kelasi oy yangi gitara sotib olmoqchiman."
              },
              {
                "en": "They sang songs around the campfire with a guitar.",
                "uz": "Ular gulxan atrofida gitara bilan qo'shiqlar kuylashdi."
              }
            ]
          },
          {
            "id": "free-8",
            "word": "Picnic",
            "pos": "noun",
            "phonetic": "/ˈpɪknɪk/",
            "uzbek": "Piknik, ochiq havoda dam olish",
            "definition": "An occasion when a packed meal is eaten outdoors in a park or countryside.",
            "examples": [
              {
                "en": "We had a sunny picnic in the central park on Saturday.",
                "uz": "Shanba kuni markaziy bog'da quyoshli piknik qildik."
              },
              {
                "en": "Pack some sandwiches and fruit for the family picnic.",
                "uz": "Oilaviy piknik uchun sendvichlar va mevalar oling."
              },
              {
                "en": "A picnic is a great way to enjoy nature with friends.",
                "uz": "Piknik do'stlar bilan tabiatdan bahramand bo'lishning ajoyib usuli."
              }
            ]
          },
          {
            "id": "free-9",
            "word": "Dance",
            "pos": "verb",
            "phonetic": "/dɑːns/",
            "uzbek": "Raqsga tushmoq",
            "definition": "To move rhythmically to music, typically following a set sequence of steps.",
            "examples": [
              {
                "en": "The children love to dance to energetic music.",
                "uz": "Bolalar jo'shqin musiqaga raqsga tushishni yaxshi ko'rishadi."
              },
              {
                "en": "Would you like to dance with me?",
                "uz": "Men bilan raqsga tushishni xohlaysizmi?"
              },
              {
                "en": "They danced together throughout the entire wedding party.",
                "uz": "Ular butun to'y davomida birga raqsga tushishdi."
              }
            ]
          },
          {
            "id": "free-10",
            "word": "Party",
            "pos": "noun",
            "phonetic": "/ˈpɑːti/",
            "uzbek": "Ziyofat, bayram oqshomi",
            "definition": "A social gathering of invited guests, involving eating, drinking, and entertainment.",
            "examples": [
              {
                "en": "We are organizing a surprise party for his birthday.",
                "uz": "Biz uning tug'ilgan kuniga kutilmagan bayram oqshomi tashkil qilyapmiz."
              },
              {
                "en": "Everyone had a lot of fun at yesterday's graduation party.",
                "uz": "Kechagi bitiruv kechasida hamma juda yaxshi vaqt o'tkazdi."
              },
              {
                "en": "Are you coming to the welcome party this Friday?",
                "uz": "Bu juma kungi kutib olish ziyofatiga kelasizmi?"
              }
            ]
          }
        ],
        "unitNumber": 6,
        "category": "Leisure & Hobbies"
      },
      {
        "id": "a1-sport",
        "title": "Unit 07: Sport & Physical Activities (Sport va harakatlar)",
        "icon": "fa-volleyball",
        "color": "from-teal-400 to-emerald-700",
        "words": [
          {
            "id": "spt-1",
            "word": "Match",
            "pos": "noun",
            "phonetic": "/mætʃ/",
            "uzbek": "Musobaqa, o'yin",
            "definition": "A sports competition or game in which two teams or players compete.",
            "examples": [
              {
                "en": "We watched an exciting football match yesterday.",
                "uz": "Biz kecha hayajonli futbol o'yinini tomosha qildik."
              },
              {
                "en": "Our school team won the final match.",
                "uz": "Maktabimiz jamoasi final o'yinida g'alaba qozondi."
              },
              {
                "en": "The tennis match lasted more than two hours.",
                "uz": "Tennis musobaqasi ikki soatdan ko'proq davom etdi."
              }
            ]
          },
          {
            "id": "spt-2",
            "word": "Player",
            "pos": "noun",
            "phonetic": "/ˈpleɪə/",
            "uzbek": "O'yinchi",
            "definition": "A person who takes part in a game or sport.",
            "examples": [
              {
                "en": "Cristiano Ronaldo is a world-famous football player.",
                "uz": "Krishtianu Ronaldu dunyoga mashhur futbolchi."
              },
              {
                "en": "Each player gave their best effort during the game.",
                "uz": "O'yin davomida har bir o'yinchi bor kuchini berdi."
              },
              {
                "en": "She is the fastest player on our basketball team.",
                "uz": "U bizning basketbol jamoamizdagi eng tezkor o'yinchi."
              }
            ]
          },
          {
            "id": "spt-3",
            "word": "Winner",
            "pos": "noun",
            "phonetic": "/ˈwɪnə/",
            "uzbek": "G'olib",
            "definition": "A person or team that wins a competition.",
            "examples": [
              {
                "en": "The winner received a shining gold medal.",
                "uz": "G'olib yaltiroq oltin medal bilan taqdirlandi."
              },
              {
                "en": "Everyone cheered loudly for the young winner.",
                "uz": "Hamma yosh g'olibni qizg'in olqishladi."
              },
              {
                "en": "Who was the winner of the 100-meter race?",
                "uz": "100 metrga yugurish musobaqasining g'olibi kim bo'ldi?"
              }
            ]
          },
          {
            "id": "spt-4",
            "word": "Team",
            "pos": "noun",
            "phonetic": "/tiːm/",
            "uzbek": "Jamoa",
            "definition": "A group of players forming one side in a competitive game.",
            "examples": [
              {
                "en": "Our national team played with incredible energy.",
                "uz": "Milliy jamoamiz aql bovar qilmas shijoat bilan o'ynadi."
              },
              {
                "en": "Good teamwork is the key to winning championships.",
                "uz": "Yaxshi jamoaviy harakat chempionlikni qo'lga kiritishning kalitidir."
              },
              {
                "en": "There are eleven players in a football team.",
                "uz": "Futbol jamoasida o'n bitta o'yinchi bo'ladi."
              }
            ]
          },
          {
            "id": "spt-5",
            "word": "Healthy",
            "pos": "adjective",
            "phonetic": "/ˈhelθi/",
            "uzbek": "Sog'lom",
            "definition": "In good physical or mental condition; in good health.",
            "examples": [
              {
                "en": "Doing sports every morning keeps your body healthy.",
                "uz": "Har kuni ertalab sport bilan shug'ullanish tanangizni sog'lom saqlaydi."
              },
              {
                "en": "Eating fresh fruits and vegetables is healthy.",
                "uz": "Yangi meva va sabzavotlarni iste'mol qilish foydali/sog'lomdir."
              },
              {
                "en": "She lives a very active and healthy lifestyle.",
                "uz": "U juda faol va sog'lom hayot tarzini olib boradi."
              }
            ]
          },
          {
            "id": "spt-6",
            "word": "Coach",
            "pos": "noun",
            "phonetic": "/kəʊtʃ/",
            "uzbek": "Murabbiy, trener",
            "definition": "A person who trains and instructs athletes or a sports team.",
            "examples": [
              {
                "en": "Our football coach gave us great advice before the game.",
                "uz": "Futbol murabbiyimiz o'yindan oldin bizga ajoyib maslahatlar berdi."
              },
              {
                "en": "He works hard to become a certified swimming coach.",
                "uz": "U sertifikatlangan suzish murabbiyi bo'lish uchun qattiq ishlamoqda."
              },
              {
                "en": "The coach praised the team for their outstanding teamwork.",
                "uz": "Murabbiy jamoani ajoyib jamoaviy o'yini uchun maqtadi."
              }
            ]
          },
          {
            "id": "spt-7",
            "word": "Champion",
            "pos": "noun",
            "phonetic": "/ˈtʃæmpiən/",
            "uzbek": "Chempion, g'olib",
            "definition": "A person or team that has defeated all rivals in a competition.",
            "examples": [
              {
                "en": "The boxer became the world champion after a tough fight.",
                "uz": "Bokschi qiyin jangdan so'ng jahon chempioni bo'ldi."
              },
              {
                "en": "Our school team are the city football champions this year.",
                "uz": "Maktabimiz jamoasi bu yil shahar futbol chempioni bo'ldi."
              },
              {
                "en": "Train like a champion if you want to win gold medals.",
                "uz": "Oltin medallarni yutmoqchi bo'lsangiz, chempiondek mashq qiling."
              }
            ]
          },
          {
            "id": "spt-8",
            "word": "Stadium",
            "pos": "noun",
            "phonetic": "/ˈsteɪdiəm/",
            "uzbek": "Stadion",
            "definition": "A large sports ground surrounded by tiers of seats for spectators.",
            "examples": [
              {
                "en": "Thousands of excited fans gathered at the national stadium.",
                "uz": "Minglab hayajondagi muxlislar milliy stadionda to'planishdi."
              },
              {
                "en": "The new stadium has modern facilities and green grass.",
                "uz": "Yangi stadion zamonaviy qulayliklar va maysazorga ega."
              },
              {
                "en": "We bought our tickets early to get good seats in the stadium.",
                "uz": "Stadionda yaxshi joylarni olish uchun chiptalarni ertaroq sotib oldik."
              }
            ]
          },
          {
            "id": "spt-9",
            "word": "Score",
            "pos": "verb",
            "phonetic": "/skɔː/",
            "uzbek": "Hisob ochmoq, gol urmoq",
            "definition": "To gain a point, goal, or run in a competitive game.",
            "examples": [
              {
                "en": "He managed to score the winning goal in the final minute.",
                "uz": "U so'nggi daqiqada g'alaba to'pini kiritishga muvaffaq bo'ldi."
              },
              {
                "en": "Can you check who scored the first point in the match?",
                "uz": "O'yinda birinchi ochkoni kim olganini tekshirib bera olasizmi?"
              },
              {
                "en": "She scored twenty points in the basketball championship.",
                "uz": "U basketbol chempionatida yigirmata ochko to'pladi."
              }
            ]
          },
          {
            "id": "spt-10",
            "word": "Train",
            "pos": "verb",
            "phonetic": "/treɪn/",
            "uzbek": "Mashq qilmoq, shug'ullanmoq",
            "definition": "To practice sports or physical exercises regularly to become fit.",
            "examples": [
              {
                "en": "Athletes train every morning to maintain their top condition.",
                "uz": "Sportchilar yuqori sport formasini saqlash uchun har kuni ertalab mashq qilishadi."
              },
              {
                "en": "I train at the local gym three times every week.",
                "uz": "Men mahalliy sport zalida haftasiga uch marta shug'ullanaman."
              },
              {
                "en": "She trains hard to qualify for the Olympic Games.",
                "uz": "U Olimpiya o'yinlariga yo'llanma olish uchun qattiq shug'ullanmoqda."
              }
            ]
          }
        ],
        "unitNumber": 7,
        "category": "Sports & Fitness"
      },
      {
        "id": "a1-shopping",
        "title": "Unit 08: Shopping & Money (Xaridlar va pul)",
        "icon": "fa-bag-shopping",
        "color": "from-cyan-500 to-teal-600",
        "words": [
          {
            "id": "shp-1",
            "word": "Cheap",
            "pos": "adjective",
            "phonetic": "/tʃiːp/",
            "uzbek": "Arzon",
            "definition": "Costing very little money; not expensive.",
            "examples": [
              {
                "en": "This market sells fresh vegetables at a cheap price.",
                "uz": "Bu bozorda yangi sabzavotlar arzon narxda sotiladi."
              },
              {
                "en": "Public transport in our city is very cheap.",
                "uz": "Bizning shahrimizda jamoat transporti juda arzon."
              },
              {
                "en": "I bought a cheap notebook for my English class.",
                "uz": "Men ingliz tili darsim uchun arzon daftar sotib oldim."
              }
            ]
          },
          {
            "id": "shp-2",
            "word": "Expensive",
            "pos": "adjective",
            "phonetic": "/ɪkˈspensɪv/",
            "uzbek": "Qimmat",
            "definition": "Costing a lot of money.",
            "examples": [
              {
                "en": "Smartphones from famous brands are quite expensive.",
                "uz": "Mashhur brendlarning smartfonlari ancha qimmat."
              },
              {
                "en": "Living in the center of the capital is expensive.",
                "uz": "Poytaxt markazida yashash qimmatga tushadi."
              },
              {
                "en": "That watch is too expensive; I cannot afford it.",
                "uz": "U soat juda qimmat; mening unga qurbim yetmaydi."
              }
            ]
          },
          {
            "id": "shp-3",
            "word": "Customer",
            "pos": "noun",
            "phonetic": "/ˈkʌstəmə/",
            "uzbek": "Xaridor, mijoz",
            "definition": "A person who buys goods or services from a shop or business.",
            "examples": [
              {
                "en": "The shopkeeper greeted each customer with a friendly smile.",
                "uz": "Do'kondor har bir xaridorni samimiy tabassum bilan kutib oldi."
              },
              {
                "en": "Satisfied customers often return to the same store.",
                "uz": "Mamnun bo'lgan mijozlar tez-tez o'sha do'konga qaytib kelishadi."
              },
              {
                "en": "There were several customers waiting at the cash desk.",
                "uz": "Kassada bir nechta xaridorlar navbat kutib turishgan edi."
              }
            ]
          },
          {
            "id": "shp-4",
            "word": "Discount",
            "pos": "noun",
            "phonetic": "/ˈdɪskaʊnt/",
            "uzbek": "Chegirma",
            "definition": "A deduction from the usual cost of something.",
            "examples": [
              {
                "en": "Students can get a 20% discount on train tickets.",
                "uz": "Talabalar poyezd chiptalariga 20% chegirma olishlari mumkin."
              },
              {
                "en": "The clothing store offered huge discounts for New Year.",
                "uz": "Kiyim do'koni Yangi yil munosabati bilan katta chegirmalar e'lon qildi."
              },
              {
                "en": "Is there any special discount if I pay with cash?",
                "uz": "Agar naqd pul bilan to'lasam, biron bir maxsus chegirma bormi?"
              }
            ]
          },
          {
            "id": "shp-5",
            "word": "Receipt",
            "pos": "noun",
            "phonetic": "/rɪˈsiːt/",
            "uzbek": "Chek, kvitansiya",
            "definition": "A piece of paper showing that you have paid for goods or services.",
            "examples": [
              {
                "en": "Always keep your receipt in case you want to return an item.",
                "uz": "Agar mahsulotni qaytarishni istasangiz, chekni doim saqlab qo'ying."
              },
              {
                "en": "The cashier handed me the receipt and my change.",
                "uz": "Kassir menga chek va qaytimimni uzatdi."
              },
              {
                "en": "Could you please give me a receipt for this payment?",
                "uz": "Iltimos, ushbu to'lov uchun menga chek bera olasizmi?"
              }
            ]
          },
          {
            "id": "shp-6",
            "word": "Market",
            "pos": "noun",
            "phonetic": "/ˈmɑːkɪt/",
            "uzbek": "Bozor",
            "definition": "A regular gathering of people for the purchase and sale of provisions.",
            "examples": [
              {
                "en": "We buy fresh vegetables and sweet fruits at the local market.",
                "uz": "Biz mahalliy bozordan yangi sabzavotlar va shirin mevalar sotib olamiz."
              },
              {
                "en": "The market is always busy on Sunday mornings.",
                "uz": "Yakshanba kunlari ertalab bozor doimo gavjum bo'ladi."
              },
              {
                "en": "Chorsu Bazaar is one of the oldest markets in Tashkent.",
                "uz": "Chorsu bozori Toshkentdagi eng qadimiy bozorlardan biridir."
              }
            ]
          },
          {
            "id": "shp-7",
            "word": "Price",
            "pos": "noun",
            "phonetic": "/praɪs/",
            "uzbek": "Narx, qiymat",
            "definition": "The amount of money expected or given in payment for something.",
            "examples": [
              {
                "en": "Could you please tell me the price of this warm jacket?",
                "uz": "Iltimos, bu issiq kurtkaning narxini aytib bera olasizmi?"
              },
              {
                "en": "The store offers high quality products at an affordable price.",
                "uz": "Do'kon yuqori sifatli mahsulotlarni hamyonbop narxda taklif qiladi."
              },
              {
                "en": "Food prices usually vary depending on the season.",
                "uz": "Oziq-ovqat narxlari odatda mavsumga qarab o'zgaradi."
              }
            ]
          },
          {
            "id": "shp-8",
            "word": "Cash",
            "pos": "noun",
            "phonetic": "/kæʃ/",
            "uzbek": "Naqd pul",
            "definition": "Money in coins or notes, as distinct from credit cards or checks.",
            "examples": [
              {
                "en": "Do you prefer to pay with cash or by bank card?",
                "uz": "Siz naqd pulda yoki bank kartasi orqali to'lashni afzal ko'rasizmi?"
              },
              {
                "en": "I always keep a little cash in my pocket for emergencies.",
                "uz": "Kutilmagan vaziyatlar uchun cho'ntagimda doim ozroq naqd pul saqlayman."
              },
              {
                "en": "Some small market stalls only accept cash payments.",
                "uz": "Ba'zi kichik bozor rastalari faqat naqd to'lovlarni qabul qiladi."
              }
            ]
          },
          {
            "id": "shp-9",
            "word": "Spend",
            "pos": "verb",
            "phonetic": "/spend/",
            "uzbek": "Pul sarflamoq",
            "definition": "To pay out money in buying goods, services, or entertainment.",
            "examples": [
              {
                "en": "Try not to spend too much money on unnecessary things.",
                "uz": "Keraksiz narsalarga ortiqcha pul sarflamaslikka harakat qiling."
              },
              {
                "en": "She spent twenty dollars on new English books.",
                "uz": "U yangi ingliz tili kitoblariga yigirma dollar sarfladi."
              },
              {
                "en": "Plan your monthly budget wisely so you don't overspend.",
                "uz": "Oylik byudjetingizni oqilona rejalashtiring, ortiqcha sarflab qo'ymang."
              }
            ]
          },
          {
            "id": "shp-10",
            "word": "Wallet",
            "pos": "noun",
            "phonetic": "/ˈwɒlɪt/",
            "uzbek": "Hamyon",
            "definition": "A pocket-sized folding case for holding paper money and bank cards.",
            "examples": [
              {
                "en": "He accidentally left his leather wallet in the taxi.",
                "uz": "U charm hamyonini tasodifan taksida qoldirib ketibdi."
              },
              {
                "en": "I opened my wallet to take out my student card.",
                "uz": "Talabalik guvohnomamni olish uchun hamyonimni ochdim."
              },
              {
                "en": "Her wallet is full of discount cards and family photos.",
                "uz": "Uning hamyoni chegirma kartalari va oilaviy suratlar bilan to'la."
              }
            ]
          }
        ],
        "unitNumber": 8,
        "category": "Shopping & Services"
      },
      {
        "id": "a1-u7-home",
        "unitNumber": 9,
        "title": "Unit 09: Home & Rooms (Uy va xonalar)",
        "category": "Everyday Life",
        "icon": "fa-couch",
        "color": "from-yellow-400 to-amber-600",
        "description": "Xonalar, jihozlar va mebel buyumlari",
        "words": [
          {
            "id": "home-1",
            "word": "Cupboard",
            "pos": "noun",
            "phonetic": "/ˈkʌbəd/",
            "uzbek": "Idish shkafi",
            "definition": "A cabinet with doors and shelves used for storing things.",
            "examples": [
              {
                "en": "Put the clean porcelain cups and plates away in the kitchen cupboard.",
                "uz": "Toza chinnilar va likopchalarni oshxona shkafiga taxlab qo'ying."
              },
              {
                "en": "She opened the wooden cupboard to look for tea bags and sugar.",
                "uz": "U choy paketchalari va shakarni qidirish uchun yog'och shkafni ochdi."
              },
              {
                "en": "The bottom cupboard is where we keep heavy pots and frying pans.",
                "uz": "Pastki shkafda biz og'ir qozonlar va tovalarni saqlaymiz."
              }
            ]
          },
          {
            "id": "home-2",
            "word": "Wardrobe",
            "pos": "noun",
            "phonetic": "/ˈwɔːdrəʊb/",
            "uzbek": "Kiyim shkafi",
            "definition": "A tall cabinet for hanging and storing clothes.",
            "examples": [
              {
                "en": "Hang your suits and jackets neatly inside the bedroom wardrobe.",
                "uz": "Kostyumlaringiz va nimchalaringizni yotoqxona shkafiga saranjom qilib osib qo'ying."
              },
              {
                "en": "She organized her summer dresses by colour in the spacious wardrobe.",
                "uz": "U keng kiyim shkafida yozgi ko'ylaklarini ranglariga qarab tartibladi."
              },
              {
                "en": "The antique wooden wardrobe was inherited from her great-grandmother.",
                "uz": "Qadimiy yog'och kiyim shkafi uning katta buvisidan meros qolgan edi."
              }
            ]
          },
          {
            "id": "home-3",
            "word": "Blanket",
            "pos": "noun",
            "phonetic": "/ˈblæŋkɪt/",
            "uzbek": "Adyol, ko'rpa",
            "definition": "A warm fabric covering used on beds.",
            "examples": [
              {
                "en": "Pull up the thick woollen blanket to stay warm during the cold night.",
                "uz": "Sovuq kechada issiq bo'lishi uchun qalin jun adyolni ustingizga torting."
              },
              {
                "en": "She wrapped a soft fleece blanket around her shoulders while reading.",
                "uz": "U kitob o'qiyotganda yelkalariga yumshoq adyol o'rab oldi."
              },
              {
                "en": "We spread a large checkered blanket on the meadow grass for our picnic.",
                "uz": "Biz piknik uchun o'tloq maysasiga katta katak-katak adyol yozdik."
              }
            ]
          },
          {
            "id": "home-4",
            "word": "Mirror",
            "pos": "noun",
            "phonetic": "/ˈmɪrə/",
            "uzbek": "Ko'zgu, oyna",
            "definition": "A reflective surface, typically of glass.",
            "examples": [
              {
                "en": "He checked his necktie in the hallway mirror before leaving for work.",
                "uz": "U ishga jo'nashdan oldin dahlizdagi oynaga qarab galstugini to'g'rilab oldi."
              },
              {
                "en": "The modern bathroom features a large illuminated mirror above the sink.",
                "uz": "Zamonaviy hammomda yuvinish chanoqlari ustida chiroqli katta ko'zgu o'rnatilgan."
              },
              {
                "en": "Always adjust your rear-view mirror before starting the car engine.",
                "uz": "Mashina motorini o't oldirishdan oldin doim orqa ko'rinish oynangizni to'g'rilang."
              }
            ]
          },
          {
            "id": "home-5",
            "word": "Pillow",
            "pos": "noun",
            "phonetic": "/ˈpɪləʊ/",
            "uzbek": "Yostiq",
            "definition": "A soft cushion used to support the head in bed.",
            "examples": [
              {
                "en": "She rested her tired head on the soft feather pillow and fell asleep.",
                "uz": "U charchagan boshini yumshoq pat yostiqqa qo'ydi va uxlab qoldi."
              },
              {
                "en": "An ergonomic memory foam pillow provides excellent neck support.",
                "uz": "Ergonomik maxsus yostiq bo'yin uchun ajoyib qulaylik yaratadi."
              },
              {
                "en": "He fluffed his pillow to get into a more comfortable sleeping position.",
                "uz": "U qulayroq yotish uchun yostig'ini qabartirib to'g'rilab oldi."
              }
            ]
          },
          {
            "id": "home-6",
            "word": "Balcony",
            "pos": "noun",
            "phonetic": "/ˈbælkəni/",
            "uzbek": "Balkon",
            "definition": "An outside platform accessed from an upper floor.",
            "examples": [
              {
                "en": "We sat on the sunny apartment balcony enjoying a cup of hot green tea.",
                "uz": "Biz quyoshli kvartira balkonida o'tirib, bir finjon issiq ko'k choydan bahramand bo'ldik."
              },
              {
                "en": "Our hotel suite had a private balcony with an unbroken view of the sea.",
                "uz": "Mehmonxona xonamiz dengizga qarab turuvchi shaxsiy balkonga ega edi."
              },
              {
                "en": "She grew fragrant herbs and red tomatoes in flower pots on her balcony.",
                "uz": "U balkonidagi tuvaklarda xushbo'y ko'katlar va qizil pomidorlar yetishtirardi."
              }
            ]
          },
          {
            "id": "home-7",
            "word": "Ceiling",
            "pos": "noun",
            "phonetic": "/ˈsiːlɪŋ/",
            "uzbek": "Shift",
            "definition": "The upper interior surface of a room.",
            "examples": [
              {
                "en": "The historic palace living room has high ceilings decorated with ornate gold patterns.",
                "uz": "Tarixiy saroyning mehmonxonasi naqshinkor tilla bezakli baland shiftlarga ega."
              },
              {
                "en": "A graceful crystal chandelier hung suspended from the center of the ceiling.",
                "uz": "Shiftning o'rtasidan muhtasham billur qandil osilib turardi."
              },
              {
                "en": "Water leaked from the flat above and left a yellow water mark on our white ceiling.",
                "uz": "Yuqori xonadondan suv oqib, oq shiftimizda sariq dog' qoldirdi."
              }
            ]
          },
          {
            "id": "home-8",
            "word": "Shelf",
            "pos": "noun",
            "phonetic": "/ʃelf/",
            "uzbek": "Javon tokchasi",
            "definition": "A flat horizontal board used to display or store items.",
            "examples": [
              {
                "en": "He neatly arranged all his English dictionaries on the second shelf.",
                "uz": "U barcha ingliz tili lug'atlarini ikkinchi javon tokchasiga saranjom taxlab chiqdi."
              },
              {
                "en": "Please place the reference book back on the proper library shelf after reading.",
                "uz": "Iltimos, ma'lumotnoma kitobini o'qib bo'lgach, kutubxona tokchasidagi o'z joyiga qaytaring."
              },
              {
                "en": "The kitchen shelf was lined with glass jars containing aromatic spices.",
                "uz": "Oshxona tokchasida xushbo'y ziravorlar solingan shisha idishlar tizilgan edi."
              }
            ]
          },
          {
            "id": "home-9",
            "word": "Carpet",
            "pos": "noun",
            "phonetic": "/ˈkɑːpɪt/",
            "uzbek": "Gilam",
            "definition": "A heavy floor covering made of woven fabric.",
            "examples": [
              {
                "en": "We laid a warm plush carpet in the living room to make it feel cozy.",
                "uz": "Mehmonxona shinam bo'lishi uchun polga issiq va yumshoq gilam to'shadik."
              },
              {
                "en": "Please remove your muddy outdoor shoes so you do not stain the clean carpet.",
                "uz": "Toza gilamni bulg'amaslik uchun ko'cha poyabzalingizni yeching."
              },
              {
                "en": "Samarkand is world-famous for its traditional hand-woven silk carpets.",
                "uz": "Samarqand o'zining an'anaviy qo'lda to'qilgan ipak gilamlari bilan dunyoga mashhur."
              }
            ]
          },
          {
            "id": "home-10",
            "word": "Apartment",
            "pos": "noun",
            "phonetic": "/əˈpɑːtmənt/",
            "uzbek": "Xonadon, kvartira",
            "definition": "A set of rooms forming a separate home inside a larger building.",
            "examples": [
              {
                "en": "They rented a bright modern two-bedroom apartment near the city center.",
                "uz": "Ular shahar markazi yaqinida yorug' va zamonaviy ikki xonali kvartirani ijaraga oldilar."
              },
              {
                "en": "The apartment building has a secure electronic entry gate and an underground garage.",
                "uz": "Kvartira binosida xavfsiz elektron kirish eshigi va yerosti garaji mavjud."
              },
              {
                "en": "Living in a quiet apartment close to university saves a lot of commuting time.",
                "uz": "Universitetga yaqin tinch kvartirada yashash qatnov vaqtini ancha tejaydi."
              }
            ]
          }
        ]
      },
      {
        "id": "a1-u8-jobs",
        "unitNumber": 10,
        "title": "Unit 10: Jobs & Workplaces (Kasblar va ish joylari)",
        "category": "Work & Jobs",
        "icon": "fa-briefcase",
        "color": "from-emerald-400 to-green-600",
        "description": "Eng keng tarqalgan kundalik kasblar va mutaxassisliklar",
        "words": [
          {
            "id": "job-1",
            "word": "Dentist",
            "pos": "noun",
            "phonetic": "/ˈdentɪst/",
            "uzbek": "Tish shifokori",
            "definition": "A medical professional specializing in teeth and oral health.",
            "examples": [
              {
                "en": "You should visit your dentist every six months for a routine dental checkup.",
                "uz": "Har olti oyda bir marotaba muntazam tekshiruv uchun tish shifokoringizga borib turishingiz kerak."
              },
              {
                "en": "The gentle dentist repaired the damaged tooth painlessly.",
                "uz": "Mehribon tish shifokori shikastlangan tishni og'riqsiz davoladi."
              },
              {
                "en": "Children often feel anxious when they sit in the dentist's high chair.",
                "uz": "Bolalar tish shifokorining baland kreslosiga o'tirganda ko'pincha hayajonlanishadi."
              }
            ]
          },
          {
            "id": "job-2",
            "word": "Mechanic",
            "pos": "noun",
            "phonetic": "/məˈkænɪk/",
            "uzbek": "Mexanik, chilangar",
            "definition": "A person who repairs and maintains machinery and vehicle engines.",
            "examples": [
              {
                "en": "The experienced mechanic diagnosed the engine fault within ten minutes.",
                "uz": "Tajribali mexanik motor nosozligini o'n daqiqa ichida aniqladi."
              },
              {
                "en": "Take your car to a licensed mechanic if you hear strange noises.",
                "uz": "Agar g'alati tovushlar eshitsangiz, mashinangizni litsenziyaga ega mexanikka ko'rsating."
              },
              {
                "en": "The garage mechanic checked the brake pads and changed the engine oil.",
                "uz": "Garaj mexanigi tormoz qoplamalarini tekshirib, motor moyini almashtirdi."
              }
            ]
          },
          {
            "id": "job-3",
            "word": "Nurse",
            "pos": "noun",
            "phonetic": "/nɜːs/",
            "uzbek": "Hamshira",
            "definition": "A person trained to care for patients under a doctor's direction.",
            "examples": [
              {
                "en": "The kind nurse administered the injection gently and took my temperature.",
                "uz": "Mehribon hamshira ukolni og'riqsiz qilib, haroratimni o'lchadi."
              },
              {
                "en": "Hospital nurses work long night shifts caring for post-surgery patients.",
                "uz": "Shifoxona hamshiralari operatsiyadan keyingi bemorlarga qarab, tuni bilan uzoq navbatchilikda turishadi."
              },
              {
                "en": "She studied nursing for four years to become a qualified pediatric nurse.",
                "uz": "U malakali bolalar hamshirasi bo'lish uchun to'rt yil ta'lim oldi."
              }
            ]
          },
          {
            "id": "job-4",
            "word": "Engineer",
            "pos": "noun",
            "phonetic": "/ˌendʒɪˈnɪə/",
            "uzbek": "Muhandis",
            "definition": "A person who designs or builds structures, engines, or systems.",
            "examples": [
              {
                "en": "The civil engineer supervised the construction of the new highway bridge.",
                "uz": "Qurilish muhandisi yangi magistral ko'prigi qurilishini nazorat qildi."
              },
              {
                "en": "Software engineers build robust mobile applications used by millions.",
                "uz": "Dasturiy ta'minot muhandislari millionlab insonlar foydalanadigan mustahkam ilovalar yaratadilar."
              },
              {
                "en": "He graduated with an honours degree in mechanical engineering.",
                "uz": "U mexanika muhandisligi yo'nalishini imtiyozli diplom bilan tamomladi."
              }
            ]
          },
          {
            "id": "job-5",
            "word": "Electrician",
            "pos": "noun",
            "phonetic": "/ɪˌlekˈtrɪʃn/",
            "uzbek": "Elektr ustasi",
            "definition": "A person who installs or repairs electrical wiring and apparatus.",
            "examples": [
              {
                "en": "Call a certified electrician to install the new circuit breaker safely.",
                "uz": "Yangi avtomat o'chirgichni xavfsiz o'rnatish uchun sertifikatlangan elektrchini chaqiring."
              },
              {
                "en": "The electrician quickly located and repaired the short circuit in the attic.",
                "uz": "Elektrchi boloxonadagi qisqa tutashuvni tezda topib, bartaraf qildi."
              },
              {
                "en": "An electrician must always follow strict safety guidelines to avoid hazards.",
                "uz": "Elektrchi xavf-xatarning oldini olish uchun har doim qat'iy xavfsizlik qoidalariga rioya qilishi shart."
              }
            ]
          },
          {
            "id": "job-6",
            "word": "Plumber",
            "pos": "noun",
            "phonetic": "/ˈplʌmə/",
            "uzbek": "Santexnik",
            "definition": "A person who fits and repairs pipes, fixtures, and water systems.",
            "examples": [
              {
                "en": "We called an emergency plumber when the bathroom pipe began leaking.",
                "uz": "Hammom quvuri oqa boshlaganda biz shoshilinch santexnikni chaqirdik."
              },
              {
                "en": "The plumber replaced the old rusty drainage pipes under the kitchen sink.",
                "uz": "Santexnik oshxona chanog'i ostidagi eski zanglagan quvurlarni almashtirib berdi."
              },
              {
                "en": "A skilled plumber has all the specialized wrenches and tools required for repairs.",
                "uz": "Tajribali santexnik ta'mirlash uchun barcha zaruriy kalitlar va asboblarga ega bo'ladi."
              }
            ]
          },
          {
            "id": "job-7",
            "word": "Accountant",
            "pos": "noun",
            "phonetic": "/əˈkaʊntənt/",
            "uzbek": "Buxgalter",
            "definition": "A practitioner who inspects and maintains business financial records.",
            "examples": [
              {
                "en": "The company accountant balanced the annual financial books accurately.",
                "uz": "Kompaniya buxgalteri yillik moliyaviy hisobotlarni aniq muvozanatlab chiqdi."
              },
              {
                "en": "She consulted an experienced accountant before filing her business taxes.",
                "uz": "U o'z biznes soliqlarini topshirishdan oldin tajribali hisobchi bilan maslahatlashdi."
              },
              {
                "en": "A certified accountant helps companies identify ways to reduce overhead costs.",
                "uz": "Sertifikatlangan hisobchi kompaniyalarga qo'shimcha xarajatlarni kamaytirish yo'llarini topishga yordam beradi."
              }
            ]
          },
          {
            "id": "job-8",
            "word": "Architect",
            "pos": "noun",
            "phonetic": "/ˈɑːkɪtekt/",
            "uzbek": "Me'mor, arxitektor",
            "definition": "A person who designs buildings and plans their construction.",
            "examples": [
              {
                "en": "The renowned architect designed an innovative eco-friendly school building.",
                "uz": "Mashhur me'mor ekologik toza innovatsion maktab binosini loyihalashtirdi."
              },
              {
                "en": "Architects draft precise digital blueprints before any foundation work begins.",
                "uz": "Poydevor ishlari boshlanishidan oldin me'morlar aniq raqamli chizmalarni chizadilar."
              },
              {
                "en": "She works closely with civil engineers to turn her creative sketches into reality.",
                "uz": "U o'zining ijodiy chizmalarini haqiqatga aylantirish uchun qurilish muhandislari bilan yaqindan ishlaydi."
              }
            ]
          },
          {
            "id": "job-9",
            "word": "Scientist",
            "pos": "noun",
            "phonetic": "/ˈsaɪəntɪst/",
            "uzbek": "Olim, tadqiqotchi",
            "definition": "An expert in science conducting systematic research.",
            "examples": [
              {
                "en": "Research scientists tested the new medicine under strict laboratory conditions.",
                "uz": "Tadqiqotchi olimlar yangi dori vositasini qat'iy laboratoriya sharoitida sinovdan o'tkazdilar."
              },
              {
                "en": "Scientists warn that global warming is accelerating polar ice sheet melting.",
                "uz": "Olimlar global isish qutb muzliklarining erishini tezlashtirayotganidan ogohlantirmoqda."
              },
              {
                "en": "She dreamed of becoming an astrophysicist and space scientist since childhood.",
                "uz": "U bolaligidan astrofizik va koinotshunos olim bo'lishni orzu qilgan edi."
              }
            ]
          },
          {
            "id": "job-10",
            "word": "Waiter",
            "pos": "noun",
            "phonetic": "/ˈweɪtə/",
            "uzbek": "Ofitsiant",
            "definition": "A person who serves food and drink to customers at tables.",
            "examples": [
              {
                "en": "The courteous waiter handed us the menu and took our drinks order.",
                "uz": "Xushmuomala ofitsiant bizga taomnoma berib, ichimlik buyurtmamizni oldi."
              },
              {
                "en": "He worked as a waiter in a lively city café to support his studies.",
                "uz": "U o'qish xarajatlarini qoplash uchun gavjum shahar kafesida ofitsiant bo'lib ishladi."
              },
              {
                "en": "We left a generous tip because the waiter provided prompt and attentive service.",
                "uz": "Ofitsiant tez va e'tiborli xizmat ko'rsatgani uchun unga yaxshigina choypuli qoldirdik."
              }
            ]
          }
        ]
      }
    ]
  },
  "A2": {
    "levelName": "A2 - Elementar (Elementary)",
    "description": "Oddiy muloqot va kundalik holatlar uchun zarur bo'lgan iboralar",
    "color": "blue",
    "badge": "A2 Elementar",
    "topics": [
      {
        "id": "a2-education",
        "title": "Unit 01: Education & School (Ta'lim va maktab)",
        "icon": "fa-graduation-cap",
        "color": "from-sky-400 to-blue-600",
        "words": [
          {
            "id": "edu-1",
            "word": "Subject",
            "pos": "noun",
            "phonetic": "/ˈsʌbdʒɪkt/",
            "uzbek": "Fan, o'quv predmeti",
            "definition": "An area of knowledge that is studied in school or college.",
            "examples": [
              {
                "en": "Mathematics is my favorite subject because I enjoy solving problems.",
                "uz": "Matematika mening sevimli fanim, chunki masalalar yechishni yoqtiraman."
              },
              {
                "en": "Students in high school choose several elective subjects.",
                "uz": "Yuqori sinf o'quvchilari bir nechta tanlov fanlarini tanlashadi."
              },
              {
                "en": "History is a fascinating subject that teaches us about the past.",
                "uz": "Tarix bizga o'tmish haqida o'rgatadigan qiziqarli fan."
              }
            ]
          },
          {
            "id": "edu-2",
            "word": "Degree",
            "pos": "noun",
            "phonetic": "/dɪˈɡriː/",
            "uzbek": "Diplom, ilmiy daraja",
            "definition": "A qualification given to a student after completing university study.",
            "examples": [
              {
                "en": "She has a bachelor's degree in computer science.",
                "uz": "U kompyuter fanlari bo'yicha bakalavr darajasiga (diplomiga) ega."
              },
              {
                "en": "Getting a university degree opens many career opportunities.",
                "uz": "Universitet diplomini olish ko'plab kasbiy imkoniyatlarni ochadi."
              },
              {
                "en": "He plans to study abroad to obtain a master's degree.",
                "uz": "U magistrlik darajasini olish uchun chet elda o'qishni rejalashtirmoqda."
              }
            ]
          },
          {
            "id": "edu-3",
            "word": "Library",
            "pos": "noun",
            "phonetic": "/ˈlaɪbrəri/",
            "uzbek": "Kutubxona",
            "definition": "A building or room containing collections of books and periodicals for reading.",
            "examples": [
              {
                "en": "I like to study in the library because it is very quiet.",
                "uz": "Men kutubxonada dars qilishni yoqtiraman, chunki u yer juda tinch."
              },
              {
                "en": "You can borrow up to three books from the school library.",
                "uz": "Maktab kutubxonasidan uchtagacha kitob qarzga olishingiz mumkin."
              },
              {
                "en": "The university library provides access to thousands of online journals.",
                "uz": "Universitet kutubxonasi minglab onlayn jurnallardan foydalanish imkonini beradi."
              }
            ]
          },
          {
            "id": "edu-4",
            "word": "Homework",
            "pos": "noun",
            "phonetic": "/ˈhəʊmwɜːk/",
            "uzbek": "Uy vazifasi",
            "definition": "Schoolwork that a student is given to do at home.",
            "examples": [
              {
                "en": "Students must finish their English homework before tomorrow morning.",
                "uz": "Talabalar ingliz tili uy vazifasini ertaga ertalabgacha bajarishlari shart."
              },
              {
                "en": "Our teacher gives us useful homework assignments every week.",
                "uz": "O'qituvchimiz har hafta bizga foydali uy vazifalari beradi."
              },
              {
                "en": "I spent three hours finishing my physics homework.",
                "uz": "Fizika uy vazifasini tugatish uchun uch soat vaqt sarfladim."
              }
            ]
          },
          {
            "id": "edu-5",
            "word": "Exam",
            "pos": "noun",
            "phonetic": "/ɪɡˈzæm/",
            "uzbek": "Imtihon",
            "definition": "A formal test of a person's knowledge or proficiency in a subject.",
            "examples": [
              {
                "en": "She studied diligently and passed the final exam with high marks.",
                "uz": "U astoydil o'qidi va yakuniy imtihondan yuqori baholar bilan o'tdi."
              },
              {
                "en": "The entrance exams will be held in the main university hall.",
                "uz": "Kirish imtihonlari universitetning asosiy zalida o'tkaziladi."
              },
              {
                "en": "Don't feel anxious; you are well prepared for this exam.",
                "uz": "Xavotir olmang; siz bu imtihonga yaxshi tayyorgarlik ko'rgansiz."
              }
            ]
          },
          {
            "id": "edu-6",
            "word": "Scholarship",
            "pos": "noun",
            "phonetic": "/ˈskɒləʃɪp/",
            "uzbek": "Grant, stipendiya",
            "definition": "Financial aid awarded to a student to support their academic studies.",
            "examples": [
              {
                "en": "She won a full scholarship to study at Oxford University.",
                "uz": "U Oksford universitetida o'qish uchun to'liq grant yutib oldi."
              },
              {
                "en": "Many students apply for international government scholarships.",
                "uz": "Ko'plab talabalar xalqaro davlat stipendiyalariga hujjat topshirishadi."
              },
              {
                "en": "His high test scores helped him earn a merit scholarship.",
                "uz": "Uning yuqori test ballari munosib stipendiya olishiga yordam berdi."
              }
            ]
          },
          {
            "id": "edu-7",
            "word": "Classmate",
            "pos": "noun",
            "phonetic": "/ˈklɑːsmeɪt/",
            "uzbek": "Sinfdosh, guruhdosh",
            "definition": "A fellow member of a class at school, college, or university.",
            "examples": [
              {
                "en": "I worked on the physics project together with my classmate.",
                "uz": "Men sinfdoshim bilan fizika loyihasi ustida birga ishladim."
              },
              {
                "en": "She invited all her former classmates to the reunion party.",
                "uz": "U barcha sobiq sinfdoshlarini uchrashuv kechasiga taklif qildi."
              },
              {
                "en": "My classmates are friendly and always ready to help each other.",
                "uz": "Guruhdoshlarim samimiy va doim bir-birlariga yordam berishga tayyor."
              }
            ]
          },
          {
            "id": "edu-8",
            "word": "Grade",
            "pos": "noun",
            "phonetic": "/ɡreɪd/",
            "uzbek": "Baho, o'zlashtirish darajasi",
            "definition": "A mark indicating a student's level of accomplishment in an exam or course.",
            "examples": [
              {
                "en": "He was very pleased because he received an 'A' grade in mathematics.",
                "uz": "U matematikadan 'A' a'lo baho olgani uchun juda xursand bo'ldi."
              },
              {
                "en": "Studying consistently helps you achieve higher grades.",
                "uz": "Doimiy va tartibli o'qish yuqori baholarga erishishga yordam beradi."
              },
              {
                "en": "The teacher submitted the final semester grades online.",
                "uz": "O'qituvchi yakuniy semestr baholarini onlayn tizimga kiritdi."
              }
            ]
          },
          {
            "id": "edu-9",
            "word": "Lecture",
            "pos": "noun",
            "phonetic": "/ˈlektʃə/",
            "uzbek": "Ma'ruza (universitetda)",
            "definition": "An educational talk given to students at a college or university.",
            "examples": [
              {
                "en": "The professor gave an inspiring lecture on world history.",
                "uz": "Professor jahon tarixi bo'yicha ilhomlantiruvchi ma'ruza qildi."
              },
              {
                "en": "Students took detailed notes throughout the two-hour lecture.",
                "uz": "Talabalar ikki soatlik ma'ruza davomida batafsil konspekt yozishdi."
              },
              {
                "en": "Attendance is compulsory for tomorrow's chemistry lecture.",
                "uz": "Ertangi kimyo ma'ruzasiga qatnashish majburiydir."
              }
            ]
          },
          {
            "id": "edu-10",
            "word": "Course",
            "pos": "noun",
            "phonetic": "/kɔːs/",
            "uzbek": "Kurs, o'quv kursi",
            "definition": "A series of lessons or lectures on a particular subject.",
            "examples": [
              {
                "en": "I enrolled in an intensive English language course.",
                "uz": "Men intensiv ingliz tili kursiga yozildim."
              },
              {
                "en": "This practical course teaches essential computer programming skills.",
                "uz": "Ushbu amaliy kurs dasturlashning asosiy ko'nikmalarini o'rgatadi."
              },
              {
                "en": "She successfully completed the online graphic design course.",
                "uz": "U onlayn grafik dizayn kursini muvaffaqiyatli yakunladi."
              }
            ]
          },
          {
            "id": "edu-11",
            "word": "Diploma",
            "pos": "noun",
            "phonetic": "/dɪˈpləʊmə/",
            "uzbek": "Diplom, kasbiy guvohnoma",
            "definition": "A certificate awarded by an educational institution verifying completed studies.",
            "examples": [
              {
                "en": "He proudly received his university diploma at graduation.",
                "uz": "U bitiruv marosimida faxr bilan universitet diplomini qabul qilib oldi."
              },
              {
                "en": "You need a high school diploma to apply for this college program.",
                "uz": "Ushbu kollej dasturiga ariza topshirish uchun maktab diplomi talab qilinadi."
              },
              {
                "en": "She framed her teaching diploma and hung it on the wall.",
                "uz": "U o'qituvchilik diplomini ramkaga solib devorga ilib qo'ydi."
              }
            ]
          },
          {
            "id": "edu-12",
            "word": "Revise",
            "pos": "verb",
            "phonetic": "/rɪˈvaɪz/",
            "uzbek": "Takrorlamoq, qayta ko'rib chiqmoq",
            "definition": "To re-read and study work done previously in preparation for an exam.",
            "examples": [
              {
                "en": "I must revise all grammar rules before tomorrow's test.",
                "uz": "Ertangi testdan oldin barcha grammatika qoidalarini takrorlab chiqishim shart."
              },
              {
                "en": "She spends three hours revising her science notes each night.",
                "uz": "U har kecha fan konspektlarini takrorlashga uch soat sarflaydi."
              },
              {
                "en": "Revising regularly prevents last-minute stress before exams.",
                "uz": "Muntazam takrorlash imtihon oldidagi so'nggi daqiqa hayajonining oldini oladi."
              }
            ]
          },
          {
            "id": "edu-13",
            "word": "Campus",
            "pos": "noun",
            "phonetic": "/ˈkæmpəs/",
            "uzbek": "Talabalar shaharchasi, kampus",
            "definition": "The grounds and buildings of a university, college, or school.",
            "examples": [
              {
                "en": "The university campus has modern dormitories and sports fields.",
                "uz": "Universitet shaharchasida zamonaviy yotoqxonalar va sport maydonchalari bor."
              },
              {
                "en": "Students love walking through the green campus in spring.",
                "uz": "Talabalar bahorda ko'kalamzor kampus bo'ylab sayr qilishni yaxshi ko'rishadi."
              },
              {
                "en": "There is a quiet cafe located in the center of the campus.",
                "uz": "Talabalar shaharchasining markazida shinam qahvaxona joylashgan."
              }
            ]
          },
          {
            "id": "edu-14",
            "word": "Tutor",
            "pos": "noun",
            "phonetic": "/ˈtjuːtə/",
            "uzbek": "Repetitor, shaxsiy o'qituvchi",
            "definition": "A private teacher, typically one who teaches an individual student or small group.",
            "examples": [
              {
                "en": "His private tutor helped him understand difficult math equations.",
                "uz": "Uning repetitori unga murakkab matematika tenglamalarini tushunishga ko'maklashdi."
              },
              {
                "en": "We hired an experienced tutor to improve his IELTS score.",
                "uz": "Uning IELTS ballini ko'tarish uchun tajribali repetitor yolladik."
              },
              {
                "en": "A good tutor identifies the student's weaknesses and fixes them.",
                "uz": "Yaxshi repetitor o'quvchining zaif tomonlarini aniqlab, ularni bartaraf etadi."
              }
            ]
          },
          {
            "id": "edu-15",
            "word": "Knowledge",
            "pos": "noun",
            "phonetic": "/ˈnɒlɪdʒ/",
            "uzbek": "Bilim, ma'lumot",
            "definition": "Facts, information, and skills acquired through experience or education.",
            "examples": [
              {
                "en": "Reading books is the most reliable way to expand your knowledge.",
                "uz": "Kitob o'qish bilimingizni boyitishning eng ishonchli usulidir."
              },
              {
                "en": "He has vast practical knowledge of computer networking.",
                "uz": "U kompyuter tarmoqlari bo'yicha ulkan amaliy bilimga ega."
              },
              {
                "en": "Knowledge gives people confidence and unlocks new opportunities.",
                "uz": "Bilim odamga ishonch bag'ishlaydi va yangi imkoniyatlar eshigini ochadi."
              }
            ]
          }
        ],
        "unitNumber": 1,
        "category": "Education & Study"
      },
      {
        "id": "a2-travelling",
        "title": "Unit 02: Travelling & Tourism (Sayohat va turizm)",
        "icon": "fa-plane-departure",
        "color": "from-blue-400 to-indigo-600",
        "words": [
          {
            "id": "trv-1",
            "word": "Journey",
            "pos": "noun",
            "phonetic": "/ˈdʒɜːni/",
            "uzbek": "Sayohat, uzoq safar",
            "definition": "An act of traveling from one place to another.",
            "examples": [
              {
                "en": "Have a safe and pleasant journey to Tashkent!",
                "uz": "Toshkentga sayohatingiz bexatar va yoqimli o'tsin!"
              },
              {
                "en": "The train journey took nearly six hours through scenic mountains.",
                "uz": "Poyezd safari go'zal tog'lar osha qariyb olti soat davom etdi."
              },
              {
                "en": "Travelling is not just about the destination, but also about the journey.",
                "uz": "Sayohat faqat manzil emas, balki safarning o'zi hamdir."
              }
            ]
          },
          {
            "id": "trv-2",
            "word": "Luggage",
            "pos": "noun",
            "phonetic": "/ˈlʌɡɪdʒ/",
            "uzbek": "Yuk, bagaj",
            "definition": "Suitcases or other bags in which to pack personal belongings for traveling.",
            "examples": [
              {
                "en": "Please make sure you do not leave your luggage unattended.",
                "uz": "Iltimos, yuklaringizni qarovsiz qoldirmasligingizga ishonch hosil qiling."
              },
              {
                "en": "The airline allows 23 kilograms of checked luggage.",
                "uz": "Aviakompaniya 23 kilogrammgacha ro'yxatdan o'tgan bagajga ruxsat beradi."
              },
              {
                "en": "He packed light luggage for his weekend city break.",
                "uz": "U dam olish kunidagi qisqa safari uchun yengil yuk yig'di."
              }
            ]
          },
          {
            "id": "trv-3",
            "word": "Passport",
            "pos": "noun",
            "phonetic": "/ˈpɑːspɔːt/",
            "uzbek": "Pasport",
            "definition": "An official document issued by a government certifying identity and citizenship.",
            "examples": [
              {
                "en": "You must show your passport at the border control.",
                "uz": "Chegara nazoratida pasportingizni ko'rsatishingiz shart."
              },
              {
                "en": "My foreign passport will expire in six months.",
                "uz": "Mening xorijiy pasportimning muddati olti oydan keyin tugaydi."
              },
              {
                "en": "Keep your passport in a safe zippered pocket while walking.",
                "uz": "Sayr qilayotganda pasportingizni xavfsiz zamokli cho'ntakda saqlang."
              }
            ]
          },
          {
            "id": "trv-4",
            "word": "Tourist",
            "pos": "noun",
            "phonetic": "/ˈtʊərɪst/",
            "uzbek": "Sayyoh, turist",
            "definition": "A person who is traveling or visiting a place for pleasure.",
            "examples": [
              {
                "en": "Thousands of tourists visit historical Samarkand every year.",
                "uz": "Har yili minglab sayyohlar tarixiy Samarqandni ziyorat qilishadi."
              },
              {
                "en": "The tourist took photos of the ancient minarets.",
                "uz": "Sayyoh qadimiy minoralarni suratga oldi."
              },
              {
                "en": "Local shops offer handmade souvenirs for foreign tourists.",
                "uz": "Mahalliy do'konlar chet ellik sayyohlar uchun qo'lda yasalgan esdalik sovg'alarini taklif etadi."
              }
            ]
          },
          {
            "id": "trv-5",
            "word": "Destination",
            "pos": "noun",
            "phonetic": "/ˌdestɪˈneɪʃn/",
            "uzbek": "Belgilangan manzil",
            "definition": "The place to which someone or something is going or being sent.",
            "examples": [
              {
                "en": "Bukhara is a popular travel destination in Central Asia.",
                "uz": "Buxoro Markaziy Osiyodagi mashhur sayohat manzilidir."
              },
              {
                "en": "After a long flight, we finally reached our final destination.",
                "uz": "Uzoq parvozdan so'ng biz nihoyat belgilangan manzilimizga yetib keldik."
              },
              {
                "en": "What is your dream holiday destination?",
                "uz": "Sizning orzuingizdagi ta'til manzili qayer?"
              }
            ]
          },
          {
            "id": "trv-6",
            "word": "Flight",
            "pos": "noun",
            "phonetic": "/flaɪt/",
            "uzbek": "Parvoz, aviareys",
            "definition": "A journey made through the air, especially in a passenger airplane.",
            "examples": [
              {
                "en": "Our international flight to London took seven hours.",
                "uz": "Londonga xalqaro parvozimiz yetti soat davom etdi."
              },
              {
                "en": "Please confirm your flight details at least one day before departure.",
                "uz": "Iltimos, jo'nashdan kamida bir kun oldin reys ma'lumotlarini tasdiqlang."
              },
              {
                "en": "The direct flight from Tashkent to Dubai was very comfortable.",
                "uz": "Toshkentdan Dubayga to'g'ridan-to'g'ri parvoz juda qulay bo'ldi."
              }
            ]
          },
          {
            "id": "trv-7",
            "word": "Boarding",
            "pos": "noun",
            "phonetic": "/ˈbɔːdɪŋ/",
            "uzbek": "Samolyotga yoki poyezdga chiqish",
            "definition": "The action of getting on or into an aircraft, train, or ship.",
            "examples": [
              {
                "en": "Passengers must show their boarding pass before entering the plane.",
                "uz": "Yo'lovchilar samolyotga chiqishdan oldin qo'nish talonini ko'rsatishlari kerak."
              },
              {
                "en": "Boarding for flight TK370 begins in twenty minutes at gate 4.",
                "uz": "TK370 reysiga chiqish yigirma daqiqadan so'ng 4-chiqish eshigida boshlanadi."
              },
              {
                "en": "Hurry up, the airline announced final boarding for our flight!",
                "uz": "Tezlashing, aviakompaniya bizning reysimiz uchun oxirgi qo'nishni e'lon qildi!"
              }
            ]
          },
          {
            "id": "trv-8",
            "word": "Souvenir",
            "pos": "noun",
            "phonetic": "/ˌsuːvəˈnɪə/",
            "uzbek": "Esdalik sovg'asi",
            "definition": "A thing kept as a reminder of a person, place, or memorable trip.",
            "examples": [
              {
                "en": "I bought traditional ceramic plates as souvenirs from Bukhara.",
                "uz": "Men Buxorodan esdalik sovg'asi sifatida milliy sopol idishlar sotib oldim."
              },
              {
                "en": "The shop sells magnets, postcards, and wooden souvenirs.",
                "uz": "Do'kon magnitlar, otkritkalar va yog'och esdalik sovg'alarini sotadi."
              },
              {
                "en": "Keep this souvenir to always remember our unforgettable trip.",
                "uz": "Unutilmas sayohatimizni doim eslab yurish uchun bu esdalikni saqlang."
              }
            ]
          },
          {
            "id": "trv-9",
            "word": "Guide",
            "pos": "noun",
            "phonetic": "/ɡaɪd/",
            "uzbek": "Gid, yo'l boshlovchi",
            "definition": "A person who shows the way to others, especially to tourists.",
            "examples": [
              {
                "en": "Our tour guide explained the history of the ancient fortress.",
                "uz": "Sayyohlik gidimiz qadimiy qal'aning tarixini tushuntirib berdi."
              },
              {
                "en": "It is safer to climb mountains with an experienced local guide.",
                "uz": "Tog'larga tajribali mahalliy yo'l boshlovchi bilan chiqish xavfsizroq."
              },
              {
                "en": "She speaks four foreign languages and works as a cultural guide.",
                "uz": "U to'rtta xorijiy tilni biladi va madaniy yo'l boshlovchi bo'lib ishlaydi."
              }
            ]
          },
          {
            "id": "trv-10",
            "word": "Reservation",
            "pos": "noun",
            "phonetic": "/ˌrezəˈveɪʃn/",
            "uzbek": "Band qilish, bron",
            "definition": "An arrangement where something such as a room or seat is kept for someone.",
            "examples": [
              {
                "en": "I made a reservation for a double room at the seaside hotel.",
                "uz": "Men dengiz bo'yidagi mehmonxonadan ikki kishilik xona band qildim."
              },
              {
                "en": "Do we need an advance table reservation for this restaurant?",
                "uz": "Ushbu restoran uchun oldindan stol band qilish kerakmi?"
              },
              {
                "en": "The hotel receptionist quickly confirmed our online reservation.",
                "uz": "Mehmonxona xodimi onlayn buyurtmamizni tezda tasdiqladi."
              }
            ]
          },
          {
            "id": "trv-11",
            "word": "Departure",
            "pos": "noun",
            "phonetic": "/dɪˈpɑːtʃə/",
            "uzbek": "Jo'nab ketish, jo'nash",
            "definition": "The action of leaving, especially to start an international journey.",
            "examples": [
              {
                "en": "The departure board shows which flights are on time.",
                "uz": "Jo'nash tablosida qaysi reyslar o'z vaqtida uchayotgani ko'rsatilgan."
              },
              {
                "en": "Passengers should arrive two hours prior to scheduled departure.",
                "uz": "Yo'lovchilar rejalashtirilgan jo'nashdan ikki soat oldin yetib kelishlari lozim."
              },
              {
                "en": "Bad weather caused the sudden departure delay.",
                "uz": "Noqulay ob-havo jo'nashning kutilmaganda kechikishiga sabab bo'ldi."
              }
            ]
          },
          {
            "id": "trv-12",
            "word": "Arrival",
            "pos": "noun",
            "phonetic": "/əˈraɪvl/",
            "uzbek": "Yetib kelish, kelish",
            "definition": "The act of arriving at a destination after traveling.",
            "examples": [
              {
                "en": "We were warmly greeted by our friends upon arrival at the airport.",
                "uz": "Aeroportga yetib kelishimiz bilan do'stlarimiz bizni iliq kutib olishdi."
              },
              {
                "en": "The train arrival time is estimated at six o'clock in the evening.",
                "uz": "Poyezdning yetib kelish vaqti kechki soat oltiga mo'ljallangan."
              },
              {
                "en": "Check the arrival terminal on your electronic ticket.",
                "uz": "Elektron chiptangizdagi yetib kelish terminalini tekshiring."
              }
            ]
          },
          {
            "id": "trv-13",
            "word": "Explore",
            "pos": "verb",
            "phonetic": "/ɪkˈsplɔː/",
            "uzbek": "Tadqiq qilmoq, yangi joylarni aylanmoq",
            "definition": "To travel through an unfamiliar area in order to discover and learn about it.",
            "examples": [
              {
                "en": "We rented bicycles to explore the historic streets of Rome.",
                "uz": "Biz Rimning tarixiy ko'chalarini aylanish uchun velosipedlar ijaraga oldik."
              },
              {
                "en": "Tourists love exploring hidden waterfalls in the mountains.",
                "uz": "Sayyohlar tog'lardagi yashirin sharsharalarni kashf etishni yoqtirishadi."
              },
              {
                "en": "Take time to explore local markets and try regional food.",
                "uz": "Mahalliy bozorlarni kezishga va mintaqaviy taomlarni tatib ko'rishga vaqt ajrating."
              }
            ]
          },
          {
            "id": "trv-14",
            "word": "Hotel",
            "pos": "noun",
            "phonetic": "/həʊˈtel/",
            "uzbek": "Mehmonxona",
            "definition": "An establishment providing accommodation, meals, and services for travelers.",
            "examples": [
              {
                "en": "We booked a quiet room in a four-star hotel downtown.",
                "uz": "Biz shahar markazidagi to'rt yulduzli mehmonxonadan tinch xona bron qildik."
              },
              {
                "en": "The hotel offers free high-speed WiFi and tasty buffet breakfast.",
                "uz": "Mehmonxona bepul tezkor WiFi va mazali shved stoli nonushtasini taqdim etadi."
              },
              {
                "en": "The helpful hotel staff carried our heavy bags to the third floor.",
                "uz": "Xushmuomala mehmonxona xodimlari og'ir sumkalarimizni uchinchi qavatga ko'tarib berishdi."
              }
            ]
          },
          {
            "id": "trv-15",
            "word": "Customs",
            "pos": "noun",
            "phonetic": "/ˈkʌstəmz/",
            "uzbek": "Bojxona nazorati",
            "definition": "The official department that inspects luggage and collects duties on goods.",
            "examples": [
              {
                "en": "It took only ten minutes to pass through international customs.",
                "uz": "Xalqaro bojxona nazoratidan o'tish bor-yo'g'i o'n daqiqa vaqt oldi."
              },
              {
                "en": "You must declare expensive electronics at airport customs.",
                "uz": "Aeroport bojxonasida qimmatbaho elektron jihozlarni deklaratsiya qilishingiz shart."
              },
              {
                "en": "Customs officers politely checked our travel documents and luggage.",
                "uz": "Bojxona xodimlari yo'l hujjatlarimiz va yuklarimizni muloyimlik bilan tekshirishdi."
              }
            ]
          }
        ],
        "unitNumber": 2,
        "category": "Travel & Transport"
      },
      {
        "id": "a2-health",
        "title": "Unit 03: Health & Illness (Salomatlik va kasalliklar)",
        "icon": "fa-heart-pulse",
        "color": "from-cyan-400 to-blue-700",
        "words": [
          {
            "id": "hlt-1",
            "word": "Headache",
            "pos": "noun",
            "phonetic": "/ˈhedeɪk/",
            "uzbek": "Bosh og'rig'i",
            "definition": "A continuous pain in the head.",
            "examples": [
              {
                "en": "I have had a bad headache since this morning.",
                "uz": "Ertalabdan beri qattiq bosh og'rig'i meni qiynamoqda."
              },
              {
                "en": "Drinking plenty of water often helps relieve a mild headache.",
                "uz": "Ko'p suv ichish odatda yengil bosh og'rig'ini qoldirishga yordam beradi."
              },
              {
                "en": "Looking at computer screens for too long causes headaches.",
                "uz": "Kompyuter ekraniga uzoq vaqt qarash bosh og'rig'iga sabab bo'ladi."
              }
            ]
          },
          {
            "id": "hlt-2",
            "word": "Medicine",
            "pos": "noun",
            "phonetic": "/ˈmedsn/",
            "uzbek": "Dori, davo",
            "definition": "A substance or preparation used in treating disease or illness.",
            "examples": [
              {
                "en": "The doctor prescribed effective medicine for my cough.",
                "uz": "Shifokor yo'talim uchun samarali dori yozib berdi."
              },
              {
                "en": "Take this medicine twice a day after meals.",
                "uz": "Ushbu dorini kuniga ikki marta ovqatdan so'ng iching."
              },
              {
                "en": "Keep all medicines out of reach of small children.",
                "uz": "Barcha dorilarni yosh bolalar qo'li yetmaydigan joyda saqlang."
              }
            ]
          },
          {
            "id": "hlt-3",
            "word": "Doctor",
            "pos": "noun",
            "phonetic": "/ˈdɒktə/",
            "uzbek": "Shifokor, do'xtir",
            "definition": "A person who is qualified to treat people who are ill.",
            "examples": [
              {
                "en": "You should see a doctor if your fever doesn't go down.",
                "uz": "Agar isitma tushmasa, shifokorga ko'rinishingiz kerak."
              },
              {
                "en": "The doctor explained the treatment plan clearly.",
                "uz": "Shifokor davolash rejasini aniq tushuntirib berdi."
              },
              {
                "en": "My brother decided to become a doctor to help people in need.",
                "uz": "Akam muhtoj insonlarga yordam berish uchun shifokor bo'lishga qaror qildi."
              }
            ]
          },
          {
            "id": "hlt-4",
            "word": "Exercise",
            "pos": "noun / verb",
            "phonetic": "/ˈeksəsaɪz/",
            "uzbek": "Jismoniy mashq / Mashq qilmoq",
            "definition": "Activity requiring physical effort, carried out to sustain health and fitness.",
            "examples": [
              {
                "en": "Regular physical exercise improves both physical and mental health.",
                "uz": "Doimiy jismoniy mashqlar jismoniy va ruhiy salomatlikni yaxshilaydi."
              },
              {
                "en": "I try to exercise for at least thirty minutes every morning.",
                "uz": "Men har kuni ertalab kamida o'ttiz daqiqa mashq qilishga harakat qilaman."
              },
              {
                "en": "Swimming is considered an excellent full-body exercise.",
                "uz": "Suzish butun tana uchun ajoyib mashq hisoblanadi."
              }
            ]
          },
          {
            "id": "hlt-5",
            "word": "Hospital",
            "pos": "noun",
            "phonetic": "/ˈhɒspɪtl/",
            "uzbek": "Shifoxona, kasalxona",
            "definition": "An institution providing medical and surgical treatment and nursing care.",
            "examples": [
              {
                "en": "The city opened a modern hospital equipped with advanced technology.",
                "uz": "Shahar zamonaviy texnologiyalar bilan jihozlangan yangi shifoxonani ochdi."
              },
              {
                "en": "The ambulance rushed the patient straight to the hospital.",
                "uz": "Tez yordam mashinasi bemorni to'g'ridan-to'g'ri kasalxonaga yetkazdi."
              },
              {
                "en": "She works as a dedicated nurse at the children's hospital.",
                "uz": "U bolalar shifoxonasida jonkuyar hamshira bo'lib ishlaydi."
              }
            ]
          },
          {
            "id": "hlt-6",
            "word": "Stomachache",
            "pos": "noun",
            "phonetic": "/ˈstʌməkeɪk/",
            "uzbek": "Qorin og'rig'i",
            "definition": "A pain in a person's stomach or abdominal area.",
            "examples": [
              {
                "en": "Eating unripe fruit often causes an uncomfortable stomachache.",
                "uz": "Xom mevalarni yeyish ko'pincha yoqimsiz qorin og'rig'iga sabab bo'ladi."
              },
              {
                "en": "Drink warm chamomile tea to soothe your stomachache.",
                "uz": "Qorin og'rig'ini yengillashtirish uchun iliq moychechak choyini iching."
              },
              {
                "en": "He stayed home from school because of a severe stomachache.",
                "uz": "U qattiq qorin og'rig'i sababli maktabga bormay uyda qoldi."
              }
            ]
          },
          {
            "id": "hlt-7",
            "word": "Fever",
            "pos": "noun",
            "phonetic": "/ˈfiːvə/",
            "uzbek": "Isitma, yuqori harorat",
            "definition": "An abnormally high body temperature, usually accompanied by shivering.",
            "examples": [
              {
                "en": "The thermometer showed he had a high fever of 39 degrees.",
                "uz": "Termometr uning harorati 39 daraja yuqori isitma ekanini ko'rsatdi."
              },
              {
                "en": "Drink plenty of warm liquids when recovering from a fever.",
                "uz": "Isitmadan tuzalayotganingizda ko'proq iliq suyuqliklar iching."
              },
              {
                "en": "Her fever went down after taking the prescribed syrup.",
                "uz": "Buyurilgan siropni ichgandan so'ng uning isitmasi tushdi."
              }
            ]
          },
          {
            "id": "hlt-8",
            "word": "Prescription",
            "pos": "noun",
            "phonetic": "/prɪˈskrɪpʃn/",
            "uzbek": "Retsept (dori uchun)",
            "definition": "An instruction written by a doctor authorizing a patient to obtain medicine.",
            "examples": [
              {
                "en": "You need an official doctor's prescription to purchase this antibiotic.",
                "uz": "Bu antibiotikni xarid qilish uchun shifokorning rasmiy retsepti kerak bo'ladi."
              },
              {
                "en": "The pharmacist carefully checked the doctor's prescription.",
                "uz": "Dorixona xodimi shifokor retseptini diqqat bilan tekshirdi."
              },
              {
                "en": "Always follow the medical prescription strictly to recover quickly.",
                "uz": "Tez tuzalish uchun doim shifokor retseptiga qat'iy amal qiling."
              }
            ]
          },
          {
            "id": "hlt-9",
            "word": "Nurse",
            "pos": "noun",
            "phonetic": "/nɜːs/",
            "uzbek": "Hamshira",
            "definition": "A person trained to care for the sick or infirm, especially in a clinic.",
            "examples": [
              {
                "en": "The caring nurse gave the patient an injection gently.",
                "uz": "Mehribon hamshira bemorga sekingina dori ukolini qildi."
              },
              {
                "en": "Nurses work day and night shifts to ensure patient health.",
                "uz": "Hamshiralar bemorlar salomatligini ta'minlash uchun tunu-kun navbatchilik qilishadi."
              },
              {
                "en": "The nurse checked his pulse and recorded his blood pressure.",
                "uz": "Hamshira uning pulsini tekshirib, qon bosimini daftarga qayd etdi."
              }
            ]
          },
          {
            "id": "hlt-10",
            "word": "Patient",
            "pos": "noun",
            "phonetic": "/ˈpeɪʃnt/",
            "uzbek": "Bemor, davolanuvchi",
            "definition": "A person receiving or registered to receive professional medical care.",
            "examples": [
              {
                "en": "The doctor examined three patients before lunchtime.",
                "uz": "Shifokor tushlikkacha uchta bemorni ko'rikdan o'tkazdi."
              },
              {
                "en": "The recovering patient was finally discharged from hospital.",
                "uz": "Sog'ayayotgan bemorga nihoyat kasalxonadan uyiga ruxsat berildi."
              },
              {
                "en": "Doctors listen attentively to understand every patient's symptoms.",
                "uz": "Shifokorlar har bir bemorning alomatlarini tushunish uchun diqqat bilan tinglaydilar."
              }
            ]
          },
          {
            "id": "hlt-11",
            "word": "Symptom",
            "pos": "noun",
            "phonetic": "/ˈsɪmptəm/",
            "uzbek": "Alomat, belgi",
            "definition": "A physical or mental sign indicating the presence of a illness.",
            "examples": [
              {
                "en": "Coughing and fatigue are common symptoms of the seasonal flu.",
                "uz": "Yo'tal va charchoq mavsumiy grippning eng keng tarqalgan alomatlaridir."
              },
              {
                "en": "Consult a healthcare specialist if your symptoms persist for days.",
                "uz": "Agar alomatlar bir necha kun davom etsa, mutaxassis shifokorga murojaat qiling."
              },
              {
                "en": "Loss of appetite can be an early symptom of infection.",
                "uz": "Ishtahaning yo'qolishi infeksiyaning dastlabki belgisi bo'lishi mumkin."
              }
            ]
          },
          {
            "id": "hlt-12",
            "word": "Recovery",
            "pos": "noun",
            "phonetic": "/rɪˈkʌvəri/",
            "uzbek": "Sog'ayish, tuzalish",
            "definition": "A return to a normal state of health, vitality, or physical strength.",
            "examples": [
              {
                "en": "Adequate rest and healthy food speed up your recovery.",
                "uz": "Yetarli dam olish va foydali taomlar sog'ayishingizni tezlashtiradi."
              },
              {
                "en": "The surgery was successful and the athlete is on the road to recovery.",
                "uz": "Jarrohlik muvaffaqiyatli o'tdi va sportchi tuzalish yo'lida."
              },
              {
                "en": "We all wish you a rapid and complete recovery.",
                "uz": "Barchamiz sizga tez va to'liq shifo tilaymiz."
              }
            ]
          },
          {
            "id": "hlt-13",
            "word": "Vitamin",
            "pos": "noun",
            "phonetic": "/ˈvɪtəmɪn/",
            "uzbek": "Vitamin, darmondori",
            "definition": "Essential organic compounds required in small quantities for healthy bodily function.",
            "examples": [
              {
                "en": "Fresh oranges and lemons are rich sources of Vitamin C.",
                "uz": "Yangi apelsin va limonlar S vitaminining boy manbaidir."
              },
              {
                "en": "Taking multivitamin supplements strengthens the body's immune system.",
                "uz": "Polivitamin qo'shimchalarini qabul qilish tananing immunitet tizimini mustahkamlaydi."
              },
              {
                "en": "Natural sunshine stimulates the production of Vitamin D.",
                "uz": "Tabiiy quyosh nuri D vitamini ishlab chiqarilishini rag'batlantiradi."
              }
            ]
          },
          {
            "id": "hlt-14",
            "word": "Bandage",
            "pos": "noun",
            "phonetic": "/ˈbændɪdʒ/",
            "uzbek": "Bog'ich, bint",
            "definition": "A strip of fabric used to bind and protect a wound or injury.",
            "examples": [
              {
                "en": "The doctor wrapped a sterile bandage around his injured ankle.",
                "uz": "Shifokor uning jarohatlangan to'pig'iga steril bint bog'lab qo'ydi."
              },
              {
                "en": "Change the clean bandage daily to avoid dangerous wound infections.",
                "uz": "Jarohatga infeksiya tushmasligi uchun toza bog'ichni har kuni almashtiring."
              },
              {
                "en": "Keep a first aid kit with scissors and bandages in your vehicle.",
                "uz": "Mashinangizda qaychi va bintlar bo'lgan birinchi tibbiy yordam qutisini saqlang."
              }
            ]
          },
          {
            "id": "hlt-15",
            "word": "Dentist",
            "pos": "noun",
            "phonetic": "/ˈdentɪst/",
            "uzbek": "Tish shifokori, stomatolog",
            "definition": "A doctor qualified to treat diseases and conditions affecting teeth and gums.",
            "examples": [
              {
                "en": "You should visit the dentist twice a year for routine checkups.",
                "uz": "Muntazam ko'rik uchun tish shifokoriga yiliga ikki marta borish tavsiya etiladi."
              },
              {
                "en": "The dentist filled the painful tooth quickly and without pain.",
                "uz": "Stomatolog og'riyotgan tishni tez va og'riqsiz plomba qilib berdi."
              },
              {
                "en": "Children are taught to brush their teeth properly by the dentist.",
                "uz": "Bolalarga tishlarini to'g'ri yuvishni stomatolog o'rgatadi."
              }
            ]
          }
        ],
        "unitNumber": 3,
        "category": "Health & Body"
      },
      {
        "id": "a2-u4-eatingout",
        "unitNumber": 4,
        "title": "Unit 04: Eating Out & Restaurants (Restoranda ovqatlanish)",
        "category": "Food & Drink",
        "icon": "fa-utensils",
        "color": "from-rose-400 to-red-600",
        "description": "Restoranlar, taomnoma, buyurtma berish va to'lov",
        "words": [
          {
            "id": "eat-1",
            "word": "Menu",
            "pos": "noun",
            "phonetic": "/ˈmenjuː/",
            "uzbek": "Taomnoma, menyu",
            "definition": "A list of the dishes available in a restaurant.",
            "examples": [
              {
                "en": "Could we please see the dinner menu and wine list?",
                "uz": "Kechki taomnoma va ichimliklar ro'yxatini ko'rsak maylimi?"
              },
              {
                "en": "The restaurant menu offers an extensive range of vegetarian and fish dishes.",
                "uz": "Restoran taomnomasi go'shtsiz va baliqli taomlarning keng tanlovini taqdim etadi."
              },
              {
                "en": "Today's special dish is not printed on the menu; the waiter will describe it.",
                "uz": "Bugungi kun maxsus taomi menyuda yozilmagan; ofitsiant uni o'zi tushuntirib beradi."
              }
            ]
          },
          {
            "id": "eat-2",
            "word": "Waiter",
            "pos": "noun",
            "phonetic": "/ˈweɪtə/",
            "uzbek": "Ofitsiant",
            "definition": "A man who takes orders and serves food to customers in a restaurant.",
            "examples": [
              {
                "en": "The attentive waiter recommended the chef's specialty pasta dish.",
                "uz": "E'tiborli ofitsiant bosh oshpazning maxsus pastasini tavsiya qildi."
              },
              {
                "en": "He waved politely to catch the waiter's eye across the bustling dining room.",
                "uz": "U gavjum ovqatlanish zalida ofitsiantning e'tiborini tortish uchun muloyimlik bilan qo'l ko'tardi."
              },
              {
                "en": "The waiter brought fresh warm bread rolls while we awaited our main meals.",
                "uz": "Biz asosiy taomlarni kutayotganimizda ofitsiant issiq bulochkalarni olib keldi."
              }
            ]
          },
          {
            "id": "eat-3",
            "word": "Bill",
            "pos": "noun",
            "phonetic": "/bɪl/",
            "uzbek": "Hisob-kitob, chek",
            "definition": "A printed statement of the charges for food and drinks.",
            "examples": [
              {
                "en": "Excuse me, could we please have the bill whenever you are ready?",
                "uz": "Kechirasiz, imkoningiz bo'lganda hisobni olib kelsangiz maylimi?"
              },
              {
                "en": "They decided to split the restaurant bill equally between all four friends.",
                "uz": "To'rt do'st restoran hisobini o'zaro teng bo'lib to'lashga qaror qildilar."
              },
              {
                "en": "Check the bill carefully to make sure all ordered dishes are accurate.",
                "uz": "Buyurtma qilingan barcha taomlar to'g'ri yozilganini bilish uchun hisobni ko'zdan kechiring."
              }
            ]
          },
          {
            "id": "eat-4",
            "word": "Main course",
            "pos": "noun",
            "phonetic": "/ˌmeɪn ˈkɔːs/",
            "uzbek": "Asosiy taom",
            "definition": "The featured or most substantial dish of a meal.",
            "examples": [
              {
                "en": "For my main course, I ordered grilled salmon served with steamed seasonal vegetables.",
                "uz": "Asosiy taom uchun men sabzavotlar bilan qovurilgan losos balig'iga buyurtma berdim."
              },
              {
                "en": "The traditional Uzbek pilaf is always served hot as the grand main course.",
                "uz": "An'anaviy o'zbek palovi har doim tantanali asosiy taom sifatida issiq tortiladi."
              },
              {
                "en": "The portions for the main course were generous and exceptionally flavourful.",
                "uz": "Asosiy taomning porsiyalari juda katta va nihoyatda mazali edi."
              }
            ]
          },
          {
            "id": "eat-5",
            "word": "Appetizer",
            "pos": "noun",
            "phonetic": "/ˈæpɪtaɪzə/",
            "uzbek": "Ishtahaochar tamaddi",
            "definition": "A small dish of food served before the main meal.",
            "examples": [
              {
                "en": "We ordered a plate of garlic bread and fresh olives as an appetizer.",
                "uz": "Biz ishtahaochar tamaddi sifatida sarimsoqli non va zaytun buyurtma qildik."
              },
              {
                "en": "A light vegetable salad serves as a refreshing healthy appetizer.",
                "uz": "Yengil sabzavotli salat ajoyib foydali ishtahaochar tamaddi vazifasini o'taydi."
              },
              {
                "en": "The banquet menu offered five different hot and cold appetizers.",
                "uz": "Ziyofat taomnomasida besh xil issiq va sovuq tamaddilar taklif etildi."
              }
            ]
          },
          {
            "id": "eat-6",
            "word": "Tip",
            "pos": "noun",
            "phonetic": "/tɪp/",
            "uzbek": "Choypuli",
            "definition": "A sum of money given to a waiter in gratitude for service.",
            "examples": [
              {
                "en": "We left a generous tip because our waiter was exceptionally attentive and quick.",
                "uz": "Ofitsiantimiz nihoyatda e'tiborli va tez ishlagani uchun yaxshigina choypuli qoldirdik."
              },
              {
                "en": "In many countries, leaving a ten percent cash tip is customary etiquette.",
                "uz": "Ko'plab davlatlarda o'n foiz miqdorida naqd choypuli qoldirish odat tusiga kirgan."
              },
              {
                "en": "Check the bill to see whether a service tip has already been included.",
                "uz": "Xizmat haqi uchun choypuli hisobga allaqachon qo'shilgan yoki yo'qligini tekshirib ko'ring."
              }
            ]
          },
          {
            "id": "eat-7",
            "word": "Service",
            "pos": "noun",
            "phonetic": "/ˈsɜːvɪs/",
            "uzbek": "Xizmat ko'rsatish",
            "definition": "The action of serving food and attending to customers.",
            "examples": [
              {
                "en": "The restaurant is renowned across town for its impeccable and courteous service.",
                "uz": "Restoran butun shahar bo'ylab o'zining benuqson va xushmuomala xizmati bilan tanilgan."
              },
              {
                "en": "Although the food was delicious, the table service was regrettably sluggish.",
                "uz": "Taom mazali bo'lsa-da, afsuski stollarga xizmat ko'rsatish ancha sekin kechdi."
              },
              {
                "en": "A discretionary ten percent service charge was added to the restaurant receipt.",
                "uz": "Restoran chekiga ixtiyoriy o'n foizlik xizmat haqi kiritilgan edi."
              }
            ]
          },
          {
            "id": "eat-8",
            "word": "Order",
            "pos": "noun",
            "phonetic": "/ˈɔːdə/",
            "uzbek": "Buyurtma",
            "definition": "A request made by a customer to be served food or drink.",
            "examples": [
              {
                "en": "Are you ready to place your food order, or do you need a few more minutes?",
                "uz": "Taomga buyurtma berishga tayyormisiz yoki yana bir necha daqiqa kerakmi?"
              },
              {
                "en": "The kitchen prepared our order promptly without any mistakes.",
                "uz": "Oshxona bizning buyurtmamizni hech qanday xatosiz va tezda tayyorlab berdi."
              },
              {
                "en": "Can I modify my drink order before the waiter sends it to the kitchen?",
                "uz": "Ofitsiant oshxonaga yubormasdan oldin ichimlik buyurtmamni o'zgartirsam bo'ladimi?"
              }
            ]
          },
          {
            "id": "eat-9",
            "word": "Dessert",
            "pos": "noun",
            "phonetic": "/dɪˈzɜːt/",
            "uzbek": "Desert, shirinlik",
            "definition": "The sweet course eaten at the end of a meal.",
            "examples": [
              {
                "en": "Save room for dessert; the homemade chocolate cake is outstanding!",
                "uz": "Shirinlik uchun ham joy qoldiring; uy sharoitida pishirilgan shokoladli tort ajoyib!"
              },
              {
                "en": "Would anyone care for dessert or perhaps a hot cup of espresso?",
                "uz": "Shirinlik yoki bir finjon qaynoq espresso ichishni xohlovchilar bormi?"
              },
              {
                "en": "We shared a delicious fruit tart and vanilla ice cream for dessert.",
                "uz": "Biz desert sifatida mazali mevali pirog va vanilli muzqaymoqni baham ko'rdik."
              }
            ]
          },
          {
            "id": "eat-10",
            "word": "Cutlery",
            "pos": "noun",
            "phonetic": "/ˈkʌtləri/",
            "uzbek": "Oshxona anjomlari (qoshiq, sanchqi, pichoq)",
            "definition": "Knives, forks, and spoons used for eating or serving food.",
            "examples": [
              {
                "en": "The waiter polished the silver cutlery before setting the banquet table.",
                "uz": "Ofitsiant ziyofat stolini bezatishdan oldin kumush qoshiq-sanchqilarni yaltiratib artdi."
              },
              {
                "en": "Excuse me, could you bring a clean soup spoon? My cutlery is missing one.",
                "uz": "Kechirasiz, toza sho'rva qoshig'i keltira olasizmi? Mening anjomlarim orasida u yetishmayapti."
              },
              {
                "en": "Stainless steel cutlery is durable, rust-resistant, and easy to sanitize.",
                "uz": "Zanglamaydigan po'lat qoshiq-sanchqilar chidamli, zanglamas va tozalashga qulaydir."
              }
            ]
          }
        ]
      },
      {
        "id": "a2-u3-hotel",
        "unitNumber": 5,
        "title": "Unit 05: Hotel & Accommodation (Mehmonxona va turar joy)",
        "category": "Travel & Accommodation",
        "icon": "fa-hotel",
        "color": "from-indigo-400 to-blue-600",
        "description": "Mehmonxona xonalari, xizmatlar va bron qilish",
        "words": [
          {
            "id": "hot-1",
            "word": "Single room",
            "pos": "noun",
            "phonetic": "/ˈsɪŋɡl ruːm/",
            "uzbek": "Bir kishilik xona",
            "definition": "A hotel room designed for one occupant.",
            "examples": [
              {
                "en": "I booked a quiet single room with private bathroom for my business trip.",
                "uz": "Xizmat safarim uchun shaxsiy hammomga ega sokin bir kishilik xonani band qildim."
              },
              {
                "en": "The single room includes a study desk, free wi-fi, and a flat-screen television.",
                "uz": "Bir kishilik xonada yozuv stoli, bepul wi-fi va televizor mavjud."
              },
              {
                "en": "Is a single room available for two consecutive nights next week?",
                "uz": "Kelasi hafta ikki kechaga ketma-ket bir kishilik xona bo'shmi?"
              }
            ]
          },
          {
            "id": "hot-2",
            "word": "Double room",
            "pos": "noun",
            "phonetic": "/ˈdʌbl ruːm/",
            "uzbek": "Ikki kishilik xona",
            "definition": "A hotel room with a double bed for two people.",
            "examples": [
              {
                "en": "We reserved a spacious double room overlooking the city square.",
                "uz": "Biz shahar maydoniga qarab turuvchi keng ikki kishilik xonani bron qildik."
              },
              {
                "en": "Does the price for the double room include complimentary breakfast?",
                "uz": "Ikki kishilik xona narxiga bepul ertalabki nonushta kiradimi?"
              },
              {
                "en": "The newly married couple requested a deluxe double room on the top floor.",
                "uz": "Yangi turmush qurgan juftlik yuqori qavatdagi shinam ikki kishilik xonani so'rashdi."
              }
            ]
          },
          {
            "id": "hot-3",
            "word": "Receptionist",
            "pos": "noun",
            "phonetic": "/rɪˈsepʃənɪst/",
            "uzbek": "Qabulxona xodimi",
            "definition": "A person greeting visitors and managing bookings in a hotel.",
            "examples": [
              {
                "en": "The friendly receptionist handed us our room key and city map.",
                "uz": "Xushmuomala qabulxona xodimi bizga xona kalitimizni va shahar xaritasini berdi."
              },
              {
                "en": "Ask the front desk receptionist to arrange an early morning wake-up call.",
                "uz": "Qabulxona xodimidan ertalab barvaqt uyg'otish qo'ng'irog'ini amalga oshirishni iltimos qiling."
              },
              {
                "en": "The receptionist verified our booking details quickly and efficiently.",
                "uz": "Qabulxona xodimi bandlov ma'lumotlarimizni tez va chaqqonlik bilan tekshirdi."
              }
            ]
          },
          {
            "id": "hot-4",
            "word": "Reservation",
            "pos": "noun",
            "phonetic": "/ˌrezəˈveɪʃn/",
            "uzbek": "Band qilish, bron",
            "definition": "An arrangement by which accommodation is secured in advance.",
            "examples": [
              {
                "en": "We have a confirmed hotel reservation under the name of Mr Smith.",
                "uz": "Janob Smit nomiga tasdiqlangan mehmonxona bandlovimiz bor."
              },
              {
                "en": "You should make a reservation well in advance during peak tourist season.",
                "uz": "Yozgi sayyohlik mavsumida joyni ancha oldindan bron qilib qo'yishingiz kerak."
              },
              {
                "en": "Can I cancel my hotel room reservation without paying a cancellation penalty?",
                "uz": "Mehmonxona bandlovimni jarima to'lamasdan bekor qilsam bo'ladimi?"
              }
            ]
          },
          {
            "id": "hot-5",
            "word": "Luggage",
            "pos": "noun",
            "phonetic": "/ˈlʌɡɪdʒ/",
            "uzbek": "Yuk, chamadonlar",
            "definition": "Suitcases or other bags in which to pack personal belongings for traveling.",
            "examples": [
              {
                "en": "The porter kindly helped us carry our heavy luggage up to our room.",
                "uz": "Xizmatchi og'ir yuklarimizni xonamizgacha olib chiqishga samimiy yordam berdi."
              },
              {
                "en": "You can leave your luggage securely in the hotel storage room after checkout.",
                "uz": "Mehmonxonadan chiqqaningizdan keyin yuklaringizni xavfsiz saqlash xonasida qoldirishingiz mumkin."
              },
              {
                "en": "Make sure your luggage has a sturdy tag with your mobile phone number.",
                "uz": "Yuklaringizda telefon raqamingiz yozilgan mustahkam birka borligiga ishonch hosil qiling."
              }
            ]
          },
          {
            "id": "hot-6",
            "word": "Keycard",
            "pos": "noun",
            "phonetic": "/ˈkiːkɑːd/",
            "uzbek": "Elektron kalit-karta",
            "definition": "A small plastic card used instead of a key to open hotel room doors.",
            "examples": [
              {
                "en": "Hold your electronic keycard against the reader to unlock your bedroom door.",
                "uz": "Yotoqxona eshigini ochish uchun elektron kalit-kartangizni qulfga tekkazing."
              },
              {
                "en": "Insert the keycard into the wall slot to turn on the room lighting.",
                "uz": "Xona chiroqlarini yoqish uchun kalit-kartani devordagi maxsus joyga kiriting."
              },
              {
                "en": "If you misplace your keycard, the hotel front desk will issue a replacement.",
                "uz": "Agar kalit-kartangizni yo'qotib qo'ysangiz, qabulxona sizga yangisini beradi."
              }
            ]
          },
          {
            "id": "hot-7",
            "word": "Elevator",
            "pos": "noun",
            "phonetic": "/ˈelɪveɪtə/",
            "uzbek": "Lift",
            "definition": "A platform or compartment used for raising and lowering people in buildings.",
            "examples": [
              {
                "en": "Take the central elevator to the fifth floor and turn right.",
                "uz": "Markaziy lift orqali beshinchi qavatga chiqing va o'ngga buriling."
              },
              {
                "en": "In the event of a fire emergency, never use the elevator.",
                "uz": "Yong'in paytida favqulodda vaziyatda aslo liftdan foydalanmang."
              },
              {
                "en": "The hotel elevator is fast, quiet, and equipped with safety sensors.",
                "uz": "Mehmonxona lifti tez, shovqinsiz va xavfsizlik datchiklari bilan jihozlangan."
              }
            ]
          },
          {
            "id": "hot-8",
            "word": "Balcony",
            "pos": "noun",
            "phonetic": "/ˈbælkəni/",
            "uzbek": "Balkon, veranda",
            "definition": "A platform enclosed by a railing on the outside of a hotel room.",
            "examples": [
              {
                "en": "Our deluxe hotel suite features a scenic private balcony with sea views.",
                "uz": "Shinam xonamiz dengizga qaraydigan ajoyib manzarali shaxsiy balkonga ega."
              },
              {
                "en": "We enjoyed having room-service breakfast out in the fresh air on the balcony.",
                "uz": "Biz tonggi toza havoda balkonda xonaga buyurtma qilingan nonushtadan bahramand bo'ldik."
              },
              {
                "en": "Please keep the glass balcony door shut to keep the air conditioning cool.",
                "uz": "Konditsioner xonani salqin saqlashi uchun shisha balkon eshigini yopiq qoldiring."
              }
            ]
          },
          {
            "id": "hot-9",
            "word": "Check-in",
            "pos": "noun",
            "phonetic": "/ˈtʃek ɪn/",
            "uzbek": "Ro'yxatdan o'tish (kirish)",
            "definition": "The act of reporting one's arrival at a hotel.",
            "examples": [
              {
                "en": "Standard hotel check-in begins at two o'clock in the afternoon.",
                "uz": "Mehmonxonada odatiy ro'yxatdan o'tish tushdan keyin soat ikkida boshlanadi."
              },
              {
                "en": "Please have your passport ready for verification during check-in.",
                "uz": "Ro'yxatdan o'tish chog'ida tekshirish uchun pasportingizni tayyorlab turing."
              },
              {
                "en": "The hotel offers convenient online check-in through their smartphone mobile app.",
                "uz": "Mehmonxona o'z mobil ilovasi orqali juda qulay onlayn ro'yxatdan o'tishni taklif qiladi."
              }
            ]
          },
          {
            "id": "hot-10",
            "word": "Check-out",
            "pos": "noun",
            "phonetic": "/ˈtʃek aʊt/",
            "uzbek": "Mehmonxonadan chiqish",
            "definition": "The act of vacating and paying for one's hotel room.",
            "examples": [
              {
                "en": "Guests must complete check-out by noon on their departure day.",
                "uz": "Mehmonlar ketish kuni soat o'n ikkigacha xonani bo'shatib ro'yxatdan chiqishlari kerak."
              },
              {
                "en": "We requested a late check-out so we could relax before our evening flight.",
                "uz": "Kechki reysimizdan oldin dam olish uchun kechiktirilgan chiqish vaqtini so'radik."
              },
              {
                "en": "Pay any mini-bar charges at the reception desk during final check-out.",
                "uz": "Yakuniy chiqish paytida mini-bar to'lovlarini qabulxonada amalga oshiring."
              }
            ]
          }
        ]
      },
      {
        "id": "a2-u2-shopping",
        "unitNumber": 6,
        "title": "Unit 06: Shopping in the City (Shaharda xarid qilish)",
        "category": "Shopping & Commerce",
        "icon": "fa-bag-shopping",
        "color": "from-purple-500 to-pink-600",
        "description": "Do'konlar, kassa, to'lovlar va xarid jarayoni",
        "words": [
          {
            "id": "a2shp-1",
            "word": "Receipt",
            "pos": "noun",
            "phonetic": "/rɪˈsiːt/",
            "uzbek": "Kvitansiya, chek",
            "definition": "A paper proof of purchase handed to buyers.",
            "examples": [
              {
                "en": "Keep your purchase receipt in case you need to exchange the item.",
                "uz": "Mahsulotni almashtirish zarurati tug'ilsa kerak bo'ladi, chekni saqlab qo'ying."
              },
              {
                "en": "The cashier handed me the receipt along with my change.",
                "uz": "Kassir qoldiq pulim bilan birga chekni ham qo'limga tutqazdi."
              },
              {
                "en": "You cannot claim a refund without showing the original receipt.",
                "uz": "Asl chekni ko'rsatmasdan turib pulingizni qaytarib ololmaysiz."
              }
            ]
          },
          {
            "id": "a2shp-2",
            "word": "Discount",
            "pos": "noun",
            "phonetic": "/ˈdɪskaʊnt/",
            "uzbek": "Chegirma",
            "definition": "A deduction from the usual cost of an item.",
            "examples": [
              {
                "en": "Students receive a ten percent discount on all books with their student card.",
                "uz": "Talabalar guvohnomasi bilan barcha kitoblarga o'n foiz chegirma oladilar."
              },
              {
                "en": "The supermarket is offering special weekend discounts on fresh produce.",
                "uz": "Supermarket yangi sabzavot-mevalarga dam olish kunlari maxsus chegirmalar taklif qilmoqda."
              },
              {
                "en": "Ask the store manager if any promotional discount applies to this jacket.",
                "uz": "Ushbu kurtkaga biron aksiya chegirmasi amal qilishini do'kon mudiridan so'rab ko'ring."
              }
            ]
          },
          {
            "id": "a2shp-3",
            "word": "Department store",
            "pos": "noun",
            "phonetic": "/dɪˈpɑːtmənt stɔː/",
            "uzbek": "Universam, universal do'kon",
            "definition": "A large shop stocking many varieties of goods in separate sections.",
            "examples": [
              {
                "en": "The city center department store sells clothes, cosmetics, and homeware.",
                "uz": "Shahar markazidagi universal do'kon kiyim-kechak, kosmetika va uy buyumlarini sotadi."
              },
              {
                "en": "We rode the escalator to the top floor of the department store.",
                "uz": "Biz universal do'konning eng yuqori qavatiga eskalatorda chiqdik."
              },
              {
                "en": "Holiday shoppers crowded the aisles of the major department store.",
                "uz": "Bayram xaridorlari yirik universamning qatorlarini to'ldirib yuborishdi."
              }
            ]
          },
          {
            "id": "a2shp-4",
            "word": "Customer",
            "pos": "noun",
            "phonetic": "/ˈkʌstəmə/",
            "uzbek": "Xaridor, mijoz",
            "definition": "A person who buys goods or services from a shop or business.",
            "examples": [
              {
                "en": "The shop assistant was polite and helpful to every single customer.",
                "uz": "Sotuvchi har bir xaridorga xushmuomala va yordamga tayyor bo'ldi."
              },
              {
                "en": "Regular customers receive loyalty reward points with every purchase.",
                "uz": "Doimiy mijozlar har bir xariddan so'ng rag'batlantirish ballarini to'plab boradilar."
              },
              {
                "en": "A satisfied customer is the best recommendation for any business.",
                "uz": "Mamnun xaridor har qanday biznes uchun eng yaxshi tavsiyadir."
              }
            ]
          },
          {
            "id": "a2shp-5",
            "word": "Cashier",
            "pos": "noun",
            "phonetic": "/kæˈʃɪə/",
            "uzbek": "Kassir, g'aznachi",
            "definition": "A person handling payments and receipts in a shop.",
            "examples": [
              {
                "en": "The friendly cashier scanned all the grocery items swiftly.",
                "uz": "Xushmuomala kassir barcha oziq-ovqat mahsulotlarini tezda skanerlab chiqdi."
              },
              {
                "en": "Please proceed to the nearest open cashier to pay for your basket.",
                "uz": "Savatdagi mahsulotlarga to'lov qilish uchun eng yaqin ochiq kassaga o'ting."
              },
              {
                "en": "The cashier checked whether the bank note was genuine under ultraviolet light.",
                "uz": "Kassir ultrabinafsha nuri ostida pul kupyurasining haqiqiyligini tekshirdi."
              }
            ]
          },
          {
            "id": "a2shp-6",
            "word": "Bargain",
            "pos": "noun",
            "phonetic": "/ˈbɑːɡɪn/",
            "uzbek": "Arzon xarid, qulay bitim",
            "definition": "A thing bought or offered for sale much more cheaply than is usual.",
            "examples": [
              {
                "en": "I bought this woollen winter coat for half price; it was a real bargain!",
                "uz": "Men ushbu jun qishki paltoni yarim narxiga sotib oldim; bu haqiqiy arzon va zo'r xarid bo'ldi!"
              },
              {
                "en": "Flea markets are fantastic places to hunt for antique bargains.",
                "uz": "Eski buyumlar bozori qadimiy nodir xaridlarni topish uchun ajoyib maskandir."
              },
              {
                "en": "She has a keen eye for finding bargains during end-of-season clearance sales.",
                "uz": "Mavsum oxiridagi katta arzonlashtirishda uning qulay narxlarni topishga ko'zi ancha o'tkir."
              }
            ]
          },
          {
            "id": "a2shp-7",
            "word": "Refund",
            "pos": "noun",
            "phonetic": "/ˈriːfʌnd/",
            "uzbek": "Pulni qaytarish",
            "definition": "A repayment of money, typically to a dissatisfied customer.",
            "examples": [
              {
                "en": "They gave me a full refund because the shoes were the wrong size.",
                "uz": "Poyabzal o'lchami to'g'ri kelmagani sababli ular pulimni to'liq qaytarib berishdi."
              },
              {
                "en": "If the appliance is faulty, you are legally entitled to a complete refund.",
                "uz": "Agar maishiy texnika nosoz bo'lsa, siz qonunan pulingizni to'liq qaytarib olishga haqlisiz."
              },
              {
                "en": "The store issued a refund directly back onto her debit card.",
                "uz": "Do'kon pulni to'g'ridan-to'g'ri uning debet kartasiga qaytarib o'tkazib berdi."
              }
            ]
          },
          {
            "id": "a2shp-8",
            "word": "Basket",
            "pos": "noun",
            "phonetic": "/ˈbɑːskɪt/",
            "uzbek": "Savat (xarid savati)",
            "definition": "A container for holding items while shopping.",
            "examples": [
              {
                "en": "Pick up a wire basket at the supermarket entrance for quick shopping.",
                "uz": "Tezkor xarid qilish uchun supermarket kirishidan sim savat olib oling."
              },
              {
                "en": "Her shopping basket was filled with fresh bread, milk, and ripe fruit.",
                "uz": "Uning xarid savati yangi non, sut va pishgan mevalarga to'la edi."
              },
              {
                "en": "Click on your online shopping basket to review items before checkout.",
                "uz": "To'lovdan oldin mahsulotlarni tekshirib olish uchun onlayn xarid savatingizni bosing."
              }
            ]
          },
          {
            "id": "a2shp-9",
            "word": "Queue",
            "pos": "noun",
            "phonetic": "/kjuː/",
            "uzbek": "Navbat",
            "definition": "A line of people waiting for their turn.",
            "examples": [
              {
                "en": "There was a long queue of customers waiting outside the bakery.",
                "uz": "Novvoyxona tashqarisida xaridorlarning uzun navbati turardi."
              },
              {
                "en": "Please join the queue and wait patiently for the next available cashier.",
                "uz": "Iltimos, navbatga turing va keyingi bo'sh kassirni sabr bilan kuting."
              },
              {
                "en": "We had to wait in a slow-moving queue for forty minutes to buy concert tickets.",
                "uz": "Konsert chiptalarini sotib olish uchun sekin harakatlanayotgan navbatda qirq daqiqa turishimizga to'g'ri keldi."
              }
            ]
          },
          {
            "id": "a2shp-10",
            "word": "Wallet",
            "pos": "noun",
            "phonetic": "/ˈwɒlɪt/",
            "uzbek": "Hamyon",
            "definition": "A small, flat pocket-sized folding case for money and cards.",
            "examples": [
              {
                "en": "He pulled out his leather wallet to pay for the taxi fare.",
                "uz": "U taksi haqini to'lash uchun charm hamyonini chiqardi."
              },
              {
                "en": "Make sure you do not leave your wallet unattended in crowded public areas.",
                "uz": "Odam gavjum joylarda hamyoningizni qarovsiz qoldirmaslikka e'tibor bering."
              },
              {
                "en": "His wallet contained his driver's licence, identity card, and cash.",
                "uz": "Uning hamyonida haydovchilik guvohnomasi, shaxsiy kartasi va naqd pul bor edi."
              }
            ]
          }
        ]
      },
      {
        "id": "a2-u6-cinema",
        "unitNumber": 7,
        "title": "Unit 07: Cinema, Music & Entertainment (Kino, musiqa va hordiq)",
        "category": "Arts & Entertainment",
        "icon": "fa-film",
        "color": "from-fuchsia-500 to-purple-600",
        "description": "Kinofilmlar, musiqa asboblari va madaniy hordiq",
        "words": [
          {
            "id": "cin-1",
            "word": "Audience",
            "pos": "noun",
            "phonetic": "/ˈɔːdiəns/",
            "uzbek": "Tomoshabinlar, tinglovchilar",
            "definition": "The assembled spectators or listeners at a public event.",
            "examples": [
              {
                "en": "The captivated audience applauded enthusiastically at the end of the theatrical play.",
                "uz": "Maftun bo'lgan tomoshabinlar spektakl oxirida g'ayrat bilan qarsak chalishdi."
              },
              {
                "en": "The cinema hall was filled with an excited audience of families and children.",
                "uz": "Kino zali oilalar va bolalardan iborat hayajonlangan tomoshabinlar bilan to'ldi."
              },
              {
                "en": "The film director answered questions directly from members of the audience.",
                "uz": "Kinorejissyor tomoshabinlarning savollariga to'g'ridan-to'g'ri javob berdi."
              }
            ]
          },
          {
            "id": "cin-2",
            "word": "Performance",
            "pos": "noun",
            "phonetic": "/pəˈfɔːməns/",
            "uzbek": "Ijro, spektakl, chiqish",
            "definition": "An act of staging or presenting a play, concert, or other form of entertainment.",
            "examples": [
              {
                "en": "Her solo violin performance earned a standing ovation from the crowd.",
                "uz": "Uning yakkaxon skripka ijrosi olomon tomonidan tik turib olqishlandi."
              },
              {
                "en": "Evening performances begin promptly at seven-thirty in the main theater.",
                "uz": "Kechki spektakllar asosiy teatrda roppa-rosa yetti yarimda boshlanadi."
              },
              {
                "en": "The lead actor delivered a deeply emotional performance as King Lear.",
                "uz": "Bosh rol ijrochisi Qirol Lir obrazida nihoyatda ta'sirchan ijro ko'rsatdi."
              }
            ]
          },
          {
            "id": "cin-3",
            "word": "Instrument",
            "pos": "noun",
            "phonetic": "/ˈɪnstrəmənt/",
            "uzbek": "Musiqa asbobi",
            "definition": "An object or device for producing musical sounds.",
            "examples": [
              {
                "en": "She learned to play the traditional stringed instrument called the dutar.",
                "uz": "U dutor deb ataluvchi an'anaviy torli musiqa asbobini chalishni o'rgandi."
              },
              {
                "en": "Learning to master a musical instrument requires patience and daily practice.",
                "uz": "Musiqa asbobini mukammal o'rganish sabr-toqat va kunlik mashqni talab qiladi."
              },
              {
                "en": "The symphony orchestra comprises over eighty classical acoustic instruments.",
                "uz": "Simfonik orkestr sakson ortiq mumtoz akustik musiqa asboblaridan iborat."
              }
            ]
          },
          {
            "id": "cin-4",
            "word": "Musician",
            "pos": "noun",
            "phonetic": "/mjuˈzɪʃn/",
            "uzbek": "Musiqachi, sozanda",
            "definition": "A person who plays a musical instrument, especially as a profession.",
            "examples": [
              {
                "en": "Talented street musicians entertained passers-by in the historic town square.",
                "uz": "Iqtidorli ko'cha sozandalari tarixiy shahar maydonida o'tkinchilarga xush kayfiyat ulashdilar."
              },
              {
                "en": "He collaborated with jazz musicians from around the world to record the album.",
                "uz": "U albom yozish uchun dunyoning turli burchaklaridan kelgan jaz musiqachilari bilan hamkorlik qildi."
              },
              {
                "en": "A professional musician spends several hours each day tuning and practicing.",
                "uz": "Professional musiqachi har kuni asbobini sozlash va mashq qilish uchun bir necha soat sarflaydi."
              }
            ]
          },
          {
            "id": "cin-5",
            "word": "Concert",
            "pos": "noun",
            "phonetic": "/ˈkɒnsət/",
            "uzbek": "Konsert",
            "definition": "A musical performance given in public by several performers.",
            "examples": [
              {
                "en": "We bought front-row tickets for the open-air summer pop concert.",
                "uz": "Biz ochiq osmon ostidagi yozgi estrada konserti uchun oldingi qator chiptalarini oldik."
              },
              {
                "en": "The classical piano concert was held in the grand palace conservatory.",
                "uz": "Mumtoz fortepiano konserti muhtasham saroy konsert zalida bo'lib o'tdi."
              },
              {
                "en": "Thousands of enthusiastic fans gathered at the arena for the rock concert.",
                "uz": "Rok konsertiga arenaga minglab ashaddiy muxlislar to'planishdi."
              }
            ]
          },
          {
            "id": "cin-6",
            "word": "Director",
            "pos": "noun",
            "phonetic": "/daɪˈrektə/",
            "uzbek": "Rejissyor",
            "definition": "A person who supervises the actors, camera crew, and other staff for a movie.",
            "examples": [
              {
                "en": "The film director envisioned a powerful historical drama set in Central Asia.",
                "uz": "Kinorejissyor Markaziy Osiyoda kechuvchi ta'sirchan tarixiy dramani sahnalashtirishni maqsad qildi."
              },
              {
                "en": "She became the youngest female director to win a prestigious international award.",
                "uz": "U nufuzli xalqaro mukofotni qo'lga kiritgan eng yosh ayol rejissyorga aylandi."
              },
              {
                "en": "The director guided the young actors with gentle advice throughout filming.",
                "uz": "Rejissyor tasvirga olish jarayonida yosh aktyorlarga samimiy maslahatlari bilan yo'l ko'rsatdi."
              }
            ]
          },
          {
            "id": "cin-7",
            "word": "Actress",
            "pos": "noun",
            "phonetic": "/ˈæktrəs/",
            "uzbek": "Aktrisa",
            "definition": "A female actor in a film, television show, or play.",
            "examples": [
              {
                "en": "The celebrated actress received critical acclaim for her portrayal of the queen.",
                "uz": "Mashhur aktrisa qirolicha rolidagi mahorati uchun tanqidchilarning yuksak e'tirofiga sazovor bo'ldi."
              },
              {
                "en": "She trained at drama academy for four years before becoming a professional actress.",
                "uz": "Professional aktrisa bo'lishdan oldin u to'rt yil drama akademiyasida tahsil oldi."
              },
              {
                "en": "The actress walked gracefully down the red carpet waving to cheering fans.",
                "uz": "Aktrisa qizil gilamcha bo'ylab nafis qadam tashlab, olqishlayotgan muxlislariga qo'l silkitdi."
              }
            ]
          },
          {
            "id": "cin-8",
            "word": "Screen",
            "pos": "noun",
            "phonetic": "/skriːn/",
            "uzbek": "Ekran",
            "definition": "A flat panel or surface on which movies or images are displayed.",
            "examples": [
              {
                "en": "The cinema boasts an enormous IMAX screen with crystal-clear digital projection.",
                "uz": "Kinoteatr tiniq raqamli proyeksiyaga ega ulkan IMAX ekrani bilan faxrlanadi."
              },
              {
                "en": "Turn off your mobile phone screen during the movie to avoid disturbing others.",
                "uz": "Boshqalarga xalaqit bermaslik uchun film davomida telefoningiz ekranini o'chirib qo'ying."
              },
              {
                "en": "The credits rolled across the silver screen as the movie came to an end.",
                "uz": "Film yakunlanar ekan, oq ekranda ijodiy guruh nomlari ko'tarildi."
              }
            ]
          },
          {
            "id": "cin-9",
            "word": "Genre",
            "pos": "noun",
            "phonetic": "/ˈʒɒnrə/",
            "uzbek": "Janr, yo'nalish",
            "definition": "A style or category of art, music, or literature.",
            "examples": [
              {
                "en": "Science fiction and historical mystery are her two favourite film genres.",
                "uz": "Ilmiy fantastika va tarixiy detektiv uning ikkita eng sevimli film janridir."
              },
              {
                "en": "The music festival showcases diverse genres ranging from traditional folk to modern jazz.",
                "uz": "Musiqa festivali an'anaviy xalq qo'shiqlaridan tortib zamonaviy jazgacha bo'lgan turli janrlarni namoyish etadi."
              },
              {
                "en": "This novel defies traditional genre boundaries, combining fantasy with documentary realism.",
                "uz": "Ushbu roman fantastika va hujjatli realizmni uyg'unlashtirib, odatiy janr chegaralarini kengaytiradi."
              }
            ]
          },
          {
            "id": "cin-10",
            "word": "Ticket",
            "pos": "noun",
            "phonetic": "/ˈtɪkɪt/",
            "uzbek": "Chipta",
            "definition": "A certificate or token showing that a fare or admission has been paid.",
            "examples": [
              {
                "en": "Book your cinema tickets online in advance to secure the most comfortable seats.",
                "uz": "Eng qulay o'rinlarni egallash uchun kino chiptalarini oldindan onlayn xarid qiling."
              },
              {
                "en": "Show your admission ticket at the turnstile before entering the concert hall.",
                "uz": "Konsert zaliga kirishdan oldin turniketda kirish chiptangizni ko'rsating."
              },
              {
                "en": "The theater box office announced that all opening night tickets were sold out.",
                "uz": "Teatr kassasi premyera oqshomidagi barcha chiptalar sotilib ketganini e'lon qildi."
              }
            ]
          }
        ]
      },
      {
        "id": "a2-u7-town",
        "unitNumber": 8,
        "title": "Unit 08: Town & Places in Town (Shahar va jamoat joylari)",
        "category": "Places & Buildings",
        "icon": "fa-city",
        "color": "from-sky-400 to-indigo-600",
        "description": "Shahar ko'chalari, binolari va transport yo'llari",
        "words": [
          {
            "id": "twn-1",
            "word": "Pavement",
            "pos": "noun",
            "phonetic": "/ˈpeɪvmənt/",
            "uzbek": "Piyodalar yo'lagi, trotuar",
            "definition": "A paved path for pedestrians at the side of a road.",
            "examples": [
              {
                "en": "Pedestrians should always walk along the pavement rather than on the busy roadway.",
                "uz": "Piyodalar har doim gavjum yo'ldan emas, trotuardan yurishlari shart."
              },
              {
                "en": "Outdoor cafes set up pleasant tables and parasols along the broad pavement.",
                "uz": "Ochiq havodagi kafelar keng trotuar bo'ylab yoqimli stollar va soyabonlar o'rnatishdi."
              },
              {
                "en": "City maintenance crews repaired the cracked paving stones on the high street pavement.",
                "uz": "Shahar xizmati xodimlari bosh ko'chadagi trotuarning yorilgan toshlarini ta'mirlab chiqishdi."
              }
            ]
          },
          {
            "id": "twn-2",
            "word": "Crossroad",
            "pos": "noun",
            "phonetic": "/ˈkrɒsrəʊd/",
            "uzbek": "Chorraha",
            "definition": "An intersection of two or more roads.",
            "examples": [
              {
                "en": "Slow down your vehicle when approaching the busy crossroad near the school.",
                "uz": "Maktab yonidagi gavjum chorrahaga yaqinlashganda mashina tezligini pasaytiring."
              },
              {
                "en": "Traffic lights regulate the safe flow of vehicles and pedestrians at the crossroad.",
                "uz": "Chorrahada transport va piyodalarning xavfsiz harakatini svetoforlar boshqaradi."
              },
              {
                "en": "There is a 24-hour pharmacy conveniently located right on the corner of the crossroad.",
                "uz": "Chorrahaning burchagida juda qulay kechayu kunduz ishlaydigan dorixona joylashgan."
              }
            ]
          },
          {
            "id": "twn-3",
            "word": "Square",
            "pos": "noun",
            "phonetic": "/skweə/",
            "uzbek": "Maydon (shahar maydoni)",
            "definition": "An open, typically four-sided area surrounded by buildings in a town.",
            "examples": [
              {
                "en": "Tourists gathered in the historic square to marvel at the magnificent turquoise domes.",
                "uz": "Sayyohlar muhtasham feruza gumbazlarni tomosha qilish uchun tarixiy maydonga to'planishdi."
              },
              {
                "en": "Registan Square in Samarkand is an internationally acclaimed architectural treasure.",
                "uz": "Samarqanddagi Registon maydoni xalqaro miqyosda e'tirof etilgan me'moriy durdonadir."
              },
              {
                "en": "Musicians played traditional lively melodies in the central town square on Sunday.",
                "uz": "Yakshanba kuni markaziy shahar maydonida sozandalar xushkayfiyat milliy kuylarni ijro etishdi."
              }
            ]
          },
          {
            "id": "twn-4",
            "word": "Town hall",
            "pos": "noun",
            "phonetic": "/ˌtaʊn ˈhɔːl/",
            "uzbek": "Shahar hokimiyati binosi",
            "definition": "A building used for the administration of the local government.",
            "examples": [
              {
                "en": "The mayor delivered an important municipal address from the steps of the town hall.",
                "uz": "Shahar hokimi hokimiyat binosi zinasidan turib muhim shahar murojaatini so'zladi."
              },
              {
                "en": "Civil marriage ceremonies are officially conducted inside the historic town hall.",
                "uz": "Rasmiy nikoh marosimlari tarixiy shahar hokimiyati binosi ichida o'tkaziladi."
              },
              {
                "en": "The clock tower of the town hall chimes melodiously at the start of every hour.",
                "uz": "Shahar hokimiyatining soat minorasi har soat boshida jarangdor ohang taratadi."
              }
            ]
          },
          {
            "id": "twn-5",
            "word": "Suburb",
            "pos": "noun",
            "phonetic": "/ˈsʌbɜːb/",
            "uzbek": "Shahar atrofi, chekka mavze",
            "definition": "An outlying residential district of a city.",
            "examples": [
              {
                "en": "Many young families prefer living in the quiet green suburbs rather than downtown.",
                "uz": "Ko'plab yosh oilalar shahar markazidan ko'ra sokin yashil shahar atrofida yashashni afzal ko'rishadi."
              },
              {
                "en": "A modern electric commuter train connects the northern suburbs to the city center.",
                "uz": "Zamonaviy elektr tezyurar poyezdi shimoliy shahar atrofini markaz bilan bog'lab turadi."
              },
              {
                "en": "Houses in the suburban districts often feature spacious gardens and tree-lined streets.",
                "uz": "Shahar atrofidagi uylar ko'pincha keng bog'lar va daraxtzor ko'chalarga ega bo'ladi."
              }
            ]
          },
          {
            "id": "twn-6",
            "word": "Traffic light",
            "pos": "noun",
            "phonetic": "/ˈtræfɪk laɪt/",
            "uzbek": "Svetofor",
            "definition": "A set of automatically operated coloured lights for controlling traffic.",
            "examples": [
              {
                "en": "Always stop your car completely when the traffic light turns red.",
                "uz": "Svetofor qizil yonganda doimo mashinangizni to'liq to'xtating."
              },
              {
                "en": "Wait for the pedestrian signal to change to green before crossing the avenue.",
                "uz": "Katta ko'chadan o'tishdan oldin piyodalar svetoforining yashil yonishini kuting."
              },
              {
                "en": "Smart traffic lights adjust their timing according to real-time traffic volume.",
                "uz": "Aqlli svetoforlar o'z vaqtini tirbandlik darajasiga qarab avtomatik moslashtiradi."
              }
            ]
          },
          {
            "id": "twn-7",
            "word": "Pedestrian",
            "pos": "noun",
            "phonetic": "/pəˈdestriən/",
            "uzbek": "Piyoda",
            "definition": "A person walking rather than travelling in a vehicle.",
            "examples": [
              {
                "en": "Drivers must yield the right of way to pedestrians at the zebra crossing.",
                "uz": "Haydovchilar piyodalar o'tish joyida piyodalarga yo'l berishlari shart."
              },
              {
                "en": "The downtown shopping street was converted into a safe pedestrian-only zone.",
                "uz": "Markazdagi savdo ko'chasi faqat piyodalar yuradigan xavfsiz zonaga aylantirildi."
              },
              {
                "en": "Pedestrian safety is greatly enhanced by bright street lighting and speed bumps.",
                "uz": "Piyodalar xavfsizligi yorug' ko'cha chiroqlari va sekinlashtiruvchi to'siqlar bilan sezilarli oshadi."
              }
            ]
          },
          {
            "id": "twn-8",
            "word": "Corner",
            "pos": "noun",
            "phonetic": "/ˈkɔːnə/",
            "uzbek": "Burchak (ko'cha burchagi)",
            "definition": "A place or angle where two sides or edges meet.",
            "examples": [
              {
                "en": "There is a welcoming neighborhood bakery right around the street corner.",
                "uz": "Ko'cha burchagining narigi tomonida shinam mahalliy novvoyxona joylashgan."
              },
              {
                "en": "Turn sharp left at the next corner to find the central post office.",
                "uz": "Markaziy pochta binosini topish uchun keyingi burchakdan chapga keskin buriling."
              },
              {
                "en": "A historic red postbox stands firmly on the corner of the avenue.",
                "uz": "Katta ko'cha burchagida tarixiy qizil pochta qutisi mustahkam turibdi."
              }
            ]
          },
          {
            "id": "twn-9",
            "word": "Fountain",
            "pos": "noun",
            "phonetic": "/ˈfaʊntɪn/",
            "uzbek": "Favvora",
            "definition": "An ornamental structure in a pool or lake from which one or more jets of water are pumped.",
            "examples": [
              {
                "en": "Children laughed and cooled off near the refreshing city park fountain.",
                "uz": "Bolalar shahar xiyobonidagi salqin favvora yonida kulishib salqinlanishdi."
              },
              {
                "en": "The central plaza is illuminated at night by a colourful musical fountain.",
                "uz": "Kechasi markaziy maydon rang-barang musiqali favvora bilan yoritiladi."
              },
              {
                "en": "Tourists traditionally toss coins into the fountain while wishing for good luck.",
                "uz": "Sayyohlar ezgu niyat bilan favvoraga an'anaviy ravishda tanga tashlashadi."
              }
            ]
          },
          {
            "id": "twn-10",
            "word": "Bridge",
            "pos": "noun",
            "phonetic": "/brɪdʒ/",
            "uzbek": "Ko'prik",
            "definition": "A structure carrying a road, path, railway across a river or ravine.",
            "examples": [
              {
                "en": "We walked across the scenic stone bridge spanning the rushing river.",
                "uz": "Biz shoshqaloq daryo ustiga qurilgan ko'rkam tosh ko'prikdan piyoda o'tdik."
              },
              {
                "en": "The suspension bridge provides a breathtaking panoramic view of the harbor.",
                "uz": "Osma ko'prik bandargohning aqlbovar qilmas go'zal panoramasini namoyon etadi."
              },
              {
                "en": "Heavy freight trucks are prohibited from crossing the fragile wooden bridge.",
                "uz": "Og'ir yuk mashinalarining omonat yog'och ko'prikdan o'tishi taqiqlangan."
              }
            ]
          }
        ]
      },
      {
        "id": "a2-u8-country",
        "unitNumber": 9,
        "title": "Unit 09: Countryside & Natural World (Qishloq tabiati va hayvonlar)",
        "category": "Nature & Countryside",
        "icon": "fa-tree",
        "color": "from-green-500 to-emerald-700",
        "description": "Qishloq manzaralari, fermalar, ekinlar va xonaki hayvonlar",
        "words": [
          {
            "id": "cnt-1",
            "word": "Pasture",
            "pos": "noun",
            "phonetic": "/ˈpɑːstʃə/",
            "uzbek": "Yaylov, o'tloq",
            "definition": "Land covered with grass suitable for grazing animals.",
            "examples": [
              {
                "en": "Dairy cows were grazing peacefully in the lush green mountain pasture.",
                "uz": "Sog'in sigirlar yashil tog' yaylovida osuda o'tlab yurishardi."
              },
              {
                "en": "The shepherd guided his flock to higher pastures as summer approached.",
                "uz": "Yoz yaqinlashgani sari cho'pon suruvini balandroq yaylovlarga olib chiqdi."
              },
              {
                "en": "The fertile pastures provide natural, healthy feed for farm livestock.",
                "uz": "Serunum yaylovlar ferma hayvonlari uchun tabiiy va to'yimli ozuqa beradi."
              }
            ]
          },
          {
            "id": "cnt-2",
            "word": "Valley",
            "pos": "noun",
            "phonetic": "/ˈvæli/",
            "uzbek": "Vodiy",
            "definition": "A low area of land between hills or mountains.",
            "examples": [
              {
                "en": "The Fergana Valley is famed for its sweet melons, silk, and fertile soil.",
                "uz": "Farg'ona vodiysi o'zining shirin qovunlari, ipakchiligi va unumdor tuprog'i bilan mashhur."
              },
              {
                "en": "A crystal-clear river winds gracefully through the deep mountain valley.",
                "uz": "Musaffo daryo chuqur tog' vodiysi bo'ylab ohista oqib o'tadi."
              },
              {
                "en": "Morning mist hung thick over the tranquil valley before sunrise.",
                "uz": "Quyosh chiqishidan oldin sokin vodiy uzra tonggi qalin tuman cho'kkan edi."
              }
            ]
          },
          {
            "id": "cnt-3",
            "word": "Mountain",
            "pos": "noun",
            "phonetic": "/ˈmaʊntɪn/",
            "uzbek": "Tog'",
            "definition": "A large natural elevation of the earth's surface rising abruptly from the surrounding level.",
            "examples": [
              {
                "en": "Snow-capped mountain peaks glistened brilliantly against the blue morning sky.",
                "uz": "Qor bilan qoplangan tog' cho'qqilari musaffo tonggi osmonda yaltirab turardi."
              },
              {
                "en": "Chimgan is a popular mountain destination for winter skiing and hiking.",
                "uz": "Chimyon qishki chang'i va sayohatlar uchun mashhur tog' maskanidir."
              },
              {
                "en": "They pitched their canvas tents at the base of the majestic mountain.",
                "uz": "Ular mahobatli tog' etagiga o'zlarining chodirlarini tikdilar."
              }
            ]
          },
          {
            "id": "cnt-4",
            "word": "Stream",
            "pos": "noun",
            "phonetic": "/striːm/",
            "uzbek": "Jilg'a, soy",
            "definition": "A small, narrow river of clear fresh water.",
            "examples": [
              {
                "en": "We rested beside a babbling mountain stream and drank the pure icy water.",
                "uz": "Biz shildirab oqayotgan tog' soyi bo'yida dam olib, muzdek toza suvdan ichdik."
              },
              {
                "en": "Silver trout leaped above the surface of the fast-flowing stream.",
                "uz": "Tez oqar jilg'a yuzasida kumushrang xonbaliqlar sakrab o'ynardi."
              },
              {
                "en": "A narrow footbridge made of birch logs crossed the woodland stream.",
                "uz": "Qayin g'o'lalaridan yasalgan tor ko'prikcha o'rmon soyi ustidan o'tgandi."
              }
            ]
          },
          {
            "id": "cnt-5",
            "word": "Crop",
            "pos": "noun",
            "phonetic": "/krɒp/",
            "uzbek": "Ekin, hosil",
            "definition": "A cultivated plant that is grown as food, especially grain or fruit.",
            "examples": [
              {
                "en": "Farmers expect an abundant wheat crop after this spring's timely rains.",
                "uz": "Bu bahorgi o'z vaqtidagi yomg'irlardan so'ng dehqonlar mo'l bug'doy hosilini kutishmoqda."
              },
              {
                "en": "Cotton and grain are two of the country's most vital agricultural crops.",
                "uz": "Paxta va g'alla mamlakatning eng muhim qishloq xo'jaligi ekinlaridan ikkitasidir."
              },
              {
                "en": "Hailstorms during the blossom season can severely damage delicate fruit crops.",
                "uz": "Gullash davridagi do'l nozik meva hosiliga jiddiy zarar yetkazishi mumkin."
              }
            ]
          },
          {
            "id": "cnt-6",
            "word": "Domestic",
            "pos": "adjective",
            "phonetic": "/dəˈmestɪk/",
            "uzbek": "Xonaki, uy hayvoni",
            "definition": "Tame and kept by humans as a pet or on a farm.",
            "examples": [
              {
                "en": "Horses, sheep, and dogs are domestic animals that have lived with humans for centuries.",
                "uz": "Otlar, qo'ylar va itlar asrlar davomida insonlar bilan birga yashab kelgan xonaki hayvonlardir."
              },
              {
                "en": "Domestic cats still retain sharp predatory hunting instincts.",
                "uz": "Xonaki mushuklar hali ham o'tkir yirtqichlik ov instinktlarini saqlab qolgan."
              },
              {
                "en": "The zoo features a petting enclosure where children can touch gentle domestic animals.",
                "uz": "Hayvonot bog'ida bolalar yuvosh xonaki hayvonlarni silashi mumkin bo'lgan maxsus maydon mavjud."
              }
            ]
          },
          {
            "id": "cnt-7",
            "word": "Shepherd",
            "pos": "noun",
            "phonetic": "/ˈʃepəd/",
            "uzbek": "Cho'pon, poda boquvchi",
            "definition": "A person who tends, herds, and guards flocks of sheep.",
            "examples": [
              {
                "en": "The faithful sheepdog accompanied the shepherd across the mountain ridges.",
                "uz": "Vafodor bo'ribosar it tog' tizmalari bo'ylab cho'ponga hamrohlik qildi."
              },
              {
                "en": "The experienced shepherd knew how to protect vulnerable young lambs from wolves.",
                "uz": "Tajribali cho'pon himoyasiz yosh qo'zichoqlarni bo'rilardan qanday asrashni yaxshi bilardi."
              },
              {
                "en": "Shepherds build stone shelters to weather sudden highland thunderstorms.",
                "uz": "Cho'ponlar baland tog'dagi to'satdan boshlangan momaqaldiroqdan saqlanish uchun tosh boshpanalar quradilar."
              }
            ]
          },
          {
            "id": "cnt-8",
            "word": "Cattle",
            "pos": "noun",
            "phonetic": "/ˈkætl/",
            "uzbek": "Qoramol",
            "definition": "Large domesticated ruminants including cows and bulls.",
            "examples": [
              {
                "en": "The rancher raises hundreds of cattle for dairy milk and beef production.",
                "uz": "Fermer sut va go'sht yetishtirish uchun yuzlab qoramollarni parvarishlaydi."
              },
              {
                "en": "A herd of black and white cattle drank thirstily from the pond.",
                "uz": "Oq-qora rangli qoramol podasi ko'lmakdan chanqoq bilan suv ichdi."
              },
              {
                "en": "Veterinarians inspect cattle regularly to maintain strict herd health standards.",
                "uz": "Veterinarlar poda salomatligini saqlash uchun qoramollarni muntazam ko'rikdan o'tkazib turadilar."
              }
            ]
          },
          {
            "id": "cnt-9",
            "word": "Wildlife",
            "pos": "noun",
            "phonetic": "/ˈwaɪldlaɪf/",
            "uzbek": "Yovvoyi tabiat, yovvoyi hayvonlar",
            "definition": "Wild animals and vegetation living in a natural state.",
            "examples": [
              {
                "en": "National nature reserves protect endangered wildlife from illegal poaching.",
                "uz": "Davlat tabiiy qo'riqxonalari yo'qolib borayotgan yovvoyi hayvonlarni noqonuniy ovdan himoya qiladi."
              },
              {
                "en": "The nature documentary showcases extraordinary Arctic marine wildlife.",
                "uz": "Tabiat haqidagi hujjatli film g'aroyib Arktika dengiz yovvoyi hayotini namoyon etadi."
              },
              {
                "en": "Conserving natural forest habitats ensures that diverse wildlife can flourish.",
                "uz": "Tabiiy o'rmon muhitini asrash turli yovvoyi hayvonlarning ko'payishini ta'minlaydi."
              }
            ]
          },
          {
            "id": "cnt-10",
            "word": "Harvest",
            "pos": "noun",
            "phonetic": "/ˈhɑːvɪst/",
            "uzbek": "Hosil, hosil yig'imi",
            "definition": "The process or period of gathering in crops.",
            "examples": [
              {
                "en": "Autumn is the bustling season when farmers gather the golden wheat harvest.",
                "uz": "Kuz — dehqonlar oltinrang bug'doy hosilini yig'ib oladigan qizg'in palla."
              },
              {
                "en": "Villagers held a traditional celebration to give thanks for a bountiful harvest.",
                "uz": "Qishloq ahli to'kin-sochin hosil uchun shukronalik keltirib an'anaviy bayram o'tkazishdi."
              },
              {
                "en": "Modern agricultural combines make harvesting grain much faster and cleaner.",
                "uz": "Zamonaviy qishloq xo'jaligi kombaynlari don yig'im-terimini ancha tez va sifatli qiladi."
              }
            ]
          }
        ]
      },
      {
        "id": "a2-u9-weather",
        "unitNumber": 10,
        "title": "Unit 10: Weather & Seasons (Ob-havo va fasllar)",
        "category": "Weather & Climate",
        "icon": "fa-cloud-sun-rain",
        "color": "from-sky-400 to-amber-500",
        "description": "Ob-havo sharoitlari, fasllar va harorat",
        "words": [
          {
            "id": "wth-1",
            "word": "Breeze",
            "pos": "noun",
            "phonetic": "/briːz/",
            "uzbek": "Mayin shabada",
            "definition": "A gentle, refreshing light wind.",
            "examples": [
              {
                "en": "A refreshing sea breeze cooled the sandy beach on the hot summer afternoon.",
                "uz": "Issiq yoz kunida mayin dengiz shabadasi qumli sohilni salqinlatib turardi."
              },
              {
                "en": "Curtains in the open bedroom window fluttered gently in the evening breeze.",
                "uz": "Yotoqxonaning ochiq derazasidagi pardalar kechki mayin shabadada ohista hilpiradi."
              },
              {
                "en": "The light mountain breeze carried the fragrant scent of pine needles.",
                "uz": "Yengil tog' shabadasi archa ignalarining xushbo'y hidini taratar edi."
              }
            ]
          },
          {
            "id": "wth-2",
            "word": "Lightning",
            "pos": "noun",
            "phonetic": "/ˈlaɪtnɪŋ/",
            "uzbek": "Chaqmoq",
            "definition": "A flash of bright light in the sky produced by electricity.",
            "examples": [
              {
                "en": "A brilliant flash of lightning illuminated the dark stormy night sky.",
                "uz": "Yorqin chaqmoq chaqnashi qorong'u bo'ronli tungi osmonni yoritib yubordi."
              },
              {
                "en": "Count the seconds between lightning and thunder to estimate how close the storm is.",
                "uz": "Momaqaldiroq qanchalik yaqinligini bilish uchun chaqmoq bilan guldurash orasidagi soniyalarni sanang."
              },
              {
                "en": "Tall buildings are equipped with metal rods to safely conduct lightning into the ground.",
                "uz": "Baland binolar chaqmoqni xavfsiz yerga o'tkazish uchun yashinqaytargichlar bilan jihozlanadi."
              }
            ]
          },
          {
            "id": "wth-3",
            "word": "Thunderstorm",
            "pos": "noun",
            "phonetic": "/ˈθʌndəstɔːm/",
            "uzbek": "Momaqaldiroqli bo'ron",
            "definition": "A storm with thunder and lightning and typically also heavy rain.",
            "examples": [
              {
                "en": "The violent afternoon thunderstorm caused brief power outages across the city.",
                "uz": "Tushdan keyingi kuchli momaqaldiroq butun shahar bo'ylab qisqa muddatli elektr uzilishiga sabab bo'ldi."
              },
              {
                "en": "We stayed safely indoors drinking hot tea while the thunderstorm raged outside.",
                "uz": "Tashqarida kuchli bo'ron avj olgan paytda biz uyda xavfsiz o'tirib issiq choy ichdik."
              },
              {
                "en": "The weather forecaster warned that a severe thunderstorm was moving eastward.",
                "uz": "Ob-havo ma'lumotchisi kuchli momaqaldiroqli bo'ron sharq tomon siljiyotganidan ogohlantirdi."
              }
            ]
          },
          {
            "id": "wth-4",
            "word": "Foggy",
            "pos": "adjective",
            "phonetic": "/ˈfɒɡi/",
            "uzbek": "Tumanli",
            "definition": "Full of or covered with dense fog.",
            "examples": [
              {
                "en": "Motorists were instructed to drive cautiously on the foggy morning highway.",
                "uz": "Haydovchilarga tumanli ertalabki magistralda ehtiyotkorlik bilan harakatlanish tayinlandi."
              },
              {
                "en": "Flights were delayed at the airport due to exceptionally dense, foggy conditions.",
                "uz": "Nihoyatda qalin tumanli sharoit tufayli aeroportda parvozlar kechiktirildi."
              },
              {
                "en": "The historic old bridge looked mysterious shrouded in thick foggy mist.",
                "uz": "Qadimiy ko'prik qalin tuman ichida juda sirli ko'rinish kasb etdi."
              }
            ]
          },
          {
            "id": "wth-5",
            "word": "Sunshine",
            "pos": "noun",
            "phonetic": "/ˈsʌnʃaɪn/",
            "uzbek": "Quyosh nuri",
            "definition": "The direct light and warmth of the sun.",
            "examples": [
              {
                "en": "We sat on the park bench basking in the pleasant morning sunshine.",
                "uz": "Biz bog' o'rindig'ida o'tirib, yoqimli tonggi quyosh nuridan bahramand bo'ldik."
              },
              {
                "en": "Uzbekistan is renowned as a land of abundant natural sunshine throughout the year.",
                "uz": "O'zbekiston yil davomida mo'l tabiiy quyosh nuri bilan mashhur quyoshli o'lkadir."
              },
              {
                "en": "A walk in the bright afternoon sunshine boosts mood and promotes vitamin D synthesis.",
                "uz": "Yorqin tush quyoshida sayr qilish kayfiyatni ko'taradi va D vitamini hosil bo'lishiga yordam beradi."
              }
            ]
          },
          {
            "id": "wth-6",
            "word": "Forecast",
            "pos": "noun",
            "phonetic": "/ˈfɔːkɑːst/",
            "uzbek": "Ob-havo ma'lumoti",
            "definition": "A prediction of future weather based on meteorological data.",
            "examples": [
              {
                "en": "According to the weather forecast, temperatures will rise significantly tomorrow.",
                "uz": "Ob-havo ma'lumotiga ko'ra, ertaga harorat sezilarli darajada ko'tariladi."
              },
              {
                "en": "Check the five-day weather forecast before planning an outdoor mountain hike.",
                "uz": "Tog' sayohatini rejalashtirishdan oldin besh kunlik ob-havo ma'lumotini tekshirib ko'ring."
              },
              {
                "en": "The evening television forecast predicted scattered rain showers across the region.",
                "uz": "Kechki televideniye ma'lumoti mintaqa bo'ylab qisqa muddatli yomg'ir yog'ishini bashorat qildi."
              }
            ]
          },
          {
            "id": "wth-7",
            "word": "Humid",
            "pos": "adjective",
            "phonetic": "/ˈhjuːmɪd/",
            "uzbek": "Nam, dim",
            "definition": "Marked by a high level of water vapour in the air.",
            "examples": [
              {
                "en": "The tropical rainforest air was intensely hot, heavy, and humid.",
                "uz": "Tropik o'rmon havosi nihoyatda issiq, og'ir va dim edi."
              },
              {
                "en": "Running outdoors on a humid July afternoon causes excessive sweating.",
                "uz": "Iyulning dim tushdan keyingi pallasida yugurish odamni qattiq terlatadi."
              },
              {
                "en": "Air conditioners help remove moisture and make humid rooms comfortable.",
                "uz": "Konditsionerlar namlikni chiqarib, dim xonalarni qulay qilishga yordam beradi."
              }
            ]
          },
          {
            "id": "wth-8",
            "word": "Freezing",
            "pos": "adjective",
            "phonetic": "/ˈfriːzɪŋ/",
            "uzbek": "Muzdek, qahraton",
            "definition": "Extremely cold, at or below the freezing point of water.",
            "examples": [
              {
                "en": "Put on your thick woollen mittens; it is absolutely freezing outside today!",
                "uz": "Qalin jun qo'lqopingizni kiyib oling; bugun tashqarida qahraton sovuq!"
              },
              {
                "en": "The mountain lake was covered in a thick layer of solid freezing ice.",
                "uz": "Tog' ko'li qalin va qattiq yaxlagan muz qatlami bilan qoplangandi."
              },
              {
                "en": "He stepped out into the freezing winter wind with his collar turned up.",
                "uz": "U yoqasini ko'targan holda qahraton qishki sovuqqa qadam qo'ydi."
              }
            ]
          },
          {
            "id": "wth-9",
            "word": "Shower",
            "pos": "noun",
            "phonetic": "/ˈʃaʊə/",
            "uzbek": "Qisqa yomg'ir, jala",
            "definition": "A brief and usually light fall of rain.",
            "examples": [
              {
                "en": "We were caught in a sudden afternoon shower, but the sun came out shortly after.",
                "uz": "Biz to'satdan boshlangan qisqa yomg'ir ostida qoldik, ammo tez orada quyosh yana chiqdi."
              },
              {
                "en": "Carry a compact umbrella in your bag in case of unexpected spring showers.",
                "uz": "Bahorgi kutilmagan qisqa yomg'irlardan saqlanish uchun sumkangizda ixcham soyabon olib yuring."
              },
              {
                "en": "A light shower dampened the city streets, leaving the air fresh and fragrant.",
                "uz": "Yengil shabnam yomg'iri shahar ko'chalarini namlab, havoni musaffo va toza qildi."
              }
            ]
          },
          {
            "id": "wth-10",
            "word": "Rainbow",
            "pos": "noun",
            "phonetic": "/ˈreɪnbəʊ/",
            "uzbek": "Kamalak",
            "definition": "An arch of colors formed in the sky by the refraction and dispersion of the sun's light by rain.",
            "examples": [
              {
                "en": "A magnificent multi-coloured rainbow arched gracefully across the sky after the storm.",
                "uz": "Bo'rondan so'ng osmonda rang-barang muhtasham kamalak go'zal jilva qildi."
              },
              {
                "en": "The children squealed with joy as they pointed out the double rainbow above the lake.",
                "uz": "Bolalar ko'l ustidagi qo'shaloq kamalakni ko'rsatib quvonch bilan qiyqirishdi."
              },
              {
                "en": "Water droplets in the waterfall created a permanent shimmering rainbow in the sunlight.",
                "uz": "Sharsharadagi suv tomchilari quyosh nurlarida doimiy tovlanuvchi kamalakni hosil qildi."
              }
            ]
          }
        ]
      }
    ]
  },
  "B1": {
    "levelName": "B1 - O'rta (Intermediate)",
    "description": "Ish, ta'lim va shaxsiy fikrlarni erkin ifodalash uchun so'zlar",
    "color": "amber",
    "badge": "B1 O'rta",
    "topics": [
      {
        "id": "b1-tech",
        "title": "Unit 01: Technology & Digital Life (Texnologiya va raqamli hayot)",
        "icon": "fa-microchip",
        "color": "from-amber-400 to-orange-500",
        "words": [
          {
            "id": "tch-1",
            "word": "Device",
            "pos": "noun",
            "phonetic": "/dɪˈvaɪs/",
            "uzbek": "Qurilma, uskunacha",
            "definition": "An object, machine, or piece of equipment made for a special purpose.",
            "examples": [
              {
                "en": "Electronic devices have revolutionized how modern students study.",
                "uz": "Elektron qurilmalar zamonaviy talabalarning o'rganish usulini tubdan o'zgartirdi."
              },
              {
                "en": "Please switch off all mobile devices during the airplane takeoff.",
                "uz": "Iltimos, samolyot ko'tarilayotgan vaqtda barcha mobil qurilmalarni o'chiring."
              },
              {
                "en": "Smart devices can be connected to the internet to automate your home.",
                "uz": "Aqlli qurilmalarni uyingizni avtomatlashtirish uchun internetga ulash mumkin."
              }
            ]
          },
          {
            "id": "tch-2",
            "word": "Download",
            "pos": "verb",
            "phonetic": "/ˌdaʊnˈləʊd/",
            "uzbek": "Yuklab olmoq (internetdan)",
            "definition": "To copy data from one computer system to another, typically over the internet.",
            "examples": [
              {
                "en": "You can download this vocabulary app for free on your phone.",
                "uz": "Siz bu lug'at ilovasini telefoningizga bepul yuklab olishingiz mumkin."
              },
              {
                "en": "I downloaded a collection of English podcasts to listen offline.",
                "uz": "Men internetsiz tinglash uchun ingliz tili podkastlari to'plamini yuklab oldim."
              },
              {
                "en": "The file was too large and took ten minutes to download.",
                "uz": "Fayl juda katta edi va yuklab olish uchun o'n daqiqa vaqt ketdi."
              }
            ]
          },
          {
            "id": "tch-3",
            "word": "Security",
            "pos": "noun",
            "phonetic": "/sɪˈkjʊərəti/",
            "uzbek": "Xavfsizlik",
            "definition": "The state of being free from danger, threat, or unauthorized access.",
            "examples": [
              {
                "en": "Always use strong passwords to ensure your online account security.",
                "uz": "Onlayn akkauntingiz xavfsizligini ta'minlash uchun har doim murakkab parollardan foydalaning."
              },
              {
                "en": "Cyber security has become a critical concern for modern businesses.",
                "uz": "Kiberxavfsizlik zamonaviy bizneslar uchun eng muhim masalaga aylandi."
              },
              {
                "en": "The new software update fixes several important security flaws.",
                "uz": "Dasturiy ta'minotning yangi yangilanishi bir nechta muhim xavfsizlik kamchiliklarini bartaraf etadi."
              }
            ]
          },
          {
            "id": "tch-4",
            "word": "Connection",
            "pos": "noun",
            "phonetic": "/kəˈnekʃn/",
            "uzbek": "Ulanish, aloqa",
            "definition": "A link between two or more things, particularly telecommunications or computers.",
            "examples": [
              {
                "en": "A fast internet connection is essential for video conferencing.",
                "uz": "Tezkor internet aloqasi video konferensiyalar uchun juda muhimdir."
              },
              {
                "en": "My phone lost connection while I was riding the subway.",
                "uz": "Metroda ketayotganimda telefonimning aloqasi uzilib qoldi."
              },
              {
                "en": "There is a direct connection between daily practice and fluency.",
                "uz": "Har kungi mashq bilan ravon so'zlashuv o'rtasida to'g'ridan-to'g'ri bog'liqlik bor."
              }
            ]
          },
          {
            "id": "tch-5",
            "word": "Application",
            "pos": "noun",
            "phonetic": "/ˌæplɪˈkeɪʃn/",
            "uzbek": "Ilova (dastur) yoki Ariza",
            "definition": "A program designed to fulfill a particular purpose; also a formal request.",
            "examples": [
              {
                "en": "This mobile application helps learners memorize words with flashcards.",
                "uz": "Ushbu mobil ilova o'quvchilarga so'zlarni fleshkartalar bilan yodlashga yordam beradi."
              },
              {
                "en": "He submitted his job application to three international firms.",
                "uz": "U o'zining ishga kirish arizasini uchta xalqaro kompaniyaga topshirdi."
              },
              {
                "en": "The application requires permission to access your microphone.",
                "uz": "Ilova mikrofondan foydalanish uchun ruxsat so'raydi."
              }
            ]
          },
          {
            "id": "tch-6",
            "word": "Database",
            "pos": "noun",
            "phonetic": "/ˈdeɪtəbeɪs/",
            "uzbek": "Ma'lumotlar bazasi",
            "definition": "A structured set of data held in a computer, especially one accessible in various ways.",
            "examples": [
              {
                "en": "Our customer database stores contact details and order histories securely.",
                "uz": "Mijozlar bazamiz aloqa ma'lumotlari va buyurtmalar tarixini xavfsiz saqlaydi."
              },
              {
                "en": "The website connects to an SQL database to retrieve user information.",
                "uz": "Veb-sayt foydalanuvchi ma'lumotlarini olish uchun SQL ma'lumotlar bazasiga ulanadi."
              },
              {
                "en": "Always create daily backups of your company database.",
                "uz": "Doimo kompaniyangiz ma'lumotlar bazasining kunlik zaxira nusxasini oling."
              }
            ]
          },
          {
            "id": "tch-7",
            "word": "Hardware",
            "pos": "noun",
            "phonetic": "/ˈhɑːdweə/",
            "uzbek": "Texnik ta'minot, kompyuter qismlari",
            "definition": "The physical parts and electrical components of a computer system.",
            "examples": [
              {
                "en": "Upgrading the hardware helped the old computer run much faster.",
                "uz": "Texnik qismlarni yangilash eski kompyuterning ancha tezroq ishlashiga yordam berdi."
              },
              {
                "en": "Computer hardware includes the processor, RAM, monitor, and motherboard.",
                "uz": "Kompyuter apparati protsessor, operativ xotira, monitor va ona platani o'z ichiga oladi."
              },
              {
                "en": "Check whether your computer hardware meets the minimum game requirements.",
                "uz": "Kompyuteringiz apparat ta'minoti o'yinning minimal talablariga mos kelishini tekshiring."
              }
            ]
          },
          {
            "id": "tch-8",
            "word": "Software",
            "pos": "noun",
            "phonetic": "/ˈsɒftweə/",
            "uzbek": "Dasturiy ta'minot, dasturlar",
            "definition": "The programs and operating systems used by electronic computers.",
            "examples": [
              {
                "en": "Antivirus software protects your system against dangerous cyber threats.",
                "uz": "Antivirus dasturi tizimingizni xavfli kiberxavflardan himoya qiladi."
              },
              {
                "en": "The software engineer fixed several bugs in the mobile app.",
                "uz": "Dasturchi mobil ilovadagi bir nechta xatoliklarni bartaraf etdi."
              },
              {
                "en": "Always keep your operating system software up to date.",
                "uz": "Operatsion tizim dasturingizni doimo yangilab turing."
              }
            ]
          },
          {
            "id": "tch-9",
            "word": "Algorithm",
            "pos": "noun",
            "phonetic": "/ˈælɡərɪðəm/",
            "uzbek": "Algoritm",
            "definition": "A step-by-step procedure or mathematical formula for solving a problem.",
            "examples": [
              {
                "en": "Search engines use complex algorithms to rank web pages efficiently.",
                "uz": "Qidiruv tizimlari veb-sahifalarni samarali saralash uchun murakkab algoritmlardan foydalanadi."
              },
              {
                "en": "Muhammad al-Khwarizmi laid the historical foundations of modern algorithms.",
                "uz": "Muhammad al-Xorazmiy zamonaviy algoritmlarning tarixiy poydevorini yaratgan."
              },
              {
                "en": "The recommendation algorithm suggests videos based on your viewing history.",
                "uz": "Tavsiya algoritmi siz ko'rgan videolarga asoslanib yangi videolarni taklif qiladi."
              }
            ]
          },
          {
            "id": "tch-10",
            "word": "Network",
            "pos": "noun",
            "phonetic": "/ˈnetwɜːk/",
            "uzbek": "Tarmoq, kompyuter tarmog'i",
            "definition": "A group of interconnected computer systems sharing resources and data.",
            "examples": [
              {
                "en": "All company computers are connected to a secure local office network.",
                "uz": "Kompaniyadagi barcha kompyuterlar xavfsiz mahalliy ofis tarmog'iga ulangan."
              },
              {
                "en": "Network administrators monitor the traffic to maintain high connection speeds.",
                "uz": "Tarmoq ma'murlari yuqori ulanish tezligini ta'minlash uchun trafikni nazorat qilishadi."
              },
              {
                "en": "A stable WiFi network is indispensable for modern remote working.",
                "uz": "Barqaror WiFi tarmog'i zamonaviy masofaviy ishlash uchun ajralmas zaruratdir."
              }
            ]
          },
          {
            "id": "tch-11",
            "word": "Browse",
            "pos": "verb",
            "phonetic": "/braʊz/",
            "uzbek": "Internetda ko'rib chiqmoq, qidirmoq",
            "definition": "To navigate through websites on the internet or look over products casually.",
            "examples": [
              {
                "en": "I usually browse informative news websites while drinking my morning coffee.",
                "uz": "Ertalabki qahvamni ichayotganda odatda ma'lumot beruvchi yangiliklar saytlarini ko'rib chiqaman."
              },
              {
                "en": "You can browse through thousands of online courses on this platform.",
                "uz": "Ushbu platformada minglab onlayn kurslarni ko'rib chiqishingiz mumkin."
              },
              {
                "en": "He opened an incognito window to browse privately.",
                "uz": "U maxfiy ko'rib chiqish uchun inkognito oynasini ochdi."
              }
            ]
          },
          {
            "id": "tch-12",
            "word": "Storage",
            "pos": "noun",
            "phonetic": "/ˈstɔːrɪdʒ/",
            "uzbek": "Xotira hajmi, saqlash joyi",
            "definition": "The capacity of a computer or hard drive to retain electronic data.",
            "examples": [
              {
                "en": "My smartphone is running out of internal storage space.",
                "uz": "Smartfonimning ichki xotirasi tugab bormoqda."
              },
              {
                "en": "Cloud storage allows you to access important files from any device.",
                "uz": "Bulutli xotira muhim fayllarga har qanday qurilmadan kirish imkonini beradi."
              },
              {
                "en": "She bought an external hard drive with two terabytes of storage.",
                "uz": "U ikki terabayt xotiraga ega tashqi qattiq disk sotib oldi."
              }
            ]
          },
          {
            "id": "tch-13",
            "word": "Backup",
            "pos": "noun",
            "phonetic": "/ˈbækʌp/",
            "uzbek": "Zaxira nusxa",
            "definition": "A duplicate copy of data files made to protect against accidental loss.",
            "examples": [
              {
                "en": "Always make a backup copy of your dissertation before formatting your PC.",
                "uz": "Kompyuteringizni formatlashdan oldin ilmiy ishingizning zaxira nusxasini oling."
              },
              {
                "en": "The automated system performs an encrypted cloud backup every midnight.",
                "uz": "Avtomatlashtirilgan tizim har yarim kechada shifrlangan bulutli zaxira nusxasini yaratadi."
              },
              {
                "en": "Thanks to the recent backup, no valuable client data was lost.",
                "uz": "Yaqinda olingan zaxira nusxa tufayli hech qanday qimmatli mijoz ma'lumotlari yo'qolmadi."
              }
            ]
          },
          {
            "id": "tch-14",
            "word": "Interface",
            "pos": "noun",
            "phonetic": "/ˈɪntəfeɪs/",
            "uzbek": "Interfeys, boshqaruv ko'rinishi",
            "definition": "The visual layout and controls that allow humans to interact with software.",
            "examples": [
              {
                "en": "The mobile application has a clean, intuitive, and modern user interface.",
                "uz": "Mobil ilova sodda, tushunarli va zamonaviy foydalanuvchi interfeysiga ega."
              },
              {
                "en": "Designing an accessible interface helps all age groups use the system easily.",
                "uz": "Qulay interfeys yaratish barcha yoshdagilarga tizimdan oson foydalanishga yordam beradi."
              },
              {
                "en": "The dark mode interface is gentle on the eyes during nighttime study.",
                "uz": "Qorong'i rejimdagi interfeys tunda o'qish paytida ko'zni charchatmaydi."
              }
            ]
          },
          {
            "id": "tch-15",
            "word": "Encrypt",
            "pos": "verb",
            "phonetic": "/ɪnˈkrɪpt/",
            "uzbek": "Shifrlamoq, maxfiylashtirmoq",
            "definition": "To convert digital data into a secret code to prevent unauthorized access.",
            "examples": [
              {
                "en": "Modern messaging apps encrypt chats to protect personal privacy.",
                "uz": "Zamonaviy messenjerlar shaxsiy daxlsizlikni himoya qilish uchun yozishmalarni shifrlaydi."
              },
              {
                "en": "Online banking websites encrypt sensitive transaction details automatically.",
                "uz": "Onlayn banking saytlari nozik to'lov ma'lumotlarini avtomatik ravishda shifrlaydi."
              },
              {
                "en": "Make sure your Wi-Fi router encrypts all transmitted passwords.",
                "uz": "Wi-Fi routeringiz uzatiladigan barcha parollarni shifrlashiga ishonch hosil qiling."
              }
            ]
          },
          {
            "id": "tch-16",
            "word": "Update",
            "pos": "verb",
            "phonetic": "/ʌpˈdeɪt/",
            "uzbek": "Yangilamoq (dasturni)",
            "definition": "To install the latest version or security patches for software or system.",
            "examples": [
              {
                "en": "Remember to update your browser to receive the latest security fixes.",
                "uz": "Eng so'nggi xavfsizlik tuzatishlarini olish uchun brauzeringizni yangilashni unutmang."
              },
              {
                "en": "The developers regularly update the app with useful new features.",
                "uz": "Dasturchilar ilovani foydali yangi imkoniyatlar bilan muntazam yangilab turishadi."
              },
              {
                "en": "Updating your smartphone software fixes frequent crashing bugs.",
                "uz": "Smartfon dasturini yangilash tez-tez uchraydigan qotish xatolarini bartaraf etadi."
              }
            ]
          },
          {
            "id": "tch-17",
            "word": "Install",
            "pos": "verb",
            "phonetic": "/ɪnˈstɔːl/",
            "uzbek": "O'rnatmoq, dasturni yuklab o'rnatmoq",
            "definition": "To set up software or hardware on a computer ready for practical use.",
            "examples": [
              {
                "en": "It takes just two minutes to install this lightweight vocabulary app.",
                "uz": "Ushbu yengil so'z boyligi ilovasini o'rnatish bor-yo'g'i ikki daqiqa vaqt oladi."
              },
              {
                "en": "Please install the official camera drivers from the manufacturer's website.",
                "uz": "Iltimos, ishlab chiqaruvchi saytidan rasmiy kamera drayverlarini o'rnating."
              },
              {
                "en": "I installed an ad-blocker extension to prevent intrusive popups.",
                "uz": "Bezovta qiluvchi reklamalarni to'sish uchun reklama bloklovchi kengaytma o'rnatdim."
              }
            ]
          },
          {
            "id": "tch-18",
            "word": "Wireless",
            "pos": "adjective",
            "phonetic": "/ˈwaɪələs/",
            "uzbek": "Simsiz",
            "definition": "Operating via radio signals and waves without requiring physical cables.",
            "examples": [
              {
                "en": "Wireless headphones offer unmatched freedom of movement while jogging.",
                "uz": "Simsiz quloqchinlar yugurish paytida harakatlanish uchun tengsiz erkinlik beradi."
              },
              {
                "en": "The cafe provides fast wireless internet connection for all patrons.",
                "uz": "Qahvaxona barcha mijozlarga tezkor simsiz internet ulanishini taqdim etadi."
              },
              {
                "en": "Wireless phone chargers make your office desk much tidier.",
                "uz": "Simsiz telefon quvvatlagichlari ish stolingizni ancha tartibli qiladi."
              }
            ]
          },
          {
            "id": "tch-19",
            "word": "Cloud",
            "pos": "noun",
            "phonetic": "/klaʊd/",
            "uzbek": "Bulutli tizim (cloud computing)",
            "definition": "A global network of remote servers on the Internet used to store and process data.",
            "examples": [
              {
                "en": "All our team documents are synchronized securely in the cloud.",
                "uz": "Jamoamizning barcha hujjatlari bulutli tizimda xavfsiz sinxronlashtiriladi."
              },
              {
                "en": "Moving business data to the cloud cuts hardware infrastructure costs.",
                "uz": "Biznes ma'lumotlarini bulutga ko'chirish texnik infratuzilma xarajatlarini kamaytiradi."
              },
              {
                "en": "You can access your favorite music library anywhere via cloud streaming.",
                "uz": "Sevimli musiqa kutubxonangizga bulutli oqim orqali istalgan joydan kirishingiz mumkin."
              }
            ]
          },
          {
            "id": "tch-20",
            "word": "Gadget",
            "pos": "noun",
            "phonetic": "/ˈɡædʒɪt/",
            "uzbek": "Elektron moslama, gadjet",
            "definition": "A small mechanical or electronic tool designed to perform a particular task.",
            "examples": [
              {
                "en": "Smartwatches are versatile gadgets that track daily fitness and heart rates.",
                "uz": "Smart-soatlar kunlik mashqlar va yurak urishini kuzatib boruvchi ko'p qirrali gadjetlardir."
              },
              {
                "en": "He loves testing the newest high-tech kitchen gadgets.",
                "uz": "U eng so'nggi yuqori texnologiyali oshxona moslamalarini sinab ko'rishni yaxshi ko'radi."
              },
              {
                "en": "This pocket-sized gadget can translate speech into dozens of languages.",
                "uz": "Ushbu cho'ntakbop moslama nutqni o'nlab tillarga tarjima qila oladi."
              }
            ]
          }
        ],
        "unitNumber": 1,
        "category": "Technology & Media"
      },
      {
        "id": "b1-environment",
        "title": "Unit 02: Environment & Ecology (Atrof-muhit va tabiat)",
        "icon": "fa-leaf",
        "color": "from-yellow-500 to-amber-600",
        "words": [
          {
            "id": "env-1",
            "word": "Pollution",
            "pos": "noun",
            "phonetic": "/pəˈluːʃn/",
            "uzbek": "Ifloslanish (havo, suv, tuproq)",
            "definition": "The presence in or introduction into the environment of a substance with harmful effects.",
            "examples": [
              {
                "en": "Air pollution is a major environmental challenge in huge metropolitan cities.",
                "uz": "Havo ifloslanishi yirik megapolis shaharlarda asosiy ekologik muammodir."
              },
              {
                "en": "Factories must reduce water pollution to protect river ecosystems.",
                "uz": "Daryo ekotizimlarini himoya qilish uchun zavodlar suv ifloslanishini kamaytirishi shart."
              },
              {
                "en": "Planting trees is one of the most effective ways to combat pollution.",
                "uz": "Daraxt ekish ifloslanishga qarshi kurashishning eng samarali usullaridan biridir."
              }
            ]
          },
          {
            "id": "env-2",
            "word": "Recycle",
            "pos": "verb",
            "phonetic": "/ˌriːˈsaɪkl/",
            "uzbek": "Qayta ishlamoq (chiqindini)",
            "definition": "To convert waste into reusable material.",
            "examples": [
              {
                "en": "We should recycle plastic bottles and glass containers whenever possible.",
                "uz": "Iloji boricha plastik idishlar va shisha qutilarni qayta ishlashga topshirishimiz kerak."
              },
              {
                "en": "Many schools teach pupils how to separate and recycle trash.",
                "uz": "Ko'plab maktablar o'quvchilarga chiqindilarni ajratish va qayta ishlashni o'rgatadi."
              },
              {
                "en": "Recycling paper saves millions of trees across the globe every year.",
                "uz": "Qog'ozni qayta ishlash butun dunyo bo'ylab har yili millionlab daraxtlarni saqlab qoladi."
              }
            ]
          },
          {
            "id": "env-3",
            "word": "Climate",
            "pos": "noun",
            "phonetic": "/ˈklaɪmət/",
            "uzbek": "Iqlim",
            "definition": "The weather conditions prevailing in an area in general or over a long period.",
            "examples": [
              {
                "en": "Climate change is causing global temperatures and sea levels to rise.",
                "uz": "Iqlim o'zgarishi butun dunyoda harorat va dengiz sathining ko'tarilishiga sabab bo'lmoqda."
              },
              {
                "en": "Uzbekistan has a continental climate with hot summers and chilly winters.",
                "uz": "O'zbekiston yozlari issiq va qishlari sovuq bo'lgan kontinental iqlimga ega."
              },
              {
                "en": "Scientists are working hard to monitor changes in global climate patterns.",
                "uz": "Olimlar dunyo iqlimidagi o'zgarishlarni kuzatib borish uchun qattiq izlanishmoqda."
              }
            ]
          },
          {
            "id": "env-4",
            "word": "Protect",
            "pos": "verb",
            "phonetic": "/prəˈtekt/",
            "uzbek": "Himoya qilmoq, asramoq",
            "definition": "To keep safe from harm or injury.",
            "examples": [
              {
                "en": "National parks are established to protect endangered wildlife.",
                "uz": "Milliy bog'lar yo'qolib ketish xavfi ostidagi yovvoyi tabiatni himoya qilish uchun tashkil etilgan."
              },
              {
                "en": "Wearing sunglasses will protect your eyes from intense sunlight.",
                "uz": "Quyosh ko'zoynagi taqish ko'zlaringizni kuchli quyosh nurlaridan asraydi."
              },
              {
                "en": "It is our collective duty to protect the natural environment for posterity.",
                "uz": "Tabiiy atrof-muhitni kelajak avlod uchun asrash bizning umumiy burchimizdir."
              }
            ]
          },
          {
            "id": "env-5",
            "word": "Wildlife",
            "pos": "noun",
            "phonetic": "/ˈwaɪldlaɪf/",
            "uzbek": "Yovvoyi tabiat, yovvoyi hayvonot olami",
            "definition": "Wild animals collectively; the native fauna of a region.",
            "examples": [
              {
                "en": "The nature reserve is home to a rich variety of wildlife.",
                "uz": "Tabiat qo'riqxonasi turfa xil boy yovvoyi hayvonot olamining vatanidir."
              },
              {
                "en": "Deforestation destroys the natural habitats of wildlife.",
                "uz": "O'rmonlarning kesilishi yovvoyi hayvonlarning tabiiy yashash joylarini yo'q qiladi."
              },
              {
                "en": "Wildlife photographers spend months waiting for the perfect shot.",
                "uz": "Yovvoyi tabiat fotosuratchilari mukammal kadrni olish uchun oylab kutishadi."
              }
            ]
          },
          {
            "id": "env-6",
            "word": "Ecosystem",
            "pos": "noun",
            "phonetic": "/ˈiːkəʊsɪstəm/",
            "uzbek": "Ekotizim",
            "definition": "A biological community of interacting organisms and their physical environment.",
            "examples": [
              {
                "en": "Coral reefs form one of the richest ecosystems on the planet.",
                "uz": "Marjon qoyalari sayyoramizdagi eng boy ekotizimlardan birini hosil qiladi."
              },
              {
                "en": "Pollution disrupts the fragile ecological balance of the river ecosystem.",
                "uz": "Ifloslanish daryo ekotizimining nozik ekologik muvozanatini buzadi."
              },
              {
                "en": "Preserving national parks protects native ecosystems from destruction.",
                "uz": "Milliy bog'larni saqlab qolish mahalliy ekotizimlarni yo'q bo'lib ketishdan asraydi."
              }
            ]
          },
          {
            "id": "env-7",
            "word": "Renewable",
            "pos": "adjective",
            "phonetic": "/rɪˈnjuːəbl/",
            "uzbek": "Qayta tiklanuvchan (energiya)",
            "definition": "Capable of being replenished naturally within a short human timescale.",
            "examples": [
              {
                "en": "Solar and wind power are leading clean forms of renewable energy.",
                "uz": "Quyosh va shamol energiyasi qayta tiklanuvchi energiyaning yetakchi toza turlaridir."
              },
              {
                "en": "Transitioning to renewable energy sources curbs greenhouse gas emissions.",
                "uz": "Qayta tiklanuvchi energiya manbalariga o'tish issiqxona gazlari chiqishini kamaytiradi."
              },
              {
                "en": "Uzbekistan is investing heavily in modern renewable solar stations.",
                "uz": "O'zbekiston zamonaviy qayta tiklanuvchi quyosh stansiyalariga katta sarmoya kiritmoqda."
              }
            ]
          },
          {
            "id": "env-8",
            "word": "Conservation",
            "pos": "noun",
            "phonetic": "/ˌkɒnsəˈveɪʃn/",
            "uzbek": "Tabiatni muhofaza qilish, tejash",
            "definition": "The preservation, protection, or restoration of the natural environment and wildlife.",
            "examples": [
              {
                "en": "Wildlife conservation programs prevent rare snow leopards from disappearing.",
                "uz": "Yovvoyi tabiatni muhofaza qilish dasturlari noyob qor qoplonlarining yo'qolib ketishini oldini oladi."
              },
              {
                "en": "Water conservation is vital in arid and semi-arid desert climates.",
                "uz": "Suvni tejash qurg'oqchil va cho'l iqlimlarida hayotiy ahamiyatga ega."
              },
              {
                "en": "Volunteers participated enthusiastically in the forest conservation campaign.",
                "uz": "Ko'ngillilar o'rmonni asrash kampaniyasida g'ayrat bilan ishtirok etishdi."
              }
            ]
          },
          {
            "id": "env-9",
            "word": "Habitat",
            "pos": "noun",
            "phonetic": "/ˈhæbɪtæt/",
            "uzbek": "Tabiiy yashash muhiti",
            "definition": "The natural home or natural environment of an animal, plant, or organism.",
            "examples": [
              {
                "en": "Deforestation threatens the natural habitat of endangered forest animals.",
                "uz": "O'rmonlarning kesilishi yo'qolib borayotgan hayvonlarning tabiiy yashash muhitiga xavf solmoqda."
              },
              {
                "en": "Wetlands provide an ideal habitat for migratory birds every spring.",
                "uz": "Botqoqli joylar har bahorda ko'chmanchi qushlar uchun qulay yashash muhitini yaratadi."
              },
              {
                "en": "Urban expansion has reduced the natural habitat of wild deer.",
                "uz": "Shaharlarning kengayishi yovvoyi kiklarning tabiiy yashash muhitini qisqartirdi."
              }
            ]
          },
          {
            "id": "env-10",
            "word": "Deforestation",
            "pos": "noun",
            "phonetic": "/diːˌfɒrɪˈsteɪʃn/",
            "uzbek": "O'rmonlarning ommaviy kesilishi",
            "definition": "The clearing or thinning of forests by humans for logging or agriculture.",
            "examples": [
              {
                "en": "Massive deforestation in tropical regions accelerates catastrophic climate change.",
                "uz": "Tropik hududlardagi ommaviy o'rmon kesilishi halokatli iqlim o'zgarishini tezlashtiradi."
              },
              {
                "en": "Deforestation causes severe soil erosion and drives wild species away.",
                "uz": "O'rmonlarning yo'q qilinishi tuproq eroziyasiga sabab bo'ladi va yovvoyi turlarni quvib chiqaradi."
              },
              {
                "en": "Governments are enacting strict laws to halt illegal deforestation.",
                "uz": "Hukumatlar noqonuniy o'rmon kesishni to'xtatish uchun qat'iy qonunlar qabul qilmoqda."
              }
            ]
          },
          {
            "id": "env-11",
            "word": "Emission",
            "pos": "noun",
            "phonetic": "/iˈmɪʃn/",
            "uzbek": "Chiqindi gazlar ajralishi",
            "definition": "The production and discharge of pollutants, especially carbon gases, into the air.",
            "examples": [
              {
                "en": "Electric cars produce zero tailpipe emissions on city roads.",
                "uz": "Elektromobillar shahar yo'llarida nol darajadagi chiqindi gaz chiqaradi."
              },
              {
                "en": "Factory emissions must be filtered thoroughly before release into the atmosphere.",
                "uz": "Zavod chiqindi gazlari atmosferaga chiqarilishidan oldin yaxshilab filtrlanishi shart."
              },
              {
                "en": "The summit aims to reduce global carbon emissions by forty percent.",
                "uz": "Sammit global uglerod chiqindilarini qirq foizga kamaytirishni maqsad qilgan."
              }
            ]
          },
          {
            "id": "env-12",
            "word": "Global warming",
            "pos": "noun",
            "phonetic": "/ˌɡləʊbl ˈwɔːmɪŋ/",
            "uzbek": "Global isish",
            "definition": "The long-term heating of Earth's climate system driven by human activities.",
            "examples": [
              {
                "en": "Global warming causes glaciers to melt and sea levels to rise.",
                "uz": "Global isish muzliklarning erishiga va dengiz sathining ko'tarilishiga sabab bo'lmoqda."
              },
              {
                "en": "Scientists warn that global warming leads to frequent extreme weather events.",
                "uz": "Olimlar global isish tez-tez uchraydigan ekstremal ob-havo hodisalariga olib kelishidan ogohlantirmoqda."
              },
              {
                "en": "Planting millions of trees helps absorb carbon and mitigate global warming.",
                "uz": "Millionlab daraxtlar ekish uglerodni yutishga va global isishni yumshatishga yordam beradi."
              }
            ]
          },
          {
            "id": "env-13",
            "word": "Biodegradable",
            "pos": "adjective",
            "phonetic": "/ˌbaɪəʊdɪˈɡreɪdəbl/",
            "uzbek": "Tabiiy parchalanuvchi, biologik eriydigan",
            "definition": "Capable of being decomposed by bacteria or biological living organisms safely.",
            "examples": [
              {
                "en": "Supermarkets should replace plastic bags with biodegradable paper alternatives.",
                "uz": "Supermarketlar polietilen paketlarni tabiiy eriydigan qog'oz muqobillari bilan almashtirishlari lozim."
              },
              {
                "en": "Biodegradable packaging breaks down within months without poisoning soil.",
                "uz": "Tabiiy parchalanuvchi qadoqlar tuproqni zaharlamasdan bir necha oy ichida yo'q bo'lib ketadi."
              },
              {
                "en": "Choose biodegradable cleaning detergents to safeguard aquatic life.",
                "uz": "Suv jonivorlarini asrash uchun biologik parchalanuvchi tozalash vositalarini tanlang."
              }
            ]
          },
          {
            "id": "env-14",
            "word": "Extinct",
            "pos": "adjective",
            "phonetic": "/ɪkˈstɪŋkt/",
            "uzbek": "Qirilib ketgan, yo'q bo'lgan",
            "definition": "Having no living representatives left; completely vanished from Earth.",
            "examples": [
              {
                "en": "Dinosaurs became extinct millions of years before humans appeared.",
                "uz": "Dinozavrlar inson paydo bo'lishidan millionlab yillar avval qirilib ketgan."
              },
              {
                "en": "Without immediate conservation efforts, black rhinos may soon become extinct.",
                "uz": "Kechiktirib bo'lmaydigan muhofaza choralarisiz qora karkidonlar tez orada yo'q bo'lib ketishi mumkin."
              },
              {
                "en": "Hunting pushed the historic dodo bird to become completely extinct.",
                "uz": "Ovchilik tarixiy dodo qushining butunlay yo'q bo'lib ketishiga olib keldi."
              }
            ]
          },
          {
            "id": "env-15",
            "word": "Ozone",
            "pos": "noun",
            "phonetic": "/ˈəʊzəʊn/",
            "uzbek": "Ozon qatlami",
            "definition": "A layer in the stratosphere that absorbs harmful ultraviolet rays from the sun.",
            "examples": [
              {
                "en": "The atmospheric ozone layer shields living organisms from harmful radiation.",
                "uz": "Atmosferadagi ozon qatlami tirik mavjudotlarni zararli nurlanishdan himoya qiladi."
              },
              {
                "en": "International treaties successfully banned chemicals that damaged the ozone layer.",
                "uz": "Xalqaro shartnomalar ozon qatlamiga ziyon yetkazuvchi kimyoviy moddalarni taqiqlashga erishdi."
              },
              {
                "en": "Recent scientific satellite data shows the ozone layer is slowly recovering.",
                "uz": "So'nggi ilmiy sun'iy yo'ldosh ma'lumotlari ozon qatlami asta-sekin tiklanayotganini ko'rsatmoqda."
              }
            ]
          },
          {
            "id": "env-16",
            "word": "Solar",
            "pos": "adjective",
            "phonetic": "/ˈsəʊlə/",
            "uzbek": "Quyoshga oid, quyosh energiyasi",
            "definition": "Relating to or derived from the radiant light and heat of the sun.",
            "examples": [
              {
                "en": "Installing rooftop solar panels drastically cuts household electricity bills.",
                "uz": "Tomga quyosh panellarini o'rnatish xonadonning elektr to'lovlarini keskin kamaytiradi."
              },
              {
                "en": "Solar powered street lamps illuminate highway roads cleanly and reliably.",
                "uz": "Quyosh energiyasida ishlovchi ko'cha chiroqlari magistral yo'llarni toza va ishonchli yoritadi."
              },
              {
                "en": "Our solar system consists of the central sun and orbiting planets.",
                "uz": "Quyosh tizimimiz markaziy quyosh va uning atrofida aylanuvchi sayyoralardan iborat."
              }
            ]
          },
          {
            "id": "env-17",
            "word": "Drought",
            "pos": "noun",
            "phonetic": "/draʊt/",
            "uzbek": "Qurg'oqchilik",
            "definition": "A prolonged period of abnormally low rainfall leading to severe water shortages.",
            "examples": [
              {
                "en": "The severe summer drought dried up local farming irrigation canals.",
                "uz": "Kuchli yozgi qurg'oqchilik mahalliy qishloq xo'jaligi sug'orish kanallarini quritib qo'ydi."
              },
              {
                "en": "Farmers suffered heavy crop losses during the two-year drought.",
                "uz": "Ikki yillik qurg'oqchilik davrida dehqonlar katta hosil yo'qotishlariga duchor bo'lishdi."
              },
              {
                "en": "Drip irrigation helps grow food efficiently even under extreme drought conditions.",
                "uz": "Tomchilatib sug'orish o'ta qurg'oqchilik sharoitida ham ekinlarni samarali yetishtirishga yordam beradi."
              }
            ]
          },
          {
            "id": "env-18",
            "word": "Flood",
            "pos": "noun",
            "phonetic": "/flʌd/",
            "uzbek": "Suv toshqini, sel",
            "definition": "An overflowing of a large body of water beyond its normal confines.",
            "examples": [
              {
                "en": "Torrential rain triggered a massive flash flood in the river valley.",
                "uz": "Jala yog'ishi daryo vodiysida kuchli to'satdan suv toshqinini keltirib chiqardi."
              },
              {
                "en": "Emergency workers rescued residents stranded by the catastrophic flood.",
                "uz": "Qutqaruvchilar halokatli toshqinda qolib ketgan aholini xavfsiz joyga ko'chirishdi."
              },
              {
                "en": "Building strong dikes and levees protects low-lying coastal cities from flood risks.",
                "uz": "Mustahkam to'g'onlar qurish past-tekislikdagi sohil shaharlarini toshqin xavfidan himoya qiladi."
              }
            ]
          },
          {
            "id": "env-19",
            "word": "Organic",
            "pos": "adjective",
            "phonetic": "/ɔːˈɡænɪk/",
            "uzbek": "Organik, tabiiy, kimyoviy qo'shimchalarsiz",
            "definition": "Produced without using artificial chemical fertilizers, pesticides, or GMOs.",
            "examples": [
              {
                "en": "Organic agriculture preserves soil fertility and groundwater purity.",
                "uz": "Organik qishloq xo'jaligi tuproq unumdorligini va yerosti suvlari sofligini asraydi."
              },
              {
                "en": "Many shoppers are willing to pay slightly more for certified organic vegetables.",
                "uz": "Ko'plab xaridorlar sertifikatlangan organik sabzavotlar uchun biroz ko'proq to'lashga tayyor."
              },
              {
                "en": "Organic farming avoids chemical pesticides that damage beneficial bees.",
                "uz": "Tabiiy dehqonchilik foydali asalarilarga zarar yetkazuvchi kimyoviy vositalardan xolidir."
              }
            ]
          },
          {
            "id": "env-20",
            "word": "Threaten",
            "pos": "verb",
            "phonetic": "/ˈθretn/",
            "uzbek": "Xavf solmoq, xavf ostida qoldirmoq",
            "definition": "To cause a risk or danger to someone or something's existence.",
            "examples": [
              {
                "en": "Rising global temperatures threaten coastal communities worldwide.",
                "uz": "Ko'tarilayotgan global harorat butun dunyo bo'ylab qirg'oqbo'yi aholisiga xavf solmoqda."
              },
              {
                "en": "Plastic waste threatens marine life in the deep oceans.",
                "uz": "Plastik chiqindilar chuqur okeanlardagi dengiz jonivorlariga xavf tug'diradi."
              },
              {
                "en": "Air pollution threatens public health, especially for young children.",
                "uz": "Havoning ifloslanishi aholi salomatligiga, ayniqsa yosh bolalarga jiddiy xavf soladi."
              }
            ]
          }
        ],
        "unitNumber": 2,
        "category": "Environment & Nature"
      },
      {
        "id": "b1-career",
        "title": "Unit 03: Career & Employment (Kasb va mehnat faoliyati)",
        "icon": "fa-briefcase",
        "color": "from-orange-400 to-amber-600",
        "words": [
          {
            "id": "car-1",
            "word": "Ambition",
            "pos": "noun",
            "phonetic": "/æmˈbɪʃn/",
            "uzbek": "Maqsad, intilish, orzu",
            "definition": "A strong desire to do or to achieve something.",
            "examples": [
              {
                "en": "Her lifelong ambition is to start an educational academy.",
                "uz": "Uning butun umrlik maqsadi ta'lim akademiyasini ochishdir."
              },
              {
                "en": "Young learners with clear ambition tend to achieve great success.",
                "uz": "Aniq maqsadga ega yosh talabalar odatda katta muvaffaqiyatlarga erishadilar."
              },
              {
                "en": "He lacks the ambition needed to lead a large corporation.",
                "uz": "Unda yirik korporatsiyani boshqarish uchun zarur bo'lgan intilish yetishmaydi."
              }
            ]
          },
          {
            "id": "car-2",
            "word": "Deadline",
            "pos": "noun",
            "phonetic": "/ˈdedlaɪn/",
            "uzbek": "Oxirgi muddat (dedlayn)",
            "definition": "The latest time or date by which something should be completed.",
            "examples": [
              {
                "en": "We worked overtime to finish the software project before the deadline.",
                "uz": "Dasturiy loyihani muddatidan oldin tugatish uchun qo'shimcha vaqt ishladik."
              },
              {
                "en": "The application deadline for university enrollment is next Friday.",
                "uz": "Universitetga qabul uchun arizalar topshirishning oxirgi muddati kelasi juma."
              },
              {
                "en": "Missing the project deadline can lead to serious penalties.",
                "uz": "Loyiha muddatini o'tkazib yuborish jiddiy jarimalarga olib kelishi mumkin."
              }
            ]
          },
          {
            "id": "car-3",
            "word": "Salary",
            "pos": "noun",
            "phonetic": "/ˈsæləri/",
            "uzbek": "Oylik maosh",
            "definition": "A fixed regular payment made by an employer to an employee.",
            "examples": [
              {
                "en": "The company offers a competitive salary along with annual bonuses.",
                "uz": "Kompaniya raqobatbardosh oylik maosh bilan birga yillik bonuslarni ham taklif etadi."
              },
              {
                "en": "He negotiated a higher starting salary during his final interview.",
                "uz": "U so'nggi suhbat chog'ida yuqoriroq boshlang'ich maosh bo'yicha kelishib oldi."
              },
              {
                "en": "Teachers deserve a generous salary for shaping the future generation.",
                "uz": "Kelajak avlodni tarbiyalayotgani uchun o'qituvchilar munosib maoshga loyiqdir."
              }
            ]
          },
          {
            "id": "car-4",
            "word": "Colleague",
            "pos": "noun",
            "phonetic": "/ˈkɒliːɡ/",
            "uzbek": "Hamkasb",
            "definition": "A person with whom one works in a profession or business.",
            "examples": [
              {
                "en": "I regularly consult my senior colleagues when faced with tricky problems.",
                "uz": "Murakkab muammolarga duch kelganda tajribali hamkasblarim bilan maslahatlashaman."
              },
              {
                "en": "We organized a farewell party for our departing colleague.",
                "uz": "Biz ishdan ketayotgan hamkasbimiz uchun xayrlashuv kechasini uyushtirdik."
              },
              {
                "en": "Mutual respect among colleagues fosters a productive workplace environment.",
                "uz": "Hamkasblar o'rtasidagi o'zaro hurmat ish joyida samarali muhit yaratadi."
              }
            ]
          },
          {
            "id": "car-5",
            "word": "Promote",
            "pos": "verb",
            "phonetic": "/prəˈməʊt/",
            "uzbek": "Lavozimini ko'tarmoq / Targ'ib qilmoq",
            "definition": "To raise someone to a higher position or rank; or to support something.",
            "examples": [
              {
                "en": "She was promoted to regional manager after demonstrating excellent leadership.",
                "uz": "Ajoyib yetakchilik ko'rsatganidan so'ng uning lavozimi hududiy boshqaruvchiga ko'tarildi."
              },
              {
                "en": "The campaign aims to promote reading habits among teenagers.",
                "uz": "Kompaniya o'smirlar orasida kitobxonlik odatini targ'ib qilishni maqsad qilgan."
              },
              {
                "en": "Hard work and reliability will eventually help you get promoted.",
                "uz": "Mehnatsevarlik va ishonchlilik pirovardida sizning lavozimingiz ko'tarilishiga yordam beradi."
              }
            ]
          },
          {
            "id": "car-6",
            "word": "Employment",
            "pos": "noun",
            "phonetic": "/ɪmˈplɔɪmənt/",
            "uzbek": "Bandlik, ish bilan ta'minlanganlik",
            "definition": "The state of having paid work or a formal job.",
            "examples": [
              {
                "en": "Youth employment rates rose significantly after the new IT internship program.",
                "uz": "Yangi IT amaliyot dasturidan so'ng yoshlar bandligi darajasi sezilarli darajada oshdi."
              },
              {
                "en": "She signed an official employment contract with a leading international bank.",
                "uz": "U yetakchi xalqaro bank bilan rasmiy mehnat shartnomasini imzoladi."
              },
              {
                "en": "Vocational colleges aim to provide practical skills for rapid employment.",
                "uz": "Kasb-hunar kollejlari tezda ish topish uchun amaliy ko'nikmalar berishni maqsad qiladi."
              }
            ]
          },
          {
            "id": "car-7",
            "word": "Interview",
            "pos": "noun",
            "phonetic": "/ˈɪntəvjuː/",
            "uzbek": "Ishga kirish suhbati (intervyu)",
            "definition": "A formal meeting in which an applicant is questioned to assess job suitability.",
            "examples": [
              {
                "en": "He prepared answers to typical questions before attending the job interview.",
                "uz": "U ishga kirish suhbatiga borishdan oldin odatiy savollarga javoblarni tayyorlab oldi."
              },
              {
                "en": "Making eye contact and dressing smartly leaves a great impression at an interview.",
                "uz": "Suhbatda ko'z bilan aloqa qilish va saranjom kiyinish ajoyib taassurot qoldiradi."
              },
              {
                "en": "She received a job offer right after the second technical interview.",
                "uz": "U ikkinchi texnik suhbatdan so'ng darhol ishga taklif oldi."
              }
            ]
          },
          {
            "id": "car-8",
            "word": "Resume",
            "pos": "noun",
            "phonetic": "/ˈrezjuːmeɪ/",
            "uzbek": "Rezyume, ob'ektivka",
            "definition": "A formal document summarizing a job applicant's education, skills, and work history.",
            "examples": [
              {
                "en": "Ensure your resume is concise, well formatted, and free of spelling errors.",
                "uz": "Rezyumeingiz ixcham, chiroyli formatlangan va imlo xatolaridan xoli ekaniga ishonch hosil qiling."
              },
              {
                "en": "He highlighted his English proficiency and leadership experience on his resume.",
                "uz": "U rezyumesida ingliz tili bilish darajasi va yetakchilik tajribasini alohida ajratib ko'rsatdi."
              },
              {
                "en": "Send your updated resume directly to the human resources department.",
                "uz": "Yangilangan rezyumeingizni to'g'ridan-to'g'ri inson resurslari bo'limiga yuboring."
              }
            ]
          },
          {
            "id": "car-9",
            "word": "Qualification",
            "pos": "noun",
            "phonetic": "/ˌkwɒlɪfɪˈkeɪʃn/",
            "uzbek": "Malaka, kasbiy mutaxassislik",
            "definition": "An official completion of a course or exam demonstrating suitability for a role.",
            "examples": [
              {
                "en": "A recognized master's qualification opened doors to top management positions.",
                "uz": "Tan olingan magistrlik malakasi yuqori boshqaruv lavozimlariga yo'l ochdi."
              },
              {
                "en": "Does the candidate hold the required technical qualifications for this project?",
                "uz": "Nomzod ushbu loyiha uchun zaruriy texnik malakalarga egami?"
              },
              {
                "en": "Continuous professional training improves qualifications throughout your career.",
                "uz": "Doimiy kasbiy tayyorgarlik faoliyatingiz davomida malakangizni oshirib boradi."
              }
            ]
          },
          {
            "id": "car-10",
            "word": "Retire",
            "pos": "verb",
            "phonetic": "/rɪˈtaɪə/",
            "uzbek": "Nafaqaga chiqmoq",
            "definition": "To leave one's job and cease to work, usually upon reaching pension age.",
            "examples": [
              {
                "en": "My grandfather plans to retire next year and spend time gardening.",
                "uz": "Bobom kelasi yili nafaqaga chiqib, vaqtini bog'dorchilik bilan o'tkazishni rejalashtirmoqda."
              },
              {
                "en": "Many people choose to travel the world after they retire.",
                "uz": "Ko'pchilik odamlar nafaqaga chiqqanlaridan so'ng dunyo bo'ylab sayohat qilishni tanlashadi."
              },
              {
                "en": "She retired after thirty-five years of dedicated service as a school teacher.",
                "uz": "U maktab o'qituvchisi sifatidagi o'ttiz besh yillik fidokorona xizmatdan so'ng nafaqaga chiqdi."
              }
            ]
          },
          {
            "id": "car-11",
            "word": "Contract",
            "pos": "noun",
            "phonetic": "/ˈkɒntrækt/",
            "uzbek": "Mehnat shartnomasi, kontrakt",
            "definition": "A formal, legally binding written agreement between employee and employer.",
            "examples": [
              {
                "en": "Read every clause carefully before signing the employment contract.",
                "uz": "Mehnat shartnomasini imzolashdan oldin har bir bandini diqqat bilan o'qib chiqing."
              },
              {
                "en": "The company renewed her one-year contract with an increased salary.",
                "uz": "Kompaniya uning bir yillik shartnomasini oshirilgan maosh bilan uzaytirdi."
              },
              {
                "en": "Breaching contract terms may lead to serious financial penalties.",
                "uz": "Shartnoma shartlarini buzish jiddiy moliyaviy jarimalarga olib kelishi mumkin."
              }
            ]
          },
          {
            "id": "car-12",
            "word": "Overtime",
            "pos": "noun",
            "phonetic": "/ˈəʊvətaɪm/",
            "uzbek": "Qo'shimcha ish vaqti",
            "definition": "Time worked in addition to standard contracted working hours.",
            "examples": [
              {
                "en": "Employees receive double pay when working overtime on weekends.",
                "uz": "Dam olish kunlarida qo'shimcha ishlagan xodimlarga ikki hissa haq to'lanadi."
              },
              {
                "en": "She worked three hours of overtime to meet the urgent client deadline.",
                "uz": "U mijozning shoshilinch muddatiga ulgurish uchun uch soat qo'shimcha ishladi."
              },
              {
                "en": "Frequent unpaid overtime can quickly lead to professional burnout.",
                "uz": "Tez-tez haq to'lanmaydigan qo'shimcha ishlash kasbiy toliqishga olib kelishi mumkin."
              }
            ]
          },
          {
            "id": "car-13",
            "word": "Bonus",
            "pos": "noun",
            "phonetic": "/ˈbəʊnəs/",
            "uzbek": "Mukofot puli, bonus",
            "definition": "An extra amount of money given to an employee for high performance.",
            "examples": [
              {
                "en": "The company awarded generous performance bonuses at the end of the year.",
                "uz": "Kompaniya yil yakunida xodimlarga saxiylik bilan mukofot pullari tarqatdi."
              },
              {
                "en": "He earned a handsome bonus for exceeding his sales target by thirty percent.",
                "uz": "U savdo rejasini o'ttiz foizga ortig'i bilan bajargani uchun yaxshigina bonus oldi."
              },
              {
                "en": "Annual bonuses serve as strong motivation for hardworking staff.",
                "uz": "Yillik mukofot pullari mehnatkash xodimlar uchun kuchli motivatsiya vazifasini o'taydi."
              }
            ]
          },
          {
            "id": "car-14",
            "word": "Experience",
            "pos": "noun",
            "phonetic": "/ɪkˈspɪəriəns/",
            "uzbek": "Ish tajribasi",
            "definition": "The practical knowledge and skills acquired through years of involvement.",
            "examples": [
              {
                "en": "The job advertisement requires at least three years of managerial experience.",
                "uz": "Ish e'lonida kamida uch yillik boshqaruv tajribasi talab qilinmoqda."
              },
              {
                "en": "Hands-on experience is often more valuable than pure textbook theory.",
                "uz": "Amaliy tajriba ko'pincha sof darslik nazariyasidan qimmatliroq hisoblanadi."
              },
              {
                "en": "Working at a dynamic startup gave him valuable international experience.",
                "uz": "Rivojlanayotgan startapda ishlash unga qimmatli xalqaro tajriba berdi."
              }
            ]
          },
          {
            "id": "car-15",
            "word": "Applicant",
            "pos": "noun",
            "phonetic": "/ˈæplɪkənt/",
            "uzbek": "Nomzod, da'vogar",
            "definition": "A person who formally submits an application for an open position.",
            "examples": [
              {
                "en": "Over two hundred applicants applied for the remote web designer role.",
                "uz": "Masofaviy veb-dizayner lavozimiga ikki yuzdan ortiq nomzod ariza topshirdi."
              },
              {
                "en": "The recruiter shortlisted the five most promising job applicants.",
                "uz": "Xodimlarni tanlash mutaxassisi eng istiqbolli beshta nomzodni saralab oldi."
              },
              {
                "en": "Each applicant must complete a short practical assessment task.",
                "uz": "Har bir nomzod qisqa amaliy sinov topshirig'ini bajarishi shart."
              }
            ]
          },
          {
            "id": "car-16",
            "word": "Resign",
            "pos": "verb",
            "phonetic": "/rɪˈzaɪn/",
            "uzbek": "Iste'fo bermoq, o'z xohishi bilan ishdan ketmoq",
            "definition": "To voluntarily give up a job, office, or formal position.",
            "examples": [
              {
                "en": "He decided to resign from his position to start his own consulting firm.",
                "uz": "U o'z konsalting firmasini ochish maqsadida lavozimidan iste'fo berishga qaror qildi."
              },
              {
                "en": "The CEO resigned following disagreements over the company's future direction.",
                "uz": "Bosh direktor kompaniyaning kelajak yo'nalishi bo'yicha kelishmovchiliklar ortidan iste'foga chiqdi."
              },
              {
                "en": "Employees usually give two weeks' formal notice before they resign.",
                "uz": "Xodimlar odatda ishdan bo'shashdan ikki hafta oldin rasmiy bildirishnoma berishadi."
              }
            ]
          },
          {
            "id": "car-17",
            "word": "Profession",
            "pos": "noun",
            "phonetic": "/prəˈfeʃn/",
            "uzbek": "Kasb, mutaxassislik",
            "definition": "A paid occupation that involves specialized training and formal education.",
            "examples": [
              {
                "en": "Medicine and law are respected professions requiring long years of study.",
                "uz": "Tibbiyot va huquqshunoslik uzoq yillik o'qishni talab qiladigan hurmatli kasblardir."
              },
              {
                "en": "She chose the teaching profession because she enjoys inspiring young minds.",
                "uz": "U yosh avlodni ilhomlantirishni yoqtirgani sababli o'qituvchilik kasbini tanladi."
              },
              {
                "en": "Ethical standards are strictly enforced across the accounting profession.",
                "uz": "Buxgalteriya kasbida axloqiy me'yorlar qat'iy talab qilinadi."
              }
            ]
          },
          {
            "id": "car-18",
            "word": "Punctual",
            "pos": "adjective",
            "phonetic": "/ˈpʌŋktʃuəl/",
            "uzbek": "Vaqtga qat'iy rioya qiluvchi, daqiq",
            "definition": "Doing something or arriving exactly at the agreed or proper time.",
            "examples": [
              {
                "en": "Being punctual demonstrates respect and reliability to your employers.",
                "uz": "Vaqtga rioya qilish ish beruvchilarga hurmat va ishonchlilikni namoyish etadi."
              },
              {
                "en": "He is always punctual and arrives ten minutes before morning meetings.",
                "uz": "U doim vaqtiga puxta va ertalabki majlislarga o'n daqiqa oldin keladi."
              },
              {
                "en": "Punctual public transport makes city commuting stress-free.",
                "uz": "O'z vaqtida yuradigan jamoat transporti shahardagi qatnovni tashvishsiz qiladi."
              }
            ]
          },
          {
            "id": "car-19",
            "word": "Vacancy",
            "pos": "noun",
            "phonetic": "/ˈveɪkənsi/",
            "uzbek": "Bo'sh ish o'rni, vakansiya",
            "definition": "An unoccupied position or job available for someone to fill.",
            "examples": [
              {
                "en": "Our department announced a new job vacancy for a senior data analyst.",
                "uz": "Bo'limimiz katta ma'lumotlar tahlilchisi uchun yangi bo'sh ish o'rnini e'lon qildi."
              },
              {
                "en": "Check the company careers page regularly for new employment vacancies.",
                "uz": "Yangi bo'sh ish o'rinlari uchun kompaniyaning karyera sahifasini muntazam tekshirib turing."
              },
              {
                "en": "The vacancy was filled quickly by an experienced internal candidate.",
                "uz": "Bo'sh o'rin tajribali ichki nomzod tomonidan tezda to'ldirildi."
              }
            ]
          },
          {
            "id": "car-20",
            "word": "Trainee",
            "pos": "noun",
            "phonetic": "/ˌtreɪˈniː/",
            "uzbek": "Stajyor, amaliyotchi",
            "definition": "A person undergoing practical training for a specific job or profession.",
            "examples": [
              {
                "en": "The bank recruited twenty promising university graduates as management trainees.",
                "uz": "Bank yigirmata iqtidorli universitet bitiruvchisini boshqaruv stajyori sifatida qabul qildi."
              },
              {
                "en": "Senior engineers mentor new trainees during their first three months.",
                "uz": "Yetakchi muhandislar dastlabki uch oy davomida yangi amaliyotchilarga ustozlik qiladi."
              },
              {
                "en": "The trainee demonstrated rapid learning and exceptional problem-solving skills.",
                "uz": "Stajyor tez o'rganish va ajoyib muammolarni hal qilish qobiliyatini namoyish etdi."
              }
            ]
          }
        ],
        "unitNumber": 3,
        "category": "Work & Employment"
      },
      {
        "id": "b1-u2-office",
        "unitNumber": 4,
        "title": "Unit 04: Office Life & Career Development (Ofis hayoti)",
        "category": "Business & Workplace",
        "icon": "fa-building-user",
        "color": "from-amber-400 to-yellow-600",
        "description": "Ofis faoliyati, jamoaviy ish va kasbiy o'sish",
        "words": [
          {
            "id": "ofc-1",
            "word": "Colleague",
            "pos": "noun",
            "phonetic": "/ˈkɒliːɡ/",
            "uzbek": "Hamkasb",
            "definition": "A person with whom one works in a profession or business.",
            "examples": [
              {
                "en": "She gets on exceptionally well with all her office colleagues.",
                "uz": "U barcha ofis hamkasblari bilan ajoyib munosabatda."
              },
              {
                "en": "A colleague helped me prepare the financial slides for the client meeting.",
                "uz": "Hamkasbim mijozlar bilan uchrashuv uchun moliyaviy slaydlarni tayyorlashga yordam berdi."
              },
              {
                "en": "We celebrated our colleague's tenth anniversary of working at the firm.",
                "uz": "Biz hamkasbimizning firmada ishlashining o'n yillik yubileyini nishonladik."
              }
            ]
          },
          {
            "id": "ofc-2",
            "word": "Promotion",
            "pos": "noun",
            "phonetic": "/prəˈməʊʃn/",
            "uzbek": "Lavozim ko'tarilishi",
            "definition": "The action of promoting someone to a higher position.",
            "examples": [
              {
                "en": "He earned a well-deserved promotion to senior project manager.",
                "uz": "U katta loyiha menejeri lavozimiga munosib tarzda ko'tarildi."
              },
              {
                "en": "Consistent hard work and leadership increase your chances of promotion.",
                "uz": "Doimiy mehnat va yetakchilik lavozim ko'tarilishi imkoniyatlarini oshiradi."
              },
              {
                "en": "She celebrated her promotion with dinner alongside close friends.",
                "uz": "U lavozimi ko'tarilganini yaqin do'stlari bilan birgalikda nishonladi."
              }
            ]
          },
          {
            "id": "ofc-3",
            "word": "Duty",
            "pos": "noun",
            "phonetic": "/ˈdjuːti/",
            "uzbek": "Vazifa, burch",
            "definition": "A moral or legal obligation; a task required by a job.",
            "examples": [
              {
                "en": "One of his daily duties is answering customer inquiries via email.",
                "uz": "Uning kunlik vazifalaridan biri elektron pochta orqali mijozlar savollariga javob berishdir."
              },
              {
                "en": "Staff members must report for duty promptly at eight-thirty every morning.",
                "uz": "Xodimlar har kuni ertalab sakkiz yarimda ish vazifasini bajarishga kelishlari shart."
              },
              {
                "en": "She performed all her professional duties with utmost diligence.",
                "uz": "U barcha kasbiy vazifalarini yuksak fidoyilik bilan bajardi."
              }
            ]
          },
          {
            "id": "ofc-4",
            "word": "Presentation",
            "pos": "noun",
            "phonetic": "/ˌpreznˈteɪʃn/",
            "uzbek": "Taqdimot",
            "definition": "A speech or talk in which a new product or idea is shown to an audience.",
            "examples": [
              {
                "en": "He gave an informative digital presentation about renewable energy.",
                "uz": "U qayta tiklanuvchi energiya haqida mazmunli raqamli taqdimot o'tkazdi."
              },
              {
                "en": "Practice your speech thoroughly before delivering the client presentation.",
                "uz": "Mijozlar oldidagi taqdimotdan oldin nutqingizni yaxshilab mashq qilib oling."
              },
              {
                "en": "The marketing team's visual presentation impressed the company executives.",
                "uz": "Marketing guruhining vizual taqdimoti kompaniya rahbarlarida chuqur taassurot qoldirdi."
              }
            ]
          },
          {
            "id": "ofc-5",
            "word": "Workload",
            "pos": "noun",
            "phonetic": "/ˈwɜːkləʊd/",
            "uzbek": "Ish hajmi",
            "definition": "The amount of work to be done by a person in a given period.",
            "examples": [
              {
                "en": "She found it difficult to manage the heavy workload during exam season.",
                "uz": "Imtihon mavsumida og'ir ish hajmini boshqarish unga qiyinchilik tug'dirdi."
              },
              {
                "en": "The manager reorganized the department to distribute the workload fairly.",
                "uz": "Mudir ish hajmini adolatli taqsimlash uchun bo'limni qayta tuzdi."
              },
              {
                "en": "A reasonable workload helps prevent occupational burnout among employees.",
                "uz": "Me'yoridagi ish hajmi xodimlar orasida kasbiy toliqishning oldini oladi."
              }
            ]
          },
          {
            "id": "ofc-6",
            "word": "Deadline",
            "pos": "noun",
            "phonetic": "/ˈdedlaɪn/",
            "uzbek": "Oxirgi muddat (dedlayn)",
            "definition": "The latest time or date by which something should be completed.",
            "examples": [
              {
                "en": "We worked late into the evening to meet the project deadline.",
                "uz": "Loyiha muddatiga ulgurish uchun biz kechgacha qolib ishladik."
              },
              {
                "en": "The professor strictly refused to extend the term paper deadline.",
                "uz": "Professor kurs ishi topshirish muddatini uzaytirishni qat'iyan rad etdi."
              },
              {
                "en": "Missing an important client deadline can harm a company's professional reputation.",
                "uz": "Mijozning muhim muddatini o'tkazib yuborish kompaniyaning obro'siga putur yetkazishi mumkin."
              }
            ]
          },
          {
            "id": "ofc-7",
            "word": "Resignation",
            "pos": "noun",
            "phonetic": "/ˌrezɪɡˈneɪʃn/",
            "uzbek": "Iste'fo, ishdan bo'shash",
            "definition": "An act of retiring or giving up a position.",
            "examples": [
              {
                "en": "He formally handed in his letter of resignation to the director.",
                "uz": "U o'zining ishdan bo'shash arizasini direktorga rasman topshirdi."
              },
              {
                "en": "The finance minister announced his unexpected resignation on national news.",
                "uz": "Moliya vaziri kutilmaganda o'z iste'fosini yangiliklar orqali e'lon qildi."
              },
              {
                "en": "She decided against resignation after being offered a flexible schedule.",
                "uz": "Unga moslashuvchan ish tartibi taklif qilingach, u ishdan bo'shash fikridan qaytdi."
              }
            ]
          },
          {
            "id": "ofc-8",
            "word": "Overtime",
            "pos": "noun",
            "phonetic": "/ˈəʊvətaɪm/",
            "uzbek": "Qo'shimcha ish vaqti",
            "definition": "Time worked in addition to one's normal working hours.",
            "examples": [
              {
                "en": "Employees receive time-and-a-half pay for working overtime on weekends.",
                "uz": "Dam olish kunlarida qo'shimcha ishlagan xodimlarga bir yarim baravar haq to'lanadi."
              },
              {
                "en": "He put in ten hours of overtime to ensure the software update launched on time.",
                "uz": "Dastur yangilanishi vaqtida chiqishini ta'minlash uchun u o'n soat qo'shimcha ishladi."
              },
              {
                "en": "Frequent unpaid overtime violates standard labour protection regulations.",
                "uz": "Doimiy haq to'lanmaydigan qo'shimcha ish mehnatni muhofaza qilish qoidalarini buzadi."
              }
            ]
          },
          {
            "id": "ofc-9",
            "word": "Flexible",
            "pos": "adjective",
            "phonetic": "/ˈfleksəbl/",
            "uzbek": "Moslashuvchan (ish vaqti)",
            "definition": "Able to be easily modified to respond to altered circumstances.",
            "examples": [
              {
                "en": "Our company offers flexible working hours for parents with young children.",
                "uz": "Kompaniyamiz yosh bolali ota-onalar uchun moslashuvchan ish vaqtini taqdim etadi."
              },
              {
                "en": "A flexible schedule allows employees to balance professional and personal life.",
                "uz": "Moslashuvchan tartib xodimlarga kasbiy va shaxsiy hayotni muvozanatlash imkonini beradi."
              },
              {
                "en": "Modern remote workplaces demand adaptable and flexible team communication.",
                "uz": "Zamonaviy masofaviy ish muhiti moslashuvchan jamoaviy muloqotni talab qiladi."
              }
            ]
          },
          {
            "id": "ofc-10",
            "word": "Employment",
            "pos": "noun",
            "phonetic": "/ɪmˈplɔɪmənt/",
            "uzbek": "Bandlik, ish o'rni",
            "definition": "The state of having paid work.",
            "examples": [
              {
                "en": "The government launched new initiatives to foster youth employment.",
                "uz": "Hukumat yoshlar bandligini oshirish uchun yangi tashabbuslarni yo'lga qo'ydi."
              },
              {
                "en": "She signed a formal employment contract with an international accounting firm.",
                "uz": "U xalqaro buxgalteriya firmasi bilan rasmiy mehnat shartnomasini imzoladi."
              },
              {
                "en": "Vocational education provides practical skills that lead directly to stable employment.",
                "uz": "Kasbiy ta'lim to'g'ridan-to'g'ri barqaror ish o'rniga olib boruvchi amaliy ko'nikmalarni beradi."
              }
            ]
          }
        ]
      },
      {
        "id": "b1-u3-business",
        "unitNumber": 5,
        "title": "Unit 05: Business, Money & Banking (Biznes, pul va bank)",
        "category": "Business & Finance",
        "icon": "fa-coins",
        "color": "from-emerald-500 to-teal-700",
        "description": "Daromad, xarajatlar, valyuta va bank xizmatlari",
        "words": [
          {
            "id": "bnk-1",
            "word": "Profit",
            "pos": "noun",
            "phonetic": "/ˈprɒfɪt/",
            "uzbek": "Foyda, daromad",
            "definition": "A financial gain from business activities.",
            "examples": [
              {
                "en": "The company reported a twenty percent increase in annual net profit.",
                "uz": "Kompaniya yillik sof foydada yigirma foizlik o'sishni qayd etdi."
              },
              {
                "en": "They invested their business profits into modern production equipment.",
                "uz": "Ular biznes foydalarini zamonaviy ishlab chiqarish uskunalariga qayta kiritdilar."
              },
              {
                "en": "A well-planned marketing campaign can boost retail profits significantly.",
                "uz": "Yaxshi rejalashtirilgan marketing harakati chakana daromadni sezilarli oshirishi mumkin."
              }
            ]
          },
          {
            "id": "bnk-2",
            "word": "Loss",
            "pos": "noun",
            "phonetic": "/lɒs/",
            "uzbek": "Zarar, yo'qotish",
            "definition": "An amount of money lost by a business or organization.",
            "examples": [
              {
                "en": "The factory suffered a heavy financial loss due to supply chain delays.",
                "uz": "Zavod ta'minot zanjiridagi uzilishlar tufayli katta moliyaviy zarar ko'rdi."
              },
              {
                "en": "Cutting wasteful operational overhead helps companies avoid operating at a loss.",
                "uz": "Isrofgarchilikka yo'l qo'ymaslik kompaniyalarga zarar bilan ishlashdan saqlanishga yordam beradi."
              },
              {
                "en": "Insurance policies cover unexpected property damage and inventory loss.",
                "uz": "Sug'urta shartnomalari kutilmagan mulkiy zarar va tovar yo'qotishlarini qoplaydi."
              }
            ]
          },
          {
            "id": "bnk-3",
            "word": "Currency",
            "pos": "noun",
            "phonetic": "/ˈkʌrənsi/",
            "uzbek": "Valyuta",
            "definition": "A system of money in common use in a country.",
            "examples": [
              {
                "en": "The Uzbek Som is the official national currency of Uzbekistan.",
                "uz": "O'zbek so'mi O'zbekistonning rasmiy milliy valyutasidir."
              },
              {
                "en": "Tourists should exchange their currency at authorized bank kiosks.",
                "uz": "Sayyohlar valyutalarini vakolatli bank shoxobchalarida almashtirishlari kerak."
              },
              {
                "en": "Fluctuations in the foreign currency exchange rate affect imported food prices.",
                "uz": "Xorijiy valyuta ayirboshlash kursining tebranishlari import qilinadigan oziq-ovqat narxlariga ta'sir qiladi."
              }
            ]
          },
          {
            "id": "bnk-4",
            "word": "Account",
            "pos": "noun",
            "phonetic": "/əˈkaʊnt/",
            "uzbek": "Bank hisobvarag'i",
            "definition": "An arrangement by which a bank holds funds on behalf of a client.",
            "examples": [
              {
                "en": "She opened a new high-interest savings account at the commercial bank.",
                "uz": "U tijorat bankida yangi yuqori foizli jamg'arma hisobvarag'ini ochdi."
              },
              {
                "en": "You can transfer money between accounts using the mobile banking application.",
                "uz": "Mobil bank ilovasi yordamida hisoblar o'rtasida pul o'tkazishingiz mumkin."
              },
              {
                "en": "Always check your monthly bank account statement for unauthorized transactions.",
                "uz": "Ruxsatsiz to'lovlarni aniqlash uchun har oylik bank hisoboti ko'chirmasini tekshirib turing."
              }
            ]
          },
          {
            "id": "bnk-5",
            "word": "Loan",
            "pos": "noun",
            "phonetic": "/ləʊn/",
            "uzbek": "Kredit, qarz",
            "definition": "A thing that is borrowed, especially a sum of money that is expected to be paid back with interest.",
            "examples": [
              {
                "en": "The entrepreneurs applied for a low-interest bank loan to expand their bakery.",
                "uz": "Tadbirkorlar o'z novvoyxonalarini kengaytirish uchun imtiyozli bank kreditiga ariza topshirdilar."
              },
              {
                "en": "He took out a thirty-year mortgage loan to purchase a suburban family home.",
                "uz": "U shahar atrofidagi oilaviy uyni sotib olish uchun o'ttiz yillik ipoteka kreditini oldi."
              },
              {
                "en": "Repaying your student loan on schedule establishes a strong credit history.",
                "uz": "Talabalik qarzini o'z vaqtida to'lash mustahkam kredit tarixini shakllantiradi."
              }
            ]
          },
          {
            "id": "bnk-6",
            "word": "Investment",
            "pos": "noun",
            "phonetic": "/ɪnˈvestmənt/",
            "uzbek": "Investitsiya, sarmoya",
            "definition": "The action or process of investing money for profit.",
            "examples": [
              {
                "en": "Investing in quality higher education is the best long-term investment in your future.",
                "uz": "Sifatli oliy ta'limga sarmoya kiritish — kelajagingiz uchun eng yaxshi uzoq muddatli investitsiyadir."
              },
              {
                "en": "Foreign direct investment in manufacturing spurred regional economic growth.",
                "uz": "Ishlab chiqarishga kiritilgan to'g'ridan-to'g'ri xorijiy sarmoyalar mintaqaviy iqtisodiy o'sishga turtki berdi."
              },
              {
                "en": "Diversifying your investment portfolio protects against unexpected market drops.",
                "uz": "Investitsiya portfelini turli aktivlarga taqsimlash kutilmagan bozor pasayishidan himoya qiladi."
              }
            ]
          },
          {
            "id": "bnk-7",
            "word": "Inflation",
            "pos": "noun",
            "phonetic": "/ɪnˈfleɪʃn/",
            "uzbek": "Inflyatsiya",
            "definition": "A general increase in prices and fall in the purchasing value of money.",
            "examples": [
              {
                "en": "The central bank increased interest rates in order to curb rising inflation.",
                "uz": "Markaziy bank oshib borayotgan inflyatsiyani jilovlash uchun foiz stavkalarini ko'tardi."
              },
              {
                "en": "High inflation reduces the purchasing power of ordinary household savings.",
                "uz": "Yuqori inflyatsiya oddiy xonadonlar jamg'armasining xarid qobiliyatini pasaytiradi."
              },
              {
                "en": "Wages should be adjusted annually to keep pace with economic inflation.",
                "uz": "Ish haqlari iqtisodiy inflyatsiyaga mos ravishda har yili qayta ko'rib chiqilishi lozim."
              }
            ]
          },
          {
            "id": "bnk-8",
            "word": "Interest",
            "pos": "noun",
            "phonetic": "/ˈɪntrəst/",
            "uzbek": "Foiz stavkasi",
            "definition": "Money paid regularly at a particular rate for the use of money lent.",
            "examples": [
              {
                "en": "The bank offers an attractive five percent annual interest rate on fixed deposits.",
                "uz": "Bank muddatli omonatlar bo'yicha yillik jozibador besh foizlik stavkani taklif qilmoqda."
              },
              {
                "en": "Borrowers must calculate the total interest payable over the life of the loan.",
                "uz": "Qarz oluvchilar kredit muddati davomida to'lanadigan umumiy foizni hisoblab chiqishlari kerak."
              },
              {
                "en": "Low interest rates encourage consumers to buy property and start businesses.",
                "uz": "Past foiz stavkalari iste'molchilarni uy sotib olish va biznes boshlashga undaydi."
              }
            ]
          },
          {
            "id": "bnk-9",
            "word": "Bankruptcy",
            "pos": "noun",
            "phonetic": "/ˈbæŋkrəptsi/",
            "uzbek": "Bankrotlik",
            "definition": "The state of being bankrupt; inability to pay debts.",
            "examples": [
              {
                "en": "The airline avoided bankruptcy by successfully restructuring its outstanding debts.",
                "uz": "Aviakompaniya mavjud qarzlarini muvaffaqiyatli qayta tuzib, bankrotlikdan qutulib qoldi."
              },
              {
                "en": "Filing for bankruptcy protects the company from aggressive creditors temporarily.",
                "uz": "Bankrotlik to'g'risida ariza berish kompaniyani talabchan kreditorlardan vaqtincha himoya qiladi."
              },
              {
                "en": "Poor cash flow management is the primary cause of small business bankruptcy.",
                "uz": "Pul oqimini noto'g'ri boshqarish kichik biznes bankrotligining asosiy sababidir."
              }
            ]
          },
          {
            "id": "bnk-10",
            "word": "Transaction",
            "pos": "noun",
            "phonetic": "/trænˈzækʃn/",
            "uzbek": "Tranzaksiya, bank operatsiyasi",
            "definition": "An instance of buying or selling something; a business deal.",
            "examples": [
              {
                "en": "Online banking uses end-to-end encryption to safeguard every financial transaction.",
                "uz": "Onlayn banking har bir moliyaviy operatsiyani himoyalash uchun kuchli shifrlashdan foydalanadi."
              },
              {
                "en": "The mobile app sends an instant SMS notification after each card transaction.",
                "uz": "Mobil ilova har bir karta to'lovidan so'ng darhol SMS-xabarnoma yuboradi."
              },
              {
                "en": "International wire transactions may take up to three business days to clear.",
                "uz": "Xalqaro bank o'tkazmalari bajarilishi uchun uch ish kunigacha vaqt ketishi mumkin."
              }
            ]
          }
        ]
      },
      {
        "id": "b1-u4-travel",
        "unitNumber": 6,
        "title": "Unit 06: Tourism & Flight Travel (Turizm va havo sayohati)",
        "category": "Travel & Aviation",
        "icon": "fa-plane-departure",
        "color": "from-sky-500 to-indigo-600",
        "description": "Aviaparvozlar, aeroportlar, chiptalar va sayyohlik",
        "words": [
          {
            "id": "flt-1",
            "word": "Departure",
            "pos": "noun",
            "phonetic": "/dɪˈpɑːtʃə/",
            "uzbek": "Jo'nab ketish",
            "definition": "The action of leaving, especially to start a journey.",
            "examples": [
              {
                "en": "Passengers should check the flight departure board for gate announcements.",
                "uz": "Yo'lovchilar chiqish eshigi e'lonlari uchun parvozlar jo'nash tablosini tekshirishlari kerak."
              },
              {
                "en": "The departure of our international flight was delayed due to heavy snowfall.",
                "uz": "Qalin qor yog'ishi sababli xalqaro reysimizning jo'nashi kechiktirildi."
              },
              {
                "en": "Proceed to the departure lounge once you have passed airport security.",
                "uz": "Aeroport xavfsizlik tekshiruvidan o'tganingizdan so'ng jo'nash zaliga o'ting."
              }
            ]
          },
          {
            "id": "flt-2",
            "word": "Boarding pass",
            "pos": "noun",
            "phonetic": "/ˈbɔːdɪŋ pɑːs/",
            "uzbek": "Samolyotga chiqish taloni",
            "definition": "A pass that gives permission to board a plane.",
            "examples": [
              {
                "en": "Download your digital boarding pass directly to your smartphone.",
                "uz": "Raqamli samolyotga chiqish talonini to'g'ridan-to'g'ri smartfoningizga yuklab oling."
              },
              {
                "en": "Show your boarding pass and national passport to the gate agent.",
                "uz": "Chiqish eshigi xodimiga samolyotga chiqish taloni va pasportingizni ko'rsating."
              },
              {
                "en": "Your assigned seat number is clearly printed on the top of the boarding pass.",
                "uz": "Sizga ajratilgan o'rindiq raqami chiqish talonining yuqori qismida aniq bosilgan."
              }
            ]
          },
          {
            "id": "flt-3",
            "word": "Luggage allowance",
            "pos": "noun",
            "phonetic": "/ˈlʌɡɪdʒ əˌlaʊəns/",
            "uzbek": "Yuk tashish me'yori",
            "definition": "The weight of luggage a passenger can carry without extra charge.",
            "examples": [
              {
                "en": "Economy class passengers have a checked luggage allowance of twenty-three kilograms.",
                "uz": "Ekonom-klass yo'lovchilari uchun yuk tashish me'yori yigirma uch kilogrammni tashkil etadi."
              },
              {
                "en": "We had to pay an excess fee because our suitcase exceeded the luggage allowance.",
                "uz": "Chamadonimiz me'yordan oshib ketgani sababli ortiqcha yuk to'lovini to'lashimizga to'g'ri keldi."
              },
              {
                "en": "Always verify the hand luggage allowance before packing your carry-on bag.",
                "uz": "Qo'l yukingizni joylashdan oldin doimo ruxsat etilgan o'lcham va og'irlikni tekshirib oling."
              }
            ]
          },
          {
            "id": "flt-4",
            "word": "Customs",
            "pos": "noun",
            "phonetic": "/ˈkʌstəmz/",
            "uzbek": "Bojxona",
            "definition": "The official department that administers and collects duties on imported goods.",
            "examples": [
              {
                "en": "International travelers must clear customs before exiting the arrivals hall.",
                "uz": "Xalqaro sayohatchilar kutib olish zalidan chiqishdan oldin bojxona nazoratidan o'tishlari kerak."
              },
              {
                "en": "Declare any high-value commercial items to the customs officer.",
                "uz": "Har qanday qimmatbaho tijoriy tovarlarni bojxona xodimiga deklaratsiya qiling."
              },
              {
                "en": "Customs officials use sniffer dogs to detect banned or hazardous substances.",
                "uz": "Bojxona inspektorlari taqiqlangan moddalarni aniqlash uchun xizmat itlaridan foydalanadilar."
              }
            ]
          },
          {
            "id": "flt-5",
            "word": "Destination",
            "pos": "noun",
            "phonetic": "/ˌdestɪˈneɪʃn/",
            "uzbek": "Borish manzili",
            "definition": "The place to which someone or something is going or being sent.",
            "examples": [
              {
                "en": "Samarkand is a world-renowned tourist destination along the historic Silk Road.",
                "uz": "Samarqand — tarixiy Buyuk Ipak yo'lidagi jahonga mashhur sayyohlik maskanidir."
              },
              {
                "en": "The high-speed train reached its final destination right on schedule.",
                "uz": "Tezyurar poyezd o'zining so'nggi manziliga belgilangan jadval bo'yicha yetib keldi."
              },
              {
                "en": "Pack appropriate clothing tailored to the climate of your holiday destination.",
                "uz": "Ta'tildagi borish manzilingiz iqlimiga mos kiyimlarni jamlab oling."
              }
            ]
          },
          {
            "id": "flt-6",
            "word": "Terminal",
            "pos": "noun",
            "phonetic": "/ˈtɜːmɪnl/",
            "uzbek": "Aeroport terminali",
            "definition": "A designated airport building where passengers embark and disembark.",
            "examples": [
              {
                "en": "International flights depart from Terminal 2 of the metropolitan airport.",
                "uz": "Xalqaro reyslar poytaxt aeroportining 2-terminalidan havoga ko'tariladi."
              },
              {
                "en": "A free shuttle train connects travelers between the various airport terminals.",
                "uz": "Bepul avtobus-poyezd yo'lovchilarni aeroport terminallari o'rtasida tashiydi."
              },
              {
                "en": "The modern airport terminal offers duty-free shops, cafes, and quiet lounges.",
                "uz": "Zamonaviy aeroport terminali bojsiz do'konlar, kafelar va sokin dam olish zallarini taklif etadi."
              }
            ]
          },
          {
            "id": "flt-7",
            "word": "Delay",
            "pos": "noun",
            "phonetic": "/dɪˈleɪ/",
            "uzbek": "Kechikish",
            "definition": "A period of time by which something is late or postponed.",
            "examples": [
              {
                "en": "We experienced a two-hour flight delay due to severe thunderstorm conditions.",
                "uz": "Kuchli momaqaldiroq tufayli parvozimizda ikki soatlik kechikish yuz berdi."
              },
              {
                "en": "The airline apologized for the delay and provided complimentary snack vouchers.",
                "uz": "Aviakompaniya kechikish uchun uzr so'rab, bepul yegulik vaucherlarini tarqatdi."
              },
              {
                "en": "Passengers should allow extra travel time to avoid delays on busy highways.",
                "uz": "Gavjum yo'llardagi tirbandlik sababli kechikishlarning oldini olish uchun yo'lga erta chiqing."
              }
            ]
          },
          {
            "id": "flt-8",
            "word": "Passenger",
            "pos": "noun",
            "phonetic": "/ˈpæsɪndʒə/",
            "uzbek": "Yo'lovchi",
            "definition": "A traveler on a public or private conveyance other than the driver or crew.",
            "examples": [
              {
                "en": "All passengers must remain securely seated with their seatbelts fastened.",
                "uz": "Barcha yo'lovchilar xavfsizlik kamarlarini taqqan holda o'z joylarida o'tirishlari shart."
              },
              {
                "en": "The high-speed express train can comfortably carry over six hundred passengers.",
                "uz": "Tezyurar ekspress poyezdi olti yuzdan ortiq yo'lovchini qulay tashiydi."
              },
              {
                "en": "Cabin crew attended to passengers' requests throughout the long-haul flight.",
                "uz": "Samolyot bort kuzatuvchilari uzoq parvoz davomida yo'lovchilarning istaklariga e'tibor qaratdilar."
              }
            ]
          },
          {
            "id": "flt-9",
            "word": "Excursion",
            "pos": "noun",
            "phonetic": "/ɪkˈskɜːʃn/",
            "uzbek": "Ekskursiya, sayohat",
            "definition": "A short journey or trip, especially one taken as a leisure activity.",
            "examples": [
              {
                "en": "The tour company organized an exciting weekend excursion to historic Bukhara.",
                "uz": "Sayohat agentligi tarixiy Buxoroga ajoyib dam olish kunlari ekskursiyasini tashkil qildi."
              },
              {
                "en": "Students went on a guided botanical excursion in the mountain foothills.",
                "uz": "Talabalar tog' etaklarida yo'lboshchi hamrohligida botanik ekskursiyaga chiqishdi."
              },
              {
                "en": "The day-trip excursion includes return coach transport and museum admission fees.",
                "uz": "Bir kunlik sayohatga borish-kelish transporti va muzeyga kirish chiptalari kiradi."
              }
            ]
          },
          {
            "id": "flt-10",
            "word": "Sightseeing",
            "pos": "noun",
            "phonetic": "/ˈsaɪtsiːɪŋ/",
            "uzbek": "Diqqatga sazovor joylarni tomosha qilish",
            "definition": "The activity of visiting places of interest in a particular location.",
            "examples": [
              {
                "en": "We spent the entire sunny morning sightseeing around the historic old town.",
                "uz": "Biz butun quyoshli tongni qadimiy eski shahar bo'ylab diqqatga sazovor joylarni tomosha qilish bilan o'tkazdik."
              },
              {
                "en": "Open-top double-decker buses are ideal for city sightseeing tours.",
                "uz": "Tomi ochiq ikki qavatli avtobuslar shahar bo'ylab tomosha sayohatlari uchun ayni muddao."
              },
              {
                "en": "After two days of intensive sightseeing, we spent an afternoon relaxing by the pool.",
                "uz": "Ikki kunlik qizg'in sayohatdan so'ng biz tushdan keyin basseyn bo'yida dam oldik."
              }
            ]
          }
        ]
      },
      {
        "id": "b1-u6-communication",
        "unitNumber": 7,
        "title": "Unit 07: Communication & Social Life (Muloqot va ijtimoiy hayot)",
        "category": "Communication",
        "icon": "fa-mobile-screen",
        "color": "from-blue-500 to-indigo-700",
        "description": "Telefon muloqoti, xabarlar, tarmoqlar va messenjerlar",
        "words": [
          {
            "id": "com-1",
            "word": "Voicemail",
            "pos": "noun",
            "phonetic": "/ˈvɔɪsmeɪl/",
            "uzbek": "Ovozli xabar",
            "definition": "A centralized electronic system which can store messages from telephone callers.",
            "examples": [
              {
                "en": "I was unable to answer your call, so please leave a message on my voicemail.",
                "uz": "Qo'ng'irog'ingizga javob bera olmadim, iltimos, ovozli xabarlarimga xabar qoldiring."
              },
              {
                "en": "She listened to her voicemail messages as soon as she turned on her phone.",
                "uz": "U telefonini yoqishi bilanoq kelgan ovozli xabarlarini tinglab chiqdi."
              },
              {
                "en": "His cheerful voicemail greeting instructed callers to reach him via email.",
                "uz": "Uning xushchaqchaq ovozli tabrigi qo'ng'iroq qiluvchilarga elektron pochta orqali bog'lanishni eslatardi."
              }
            ]
          },
          {
            "id": "com-2",
            "word": "Ringtone",
            "pos": "noun",
            "phonetic": "/ˈrɪŋtəʊn/",
            "uzbek": "Qo'ng'iroq ohangi (ringtone)",
            "definition": "A sound made by a mobile phone to alert the incoming caller.",
            "examples": [
              {
                "en": "He set his favourite acoustic guitar melody as his default phone ringtone.",
                "uz": "U sevimli akustik gitara kuyni telefonining asosiy qo'ng'iroq ohangi qilib belgiladi."
              },
              {
                "en": "Please switch your mobile to silent so your loud ringtone does not disrupt the class.",
                "uz": "Baland qo'ng'iroq ohangingiz darsni buzmasligi uchun telefoningizni ovozsiz rejimga o'tkazing."
              },
              {
                "en": "Her phone began playing a distinctive classical ringtone in the quiet library.",
                "uz": "Sokin kutubxonada uning telefoni o'ziga xos mumtoz ohangda jiringlay boshladi."
              }
            ]
          },
          {
            "id": "com-3",
            "word": "Network",
            "pos": "noun",
            "phonetic": "/ˈnetwɜːk/",
            "uzbek": "Mobil tarmoq, internet tarmog'i",
            "definition": "A system of interconnected electronic components or computers.",
            "examples": [
              {
                "en": "I had no mobile network coverage while hiking deep in the remote valley.",
                "uz": "Uzoq tog' vodiysida sayr qilayotganimda hech qanday mobil aloqa tarmog'i yo'q edi."
              },
              {
                "en": "The telecommunications company is upgrading its high-speed 5G network nationwide.",
                "uz": "Telekommunikatsiya kompaniyasi mamlakat bo'ylab tezkor 5G tarmog'ini kengaytirmoqda."
              },
              {
                "en": "A secure local area network connects all office computers to the shared printer.",
                "uz": "Xavfsiz mahalliy tarmoq barcha ofis kompyuterlarini umumiy printerga ulab turadi."
              }
            ]
          },
          {
            "id": "com-4",
            "word": "Attachment",
            "pos": "noun",
            "phonetic": "/əˈtætʃmənt/",
            "uzbek": "Biriktirilgan fayl (attachment)",
            "definition": "A computer file appended to an email.",
            "examples": [
              {
                "en": "Please find attached the signed contract document as a PDF attachment.",
                "uz": "Imzolangan shartnoma hujjatini PDF shaklida biriktirilgan fayl sifatida qabul qiling."
              },
              {
                "en": "Be careful when opening email attachments from unknown external senders.",
                "uz": "Noma'lum jo'natuvchilardan kelgan biriktirilgan fayllarni ochishda juda ehtiyot bo'ling."
              },
              {
                "en": "The high-resolution photo file was too large to send as a single attachment.",
                "uz": "Yuqori sifatli rasm fayli bitta fayl sifatida yuborish uchun haddan tashqari katta edi."
              }
            ]
          },
          {
            "id": "com-5",
            "word": "Browse",
            "pos": "verb",
            "phonetic": "/braʊz/",
            "uzbek": "Ko'rib chiqmoq, internetda axtarmoq",
            "definition": "To survey goods or scan through web pages.",
            "examples": [
              {
                "en": "I spent an hour browsing educational language learning websites online.",
                "uz": "Men internetda tillarni o'rganishga oid ta'limiy saytlarni ko'rib chiqishga bir soat sarfladim."
              },
              {
                "en": "Customers are welcome to browse the bookstore shelves at their leisure.",
                "uz": "Xaridorlar kitob do'koni tokchalarini bemalol ko'zdan kechirishlari mumkin."
              },
              {
                "en": "Clear your web browser cache regularly to improve internet loading speeds.",
                "uz": "Internet ochilish tezligini oshirish uchun brauzeringiz xotirasini muntazam tozalab turing."
              }
            ]
          },
          {
            "id": "com-6",
            "word": "Socialize",
            "pos": "verb",
            "phonetic": "/ˈsəʊʃəlaɪz/",
            "uzbek": "Muloqot qilmoq, do'stlashmoq",
            "definition": "To mix socially with others.",
            "examples": [
              {
                "en": "University campuses provide fantastic opportunities to socialize and meet new friends.",
                "uz": "Universitet kampusi muloqot qilish va yangi do'stlar orttirish uchun ajoyib imkoniyatlar yaratadi."
              },
              {
                "en": "He enjoys socializing with colleagues at dinner after a productive work week.",
                "uz": "Samarali ish haftasidan so'ng u kechki ovqatda hamkasblari bilan muloqot qilishni yoqtiradi."
              },
              {
                "en": "Social media platforms enable people across continents to stay connected and socialize.",
                "uz": "Ijtimoiy tarmoqlar turli qit'alardagi insonlarga aloqada qolish va do'stona muloqot qilish imkonini beradi."
              }
            ]
          },
          {
            "id": "com-7",
            "word": "Connect",
            "pos": "verb",
            "phonetic": "/kəˈnekt/",
            "uzbek": "Ulanmoq, bog'lanmoq",
            "definition": "To join together so as to provide access and communication.",
            "examples": [
              {
                "en": "Enter the secure wireless password to connect your laptop to the internet.",
                "uz": "Noutbukingizni internetga ulash uchun maxfiy simsiz parolni kiriting."
              },
              {
                "en": "High-speed rail connects the capital city with historic regional centers.",
                "uz": "Tezyurar temir yo'l poytaxtni tarixiy mintaqaviy markazlar bilan bog'laydi."
              },
              {
                "en": "The video conference call connected team members across four different time zones.",
                "uz": "Videoanjuman to'rt xil vaqt mintaqasidagi jamoa a'zolarini o'zaro bog'ladi."
              }
            ]
          },
          {
            "id": "com-8",
            "word": "Notification",
            "pos": "noun",
            "phonetic": "/ˌnəʊtɪfɪˈkeɪʃn/",
            "uzbek": "Xabarnoma, bildirishnoma",
            "definition": "An official formal announcement or mobile alert.",
            "examples": [
              {
                "en": "You will receive a mobile push notification when your order is ready for collection.",
                "uz": "Buyurtmangiz olib ketishga tayyor bo'lganda sizga mobil bildirishnoma yuboriladi."
              },
              {
                "en": "He turned off non-essential smartphone notifications to maintain deep focus while studying.",
                "uz": "O'qish paytida diqqatini jamlash uchun u keraksiz smartfon bildirishnomalarini o'chirib qo'ydi."
              },
              {
                "en": "The banking application sent an instant security notification regarding the payment.",
                "uz": "Bank ilovasi to'lov yuzasidan zudlik bilan xavfsizlik xabarnomasini yubordi."
              }
            ]
          },
          {
            "id": "com-9",
            "word": "Message",
            "pos": "noun",
            "phonetic": "/ˈmesɪdʒ/",
            "uzbek": "Xabar, maktub",
            "definition": "A verbal, written, or recorded communication sent to a recipient.",
            "examples": [
              {
                "en": "Send me a quick text message as soon as your train arrives at the station.",
                "uz": "Poyezdingiz vokzalga yetib kelishi bilanoq menga qisqa xabar yuboring."
              },
              {
                "en": "She left an urgent voicemail message asking her lawyer to call back immediately.",
                "uz": "U advokatidan darhol qayta qo'ng'iroq qilishni so'rab shoshilinch xabar qoldirdi."
              },
              {
                "en": "The motivational speaker delivered an inspiring message about continuous perseverance.",
                "uz": "Motivatsion ma'ruzachi tinimsiz matonat haqida ilhomlantiruvchi murojaat qildi."
              }
            ]
          },
          {
            "id": "com-10",
            "word": "Provider",
            "pos": "noun",
            "phonetic": "/prəˈvaɪdə/",
            "uzbek": "Provayder, xizmat ko'rsatuvchi",
            "definition": "A company that provides a service, such as internet or telecommunications.",
            "examples": [
              {
                "en": "We switched to a faster optical fibre internet service provider last month.",
                "uz": "O'tgan oyda biz tezroq optik tolali internet provayderiga o'tdik."
              },
              {
                "en": "The mobile telecommunications provider offers unlimited data streaming packages.",
                "uz": "Mobil aloqa provayderi cheksiz internet oqimi paketlarini taklif qilmoqda."
              },
              {
                "en": "Choose an established energy provider that supplies electricity from clean renewable sources.",
                "uz": "Toza qayta tiklanuvchi manbalardan elektr yetkazib beruvchi ishonchli provayderni tanlang."
              }
            ]
          }
        ]
      },
      {
        "id": "b1-u7-geography",
        "unitNumber": 8,
        "title": "Unit 08: Physical World & Geography (Geografiya va dunyo tabiati)",
        "category": "World & Geography",
        "icon": "fa-mountain-sun",
        "color": "from-teal-500 to-green-700",
        "description": "Qit'alar, daryolar, muzliklar va tabiiy relyef shakllari",
        "words": [
          {
            "id": "geo-1",
            "word": "Continent",
            "pos": "noun",
            "phonetic": "/ˈkɒntɪnənt/",
            "uzbek": "Qit'a, materik",
            "definition": "Any of the world's main continuous expanses of land.",
            "examples": [
              {
                "en": "Asia is the largest and most populous continent on planet Earth.",
                "uz": "Osiyo — Yer yuzidagi eng katta va aholisi eng ko'p qit'adir."
              },
              {
                "en": "Migratory birds travel thousands of kilometres across continents every autumn.",
                "uz": "Ko'chmanchi qushlar har kuzda qit'alar osha minglab kilometr yo'l bosib o'tadi."
              },
              {
                "en": "The Antarctic continent is almost entirely covered by a permanent ice sheet.",
                "uz": "Antarktida qit'asi deyarli butunlay doimiy muz qatlami bilan qoplangan."
              }
            ]
          },
          {
            "id": "geo-2",
            "word": "Peninsula",
            "pos": "noun",
            "phonetic": "/pəˈnɪnsjələ/",
            "uzbek": "Yarimorol",
            "definition": "A piece of land almost surrounded by water or projecting out into a body of water.",
            "examples": [
              {
                "en": "Italy is a distinctive boot-shaped peninsula jutting into the Mediterranean Sea.",
                "uz": "Italiya — O'rta yer dengiziga tutashgan o'ziga xos etiksimon yarimoroldir."
              },
              {
                "en": "Rocky cliffs line the perimeter of the windy coastal peninsula.",
                "uz": "Shamolli dengizbo'yi yarimorolining chetlarini qoyali tik qiyaliklar o'rab turadi."
              },
              {
                "en": "The narrow peninsula is connected to the mainland by a thin strip of sand.",
                "uz": "Tor yarimorol asosiy quruqlik bilan yupqa qum chizig'i orqali bog'langan."
              }
            ]
          },
          {
            "id": "geo-3",
            "word": "Glacier",
            "pos": "noun",
            "phonetic": "/ˈɡlæsiə/",
            "uzbek": "Muzlik",
            "definition": "A slowly moving mass or river of ice formed by the accumulation and compaction of snow.",
            "examples": [
              {
                "en": "Centuries-old mountain glaciers are retreating rapidly due to global warming.",
                "uz": "Asrlar davomida shakllangan tog' muzliklari global isish tufayli jadal erib bormoqda."
              },
              {
                "en": "The massive polar glacier slowly calved towering icebergs into the chilly ocean.",
                "uz": "Ulkan qutb muzligi sovuq okeanga mahobatli aysberglarni asta ajratib chiqardi."
              },
              {
                "en": "Mountain glaciers serve as vital freshwater reservoirs feeding major river valleys.",
                "uz": "Tog' muzliklari katta daryo vodiylarini ta'minlovchi hayotiy toza suv ombori hisoblanadi."
              }
            ]
          },
          {
            "id": "geo-4",
            "word": "Desert",
            "pos": "noun",
            "phonetic": "/ˈdezət/",
            "uzbek": "Cho'l, sahro",
            "definition": "A dry, barren area of land, especially one covered with sand, with little vegetation.",
            "examples": [
              {
                "en": "The Kyzylkum is an expansive desert region situated between two historic rivers.",
                "uz": "Qizilqum — ikki tarixiy daryo oralig'ida joylashgan keng sahro hududidir."
              },
              {
                "en": "Camels are marvelously adapted to survive long journeys across the arid desert.",
                "uz": "Tuyalar qurg'oqchil sahro bo'ylab uzoq safarlarga hayratlanarli darajada moslashgan."
              },
              {
                "en": "Temperatures in the sandy desert drop dramatically once the sun dips below the horizon.",
                "uz": "Quyosh ufqqa botishi bilanoq qumli cho'lda havo harorati keskin pasayib ketadi."
              }
            ]
          },
          {
            "id": "geo-5",
            "word": "Ocean",
            "pos": "noun",
            "phonetic": "/ˈəʊʃn/",
            "uzbek": "Okean",
            "definition": "A very large expanse of sea, in particular each of the main areas into which the sea is divided.",
            "examples": [
              {
                "en": "The Pacific Ocean covers more than thirty percent of the Earth's total surface.",
                "uz": "Tinch okeani Yer yuzasining o'ttiz foizdan ortiq qismini egallaydi."
              },
              {
                "en": "Deep ocean trenches contain mysterious marine creatures that produce biological light.",
                "uz": "Chuqur okean botiqlari biologik nur chiqaruvchi sirli dengiz jonivorlariga boy."
              },
              {
                "en": "Protecting the world's oceans from chemical and plastic pollution is vital for our climate.",
                "uz": "Dunyo okeanlarini kimyoviy va plastik ifloslanishdan asrash iqlimimiz uchun hayotiy ahamiyatga ega."
              }
            ]
          },
          {
            "id": "geo-6",
            "word": "Archipelago",
            "pos": "noun",
            "phonetic": "/ˌɑːkɪˈpeləɡəʊ/",
            "uzbek": "Arxipelag (orollar zanjiri)",
            "definition": "An extensive group of islands.",
            "examples": [
              {
                "en": "Indonesia is the largest archipelago in the world, consisting of over seventeen thousand islands.",
                "uz": "Indoneziya — o'n yetti mingdan ortiq orollardan tashkil topgan dunyodagi eng katta arxipelagdir."
              },
              {
                "en": "The volcanic archipelago boasts unique species that evolved in complete isolation.",
                "uz": "Vulqonli orollar zanjiri butunlay ajratilgan muhitda rivojlangan noyob turlar bilan faxrlanadi."
              },
              {
                "en": "Small ferry boats provide essential transport links between islands across the archipelago.",
                "uz": "Kichik paromlar butun arxipelagdagi orollar o'rtasida muhim transport aloqasini ta'minlaydi."
              }
            ]
          },
          {
            "id": "geo-7",
            "word": "Rainforest",
            "pos": "noun",
            "phonetic": "/ˈreɪnfɒrɪst/",
            "uzbek": "Yomg'ir o'rmoni, tropik o'rmon",
            "definition": "A luxuriant, dense forest rich in biodiversity, found typically in tropical areas.",
            "examples": [
              {
                "en": "The Amazon rainforest produces a significant portion of the planet's atmospheric oxygen.",
                "uz": "Amazonka yomg'ir o'rmonlari sayyoramiz atmosferasidagi kislorodning salmoqli qismini yetkazib beradi."
              },
              {
                "en": "Thousands of medicinal plants remain undiscovered within dense tropical rainforests.",
                "uz": "Qalin tropik o'rmonlarda minglab shifobaxsh o'simliklar hali ham kashf etilmagan holda turibdi."
              },
              {
                "en": "Deforestation in the rainforest threatens countless endangered bird and mammal species.",
                "uz": "Yomg'ir o'rmonlarining kesilishi son-sanoqsiz yo'qolib borayotgan qushlar va sutemizuvchilarga xavf soladi."
              }
            ]
          },
          {
            "id": "geo-8",
            "word": "Volcano",
            "pos": "noun",
            "phonetic": "/vɒlˈkeɪnəʊ/",
            "uzbek": "Vulqon",
            "definition": "A mountain or hill having a crater through which lava and rock fragments are erupted.",
            "examples": [
              {
                "en": "Mount Fuji is an iconic dormant volcano admired for its symmetrical snowy cone.",
                "uz": "Fudzi tog'i o'zining qorli simmetrik shakli bilan hayratga soluvchi mashhur uxlayotgan vulqondir."
              },
              {
                "en": "The active volcano erupted violently, sending massive ash clouds high into the stratosphere.",
                "uz": "Harakatdagi vulqon kuchli otilib, stratosferaga ulkan kul bulutlarini tarqatdi."
              },
              {
                "en": "Volcanic soil is exceptionally rich in minerals, making surrounding farmlands very fertile.",
                "uz": "Vulqon tuprog'i minerallarga nihoyatda boy bo'lib, atrofidagi ekin maydonlarini juda hosildor qiladi."
              }
            ]
          },
          {
            "id": "geo-9",
            "word": "Horizon",
            "pos": "noun",
            "phonetic": "/həˈraɪzn/",
            "uzbek": "Ufq",
            "definition": "The line at which the earth's surface and the sky appear to meet.",
            "examples": [
              {
                "en": "The golden sun sank slowly below the oceanic horizon at twilight.",
                "uz": "Oltinrang quyosh oqshom paytida asta-sekin okean ufqi ostiga botdi."
              },
              {
                "en": "Sailing toward the open sea, the mountains gradually faded on the distant horizon.",
                "uz": "Ochiq dengiz tomon suzar ekanmiz, tog'lar olis ufqda asta-sekin ko'rinmay ketdi."
              },
              {
                "en": "Studying international languages broadens your intellectual and cultural horizons.",
                "uz": "Xorijiy tillarni o'rganish sizning aqliy va madaniy ufqlaringizni kengaytiradi."
              }
            ]
          },
          {
            "id": "geo-10",
            "word": "Plateau",
            "pos": "noun",
            "phonetic": "/ˈplætəʊ/",
            "uzbek": "Yassitog'lik, plato",
            "definition": "An area of fairly level high ground.",
            "examples": [
              {
                "en": "The Ustyurt Plateau is an immense, desolate limestone wilderness in western Uzbekistan.",
                "uz": "Ustyurt platosi — g'arbiy O'zbekistondagi keng va kimsasiz ohaktoshli cho'l hududidir."
              },
              {
                "en": "Nomadic herders moved their sheep across the high windswept mountain plateau.",
                "uz": "Ko'chmanchi cho'ponlar suruvlarini baland shamolli tog' platosi bo'ylab haydab o'tdilar."
              },
              {
                "en": "Sales figures reached a high plateau after six consecutive months of rapid growth.",
                "uz": "Savdo ko'rsatkichlari olti oylik tezkor o'sishdan so'ng yuqori barqaror bosqichga yetdi."
              }
            ]
          }
        ]
      },
      {
        "id": "b1-u9-crime",
        "unitNumber": 9,
        "title": "Unit 09: Crime, Law & Justice (Jinoyatchilik va qonun)",
        "category": "Law & Society",
        "icon": "fa-gavel",
        "color": "from-slate-600 to-indigo-800",
        "description": "Sud jarayonlari, dalillar, politsiya va huquqbuzarliklar",
        "words": [
          {
            "id": "crm-1",
            "word": "Burglary",
            "pos": "noun",
            "phonetic": "/ˈbɜːɡləri/",
            "uzbek": "O'g'rilik (uyga bostirib kirish)",
            "definition": "Entry into a building illegally with intent to commit a crime, especially theft.",
            "examples": [
              {
                "en": "The homeowners installed a modern alarm system following an attempted burglary.",
                "uz": "Xonadon egalari uyga o'g'ri tushishiga urinishdan so'ng zamonaviy signalizatsiya tizimini o'rnatdilar."
              },
              {
                "en": "Police detectives investigated the overnight burglary at the downtown electronics store.",
                "uz": "Politsiya izquvarlari markazdagi elektrotexnika do'konida tunda sodir bo'lgan o'g'rilikni tekshirdilar."
              },
              {
                "en": "He was convicted of armed burglary and sentenced to five years in prison.",
                "uz": "U qurolli o'g'rilikda aybdor deb topilib, besh yilga ozodlikdan mahrum etildi."
              }
            ]
          },
          {
            "id": "crm-2",
            "word": "Witness",
            "pos": "noun",
            "phonetic": "/ˈwɪtnəs/",
            "uzbek": "Guvoh",
            "definition": "A person who sees an event, typically a crime or accident, take place.",
            "examples": [
              {
                "en": "Eyewitnesses reported seeing a dark sedan fleeing the accident scene at high speed.",
                "uz": "Voqea guvohlari to'q rangli sedan hodisa joyidan katta tezlikda qochib ketganini bildirishdi."
              },
              {
                "en": "The credible witness swore an oath to tell the whole truth in the courtroom.",
                "uz": "Ishonchli guvoh sud zalida faqat haqiqatni aytishga qasamyod qildi."
              },
              {
                "en": "Police appeal for any potential witnesses to come forward with information.",
                "uz": "Politsiya har qanday ehtimoliy guvohlarni ma'lumot berishga chaqiradi."
              }
            ]
          },
          {
            "id": "crm-3",
            "word": "Sentence",
            "pos": "noun",
            "phonetic": "/ˈsentəns/",
            "uzbek": "Jazo hukmi",
            "definition": "The punishment assigned to a convicted criminal by a court.",
            "examples": [
              {
                "en": "The convicted embezzler received a severe seven-year custodial sentence.",
                "uz": "Mablag'larni o'zlashtirgan shaxs yetti yillik qamoq jazosi hukmini oldi."
              },
              {
                "en": "The judge reduced the defendant's prison sentence due to genuine remorse.",
                "uz": "Sudya ayblanuvchining chin dildan pushaymon bo'lgani sababli qamoq jazosini yengillatdi."
              },
              {
                "en": "Community service was handed down as an alternative rehabilitative sentence.",
                "uz": "Jazo chorasi sifatida jamoat foydali mehnatiga jalb qilish hukmi chiqarildi."
              }
            ]
          },
          {
            "id": "crm-4",
            "word": "Court",
            "pos": "noun",
            "phonetic": "/kɔːt/",
            "uzbek": "Sud (muassasa yoki bino)",
            "definition": "A tribunal presided over by a judge in civil and criminal cases.",
            "examples": [
              {
                "en": "The high-profile trial took place inside the central metropolitan supreme court.",
                "uz": "Katta shov-shuvli sud jarayoni poytaxt markaziy oliy sud binosida bo'lib o'tdi."
              },
              {
                "en": "Both legal parties presented their factual evidence before the court of appeals.",
                "uz": "Ikkala huquqiy tomon ham o'z moddiy dalillarini apellyatsiya sudi oldida taqdim etdilar."
              },
              {
                "en": "You may be held in contempt of court if you interrupt judicial proceedings.",
                "uz": "Sud majlisini to'xtatib qo'ysangiz, sudga nisbatan hurmatsizlik uchun javobgarlikka tortilasiz."
              }
            ]
          },
          {
            "id": "crm-5",
            "word": "Evidence",
            "pos": "noun",
            "phonetic": "/ˈevɪdəns/",
            "uzbek": "Ashyoviy dalil, isbot",
            "definition": "The available body of facts or information indicating whether a belief or proposition is true.",
            "examples": [
              {
                "en": "Forensic investigators collected fingerprint evidence from the broken windowpane.",
                "uz": "Kriminalistlar singan deraza oynasidan barmoq izi dalillarini yig'ib oldilar."
              },
              {
                "en": "Without concrete physical evidence, the prosecutor had to drop all criminal charges.",
                "uz": "Aniq moddiy dalillarsiz prokuror barcha jinoiy ayblovlarni bekor qilishga majbur bo'ldi."
              },
              {
                "en": "Digital surveillance camera footage provided indisputable evidence of the suspect's identity.",
                "uz": "Raqamli kuzatuv kamerasi yozuvi gumonlanuvchining shaxsiga oid inkor etib bo'lmas dalilni taqdim etdi."
              }
            ]
          },
          {
            "id": "crm-6",
            "word": "Suspect",
            "pos": "noun",
            "phonetic": "/ˈsʌspekt/",
            "uzbek": "Gumonlanuvchi",
            "definition": "A person thought to be guilty of a crime or offence.",
            "examples": [
              {
                "en": "Police detectives interrogated the prime suspect for four consecutive hours.",
                "uz": "Politsiya tergovchilari asosiy gumonlanuvchini ketma-ket to'rt soat so'roq qildilar."
              },
              {
                "en": "The suspect matched the detailed physical description provided by eyewitnesses.",
                "uz": "Gumonlanuvchi guvohlar bergan batafsil tashqi ko'rinish tavsifiga to'liq to'g'ri keldi."
              },
              {
                "en": "Officers placed the fleeing robbery suspect under arrest near the train station.",
                "uz": "Xodimlar qochayotgan talonchi gumondorni vokzal yaqinida hibsga oldilar."
              }
            ]
          },
          {
            "id": "crm-7",
            "word": "Arrest",
            "pos": "noun",
            "phonetic": "/əˈrest/",
            "uzbek": "Hibsga olish, qo'lga olish",
            "definition": "The action of seizing someone to take them into custody.",
            "examples": [
              {
                "en": "The police made three swift arrests following the bank robbery investigation.",
                "uz": "Bank o'g'irligi surishtiruvidan so'ng politsiya uch kishini zudlik bilan hibsga oldi."
              },
              {
                "en": "A police officer must state the official reasons at the moment of an arrest.",
                "uz": "Politsiya xodimi qo'lga olish paytida rasmiy sabablarni ma'lum qilishi shart."
              },
              {
                "en": "The international fugitive resisted arrest and attempted to escape through the alley.",
                "uz": "Xalqaro qidiruvdagi jinoyatchi hibsga qarshilik ko'rsatib, tor ko'cha orqali qochishga urindi."
              }
            ]
          },
          {
            "id": "crm-8",
            "word": "Guilt",
            "pos": "noun",
            "phonetic": "/ɡɪlt/",
            "uzbek": "Aybdorlik, ayb",
            "definition": "The fact of having committed a specified or implied offence or crime.",
            "examples": [
              {
                "en": "The prosecution conclusively proved the defendant's guilt beyond any reasonable doubt.",
                "uz": "Prokuratura ayblanuvchining aybini hech qanday shubhasiz to'liq isbotlab berdi."
              },
              {
                "en": "He was overwhelmed by intense feelings of personal guilt following his mistake.",
                "uz": "Xatosidan keyin u chuqur ichki aybdorlik hissi ostida ezildi."
              },
              {
                "en": "The jury deliberated for two days before reaching a unanimous verdict of guilt.",
                "uz": "Hakamlar hay'ati yakdil aybdorlik hukmini chiqarishdan oldin ikki kun muhokama qildi."
              }
            ]
          },
          {
            "id": "crm-9",
            "word": "Punishment",
            "pos": "noun",
            "phonetic": "/ˈpʌnɪʃmənt/",
            "uzbek": "Jazo",
            "definition": "The infliction or imposition of a penalty as retribution for an offence.",
            "examples": [
              {
                "en": "The judge declared that the punishment should strictly fit the severity of the crime.",
                "uz": "Sudya beriladigan jazo jinoyatning og'irlik darajasiga to'liq mos kelishi kerakligini ta'kidladi."
              },
              {
                "en": "Modern criminal justice systems focus on rehabilitation rather than purely harsh punishment.",
                "uz": "Zamonaviy odil sudlov tizimlari faqat qattiq jazodan ko'ra insonni to'g'ri yo'lga qaytarishga e'tibor qaratadi."
              },
              {
                "en": "Financial penalties and community labour served as appropriate judicial punishments.",
                "uz": "Moliyaviy jarimalar va jamoat mehnati munosib huquqiy jazo vazifasini o'tadi."
              }
            ]
          },
          {
            "id": "crm-10",
            "word": "Judge",
            "pos": "noun",
            "phonetic": "/dʒʌdʒ/",
            "uzbek": "Sudya, qozi",
            "definition": "A public officer appointed to decide cases in a law court.",
            "examples": [
              {
                "en": "The impartial judge presided over the complex corporate fraud hearing.",
                "uz": "Xolis sudya murakkab korporativ firibgarlik ishi bo'yicha majlisni boshqarib bordi."
              },
              {
                "en": "Judges must uphold the constitution without any political or financial bias.",
                "uz": "Sudyalar hech qanday siyosiy yoki moliyaviy tarafkashliksiz konstitutsiyani himoya qilishlari shart."
              },
              {
                "en": "All attendees rose respectfully to their feet as the judge entered the courtroom.",
                "uz": "Sudya zalga kirib kelganida barcha ishtirokchilar hurmat bilan o'rinlaridan turdilar."
              }
            ]
          }
        ]
      },
      {
        "id": "b1-u10-politics",
        "unitNumber": 10,
        "title": "Unit 10: Politics & Contemporary Society (Siyosat va zamonaviy jamiyat)",
        "category": "Politics & Society",
        "icon": "fa-landmark",
        "color": "from-red-500 to-amber-700",
        "description": "Demokratiya, saylovlar, inson huquqlari va global masalalar",
        "words": [
          {
            "id": "pol-1",
            "word": "Democracy",
            "pos": "noun",
            "phonetic": "/dɪˈmɒkrəsi/",
            "uzbek": "Demokratiya, xalq hokimiyati",
            "definition": "A system of government by the whole population, typically through elected representatives.",
            "examples": [
              {
                "en": "Free and fair periodic elections form the bedrock foundation of modern democracy.",
                "uz": "Erkin va adolatli davriy saylovlar zamonaviy demokratiyaning mustahkam poydevorini tashkil etadi."
              },
              {
                "en": "Citizen participation in civic life is essential for maintaining a healthy democracy.",
                "uz": "Fuqarolarning ijtimoiy hayotda faol qatnashishi sog'lom demokratiyani ta'minlashda muhimdir."
              },
              {
                "en": "Freedom of speech and independent journalism are indispensable pillars of democracy.",
                "uz": "So'z erkinligi va mustaqil jurnalistika demokratiyaning ajralmas ustunlaridir."
              }
            ]
          },
          {
            "id": "pol-2",
            "word": "Government",
            "pos": "noun",
            "phonetic": "/ˈɡʌvənmənt/",
            "uzbek": "Hukumat",
            "definition": "The governing body of a nation, state, or community.",
            "examples": [
              {
                "en": "The national government announced major investments in healthcare infrastructure.",
                "uz": "Davlat hukumati sog'liqni saqlash infratuzilmasiga katta sarmoyalar kiritilishini e'lon qildi."
              },
              {
                "en": "Transparent government administration fosters deep trust between citizens and state.",
                "uz": "Shaffof davlat boshqaruvi fuqarolar va davlat o'rtasida mustahkam ishonch hosil qiladi."
              },
              {
                "en": "The regional government provides grants to encourage innovative agricultural startups.",
                "uz": "Mintaqaviy hukumat innovatsion qishloq xo'jaligi startaplarini rag'batlantirish uchun grantlar ajratmoqda."
              }
            ]
          },
          {
            "id": "pol-3",
            "word": "Parliament",
            "pos": "noun",
            "phonetic": "/ˈpɑːləmənt/",
            "uzbek": "Parlament, qonun chiqaruvchi organ",
            "definition": "The highest legislature, consisting of the sovereign and the elected assembly.",
            "examples": [
              {
                "en": "Members of parliament debated the comprehensive tax reform bill for several days.",
                "uz": "Parlament a'zolari keng qamrovli soliq islohoti qonun loyihasini bir necha kun muhokama qildilar."
              },
              {
                "en": "The newly elected national parliament held its opening legislative session yesterday.",
                "uz": "Yangi saylangan milliy parlament kecha o'zining ochilish qonunchilik yalpi majlisini o'tkazdi."
              },
              {
                "en": "Laws passed by parliament come into legal effect once officially signed and gazetted.",
                "uz": "Parlament qabul qilgan qonunlar rasmiy imzolanib e'lon qilingandan so'ng kuchga kiradi."
              }
            ]
          },
          {
            "id": "pol-4",
            "word": "Election",
            "pos": "noun",
            "phonetic": "/ɪˈlekʃn/",
            "uzbek": "Saylov",
            "definition": "A formal and organized choice by vote of a person for a political office.",
            "examples": [
              {
                "en": "Millions of eligible voters cast their ballots in the nationwide presidential election.",
                "uz": "Millionlab saylovchilar umumxalq prezidentlik saylovida o'z ovozlarini berdilar."
              },
              {
                "en": "International independent observers monitored the voting procedures during the election.",
                "uz": "Xalqaro mustaqil kuzatuvchilar saylov davomida ovoz berish jarayonlarini kuzatib bordilar."
              },
              {
                "en": "The candidate campaigned tirelessly across every rural district leading up to the election.",
                "uz": "Nomzod saylov arafasida har bir qishloq hududida tinimsiz tashviqot olib bordi."
              }
            ]
          },
          {
            "id": "pol-5",
            "word": "Citizen",
            "pos": "noun",
            "phonetic": "/ˈsɪtɪzn/",
            "uzbek": "Fuqaro",
            "definition": "A legally recognized subject or national of a state.",
            "examples": [
              {
                "en": "Every law-abiding citizen has the constitutional right to vote in free elections.",
                "uz": "Har bir qonunparvar fuqaro erkin saylovlarda ovoz berish konstitutsiyaviy huquqiga ega."
              },
              {
                "en": "Responsible citizens participate actively in local neighborhood volunteer cleanups.",
                "uz": "Mas'uliyatli fuqarolar mahalladagi ko'ngilli tozalik hasharlarida faol ishtirok etadilar."
              },
              {
                "en": "The state constitution guarantees equality of opportunity to every single citizen.",
                "uz": "Davlat konstitutsiyasi har bir fuqaro uchun teng imkoniyatlarni kafolatlaydi."
              }
            ]
          },
          {
            "id": "pol-6",
            "word": "Constitution",
            "pos": "noun",
            "phonetic": "/ˌkɒnstɪˈtjuːʃn/",
            "uzbek": "Konstitutsiya, bosh qomus",
            "definition": "A body of fundamental principles according to which a state is governed.",
            "examples": [
              {
                "en": "The national constitution protects fundamental civil rights and religious freedoms.",
                "uz": "Milliy konstitutsiya asosiy fuqarolik huquqlari va diniy erkinliklarni himoya qiladi."
              },
              {
                "en": "The supreme court reviewed the draft law to ensure it complied with the constitution.",
                "uz": "Oliy sud qonun loyihasining konstitutsiyaga to'liq mos kelishini ta'minlash uchun uni ko'rikdan o'tkazdi."
              },
              {
                "en": "Amending the country's constitution requires a nationwide democratic referendum.",
                "uz": "Mamlakat konstitutsiyasiga o'zgartirish kiritish umumxalq demokratik referendumini talab qiladi."
              }
            ]
          },
          {
            "id": "pol-7",
            "word": "Campaign",
            "pos": "noun",
            "phonetic": "/kæmˈpeɪn/",
            "uzbek": "Kampaniya, harakat",
            "definition": "An organized course of action to achieve a goal, especially political.",
            "examples": [
              {
                "en": "Environmental groups launched a public awareness campaign against plastic pollution.",
                "uz": "Ekologik guruhlar plastik ifloslanishga qarshi jamoatchilik xabardorlik kampaniyasini boshladilar."
              },
              {
                "en": "The candidate's grassroots election campaign gained massive popular momentum.",
                "uz": "Nomzodning xalq ichidagi saylovoldi kampaniyasi ulkan ommaviy qo'llab-quvvatlovga erishdi."
              },
              {
                "en": "A nationwide health campaign encouraged citizens to get vaccinated against the flu.",
                "uz": "Umummilliy salomatlik kampaniyasi fuqarolarni grippga qarshi emlanishga undadi."
              }
            ]
          },
          {
            "id": "pol-8",
            "word": "Peace",
            "pos": "noun",
            "phonetic": "/piːs/",
            "uzbek": "Tinchlik, osoyishtalik",
            "definition": "Freedom from disturbance; a state of harmony and order.",
            "examples": [
              {
                "en": "Diplomats worked tirelessly to negotiate a lasting peace treaty between the borders.",
                "uz": "Diplomatlar chegaralar o'rtasida mustahkam tinchlik shartnomasini tuzish uchun tinimsiz ish olib bordilar."
              },
              {
                "en": "Living in a peaceful society is the most fundamental prerequisite for human happiness.",
                "uz": "Osoyishta jamiyatda yashash — inson baxt-saodati uchun eng muhim birlamchi omildir."
              },
              {
                "en": "United Nations peacekeeping forces were deployed to maintain order and civilian safety.",
                "uz": "BMT tinchlikparvar kuchlari osoyishtalik va aholi xavfsizligini ta'minlash uchun joylashtirildi."
              }
            ]
          },
          {
            "id": "pol-9",
            "word": "International",
            "pos": "adjective",
            "phonetic": "/ˌɪntəˈnæʃnəl/",
            "uzbek": "Xalqaro",
            "definition": "Existing, occurring, or carried on between two or more nations.",
            "examples": [
              {
                "en": "The historic Silk Road connected international trading networks across continents.",
                "uz": "Tarixiy Buyuk Ipak yo'li qit'alar bo'ylab xalqaro savdo tarmoqlarini birlashtirgan."
              },
              {
                "en": "International treaties set rigorous environmental standards for global shipping.",
                "uz": "Xalqaro shartnomalar global dengiz yuk tashishi uchun qat'iy ekologik mezonlarni belgilaydi."
              },
              {
                "en": "She pursued an advanced degree in international diplomatic relations.",
                "uz": "U xalqaro diplomatik munosabatlar yo'nalishida magistrlik darajasini oldi."
              }
            ]
          },
          {
            "id": "pol-10",
            "word": "Human rights",
            "pos": "noun",
            "phonetic": "/ˌhjuːmən ˈraɪts/",
            "uzbek": "Inson huquqlari",
            "definition": "Basic rights and freedoms to which all human beings are entitled.",
            "examples": [
              {
                "en": "The Universal Declaration of Human Rights was adopted by the United Nations in 1948.",
                "uz": "Inson huquqlari umumjahon deklaratsiyasi 1948 yilda Birlashgan Millatlar Tashkiloti tomonidan qabul qilingan."
              },
              {
                "en": "Protecting universal human rights is an essential responsibility of modern civil societies.",
                "uz": "Umuminsoniy huquqlarni asrash — zamonaviy fuqarolik jamiyatlarining asosiy burchidir."
              },
              {
                "en": "Human rights advocates campaign pro bono for equality, dignity, and justice worldwide.",
                "uz": "Inson huquqlari himoyachilari dunyo bo'ylab tenglik, qadr-qimmat va adolat uchun bepul xizmat qiladilar."
              }
            ]
          }
        ]
      }
    ]
  },
  "B2": {
    "levelName": "B2 - Yuqori O'rta (Upper-Intermediate)",
    "description": "Murakkab mavzularda ravon suhbatlashish va munozara qilish",
    "color": "purple",
    "badge": "B2 Yuqori O'rta",
    "topics": [
      {
        "id": "b2-business",
        "title": "Unit 01: Business & Corporate Strategy (Biznes va korporativ strategiya)",
        "icon": "fa-chart-line",
        "color": "from-indigo-500 to-purple-600",
        "words": [
          {
            "id": "biz-1",
            "word": "Entrepreneur",
            "pos": "noun",
            "phonetic": "/ˌɒntrəprəˈnɜː/",
            "uzbek": "Tadbirkor, biznes asoschisi",
            "definition": "A person who sets up a business or businesses, taking on financial risks in the hope of profit.",
            "examples": [
              {
                "en": "Successful entrepreneurs identify problems in the market and design innovative solutions.",
                "uz": "Muvaffaqiyatli tadbirkorlar bozordagi muammolarni aniqlab, innovatsion yechimlar yaratadilar."
              },
              {
                "en": "He is a tech entrepreneur who founded several profitable startups.",
                "uz": "U bir nechta daromadli startaplarga asos solgan texnologik tadbirkordir."
              },
              {
                "en": "Government grants encourage young entrepreneurs to launch novel ventures.",
                "uz": "Davlat grantlari yosh tadbirkorlarni yangi loyihalarni boshlashga undaydi."
              }
            ]
          },
          {
            "id": "biz-2",
            "word": "Investment",
            "pos": "noun",
            "phonetic": "/ɪnˈvestmənt/",
            "uzbek": "Investitsiya, sarmoya",
            "definition": "The action or process of investing money for profit or material result.",
            "examples": [
              {
                "en": "Investing in higher education is an investment that yields lifelong dividends.",
                "uz": "Oliy ta'limga sarmoya kiritish — butun umr davomida foyda keltiradigan investitsiyadir."
              },
              {
                "en": "The company secured a five-million-dollar investment from venture capitalists.",
                "uz": "Kompaniya venchur sarmoyadorlaridan besh million dollarlik investitsiyani jalb qildi."
              },
              {
                "en": "Foreign direct investment plays a crucial role in modernizing local industries.",
                "uz": "To'g'ridan-to'g'ri xorijiy investitsiyalar mahalliy sanoatni modernizatsiya qilishda muhim rol o'ynaydi."
              }
            ]
          },
          {
            "id": "biz-3",
            "word": "Negotiate",
            "pos": "verb",
            "phonetic": "/nɪˈɡəʊʃieɪt/",
            "uzbek": "Muzokara olib bormoq, kelishmoq",
            "definition": "To try to reach an agreement or compromise by discussion with others.",
            "examples": [
              {
                "en": "Both corporate parties met yesterday to negotiate the contractual terms.",
                "uz": "Har ikki korporativ tomon kecha shartnoma shartlarini kelishish uchun uchrashdi."
              },
              {
                "en": "Skilled diplomats know how to negotiate effectively under pressure.",
                "uz": "Tajribali diplomatlar bosim ostida ham qanday qilib samarali muzokara olib borishni bilishadi."
              },
              {
                "en": "She managed to negotiate a substantial discount on the wholesale order.",
                "uz": "U ulgurji buyurtma uchun sezilarli chegirma bo'yicha muzokara qila oldi."
              }
            ]
          },
          {
            "id": "biz-4",
            "word": "Revenue",
            "pos": "noun",
            "phonetic": "/ˈrevənjuː/",
            "uzbek": "Daromad, tushum (kompaniya yoki davlat)",
            "definition": "Income, especially when of a company or organization and of a substantial nature.",
            "examples": [
              {
                "en": "The company reported a 25% increase in annual revenue this fiscal quarter.",
                "uz": "Kompaniya ushbu moliyaviy chorakda yillik daromadning 25% ga oshganini ma'lum qildi."
              },
              {
                "en": "Tax revenue enables the government to build schools and hospitals.",
                "uz": "Soliq tushumlari hukumatga maktab va kasalxonalar qurish imkonini beradi."
              },
              {
                "en": "Subscription models provide predictable and steady recurring revenue.",
                "uz": "Obuna modellari doimiy va oldindan prognoz qilinadigan daromadni ta'minlaydi."
              }
            ]
          },
          {
            "id": "biz-5",
            "word": "Strategy",
            "pos": "noun",
            "phonetic": "/ˈstrætədʒi/",
            "uzbek": "Strategiya, uzoq muddatli reja",
            "definition": "A plan of action or policy designed to achieve a major or overall aim.",
            "examples": [
              {
                "en": "Adopting a solid digital marketing strategy boosted brand awareness significantly.",
                "uz": "Puxta raqamli marketing strategiyasini qo'llash brend tanilishini sezilarli darajada oshirdi."
              },
              {
                "en": "The board members met to revise their five-year growth strategy.",
                "uz": "Boshqaruv a'zolari o'zlarining besh yillik o'sish strategiyasini qayta ko'rib chiqish uchun yig'ilishdi."
              },
              {
                "en": "A well-thought-out study strategy will help you master English much faster.",
                "uz": "Yaxshi o'ylangan o'qish strategiyasi ingliz tilini ancha tezroq o'zlashtirishga yordam beradi."
              }
            ]
          },
          {
            "id": "biz-6",
            "word": "Acquisition",
            "pos": "noun",
            "phonetic": "/ˌækwɪˈzɪʃn/",
            "uzbek": "Kompaniyani sotib olish (yutib olish)",
            "definition": "An asset, company, or subsidiary bought or taken over by another corporation.",
            "examples": [
              {
                "en": "The tech giant announced the strategic acquisition of an AI startup.",
                "uz": "Texnologiya giganti sun'iy intellekt startapining strategik sotib olinishini e'lon qildi."
              },
              {
                "en": "Corporate acquisitions often create synergies and expand market share.",
                "uz": "Korporativ sotib olishlar ko'pincha o'zaro hamkorlikni kuchaytiradi va bozor ulushini kengaytiradi."
              },
              {
                "en": "Regulators scrutinized the multi-billion dollar acquisition for monopoly risks.",
                "uz": "Nazoratchilar ko'p milliard dollarlik xaridni monopoliya xatarlari yuzasidan sinchiklab tekshirdilar."
              }
            ]
          },
          {
            "id": "biz-7",
            "word": "Bankruptcy",
            "pos": "noun",
            "phonetic": "/ˈbæŋkrəptsi/",
            "uzbek": "Bankrotlik",
            "definition": "The legal state of an organization unable to repay its outstanding financial debts.",
            "examples": [
              {
                "en": "Poor financial management drove the retail chain into sudden bankruptcy.",
                "uz": "Moliyaviy boshqaruvning yomonligi chakana savdo tarmog'ini kutilmagan bankrotlikka olib keldi."
              },
              {
                "en": "Filing for bankruptcy protects the company while restructuring its liabilities.",
                "uz": "Bankrotlik to'g'risida ariza berish kompaniyani qarz majburiyatlarini qayta tuzish paytida himoya qiladi."
              },
              {
                "en": "The airline avoided bankruptcy by negotiating debt relief with major lenders.",
                "uz": "Aviakompaniya asosiy kreditorlar bilan qarzni yengillashtirish bo'yicha kelishib, bankrotlikdan qutulib qoldi."
              }
            ]
          },
          {
            "id": "biz-8",
            "word": "Capital",
            "pos": "noun",
            "phonetic": "/ˈkæpɪtl/",
            "uzbek": "Sarmoya, kapital",
            "definition": "Financial wealth or assets available for investment, production, or launching ventures.",
            "examples": [
              {
                "en": "Entrepreneurs need substantial starting capital to build modern factories.",
                "uz": "Tadbirkorlarga zamonaviy fabrikalar qurish uchun katta boshlang'ich sarmoya kerak bo'ladi."
              },
              {
                "en": "Venture capitalists injected fresh capital into the innovative fintech project.",
                "uz": "Venchur sarmoyadorlari innovatsion fintex loyihasiga yangi sarmoya kiritdilar."
              },
              {
                "en": "Access to liquid capital determines a business's ability to survive economic downturns.",
                "uz": "Erkin kapitalga ega bo'lish biznesning iqtisodiy inqirozlardan omon chiqish qobiliyatini belgilaydi."
              }
            ]
          },
          {
            "id": "biz-9",
            "word": "Dividend",
            "pos": "noun",
            "phonetic": "/ˈdɪvɪdend/",
            "uzbek": "Dividend (aksiyadorlik foydasi)",
            "definition": "A share of profits paid regularly by a company to its shareholders.",
            "examples": [
              {
                "en": "Shareholders received a ten percent increase in annual dividend payouts.",
                "uz": "Aksiyadorlar yillik dividend to'lovlarida o'n foizli o'sishga erishdilar."
              },
              {
                "en": "The board decided to reinvest earnings rather than distributing dividends this quarter.",
                "uz": "Kengash ushbu chorakda dividend tarqatishdan ko'ra daromadni qayta investitsiya qilishga qaror qildi."
              },
              {
                "en": "High dividend yields make blue-chip utility stocks appealing to conservative investors.",
                "uz": "Yuqori dividend daromadliligi yirik kommunal aksiyalarni konservativ investorlar uchun jozibador qiladi."
              }
            ]
          },
          {
            "id": "biz-10",
            "word": "Feasibility",
            "pos": "noun",
            "phonetic": "/ˌfiːzəˈbɪləti/",
            "uzbek": "Amalga oshirish imkoniyati, maqsadga muvofiqlik",
            "definition": "The state or degree of being easily, economically, or conveniently done.",
            "examples": [
              {
                "en": "We must conduct a thorough feasibility study before funding the railway project.",
                "uz": "Temir yo'l loyihasini moliyalashtirishdan oldin uning har tomonlama texnik-iqtisodiy asosini o'rganishimiz kerak."
              },
              {
                "en": "The engineering team evaluated the technical feasibility of the proposed solar plant.",
                "uz": "Muhandislar guruhi taklif etilgan quyosh stansiyasining texnik amalga oshish imkoniyatini baholadilar."
              },
              {
                "en": "Rising raw material costs cast serious doubts on the financial feasibility of the scheme.",
                "uz": "Xomashyo narxining oshishi rejaning moliyaviy jihatdan o'zini oqlashiga jiddiy shubha uyg'otdi."
              }
            ]
          },
          {
            "id": "biz-11",
            "word": "Liability",
            "pos": "noun",
            "phonetic": "/ˌlaɪəˈbɪləti/",
            "uzbek": "Moliyaviy majburiyat, qarz yuki",
            "definition": "A debt or financial obligation recorded on a company's balance sheet.",
            "examples": [
              {
                "en": "A sound company should possess sufficient liquid assets to cover its short-term liabilities.",
                "uz": "Barqaror kompaniya o'zining qisqa muddatli majburiyatlarini qoplash uchun yetarli likvid aktivlarga ega bo'lishi kerak."
              },
              {
                "en": "The business assumed all legal liabilities of the merged organization.",
                "uz": "Biznes qo'shilgan tashkilotning barcha qonuniy majburiyatlarini o'z zimmasiga oldi."
              },
              {
                "en": "Uninsured property can quickly become a crippling financial liability in an accident.",
                "uz": "Sug'urtalanmagan mulk baxtsiz hodisada tezda og'ir moliyaviy majburiyatga aylanishi mumkin."
              }
            ]
          },
          {
            "id": "biz-12",
            "word": "Monopoly",
            "pos": "noun",
            "phonetic": "/məˈnɒpəli/",
            "uzbek": "Monopoliya",
            "definition": "The exclusive possession or control of the supply of or trade in a commodity.",
            "examples": [
              {
                "en": "Antitrust regulations prevent any single firm from establishing a destructive monopoly.",
                "uz": "Monopoliyaga qarshi qonunlar biron bir kompaniyaning halokatli monopoliya o'rnatishiga to'sqinlik qiladi."
              },
              {
                "en": "State monopolies in telecommunications have been opened to private competition.",
                "uz": "Telekommunikatsiyadagi davlat monopoliyalari xususiy raqobat uchun ochildi."
              },
              {
                "en": "Consumers often suffer from higher prices and poorer service under a monopoly.",
                "uz": "Iste'molchilar monopoliya sharoitida ko'pincha yuqori narxlar va sifatsiz xizmatdan aziyat chekishadi."
              }
            ]
          },
          {
            "id": "biz-13",
            "word": "Outsource",
            "pos": "verb",
            "phonetic": "/ˈaʊtsɔːs/",
            "uzbek": "Autsorsing qilmoq, tashqi ijrochiga topshirmoq",
            "definition": "To obtain services or produce goods from an outside or international supplier.",
            "examples": [
              {
                "en": "Many international banks outsource customer support and software maintenance to Asian firms.",
                "uz": "Ko'plab xalqaro banklar mijozlarga xizmat ko'rsatish va dasturiy ta'minotni Osiyo firmalariga autsorsing qiladi."
              },
              {
                "en": "Outsourcing non-core tasks allows managers to concentrate on strategic business growth.",
                "uz": "Asosiy bo'lmagan vazifalarni autsorsing qilish rahbarlarga biznesning strategik o'sishiga e'tibor qaratish imkonini beradi."
              },
              {
                "en": "The publisher decided to outsource graphic design and translation services.",
                "uz": "Nashriyot grafik dizayn va tarjima xizmatlarini tashqi ijrochilarga topshirishga qaror qildi."
              }
            ]
          },
          {
            "id": "biz-14",
            "word": "Portfolio",
            "pos": "noun",
            "phonetic": "/pɔːtˈfəʊliəʊ/",
            "uzbek": "Investitsiya portfeli",
            "definition": "A collection of financial investments like stocks, bonds, and commodities held by an investor.",
            "examples": [
              {
                "en": "Financial advisors advise holding a well diversified portfolio across various industries.",
                "uz": "Moliyaviy maslahatchilar turli sohalar bo'yicha yaxshi diversifikatsiyalangan portfelga ega bo'lishni tavsiya qiladilar."
              },
              {
                "en": "Her investment portfolio includes high-yield tech stocks and government treasury bonds.",
                "uz": "Uning investitsiya portfeli yuqori daromadli texnologik aksiyalar va davlat xazina obligatsiyalarini o'z ichiga oladi."
              },
              {
                "en": "Managing a billion-dollar investment portfolio requires rigorous risk assessment.",
                "uz": "Milliard dollarlik investitsiya portfelini boshqarish qat'iy xavf baholashni talab qiladi."
              }
            ]
          },
          {
            "id": "biz-15",
            "word": "Stakeholder",
            "pos": "noun",
            "phonetic": "/ˈsteɪkhəʊldə/",
            "uzbek": "Manfaatdor tomon, manfaatdor shaxs",
            "definition": "A person, group, or organization with an interest or concern in a business.",
            "examples": [
              {
                "en": "Executives must balance the competing demands of customers, workers, and shareholders.",
                "uz": "Rahbarlar mijozlar, ishchilar va aksiyadorlar kabi manfaatdor tomonlarning talablarini muvozanatlashlari kerak."
              },
              {
                "en": "Transparent communication builds long-term trust with key project stakeholders.",
                "uz": "Shaffof muloqot loyihaning asosiy manfaatdor tomonlari bilan uzoq muddatli ishonch hosil qiladi."
              },
              {
                "en": "Environmental organizations have emerged as crucial stakeholders in mining discussions.",
                "uz": "Ekologik tashkilotlar konchilik bo'yicha muzokaralarda muhim manfaatdor tomon sifatida maydonga chiqdi."
              }
            ]
          },
          {
            "id": "biz-16",
            "word": "Subsidiary",
            "pos": "noun",
            "phonetic": "/səbˈsɪdiəri/",
            "uzbek": "Sho''ba korxona",
            "definition": "A company controlled by a holding or parent corporation.",
            "examples": [
              {
                "en": "The automotive giant established a regional subsidiary in Central Asia.",
                "uz": "Avtomobil giganti Markaziy Osiyoda mintaqaviy sho''ba korxonasini tashkil etdi."
              },
              {
                "en": "Each subsidiary operates semi-independently while following corporate governance guidelines.",
                "uz": "Har bir sho''ba korxona korporativ boshqaruv ko'rsatmalariga amal qilgan holda yarim mustaqil ish yuritadi."
              },
              {
                "en": "Profits generated by foreign subsidiaries are consolidated into group accounts annually.",
                "uz": "Xorijiy sho''ba korxonalar tomonidan olingan foyda har yili guruh hisoblarida jamlanadi."
              }
            ]
          },
          {
            "id": "biz-17",
            "word": "Turnover",
            "pos": "noun",
            "phonetic": "/ˈtɜːnəʊvə/",
            "uzbek": "Tovar aylanmasi, yalpi daromad",
            "definition": "The total amount of money taken in by a business through sales during a given period.",
            "examples": [
              {
                "en": "The supermarket reported an annual sales turnover surpassing fifty million dollars.",
                "uz": "Supermarket ellik million dollardan oshiq yillik tovar aylanmasini ma'lum qildi."
              },
              {
                "en": "High inventory turnover indicates that products are moving off store shelves rapidly.",
                "uz": "Tovar aylanmasining yuqoriligi mahsulotlarning peshtaxtalardan tez sotilayotganini ko'rsatadi."
              },
              {
                "en": "Despite healthy revenue turnover, net operating profits declined due to inflationary costs.",
                "uz": "Ijobiy daromad aylanmasiga qaramay, inflyatsiya xarajatlari tufayli sof operatsion foyda kamaydi."
              }
            ]
          },
          {
            "id": "biz-18",
            "word": "Benchmark",
            "pos": "noun",
            "phonetic": "/ˈbentʃmɑːk/",
            "uzbek": "Etalon, mezon, solishtirish andozasi",
            "definition": "A standard or point of reference against which things may be measured.",
            "examples": [
              {
                "en": "Customer service response times serve as a crucial quality benchmark in our firm.",
                "uz": "Mijozlarga xizmat ko'rsatish tezligi firmamizda sifatning hal qiluvchi mezoni bo'lib xizmat qiladi."
              },
              {
                "en": "The European Union automotive standards set a global benchmark for safety and emissions.",
                "uz": "Yevropa Ittifoqining avtomobil standartlari xavfsizlik va chiqindilar bo'yicha global mezonni belgilab beradi."
              },
              {
                "en": "We benchmark our marketing performance against the leading innovators in the field.",
                "uz": "Biz marketing ko'rsatkichlarimizni sohadagi yetakchi innovatorlar bilan solishtirib baholaymiz."
              }
            ]
          },
          {
            "id": "biz-19",
            "word": "Compliance",
            "pos": "noun",
            "phonetic": "/kəmˈplaɪəns/",
            "uzbek": "Qonuniy me'yorlarga muvofiqlik",
            "definition": "The action of adhering to corporate rules, regulatory laws, or contractual specifications.",
            "examples": [
              {
                "en": "The internal compliance team audits all financial statements for regulatory alignment.",
                "uz": "Ichki nazorat bo'limi barcha moliyaviy hisobotlarni me'yoriy muvofiqlik yuzasidan tekshiradi."
              },
              {
                "en": "Failure to ensure regulatory compliance can lead to license revocations and massive fines.",
                "uz": "Qonuniy muvofiqlikni ta'minlamaslik litsenziyani bekor qilishga va ulkan jarimalarga sabab bo'lishi mumkin."
              },
              {
                "en": "Data privacy compliance is essential under international consumer protection laws.",
                "uz": "Ma'lumotlar daxlsizligiga rioya qilish xalqaro iste'molchilar huquqlarini himoya qilish qonunlari bo'yicha shartdir."
              }
            ]
          },
          {
            "id": "biz-20",
            "word": "Diversify",
            "pos": "verb",
            "phonetic": "/daɪˈvɜːsɪfaɪ/",
            "uzbek": "Diversifikatsiya qilmoq, xilma-xillashtirmoq",
            "definition": "To expand the variety of products, markets, or investments to reduce commercial risk.",
            "examples": [
              {
                "en": "Wise farmers diversify their crops to survive changing market demands and weather shifts.",
                "uz": "Oqil dehqonlar bozor talablari va ob-havo o'zgarishlariga bardosh berish uchun ekinlarini xilma-xillashtiradilar."
              },
              {
                "en": "The corporation seeks to diversify into cloud computing and renewable clean energy.",
                "uz": "Korporatsiya bulutli hisoblash va toza qayta tiklanuvchi energiya sohalariga diversifikatsiya qilishga intilmoqda."
              },
              {
                "en": "Do not invest all savings in one company; diversify across multiple asset classes.",
                "uz": "Barcha jamg'armangizni bitta kompaniyaga tikmang; mablag'larni turli xil aktivlar bo'yicha taqsimlang."
              }
            ]
          },
          {
            "id": "biz-21",
            "word": "Fiscal",
            "pos": "adjective",
            "phonetic": "/ˈfɪskl/",
            "uzbek": "Moliyaviy, davlat byudjeti yoki xazinaga oid",
            "definition": "Relating to government revenue, especially taxation, public debt, or financial budgeting.",
            "examples": [
              {
                "en": "The government introduced prudent fiscal reforms to stimulate domestic manufacturing.",
                "uz": "Hukumat mahalliy ishlab chiqarishni rag'batlantirish uchun oqilona fiskal islohotlarni joriy qildi."
              },
              {
                "en": "The corporate fiscal year concludes on the final working day of December.",
                "uz": "Kompaniyaning moliyaviy yili dekabr oyining so'nggi ish kunida yakunlanadi."
              },
              {
                "en": "Loose fiscal policy without revenue discipline often leads to escalating inflation.",
                "uz": "Daromad intizomisiz erkin fiskal siyosat ko'pincha inflyatsiyaning kuchayishiga sabab bo'ladi."
              }
            ]
          },
          {
            "id": "biz-22",
            "word": "Incentive",
            "pos": "noun",
            "phonetic": "/ɪnˈsentɪv/",
            "uzbek": "Rag'batlantiruvchi omil, rag'bat",
            "definition": "A financial or motivational reward designed to encourage greater effort or performance.",
            "examples": [
              {
                "en": "Tax incentives attract multinational investors to build industrial hubs in rural zones.",
                "uz": "Soliq imtiyozlari ko'pmillatli sarmoyadorlarni qishloq hududlarida sanoat markazlarini qurishga jalb qiladi."
              },
              {
                "en": "Sales representatives have a strong incentive to surpass their quarterly sales targets.",
                "uz": "Savdo vakillari har chorakdagi savdo rejalarini ortig'i bilan bajarish uchun kuchli rag'batga ega."
              },
              {
                "en": "Offering gym memberships and education grants provides valuable employee incentives.",
                "uz": "Sport zali a'zoligi va ta'lim grantlarini taklif qilish xodimlar uchun qimmatli rag'batdir."
              }
            ]
          },
          {
            "id": "biz-23",
            "word": "Merger",
            "pos": "noun",
            "phonetic": "/ˈmɜːdʒə/",
            "uzbek": "Kompaniyalarning o'zaro birlashishi (qo'shilishi)",
            "definition": "The formal combination of two commercial entities into one unified legal enterprise.",
            "examples": [
              {
                "en": "The proposed merger between the two airline carriers created a dominant industry leader.",
                "uz": "Ikki aviatashuvchi o'rtasidagi birlashish sohaning yetakchi yetakchisini vujudga keltirdi."
              },
              {
                "en": "Cultural friction between management teams can complicate post-merger integration.",
                "uz": "Rahbariyat guruhlari o'rtasidagi madaniy kelishmovchiliklar birlashishdan keyingi uyg'unlikni qiyinlashtirishi mumkin."
              },
              {
                "en": "The merger received formal antitrust approval without mandatory divestiture requirements.",
                "uz": "Birlashish majburiy mulk sotish talablarisiz monopoliyaga qarshi rasmiy ruxsat oldi."
              }
            ]
          },
          {
            "id": "biz-24",
            "word": "Overhead",
            "pos": "noun",
            "phonetic": "/ˈəʊvəhed/",
            "uzbek": "Qo'shimcha doimiy xarajatlar (ijara, kommunal)",
            "definition": "Ongoing operating expenses not directly tied to creating a specific product or service.",
            "examples": [
              {
                "en": "Remote work allowed startups to slash office overhead expenses considerably.",
                "uz": "Masofaviy ish startaplarga ofisning doimiy qo'shimcha xarajatlarini sezilarli darajada qisqartirish imkonini berdi."
              },
              {
                "en": "Rent, building insurance, and administrative wages are standard business overheads.",
                "uz": "Ijara haqi, binoni sug'urtalash va ma'muriy maoshlar odatiy biznes qo'shimcha xarajatlaridir."
              },
              {
                "en": "Automation helps factory owners trim operational overhead and expand profit margins.",
                "uz": "Avtomatlashtirish zavod egalariga operatsion xarajatlarni qisqartirish va daromad marjasini oshirishga yordam beradi."
              }
            ]
          },
          {
            "id": "biz-25",
            "word": "Venture",
            "pos": "noun",
            "phonetic": "/ˈventʃə/",
            "uzbek": "Tavakkalli tadbirkorlik loyihasi, yangi biznes",
            "definition": "A risky or daring commercial undertaking, typically involving capital investment.",
            "examples": [
              {
                "en": "Launching an electric aviation venture carries substantial scientific and financial risks.",
                "uz": "Elektr aviatsiya bo'yicha yangi tadbirkorlik loyihasini boshlash katta ilmiy va moliyaviy xatarlarga ega."
              },
              {
                "en": "The two engineering firms formed a joint venture to build the cross-border bridge.",
                "uz": "Ikki muhandislik firmasi transchegaraviy ko'prikni qurish uchun qo'shma korxona tuzdilar."
              },
              {
                "en": "Venture capitalists evaluate the founding team's grit as closely as their business plan.",
                "uz": "Venchur sarmoyadorlari ta'sischilar jamoasining qat'iyatini biznes-reja kabi sinchkovlik bilan baholaydilar."
              }
            ]
          }
        ],
        "unitNumber": 1,
        "category": "Business & Strategy"
      },
      {
        "id": "b2-psychology",
        "title": "Unit 02: Psychology & Human Behavior (Psixologiya va inson tabiati)",
        "icon": "fa-brain",
        "color": "from-purple-500 to-indigo-700",
        "words": [
          {
            "id": "psy-1",
            "word": "Empathy",
            "pos": "noun",
            "phonetic": "/ˈempəθi/",
            "uzbek": "Empatiya (boshqaning his-tuyg'ularini tushuna olish qobiliyati)",
            "definition": "The ability to understand and share the feelings of another.",
            "examples": [
              {
                "en": "True leaders demonstrate deep empathy towards the struggles of their team members.",
                "uz": "Haqiqiy yetakchilar o'z jamoasi a'zolarining qiyinchiliklariga chuqur hamdardlik va tushunish bilan yondashadilar."
              },
              {
                "en": "Reading literary fiction has been shown to enhance social empathy.",
                "uz": "Badiiy adabiyot o'qish ijtimoiy empatiyani kuchaytirishi isbotlangan."
              },
              {
                "en": "Without empathy, resolving interpersonal conflicts becomes nearly impossible.",
                "uz": "Empatiyasiz insonlararo nizolarni hal qilish deyarli imkonsiz bo'lib qoladi."
              }
            ]
          },
          {
            "id": "psy-2",
            "word": "Behavior",
            "pos": "noun",
            "phonetic": "/bɪˈheɪvjə/",
            "uzbek": "Xulq-atvor, xatti-harakat",
            "definition": "The way in which one acts or conducts oneself, especially toward others.",
            "examples": [
              {
                "en": "Psychologists investigate how environment shapes human behavior.",
                "uz": "Psixologlar atrof-muhit inson xulq-atvorini qanday shakllantirishini tadqiq etadilar."
              },
              {
                "en": "His courteous behavior left a favorable impression on all interviewers.",
                "uz": "Uning xushmuomala xulq-atvori barcha suhbatdoshlarda ijobiy taassurot qoldirdi."
              },
              {
                "en": "Cognitive therapy helps patients recognize and adjust disruptive behavior patterns.",
                "uz": "Kognitiv terapiya bemorlarga zararli xatti-harakat odatlarini anglash va o'zgartirishga ko'maklashadi."
              }
            ]
          },
          {
            "id": "psy-3",
            "word": "Resilience",
            "pos": "noun",
            "phonetic": "/rɪˈzɪliəns/",
            "uzbek": "Chidamlilik, qiyinchilikdan tez tiklanish qobiliyati",
            "definition": "The capacity to recover quickly from difficulties; toughness.",
            "examples": [
              {
                "en": "Emotional resilience allows people to bounce back after severe setbacks.",
                "uz": "Hissiy chidamlilik odamlarga og'ir sinovlardan so'ng tezda o'zlarini tiklab olish imkonini beradi."
              },
              {
                "en": "The resilient community rebuilt their houses promptly after the earthquake.",
                "uz": "Matonatli xalq zilziladan so'ng o'z uylarini tezlik bilan qayta tikladi."
              },
              {
                "en": "Developing resilience is an essential component of personal maturity.",
                "uz": "Chidamlilikni rivojlantirish shaxsiy yetuklikning muhim tarkibiy qismidir."
              }
            ]
          },
          {
            "id": "psy-4",
            "word": "Perception",
            "pos": "noun",
            "phonetic": "/pəˈsepʃn/",
            "uzbek": "Idrok, qarash, tushunish",
            "definition": "The way in which something is regarded, understood, or interpreted.",
            "examples": [
              {
                "en": "Visual perception varies significantly depending on lighting conditions.",
                "uz": "Ko'rish orqali idrok qilish yoritish sharoitiga qarab sezilarli darajada o'zgaradi."
              },
              {
                "en": "Public perception of artificial intelligence has shifted over the past decade.",
                "uz": "Sun'iy intellekt bo'yicha jamoatchilik qarashlari so'nggi o'n yillikda o'zgardi."
              },
              {
                "en": "Travel broadens your worldview and alters your perception of foreign cultures.",
                "uz": "Sayohat dunyoqarashni kengaytiradi va begona madaniyatlar haqidagi tasavvuringizni o'zgartiradi."
              }
            ]
          },
          {
            "id": "psy-5",
            "word": "Subconscious",
            "pos": "adjective / noun",
            "phonetic": "/ˌsʌbˈkɒnʃəs/",
            "uzbek": "Ongosti, ongosti kechinmalari",
            "definition": "Operating below the normal level of conscious awareness.",
            "examples": [
              {
                "en": "Dreams often reveal fears and desires hidden in our subconscious mind.",
                "uz": "Tushlar ko'pincha ongosti qatlamimizda yashiringan qo'rquv va orzularni ochib beradi."
              },
              {
                "en": "Subconscious biases can subtly influence the decisions we make daily.",
                "uz": "Ongosti mayllari har kuni qabul qiladigan qarorlarimizga sezilarsiz ta'sir qilishi mumkin."
              },
              {
                "en": "Hypnotherapy attempts to communicate directly with the patient's subconscious.",
                "uz": "Gipnoterapiya bemorning ongosti bilan to'g'ridan-to'g'ri muloqot qilishga harakat qiladi."
              }
            ]
          },
          {
            "id": "psy-6",
            "word": "Cognition",
            "pos": "noun",
            "phonetic": "/kɒɡˈnɪʃn/",
            "uzbek": "Idrok etish, bilish jarayoni",
            "definition": "The mental action or process of acquiring knowledge and understanding through thought and sense.",
            "examples": [
              {
                "en": "Cognitive psychology investigates how attention, memory, and language influence perception.",
                "uz": "Kognitiv psixologiya diqqat, xotira va til idrokka qanday ta'sir qilishini o'rganadi."
              },
              {
                "en": "Healthy sleep patterns are critical for maintaining sharp cognitive function in old age.",
                "uz": "Sog'lom uyqu tartibi keksayganda aqliy idrok faoliyatini o'tkir saqlash uchun juda muhimdir."
              },
              {
                "en": "Chronic psychological stress significantly impairs human problem-solving cognition.",
                "uz": "Surunkali ruhiy zo'riqish insonning muammolarni hal qilish idrokini sezilarli darajada susaytiradi."
              }
            ]
          },
          {
            "id": "psy-7",
            "word": "Conditioning",
            "pos": "noun",
            "phonetic": "/kənˈdɪʃənɪŋ/",
            "uzbek": "Shartli refleks hosil qilish",
            "definition": "The process of training a person or animal to behave in a certain way through repeated stimuli.",
            "examples": [
              {
                "en": "Pavlov demonstrated classical conditioning by training dogs to salivate at the sound of a bell.",
                "uz": "Pavlov itlarni qo'ng'iroq ovoziga so'lak ajratishga o'rgatish orqali klassik shartli refleksni isbotladi."
              },
              {
                "en": "Social conditioning subtly shapes how individuals perceive gender roles in society.",
                "uz": "Ijtimoiy tarbiya insonlarning jamiyatdagi gender rollarini qanday qabul qilishini sezilarsiz shakllantiradi."
              },
              {
                "en": "Operant conditioning relies on consistent reinforcement and penalties to mold human habits.",
                "uz": "Operant o'rganish inson odatlarini shakllantirishda doimiy rag'batlantirish va jazolarga tayanadi."
              }
            ]
          },
          {
            "id": "psy-8",
            "word": "Conformity",
            "pos": "noun",
            "phonetic": "/kənˈfɔːməti/",
            "uzbek": "Boshqalarga ergashish, konformizm",
            "definition": "Behavior in accordance with socially accepted conventions, peer standards, or prevailing rules.",
            "examples": [
              {
                "en": "Asch's conformity experiments revealed that individuals frequently alter answers to agree with a group.",
                "uz": "Eshning konformizm tajribalari odamlar guruh fikriga qo'shilish uchun o'z javoblarini tez-tez o'zgartirishini ko'rsatdi."
              },
              {
                "en": "Creative breakthroughs often require rejecting rigid conformity in favor of unconventional thinking.",
                "uz": "Ijodiy yutuqlar ko'pincha qotib qolgan konformizmni rad etib, noodatiy fikrlashni talab qiladi."
              },
              {
                "en": "Teenage social anxiety can induce powerful pressure toward stylistic conformity.",
                "uz": "O'smirlikdagi ijtimoiy xavotir kiyinish va xulqda boshqalarga o'xshashlikka kuchli bosim o'tkazishi mumkin."
              }
            ]
          },
          {
            "id": "psy-9",
            "word": "Ego",
            "pos": "noun",
            "phonetic": "/ˈiːɡəʊ/",
            "uzbek": "O'zlik, «men»lik tuyg'usi",
            "definition": "A person's sense of self-esteem, self-importance, or mediating conscious identity.",
            "examples": [
              {
                "en": "Constructive criticism from a mentor should not be taken as an attack on your personal ego.",
                "uz": "Ustozning o'rinli tanqidini shaxsiy nafsoniyatingizga qaratilgan hujum deb qabul qilmaslik kerak."
              },
              {
                "en": "Freud postulated that the conscious ego balances primal instinctual desires and social morality.",
                "uz": "Freyd ongli 'men'lik ibtidoiy istaklar va ijtimoiy axloqni muvozanatlashini ilgari surgan."
              },
              {
                "en": "Effective collaborative leaders keep their egos in check to empower team members.",
                "uz": "Samarali jamoaviy yetakchilar jamoa a'zolarini qo'llab-quvvatlash uchun o'z kibrlarini jilovlaydilar."
              }
            ]
          },
          {
            "id": "psy-10",
            "word": "Extrovert",
            "pos": "noun",
            "phonetic": "/ˈekstrəvɜːt/",
            "uzbek": "Ekstravert, kirishimli odam",
            "definition": "An outgoing, overtly expressive person who gains mental energy from social interaction.",
            "examples": [
              {
                "en": "Being an extrovert, she thrives in bustling, collaborative office environments.",
                "uz": "Ekstravert bo'lgani sababli, u gavjum va jamoaviy ofis muhitida o'zini juda yaxshi his qiladi."
              },
              {
                "en": "Extroverts recharge their emotional batteries by interacting with friends and meeting new people.",
                "uz": "Ekstravertlar do'stlar bilan muloqot qilish va yangi odamlar bilan uchrashish orqali ruhiy quvvat oladilar."
              },
              {
                "en": "Public speaking events are rarely intimidating for a confident extrovert.",
                "uz": "Ommaviy nutq so'zlash tadbirlari o'ziga ishongan ekstravertni kamdan-kam cho'chitadi."
              }
            ]
          },
          {
            "id": "psy-11",
            "word": "Introvert",
            "pos": "noun",
            "phonetic": "/ˈɪntrəvɜːt/",
            "uzbek": "Introvert, ichimdagini top odam",
            "definition": "A thoughtful, introspective person who recharges energy through quiet solitude.",
            "examples": [
              {
                "en": "An introvert often prefers reading a captivating novel at home over attending loud social parties.",
                "uz": "Introvert ko'pincha shovqinli kechalarga borishdan ko'ra uyda qiziqarli roman o'qishni afzal ko'radi."
              },
              {
                "en": "Introverts excel in roles that demand deep solo analytical focus and quiet deliberation.",
                "uz": "Introvertlar chuqur mustaqil tahliliy diqqat va sokin fikrlashni talab qiladigan vazifalarda a'lo natija ko'rsatadilar."
              },
              {
                "en": "Understanding introvert communication preferences enhances cross-functional team productivity.",
                "uz": "Introvertlarning muloqot xususiyatlarini tushunish turli bo'limlar jamoasi unumdorligini oshiradi."
              }
            ]
          },
          {
            "id": "psy-12",
            "word": "Impulsive",
            "pos": "adjective",
            "phonetic": "/ɪmˈpʌlsɪv/",
            "uzbek": "Hissiyotga beriluvchan, o'ylamay ish qiladigan",
            "definition": "Acting or done suddenly without careful reflection, forethought, or planning.",
            "examples": [
              {
                "en": "Impulsive buying decisions often lead to unnecessary financial strain.",
                "uz": "O'ylamasdan qilingan xaridlar ko'pincha keraksiz moliyaviy qiyinchiliklarga olib keladi."
              },
              {
                "en": "Therapy helps individuals regulate impulsive emotional outbursts during heated arguments.",
                "uz": "Psixoterapiya qizg'in bahslar paytida hissiy portlashlarni jilovlashga yordam beradi."
              },
              {
                "en": "He regretted the impulsive message he sent late at night.",
                "uz": "U kechasi o'ylamasdan yuborgan xabaridan afsuslandi."
              }
            ]
          },
          {
            "id": "psy-13",
            "word": "Insecurity",
            "pos": "noun",
            "phonetic": "/ˌɪnsɪˈkjʊərəti/",
            "uzbek": "O'ziga ishonchsizlik, xavotir",
            "definition": "Uncertainty or anxiety about oneself; lack of confidence in one's worth or abilities.",
            "examples": [
              {
                "en": "Comparing yourself constantly to social media influencers fuels self-doubt and deep insecurity.",
                "uz": "O'zingizni ijtimoiy tarmoqdagi mashhurlar bilan doimiy solishtirish o'zingizga shubha va chuqur ishonchsizlikni kuchaytiradi."
              },
              {
                "en": "A supportive mentor helped her overcome persistent imposter syndrome and career insecurity.",
                "uz": "Qo'llab-quvvatlovchi ustoz unga o'ziga ishonchsizlik va soxtalik sindromini yengishga yordam berdi."
              },
              {
                "en": "Childhood trauma frequently manifests in adult relationships as emotional insecurity.",
                "uz": "Bolalikdagi ruhiy jarohat katta yoshdagi munosabatlarda ko'pincha hissiy ishonchsizlik sifatida namoyon bo'ladi."
              }
            ]
          },
          {
            "id": "psy-14",
            "word": "Instinct",
            "pos": "noun",
            "phonetic": "/ˈɪnstɪŋkt/",
            "uzbek": "Instinkt, tug'ma mayl",
            "definition": "An innate, biologically predetermined response to particular environmental triggers.",
            "examples": [
              {
                "en": "Mother birds act on pure parental instinct to protect their vulnerable hatchlings.",
                "uz": "Ona qushlar himoyasiz jo'jalarini asrash uchun sof onalik instinkti asosida harakat qiladilar."
              },
              {
                "en": "Trust your gut instinct when assessing whether an unfamiliar situation is safe.",
                "uz": "Notanish vaziyatning xavfsiz yoki xavfli ekanini baholashda ichki instinktingizga ishoning."
              },
              {
                "en": "The fight-or-flight instinct is an evolutionary survival mechanism hardwired in our brains.",
                "uz": "'Jang qil yoki qoch' instinkti miyamizga muhrlangan evolyutsion omon qolish mexanizmidir."
              }
            ]
          },
          {
            "id": "psy-15",
            "word": "Neurotic",
            "pos": "adjective",
            "phonetic": "/njʊəˈrɒtɪk/",
            "uzbek": "Nevrotik, ortiqcha xavotirga tushuvchi",
            "definition": "Manifesting excessive emotional instability, obsessive anxiety, or compulsive fear.",
            "examples": [
              {
                "en": "Her neurotic obsession with cleanliness made relaxing in hotels difficult.",
                "uz": "Uning tozalikka bo'lgan asabiy qiziqishi mehmonxonalarda dam olishini qiyinlashtirar edi."
              },
              {
                "en": "Cognitive behavioral techniques assist patients in challenging neurotic irrational thoughts.",
                "uz": "Kognitiv-xulq-atvor usullari bemorlarga asabiy mantiqsiz fikrlarni yengishga ko'maklashadi."
              },
              {
                "en": "High levels of neurotic personality traits correlate with increased vulnerability to burnout.",
                "uz": "Nevrotik xarakter belgilarining yuqoriligi kasbiy toliqishga moyillikning oshishi bilan bog'liqdir."
              }
            ]
          },
          {
            "id": "psy-16",
            "word": "Obsession",
            "pos": "noun",
            "phonetic": "/əbˈseʃn/",
            "uzbek": "Qattiq berilish, vasvasa, g'oya",
            "definition": "An idea or thought that continually preoccupies or intrudes on a person's mind.",
            "examples": [
              {
                "en": "His relentless passion for chess bordered on an unhealthy personal obsession.",
                "uz": "Uning shaxmatga bo'lgan tinimsiz ishtiyoqi qattiq vasvasaga aylanib borayotgan edi."
              },
              {
                "en": "The detective pursued the unsolved mystery with unwavering obsession.",
                "uz": "Izquvar yechilmagan sirli jinoyatni so'nmas qiziqish va qat'iyat bilan tekshirdi."
              },
              {
                "en": "Psychologists distinguish between healthy focused dedication and destructive clinical obsessions.",
                "uz": "Psixologlar maqsadga sog'lom intilish bilan halokatli ruhiy vasvasa o'rtasidagi farqni ajratadilar."
              }
            ]
          },
          {
            "id": "psy-17",
            "word": "Phobia",
            "pos": "noun",
            "phonetic": "/ˈfəʊbiə/",
            "uzbek": "Fobiya, kuchli asossiz qo'rquv",
            "definition": "An irrational, persistent fear of a specific object, creature, or social situation.",
            "examples": [
              {
                "en": "Claustrophobia is the intense phobia of enclosed or cramped elevator spaces.",
                "uz": "Klaustrofobiya tor yoki yopiq lift xonalaridan qattiq asossiz qo'rqishdir."
              },
              {
                "en": "Gradual exposure therapy helps individuals conquer crippling animal phobias permanently.",
                "uz": "Bosqichma-bosqich ko'niktirish terapiyasi odamlarga hayvonlarga oid kuchli qo'rquvlarni butunlay yengishga yordam beradi."
              },
              {
                "en": "Social phobia makes interacting with large groups of strangers intensely distressing.",
                "uz": "Ijtimoiy fobiya notanish odamlarning katta guruhlari bilan muloqot qilishni nihoyatda qiyinlashtiradi."
              }
            ]
          },
          {
            "id": "psy-18",
            "word": "Rationalize",
            "pos": "verb",
            "phonetic": "/ˈræʃnəlaɪz/",
            "uzbek": "Mantiqan o'zini oqlamoq",
            "definition": "To attempt to explain or justify problematic behavior with plausible, seemingly logical reasons.",
            "examples": [
              {
                "en": "People often rationalize unhealthy snacking habits by promising to exercise tomorrow.",
                "uz": "Odamlar ko'pincha ertaga mashq qilishni va'da qilib, zararli ovqatlanish odatlarini oqlashga harakat qiladilar."
              },
              {
                "en": "He attempted to rationalize breaking the company rules as a necessary shortcut.",
                "uz": "U kompaniya qoidalarini buzganini zaruriy yengillik deb oqlashga urindi."
              },
              {
                "en": "Psychological defense mechanisms lead individuals to rationalize unethical decisions.",
                "uz": "Ruhiy himoya mexanizmlari insonlarni noaxloqiy qarorlarni mantiqan oqlashga undaydi."
              }
            ]
          },
          {
            "id": "psy-19",
            "word": "Repression",
            "pos": "noun",
            "phonetic": "/rɪˈpreʃn/",
            "uzbek": "Hissiyotlarni ongsiz bostirish",
            "definition": "The psychological attempt to exclude painful thoughts or traumatic memories from conscious awareness.",
            "examples": [
              {
                "en": "Repression of traumatic childhood experiences can cause unexpected emotional problems in adulthood.",
                "uz": "Bolalikdagi og'ir kechinmalarni bostirish katta yoshda kutilmagan hissiy muammolarga sabab bo'lishi mumkin."
              },
              {
                "en": "Psychotherapy helps patients gently uncover repressed grief and begin true healing.",
                "uz": "Psixoterapiya bemorlarga bostirilgan qayg'uni ohista yuzaga chiqarishga va haqiqiy tuzalishni boshlashga ko'maklashadi."
              },
              {
                "en": "Emotional repression often leads to physical symptoms such as chronic muscle tension.",
                "uz": "Hissiyotlarni bostirish ko'pincha surunkali mushak tarangligi kabi jismoniy alomatlarga olib keladi."
              }
            ]
          },
          {
            "id": "psy-20",
            "word": "Self-esteem",
            "pos": "noun",
            "phonetic": "/ˌself ɪˈstiːm/",
            "uzbek": "O'ziga bo'lgan hurmat, o'z qadrini bilish",
            "definition": "Confidence in one's own worth, personal abilities, and fundamental self-respect.",
            "examples": [
              {
                "en": "Constructive encouragement from teachers boosts children's academic self-esteem.",
                "uz": "O'qituvchilarning ijobiy dalda berishi bolalarning o'qishga bo'lgan ishonchi va o'z qadrini oshiradi."
              },
              {
                "en": "Developing healthy self-esteem enables young adults to establish firm personal boundaries.",
                "uz": "Sog'lom o'z-o'zini hurmat qilish yoshlarga mustahkam shaxsiy chegaralarni o'rnatish imkonini beradi."
              },
              {
                "en": "Experiencing repeated failures without supportive guidance can erode a student's self-esteem.",
                "uz": "Qo'llab-quvvatlashsiz ketma-ket muvaffaqiyatsizlikka uchrash talabaning o'ziga bo'lgan ishonchini yemirishi mumkin."
              }
            ]
          },
          {
            "id": "psy-21",
            "word": "Stimulus",
            "pos": "noun",
            "phonetic": "/ˈstɪmjələs/",
            "uzbek": "Turtki, tashqi ta'sir, stimul",
            "definition": "A thing or event that evokes a specific physiological or psychological reaction.",
            "examples": [
              {
                "en": "A sudden flash of lightning serves as a visual stimulus triggering an involuntary blink.",
                "uz": "Chaqmoqning to'satdan chaqnashi ko'zning beixtiyor miltillashiga sabab bo'luvchi vizual ta'sirdir."
              },
              {
                "en": "Children need engaging intellectual stimuli to foster brain development.",
                "uz": "Bolalarga miya rivojlanishini rag'batlantirish uchun qiziqarli aqliy turtkilar zarur."
              },
              {
                "en": "Researchers monitored how the brain responds to varied emotional musical stimuli.",
                "uz": "Tadqiqotchilar miyaning turli hissiy musiqiy ta'sirlarga qanday munosabat bildirishini kuzatdilar."
              }
            ]
          },
          {
            "id": "psy-22",
            "word": "Suppression",
            "pos": "noun",
            "phonetic": "/səˈpreʃn/",
            "uzbek": "Hissiyotni ongli to'xtatish (jilovlash)",
            "definition": "The conscious act of stopping yourself from thinking or displaying particular emotions.",
            "examples": [
              {
                "en": "The deliberate suppression of righteous anger can elevate cardiovascular stress levels.",
                "uz": "Haqli g'azabni ongli ravishda jilovlash yurak-qon tomir zo'riqishini oshirishi mumkin."
              },
              {
                "en": "Unlike unconscious repression, emotional suppression involves a deliberate conscious effort.",
                "uz": "Ongsiz bostirishdan farqli o'laroq, hissiyotni ongli tiyish qasddan qilingan irodaviy harakatni talab qiladi."
              },
              {
                "en": "Actors learn expressive techniques to replace emotional suppression with authentic vulnerability.",
                "uz": "Aktyorlar hissiyotni yashirish o'rniga samimiy his qilishni ifodalash texnikalarini o'rganadilar."
              }
            ]
          },
          {
            "id": "psy-23",
            "word": "Temperament",
            "pos": "noun",
            "phonetic": "/ˈtemprəmənt/",
            "uzbek": "Mijoz, fe'l-atvor",
            "definition": "A person's inborn emotional nature, disposition, and characteristic way of responding.",
            "examples": [
              {
                "en": "Her calm and patient temperament makes her an outstanding kindergarten instructor.",
                "uz": "Uning bosiq va sabrli fe'l-atvori uni ajoyib bog'cha tarbiyachisiga aylantiradi."
              },
              {
                "en": "Studies suggest that genetic predispositions account for core traits of human temperament.",
                "uz": "Tadqiqotlar inson mijozining asosiy jihatlarida irsiy moyillik muhim o'rin tutishini ko'rsatadi."
              },
              {
                "en": "Understanding differences in employee temperament helps leaders resolve office conflicts.",
                "uz": "Xodimlar fe'l-atvoridagi farqlarni tushunish rahbarlarga ofisdagi kelishmovchiliklarni bartaraf etishga yordam beradi."
              }
            ]
          },
          {
            "id": "psy-24",
            "word": "Trauma",
            "pos": "noun",
            "phonetic": "/ˈtrɔːmə/",
            "uzbek": "Ruhiy jarohat, ruhiy zarba",
            "definition": "A deeply distressing or emotionally disturbing experience that impairs psychological functioning.",
            "examples": [
              {
                "en": "Surviving a catastrophic natural disaster can inflict deep emotional trauma on families.",
                "uz": "Halokatli tabiiy ofatdan omon qolish oilalarga chuqur ruhiy zarba yetkazishi mumkin."
              },
              {
                "en": "Specialized trauma counseling provides safe pathways toward emotional recovery.",
                "uz": "Maxsus ruhiy jarohat maslahatlari hissiy sog'ayish sari xavfsiz yo'llarni taqdim etadi."
              },
              {
                "en": "Childhood emotional neglect can leave psychological trauma lasting into adulthood.",
                "uz": "Bolalikda e'tibordan chetda qolish katta yoshgacha davom etadigan ruhiy jarohat qoldirishi mumkin."
              }
            ]
          },
          {
            "id": "psy-25",
            "word": "Vulnerable",
            "pos": "adjective",
            "phonetic": "/ˈvʌlnərəbl/",
            "uzbek": "Zaif, nozik, himoyasiz",
            "definition": "Susceptible to emotional wounding, physical attack, or psychological harm.",
            "examples": [
              {
                "en": "Opening up about your deepest fears requires being emotionally honest and vulnerable.",
                "uz": "Eng chuqur qo'rquvlaringiz haqida so'zlash hissiy jihatdan samimiy va zaif bo'lishni talab qiladi."
              },
              {
                "en": "Elderly citizens are especially vulnerable to sophisticated internet scamming operations.",
                "uz": "Keksa fuqarolar murakkab internet firibgarliklariga nisbatan ayniqsa himoyasizdirlar."
              },
              {
                "en": "Creating a safe group atmosphere encourages vulnerable and authentic conversations.",
                "uz": "Guruhda xavfsiz muhit yaratish samimiy va nozik suhbatlar qurishga imkon beradi."
              }
            ]
          }
        ],
        "unitNumber": 2,
        "category": "Psychology & Mind"
      },
      {
        "id": "b2-science",
        "title": "Unit 03: Science & Innovation (Fan va innovatsiya)",
        "icon": "fa-atom",
        "color": "from-blue-600 to-indigo-800",
        "words": [
          {
            "id": "sci-1",
            "word": "Breakthrough",
            "pos": "noun",
            "phonetic": "/ˈbreɪkθruː/",
            "uzbek": "Katta kashfiyot, burilish nuqtasi",
            "definition": "A sudden, dramatic, and important discovery or development.",
            "examples": [
              {
                "en": "Scientists achieved a major medical breakthrough in cancer treatment.",
                "uz": "Olimlar saratonni davolash sohasida ulkan ilmiy kashfiyotga erishdilar."
              },
              {
                "en": "The discovery of antibiotics was a revolutionary breakthrough in medicine.",
                "uz": "Antibiotiklarning kashf etilishi tibbiyotdagi inqilobiy burilish nuqtasi bo'ldi."
              },
              {
                "en": "Researchers are hoping for a breakthrough in renewable battery technology.",
                "uz": "Tadqiqotchilar qayta tiklanuvchi akkumulyator texnologiyasida yutuq kutmoqdalar."
              }
            ]
          },
          {
            "id": "sci-2",
            "word": "Hypothesis",
            "pos": "noun",
            "phonetic": "/haɪˈpɒθəsɪs/",
            "uzbek": "Faraz, gipoteza",
            "definition": "A proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
            "examples": [
              {
                "en": "The researcher designed a controlled experiment to test her hypothesis.",
                "uz": "Tadqiqotchi o'z farazini (gipotezasini) tekshirish uchun nazoratli tajriba o'tkazdi."
              },
              {
                "en": "The experimental data confirmed the initial hypothesis beyond doubt.",
                "uz": "Tajriba ma'lumotlari dastlabki farazni shubhasiz tasdiqladi."
              },
              {
                "en": "If the hypothesis is proven false, a new theoretical model must be proposed.",
                "uz": "Agar gipoteza noto'g'ri ekani isbotlansa, yangi nazariy model taklif qilinishi kerak."
              }
            ]
          },
          {
            "id": "sci-3",
            "word": "Sustainable",
            "pos": "adjective",
            "phonetic": "/səˈsteɪnəbl/",
            "uzbek": "Barqaror, tabiatga zarar yetkazmaydigan",
            "definition": "Able to be maintained at a certain rate or level; conserving ecological balance.",
            "examples": [
              {
                "en": "Solar and wind energy are prime examples of sustainable energy sources.",
                "uz": "Quyosh va shamol energiyasi barqaror energiya manbalarining yorqin namunasidir."
              },
              {
                "en": "We must adopt sustainable agricultural practices to protect our soil.",
                "uz": "Tuprog'imizni asrash uchun barqaror qishloq xo'jaligi usullarini qo'llashimiz kerak."
              },
              {
                "en": "The company pledged to achieve 100% sustainable packaging by 2030.",
                "uz": "Kompaniya 2030 yilga kelib 100% ekologik barqaror qadoqlashga o'tishni va'da qildi."
              }
            ]
          },
          {
            "id": "sci-4",
            "word": "Phenomenon",
            "pos": "noun",
            "phonetic": "/fəˈnɒmɪnən/",
            "uzbek": "Hodisa, fenomen",
            "definition": "A fact or situation that is observed to exist or happen, especially one whose cause is in question.",
            "examples": [
              {
                "en": "The northern lights are a breathtaking natural optical phenomenon.",
                "uz": "Shimoliy yog'du aql bovar qilmas darajada go'zal tabiiy optik hodisadir."
              },
              {
                "en": "Sociologists are studying the phenomenon of rapid urbanization.",
                "uz": "Sotsiologlar tezkor urbanizatsiya (shaharlashish) fenomenini o'rganmoqdalar."
              },
              {
                "en": "Gravity is a universal physical phenomenon that governs cosmic orbits.",
                "uz": "Gravitatsiya (tortishish kuchi) samoviy orbitalarni boshqaradigan universal fizik hodisadir."
              }
            ]
          },
          {
            "id": "sci-5",
            "word": "Artificial",
            "pos": "adjective",
            "phonetic": "/ˌɑːtɪˈfɪʃl/",
            "uzbek": "Sun'iy, qo'lda yasalgan",
            "definition": "Made or produced by human beings rather than occurring naturally.",
            "examples": [
              {
                "en": "Artificial intelligence algorithms are transforming countless modern industries.",
                "uz": "Sun'iy intellekt algoritmlari son-sanoqsiz zamonaviy sohalarni o'zgartirmoqda."
              },
              {
                "en": "The greenhouse maintains artificial lighting to speed up plant growth.",
                "uz": "Issiqxona o'simliklarning o'sishini tezlashtirish uchun sun'iy yoritishni ta'minlaydi."
              },
              {
                "en": "Some foods contain artificial sweeteners instead of natural sugar.",
                "uz": "Ba'zi mahsulotlar tabiiy shakar o'rniga sun'iy tatlandiruvchilarni o'z ichiga oladi."
              }
            ]
          },
          {
            "id": "sci-6",
            "word": "Acceleration",
            "pos": "noun",
            "phonetic": "/əkˌseləˈreɪʃn/",
            "uzbek": "Tezlanish",
            "definition": "The rate at which an object's velocity changes with respect to time.",
            "examples": [
              {
                "en": "Gravity causes falling objects near Earth to experience uniform downward acceleration.",
                "uz": "Gravitatsiya Yer yaqinida tushayotgan jismlarga bir xil pastga yo'nalgan tezlanish beradi."
              },
              {
                "en": "The sports car boasts incredible acceleration, reaching sixty miles per hour in three seconds.",
                "uz": "Sport avtomobili aqlbovar qilmas tezlanishga ega bo'lib, uch soniyada soatiga oltmish mil tezlikka erishadi."
              },
              {
                "en": "In physics, acceleration occurs whenever speed increases, decreases, or direction alters.",
                "uz": "Fizikada tezlanish tezlik oshganda, kamayganda yoki yo'nalish o'zgarganda sodir bo'ladi."
              }
            ]
          },
          {
            "id": "sci-7",
            "word": "Biodiversity",
            "pos": "noun",
            "phonetic": "/ˌbaɪəʊdaɪˈvɜːsəti/",
            "uzbek": "Biologik xilma-xillik",
            "definition": "The rich variety of animal, plant, and microbiological life inhabiting an ecosystem.",
            "examples": [
              {
                "en": "Tropical rainforests harbor unmatched biodiversity, with thousands of undiscovered plant species.",
                "uz": "Tropik yomg'ir o'rmonlari minglab kashf etilmagan o'simlik turlari bilan tengsiz biologik xilma-xillikni o'zida saqlaydi."
              },
              {
                "en": "Protecting biodiversity is vital for maintaining ecological resilience against agricultural diseases.",
                "uz": "Biologik xilma-xillikni asrash ekin kasalliklariga qarshi ekologik barqarorlikni ta'minlashda juda muhimdir."
              },
              {
                "en": "Pollution and global warming pose an existential threat to ocean coral biodiversity.",
                "uz": "Ifloslanish va global isish okean marjonlarining biologik xilma-xilligiga jiddiy xavf solmoqda."
              }
            ]
          },
          {
            "id": "sci-8",
            "word": "Catalyst",
            "pos": "noun",
            "phonetic": "/ˈkætəlɪst/",
            "uzbek": "Katalizator, jarayonni tezlashtiruvchi omil",
            "definition": "A substance that dramatically increases the rate of a chemical reaction without undergoing permanent alteration.",
            "examples": [
              {
                "en": "Enzymes act as biological catalysts enabling essential metabolic reactions inside living cells.",
                "uz": "Fermentlar tirik hujayralar ichidagi muhim moddalar almashinuvi reaksiyalarini tezlashtiruvchi biologik katalizatorlardir."
              },
              {
                "en": "The introduction of the high-speed internet proved to be a catalyst for economic modernization.",
                "uz": "Tezkor internetning joriy etilishi iqtisodiyotni modernizatsiya qilish uchun kuchli turtki bo'lib xizmat qildi."
              },
              {
                "en": "Automotive catalytic converters transform noxious exhaust gases into less harmful vapors.",
                "uz": "Avtomobil katalizatorlari zararli gazlarni kamroq zaharli bug'larga aylantiradi."
              }
            ]
          },
          {
            "id": "sci-9",
            "word": "Cellular",
            "pos": "adjective",
            "phonetic": "/ˈseljələ/",
            "uzbek": "Hujayraviy, hujayraga oid",
            "definition": "Relating to or consisting of microscopic living cells.",
            "examples": [
              {
                "en": "Biologists utilize high-powered electron microscopes to examine detailed cellular structures.",
                "uz": "Biologlar hujayraning batafsil tuzilishini o'rganish uchun yuqori quvvatli elektron mikroskoplardan foydalanadilar."
              },
              {
                "en": "Cellular respiration converts glucose and oxygen into usable adenosine triphosphate energy.",
                "uz": "Hujayra nafas olishi glyukoza va kislorodni foydali ATF energiyasiga aylantiradi."
              },
              {
                "en": "Damage to cellular DNA can induce uncontrolled malignant tumor replication.",
                "uz": "Hujayra DNKsining zararlanishi xavfli o'simta hujayralarining nazoratsiz ko'payishiga sabab bo'lishi mumkin."
              }
            ]
          },
          {
            "id": "sci-10",
            "word": "Chromosome",
            "pos": "noun",
            "phonetic": "/ˈkrəʊməsəʊm/",
            "uzbek": "Xromosoma",
            "definition": "A threadlike structure of nucleic acids carrying hereditary genetic information in living cells.",
            "examples": [
              {
                "en": "Typical human somatic cells contain forty-six chromosomes arranged in twenty-three pairs.",
                "uz": "Odatdagi inson tanasi hujayralari yigirma uch juftlikda joylashgan qirq oltita xromosomani o'z ichiga oladi."
              },
              {
                "en": "Chromosomes replicate precisely during mitosis to guarantee identical daughter cells.",
                "uz": "Xromosomalar bir xil qiz hujayralarni ta'minlash uchun mitoz davrida aniq nusxalanadi."
              },
              {
                "en": "Genetic screening identifies structural abnormalities across fetal chromosomes.",
                "uz": "Genetik tekshiruv homila xromosomalaridagi tuzilmaviy buzilishlarni aniqlaydi."
              }
            ]
          },
          {
            "id": "sci-11",
            "word": "Combustion",
            "pos": "noun",
            "phonetic": "/kəmˈbʌstʃən/",
            "uzbek": "Yonish jarayoni",
            "definition": "A high-temperature chemical reaction between a fuel and oxidant producing heat and light.",
            "examples": [
              {
                "en": "Internal combustion engines burn gasoline to generate kinetic mechanical motion.",
                "uz": "Ichki yonuv dvigatellari mexanik harakat hosil qilish uchun benzinni yoqadi."
              },
              {
                "en": "Incomplete combustion of hydrocarbons produces dangerous carbon monoxide gas.",
                "uz": "Uglevodorodlarning chala yonishi xavfli is gazi ajralishiga sabab bo'ladi."
              },
              {
                "en": "Combustion requires three fundamental ingredients: sufficient fuel, oxygen, and ignition heat.",
                "uz": "Yonish jarayoni uchta asosiy omilni talab qiladi: yetarli yoqilg'i, kislorod va o't oldirish harorati."
              }
            ]
          },
          {
            "id": "sci-12",
            "word": "Density",
            "pos": "noun",
            "phonetic": "/ˈdensəti/",
            "uzbek": "Zichlik",
            "definition": "The degree of compactness of a substance, defined as mass divided by unit volume.",
            "examples": [
              {
                "en": "Ice floats on water because its crystalline solid density is less than liquid water.",
                "uz": "Muz suvda suzadi, chunki uning qattiq kristall zichligi suyuq suvnnikidan kamroqdir."
              },
              {
                "en": "Lead is prized in radiation shielding owing to its exceptionally high atomic density.",
                "uz": "Qo'rg'oshin o'ta yuqori atom zichligi sababli radiatsiyadan himoyalanishda yuqori baholanadi."
              },
              {
                "en": "Astronomers calculated the astonishing density of collapsed neutron stars.",
                "uz": "Astronomlar siqilgan neytron yulduzlarining hayratlanarli zichligini hisoblab chiqdilar."
              }
            ]
          },
          {
            "id": "sci-13",
            "word": "Electromagnetism",
            "pos": "noun",
            "phonetic": "/ɪˌlektrəʊˈmæɡnətɪzəm/",
            "uzbek": "Elektromagnitizm",
            "definition": "The fundamental physical interaction occurring between electrically charged subatomic particles.",
            "examples": [
              {
                "en": "James Clerk Maxwell formulated the unified mathematical equations of electromagnetism.",
                "uz": "Jeyms Klerk Maksvell elektromagnitizmning yagona matematik tenglamalarini yaratgan."
              },
              {
                "en": "Electric motors operate on principles of electromagnetism to convert current into rotation.",
                "uz": "Elektr motorlari tokni aylanish harakatiga aylantirish uchun elektromagnitizm qonunlariga tayanadi."
              },
              {
                "en": "Light itself travels as an electromagnetic wave through the vacuum of space.",
                "uz": "Yorug'likning o'zi fazoning vakuumida elektromagnit to'lqin sifatida harakatlanadi."
              }
            ]
          },
          {
            "id": "sci-14",
            "word": "Equation",
            "pos": "noun",
            "phonetic": "/ɪˈkweɪʒn/",
            "uzbek": "Tenglama",
            "definition": "A mathematical statement demonstrating the equality of two quantified expressions.",
            "examples": [
              {
                "en": "Einstein's renowned equation E equals mc squared links mass directly to energy.",
                "uz": "Eynshteynning mashhur 'E barobar mc kvadrat' tenglamasi massani to'g'ridan-to'g'ri energiyaga bog'laydi."
              },
              {
                "en": "Solving non-linear differential equations often requires supercomputer calculations.",
                "uz": "Chiziqli bo'lmagan differensial tenglamalarni yechish ko'pincha superkompyuter hisoblashlarini talab qiladi."
              },
              {
                "en": "Balance the chemical equation before determining stoichiometric reaction yields.",
                "uz": "Reaksiya mahsulotlari miqdorini aniqlashdan oldin kimyoviy tenglamani tenglashtirib oling."
              }
            ]
          },
          {
            "id": "sci-15",
            "word": "Friction",
            "pos": "noun",
            "phonetic": "/ˈfrɪkʃn/",
            "uzbek": "Ishqalanish kuchi",
            "definition": "The mechanical resistance encountered when one solid body glides or rolls over another.",
            "examples": [
              {
                "en": "Applying engine lubricant minimizes harmful friction between moving metal pistons.",
                "uz": "Motor moyini qo'llash harakatlanuvchi metall porshenlar orasidagi zararli ishqalanishni kamaytiradi."
              },
              {
                "en": "Bicycle brakes utilize high friction rubber pads to halt rotating wheels rapidly.",
                "uz": "Velosiped tormozlari aylanayotgan g'ildiraklarni tezda to'xtatish uchun yuqori ishqalanishli rezina qoplamalardan foydalanadi."
              },
              {
                "en": "Atmospheric friction generates intense heat when meteorites enter Earth's air.",
                "uz": "Meteoritlar Yer atmosferasiga kirganda havodagi ishqalanish ulkan issiqlikni hosil qiladi."
              }
            ]
          },
          {
            "id": "sci-16",
            "word": "Genetics",
            "pos": "noun",
            "phonetic": "/dʒəˈnetɪks/",
            "uzbek": "Genetika",
            "definition": "The scientific discipline studying heredity and inherited traits across generations.",
            "examples": [
              {
                "en": "Modern genetics has revolutionized personalized cancer treatments and gene therapy.",
                "uz": "Zamonaviy genetika saratonni davolash va gen terapiyasida tub burilish yasadi."
              },
              {
                "en": "Mendel's experiments on pea plants uncovered the foundational principles of genetics.",
                "uz": "Mendelning no'xat o'simliklari ustidagi tajribalari genetikaning asosiy tamoyillarini kashf etdi."
              },
              {
                "en": "Agricultural genetics develops drought-resistant hybrid wheat cultivars.",
                "uz": "Qishloq xo'jaligi genetikasi qurg'oqchilikka chidamli gibrid bug'doy navlarini yaratadi."
              }
            ]
          },
          {
            "id": "sci-17",
            "word": "Gravity",
            "pos": "noun",
            "phonetic": "/ˈɡrævəti/",
            "uzbek": "Tortishish kuchi, gravitatsiya",
            "definition": "The universal attractive force drawing celestial bodies and objects with mass toward each other.",
            "examples": [
              {
                "en": "Lunar gravity is roughly one-sixth the gravitational pull experienced on Earth.",
                "uz": "Oyning tortishish kuchi Yerda his qilinadigan tortishish kuchining taxminan oltidan biriga teng."
              },
              {
                "en": "Gravity keeps the solar planets moving in stable, predictable elliptical orbits.",
                "uz": "Tortishish kuchi quyosh tizimidagi sayyoralarni barqaror va oldindan aytib bo'ladigan elliptik orbitalarda ushlab turadi."
              },
              {
                "en": "Isaac Newton formulated the universal law of gravity after observing falling apples.",
                "uz": "Isaak Nyuton tushayotgan olmalarni kuzatgandan so'ng butun olam tortishish qonunini yaratdi."
              }
            ]
          },
          {
            "id": "sci-18",
            "word": "Molecule",
            "pos": "noun",
            "phonetic": "/ˈmɒlɪkjuːl/",
            "uzbek": "Molekula",
            "definition": "The smallest unit of a compound that retains its chemical properties, consisting of bonded atoms.",
            "examples": [
              {
                "en": "A single water molecule consists of two hydrogen atoms bonded to one oxygen atom.",
                "uz": "Bitta suv molekulasi bitta kislorod atomiga birikkan ikkita vodorod atomidan iborat."
              },
              {
                "en": "Complex organic molecules form the fundamental building blocks of biological life.",
                "uz": "Murakkab organik molekulalar biologik hayotning asosiy poydevorini tashkil etadi."
              },
              {
                "en": "Researchers synthesized an innovative molecule designed to target antibiotic-resistant bacteria.",
                "uz": "Tadqiqotchilar antibiotiklarga chidamli bakteriyalarni nishonga oluvchi innovatsion molekulani sintez qildilar."
              }
            ]
          },
          {
            "id": "sci-19",
            "word": "Mutation",
            "pos": "noun",
            "phonetic": "/mjuːˈteɪʃn/",
            "uzbek": "Mutatsiya, genetik o'zgarish",
            "definition": "A permanent alteration in the genetic sequence of a genomic sequence.",
            "examples": [
              {
                "en": "Beneficial genetic mutations drive biological adaptation through evolutionary natural selection.",
                "uz": "Foydali genetik mutatsiyalar evolyutsion tabiiy tanlanish orqali biologik moslashuvni harakatlantiradi."
              },
              {
                "en": "Exposure to ultraviolet radiation can cause harmful cellular mutations in skin cells.",
                "uz": "Ultrabinafsha nurlanishiga uchrash teri hujayralarida zararli hujayra mutatsiyalarini keltirib chiqarishi mumkin."
              },
              {
                "en": "Scientists tracked the rapid viral mutations across seasonal influenza strains.",
                "uz": "Olimlar mavsumiy gripp shtammlaridagi tezkor virus mutatsiyalarini kuzatib bordilar."
              }
            ]
          },
          {
            "id": "sci-20",
            "word": "Nanotechnology",
            "pos": "noun",
            "phonetic": "/ˌnænəʊtekˈnɒlədʒi/",
            "uzbek": "Nanotexnologiya",
            "definition": "The engineering and manipulation of materials on an atomic or molecular scale.",
            "examples": [
              {
                "en": "Nanotechnology enables the fabrication of microscopic computer chips with immense computing speed.",
                "uz": "Nanotexnologiya ulkan hisoblash tezligiga ega mikroskopik kompyuter chiplarini ishlab chiqarish imkonini beradi."
              },
              {
                "en": "Medical nanotechnology is developing smart nanorobots capable of delivering chemotherapy directly to tumors.",
                "uz": "Tibbiy nanotexnologiya kimyoterapiyani to'g'ridan-to'g'ri o'smalarga yetkazib beruvchi aqlli nanorobotlarni yaratmoqda."
              },
              {
                "en": "Nanotechnology coatings make fabrics waterproof, stain-resistant, and scratch-proof.",
                "uz": "Nanotexnologik qoplamalar matolarni suv o'tkazmaydigan, dog' yuqmaydigan va tirnalmaydigan qiladi."
              }
            ]
          },
          {
            "id": "sci-21",
            "word": "Optics",
            "pos": "noun",
            "phonetic": "/ˈɒptɪks/",
            "uzbek": "Optika (yorug'lik fizikasi)",
            "definition": "The branch of physics studying the properties, behaviors, and instruments of light.",
            "examples": [
              {
                "en": "Advances in fiber optics allow ultra-fast global internet data transmission under oceans.",
                "uz": "Tolali optika sohasidagi yutuqlar okeanlar osti orqali o'ta tezkor global internet uzatilishini ta'minlaydi."
              },
              {
                "en": "Precision optics in astronomical telescopes reveal galaxies billions of light-years away.",
                "uz": "Astronomik teleskoplardagi aniq optika milliardlab yorug'lik yili uzoqlikdagi galaktikalarni namoyon etadi."
              },
              {
                "en": "Optics research underlies laser technology, microscopy, and modern digital cameras.",
                "uz": "Optika tadqiqotlari lazer texnologiyasi, mikroskopiya va zamonaviy raqamli kameralarning asosini tashkil qiladi."
              }
            ]
          },
          {
            "id": "sci-22",
            "word": "Radiation",
            "pos": "noun",
            "phonetic": "/ˌreɪdiˈeɪʃn/",
            "uzbek": "Radiatsiya, nurlanish",
            "definition": "Energy emitted as electromagnetic waves or moving subatomic particles.",
            "examples": [
              {
                "en": "Specialized lead shielding protects hospital radiographers from excess X-ray radiation.",
                "uz": "Maxsus qo'rg'oshin himoyasi shifoxona rentgenologlarini ortiqcha rentgen nurlanishidan saqlaydi."
              },
              {
                "en": "Solar radiation warms the planet and provides energy driving Earth's meteorological cycles.",
                "uz": "Quyosh nurlanishi sayyoramizni isitadi va Yerning meteorologik davrlarini harakatlantiruvchi quvvatni beradi."
              },
              {
                "en": "Radiation therapy is used with high precision to target and destroy localized tumors.",
                "uz": "Radiatsiya terapiyasi mahalliy o'smalarni nishonga olish va yo'q qilish uchun yuqori aniqlikda qo'llaniladi."
              }
            ]
          },
          {
            "id": "sci-23",
            "word": "Spectrum",
            "pos": "noun",
            "phonetic": "/ˈspektrəm/",
            "uzbek": "Spektr, nurlar qamrovi",
            "definition": "The band of electromagnetic wavelengths produced by dispersing white light through a prism.",
            "examples": [
              {
                "en": "Passing sunlight through a glass prism splits light into the visible rainbow spectrum.",
                "uz": "Quyosh nurini shisha prizmadan o'tkazish yorug'likni ko'rinuvchi kamalak spektriga ajratadi."
              },
              {
                "en": "Infrared and ultraviolet wavelengths fall beyond the visible electromagnetic spectrum.",
                "uz": "Infraqizil va ultrabinafsha to'lqin uzunliklari ko'rinadigan elektromagnit spektrdan tashqarida joylashgan."
              },
              {
                "en": "Broad-spectrum antibiotics treat infections caused by a wide range of bacterial organisms.",
                "uz": "Keng spektrli antibiotiklar keng doiradagi bakteriyalar keltirib chiqargan infeksiyalarni davolaydi."
              }
            ]
          },
          {
            "id": "sci-24",
            "word": "Thermodynamics",
            "pos": "noun",
            "phonetic": "/ˌθɜːməʊdaɪˈnæmɪks/",
            "uzbek": "Termodinamika",
            "definition": "The branch of physical science studying the relations between heat, work, temperature, and energy.",
            "examples": [
              {
                "en": "The first law of thermodynamics states that total energy in a closed system remains conserved.",
                "uz": "Termodinamikaning birinchi qonuni yopiq tizimdagi umumiy energiya saqlanib qolishini ta'kidlaydi."
              },
              {
                "en": "Engineering steam turbines requires an in-depth understanding of applied thermodynamics.",
                "uz": "Bug' turbinalarini loyihalash amaliy termodinamikani chuqur tushunishni talab qiladi."
              },
              {
                "en": "Entropy principles in thermodynamics dictate the irreversible direction of natural energy flow.",
                "uz": "Termodinamikadagi entropiya qonunlari tabiiy energiya oqimining ortga qaytmas yo'nalishini belgilab beradi."
              }
            ]
          },
          {
            "id": "sci-25",
            "word": "Velocity",
            "pos": "noun",
            "phonetic": "/vəˈlɒsəti/",
            "uzbek": "Tezlik (yo'nalishli vektor tezlik)",
            "definition": "The rate of displacement of an object in a specified directional vector.",
            "examples": [
              {
                "en": "A spacecraft must attain escape velocity to break free from Earth's gravitational field.",
                "uz": "Kosmik kema Yerning tortishish maydonidan chiqib ketish uchun ikkinchi kosmik tezlikka erishishi kerak."
              },
              {
                "en": "Unlike scalar speed, physical velocity defines both the speed of travel and exact direction.",
                "uz": "Skalyar tezlikdan farqli o'laroq, fizik vektor tezlik harakat tezligini ham, aniq yo'nalishni ham belgilaydi."
              },
              {
                "en": "Wind velocity and atmospheric pressure dictate commercial aircraft flight paths.",
                "uz": "Shamol tezligi va atmosfera bosimi fuqaro aviatsiyasi samolyotlarining parvoz yo'nalishini belgilaydi."
              }
            ]
          }
        ],
        "unitNumber": 3,
        "category": "Science & Innovation"
      },
      {
        "id": "b2-u2-higheredu",
        "unitNumber": 4,
        "title": "Unit 04: Higher Education & Academic Study (Oliy ta'lim va tadqiqot)",
        "category": "Education & Academia",
        "icon": "fa-university",
        "color": "from-sky-500 to-indigo-700",
        "description": "Universitet hayoti, ma'ruzalar, ilmiy ishlar va stipendiyalar",
        "words": [
          {
            "id": "hed-1",
            "word": "Undergraduate",
            "pos": "noun",
            "phonetic": "/ˌʌndəˈɡrædʒuət/",
            "uzbek": "Bakalavriat talabasi",
            "definition": "A student at a university who has not yet taken a first degree.",
            "examples": [
              {
                "en": "Over three thousand new undergraduate students enrolled in engineering programs.",
                "uz": "Muhandislik dasturlariga uch mingdan ortiq yangi bakalavriat talabalari qabul qilindi."
              },
              {
                "en": "Undergraduates attend mandatory lecture series alongside small discussion seminars.",
                "uz": "Bakalavrlar kichik munozara seminarlari bilan birga majburiy ma'ruzalarga ham qatnashadilar."
              },
              {
                "en": "The university library provides specialized research orientations for first-year undergraduates.",
                "uz": "Universitet kutubxonasi birinchi kurs bakalavrlari uchun maxsus ilmiy tanishtiruvlarni o'tkazadi."
              }
            ]
          },
          {
            "id": "hed-2",
            "word": "Postgraduate",
            "pos": "noun",
            "phonetic": "/ˌpəʊstˈɡrædʒuət/",
            "uzbek": "Magistrant, doktorant",
            "definition": "A student who has achieved a degree and is studying for a higher degree.",
            "examples": [
              {
                "en": "Postgraduate researchers conduct independent scientific investigations in laboratory facilities.",
                "uz": "Magistrant va doktorantlar laboratoriyalarda mustaqil ilmiy tadqiqotlar olib boradilar."
              },
              {
                "en": "She won a prestigious international scholarship to pursue postgraduate studies in Oxford.",
                "uz": "U Oksfordda magistraturada tahsil olish uchun nufuzli xalqaro stipendiyani qo'lga kiritdi."
              },
              {
                "en": "Postgraduates are expected to contribute original peer-reviewed papers to academic journals.",
                "uz": "Magistrantlardan ilmiy jurnallarga mustaqil taqrizli maqolalar kiritish kutiladi."
              }
            ]
          },
          {
            "id": "hed-3",
            "word": "Tuition fees",
            "pos": "noun",
            "phonetic": "/tjuˈɪʃn fiːz/",
            "uzbek": "O'qish to'lovi (kontrakt)",
            "definition": "Money charged for teaching or instruction by a university.",
            "examples": [
              {
                "en": "Student grants and bursaries help underprivileged youngsters cover university tuition fees.",
                "uz": "Talabalik grantlari va yordamlari kam ta'minlangan yoshlarga kontrakt to'lovlarini qoplashga yordam beradi."
              },
              {
                "en": "Many students work part-time campus jobs to pay for their annual tuition fees.",
                "uz": "Ko'plab talabalar yillik o'qish to'lovini qoplash uchun universitet hududida yarim stavka ishlaydilar."
              },
              {
                "en": "Government subsidies keep higher education tuition fees affordable for national residents.",
                "uz": "Davlat subsidiyalari mahalliy fuqarolar uchun oliy ta'lim kontrakt narxlarini hamyonbop saqlab turadi."
              }
            ]
          },
          {
            "id": "hed-4",
            "word": "Scholarship",
            "pos": "noun",
            "phonetic": "/ˈskɒləʃɪp/",
            "uzbek": "Stipendiya, o'quv granti",
            "definition": "A grant or payment made to support a student's education, awarded on the basis of academic achievement.",
            "examples": [
              {
                "en": "Matt won a merit-based scholarship because of his outstanding secondary school academic record.",
                "uz": "Mett o'zining maktabdagi a'lo baholari sababli iqtidorli o'quvchilar stipendiyasini qo'lga kiritdi."
              },
              {
                "en": "The presidential scholarship covers complete tuition, campus boarding, and living expenses.",
                "uz": "Prezident stipendiyasi to'liq kontrakt, yotoqxona va yashash xarajatlarini qoplaydi."
              },
              {
                "en": "Talented musicians can apply for competitive international performance scholarships.",
                "uz": "Iqtidorli sozandalar nufuzli xalqaro ijrochilik stipendiyalariga ariza topshirishlari mumkin."
              }
            ]
          },
          {
            "id": "hed-5",
            "word": "Dissertation",
            "pos": "noun",
            "phonetic": "/ˌdɪsəˈteɪʃn/",
            "uzbek": "Dissertatsiya (magistrlik ilmiy ishi)",
            "definition": "A long essay on a particular subject, especially one written for a university degree.",
            "examples": [
              {
                "en": "She spent six months conducting fieldwork in Samarkand for her master's dissertation.",
                "uz": "U o'zining magistrlik dissertatsiyasi uchun Samarqandda olti oy amaliy tadqiqot olib bordi."
              },
              {
                "en": "Students must submit their completed dissertation to the faculty board by May.",
                "uz": "Talabalar o'zlarining tayyor dissertatsiyalarini may oyiga qadar fakultet kengashiga topshirishlari shart."
              },
              {
                "en": "Her innovative dissertation examined ancient urban irrigation systems across Central Asia.",
                "uz": "Uning yangicha dissertatsiyasi Markaziy Osiyodagi qadimiy shahar sug'orish tizimlarini tahlil qildi."
              }
            ]
          },
          {
            "id": "hed-6",
            "word": "Campus",
            "pos": "noun",
            "phonetic": "/ˈkæmpəs/",
            "uzbek": "Universitet shaharchasi (kampus)",
            "definition": "The grounds and buildings of a university or college.",
            "examples": [
              {
                "en": "The university campus features modern dormitories, research labs, and sports arenas.",
                "uz": "Universitet shaharchasi zamonaviy yotoqxonalar, ilmiy laboratoriyalar va sport maydonlariga ega."
              },
              {
                "en": "Bicycle paths connect all lecture halls across the pedestrian-friendly green campus.",
                "uz": "Velosiped yo'laklari ko'kalamzor kampus bo'ylab barcha ma'ruza zallarini birlashtirib turadi."
              },
              {
                "en": "Living on campus enables students to fully participate in extracurricular student societies.",
                "uz": "Kampusda istiqomat qilish talabalarga darsdan tashqari to'garaklarda faol ishtirok etish imkonini beradi."
              }
            ]
          },
          {
            "id": "hed-7",
            "word": "Lecture",
            "pos": "noun",
            "phonetic": "/ˈlektʃə/",
            "uzbek": "Ma'ruza (akademik dars)",
            "definition": "An educational talk to an audience, especially to students in a university.",
            "examples": [
              {
                "en": "The visiting Oxford professor delivered a brilliant guest lecture on modern linguistics.",
                "uz": "Oksforddan kelgan mehmon professor zamonaviy tilshunoslik bo'yicha ajoyib ma'ruza o'qidi."
              },
              {
                "en": "Undergraduates took detailed notes during the two-hour macroeconomics lecture.",
                "uz": "Bakalavr talabalari ikki soatlik makroiqtisodiyot ma'ruzasi davomida batafsil qaydlar yozib oldilar."
              },
              {
                "en": "All lecture recordings are uploaded online to the student university portal.",
                "uz": "Barcha ma'ruza audio-video yozuvlari universitetning talabalar portaliga joylab boriladi."
              }
            ]
          },
          {
            "id": "hed-8",
            "word": "Tutorial",
            "pos": "noun",
            "phonetic": "/tjuːˈtɔːriəl/",
            "uzbek": "Amaliy mashg'ulot, seminar",
            "definition": "A period of tuition given to an individual or very small group of students.",
            "examples": [
              {
                "en": "At university I was lucky to have one-to-one tutorials with my faculty mentor.",
                "uz": "Universitetda ustozim bilan yakkama-yakka amaliy mashg'ulotlar o'tkazish baxtiga muyassar bo'ldim."
              },
              {
                "en": "Students discuss essay outlines and receive feedback during weekly tutorials.",
                "uz": "Talabalar haftalik amaliy mashg'ulotlarda insho rejalarini muhokama qilib, tavsiyalar oladilar."
              },
              {
                "en": "Small-group tutorials encourage active problem-solving and rigorous debate.",
                "uz": "Kichik guruhli seminarlar faol muammolarni yechish va qizg'in ilmiy bahslarga undaydi."
              }
            ]
          },
          {
            "id": "hed-9",
            "word": "Thesis",
            "pos": "noun",
            "phonetic": "/ˈθiːsɪs/",
            "uzbek": "Doktorlik dissertatsiyasi, tezis",
            "definition": "A long research-based original treatise submitted for a doctorate degree.",
            "examples": [
              {
                "en": "His doctoral thesis examined the quantum mechanics of semiconductor nanomaterials.",
                "uz": "Uning doktorlik dissertatsiyasi yarimo'tkazgich nanomateriallar kvant mexanikasini o'rgandi."
              },
              {
                "en": "She successfully defended her doctoral thesis before the international academic panel.",
                "uz": "U xalqaro ilmiy kengash oldida o'z doktorlik dissertatsiyasini muvaffaqiyatli himoya qildi."
              },
              {
                "en": "A PhD thesis represents years of rigorous original research and experimentation.",
                "uz": "Falsafa doktori (PhD) dissertatsiyasi ko'p yillik mashaqqatli mustaqil tadqiqotlar mahsulidir."
              }
            ]
          },
          {
            "id": "hed-10",
            "word": "Academic",
            "pos": "adjective",
            "phonetic": "/ˌækəˈdemɪk/",
            "uzbek": "Akademik, ilmiy",
            "definition": "Relating to education and scholarship, especially at college or university level.",
            "examples": [
              {
                "en": "The university fosters high standards of rigorous academic integrity and inquiry.",
                "uz": "Universitet yuksak ilmiy halollik va izlanish mezonlarini rivojlantiradi."
              },
              {
                "en": "Peer-reviewed academic journals publish cutting-edge scientific discoveries.",
                "uz": "Taqrizli ilmiy jurnallar sohaning eng ilg'or ilmiy kashfiyotlarini chop etadi."
              },
              {
                "en": "He dedicated his entire life to scholarly research and academic excellence.",
                "uz": "U butun hayotini ilmiy izlanishlar va akademik yetuklikka bag'ishladi."
              }
            ]
          }
        ]
      },
      {
        "id": "b2-u5-media",
        "unitNumber": 5,
        "title": "Unit 05: The Media & Journalism (Ommaviy axborot va jurnalistika)",
        "category": "Media & Press",
        "icon": "fa-newspaper",
        "color": "from-blue-600 to-indigo-800",
        "description": "Bosma matbuot, tahririyat, senzura va axborot tarqatish",
        "words": [
          {
            "id": "med-1",
            "word": "Broadcast",
            "pos": "noun",
            "phonetic": "/ˈbrɔːdkɑːst/",
            "uzbek": "Eshittirish, ko'rsatuv",
            "definition": "A transmission of programmes by radio or television.",
            "examples": [
              {
                "en": "Millions watched the live television broadcast of the national independence festivities.",
                "uz": "Millionlab odamlar milliy mustaqillik tantanalarining jonli teleko'rsatuvini tomosha qildilar."
              },
              {
                "en": "The national radio network broadcasts hourly news updates across the globe.",
                "uz": "Milliy radiotashkilot butun dunyo bo'ylab har soatlik yangiliklar eshittirishlarini uzatadi."
              },
              {
                "en": "Emergency announcements were interrupted by a special live news broadcast.",
                "uz": "Favqulodda e'lonlar maxsus tezkor xabar eshittirishi orqali efirga uzatildi."
              }
            ]
          },
          {
            "id": "med-2",
            "word": "Circulation",
            "pos": "noun",
            "phonetic": "/ˌsɜːkjəˈleɪʃn/",
            "uzbek": "Adad, tiraj",
            "definition": "The number of copies distributed of a newspaper or magazine.",
            "examples": [
              {
                "en": "The daily morning newspaper boasts a paid circulation of half a million copies.",
                "uz": "Kundalik ertalabki gazeta yarim million nusxali pullik tiraj bilan faxrlanadi."
              },
              {
                "en": "Publishing investigative exposés significantly boosted the magazine's regional circulation.",
                "uz": "Surishtiruv maqolalarining chop etilishi jurnalning mintaqadagi adadini sezilarli oshirdi."
              },
              {
                "en": "Print circulation has declined as readers migrate toward digital web platforms.",
                "uz": "O'quvchilar raqamli veb-sahifalarga o'tgani sari bosma nashrlar adadi kamayib bormoqda."
              }
            ]
          },
          {
            "id": "med-3",
            "word": "Headline",
            "pos": "noun",
            "phonetic": "/ˈhedlaɪn/",
            "uzbek": "Sarlavha",
            "definition": "A heading at the top of an article or page in a newspaper.",
            "examples": [
              {
                "en": "The sensational discovery made front-page headlines across every major national newspaper.",
                "uz": "Ushbu shov-shuvli kashfiyot har bir yirik gazeta bosh sahifasi sarlavhasiga aylandi."
              },
              {
                "en": "Newspaper editors craft striking, concise headlines to catch readers' visual attention.",
                "uz": "Gazeta muharrirlari o'quvchi e'tiborini tortish uchun qisqa va jarangdor sarlavhalar tuzadilar."
              },
              {
                "en": "I quickly scanned the morning news headlines over a hot cup of coffee.",
                "uz": "Men bir finjon qaynoq qahva ustida ertalabki yangiliklar sarlavhalarini tezda ko'zdan kechirdim."
              }
            ]
          },
          {
            "id": "med-4",
            "word": "Editorial",
            "pos": "noun",
            "phonetic": "/ˌedɪˈtɔːriəl/",
            "uzbek": "Bosh maqola (tahririyat maqolasi)",
            "definition": "A newspaper article written by or on behalf of an editor that gives an opinion.",
            "examples": [
              {
                "en": "The newspaper's daily editorial strongly criticized the proposed municipal budget cuts.",
                "uz": "Gazetaning bosh maqolasi taklif etilgan shahar byudjeti qisqartirishlarini keskin tanqid qildi."
              },
              {
                "en": "The editorial page reflects the formal journalistic viewpoint of the publication's editors.",
                "uz": "Bosh maqola sahifasi nashr tahririyatining rasmiy jurnalistik qarashini ifodalaydi."
              },
              {
                "en": "Scholars analyze editorials to gauge shifting political alignments across national media.",
                "uz": "Olimlar ommaviy axborot vositalaridagi siyosiy o'zgarishlarni baholash uchun tahririyat maqolalarini tahlil qiladilar."
              }
            ]
          },
          {
            "id": "med-5",
            "word": "Censorship",
            "pos": "noun",
            "phonetic": "/ˈsensəʃɪp/",
            "uzbek": "Senzura",
            "definition": "The suppression or prohibition of any parts of books, news, or films that are considered politically unacceptable.",
            "examples": [
              {
                "en": "Strict government censorship prevented independent journalists from broadcasting critical reports.",
                "uz": "Qat'iy davlat senzurosi mustaqil jurnalistlarning tanqidiy hisobotlar uzatishiga to'sqinlik qildi."
              },
              {
                "en": "Modern digital streaming services actively resist arbitrary political censorship.",
                "uz": "Zamonaviy raqamli oqim xizmatlari asossiz siyosiy senzuralarga qarshi faol kurashmoqda."
              },
              {
                "en": "Writers historically utilized allegory and subtle metaphor to bypass strict state censorship.",
                "uz": "Yozuvchilar tarixan qat'iy davlat senzurasini chetlab o'tish uchun majoziy metaforalardan foydalanganlar."
              }
            ]
          },
          {
            "id": "med-6",
            "word": "Tabloid",
            "pos": "noun",
            "phonetic": "/ˈtæblɔɪd/",
            "uzbek": "Sariq matbuot (shov-shuvli gazeta)",
            "definition": "A newspaper having pages half the size of those of the average broadsheet, typically popular in style and dominated by sensational stories.",
            "examples": [
              {
                "en": "Tabloid newspapers frequently publish sensational gossip about pop stars and athletes.",
                "uz": "Sariq gazetalar estrada yulduzlari va sportchilar haqida shov-shuvli g'iybatlarni tez-tez chop etadi."
              },
              {
                "en": "Sensational tabloid headlines prioritize eye-catching drama over rigorous journalistic factual accuracy.",
                "uz": "Shov-shuvli gazeta sarlavhalari faktlarning aniqligidan ko'ra ko'zga tashlanuvchi dramaga urg'u beradi."
              },
              {
                "en": "Celebrities often file defamation lawsuits against unscrupulous tabloid publications.",
                "uz": "Mashhurlar vijdonsiz sariq nashrlarga qarshi tuhmat bo'yicha tez-tez sudga da'vo arizasi kiritadilar."
              }
            ]
          },
          {
            "id": "med-7",
            "word": "Journalist",
            "pos": "noun",
            "phonetic": "/ˈdʒɜːnəlɪst/",
            "uzbek": "Jurnalist",
            "definition": "A person who writes for newspapers, magazines, or news websites.",
            "examples": [
              {
                "en": "The brave investigative journalist exposed systemic bribery in municipal contracting.",
                "uz": "Jasur surishtiruvchi jurnalist shahar qurilishidagi tizimli poraxo'rlikni fosh qildi."
              },
              {
                "en": "Journalists interview eyewitnesses and cross-examine official sources before publishing stories.",
                "uz": "Jurnalistlar xabarlarni chiqarishdan oldin guvohlarni so'roqlab, rasmiy manbalarni qayta tekshiradilar."
              },
              {
                "en": "Professional journalists adhere strictly to ethical codes of objective and fair reporting.",
                "uz": "Professional jurnalistlar xolis va adolatli axborot tarqatish axloqiy mezonlariga qat'iy rioya qiladilar."
              }
            ]
          },
          {
            "id": "med-8",
            "word": "Coverage",
            "pos": "noun",
            "phonetic": "/ˈkʌvərɪdʒ/",
            "uzbek": "Yoritish, xabarlar ko'lami",
            "definition": "The treatment of an issue, event, or person in the media.",
            "examples": [
              {
                "en": "International television channels provided round-the-clock live coverage of the peace summit.",
                "uz": "Xalqaro telekanallar tinchlik sammitini kechayu kunduz to'g'ridan-to'g'ri yoritib bordilar."
              },
              {
                "en": "The scientific breakthrough received widespread positive media coverage across the globe.",
                "uz": "Ushbu ilmiy kashfiyot butun dunyo bo'ylab keng va ijobiy ommaviy axborot e'tirofiga sazovor bo'ldi."
              },
              {
                "en": "Critics noted that cultural arts events rarely receive adequate television news coverage.",
                "uz": "Tanqidchilar san'at va madaniyat tadbirlari televideniyeda yetarli darajada yoritilmasligini qayd etishdi."
              }
            ]
          },
          {
            "id": "med-9",
            "word": "Exclusive",
            "pos": "noun",
            "phonetic": "/ɪkˈskluːsɪv/",
            "uzbek": "Eksklyuziv xabar (boshqalarda yo'q yangilik)",
            "definition": "An item or story published or broadcast by only one newspaper or television station.",
            "examples": [
              {
                "en": "The reporter secured an exclusive one-on-one interview with the visiting head of state.",
                "uz": "Muxbir tashrif buyurgan davlat rahbari bilan eksklyuziv yakkama-yakka intervyuga erishdi."
              },
              {
                "en": "Broadcasting this major news exclusive gave the station a decisive ratings advantage.",
                "uz": "Ushbu katta eksklyuziv yangilikni uzatish telekanalga tomoshabinlar ko'rsatkichida yaqqol ustunlik berdi."
              },
              {
                "en": "Newspapers compete aggressively to break political scoops and exclusives ahead of rivals.",
                "uz": "Gazetalar raqiblaridan oldin siyosiy yangiliklar va eksklyuzivlarni chiqarish uchun kurashadilar."
              }
            ]
          },
          {
            "id": "med-10",
            "word": "Columnist",
            "pos": "noun",
            "phonetic": "/ˈkɒləmnɪst/",
            "uzbek": "Sharhlovchi, rukn muallifi",
            "definition": "A journalist contributing regularly to a newspaper or magazine.",
            "examples": [
              {
                "en": "The respected political columnist writes a weekly thought-provoking commentary on foreign policy.",
                "uz": "Hurmatli siyosiy sharhlovchi tashqi siyosat bo'yicha har hafta o'yga toldiruvchi tahlil yozadi."
              },
              {
                "en": "Readers eagerly await the Sunday paper to read their favourite humorous columnist.",
                "uz": "O'quvchilar sevimli qiziqchi rukn muallifini o'qish uchun yakshanba gazetasini intizorlik bilan kutishadi."
              },
              {
                "en": "A syndicated newspaper columnist reaches an audience of millions across multiple daily papers.",
                "uz": "Markaziy sharhlovchining maqolalari bir nechta gazetalarda millionlab o'quvchilarga yetib boradi."
              }
            ]
          }
        ]
      },
      {
        "id": "b2-u6-politics",
        "unitNumber": 6,
        "title": "Unit 06: Public Institutions & Politics (Davlat institutlari va siyosat)",
        "category": "Institutions & Politics",
        "icon": "fa-landmark-dome",
        "color": "from-red-600 to-rose-800",
        "description": "Qonunchilik, deputatlar, referendum va vazirliklar",
        "words": [
          {
            "id": "ins-1",
            "word": "Legislation",
            "pos": "noun",
            "phonetic": "/ˌledʒɪsˈleɪʃn/",
            "uzbek": "Qonunchilik, qonun hujjatlari",
            "definition": "Laws, considered collectively.",
            "examples": [
              {
                "en": "New environmental protection legislation mandates stricter industrial emission quotas.",
                "uz": "Yangi atrof-muhitni muhofaza qilish qonunchiligi sanoat chiqindilari bo'yicha qat'iy mezonlarni belgilaydi."
              },
              {
                "en": "Draft legislation undergoes multiple detailed committee scrutiny stages in parliament.",
                "uz": "Qonun loyihasi parlamentda bir necha bosqichli qo'mita sinchiklab tekshiruvidan o'tadi."
              },
              {
                "en": "The administration enacted landmark civil rights legislation safeguarding worker protections.",
                "uz": "Rahbariyat xodimlar manfaatlarini himoya qiluvchi muhim fuqarolik huquqlari qonunchiligini qabul qildi."
              }
            ]
          },
          {
            "id": "ins-2",
            "word": "Referendum",
            "pos": "noun",
            "phonetic": "/ˌrefəˈrendəm/",
            "uzbek": "Referendum (umumxalq so'rovi)",
            "definition": "A general vote by the electorate on a single political question.",
            "examples": [
              {
                "en": "Citizens voted decisively in favour of constitutional reforms during the national referendum.",
                "uz": "Fuqarolar umumxalq referendumida konstitutsiyaviy islohotlarni qat'iy qo'llab-quvvatlab ovoz berdilar."
              },
              {
                "en": "Holding a national referendum allows the public to decide crucial geopolitical matters directly.",
                "uz": "Umumxalq referendumini o'tkazish xalqqa muhim geosiyosiy masalalarni to'g'ridan-to'g'ri hal qilish imkonini beradi."
              },
              {
                "en": "The referendum turnout surpassed eighty percent across every voting constituency.",
                "uz": "Har bir saylov okrugida referendumdagi ishtirok sakson foizdan oshib ketdi."
              }
            ]
          },
          {
            "id": "ins-3",
            "word": "Opposition",
            "pos": "noun",
            "phonetic": "/ˌɒpəˈzɪʃn/",
            "uzbek": "Muxolifat",
            "definition": "Resistance or dissent, expressed in action or argument; the political party out of power.",
            "examples": [
              {
                "en": "The parliamentary opposition scrutinized the cabinet's proposed economic austerity package.",
                "uz": "Parlament muxolifati vazirlar mahkamasining tejamkorlik rejasini sinchiklab tekshirdi."
              },
              {
                "en": "A vibrant political opposition ensures governmental transparency and checks on executive authority.",
                "uz": "Faol siyosiy muxolifat davlatning shaffofligini va ijroiya hokimiyati nazoratini ta'minlaydi."
              },
              {
                "en": "Opposition party leaders organized peaceful civic rallies advocating electoral reform.",
                "uz": "Muxolifat partiyasi yetakchilari saylov islohotlarini talab qilib tinch fuqarolik mitinglarini uyushtirdilar."
              }
            ]
          },
          {
            "id": "ins-4",
            "word": "Coalition",
            "pos": "noun",
            "phonetic": "/ˌkəʊəˈlɪʃn/",
            "uzbek": "Koalitsiya (siyosiy ittifoq)",
            "definition": "A temporary alliance for combined action, especially of political parties.",
            "examples": [
              {
                "en": "Three centrist political parties formed a coalition government following the inconclusive election.",
                "uz": "Saylov natijalari aniq bo'lmagach, uchta markaziy partiya koalitsion hukumat tuzdilar."
              },
              {
                "en": "Negotiating consensus policies can be challenging within a multi-party coalition.",
                "uz": "Ko'p partiyali koalitsiya ichida umumiy kelishuv qarorlarini ishlab chiqish qiyin kechishi mumkin."
              },
              {
                "en": "The international diplomatic coalition coordinated humanitarian aid delivery to war-torn areas.",
                "uz": "Xalqaro diplomatik koalitsiya urushdan aziyat chekkan hududlarga insonparvarlik yordamini muvofiqlashtirdi."
              }
            ]
          },
          {
            "id": "ins-5",
            "word": "Constituency",
            "pos": "noun",
            "phonetic": "/kənˈstɪtʃuənsi/",
            "uzbek": "Saylov okrugi",
            "definition": "A body of voters in a specified area who elect a representative to a legislative body.",
            "examples": [
              {
                "en": "The elected member of parliament regularly visits his local constituency to hear citizens' concerns.",
                "uz": "Saylangan parlament deputati fuqarolar muammolarini eshitish uchun o'z saylov okrugiga muntazam borib turadi."
              },
              {
                "en": "Demographic shifts required redrawing electoral boundary lines across rural constituencies.",
                "uz": "Aholi o'zgarishi qishloq saylov okruglari chegaralarini qayta belgilashni taqozo etdi."
              },
              {
                "en": "MPs represent the diverse socioeconomic interests of all voters living in their constituency.",
                "uz": "Deputatlar o'z saylov okrugida yashovchi barcha fuqarolarning turli ijtimoiy manfaatlarini himoya qiladilar."
              }
            ]
          },
          {
            "id": "ins-6",
            "word": "Cabinet",
            "pos": "noun",
            "phonetic": "/ˈkæbɪnət/",
            "uzbek": "Vazirlar mahkamasi",
            "definition": "A committee of senior ministers responsible for controlling government policy.",
            "examples": [
              {
                "en": "The prime minister assembled the cabinet ministers for an emergency national defense session.",
                "uz": "Bosh vazir milliy mudofaa bo'yicha favqulodda yig'ilish uchun vazirlar mahkamasini to'pladi."
              },
              {
                "en": "Collective ministerial responsibility mandates that all cabinet members endorse state decisions.",
                "uz": "Kollektiv mas'uliyat barcha vazirlar mahkamasi a'zolaridan davlat qarorlarini qo'llab-quvvatlashni talab qiladi."
              },
              {
                "en": "The cabinet approved a sweeping infrastructure modernisation initiative for public transport.",
                "uz": "Vazirlar mahkamasi jamoat transportini modernizatsiya qilish bo'yicha katta dasturni ma'qulladi."
              }
            ]
          },
          {
            "id": "ins-7",
            "word": "Welfare",
            "pos": "noun",
            "phonetic": "/ˈwelfeə/",
            "uzbek": "Ijtimoiy ta'minot, farovonlik",
            "definition": "Statutory procedure or social effort designed to promote the basic physical and material well-being of people in need.",
            "examples": [
              {
                "en": "The comprehensive social welfare system provides financial support to vulnerable low-income families.",
                "uz": "Keng qamrovli ijtimoiy ta'minot tizimi kam ta'minlangan oilalarga moliyaviy yordam ko'rsatadi."
              },
              {
                "en": "Government reforms aimed to streamline welfare administration and eliminate bureaucratic fraud.",
                "uz": "Davlat islohotlari ijtimoiy ta'minot boshqaruvini soddalashtirish va firibgarliklarni yo'qotishni maqsad qildi."
              },
              {
                "en": "Investment in early childhood education directly enhances collective social welfare.",
                "uz": "Maktabgacha ta'limga sarmoya kiritish umumiy ijtimoiy farovonlikni bevosita oshiradi."
              }
            ]
          },
          {
            "id": "ins-8",
            "word": "Diplomacy",
            "pos": "noun",
            "phonetic": "/dɪˈpləʊməsi/",
            "uzbek": "Diplomatiya",
            "definition": "The profession, activity, or skill of managing international relations.",
            "examples": [
              {
                "en": "Patient bilateral diplomacy successfully resolved the complex cross-border trade disagreement.",
                "uz": "Sabrli ikki tomonlama diplomatiya chegaradagi murakkab savdo kelishmovchiligini hal etdi."
              },
              {
                "en": "Skilled diplomats rely on tact, mutual respect, and cultural empathy in negotiations.",
                "uz": "Mohir diplomatlar muzokaralarda xushmuomalalik, o'zaro hurmat va madaniy tushunishga tayanadilar."
              },
              {
                "en": "Preventive diplomacy prevents small regional conflicts from escalating into all-out warfare.",
                "uz": "Oldini oluvchi diplomatiya kichik mintaqaviy nizolarning katta urushga aylanib ketishiga yo'l qo'ymaydi."
              }
            ]
          },
          {
            "id": "ins-9",
            "word": "Treaty",
            "pos": "noun",
            "phonetic": "/ˈtriːti/",
            "uzbek": "Xalqaro shartnoma, bitim",
            "definition": "A formally concluded and ratified agreement between states.",
            "examples": [
              {
                "en": "Representatives of twenty sovereign nations signed the historical nuclear non-proliferation treaty.",
                "uz": "Yigirmata mustaqil davlat vakillari yadro qurolini tarqatmaslik bo'yicha tarixiy shartnomani imzoladilar."
              },
              {
                "en": "The commercial trade treaty eliminated costly customs tariffs on agricultural exports.",
                "uz": "Savdo-iqtisodiy shartnoma qishloq xo'jaligi eksportidagi qimmat bojxona to'lovlarini bekor qildi."
              },
              {
                "en": "Both neighboring countries ratified the peace treaty, bringing twenty years of border disputes to a close.",
                "uz": "Ikkala qo'shni davlat tinchlik shartnomasini tasdiqlab, yigirma yillik chegara bahslariga nuqta qo'ydilar."
              }
            ]
          },
          {
            "id": "ins-10",
            "word": "Policy",
            "pos": "noun",
            "phonetic": "/ˈpɒləsi/",
            "uzbek": "Siyosat, strategik yo'nalish",
            "definition": "A course or principle of action adopted or proposed by a government.",
            "examples": [
              {
                "en": "The central bank introduced a prudent monetary policy to stabilize the national currency.",
                "uz": "Markaziy bank milliy valyutani barqarorlashtirish uchun oqilona pul-kredit siyosatini joriy etdi."
              },
              {
                "en": "The university enacted a strict zero-tolerance policy regarding academic plagiarism.",
                "uz": "Universitet akademik ko'chirmachilikka qarshi murosasiz qat'iy siyosatni qabul qildi."
              },
              {
                "en": "Governments formulate evidence-based environmental policies to reduce carbon emissions.",
                "uz": "Hukumatlar uglerod chiqindilarini kamaytirish uchun ilmiy asoslangan ekologik siyosatni ishlab chiqadilar."
              }
            ]
          }
        ]
      },
      {
        "id": "b2-u7-science",
        "unitNumber": 7,
        "title": "Unit 07: Science & Technology in Society (Ilm-fan va ilg'or texnologiya)",
        "category": "Science & Society",
        "icon": "fa-flask-vial",
        "color": "from-teal-500 to-cyan-700",
        "description": "Laboratoriya tajribalari, genetika, kashfiyotlar va etika",
        "words": [
          {
            "id": "ste-1",
            "word": "Genetics",
            "pos": "noun",
            "phonetic": "/dʒəˈnetɪks/",
            "uzbek": "Genetika fani",
            "definition": "The study of heredity and the variation of inherited characteristics.",
            "examples": [
              {
                "en": "Modern genetics has transformed our understanding of rare hereditary illnesses.",
                "uz": "Zamonaviy genetika fani kam uchraydigan irsiy kasalliklar haqidagi tasavvurimizni tubdan o'zgartirdi."
              },
              {
                "en": "Agricultural genetics develops high-yield wheat varieties capable of resisting severe droughts.",
                "uz": "Qishloq xo'jaligi genetikasi qattiq qurg'oqchilikka chidamli serhosil bug'doy navlarini yaratmoqda."
              },
              {
                "en": "Mendel's experiments with pea plants laid the foundational mathematical laws of genetics.",
                "uz": "Mendelning no'xat o'simliklari ustidagi tajribalari genetikaning asosiy qonuniyatlarini kashf etdi."
              }
            ]
          },
          {
            "id": "ste-2",
            "word": "Experiment",
            "pos": "noun",
            "phonetic": "/ɪkˈsperɪmənt/",
            "uzbek": "Eksperiment, ilmiy tajriba",
            "definition": "A scientific procedure undertaken to make a discovery or test a hypothesis.",
            "examples": [
              {
                "en": "Scientists conducted rigorous controlled experiments to test the effectiveness of the vaccine.",
                "uz": "Olimlar vaksinaning samaradorligini sinash uchun qat'iy nazorat ostida ilmiy tajribalar o'tkazdilar."
              },
              {
                "en": "The laboratory experiment yielded surprising results that contradicted initial predictions.",
                "uz": "Laboratoriya tajribasi dastlabki taxminlarga zid bo'lgan kutilmagan natijalarni berdi."
              },
              {
                "en": "Pupils wore safety goggles and protective gloves during the chemistry experiment.",
                "uz": "O'quvchilar kimyo tajribasi paytida himoya ko'zoynaklari va qo'lqoplarini kiyib oldilar."
              }
            ]
          },
          {
            "id": "ste-3",
            "word": "Laboratory",
            "pos": "noun",
            "phonetic": "/ləˈbɒrətri/",
            "uzbek": "Laboratoriya",
            "definition": "A room or building equipped for scientific research or experiments.",
            "examples": [
              {
                "en": "The university constructed a state-of-the-art biochemistry research laboratory.",
                "uz": "Universitet eng so'nggi zamonaviy biokimyo ilmiy laboratoriyasini qurdirdi."
              },
              {
                "en": "Strict safety protocols must be observed inside the chemical research laboratory.",
                "uz": "Kimyoviy tadqiqot laboratoriyasi ichida qat'iy xavfsizlik qoidalariga rioya qilinishi shart."
              },
              {
                "en": "Technicians sterilize all glass apparatus before starting laboratory procedures.",
                "uz": "Laborantlar laboratoriya ishlarini boshlashdan oldin barcha shisha asboblarni sterillaydilar."
              }
            ]
          },
          {
            "id": "ste-4",
            "word": "Discovery",
            "pos": "noun",
            "phonetic": "/dɪˈskʌvəri/",
            "uzbek": "Kashfiyot",
            "definition": "The act of finding something unexpectedly or in the course of a search.",
            "examples": [
              {
                "en": "The discovery of penicillin revolutionized twentieth-century medical science.",
                "uz": "Penitsillinning kashf etilishi yigirmanchi asr tibbiyot fanida inqilob yasadi."
              },
              {
                "en": "Astronomers announced the astonishing discovery of an Earth-like exoplanet.",
                "uz": "Astronomlar Yerga o'xshash yangi sayyoraning hayratlanarli kashfiyotini ma'lum qildilar."
              },
              {
                "en": "Archaeological discoveries in Samarkand shed fresh light on ancient Central Asian civilization.",
                "uz": "Samarqanddagi arxeologik kashfiyotlar qadimiy Markaziy Osiyo sivilizatsiyasini yangidan yoritib berdi."
              }
            ]
          },
          {
            "id": "ste-5",
            "word": "Breakthrough",
            "pos": "noun",
            "phonetic": "/ˈbreɪkθruː/",
            "uzbek": "Katta yutuq, ilmiy burilish",
            "definition": "A sudden, dramatic, and important discovery or development.",
            "examples": [
              {
                "en": "Researchers achieved a major scientific breakthrough in solar battery efficiency.",
                "uz": "Tadqiqotchilar quyosh batareyalarining unumdorligi bo'yicha katta ilmiy yutuqqa erishdilar."
              },
              {
                "en": "The new cancer immunotherapy treatment represents a historic clinical breakthrough.",
                "uz": "Saratonni immunoterapiya bilan davolashning yangi usuli tarixiy klinik burilish hisoblanadi."
              },
              {
                "en": "Artificial intelligence algorithms led to a groundbreaking breakthrough in protein structure prediction.",
                "uz": "Sun'iy intellekt algoritmlari oqsil tuzilishini oldindan aniqlashda mislsiz ilmiy yutuqqa olib keldi."
              }
            ]
          },
          {
            "id": "ste-6",
            "word": "Phenomenon",
            "pos": "noun",
            "phonetic": "/fəˈnɒmɪnən/",
            "uzbek": "Fenomen, noyob tabiiy hodisa",
            "definition": "A fact or situation that is observed to exist or happen, especially one whose cause is in question.",
            "examples": [
              {
                "en": "The northern lights are an awe-inspiring natural atmospheric phenomenon.",
                "uz": "Qutb shafag'i — hayratga soluvchi noyob tabiiy atmosfera hodisasidir."
              },
              {
                "en": "Physicists investigated the quantum phenomenon of light behaving as both wave and particle.",
                "uz": "Fiziklar yorug'likning to'lqin hamda zarracha sifatida namoyon bo'luvchi kvant fenomenini o'rgandilar."
              },
              {
                "en": "Rapid urban migration has become a defining socioeconomic phenomenon of our era.",
                "uz": "Shahar tomon jadal ko'chish davrimizning asosiy ijtimoiy-iqtisodiy fenomeniga aylandi."
              }
            ]
          },
          {
            "id": "ste-7",
            "word": "Artificial intelligence",
            "pos": "noun",
            "phonetic": "/ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/",
            "uzbek": "Sun'iy intellekt (SI)",
            "definition": "The theory and development of computer systems able to perform tasks normally requiring human intelligence.",
            "examples": [
              {
                "en": "Artificial intelligence assists radiologists in diagnosing lung illnesses with high accuracy.",
                "uz": "Sun'iy intellekt rentgenologlarga o'pka kasalliklarini yuqori aniqlikda aniqlashga yordam beradi."
              },
              {
                "en": "Self-driving vehicles rely on artificial intelligence and computer vision to navigate city roads safely.",
                "uz": "Haydovchisiz avtomobillar shahar yo'llarida xavfsiz harakatlanish uchun sun'iy intellektga tayanadi."
              },
              {
                "en": "Ethical guidelines must be established as artificial intelligence becomes increasingly powerful.",
                "uz": "Sun'iy intellekt tobora qudratli bo'lib borayotgan bir paytda qat'iy axloqiy mezonlar o'rnatilishi shart."
              }
            ]
          },
          {
            "id": "ste-8",
            "word": "Ethics",
            "pos": "noun",
            "phonetic": "/ˈeθɪks/",
            "uzbek": "Etika, axloq me'yorlari",
            "definition": "Moral principles that govern a person's behaviour or the conducting of an activity.",
            "examples": [
              {
                "en": "Medical research ethics mandate that clinical trials obtain informed consent from every participant.",
                "uz": "Tibbiy tadqiqot etikasi klinik sinovlarda har bir ishtirokchidan ongli rozilik olishni talab qiladi."
              },
              {
                "en": "Engineers debate the complex ethics surrounding autonomous weapon technologies.",
                "uz": "Muhandislar avtonom qurol texnologiyalari atrofidagi murakkab axloqiy masalalarni muhokama qiladilar."
              },
              {
                "en": "Corporate business ethics require complete transparency, fairness, and honesty in financial reporting.",
                "uz": "Korporativ biznes etikasi moliyaviy hisobotlarda to'liq shaffoflik, adolat va halollikni taqozo etadi."
              }
            ]
          },
          {
            "id": "ste-9",
            "word": "Robotics",
            "pos": "noun",
            "phonetic": "/rəʊˈbɒtɪks/",
            "uzbek": "Robototexnika",
            "definition": "The branch of technology that deals with the design, construction, and operation of robots.",
            "examples": [
              {
                "en": "Industrial robotics has automated precision welding and assembly across automobile plants.",
                "uz": "Sanoat robototexnikasi avtomobil zavodlarida aniq payvandlash va yig'ishni avtomatlashtirdi."
              },
              {
                "en": "Advances in surgical robotics enable surgeons to perform minimally invasive operations.",
                "uz": "Jarrohlik robototexnikasidagi yutuqlar shifokorlarga tanaga kam jarohat yetkazuvchi operatsiyalarni o'tkazish imkonini bermoqda."
              },
              {
                "en": "High school engineering clubs inspire pupils to build and program machines for robotics competitions.",
                "uz": "Maktab muhandislik to'garaklari o'quvchilarni robototexnika musobaqalari uchun dasturlar yozishga ilhomlantiradi."
              }
            ]
          },
          {
            "id": "ste-10",
            "word": "Automation",
            "pos": "noun",
            "phonetic": "/ˌɔːtəˈmeɪʃn/",
            "uzbek": "Avtomatlashtirish",
            "definition": "The use of largely automatic equipment in a system of manufacturing or other production process.",
            "examples": [
              {
                "en": "Factory automation dramatically reduced production costs while increasing manufacturing precision.",
                "uz": "Zavodlarni avtomatlashtirish ishlab chiqarish xarajatlarini keskin kamaytirib, aniqlikni oshirdi."
              },
              {
                "en": "Warehouse automation relies on robotic conveyors to sort and dispatch online delivery packages.",
                "uz": "Omborlarni avtomatlashtirish yetkazib berish posilkalarini saralash uchun robot konveyerlarga tayanadi."
              },
              {
                "en": "Workers displaced by routine office automation need access to professional retraining programs.",
                "uz": "Odatiy ofis avtomatlashuvi tufayli bo'shagan xodimlarga qayta tayyorlash dasturlari zarur."
              }
            ]
          }
        ]
      },
      {
        "id": "b2-u8-health",
        "unitNumber": 8,
        "title": "Unit 08: Advanced Health Systems & Medicine (Tibbiy tizimlar va salomatlik)",
        "category": "Healthcare & Medicine",
        "icon": "fa-hospital",
        "color": "from-red-500 to-rose-700",
        "description": "Tashxis, simptomlar, reabilitatsiya va tibbiy xizmatlar",
        "words": [
          {
            "id": "hmd-1",
            "word": "Symptom",
            "pos": "noun",
            "phonetic": "/ˈsɪmptəm/",
            "uzbek": "Alomat, simptom",
            "definition": "A physical or mental feature which is regarded as indicating a condition of disease.",
            "examples": [
              {
                "en": "A persistent dry cough and high fever are common clinical symptoms of influenza.",
                "uz": "Doimiy quruq yo'tal va yuqori isitma grippning eng ko'p uchraydigan klinik alomatlaridir."
              },
              {
                "en": "Consult your physician immediately if you experience alarming chest symptoms.",
                "uz": "Agar ko'krak qafasida xavotirli alomatlar sezsangiz, darhol shifokoringizga murojaat qiling."
              },
              {
                "en": "Social anxiety is frequently a symptom of deeper unresolved emotional stresses.",
                "uz": "Ijtimoiy xavotir ko'pincha chuqurroq yechilmagan ruhiy zo'riqishlarning alomatidir."
              }
            ]
          },
          {
            "id": "hmd-2",
            "word": "Prescription",
            "pos": "noun",
            "phonetic": "/prɪˈskrɪpʃn/",
            "uzbek": "Retsept (dorilar uchun)",
            "definition": "An instruction written by a medical practitioner that authorizes a patient to be provided with a medicine.",
            "examples": [
              {
                "en": "The family doctor wrote a prescription for antibiotics to treat the throat infection.",
                "uz": "Oilaviy shifokor tomoq infeksiyasini davolash uchun antibiotiklar retseptini yozib berdi."
              },
              {
                "en": "Take this prescription to the registered local chemist to collect your tablets.",
                "uz": "Dorilaringizni olish uchun ushbu retseptni mahalliy dorixonaga olib boring."
              },
              {
                "en": "Certain strong painkillers are available strictly on medical prescription only.",
                "uz": "Ba'zi kuchli og'riqqoldiruvchi dorilar faqat shifokor retsepti asosidagina beriladi."
              }
            ]
          },
          {
            "id": "hmd-3",
            "word": "Clinic",
            "pos": "noun",
            "phonetic": "/ˈklɪnɪk/",
            "uzbek": "Klinika, shifoxona",
            "definition": "An establishment or hospital department where outpatients are given medical treatment.",
            "examples": [
              {
                "en": "She booked an appointment at the municipal dental clinic for a routine checkup.",
                "uz": "U muntazam ko'rik uchun shahar stomatologiya klinikasiga navbatga yozildi."
              },
              {
                "en": "The modern outpatient clinic offers diagnostic scans, blood tests, and physical therapy.",
                "uz": "Zamonaviy ambulator klinika diagnostik ko'riklar, qon tahlili va fizioterapiyani taklif qiladi."
              },
              {
                "en": "Specialized pediatric clinics provide welcoming environments designed for sick children.",
                "uz": "Maxsus bolalar klinikalari kasal bolalar uchun shinam va iliq muhit yaratadi."
              }
            ]
          },
          {
            "id": "hmd-4",
            "word": "Therapy",
            "pos": "noun",
            "phonetic": "/ˈθerəpi/",
            "uzbek": "Muolaja, terapiya",
            "definition": "Treatment intended to relieve or heal a disorder.",
            "examples": [
              {
                "en": "Physical therapy helped the injured athlete regain full mobility in his knee.",
                "uz": "Fizioterapiya jarohatlangan sportchiga tizzasidagi harakatchanlikni to'liq tiklashga yordam berdi."
              },
              {
                "en": "Cognitive behavioral therapy assists individuals in challenging chronic negative thought patterns.",
                "uz": "Kognitiv-xulq-atvor terapiyasi insonlarga surunkali salbiy fikrlarni yengishda ko'maklashadi."
              },
              {
                "en": "Music and art therapy provide therapeutic relaxation for post-operative patients.",
                "uz": "Musiqa va san'at terapiyasi operatsiyadan keyingi bemorlar uchun shifobaxsh orom bag'ishlaydi."
              }
            ]
          },
          {
            "id": "hmd-5",
            "word": "Diagnosis",
            "pos": "noun",
            "phonetic": "/ˌdaɪəɡˈnəʊsɪs/",
            "uzbek": "Tashxis, diagnoz",
            "definition": "The identification of the nature of an illness or other problem by examination of the symptoms.",
            "examples": [
              {
                "en": "An early medical diagnosis significantly improves the likelihood of a complete recovery.",
                "uz": "Kasallikka erta qo'yilgan tibbiy tashxis to'liq tuzalish ehtimolini sezilarli oshiradi."
              },
              {
                "en": "The physician confirmed the diagnosis following comprehensive blood work and an MRI scan.",
                "uz": "Shifokor keng qamrovli qon tahlili va MRT tekshiruvidan so'ng tashxisni tasdiqladi."
              },
              {
                "en": "Specialists sought a second medical opinion to verify the rare neurological diagnosis.",
                "uz": "Mutaxassislar kam uchraydigan nevrologik tashxisni tasdiqlash uchun ikkinchi shifokor xulosasini so'radilar."
              }
            ]
          },
          {
            "id": "hmd-6",
            "word": "Ambulance",
            "pos": "noun",
            "phonetic": "/ˈæmbjələns/",
            "uzbek": "Tez yordam mashinasi",
            "definition": "A vehicle equipped for taking sick or injured people to and from hospital.",
            "examples": [
              {
                "en": "Bystanders called an emergency ambulance immediately after witnessing the traffic accident.",
                "uz": "Yo'l chetidagilar avtohalokatni ko'rishlari bilanoq zudlik bilan tez yordam chaqirdilar."
              },
              {
                "en": "Paramedics inside the ambulance administered emergency oxygen en route to the hospital.",
                "uz": "Tez yordam xodimlari shifoxonaga ketish jarayonida bemorga shoshilinch kislorod berdilar."
              },
              {
                "en": "Motorists must pull over safely to clear a lane when an ambulance sounds its siren.",
                "uz": "Tez yordam mashinasi sirena chalib kelayotganda haydovchilar yo'l berish uchun chetga o'tishlari shart."
              }
            ]
          },
          {
            "id": "hmd-7",
            "word": "Surgeon",
            "pos": "noun",
            "phonetic": "/ˈsɜːdʒən/",
            "uzbek": "Jarroh",
            "definition": "A medical practitioner qualified to practise surgery.",
            "examples": [
              {
                "en": "The skilled cardiac surgeon performed a complex six-hour heart bypass operation.",
                "uz": "Tajribali yurak jarrohi olti soatlik murakkab yurak operatsiyasini bajardi."
              },
              {
                "en": "Surgeons and scrub nurses sterilize their hands meticulously before entering the operating theatre.",
                "uz": "Jarrohlar va hamshiralar operatsiya xonasiga kirishdan oldin qo'llarini sinchkovlik bilan tozalaydilar."
              },
              {
                "en": "She spent over a decade training intensively to become an orthopedic surgeon.",
                "uz": "U travmatolog-jarroh bo'lish uchun o'n yildan ortiq vaqtini mashaqqatli ta'limga bag'ishladi."
              }
            ]
          },
          {
            "id": "hmd-8",
            "word": "Recovery",
            "pos": "noun",
            "phonetic": "/rɪˈkʌvəri/",
            "uzbek": "Sog'ayish, tuzalish",
            "definition": "A return to a normal state of health, mind, or strength.",
            "examples": [
              {
                "en": "We were all overjoyed to hear about her speedy and complete recovery from illness.",
                "uz": "Uning kasallikdan tez va to'liq sog'ayib ketganini eshitib barchamiz nihoyatda quvondik."
              },
              {
                "en": "Adequate rest, nutritious food, and clean water are indispensable for rapid recovery.",
                "uz": "Yetarli dam olish, to'yimli ovqat va toza suv tez tuzalish uchun juda muhimdir."
              },
              {
                "en": "The hospital patient spent two days under observation in the post-operative recovery ward.",
                "uz": "Shifoxona bemori operatsiyadan keyingi tiklanish bo'limida ikki kun shifokorlar nazoratida bo'ldi."
              }
            ]
          },
          {
            "id": "hmd-9",
            "word": "Chronic",
            "pos": "adjective",
            "phonetic": "/ˈkrɒnɪk/",
            "uzbek": "Surunkali",
            "definition": "Persisting for a long time or constantly recurring.",
            "examples": [
              {
                "en": "He manages his chronic backache with daily therapeutic swimming and stretching exercises.",
                "uz": "U o'zining surunkali bel og'rig'ini har kungi shifobaxsh suzish va cho'zilish mashqlari bilan nazorat qiladi."
              },
              {
                "en": "Chronic conditions like diabetes and hypertension require continuous medical monitoring.",
                "uz": "Qandli diabet va gipertoniya kabi surunkali xastaliklar doimiy shifokor nazoratini talab etadi."
              },
              {
                "en": "Poor office ergonomics can lead to chronic neck strain and muscle stiffness.",
                "uz": "Ofis mebelining noqulayligi bo'yinda surunkali zo'riqish va mushaklar qotib qolishiga olib kelishi mumkin."
              }
            ]
          },
          {
            "id": "hmd-10",
            "word": "Vaccination",
            "pos": "noun",
            "phonetic": "/ˌvæksɪˈneɪʃn/",
            "uzbek": "Emlash, vaksina",
            "definition": "Treatment with a vaccine to produce immunity against a disease.",
            "examples": [
              {
                "en": "Childhood vaccination programs have virtually eradicated polio and smallpox worldwide.",
                "uz": "Bolalarni emlash dasturlari butun dunyo bo'ylab poliomiyelit va chechakni deyarli yo'q qildi."
              },
              {
                "en": "International travelers may require yellow fever vaccination certificates before entry.",
                "uz": "Xalqaro sayohatchilardan mamlakatga kirishdan oldin sariq isitmaga qarshi emlash sertifikati talab qilinishi mumkin."
              },
              {
                "en": "Annual seasonal flu vaccinations protect vulnerable elderly individuals from severe complications.",
                "uz": "Mavsumiy grippga qarshi har yillik emlash keksalar salomatligini og'ir asoratlardan asraydi."
              }
            ]
          }
        ]
      },
      {
        "id": "b2-u9-ecology",
        "unitNumber": 9,
        "title": "Unit 09: Ecology, Habitats & Climate Threats (Ekologik xavflar va biosfera)",
        "category": "Ecology & Climate",
        "icon": "fa-leaf",
        "color": "from-emerald-600 to-green-800",
        "description": "Atrof-muhitni asrash, ifloslanish, qayta ishlash va barqarorlik",
        "words": [
          {
            "id": "eco-1",
            "word": "Pollution",
            "pos": "noun",
            "phonetic": "/pəˈluːʃn/",
            "uzbek": "Ifloslanish",
            "definition": "The presence in or introduction into the environment of a substance which has harmful effects.",
            "examples": [
              {
                "en": "Transitioning to electric vehicles significantly curtails urban air pollution.",
                "uz": "Elektromobillarga o'tish shahardagi havo ifloslanishini sezilarli darajada kamaytiradi."
              },
              {
                "en": "Industrial chemical waste dumped into rivers causes catastrophic water pollution.",
                "uz": "Daryolarga oqizilgan sanoat kimyoviy chiqindilari halokatli suv ifloslanishiga olib keladi."
              },
              {
                "en": "Municipal authorities planted thousands of green trees to filter atmospheric dust pollution.",
                "uz": "Shahar hokimiyati havodagi chang ifloslanishini filtrlash uchun minglab ko'chatlar o'tqazdi."
              }
            ]
          },
          {
            "id": "eco-2",
            "word": "Global warming",
            "pos": "noun",
            "phonetic": "/ˌɡləʊbl ˈwɔːmɪŋ/",
            "uzbek": "Global isish",
            "definition": "A gradual increase in the overall temperature of the earth's atmosphere.",
            "examples": [
              {
                "en": "Scientists warn that unchecked global warming will cause sea levels to rise catastrophically.",
                "uz": "Olimlar jilovlanmagan global isish dengiz sathining xavfli darajada ko'tarilishiga sabab bo'lishidan ogohlantirmoqda."
              },
              {
                "en": "Combating global warming requires coordinated international agreements on carbon reduction.",
                "uz": "Global isishga qarshi kurash uglerod chiqindilarini kamaytirish bo'yicha xalqaro kelishuvlarni talab qiladi."
              },
              {
                "en": "Extreme weather events like heatwaves and droughts have become more frequent due to global warming.",
                "uz": "Qurg'oqchilik va anomal issiq kabi keskin ob-havo hodisalari global isish ortidan tez-tez yuz bermoqda."
              }
            ]
          },
          {
            "id": "eco-3",
            "word": "Deforestation",
            "pos": "noun",
            "phonetic": "/diːˌfɒrɪˈsteɪʃn/",
            "uzbek": "O'rmonlarning yo'q qilinishi",
            "definition": "The action of clearing a wide area of trees.",
            "examples": [
              {
                "en": "Massive deforestation in the tropical basin destroys the natural habitat of rare animals.",
                "uz": "Tropik hududdagi ommaviy o'rmon kesilishi noyob hayvonlarning tabiiy yashash muhitini yo'q qilmoqda."
              },
              {
                "en": "Uncontrolled deforestation leads to severe soil erosion and devastating landslides.",
                "uz": "Nazoratsiz o'rmon yo'qotilishi tuproq yemirilishiga va xavfli yer ko'chkilariga sabab bo'ladi."
              },
              {
                "en": "Strict national laws were enacted to penalize companies engaged in illegal deforestation.",
                "uz": "Noqonuniy o'rmon kesish bilan shug'ullanuvchi kompaniyalarni jazolash uchun qat'iy qonunlar qabul qilindi."
              }
            ]
          },
          {
            "id": "eco-4",
            "word": "Conservation",
            "pos": "noun",
            "phonetic": "/ˌkɒnsəˈveɪʃn/",
            "uzbek": "Tabiatni muhofaza qilish",
            "definition": "Prevention of wasteful use of a resource; protection of wildlife.",
            "examples": [
              {
                "en": "Wildlife conservation projects prevent the endangered snow leopard from becoming extinct.",
                "uz": "Yovvoyi tabiatni muhofaza qilish loyihalari yo'qolib borayotgan qor qoplonlarini saqlab qoladi."
              },
              {
                "en": "Water conservation practices are crucial in arid agricultural regions with scarce rainfall.",
                "uz": "Yog'ingarchilik kam bo'lgan qurg'oqchil dehqonchilik hududlarida suvni tejash muhim ahamiyatga ega."
              },
              {
                "en": "Volunteers actively participated in the wetlands bird habitat conservation program.",
                "uz": "Ko'ngillilar botqoqlikdagi qushlar yashash joylarini asrash dasturida faol ishtirok etishdi."
              }
            ]
          },
          {
            "id": "eco-5",
            "word": "Renewable",
            "pos": "adjective",
            "phonetic": "/rɪˈnjuːəbl/",
            "uzbek": "Qayta tiklanuvchi",
            "definition": "Capable of being replenished naturally within human timescales.",
            "examples": [
              {
                "en": "Solar and wind power are leading clean forms of modern renewable energy.",
                "uz": "Quyosh va shamol energetikasi zamonaviy qayta tiklanuvchi energiyaning yetakchi turlaridir."
              },
              {
                "en": "Transitioning from fossil fuels to renewable sources curtails greenhouse gas emissions.",
                "uz": "Qazilma yoqilg'ilardan qayta tiklanuvchi manbalarga o'tish issiqxona gazlarini kamaytiradi."
              },
              {
                "en": "Uzbekistan is investing heavily in utility-scale renewable photovoltaic solar farms.",
                "uz": "O'zbekiston yirik qayta tiklanuvchi quyosh fotoelektr stansiyalariga katta sarmoya kiritmoqda."
              }
            ]
          },
          {
            "id": "eco-6",
            "word": "Habitat",
            "pos": "noun",
            "phonetic": "/ˈhæbɪtæt/",
            "uzbek": "Yashash muhiti (hayvon va o'simliklar)",
            "definition": "The natural home or environment of an animal, plant, or other organism.",
            "examples": [
              {
                "en": "Urban expansion has fragmented the natural habitat of wild deer and foxes.",
                "uz": "Shaharlarning kengayishi kiyik va tulkilarning tabiiy yashash muhitini bo'lib tashladi."
              },
              {
                "en": "Preserving pristine mountain habitats is vital for protecting rare endemic plant species.",
                "uz": "Baland tog'dagi toza tabiiy muhitni saqlab qolish noyob o'simliklarni asrashda hal qiluvchi ahamiyatga ega."
              },
              {
                "en": "Wetland nature reserves provide an ideal breeding habitat for migrating waterbirds.",
                "uz": "Botqoqli tabiiy qo'riqxonalar ko'chmanchi suv qushlari uchun ideal nasl qoldirish maskanidir."
              }
            ]
          },
          {
            "id": "eco-7",
            "word": "Endangered",
            "pos": "adjective",
            "phonetic": "/ɪnˈdeɪndʒəd/",
            "uzbek": "Yo'qolib ketish xavfi ostidagi",
            "definition": "At serious risk of extinction.",
            "examples": [
              {
                "en": "The black rhinoceros is an critically endangered species threatened by illegal ivory poaching.",
                "uz": "Qora karkidon noqonuniy shox ovi tufayli jiddiy yo'qolib ketish xavfi ostida turgan turdir."
              },
              {
                "en": "International environmental treaties ban the commercial trade of endangered animal products.",
                "uz": "Xalqaro ekologik shartnomalar xavf ostidagi hayvonlar mahsulotlarining tijoriy savdosini taqiqlaydi."
              },
              {
                "en": "Captive breeding programs strive to restore populations of endangered birds back into the wild.",
                "uz": "Maxsus parvarish dasturlari yo'qolib borayotgan qushlarni ko'paytirib, yovvoyi tabiatga qaytarishga intilmoqda."
              }
            ]
          },
          {
            "id": "eco-8",
            "word": "Species",
            "pos": "noun",
            "phonetic": "/ˈspiːʃiːz/",
            "uzbek": "Biologik tur",
            "definition": "A group of living organisms consisting of similar individuals capable of exchanging genes.",
            "examples": [
              {
                "en": "Biologists discover hundreds of new insect and plant species in tropical forests annually.",
                "uz": "Biologlar har yili tropik o'rmonlarda yuzlab yangi hasharot va o'simlik turlarini kashf qiladilar."
              },
              {
                "en": "Invasive plant species can outcompete native flora and disrupt delicate ecological balances.",
                "uz": "Begona o'simlik turlari mahalliy o'simliklarni siqib chiqarib, nozik ekologik muvozanatni buzishi mumkin."
              },
              {
                "en": "Protecting diverse animal species preserves the natural genetic richness of our planet.",
                "uz": "Turli hayvon turlarini asrash sayyoramizning tabiiy genetik boyligini saqlab qoladi."
              }
            ]
          },
          {
            "id": "eco-9",
            "word": "Ecosystem",
            "pos": "noun",
            "phonetic": "/ˈiːkəʊsɪstəm/",
            "uzbek": "Ekotizim",
            "definition": "A biological community of interacting organisms and their physical environment.",
            "examples": [
              {
                "en": "Coral reefs form one of the richest, most complex marine ecosystems on the planet.",
                "uz": "Marjon qoyalari sayyoramizdagi eng boy va murakkab dengiz ekotizimlaridan birini hosil qiladi."
              },
              {
                "en": "Pollution disrupts the fragile equilibrium of the freshwater river ecosystem.",
                "uz": "Ifloslanish toza chuchuk suvli daryo ekotizimining nozik muvozanatini buzib yuboradi."
              },
              {
                "en": "Every creature, from microscopic soil bacteria to large apex predators, sustains the ecosystem.",
                "uz": "Tuproq bakteriyalaridan tortib yirik yirtqichlargacha bo'lgan har bir mavjudot ekotizimni ushlab turadi."
              }
            ]
          },
          {
            "id": "eco-10",
            "word": "Biodiversity",
            "pos": "noun",
            "phonetic": "/ˌbaɪəʊdaɪˈvɜːsəti/",
            "uzbek": "Biologik xilma-xillik",
            "definition": "The variety of plant and animal life in the world or in a particular habitat.",
            "examples": [
              {
                "en": "Preserving biodiversity is crucial for developing new agricultural medicines and resilient crops.",
                "uz": "Biologik xilma-xillikni saqlash yangi dori vositalari va chidamli ekinlarni yaratish uchun juda muhimdir."
              },
              {
                "en": "Tropical rainforests harbor unmatched biodiversity compared to colder temperate regions.",
                "uz": "Tropik o'rmonlar sovuq mo''tadil hududlarga qaraganda tengsiz biologik xilma-xillikni o'zida saqlaydi."
              },
              {
                "en": "Human industrial activity is driving an alarming global decline in biological biodiversity.",
                "uz": "Insonning sanoat faoliyati biologik xilma-xillikning global miqyosda xavotirli kamayishiga sabab bo'lmoqda."
              }
            ]
          }
        ]
      },
      {
        "id": "b2-u10-idioms",
        "unitNumber": 10,
        "title": "Unit 10: Idiomatic Expressions & Body Language (Idiomalar va tana tili)",
        "category": "Idioms & Expression",
        "icon": "fa-hand-sparkles",
        "color": "from-purple-600 to-indigo-800",
        "description": "Obrazli iboralar, tana harakatlari va ko'chma ma'nolar",
        "words": [
          {
            "id": "idm-1",
            "word": "Eye contact",
            "pos": "noun",
            "phonetic": "/ˈaɪ kɒntækt/",
            "uzbek": "Ko'z bilan qarash, ko'z aloqasi",
            "definition": "The act of looking directly into one another's eyes.",
            "examples": [
              {
                "en": "Maintaining confident eye contact during a job interview demonstrates honesty and poise.",
                "uz": "Ish suhbatida ishonch bilan ko'zga qarab gapirish halollik va bosiqlikni namoyon etadi."
              },
              {
                "en": "He nervously avoided eye contact when asked directly about the missing documents.",
                "uz": "Yo'qolgan hujjatlar haqida so'ralganda u hayajonlanib ko'zini olib qochdi."
              },
              {
                "en": "Cultural norms vary widely regarding how much direct eye contact is considered respectful.",
                "uz": "Ko'zga tik qarashning qay darajada odobli hisoblanishi turli madaniyatlarda bir-biridan farq qiladi."
              }
            ]
          },
          {
            "id": "idm-2",
            "word": "Body language",
            "pos": "noun",
            "phonetic": "/ˈbɒdi ˌlæŋɡwɪdʒ/",
            "uzbek": "Tana tili, imo-ishoralar",
            "definition": "The conscious and unconscious movements and postures by which attitudes are communicated.",
            "examples": [
              {
                "en": "Her open body language and warm smile immediately made everyone feel welcome.",
                "uz": "Uning ochiq tana tili va samimiy tabassumi barchada darhol iliq taassurot uyg'otdi."
              },
              {
                "en": "Crossing your arms tightly is often interpreted as defensive or closed body language.",
                "uz": "Qo'llarni mahkam qovushtirib olish ko'pincha o'zini himoya qilish yoki yopiqlik belgisi deb talqin qilinadi."
              },
              {
                "en": "Skilled negotiators pay close attention to subtle shifts in their opponent's body language.",
                "uz": "Tajribali muzokarachilar raqibning tana tilidagi nozik o'zgarishlarni sinchkovlik bilan kuzatib boradilar."
              }
            ]
          },
          {
            "id": "idm-3",
            "word": "Give way",
            "pos": "verb",
            "phonetic": "/ɡɪv weɪ/",
            "uzbek": "Yo'l bermoq, yon bermoq",
            "definition": "Yield to another; collapse under force.",
            "examples": [
              {
                "en": "Drivers approaching the roundabout must give way to traffic coming from the right.",
                "uz": "Aylanma harakatga yaqinlashayotgan haydovchilar o'ngdan kelayotgan transportga yo'l berishlari kerak."
              },
              {
                "en": "The wooden floor gave way under the immense weight of the antique safe.",
                "uz": "Qadimiy seyfning og'ir vazniga chiday olmagan yog'och pol sinib ketdi."
              },
              {
                "en": "After intense arguments, the management finally had to give way to union demands.",
                "uz": "Qizg'in bahslardan so'ng rahbariyat kasaba uyushmasi talablariga nihoyat yon berishga majbur bo'ldi."
              }
            ]
          },
          {
            "id": "idm-4",
            "word": "Turn heads",
            "pos": "verb",
            "phonetic": "/tɜːn hedz/",
            "uzbek": "Barchaning e'tiborini tortmoq",
            "definition": "Attract a great deal of attention or admiration by being visually striking.",
            "examples": [
              {
                "en": "She wore an exquisite emerald silk dress that was guaranteed to turn heads at the gala.",
                "uz": "U kechada hamma bosh burib qaraydigan darajada ajoyib feruza rangli ipak ko'ylak kiygan edi."
              },
              {
                "en": "The sleek newly released electric sports car turned heads wherever it cruised in town.",
                "uz": "Yangi chiqqan nafis elektr sport mashinasi shaharda qayerda yursa hammaning e'tiborini tortdi."
              },
              {
                "en": "His stylish modern design and striking architectural proportions turned heads in the design world.",
                "uz": "Uning zamonaviy dizayni va g'aroyib me'moriy mutanosibligi dizayn olamida barchaning e'tiborini qozondi."
              }
            ]
          },
          {
            "id": "idm-5",
            "word": "On the tip of my tongue",
            "pos": "idiom",
            "phonetic": "/ɒn ðə tɪp ɒv maɪ tʌŋ/",
            "uzbek": "Tilimning uchida turibdi",
            "definition": "Almost but not quite able to be remembered or spoken.",
            "examples": [
              {
                "en": "Her family name is on the tip of my tongue, but I just cannot remember it right now!",
                "uz": "Uning familiyasi tilimning uchida turibdi, ammo aynan hozir hech eslay olmayapman!"
              },
              {
                "en": "The answer was on the tip of his tongue, yet the exam time ran out before he wrote it.",
                "uz": "Javob uning tilining uchida turgan edi, ammo yozishga ulgurmasdan imtihon vaqti tugab qoldi."
              },
              {
                "en": "It is frustrating when a well-known vocabulary word stays stubbornly on the tip of your tongue.",
                "uz": "Yaxshi tanish so'z tilning uchida turib esga tushmaganda odamning biroz xunobi oshadi."
              }
            ]
          },
          {
            "id": "idm-6",
            "word": "Pull someone's leg",
            "pos": "idiom",
            "phonetic": "/pʊl ˈsʌmwʌnz leɡ/",
            "uzbek": "Hazillashmoq, laqillatmoq",
            "definition": "Tease or deceive someone playfully.",
            "examples": [
              {
                "en": "Do not take him seriously; he was only pulling your leg when he said he won the lottery!",
                "uz": "Uni jiddiy qabul qilmang; lotereyada yutdim deganida u shunchaki sizni laqillatayotgan edi!"
              },
              {
                "en": "Are you pulling my leg, or did the university really offer you a full scholarship?",
                "uz": "Meni laqillatyapsizmi yoki universitet rostdan ham sizga to'liq grant ajratdimi?"
              },
              {
                "en": "My grandfather loves pulling our legs by telling absurd fictional travel tales.",
                "uz": "Bobom uydirma g'alati sayohat hikoyalarini aytib, biz bilan hazillashishni yaxshi ko'radilar."
              }
            ]
          },
          {
            "id": "idm-7",
            "word": "Cost an arm and a leg",
            "pos": "idiom",
            "phonetic": "/kɒst ən ɑːm ənd ə leɡ/",
            "uzbek": "Juda qimmatga tushmoq",
            "definition": "Be extremely expensive.",
            "examples": [
              {
                "en": "Renting a luxury apartment in the historic center costs an arm and a leg.",
                "uz": "Tarixiy shahar markazidan shinam kvartira ijaraga olish otning kallasidek qimmatga tushadi."
              },
              {
                "en": "Fixing the car's broken transmission cost an arm and a leg at the official dealership.",
                "uz": "Mashinaning uzatmalar qutisini rasmiy servisda ta'mirlash juda katta pulga tushdi."
              },
              {
                "en": "Buying brand-new designer fashion accessories will cost an arm and a leg.",
                "uz": "Yangi chiqqan mashhur brend kiyimlarini sotib olish nihoyatda qimmatga tushadi."
              }
            ]
          },
          {
            "id": "idm-8",
            "word": "See eye to eye",
            "pos": "idiom",
            "phonetic": "/siː aɪ tuː aɪ/",
            "uzbek": "Fikri bir joydan chiqmoq",
            "definition": "Be in full agreement with each other.",
            "examples": [
              {
                "en": "My business partner and I see eye to eye on almost all strategic financial matters.",
                "uz": "Biznes sherigim bilan deyarli barcha strategik moliyaviy masalalarda fikrimiz bir joydan chiqadi."
              },
              {
                "en": "Although they rarely see eye to eye on politics, they remain devoted lifelong friends.",
                "uz": "Siyosatda kamdan-kam hollarda fikrlari to'g'ri kelsa-da, ular umrbod sodiq do'st bo'lib qolishgan."
              },
              {
                "en": "The management and union representatives finally began to see eye to eye during the negotiations.",
                "uz": "Muzokaralar davomida rahbariyat va ishchilar vakillari nihoyat o'zaro bir fikrga kela boshlashdi."
              }
            ]
          },
          {
            "id": "idm-9",
            "word": "Break a leg",
            "pos": "idiom",
            "phonetic": "/breɪk ə leɡ/",
            "uzbek": "Omad yor bo'lsin! (chiqishdan oldin)",
            "definition": "Used in theatre and performance to wish someone good luck.",
            "examples": [
              {
                "en": "We shouted 'Break a leg!' to the nervous lead actor right before he stepped onto the stage.",
                "uz": "Bosh rol ijrochisi sahnaga qadam qo'yishidan oldin unga 'Omad yor bo'lsin!' deb dalda berdik."
              },
              {
                "en": "Good luck with your piano recital tonight — break a leg!",
                "uz": "Bugun kechqurungi fortepiano chiqishingizda muvaffaqiyat tilayman — omadingizni bersin!"
              },
              {
                "en": "In theatrical tradition, wishing performers 'Break a leg' is believed to ward off bad luck.",
                "uz": "Teatr an'anasida aktyorlarga 'Break a leg' deyish yomon ko'z va omadsizlikni haydaydi deb ishoniladi."
              }
            ]
          },
          {
            "id": "idm-10",
            "word": "Once in a blue moon",
            "pos": "idiom",
            "phonetic": "/wʌns ɪn ə bluː muːn/",
            "uzbek": "Juda kamdan-kam, yilda bir",
            "definition": "Very rarely; almost never.",
            "examples": [
              {
                "en": "He lives overseas, so we only manage to see each other once in a blue moon.",
                "uz": "U chet elda yashaydi, shu sababli biz yilda bir martagina uchrashib turamiz."
              },
              {
                "en": "I only indulge in sweet chocolate desserts once in a blue moon.",
                "uz": "Men shirin shokoladli shirinliklarni juda kamdan-kam hollarda iste'mol qilaman."
              },
              {
                "en": "A breakthrough opportunity like this only comes along once in a blue moon, so seize it!",
                "uz": "Bunday ajoyib imkoniyat yilda bir keladi, shuning uchun uni qo'ldan chiqarmang!"
              }
            ]
          }
        ]
      }
    ]
  },
  "C1": {
    "levelName": "C1 - Ilg'or (Advanced)",
    "description": "Akademik, professional va falsafiy darajadagi boy lug'at boyligi",
    "color": "rose",
    "badge": "C1 Ilg'or",
    "topics": [
      {
        "id": "c1-academic",
        "title": "Unit 01: Academic & Research Discourse (Akademik nutq va tadqiqot)",
        "icon": "fa-book-bookmark",
        "color": "from-rose-500 to-pink-600",
        "words": [
          {
            "id": "acd-1",
            "word": "Paradigm",
            "pos": "noun",
            "phonetic": "/ˈpærədaɪm/",
            "uzbek": "Paradigma, qolip, fundamental qarashlar tizimi",
            "definition": "A typical example, pattern, or model of something; a distinct set of concepts or thought patterns.",
            "examples": [
              {
                "en": "Quantum mechanics triggered a profound paradigm shift in modern theoretical physics.",
                "uz": "Kvant mexanikasi zamonaviy nazariy fizikada chuqur paradigma o'zgarishini yuzaga keltirdi."
              },
              {
                "en": "The scholar introduced a brand-new educational paradigm centered on personalized learning.",
                "uz": "Olim shaxsiy yondashuvga asoslangan butunlay yangi ta'lim paradigmasini ilgari surdi."
              },
              {
                "en": "We must rethink the prevailing paradigm of limitless economic consumption.",
                "uz": "Biz cheksiz iqtisodiy iste'molga asoslangan hukmron paradigmani qayta ko'rib chiqishimiz kerak."
              }
            ]
          },
          {
            "id": "acd-2",
            "word": "Comprehensive",
            "pos": "adjective",
            "phonetic": "/ˌkɒmprɪˈhensɪv/",
            "uzbek": "Har tomonlama, keng qamrovli, mukammal",
            "definition": "Complete; including all or nearly all elements or aspects of something.",
            "examples": [
              {
                "en": "The university published a comprehensive survey on global language acquisition trends.",
                "uz": "Universitet xalqaro til o'rganish tendensiyalari bo'yicha har tomonlama to'liq so'rovnomani e'lon qildi."
              },
              {
                "en": "Before making an informed decision, the committee conducted a comprehensive review.",
                "uz": "Asosli qaror qabul qilishdan avval qo'mita keng qamrovli ko'rib chiqish o'tkazdi."
              },
              {
                "en": "This dictionary provides comprehensive definitions alongside idiomatic expressions.",
                "uz": "Bu lug'at iboralar bilan bir qatorda har tomonlama batafsil ta'riflarni ham taqdim etadi."
              }
            ]
          },
          {
            "id": "acd-3",
            "word": "Empirical",
            "pos": "adjective",
            "phonetic": "/ɪmˈpɪrɪkl/",
            "uzbek": "Tajribaga / dalillarga asoslangan (empirik)",
            "definition": "Based on, concerned with, or verifiable by observation or experience rather than theory or pure logic.",
            "examples": [
              {
                "en": "Scientific theories remain speculative until corroborated by robust empirical evidence.",
                "uz": "Ilmiy nazariyalar mustahkam empirik dalillar bilan tasdiqlanmaguncha taxminiy bo'lib qoladi."
              },
              {
                "en": "Her doctoral dissertation provides compelling empirical research on dialect variations.",
                "uz": "Uning doktorlik dissertatsiyasi sheva xususiyatlari bo'yicha ishonarli empirik tadqiqotni o'z ichiga oladi."
              },
              {
                "en": "We need rigorous empirical validation before approving the newly developed pharmaceutical.",
                "uz": "Yangi ishlab chiqilgan dori vositasini tasdiqlashdan oldin bizga qat'iy empirik tekshiruv zarur."
              }
            ]
          },
          {
            "id": "acd-4",
            "word": "Refute",
            "pos": "verb",
            "phonetic": "/rɪˈfjuːt/",
            "uzbek": "Radd etmoq, xatoligini isbotlamoq",
            "definition": "To prove a statement or theory to be wrong or false; disprove.",
            "examples": [
              {
                "en": "The astronomer gathered conclusive data to refute the archaic cosmological model.",
                "uz": "Astronom qadimiy kosmologik modelni radd etish uchun qat'iy ma'lumotlarni to'pladi."
              },
              {
                "en": "Defense counsel presented indisputable surveillance footage to refute the accusations.",
                "uz": "Himoyachi ayblovlarni rad etish uchun munozarasiz videokuzatuv kadrlarini taqdim etdi."
              },
              {
                "en": "It is challenging to refute an argument rooted in solid mathematical foundations.",
                "uz": "Mustahkam matematik asoslarga ega argumentni radd etish nihoyatda qiyindir."
              }
            ]
          },
          {
            "id": "acd-5",
            "word": "Methodology",
            "pos": "noun",
            "phonetic": "/ˌmeθəˈdɒlədʒi/",
            "uzbek": "Metodologiya, tadqiqot usullari majmui",
            "definition": "A system of methods used in a particular area of study or activity.",
            "examples": [
              {
                "en": "The research team thoroughly explained their statistical methodology in the appendix.",
                "uz": "Tadqiqot guruhi o'zlarining statistik metodologiyasini ilovada batafsil tushuntirib berdi."
              },
              {
                "en": "A transparent methodology allows other scientists to replicate the experimental findings.",
                "uz": "Shaffof metodologiya boshqa olimlarga tajriba natijalarini qayta tekshirib ko'rish imkonini beradi."
              },
              {
                "en": "The authors adopted a qualitative methodology to explore student motivation.",
                "uz": "Mualliflar talabalar motivatsiyasini o'rganish uchun sifat metodologiyasini qo'lladilar."
              }
            ]
          },
          {
            "id": "acd-6",
            "word": "Corroborate",
            "pos": "verb",
            "phonetic": "/kəˈrɒbəreɪt/",
            "uzbek": "Tasdiqlamoq, qo'shimcha dalillar bilan isbotlamoq",
            "definition": "To confirm or give support to a statement, theory, or finding with independent evidence.",
            "examples": [
              {
                "en": "Subsequent laboratory experiments corroborated the initial findings of the research team.",
                "uz": "Keyingi laboratoriya tajribalari tadqiqot guruhining dastlabki xulosalarini to'liq tasdiqladi."
              },
              {
                "en": "Historical documents corroborate the eyewitness accounts of the ancient volcanic eruption.",
                "uz": "Tarixiy hujjatlar qadimgi vulqon otilishining guvohlari bayonotlarini tasdiqlaydi."
              },
              {
                "en": "The defense attorney presented digital video footage to corroborate his client's alibi.",
                "uz": "Himoyachi advokat o'z mijozi alibisini isbotlash uchun raqamli video yozuvni taqdim etdi."
              }
            ]
          },
          {
            "id": "acd-7",
            "word": "Disseminate",
            "pos": "verb",
            "phonetic": "/dɪˈsemɪneɪt/",
            "uzbek": "Keng tarqatmoq (ilmiy yoki rasmiy axborotni)",
            "definition": "To spread information, knowledge, or research findings widely to a broad audience.",
            "examples": [
              {
                "en": "Open-access digital journals disseminate academic knowledge freely across developing nations.",
                "uz": "Ochiq elektron jurnallar ilmiy bilimlarni rivojlanayotgan mamlakatlar bo'ylab bepul va keng tarqatadi."
              },
              {
                "en": "Public health agencies disseminate vital prevention guidelines during epidemic outbreaks.",
                "uz": "Sog'liqni saqlash idoralari epidemiyalar paytida muhim profilaktika qoidalarini keng tarqatadilar."
              },
              {
                "en": "The university hosts an annual international symposium to disseminate breakthrough findings.",
                "uz": "Universitet ilg'or ilmiy kashfiyotlarni keng tarqatish maqsadida har yili xalqaro simpozium o'tkazadi."
              }
            ]
          },
          {
            "id": "acd-8",
            "word": "Epistemology",
            "pos": "noun",
            "phonetic": "/ɪˌpɪstɪˈmɒlədʒi/",
            "uzbek": "Epistemologiya (bilish nazariyasi)",
            "definition": "The philosophical branch studying the nature, origin, scope, and validity of human knowledge.",
            "examples": [
              {
                "en": "Epistemology explores the fundamental boundaries separating justified true belief from mere opinion.",
                "uz": "Epistemologiya asosli haqiqiy ishonchni shunchaki shaxsiy fikrdan ajratuvchi asosiy chegaralarni o'rganadi."
              },
              {
                "en": "The seminar examined how feminist epistemology challenges traditional scientific objectivity.",
                "uz": "Seminarda feministik bilish nazariyasi an'anaviy ilmiy xolislikka qanday yangicha yondashishi tahlil qilindi."
              },
              {
                "en": "Understanding epistemology helps researchers critique unconscious cognitive biases in methodology.",
                "uz": "Bilish nazariyasini tushunish tadqiqotchilarga metodologiyadagi ongsiz aqliy adashishlarni tanqidiy baholashga yordam beradi."
              }
            ]
          },
          {
            "id": "acd-9",
            "word": "Juxtaposition",
            "pos": "noun",
            "phonetic": "/ˌdʒʌkstəpəˈzɪʃn/",
            "uzbek": "Qarama-qarshi qo'yish, yonma-yon taqqoslash",
            "definition": "The act of placing contrasting elements close together to emphasize differences.",
            "examples": [
              {
                "en": "The author uses clever juxtaposition of extreme wealth and destitution to highlight social inequality.",
                "uz": "Muallif ijtimoiy tengsizlikni yoritish uchun haddan tashqari boylik va qashshoqlikni yonma-yon taqqoslashdan mohirona foydalanadi."
              },
              {
                "en": "The art exhibition stunned critics through the dramatic juxtaposition of classical and cubist styles.",
                "uz": "Badiiy ko'rgazma mumtoz va kubistik uslublarning keskin qarama-qarshi qo'yilishi bilan tanqidchilarni lol qoldirdi."
              },
              {
                "en": "The documentary's juxtaposition of pastoral scenes with smoking factories provoked thoughtful debate.",
                "uz": "Hujjatli filmda go'zal tabiat manzaralari bilan tutayotgan zavodlarning yonma-yon qo'yilishi chuqur bahslarga sabab bo'ldi."
              }
            ]
          },
          {
            "id": "acd-10",
            "word": "Pedagogy",
            "pos": "noun",
            "phonetic": "/ˈpedəɡɒdʒi/",
            "uzbek": "Pedagogika, ta'lim berish metodikasi",
            "definition": "The theory, methodology, and practice of teaching in academic environments.",
            "examples": [
              {
                "en": "Modern educational pedagogy emphasizes student-centered collaborative problem-solving.",
                "uz": "Zamonaviy ta'lim pedagogikasi o'quvchiga yo'naltirilgan birgalikdagi muammolarni hal qilishga urg'u beradi."
              },
              {
                "en": "Digital classrooms require instructors to adapt their traditional pedagogy to interactive media.",
                "uz": "Raqamli sinfxonalar o'qituvchilardan o'z an'anaviy metodikalarini interaktiv vositalarga moslashtirishni talab qiladi."
              },
              {
                "en": "Critical pedagogy empowers pupils to question systemic societal norms and cultivate self-reflection.",
                "uz": "Tanqidiy pedagogika o'quvchilarga ijtimoiy me'yorlarni tahlil qilish va mustaqil fikrlash imkoniyatini beradi."
              }
            ]
          },
          {
            "id": "acd-11",
            "word": "Proliferation",
            "pos": "noun",
            "phonetic": "/prəˌlɪfəˈreɪʃn/",
            "uzbek": "Keng yoyilish, shiddatli ko'payish",
            "definition": "A rapid and excessive increase or spread in numbers, quantity, or prevalence.",
            "examples": [
              {
                "en": "The unchecked proliferation of unverified news blogs makes discerning objective facts difficult.",
                "uz": "Tekshirilmagan xabarlar bloglarining shiddatli ko'payishi xolis faktlarni ajratib olishni qiyinlashtirmoqda."
              },
              {
                "en": "International non-proliferation treaties aim to curb the global spread of nuclear armaments.",
                "uz": "Yadro qurollarini tarqatmaslik to'g'risidagi xalqaro shartnomalar qurollanishning global tarqalishini jilovlashni maqsad qilgan."
              },
              {
                "en": "Recent decades witnessed a breathtaking proliferation of mobile communication devices.",
                "uz": "So'nggi o'n yilliklar mobil aloqa vositalarining ko'z ko'rib quloq eshitmagan darajada ko'payishiga guvoh bo'ldi."
              }
            ]
          },
          {
            "id": "acd-12",
            "word": "Quintessential",
            "pos": "adjective",
            "phonetic": "/ˌkwɪntɪˈsenʃl/",
            "uzbek": "Klassik namunasi bo'lgan, tipik",
            "definition": "Representing the most perfect, purest, or most typical embodiment of a quality or class.",
            "examples": [
              {
                "en": "Watermelon and honeydew melons are quintessential symbols of an Uzbek summer.",
                "uz": "Tarvuz va shirin qovunlar o'zbek yozining eng yorqin, klassik timsoli hisoblanadi."
              },
              {
                "en": "The Registan in Samarkand is considered the quintessential masterpiece of Islamic architecture.",
                "uz": "Samarqanddagi Registon maydoni islom me'morchiligining tengsiz, mumtoz durdonasi hisoblanadi."
              },
              {
                "en": "His punctuality, dedication, and scholarly rigor make him the quintessential university academic.",
                "uz": "Uning vaqtga rioyasi, sadoqati va ilmiy qat'iyati uni haqiqiy universitet olimining yorqin namunasiga aylantiradi."
              }
            ]
          },
          {
            "id": "acd-13",
            "word": "Repertoire",
            "pos": "noun",
            "phonetic": "/ˈrepətwɑː/",
            "uzbek": "Mahoratlar zaxirasi, repertuar",
            "definition": "A comprehensive stock of skills, techniques, or artistic pieces an individual possesses.",
            "examples": [
              {
                "en": "An adept language teacher commands a rich repertoire of interactive classroom activities.",
                "uz": "Mohir til o'qituvchisi interaktiv dars mashg'ulotlarining boy zaxirasiga ega bo'ladi."
              },
              {
                "en": "The renowned pianist expanded his classical performance repertoire to include jazz compositions.",
                "uz": "Mashhur pianinochi o'zining mumtoz ijro repertuarini jaz kompozitsiyalari bilan boyitdi."
              },
              {
                "en": "Negotiators draw upon a wide psychological repertoire when resolving diplomatic crises.",
                "uz": "Muzokarachilar diplomatik inqirozlarni bartaraf etishda keng psixologik usullar zaxirasidan foydalanadilar."
              }
            ]
          },
          {
            "id": "acd-14",
            "word": "Scrutinize",
            "pos": "verb",
            "phonetic": "/ˈskruːtənaɪz/",
            "uzbek": "Sinchkovlik bilan tekshirmoq, sinchiklab ko'zdan kechirmoq",
            "definition": "To examine, inspect, or dissect closely and thoroughly with critical attention.",
            "examples": [
              {
                "en": "Independent peer reviewers rigorously scrutinize the experimental methodologies of submitted manuscripts.",
                "uz": "Mustaqil taqrizchilar topshirilgan qo'lyozmalarning eksperimental metodologiyasini sinchiklab tekshiradilar."
              },
              {
                "en": "Auditors were summoned to scrutinize the corporation's offshore accounting records.",
                "uz": "Kompaniyaning xorijiy hisob-kitoblarini chuqur tekshirish uchun maxsus auditorlar jalb qilindi."
              },
              {
                "en": "Scholars scrutinize ancient inscriptions under multispectral imaging to uncover faded letters.",
                "uz": "Olimlar o'chib ketgan harflarni o'qish uchun qadimiy bitiklarni ko'p spektrli tasvirlar ostida sinchkovlik bilan tekshiradilar."
              }
            ]
          },
          {
            "id": "acd-15",
            "word": "Theoretical",
            "pos": "adjective",
            "phonetic": "/ˌθɪəˈretɪkl/",
            "uzbek": "Nazariy",
            "definition": "Concerned with the conceptual foundations of a discipline rather than applied practicalities.",
            "examples": [
              {
                "en": "Theoretical physicists formulate mathematical models describing black hole thermodynamics.",
                "uz": "Nazariyotchi fiziklar qora tuynuklar termodinamikasini ifodalovchi matematik modellarni ishlab chiqadilar."
              },
              {
                "en": "While the project sound in theoretical terms, its practical execution faces enormous engineering barriers.",
                "uz": "Loyiha nazariy jihatdan to'g'ri bo'lsa-da, uning amaliy ijrosi ulkan muhandislik to'siqlariga duch kelmoqda."
              },
              {
                "en": "The curriculum balances abstract theoretical lectures with mandatory hospital clinical rotations.",
                "uz": "O'quv dasturi mavhum nazariy ma'ruzalarni majburiy shifoxona klinik amaliyotlari bilan muvozanatlashtiradi."
              }
            ]
          },
          {
            "id": "acd-16",
            "word": "Ubiquitous",
            "pos": "adjective",
            "phonetic": "/juːˈbɪkwɪtəs/",
            "uzbek": "Hamma joyda hoziru-nozir, yalpi uchraydigan",
            "definition": "Present, appearing, or encountered everywhere simultaneously.",
            "examples": [
              {
                "en": "Smartphones have become truly ubiquitous tools, shaping modern communication globally.",
                "uz": "Smartfonlar butun dunyo bo'ylab zamonaviy muloqotni shakllantiruvchi hamma joyda uchraydigan vositaga aylandi."
              },
              {
                "en": "Microplastic particles are now alarmingly ubiquitous throughout polar ice sheets and deep ocean trenches.",
                "uz": "Mikroplastik zarralari hozirda qutb muzliklari va chuqur okean botiqlarida xavotirli darajada keng tarqalgan."
              },
              {
                "en": "Ubiquitous surveillance cameras in major metropolitan hubs provoke fierce privacy controversies.",
                "uz": "Yirik megapolislardagi hamma burchakda o'rnatilgan kuzatuv kameralari shaxsiy daxlsizlik bo'yicha qizg'in bahslarni keltirib chiqarmoqda."
              }
            ]
          },
          {
            "id": "acd-17",
            "word": "Valid",
            "pos": "adjective",
            "phonetic": "/ˈvælɪd/",
            "uzbek": "Asosli, mantiqiy, qonuniy kuchga ega",
            "definition": "Having a sound basis in rigorous logic or empirical fact; legally authoritative.",
            "examples": [
              {
                "en": "The researcher presented a statistically valid argument supported by large randomized trials.",
                "uz": "Tadqiqotchi keng ko'lamli tasodifiy sinovlar bilan tasdiqlangan statistik jihatdan asosli dalilni ilgari surdi."
              },
              {
                "en": "Without the official embassy stamp, this foreign passport is not considered legally valid.",
                "uz": "Elchixonaning rasmiy muhri bo'lmasa, ushbu xorijiy pasport qonuniy kuchga ega deb hisoblanmaydi."
              },
              {
                "en": "Critics raised valid ethical objections regarding unconsented genomic data mining.",
                "uz": "Tanqidchilar roziliksiz olingan genomik ma'lumotlarni tahlil qilish bo'yicha o'rinli axloqiy e'tirozlarni bildirdilar."
              }
            ]
          },
          {
            "id": "acd-18",
            "word": "Ambivalent",
            "pos": "adjective",
            "phonetic": "/æmˈbɪvələnt/",
            "uzbek": "Ikkilanuvchan, bir-biriga zid his-tuyg'ularga ega",
            "definition": "Simultaneously holding contradictory convictions or mixed feelings about a topic.",
            "examples": [
              {
                "en": "The electorate remains largely ambivalent about the proposed economic pension adjustments.",
                "uz": "Saylovchilar taklif etilgan iqtisodiy pensiya o'zgarishlariga nisbatan asosan ikkilanuvchan munosabatda qolmoqda."
              },
              {
                "en": "Scholars hold ambivalent views regarding the net cultural impact of rapid globalization.",
                "uz": "Olimlar jadal globallashuvning madaniy ta'siri borasida bir-biriga zid qarashlarga egadirlar."
              },
              {
                "en": "She felt genuinely ambivalent about leaving her familiar hometown for a lucrative job abroad.",
                "uz": "U xorijdagi daromadli ish uchun qadrdon shahrini tark etish haqida qattiq ikkilanayotgan edi."
              }
            ]
          },
          {
            "id": "acd-19",
            "word": "Cognizant",
            "pos": "adjective",
            "phonetic": "/ˈkɒɡnɪzənt/",
            "uzbek": "Xabardor, yetarlicha anglagan",
            "definition": "Having conscious knowledge, acute understanding, or mindful awareness of something.",
            "examples": [
              {
                "en": "Policy makers must remain cognizant of the severe economic consequences of rapid deflation.",
                "uz": "Siyosatchilar tezkor deflyatsiyaning og'ir iqtisodiy oqibatlaridan doimo xabardor bo'lishlari shart."
              },
              {
                "en": "Being fully cognizant of ethical dilemmas, the surgeon explained all prospective risks to the family.",
                "uz": "Axloqiy masalalarni to'liq anglagan holda, jarroh oilaga barcha ehtimoliy xatarlarni tushuntirdi."
              },
              {
                "en": "Scholars are acutely cognizant that language constructs subjective social realities.",
                "uz": "Olimlar til sub'ektiv ijtimoiy voqelikni shakllantirishini chuqur anglaydilar."
              }
            ]
          },
          {
            "id": "acd-20",
            "word": "Delineate",
            "pos": "verb",
            "phonetic": "/dɪˈlɪnieɪt/",
            "uzbek": "Aniq belgilab bermoq, chizib ko'rsatmoq",
            "definition": "To portray, outline, or describe precisely in vivid detail or clear demarcation.",
            "examples": [
              {
                "en": "The legal statute clearly delineates the specific responsibilities of corporate directors.",
                "uz": "Qonuniy hujjat korporativ direktorlarning aniq mas'uliyat doiralarini belgilab beradi."
              },
              {
                "en": "The treaty painstakingly delineated the disputed mountain borders between both nations.",
                "uz": "Shartnoma ikki davlat o'rtasidagi bahsli tog' chegaralarini sinchiklab chizib berdi."
              },
              {
                "en": "The author delineates the psychological decline of the protagonist through poignant soliloquies.",
                "uz": "Muallif bosh qahramonning ruhiy tushkunligini ta'sirchan monologlar orqali yorqin ifodalaydi."
              }
            ]
          },
          {
            "id": "acd-21",
            "word": "Exemplify",
            "pos": "verb",
            "phonetic": "/ɪɡˈzemplɪfaɪ/",
            "uzbek": "Yorqin misol bo'lmoq, timsoli bo'lmoq",
            "definition": "To illustrate, clarify, or constitute a prime archetypal example of something.",
            "examples": [
              {
                "en": "Her dedicated philanthropic career exemplifies selflessness and altruistic civic engagement.",
                "uz": "Uning fidokorona xayriya faoliyati fidoyilik va xalqparvarlik fuqarolik burchining yorqin timsolidir."
              },
              {
                "en": "The Silk Road cities of Bukhara and Khiva exemplify outstanding medieval Islamic urban planning.",
                "uz": "Ipak yo'lining Buxoro va Xiva kabi shaharlari o'rta asrlar islomiy shaharsozligining yorqin namunasidir."
              },
              {
                "en": "These experimental findings exemplify how temperature variations alter enzymatic reaction speeds.",
                "uz": "Ushbu tajriba natijalari harorat o'zgarishi fermentativ reaksiya tezligini qanday o'zgartirishini misol qilib ko'rsatadi."
              }
            ]
          },
          {
            "id": "acd-22",
            "word": "Formidable",
            "pos": "adjective",
            "phonetic": "/ˈfɔːmɪdəbl/",
            "uzbek": "Kuchli, haybatli, yuksak iroda talab qiluvchi",
            "definition": "Inspiring fear, awe, or admiration through immense strength, intellect, or scale.",
            "examples": [
              {
                "en": "Eradicating endemic poverty across rural districts poses a formidable developmental challenge.",
                "uz": "Qishloq hududlarida qashshoqlikni bartaraf etish yuksak iroda va sa'y-harakat talab qiladigan ulkan vazifadir."
              },
              {
                "en": "The defending champion proved to be a formidable opponent with impenetrable defensive tactics.",
                "uz": "Amaldagi chempion yorib o'tib bo'lmas himoya usullari bilan juda kuchli va haybatli raqib ekanini isbotladi."
              },
              {
                "en": "She possesses a formidable intellect, authoring three pioneering scientific monographs before turning thirty.",
                "uz": "U o'ttiz yoshga to'lmasdan turib uchta ilg'or ilmiy monografiya yaratgan kuchli aql egasidir."
              }
            ]
          },
          {
            "id": "acd-23",
            "word": "Hierarchy",
            "pos": "noun",
            "phonetic": "/ˈhaɪərɑːki/",
            "uzbek": "Ierarxiya, pog'onali tuzilma",
            "definition": "A graded system in which members are ranked according to relative authority or precedence.",
            "examples": [
              {
                "en": "Traditional corporate structures rely upon a rigid vertical hierarchy with centralized decision-making.",
                "uz": "An'anaviy korporativ tuzilmalar markazlashgan qaror qabul qiluvchi qat'iy vertikal ierarxiyaga tayanadi."
              },
              {
                "en": "Maslow's hierarchy of needs arranges human motivations from biological survival to self-actualization.",
                "uz": "Maslouning ehtiyojlar ierarxiyasi insoniy motivatsiyalarni biologik omon qolishdan o'zlikni anglashgacha pog'onama-pog'ona tartiblaydi."
              },
              {
                "en": "Feudal societies maintained an unyielding social hierarchy based on hereditary aristocratic status.",
                "uz": "Feodal jamiyatlar nasliy aristokratik maqomga asoslangan o'zgarmas ijtimoiy ierarxiyani saqlab turgan."
              }
            ]
          },
          {
            "id": "acd-24",
            "word": "Inherent",
            "pos": "adjective",
            "phonetic": "/ɪnˈhɪərənt/",
            "uzbek": "Ajralmas, ichki xos, tabiatiga xos",
            "definition": "Existing as a permanent, essential, inalienable attribute or characteristic element.",
            "examples": [
              {
                "en": "Freedom of thought is recognized internationally as an inherent human right of every individual.",
                "uz": "Fikrlash erkinligi xalqaro miqyosda har bir insonning ajralmas, tug'ma huquqi sifatida tan olingan."
              },
              {
                "en": "Every financial speculative venture carries an inherent degree of unavoidable risk.",
                "uz": "Har qanday moliyaviy tavakkal loyihasi o'z tabiatiga xos bo'lgan muqarrar xavf darajasini o'z ichiga oladi."
              },
              {
                "en": "Ambiguity is an inherent feature of natural human spoken languages.",
                "uz": "Noaniqlik tabiiy inson so'zlashuv tilining ajralmas xususiyatidir."
              }
            ]
          },
          {
            "id": "acd-25",
            "word": "Manifestation",
            "pos": "noun",
            "phonetic": "/ˌmænɪfeˈsteɪʃn/",
            "uzbek": "Namoyon bo'lish, ko'rinish",
            "definition": "An event, sign, or outward action clearly revealing an abstract principle or condition.",
            "examples": [
              {
                "en": "High fever and persistent fatigue are early clinical manifestations of respiratory viral infections.",
                "uz": "Yuqori isitma va surunkali holsizlik nafas yo'llari virusli infeksiyalarining dastlabki klinik namoyon bo'lishidir."
              },
              {
                "en": "Cultural folk dances are a vibrant manifestation of a nation's historic spirit and identity.",
                "uz": "Milliy xalq raqslari xalqning tarixiy ruhiyati va o'zligining yorqin namoyon bo'lishidir."
              },
              {
                "en": "Street protests were a visible manifestation of public discontent with rising fuel inflation.",
                "uz": "Ko'cha namoyishlari yoqilg'i narxining ko'tarilishidan aholi noroziligining ochiq ko'rinishi edi."
              }
            ]
          },
          {
            "id": "acd-26",
            "word": "Nuanced",
            "pos": "adjective",
            "phonetic": "/ˈnjuːɑːnst/",
            "uzbek": "Nozik farqlarga ega, ko'p qirrali",
            "definition": "Characterized by subtle distinctions, multifaceted meanings, or delicate gradations.",
            "examples": [
              {
                "en": "The diplomat offered a nuanced appraisal of the delicate geopolitical deadlock in the region.",
                "uz": "Diplomat mintaqadagi nozik geosiyosiy vaziyatga ko'p qirrali va chuqur baho berdi."
              },
              {
                "en": "Complex sociopolitical dilemmas cannot be solved with simplistic solutions; they demand nuanced analysis.",
                "uz": "Murakkab ijtimoiy-siyosiy muammolarni jo'n yondashuv bilan yechib bo'lmaydi; ular nozik va chuqur tahlilni talab qiladi."
              },
              {
                "en": "The actor delivered an astonishingly nuanced performance, depicting conflicting inner agony.",
                "uz": "Aktyor ziddiyatli ichki iztirobni mahorat bilan tasvirlab, hayratlanarli darajada ko'p qirrali ijro ko'rsatdi."
              }
            ]
          },
          {
            "id": "acd-27",
            "word": "Plausible",
            "pos": "adjective",
            "phonetic": "/ˈplɔːzəbl/",
            "uzbek": "Aqlga sig'adigan, haqiqatga yaqin, ishonarli",
            "definition": "Seeming reasonable, probable, or logically credible on surface examination.",
            "examples": [
              {
                "en": "Geologists advanced a plausible hypothesis connecting asteroid impacts to dinosaur extinctions.",
                "uz": "Geologlar asteroid zarbasini dinozavrlarning qirilib ketishiga bog'lovchi aqlga sig'adigan farazni ilgari surdilar."
              },
              {
                "en": "His delayed arrival was backed by a completely plausible explanation concerning icy highways.",
                "uz": "Uning kechikishi muzlagan trassalar bo'yicha to'liq ishonarli sabab bilan izohlandi."
              },
              {
                "en": "Without physical evidence, speculative conspiracy narratives rarely represent plausible historical reality.",
                "uz": "Moddiy dalillarsiz taxminiy fitna nazariyalari haqiqatga yaqin tarixiy voqelikni deyarli ifodalamaydi."
              }
            ]
          },
          {
            "id": "acd-28",
            "word": "Pragmatic",
            "pos": "adjective",
            "phonetic": "/præɡˈmætɪk/",
            "uzbek": "Pragmatik, amaliy manfaatlarga asoslangan",
            "definition": "Dealing with circumstances realistically and practically rather than on abstract dogmas.",
            "examples": [
              {
                "en": "The administration adopted a pragmatic diplomatic approach, securing trade accords across competing blocs.",
                "uz": "Rahbariyat pragmatik diplomatik yo'lni tanlab, raqobatchi bloklar o'rtasida manfaatli savdo bitimlariga erishdi."
              },
              {
                "en": "In software development, opting for a pragmatic minimal architecture accelerates product deployment.",
                "uz": "Dasturiy ta'minotda amaliy va ixcham arxitekturani tanlash mahsulotni ishga tushirishni tezlashtiradi."
              },
              {
                "en": "He offered pragmatic advice on managing household expenditures during times of austerity.",
                "uz": "U tejamkorlik davrida ro'zg'or xarajatlarini boshqarish bo'yicha o'rinli amaliy maslahatlar berdi."
              }
            ]
          },
          {
            "id": "acd-29",
            "word": "Synthesize",
            "pos": "verb",
            "phonetic": "/ˈsɪnθəsaɪz/",
            "uzbek": "Sintez qilmoq, umumlashtirib yaxlit xulosaga kelmoq",
            "definition": "To combine diverse disparate elements, theories, or observations into a coherent whole.",
            "examples": [
              {
                "en": "The concluding chapter seeks to synthesize sociological, economic, and historical perspectives into one model.",
                "uz": "Yakuniy bob sotsiologik, iqtisodiy va tarixiy qarashlarni yagona modelda umumlashtirishga intiladi."
              },
              {
                "en": "Chemists succeeded in synthesizing a complex organic molecule previously found solely in rare marine sponges.",
                "uz": "Kimyogarlar avval faqat noyob dengiz bulutlarida topilgan murakkab organik molekulani sintez qilishga muvaffaq bo'ldilar."
              },
              {
                "en": "Skilled executives synthesize vast volumes of market data to execute rapid strategic decisions.",
                "uz": "Tajribali rahbarlar tezkor strategik qarorlar qabul qilish uchun ulkan bozor ma'lumotlarini umumlashtiradilar."
              }
            ]
          },
          {
            "id": "acd-30",
            "word": "Unequivocal",
            "pos": "adjective",
            "phonetic": "/ˌʌnɪˈkwɪvəkl/",
            "uzbek": "Shubhasiz, mutlaqo aniq va ravshan",
            "definition": "Leaving no doubt or ambiguity; clear, decisive, and unmistakable.",
            "examples": [
              {
                "en": "The scientific consensus provides unequivocal evidence that anthropogenic emissions drive global warming.",
                "uz": "Ilmiy konsensus inson omili chiqindilari global isishga sabab bo'layotganining shubhasiz dalillarini taqdim etadi."
              },
              {
                "en": "The foreign ministry issued an unequivocal condemnation of military aggression across the border.",
                "uz": "Tashqi ishlar vazirligi chegara orqali harbiy tajovuzni mutlaqo aniq va keskin qoraladi."
              },
              {
                "en": "The jury delivered an unequivocal verdict of not guilty based on indisputable DNA analysis.",
                "uz": "Hakamlar hay'ati inkor etib bo'lmas DNK tahlili asosida mutlaqo oqlovchi hukm chiqardi."
              }
            ]
          }
        ],
        "unitNumber": 1,
        "category": "Academic & Research"
      },
      {
        "id": "c1-law",
        "title": "Unit 02: The Letter of the Law & Justice (Qonun ustuvorligi va adliya)",
        "unitNumber": 2,
        "category": "Law & Justice",
        "icon": "fa-gavel",
        "color": "from-rose-600 to-red-800",
        "cambridge_source": "Cambridge English Vocabulary in Use Advanced, Unit 43: The letter of the law",
        "words": [
          {
            "id": "c1-law-1",
            "word": "Contravene",
            "pos": "verb",
            "phonetic": "/ˌkɒntrəˈviːn/",
            "uzbek": "Qonunni buzmoq, zid kelmoq",
            "definition": "To do something that a law or rule does not allow, or to break a law.",
            "examples": [
              {
                "en": "Nathan was in contravention of the terms of his employment contract.",
                "uz": "Natan o'z mehnat shartnomasi shartlarini buzgan holatda edi."
              },
              {
                "en": "The government company was accused of actions that contravene international treaties.",
                "uz": "Hukumat kompaniyasi xalqaro shartnomalarga zid keladigan harakatlarda ayblandi."
              },
              {
                "en": "Any company that contravenes these environmental safety regulations will face heavy fines.",
                "uz": "Ushbu ekologik xavfsizlik qoidalarini buzgan har qanday kompaniya katta jarimaga tortiladi."
              }
            ]
          },
          {
            "id": "c1-law-2",
            "word": "Infringe",
            "pos": "verb",
            "phonetic": "/ɪnˈfrɪndʒ/",
            "uzbek": "Huquqni poymol qilmoq, buzmoq",
            "definition": "To break a rule, law, or someone's legal right.",
            "examples": [
              {
                "en": "You infringe my legal rights by not allowing me to vote.",
                "uz": "Menga ovoz berishga ruxsat bermaslik orqali siz qonuniy huquqlarimni poymol qilyapsiz."
              },
              {
                "en": "Some people consider the infringement of others' rights as serious a crime as theft.",
                "uz": "Ba'zi odamlar boshqalarning huquqlarini buzishni o'g'irlik kabi og'ir jinoyat deb hisoblashadi."
              },
              {
                "en": "The manufacturer was sued for infringing the patented technology of a competitor.",
                "uz": "Ishlab chiqaruvchi raqobatchining patentlangan texnologiyasini buzganlikda ayblanib sudga berildi."
              }
            ]
          },
          {
            "id": "c1-law-3",
            "word": "Impeach",
            "pos": "verb",
            "phonetic": "/ɪmˈpiːtʃ/",
            "uzbek": "Mansabdor shaxsga impichment e'lon qilmoq",
            "definition": "To make a formal statement saying that a person in public office has committed a serious offence.",
            "examples": [
              {
                "en": "The governor of the province was impeached for wrongful use of state money.",
                "uz": "Viloyat gubernatoriga davlat mablag'larini noqonuniy sarflagani uchun impichment e'lon qilindi."
              },
              {
                "en": "The impeachment of a president has only taken place a couple of times in US history.",
                "uz": "Prezidentga impichment e'lon qilish AQSh tarixida bor-yo'g'i bir-ikki marta sodir bo'lgan."
              },
              {
                "en": "Congress voted overwhelmingly to impeach the high court official for bribery.",
                "uz": "Kongress poraxo'rlik uchun yuqori sud mansabdoriga impichment e'lon qilish uchun bir ovozdan ovoz berdi."
              }
            ]
          },
          {
            "id": "c1-law-4",
            "word": "Lodge an appeal",
            "pos": "phrase",
            "phonetic": "/lɒdʒ ən əˈpiːl/",
            "uzbek": "Apellyatsiya shikoyati bermoq",
            "definition": "To make an official request that a previous court judgement should be changed.",
            "examples": [
              {
                "en": "The prisoner decided to lodge an appeal against the court's decision.",
                "uz": "Mahbus sudning qarori ustidan apellyatsiya shikoyati berishga qaror qildi."
              },
              {
                "en": "Her defence lawyer lodged an appeal citing newly discovered evidence.",
                "uz": "Uning himoyachisi yangi ochilgan dalillarni keltirib, apellyatsiya shikoyati berdi."
              },
              {
                "en": "They have 14 days to lodge an appeal before the final sentence takes effect.",
                "uz": "Yakuniy hukm kuchga kirgunga qadar apellyatsiya berish uchun ularda 14 kun bor."
              }
            ]
          },
          {
            "id": "c1-law-5",
            "word": "Overturn a verdict",
            "pos": "phrase",
            "phonetic": "/ˌəʊvəˈtɜːn ə ˈvɜːdɪkt/",
            "uzbek": "Sud hukmini bekor qilmoq",
            "definition": "To state officially that a previous decision in court was incorrect and reverse it.",
            "examples": [
              {
                "en": "The appeal court overturned the verdict of the lower court and the prisoner was released.",
                "uz": "Apellyatsiya sudi quyi sudning hukmini bekor qildi va mahbus ozod qilindi."
              },
              {
                "en": "Campaigners fought tirelessly for years to overturn the unjust verdict.",
                "uz": "Faollar adolatsiz hukmni bekor qilish uchun yillar davomida tinimsiz kurashdilar."
              },
              {
                "en": "The high judicial bench decided to overturn the verdict based on procedural irregularities.",
                "uz": "Oliy sud hay'ati protsessual qonunbuzarliklarga asoslanib hukmni bekor qilishga qaror qildi."
              }
            ]
          },
          {
            "id": "c1-law-6",
            "word": "Pervert the course of justice",
            "pos": "phrase",
            "phonetic": "/pəˈvɜːt ðə kɔːs əv ˈdʒʌstɪs/",
            "uzbek": "Odil sudlov jarayoniga to'sqinlik qilmoq / chalg'itmoq",
            "definition": "To act in a way that prevents justice from being done properly.",
            "examples": [
              {
                "en": "Witnesses charged with perjury are accused of perverting the course of justice.",
                "uz": "Yolg'on guvohlik berishda ayblangan guvohlar odil sudlovni buzishda ayblanmoqda."
              },
              {
                "en": "Attempting to bribe a juror is a serious offence that perverts the course of justice.",
                "uz": "Hakamlar hay'ati a'zosiga pora berishga urinish odil sudlovga putur yetkazadigan og'ir jinoyatdir."
              },
              {
                "en": "The corrupt official was imprisoned for trying to pervert the course of justice.",
                "uz": "Korrupsioner amaldor odil sudlovni buzishga uringani uchun qamoqqa tashlandi."
              }
            ]
          },
          {
            "id": "c1-law-7",
            "word": "Quash a conviction",
            "pos": "phrase",
            "phonetic": "/kwɒʃ ə kənˈvɪkʃən/",
            "uzbek": "Sudlanganlik hukmini butunlay bekor qilmoq",
            "definition": "To officially change a previous decision that someone was guilty.",
            "examples": [
              {
                "en": "The Supreme Court quashed the murder conviction and the man was freed.",
                "uz": "Oliy sud qotillik bo'yicha ayblov hukmini bekor qildi va erkak ozod etildi."
              },
              {
                "en": "After DNA testing proved his innocence, the judge quashed his wrongful conviction.",
                "uz": "DNK testi uning aybsizligini isbotlaganidan so'ng, sudya uning nohaq sudlanganlik hukmini bekor qildi."
              },
              {
                "en": "The legal tribunal agreed to quash the conviction due to tainted witness statements.",
                "uz": "Huquqiy tribunal soxta guvohlik ko'rsatmalari sababli hukmni bekor qilishga rozi bo'ldi."
              }
            ]
          },
          {
            "id": "c1-law-8",
            "word": "Set a precedent",
            "pos": "phrase",
            "phonetic": "/set ə ˈpresɪdənt/",
            "uzbek": "Sud pretsedenti yaratmoq",
            "definition": "To establish an official decision that must be taken into account in future decisions.",
            "examples": [
              {
                "en": "In English law, a previous legal decision usually sets a precedent for future cases.",
                "uz": "Ingliz huquqida avvalgi sud qarori odatda kelajakdagi ishlar uchun pretsedent yaratadi."
              },
              {
                "en": "This landmark ruling on digital privacy will set an important precedent.",
                "uz": "Raqamli maxfiylik bo'yicha ushbu muhim qaror kuchli pretsedent yaratadi."
              },
              {
                "en": "Judges are cautious when making decisions that could set an unintended legal precedent.",
                "uz": "Sudyalar kutilmagan huquqiy pretsedent yaratishi mumkin bo'lgan qarorlar qabul qilishda ehtiyotkor bo'lishadi."
              }
            ]
          },
          {
            "id": "c1-law-9",
            "word": "Custody",
            "pos": "noun",
            "phonetic": "/ˈkʌstədi/",
            "uzbek": "Vasiylik, qaramog'iga olish",
            "definition": "The legal right or duty to care for someone, especially a child after divorce.",
            "examples": [
              {
                "en": "Judges often award custody to the mother rather than the father.",
                "uz": "Sudyalar vasiylikni ko'pincha otaga emas, onaga berishadi."
              },
              {
                "en": "The estranged couple entered into a bitter legal dispute over the custody of their children.",
                "uz": "Ayrilgan er-xotin farzandlarining vasiyligi bo'yicha keskin sud bahsiga kirishdilar."
              },
              {
                "en": "The family court awarded joint custody to ensure both parents remain involved.",
                "uz": "Oila sudi har ikki ota-onaning ishtirokini ta'minlash uchun birgalikdagi vasiylikni belgiladi."
              }
            ]
          },
          {
            "id": "c1-law-10",
            "word": "Annul",
            "pos": "verb",
            "phonetic": "/əˈnʌl/",
            "uzbek": "Bekor qilmoq, o'z kuchini yo'qotgan deb topmoq",
            "definition": "To declare officially that an agreement, marriage, or law no longer exists and never legally existed.",
            "examples": [
              {
                "en": "The marriage was annulled because the man had never properly divorced his first wife.",
                "uz": "Nikoh bekor qilindi, chunki erkak birinchi xotini bilan qonuniy ajrashmagan edi."
              },
              {
                "en": "The court decided to annul the fraudulent commercial contract.",
                "uz": "Sud firibgarlik yo'li bilan tuzilgan tijorat shartnomasini haqiqiy emas deb topdi."
              },
              {
                "en": "Circumstances were such that the high judge agreed to an annulment of the treaty.",
                "uz": "Vaziyat shunday bo'ldiki, bosh sudya bitimni bekor qilishga rozi bo'ldi."
              }
            ]
          },
          {
            "id": "c1-law-11",
            "word": "Sue",
            "pos": "verb",
            "phonetic": "/suː/",
            "uzbek": "Sudga bermoq, da'vo qo'zg'amoq",
            "definition": "To take legal action against a person or organization, especially by making a legal claim for money.",
            "examples": [
              {
                "en": "Amy took her employer to court and decided to sue for workplace negligence.",
                "uz": "Emi ish beruvchisini sudga berdi va ish joyidagi e'tiborsizlik uchun da'vo qo'zg'ashga qaror qildi."
              },
              {
                "en": "He threatened to sue the national newspaper for libel and defamation.",
                "uz": "U milliy gazetani tuhmat va obro'sizlantirish uchun sudga berish bilan tahdid qildi."
              },
              {
                "en": "The consumer rights group sued the pharmaceutical giant for hidden side effects.",
                "uz": "Iste'molchilar huquqlarini himoya qilish guruhi farmatsevtika gigantini yashirin nojo'ya ta'sirlar uchun sudga berdi."
              }
            ]
          },
          {
            "id": "c1-law-12",
            "word": "Allege",
            "pos": "verb",
            "phonetic": "/əˈledʒ/",
            "uzbek": "Isbotsiz da'vo qilmoq, ayblamoq",
            "definition": "To state that someone has done something illegal without giving definitive proof.",
            "examples": [
              {
                "en": "To suggest that Leah took the funds without evidence is a very serious allegation.",
                "uz": "Liyani dalilsiz mablag'ni o'zlashtirganlikda gumon qilish juda jiddiy da'vodir."
              },
              {
                "en": "The prosecution alleged that the defendant had conspired with foreign agents.",
                "uz": "Ayblov tomoni sudlanuvchini xorijiy agentlar bilan til biriktirgan deb da'vo qildi."
              },
              {
                "en": "The document alleges systemic financial irregularities within the council.",
                "uz": "Hujjatda kengash ichida tizimli moliyaviy qoidabuzarliklar mavjudligi ta'kidlangan."
              }
            ]
          },
          {
            "id": "c1-law-13",
            "word": "Amend",
            "pos": "verb",
            "phonetic": "/əˈmend/",
            "uzbek": "Qonunga tuzatish kiritmoq",
            "definition": "To make changes to a law, contract, or official document.",
            "examples": [
              {
                "en": "Parliament is currently discussing a number of amendments to the laws on citizenship.",
                "uz": "Parlament hozirda fuqarolik to'g'risidagi qonunlarga bir qator o'zgartirishlar kiritishni muhokama qilmoqda."
              },
              {
                "en": "The constitution was amended to protect individual privacy in the digital age.",
                "uz": "Konstitutsiya raqamli asrda shaxsiy daxlsizlikni himoya qilish maqsadida o'zgartirildi."
              },
              {
                "en": "Lawmakers drafted a bill to amend existing property taxation clauses.",
                "uz": "Qonun chiqaruvchilar amaldagi mulk solig'i bandlariga tuzatish kiritish to'g'risidagi qonun loyihasini ishlab chiqdilar."
              }
            ]
          },
          {
            "id": "c1-law-14",
            "word": "Embezzlement",
            "pos": "noun",
            "phonetic": "/ɪmˈbezlmənt/",
            "uzbek": "O'zlashtirish, talon-toroj qilish (xiyonat yo'li bilan)",
            "definition": "The crime of secretly taking money that belongs to an organisation that you work for.",
            "examples": [
              {
                "en": "The managing director was charged with embezzlement after diverting corporate funds.",
                "uz": "Bosh direktor korporativ mablag'larni o'zlashtirganidan so'ng talon-toroj qilishda ayblandi."
              },
              {
                "en": "Internal audits uncovered extensive embezzlement amounting to millions of euros.",
                "uz": "Ichki audit millionlab yevroga teng bo'lgan yirik talon-torojlikni fosh qildi."
              },
              {
                "en": "The corrupt accountant spent ten years in prison for systematic embezzlement.",
                "uz": "Korrupsioner buxgalter tizimli talon-torojlik uchun o'n yil qamoqda o'tirdi."
              }
            ]
          },
          {
            "id": "c1-law-15",
            "word": "Perjury",
            "pos": "noun",
            "phonetic": "/ˈpɜːdʒəri/",
            "uzbek": "Qasamyodni buzib yolg'on guvohlik berish",
            "definition": "The crime of telling lies when you have sworn an official oath to tell the truth in court.",
            "examples": [
              {
                "en": "A key witness was convicted of perjury after contradicting his initial testimony.",
                "uz": "Asosiy guvoh dastlabki ko'rsatmasiga zid gapirganidan so'ng yolg'on guvohlik berishda aybdor deb topildi."
              },
              {
                "en": "Committing perjury carries severe penalties, including immediate imprisonment.",
                "uz": "Qasamyodni buzib yolg'on ko'rsatma berish og'ir jazoga, jumladan, zudlik bilan qamoqqa olinishga olib keladi."
              },
              {
                "en": "The detective was dismissed from the force for suborning perjury.",
                "uz": "Tergovchi soxta guvohlikka undagani uchun xizmatdan bo'shatildi."
              }
            ]
          },
          {
            "id": "c1-law-16",
            "word": "Money laundering",
            "pos": "noun",
            "phonetic": "/ˈmʌni ˌlɔːndərɪŋ/",
            "uzbek": "Noqonuniy pullarni yuvish / legallashtirish",
            "definition": "The illegal process of moving money obtained from crimes so its criminal origin cannot be traced.",
            "examples": [
              {
                "en": "International regulators implemented strict rules to curb global money laundering.",
                "uz": "Xalqaro nazoratchilar global pul yuvishni jilovlash uchun qat'iy qoidalar kiritdilar."
              },
              {
                "en": "The bank was hit with record fines for facilitating money laundering networks.",
                "uz": "Bank pul yuvish tarmoqlariga ko'maklashgani uchun rekord darajadagi jarimaga tortildi."
              },
              {
                "en": "Shell corporations are often exploited for clandestine money laundering operations.",
                "uz": "Yashirin pul yuvish operatsiyalari uchun ko'pincha soxta kompaniyalardan foydalaniladi."
              }
            ]
          },
          {
            "id": "c1-law-17",
            "word": "Insider trading",
            "pos": "noun",
            "phonetic": "/ɪnˈsaɪdə ˈtreɪdɪŋ/",
            "uzbek": "Ichki maxfiy ma'lumotlar orqali aksiyalar savdosi qilish",
            "definition": "The illegal practice of buying and selling shares using confidential company information.",
            "examples": [
              {
                "en": "A board member was accused of insider trading after selling shares before the merger.",
                "uz": "Kengash a'zosi qo'shilishdan oldin aksiyalarni sotib, insayderlik savdosida ayblandi."
              },
              {
                "en": "Financial market authorities monitor irregular volume spikes to detect insider trading.",
                "uz": "Moliya bozori organlari insayderlik savdosini aniqlash uchun noodatiy hajm sakrashlarini kuzatib boradi."
              },
              {
                "en": "He was banned from the stock exchange for participating in insider dealing.",
                "uz": "U insayderlik savdolarida qatnashgani sababli fond birjasidan chetlashtirildi."
              }
            ]
          },
          {
            "id": "c1-law-18",
            "word": "Trespass",
            "pos": "verb",
            "phonetic": "/ˈtrespəs/",
            "uzbek": "Birovning yeriga ruxsatsiz bostirib kirmoq",
            "definition": "To go onto someone's land or enter their property without permission.",
            "examples": [
              {
                "en": "A camper spent the night on a farmer's land and was warned not to trespass.",
                "uz": "Sayyoh fermerning yerida tunab qoldi va ruxsatsiz kirmaslik to'g'risida ogohlantirildi."
              },
              {
                "en": "Prominent signs warned that trespassers would be prosecuted under the law.",
                "uz": "Ko'zga ko'ringan belgilar ruxsatsiz kiruvchilar qonun bo'yicha javobgarlikka tortilishini ogohlantirgan."
              },
              {
                "en": "Hunting on private woodland without authorization constitutes civil trespass.",
                "uz": "Ruxsatsiz shaxsiy o'rmonda ov qilish fuqarolik chegarasini buzish hisoblanadi."
              }
            ]
          },
          {
            "id": "c1-law-19",
            "word": "Law-abiding",
            "pos": "adjective",
            "phonetic": "/ˈlɔː əˌbaɪdɪŋ/",
            "uzbek": "Qonunlarga itoat qiluvchi, qonunparvar",
            "definition": "Obeying and respecting the law at all times.",
            "examples": [
              {
                "en": "Isabelle is far too law-abiding to bring undeclared goods into the country.",
                "uz": "Izabel mamlakatga deklaratsiya qilinmagan tovarlarni olib kirishga haddan tashqari qonunparvar."
              },
              {
                "en": "Peaceful communities rely on the civic participation of law-abiding citizens.",
                "uz": "Tinch jamiyatlar qonunga itoatkor fuqarolarning faol ishtirokiga tayanadi."
              },
              {
                "en": "Most ordinary families are law-abiding people who desire safety and justice.",
                "uz": "Ko'pchilik oddiy oilalar xavfsizlik va adolatni istaydigan qonunparvar insonlardir."
              }
            ]
          },
          {
            "id": "c1-law-20",
            "word": "Take the law into one's own hands",
            "pos": "idiom",
            "phonetic": "/teɪk ðə lɔː ˈɪntuː wʌnz əʊn hændz/",
            "uzbek": "O'zboshimchalik bilan jazolamoq / sud qilmoq",
            "definition": "To do something illegal to punish someone because you feel the legal system will fail to act.",
            "examples": [
              {
                "en": "You should let the police handle it; it is far too risky to take the law into your own hands.",
                "uz": "Buni politsiyaga qo'yib berishingiz kerak; o'zboshimchalik bilan qasos olish juda xavfli."
              },
              {
                "en": "Vigilante mobs that take the law into their own hands undermine civil peace.",
                "uz": "O'zboshimchalik bilan jazo beruvchi to'dalar fuqarolik tinchligiga putur yetkazadi."
              },
              {
                "en": "Frustrated residents were cautioned against taking the law into their own hands.",
                "uz": "G'azablangan aholi o'zboshimchalik bilan chora ko'rishdan ogohlantirildi."
              }
            ]
          },
          {
            "id": "c1-law-21",
            "word": "Lay down the law",
            "pos": "idiom",
            "phonetic": "/leɪ daʊn ðə lɔː/",
            "uzbek": "Qat'iy talab qo'ymoq, buyruq ohangida gapirmoq",
            "definition": "To tell people forcefully what they must do and how they should behave.",
            "examples": [
              {
                "en": "You shouldn't start laying down the law on your very first day in a new office.",
                "uz": "Yangi idoradagi birinchi ish kuningizdanoq qat'iy talablar qo'yishni boshlamasligingiz kerak."
              },
              {
                "en": "The headmaster gathered the students and laid down the law regarding school discipline.",
                "uz": "Maktab direktori o'quvchilarni yig'ib, maktab intizomi bo'yicha qat'iy talablarni e'lon qildi."
              },
              {
                "en": "When productivity plummeted, the CEO stepped in to lay down the law.",
                "uz": "Mahsuldorlik keskin pasayib ketgach, bosh direktor qat'iy tartib o'rnatish uchun aralashdi."
              }
            ]
          },
          {
            "id": "c1-law-22",
            "word": "A law unto oneself",
            "pos": "idiom",
            "phonetic": "/ə lɔː ˈʌntuː wʌnˌself/",
            "uzbek": "Hech kimni tan olmaydigan, o'z bilganidan qolmaydigan",
            "definition": "Behaving in an unconventional, independent way without respecting conventional rules or authorities.",
            "examples": [
              {
                "en": "You will never get Vadim to conform with bureaucracy; he is completely a law unto himself.",
                "uz": "Vadimni byurokratiyaga bo'ysundira olmaysiz; u butunlay o'z bilganicha yashaydigan odam."
              },
              {
                "en": "The brilliant young architect was notoriously difficult because he was a law unto himself.",
                "uz": "Ushbu iqtidorli yosh me'mor o'ziga xosligi va qoidalarni tan olmasligi bilan mashhur edi."
              },
              {
                "en": "She acts as a law unto herself, paying no heed to traditional workplace etiquette.",
                "uz": "U an'anaviy ish odob-axloqiga e'tibor bermay, mutlaqo o'ziga xos harakat qiladi."
              }
            ]
          },
          {
            "id": "c1-law-23",
            "word": "Acquit",
            "pos": "verb",
            "phonetic": "/əˈkwɪt/",
            "uzbek": "Oqlamoq, aybsiz deb topmoq",
            "definition": "To officially decide and state in a court of law that someone is not guilty of a crime.",
            "examples": [
              {
                "en": "The jury acquitted the defendant of all felony charges after three days of deliberation.",
                "uz": "Hakamlar hay'ati uch kunlik muhokamadan so'ng sudlanuvchini barcha og'ir ayblovlar bo'yicha oqladi."
              },
              {
                "en": "She was fully acquitted when crucial surveillance footage corroborated her alibi.",
                "uz": "Muhim kuzatuv tasvirlari uning alibisini tasdiqlagach, u butunlay oqlandi."
              },
              {
                "en": "Failure to establish guilt beyond reasonable doubt forced the judge to acquit the suspect.",
                "uz": "Aybi shubhasiz isbotlanmagani sababli sudya gumonlanuvchini oqlashga majbur bo'ldi."
              }
            ]
          },
          {
            "id": "c1-law-24",
            "word": "Indictment",
            "pos": "noun",
            "phonetic": "/ɪnˈdaɪtmənt/",
            "uzbek": "Rasmiy ayblov xulosasi",
            "definition": "A formal written statement accusing someone of a serious crime.",
            "examples": [
              {
                "en": "The grand jury returned a sealed indictment against six senior company executives.",
                "uz": "Katta hakamlar hay'ati olti nafar yuqori martabali kompaniya rahbarlariga nisbatan yopiq ayblov xulosasini chiqardi."
              },
              {
                "en": "The report stands as a devastating indictment of the state prison system.",
                "uz": "Hisobot davlat qamoqxona tizimiga qo'yilgan jiddiy ayblov sifatida namoyon bo'ladi."
              },
              {
                "en": "His indictment on fraud charges brought a sudden halt to his political ambitions.",
                "uz": "Uning firibgarlikda ayblanishi uning siyosiy ambitsiyalariga kutilmaganda chek qo'ydi."
              }
            ]
          },
          {
            "id": "c1-law-25",
            "word": "Extradition",
            "pos": "noun",
            "phonetic": "/ˌekstrəˈdɪʃən/",
            "uzbek": "Ekstraditsiya (jinoyatchini boshqa davlatga topshirish)",
            "definition": "The legal surrender of an alleged criminal by one state or country to another.",
            "examples": [
              {
                "en": "The foreign fugitive fought against his extradition to face embezzlement charges.",
                "uz": "Xorijiy qochqin talon-torojlik ayblovlariga duch kelmaslik uchun ekstraditsiyaga qarshi kurashdi."
              },
              {
                "en": "A bilateral treaty provides the precise framework for intergovernmental extradition.",
                "uz": "Ikki tomonlama shartnoma hukumatlararo ekstraditsiya uchun aniq asos yaratadi."
              },
              {
                "en": "The high court authorized the extradition of the cybercrime syndicate leader.",
                "uz": "Oliy sud kiberjinoyatchilar sindikati yetakchisini ekstraditsiya qilishga ruxsat berdi."
              }
            ]
          },
          {
            "id": "c1-law-26",
            "word": "Injunction",
            "pos": "noun",
            "phonetic": "/ɪnˈdʒʌŋkʃən/",
            "uzbek": "Sud taqiqi, sudning majburiy ko'rsatmasi",
            "definition": "An official order from a court telling someone not to do something or to stop doing something.",
            "examples": [
              {
                "en": "The court granted an emergency injunction to halt construction on historical land.",
                "uz": "Sud tarixiy yerda qurilishni to'xtatish haqida shoshilinch taqiq chiqardi."
              },
              {
                "en": "They obtained an injunction restraining the publisher from releasing the private letters.",
                "uz": "Ular nashriyotga shaxsiy xatlarni e'lon qilishni taqiqlovchi sud ajrimini oldilar."
              },
              {
                "en": "Violating a judicial injunction can result in severe financial penalties and detention.",
                "uz": "Sud taqiqini buzish og'ir moliyaviy jarimalar va hibsga olinishga olib kelishi mumkin."
              }
            ]
          },
          {
            "id": "c1-law-27",
            "word": "Subpoena",
            "pos": "noun",
            "phonetic": "/səˈpiːnə/",
            "uzbek": "Sudga chaqiruv qog'ozi (guvoh yoki hujjatlar uchun)",
            "definition": "An official legal document ordering someone to appear in a court of law.",
            "examples": [
              {
                "en": "The congressional committee issued a subpoena demanding internal corporate documents.",
                "uz": "Kongress qo'mitasi ichki korporativ hujjatlarni talab qilib chaqiruv qog'ozi chiqardi."
              },
              {
                "en": "Failing to comply with a court subpoena constitutes contempt of court.",
                "uz": "Sud chaqiruviga bo'ysunmaslik sudga nisbatan hurmatsizlik deb topiladi."
              },
              {
                "en": "She was served with a subpoena to appear as an expert witness next Monday.",
                "uz": "Unga kelasi dushanba kuni ekspert guvoh sifatida ishtirok etish uchun sud chaqiruvi topshirildi."
              }
            ]
          },
          {
            "id": "c1-law-28",
            "word": "Jurisdiction",
            "pos": "noun",
            "phonetic": "/ˌdʒʊərɪsˈdɪkʃən/",
            "uzbek": "Yurisdiksiya, sud vakolati hududi",
            "definition": "The official authority of a court or legal body to make decisions and judgements.",
            "examples": [
              {
                "en": "The crime occurred on international waters, raising complex questions of jurisdiction.",
                "uz": "Jinoyat xalqaro suvlarda sodir bo'lib, sud vakolati yuzasidan murakkab savollarni keltirib chiqardi."
              },
              {
                "en": "The district court ruled that the case fell outside its territorial jurisdiction.",
                "uz": "Tuman sudi bu ish uning hududiy yurisdiksiyasiga kirmasligini ma'lum qildi."
              },
              {
                "en": "Extradition depends on whether both nations acknowledge concurrent jurisdiction.",
                "uz": "Ekstraditsiya har ikki davlat parallel sud vakolatini tan olish-olmasligiga bog'liq."
              }
            ]
          },
          {
            "id": "c1-law-29",
            "word": "Malpractice",
            "pos": "noun",
            "phonetic": "/mælˈpræktɪs/",
            "uzbek": "Kasbiy layoqatsizlik, xizmat vazifasini qo'pol buzish",
            "definition": "Careless, illegal, or unacceptable behaviour by someone in a professional position.",
            "examples": [
              {
                "en": "The surgeon was stripped of his license following several complaints of medical malpractice.",
                "uz": "Jarroh tibbiy xizmatdagi qo'pol xatolari haqidagi bir nechta shikoyatlardan so'ng litsenziyasidan mahrum qilindi."
              },
              {
                "en": "The legal firm specializes in representing victims of professional malpractice.",
                "uz": "Ushbu yuridik firma kasbiy layoqatsizlik qurbonlarini himoya qilishga ixtisoslashgan."
              },
              {
                "en": "Insurance coverage protects practitioners against catastrophic malpractice claims.",
                "uz": "Sug'urta qoplamasi mutaxassislarni og'ir kasbiy xatolik da'volaridan himoya qiladi."
              }
            ]
          },
          {
            "id": "c1-law-30",
            "word": "Statute of limitations",
            "pos": "phrase",
            "phonetic": "/ˈstætʃuːt əv ˌlɪmɪˈteɪʃənz/",
            "uzbek": "Da'vo muddati (javobgarlikka tortish muddati)",
            "definition": "A law that sets the maximum period of time after an event that legal proceedings may be initiated.",
            "examples": [
              {
                "en": "The defence argued that the charges must be dismissed because the statute of limitations had expired.",
                "uz": "Himoya tomoni da'vo muddati o'tib ketganligi sababli ayblovlar bekor qilinishi kerakligini ta'kidladi."
              },
              {
                "en": "For heinous crimes like homicide, there is typically no statute of limitations.",
                "uz": "Qotillik kabi o'ta og'ir jinoyatlar uchun odatda da'vo muddati cheklanmaydi."
              },
              {
                "en": "Lawmakers are considering extending the statute of limitations for complex corporate financial fraud.",
                "uz": "Qonun chiqaruvchilar murakkab korporativ moliyaviy firibgarliklar uchun da'vo muddatini uzaytirishni ko'rib chiqmoqdalar."
              }
            ]
          }
        ]
      },
      {
        "id": "c1-diplomacy",
        "title": "Unit 03: International Diplomacy & Global Politics (Xalqaro diplomatiya va global siyosat)",
        "unitNumber": 3,
        "category": "Diplomacy & Politics",
        "icon": "fa-earth-americas",
        "color": "from-sky-700 to-blue-900",
        "cambridge_source": "Cambridge English Vocabulary in Use Advanced, Unit 42: International politics",
        "words": [
          {
            "id": "c1-dip-1",
            "word": "Constitute",
            "pos": "verb",
            "phonetic": "/ˈkɒnstɪtʃuːt/",
            "uzbek": "Tashkil etmoq, asos solinmoq",
            "definition": "To form or officially establish an organisation or body.",
            "examples": [
              {
                "en": "The UN is an international organisation constituted in 1945 to keep peace.",
                "uz": "BMT 1945 yilda tinchlikni saqlash maqsadida tashkil etilgan xalqaro tashkilotdir."
              },
              {
                "en": "These fundamental clauses constitute the cornerstone of democratic governance.",
                "uz": "Ushbu asosiy moddalar demokratik boshqaruvning poydevorini tashkil etadi."
              },
              {
                "en": "Twelve sovereign nations constituted the newly formed regional trade alliance.",
                "uz": "O'n ikkita suveren davlat yangi tashkil etilgan mintaqaviy savdo ittifoqini tuzdilar."
              }
            ]
          },
          {
            "id": "c1-dip-2",
            "word": "Pursue",
            "pos": "verb",
            "phonetic": "/pəˈsjuː/",
            "uzbek": "Maqsad sari intilmoq, olib bormoq",
            "definition": "To follow or try to achieve a policy, goal, strategy, or aim over time.",
            "examples": [
              {
                "en": "From its foundation, the United Nations has pursued the key aim of international stability.",
                "uz": "Tashkil etilganidan buyon BMT xalqaro barqarorlik bo'yicha asosiy maqsadni ko'zlab kelmoqda."
              },
              {
                "en": "The government is committed to pursuing diplomatic negotiations rather than confrontation.",
                "uz": "Hukumat to'qnashuvdan ko'ra diplomatik muzokaralar olib borishga sodiqdir."
              },
              {
                "en": "Both nations pledged to pursue peaceful avenues for resolving the border dispute.",
                "uz": "Har ikki davlat chegara mojarosini hal qilish uchun tinch yo'llarni izlashga va'da berdilar."
              }
            ]
          },
          {
            "id": "c1-dip-3",
            "word": "Negotiation",
            "pos": "noun",
            "phonetic": "/nɪˌɡəʊʃiˈeɪʃən/",
            "uzbek": "Muzokara, kelishuv jarayoni",
            "definition": "Discussions between people or countries in an attempt to reach an official agreement.",
            "examples": [
              {
                "en": "The UN stresses the paramount importance of peaceful negotiation when disputes arise.",
                "uz": "BMT kelishmovchiliklar yuzaga kelganda tinch muzokaralarning beqiyos ahamiyatini ta'kidlaydi."
              },
              {
                "en": "After months of delicate bilateral negotiations, a historic treaty was signed.",
                "uz": "Oylarga cho'zilgan nozik ikki tomonlama muzokaralardan so'ng tarixiy shartnoma imzolandi."
              },
              {
                "en": "Direct negotiation proved more fruitful than hostile economic retaliation.",
                "uz": "To'g'ridan-to'g'ri muzokaralar dushmanona iqtisodiy choralardan ko'ra samaraliroq bo'lib chiqdi."
              }
            ]
          },
          {
            "id": "c1-dip-4",
            "word": "Intervention",
            "pos": "noun",
            "phonetic": "/ˌɪntəˈvenʃən/",
            "uzbek": "Interventsiya, vaziyatga harbiy/siyosiy aralashuv",
            "definition": "Involvement in a difficult conflict or situation in order to alter the outcome or improve it.",
            "examples": [
              {
                "en": "The Security Council will only sanction military intervention if it is firmly justified.",
                "uz": "Xavfsizlik Kengashi faqatgina yetarli darajada asoslangan bo'lsagina harbiy aralashuvga ruxsat beradi."
              },
              {
                "en": "Diplomats argued whether humanitarian intervention infringed upon state sovereignty.",
                "uz": "Diplomatlar insonparvarlik aralashuvi davlat suverenitetini buzadimi yoki yo'qligini muhokama qilishdi."
              },
              {
                "en": "Swift multilateral intervention prevented the escalation of armed civil violence.",
                "uz": "Tezkor ko'p tomonlama aralashuv qurolli fuqarolar to'qnashuvining avj olishiga yo'l qo'ymadi."
              }
            ]
          },
          {
            "id": "c1-dip-5",
            "word": "Liberation",
            "pos": "noun",
            "phonetic": "/ˌlɪbərˈeɪʃən/",
            "uzbek": "Ozodlik, qaramlikdan qutulish",
            "definition": "The act of setting someone or a nation free from imprisonment, slavery, or foreign domination.",
            "examples": [
              {
                "en": "The primary aim of the grassroots political movement was the liberation of oppressed minorities.",
                "uz": "Xalq siyosiy harakatining asosiy maqsadi zulm ostidagi ozchiliklarni ozod qilish edi."
              },
              {
                "en": "The capital erupted in celebration upon the peaceful liberation of political prisoners.",
                "uz": "Siyosiy mahbuslar tinch yo'l bilan ozod qilinganidan so'ng poytaxtda bayram tantanalari boshlandi."
              },
              {
                "en": "National liberation movements shaped the political landscape of the twentieth century.",
                "uz": "Milliy ozodlik harakatlari yigirmanchi asrning siyosiy qiyofasini shakllantirdi."
              }
            ]
          },
          {
            "id": "c1-dip-6",
            "word": "Solidarity",
            "pos": "noun",
            "phonetic": "/ˌsɒlɪˈdærəti/",
            "uzbek": "Hambildamlik, yakdillik",
            "definition": "Agreement and mutual support among people who have the same attitudes, aims, or responsibilities.",
            "examples": [
              {
                "en": "Members joined the peaceful march to demonstrate their unshakeable solidarity with striking workers.",
                "uz": "A'zolar ish tashlash qilayotgan ishchilar bilan o'zlarining mustahkam birdamligini namoyish etish uchun tinch yurishga qo'shildilar."
              },
              {
                "en": "European leaders expressed heartfelt solidarity with the disaster-stricken population.",
                "uz": "Yevropa yetakchilari tabiiy ofatdan jabr ko'rgan xalq bilan chin dildan hamjihatlik bildirdilar."
              },
              {
                "en": "International solidarity is crucial in defending universal human rights worldwide.",
                "uz": "Butun dunyo bo'ylab umuminsoniy huquqlarni himoya qilishda xalqaro birdamlik muhim ahamiyatga ega."
              }
            ]
          },
          {
            "id": "c1-dip-7",
            "word": "Delegate",
            "pos": "noun",
            "phonetic": "/ˈdelɪɡət/",
            "uzbek": "Delegat, rasmiy vakil",
            "definition": "A person chosen or elected to represent a group or country at an official conference.",
            "examples": [
              {
                "en": "Delegates from sixty different countries gathered to coordinate climate change policies.",
                "uz": "Oltmish xil davlatdan kelgan delegatlar iqlim o'zgarishi siyosatini muvofiqlashtirish uchun yig'ilishdi."
              },
              {
                "en": "Chris was appointed to travel to the summit as our leading official delegate.",
                "uz": "Kris sammitga bizning yetakchi rasmiy delegatimiz sifatida borishga tayinlandi."
              },
              {
                "en": "The conference plenary gave every registered delegate an opportunity to vote.",
                "uz": "Konferensiya yalpi majlisi har bir ro'yxatdan o'tgan delegatga ovoz berish imkoniyatini berdi."
              }
            ]
          },
          {
            "id": "c1-dip-8",
            "word": "Infrastructure",
            "pos": "noun",
            "phonetic": "/ˈɪnfrəˌstrʌktʃə/",
            "uzbek": "Infratuzilma",
            "definition": "The basic systems and services, such as transport, communications, and power, needed for a country to run.",
            "examples": [
              {
                "en": "Their aim is to minimise the energy requirements of urban infrastructure.",
                "uz": "Ularning maqsadi shahar infratuzilmasining energiya ehtiyojlarini minimallashtirishdir."
              },
              {
                "en": "A developing country's economy can flourish only when reliable infrastructure is constructed.",
                "uz": "Rivojlanayotgan mamlakat iqtisodiyoti faqat ishonchli infratuzilma barpo etilgandagina gullab-yashnashi mumkin."
              },
              {
                "en": "Post-war reconstruction requires massive capital investments in roads, ports, and electric grids.",
                "uz": "Urushdan keyingi qayta tiklash yo'llar, portlar va elektr tarmoqlariga ulkan kapital qo'yilmalarni talab qiladi."
              }
            ]
          },
          {
            "id": "c1-dip-9",
            "word": "Undertake",
            "pos": "verb",
            "phonetic": "/ˌʌndəˈteɪk/",
            "uzbek": "Zimmaga olmoq, majburiyat olmoq",
            "definition": "To formal promise or agree to do something, especially difficult or extensive work.",
            "examples": [
              {
                "en": "Governments have undertaken to support any framework of measures agreed on by the summit.",
                "uz": "Hukumatlar sammit tomonidan kelishilgan har qanday chora-tadbirlar dasturini qo'llab-quvvatlash majburiyatini oldilar."
              },
              {
                "en": "The ruling coalition undertook not to reduce humanitarian expenditure during the crisis.",
                "uz": "Hukmron koalitsiya inqiroz davrida gumanitar yordam xarajatlarini qisqartirmaslik majburiyatini oldi."
              },
              {
                "en": "Signatory states undertook ambitious commitments to achieve carbon neutrality.",
                "uz": "Imzolovchi davlatlar uglerod neytralligiga erishish bo'yicha ulkan majburiyatlarni zimmalariga oldilar."
              }
            ]
          },
          {
            "id": "c1-dip-10",
            "word": "Delicate",
            "pos": "adjective",
            "phonetic": "/ˈdelɪkət/",
            "uzbek": "Nozik, ehtiyotkorlik talab qiladigan",
            "definition": "Needing careful treatment or great tact and skill to avoid giving offence or causing failure.",
            "examples": [
              {
                "en": "Although the border issues under discussion are undeniably delicate, diplomats achieved unity.",
                "uz": "Muhokama qilinayotgan chegara masalalari nihoyatda nozik bo'lsa-da, diplomatlar yakdillikka erishdilar."
              },
              {
                "en": "Handling cross-border trade negotiations requires subtle diplomacy and delicate balance.",
                "uz": "Transchegaraviy savdo muzokaralarini olib borish nozik diplomatiya va nozik muvozanatni talab qiladi."
              },
              {
                "en": "The envoy handled the delicate hostage negotiations with remarkable calm.",
                "uz": "Maxsus vakil garovga olinganlar bo'yicha nozik muzokaralarni ajoyib bosiqlik bilan olib bordi."
              }
            ]
          },
          {
            "id": "c1-dip-11",
            "word": "Customary",
            "pos": "adjective",
            "phonetic": "/ˈkʌstəməri/",
            "uzbek": "Odatdagi, an'anaviy",
            "definition": "Usual or established by tradition in a particular society or diplomatic context.",
            "examples": [
              {
                "en": "The summit showed far more international unity than is customary at such gatherings.",
                "uz": "Sammit bunday yig'inlar uchun odatdagidan ancha ko'proq xalqaro birdamlikni namoyish etdi."
              },
              {
                "en": "It is customary for visiting heads of state to lay a wreath at the national memorial.",
                "uz": "Tashrif buyurgan davlat rahbarlarining milliy yodgorlik poyiga gulchambar qo'yishi an'anaga aylangan."
              },
              {
                "en": "Diplomatic protocol mandates customary exchanges of credentials before formal talks.",
                "uz": "Diplomatik protokol rasmiy muzokaralardan oldin ishonch yorliqlarini an'anaviy almashishni talab qiladi."
              }
            ]
          },
          {
            "id": "c1-dip-12",
            "word": "Treaty",
            "pos": "noun",
            "phonetic": "/ˈtriːti/",
            "uzbek": "Xalqaro shartnoma, bitim",
            "definition": "A formal, legally binding written agreement between two or more sovereign countries.",
            "examples": [
              {
                "en": "The non-proliferation treaty was ratified by a vast majority of United Nations members.",
                "uz": "Yadro qurolini tarqatmaslik to'g'risidagi shartnoma BMT a'zolarining katta qismi tomonidan ratifikatsiya qilindi."
              },
              {
                "en": "Both leaders signed a historic bilateral peace treaty ending four decades of hostility.",
                "uz": "Har ikki yetakchi to'rt o'n yillik dushmanlikka barham beruvchi tarixiy tinchlik shartnomasini imzoladilar."
              },
              {
                "en": "Breaching the environmental treaty will trigger immediate international trade sanctions.",
                "uz": "Ekologik shartnomani buzish darhol xalqaro savdo sanksiyalarini keltirib chiqaradi."
              }
            ]
          },
          {
            "id": "c1-dip-13",
            "word": "Bilateral",
            "pos": "adjective",
            "phonetic": "/ˌbaɪˈlætərəl/",
            "uzbek": "Ikki tomonlama",
            "definition": "Involving two groups or countries working directly together.",
            "examples": [
              {
                "en": "The ministers agreed to intensify bilateral economic and technological cooperation.",
                "uz": "Vazirlar ikki tomonlama iqtisodiy va texnologik hamkorlikni jadallashtirishga kelishib oldilar."
              },
              {
                "en": "A bilateral aviation accord permitted direct commercial flights between the capitals.",
                "uz": "Ikki tomonlama aviatsiya bitimi poytaxtlar o'rtasida to'g'ridan-to'g'ri tijorat reyslarini amalga oshirishga ruxsat berdi."
              },
              {
                "en": "Diplomats worked to transform multilateral pledges into binding bilateral agreements.",
                "uz": "Diplomatlar ko'p tomonlama va'dalarni majburiy ikki tomonlama shartnomalarga aylantirish ustida ishladilar."
              }
            ]
          },
          {
            "id": "c1-dip-14",
            "word": "Diplomatic immunity",
            "pos": "noun",
            "phonetic": "/ˌdɪpləmætɪk ɪˈmjuːnəti/",
            "uzbek": "Diplomatik daxlsizlik",
            "definition": "Special rights that protect diplomats from being arrested or prosecuted in their host country.",
            "examples": [
              {
                "en": "Under the Vienna Convention, foreign envoys are shielded by diplomatic immunity.",
                "uz": "Vena konvensiyasiga ko'ra, xorijiy elchilar diplomatik daxlsizlik bilan himoyalanadi."
              },
              {
                "en": "The ambassador was recalled after his relative unsuccessfully invoked diplomatic immunity.",
                "uz": "Elchi o'z qarindoshi diplomatik daxlsizlikni samarasiz ro'kach qilganidan so'ng chaqirib olindi."
              },
              {
                "en": "The receiving state requested the waiver of diplomatic immunity to allow criminal trial.",
                "uz": "Qabul qiluvchi davlat jinoiy sud jarayoniga ruxsat berish uchun diplomatik daxlsizlikdan voz kechishni so'radi."
              }
            ]
          },
          {
            "id": "c1-dip-15",
            "word": "Sovereignty",
            "pos": "noun",
            "phonetic": "/ˈsɒvrənti/",
            "uzbek": "Suverenitet, mustaqillik",
            "definition": "The supreme power or authority of a state to govern its own territory and people without external control.",
            "examples": [
              {
                "en": "Respect for national territorial sovereignty remains fundamental to international law.",
                "uz": "Milliy hududiy suverenitetni hurmat qilish xalqaro huquqning asosiy tamoyili bo'lib qolmoqda."
              },
              {
                "en": "The disputed island claimed sovereignty over surrounding coastal fishing waters.",
                "uz": "Bahsli orol atrofidagi qirg'oq baliqchilik suvlari ustidan suverenitet talab qildi."
              },
              {
                "en": "Entering a monetary union requires member nations to voluntarily share aspects of fiscal sovereignty.",
                "uz": "Valyuta ittifoqiga kirish a'zo davlatlardan fiskal suverenitetning ayrim jihatlarini ixtiyoriy baham ko'rishni talab qiladi."
              }
            ]
          },
          {
            "id": "c1-dip-16",
            "word": "Accord",
            "pos": "noun",
            "phonetic": "/əˈkɔːd/",
            "uzbek": "Kelishuv, bitim",
            "definition": "A formal agreement between countries or opposing political groups.",
            "examples": [
              {
                "en": "The historic Paris climate accord seeks to limit rising global temperatures.",
                "uz": "Tarixiy Parij iqlim bitimi global harorat ko'tarilishini cheklashga qaratilgan."
              },
              {
                "en": "Negotiators worked through the night to reach a lasting peace accord.",
                "uz": "Muzokarachilar mustahkam tinchlik bitimiga erishish uchun tuni bilan ishladilar."
              },
              {
                "en": "Both factions signed the reconciliation accord amidst widespread popular acclaim.",
                "uz": "Har ikki guruh umumiy xalq olqishlari ostida yarashuv bitimini imzoladilar."
              }
            ]
          },
          {
            "id": "c1-dip-17",
            "word": "Encounter",
            "pos": "noun",
            "phonetic": "/ɪnˈkaʊntə/",
            "uzbek": "Uchrashuv, diplomatik to'qnashuv",
            "definition": "A meeting, especially one that is unplanned, unexpected, or contentious.",
            "examples": [
              {
                "en": "The bilateral encounter between foreign ministers paved the way for broader cooperation.",
                "uz": "Tashqi ishlar vazirlari o'rtasidagi ikki tomonlama uchrashuv kengroq hamkorlikka yo'l ochdi."
              },
              {
                "en": "Tense diplomatic encounters took place behind closed doors at the international forum.",
                "uz": "Xalqaro forumda yopiq eshiklar ortida tarang diplomatik to'qnashuvlar bo'lib o'tdi."
              },
              {
                "en": "Their first high-level encounter in decades helped ease border friction.",
                "uz": "Ularning so'nggi o'n yilliklardagi ilk yuqori darajadagi uchrashuvi chegara tarangligini yumshatishga yordam berdi."
              }
            ]
          },
          {
            "id": "c1-dip-18",
            "word": "Sanction",
            "pos": "noun",
            "phonetic": "/ˈsæŋkʃən/",
            "uzbek": "Sanksiya, jazo chorasi",
            "definition": "An official punitive order taken against a country to force it to obey international law.",
            "examples": [
              {
                "en": "The United Nations placed strict sanctions on the state and did not lift them until 2008.",
                "uz": "Birlashgan Millatlar Tashkiloti davlatga qat'iy sanksiyalar qo'ydi va ularni 2008 yilgacha bekor qilmadi."
              },
              {
                "en": "Targeted economic sanctions crippled the rogue regime's access to foreign currency.",
                "uz": "Maqsadli iqtisodiy sanksiyalar buzg'unchi tuzumning xorijiy valyutaga kirish imkoniyatini cheklab qo'ydi."
              },
              {
                "en": "Lifting diplomatic sanctions was conditional upon transparent democratic elections.",
                "uz": "Diplomatik sanksiyalarni bekor qilish shaffof demokratik saylovlar o'tkazilishiga bog'liq edi."
              }
            ]
          },
          {
            "id": "c1-dip-19",
            "word": "Embargo",
            "pos": "noun",
            "phonetic": "/ɪmˈbɑːɡəʊ/",
            "uzbek": "Embargo, savdoni to'liq taqiqlash",
            "definition": "An official government ban on trade or other commercial activity with a particular country.",
            "examples": [
              {
                "en": "An international arms embargo prevented weapons shipments into the conflict zone.",
                "uz": "Xalqaro qurol embargosi mojarolar zonasiga qurol-yarog' yetkazib berilishining oldini oldi."
              },
              {
                "en": "The trade embargo caused severe shortages of essential industrial equipment.",
                "uz": "Savdo embargosi muhim sanoat uskunalarining keskin yetishmasligiga olib keldi."
              },
              {
                "en": "Leaders debated whether to lift the unilateral trade embargo against the island nation.",
                "uz": "Yetakchilar orol davlatiga qarshi bir tomonlama savdo embargosini bekor qilish masalasini muhokama qilishdi."
              }
            ]
          },
          {
            "id": "c1-dip-20",
            "word": "Hegemony",
            "pos": "noun",
            "phonetic": "/hɪˈɡeməni/",
            "uzbek": "Gegemoniya, mutlaq yetakchilik/hukmronlik",
            "definition": "Leadership or dominance, especially by one state or social group over others in the international system.",
            "examples": [
              {
                "en": "The superpower sought to maintain regional hegemony through strategic military bases.",
                "uz": "Superdavlat strategik harbiy bazalar orqali mintaqaviy gegemonlikni saqlab qolishga harakat qildi."
              },
              {
                "en": "Emerging multipolar powers challenge the long-standing geopolitical hegemony of the West.",
                "uz": "Yangi vujudga kelayotgan ko'p qutbli kuchlar G'arbning uzoq yillik geosiyosiy gegemonligiga qarshi chiqmoqda."
              },
              {
                "en": "Economic dominance frequently translates into cultural and institutional hegemony.",
                "uz": "Iqtisodiy ustunlik ko'pincha madaniy va institutsional gegemonlikka aylanadi."
              }
            ]
          },
          {
            "id": "c1-dip-21",
            "word": "Ratify",
            "pos": "verb",
            "phonetic": "/ˈrætɪfaɪ/",
            "uzbek": "Ratifikatsiya qilmoq, rasman tasdiqlamoq",
            "definition": "To sign or give formal consent to a treaty or contract, making it officially valid.",
            "examples": [
              {
                "en": "Parliament voted overwhelmingly to ratify the environmental charter.",
                "uz": "Parlament ekologik xartiyani ratifikatsiya qilish uchun bir ovozdan ovoz berdi."
              },
              {
                "en": "The cross-border economic agreement must be ratified by all member state legislatures.",
                "uz": "Transchegaraviy iqtisodiy bitim barcha a'zo davlatlar qonun chiqaruvchi organlari tomonidan ratifikatsiya qilinishi shart."
              },
              {
                "en": "Delays in ratifying the trade accord caused anxiety across financial markets.",
                "uz": "Savdo bitimini ratifikatsiya qilishning kechikishi moliya bozorlarida xavotir uyg'otdi."
              }
            ]
          },
          {
            "id": "c1-dip-22",
            "word": "Annexation",
            "pos": "noun",
            "phonetic": "/ˌænekˈseɪʃən/",
            "uzbek": "Anneksiya, boshqa davlat hududini zo'ravonlik bilan qo'shib olish",
            "definition": "The formal act of acquiring something, especially territory, by conquest or occupation.",
            "examples": [
              {
                "en": "The illegal annexation of sovereign territory met with immediate global condemnation.",
                "uz": "Suveren hududning noqonuniy anneksiya qilinishi darhol global qoralashga uchradi."
              },
              {
                "en": "International courts ruled the forced annexation null and void under international treaties.",
                "uz": "Xalqaro sudlar majburiy anneksiyani xalqaro shartnomalarga asosan haqiqiy emas deb topdi."
              },
              {
                "en": "Sanctions were tightened following the unprovoked annexation of the border province.",
                "uz": "Chegara viloyatining asossiz anneksiya qilinishidan so'ng sanksiyalar kuchaytirildi."
              }
            ]
          },
          {
            "id": "c1-dip-23",
            "word": "Asylum",
            "pos": "noun",
            "phonetic": "/əˈsaɪləm/",
            "uzbek": "Siyosiy boshpana",
            "definition": "Protection granted by a nation to someone who has left their native country as a political refugee.",
            "examples": [
              {
                "en": "The political activist sought diplomatic asylum in the foreign embassy.",
                "uz": "Siyosiy faol xorijiy elchixonadan diplomatik boshpana so'radi."
              },
              {
                "en": "Thousands of displaced citizens applied for humanitarian asylum during the war.",
                "uz": "Urush paytida minglab ko'chirilgan fuqarolar gumanitar boshpana so'rab murojaat qildilar."
              },
              {
                "en": "The government granted political asylum based on proven threats of state persecution.",
                "uz": "Hukumat davlat ta'qibi xavfi isbotlanganiga asoslanib siyosiy boshpana berdi."
              }
            ]
          },
          {
            "id": "c1-dip-24",
            "word": "Autonomy",
            "pos": "noun",
            "phonetic": "/ɔːˈtɒnəmi/",
            "uzbek": "Muxtoriyat, o'zini o'zi boshqarish",
            "definition": "The right or condition of self-government, especially in a particular region or institution.",
            "examples": [
              {
                "en": "The indigenous province negotiated for greater financial and linguistic autonomy.",
                "uz": "Tub aholi yashaydigan viloyat kengroq moliyaviy va lingvistik muxtoriyat uchun muzokaralar olib bordi."
              },
              {
                "en": "Decentralization granted regional governors substantial legislative autonomy.",
                "uz": "Markazsizlashtirish mintaqaviy gubernatorlarga sezilarli qonun chiqaruvchi muxtoriyat berdi."
              },
              {
                "en": "The peace deal guaranteed cultural autonomy while maintaining national integrity.",
                "uz": "Tinchlik bitimi milliy yaxlitlikni saqlab qolgan holda madaniy muxtoriyatni kafolatladi."
              }
            ]
          },
          {
            "id": "c1-dip-25",
            "word": "Coalition",
            "pos": "noun",
            "phonetic": "/ˌkəʊəˈlɪʃən/",
            "uzbek": "Koalitsiya, siyosiy ittifoq",
            "definition": "A temporary alliance for combined action, especially of political parties forming a government.",
            "examples": [
              {
                "en": "Two minority parties formed a broad coalition government to avoid new elections.",
                "uz": "Ikki kichik partiya yangi saylovlarning oldini olish uchun keng koalitsion hukumat tuzdi."
              },
              {
                "en": "An international military coalition was organized to enforce the security resolution.",
                "uz": "Xavfsizlik rezolyutsiyasini bajarish uchun xalqaro harbiy koalitsiya tashkil etildi."
              },
              {
                "en": "Internal disputes threatened the stability of the governing coalition.",
                "uz": "Ichki kelishmovchiliklar boshqaruvchi koalitsiyaning barqarorligiga xavf soldi."
              }
            ]
          },
          {
            "id": "c1-dip-26",
            "word": "Disarmament",
            "pos": "noun",
            "phonetic": "/dɪsˈɑːməmənt/",
            "uzbek": "Qurolsizlanish",
            "definition": "The reduction or withdrawal of military forces and weapons by a nation.",
            "examples": [
              {
                "en": "Universal nuclear disarmament remains an elusive yet vital aspiration for humanity.",
                "uz": "Umumiy yadroviy qurolsizlanish insoniyat uchun murakkab, ammo hayotiy muhim intilish bo'lib qolmoqda."
              },
              {
                "en": "The peace treaty mandated complete disarmament of paramilitary militias.",
                "uz": "Tinchlik shartnomasi harbiylashtirilgan guruhlarni to'liq qurolsizlantirishni talab qildi."
              },
              {
                "en": "Verifiable disarmament steps were inspected by independent UN observers.",
                "uz": "Tekshirilishi mumkin bo'lgan qurolsizlanish bosqichlari mustaqil BMT kuzatuvchilari tomonidan ko'zdan kechirildi."
              }
            ]
          },
          {
            "id": "c1-dip-27",
            "word": "Enclave",
            "pos": "noun",
            "phonetic": "/ˈenkleɪv/",
            "uzbek": "Anklav (boshqa davlat hududi bilan o'ralgan yer)",
            "definition": "A portion of territory surrounded by larger territory whose inhabitants are culturally or politically distinct.",
            "examples": [
              {
                "en": "The remote mountain enclave remained isolated throughout the border confrontation.",
                "uz": "Tog'li chekka anklav chegara to'qnashuvi davomida ajralib qoldi."
              },
              {
                "en": "Diplomats arranged a humanitarian transit corridor to supply the landlocked enclave.",
                "uz": "Diplomatlar quruqlik bilan o'ralgan anklavga ta'minot yetkazish uchun gumanitar tranzit koridorini tashkil etdilar."
              },
              {
                "en": "Historical border treaties created several territorial enclaves within the valley.",
                "uz": "Tarixiy chegara shartnomalari vodiy ichida bir nechta hududiy anklavlarni vujudga keltirdi."
              }
            ]
          },
          {
            "id": "c1-dip-28",
            "word": "Extraterritorial",
            "pos": "adjective",
            "phonetic": "/ˌekstrətɛrɪˈtɔːriəl/",
            "uzbek": "Ekstraterritorial, davlat hududidan tashqariga taalluqli",
            "definition": "Situated or valid outside the territorial limits of a jurisdiction or country.",
            "examples": [
              {
                "en": "Diplomatic missions enjoy extraterritorial status under binding international law.",
                "uz": "Diplomatik vakolatxonalar majburiy xalqaro huquqqa asosan ekstraterritorial maqomga ega."
              },
              {
                "en": "The law exercised extraterritorial jurisdiction over cross-border bribery crimes.",
                "uz": "Qonun transchegaraviy poraxo'rlik jinoyatlariga nisbatan ekstraterritorial yurisdiksiyani qo'lladi."
              },
              {
                "en": "Envoys discussed the extraterritorial implications of modern cybersecurity regulations.",
                "uz": "Vakillar zamonaviy kiberxavfsizlik qoidalarining ekstraterritorial ta'sirini muhokama qildilar."
              }
            ]
          },
          {
            "id": "c1-dip-29",
            "word": "Referendum",
            "pos": "noun",
            "phonetic": "/ˌrefəˈrendəm/",
            "uzbek": "Referendum, umumxalq ovoz berishi",
            "definition": "A general vote by the electorate on a single political question referred to them for direct decision.",
            "examples": [
              {
                "en": "The national referendum on constitutional reform saw exceptionally high voter turnout.",
                "uz": "Konstitutsiyaviy islohotlar bo'yicha umumxalq referendumi saylovchilarning favqulodda yuqori ishtirokini ko'rsatdi."
              },
              {
                "en": "Citizens voted decisively in a referendum to join the international economic union.",
                "uz": "Fuqarolar xalqaro iqtisodiy ittifoqqa qo'shilish uchun referendumda qat'iy ovoz berdilar."
              },
              {
                "en": "The government pledged to implement the binding outcome of the sovereign referendum.",
                "uz": "Hukumat suveren referendumning majburiy natijalarini amalga oshirishga va'da berdi."
              }
            ]
          },
          {
            "id": "c1-dip-30",
            "word": "Stalemate",
            "pos": "noun",
            "phonetic": "/ˈsteɪlmeɪt/",
            "uzbek": "Boshi berk ko'cha, pat holati (muzokaralarda)",
            "definition": "A situation in which no progress can be made or no advancement is possible by either side.",
            "examples": [
              {
                "en": "Peace talks reached a diplomatic stalemate over territorial demarcation disputes.",
                "uz": "Tinchlik muzokaralari hududlarni demarkatsiya qilish bo'yicha bahslar sababli diplomatik boshi berk ko'chaga kirib qoldi."
              },
              {
                "en": "A neutral mediator was invited to break the protracted legislative stalemate.",
                "uz": "Uzoq davom etgan qonun chiqaruvchi pat holatini yechish uchun neytral vositachi taklif qilindi."
              },
              {
                "en": "Neither side would compromise, producing a costly economic and political stalemate.",
                "uz": "Hech bir tomon yon bermadi, bu esa qimmatga tushuvchi iqtisodiy va siyosiy turg'unlikni keltirib chiqardi."
              }
            ]
          }
        ]
      },
      {
        "id": "c1-economics",
        "title": "Unit 04: Macroeconomics & Financial Markets (Makroiqtisodiyot va moliya bozorlari)",
        "unitNumber": 4,
        "category": "Economy & Finance",
        "icon": "fa-chart-line",
        "color": "from-amber-600 to-yellow-800",
        "cambridge_source": "Cambridge English Vocabulary in Use Advanced, Unit 45: Economy and finance",
        "words": [
          {
            "id": "c1-econ-1",
            "word": "Sustainable development",
            "pos": "noun",
            "phonetic": "/səˌsteɪnəbl dɪˈveləpmənt/",
            "uzbek": "Barqaror rivojlanish",
            "definition": "Economic development that continues over a long time without depleting natural resources.",
            "examples": [
              {
                "en": "Development is important, but it should be sustainable development, not the kind that damages the future.",
                "uz": "Rivojlanish muhim, ammo u kelajakka zarar yetkazadigan emas, balki barqaror rivojlanish bo'lishi kerak."
              },
              {
                "en": "International bodies turned their attention to supporting real and sustainable development in emerging nations.",
                "uz": "Xalqaro tashkilotlar o'z e'tiborini rivojlanayotgan davlatlarda haqiqiy va barqaror rivojlanishni qo'llab-quvvatlashga qaratdi."
              },
              {
                "en": "Investing in clean energy is fundamental to achieving long-term sustainable development.",
                "uz": "Toza energiyaga sarmoya kiritish uzoq muddatli barqaror rivojlanishga erishishning asosi hisoblanadi."
              }
            ]
          },
          {
            "id": "c1-econ-2",
            "word": "Allocate",
            "pos": "verb",
            "phonetic": "/ˈæləkeɪt/",
            "uzbek": "Ajratmoq (mablag' yoki resurs)",
            "definition": "To officially decide to give money, time, or equipment for a particular purpose.",
            "examples": [
              {
                "en": "The European Union is committed to allocating funds and development grants to poorer regions.",
                "uz": "Yevropa Ittifoqi qashshoq hududlarga mablag'lar va rivojlanish grantlarini ajratish majburiyatini oldi."
              },
              {
                "en": "Governments often allocate emergency funds for specific disaster recovery projects.",
                "uz": "Hukumatlar ko'pincha ofatdan keyingi tiklanish loyihalari uchun favqulodda mablag'lar ajratadilar."
              },
              {
                "en": "The finance ministry allocated thirty percent of the budget to modernizing transport.",
                "uz": "Moliya vazirligi byudjetning o'ttiz foizini transportni modernizatsiya qilishga ajratdi."
              }
            ]
          },
          {
            "id": "c1-econ-3",
            "word": "Eradicate",
            "pos": "verb",
            "phonetic": "/ɪˈrædɪkeɪt/",
            "uzbek": "Butunlay yo'q qilmoq, tag-tomiri bilan quritmoq",
            "definition": "To completely eliminate, destroy, or get rid of something bad.",
            "examples": [
              {
                "en": "The prime minister declared an ambitious policy to eradicate abject poverty within a decade.",
                "uz": "Bosh vazir o'n yil ichida o'ta qashshoqlikni butunlay yo'q qilish bo'yicha ulkan siyosatni e'lon qildi."
              },
              {
                "en": "Multilateral health initiatives succeeded in eradicating dangerous communicable diseases.",
                "uz": "Ko'p tomonlama sog'liqni saqlash tashabbuslari xavfli yuqumli kasalliklarni batamom yo'q qilishga muvaffaq bo'ldi."
              },
              {
                "en": "Public investments in education are essential to eradicate generational illiteracy.",
                "uz": "Ta'limga davlat sarmoyalari avloddan-avlodga o'tuvchi savodsizlikni yo'q qilish uchun zarurdir."
              }
            ]
          },
          {
            "id": "c1-econ-4",
            "word": "Debt burden",
            "pos": "noun",
            "phonetic": "/det ˈbɜːdən/",
            "uzbek": "Qarz yuki",
            "definition": "The total amount of debt that a country or organisation owes, considered as a severe economic problem.",
            "examples": [
              {
                "en": "Countries often find it impossible to repay loans because their debt burden is simply too great.",
                "uz": "Mamlakatlar ko'pincha qarzlarini to'lash imkonsiz deb hisoblaydilar, chunki ularning qarz yuki juda og'ir."
              },
              {
                "en": "International lenders agreed to reschedule repayments to ease the mounting debt burden.",
                "uz": "Xalqaro qarz beruvchilar o'sib borayotgan qarz yukini yengillashtirish uchun to'lovlarni qayta rejalashtirishga rozi bo'lishdi."
              },
              {
                "en": "A crushing debt burden prevents developing governments from funding vital public schools.",
                "uz": "Og'ir qarz yuki rivojlanayotgan hukumatlarga muhim davlat maktablarini moliyalashtirishga to'sqinlik qiladi."
              }
            ]
          },
          {
            "id": "c1-econ-5",
            "word": "Alleviate",
            "pos": "verb",
            "phonetic": "/əˈliːvieɪt/",
            "uzbek": "Yengillashtirmoq, yumshatmoq",
            "definition": "To make pain, financial difficulty, or suffering less severe.",
            "examples": [
              {
                "en": "Alleviating debt for low-income nations should be a top priority for global financial institutions.",
                "uz": "Kam ta'minlangan davlatlar qarzini yengillashtirish global moliya institutlari uchun birinchi darajali vazifa bo'lishi kerak."
              },
              {
                "en": "Subsidies were introduced to alleviate hardship among struggling agricultural workers.",
                "uz": "Qiyinchilikka duch kelgan qishloq xo'jaligi ishchilarining ahvolini yengillashtirish uchun subsidiyalar joriy etildi."
              },
              {
                "en": "International aid shipments helped alleviate the immediate humanitarian suffering.",
                "uz": "Xalqaro gumanitar yuklar zudlik bilan insonparvarlik azob-uqubatlarini yengillashtirishga yordam berdi."
              }
            ]
          },
          {
            "id": "c1-econ-6",
            "word": "Incur debt",
            "pos": "phrase",
            "phonetic": "/ɪnˈkɜː det/",
            "uzbek": "Qarzga botmoq, yangi qarz orttirmoq",
            "definition": "To bring upon oneself or become subject to large financial liabilities.",
            "examples": [
              {
                "en": "Without strict budget discipline, governments risk incurring massive debt during crises.",
                "uz": "Qat'iy byudjet intizomisiz hukumatlar inqiroz davrida katta qarzga botish xavfi ostida qoladi."
              },
              {
                "en": "He incurred substantial debt to launch his independent renewable energy enterprise.",
                "uz": "U mustaqil qayta tiklanadigan energiya korxonasini yo'lga qo'yish uchun katta qarz oldi."
              },
              {
                "en": "Debtor nations must prevent policies that lead them to incur unsustainable debt.",
                "uz": "Qarzdor mamlakatlar o'zlarini to'lab bo'lmas qarzga botiradigan siyosatdan qochishlari kerak."
              }
            ]
          },
          {
            "id": "c1-econ-7",
            "word": "Restrictive practice",
            "pos": "noun",
            "phonetic": "/rɪˈstrɪktɪv ˈpræktɪs/",
            "uzbek": "Savdoni cheklovchi amaliyot",
            "definition": "An unfair arrangement or rule by a business or government that limits free trade and competition.",
            "examples": [
              {
                "en": "Free trade agreements often cause disputes when one party engages in restrictive practices.",
                "uz": "Erkin savdo shartnomalari ko'pincha bir tomon cheklovchi amaliyotlar bilan shug'ullanganda nizolarga sabab bo'ladi."
              },
              {
                "en": "Antitrust watchdogs penalised the technology monopoly for unlawful restrictive practices.",
                "uz": "Monopoliyaga qarshi organlar noqonuniy cheklovchi choralari uchun texnologik monopoliyani jarimaga tortdi."
              },
              {
                "en": "Abolishing restrictive practices opened domestic retail markets to foreign competitors.",
                "uz": "Cheklovchi amaliyotlarni bekor qilish ichki chakana savdo bozorlarini xorijiy raqobatchilarga ochdi."
              }
            ]
          },
          {
            "id": "c1-econ-8",
            "word": "Trade war",
            "pos": "noun",
            "phonetic": "/treɪd wɔː/",
            "uzbek": "Savdo urushi",
            "definition": "An economic conflict resulting from extreme protectionism where states raise tariffs on each other.",
            "examples": [
              {
                "en": "Occasionally, trade wars erupt, and retaliatory tariffs are imposed on key industrial goods.",
                "uz": "Vaqti-vaqti bilan savdo urushlari boshlanadi va asosiy sanoat tovarlariga qasos tariflari qo'yiladi."
              },
              {
                "en": "Economists warned that an escalating trade war would dampen international growth.",
                "uz": "Iqtisodchilar avj olayotgan savdo urushi xalqaro o'sishni sekinlashtirishi haqida ogohlantirdilar."
              },
              {
                "en": "Both economies suffered significant export losses before resolving the trade war.",
                "uz": "Har ikki iqtisodiyot savdo urushini hal qilishdan oldin eksportdan katta yo'qotishlarga uchradi."
              }
            ]
          },
          {
            "id": "c1-econ-9",
            "word": "Monetary union",
            "pos": "noun",
            "phonetic": "/ˈmʌnɪtəri ˈjuːnjən/",
            "uzbek": "Valyuta ittifoqi",
            "definition": "An intergovernmental agreement involving two or more states sharing a single currency.",
            "examples": [
              {
                "en": "Countries closely related economically have the possibility of entering into monetary union.",
                "uz": "Iqtisodiy jihatdan chambarchas bog'langan davlatlar valyuta ittifoqiga kirish imkoniyatiga ega."
              },
              {
                "en": "Sharing a single currency in a monetary union mandates strict fiscal deficit rules.",
                "uz": "Valyuta ittifoqida yagona valyutadan foydalanish qat'iy byudjet taqchilligi qoidalarini talab qiladi."
              },
              {
                "en": "The creation of the euro zone remains the largest monetary union in modern history.",
                "uz": "Yevrozona yaratilishi zamonaviy tarixdagi eng yirik valyuta ittifoqi bo'lib qolmoqda."
              }
            ]
          },
          {
            "id": "c1-econ-10",
            "word": "Ailing economy",
            "pos": "noun",
            "phonetic": "/ˈeɪlɪŋ ɪˈkɒnəmi/",
            "uzbek": "Inqirozdagi / kasalvand iqtisodiyot",
            "definition": "An economy that is weak, failing, and in an extremely poor state.",
            "examples": [
              {
                "en": "The government introduced an emergency package of stimulus measures to rescue the ailing economy.",
                "uz": "Hukumat inqirozdagi iqtisodiyotni qutqarish uchun shoshilinch rag'batlantirish choralari paketini kiritdi."
              },
              {
                "en": "High unemployment and plummeting productivity plagued the nation's ailing economy.",
                "uz": "Yuqori ishsizlik va mahsuldorlikning keskin pasayishi mamlakatning zaiflashgan iqtisodiyotini qiyin ahvolga soldi."
              },
              {
                "en": "Foreign direct investment is desperately needed to inject capital into the ailing economy.",
                "uz": "Zaif iqtisodiyotga kapital kiritish uchun to'g'ridan-to'g'ri xorijiy investitsiyalar o'ta zarur."
              }
            ]
          },
          {
            "id": "c1-econ-11",
            "word": "Devaluation",
            "pos": "noun",
            "phonetic": "/ˌdiːvæljuˈeɪʃən/",
            "uzbek": "Devalvatsiya (valyuta qadrining rasman pasayishi)",
            "definition": "An official reduction in the exchange value of a country's currency against other currencies.",
            "examples": [
              {
                "en": "Devaluation of the local currency made imports substantially more expensive for ordinary consumers.",
                "uz": "Mahalliy valyutaning devalvatsiyasi oddiy iste'molchilar uchun import tovarlarni ancha qimmatlashtirdi."
              },
              {
                "en": "The central bank resisted devaluation until foreign exchange reserves were exhausted.",
                "uz": "Markaziy bank valyuta zaxiralari tugaguncha devalvatsiyaga qarshilik ko'rsatdi."
              },
              {
                "en": "While devaluation stimulates export volume, it frequently ignites domestic inflation.",
                "uz": "Devalvatsiya eksport hajmini rag'batlantirsa-da, u ko'pincha ichki inflyatsiyani kuchaytiradi."
              }
            ]
          },
          {
            "id": "c1-econ-12",
            "word": "Double-dip recession",
            "pos": "noun",
            "phonetic": "/ˌdʌbl dɪp rɪˈseʃən/",
            "uzbek": "Ikki bosqichli retsessiya (qaytalangan iqtisodiy pasayish)",
            "definition": "A recession that seems to end with a brief recovery, but is quickly followed by another period of economic decline.",
            "examples": [
              {
                "en": "Indeed, several vulnerable economies suffered a prolonged double-dip recession.",
                "uz": "Darhaqiqat, bir nechta zaif iqtisodiyotlar uzoq davom etgan ikki bosqichli retsessiyaga uchradi."
              },
              {
                "en": "Policy errors by monetary authorities triggered fears of a catastrophic double-dip recession.",
                "uz": "Pul-kredit organlarining siyosiy xatolari xavfli ikki bosqichli retsessiya xavfini uyg'otdi."
              },
              {
                "en": "Consumer confidence plummeted when indicators signalled a looming double-dip recession.",
                "uz": "Ko'rsatkichlar yaqinlashib kelayotgan qaytalangan retsessiyadan darak berganida iste'molchilar ishonchi tushib ketdi."
              }
            ]
          },
          {
            "id": "c1-econ-13",
            "word": "Slump",
            "pos": "noun",
            "phonetic": "/slʌmp/",
            "uzbek": "Keskin pasayish, qulash (narxlar yoki savdo)",
            "definition": "A sudden, severe, and prolonged fall in prices, economic activity, or trade.",
            "examples": [
              {
                "en": "A catastrophic slump in oil prices forced the oil-dependent nation to slash public budgets.",
                "uz": "Neft narxining keskin tushib ketishi neftga qaram mamlakatni davlat byudjetini qisqartirishga majbur qildi."
              },
              {
                "en": "The manufacturing sector suffered an unprecedented slump during the credit crunch.",
                "uz": "Kredit inqirozi davrida ishlab chiqarish sektori misli ko'rilmagan pasayishni boshdan kechirdi."
              },
              {
                "en": "Housing market transactions plunged into a severe slump across the country.",
                "uz": "Butun mamlakat bo'ylab uy-joy bozori bitimlari keskin inqirozga yuz tutdi."
              }
            ]
          },
          {
            "id": "c1-econ-14",
            "word": "Boost the economy",
            "pos": "phrase",
            "phonetic": "/buːst ði ɪˈkɒnəmi/",
            "uzbek": "Iqtisodiyotni rag'batlantirmoq / jonlantirmoq",
            "definition": "To take fiscal or monetary actions that stimulate economic growth and enterprise.",
            "examples": [
              {
                "en": "Lower taxes were introduced to boost the economy during the deepest depths of the recession.",
                "uz": "Retsessiyaning eng og'ir davrida iqtisodiyotni jonlantirish uchun pastroq soliqlar joriy etildi."
              },
              {
                "en": "Major infrastructure spending was approved to create employment and boost the economy.",
                "uz": "Ish o'rinlari yaratish va iqtisodiyotni ko'tarish uchun yirik infratuzilma xarajatlari tasdiqlandi."
              },
              {
                "en": "Slashing benchmark interest rates is a classical monetary mechanism to boost the economy.",
                "uz": "Asosiy foiz stavkalarini pasaytirish iqtisodiyotni rag'batlantirishning klassik mexanizmidir."
              }
            ]
          },
          {
            "id": "c1-econ-15",
            "word": "Foreign direct investment",
            "pos": "noun",
            "phonetic": "/ˌfɒrɪn daɪˈrekt ɪnˈvestmənt/",
            "uzbek": "To'g'ridan-to'g'ri xorijiy investitsiya (TXI)",
            "definition": "An investment made by a firm or individual in one country into business interests located in another country.",
            "examples": [
              {
                "en": "Foreign direct investment rose sharply as regulatory hurdles were streamlined.",
                "uz": "Normativ to'siqlar soddalashtirilgach, to'g'ridan-to'g'ri xorijiy investitsiyalar keskin oshdi."
              },
              {
                "en": "The developing country reformed its corporate laws to attract long-term foreign direct investment.",
                "uz": "Rivojlanayotgan mamlakat uzoq muddatli xorijiy investitsiyalarni jalb qilish uchun korporativ qonunlarini isloh qildi."
              },
              {
                "en": "Global foreign direct investment inflows contracted sharply amidst geopolitical tensions.",
                "uz": "Geosiyosiy keskinliklar sharoitida to'g'ridan-to'g'ri xorijiy investitsiyalar oqimi sezilarli darajada qisqardi."
              }
            ]
          },
          {
            "id": "c1-econ-16",
            "word": "Fiscal policy",
            "pos": "noun",
            "phonetic": "/ˈfɪskəl ˈpɒləsi/",
            "uzbek": "Fiskal siyosat (soliq va byudjet siyosati)",
            "definition": "The use of government spending and revenue collection to influence a nation's economy.",
            "examples": [
              {
                "en": "Expansionary fiscal policy was implemented to combat rising cyclical unemployment.",
                "uz": "Tsiklik ishsizlikning o'sishiga qarshi kurashish uchun kengaytiruvchi fiskal siyosat amalga oshirildi."
              },
              {
                "en": "Tight fiscal policy helped stabilize the sovereign debt ratio over five years.",
                "uz": "Qat'iy fiskal siyosat besh yil davomida davlat qarzi koeffitsientini barqarorlashtirishga yordam berdi."
              },
              {
                "en": "Economists debated the delicate interaction between fiscal policy and central bank interest rates.",
                "uz": "Iqtisodchilar fiskal siyosat va markaziy bank foiz stavkalari o'rtasidagi nozik munosabatni muhokama qildilar."
              }
            ]
          },
          {
            "id": "c1-econ-17",
            "word": "Austerity",
            "pos": "noun",
            "phonetic": "/ɒˈsterəti/",
            "uzbek": "Qat'iy tejamkorlik siyosati",
            "definition": "Difficult economic conditions created by government policies aimed at reducing public spending.",
            "examples": [
              {
                "en": "Protests erupted across major cities in response to harsh government austerity measures.",
                "uz": "Hukumatning qat'iy tejamkorlik choralariga javoban yirik shaharlarda norozilik namoyishlari boshlandi."
              },
              {
                "en": "Austerity policies severely curtailed funding for state healthcare and public welfare.",
                "uz": "Tejamkorlik siyosati davlat sog'liqni saqlash va ijtimoiy ta'minotini moliyalashtirishni keskin qisqartirdi."
              },
              {
                "en": "Critics argued that excessive austerity prolonged the stagnation of domestic business.",
                "uz": "Tanqidchilar haddan tashqari tejamkorlik ichki biznesning turg'unligini uzaytirganini ta'kidladilar."
              }
            ]
          },
          {
            "id": "c1-econ-18",
            "word": "Liquidity",
            "pos": "noun",
            "phonetic": "/lɪˈkwɪdəti/",
            "uzbek": "Likvidlik (mablag'ning naqd pulga aylana olish qobiliyati)",
            "definition": "The availability of liquid assets (such as cash) to a market or company to settle obligations.",
            "examples": [
              {
                "en": "The central bank injected billions into commercial banks to alleviate acute liquidity shortages.",
                "uz": "Markaziy bank likvidlikning keskin taqchilligini yengillatish uchun tijorat banklariga milliardlab mablag' kiritdi."
              },
              {
                "en": "Maintaining adequate liquidity protects financial institutions against unexpected depositor panics.",
                "uz": "Yetarli likvidlikni saqlash moliya institutlarini omonatchilarning kutilmagan vahimalaridan himoya qiladi."
              },
              {
                "en": "Illiquid assets cannot be sold rapidly without suffering a substantial discount.",
                "uz": "Likvidsiz aktivlarni katta chegirmasiz tezda sotib bo'lmaydi."
              }
            ]
          },
          {
            "id": "c1-econ-19",
            "word": "Inflationary pressure",
            "pos": "noun",
            "phonetic": "/ɪnˈfleɪʃənəri ˈpreʃə/",
            "uzbek": "Inflyatsion bosim",
            "definition": "Factors in the economy that cause the general level of prices for goods and services to increase.",
            "examples": [
              {
                "en": "Rising energy import costs generated immense inflationary pressure throughout the economy.",
                "uz": "Energiyani import qilish xarajatlarining oshishi butun iqtisodiyot bo'ylab ulkan inflyatsion bosimni keltirib chiqardi."
              },
              {
                "en": "The reserve board raised interest rates to dampen persistent inflationary pressure.",
                "uz": "Zaxira kengashi doimiy inflyatsion bosimni yumshatish uchun foiz stavkalarini oshirdi."
              },
              {
                "en": "Uncontrolled wage growth can trigger severe cost-push inflationary pressure.",
                "uz": "Ish haqining nazoratsiz o'sishi xarajatlar oshishi sababli jiddiy inflyatsion bosimni keltirib chiqarishi mumkin."
              }
            ]
          },
          {
            "id": "c1-econ-20",
            "word": "Stagflation",
            "pos": "noun",
            "phonetic": "/stæɡˈfleɪʃən/",
            "uzbek": "Stagflyatsiya (bir vaqtda iqtisodiy turg'unlik va yuqori inflyatsiya)",
            "definition": "Persistent high inflation combined with high unemployment and stagnant demand in a country's economy.",
            "examples": [
              {
                "en": "The oil shocks of the 1970s trapped developed western economies in debilitating stagflation.",
                "uz": "1970-yillardagi neft shoklari rivojlangan g'arb iqtisodiyotlarini falaj qiluvchi stagflyatsiyaga tortdi."
              },
              {
                "en": "Central bankers fear stagflation because standard monetary tools cannot easily fix both issues.",
                "uz": "Markaziy bankchilar stagflyatsiyadan qo'rqishadi, chunki standart pul choralari ikkala muammoni birdaniga oson hal qila olmaydi."
              },
              {
                "en": "Stagflation erodes real purchasing power while curbing opportunities for young job seekers.",
                "uz": "Stagflyatsiya yosh ish izlovchilar uchun imkoniyatlarni cheklab, haqiqiy xarid qobiliyatini yemirib yuboradi."
              }
            ]
          },
          {
            "id": "c1-econ-21",
            "word": "Credit rating",
            "pos": "noun",
            "phonetic": "/ˈkredɪt ˈreɪtɪŋ/",
            "uzbek": "Kredit reytingi",
            "definition": "An estimate of the ability of a person, business, or government to fulfill their financial commitments.",
            "examples": [
              {
                "en": "The nation's sovereign credit rating was downgraded following reckless fiscal borrowing.",
                "uz": "O'ylamasdan qilingan fiskal qarzlardan so'ng mamlakatning suveren kredit reytingi pasaytirildi."
              },
              {
                "en": "A triple-A credit rating allows blue-chip corporations to borrow funds at rock-bottom interest rates.",
                "uz": "Uchta 'A' kredit reytingi nufuzli korporatsiyalarga eng past foiz stavkalarida qarz olish imkonini beradi."
              },
              {
                "en": "Credit rating agencies faced intense scrutiny following the global subprime mortgage crisis.",
                "uz": "Global ipoteka inqirozidan so'ng kredit reytingi agentliklari jiddiy tekshiruvga duch keldi."
              }
            ]
          },
          {
            "id": "c1-econ-22",
            "word": "Capital flight",
            "pos": "noun",
            "phonetic": "/ˈkæpɪtl flaɪt/",
            "uzbek": "Kapitalning chetga qochishi",
            "definition": "A large-scale exit of financial assets and capital from a nation due to events such as political instability.",
            "examples": [
              {
                "en": "Political turmoil precipitated sudden capital flight, sending the currency into freefall.",
                "uz": "Siyosiy notinchlik kutilmagan kapital qochishini keltirib chiqardi va valyutani erkin qulashga olib keldi."
              },
              {
                "en": "The central bank introduced strict foreign currency limits to prevent massive capital flight.",
                "uz": "Markaziy bank ommaviy kapital qochishining oldini olish uchun qat'iy valyuta cheklovlarini joriy etdi."
              },
              {
                "en": "Restoring investor confidence is the only permanent antidote to structural capital flight.",
                "uz": "Investorlar ishonchini tiklash tizimli kapital chiqib ketishiga qarshi yagona doimiy choradir."
              }
            ]
          },
          {
            "id": "c1-econ-23",
            "word": "Tariff",
            "pos": "noun",
            "phonetic": "/ˈtærɪf/",
            "uzbek": "Bojxona boji, tarif",
            "definition": "A tax or duty to be paid on a particular class of imports or exports.",
            "examples": [
              {
                "en": "Retaliatory tariffs were imposed on imported steel, igniting complaints from automobile makers.",
                "uz": "Import po'latga qasos bojlari qo'yildi va bu avtomobil ishlab chiqaruvchilarning e'tirozlarini uyg'otdi."
              },
              {
                "en": "Lowering cross-border tariffs facilitated massive trade flows between neighbouring states.",
                "uz": "Transchegaraviy bojlarni pasaytirish qo'shni davlatlar o'rtasida ulkan savdo oqimlarini osonlashtirdi."
              },
              {
                "en": "Trade negotiators clashed over protective agricultural tariffs on foreign livestock.",
                "uz": "Savdo muzokarachilari xorijiy chorva mollariga nisbatan himoya qishloq xo'jaligi bojlari bo'yicha to'qnash kelishdi."
              }
            ]
          },
          {
            "id": "c1-econ-24",
            "word": "Trade deficit",
            "pos": "noun",
            "phonetic": "/treɪd ˈdefɪsɪt/",
            "uzbek": "Savdo kamomadi, savdo defitsiti",
            "definition": "The amount by which the cost of a country's imports exceeds the value of its exports.",
            "examples": [
              {
                "en": "The nation recorded a record trade deficit due to soaring imports of consumer electronics.",
                "uz": "Maishiy elektronika importining keskin oshishi sababli mamlakat rekord darajadagi savdo kamomadini qayd etdi."
              },
              {
                "en": "A persistent trade deficit can place sustained downward pressure on the domestic currency.",
                "uz": "Doimiy savdo kamomadi mahalliy valyutaga uzluksiz pasayish bosimini o'tkazishi mumkin."
              },
              {
                "en": "Policy makers sought to reduce the trade deficit by subsidizing high-tech manufacturing exports.",
                "uz": "Siyosat ishlab chiquvchilar yuqori texnologiyali ishlab chiqarish eksportini subsidiyalash orqali savdo kamomadini kamaytirishga harakat qilishdi."
              }
            ]
          },
          {
            "id": "c1-econ-25",
            "word": "Solvency",
            "pos": "noun",
            "phonetic": "/ˈsɒlvənsi/",
            "uzbek": "To'lov qobiliyati",
            "definition": "The ability of a company or government to meet its long-term financial obligations.",
            "examples": [
              {
                "en": "Auditors expressed grave doubts regarding the operational solvency of the retail conglomerate.",
                "uz": "Auditorlar chakana savdo konglomeratining operatsion to'lov qobiliyatiga jiddiy shubha bildirdilar."
              },
              {
                "en": "Stringent capital reserve requirements are designed to safeguard long-term banking solvency.",
                "uz": "Qat'iy kapital zaxirasi talablari banklarning uzoq muddatli to'lov qobiliyatini ta'minlash uchun ishlab chiqilgan."
              },
              {
                "en": "Without a government rescue guarantee, the carrier's continued solvency was impossible.",
                "uz": "Hukumatning qutqaruv kafolatisiz aviatashuvchining to'lov qobiliyatini saqlab qolishi imkonsiz edi."
              }
            ]
          },
          {
            "id": "c1-econ-26",
            "word": "Hedge",
            "pos": "verb",
            "phonetic": "/hedʒ/",
            "uzbek": "Xedjirlamoq, moliyaviy xavflardan sug'urtalamoq",
            "definition": "To protect oneself against loss on an investment or currency fluctuation by making balancing transactions.",
            "examples": [
              {
                "en": "Multinational corporations use currency derivatives to hedge against sudden foreign exchange swings.",
                "uz": "Transmilliy korporatsiyalar kutilmagan valyuta tebranishlaridan himoyalanish uchun valyuta hosilalaridan foydalanadilar."
              },
              {
                "en": "Gold has historically served as an effective hedge against high domestic inflation.",
                "uz": "Tarix davomida oltin yuqori ichki inflyatsiyaga qarshi samarali himoya vositasi bo'lib xizmat qilgan."
              },
              {
                "en": "Investors hedged their equity holdings by acquiring defensive government treasury bonds.",
                "uz": "Investorlar himoyaviy davlat g'aznachilik obligatsiyalarini sotib olib, o'z aksiyalarini xavfdan sug'urtaladilar."
              }
            ]
          },
          {
            "id": "c1-econ-27",
            "word": "Bailout",
            "pos": "noun",
            "phonetic": "/ˈbeɪlaʊt/",
            "uzbek": "Moliyaviy qutqaruv paketi (inqirozdagi kompaniya/davlat uchun)",
            "definition": "An act of giving financial assistance to a failing business or economy to save it from collapse.",
            "examples": [
              {
                "en": "The troubled commercial bank received a multi-billion dollar taxpayer-funded bailout.",
                "uz": "Qiyin ahvolda qolgan tijorat banki soliq to'lovchilar hisobidan milliardlab dollarlik moliyaviy qutqaruv paketini oldi."
              },
              {
                "en": "Strict structural reform conditions were attached to the international emergency bailout.",
                "uz": "Xalqaro favqulodda qutqaruv paketiga qat'iy tarkibiy islohotlar shartlari biriktirildi."
              },
              {
                "en": "Public anger mounted over massive state bailouts granted to irresponsible investment bankers.",
                "uz": "Mas'uliyatsiz investitsiya bankirlariga berilgan yirik davlat qutqaruv paketlari tufayli xalq g'azabi kuchaydi."
              }
            ]
          },
          {
            "id": "c1-econ-28",
            "word": "Commodity",
            "pos": "noun",
            "phonetic": "/kəˈmɒdəti/",
            "uzbek": "Xomashyo tovari (neft, oltin, bug'doy kabi)",
            "definition": "A raw material or primary agricultural product that can be bought and sold on specialized exchanges.",
            "examples": [
              {
                "en": "Geopolitical crises cause volatile swings across global energy and grain commodity markets.",
                "uz": "Geosiyosiy inqirozlar global energiya va g'alla xomashyo bozorlarida beqaror tebranishlarni keltirib chiqaradi."
              },
              {
                "en": "The developing nation's revenue depends almost entirely on crude oil as its primary export commodity.",
                "uz": "Rivojlanayotgan mamlakat daromadlari deyarli butunlay asosiy eksport tovari bo'lgan xom neftga bog'liq."
              },
              {
                "en": "Futures contracts allow agricultural producers to lock in guaranteed prices for their commodities.",
                "uz": "Fyuchers shartnomalari qishloq xo'jaligi ishlab chiqaruvchilariga o'z xomashyolari uchun kafolatlangan narxlarni belgilash imkonini beradi."
              }
            ]
          },
          {
            "id": "c1-econ-29",
            "word": "Arbitrage",
            "pos": "noun",
            "phonetic": "/ˈɑːbɪtrɑːʒ/",
            "uzbek": "Arbitraj (turli bozorlardagi narx farqidan foyda olish)",
            "definition": "The simultaneous purchase and sale of an asset to profit from an imbalance in the price in different markets.",
            "examples": [
              {
                "en": "Algorithmic trading platforms exploit split-second arbitrage opportunities between international exchanges.",
                "uz": "Algoritmik savdo platformalari xalqaro birjalar orasidagi soniyaning bir bo'lagidagi arbitraj imkoniyatlaridan foydalanadi."
              },
              {
                "en": "Currency arbitrage rapidly eliminates pricing discrepancies across global electronic markets.",
                "uz": "Valyuta arbitraji global elektron bozorlardagi narx tafovutlarini tezda yo'q qiladi."
              },
              {
                "en": "The hedge fund generated substantial alpha through sophisticated regulatory arbitrage strategies.",
                "uz": "Xedj fondi murakkab normativ arbitraj strategiyalari orqali katta daromad oldi."
              }
            ]
          },
          {
            "id": "c1-econ-30",
            "word": "Venture capital",
            "pos": "noun",
            "phonetic": "/ˈventʃə ˈkæpɪtl/",
            "uzbek": "Venchur kapitali (yuqori xavfli innovatsion loyihalarga sarmoya)",
            "definition": "Capital invested in a project or startup in which there is a substantial element of risk, typically for new businesses.",
            "examples": [
              {
                "en": "Early-stage artificial intelligence startups compete aggressively for Silicon Valley venture capital.",
                "uz": "Ilk bosqichdagi sun'iy intellekt startaplari Kremniy vodiysi venchur kapitali uchun qizg'in raqobatlashadilar."
              },
              {
                "en": "Securing venture capital funding enabled the biotech enterprise to initiate clinical human trials.",
                "uz": "Venchur kapitali mablag'larini jalb qilish biotexnologiya korxonasiga odamlarda klinik sinovlarni boshlash imkonini berdi."
              },
              {
                "en": "Venture capital firms provide not merely capital, but strategic guidance and executive connections.",
                "uz": "Venchur kapitali firmalari nafaqat mablag', balki strategik yo'l-yo'riq va rahbarlik aloqalarini ham taqdim etadi."
              }
            ]
          }
        ]
      },
      {
        "id": "c1-medicine",
        "title": "Unit 05: Clinical Medicine & Advanced Healthcare (Klinik tibbiyot va ilg'or sog'liqni saqlash)",
        "unitNumber": 5,
        "category": "Medicine & Healthcare",
        "icon": "fa-notes-medical",
        "color": "from-teal-600 to-cyan-800",
        "cambridge_source": "Cambridge English Vocabulary in Use Advanced, Unit 51: Healthcare & Unit 53: Medical language",
        "words": [
          {
            "id": "c1-med-1",
            "word": "Acute",
            "pos": "adjective",
            "phonetic": "/əˈkjuːt/",
            "uzbek": "O'tkir (kasallik haqida: to'satdan va og'ir boshlanadigan)",
            "definition": "Describing a severe medical condition that comes on suddenly and lasts a relatively short time.",
            "examples": [
              {
                "en": "Lydia had her appendix surgically removed after suffering an acute attack of appendicitis.",
                "uz": "Lidiya o'tkir appenditsit xurujidan so'ng appenditsitini jarrohlik yo'li bilan oldirib tashladi."
              },
              {
                "en": "Most medical care, whether for acute conditions or chronic ailments, begins in primary care.",
                "uz": "Aksariyat tibbiy yordam, xoh o'tkir holatlar, xoh surunkali kasalliklar bo'lsin, birlamchi tizimda boshlanadi."
              },
              {
                "en": "The patient was admitted to intensive care suffering from acute respiratory failure.",
                "uz": "Bemor o'tkir nafas yetishmovchiligi bilan reanimatsiya bo'limiga yotqizildi."
              }
            ]
          },
          {
            "id": "c1-med-2",
            "word": "Chronic",
            "pos": "adjective",
            "phonetic": "/ˈkrɒnɪk/",
            "uzbek": "Surunkali (uzoq davom etadigan yoki qaytalanuvchi kasallik)",
            "definition": "Describing an illness or medical problem that continues for a long time or constantly recurs.",
            "examples": [
              {
                "en": "He suffers from chronic bronchitis that flares up persistently every single winter.",
                "uz": "U har qishda tinimsiz qaytalanadigan surunkali bronxitdan aziyat chekadi."
              },
              {
                "en": "Managing chronic autoimmune disorders requires ongoing clinical supervision and medication.",
                "uz": "Surunkali otoimmun kasalliklarni davolash doimiy klinik nazorat va dori-darmonlarni talab qiladi."
              },
              {
                "en": "Physiotherapy plays an indispensable role in alleviating chronic musculoskeletal pain.",
                "uz": "Fizioterapiya surunkali tayanch-harakat og'riqlarini yengillashtirishda ajralmas rol o'ynaydi."
              }
            ]
          },
          {
            "id": "c1-med-3",
            "word": "Prognosis",
            "pos": "noun",
            "phonetic": "/prɒɡˈnəʊsɪs/",
            "uzbek": "Prognoz (kasallikning kechishi va oqibati haqidagi tibbiy xulosa)",
            "definition": "A doctor's medical opinion or judgment about how an illness is likely to develop.",
            "examples": [
              {
                "en": "Following early detection and successful surgery, the oncologist gave an excellent prognosis.",
                "uz": "Erta aniqlash va muvaffaqiyatli jarrohlikdan so'ng onkolog a'lo darajadagi prognoz berdi."
              },
              {
                "en": "The medical prognosis for recovery remains guarded until biopsy results are analyzed.",
                "uz": "Biopsiya natijalari tahlil qilinmaguncha, tuzalish bo'yicha tibbiy prognoz ehtiyotkorligicha qoladi."
              },
              {
                "en": "Metaphorically, analysts offered a rather gloomy economic prognosis for the coming fiscal year.",
                "uz": "Ko'chma ma'noda, tahlilchilar kelgusi moliyaviy yil uchun ancha tushkun iqtisodiy prognoz berdilar."
              }
            ]
          },
          {
            "id": "c1-med-4",
            "word": "Symptomatic",
            "pos": "adjective",
            "phonetic": "/ˌsɪmptəˈmætɪk/",
            "uzbek": "Alomatli, simptomatik / xos xususiyatli",
            "definition": "Serving as a symptom or sign of a disease; exhibiting symptoms.",
            "examples": [
              {
                "en": "The persistent chronic cough was symptomatic of a deeper underlying pulmonary problem.",
                "uz": "Doimiy surunkali yo'tal o'pkaning chuqurroq yashirin muammosining alomati edi."
              },
              {
                "en": "Patients who remain completely asymptomatic can still transmit the contagious virus to others.",
                "uz": "Butunlay alomatsiz qolgan bemorlar ham yuqumli virusni boshqalarga yuqtirishlari mumkin."
              },
              {
                "en": "This aggressive reaction is symptomatic of his widespread insecurity in social settings.",
                "uz": "Bu tajovuzkor munosabat uning ijtimoiy muhitdagi keng tarqalgan ishonchsizligidan dalolat beradi."
              }
            ]
          },
          {
            "id": "c1-med-5",
            "word": "Adverse reaction",
            "pos": "noun",
            "phonetic": "/ˈædvɜːs riˈækʃən/",
            "uzbek": "Nojo'ya / salbiy ta'sir (doridan)",
            "definition": "An unexpected, unintended, and harmful response experienced following the administration of a drug.",
            "examples": [
              {
                "en": "Elderly patients carry an elevated risk of suffering adverse reactions to strong antibiotics.",
                "uz": "Katta yoshdagi bemorlarda kuchli antibiotiklarga salbiy ta'sirlarni boshdan kechirish xavfi yuqori bo'ladi."
              },
              {
                "en": "Stop taking this medicine and seek emergency medical help if you observe any adverse reaction.",
                "uz": "Agar biron bir nojo'ya ta'sirni sezsangiz, ushbu dorini qabul qilishni to'xtating va shoshilinch yordamga murojaat qiling."
              },
              {
                "en": "Clinical phase trials meticulously track all reported adverse reactions across test subjects.",
                "uz": "Klinik bosqich sinovlari sinov sub'ektlarida qayd etilgan barcha nojo'ya ta'sirlarni sinchkovlik bilan kuzatib boradi."
              }
            ]
          },
          {
            "id": "c1-med-6",
            "word": "Diagnose",
            "pos": "verb",
            "phonetic": "/ˈdaɪəɡnəʊz/",
            "uzbek": "Tashxis qo'ymoq, diagnoz qo'ymoq",
            "definition": "To identify the exact nature of an illness or medical condition by clinical examination.",
            "examples": [
              {
                "en": "The paediatrician diagnosed the young child with a mild form of asthma.",
                "uz": "Pediatr yosh bolaga astmaning yengil shakli tashxisini qo'ydi."
              },
              {
                "en": "State-of-the-art MRI scanners allow neurologists to diagnose brain tumours with exceptional precision.",
                "uz": "Zamonaviy MRT skanerlari nevrologlarga miya o'smalariga favqulodda aniqlik bilan tashxis qo'yish imkonini beradi."
              },
              {
                "en": "If diagnosed early in its progression, the cardiovascular condition can be managed with lifestyle changes.",
                "uz": "Agar rivojlanishining dastlabki bosqichida tashxis qo'yilsa, yurak-qon tomir kasalligini turmush tarzini o'zgartirish orqali nazorat qilish mumkin."
              }
            ]
          },
          {
            "id": "c1-med-7",
            "word": "Primary care",
            "pos": "noun",
            "phonetic": "/ˈpraɪməri keə/",
            "uzbek": "Birlamchi tibbiy yordam",
            "definition": "Healthcare provided by physicians or nurses whom a patient consults first before hospital admission.",
            "examples": [
              {
                "en": "Primary care is delivered by general practitioners who provide community health checks.",
                "uz": "Birlamchi tibbiy yordam umumiy amaliyot shifokorlari tomonidan aholi salomatligini tekshirish orqali taqdim etiladi."
              },
              {
                "en": "Investing in robust primary care reduces overcrowding in emergency departments.",
                "uz": "Mustahkam birlamchi tibbiy yordamga sarmoya kiritish shoshilinch bo'limlardagi tirbandlikni kamaytiradi."
              },
              {
                "en": "The national healthcare model depends on primary care doctors acting as initial gatekeepers.",
                "uz": "Milliy sog'liqni saqlash modeli birlamchi bo'g'in shifokorlarining boshlang'ich nazoratchi vazifasini bajarishiga tayanadi."
              }
            ]
          },
          {
            "id": "c1-med-8",
            "word": "Locum",
            "pos": "noun",
            "phonetic": "/ˈləʊkəm/",
            "uzbek": "Vaqtincha almashtiruvchi shifokor",
            "definition": "A qualified doctor who temporarily stands in and does the work of another physician who is ill or away.",
            "examples": [
              {
                "en": "I saw a very attentive locum today because our regular GP was away on medical leave.",
                "uz": "Bugun men juda e'tiborli almashtiruvchi shifokor qabulida bo'ldim, chunki doimiy vrachimiz ta'tilda edi."
              },
              {
                "en": "Hospitals frequently recruit experienced locum doctors to cover intense night shifts.",
                "uz": "Kasalxonalar tungi navbatchiliklarni qoplash uchun tajribali vaqtincha shifokorlarni tez-tez jalb qilishadi."
              },
              {
                "en": "Working as a locum offers young medical graduates flexible hours and varied clinical exposure.",
                "uz": "Vaqtincha vrach bo'lib ishlash yosh tibbiyot bitiruvchilariga moslashuvchan ish vaqti va turfa klinik tajribani taqdim etadi."
              }
            ]
          },
          {
            "id": "c1-med-9",
            "word": "Disorder",
            "pos": "noun",
            "phonetic": "/dɪsˈɔːdə/",
            "uzbek": "Buzilish, kasallik (organizm faoliyatida)",
            "definition": "An illness or condition that disrupts the normal physical or mental functions of the body.",
            "examples": [
              {
                "en": "Anorexia is a dangerous eating disorder in which a person attempts to starve themselves.",
                "uz": "Anoreksiya - bu inson o'zini och qoldirishga urinadigan xavfli ovqatlanish buzilishidir."
              },
              {
                "en": "Consult your consultant if you have a past history of connective tissue disorder.",
                "uz": "Agar sizda biriktiruvchi to'qima buzilishi tarixi bo'lsa, mutaxassis shifokoringiz bilan maslahatlashing."
              },
              {
                "en": "Bipolar disorder requires a careful balance of pharmacological and psychological therapies.",
                "uz": "Bipolyar buzilish farmakologik va psixologik terapiyalarning nozik muvozanatini talab qiladi."
              }
            ]
          },
          {
            "id": "c1-med-10",
            "word": "Cardiologist",
            "pos": "noun",
            "phonetic": "/ˌkɑːdiˈɒlədʒɪst/",
            "uzbek": "Kardiolog, yurak shifokori",
            "definition": "A medical specialist who diagnoses and treats diseases and abnormalities of the heart.",
            "examples": [
              {
                "en": "The general practitioner referred the patient to a cardiologist for comprehensive stress tests.",
                "uz": "Umumiy amaliyot shifokori bemorni keng qamrovli stress testlari uchun kardiologga yo'lladi."
              },
              {
                "en": "The cardiologist identified an irregular heartbeat and recommended an immediate pacemaker implant.",
                "uz": "Kardiolog yurak urishidagi tartibsizlikni aniqladi va zudlik bilan kardiostimulyator o'rnatishni tavsiya qildi."
              },
              {
                "en": "Preventative consultations with a cardiologist can reduce myocardial infarction risks.",
                "uz": "Kardiolog bilan profilaktik maslahatlar miokard infarkti xavfini kamaytirishi mumkin."
              }
            ]
          },
          {
            "id": "c1-med-11",
            "word": "Ophthalmologist",
            "pos": "noun",
            "phonetic": "/ˌɒfθælˈmɒlədʒɪst/",
            "uzbek": "Oftalmolog, ko'z shifokori",
            "definition": "A specialist doctor who deals with the diagnosis, treatment, and surgery of diseases of the eye.",
            "examples": [
              {
                "en": "She booked an appointment with an ophthalmologist to evaluate deteriorating night vision.",
                "uz": "U yomonlashib borayotgan tungi ko'rish qobiliyatini baholash uchun oftalmolog qabuliga yozildi."
              },
              {
                "en": "The ophthalmologist performed laser surgery to repair a detached retina.",
                "uz": "Oftalmolog to'r pardaning ko'chishini davolash uchun lazerli jarrohlik amaliyotini o'tkazdi."
              },
              {
                "en": "Diabetic patients require annual retinal examinations by a certified ophthalmologist.",
                "uz": "Qandli diabetga chalingan bemorlar malakali oftalmolog tomonidan har yili ko'z tubini tekshirtirishlari shart."
              }
            ]
          },
          {
            "id": "c1-med-12",
            "word": "Anaesthetist",
            "pos": "noun",
            "phonetic": "/əˈniːsθətɪst/",
            "uzbek": "Anesteziolog, og'riqsizlantirish mutaxassisi",
            "definition": "A specialist doctor responsible for administering anaesthesia to prevent pain during operations.",
            "examples": [
              {
                "en": "Before major open-heart surgery, the anaesthetist calculated the precise drug dosage.",
                "uz": "Yurakdagi yirik ochiq operatsiyadan oldin anesteziolog preparatning aniq dozasini hisoblab chiqdi."
              },
              {
                "en": "The anaesthetist monitored oxygen levels and vital signs throughout the four-hour procedure.",
                "uz": "Anesteziolog to'rt soatlik jarayon davomida kislorod miqdori va hayotiy ko'rsatkichlarni kuzatib bordi."
              },
              {
                "en": "Patients consult the anaesthetist to discuss potential allergic responses to sedation.",
                "uz": "Bemorlar sedatsiyaga bo'lgan allergik reaktsiyalarni muhokama qilish uchun anesteziolog bilan uchrashadilar."
              }
            ]
          },
          {
            "id": "c1-med-13",
            "word": "Dermatologist",
            "pos": "noun",
            "phonetic": "/ˌdɜːməˈtɒlədʒɪst/",
            "uzbek": "Dermatolog, teri kasalliklari shifokori",
            "definition": "A medical practitioner qualified to diagnose and treat skin disorders.",
            "examples": [
              {
                "en": "Chris has an obstinate skin condition that required evaluation by a senior dermatologist.",
                "uz": "Krisda bosh shifokor-dermatolog ko'rigini talab qiladigan o'jar teri kasalligi bor edi."
              },
              {
                "en": "The dermatologist conducted a biopsy on the suspicious mole to rule out melanoma.",
                "uz": "Dermatolog melanomani inkor etish uchun shubhali xol ustida biopsiya o'tkazdi."
              },
              {
                "en": "Prescription topical retinoids were prescribed by the dermatologist to treat severe acne.",
                "uz": "Og'ir husnbuzarlarni davolash uchun dermatolog tomonidan retsept bo'yicha retinoidlar yozib berildi."
              }
            ]
          },
          {
            "id": "c1-med-14",
            "word": "Paediatrician",
            "pos": "noun",
            "phonetic": "/ˌpiːdiəˈtrɪʃən/",
            "uzbek": "Pediatr, bolalar shifokori",
            "definition": "A medical practitioner specializing in the illness and development of children.",
            "examples": [
              {
                "en": "The paediatrician reassured the anxious parents that the toddler's fever was viral.",
                "uz": "Pediatr xavotirlangan ota-onaga bolaning isitmasi virusli ekanligini aytib, ularni xotirjam qildi."
              },
              {
                "en": "Newborn screening tests are routinely evaluated by the hospital paediatrician.",
                "uz": "Yangi tug'ilgan chaqaloqlarning skrining tekshiruvlari doimiy ravishda kasalxona pediatri tomonidan baholanadi."
              },
              {
                "en": "Specialized paediatricians monitor childhood developmental milestones and immunizations.",
                "uz": "Ixtisoslashgan vrach-pediatrlar bolalar rivojlanish bosqichlari va emlashlarni nazorat qiladilar."
              }
            ]
          },
          {
            "id": "c1-med-15",
            "word": "Obstetrician",
            "pos": "noun",
            "phonetic": "/ˌɒbstəˈtrɪʃən/",
            "uzbek": "Akusher, tug'ruq shifokori",
            "definition": "A physician specialized in pregnancy, childbirth, and postpartum care.",
            "examples": [
              {
                "en": "The obstetrician safely delivered twins via an emergency Caesarean section.",
                "uz": "Akusher favqulodda kesarcha kesish yo'li bilan egizaklarni eson-omon dunyoga keltirdi."
              },
              {
                "en": "Expectant mothers attend monthly clinical check-ups with their obstetrician.",
                "uz": "Homilador onalar har oy o'z akusherlari ko'rigida bo'ladilar."
              },
              {
                "en": "The obstetrician closely managed the high-risk pregnancy with frequent ultrasound scans.",
                "uz": "Akusher yuqori xavfli homiladorlikni tez-tez ultratovush tekshiruvlari orqali qat'iy nazorat qildi."
              }
            ]
          },
          {
            "id": "c1-med-16",
            "word": "Chiropractor",
            "pos": "noun",
            "phonetic": "/ˈkaɪərəʊˌpræktə/",
            "uzbek": "Xiropratik, qo'l bilan umurtqani davolovchi mutaxassis",
            "definition": "A practitioner who treats disorders of the spine and musculoskeletal system by manual manipulation.",
            "examples": [
              {
                "en": "A chiropractor manually manipulates joints where bones connect, such as along the spine.",
                "uz": "Xiropratik bo'g'inlar tutashgan joylarni, masalan, umurtqa pog'onasini qo'l bilan muolaja qiladi."
              },
              {
                "en": "After suffering lower back stiffness, he sought alternative therapy from a registered chiropractor.",
                "uz": "Bel qotishidan so'ng, u ro'yxatdan o'tgan xiropratika mutaxassisidan muqobil yordam so'radi."
              },
              {
                "en": "Chiropractors focus on restoring natural alignment without recourse to surgical interventions.",
                "uz": "Xiropratiklar jarrohlik aralashuvisiz tabiiy qomat tiklanishiga diqqat qaratadilar."
              }
            ]
          },
          {
            "id": "c1-med-17",
            "word": "Acupuncturist",
            "pos": "noun",
            "phonetic": "/ˈækjʊˌpʌŋktʃərɪst/",
            "uzbek": "Akupunktura (igna bilan davolash) mutaxassisi",
            "definition": "A practitioner who treats patients by inserting fine needles at specific therapeutic pressure points across the body.",
            "examples": [
              {
                "en": "The licensed acupuncturist stimulated key meridian points to treat chronic migraine pain.",
                "uz": "Litsenziyaga ega akupunktura mutaxassisi surunkali migren og'rig'ini davolash uchun asosiy nuqtalarni qo'zg'atdi."
              },
              {
                "en": "Many athletes visit an acupuncturist to speed recovery from stubborn muscular strain.",
                "uz": "Ko'plab sportchilar mushaklarning zo'riqishidan tezroq tiklanish uchun igna terapiyasi mutaxassisiga murojaat qilishadi."
              },
              {
                "en": "Acupuncturists emphasize restoring energetic balance across internal anatomical channels.",
                "uz": "Akupunktura ustalari ichki anatomik kanallar bo'ylab energetik muvozanatni tiklashga urg'u berishadi."
              }
            ]
          },
          {
            "id": "c1-med-18",
            "word": "Biopsy",
            "pos": "noun",
            "phonetic": "/ˈbaɪɒpsi/",
            "uzbek": "Biopsiya (tekshirish uchun to'qima namunasi olish)",
            "definition": "An examination of tissue removed from a living body to discover the presence, cause, or extent of a disease.",
            "examples": [
              {
                "en": "The surgeon took a tissue biopsy during endoscopy to test for malignant cells.",
                "uz": "Jarroh endoskopiya paytida xavfli hujayralarni tekshirish uchun to'qima biopsiyasini oldi."
              },
              {
                "en": "Pathologists confirmed benign findings twenty-four hours following the liver biopsy.",
                "uz": "Patologlar jigar biopsiyasidan yigirma to'rt soat o'tgach, xavfsiz natijalarni tasdiqlashdi."
              },
              {
                "en": "A needle biopsy remains a minimally invasive diagnostic gold standard.",
                "uz": "Ignali biopsiya minimal invaziv diagnostika standarti bo'lib qolmoqda."
              }
            ]
          },
          {
            "id": "c1-med-19",
            "word": "Pathology",
            "pos": "noun",
            "phonetic": "/pəˈθɒlədʒi/",
            "uzbek": "Patologiya (kasalliklar tabiati va sabablarini o'rganish)",
            "definition": "The science of the causes and effects of diseases, especially the branch of medicine dealing with laboratory examination of samples.",
            "examples": [
              {
                "en": "Tissue samples were dispatched immediately to the university hospital pathology laboratory.",
                "uz": "To'qima namunalari zudlik bilan universitet shifoxonasi patologiya laboratoriyasiga yuborildi."
              },
              {
                "en": "Molecular pathology has revolutionized the genetic classification of cancers.",
                "uz": "Molekulyar patologiya saraton turlarining genetik tasnifini tubdan o'zgartirdi."
              },
              {
                "en": "Understanding cellular pathology helps researchers formulate highly targeted therapeutics.",
                "uz": "Hujayra patologiyasini tushunish tadqiqotchilarga yuqori darajada nishonli dorilarni yaratishda yordam beradi."
              }
            ]
          },
          {
            "id": "c1-med-20",
            "word": "Malignant",
            "pos": "adjective",
            "phonetic": "/məˈlɪɡnənt/",
            "uzbek": "Xavfli, o'sma haqida (yomon sifatli)",
            "definition": "Describing a disease or tumor that is invasive, uncontrollable, and tends to cause death.",
            "examples": [
              {
                "en": "The laboratory test revealed that the excised growth was completely benign, not malignant.",
                "uz": "Laboratoriya tekshiruvi kesib olingan o'smaning xavfli emas, mutlaqo xavfsiz ekanligini ko'rsatdi."
              },
              {
                "en": "Malignant melanomas require prompt radical surgical excision to prevent lymphatic spread.",
                "uz": "Xavfli melanomalar limfa orqali tarqalishining oldini olish uchun zudlik bilan jarrohlik yo'li bilan olib tashlanishi kerak."
              },
              {
                "en": "Early screening prevents localized cellular changes from turning malignant.",
                "uz": "Erta tekshiruv lokal hujayra o'zgarishlarining xavfli o'smaga aylanishining oldini oladi."
              }
            ]
          },
          {
            "id": "c1-med-21",
            "word": "Benign",
            "pos": "adjective",
            "phonetic": "/bɪˈnaɪn/",
            "uzbek": "Xavfsiz, yaxshi sifatli (o'sma haqida)",
            "definition": "Describing a disease or growth that is not cancerous and does not spread to other tissues.",
            "examples": [
              {
                "en": "The ultrasound confirmed that the cyst was entirely benign and posed no long-term threat.",
                "uz": "Ultratovush kistaning butunlay yaxshi sifatli ekanligini va uzoq muddatli xavf tug'dirmasligini tasdiqladi."
              },
              {
                "en": "Patients experience immense relief upon learning their biopsy yielded a benign diagnosis.",
                "uz": "Bemorlar biopsiya natijasi yaxshi sifatli tashxis ko'rsatganini bilgach, yengil nafas oladilar."
              },
              {
                "en": "Although the tumour was benign, its anatomical location compressed an adjacent nerve.",
                "uz": "O'sma yaxshi sifatli bo'lsa-da, uning joylashuvi qo'shni asab tolasini qisib qo'ygan edi."
              }
            ]
          },
          {
            "id": "c1-med-22",
            "word": "Metastasis",
            "pos": "noun",
            "phonetic": "/məˈtæstəsɪs/",
            "uzbek": "Metastaz (saratonning boshqa organlarga tarqalishi)",
            "definition": "The development of secondary malignant growths at a distance from a primary site of cancer.",
            "examples": [
              {
                "en": "Targeted chemotherapy aims to halt metastasis before tumor cells colonize internal organs.",
                "uz": "Nishonli kimyoterapiya saraton hujayralari ichki organlarga tarqalgunga qadar metastazni to'xtatishga qaratilgan."
              },
              {
                "en": "PET scans showed no evidence of distant metastasis following surgical resection.",
                "uz": "Jarrohlik yo'li bilan olib tashlangandan so'ng, PET skanerlari uzoq metastaz alomatlarini ko'rsatmadi."
              },
              {
                "en": "Inhibiting vascular growth factors deprives secondary metastasis of essential blood supply.",
                "uz": "Qon tomir o'sish omillarini to'xtatish ikkilamchi metastazni zarur qon ta'minotidan mahrum qiladi."
              }
            ]
          },
          {
            "id": "c1-med-23",
            "word": "Palliative care",
            "pos": "noun",
            "phonetic": "/ˈpæliətɪv keə/",
            "uzbek": "Palliativ yordam (og'ir bemorlarning azobini yengillashtirish)",
            "definition": "Specialized medical care for people living with a serious illness, focused on providing relief from symptoms and stress.",
            "examples": [
              {
                "en": "Hospice teams provide compassionate palliative care to enhance dignity and alleviate pain.",
                "uz": "Xospis guruhlari qadr-qimmatni oshirish va og'riqni yengillashtirish uchun mehrli palliativ yordam ko'rsatadilar."
              },
              {
                "en": "Palliative care integrates psychological and physical support for terminal patients.",
                "uz": "Palliativ yordam og'ir bemorlar uchun psixologik va jismoniy yordamni birlashtiradi."
              },
              {
                "en": "Introducing palliative care early in severe illness significantly improves family well-being.",
                "uz": "Og'ir kasallikda palliativ yordamni erta boshlash oilaning ruhiy farovonligini sezilarli darajada yaxshilaydi."
              }
            ]
          },
          {
            "id": "c1-med-24",
            "word": "Immunosuppressant",
            "pos": "noun",
            "phonetic": "/ˌɪmjʊnəʊsəˈpresənt/",
            "uzbek": "Immunodepressant (immunitetni pasaytiruvchi dori)",
            "definition": "A drug that suppresses or weakens the immune system, typically prescribed to prevent organ transplant rejection.",
            "examples": [
              {
                "en": "Organ transplant recipients must take lifelong immunosuppressants to prevent tissue rejection.",
                "uz": "A'zo ko'chirib o'tkazilgan bemorlar to'qima rad etilishining oldini olish uchun umrbod immunosupressantlar qabul qilishlari shart."
              },
              {
                "en": "Taking heavy immunosuppressants renders individuals particularly vulnerable to opportunistic infections.",
                "uz": "Kuchli immunosupressantlarni qabul qilish insonni ikkilamchi infeksiyalarga ayniqsa zaif qilib qo'yadi."
              },
              {
                "en": "Dosages of immunosuppressants must be calibrated regularly via therapeutic blood monitoring.",
                "uz": "Immunodepressantlarning dozalari doimiy qon tahlillari orqali muntazam ravishda sozlanishi kerak."
              }
            ]
          },
          {
            "id": "c1-med-25",
            "word": "Contraindication",
            "pos": "noun",
            "phonetic": "/ˌkɒntrəˌɪndɪˈkeɪʃən/",
            "uzbek": "Qo'llash mumkin bo'lmagan holat (tibbiy qarshi ko'rsatma)",
            "definition": "A specific situation or condition in which a drug, procedure, or surgery should not be used because it may be harmful.",
            "examples": [
              {
                "en": "Severe gastrointestinal bleeding is an absolute contraindication for aspirin therapy.",
                "uz": "Oshqozon-ichakdan qon ketishi aspirin bilan davolash uchun mutlaq qarshi ko'rsatma hisoblanadi."
              },
              {
                "en": "The pharmaceutical leaflet outlines clinical contraindications for pregnant women.",
                "uz": "Dori vositasi yo'riqnomasida homilador ayollar uchun klinik qarshi ko'rsatmalar batafsil bayon etilgan."
              },
              {
                "en": "Before administering spinal anaesthesia, physicians verify there are no hidden contraindications.",
                "uz": "Orqa miya anesteziyasini qo'llashdan oldin shifokorlar hech qanday yashirin qarshi ko'rsatmalar yo'qligini tekshiradilar."
              }
            ]
          },
          {
            "id": "c1-med-26",
            "word": "Epidemiology",
            "pos": "noun",
            "phonetic": "/ˌepɪˌdiːmiˈɒlədʒi/",
            "uzbek": "Epidemiologiya (kasalliklar tarqalishini o'rganuvchi fan)",
            "definition": "The branch of medicine that deals with the incidence, distribution, and possible control of diseases.",
            "examples": [
              {
                "en": "Researchers in epidemiology tracked the global transmission vectors of the influenza strain.",
                "uz": "Epidemiologiya bo'yicha tadqiqotchilar gripp shtammining global tarqalish yo'llarini kuzatib bordilar."
              },
              {
                "en": "Field epidemiology identified contaminated drinking wells as the outbreak source.",
                "uz": "Dala epidemiologiyasi ifloslangan ichimlik quduqlarini kasallik tarqalish manbai deb aniqladi."
              },
              {
                "en": "Data-driven epidemiology guides public vaccination programs and containment strategies.",
                "uz": "Ma'lumotlarga asoslangan epidemiologiya aholini emlash dasturlari va cheklov choralarini yo'naltiradi."
              }
            ]
          },
          {
            "id": "c1-med-27",
            "word": "Comorbidity",
            "pos": "noun",
            "phonetic": "/ˌkəʊmɔːˈbɪdəti/",
            "uzbek": "Yondosh kasallik (bir vaqtda bir nechta kasallikning mavjudligi)",
            "definition": "The simultaneous presence of two or more chronic diseases or conditions in a patient.",
            "examples": [
              {
                "en": "Cardiovascular comorbidity complicates the clinical management of diabetic patients.",
                "uz": "Yurak-qon tomir yondosh kasalliklari diabetik bemorlarni klinik davolashni murakkablashtiradi."
              },
              {
                "en": "Geriatric medicine frequently addresses multiple chronic comorbidities simultaneously.",
                "uz": "Geriatriya tibbiyoti tez-tez bir vaqtning o'zida bir nechta surunkali yondosh kasalliklarni davolaydi."
              },
              {
                "en": "Patients presenting with respiratory comorbidity required elevated clinical monitoring.",
                "uz": "Nafas olish yo'llarida yondosh kasalligi bo'lgan bemorlar kuchaytirilgan klinik nazoratni talab qildi."
              }
            ]
          },
          {
            "id": "c1-med-28",
            "word": "Intubation",
            "pos": "noun",
            "phonetic": "/ˌɪntjuːˈbeɪʃən/",
            "uzbek": "Intubatsiya (nafas yo'liga naycha kiritish)",
            "definition": "The insertion of a flexible plastic tube into the trachea to maintain an open airway or administer medication.",
            "examples": [
              {
                "en": "Critical oxygen desaturation necessitated immediate emergency tracheal intubation.",
                "uz": "Kislorodning keskin tushib ketishi zudlik bilan shoshilinch traxeya intubatsiyasini talab qildi."
              },
              {
                "en": "The anaesthetist achieved smooth intubation before proceeding with general thoracic surgery.",
                "uz": "Anesteziolog umumiy ko'krak qafasi jarrohligini boshlashdan oldin xotirjam intubatsiyani amalga oshirdi."
              },
              {
                "en": "Patients undergoing mechanical ventilation require skilled care during intubation and extubation.",
                "uz": "Mexanik sun'iy nafas oldirishdagi bemorlar intubatsiya va ekstubatsiya paytida malakali parvarishga muhtoj."
              }
            ]
          },
          {
            "id": "c1-med-29",
            "word": "Inoculation",
            "pos": "noun",
            "phonetic": "/ɪˌnɒkjʊˈleɪʃən/",
            "uzbek": "Emlash, vaksina kiritish",
            "definition": "The action of inoculating or of being inoculated; vaccination against an infectious disease.",
            "examples": [
              {
                "en": "Mass inoculation campaigns successfully wiped out endemic smallpox across the hemisphere.",
                "uz": "Ommaviy emlash kampaniyalari qit'ada endemik chechak kasalligini muvaffaqiyatli yo'q qildi."
              },
              {
                "en": "Children receive mandatory inoculations before entering state primary schools.",
                "uz": "Bolalar davlat boshlang'ich maktablariga kirishdan oldin majburiy emlashlarni oladilar."
              },
              {
                "en": "Annual inoculation against seasonal influenza is recommended for vulnerable groups.",
                "uz": "Zaif guruhlar uchun mavsumiy grippga qarshi har yili emlanish tavsiya etiladi."
              }
            ]
          },
          {
            "id": "c1-med-30",
            "word": "Remission",
            "pos": "noun",
            "phonetic": "/rɪˈmɪʃən/",
            "uzbek": "Remissiya (kasallik alomatlarining vaqtincha yoki to'liq yo'qolishi)",
            "definition": "A temporary or permanent diminution of the severity of a disease or pain.",
            "examples": [
              {
                "en": "After six rigorous rounds of immunotherapy, the patient entered complete clinical remission.",
                "uz": "Olti bosqichli qat'iy immunoterapiyadan so'ng, bemor to'liq klinik remissiyaga kirdi."
              },
              {
                "en": "Maintaining long-term disease remission is the central objective of autoimmune treatments.",
                "uz": "Kasallikning uzoq muddatli remissiyasini saqlab qolish otoimmun davolashning asosiy maqsadidir."
              },
              {
                "en": "Regular blood tests verified that leukemia stayed in total molecular remission.",
                "uz": "Muntazam qon tahlillari leykemiyaning to'liq molekulyar remissiyada qolganini tasdiqladi."
              }
            ]
          }
        ]
      },
      {
        "id": "c1-tech",
        "title": "Unit 06: Artificial Intelligence & Future Tech (Sun'iy intellekt va kelajak texnologiyalari)",
        "unitNumber": 6,
        "category": "Technology & AI",
        "icon": "fa-microchip",
        "color": "from-violet-700 to-purple-900",
        "cambridge_source": "Cambridge English Vocabulary in Use Advanced, Unit 56: Technology and its impact & Unit 57: Technology of the future",
        "words": [
          {
            "id": "c1-tech-1",
            "word": "Artificial intelligence",
            "pos": "noun",
            "phonetic": "/ˌɑːtɪfɪʃəl ɪnˈtelɪdʒəns/",
            "uzbek": "Sun'iy intellekt (SI)",
            "definition": "The development of computer systems able to perform tasks normally requiring human intelligence.",
            "examples": [
              {
                "en": "Scientists working in artificial intelligence are hoping to create neural models resembling human brains.",
                "uz": "Sun'iy intellekt sohasida ishlayotgan olimlar inson miyasiga o'xshash neyron modellarni yaratishga umid qilmoqdalar."
              },
              {
                "en": "Artificial intelligence powers instantaneous multilingual translation and voice recognition.",
                "uz": "Sun'iy intellekt bir zumda ko'p tilli tarjima va ovozni aniqlash tizimlarini quvvatlaydi."
              },
              {
                "en": "Ethicists debate how artificial intelligence will transform governance and judicial decision-making.",
                "uz": "Etika mutaxassislari sun'iy intellekt boshqaruv va sud qarorlarini qanday o'zgartirishi haqida bahslashmoqda."
              }
            ]
          },
          {
            "id": "c1-tech-2",
            "word": "Biotechnology",
            "pos": "noun",
            "phonetic": "/ˌbaɪəʊtekˈnɒlədʒi/",
            "uzbek": "Biotexnologiya",
            "definition": "The exploitation of biological processes for industrial and genetic purposes, such as developing disease-resistant crops.",
            "examples": [
              {
                "en": "Biotechnology companies are experimenting with new disease-resistant crops for agricultural farmers.",
                "uz": "Biotexnologiya kompaniyalari fermerlar uchun kasalliklarga chidamli yangi ekinlar ustida tajriba o'tkazmoqda."
              },
              {
                "en": "Advances in medical biotechnology enable the synthesis of life-saving synthetic insulin.",
                "uz": "Tibbiy biotexnologiyadagi yutuqlar hayotni saqlab qoluvchi sintetik insulin sintezini amalga oshirish imkonini beradi."
              },
              {
                "en": "Investment poured into industrial biotechnology to engineer biodegradable plastics.",
                "uz": "Biologik parchalanadigan plastmassalarni yaratish uchun sanoat biotexnologiyasiga investitsiyalar oqib keldi."
              }
            ]
          },
          {
            "id": "c1-tech-3",
            "word": "Ergonomics",
            "pos": "noun",
            "phonetic": "/ˌɜːɡəˈnɒmɪks/",
            "uzbek": "Ergonomika (ish joyini inson qulayligi va xavfsizligiga moslashtirish)",
            "definition": "The study of people's efficiency in their working environment and designing equipment to maximize comfort.",
            "examples": [
              {
                "en": "This vehicle features ergonomically designed seats engineered to provide maximum postural support.",
                "uz": "Ushbu avtomobil qomatni maksimal darajada qo'llab-quvvatlash uchun ishlab chiqilgan ergonomik o'rindiqlarga ega."
              },
              {
                "en": "Office ergonomics prevents chronic repetitive strain injuries among computer programmers.",
                "uz": "Ofis ergonomikasi dasturchilar o'rtasida surunkali takroriy zo'riqish jarohatlarining oldini oladi."
              },
              {
                "en": "The modern keyboard was redesigned using ergonomic research to reduce wrist strain.",
                "uz": "Zamonaviy klaviatura bilakdagi zo'riqishni kamaytirish uchun ergonomik tadqiqotlar asosida qayta ishlab chiqilgan."
              }
            ]
          },
          {
            "id": "c1-tech-4",
            "word": "Nanotechnology",
            "pos": "noun",
            "phonetic": "/ˌnænəʊtekˈnɒlədʒi/",
            "uzbek": "Nanotexnologiya",
            "definition": "The branch of technology that deals with manipulating individual atoms and molecules to create microscopic devices.",
            "examples": [
              {
                "en": "Nanotechnology allows the production of extremely small machines operating at atomic scale.",
                "uz": "Nanotexnologiya atom miqyosida ishlaydigan o'ta kichik mashinalarni ishlab chiqarish imkonini beradi."
              },
              {
                "en": "Medical researchers harness nanotechnology to deliver targeted anticancer drugs directly into tumours.",
                "uz": "Tibbiyot tadqiqotchilari saratonga qarshi dorilarni to'g'ridan-to'g'ri o'smaga yetkazish uchun nanotexnologiyadan foydalanadilar."
              },
              {
                "en": "Materials engineered through nanotechnology boast unmatched tensile strength and lightness.",
                "uz": "Nanotexnologiya orqali yaratilgan materiallar tengsiz mustahkamlik va yengillik bilan maqtana oladi."
              }
            ]
          },
          {
            "id": "c1-tech-5",
            "word": "Human genome",
            "pos": "noun",
            "phonetic": "/ˌhjuːmən ˈdʒiːnəʊm/",
            "uzbek": "Inson genomi (odamning barcha genlari xaritasi)",
            "definition": "The complete set of genetic information encoded within human DNA.",
            "examples": [
              {
                "en": "Gene therapy can eradicate hereditary diseases thanks to our complete mapping of the human genome.",
                "uz": "Inson genomining to'liq xaritasi tuzilganligi tufayli gen terapiyasi irsiy kasalliklarni butunlay yo'q qila oladi."
              },
              {
                "en": "Sequencing the entire human genome cost billions initially but now takes mere hours.",
                "uz": "Butun inson genomini ketma-ket aniqlash dastlab milliardlab turgan bo'lsa, hozirda atigi bir necha soat vaqt oladi."
              },
              {
                "en": "Comparative studies of the human genome reveal deep evolutionary links between populations.",
                "uz": "Inson genomining qiyosiy tadqiqotlari aholi guruhlari o'rtasidagi chuqur evolyutsion aloqalarni ochib beradi."
              }
            ]
          },
          {
            "id": "c1-tech-6",
            "word": "Gene therapy",
            "pos": "noun",
            "phonetic": "/dʒiːn ˈθerəpi/",
            "uzbek": "Gen terapiyasi (kasalliklarni genlarni o'zgartirish orqali davolash)",
            "definition": "The medical technique that modifies a person's genes to treat or cure genetic diseases.",
            "examples": [
              {
                "en": "Groundbreaking gene therapy has restored vision in patients suffering from congenital blindness.",
                "uz": "Inqilobiy gen terapiyasi tug'ma ko'rlikdan aziyat chekayotgan bemorlarda ko'rish qobiliyatini tikladi."
              },
              {
                "en": "Clinical gene therapy trials showed promising outcomes in replacing defective muscular genes.",
                "uz": "Klinik gen terapiyasi sinovlari nuqsonli mushak genlarini almashtirishda umidli natijalarni ko'rsatdi."
              },
              {
                "en": "Regulatory authorities approved the first commercial gene therapy for pediatric leukemia.",
                "uz": "Nazorat organlari bolalar leykemiyasi uchun birinchi tijorat gen terapiyasini tasdiqladilar."
              }
            ]
          },
          {
            "id": "c1-tech-7",
            "word": "Genetic engineering",
            "pos": "noun",
            "phonetic": "/dʒəˈnetɪk ˌendʒɪˈnɪərɪŋ/",
            "uzbek": "Genetik muhandislik",
            "definition": "The deliberate modification of the characteristics of an organism by manipulating its genetic material.",
            "examples": [
              {
                "en": "Genetic engineering allows biologists to alter crops so that they withstand severe droughts.",
                "uz": "Gen muhandisligi biologlarga ekinlarni qattiq qurg'oqchilikka chidamli bo'ladigan qilib o'zgartirish imkonini beradi."
              },
              {
                "en": "Ethical concerns surround the application of genetic engineering in human reproductive cells.",
                "uz": "Genetik muhandislikning inson reproduktiv hujayralarida qo'llanilishi atrofida axloqiy xavotirlar mavjud."
              },
              {
                "en": "Modern vaccines were rapidly synthesized through precision molecular genetic engineering.",
                "uz": "Zamonaviy vaksinalar aniq molekulyar genetik muhandislik orqali tezda sintez qilindi."
              }
            ]
          },
          {
            "id": "c1-tech-8",
            "word": "Envisage",
            "pos": "verb",
            "phonetic": "/ɪnˈvɪzɪdʒ/",
            "uzbek": "Ko'z oldiga keltirmoq, kelajakda tasavvur qilmoq",
            "definition": "To contemplate or conceive as a future possibility or desirable situation.",
            "examples": [
              {
                "en": "Futurists envisage a world where fully autonomous vehicles eliminate metropolitan traffic collisions.",
                "uz": "Futuristlar to'liq avtonom transport vositalari megapolisdagi to'qnashuvlarni butunlay yo'q qiladigan dunyoni tasavvur qilishadi."
              },
              {
                "en": "We do not envisage any immediate disruption to our cloud infrastructure during the software upgrade.",
                "uz": "Dasturiy ta'minotni yangilash paytida biz bulutli infratuzilmamizda biron bir to'xtashni kutmayapmiz."
              },
              {
                "en": "Engineers envisage constructing floating oceanic solar grids to power coastal cities.",
                "uz": "Muhandislar qirg'oq bo'yidagi shaharlarni quvvatlantirish uchun suzuvchi okean quyosh tarmoqlarini qurishni rejalashtirmoqdalar."
              }
            ]
          },
          {
            "id": "c1-tech-9",
            "word": "Cloning",
            "pos": "noun",
            "phonetic": "/ˈkləʊnɪŋ/",
            "uzbek": "Klonlash, genetik jihatdan bir xil nusxa ko'chirish",
            "definition": "The propagation of genetically identical organisms from a single progenitor cell.",
            "examples": [
              {
                "en": "The cloning of Dolly the sheep in 1996 marked an indelible landmark in scientific history.",
                "uz": "1996 yilda Dolli qo'zichoqning klonlanishi ilmiy tarixda o'chmas iz qoldirdi."
              },
              {
                "en": "International agreements strictly forbid the reproductive cloning of human beings.",
                "uz": "Xalqaro shartnomalar insonni reproduktiv klonlashni qat'iyan taqiqlaydi."
              },
              {
                "en": "Therapeutic cloning holds immense potential for generating patient-matched transplant organs.",
                "uz": "Terapevtik klonlash bemorga mos keluvchi ko'chirib o'tkaziladigan a'zolarni yaratish uchun ulkan salohiyatga ega."
              }
            ]
          },
          {
            "id": "c1-tech-10",
            "word": "Algorithm",
            "pos": "noun",
            "phonetic": "/ˈælɡərɪðəm/",
            "uzbek": "Algoritm",
            "definition": "A step-by-step set of operations to be performed by a computer to solve a specific problem.",
            "examples": [
              {
                "en": "Machine learning algorithms learn patterns by analyzing millions of data points.",
                "uz": "Mashinaviy o'rganish algoritmlari millionlab ma'lumotlar nuqtalarini tahlil qilish orqali qonuniyatlarni o'rganadi."
              },
              {
                "en": "Search engine algorithms rank web pages based on relevance and user engagement metrics.",
                "uz": "Qidiruv tizimi algoritmlari veb-sahifalarni dolzarblik va foydalanuvchilarning faolligi ko'rsatkichlari bo'yicha saralaydi."
              },
              {
                "en": "The cryptographic encryption algorithm protects financial data from unauthorized decryption.",
                "uz": "Kriptografik shifrlash algoritmi moliyaviy ma'lumotlarni ruxsatsiz ochishdan himoya qiladi."
              }
            ]
          },
          {
            "id": "c1-tech-11",
            "word": "Autonomous",
            "pos": "adjective",
            "phonetic": "/ɔːˈtɒnəməs/",
            "uzbek": "Avtonom, o'z-o'zini boshqaradigan",
            "definition": "Acting independently or having the freedom and capability to do so without human guidance.",
            "examples": [
              {
                "en": "Autonomous drones deliver vital medications to inaccessible mountainous hamlets.",
                "uz": "Avtonom dronlar borish qiyin bo'lgan tog'li qishloqlarga hayotiy muhim dori-darmonlarni yetkazib beradi."
              },
              {
                "en": "Self-driving electric cars rely on autonomous navigation sensors to avoid road obstacles.",
                "uz": "O'z-o'zini boshqaradigan elektr avtomobillar yo'ldagi to'siqlardan qochish uchun avtonom navigatsiya datchiklariga tayanadi."
              },
              {
                "en": "Robotic warehouse systems operate in complete autonomous coordination around the clock.",
                "uz": "Omborxonalardagi robotlashtirilgan tizimlar kechayu-kunduz to'liq avtonom muvofiqlashtirishda ishlaydi."
              }
            ]
          },
          {
            "id": "c1-tech-12",
            "word": "Cybersecurity",
            "pos": "noun",
            "phonetic": "/ˈsaɪbəsɪˌkjʊərəti/",
            "uzbek": "Kiberxavfsizlik",
            "definition": "The state of being protected against the criminal or unauthorized use of electronic data.",
            "examples": [
              {
                "en": "Global enterprises invest billions in cybersecurity to repel sophisticated ransomware attacks.",
                "uz": "Global korxonalar murakkab to'lov talab qiluvchi dasturiy hujumlarni qaytarish uchun kiberxavfsizlikka milliardlab dollar sarmoya kiritadilar."
              },
              {
                "en": "A catastrophic lapse in cybersecurity exposed the credentials of millions of customers.",
                "uz": "Kiberxavfsizlikdagi ayanchli xatolik millionlab mijozlarning ma'lumotlarini oshkor qilib qo'ydi."
              },
              {
                "en": "National defense strategies increasingly prioritize defensive cybersecurity infrastructures.",
                "uz": "Milliy mudofaa strategiyalari mudofaa kiberxavfsizlik infratuzilmasiga tobora ko'proq ustuvorlik bermoqda."
              }
            ]
          },
          {
            "id": "c1-tech-13",
            "word": "Neural network",
            "pos": "noun",
            "phonetic": "/ˈnjʊərəl ˈnetwɜːk/",
            "uzbek": "Neyron tarmog'i",
            "definition": "A computer system modeled on the human brain and nervous system, designed to recognize complex patterns.",
            "examples": [
              {
                "en": "Deep convolutional neural networks achieve superhuman accuracy in radiology image diagnosis.",
                "uz": "Chuqur neyron tarmoqlari rentgen tasvirlarini tashxislashda insondan yuqori aniqlikka erishmoqda."
              },
              {
                "en": "The generative neural network produces photorealistic images from plain natural language descriptions.",
                "uz": "Generativ neyron tarmog'i oddiy tabiiy til tavsiflaridan fotorealistik tasvirlar yaratadi."
              },
              {
                "en": "Training a massive neural network requires enormous computing power and specialized graphics processors.",
                "uz": "Katta neyron tarmog'ini o'qitish ulkan hisoblash quvvati va maxsus grafik protsessorlarni talab qiladi."
              }
            ]
          },
          {
            "id": "c1-tech-14",
            "word": "Quantum computing",
            "pos": "noun",
            "phonetic": "/ˈkwɒntəm kəmˈpjuːtɪŋ/",
            "uzbek": "Kvant kompyuteri / kvant hisoblashlari",
            "definition": "Computation that utilizes quantum mechanics principles like superposition to solve problems beyond classical computers.",
            "examples": [
              {
                "en": "Quantum computing promises to simulate molecular interactions and crack contemporary encryption.",
                "uz": "Kvant hisoblashlari molekulyar o'zaro ta'sirlarni modellashtirish va zamonaviy shifrlashni buzishni va'da qilmoqda."
              },
              {
                "en": "Tech giants are locked in an intense race to demonstrate practical quantum computing supremacy.",
                "uz": "Texnologik gigantlar amaliy kvant hisoblash ustunligini ko'rsatish uchun shiddatli poygaga kirishgan."
              },
              {
                "en": "Quantum computing harnesses quantum bits (qubits) capable of simultaneously holding zero and one.",
                "uz": "Kvant hisoblash bir vaqtning o'zida nol va birni ushlab turishga qodir bo'lgan kvant bitlari (kubitlar) dan foydalanadi."
              }
            ]
          },
          {
            "id": "c1-tech-15",
            "word": "Augmented reality",
            "pos": "noun",
            "phonetic": "/ɔːɡˌmentɪd riˈæləti/",
            "uzbek": "To'ldirilgan reallik (AR)",
            "definition": "An interactive experience where computer-generated perceptual information enhances real-world environments.",
            "examples": [
              {
                "en": "Surgeons utilize augmented reality smart glasses to superimpose 3D anatomy onto patients.",
                "uz": "Jarrohlar 3D anatomiyani bemorlar ustiga aks ettirish uchun to'ldirilgan reallik ko'zoynaklaridan foydalanadilar."
              },
              {
                "en": "Industrial technicians inspect machinery using augmented reality overlays that display repair steps.",
                "uz": "Sanoat texniklari ta'mirlash bosqichlarini ko'rsatadigan to'ldirilgan reallik qatlamlari yordamida mashinalarni tekshiradilar."
              },
              {
                "en": "Augmented reality blends virtual sensory enhancements seamlessly with the physical surroundings.",
                "uz": "To'ldirilgan reallik virtual hissiy elementlarni jismoniy muhit bilan uzluksiz uyg'unlashtiradi."
              }
            ]
          },
          {
            "id": "c1-tech-16",
            "word": "Virtual reality",
            "pos": "noun",
            "phonetic": "/ˈvɜːtʃuəl riˈæləti/",
            "uzbek": "Virtual reallik (VR)",
            "definition": "The computer-generated simulation of a three-dimensional image or environment that can be interacted with.",
            "examples": [
              {
                "en": "Commercial pilot trainees undergo simulated emergency landings within fully immersive virtual reality cockpits.",
                "uz": "Tijorat uchuvchi-kursantlari to'liq qamrab oluvchi virtual reallik kabinalarida favqulodda qo'nish simulyatsiyasidan o'tadilar."
              },
              {
                "en": "Virtual reality headsets provide captivating educational field trips to ancient Roman monuments.",
                "uz": "Virtual reallik garnituralari qadimgi Rim obidalariga qiziqarli ta'limiy ekskursiyalarni taqdim etadi."
              },
              {
                "en": "The psychology clinic utilizes virtual reality exposure to treat acute phobias and PTSD.",
                "uz": "Psixologik klinika o'tkir fobiyalar va travmadan keyingi sindromni davolash uchun virtual reallikdan foydalanadi."
              }
            ]
          },
          {
            "id": "c1-tech-17",
            "word": "Machine learning",
            "pos": "noun",
            "phonetic": "/məˈʃiːn ˈlɜːnɪŋ/",
            "uzbek": "Mashinaviy o'rganish",
            "definition": "The use and development of computer systems able to learn and adapt without following explicit instructions.",
            "examples": [
              {
                "en": "Machine learning models analyze credit card purchase patterns to detect unauthorized fraudulent charges.",
                "uz": "Mashinaviy o'rganish modellari ruxsatsiz firibgarlik to'lovlarini aniqlash uchun karta xaridlari naqshlarini tahlil qiladi."
              },
              {
                "en": "The streaming service optimizes personalized music recommendations through unsupervised machine learning.",
                "uz": "Striming xizmati nazoratsiz mashinaviy o'rganish orqali shaxsiy musiqa tavsiyalarini optimallashtiradi."
              },
              {
                "en": "Predictive maintenance based on machine learning saves factories millions in downtime.",
                "uz": "Mashinaviy o'rganishga asoslangan profilaktik xizmat ko'rsatish fabrikalarni bekor turib qolishdagi millionlab xarajatlardan asraydi."
              }
            ]
          },
          {
            "id": "c1-tech-18",
            "word": "Big data",
            "pos": "noun",
            "phonetic": "/bɪɡ ˈdeɪtə/",
            "uzbek": "Katta ma'lumotlar (katta hajmdagi raqamli ma'lumotlar to'plami)",
            "definition": "Extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations.",
            "examples": [
              {
                "en": "Retailers harness big data analytics to anticipate seasonal consumer buying patterns.",
                "uz": "Chakana sotuvchilar mavsumiy iste'molchilar xaridi modellarini oldindan bilish uchun katta ma'lumotlar tahlilidan foydalanadilar."
              },
              {
                "en": "Epidemiologists deployed big data tracking to isolate infectious disease spread during the pandemic.",
                "uz": "Epidemiologlar pandemiya paytida yuqumli kasallik tarqalishini aniqlash uchun katta ma'lumotlar monitoringini ishga soldilar."
              },
              {
                "en": "Handling unstructured big data requires specialized distributed database architectures.",
                "uz": "Tizimsiz katta ma'lumotlarni qayta ishlash maxsus taqsimlangan ma'lumotlar bazasi arxitekturasini talab qiladi."
              }
            ]
          },
          {
            "id": "c1-tech-19",
            "word": "Cloud computing",
            "pos": "noun",
            "phonetic": "/klaʊd kəmˈpjuːtɪŋ/",
            "uzbek": "Bulutli hisoblash texnologiyalari",
            "definition": "The practice of using a network of remote servers hosted on the Internet to store, manage, and process data.",
            "examples": [
              {
                "en": "Migrating to enterprise cloud computing drastically trimmed our physical hardware maintenance overhead.",
                "uz": "Korporativ bulutli hisoblashga o'tish bizning jismoniy uskunalarni saqlash xarajatlarimizni sezilarli darajada kamaytirdi."
              },
              {
                "en": "Scalable cloud computing enables digital startups to serve millions of global users effortlessly.",
                "uz": "Moslashuvchan bulutli texnologiyalar raqamli startaplarga millionlab global foydalanuvchilarga osonlikcha xizmat ko'rsatish imkonini beradi."
              },
              {
                "en": "Security compliance and data residency remain crucial factors in selecting a cloud computing provider.",
                "uz": "Xavfsizlik talablariga rioya qilish va ma'lumotlarning saqlanish joyi bulut provayderini tanlashda muhim omil bo'lib qolmoqda."
              }
            ]
          },
          {
            "id": "c1-tech-20",
            "word": "Internet of things",
            "pos": "noun",
            "phonetic": "/ˈɪntənet əv θɪŋz/",
            "uzbek": "Buyumlar interneti (IoT)",
            "definition": "The interconnection via the Internet of computing devices embedded in everyday objects.",
            "examples": [
              {
                "en": "The Internet of Things connects domestic appliances, thermostats, and lights into a smart home network.",
                "uz": "Buyumlar interneti maishiy texnika, termostat va chiroqlarni yagona aqlli uy tarmog'iga ulaydi."
              },
              {
                "en": "Smart agriculture relies on Internet of Things sensors to monitor soil moisture and nutrient levels.",
                "uz": "Aqlli qishloq xo'jaligi tuproq namligi va ozuqa moddalari miqdorini kuzatish uchun IoT datchiklariga tayanadi."
              },
              {
                "en": "Securing Internet of Things devices is difficult because many lack built-in cryptographic protection.",
                "uz": "IoT qurilmalarining xavfsizligini ta'minlash qiyin, chunki ularning ko'pchiligida o'rnatilgan shifrlash himoyasi yo'q."
              }
            ]
          },
          {
            "id": "c1-tech-21",
            "word": "Biometrics",
            "pos": "noun",
            "phonetic": "/ˌbaɪəʊˈmetrɪks/",
            "uzbek": "Biometriya (barmoq izi, yuz tuzilishi kabi biologik identifikatsiya)",
            "definition": "The measurement and analysis of unique human characteristics, used especially for identification and authentication.",
            "examples": [
              {
                "en": "International airports increasingly employ facial biometrics to speed up border immigration checks.",
                "uz": "Xalqaro aeroportlar chegara immigratsiya tekshiruvlarini tezlashtirish uchun yuz biometriyasidan tobora ko'proq foydalanmoqda."
              },
              {
                "en": "Mobile banking apps utilize biometrics like fingerprints to verify customer transactions securely.",
                "uz": "Mobil bank ilovalari mijozlar operatsiyalarini xavfsiz tasdiqlash uchun barmoq izi kabi biometriyadan foydalanadi."
              },
              {
                "en": "Critics express profound privacy concerns regarding the unauthorized commercial harvesting of biometrics.",
                "uz": "Tanqidchilar biometrik ma'lumotlarning ruxsatsiz tijoriy to'planishi bo'yicha jiddiy shaxsiy daxlsizlik xavotirlarini bildirmoqdalar."
              }
            ]
          },
          {
            "id": "c1-tech-22",
            "word": "Automation",
            "pos": "noun",
            "phonetic": "/ˌɔːtəˈmeɪʃən/",
            "uzbek": "Avtomatlashtirish",
            "definition": "The use of largely automatic equipment in a system of manufacturing or other administrative process.",
            "examples": [
              {
                "en": "Industrial automation displaced routine manual labour while creating high-skill engineering positions.",
                "uz": "Sanoatni avtomatlashtirish oddiy jismoniy mehnatni siqib chiqardi va yuqori malakali muhandislik ish o'rinlarini yaratdi."
              },
              {
                "en": "Robotic process automation handles repetitive bureaucratic paperwork with zero human error.",
                "uz": "Robotlashtirilgan jarayonlarni avtomatlashtirish takrorlanuvchi byurokratik hujjatlarni inson xatolarisiz bajaradi."
              },
              {
                "en": "Economists debate whether accelerating workplace automation will cause structural unemployment.",
                "uz": "Iqtisodchilar ish joylarini avtomatlashtirishning tezlashishi tarkibiy ishsizlikka olib keladimi yoki yo'qmi deb bahslashmoqda."
              }
            ]
          },
          {
            "id": "c1-tech-23",
            "word": "Encryption",
            "pos": "noun",
            "phonetic": "/ɪnˈkrɪpʃən/",
            "uzbek": "Shifrlash (ma'lumotlarni maxfiy kodga aylantirish)",
            "definition": "The process of converting information or data into a code, especially to prevent unauthorized access.",
            "examples": [
              {
                "en": "End-to-end messaging encryption ensures that communications remain readable solely by the sender and recipient.",
                "uz": "Xabarlarni to'liq shifrlash suhbatlarning faqat jo'natuvchi va qabul qiluvchi tomonidan o'qilishini ta'minlaydi."
              },
              {
                "en": "Government security agencies argue that military-grade encryption hampers lawful anti-terror surveillance.",
                "uz": "Davlat xavfsizlik organlari harbiy darajadagi shifrlash qonuniy aksilterror kuzatuviga to'sqinlik qilishini ta'kidlamoqda."
              },
              {
                "en": "Robust cryptographic encryption protects financial card credentials during online checkout.",
                "uz": "Ishonchli kriptografik shifrlash onlayn to'lov paytida moliyaviy karta ma'lumotlarini himoya qiladi."
              }
            ]
          },
          {
            "id": "c1-tech-24",
            "word": "Disruptive technology",
            "pos": "noun",
            "phonetic": "/dɪsˈrʌptɪv tekˈnɒlədʒi/",
            "uzbek": "Bozorni tubdan o'zgartiruvchi texnologiya",
            "definition": "An innovation that significantly alters the way that consumers, industries, or businesses operate, displacing established systems.",
            "examples": [
              {
                "en": "Smartphones proved to be a disruptive technology that decimated camera and standalone GPS manufacturers.",
                "uz": "Smartfonlar fotoapparat va alohida GPS ishlab chiqaruvchilarni yo'qqa chiqargan inqilobiy texnologiya bo'lib chiqdi."
              },
              {
                "en": "Venture investors search for disruptive technologies that unlock untapped multi-billion dollar markets.",
                "uz": "Venchur investorlari foydalanilmagan milliardlab dollarlik bozorlarni ochuvchi tubdan yangi texnologiyalarni qidiradilar."
              },
              {
                "en": "Incumbent market leaders frequently struggle to adapt when challenged by cheaper disruptive technologies.",
                "uz": "Bozor yetakchilari arzonroq inqilobiy texnologiyalar tahdid solganda ko'pincha moslashishga qiynaladilar."
              }
            ]
          },
          {
            "id": "c1-tech-25",
            "word": "Predictive analytics",
            "pos": "noun",
            "phonetic": "/prɪˈdɪktɪv ˌænəˈlɪtɪks/",
            "uzbek": "Bashoratli tahlil (kelajakni modellashtirish)",
            "definition": "The branch of advanced analytics used to make predictions about unknown future events based on historical data.",
            "examples": [
              {
                "en": "Airlines employ predictive analytics to optimize seat pricing and schedule aircraft maintenance.",
                "uz": "Aviakompaniyalar chipta narxlarini optimallashtirish va samolyotlarga texnik xizmat ko'rsatishni rejalashtirish uchun prognoz tahlilidan foydalanadilar."
              },
              {
                "en": "Police departments utilize predictive analytics to anticipate high-crime zones and allocate patrols.",
                "uz": "Politsiya bo'linmalari jinoyatchilik yuqori bo'lgan hududlarni oldindan bilish va patrullarni taqsimlash uchun prognoz tahlilidan foydalanadi."
              },
              {
                "en": "Healthcare systems leverage predictive analytics to identify patients vulnerable to hospital readmission.",
                "uz": "Sog'liqni saqlash tizimlari kasalxonaga qayta yotqizilishi mumkin bo'lgan bemorlarni aniqlash uchun prognozli tahlildan foydalanadi."
              }
            ]
          },
          {
            "id": "c1-tech-26",
            "word": "Bandwidth",
            "pos": "noun",
            "phonetic": "/ˈbændwɪdθ/",
            "uzbek": "Kanal o'tkazuvchanligi (ma'lumot uzatish tezligi/hajmi)",
            "definition": "The maximum data transfer rate of a network or internet connection in a given amount of time.",
            "examples": [
              {
                "en": "High-definition video conferencing demands substantial internet bandwidth and minimal latency.",
                "uz": "Yuqori sifatli video konferentsiya katta internet o'tkazish qobiliyatini va minimal kechikishni talab qiladi."
              },
              {
                "en": "Fibre-optic cables offer virtually unlimited bandwidth compared to traditional copper wires.",
                "uz": "Optik tolali kabellar an'anaviy mis simlarga nisbatan cheksiz deyarli o'tkazish quvvatini taklif etadi."
              },
              {
                "en": "During peak evening hours, local network congestion can severely throttle available download bandwidth.",
                "uz": "Kechki tirband soatlarda mahalliy tarmoq zichligi yuklab olish tezligini sezilarli darajada pasaytirishi mumkin."
              }
            ]
          },
          {
            "id": "c1-tech-27",
            "word": "Latency",
            "pos": "noun",
            "phonetic": "/ˈleɪtənsi/",
            "uzbek": "Kechikish vaqti (signal uzatishdagi oraliq)",
            "definition": "The delay before a transfer of data begins following an instruction for its transfer.",
            "examples": [
              {
                "en": "Fifth-generation cellular networks drastically diminish latency, making remote telesurgery feasible.",
                "uz": "Beshinchi avlod uyali aloqa tarmoqlari kechikishni keskin kamaytirib, masofaviy jarrohlikni amalga oshirish imkonini beradi."
              },
              {
                "en": "Financial high-frequency traders pay fortunes to shave microseconds of latency off transaction lines.",
                "uz": "Yuqori chastotali moliya treyderlari tranzaksiya liniyalaridagi mikroyaniyalik kechikishlarni qisqartirish uchun katta pul to'laydilar."
              },
              {
                "en": "Online multi-player gamers suffer severe competitive disadvantages when enduring excessive network latency.",
                "uz": "Onlayn o'yinchi-ishtirokchilar tarmoqdagi haddan tashqari kechikish tufayli jiddiy raqobatdoshlikni yo'qotadilar."
              }
            ]
          },
          {
            "id": "c1-tech-28",
            "word": "Open-source",
            "pos": "adjective",
            "phonetic": "/ˌəʊpən ˈsɔːs/",
            "uzbek": "Ochiq kodli (dasturiy ta'minot)",
            "definition": "Denoting software for which the original source code is made freely available and may be redistributed and modified.",
            "examples": [
              {
                "en": "The Linux operating system represents the premier triumphant milestone of global open-source software collaboration.",
                "uz": "Linux operatsion tizimi global ochiq kodli dasturiy hamkorlikning eng yuksak yutug'i hisoblanadi."
              },
              {
                "en": "Developers prefer open-source libraries because transparency permits independent security audits.",
                "uz": "Dasturchilar ochiq kodli kutubxonalarni afzal ko'rishadi, chunki shaffoflik mustaqil xavfsizlik auditini o'tkazish imkonini beradi."
              },
              {
                "en": "Many prominent artificial intelligence foundation models were released under permissive open-source licenses.",
                "uz": "Ko'plab yetakchi sun'iy intellekt tayanch modellari erkin ochiq kodli litsenziyalar ostida taqdim etildi."
              }
            ]
          },
          {
            "id": "c1-tech-29",
            "word": "Smart home",
            "pos": "noun",
            "phonetic": "/smɑːt həʊm/",
            "uzbek": "Aqlli uy (avtomatlashtirilgan uy-joy tizimi)",
            "definition": "A home equipped with lighting, heating, and electronic devices that can be controlled remotely by smartphone or computer.",
            "examples": [
              {
                "en": "In modern smart homes, climate control and perimeter security sensors are completely automatic.",
                "uz": "Zamonaviy aqlli uylarda iqlim nazorati va xavfsizlik datchiklari mutlaqo avtomatik ishlaydi."
              },
              {
                "en": "Energy-efficient smart homes dynamically calibrate heating according to room occupancy patterns.",
                "uz": "Energiyani tejovchi aqlli uylar xonalardagi odamlar soniga qarab isitishni avtomatik sozlaydi."
              },
              {
                "en": "A unified voice assistant manages entertainment, door locks, and appliances across the smart home.",
                "uz": "Yagona ovozli yordamchi butun aqlli uy bo'ylab o'yin-kulgi, eshik qulflari va maishiy texnikani boshqaradi."
              }
            ]
          },
          {
            "id": "c1-tech-30",
            "word": "Space tourism",
            "pos": "noun",
            "phonetic": "/speɪs ˈtʊərɪzəm/",
            "uzbek": "Koinot turizmi",
            "definition": "Human space travel for recreational, leisure, or business purposes.",
            "examples": [
              {
                "en": "Commercial aerospace enterprises are actively pioneering suborbital flights for space tourism.",
                "uz": "Tijorat aerokosmik korxonalari koinot turizmi uchun suborbital parvozlarni faol rivojlantirmoqda."
              },
              {
                "en": "Extravagant space tourism packages offer wealthy voyagers views of Earth from low orbit.",
                "uz": "Qimmatbaho koinot turizmi paketlari boy sayohatchilarga Yerni quyi orbitadan tomosha qilish imkonini beradi."
              },
              {
                "en": "Environmentalists criticize commercial space tourism for colossal carbon emissions per passenger launch.",
                "uz": "Ekologlar har bir yo'lovchini uchirishdagi ulkan uglerod chiqindilari sababli tijorat kosmik turizmini tanqid qiladilar."
              }
            ]
          }
        ]
      },
      {
        "id": "c1-ecology",
        "title": "Unit 07: Biodiversity, Ecology & Habitats (Biologik xilma-xillik va yashash muhiti)",
        "unitNumber": 7,
        "category": "Ecology & Conservation",
        "icon": "fa-seedling",
        "color": "from-emerald-700 to-green-900",
        "cambridge_source": "Cambridge English Vocabulary in Use Advanced, Unit 33: Our endangered world",
        "words": [
          {
            "id": "c1-eco-1",
            "word": "Biodiversity",
            "pos": "noun",
            "phonetic": "/ˌbaɪəʊdaɪˈvɜːsəti/",
            "uzbek": "Biologik xilma-xillik",
            "definition": "The number and variety of plants and animals that exist in a particular area or in the world generally.",
            "examples": [
              {
                "en": "Shrinking natural habitats pose an existential threat to planetary biodiversity.",
                "uz": "Qisqarib borayotgan tabiiy yashash muhiti sayyoradagi biologik xilma-xillikka jiddiy xavf solmoqda."
              },
              {
                "en": "Conservationists established marine sanctuaries to protect aquatic biodiversity from overfishing.",
                "uz": "Tabiatni muhofaza qiluvchilar suv biologik xilma-xilligini me'yordan ortiq ovlashdan saqlash uchun dengiz qo'riqxonalari tashkil qildilar."
              },
              {
                "en": "Tropical rainforests harbour more than half of the globe's terrestrial biodiversity.",
                "uz": "Tropik yomg'ir o'rmonlari yer yuzidagi quruqlikdagi biologik xilma-xillikning yarmidan ko'piga boshpana beradi."
              }
            ]
          },
          {
            "id": "c1-eco-2",
            "word": "Endangered species",
            "pos": "noun",
            "phonetic": "/ɪnˌdeɪndʒəd ˈspiːʃiːz/",
            "uzbek": "Yo'qolib ketish arafasidagi turlar",
            "definition": "A type of animal or plant that might stop existing because there are only a few of that type left alive.",
            "examples": [
              {
                "en": "Endangered species need rigorous legal protection if they are to survive in the wild.",
                "uz": "Yo'qolib ketish xavfi ostidagi turlar yovvoyi tabiatda omon qolishlari uchun qat'iy qonuniy himoyaga muhtoj."
              },
              {
                "en": "Poaching and deforestation have pushed the snow leopard into the ranks of critically endangered species.",
                "uz": "Brakonyerlik va o'rmonlarning kesilishi qor qoplonini yo'qolib ketish arafasidagi turlar safiga olib keldi."
              },
              {
                "en": "The botanical garden works tirelessly to propagate endangered species of flora.",
                "uz": "Botanika bog'i yo'qolib ketish arafasidagi o'simlik turlarini ko'paytirish ustida tinimsiz ishlamoqda."
              }
            ]
          },
          {
            "id": "c1-eco-3",
            "word": "Finite resources",
            "pos": "noun",
            "phonetic": "/ˈfaɪnaɪt rɪˈzɔːsɪz/",
            "uzbek": "Tugaydigan / cheklangan tabiiy boyliklar",
            "definition": "Natural resources, such as coal and oil, that are limited in quantity and will eventually run out.",
            "examples": [
              {
                "en": "Rapid population growth exerts severe pressure on the planet's finite resources.",
                "uz": "Aholining tez o'sishi sayyoradagi cheklangan tabiiy resurslarga kuchli bosim o'tkazmoqda."
              },
              {
                "en": "We must transition to renewable energy because fossil fuels are strictly finite resources.",
                "uz": "Biz qayta tiklanadigan energiyaga o'tishimiz kerak, chunki qazilma yoqilg'ilar qat'iy tugaydigan resurslardir."
              },
              {
                "en": "Responsible circular economies strive to reuse materials and conserve finite resources.",
                "uz": "Mas'uliyatli aylanma iqtisodiyotlar materiallarni qayta ishlatish va cheklangan resurslarni asrashga intiladi."
              }
            ]
          },
          {
            "id": "c1-eco-4",
            "word": "Ecological balance",
            "pos": "noun",
            "phonetic": "/ˌiːkəˈlɒdʒɪkəl ˈbæləns/",
            "uzbek": "Ekologik muvozanat",
            "definition": "The delicate state of dynamic balance within a community of organisms in their environment.",
            "examples": [
              {
                "en": "The ecological balance may be permanently upset by uncontrolled logging and deforestation.",
                "uz": "Nazoratsiz daraxt kesish va o'rmonlarning yo'q qilinishi ekologik muvozanatni butunlay izdan chiqarishi mumkin."
              },
              {
                "en": "Reintroducing apex predators helped restore the fragile ecological balance in the national park.",
                "uz": "Yirtqich hayvonlarning qayta kiritilishi milliy bog'dagi nozik ekologik muvozanatni tiklashga yordam berdi."
              },
              {
                "en": "Industrial run-off threatens the ecological balance of inland freshwater lakes.",
                "uz": "Sanoat chiqindilari ichki chuchuk suv ko'llarining ekologik muvozanatiga tahdid solmoqda."
              }
            ]
          },
          {
            "id": "c1-eco-5",
            "word": "Deforestation",
            "pos": "noun",
            "phonetic": "/diːˌfɒrɪˈsteɪʃən/",
            "uzbek": "O'rmonlarni yo'q qilish, o'rmonsizlanish",
            "definition": "The cutting down of trees in a large area, or the destruction of forests by people.",
            "examples": [
              {
                "en": "If uncontrolled deforestation continues unabated, extensive rainforests will vanish by 2050.",
                "uz": "Agar nazoratsiz o'rmonlarni yo'q qilish to'xtatilmasa, 2050 yilga kelib ulkan yomg'ir o'rmonlari yo'q bo'lib ketadi."
              },
              {
                "en": "Deforestation exacerbates global carbon emissions by eliminating essential carbon sinks.",
                "uz": "O'rmonlarning kesilishi muhim uglerod yutuvchi tabiiy manbalarni yo'qotib, global uglerod chiqindilarini kuchaytiradi."
              },
              {
                "en": "Indigenous communities mounted fierce resistance against commercial logging and deforestation.",
                "uz": "Mahalliy tub aholi tijorat maqsadidagi daraxt kesish va o'rmonsizlanishga qarshi qattiq qarshilik ko'rsatdi."
              }
            ]
          },
          {
            "id": "c1-eco-6",
            "word": "Pristine environment",
            "pos": "noun",
            "phonetic": "/ˈprɪstiːn ɪnˈvaɪrənmənt/",
            "uzbek": "Buzilmagan, asl holatdagi toza tabiat muhiti",
            "definition": "An environment that is completely fresh, clean, and untouched by human industrial damage.",
            "examples": [
              {
                "en": "Our hope is that pristine environments such as Antarctica can be safeguarded from drilling.",
                "uz": "Umidimiz shuki, Antarktida kabi bokira toza muhitlar burg'ulashdan asrab qolinadi."
              },
              {
                "en": "The secluded archipelago boasts pristine coral reefs teeming with rare marine creatures.",
                "uz": "Uzoqdagi arxipelag noyob dengiz jonzotlari bilan to'lib-toshgan buzilmagan marjon qoyalari bilan faxrlanadi."
              },
              {
                "en": "Eco-tourists must respect strict conservation guidelines to preserve pristine environments.",
                "uz": "Ekoturistlar toza tabiat muhitini saqlab qolish uchun tabiatni muhofaza qilishning qat'iy qoidalariga rioya qilishlari shart."
              }
            ]
          },
          {
            "id": "c1-eco-7",
            "word": "Carbon emissions",
            "pos": "noun",
            "phonetic": "/ˈkɑːbən ɪˈmɪʃənz/",
            "uzbek": "Uglerod chiqindilari (havoga ajraladigan)",
            "definition": "Carbon dioxide released into the atmosphere, especially from the combustion of fossil fuels.",
            "examples": [
              {
                "en": "Carbon emissions from burning coal and petroleum directly fuel the catastrophic greenhouse effect.",
                "uz": "Ko'mir va neft yoqilishidan hosil bo'lgan uglerod chiqindilari halokatli issiqxona effektini to'g'ridan-to'g'ri kuchaytiradi."
              },
              {
                "en": "Industries that fail to curtail carbon emissions face escalating environmental levies.",
                "uz": "Uglerod chiqindilarini kamaytira olmagan korxonalar tobora oshib boruvchi ekologik to'lovlarga duch keladi."
              },
              {
                "en": "Electrifying rail networks delivers immediate reductions in national carbon emissions.",
                "uz": "Temir yo'l tarmoqlarini elektrlashtirish milliy uglerod chiqindilarini darhol kamaytirish imkonini beradi."
              }
            ]
          },
          {
            "id": "c1-eco-8",
            "word": "Depleting resources",
            "pos": "noun",
            "phonetic": "/dɪˈpliːtɪŋ rɪˈzɔːsɪz/",
            "uzbek": "Kamayib borayotgan, tugayotgan resurslar",
            "definition": "Natural assets that are being reduced in size, quantity, or available reserve.",
            "examples": [
              {
                "en": "Demographic projections suggest rapid population growth will place severe strain on depleting resources.",
                "uz": "Demografik prognozlar shuni ko'rsatadiki, aholining tez o'sishi kamayib borayotgan resurslarga jiddiy og'irlik keltiradi."
              },
              {
                "en": "Depleting groundwater reservoirs threaten agricultural productivity across the arid valley.",
                "uz": "Kamayib borayotgan yer osti suvlari zaxiralari qurg'oqchil vodiyda qishloq xo'jaligi hosildorligiga xavf solmoqda."
              },
              {
                "en": "Governments must legislate conservation before depleting resources spark international conflicts.",
                "uz": "Tugayotgan boyliklar xalqaro mojarolarni keltirib chiqarishidan oldin hukumatlar tabiatni muhofaza qilish bo'yicha qonunlar qabul qilishlari lozim."
              }
            ]
          },
          {
            "id": "c1-eco-9",
            "word": "Toxic waste",
            "pos": "noun",
            "phonetic": "/ˈtɒksɪk weɪst/",
            "uzbek": "Zaharli sanoat chiqindilari",
            "definition": "Waste material that can cause death, injury, or severe birth defects to humans or living creatures.",
            "examples": [
              {
                "en": "Illegal dumping of toxic waste has contaminated pristine rivers and local drinking aquifers.",
                "uz": "Zaharli chiqindilarning noqonuniy tashlanishi musaffo daryolar va mahalliy ichimlik suvi qatlamlarini ifloslantirdi."
              },
              {
                "en": "Specialized high-temperature incinerators are required to neutralize hazardous toxic waste safely.",
                "uz": "Xavfli zaharli chiqindilarni xavfsiz zararsizlantirish uchun maxsus yuqori haroratli kuydirish pechlari talab qilinadi."
              },
              {
                "en": "The chemical plant was closed after leaks of volatile toxic waste sickened nearby villagers.",
                "uz": "Kimyo zavodi yaqin atrofdagi qishloq aholisini zaharlagan uchuvchi zaharli chiqindilar sizib chiqqanidan so'ng yopildi."
              }
            ]
          },
          {
            "id": "c1-eco-10",
            "word": "Water security",
            "pos": "noun",
            "phonetic": "/ˈwɔːtə sɪˌkjʊərəti/",
            "uzbek": "Suv xavfsizligi (aholini toza suv bilan ta'minlash)",
            "definition": "The capacity of a population to safeguard sustainable access to adequate quantities of acceptable quality water.",
            "examples": [
              {
                "en": "Safe water has become a precious commodity, transforming water security into a paramount geopolitical challenge.",
                "uz": "Xavfsiz suv qimmatbaho ne'matga aylandi va bu suv xavfsizligini eng muhim geosiyosiy muammoga aylantirdi."
              },
              {
                "en": "Desalination plants and drip irrigation are vital investments for maintaining national water security.",
                "uz": "Tuzsizlantirish inshootlari va tomchilatib sug'orish milliy suv xavfsizligini ta'minlash uchun hayotiy sarmoyalardir."
              },
              {
                "en": "Climate-induced droughts severely undermine water security for hundreds of millions of people.",
                "uz": "Iqlim o'zgarishi sababli sodir bo'layotgan qurg'oqchiliklar yuz millionlab odamlarning suv xavfsizligiga jiddiy putur yetkazmoqda."
              }
            ]
          },
          {
            "id": "c1-eco-11",
            "word": "Green credentials",
            "pos": "noun",
            "phonetic": "/ɡriːn krɪˈdenʃəlz/",
            "uzbek": "Ekologik obro' / ekologik faoliyat isboti",
            "definition": "Reputation and concrete proof showing that a company or person protects the environment.",
            "examples": [
              {
                "en": "The governing political party announced bold solar subsidies in a bid to improve its green credentials.",
                "uz": "Hukmron siyosiy partiya o'zining ekologik obro'sini oshirish maqsadida quyosh energiyasiga katta subsidiyalar ajratishini e'lon qildi."
              },
              {
                "en": "Consumers scrutinize corporate green credentials to avoid being deceived by deceptive greenwashing.",
                "uz": "Iste'molchilar soxta ekologik targ'ibotga aldanib qolmaslik uchun korporativ ekologik hujjatlarni sinchkovlik bilan tekshiradilar."
              },
              {
                "en": "Earning gold certification from the environmental council boosted the architect's green credentials.",
                "uz": "Ekologik kengashdan oltin sertifikat olish me'morning ekologik nufuzini oshirdi."
              }
            ]
          },
          {
            "id": "c1-eco-12",
            "word": "Prophets of doom and gloom",
            "pos": "idiom",
            "phonetic": "/ˈprɒfɪts əv duːm ənd ɡluːm/",
            "uzbek": "Doim yomonlik va fojiadan ogohlantiruvchi pessimizm tarafdorlari",
            "definition": "People who constantly make depressing, pessimistic predictions about what will happen in the future.",
            "examples": [
              {
                "en": "The prime minister argued that prophets of doom and gloom underestimate technological solutions to global warming.",
                "uz": "Bosh vazir doim fojiadan ogohlantiruvchi pessimistlar global isishga texnologik yechimlarni yetarlicha baholamayotganini ta'kidladi."
              },
              {
                "en": "Do not heed those prophets of doom and gloom who claim renewable energy transition is economically unfeasible.",
                "uz": "Qayta tiklanadigan energiyaga o'tishni iqtisodiy jihatdan imkonsiz deb hisoblovchi noumid odamlarga quloq solmang."
              },
              {
                "en": "While prophets of doom and gloom predicted total collapse, scientific adaptation achieved great progress.",
                "uz": "Noumid bashoratchilar to'liq qulashni bashorat qilishgan bo'lsa-da, ilmiy moslashuv katta yutuqlarga erishdi."
              }
            ]
          },
          {
            "id": "c1-eco-13",
            "word": "Habitat loss",
            "pos": "noun",
            "phonetic": "/ˈhæbɪtæt lɒs/",
            "uzbek": "Tabiiy yashash muhitining yo'qolishi",
            "definition": "The destruction or degradation of the natural environment in which a particular species lives.",
            "examples": [
              {
                "en": "Habitat loss caused by urban encroachment is the prime driver of insect pollinator decline.",
                "uz": "Shaharlarning kengayishi sababli yashash joylarining yo'qolishi changlatuvchi hasharotlarning kamayishining asosiy sababidir."
              },
              {
                "en": "Conserving wildlife corridors mitigates the devastating impact of regional habitat loss.",
                "uz": "Yovvoyi tabiat yo'laklarini saqlash mintaqaviy yashash muhitining yo'qolishining halokatli ta'sirini yumshatadi."
              },
              {
                "en": "Migratory birds suffer when wetlands are converted into farmland, resulting in irreversible habitat loss.",
                "uz": "Botqoqliklar ekin maydonlariga aylantirilganda ko'chmanchi qushlar qaytarib bo'lmaydigan yashash joylaridan ayrilib aziyat chekadi."
              }
            ]
          },
          {
            "id": "c1-eco-14",
            "word": "Desertification",
            "pos": "noun",
            "phonetic": "/dɪˌzɜːtɪfɪˈkeɪʃən/",
            "uzbek": "Cho'llanish (unumdor yerlarning cho'lga aylanishi)",
            "definition": "The process by which fertile land becomes desert, typically as a result of drought, deforestation, or inappropriate agriculture.",
            "examples": [
              {
                "en": "Overgrazing and prolonged climate droughts accelerate desertification along the perimeter of the Sahara.",
                "uz": "Mollarni me'yordan ortiq boqish va uzoq davom etgan qurg'oqchilik Saxara atroflarida cho'llanishni tezlashtirmoqda."
              },
              {
                "en": "The massive shelterbelt of drought-resistant trees was planted to combat encroaching desertification.",
                "uz": "Bostirib kelayotgan cho'llanishga qarshi kurashish uchun qurg'oqchilikka chidamli daraxtlarning ulkan ihota kamari ekildi."
              },
              {
                "en": "Desertification deprives pastoralist communities of essential fertile pastures.",
                "uz": "Cho'llanish chorvador jamoalarni hayotiy muhim unumdor yaylovlardan mahrum qiladi."
              }
            ]
          },
          {
            "id": "c1-eco-15",
            "word": "Acid rain",
            "pos": "noun",
            "phonetic": "/ˌæsɪd ˈreɪn/",
            "uzbek": "Kislotali yomg'ir",
            "definition": "Rainfall made so acidic by atmospheric pollution that it causes environmental harm, chiefly to forests and lakes.",
            "examples": [
              {
                "en": "Sulphur dioxide emissions from industrial smokestacks trigger acid rain that severely damages evergreen pine forests.",
                "uz": "Sanoat mo'rilaridan chiqadigan oltingugurt dioksidi ignabargli qarag'ay o'rmonlariga jiddiy zarar yetkazadigan kislotali yomg'irni keltirib chiqaradi."
              },
              {
                "en": "Limestone additions were dropped into highland lakes to neutralize acidity inflicted by persistent acid rain.",
                "uz": "Doimiy kislotali yomg'ir keltirib chiqargan kislotalilikni zararsizlantirish uchun baland tog' ko'llariga ohaktosh tashlandi."
              },
              {
                "en": "Cross-border treaties on clean air succeeded in substantially curbing the prevalence of acid rain.",
                "uz": "Musaffo havo bo'yicha transchegaraviy shartnomalar kislotali yomg'irlar tarqalishini sezilarli darajada kamaytirishga muvaffaq bo'ldi."
              }
            ]
          },
          {
            "id": "c1-eco-16",
            "word": "Greenhouse effect",
            "pos": "noun",
            "phonetic": "/ˈɡriːnhaʊs ɪˌfekt/",
            "uzbek": "Issiqxona effekti",
            "definition": "The trapping of the sun's warmth in a planet's lower atmosphere, caused by gases that absorb heat.",
            "examples": [
              {
                "en": "Excessive atmospheric concentrations of methane and carbon dioxide amplify the natural greenhouse effect.",
                "uz": "Atmosferada metan va karbonat angidridning haddan tashqari to'planishi tabiiy issiqxona effektini kuchaytiradi."
              },
              {
                "en": "Understanding the thermodynamics of the greenhouse effect is crucial for predicting planetary warming.",
                "uz": "Issiqxona effektining termodinamikasini tushunish sayyoraviy isishni bashorat qilish uchun juda muhimdir."
              },
              {
                "en": "Without the natural greenhouse effect, the average temperature on Earth would plunge far below freezing.",
                "uz": "Tabiiy issiqxona effekti bo'lmaganida, Yerdagi o'rtacha harorat noldan ancha past bo'lar edi."
              }
            ]
          },
          {
            "id": "c1-eco-17",
            "word": "Renewable energy",
            "pos": "noun",
            "phonetic": "/rɪˌnjuːəbl ˈenədʒi/",
            "uzbek": "Qayta tiklanadigan energiya",
            "definition": "Energy from a source that is not depleted when used, such as wind, hydroelectric, or solar power.",
            "examples": [
              {
                "en": "The national energy roadmap mandates producing seventy percent of electricity from renewable energy by 2035.",
                "uz": "Milliy energetika yo'l xaritasi 2035 yilga kelib elektr energiyasining yetmish foizini qayta tiklanadigan manbalardan ishlab chiqarishni talab qiladi."
              },
              {
                "en": "Offshore wind turbines represent one of the fastest-growing segments of commercial renewable energy.",
                "uz": "Dengizdagi shamol turbinalari tijorat qayta tiklanadigan energiyasining eng tez rivojlanayotgan sohalaridan biridir."
              },
              {
                "en": "Shifting capital away from hydrocarbons into clean renewable energy creates sustainable skilled employment.",
                "uz": "Kapitalni uglevodorodlardan toza qayta tiklanadigan energiyaga yo'naltirish barqaror malakali ish o'rinlarini yaratadi."
              }
            ]
          },
          {
            "id": "c1-eco-18",
            "word": "Carbon footprint",
            "pos": "noun",
            "phonetic": "/ˌkɑːbən ˈfʊtprɪnt/",
            "uzbek": "Uglerod izi (shaxs yoki korxona chiqargan issiqxona gazi miqdori)",
            "definition": "The total amount of greenhouse gases produced directly and indirectly by human activities, usually expressed in tons of CO2.",
            "examples": [
              {
                "en": "By taking passenger trains instead of short-haul regional flights, travellers can drastically reduce their individual carbon footprint.",
                "uz": "Qisqa masofali parvozlar o'rniga poyezdlardan foydalanish orqali sayohatchilar o'zlarining shaxsiy uglerod izlarini keskin kamaytirishlari mumkin."
              },
              {
                "en": "The enterprise adopted rigorous lifecycle audits to measure and slash the supply chain's carbon footprint.",
                "uz": "Korxona ta'minot zanjirining uglerod izini o'lchash va qisqartirish uchun qat'iy hayotiy tsikl auditini qabul qildi."
              },
              {
                "en": "Dietary changes toward plant-rich meals deliver an immediate reduction in household carbon footprint.",
                "uz": "O'simliklarga boy taomlarga o'tish oilaviy uglerod izini darhol kamaytirishga olib keladi."
              }
            ]
          },
          {
            "id": "c1-eco-19",
            "word": "Biofuel",
            "pos": "noun",
            "phonetic": "/ˈbaɪəʊfjuːəl/",
            "uzbek": "Bioyoqilg'i (biologik xomashyodan olingan yoqilg'i)",
            "definition": "A fuel derived immediately from living matter, such as agricultural crops or vegetable oils.",
            "examples": [
              {
                "en": "Aviation carriers are actively flight-testing sustainable biofuel blends formulated from recycled cooking grease.",
                "uz": "Aviatsiya tashuvchilari qayta ishlangan o'simlik moyidan tayyorlangan barqaror bioyoqilg'i aralashmalarini sinovdan o'tkazmoqdalar."
              },
              {
                "en": "Critics caution that diverting extensive fertile cropland to biofuel crops can trigger domestic food price surges.",
                "uz": "Tanqidchilar keng unumdor yerlarni bioyoqilg'i ekinlariga ajratish oziq-ovqat narxlarining ko'tarilishiga sabab bo'lishidan ogohlantirmoqda."
              },
              {
                "en": "Second-generation biofuels synthesize energy from non-food agricultural cellulosic residues.",
                "uz": "Ikkinchi avlod bioyoqilg'ilari oziq-ovqat bo'lmagan qishloq xo'jaligi qoldiqlaridan energiya sintez qiladi."
              }
            ]
          },
          {
            "id": "c1-eco-20",
            "word": "Ecosystem",
            "pos": "noun",
            "phonetic": "/ˈiːkəʊˌsɪstəm/",
            "uzbek": "Ekotizim",
            "definition": "A biological community of interacting organisms and their physical physical environment.",
            "examples": [
              {
                "en": "Mangrove swamps form a critical coastal ecosystem that buffers shores against storm surges and tsunamis.",
                "uz": "Mangr botqoqliklari qirg'oqlarni to'fon va tsunamilardan himoya qiluvchi muhim qirg'oq ekotizimini tashkil qiladi."
              },
              {
                "en": "Introducing invasive non-native plant species can decimate an entire indigenous wetland ecosystem.",
                "uz": "Begona o'simlik turlarini kiritish butun mahalliy botqoqlik ekotizimini yo'q qilishi mumkin."
              },
              {
                "en": "Preserving the interconnected health of each aquatic ecosystem guarantees sustainable coastal fishing.",
                "uz": "Har bir suv ekotizimining o'zaro bog'liq sog'ligini saqlash qirg'oq bo'yidagi barqaror baliq ovlashni kafolatlaydi."
              }
            ]
          },
          {
            "id": "c1-eco-21",
            "word": "Poaching",
            "pos": "noun",
            "phonetic": "/ˈpəʊtʃɪŋ/",
            "uzbek": "Brakonyerlik, noqonuniy hayvon ovlash",
            "definition": "The illegal practice of trespassing on someone's land or state reserves to hunt or steal wild animals.",
            "examples": [
              {
                "en": "Heavily armed wildlife rangers conduct midnight patrols across national parks to deter commercial ivory poaching.",
                "uz": "Qurollangan qo'riqchilar fil suyagi brakonyerligining oldini olish uchun milliy bog'lar bo'ylab tungi patrullarni amalga oshiradilar."
              },
              {
                "en": "International bans on the sale of rhino horns dealt a substantial blow to transnational poaching syndicates.",
                "uz": "Karkidon shoxlari savdosiga qo'yilgan xalqaro taqiq transmilliy brakonyerlik sindikatlariga kuchli zarba berdi."
              },
              {
                "en": "Drone surveillance technology helps conservation squads intercept organized poaching networks before animals are harmed.",
                "uz": "Dron kuzatuv texnologiyasi tabiatni muhofaza qiluvchilarga hayvonlarga zarar yetkazilishidan oldin brakonyerlarni tutishga yordam beradi."
              }
            ]
          },
          {
            "id": "c1-eco-22",
            "word": "Coral bleaching",
            "pos": "noun",
            "phonetic": "/ˈkɒrəl ˈbliːtʃɪŋ/",
            "uzbek": "Marjonlarning oqarishi / nobud bo'lishi",
            "definition": "The process whereby corals lose their vibrant symbiotic algae and turn white due to elevated ocean water temperatures.",
            "examples": [
              {
                "en": "Sustained marine heatwaves triggered catastrophic mass coral bleaching across the Great Barrier Reef.",
                "uz": "Davomli dengiz issiqlik to'lqinlari Katta To'siq rifi bo'ylab marjonlarning ommaviy oqarishi va nobud bo'lishiga sabab bo'ldi."
              },
              {
                "en": "If sea water temperatures remain persistently high, bleached corals inevitably starve and perish.",
                "uz": "Agar dengiz suvi harorati doimiy yuqori bo'lib qolsa, oqargan marjonlar ochlikdan nobud bo'ladi."
              },
              {
                "en": "Marine biologists are cross-breeding resilient thermal strains to rehabilitate reefs devastated by coral bleaching.",
                "uz": "Dengiz biologlari marjon oqarishidan zararlangan riflarni tiklash uchun issiqlikka chidamli shtammlarni yetishtirmoqdalar."
              }
            ]
          },
          {
            "id": "c1-eco-23",
            "word": "Overgrazing",
            "pos": "noun",
            "phonetic": "/ˌəʊvəˈɡreɪzɪŋ/",
            "uzbek": "Yaylovlarda mollarni me'yordan ortiq boqish",
            "definition": "Excessive grazing on pastureland which causes permanent structural damage to vegetative grassland cover.",
            "examples": [
              {
                "en": "Severe overgrazing stripped the protective grassland topsoil, leaving the terrain vulnerable to dust storms.",
                "uz": "Mollarni haddan tashqari boqish yerning ustki himoya qatlamini yemirib, hududni chang bo'ronlariga moyil qilib qo'ydi."
              },
              {
                "en": "Rotational grazing methods prevent the devastating soil compaction associated with chronic livestock overgrazing.",
                "uz": "Yaylovlarni navbatma-navbat almashtirish surunkali haddan tashqari o'tlatish tufayli tuproqning zichlashishining oldini oladi."
              },
              {
                "en": "Sustainable pastoral management policies penalize pastoralists who engage in persistent overgrazing on common lands.",
                "uz": "Barqaror yaylov boshqaruvi umumiy yerlarda tinimsiz me'yordan ortiq mol boquvchi chorvadorlarni jarimaga tortadi."
              }
            ]
          },
          {
            "id": "c1-eco-24",
            "word": "Conservationist",
            "pos": "noun",
            "phonetic": "/ˌkɒnsəˈveɪʃənɪst/",
            "uzbek": "Tabiatni muhofaza qiluvchi mutaxassis / faol",
            "definition": "A person who actively advocates or acts for the protection and preservation of the environment and wildlife.",
            "examples": [
              {
                "en": "Prominent conservationists lobbied international legislators to outlaw trade in endangered reptile skins.",
                "uz": "Yetakchi tabiat himoyachilari xavf ostidagi sudralib yuruvchilar terisi savdosini taqiqlash uchun xalqaro qonun chiqaruvchilarga ta'sir o'tkazdilar."
              },
              {
                "en": "Field conservationists work directly alongside local pastoralists to protect endangered carnivore migrations.",
                "uz": "Dala tabiatshunoslari yirtqich hayvonlarning ko'chishini himoya qilish uchun mahalliy chorvadorlar bilan bevosita birga ishlaydilar."
              },
              {
                "en": "Passionate conservationists initiated tree-planting campaigns that restored over ten thousand hectares of degraded canopy.",
                "uz": "Fidoyi tabiatsevarlar o'n ming gektardan ortiq yemirilgan o'rmonzorlarni qayta tiklagan daraxt ekish kampaniyalarini boshlab berdilar."
              }
            ]
          },
          {
            "id": "c1-eco-25",
            "word": "Reforestation",
            "pos": "noun",
            "phonetic": "/riːˌfɒrɪˈsteɪʃən/",
            "uzbek": "O'rmonlarni qayta tiklash, daraxtzorlashtirish",
            "definition": "The process of replanting an area with trees after logging or clearance.",
            "examples": [
              {
                "en": "Massive government reforestation programs converted barren hilly slopes into thriving temperate woodlands.",
                "uz": "Hukumatning ulkan o'rmonlashtirish dasturlari yalang'och tepalik yonbag'irlarini serhosil o'rmonlarga aylantirdi."
              },
              {
                "en": "Reforestation using native indigenous broadleaf trees restores vital natural biodiversity much faster than monoculture pine plantations.",
                "uz": "Mahalliy keng bargli daraxtlar bilan o'rmonni qayta tiklash biologik xilma-xillikni bir turdagi qarag'ayzorlarga qaraganda tezroq tiklaydi."
              },
              {
                "en": "Corporate carbon offset programs routinely allocate millions to community-led tropical reforestation trusts.",
                "uz": "Korporativ uglerod kompensatsiyasi dasturlari tropik o'rmonlarni tiklash fondlariga muntazam ravishda millionlab mablag' ajratadi."
              }
            ]
          },
          {
            "id": "c1-eco-26",
            "word": "Salinization",
            "pos": "noun",
            "phonetic": "/ˌsælɪnaɪˈzeɪʃən/",
            "uzbek": "Sho'rlanish (tuproq yoki suvning sho'r bosishi)",
            "definition": "The process by which water-soluble salts accumulate in the soil, diminishing agricultural fertility.",
            "examples": [
              {
                "en": "Improper canal irrigation and poor subsoil drainage precipitated catastrophic soil salinization across the agricultural basin.",
                "uz": "Noto'g'ri kanal sug'orishi va yomon drenaj qishloq xo'jaligi havzasi bo'ylab tuproqning keskin sho'rlanishiga sabab bo'ldi."
              },
              {
                "en": "Rising ocean sea levels introduce saltwater intruding into coastal aquifers, causing irreversible groundwater salinization.",
                "uz": "Dengiz sathining ko'tarilishi qirg'oqbo'yi qatlamlariga sho'r suv kirishiga olib kelib, yer osti suvlarining qaytarib bo'lmas sho'rlanishini keltirib chiqaradi."
              },
              {
                "en": "Agronomists recommend planting halophytic crops that thrive despite severe field salinization.",
                "uz": "Agronomlar tuproqning kuchli sho'rlanishiga qaramay yaxshi o'sadigan galofit o'simliklarni ekishni tavsiya qiladilar."
              }
            ]
          },
          {
            "id": "c1-eco-27",
            "word": "Erosion",
            "pos": "noun",
            "phonetic": "/ɪˈrəʊʒən/",
            "uzbek": "Eroziya, tuproqning yuvilib yoki shamolda uchib ketishi",
            "definition": "The gradual destruction and diminution of soil and rock by natural agents like wind, water, or glacier movement.",
            "examples": [
              {
                "en": "Without the binding roots of wild grasses, torrential mountain rains cause catastrophic mudslides and soil erosion.",
                "uz": "Yovvoyi o'tlarning bog'lovchi ildizlarisiz kuchli tog' yomg'irlari halokatli loy oqimlari va tuproq eroziyasini keltirib chiqaradi."
              },
              {
                "en": "Coastal erosion claims metres of sandy shoreline cliffs every winter storm season.",
                "uz": "Qirg'oq eroziyasi har qishki bo'ron mavsumida qumli qirg'oq qoyalarining bir necha metrini yutib yuboradi."
              },
              {
                "en": "Terracing steep agricultural hillsides prevents rainwater runoff and stabilizes earth against severe erosion.",
                "uz": "Tik qishloq xo'jaligi yonbag'irlarida terassalar hosil qilish yomg'ir suvining oqib ketishini to'xtatadi va yerni kuchli eroziyadan himoyalaydi."
              }
            ]
          },
          {
            "id": "c1-eco-28",
            "word": "Sustainability",
            "pos": "noun",
            "phonetic": "/səˌsteɪnəˈbɪləti/",
            "uzbek": "Barqarorlik (tabiatga zarar yetkazmasdan faoliyat yuritish)",
            "definition": "The ability to be maintained at a steady rate or level without exhausting natural resources or causing ecological damage.",
            "examples": [
              {
                "en": "Long-term economic prosperity is fundamentally unachievable without ecological sustainability.",
                "uz": "Uzoq muddatli iqtisodiy farovonlikka ekologik barqarorliksiz erishish mutlaqo imkonsizdir."
              },
              {
                "en": "The corporate manifesto outlined measurable targets for corporate energy sustainability and zero waste.",
                "uz": "Korporativ manifest energiya barqarorligi va chiqindisiz ishlab chiqarish bo'yicha aniq maqsadlarni belgilab berdi."
              },
              {
                "en": "Architects design modern eco-districts around environmental sustainability, passive insulation, and rainwater harvesting.",
                "uz": "Me'morlar zamonaviy ekologik dahalarni ekologik barqarorlik, passiv issiqlik izolyatsiyasi va yomg'ir suvini yig'ish asosida loyihalashtiradilar."
              }
            ]
          },
          {
            "id": "c1-eco-29",
            "word": "Carbon sink",
            "pos": "noun",
            "phonetic": "/ˈkɑːbən sɪŋk/",
            "uzbek": "Uglerod yutgich (karbonat angidridni tabiiy yutuvchi o'rmon/okean)",
            "definition": "A forest, ocean, or other natural environment viewed in terms of its ability to absorb carbon dioxide from the atmosphere.",
            "examples": [
              {
                "en": "The peat bogs of the far north serve as a colossal terrestrial carbon sink, locking away billions of tons of methane and carbon.",
                "uz": "Uzoq shimolning torfli botqoqliklari milliardlab tonna metan va uglerodni saqlab, ulkan quruqlikdagi uglerod yutgichi vazifasini bajaradi."
              },
              {
                "en": "Phytoplankton in polar waters constitutes a vital oceanic carbon sink that regulates global climatic stability.",
                "uz": "Qutb suvlaridagi fitoplankton global iqlim barqarorligini tartibga soluvchi muhim okean uglerod yutuvchisini tashkil qiladi."
              },
              {
                "en": "Protecting old-growth virgin forests is vital because newly planted saplings take decades to mature into functioning carbon sinks.",
                "uz": "Asriy bokira o'rmonlarni himoya qilish juda muhim, chunki yangi ekilgan ko'chatlar to'laqonli uglerod yutgichiga aylanishi uchun o'nlab yillar kerak bo'ladi."
              }
            ]
          },
          {
            "id": "c1-eco-30",
            "word": "Geothermal energy",
            "pos": "noun",
            "phonetic": "/ˌdʒiːəʊˈθɜːməl ˈenədʒi/",
            "uzbek": "Geotermal energiya (yer osti issiqlik energiyasi)",
            "definition": "Energy derived from the natural heat produced deep within the interior of the Earth.",
            "examples": [
              {
                "en": "Volcanically active regions harness geothermal energy to generate clean baseline electricity and heat municipal homes.",
                "uz": "Vulkanik faol hududlar toza elektr energiyasi ishlab chiqarish va shahar uylarini isitish uchun geotermal energiyadan foydalanadilar."
              },
              {
                "en": "Unlike intermittent solar or wind generators, geothermal energy provides continuous, weather-independent output.",
                "uz": "O'zgaruvchan quyosh yoki shamol generatorlaridan farqli o'laroq, geotermal energiya ob-havoga bog'liq bo'lmagan uzluksiz quvvat beradi."
              },
              {
                "en": "Deep geothermal energy boreholes tap subterranean steam reservoirs hundreds of metres underground.",
                "uz": "Chuqur geotermal energiya quduqlari yer yuzasidan yuzlab metr chuqurlikdagi yer osti bug' zaxiralarini ochadi."
              }
            ]
          }
        ]
      },
      {
        "id": "c1-philosophy",
        "title": "Unit 08: Epistemology & Philosophical Enquiry (Falsafa va jamiyat)",
        "icon": "fa-scale-balanced",
        "color": "from-rose-600 to-red-800",
        "words": [
          {
            "id": "phi-1",
            "word": "Autonomy",
            "pos": "noun",
            "phonetic": "/ˈpeləkwənt/",
            "uzbek": "Mustaqillik, o'zini-o'zi boshqarish erkinligi",
            "definition": "The right or condition of self-government; freedom from external control or influence.",
            "examples": [
              {
                "en": "Universities require institutional autonomy to foster unconstrained intellectual discovery.",
                "uz": "Universitetlarga cheklovsiz intellektual kashfiyotlarni rivojlantirish uchun muassasa mustaqilligi kerak."
              },
              {
                "en": "Encouraging learner autonomy inspires students to pursue their own academic inquiries.",
                "uz": "O'quvchi mustaqilligini rag'batlantirish ularni mustaqil ilmiy izlanishlar olib borishga undaydi."
              },
              {
                "en": "The automated vehicle operates with an astonishing degree of navigational autonomy.",
                "uz": "Haydovchisiz avtomobil hayratlanarli darajadagi boshqaruv mustaqilligi bilan harakatlanadi."
              }
            ]
          },
          {
            "id": "phi-2",
            "word": "Paradox",
            "pos": "noun",
            "phonetic": "/ˈpærədɒks/",
            "uzbek": "Paradoks (ziddiyatli, lekin haqiqatga ega holat)",
            "definition": "A seemingly absurd or self-contradictory statement or proposition that when investigated may prove to be well founded or true.",
            "examples": [
              {
                "en": "The paradox of technology is that while it connects the globe, it can alienate individuals.",
                "uz": "Texnologiyaning paradoksi shundaki, u dunyoni bog'lasa-da, insonlarni bir-biridan begonalashtirishi mumkin."
              },
              {
                "en": "He explained the famous paradox where spending money on experiences brings more joy than possessions.",
                "uz": "U tajribalarga pul sarflash buyumlarga qaraganda ko'proq quvonch keltirishi haqidagi mashhur paradoksni tushuntirdi."
              },
              {
                "en": "It is an ironic paradox that the more knowledge we acquire, the more we realize our ignorance.",
                "uz": "Qanchalik ko'p bilim olsak, o'z bilimsizligimizni shunchalik ko'p anglashimiz qiziq bir paradoksal haqiqatdir."
              }
            ]
          },
          {
            "id": "phi-3",
            "word": "Subjective",
            "pos": "adjective",
            "phonetic": "/səbˈdʒektɪv/",
            "uzbek": "Subyektiv, shaxsiy qarashga asoslangan",
            "definition": "Based on or influenced by personal feelings, tastes, or opinions.",
            "examples": [
              {
                "en": "Beauty is entirely subjective; what enchants one person may leave another unimpressed.",
                "uz": "Go'zallik butunlay subyektiv tushunchadir; birini maftun etgan narsa boshqasini befarq qoldirishi mumkin."
              },
              {
                "en": "Judges must strive to base their verdict on objective evidence rather than subjective bias.",
                "uz": "Hakamlar o'z hukmlarini subyektiv hissiyotlarga emas, xolis obyektiv dalillarga asoslashga intilishlari kerak."
              },
              {
                "en": "Art appreciation is largely a subjective experience governed by personal emotional resonance.",
                "uz": "San'atni qadrlash ko'p jihatdan shaxsiy hissiy taassurotga bog'liq bo'lgan subyektiv tajribadir."
              }
            ]
          },
          {
            "id": "phi-4",
            "word": "Pervasive",
            "pos": "adjective",
            "phonetic": "/pəˈveɪsɪv/",
            "uzbek": "Hamma joyda uchraydigan, keng tarqalgan, qamrab olgan",
            "definition": "Spreading widely throughout an area or a group of people, especially of an unwelcome influence.",
            "examples": [
              {
                "en": "Smartphones have exerted a pervasive influence on modern human communication.",
                "uz": "Smartfonlar zamonaviy insoniy muloqotga hamma joyda seziladigan keng qamrovli ta'sir ko'rsatdi."
              },
              {
                "en": "Corruption remains a pervasive obstacle to economic prosperity in developing regions.",
                "uz": "Korrupsiya rivojlanayotgan hududlarda iqtisodiy farovonlik yo'lidagi keng tarqalgan to'siq bo'lib qolmoqda."
              },
              {
                "en": "The scent of blooming jasmine was pervasive throughout the evening courtyard.",
                "uz": "Gullagan yasmin ifori butun kechki hovlini qamrab olgan edi."
              }
            ]
          },
          {
            "id": "phi-5",
            "word": "Cognitive",
            "pos": "adjective",
            "phonetic": "/ˈkɒɡnətɪv/",
            "uzbek": "Kognitiv, aqliy, bilishga oid",
            "definition": "Relating to conscious mental activities such as thinking, understanding, learning, and remembering.",
            "examples": [
              {
                "en": "Bilingual individuals often demonstrate superior cognitive flexibility in problem-solving.",
                "uz": "Ikki tilda so'zlashuvchi insonlar muammolarni hal qilishda yuqori kognitiv moslashuvchanlikni namoyon etadilar."
              },
              {
                "en": "Solving puzzles and learning new languages helps maintain cognitive sharpness in older age.",
                "uz": "Boshqotirmalar yechish va yangi tillar o'rganish keksayganda aqliy teranlikni saqlashga yordam beradi."
              },
              {
                "en": "Sleep deprivation impairs cognitive functioning, leading to lapses in memory and attention.",
                "uz": "Uyqusizlik kognitiv faoliyatni buzadi, xotira va diqqatning susayishiga olib keladi."
              }
            ]
          },
          {
            "id": "phi-6",
            "word": "Altruism",
            "pos": "noun",
            "phonetic": "/ˈæltruɪzəm/",
            "uzbek": "Altruizm, beg'arazlik, fidoyilik",
            "definition": "The ethical practice of selfless concern and devotion to the welfare of other beings.",
            "examples": [
              {
                "en": "Organ donation by living donors represents the purest manifestation of human altruism.",
                "uz": "Tirik insonlarning a'zolarini beg'araz hadya qilishi insoniy altruizmning eng yuksak namoyon bo'lishidir."
              },
              {
                "en": "Biologists study whether reciprocal altruism in animal colonies has evolutionary survival advantages.",
                "uz": "Biologlar hayvonlar jamoasidagi o'zaro beg'araz yordam evolyutsion omon qolish afzalliklariga egaligini o'rganadilar."
              },
              {
                "en": "Ethical philosophies debate whether true altruism can exist entirely free of subtle psychological rewards.",
                "uz": "Axloqiy falsafalar haqiqiy beg'arazlik insonning ichki ruhiy qoniqishidan xoli bo'la olishi mumkinligini bahslashadilar."
              }
            ]
          },
          {
            "id": "phi-7",
            "word": "Determinism",
            "pos": "noun",
            "phonetic": "/dɪˈtɜːmɪnɪzəm/",
            "uzbek": "Determinizm (barcha hodisalar sababiy bog'langanligi)",
            "definition": "The philosophical doctrine that all occurrences, including human choices, are strictly causal.",
            "examples": [
              {
                "en": "Hard determinism argues that genuine human free will is an illusion created by consciousness.",
                "uz": "Qat'iy determinizm insonning haqiqiy erkin irodasi ongi tomonidan yaratilgan illyuziya ekanini ta'kidlaydi."
              },
              {
                "en": "Quantum physics challenged classical mechanistic determinism by introducing fundamental probabilistic uncertainty.",
                "uz": "Kvant fizikasi ehtimollik noaniqligini kiritish orqali klassik mexanik determinizmga e'tiroz bildirdi."
              },
              {
                "en": "Legal scholars ponder how causal determinism affects individual moral responsibility for crimes.",
                "uz": "Huquqshunoslar sababiy determinizm insonning jinoyatlar uchun individual axloqiy javobgarligiga qanday ta'sir qilishini tahlil qiladilar."
              }
            ]
          },
          {
            "id": "phi-8",
            "word": "Existentialism",
            "pos": "noun",
            "phonetic": "/ˌeɡzɪˈstenʃəlɪzəm/",
            "uzbek": "Ekzistensializm (mavjudlik falsafasi)",
            "definition": "A philosophical movement prioritizing individual existence, absolute freedom, and radical self-determination.",
            "examples": [
              {
                "en": "Sartre's existentialism asserts that existence precedes essence, obliging individuals to craft their own meaning.",
                "uz": "Sartrning ekzistensializmi insonning avval mavjud bo'lishi va keyin o'z ma'nosini o'zi yaratishi shartligini ta'kidlaydi."
              },
              {
                "en": "Post-war European literature resonated with existentialism's focus on personal authenticity and anxiety.",
                "uz": "Urushdan keyingi Yevropa adabiyoti ekzistensializmning shaxsiy haqiqiylik va ruhiy iztirobga qaratilgan g'oyalari bilan hamohang bo'ldi."
              },
              {
                "en": "Existentialism holds that individuals bear full accountability for the choices they author in life.",
                "uz": "Ekzistensializm insonlar hayotda qilgan har bir tanlovlari uchun to'liq javobgar ekanini ilgari suradi."
              }
            ]
          },
          {
            "id": "phi-9",
            "word": "Hedonism",
            "pos": "noun",
            "phonetic": "/ˈhiːdənɪzəm/",
            "uzbek": "Gedonizm (rohatlanishni oliy maqsad deb bilish)",
            "definition": "The ethical theory declaring personal pleasure and avoidance of pain as humanity's paramount moral good.",
            "examples": [
              {
                "en": "Epicurus advocated a refined philosophical hedonism centered on mental peace rather than sensory excess.",
                "uz": "Epikur hissiy ortiqchalikdan ko'ra ruhiy xotirjamlikka asoslangan nozik falsafiy gedonizmni yoqlagan."
              },
              {
                "en": "Critics caution that unchecked hedonism often leads to moral emptiness and spiritual dissolution.",
                "uz": "Tanqidchilar jilovlanmagan maishatparastlik ko'pincha axloqiy bo'shliq va ruhiy inqirozga olib kelishidan ogohlantiradilar."
              },
              {
                "en": "Modern consumerism is frequently analyzed through the lens of psychological hedonism.",
                "uz": "Zamonaviy iste'molchilik madaniyati ko'pincha psixologik gedonizm nuqtai nazaridan tahlil qilinadi."
              }
            ]
          },
          {
            "id": "phi-10",
            "word": "Nihilism",
            "pos": "noun",
            "phonetic": "/ˈnaɪɪlɪzəm/",
            "uzbek": "Nigilizm (barcha qadriyatlarni inkor etish)",
            "definition": "The rejection of all religious, moral, and epistemological tenets under the premise of cosmic meaninglessness.",
            "examples": [
              {
                "en": "Nietzsche warned that the historical demise of traditional values would precipitate widespread cultural nihilism.",
                "uz": "Nitsshe an'anaviy qadriyatlarning yemirilishi ommaviy madaniy nigilizmni keltirib chiqarishidan ogohlantirgan edi."
              },
              {
                "en": "Existential nihilism asserts that human life possesses no intrinsic purpose or cosmic significance.",
                "uz": "Ekzistensial nigilizm inson hayotida hech qanday tug'ma maqsad yoki koinot miqyosidagi ma'no yo'qligini ta'kidlaydi."
              },
              {
                "en": "Youth movements in nineteenth-century Russia embraced political nihilism to overturn the autocracy.",
                "uz": "O'n to'qqizinchi asr Rossiyasidagi yoshlar harakatlari chor hokimiyatini ag'darish uchun siyosiy nigilizmni qabul qildilar."
              }
            ]
          },
          {
            "id": "phi-11",
            "word": "Solipsism",
            "pos": "noun",
            "phonetic": "/ˈsɒlɪpsɪzəm/",
            "uzbek": "Solipsizm (faqat o'z ongi mavjudligiga ishonish)",
            "definition": "The radical philosophical conviction that only one's personal mind is certain to exist.",
            "examples": [
              {
                "en": "Epistemological solipsism argues that proving the existence of any mind outside one's own is impossible.",
                "uz": "Epistemologik solipsizm o'z ongidan tashqaridagi biron bir aql borligini isbotlash imkonsiz ekanini ta'kidlaydi."
              },
              {
                "en": "Philosophers view extreme solipsism as a logical dead-end that paralyzes interpersonal ethics.",
                "uz": "Falsafachilar ashaddiy solipsizmni insonlararo axloqni falaj qiladigan mantiqiy boshi berk ko'cha deb hisoblaydilar."
              },
              {
                "en": "Virtual reality simulations have revived thought experiments investigating solipsism and simulated realities.",
                "uz": "Virtual borliq texnologiyalari solipsizm va simulyatsiya qilingan voqelik bo'yicha falsafiy tajribalarni qayta jonlantirdi."
              }
            ]
          },
          {
            "id": "phi-12",
            "word": "Utilitarianism",
            "pos": "noun",
            "phonetic": "/juːˌtɪlɪˈteəriənɪzəm/",
            "uzbek": "Utilitarizm (eng ko'p odamga foyda keltirish axloqi)",
            "definition": "The normative doctrine advocating actions that maximize overall aggregate happiness and well-being.",
            "examples": [
              {
                "en": "Jeremy Bentham formulated classical utilitarianism around the principle of greatest happiness for the greatest number.",
                "uz": "Jeremi Bentam klassik utilitarizmni eng ko'p sonli odamlar uchun eng katta baxt keltirish tamoyili asosida yaratdi."
              },
              {
                "en": "Public healthcare triage protocols often rely on pragmatic utilitarianism during mass casualty disasters.",
                "uz": "Ommaviy ofatlar paytida jamoat salomatligi saralash protokollari ko'pincha amaliy utilitarizmga tayanadi."
              },
              {
                "en": "Critics argue that pure utilitarianism risks trampling the essential human rights of minority groups.",
                "uz": "Tanqidchilar sof utilitarizm ozchilik guruhlarining asosiy inson huquqlarini poymol qilish xavfiga ega ekanini ta'kidlaydilar."
              }
            ]
          },
          {
            "id": "phi-13",
            "word": "Dogmatism",
            "pos": "noun",
            "phonetic": "/ˈdɒɡmətɪzəm/",
            "uzbek": "Dogmatizm (ko'r-ko'rona qoidalarga yopishib olish)",
            "definition": "The rigid assertion of opinions or doctrines as incontrovertible truth without empirical proof.",
            "examples": [
              {
                "en": "Scientific progress requires skepticism, open inquiry, and the total abandonment of ideological dogmatism.",
                "uz": "Ilmiy taraqqiyot shubhalanishni, ochiq izlanishni va mafkuraviy dogmatizmdan butunlay voz kechishni talab qiladi."
              },
              {
                "en": "Religious dogmatism historically resisted revolutionary cosmological revelations regarding planetary orbits.",
                "uz": "Diniy qotib qolgan qarashlar tarixan sayyoralar harakati bo'yicha inqilobiy kashfiyotlarga qarshilik ko'rsatgan."
              },
              {
                "en": "Critical thinking pedagogy equips students to dismantle unexamined intellectual dogmatism.",
                "uz": "Tanqidiy fikrlash ta'limi talabalarni tahlil qilinmagan qotib qolgan aqidalarni yengishga o'rgatadi."
              }
            ]
          },
          {
            "id": "phi-14",
            "word": "Relativism",
            "pos": "noun",
            "phonetic": "/ˈrelətɪvɪzəm/",
            "uzbek": "Relyativizm, nisbiylik nazariyasi (axloq va haqiqatda)",
            "definition": "The philosophical belief that truth, morality, and knowledge are relative to cultural, social, or personal contexts.",
            "examples": [
              {
                "en": "Cultural relativism cautions against evaluating foreign customs through one's own subjective cultural standards.",
                "uz": "Madaniy relyativizm o'zga yurt urf-odatlarini o'zining sub'ektiv mezonlari orqali baholashdan ogohlantiradi."
              },
              {
                "en": "Opponents of moral relativism argue that universal human rights must supersede local traditions.",
                "uz": "Axloqiy nisbiylik muxoliflari umuminsoniy huquqlar har qanday mahalliy an'analardan ustun turishi kerakligini ta'kidlaydilar."
              },
              {
                "en": "Epistemic relativism questions whether any objective vantage point exists from which universal truth can be claimed.",
                "uz": "Bilish relyativizmi mutlaq haqiqatni da'vo qilish mumkin bo'lgan xolis nuqtai nazar bor-yo'qligini shubha ostiga oladi."
              }
            ]
          },
          {
            "id": "phi-15",
            "word": "Skepticism",
            "pos": "noun",
            "phonetic": "/ˈskeptɪsɪzəm/",
            "uzbek": "Skeptitsizm, shubhalanish falsafasi",
            "definition": "A questioning, doubting attitude toward knowledge claims, beliefs, or established dogmas.",
            "examples": [
              {
                "en": "Healthy scientific skepticism demands rigorous reproducible evidence before accepting bold assertions.",
                "uz": "Sog'lom ilmiy skeptitsizm dadil da'volarni qabul qilishdan oldin qat'iy qayta tekshiriladigan dalillarni talab qiladi."
              },
              {
                "en": "Descartes employed methodical skepticism, doubting every sensory input to locate bedrock certainty.",
                "uz": "Dekart mutlaq haqiqatni topish uchun barcha hissiy sezgilarni shubha ostiga qo'yuvchi uslubiy skeptitsizmdan foydalandi."
              },
              {
                "en": "Voters greeted political campaign pledges with justifiable and seasoned skepticism.",
                "uz": "Saylovchilar saylovoldi va'dalarini o'rinli va tajribali shubha bilan kutib oldilar."
              }
            ]
          },
          {
            "id": "phi-16",
            "word": "Consequentialism",
            "pos": "noun",
            "phonetic": "/ˌkɒnsɪˈkwenʃəlɪzəm/",
            "uzbek": "Konsekvensializm (harakatni oqibatiga qarab baholash)",
            "definition": "The ethical doctrine holding that the morality of an act depends entirely on the resulting outcome.",
            "examples": [
              {
                "en": "Under consequentialism, telling a benevolent lie is morally virtuous if it prevents devastating catastrophe.",
                "uz": "Konsekvensializmga ko'ra, agar ezgu yolg'on dahshatli falokatning oldini olsa, u axloqan to'g'ri hisoblanadi."
              },
              {
                "en": "Ethicists debate the tension between deontological duty rules and pragmatic consequentialism.",
                "uz": "Axloqshunoslar burchga asoslangan qat'iy qoidalar bilan oqibatga tayanuvchi konsekvensializm o'rtasidagi ziddiyatni muhokama qiladilar."
              },
              {
                "en": "Military strategists often default to consequentialism when calculating collateral casualties in conflict.",
                "uz": "Harbiy strateglar qurolli to'qnashuvlarda kutilmagan talafotlarni hisoblashda ko'pincha konsekvensializmga suyanadilar."
              }
            ]
          },
          {
            "id": "phi-17",
            "word": "Deontology",
            "pos": "noun",
            "phonetic": "/ˌdiːɒnˈtɒlədʒi/",
            "uzbek": "Deontologiya (burch va qat'iy axloqiy majburiyat)",
            "definition": "The ethical theory that actions are intrinsically right or wrong, regardless of their consequences.",
            "examples": [
              {
                "en": "Kantian deontology dictates that lying is fundamentally wrong under any conceivable circumstance.",
                "uz": "Kantning deontologiyasi har qanday sharoitda ham yolg'on gapirish tubdan noto'g'ri ekanini belgilaydi."
              },
              {
                "en": "Medical codes of conduct embody deontology through absolute patient confidentiality duties.",
                "uz": "Tibbiy odob-axloq qoidalari bemor sirlarini qat'iy saqlash majburiyati orqali deontologiyani ifodalaydi."
              },
              {
                "en": "Deontology argues that individuals must never be treated merely as instruments to an end.",
                "uz": "Deontologiya insonlarga hech qachon shunchaki maqsadga yetish vositasi sifatida qaralmasligi kerakligini ta'kidlaydi."
              }
            ]
          },
          {
            "id": "phi-18",
            "word": "Virtue",
            "pos": "noun",
            "phonetic": "/ˈvɜːtʃuː/",
            "uzbek": "Fazilat, ezgulik, yuksak axloq",
            "definition": "Moral excellence, righteousness, or a commendable character trait displayed in action.",
            "examples": [
              {
                "en": "Patience and humility are cardinal virtues esteemed across classical world civilizations.",
                "uz": "Sabr va kamtarlik qadimgi jahon sivilizatsiyalarida eng ulug' fazilatlar sifatida e'zozlangan."
              },
              {
                "en": "Aristotle's virtue ethics emphasizes cultivating habitual courage, temperance, and justice.",
                "uz": "Aristotelning fazilatlar axloqi mardlik, o'zini tuta bilish va adolat kabi odatlarni shakllantirishga urg'u beradi."
              },
              {
                "en": "Her intellectual integrity was a rare virtue in an era characterized by hyper-partisan deceit.",
                "uz": "Uning ilmiy xolisligi va halolligi soxtalik avj olgan davrda noyob fazilat edi."
              }
            ]
          },
          {
            "id": "phi-19",
            "word": "Morality",
            "pos": "noun",
            "phonetic": "/məˈræləti/",
            "uzbek": "Axloq, odob, ma'naviyat",
            "definition": "Principles concerning the distinction between right and wrong conduct, intent, and decisions.",
            "examples": [
              {
                "en": "Philosophers investigate whether human morality arises from innate evolutionary instincts or cultural nurture.",
                "uz": "Falsafachilar inson axloqi tug'ma evolyutsion xususiyatmi yoki madaniy tarbiya natijasimi degan savolni o'rganadilar."
              },
              {
                "en": "Laws in democratic nations strive to reflect the evolving standards of public morality.",
                "uz": "Demokratik davlatlardagi qonunlar jamiyat axloqining rivojlanib borayotgan me'yorlarini aks ettirishga intiladi."
              },
              {
                "en": "Exercising power without genuine morality inevitably breeds tyranny and oppression.",
                "uz": "Hokimiyatni haqiqiy axloqsiz yurgizish muqarrar ravishda istibdod va zulmga olib keladi."
              }
            ]
          },
          {
            "id": "phi-20",
            "word": "Conscience",
            "pos": "noun",
            "phonetic": "/ˈkɒnʃəns/",
            "uzbek": "Vijdon, ichki axloqiy hakam",
            "definition": "An inner moral faculty that guides and regulates ethical judgment and behavior.",
            "examples": [
              {
                "en": "His guilty conscience troubled him incessantly after he betrayed his colleague's confidential trust.",
                "uz": "Hamkasbining maxfiy ishonchiga xiyonat qilganidan so'ng, uning aybdor vijdoni uni tinimsiz qiynadi."
              },
              {
                "en": "Whistleblowers follow their conscience to expose systemic corporate corruption despite immense personal peril.",
                "uz": "Haqiqatparvarlar katta xavf-xatarga qaramay, korporativ korrupsiyani fosh qilishda o'z vijdonlariga ergashadilar."
              },
              {
                "en": "Acting in accordance with your clean conscience brings deep psychological tranquility.",
                "uz": "Toza vijdon bilan ish ko'rish insonga chuqur ruhiy xotirjamlik bag'ishlaydi."
              }
            ]
          },
          {
            "id": "phi-21",
            "word": "Introspection",
            "pos": "noun",
            "phonetic": "/ˌɪntrəˈspekʃn/",
            "uzbek": "O'z-o'zini tahlil qilish, ichki dunyoga nazar solish",
            "definition": "The reflective examination of one's own internal thoughts, emotional states, and cognitive motivations.",
            "examples": [
              {
                "en": "Daily journaling provides a structured medium for disciplined philosophical introspection.",
                "uz": "Har kuni kundalik yozib borish tartibli falsafiy o'z-o'zini tahlil qilish uchun qulay vositadir."
              },
              {
                "en": "Introspection enables individuals to discover unconscious cognitive habits and self-limiting beliefs.",
                "uz": "O'z-o'zini chuqur tahlil qilish insonga ongsiz odatlari va o'ziga qo'ygan to'siqlarini kashf etishga yordam beradi."
              },
              {
                "en": "Excessive morbid introspection without creative action can slide into depressive rumination.",
                "uz": "Harakatlarsiz haddan tashqari tushkun o'zini tahlil qilish ezuvchi qayg'uga aylanib ketishi mumkin."
              }
            ]
          },
          {
            "id": "phi-22",
            "word": "Metaphysics",
            "pos": "noun",
            "phonetic": "/ˌmetəˈfɪzɪks/",
            "uzbek": "Metafizika (borliqning mohiyati haqidagi ta'limot)",
            "definition": "The philosophical branch interrogating the fundamental nature of reality, existence, space, and being.",
            "examples": [
              {
                "en": "Metaphysics investigates ancient ontological queries: Why does something exist rather than nothing?",
                "uz": "Metafizika qadimiy ontologik savollarni o'rganadi: Nega butkul yo'qlik emas, balki borliq mavjud?"
              },
              {
                "en": "Aristotle's foundational treatise on metaphysics classified causation into four essential categories.",
                "uz": "Aristotelning metafizika bo'yicha fundamental asari sababiylikni to'rtta asosiy toifaga ajratgan."
              },
              {
                "en": "Modern cosmology often borders on speculative metaphysics when probing origins prior to the Big Bang.",
                "uz": "Zamonaviy kosmologiya Katta Portlashdan oldingi holatni o'rganishda ko'pincha nazariy metafizika bilan tutashadi."
              }
            ]
          },
          {
            "id": "phi-23",
            "word": "Rationalism",
            "pos": "noun",
            "phonetic": "/ˈræʃnəlɪzəm/",
            "uzbek": "Ratsionalizm (aqlga asoslangan bilish)",
            "definition": "The philosophical position holding that reason and deductive logic are the chief sources of knowledge.",
            "examples": [
              {
                "en": "Continental rationalism, championed by Spinoza and Leibniz, celebrated pure intellect over sensory experience.",
                "uz": "Spinoza va Leybnits tomonidan ilgari surilgan Yevropa ratsionalizmi sof aql-idrokni hissiy tajribadan ustun qo'ygan."
              },
              {
                "en": "Mathematical proofs embody pure rationalism, establishing universally valid truths through logical deduction.",
                "uz": "Matematik isbotlar mantiqiy xulosa chiqarish orqali mutlaq haqiqatlarni o'rnatib, sof ratsionalizmni ifodalaydi."
              },
              {
                "en": "Enlightenment philosophers used rationalism to dispute superstitious traditions and promote scientific education.",
                "uz": "Ma'rifatparvarlik davri allomalari xurofotlarga qarshi chiqish va ilmiy ta'limni rivojlantirish uchun ratsionalizmdan foydalandilar."
              }
            ]
          },
          {
            "id": "phi-24",
            "word": "Empiricism",
            "pos": "noun",
            "phonetic": "/ɪmˈpɪrɪsɪzəm/",
            "uzbek": "Empirizm (tajriba va kuzatishga asoslangan bilish)",
            "definition": "The epistemological theory asserting that all knowledge originates solely from sensory experience and observation.",
            "examples": [
              {
                "en": "John Locke's empiricism depicted the newborn human mind as a blank slate receiving sensory impressions.",
                "uz": "Jon Lokkning empirizmi yangi tug'ilgan inson ongini hissiy taassurotlarni qabul qiluvchi oq qog'ozga o'xshatgan."
              },
              {
                "en": "Modern clinical medical science is fundamentally grounded in rigorous statistical empiricism.",
                "uz": "Zamonaviy klinik tibbiyot fani qat'iy statistik empirik tajribalarga asoslangan."
              },
              {
                "en": "Empiricism mandates that bold theoretical claims must be tested against observable data.",
                "uz": "Empirizm har qanday nazariy da'volarning kuzatilishi mumkin bo'lgan ma'lumotlar orqali sinovdan o'tishini talab qiladi."
              }
            ]
          },
          {
            "id": "phi-25",
            "word": "Aesthetic",
            "pos": "adjective",
            "phonetic": "/iːsˈθetɪk/",
            "uzbek": "Estetik, go'zallikka oid",
            "definition": "Relating to the philosophical appreciation, principles, and criticism of art, beauty, and taste.",
            "examples": [
              {
                "en": "Traditional Central Asian mosaics demonstrate exquisite aesthetic harmony between geometry and vibrant color.",
                "uz": "An'anaviy Markaziy Osiyo mozaikalari geometriya va yorqin ranglar o'rtasidagi ajoyib estetik uyg'unlikni namoyish etadi."
              },
              {
                "en": "The museum renovation enhanced both practical visitor mobility and refined aesthetic appeal.",
                "uz": "Muzey ta'miri tashrif buyuruvchilarning qulay harakatlanishini ham, nozik estetik jozibasini ham oshirdi."
              },
              {
                "en": "Kant's critique of judgment investigates universal aesthetic sensibilities across cultures.",
                "uz": "Kantning tanqidiy qarashlari turli madaniyatlardagi umuminsoniy estetik go'zallik hissini o'rganadi."
              }
            ]
          },
          {
            "id": "phi-26",
            "word": "Dilemma",
            "pos": "noun",
            "phonetic": "/daɪˈlemə/",
            "uzbek": "Dilemma, qiyin axloqiy tanlov",
            "definition": "A difficult situation in which an actor must choose between equally undesirable or conflicting alternatives.",
            "examples": [
              {
                "en": "The trolley problem is a classic philosophical dilemma illustrating conflicting moral priorities.",
                "uz": "'Vagoncha muammosi' bir-biriga zid axloqiy ustuvorliklarni ko'rsatib beruvchi klassik falsafiy dilemmadir."
              },
              {
                "en": "Governments faced an agonizing dilemma between public health lockdowns and economic survival.",
                "uz": "Hukumatlar karantin choralari va iqtisodiy tirik qolish o'rtasida mushkul dilemma oldida qoldilar."
              },
              {
                "en": "Resolving ethical dilemmas demands deep introspection, empathy, and principled reflection.",
                "uz": "Axloqiy dilemmalarni yechish chuqur ichki tahlilni, hamdardlikni va qat'iy mezonlarni talab qiladi."
              }
            ]
          },
          {
            "id": "phi-27",
            "word": "Equanimity",
            "pos": "noun",
            "phonetic": "/ˌekwəˈnɪməti/",
            "uzbek": "Bosiqlik, ruhiy xotirjamlik, matonat",
            "definition": "Mental calmness, composure, and emotional equilibrium, especially under high stress or adversity.",
            "examples": [
              {
                "en": "Stoic philosophy teaches practitioners to bear sudden fortune or grave misfortune with unbroken equanimity.",
                "uz": "Stotsizm falsafasi insonlarga kutilmagan omadni ham, og'ir musibatni ham yuksak ruhiy bosiqlik bilan qarshi olishni o'rgatadi."
              },
              {
                "en": "The veteran surgeon maintained remarkable equanimity throughout the perilous six-hour operation.",
                "uz": "Tajribali jarroh xavfli olti soatlik operatsiya davomida hayratlanarli ruhiy xotirjamlikni saqlab qoldi."
              },
              {
                "en": "Cultivating mindfulness meditation nurtures emotional resilience and everyday psychological equanimity.",
                "uz": "Diqqatni jamlash meditatsiyasi hissiy bardoshlilikni va kundalik ruhiy osoyishtalikni tarbiyalaydi."
              }
            ]
          },
          {
            "id": "phi-28",
            "word": "Authenticity",
            "pos": "noun",
            "phonetic": "/ˌɔːθenˈtɪsəti/",
            "uzbek": "Haqiqiylik, soxta emaslik, o'zligiga sodiqlik",
            "definition": "The condition of being genuine, original, and faithful to one's true personal values and nature.",
            "examples": [
              {
                "en": "Existential philosophers prize personal authenticity above conformity to external societal pressures.",
                "uz": "Ekzistensial faylasuflar tashqi jamiyat bosimiga ergashishdan ko'ra o'zligiga sodiq bo'lishni ustun qo'yadilar."
              },
              {
                "en": "Art historians used carbon dating to verify the unquestionable historical authenticity of the manuscript.",
                "uz": "San'atshunoslar qo'lyozmaning shubhasiz tarixiy haqiqiyligini tasdiqlash uchun radiokarbon tahlilidan foydalandilar."
              },
              {
                "en": "True charismatic leadership stems from emotional vulnerability, honesty, and moral authenticity.",
                "uz": "Haqiqiy yetakchilik samimiylik, halollik va axloqiy soxtasizlikdan kuch oladi."
              }
            ]
          },
          {
            "id": "phi-29",
            "word": "Altruistic",
            "pos": "adjective",
            "phonetic": "/ˌæltruˈɪstɪk/",
            "uzbek": "Fidoyilarcha, o'z manfaatini ko'zlamaydigan",
            "definition": "Showing unselfish concern for and devoted dedication to the welfare and uplift of others.",
            "examples": [
              {
                "en": "She spent her retirement pursuing altruistic missions providing clean drinking water to remote villages.",
                "uz": "U nafaqadagi hayotini chekka qishloqlarga toza ichimlik suvi yetkazuvchi beg'araz fidoyi loyihalarga bag'ishladi."
              },
              {
                "en": "Altruistic acts ignite neural pleasure centers in the brain, fostering positive collective well-being.",
                "uz": "Beg'araz yaxshilik qilish miyadagi ijobiy markazlarni faollashtirib, jamiyatdagi umumiy baxtiyorlikni mustahkamlaydi."
              },
              {
                "en": "Volunteering without monetary expectation is an altruistic contribution to building stronger communities.",
                "uz": "Moddiy maqsadsiz ko'ngilli bo'lib xizmat qilish jamiyatni mustahkamlashga qo'shilgan fidokorona hissadir."
              }
            ]
          },
          {
            "id": "phi-30",
            "word": "Transcendent",
            "pos": "adjective",
            "phonetic": "/trænˈsendənt/",
            "uzbek": "Oliy, idrok chegarasidan yuqori turuvchi, benaziyr",
            "definition": "Surpassing ordinary limitations; existing beyond and independent of the material physical universe.",
            "examples": [
              {
                "en": "Listening to the majestic choral symphony was a transcendent spiritual experience for the audience.",
                "uz": "Ushbu muhtasham xor simfoniyasini tinglash tomoshabinlar uchun yuksak ruhiy va benaziyr kechinma bo'ldi."
              },
              {
                "en": "Mystics across civilizations seek communion with a transcendent divine reality beyond words.",
                "uz": "Dunyo oriflari so'zlar bilan ifodalab bo'lmaydigan oliy va ilohiy haqiqatga yetishishga intiladilar."
              },
              {
                "en": "Great artistic masterpieces possess a timeless, transcendent power that speaks to all generations.",
                "uz": "Buyuk san'at durdonalari barcha avlodlar qalbiga yetib boruvchi mangu va oliy qudratga egadir."
              }
            ]
          }
        ],
        "unitNumber": 8,
        "category": "Philosophy & Thought"
      },
      {
        "id": "c1-expression",
        "title": "Unit 09: Figurative Language, Idioms & Nuance (Badiiy va nozik ifodalar)",
        "icon": "fa-feather-pointed",
        "color": "from-pink-500 to-rose-700",
        "words": [
          {
            "id": "exp-1",
            "word": "Eloquent",
            "pos": "adjective",
            "phonetic": "/ˈeləkwənt/",
            "uzbek": "Fasohotli, notiq, ta'sirchan so'zlovchi",
            "definition": "Fluent or persuasive in speaking or writing; clearly expressing feelings or meaning.",
            "examples": [
              {
                "en": "The statesman delivered an eloquent speech that moved thousands of listeners to tears.",
                "uz": "Davlat arbobi minglab tinglovchilarni ko'z yoshlariga g'arq etgan fasohatli nutq so'zladi."
              },
              {
                "en": "Her prose is remarkably eloquent, weaving metaphors with effortless grace.",
                "uz": "Uning nasriy uslubi nihoyatda fasohatli bo'lib, tashbehlarni beqiyos noziklik bilan uyg'unlashtiradi."
              },
              {
                "en": "Silence can often be more eloquent than a cascade of empty promises.",
                "uz": "Ba'zida sukut quruq va'dalar selidan ko'ra ancha ma'noli va ta'sirchan bo'lishi mumkin."
              }
            ]
          },
          {
            "id": "exp-2",
            "word": "Nuance",
            "pos": "noun",
            "phonetic": "/ˈnjuːɑːns/",
            "uzbek": "Nuans, nozik farq, jilo",
            "definition": "A subtle difference in or shade of meaning, expression, or sound.",
            "examples": [
              {
                "en": "A seasoned translator must capture every cultural nuance of the source literature.",
                "uz": "Tajribali tarjimon asil adabiyotning har bir madaniy nozikligini (nuansini) ilg'ashi shart."
              },
              {
                "en": "There is a subtle nuance between being self-confident and being arrogant.",
                "uz": "O'ziga ishonch va kibr o'rtasida juda nozik bir chegara (farq) mavjud."
              },
              {
                "en": "Advanced language learners pay close attention to nuances in tone and intonation.",
                "uz": "Yuqori darajadagi til o'rganuvchilari ohang va intonatsiyadagi nozik farqlarga alohida e'tibor berishadi."
              }
            ]
          },
          {
            "id": "exp-3",
            "word": "Articulate",
            "pos": "adjective / verb",
            "phonetic": "/ɑːˈtɪkjulət/",
            "uzbek": "Fikrni ravon ifodalovchi / Aniq ifodalamoq",
            "definition": "Having or showing the ability to speak fluently and coherently.",
            "examples": [
              {
                "en": "He is an articulate speaker capable of conveying complex philosophical ideas simply.",
                "uz": "U murakkab falsafiy g'oyalarni oddiy qilib tushuntirib bera oladigan notiq va ravon so'zlovchidir."
              },
              {
                "en": "She struggled to articulate the deep sorrow she felt upon hearing the tragic news.",
                "uz": "U mash'um xabarni eshitgach, qalbida his qilgan chuqur qayg'usini so'z bilan ifodalashga qiynaldi."
              },
              {
                "en": "Being articulate is an indispensable asset during competitive international job interviews.",
                "uz": "Fikrni aniq va ravon ifodalay olish xalqaro ish suhbatlarida beqiyos ustunlikdir."
              }
            ]
          },
          {
            "id": "exp-4",
            "word": "Profound",
            "pos": "adjective",
            "phonetic": "/prəˈfaʊnd/",
            "uzbek": "Chuqur, teran, bepoyon",
            "definition": "Very great or intense; having or showing great knowledge or insight.",
            "examples": [
              {
                "en": "The sudden departure of his mentor had a profound impact on his academic career.",
                "uz": "Ustozining to'satdan ketishi uning akademik faoliyatiga chuqur ta'sir ko'rsatdi."
              },
              {
                "en": "Eastern philosophy offers profound insights into human mindfulness and tranquility.",
                "uz": "Sharq falsafasi inson xotirjamligi va ruhiy hushyorligi bo'yicha teran tushunchalarni taqdim etadi."
              },
              {
                "en": "She expressed profound gratitude to everyone who supported her during difficult days.",
                "uz": "U qiyin kunlarda o'zini qo'llab-quvvatlagan barcha insonlarga chuqur minnatdorchilik bildirdi."
              }
            ]
          },
          {
            "id": "exp-5",
            "word": "Ambiguity",
            "pos": "noun",
            "phonetic": "/ˌæmbɪˈɡjuːəti/",
            "uzbek": "Noaniqlik, ikki xil ma'nolilik",
            "definition": "The quality of being open to more than one interpretation; inexactness.",
            "examples": [
              {
                "en": "Legal contracts must be drafted with utmost precision to eliminate any ambiguity.",
                "uz": "Har qanday ikki xil ma'nolilikni bartaraf etish uchun huquqiy shartnomalar nihoyatda aniq tuzilishi kerak."
              },
              {
                "en": "The poet deliberately used ambiguity to let readers discover personal meanings.",
                "uz": "Shoir kitobxonlar o'zlariga xos ma'nolarni kashf etishlari uchun ataylab ko'p ma'nolilikdan foydalangan."
              },
              {
                "en": "Ambiguity in diplomatic treaties can unfortunately trigger future border disputes.",
                "uz": "Diplomatik bitimlardagi noaniqlik, afsuski, kelajakda chegara mojarolariga sabab bo'lishi mumkin."
              }
            ]
          },
          {
            "id": "exp-6",
            "word": "Benevolent",
            "pos": "adjective",
            "phonetic": "/bəˈnevələnt/",
            "uzbek": "Xayrixoh, saxovatpesha, mehr-oqibatli",
            "definition": "Well-meaning, kindly, and charitably disposed toward helping others.",
            "examples": [
              {
                "en": "A benevolent anonymous donor funded the construction of the children's oncology hospital.",
                "uz": "Saxovatpesha noma'lum homiy bolalar onkologiya shifoxonasi qurilishini to'liq moliyalashtirdi."
              },
              {
                "en": "The monarch was remembered by historical chroniclers as a benevolent and wise sovereign.",
                "uz": "Ushbu hukmdor tarixiy solnomalarda xalqparvar va dono yetakchi sifatida yodga olinadi."
              },
              {
                "en": "His benevolent smile instantly dissipated the nervous anxiety in the audition room.",
                "uz": "Uning xayrixoh tabassumi kasting xonasidagi asabiy hayajonni bir zumda tarqatib yubordi."
              }
            ]
          },
          {
            "id": "exp-7",
            "word": "Conundrum",
            "pos": "noun",
            "phonetic": "/kəˈnʌndrəm/",
            "uzbek": "Jumboq, boshqotirma, chigal muammo",
            "definition": "A confusing and intricate problem, paradox, or question with elusive solutions.",
            "examples": [
              {
                "en": "Balancing urgent economic development with wetland conservation remains a perplexing conundrum.",
                "uz": "Shoshilinch iqtisodiy o'sishni botqoqliklarni asrash bilan muvozanatlash chigal jumboq bo'lib qolmoqda."
              },
              {
                "en": "Ethicists wrestle with the moral conundrum posed by autonomous self-driving vehicle collision protocols.",
                "uz": "Axloqshunoslar haydovchisiz avtomobillarning to'qnashuv algoritmlari keltirib chiqarayotgan axloqiy jumboq ustida bosh qotirmoqdalar."
              },
              {
                "en": "The sudden disappearance of the expedition funds presented auditors with an impenetrable conundrum.",
                "uz": "Ekspeditsiya mablag'larining to'satdan yo'qolishi auditorlar oldiga yechimi qiyin jumboqni qo'ydi."
              }
            ]
          },
          {
            "id": "exp-8",
            "word": "Debilitate",
            "pos": "verb",
            "phonetic": "/dɪˈbɪlɪteɪt/",
            "uzbek": "Zaiflashtirmoq, holdan toydirmoq, kuchsizlantirmoq",
            "definition": "To severely weaken or impair the physical strength, vitality, or structural integrity.",
            "examples": [
              {
                "en": "Chronic viral infections can debilitate patients for months, inhibiting daily occupational duties.",
                "uz": "Surunkali virusli infeksiyalar bemorlarni oylab holdan toydirib, kundalik kasbiy faoliyatga to'sqinlik qilishi mumkin."
              },
              {
                "en": "Prolonged economic sanctions can severely debilitate an adversary's industrial infrastructure.",
                "uz": "Uzoq muddatli iqtisodiy sanksiyalar raqibning sanoat infratuzilmasini jiddiy zaiflashtirishi mumkin."
              },
              {
                "en": "Severe heatwaves debilitating agricultural workers necessitated mandatory afternoon siestas.",
                "uz": "Qishloq xo'jaligi ishchilarini holdan toydirgan kuchli issiq tushdan keyingi majburiy tanaffusni taqozo etdi."
              }
            ]
          },
          {
            "id": "exp-9",
            "word": "Euphemism",
            "pos": "noun",
            "phonetic": "/ˈjuːfəmɪzəm/",
            "uzbek": "Evfemizm (yumshoqroq ifoda)",
            "definition": "A mild, roundabout, or indirect phrase substituted for an expression deemed harsh or offensive.",
            "examples": [
              {
                "en": "Corporations often employ the euphemism 'rightsizing workforce' to soften news of mass dismissals.",
                "uz": "Kompaniyalar ommaviy ishdan bo'shatishlarni yumshatish uchun ko'pincha 'xodimlarni maqbullashtirish' evfemizmidan foydalanadilar."
              },
              {
                "en": "'Passing away' is a ubiquitous poetic euphemism used in condolence letters instead of 'dying'.",
                "uz": "'Olamdan o'tmoq' ta'ziyanomalarda 'o'lmoq' so'zi o'rniga ishlatiladigan keng tarqalgan evfemizmdir."
              },
              {
                "en": "Political speeches are notorious for deploying bureaucratic euphemisms to mask policy failures.",
                "uz": "Siyosiy nutqlar rejalarning barbod bo'lganini yashirish uchun byurokratik evfemizmlarni ishlatish bilan mashhurdir."
              }
            ]
          },
          {
            "id": "exp-10",
            "word": "Facetious",
            "pos": "adjective",
            "phonetic": "/fəˈsiːʃəs/",
            "uzbek": "O'rinsiz hazillashadigan, jiddiy masalaga yengiltak qarovchi",
            "definition": "Treating serious issues with deliberately inappropriate, flippant, or misplaced levity.",
            "examples": [
              {
                "en": "His facetious remarks regarding the solemn budget shortfall infuriated the audit committee.",
                "uz": "Uning jiddiy byudjet taqchilligi borasidagi o'rinsiz hazillari audit qo'mitasining qahrligini keltirdi."
              },
              {
                "en": "Please stop being facetious and give me a straightforward, truthful explanation of the accident.",
                "uz": "Iltimos, hazilni bas qiling va menga baxtsiz hodisaning to'g'ri, samimiy sababini tushuntirib bering."
              },
              {
                "en": "Making facetious jokes during emergency evacuation briefings is strictly forbidden.",
                "uz": "Favqulodda evakuatsiya yo'riqnomasi paytida behuda hazillashish qat'iyan taqiqlanadi."
              }
            ]
          },
          {
            "id": "exp-11",
            "word": "Gregarious",
            "pos": "adjective",
            "phonetic": "/ɡrɪˈɡeəriəs/",
            "uzbek": "Xushchaqchaq, odamovi bo'lmagan, jamoatsevar",
            "definition": "Fond of the company of others; exceptionally sociable, communicative, and lively.",
            "examples": [
              {
                "en": "Being naturally gregarious, he makes lifelong friendships wherever he travels across the globe.",
                "uz": "Tabiatan xushchaqchaq va kirishimli bo'lgani uchun, u dunyo bo'ylab qayerga bormasin, umrboqiy do'stlar orttiradi."
              },
              {
                "en": "Wolves and wild horses are gregarious species that operate within strictly disciplined social packs.",
                "uz": "Bo'rilar va yovvoyi otlar qat'iy tartibli ijtimoiy to'dalarda yashovchi jamoaviy turlardir."
              },
              {
                "en": "Her gregarious personality made her an ideal international public relations ambassador.",
                "uz": "Uning xushmuomala va ochiq tabiati uni xalqaro jamoatchilik bilan aloqalar bo'yicha ajoyib elchiga aylantirdi."
              }
            ]
          },
          {
            "id": "exp-12",
            "word": "Hegemony",
            "pos": "noun",
            "phonetic": "/hɪˈdʒeməni/",
            "uzbek": "Hukmronlik, gegemoniya, mutlaq yetakchilik",
            "definition": "Leadership, prevailing dominance, or socio-economic hegemony exerted by one state or group.",
            "examples": [
              {
                "en": "The rise of multipolar trading alliances challenges Western financial hegemony globally.",
                "uz": "Ko'pqutbli savdo ittifoqlarining kuchayishi G'arbning global moliyaviy gegemoniyasiga jiddiy raqobat tug'dirmoqda."
              },
              {
                "en": "Cultural hegemony influences aesthetics and literature long after political empires dissolve.",
                "uz": "Madaniy hukmronlik siyosiy imperiyalar parchalanib ketganidan keyin ham san'at va adabiyotga uzoq vaqt ta'sir ko'rsatadi."
              },
              {
                "en": "Technological companies battle fiercely to achieve algorithmic hegemony in search engines.",
                "uz": "Texnologiya korporatsiyalari qidiruv tizimlarida algoritmlar bo'yicha mutlaq yetakchilikka erishish uchun kurashmoqdalar."
              }
            ]
          },
          {
            "id": "exp-13",
            "word": "Idiosyncrasy",
            "pos": "noun",
            "phonetic": "/ˌɪdiəʊˈsɪŋkrəsi/",
            "uzbek": "O'ziga xos g'alati odat, o'ziga xoslik",
            "definition": "A distinctive behavioral quirk, personal habit, or individual trait peculiar to someone.",
            "examples": [
              {
                "en": "One peculiar idiosyncrasy of the celebrated mathematician was pacing furiously while solving proofs.",
                "uz": "Mashhur matematikning g'alati odatlaridan biri isbotlarni yechayotganda tinimsiz xona bo'ylab yurish edi."
              },
              {
                "en": "Every natural human language possesses historic grammatical idiosyncrasies that defy simple rules.",
                "uz": "Har bir tabiiy inson tili oddiy qoidalarga bo'ysunmaydigan tarixiy o'ziga xos grammatik nozikliklarga ega."
              },
              {
                "en": "Close friends learn to appreciate each other's lovable quirks and humorous idiosyncrasies.",
                "uz": "Yaqin do'stlar bir-birlarining yoqimli xarakterlari va kulgili g'alati odatlarini qadrlashni o'rganadilar."
              }
            ]
          },
          {
            "id": "exp-14",
            "word": "Lethargic",
            "pos": "adjective",
            "phonetic": "/ləˈθɑːdʒɪk/",
            "uzbek": "Loqayd, holsiz, uyqusiragan",
            "definition": "Lacking all physical energy, enthusiasm, or alertness; sluggish and apathy-stricken.",
            "examples": [
              {
                "en": "Dehydration combined with intense summer sun leaves outdoor athletes feeling dangerously lethargic.",
                "uz": "Suvsizlanish va yozgi jazirama oftob ochiq havodagi sportchilarni xavfli darajada holsiz qilib qo'yadi."
              },
              {
                "en": "The economy endured a prolonged lethargic period characterized by stagnant wages.",
                "uz": "Iqtisodiyot ish haqlarining o'smaganligi bilan ajralib turgan uzoq muddatli sustlik davrini boshdan kechirdi."
              },
              {
                "en": "Thyroid imbalances can cause individuals to feel perpetually exhausted and mentally lethargic.",
                "uz": "Qalqonsimon bez faoliyatining buzilishi insonning doimiy charchoq va aqliy zaiflik his qilishiga sabab bo'lishi mumkin."
              }
            ]
          },
          {
            "id": "exp-15",
            "word": "Magnanimous",
            "pos": "adjective",
            "phonetic": "/mæɡˈnænɪməs/",
            "uzbek": "Olijanob, bag'rikeng, kechirimli",
            "definition": "Noble-spirited, generous, or forgiving, particularly toward an adversary or vanquished rival.",
            "examples": [
              {
                "en": "In his victory speech, the elected statesman proved magnanimous, praising his rival's campaign.",
                "uz": "O'zining g'alaba nutqida saylangan davlat arbobi olijanoblik ko'rsatib, raqibining saylovoldi kurashini maqtadi."
              },
              {
                "en": "It was truly magnanimous of him to overlook the bitter public insults and collaborate on the charity.",
                "uz": "Achchiq ommaviy haqoratlarni kechirib, xayriya loyihasida birga ishlash uning tom ma'nodagi bag'rikengligi edi."
              },
              {
                "en": "True strength reveals itself when powerful champions remain humble and magnanimous in triumph.",
                "uz": "Haqiqiy kuch qudratli chempionlar g'alaba nashidasida kamtar va olijanob bo'lib qolganida namoyon bo'ladi."
              }
            ]
          },
          {
            "id": "exp-16",
            "word": "Nostalgia",
            "pos": "noun",
            "phonetic": "/nɒˈstældʒə/",
            "uzbek": "Nostalgiya, o'tmish qo'msashi",
            "definition": "A sentimental yearning or wistful bittersweet longing for happiness experienced in past eras.",
            "examples": [
              {
                "en": "Listening to vinyl records from his youth evoked overwhelming nostalgia for the quiet 1980s.",
                "uz": "Yoshlik davridagi gramplastinkalarni tinglash 1980-yillarning sokin davriga bo'lgan kuchli nostalgiya tuyg'usini uyg'otdi."
              },
              {
                "en": "Vintage fashion brands leverage consumer nostalgia to market retro clothing designs successfully.",
                "uz": "Vintaj kiyim brendlari retro liboslarni muvaffaqiyatli sotish uchun xaridorlarning o'tmish qo'msashidan unumli foydalanadi."
              },
              {
                "en": "Returning to his childhood elementary school stirred sweet waves of deep nostalgia.",
                "uz": "Bolalikdagi boshlang'ich maktabiga qaytish uning ko'nglida chuqur va yoqimli xotiralar to'lqinini qo'zg'atdi."
              }
            ]
          },
          {
            "id": "exp-17",
            "word": "Ostentatious",
            "pos": "adjective",
            "phonetic": "/ˌɒstenˈteɪʃəs/",
            "uzbek": "Ko'z-ko'z qiluvchi, dabdabali, maqtanchoq",
            "definition": "Characterized by pretentious, vulgar, or flamboyant display designed to impress spectators.",
            "examples": [
              {
                "en": "Flaunting gold-plated sports cars through quiet suburban avenues was criticized as ostentatious.",
                "uz": "Tinch shahar chetidagi ko'chalarda tilla bilan qoplangan sport mashinalarini ko'z-ko'z qilish dabdabavozlik deb tanqid qilindi."
              },
              {
                "en": "The billionaire avoided ostentatious displays of wealth, dressing in simple cotton shirts.",
                "uz": "Milliarder oddiy paxtali ko'ylaklar kiyib, boyligini ko'z-ko'z qilishdan o'zini tiydi."
              },
              {
                "en": "Her ostentatious diamond necklace dazzled photographers lining the prestigious red carpet.",
                "uz": "Uning dabdabali olmos marjoni nufuzli qizil yo'lak bo'ylab saf tortgan fotosuratchilarni hayratda qoldirdi."
              }
            ]
          },
          {
            "id": "exp-18",
            "word": "Pernicious",
            "pos": "adjective",
            "phonetic": "/pəˈnɪʃəs/",
            "uzbek": "Juda zararli, halokatli, bildirmay yemiruvchi",
            "definition": "Having an insidious, gradual, and severely destructive impact over time.",
            "examples": [
              {
                "en": "Unchecked corruption exerts a pernicious effect upon judicial fairness and public trust.",
                "uz": "Jilovlanmagan korrupsiya sud adolatiga va xalq ishonchiga juda zararli va yemiruvchi ta'sir ko'rsatadi."
              },
              {
                "en": "Sedentary living poses a pernicious threat to modern cardiovascular longevity.",
                "uz": "Kamharakat turmush tarzi zamonaviy yurak-qon tomir salomatligiga bildirmay jiddiy ziyon yetkazadi."
              },
              {
                "en": "Propaganda spreads pernicious falsehoods that gradually polarize civic communities.",
                "uz": "Targ'ibot asta-sekin fuqarolik jamiyatini ikkiga bo'lib yuboradigan halokatli yolg'onlarni tarqatadi."
              }
            ]
          },
          {
            "id": "exp-19",
            "word": "Quixotic",
            "pos": "adjective",
            "phonetic": "/kwɪkˈsɒtɪk/",
            "uzbek": "Xayolparast, amaliyotga to'g'ri kelmaydigan, Don Kixotona",
            "definition": "Extravagantly chivalrous, exceedingly idealistic, unrealistic, or hopelessly impractical.",
            "examples": [
              {
                "en": "His quixotic crusade to eliminate every single bureaucratic regulation within a month failed predictably.",
                "uz": "Uning bir oy ichida barcha byurokratik qoidalarni yo'q qilishga qaratilgan xayolparast urinishi kutilganidek puchga chiqdi."
              },
              {
                "en": "Venture capitalists dismissed the perpetual motion machine concept as an endearing but quixotic fantasy.",
                "uz": "Venchur sarmoyadorlari abadiy dvigatel g'oyasini samimiy, ammo mutlaqo amalga oshmaydigan xayol deb rad etdilar."
              },
              {
                "en": "Don Quixote's heroic endeavors embody the quintessential archetype of noble, quixotic folly.",
                "uz": "Don Kixotning qahramonona harakatlari olijanob, xayolparast soddalikning mumtoz timsolidir."
              }
            ]
          },
          {
            "id": "exp-20",
            "word": "Reticent",
            "pos": "adjective",
            "phonetic": "/ˈretɪsnt/",
            "uzbek": "Kamgap, sirlarini oshkor qilmaydigan, bosiq",
            "definition": "Disinclined to speak readily; deeply reserved and quiet regarding one's private thoughts.",
            "examples": [
              {
                "en": "The reclusive author remained famously reticent about the autobiographical roots of his novels.",
                "uz": "Guvohlardan yiroq yashaydigan yozuvchi romanlarining avtobiografik ildizlari haqida kamgap bo'lib qolishni ma'qul ko'rgan."
              },
              {
                "en": "Witnesses were strangely reticent to speak with detectives investigating the syndicate.",
                "uz": "Guvohlar jinoiy to'dani tekshirayotgan tergovchilar bilan gaplashishda negadir juda ehtiyotkor va bosiq edilar."
              },
              {
                "en": "Despite his reticent demeanor in meetings, his written reports were remarkably expressive.",
                "uz": "Majlislarda kamgapligiga qaramay, uning yozma hisobotlari nihoyatda mazmundor va ifodali edi."
              }
            ]
          },
          {
            "id": "exp-21",
            "word": "Superfluous",
            "pos": "adjective",
            "phonetic": "/suːˈpɜːfluəs/",
            "uzbek": "Ortiqcha, keraksiz, ortiqchalik qiladigan",
            "definition": "Exceeding what is sufficient, necessary, or practical; redundant and unneeded.",
            "examples": [
              {
                "en": "The editor excised three chapters of superfluous exposition to tighten the thriller's narrative.",
                "uz": "Muharrir asarning o'qilishini tezlashtirish uchun ortiqcha bayon qilingan uchta bobni qisqartirib tashladi."
              },
              {
                "en": "Modern minimalist interior decor strips away all superfluous trinkets in favor of spatial serenity.",
                "uz": "Zamonaviy minimalist uy bezagi kenglik sokinligini ta'minlash uchun barcha keraksiz mayda-chuydalarni olib tashlaydi."
              },
              {
                "en": "Bringing heavy winter coats to Dubai in July is utterly superfluous.",
                "uz": "Iyul oyida Dubayga qalin qishki palto olib borish mutlaqo keraksiz va ortiqchadir."
              }
            ]
          },
          {
            "id": "exp-22",
            "word": "Tenacious",
            "pos": "adjective",
            "phonetic": "/təˈneɪʃəs/",
            "uzbek": "Matonatli, o'jar darajada qat'iyatli",
            "definition": "Holding firm, resolute, and persistent; refusing to capitulate in the face of adversity.",
            "examples": [
              {
                "en": "Thanks to tenacious investigative journalism, the multi-million dollar banking fraud was exposed.",
                "uz": "Matonatli surishtiruv jurnalistikasi tufayli ko'p million dollarlik bank firibgarligi fosh qilindi."
              },
              {
                "en": "The injured marathon runner displayed tenacious willpower to cross the finish line.",
                "uz": "Jarohatlangan marafonchi marra chizig'ini kesib o'tish uchun matonatli iroda namoyon etdi."
              },
              {
                "en": "Desert plants survive extreme drought due to their tenacious root systems anchoring deep underground.",
                "uz": "Cho'l o'simliklari yer tubiga chuqur kirib borgan mustahkam ildiz tizimi tufayli qurg'oqchilikda omon qoladi."
              }
            ]
          },
          {
            "id": "exp-23",
            "word": "Venerable",
            "pos": "adjective",
            "phonetic": "/ˈvenərəbl/",
            "uzbek": "Muhtaram, mo'tabar, hurmatga sazovor",
            "definition": "Commanding profound respect and deference, especially owing to immense age, wisdom, or character.",
            "examples": [
              {
                "en": "Students listened in reverent silence as the venerable professor delivered his farewell academic address.",
                "uz": "Mo'tabar professor o'zining xayrlashuv ilmiy nutqini so'zlaganda, talabalar ehtirom bilan jim tingladilar."
              },
              {
                "en": "The historic madrasahs of Bukhara are venerable architectural landmarks revered across the globe.",
                "uz": "Buxoroning tarixiy madrasalari butun dunyoda e'zozlanadigan muhtaram me'moriy obidalardir."
              },
              {
                "en": "The venerable legal institution celebrated its bicentennial anniversary of judicial integrity.",
                "uz": "Mo'tabar huquqiy dargoh sud adolati bo'yicha o'zining ikki yuz yillik yubileyini nishonladi."
              }
            ]
          },
          {
            "id": "exp-24",
            "word": "Whimsical",
            "pos": "adjective",
            "phonetic": "/ˈwɪmzɪkl/",
            "uzbek": "G'aroyib, injiq-sho'x, o'ynoqi fantaziyaga boy",
            "definition": "Playfully quaint, fanciful, capricious, or creatively lighthearted in appealing ways.",
            "examples": [
              {
                "en": "The animated film enchanted audiences through its whimsical universe filled with flying tea kettles.",
                "uz": "Multiplikatsion film uchuvchi choynaklar bilan to'la g'aroyib olami orqali tomoshabinlarni maftun etdi."
              },
              {
                "en": "Her whimsical paintings blend vivid pastel colors with surreal celestial creatures.",
                "uz": "Uning o'ynoqi xayolotga boy rasmlari yorqin pastel ranglarni g'aroyib samoviy mavjudotlar bilan uyg'unlashtiradi."
              },
              {
                "en": "Children adore the book's whimsical rhymes and humorous animal illustrations.",
                "uz": "Bolalar kitobdagi sho'x qofiyalar va kulgili hayvon rasmlarini juda yaxshi ko'rishadi."
              }
            ]
          },
          {
            "id": "exp-25",
            "word": "Zealous",
            "pos": "adjective",
            "phonetic": "/ˈzeləs/",
            "uzbek": "G'ayratli, fidoyi, ishtiyoqmand",
            "definition": "Showing ardent enthusiasm, tireless devotion, and fervent commitment to a cause.",
            "examples": [
              {
                "en": "The zealous environmental volunteers planted over ten thousand saplings in a single weekend.",
                "uz": "G'ayratli ekologik ko'ngillilar bitta dam olish kunida o'n mingdan ortiq ko'chat o'tqazdilar."
              },
              {
                "en": "A zealous defender of consumer civil rights, the attorney worked pro bono for indigent families.",
                "uz": "Iste'molchilar huquqlarining fidoyi himoyachisi bo'lgan advokat kam ta'minlangan oilalar uchun bepul ishladi."
              },
              {
                "en": "Beware that overly zealous perfectionism does not paralyze creative teamwork productivity.",
                "uz": "Haddan tashqari o'ta talabchanlik jamoaning ijodiy unumdorligini to'xtatib qo'ymasligiga e'tibor bering."
              }
            ]
          },
          {
            "id": "exp-26",
            "word": "Alacrity",
            "pos": "noun",
            "phonetic": "/əˈlækrəti/",
            "uzbek": "Jon-dildan tayyorgarlik, chaqqonlik, shodlik bilan harakat",
            "definition": "Brisk, enthusiastic, and cheerful readiness to act or assist.",
            "examples": [
              {
                "en": "The young apprentice accepted the challenging engineering assignment with genuine alacrity.",
                "uz": "Yosh shogird murakkab muhandislik topshirig'ini chin dildan va katta mamnuniyat bilan qabul qildi."
              },
              {
                "en": "Hotel concierges responded to customer luggage inquiries with polite speed and alacrity.",
                "uz": "Mehmonxona xodimlari mijozlarning yuklar bo'yicha iltimoslariga xushmuomalalik va chaqqonlik bilan javob berdilar."
              },
              {
                "en": "When asked to volunteer for the school play, she raised her hand with evident alacrity.",
                "uz": "Maktab spektaklida qatnashish taklif qilinganda, u ko'rinib turgan shodlik bilan qo'l ko'tardi."
              }
            ]
          },
          {
            "id": "exp-27",
            "word": "Cacophony",
            "pos": "noun",
            "phonetic": "/kəˈkɒfəni/",
            "uzbek": "Quloqni teshuvchi shovqin, tartibsiz tovushlar",
            "definition": "A harsh, jarring, and discordant mixture of loud colliding sounds.",
            "examples": [
              {
                "en": "A jarring cacophony of blaring horns and construction drills echoed through the metropolitan intersection.",
                "uz": "Metropoliten chorrahasida jaranglagan avtomobil signallari va qurilish burg'ularining noxush shovqini aks-sado berdi."
              },
              {
                "en": "Stepping from the tranquil library into the bazaar plunged us into a colorful cacophony of vendors.",
                "uz": "Sokin kutubxonadan bozorga qadam qo'yishimiz bilan sotuvchilarning shovqin-suronli to'lqiniga sho'ng'idik."
              },
              {
                "en": "Before the conductor raised his baton, the tuning orchestra produced a chaotic acoustic cacophony.",
                "uz": "Dirijyor tayog'ini ko'tarishdan oldin sozlanayotgan orkestr tartibsiz tovushlar shovqinini hosil qildi."
              }
            ]
          },
          {
            "id": "exp-28",
            "word": "Ephemeral",
            "pos": "adjective",
            "phonetic": "/ɪˈfemərəl/",
            "uzbek": "Bir lahzalik, o'tkinchi, qisqa umr ko'ruvchi",
            "definition": "Lasting for a remarkably fleeting, transient, or brief duration of time.",
            "examples": [
              {
                "en": "Cherry blossom blooms are beloved across Japan precisely because of their exquisite, ephemeral beauty.",
                "uz": "Gilos gullari Yaponiyada aynan o'zlarining nafis va bir lahzalik o'tkinchi go'zalligi sababli seviladi."
              },
              {
                "en": "Fame derived solely from viral internet memes is notoriously superficial and ephemeral.",
                "uz": "Faqat internet memlaridan keladigan mashhurlik odatda yuzaki va o'tkinchidir."
              },
              {
                "en": "Morning dew glittering on spiderwebs is an ephemeral spectacle vanishing under sunrise rays.",
                "uz": "O'rgimchak to'rida jilvalangan ertalabki shudring quyosh nurlarida g'oyib bo'luvchi o'tkinchi manzaradir."
              }
            ]
          },
          {
            "id": "exp-29",
            "word": "Incongruous",
            "pos": "adjective",
            "phonetic": "/ɪnˈkɒŋɡruəs/",
            "uzbek": "Nomutanosib, mos kelmaydigan, g'alati tarzda yot",
            "definition": "Not in harmony, keeping, or conformity with surroundings or context.",
            "examples": [
              {
                "en": "The ultramodern glass skyscraper looked strikingly incongruous among medieval stone cottages.",
                "uz": "Zamonaviy shisha osmono'par bino o'rta asr tosh uylari orasida hayratlanarli darajada nomutanosib ko'rindi."
              },
              {
                "en": "Wearing flip-flops and athletic shorts to a formal diplomatic banquet was shockingly incongruous.",
                "uz": "Rasmiy diplomatik ziyofatga shippak va sport kalta shimi kiyib kelish mutlaqo noo'rin va nomunosib edi."
              },
              {
                "en": "His cheerful upbeat whistling sounded incongruous against the gloomy rainstorm backdrop.",
                "uz": "Uning quvnoq hushtak chalishi ma'yus yomg'ir bo'roni fonida g'alati va nomutanosib eshitildi."
              }
            ]
          },
          {
            "id": "exp-30",
            "word": "Surreptitious",
            "pos": "adjective",
            "phonetic": "/ˌsʌrəpˈtɪʃəs/",
            "uzbek": "Yashirincha, bildirmay qilingan, pana-pastqam",
            "definition": "Kept strictly secret, covert, or stealthy, particularly because unauthorized.",
            "examples": [
              {
                "en": "He cast a surreptitious glance at his wristwatch while pretending to listen to the boring speaker.",
                "uz": "U zerikarli ma'ruzachini tinglayotgandek ko'rinib, yashirincha qo'l soatiga ko'z tashlab qo'ydi."
              },
              {
                "en": "The covert operative completed a surreptitious exchange of intelligence files in the subway.",
                "uz": "Maxfiy josus metro bekatida razvedka fayllarini yashirincha topshirishni yakunladi."
              },
              {
                "en": "Taking surreptitious photographs inside the classified military museum is strictly prohibited.",
                "uz": "Maxfiy harbiy muzey ichida bildirmay suratga olish qat'iyan man etiladi."
              }
            ]
          }
        ],
        "unitNumber": 9,
        "category": "Advanced Language"
      },
      {
        "id": "c1-governance",
        "title": "Unit 10: Bureaucracy, Governance & Red Tape (Byurokratiya, boshqaruv va rasmiyatchilik)",
        "unitNumber": 10,
        "category": "Governance & Administration",
        "icon": "fa-landmark",
        "color": "from-slate-700 to-zinc-900",
        "cambridge_source": "Cambridge English Vocabulary in Use Advanced, Unit 101: Red tape",
        "words": [
          {
            "id": "c1-gov-1",
            "word": "Red tape",
            "pos": "idiom",
            "phonetic": "/red teɪp/",
            "uzbek": "Byurokratiya, ortiqcha rasmiyatchilik va qog'ozbozlik",
            "definition": "Official rules and processes that seem unnecessary and delay results or decisions.",
            "examples": [
              {
                "en": "Entrepreneurs frequently complain that excessive red tape stifles small business innovation and growth.",
                "uz": "Tadbirkorlar ortiqcha qog'ozbozlik kichik biznesdagi innovatsiyalar va o'sishni bo'g'ib qo'yishidan tez-tez shikoyat qiladilar."
              },
              {
                "en": "The government launched an ambitious regulatory commission dedicated to cutting through bureaucratic red tape.",
                "uz": "Hukumat byurokratik rasmiyatchilikni qisqartirishga bag'ishlangan nufuzli nazorat komissiyasini ishga tushirdi."
              },
              {
                "en": "Securing export permits involved wading through months of exasperating departmental red tape.",
                "uz": "Eksport ruxsatnomalarini olish oylarga cho'zilgan asabiy idoraviy qog'ozbozlikni yengib o'tishni talab qildi."
              }
            ]
          },
          {
            "id": "c1-gov-2",
            "word": "Commence",
            "pos": "verb",
            "phonetic": "/kəˈmens/",
            "uzbek": "Boshlanmoq, start olmoq (rasmiy hujjatlarda)",
            "definition": "To begin or start something, used especially in formal, legal, or bureaucratic language.",
            "examples": [
              {
                "en": "Official highway maintenance work will commence on the first of June as scheduled.",
                "uz": "Katta yo'llarga rasmiy xizmat ko'rsatish ishlari rejalashtirilganidek birinchi iyundan boshlanadi."
              },
              {
                "en": "The academic semester commences immediately following the registration and orientation period.",
                "uz": "O'quv semestri ro'yxatdan o'tish va tanishuv davridan so'ng darhol boshlanadi."
              },
              {
                "en": "The formal treaty proceedings commenced with opening addresses by each visiting head of state.",
                "uz": "Rasmiy shartnoma jarayoni har bir tashrif buyurgan davlat rahbarining kirish nutqi bilan boshlandi."
              }
            ]
          },
          {
            "id": "c1-gov-3",
            "word": "Cease",
            "pos": "verb",
            "phonetic": "/siːs/",
            "uzbek": "To'xtatmoq, faoliyatini to'xtatmoq",
            "definition": "To come or bring to an end; to stop happening or existing.",
            "examples": [
              {
                "en": "The manufacturing enterprise officially ceased all industrial operations late last year.",
                "uz": "Ishlab chiqarish korxonasi o'tgan yilning oxirida barcha sanoat faoliyatini rasman to'xtatdi."
              },
              {
                "en": "Hostilities ceased immediately following the formal signing of the bilateral ceasefire accord.",
                "uz": "Ikki tomonlama o't ochishni to'xtatish to'g'risidagi bitim rasman imzolangandan so'ng harbiy harakatlar darhol to'xtadi."
              },
              {
                "en": "Unless environmental infractions cease, the municipal license will be permanently revoked.",
                "uz": "Agar ekologik qonunbuzarliklar to'xtatilmasa, shahar litsenziyasi butunlay bekor qilinadi."
              }
            ]
          },
          {
            "id": "c1-gov-4",
            "word": "Deceased",
            "pos": "noun",
            "phonetic": "/dɪˈsiːst/",
            "uzbek": "Marhum, vafot etgan shaxs (rasmiy/yuridik tilda)",
            "definition": "A person who has died, used especially in legal contexts and formal bureaucratic documents.",
            "examples": [
              {
                "en": "Personal property belonging to the deceased will be officially transferred to the verified next of kin.",
                "uz": "Marhumga tegishli shaxsiy mol-mulk rasman tasdiqlangan eng yaqin qarindoshiga topshiriladi."
              },
              {
                "en": "The legal executor read the last will and testament of the deceased to gathered relatives.",
                "uz": "Yuridik ijrochi yig'ilgan qarindoshlar oldida marhumning so'nggi vasiyatnomasini o'qib eshitirdi."
              },
              {
                "en": "Financial accounts registered to the deceased remain frozen pending legal probate clearance.",
                "uz": "Marhum nomiga ochilgan moliyaviy hisoblar rasmiy meros tasdiqlanguncha muzlatilgan holatda qoladi."
              }
            ]
          },
          {
            "id": "c1-gov-5",
            "word": "Next of kin",
            "pos": "noun",
            "phonetic": "/ˌnekst əv ˈkɪn/",
            "uzbek": "Eng yaqin qarindosh (yuridik javobgar)",
            "definition": "A person's closest living relative or relatives, legally entitled to inherit or make emergency decisions.",
            "examples": [
              {
                "en": "Please provide the official emergency contact telephone details for your designated next of kin.",
                "uz": "Iltimos, o'zingiz belgilagan eng yaqin qarindoshingizning favqulodda bog'lanish telefon raqamlarini taqdim eting."
              },
              {
                "en": "Hospital administrators immediately notified the patient's next of kin prior to emergency surgery.",
                "uz": "Kasalxona ma'muriyati shoshilinch operatsiyadan oldin darhol bemorning eng yaqin qarindoshini xabardor qildi."
              },
              {
                "en": "Under intestacy laws, all intestate assets automatically devolve to the surviving next of kin.",
                "uz": "Vasiyatnomasiz meros qonunlariga ko'ra, barcha mulklar avtomatik ravishda tirik qolgan eng yaqin qarindoshga o'tadi."
              }
            ]
          },
          {
            "id": "c1-gov-6",
            "word": "Endeavour",
            "pos": "verb",
            "phonetic": "/ɪnˈdevə/",
            "uzbek": "Qattiq harakat qilmoq, jon-jahdi bilan intilmoq",
            "definition": "To try very hard to do or achieve something in formal, administrative contexts.",
            "examples": [
              {
                "en": "Residential tenants must endeavour to maintain communal stairwells tidy and unobstructed at all times.",
                "uz": "Uy ijarachilari umumiy zinapoyalarni doimo toza va to'siqlarsiz saqlashga jiddiy harakat qilishlari shart."
              },
              {
                "en": "Our department will endeavour to process your passport renewal dossier within ten working days.",
                "uz": "Bizning bo'limimiz o'n ish kuni ichida pasportingizni yangilash hujjatlarini rasmiylashtirishga harakat qiladi."
              },
              {
                "en": "Diplomatic emissaries endeavoured to reconcile opposing delegations before the summit concluded.",
                "uz": "Diplomatik vakillar sammit yakunlanishidan oldin qarama-qarshi delegatsiyalarni yarashtirishga jon-jahdi bilan urindilar."
              }
            ]
          },
          {
            "id": "c1-gov-7",
            "word": "Facilitate",
            "pos": "verb",
            "phonetic": "/fəˈsɪlɪteɪt/",
            "uzbek": "Osonlashtirmoq, ko'maklashmoq",
            "definition": "To make an action or process easy or easier to accomplish.",
            "examples": [
              {
                "en": "The newly commissioned orbital bypass will facilitate the smooth movement of heavy transit vehicles.",
                "uz": "Yangi foydalanishga topshirilgan aylanma yo'l og'ir tranzit transport vositalarining erkin harakatlanishini osonlashtiradi."
              },
              {
                "en": "Online administrative portals facilitate the prompt registration of commercial corporate entities.",
                "uz": "Onlayn ma'muriy portallar tijorat yuridik shaxslarini tezkor ro'yxatdan o'tkazishni osonlashtiradi."
              },
              {
                "en": "A bilateral customs accord was ratified to facilitate cross-border agricultural commerce.",
                "uz": "Chegara orqali qishloq xo'jaligi savdosini osonlashtirish uchun ikki tomonlama bojxona bitimi ratifikatsiya qilindi."
              }
            ]
          },
          {
            "id": "c1-gov-8",
            "word": "Rectify",
            "pos": "verb",
            "phonetic": "/ˈrektɪfaɪ/",
            "uzbek": "Xatoni to'g'irlamoq, tuzatmoq",
            "definition": "To put right or correct something that is mistaken, flawed, or unfair.",
            "examples": [
              {
                "en": "We are currently attempting to rectify the bureaucratic administrative error without inconveniencing citizens.",
                "uz": "Hozirda biz fuqarolarga noqulaylik tug'dirmasdan byurokratik ma'muriy xatoni tuzatishga harakat qilmoqdamiz."
              },
              {
                "en": "The financial comptroller stepped in promptly to rectify discrepancies discovered in the municipal ledger.",
                "uz": "Moliya nazoratchisi shahar hisob-kitob daftarida aniqlangan tafovutlarni bartaraf etish uchun tezda aralashdi."
              },
              {
                "en": "Immediate operational adjustments were mandated to rectify systemic health and safety violations.",
                "uz": "Tizimli sog'liq va xavfsizlik qoidabuzarliklarini to'g'irlash uchun zudlik bilan tezkor o'zgartirishlar talab qilindi."
              }
            ]
          },
          {
            "id": "c1-gov-9",
            "word": "Notify",
            "pos": "verb",
            "phonetic": "/ˈnəʊtɪfaɪ/",
            "uzbek": "Rasman xabardor qilmoq, bildirishnoma yubormoq",
            "definition": "To inform someone formally or officially of something.",
            "examples": [
              {
                "en": "Residents must notify the municipal council immediately of any permanent change of residential address.",
                "uz": "Aholi doimiy yashash manzili o'zgargan taqdirda darhol shahar kengashini rasman xabardor qilishi shart."
              },
              {
                "en": "The revenue board notified all registered companies regarding updated corporate taxation schedules.",
                "uz": "Soliq qo'mitasi barcha ro'yxatdan o'tgan korxonalarni yangilangan korporativ soliq muddatlari to'g'risida xabardor qildi."
              },
              {
                "en": "Candidates will be formally notified by post once examination scores are verified.",
                "uz": "Imtihon natijalari tasdiqlangach, nomzodlar pochta orqali rasmiy ravishda xabardor qilinadi."
              }
            ]
          },
          {
            "id": "c1-gov-10",
            "word": "Earliest convenience",
            "pos": "phrase",
            "phonetic": "/ˈɜːliɪst kənˈviːniəns/",
            "uzbek": "Iloji boricha tezroq / birinchi qulay imkoniyatda",
            "definition": "As soon as possible, used as a polite, formal formula in administrative letters and requests.",
            "examples": [
              {
                "en": "I would be exceptionally grateful for an official written response at your earliest convenience.",
                "uz": "Iloji boricha tezroq rasmiy yozma javob bersangiz, sizdan benihoya minnatdor bo'lardim."
              },
              {
                "en": "Please complete and countersign the enclosed legal affidavits at your earliest convenience.",
                "uz": "Ilova qilingan qonuniy dalolatnomalarni iloji boricha tezroq to'ldirib, imzolab berishingizni so'raymiz."
              },
              {
                "en": "Kindly submit your financial statements at your earliest convenience to expedite clearance.",
                "uz": "Rasmiylashtirishni tezlashtirish uchun moliyaviy hisobotlaringizni birinchi qulay imkoniyatda topshiring."
              }
            ]
          },
          {
            "id": "c1-gov-11",
            "word": "Clarification",
            "pos": "noun",
            "phonetic": "/ˌklærɪfɪˈkeɪʃən/",
            "uzbek": "Oydinlik kiritish, tushuntirish, izoh",
            "definition": "The act of making a statement, rule, or situation clear and easy to comprehend.",
            "examples": [
              {
                "en": "Please do not hesitate to contact our legal counsel if further regulatory clarification is required.",
                "uz": "Agar qoidalar bo'yicha qo'shimcha tushuntirish talab etilsa, ikkilanmasdan yuridik maslahatchimizga murojaat qiling."
              },
              {
                "en": "The trade ministry released an explanatory memo to provide clarification on export licensing limits.",
                "uz": "Savdo vazirligi eksport litsenziyasi cheklovlari bo'yicha oydinlik kiritish uchun tushuntirish xatini e'lon qildi."
              },
              {
                "en": "Opposition MPs demanded immediate official clarification on the mysterious state subsidy allocation.",
                "uz": "Muxolifatdagi deputatlar sirli davlat subsidiyalari taqsimoti bo'yicha darhol rasmiy tushuntirish talab qildilar."
              }
            ]
          },
          {
            "id": "c1-gov-12",
            "word": "In respect of",
            "pos": "phrase",
            "phonetic": "/ɪn rɪˈspekt əv/",
            "uzbek": "...ga nisbatan, ...ga tegishli",
            "definition": "Relating to or concerning something; in connection with.",
            "examples": [
              {
                "en": "I enclose certified payment in respect of your outstanding municipal property invoice.",
                "uz": "Sizning to'lanmagan shahar mulk hisob-fakturangizga tegishli tasdiqlangan to'lovni ilova qilaman."
              },
              {
                "en": "A formal inquiry was launched in respect of allegations of improper ministerial procurement.",
                "uz": "Vazirlikdagi noo'rin xaridlar bo'yicha da'volarga nisbatan rasmiy surishtiruv boshlandi."
              },
              {
                "en": "Strict penalties apply in respect of any tax returns submitted after the statutory deadline.",
                "uz": "Qonuniy muddatdan keyin topshirilgan har qanday soliq deklaratsiyasiga nisbatan qat'iy jazolar qo'llaniladi."
              }
            ]
          },
          {
            "id": "c1-gov-13",
            "word": "With regard to",
            "pos": "phrase",
            "phonetic": "/wɪð rɪˈɡɑːd tuː/",
            "uzbek": "...ga kelsak, ...masalasida",
            "definition": "Concerning; in connection with; about.",
            "examples": [
              {
                "en": "I am writing with regard to the planning application published in today's official municipal gazette.",
                "uz": "Men bugungi rasmiy shahar gazetasida e'lon qilingan rejalashtirish arizasi yuzasidan yozyapman."
              },
              {
                "en": "The auditor raised critical queries with regard to internal inventory governance.",
                "uz": "Auditor ichki inventar boshqaruvi masalasida muhim savollarni o'rtaga tashladi."
              },
              {
                "en": "With regard to public consultation, all local community residents will be granted an equal voice.",
                "uz": "Jamoat maslahatlashuvlariga kelsak, barcha mahalliy aholiga teng ovoz berish imkoniyati beriladi."
              }
            ]
          },
          {
            "id": "c1-gov-14",
            "word": "Comply with",
            "pos": "phrase",
            "phonetic": "/kəmˈplaɪ wɪð/",
            "uzbek": "Qoidalarga rioya qilmoq, bo'ysunmoq",
            "definition": "To act in accordance with a wish, command, statute, or set of government regulations.",
            "examples": [
              {
                "en": "Commercial corporate clients must strictly comply with the following statutory financial regulations.",
                "uz": "Tijoriy korporativ mijozlar quyidagi qonuniy moliyaviy qoidalarga qat'iy rioya qilishlari shart."
              },
              {
                "en": "Failure to comply with workplace safety mandates will result in immediate suspension of operations.",
                "uz": "Mehnat xavfsizligi talablariga rioya qilmaslik korxona faoliyatining darhol to'xtatilishiga olib keladi."
              },
              {
                "en": "All imported medical appliances must comply with European hygiene standards.",
                "uz": "Barcha import qilingan tibbiy uskunalar Yevropa gigiyena standartlariga mos kelishi shart."
              }
            ]
          },
          {
            "id": "c1-gov-15",
            "word": "Without foundation",
            "pos": "phrase",
            "phonetic": "/wɪðˈaʊt faʊnˈdeɪʃən/",
            "uzbek": "Hech qanday asossiz, puch da'vo",
            "definition": "Untrue and not based on any facts or verified evidence.",
            "examples": [
              {
                "en": "Your complaints have been thoroughly investigated by an ombudsman and are deemed entirely without foundation.",
                "uz": "Sizning shikoyatlaringiz ombudsman tomonidan atroflicha o'rganildi va mutlaqo asossiz deb topildi."
              },
              {
                "en": "The spokesperson dismissed sensational press rumours of cabinet splits as completely without foundation.",
                "uz": "Matbuot kotibi hukumatdagi kelishmovchiliklar haqidagi mish-mishlarni mutlaqo asossiz deb rad etdi."
              },
              {
                "en": "Defamation law protects public servants from accusations made recklessly without foundation.",
                "uz": "Tuhmat to'g'risidagi qonun davlat xizmatchilarini hech qanday asossiz qo'yilgan asossiz ayblovlardan himoya qiladi."
              }
            ]
          },
          {
            "id": "c1-gov-16",
            "word": "Refrain from",
            "pos": "phrase",
            "phonetic": "/rɪˈfreɪn frɒm/",
            "uzbek": "...dan o'zini tiymoq, cheklanmoq (rasmiy ko'rsatma)",
            "definition": "To stop oneself from doing something, especially in formal prohibitions or courteous requests.",
            "examples": [
              {
                "en": "Passengers and visitors are courteously requested to refrain from smoking within all terminal buildings.",
                "uz": "Yo'lovchilar va mehmonlardan barcha vokzal binolari ichida chekishdan o'zlarini tiyishlari muloyimlik bilan so'raladi."
              },
              {
                "en": "Judicial officers must refrain from public commentary on active pending trials.",
                "uz": "Sudyalik xodimlari ko'rib chiqilayotgan faol sud ishlari bo'yicha ommaviy izoh berishdan cheklanishlari shart."
              },
              {
                "en": "Please refrain from using mobile cellular communication during the formal parliamentary debate.",
                "uz": "Rasmiy parlament muzokaralari paytida mobil aloqadan foydalanishdan o'zingizni tiying."
              }
            ]
          },
          {
            "id": "c1-gov-17",
            "word": "Communal",
            "pos": "adjective",
            "phonetic": "/ˈkɒmjʊnəl/",
            "uzbek": "Umumiy, jamoaviy (birgalikda foydalaniladigan)",
            "definition": "Shared, used, or possessed in common by all members of a group or residential community.",
            "examples": [
              {
                "en": "Residents share equal joint responsibility for the maintenance and lighting of communal hallways.",
                "uz": "Aholi umumiy yo'laklarni saqlash va yoritish uchun teng birgalikdagi mas'uliyatni o'z zimmalariga oladilar."
              },
              {
                "en": "A communal garden was established where apartment neighbours cultivate fresh herbs and vegetables.",
                "uz": "Ko'p qavatli uy qo'shnilari yangi ko'katlar va sabzavotlar yetishtiradigan umumiy bog' tashkil etildi."
              },
              {
                "en": "Disputes erupted concerning the cleaning schedules of communal culinary kitchens.",
                "uz": "Umumiy oshxonalarni tozalash jadvallari bo'yicha kelishmovchiliklar kelib chiqdi."
              }
            ]
          },
          {
            "id": "c1-gov-18",
            "word": "Evacuate",
            "pos": "verb",
            "phonetic": "/ɪˈvækjueɪt/",
            "uzbek": "Evakuatsiya qilmoq, odamlarni xavfsiz joyga ko'chirmoq",
            "definition": "To remove someone from a place of danger to a safe place.",
            "examples": [
              {
                "en": "In the event of an outbreak of fire, the entire complex must be evacuated immediately.",
                "uz": "Yong'in chiqqan taqdirda, butun majmua zudlik bilan xavfsiz evakuatsiya qilinishi kerak."
              },
              {
                "en": "Rescue forces evacuated thousands of riverside inhabitants ahead of the anticipated typhoon.",
                "uz": "Qutqaruv kuchlari kutilayotgan to'fon oldidan daryo bo'yidagi minglab aholini xavfsiz joyga ko'chirdilar."
              },
              {
                "en": "Emergency protocols dictate systematic routes to evacuate disabled employees safely.",
                "uz": "Favqulodda vaziyat protokollari imkoniyati cheklangan xodimlarni xavfsiz evakuatsiya qilishning tizimli yo'nalishlarini belgilaydi."
              }
            ]
          },
          {
            "id": "c1-gov-19",
            "word": "Bestow",
            "pos": "verb",
            "phonetic": "/bɪˈstəʊ/",
            "uzbek": "Taqdim etmoq, in'om qilmoq, ato etmoq (unvon yoki huquq)",
            "definition": "To confer or present an honour, right, or gift upon someone formally.",
            "examples": [
              {
                "en": "The sovereign council bestowed the medal of civic valour upon the heroic rescue worker.",
                "uz": "Oliy kengash qahramon qutqaruvchiga fuqarolik jasorati medalini tantanali ravishda topshirdi."
              },
              {
                "en": "Statutory awards bestowed under the Public Health Act are calculated without reference to income.",
                "uz": "Sog'liqni saqlash to'g'risidagi qonun bo'yicha beriladigan rasmiy mukofotlar daromadga bog'liq bo'lmagan holda hisoblanadi."
              },
              {
                "en": "The university chancellor bestowed an honorary doctorate upon the legendary human rights attorney.",
                "uz": "Universitet rektori afsonaviy inson huquqlari himoyachisi bo'lgan advokatga faxriy doktorlik unvonini topshirdi."
              }
            ]
          },
          {
            "id": "c1-gov-20",
            "word": "Demolish",
            "pos": "verb",
            "phonetic": "/dɪˈmɒlɪʃ/",
            "uzbek": "Buzib tashlamoq, yer bilan yakson qilmoq (binoni)",
            "definition": "To pull or knock down a building or structure officially.",
            "examples": [
              {
                "en": "Your official request to demolish the dilapidated garage adjoining your residential property is hereby rejected.",
                "uz": "Sizning uyingizga tutashgan xarob garajni buzib tashlash haqidagi rasmiy arizangiz shu bilan rad etiladi."
              },
              {
                "en": "The city council decided to demolish the condemned historical warehouse to erect modern social housing.",
                "uz": "Shahar kengashi zamonaviy ijtimoiy uy-joylar qurish uchun yaroqsiz deb topilgan tarixiy omborni buzishga qaror qildi."
              },
              {
                "en": "Demolition crews operated heavy excavators under stringent particulate dust containment measures.",
                "uz": "Buzish brigadalari chang tarqalishini nazorat qilishning qat'iy choralari ostida og'ir ekskavatorlarni boshqardilar."
              }
            ]
          },
          {
            "id": "c1-gov-21",
            "word": "Adjoining",
            "pos": "adjective",
            "phonetic": "/əˈdʒɔɪnɪŋ/",
            "uzbek": "Yondosh, tutash, yonma-yon joylashgan",
            "definition": "Next to or joined with something, such as an adjacent property or room.",
            "examples": [
              {
                "en": "The planning authority rejected proposals that would overshadow the adjoining kindergarten garden.",
                "uz": "Rejalashtirish organi yonidagi bolalar bog'chasi hovlisiga soya soladigan takliflarni rad etdi."
              },
              {
                "en": "He acquired the adjoining agricultural parcel to expand his commercial vineyard.",
                "uz": "U o'zining tijorat uzumzorini kengaytirish uchun yondosh qishloq xo'jaligi yer maydonini sotib oldi."
              },
              {
                "en": "A soundproof partition separates the main council chamber from the adjoining press briefing room.",
                "uz": "Tovush o'tkazmaydigan to'siq asosiy kengash zalini unga tutash matbuot anjumani xonasidan ajratib turadi."
              }
            ]
          },
          {
            "id": "c1-gov-22",
            "word": "Undersigned",
            "pos": "noun",
            "phonetic": "/ˌʌndəˈsaɪnd/",
            "uzbek": "Quyida imzo chekuvchi (rasmiy xat muallifi)",
            "definition": "The person or people who have signed the document or official statement in question.",
            "examples": [
              {
                "en": "Any and all formal appeals regarding this zoning ruling must be submitted in writing to the undersigned.",
                "uz": "Ushbu zonalashtirish qarori bo'yicha barcha rasmiy shikoyatlar quyida imzo chekuvchiga yozma ravishda topshirilishi kerak."
              },
              {
                "en": "We, the undersigned residents, formally petition for enhanced night street illumination.",
                "uz": "Biz, quyida imzo chekuvchi aholi, tungi ko'cha yoritilishini kuchaytirish bo'yicha rasmiy petitsiya taqdim etamiz."
              },
              {
                "en": "The declaration was executed and ratified by the undersigned plenipotentiary ambassadors.",
                "uz": "Deklaratsiya quyida imzo chekkan muxtor elchilar tomonidan tuzildi va tasdiqlandi."
              }
            ]
          },
          {
            "id": "c1-gov-23",
            "word": "Aforementioned",
            "pos": "adjective",
            "phonetic": "/əˌfɔːˈmenʃənd/",
            "uzbek": "Yuqorida zikr etilgan, avval eslatib o'tilgan",
            "definition": "Mentioned earlier in the same document or previous conversation.",
            "examples": [
              {
                "en": "No exceptions to the aforementioned planning procedure will be entertained under any circumstances.",
                "uz": "Yuqorida ko'rsatilgan rejalashtirish tartibiga hech qanday holatda istisnolar ko'rib chiqilmaydi."
              },
              {
                "en": "The aforementioned contractual warranties remain in full force throughout the warranty period.",
                "uz": "Yuqorida zikr etilgan shartnoma kafolatlari kafolat muddati davomida to'liq kuchda qoladi."
              },
              {
                "en": "Applicants must satisfy all aforementioned academic prerequisites prior to matriculation.",
                "uz": "Ariza topshiruvchilar talabalikka qabul qilinishdan oldin yuqorida qayd etilgan barcha o'quv talablariga javob berishlari kerak."
              }
            ]
          },
          {
            "id": "c1-gov-24",
            "word": "Eligible",
            "pos": "adjective",
            "phonetic": "/ˈelɪdʒəbl/",
            "uzbek": "Muvofiq, talablarga javob beruvchi, haqli",
            "definition": "Having the necessary qualities or satisfying the legal conditions for something.",
            "examples": [
              {
                "en": "A postgraduate scholar shall not be eligible for a maintenance grant if already funded by another trust.",
                "uz": "Agar aspirant boshqa fond tomonidan moliyalashtirilgan bo'lsa, u moddiy ta'minot grantini olishga haqli bo'lmaydi."
              },
              {
                "en": "Low-income pensioners are fully eligible for municipal energy heating subsidies.",
                "uz": "Kam ta'minlangan pensionerlar shahar energiya isitish subsidiyalarini olishga to'liq haqlidirlar."
              },
              {
                "en": "To be eligible for the civil service examination, candidates must hold an accredited bachelor's degree.",
                "uz": "Davlat xizmati imtihoniga kirish huquqiga ega bo'lish uchun nomzodlar akkreditatsiyalangan bakalavr diplomiga ega bo'lishlari kerak."
              }
            ]
          },
          {
            "id": "c1-gov-25",
            "word": "Hereby",
            "pos": "adverb",
            "phonetic": "/ˌhɪəˈbaɪ/",
            "uzbek": "Shu bilan, bu orqali (rasmiy hujjatlarda)",
            "definition": "As a result of this document or utterance, used in formal or legal contexts.",
            "examples": [
              {
                "en": "Your formal application for a commercial building permit is hereby rejected by the board.",
                "uz": "Tijorat binolarini qurishga ruxsat olish bo'yicha rasmiy arizangiz kengash tomonidan shu bilan rad etiladi."
              },
              {
                "en": "Notice is hereby given that the annual general meeting will convene on Friday morning.",
                "uz": "Shu bilan yillik umumiy yig'ilish juma kuni ertalab chaqirilishi e'lon qilinadi."
              },
              {
                "en": "I hereby declare on oath that all statements supplied on this statutory dossier are truthful.",
                "uz": "Ushbu qonuniy hujjatlar to'plamida taqdim etilgan barcha ma'lumotlar haqiqat ekanligini qasamyod bilan shu orqali ma'lum qilaman."
              }
            ]
          },
          {
            "id": "c1-gov-26",
            "word": "Governance",
            "pos": "noun",
            "phonetic": "/ˈɡʌvənəns/",
            "uzbek": "Boshqaruv, davlat/tashkilotni idora etish tizimi",
            "definition": "The action, manner, or system of governing an organization or country.",
            "examples": [
              {
                "en": "Transparent public governance is indispensable for stamping out entrenched institutional corruption.",
                "uz": "Shaffof davlat boshqaruvi ildiz otgan institutsional korrupsiyani yo'q qilish uchun ajralmasdir."
              },
              {
                "en": "The corporate board adopted rigorous modern governance guidelines following internal auditing scandals.",
                "uz": "Korporativ kengash ichki audit mojarolaridan so'ng zamonaviy qat'iy boshqaruv qoidalarini qabul qildi."
              },
              {
                "en": "Decentralized regional governance fosters civic engagement and localized economic initiative.",
                "uz": "Markazlashtirilmagan mintaqaviy boshqaruv fuqarolik faolligini va mahalliy iqtisodiy tashabbuslarni rag'batlantiradi."
              }
            ]
          },
          {
            "id": "c1-gov-27",
            "word": "Bureaucracy",
            "pos": "noun",
            "phonetic": "/bjʊəˈrɒkrəsi/",
            "uzbek": "Byurokratiya (mansabdorlar boshqaruvi va ma'muriy tizim)",
            "definition": "A system of government or administration in which most important decisions are taken by state officials rather than by elected representatives.",
            "examples": [
              {
                "en": "Dismantling bloated bureaucracy helped attract dynamic foreign enterprise into the special trade hub.",
                "uz": "Kengayib ketgan byurokratiyani qisqartirish maxsus savdo markaziga faol xorijiy korxonalarni jalb qilishga yordam berdi."
              },
              {
                "en": "Citizens often feel alienated when attempting to navigate impassive state bureaucracy.",
                "uz": "Fuqarolar hissiz davlat byurokratiyasi bilan to'qnash kelganda ko'pincha o'zlarini begona his qiladilar."
              },
              {
                "en": "Max Weber famously analyzed the rational efficiency and potential rigidity of modern bureaucracy.",
                "uz": "Maks Veber zamonaviy byurokratiyaning oqilona samaradorligi va ehtimoliy qotib qolganligini chuqur tahlil qilgan."
              }
            ]
          },
          {
            "id": "c1-gov-28",
            "word": "Accountability",
            "pos": "noun",
            "phonetic": "/əˌkaʊntəˈbɪləti/",
            "uzbek": "Hisobdorlik, javobgarlik",
            "definition": "The fact or condition of being accountable; responsibility of officials to justify their actions.",
            "examples": [
              {
                "en": "Independent parliamentary ombudsmen enforce ethical accountability across state agencies.",
                "uz": "Mustaqil parlament ombudsmanlari davlat idoralari bo'ylab axloqiy javobgarlikni ta'minlaydi."
              },
              {
                "en": "There can be no genuine democratic legitimacy without transparent fiscal accountability.",
                "uz": "Shaffof moliyaviy hisobdorliksiz haqiqiy demokratik qonuniylik bo'lishi mumkin emas."
              },
              {
                "en": "Whistleblower protections strengthen corporate accountability and prevent executive fraud.",
                "uz": "Qonunbuzarlik haqida xabar beruvchilarni himoya qilish korporativ javobgarlikni mustahkamlaydi va rahbarlar firibgarligining oldini oladi."
              }
            ]
          },
          {
            "id": "c1-gov-29",
            "word": "Jurisprudence",
            "pos": "noun",
            "phonetic": "/ˌdʒʊərɪsˈpruːdəns/",
            "uzbek": "Yurisprudensiya, huquqshunoslik fani va sud amaliyoti",
            "definition": "The theory or philosophy of law; a legal system or body of judicial decisions.",
            "examples": [
              {
                "en": "Constitutional jurisprudence continuously evolves to address novel fundamental human rights dilemmas.",
                "uz": "Konstitutsiyaviy yurisprudensiya insonning yangi fundamental huquqlari muammolarini hal qilish uchun doimiy rivojlanib boradi."
              },
              {
                "en": "The landmark Supreme Court ruling profoundly reshaped national civil jurisprudence.",
                "uz": "Oliy sudning muhim qarori milliy fuqarolik sud amaliyotini tubdan o'zgartirdi."
              },
              {
                "en": "Scholars of feminist jurisprudence interrogate gender biases embedded within historical common law.",
                "uz": "Huquq falsafasi bo'yicha olimlar tarixiy umumiy huquq tizimida mavjud bo'lgan gender noxolisliklarini o'rganadilar."
              }
            ]
          },
          {
            "id": "c1-gov-30",
            "word": "Ombudsman",
            "pos": "noun",
            "phonetic": "/ˈɒmbʊdzmən/",
            "uzbek": "Ombudsman, inson huquqlari bo'yicha vakil",
            "definition": "An official appointed to investigate individuals' complaints against maladministration, especially by public authorities.",
            "examples": [
              {
                "en": "Aggrieved citizens appealed to the national ombudsman after municipal authorities ignored their petition.",
                "uz": "Shahar hokimiyati arizani e'tiborsiz qoldirgach, norozi fuqarolar milliy ombudsmanga murojaat qilishdi."
              },
              {
                "en": "The banking ombudsman compelled the commercial lender to refund unfair administrative surcharges.",
                "uz": "Bank ombudsmani tijorat kreditorini nohaq undirilgan ma'muriy qo'shimcha to'lovlarni qaytarishga majbur qildi."
              },
              {
                "en": "Independent ombudsmen play a pivotal role in mediating fair resolutions between the public and government ministries.",
                "uz": "Mustaqil ombudsmanlar jamoatchilik va hukumat vazirliklari o'rtasida adolatli yechimlarni topishda muhim rol o'ynaydi."
              }
            ]
          }
        ]
      }
    ]
  }
};
