import { CategoryGroup } from '../types';

export const LESSON_CATEGORIES: CategoryGroup[] = [
  {
    id: 'level1',
    title: 'Level 1 (အဆင့် ၁ - အခြေခံ)',
    titleBurmese: 'အခြေခံ ထိုင်းစာ အဆင့် ၁',
    badge: 'L1',
    color: 'from-[#3b0066] to-[#5a189a]',
    units: [
      {
        id: 'l1-u1',
        titleThai: 'บทที่ 1: การแนะนำตัว',
        titleBurmese: 'အခန်း (၁) မိတ်ဆက်ခြင်း (Introductions)',
        level: 'level1',
        unitNumber: 1,
        description: 'အမည်မေးခြင်း၊ တွေ့ဆုံနှုတ်ဆက်ခြင်း၊ နာမ်စားများ၊ အခြေခံကြိယာများနှင့် မေးခွန်း/အငြင်းပုံစံများ။',
        iconName: 'fa-handshake',
        dialogues: [
          {
            id: 'd1-1',
            speaker: 'ကဲဝို့ (Kaew)',
            speakerGender: 'female',
            thai: 'สวัสดีค่ะ ดิฉันชื่อ แก้ว ค่ะ คุณชื่ออะไรคะ',
            phonetic: 'စဝပ်(တ်)ဒီးခ ဒီချန်(န်)ချေး ကဲ့ဝိခ ခူ(န်)ချေးအလိုင်(ယ်)ခ',
            burmese: 'မင်္ဂလာပါ။ ကျွန်မနာမည် ကဲဝို့ ပါ။ ရှင့်နာမည် ဘယ်လိုခေါ်လဲ။'
          },
          {
            id: 'd1-2',
            speaker: 'သန့်ဇင် (Thant Zin)',
            speakerGender: 'male',
            thai: 'สวัสดีครับ ผมชื่อ ตั้นสิ่ง ครับ',
            phonetic: 'စဝပ်(တ်)ဒီးခပ် ဖုန်း(မ်)ချေး သန့်ဇင် ခပ်(ပ်)',
            burmese: 'မင်္ဂလာပါခင်ဗျ။ ကျွန်တော်နာမည် သန့်ဇင် ပါ။'
          },
          {
            id: 'd1-3',
            speaker: 'ကဲဝို့ (Kaew)',
            speakerGender: 'female',
            thai: 'ยินดีที่ได้รู้จักค่ะ',
            phonetic: 'ယင်(န်)ဒီး ထီ့ ဒိုက်(ယ်) လူးကျက်(က်) ခ',
            burmese: 'တွေ့ရတာ ဝမ်းသာပါတယ်။'
          },
          {
            id: 'd1-4',
            speaker: 'သန့်ဇင် (Thant Zin)',
            speakerGender: 'male',
            thai: 'เช่นกันครับ',
            phonetic: 'ချင့်(န်)ကန်(န်) ခပ်(ပ်)',
            burmese: 'အတူတူပါပဲ ခင်ဗျ။'
          },
          {
            id: 'd1-5',
            speaker: 'ကဲဝို့ (Kaew)',
            speakerGender: 'female',
            thai: 'คุณสบายดีไหมคะ',
            phonetic: 'ခူ(န်) စဘိုယ်(ယ်)ဒီး မိုက်(ယ်) ခ',
            burmese: 'မင်း နေကောင်းလား။'
          },
          {
            id: 'd1-6',
            speaker: 'သန့်ဇင် (Thant Zin)',
            speakerGender: 'male',
            thai: 'สบายดีครับ คุณล่ะครับ',
            phonetic: 'စဘိုယ်(ယ်)ဒီးခပ်(ပ်) ခူ(န်) လ ခပ်(ပ်)',
            burmese: 'နေကောင်းပါတယ်။ မင်းရော။'
          },
          {
            id: 'd1-7',
            speaker: 'ကဲဝို့ (Kaew)',
            speakerGender: 'female',
            thai: 'ดิฉันก็สบายดีค่ะ ไปก่อนนะคะ',
            phonetic: 'ဒီချန်(န်) ကော့ စဘိုယ်(ယ်)ဒီး ခ ပိုင်(ယ်) ကော်(န်) န ခ',
            burmese: 'ကျွန်မလည်း နေကောင်းပါတယ်။ သွားလိုက်ပါဦးမယ်နော်။'
          },
          {
            id: 'd1-8',
            speaker: 'သန့်ဇင် (Thant Zin)',
            speakerGender: 'male',
            thai: 'ครับ เจอกันนะครับ',
            phonetic: 'ခပ်(ပ်) ကျေ ကန်(န်) န ခပ်',
            burmese: 'ဟုတ်ကဲ့ပါ။ ပြန်တွေ့ပါမယ်နော်။'
          }
        ],
        grammar: [
          {
            id: 'g1-1',
            titleThai: 'ไหม (မိုက်)',
            titlePhonetic: 'မိုက်(ယ်)',
            titleBurmese: 'မေးခွန်းပုံစံ (...လား)',
            pattern: '[ဝါကျ / ကြိယာ] + ไหม',
            explanation: 'ထိုင်းဘာသာတွင် ဟုတ်/မဟုတ် မေးခွန်းများ မေးလိုသည့်အခါ ဝါကျ၏ အဆုံးတွင် ไหม (မိုက်) ကို ထည့်၍ မေးမြန်းရပါသည်။',
            examples: [
              {
                thai: 'คุณสบายดีไหม',
                phonetic: 'ခူ(န်) စဘိုယ်(ယ်)ဒီး မိုက်(ယ်)',
                burmese: 'မင်း နေကောင်းလား။'
              },
              {
                thai: 'คุณกินข้าวไหม',
                phonetic: 'ခူ(န်) ကင်(န်) ခေါက်(ဝ်) မိုက်(ယ်)',
                burmese: 'မင်း ထမင်းစားမလား။'
              }
            ]
          },
          {
            id: 'g1-2',
            titleThai: 'ไม่ (မိုက်)',
            titlePhonetic: 'မိုက်(ယ်)',
            titleBurmese: 'အငြင်းပုံစံ (မ...ဘူး)',
            pattern: '[ကတ္တား] + ไม่ + [ကြိယာ]',
            explanation: 'ငြင်းပယ်သည့်အခါ ကြိယာ၏ အရှေ့တွင် ไม่ (မိုက်) ကို ထည့်ရပါသည်။',
            examples: [
              {
                thai: 'ผมไม่กิน',
                phonetic: 'ဖုန်း(မ်) မိုက်(ယ်) ကင်(န်)',
                burmese: 'ကျွန်တော် မစားဘူး။'
              },
              {
                thai: 'แมรี่ไม่สบาย',
                phonetic: 'မေရီ မိုက်(ယ်) စဘိုယ်(ယ်)',
                burmese: 'မေရီ နေမကောင်းဘူး။'
              }
            ]
          }
        ],
        vocabulary: [
          { id: 'v1-1', thai: 'ชื่อ', phonetic: 'ချေး', burmese: 'နာမည်' },
          { id: 'v1-2', thai: 'สบายดี', phonetic: 'စဘိုယ်(ယ်)ဒီး', burmese: 'နေကောင်းသည်' },
          { id: 'v1-3', thai: 'ขอบคุณ', phonetic: 'ခေါ(ပ်)ခူ(န်)', burmese: 'ကျေးဇူးတင်ပါတယ်' },
          { id: 'v1-4', thai: 'ขอโทษ', phonetic: 'ခေါ့ထို့(တ်)', burmese: 'တောင်းပန်ပါတယ်' },
          { id: 'v1-5', thai: 'ไม่เป็นไร', phonetic: 'မိုက်ပင်(န်)လိုင်', burmese: 'ရပါတယ် / ကိစ္စမရှိပါ' },
          { id: 'v1-6', thai: 'ผม', phonetic: 'ဖုန်း(မ်)', burmese: 'ကျွန်တော် (အမျိုးသား)' },
          { id: 'v1-7', thai: 'ดิฉัน', phonetic: 'ဒီချန်(န်)', burmese: 'ကျွန်မ (အမျိုးသမီး)' },
          { id: 'v1-8', thai: 'คุณ', phonetic: 'ခူ(န်)', burmese: 'သင် / ရှင့် / ခင်ဗျား' }
        ],
        flashcards: [
          { id: 'fc1-1', thai: 'ชื่อ', phonetic: 'ချေး', burmese: 'နာမည်' },
          { id: 'fc1-2', thai: 'ยินดีที่ได้รู้จัก', phonetic: 'ယင်(န်)ဒီး ထီ့ ဒိုက်(ယ်) ရူးဂျက်(က်)', burmese: 'တွေ့ရတာ ဝမ်းသာပါတယ်' },
          { id: 'fc1-3', thai: 'เช่นกัน', phonetic: 'ချင့်(န်)ကန်(န်)', burmese: 'အတူတူပါပဲ' },
          { id: 'fc1-4', thai: 'สบายดีไหม', phonetic: 'စဘိုယ်(ယ်)ဒီး မိုက်(ယ်)', burmese: 'နေကောင်းလား' },
          { id: 'fc1-5', thai: 'เจอกัน', phonetic: 'ကျေ ကန်(န်)', burmese: 'ပြန်တွေ့ပါမယ်' }
        ],
        quiz: [
          {
            id: 'q1-1',
            question: 'ยินดีที่ได้รู้จัก',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['မင်္ဂလာပါ', 'တွေ့ရတာ ဝမ်းသာပါတယ်', 'သွားလိုက်ပါဦးမယ်', 'မင်း နေကောင်းလား'],
            correctIndex: 1,
            explanation: 'ยินดีที่ได้รู้จัก (ယင်ဒီး ထီ့ ဒိုက် ရူးကျက်) သည် "တွေ့ရတာ ဝမ်းသာပါတယ်" ဖြစ်ပါသည်။'
          },
          {
            id: 'q1-2',
            question: 'ขอบคุณ',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['တောင်းပန်ပါတယ်', 'ကိစ္စမရှိပါဘူး', 'ကျေးဇူးတင်ပါတယ်', 'ဝမ်းသာပါတယ်'],
            correctIndex: 2,
            explanation: 'ขอบคุณ (ခေါပ်ခွန်း) သည် "ကျေးဇူးတင်ပါတယ်" ဖြစ်ပါသည်။'
          },
          {
            id: 'q1-3',
            question: 'ผม',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ကျွန်မ', 'ကျွန်တော်', 'သူ', 'မင်း'],
            correctIndex: 1,
            explanation: 'ผม (ဖုန်း) သည် အမျိုးသားသုံး "ကျွန်တော်" ဖြစ်ပါသည်။'
          }
        ]
      },
      {
        id: 'l1-u2',
        titleThai: 'บทที่ 2: ชีวิตประจำวัน',
        titleBurmese: 'အခန်း (၂) နေ့စဉ်လူမှုဘဝ (Daily Life & Routines)',
        level: 'level1',
        unitNumber: 2,
        description: 'အိပ်ရာထခြင်း၊ အလုပ်သွားခြင်း၊ ထမင်းစားခြင်းနှင့် စားသောက်စရာများအကြောင်း ပြောဆိုခြင်း။',
        iconName: 'fa-sun',
        dialogues: [
          {
            id: 'd2-1',
            speaker: 'ဝင်း (Win)',
            speakerGender: 'male',
            thai: 'คุณตื่นนอนกี่โมงครับ',
            phonetic: 'ခူ(န်) တေးန်(န်)နောင်း(န်) ကီးမုန်း(မ်) ခပ်(ပ်)',
            burmese: 'မင်း အိပ်ရာ ဘယ်နှစ်နာရီထလဲ။'
          },
          {
            id: 'd2-2',
            speaker: 'မေ (May)',
            speakerGender: 'female',
            thai: 'ตื่นนอนหกโมงเช้าค่ะ แล้วคุณล่ะคะ',
            phonetic: 'တေးန်(န်)နောင်း(န်) ဟုတ်(က်)မုန်း(မ်)ချောင်း(ဝ်)ခ လဲဝ်(ဝ်) ခူ(န်)လ ခ',
            burmese: 'မနက် ၆ နာရီ ထပါတယ်ရှင့်။ မင်းရော။'
          },
          {
            id: 'd2-3',
            speaker: 'ဝင်း (Win)',
            speakerGender: 'male',
            thai: 'ผมตื่นเจ็ดโมงครับ กินข้าวเช้าหรือยังครับ',
            phonetic: 'ဖုန်း(မ်) တေးန်(န်) ကျက်(တ်)မုန်း(မ်)ခပ်(ပ်) ကင်(န်)ခေါက်(ဝ်)ချောင်း(ဝ်) လေးဝ်(ဝ်)ယှံ(င်) ခပ်(ပ်)',
            burmese: 'ကျွန်တော် ၇ နာရီထပါတယ်။ မနက်စာ စားပြီးပြီလား။'
          },
          {
            id: 'd2-4',
            speaker: 'မေ (May)',
            speakerGender: 'female',
            thai: 'กินแล้วค่ะ คุณกินอะไรหรือยังคะ',
            phonetic: 'ကင်(န်) လဲဝ်(ဝ်)ခ ခူ(န်) ကင်(န်) အလိုင်(ယ်) လေးဝ်(ဝ်)ယှံ(င်) ခ',
            burmese: 'စားပြီးပါပြီ။ မင်းရော တစ်ခုခု စားပြီးပြီလား။'
          }
        ],
        grammar: [
          {
            id: 'g2-1',
            titleThai: 'หรือยัง (လေးဝ် ယှံင်)',
            titlePhonetic: 'လေးဝ်(ဝ်)ယှံ(င်)',
            titleBurmese: '...ပြီးပြီလား',
            pattern: '[ဝါကျ/ကြိယာ] + หรือยัง',
            explanation: 'လုပ်ဆောင်ချက်တစ်ခု ပြီးစီးခြင်း ရှိမရှိ မေးမြန်းသည့်အခါ သုံးပါသည်။ အဖြေတွင် "แล้ว" (ပြီးပြီ) သို့မဟုတ် "ยัง" (မပြီးသေးပါ) ဟု ဖြေရပါသည်။',
            examples: [
              {
                thai: 'กินข้าวหรือยัง',
                phonetic: 'ကင်(န်)ခေါက်(ဝ်) လေးဝ်(ဝ်)ယှံ(င်)',
                burmese: 'ထမင်းစားပြီးပြီလား။'
              },
              {
                thai: 'กินแล้ว',
                phonetic: 'ကင်(န်) လဲဝ်(ဝ်)',
                burmese: 'စားပြီးပါပြီ။'
              }
            ]
          }
        ],
        vocabulary: [
          { id: 'v2-1', thai: 'ตื่นนอน', phonetic: 'တေးန်(န်)နောင်း(န်)', burmese: 'အိပ်ရာထသည်' },
          { id: 'v2-2', thai: 'กินข้าว', phonetic: 'ကင်(န်)ခေါက်(ဝ်)', burmese: 'ထမင်းစားသည်' },
          { id: 'v2-3', thai: 'ไปทำงาน', phonetic: 'ပိုင်(ယ်) ထမ်(မ်)ငါန်(န်)', burmese: 'အလုပ်သွားသည်' },
          { id: 'v2-4', thai: 'อาบน้ำ', phonetic: 'အာပ်(ပ်)နမ့်(မ်)', burmese: 'ရေချိုးသည်' },
          { id: 'v2-5', thai: 'กลับบ้าน', phonetic: 'ကလပ်(ပ်)ဘန်း(န်)', burmese: 'အိမ်ပြန်သည်' }
        ],
        flashcards: [
          { id: 'fc2-1', thai: 'ตื่นนอน', phonetic: 'တေးန်(န်)နောင်း(န်)', burmese: 'အိပ်ရာထသည်' },
          { id: 'fc2-2', thai: 'กินข้าว', phonetic: 'ကင်(န်)ခေါက်(ဝ်)', burmese: 'ထမင်းစားသည်' },
          { id: 'fc2-3', thai: 'ไปทำงาน', phonetic: 'ပိုင်(ယ်) ထမ်(မ်)ငါန်(န်)', burmese: 'အလုပ်သွားသည်' }
        ],
        quiz: [
          {
            id: 'q2-1',
            question: 'กินข้าว',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ရေချိုးသည်', 'ထမင်းစားသည်', 'အိပ်ရာထသည်', 'အလုပ်သွားသည်'],
            correctIndex: 1,
            explanation: 'กินข้าว (ကင်ခေါက်) သည် "ထမင်းစားသည်" ဖြစ်ပါသည်။'
          }
        ]
      },
      {
        id: 'l1-u3',
        titleThai: 'บทที่ 3: สั่งอาหารและเครื่องดื่ม',
        titleBurmese: 'အခန်း (၃) အစားအသောက် မှာယူခြင်း (Ordering Food)',
        level: 'level1',
        unitNumber: 3,
        description: 'စားသောက်ဆိုင်တွင် အစားအသောက်၊ အအေးနှင့် ရေ မှာယူနည်းများ။',
        iconName: 'fa-utensils',
        dialogues: [
          {
            id: 'd3-1',
            speaker: 'စားပွဲထိုး (Waitress)',
            speakerGender: 'female',
            thai: 'รับอะไรดีคะ',
            phonetic: 'ရပ်(ပ်) အလိုင်(ယ်) ဒီး ခ',
            burmese: 'ဘာမှာယူမလဲရှင့်။'
          },
          {
            id: 'd3-2',
            speaker: 'မင်းမင်း (Min Min)',
            speakerGender: 'male',
            thai: 'ขอกะเพราไก่หนึ่งจานครับ',
            phonetic: 'ခေါ့ ကဖလောင်း(ဝ်)ကိုင့်(အမျိုးသား) နွင့်(င်)ကျာန်(န်) ခပ်(ပ်)',
            burmese: 'ကြက်သား ပင်စိမ်းရွက်ကြော် တစ်ပွဲ ပေးပါခင်ဗျ။'
          },
          {
            id: 'd3-3',
            speaker: 'စားပွဲထိုး (Waitress)',
            speakerGender: 'female',
            thai: 'เผ็ดไหมคะ',
            phonetic: 'ဖစ်(တ်) မိုက်(ယ်) ခ',
            burmese: 'အစပ် လိုချင်ပါသလားရှင့်။'
          },
          {
            id: 'd3-4',
            speaker: 'မင်းမင်း (Min Min)',
            speakerGender: 'male',
            thai: 'เผ็ดนิดหน่อยครับ และขอน้ำมูก/น้ำเย็นหนึ่งแก้วครับ',
            phonetic: 'ဖစ်(တ်) နစ်(တ်)နွိုင့်(ယ်) ခပ်(ပ်) လဲ ခေါ့ နမ့်(မ်)ယဲန်(န်) နွင့်(င်)ကယ်ဝ်(ဝ်) ခပ်(ပ်)',
            burmese: 'နည်းနည်းပဲ စပ်ပါစေ။ ရေအေး တစ်ခွက်လည်း ပေးပါ။'
          }
        ],
        grammar: [
          {
            id: 'g3-1',
            titleThai: 'ขอ... (ခေါ့...)',
            titlePhonetic: 'ခေါ့...',
            titleBurmese: '...ပေးပါ / ...တောင်းပါရစေ',
            pattern: 'ขอ + [ပစ္စည်း / အစားအသောက်] + [အရေအတွက်]',
            explanation: 'စားသောက်ဆိုင်တွင် ပစ္စည်း သို့မဟုတ် အစားအသောက် တောင်းဆိုရာတွင် သုံးပါသည်။',
            examples: [
              {
                thai: 'ขอน้ำเปล่าหนึ่งขวด',
                phonetic: 'ခေါ့ နမ့်(မ်)ပလော(တ်) နွင့်(င်)ခူးဝတ်(တ်)',
                burmese: 'ရေသန့် တစ်ဗူး ပေးပါ။'
              }
            ]
          }
        ],
        vocabulary: [
          { id: 'v3-1', thai: 'อาหาร', phonetic: 'အာဟာန်(န်)', burmese: 'အစားအသောက်' },
          { id: 'v3-2', thai: 'น้ำเปล่า', phonetic: 'နမ့်(မ်)ပလော(တ်)', burmese: 'ရေသန့်' },
          { id: 'v3-3', thai: 'เผ็ด', phonetic: 'ဖစ်(တ်)', burmese: 'စပ်သော' },
          { id: 'v3-4', thai: 'อร่อย', phonetic: 'အရိုင်(ယ်)', burmese: 'အရသာရှိသော' },
          { id: 'v3-5', thai: 'เก็บเงินด้วย', phonetic: 'ကပ်(ပ်)ငေန်(န်)ဒူးဝယ်(ယ်)', burmese: 'ငွေရှင်းပေးပါ' }
        ],
        flashcards: [
          { id: 'fc3-1', thai: 'เผ็ด', phonetic: 'ဖစ်(တ်)', burmese: 'စပ်သော' },
          { id: 'fc3-2', thai: 'อร่อย', phonetic: 'အရိုင်(ယ်)', burmese: 'အရသာရှိသော' }
        ],
        quiz: [
          {
            id: 'q3-1',
            question: 'เผ็ด',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ချိုသော', 'စပ်သော', 'ခါးသော', 'ငန်သော'],
            correctIndex: 1,
            explanation: 'เผ็ด (ဖစ်) သည် "စပ်သော" ဖြစ်ပါသည်။'
          }
        ]
      },
      {
        id: 'l1-u4',
        titleThai: 'บทที่ 4: การซื้อของและราคา',
        titleBurmese: 'အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် ဈေးနှုန်းများ (Shopping & Prices)',
        level: 'level1',
        unitNumber: 4,
        description: 'ဈေးနှုန်းမေးခြင်း၊ ဈေးဆစ်ခြင်း၊ အရောင်နှင့် အရွယ်အစား ပြောဆိုခြင်း။',
        iconName: 'fa-cart-shopping',
        dialogues: [
          {
            id: 'd4-1',
            speaker: 'ဈေးဝယ်သူ (Customer)',
            speakerGender: 'female',
            thai: 'อันนี้เท่าไหร่คะ',
            phonetic: 'အန်(န်)နီး ထောက်(ဝ်)လိုင်(ယ်) ခ',
            burmese: 'ဒါ ဘယ်လောက်လဲရှင့်။'
          },
          {
            id: 'd4-2',
            speaker: 'ဆိုင်ရှင် (Seller)',
            speakerGender: 'male',
            thai: 'ร้อยบาทครับ',
            phonetic: 'လိုးယ်(ယ်)ဘတ်(တ်) ခပ်(ပ်)',
            burmese: 'ဘတ် ၁၀၀ ပါ ခင်ဗျ။'
          },
          {
            id: 'd4-3',
            speaker: 'ဈေးဝယ်သူ (Customer)',
            speakerGender: 'female',
            thai: 'ลดได้ไหมคะ',
            phonetic: 'လုတ်(တ်) ဒိုက်(ယ်) မိုက်(ယ်) ခ',
            burmese: 'ဈေးလျှော့ပေးလို့ ရမလားရှင့်။'
          },
          {
            id: 'd4-4',
            speaker: 'ဆိုင်ရှင် (Seller)',
            speakerGender: 'male',
            thai: 'แปดสิบบาทละกันครับ',
            phonetic: 'ပတ်(တ်)စိပ်(ပ်)ဘတ်(တ်) လကန်(န်) ခပ်(ပ်)',
            burmese: '၈၀ ဘတ်နဲ့ ထားပေးပါမယ် ခင်ဗျ။'
          }
        ],
        grammar: [
          {
            id: 'g4-1',
            titleThai: 'เท่าไหร่ (ထောက်လိုင်)',
            titlePhonetic: 'ထောက်(ဝ်)လိုင်(ယ်)',
            titleBurmese: 'ဘယ်လောက်လဲ',
            pattern: '[ပစ္စည်း] + เท่าไหร่',
            explanation: 'ဈေးနှုန်း မေးမြန်းသည့်အခါ သုံးပါသည်။',
            examples: [
              {
                thai: 'ราคาเท่าไหร่',
                phonetic: 'လာခါ ထောက်(ဝ်)လိုင်(ယ်)',
                burmese: 'ဈေး ဘယ်လောက်လဲ။'
              }
            ]
          }
        ],
        vocabulary: [
          { id: 'v4-1', thai: 'แพง', phonetic: 'ဖဲင်း(င်)', burmese: 'ဈေးကြီးသော' },
          { id: 'v4-2', thai: 'ถูก', phonetic: 'ထူးက်(က်)', burmese: 'ဈေးပေါသော' },
          { id: 'v4-3', thai: 'ลดราคา', phonetic: 'လုတ်(တ်)လာခါ', burmese: 'ဈေးလျှော့သည်' },
          { id: 'v4-4', thai: 'บาท', phonetic: 'ဘတ်(တ်)', burmese: 'ဘတ် (ထိုင်းငွေ)' }
        ],
        flashcards: [
          { id: 'fc4-1', thai: 'แพง', phonetic: 'ဖဲင်း(င်)', burmese: 'ဈေးကြီးသော' },
          { id: 'fc4-2', thai: 'ถูก', phonetic: 'ထူးက်(က်)', burmese: 'ဈေးပေါသော' }
        ],
        quiz: [
          {
            id: 'q4-1',
            question: 'แพง',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ဈေးပေါသော', 'ဈေးကြီးသော', 'လှသော', 'ကြီးသော'],
            correctIndex: 1,
            explanation: 'แพง (ဖဲင်း) သည် "ဈေးကြီးသော" ဖြစ်ပါသည်။'
          }
        ]
      },
      {
        id: 'l1-u5',
        titleThai: 'บทที่ 5: การถามทางและสถานที่',
        titleBurmese: 'အခန်း (၅) လမ်းညွှန်နှင့် နေရာများ (Directions & Places)',
        level: 'level1',
        unitNumber: 5,
        description: 'နေရာပြမေးခွန်းများ၊ ဘတ်စ်ကားဂိတ်၊ ရထားဘူတာ၊ ဆေးရုံ စသည်တို့ သွားလာနည်း မေးမြန်းခြင်း။',
        iconName: 'fa-location-dot',
        dialogues: [
          {
            id: 'd5-1',
            speaker: 'ခရီးသွား (Tourist)',
            speakerGender: 'male',
            thai: 'สถานีรถไฟอยู่ที่ไหนครับ',
            phonetic: 'သထာနီး လုတ်(တ်)ဖိုင်(ယ်) ယူး ထီ့နိုင်း(န်) ခပ်(ပ်)',
            burmese: 'ရထားဘူတာ ဘယ်မှာရှိပါသလဲ ခင်ဗျ။'
          },
          {
            id: 'd5-2',
            speaker: 'ဒေသခံ (Local)',
            speakerGender: 'female',
            thai: 'ตรงไปแล้วเลี้ยวซ้ายค่ะ',
            phonetic: 'တလုန်း(င်)ပိုင်(ယ်) လဲဝ်(ဝ်) လီးယှောဝ်(ဝ်)ဆိုက်(ယ်) ခ',
            burmese: 'တည့်တည့်သွားပြီး ဘယ်ဘက်ကွေ့ပါရှင့်။'
          }
        ],
        grammar: [
          {
            id: 'g5-1',
            titleThai: 'อยู่ที่ไหน (ယူး ထီ့နိုင်း)',
            titlePhonetic: 'ယူး ထီ့နိုင်း(န်)',
            titleBurmese: 'ဘယ်မှာရှိသလဲ',
            pattern: '[နေရာ/ပစ္စည်း] + อยู่ที่ไหน',
            explanation: 'တည်နေရာ မေးမြန်းသည့်အခါ သုံးပါသည်။',
            examples: [
              {
                thai: 'ห้องน้ำอยู่ที่ไหน',
                phonetic: 'ဟ้อง(င်)နမ့်(မ်) ယူး ထီ့နိုင်း(န်)',
                burmese: 'အိမ်သာ ဘယ်မှာရှိပါသလဲ။'
              }
            ]
          }
        ],
        vocabulary: [
          { id: 'v5-1', thai: 'ตรงไป', phonetic: 'တလုန်း(င်)ပိုင်(ယ်)', burmese: 'တည့်တည့်သွားပါ' },
          { id: 'v5-2', thai: 'เลี้ยวซ้าย', phonetic: 'လီးယှောဝ်(ဝ်)ဆိုက်(ယ်)', burmese: 'ဘယ်ဘက်ကွေ့ပါ' },
          { id: 'v5-3', thai: 'เลี้ยวขวา', phonetic: 'လီးယှောဝ်(ဝ်)ခွာ', burmese: 'ညာဘက်ကွေ့ပါ' },
          { id: 'v5-4', thai: 'โรงพยาบาล', phonetic: 'လုန်း(င်)ဖယာဘာန်(န်)', burmese: 'ဆေးရုံ' }
        ],
        flashcards: [
          { id: 'fc5-1', thai: 'ตรงไป', phonetic: 'တလုန်း(င်)ပိုင်(ယ်)', burmese: 'တည့်တည့်သွားပါ' },
          { id: 'fc5-2', thai: 'โรงพยาบาล', phonetic: 'လုန်း(င်)ဖယာဘာန်(န်)', burmese: 'ဆေးရုံ' }
        ],
        quiz: [
          {
            id: 'q5-1',
            question: 'โรงพยาบาล',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ကျောင်း', 'ဆေးရုံ', 'ဈေး', 'ဘဏ်'],
            correctIndex: 1,
            explanation: 'โรงพยาบาล (လုန်းဖယာဘာန်) သည် "ဆေးရုံ" ဖြစ်ပါသည်။'
          }
        ]
      }
    ]
  },
  {
    id: 'level2',
    title: 'Level 2 (အဆင့် ၂ - အလယ်အလတ်)',
    titleBurmese: 'အလယ်အလတ် ထိုင်းစာ အဆင့် ၂',
    badge: 'L2',
    color: 'from-[#5a189a] to-[#7b2cbf]',
    units: [
      {
        id: 'l2-u1',
        titleThai: 'บทที่ 1: การเดินทางและการท่องเที่ยว',
        titleBurmese: 'အခန်း (၁) ခရီးသွားခြင်းနှင့် သယ်ယူပို့ဆောင်ရေး (Travel)',
        level: 'level2',
        unitNumber: 1,
        description: 'လေယာဉ်လက်မှတ်၊ တက္ကစီ၊ စက္ကူလက်မှတ်နှင့် ဟိုတယ် တည်းခိုခြင်းအကြောင်း။',
        iconName: 'fa-plane-departure',
        dialogues: [
          {
            id: 'd21-1',
            speaker: 'ခရီးသွား (Traveler)',
            speakerGender: 'male',
            thai: 'ไปสนามบินสุวรรณภูมิใช้เวลากี่นาทีครับ',
            phonetic: 'ပိုင်(ယ်) သနာမ်(မ်)ဘင်း(န်) သုဝဏ္ဏဘူမိ ချိုက်(က်) ဝေလာ ကီးနာထီး ခပ်(ပ်)',
            burmese: 'သုဝဏ္ဏဘူမိ လေဆိပ်သွားရင် ကြာချိန် ဘယ်လောက်ကြာမလဲခင်ဗျ။'
          },
          {
            id: 'd21-2',
            speaker: 'တက္ကစီဆရာ (Taxi Driver)',
            speakerGender: 'male',
            thai: 'ประมาณสี่สิบนาทีครับ ถ้ารถไม่ติด',
            phonetic: 'ပလာမာန်(န်) ဆီးစိပ်(ပ်) နာထီး ခပ်(ပ်) ထား လုတ်(တ်) မိုက်(ယ်) တစ်(တ်)',
            burmese: 'ကားမပိတ်ရင် မိနစ် ၄၀ လောက် ကြာပါမယ်ခင်ဗျ။'
          }
        ],
        grammar: [
          {
            id: 'g21-1',
            titleThai: 'ประมาณ (ပလာမာန်)',
            titlePhonetic: 'ပလာမာန်(န်)',
            titleBurmese: 'ခန့်မှန်းခြေ / ...နီးပါး',
            pattern: 'ประมาณ + [အရေအတွက် / အချိန်]',
            explanation: 'အချိန် သို့မဟုတ် ပမာဏ ခန့်မှန်းရာတွင် သုံးပါသည်။',
            examples: [
              {
                thai: 'ประมาณหนึ่งชั่วโมง',
                phonetic: 'ပလာမာန်(န်) နွင့်(င်)ချူးဝါမုန်း(မ်)',
                burmese: '၁ နာရီနီးပါးလောက်။'
              }
            ]
          }
        ],
        vocabulary: [
          { id: 'v21-1', thai: 'สนามบิน', phonetic: 'သနာမ်(မ်)ဘင်း(န်)', burmese: 'လေဆိပ်' },
          { id: 'v21-2', thai: 'รถติด', phonetic: 'လုတ်(တ်)တစ်(တ်)', burmese: 'ကားပိတ်သည်' },
          { id: 'v21-3', thai: 'โรงแรม', phonetic: 'လုန်း(င်)လဲမ်(မ်)', burmese: 'ဟိုတယ်' }
        ],
        flashcards: [
          { id: 'fc21-1', thai: 'สนามบิน', phonetic: 'သနာမ်(မ်)ဘင်း(န်)', burmese: 'လေဆိပ်' }
        ],
        quiz: [
          {
            id: 'q21-1',
            question: 'สนามบิน',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ကားဂိတ်', 'လေဆိပ်', 'သင်္ဘောဆိပ်', 'ရထားဘူတာ'],
            correctIndex: 1,
            explanation: 'สนามบิน (သနာမ်ဘင်း) သည် "လေဆိပ်" ဖြစ်ပါသည်။'
          }
        ]
      },
      {
        id: 'l2-u2',
        titleThai: 'บทที่ 2: สุขภาพและการพบแพทย์',
        titleBurmese: 'အခန်း (၂) ကျန်းမာရေးနှင့် ဆေးကုသမှု (Health & Doctor)',
        level: 'level2',
        unitNumber: 2,
        description: 'ရောဂါလက္ခဏာများ ပြသခြင်း၊ ဆေးခန်းပြခြင်းနှင့် ဆေးဝယ်ယူခြင်း။',
        iconName: 'fa-user-doctor',
        dialogues: [
          {
            id: 'd22-1',
            speaker: 'ဆရာဝန် (Doctor)',
            speakerGender: 'male',
            thai: 'เป็นอะไรมาครับ',
            phonetic: 'ပင်(န်) အလိုင်(ယ်) မာ ခပ်(ပ်)',
            burmese: 'ဘာဖြစ်လို့ လာတာလဲခင်ဗျ။'
          },
          {
            id: 'd22-2',
            speaker: 'လူနာ (Patient)',
            speakerGender: 'female',
            thai: 'ปวดหัวและมีไข้ค่ะ',
            phonetic: 'ပူးဝတ်(တ်)ဟုဝ်(ဝ်) လဲ မီးခိုင်(ယ်) ခ',
            burmese: 'ခေါင်းကိုက်ပြီး ဖျားနေလို့ပါရှင့်။'
          }
        ],
        grammar: [
          {
            id: 'g22-1',
            titleThai: 'ปวด... (ပူးဝတ်...)',
            titlePhonetic: 'ပူးဝတ်(တ်)',
            titleBurmese: '...ကိုက်နာသည်',
            pattern: 'ปวด + [ခန္ဓာကိုယ်အစိတ်အပိုင်း]',
            explanation: 'ခန္ဓာကိုယ် နာကျင်ကိုက်ခဲမှုကို ပြောဆိုရာတွင် သုံးပါသည်။',
            examples: [
              {
                thai: 'ปวดท้อง',
                phonetic: 'ပူးဝတ်(တ်)ထောင်း(င်)',
                burmese: 'ဗိုက်နာသည်။'
              }
            ]
          }
        ],
        vocabulary: [
          { id: 'v22-1', thai: 'ปวดหัว', phonetic: 'ပူးဝတ်(တ်)ဟုဝ်(ဝ်)', burmese: 'ခေါင်းကိုက်သည်' },
          { id: 'v22-2', thai: 'มีไข้', phonetic: 'မီးခိုင်(ယ်)', burmese: 'ဖျားသည်' },
          { id: 'v22-3', thai: 'ยา', phonetic: 'ယာ', burmese: 'ဆေး' }
        ],
        flashcards: [
          { id: 'fc22-1', thai: 'ปวดหัว', phonetic: 'ပူးဝတ်(တ်)ဟုဝ်(ဝ်)', burmese: 'ခေါင်းကိုက်သည်' }
        ],
        quiz: [
          {
            id: 'q22-1',
            question: 'ปวดหัว',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ဗိုက်နာသည်', 'ခေါင်းကိုက်သည်', 'သွားကိုက်သည်', 'ခြေထောက်နာသည်'],
            correctIndex: 1,
            explanation: 'ปวดหัว (ပူးဝတ်ဟုဝ်) သည် "ခေါင်းကိုက်သည်" ဖြစ်ပါသည်။'
          }
        ]
      },
      {
        id: 'l2-u3',
        titleThai: 'บทที่ 3: ภาษาไทยในที่ทำงาน',
        titleBurmese: 'အခန်း (၃) လုပ်ငန်းခွင်သုံး ထိုင်းစာ (Work & Business)',
        level: 'level2',
        unitNumber: 3,
        description: 'ရုံးသုံးစကားများ၊ အစည်းအဝေးများ၊ ခွင့်တောင်းခြင်းနှင့် အလုပ်ခွင် ဆက်သွယ်ရေး။',
        iconName: 'fa-briefcase',
        dialogues: [
          {
            id: 'd23-1',
            speaker: 'မန်နေဂျာ (Manager)',
            speakerGender: 'male',
            thai: 'พรุ่งนี้มีประชุมเก้าโมงเช้านะครับ',
            phonetic: 'ဖလုန်း(င်)နီး မီး ပလာချူးမ်(မ်) ကောက်(ဝ်)မုန်း(မ်)ချောင်း(ဝ်) န ခပ်(ပ်)',
            burmese: 'မနက်ဖြန် မနက် ၉ နာရီ အစည်းအဝေး ရှိပါတယ်နော်။'
          },
          {
            id: 'd23-2',
            speaker: 'ဝန်ထမ်း (Employee)',
            speakerGender: 'female',
            thai: 'รับทราบค่ะ เตรียมเอกสารพร้อมแล้วค่ะ',
            phonetic: 'ရပ်(ပ်)ဆာပ်(ပ်)ခ တလီယှမ်(မ်) အေးကစာန်(န်) ဖလောင်း(မ်) လဲဝ်(ဝ်)ခ',
            burmese: 'လက်ခံသိရှိပါပြီရှင့်။ စာရွက်စာတမ်းများ အဆင်သင့် ပြင်ဆင်ပြီးပါပြီ။'
          }
        ],
        grammar: [
          {
            id: 'g23-1',
            titleThai: 'เตรียม... (တလီယှမ်...)',
            titlePhonetic: 'တလီယှမ်(မ်)',
            titleBurmese: '...ပြင်ဆင်သည်',
            pattern: 'เตรียม + [ပစ္စည်း / အလုပ်]',
            explanation: 'ကြိုတင်ပြင်ဆင်မှုပြုလုပ်ရာတွင် သုံးပါသည်။',
            examples: [
              {
                thai: 'เตรียมตัว',
                phonetic: 'တလီယှမ်(မ်)တူဝ်(ဝ်)',
                burmese: 'ကိုယ်တိုင် ပြင်ဆင်သည်။'
              }
            ]
          }
        ],
        vocabulary: [
          { id: 'v23-1', thai: 'ประชุม', phonetic: 'ပလာချူးမ်(မ်)', burmese: 'အစည်းအဝေး' },
          { id: 'v23-2', thai: 'เอกสาร', phonetic: 'အေးကစာန်(န်)', burmese: 'စာရွက်စာတမ်း' },
          { id: 'v23-3', thai: 'ลาหยุด', phonetic: 'လာယုတ်(တ်)', burmese: 'ခွင့်ယူသည်' }
        ],
        flashcards: [
          { id: 'fc23-1', thai: 'ประชุม', phonetic: 'ပလာချူးမ်(မ်)', burmese: 'အစည်းအဝေး' }
        ],
        quiz: [
          {
            id: 'q23-1',
            question: 'ประชุม',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['အစည်းအဝေး', 'စာမေးပွဲ', 'ခရီးထွက်ခြင်း', 'ထမင်းစားပွဲ'],
            correctIndex: 0,
            explanation: 'ประชุม (ပလာချူးမ်) သည် "အစည်းအဝေး" ဖြစ်ပါသည်။'
          }
        ]
      },
      {
        id: 'l2-u4',
        titleThai: 'บทที่ 4: ครอบครัวและความรู้สึก',
        titleBurmese: 'အခန်း (၄) မိသားစု၊ ခံစားချက်နှင့် ထင်မြင်ချက်များ (Family & Feelings)',
        level: 'level2',
        unitNumber: 4,
        description: 'မိသားစုဝင်များ ခေါ်ဝေါ်ပုံ၊ ဝမ်းသာ/ဝမ်းနည်း ခံစားချက်များ ပြောဆိုပုံ။',
        iconName: 'fa-heart',
        dialogues: [
          {
            id: 'd24-1',
            speaker: 'သူငယ်ချင်း (Friend A)',
            speakerGender: 'female',
            thai: 'ครอบครัวของคุณมีกี่คนคะ',
            phonetic: 'ခလော့ပ်(ပ်)ခလူးဝါ ခူ(န်) မီး ကီးခုန်း(မ်) ခ',
            burmese: 'မင်း မိသားစုမှာ လူ ဘယ်နှစ်ယောက် ရှိသလဲရှင့်။'
          },
          {
            id: 'd24-2',
            speaker: 'သူငယ်ချင်း (Friend B)',
            speakerGender: 'male',
            thai: 'มีสี่คนครับ มีพ่อ แม่ พี่สาว และผม',
            phonetic: 'မီး ဆီးခုန်း(မ်) ခပ်(ပ်) မီး ဖော့ မဲ့ ဖီးစာဝ်(ဝ်) လဲ ဖုန်း(မ်)',
            burmese: '၄ ယောက် ရှိပါတယ်ခင်ဗျ။ အဖေ၊ အမေ၊ အစ်မနဲ့ ကျွန်တော် ပါ။'
          }
        ],
        grammar: [
          {
            id: 'g24-1',
            titleThai: 'รู้สึก... (လူးဆုက်...)',
            titlePhonetic: 'လူးဆုက်(က်)',
            titleBurmese: '...လို ခံစားရသည်',
            pattern: 'รู้สึก + [ခံစားချက်]',
            explanation: 'စိတ်ခံစားချက် သို့မဟုတ် ရုပ်ပိုင်းဆိုင်ရာ ခံစားချက် ပြောပြရာတွင် သုံးပါသည်။',
            examples: [
              {
                thai: 'รู้สึกดีใจ',
                phonetic: 'လူးဆုက်(က်) ဒီးဂျိုင်(ယ်)',
                burmese: 'ဝမ်းသာသလို ခံစားရသည်။'
              }
            ]
          }
        ],
        vocabulary: [
          { id: 'v24-1', thai: 'ครอบครัว', phonetic: 'ခလော့ပ်(ပ်)ခလူးဝါ', burmese: 'မိသားစု' },
          { id: 'v24-2', thai: 'มีความสุข', phonetic: 'မီးမီးဆုက်(က်)', burmese: 'ပျော်ရွှင်သည်' },
          { id: 'v24-3', thai: 'เหนื่อย', phonetic: 'နူးအေယ်(ယ်)', burmese: 'မောပန်းသည်' }
        ],
        flashcards: [
          { id: 'fc24-1', thai: 'ครอบครัว', phonetic: 'ခလော့ပ်(ပ်)ခလူးဝါ', burmese: 'မိသားစု' }
        ],
        quiz: [
          {
            id: 'q24-1',
            question: 'ครอบครัว',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ကျောင်း', 'မိသားစု', 'သူငယ်ချင်း', 'ရွာ'],
            correctIndex: 1,
            explanation: 'ครอบครัว (ခလော့ပ်ခလူးဝါ) သည် "မိသားစု" ဖြစ်ပါသည်။'
          }
        ]
      }
    ]
  },
  {
    id: 'vocabulary',
    title: 'Vocabulary & Verbs (ဝါဟာရနှင့် ကြိယာများ)',
    titleBurmese: 'ထိုင်း ဝါဟာရနှင့် ကြိယာများ စုစည်းမှု',
    badge: 'Vocab',
    color: 'from-[#7b2cbf] to-[#9d4edd]',
    units: [
      {
        id: 'v-u1',
        titleThai: 'คำกริยาที่ใช้บ่อย',
        titleBurmese: 'အရေးကြီး လှုပ်ရှားမှု ကြိယာများ (Essential Action Verbs)',
        level: 'vocabulary',
        unitNumber: 1,
        description: 'နေ့စဉ် အများဆုံး သုံးလေ့ရှိသော ထိုင်း ကြိယာ (၅၀) ကျော်။',
        iconName: 'fa-bolt',
        dialogues: [],
        grammar: [],
        vocabulary: [
          { id: 'vv1', thai: 'กิน', phonetic: 'ကင်(န်)', burmese: 'စားသည်' },
          { id: 'vv2', thai: 'ดื่ม', phonetic: 'ဒေးမ်(မ်)', burmese: 'သောက်သည်' },
          { id: 'vv3', thai: 'ไป', phonetic: 'ပိုင်(ယ်)', burmese: 'သွားသည်' },
          { id: 'vv4', thai: 'มา', phonetic: 'မာ', burmese: 'လာသည်' },
          { id: 'vv5', thai: 'ดู', phonetic: 'ဒူး', burmese: 'ကြည့်သည်' },
          { id: 'vv6', thai: 'ฟัง', phonetic: 'ဖံ(င်)', burmese: 'နားထောင်သည်' },
          { id: 'vv7', thai: 'พูด', phonetic: 'ဖူးတ်(တ်)', burmese: 'ပြောသည်' },
          { id: 'vv8', thai: 'อ่าน', phonetic: 'အာန်(န်)', burmese: 'ဖတ်သည်' },
          { id: 'vv9', thai: 'เขียน', phonetic: 'ခီယှန်(န်)', burmese: 'ရေးသည်' },
          { id: 'vv10', thai: 'นอน', phonetic: 'နောင်း(န်)', burmese: 'အိပ်သည်' }
        ],
        flashcards: [
          { id: 'vfc1', thai: 'กิน', phonetic: 'ကင်(န်)', burmese: 'စားသည်' },
          { id: 'vfc2', thai: 'ดื่ม', phonetic: 'ဒေးမ်(မ်)', burmese: 'သောက်သည်' },
          { id: 'vfc3', thai: 'ไป', phonetic: 'ပိုင်(ယ်)', burmese: 'သွားသည်' },
          { id: 'vfc4', thai: 'มา', phonetic: 'မာ', burmese: 'လာသည်' },
          { id: 'vfc5', thai: 'พูด', phonetic: 'ဖူးတ်(တ်)', burmese: 'ပြောသည်' }
        ],
        quiz: [
          {
            id: 'vq1',
            question: 'พูด',
            questionBurmese: 'အောက်ပါ ထိုင်းကြိယာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ကြည့်သည်', 'ပြောသည်', 'ရေးသည်', 'ဖတ်သည်'],
            correctIndex: 1,
            explanation: 'พูด (ဖူးတ်) သည် "ပြောသည်" ဖြစ်ပါသည်။'
          }
        ]
      },
      {
        id: 'v-u2',
        titleThai: 'คำศัพท์ใช้ประจำวัน',
        titleBurmese: 'နေ့စဉ်သုံး စကားလုံးများ (Daily Vocabulary)',
        level: 'vocabulary',
        unitNumber: 2,
        description: 'အိမ်၊ ကျောင်း၊ ပစ္စည်းများနှင့် ပတ်ဝန်းကျင်သုံး ဝါဟာရများ။',
        iconName: 'fa-book-bookmark',
        dialogues: [],
        grammar: [],
        vocabulary: [
          { id: 'vv11', thai: 'บ้าน', phonetic: 'ဘန်း(န်)', burmese: 'အိမ်' },
          { id: 'vv12', thai: 'โรงเรียน', phonetic: 'လုန်း(င်)လီယှန်(န်)', burmese: 'ကျောင်း' },
          { id: 'vv13', thai: 'หนังสือ', phonetic: 'နံ(င်)ဆူဝ်(ဝ်)', burmese: 'စာအုပ်' },
          { id: 'vv14', thai: 'ปากกา', phonetic: 'ပက်(ပ်)ကာ', burmese: 'ဘောပင်' },
          { id: 'vv15', thai: 'โต๊ะ', phonetic: 'တိုဝ်(ဝ်)', burmese: 'စားပွဲ' }
        ],
        flashcards: [
          { id: 'vfc11', thai: 'บ้าน', phonetic: 'ဘန်း(န်)', burmese: 'အိမ်' },
          { id: 'vfc12', thai: 'โรงเรียน', phonetic: 'လုန်း(င်)လီယှန်(န်)', burmese: 'ကျောင်း' }
        ],
        quiz: [
          {
            id: 'vq2',
            question: 'บ้าน',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ကျောင်း', 'အိမ်', 'ဈေး', 'ဆေးရုံ'],
            correctIndex: 1,
            explanation: 'บ้าน (ဘန်း) သည် "အိမ်" ဖြစ်ပါသည်။'
          }
        ]
      },
      {
        id: 'v-u3',
        titleThai: 'คำศัพท์อาหารและเครื่องดื่ม',
        titleBurmese: 'အစားအသောက် သုံးနှုန်းများ (Food & Dining Vocab)',
        level: 'vocabulary',
        unitNumber: 3,
        description: 'အသီးအနှံ၊ အသား၊ ဟင်းသီးဟင်းရွက်နှင့် သောက်စရာများ။',
        iconName: 'fa-apple-whole',
        dialogues: [],
        grammar: [],
        vocabulary: [
          { id: 'vv21', thai: 'ข้าว', phonetic: 'ခေါက်(ဝ်)', burmese: 'ထမင်း / ဆန်' },
          { id: 'vv22', thai: 'น้ำ', phonetic: 'နမ့်(မ်)', burmese: 'ရေ' },
          { id: 'vv23', thai: 'กาแฟ', phonetic: 'ကာဖဲ', burmese: 'ကော်ဖီ' },
          { id: 'vv24', thai: 'ชา', phonetic: 'ချာ', burmese: 'လက်ဖက်ရည်' },
          { id: 'vv25', thai: 'หมู', phonetic: 'မူဝ်(ဝ်)', burmese: 'ဝက်သား' },
          { id: 'vv26', thai: 'ไก่', phonetic: 'ကိုင့်(ယ်)', burmese: 'ကြက်သား' }
        ],
        flashcards: [
          { id: 'vfc21', thai: 'กาแฟ', phonetic: 'ကာဖဲ', burmese: 'ကော်ဖီ' },
          { id: 'vfc22', thai: 'น้ำ', phonetic: 'နမ့်(မ်)', burmese: 'ရေ' }
        ],
        quiz: [
          {
            id: 'vq3',
            question: 'กาแฟ',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ရေ', 'ကော်ဖီ', 'နို့', 'လက်ဖက်ရည်'],
            correctIndex: 1,
            explanation: 'กาแฟ (ကာဖဲ) သည် "ကော်ဖီ" ဖြစ်ပါသည်။'
          }
        ]
      },
      {
        id: 'v-u4',
        titleThai: 'คำศัพท์การเดินทาง',
        titleBurmese: 'ခရီးသွား သုံးနှုန်းများ (Travel & Directions)',
        level: 'vocabulary',
        unitNumber: 4,
        description: 'ယာဉ်ရထား၊ လမ်းညွှန်နှင့် ခရီးသွားလာရေး ဝါဟာရများ။',
        iconName: 'fa-car',
        dialogues: [],
        grammar: [],
        vocabulary: [
          { id: 'vv31', thai: 'รถยนต์', phonetic: 'လုတ်(တ်)ယုန်း(န်)', burmese: 'မော်တော်ကား' },
          { id: 'vv32', thai: 'รถไฟ', phonetic: 'လုတ်(တ်)ဖိုင်(ယ်)', burmese: 'ရထား' },
          { id: 'vv33', thai: 'เครื่องบิน', phonetic: 'ခလူးအန်း(င်)ဘင်း(န်)', burmese: 'လေယာဉ်ပျံ' },
          { id: 'vv34', thai: 'ตั๋ว', phonetic: 'တူဝ်(ဝ်)', burmese: 'လက်မှတ်' }
        ],
        flashcards: [
          { id: 'vfc31', thai: 'ตั๋ว', phonetic: 'တူဝ်(ဝ်)', burmese: 'လက်မှတ်' }
        ],
        quiz: [
          {
            id: 'vq4',
            question: 'ตั๋ว',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['ကား', 'လက်မှတ်', 'ပတ်စ်ပို့', 'ပိုက်ဆံ'],
            correctIndex: 1,
            explanation: 'ตั๋ว (တူဝ်) သည် "လက်မှတ်" ဖြစ်ပါသည်။'
          }
        ]
      },
      {
        id: 'v-u5',
        titleThai: 'เวลาและตัวเลข',
        titleBurmese: 'အချိန်၊ ရက်စွဲနှင့် ကိန်းဂဏန်းများ (Time & Numbers)',
        level: 'vocabulary',
        unitNumber: 5,
        description: '၁ မှ ၁၀၀၀ ထိ ကိန်းဂဏန်းများ၊ ရက်သတ္တပတ်၊ လနှင့် အချိန် ပြောဆိုပုံ။',
        iconName: 'fa-clock',
        dialogues: [],
        grammar: [],
        vocabulary: [
          { id: 'vv41', thai: 'หนึ่ง', phonetic: 'နွင့်(င်)', burmese: '၁ (တစ်ခု)' },
          { id: 'vv42', thai: 'สอง', phonetic: 'ဆောင်(င်)', burmese: '၂ (နှစ်ခု)' },
          { id: 'vv43', thai: 'สาม', phonetic: 'ဆာမ်(မ်)', burmese: '၃ (သုံးခု)' },
          { id: 'vv44', thai: 'สี่', phonetic: 'ဆီး', burmese: '၄ (လေးခု)' },
          { id: 'vv45', thai: 'ห้า', phonetic: 'ဟား', burmese: '၅ (ငါးခု)' },
          { id: 'vv46', thai: 'วันนี้', phonetic: 'ဝမ်(န်)နီး', burmese: 'ဒီနေ့' },
          { id: 'vv47', thai: 'พรุ่งนี้', phonetic: 'ဖလုန်း(င်)နီး', burmese: 'မနက်ဖြန်' },
          { id: 'vv48', thai: 'เมื่อวาน', phonetic: 'မူးအဝါန်(န်)', burmese: 'မနေ့က' }
        ],
        flashcards: [
          { id: 'vfc41', thai: 'วันนี้', phonetic: 'ဝမ်(န်)နီး', burmese: 'ဒီနေ့' },
          { id: 'vfc42', thai: 'พรุ่งนี้', phonetic: 'ဖလုန်း(င်)နီး', burmese: 'မနက်ဖြန်' }
        ],
        quiz: [
          {
            id: 'vq5',
            question: 'วันนี้',
            questionBurmese: 'အောက်ပါ ထိုင်းစာ၏ မြန်မာအဓိပ္ပာယ်ကို ရွေးပါ',
            options: ['မနေ့က', 'ဒီနေ့', 'မနက်ဖြန်', 'သဘက်ခါ'],
            correctIndex: 1,
            explanation: 'วันนี้ (ဝမ်နီး) သည် "ဒီနေ့" ဖြစ်ပါသည်။'
          }
        ]
      }
    ]
  }
];
