// Tiết mẫu "Khối lượng riêng" (Vật lí – KHTN 8 · Bài 13, Chương III Khối lượng riêng và áp suất)
// Nạp vào Firestore bằng: npm run seed:lesson
import type { Activity, Slide, TeacherKey, Term } from "@/lib/live/types";

export const LESSON_ID = "vatli8-khoi-luong-rieng";

export const LESSON = {
  title: { en: "Density", vi: "Khối lượng riêng" },
  subtitle: "Vật lí – KHTN 8 · Bài 13 · Khối lượng riêng",
  subject: "KHTN",
  grade: 8,
  status: "approved" as const,
  /** Bài 13 SGK KHTN 8 Kết nối tri thức (khung chương trình) */
  curLessonId: "n8-13",
};

export const TERMS: Term[] = [
  { en: "mass", ipa: "/mæs/", vi: "khối lượng", at: 1 },
  { en: "volume", ipa: "/ˈvɒljuːm/", vi: "thể tích", at: 1 },
  { en: "density", ipa: "/ˈdensəti/", vi: "khối lượng riêng", at: 2 },
  { en: "measuring cylinder", ipa: "/ˈmeʒərɪŋ ˈsɪlɪndə/", vi: "ống đong, bình chia độ", at: 2 },
  { en: "balance", ipa: "/ˈbæləns/", vi: "cân", at: 5 },
  { en: "material", ipa: "/məˈtɪəriəl/", vi: "vật liệu, chất", at: 6 },
  { en: "float", ipa: "/fləʊt/", vi: "nổi", at: 6 },
  { en: "sink", ipa: "/sɪŋk/", vi: "chìm", at: 6 },
];

/** Câu ví dụ cho thẻ từ vựng (ngân hàng thuật ngữ lsnly_terms) */
export const TERM_EXAMPLES: Record<string, { en: string; vi: string }> = {
  mass: { en: "We measure mass with a balance.", vi: "Chúng ta đo khối lượng bằng cân." },
  volume: { en: "The volume of the box is 200 cubic centimetres.", vi: "Thể tích của hộp là 200 cm³." },
  density: { en: "Density is mass divided by volume.", vi: "Khối lượng riêng bằng khối lượng chia cho thể tích." },
  "measuring cylinder": { en: "Read the measuring cylinder at eye level.", vi: "Đọc vạch chia của ống đong với mắt ngang mực nước." },
  balance: { en: "Put the stone on the balance.", vi: "Đặt hòn đá lên cân." },
  material: { en: "Iron and wood are different materials.", vi: "Sắt và gỗ là những chất khác nhau." },
  float: { en: "Wood floats on water.", vi: "Gỗ nổi trên mặt nước." },
  sink: { en: "An iron nail sinks in water.", vi: "Đinh sắt chìm trong nước." },
};

/** ID tài liệu thuật ngữ: "measuring cylinder" → "measuring-cylinder" */
export const termId = (en: string) => en.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

type Def = Omit<Slide, "order"> & { key: TeacherKey };

const DEFS: Def[] = [
  {
    id: "s0",
    type: "content",
    title: { en: "Today’s lesson", vi: "Bài học hôm nay" },
    blocks: [
      { kind: "hero", step: 0, text: { en: "Density", vi: "Khối lượng riêng" } },
      { kind: "join", step: 0 },
      {
        kind: "goals",
        step: 1,
        items: [
          { en: "Say what density is and write D = m/V.", vi: "Nêu được khối lượng riêng là gì và viết được D = m/V." },
          { en: "Use D = m/V to work out density, mass or volume.", vi: "Vận dụng D = m/V để tính khối lượng riêng, khối lượng hoặc thể tích." },
          { en: "Say the key sentences in English.", vi: "Nói được các câu then chốt bằng tiếng Anh." },
        ],
      },
    ],
    key: {
      notes: [
        { vi: "Chào lớp, chờ học sinh vào lớp bằng mã trên tivi." },
        { en: "Good morning, class. Please open the class page on your phone." },
        { en: "Today we will learn about density." },
      ],
    },
  },
  {
    id: "s1",
    type: "mcq",
    title: { en: "Warm-up", vi: "Khởi động" },
    blocks: [
      {
        kind: "cols",
        left: [{ kind: "figure", step: 0, figure: "density-blocks", labels: { top: "1 kg · 1 kg · 1 kg" } }],
        right: [{ kind: "text", step: 1, text: { en: "These three blocks have the same mass: 1 kg. They have different volumes.", vi: "Ba khối này có cùng khối lượng 1 kg nhưng thể tích khác nhau." } }],
      },
    ],
    question: {
      type: "mcq",
      time: 30,
      skill: "Khoa học",
      prompt: { en: "Which block is made of the densest material?", vi: "Khối nào làm bằng chất có khối lượng riêng lớn nhất?" },
      options: [
        { en: "The biggest block (wood)", vi: "Khối to nhất (gỗ)" },
        { en: "The smallest block (iron)", vi: "Khối nhỏ nhất (sắt)" },
        { en: "They are all the same", vi: "Ba khối như nhau" },
        { en: "We cannot know", vi: "Không thể biết" },
      ],
    },
    key: {
      answer: 1,
      explain: { en: "Same mass in the smallest volume → the largest density.", vi: "Cùng khối lượng mà thể tích nhỏ nhất → khối lượng riêng lớn nhất." },
      notes: [
        { vi: "Cho học sinh quan sát ba khối cùng 1 kg, rồi bấm Tiếp để mở câu hỏi trên điện thoại." },
        { en: "Look at the three blocks. They all have the same mass." },
        { en: "Iron packs a lot of mass into a small volume." },
      ],
    },
  },
  {
    id: "s2",
    type: "content",
    title: { en: "What is density?", vi: "Khối lượng riêng là gì?" },
    blocks: [
      {
        kind: "cols",
        left: [{ kind: "figure", step: 0, figure: "measure-volume" }],
        right: [
          { kind: "text", step: 1, text: { en: "Density is the mass of one unit of volume of a substance.", vi: "Khối lượng riêng của một chất là khối lượng của một đơn vị thể tích chất đó." } },
          {
            kind: "box",
            step: 4,
            highlight: true,
            tag: "Key idea · Ý chính",
            text: { en: "D = m / V   (kg/m³ or g/cm³)", vi: "D = m / V   (kg/m³ hoặc g/cm³)" },
          },
        ],
      },
    ],
    key: {
      notes: [
        { vi: "Bấm Tiếp từng bước: hình bình chia độ hiện dần — nước, hòn đá, mực nước dâng lên. Bấm vào từ ở bảng từ để tivi đọc mẫu." },
        { en: "The water level is 50 cubic centimetres." },
        { en: "Now the stone is in the water. The level rises to 65." },
        { en: "So the volume of the stone is 15 cubic centimetres." },
        { en: "Repeat after me: density is mass divided by volume." },
      ],
    },
  },
  {
    id: "s3",
    type: "speak",
    title: { en: "Say it!", vi: "Luyện nói" },
    blocks: [
      { kind: "say", step: 0, text: { en: "Density is mass divided by volume.", vi: "Khối lượng riêng bằng khối lượng chia cho thể tích." } },
      { kind: "ipa", step: 0, items: [{ word: "density", ipa: "/ˈdensəti/" }, { word: "volume", ipa: "/ˈvɒljuːm/" }] },
      {
        kind: "box",
        step: 1,
        text: {
          en: "On your phone: listen first, then tap the microphone and read the sentence aloud.",
          vi: "Trên điện thoại: nghe mẫu trước, rồi bấm micro và đọc to câu trên.",
        },
      },
    ],
    speak: { target: "Density is mass divided by volume.", time: 60 },
    key: {
      notes: [
        { vi: "Bấm vào câu mẫu để tivi đọc cho cả lớp nghe 2 lần. Bấm Tiếp để mở lượt luyện nói. Máy chấm từng em; giáo viên không cần tự sửa phát âm." },
        { en: "Listen and repeat." },
        { en: "Now use your phone. Read the sentence aloud." },
      ],
    },
  },
  {
    id: "s4",
    type: "mcq",
    title: { en: "Check", vi: "Kiểm tra" },
    blocks: [
      {
        kind: "cols",
        left: [{ kind: "figure", step: 0, figure: "floating" }],
        right: [{ kind: "text", step: 0, text: { en: "Which formula do we use to work out density?", vi: "Ta dùng công thức nào để tính khối lượng riêng?" } }],
      },
    ],
    question: {
      type: "mcq",
      time: 25,
      skill: "Khoa học",
      prompt: { en: "Which formula gives density?", vi: "Công thức nào tính khối lượng riêng?" },
      options: [
        { en: "D = m × V", vi: "D = m × V" },
        { en: "D = V / m", vi: "D = V / m" },
        { en: "D = m / V", vi: "D = m / V" },
        { en: "D = m + V", vi: "D = m + V" },
      ],
    },
    key: {
      answer: 2,
      explain: { en: "Density = mass ÷ volume: D = m / V.", vi: "Khối lượng riêng = khối lượng : thể tích: D = m / V." },
      method: { en: "Think of the unit kg/m³: kilograms PER cubic metre means divide.", vi: "Nhìn đơn vị kg/m³: “kilôgam TRÊN mét khối” nghĩa là phép chia." },
      notes: [{ en: "Which formula gives density?" }, { vi: "Nếu nhiều em chọn D = V/m: nhắc lại đơn vị kg/m³ — khối lượng ở trên, thể tích ở dưới." }],
    },
  },
  {
    id: "s5",
    type: "content",
    title: { en: "Measure and calculate", vi: "Đo và tính" },
    phonesDown: true,
    blocks: [
      {
        kind: "steps",
        items: [
          { step: 0, text: { en: "Weigh a small stone on the balance. Write down its mass m.", vi: "Cân hòn đá nhỏ, ghi khối lượng m." } },
          { step: 1, text: { en: "Pour water into a measuring cylinder. Read the level V₁.", vi: "Rót nước vào bình chia độ, đọc thể tích V₁." } },
          { step: 2, text: { en: "Drop the stone in gently. Read the new level V₂. Work out V = V₂ − V₁ and D = m/V.", vi: "Thả nhẹ hòn đá vào, đọc V₂. Tính V = V₂ − V₁ và D = m/V." } },
        ],
      },
      { kind: "box", step: 3, highlight: true, text: { en: "The water rises by the volume of the stone.", vi: "Mực nước dâng lên đúng bằng thể tích hòn đá." } },
    ],
    key: {
      notes: [
        { vi: "Úp điện thoại xuống. Học sinh làm theo nhóm 4 bạn, 6 phút. Nhắc thả đá nhẹ, nghiêng bình để nước không bắn ra; đọc vạch chia với mắt ngang mực nước." },
        { en: "Work in groups of four. Read the cylinder at eye level." },
        { en: "Measure three times and take the average." },
      ],
    },
  },
  {
    id: "s6",
    type: "content",
    title: { en: "Density of materials", vi: "Khối lượng riêng của một số chất" },
    blocks: [
      {
        kind: "box",
        step: 0,
        highlight: true,
        tag: "Data · Số liệu",
        text: { en: "Water 1000 kg/m³ · Aluminium 2700 kg/m³ · Iron 7800 kg/m³ · Wood about 600 kg/m³", vi: "Nước 1000 kg/m³ · Nhôm 2700 kg/m³ · Sắt 7800 kg/m³ · Gỗ khoảng 600 kg/m³" },
      },
      {
        kind: "text",
        step: 1,
        text: {
          en: "Each material has its own density, so we can use density to identify a material. A big iron nail and a small iron nail have the same density.",
          vi: "Mỗi chất có một khối lượng riêng xác định nên có thể dùng khối lượng riêng để nhận biết chất. Đinh sắt to và đinh sắt nhỏ có cùng khối lượng riêng.",
        },
      },
      {
        kind: "box",
        step: 2,
        tag: "Float or sink · Nổi hay chìm",
        text: { en: "Materials less dense than water float; materials denser than water sink.", vi: "Chất có khối lượng riêng nhỏ hơn nước thì nổi; lớn hơn nước thì chìm." },
      },
    ],
    key: {
      notes: [
        { vi: "Có thể thả miếng gỗ, đinh sắt, quả bóng bàn vào chậu nước để học sinh dự đoán trước khi thả." },
        { en: "Each material has its own density." },
        { en: "Wood floats because it is less dense than water." },
      ],
    },
  },
  {
    id: "s7",
    type: "speak",
    title: { en: "Say it!", vi: "Luyện nói" },
    blocks: [
      { kind: "say", step: 0, text: { en: "Wood floats because it is less dense than water.", vi: "Gỗ nổi vì khối lượng riêng của gỗ nhỏ hơn của nước." } },
      { kind: "ipa", step: 0, items: [{ word: "floats", ipa: "/fləʊts/" }, { word: "dense", ipa: "/dens/" }] },
    ],
    speak: { target: "Wood floats because it is less dense than water.", time: 60 },
    key: {
      notes: [
        { en: "Listen and repeat." },
        { vi: "Sau khi khóa, bảng xếp hạng phát âm hiện trên tivi. Chỉ hiện 5 bạn cao nhất để khích lệ, không hiện ai thấp điểm." },
      ],
    },
  },
  {
    id: "s8",
    type: "number",
    title: { en: "Practice", vi: "Luyện tập" },
    blocks: [
      {
        kind: "text",
        step: 0,
        text: {
          en: "An aluminium block has a mass of 2.7 kg and a volume of 0.001 m³. What is its density in kg/m³?",
          vi: "Một khối nhôm có khối lượng 2,7 kg và thể tích 0,001 m³. Khối lượng riêng của nhôm là bao nhiêu kg/m³?",
        },
      },
    ],
    question: { type: "number", time: 60, skill: "Khoa học", prompt: { en: "Density (kg/m³)?", vi: "Khối lượng riêng bằng bao nhiêu kg/m³?" } },
    key: {
      answer: 2700,
      show: "2,7 : 0,001 = 2700 kg/m³",
      method: {
        en: "Density = mass ÷ volume.",
        vi: "Khối lượng riêng = khối lượng : thể tích.",
      },
      explain: { en: "2.7 ÷ 0.001 = 2700 kg/m³", vi: "2,7 : 0,001 = 2700 kg/m³" },
      notes: [{ en: "Work out the density. You have one minute." }, { vi: "Nếu học sinh nhập 0,0027: các em đã nhân thay vì chia." }],
    },
  },
  {
    id: "s9",
    type: "text",
    title: { en: "Complete the sentence", vi: "Hoàn thành câu" },
    blocks: [
      {
        kind: "say",
        step: 0,
        text: { en: "Iron sinks in water because it has a greater ______ than water.", vi: "Sắt chìm trong nước vì sắt có ______ lớn hơn nước." },
      },
    ],
    question: { type: "text", time: 60, skill: "Ngôn ngữ", prompt: { en: "Type the missing word.", vi: "Gõ từ còn thiếu bằng tiếng Anh." } },
    key: {
      accept: ["density", "a greater density"],
      show: "density",
      method: { en: "Look at the key idea on the third page: D = m/V. What is D?", vi: "Xem lại ý chính ở trang thứ ba: D = m/V. D là gì?" },
      explain: {
        en: "Iron sinks in water because it has a greater density than water.",
        vi: "Sắt chìm trong nước vì sắt có khối lượng riêng lớn hơn nước.",
      },
      notes: [
        { vi: "Câu trả lời của học sinh hiện trên laptop. Bấm “Chiếu” để đưa câu hay lên tivi; câu không phù hợp sẽ không bao giờ lên tivi." },
        { en: "Type the missing word." },
      ],
    },
  },
  {
    id: "s10",
    type: "mcq",
    title: { en: "True or false?", vi: "Đúng hay sai?" },
    blocks: [
      {
        kind: "say",
        step: 0,
        text: { en: "A big iron nail has a greater density than a small iron nail.", vi: "Đinh sắt to có khối lượng riêng lớn hơn đinh sắt nhỏ." },
      },
    ],
    question: {
      type: "mcq",
      time: 25,
      skill: "Khoa học",
      prompt: { en: "True or false?", vi: "Đúng hay sai?" },
      options: [
        { en: "True", vi: "Đúng" },
        { en: "False", vi: "Sai" },
      ],
    },
    key: {
      answer: 1,
      explain: { en: "False. Density depends on the material, not on the size.", vi: "Sai. Khối lượng riêng phụ thuộc chất làm vật, không phụ thuộc kích thước." },
      method: { en: "Both nails are made of the same material. What does density depend on?", vi: "Hai chiếc đinh cùng làm bằng sắt. Khối lượng riêng phụ thuộc vào gì?" },
      notes: [{ en: "True or false?" }],
    },
  },
  {
    id: "s11",
    type: "final",
    title: { en: "Great work!", vi: "Tổng kết" },
    blocks: [
      {
        kind: "box",
        step: 0,
        highlight: true,
        tag: "Key sentences · Câu then chốt",
        text: {
          en: "Density is mass divided by volume. Wood floats because it is less dense than water.",
          vi: "Khối lượng riêng bằng khối lượng chia cho thể tích. Gỗ nổi vì khối lượng riêng nhỏ hơn nước.",
        },
      },
      {
        kind: "text",
        step: 1,
        text: {
          en: "Homework: find the density of one object at home (a soap bar, a stone…). Show your measurements in English.",
          vi: "Về nhà: xác định khối lượng riêng của một vật trong nhà (bánh xà phòng, hòn đá…). Trình bày số đo bằng tiếng Anh.",
        },
      },
    ],
    key: { notes: [{ vi: "Khen top 5, nhắc bài về nhà. Báo cáo chi tiết của tiết nằm ở bảng bên dưới." }, { en: "Great work today, everyone!" }] },
  },
];

// Câu hỏi / luyện nói đo YCCĐ của Bài 13: (1) định nghĩa, công thức, đơn vị · (2) vận dụng D = m/V
const OUTCOMES: Record<string, string[]> = {
  s1: ["n8-13-1"],
  s3: ["n8-13-1"],
  s4: ["n8-13-1"],
  s7: ["n8-13-1"],
  s8: ["n8-13-2"],
  s9: ["n8-13-1"],
  s10: ["n8-13-1"],
};

// 4 hoạt động CV 5512 (thanh thời gian trên laptop GV): 1 Mở đầu · 2 Hình thành kiến thức · 3 Luyện tập · 4 Vận dụng/Tổng kết
const ACTIVITY: Record<string, Activity> = { s0: 1, s1: 1, s2: 2, s3: 2, s4: 2, s5: 2, s6: 2, s7: 2, s8: 3, s9: 3, s10: 3, s11: 4 };

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- tách đáp án (key) ra khỏi nội dung trang
export const SLIDES: Slide[] = DEFS.map(({ key, ...s }, i) => ({ ...s, order: i, activity: ACTIVITY[s.id], ...(OUTCOMES[s.id] ? { outcomeIds: OUTCOMES[s.id] } : {}) }));
export const KEYS: Record<string, TeacherKey> = Object.fromEntries(DEFS.map((d) => [d.id, d.key]));
