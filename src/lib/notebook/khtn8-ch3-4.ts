// Vở ghi Vật lí – KHTN 8, Chương III "Khối lượng riêng và áp suất" + Chương IV "Tác dụng làm quay của lực" (Bài 13–19).
// Bám SGK Kết nối tri thức với cuộc sống. GV có thể đối chiếu, chỉnh câu chữ cho phù hợp lớp mình.
import type { NoteLesson } from "@/lib/notebook/types";

export const NOTES_CH3_4: NoteLesson[] = [
  // ============================ BÀI 13 ============================
  {
    id: "n8-13",
    theory: [
      {
        h: "Khối lượng riêng là gì?",
        en: "What is density?",
        points: [
          "**Khối lượng riêng** (density) của một chất là khối lượng của một đơn vị thể tích chất đó.",
          "Công thức: **D = m/V**, trong đó m là khối lượng (kg), V là thể tích (m³), D là khối lượng riêng (kg/m³).",
          "Đơn vị thường dùng: **kg/m³** hoặc **g/cm³**; 1 g/cm³ = 1000 kg/m³.",
        ],
      },
      {
        h: "Khối lượng riêng của một số chất",
        en: "Density of some substances",
        points: ["Mỗi chất có một khối lượng riêng xác định → dùng để nhận biết chất."],
        table: {
          head: ["Chất", "Khối lượng riêng (kg/m³)"],
          rows: [
            ["Nước", "1000"],
            ["Dầu ăn", "≈ 800"],
            ["Nhôm", "2700"],
            ["Sắt", "7800"],
            ["Đồng", "8900"],
            ["Không khí (0 °C)", "≈ 1,29"],
          ],
        },
      },
      {
        h: "Vận dụng công thức",
        en: "Using the formula",
        points: ["Tính khối lượng: **m = D·V**.", "Tính thể tích: **V = m/D**.", "Đổi đơn vị trước khi tính (cm³ → m³: chia 1 000 000)."],
      },
    ],
    remember: [
      "Khối lượng riêng D = m/V, đơn vị kg/m³ hoặc g/cm³.",
      "Khối lượng riêng đặc trưng cho chất làm vật, không phụ thuộc kích thước vật.",
      "Nước có D = 1000 kg/m³ = 1 g/cm³.",
    ],
    sentences: [
      { en: "Density is mass divided by volume.", vi: "Khối lượng riêng bằng khối lượng chia cho thể tích." },
      { en: "Iron has a greater density than aluminium.", vi: "Sắt có khối lượng riêng lớn hơn nhôm." },
      { en: "The density of water is one thousand kilograms per cubic metre.", vi: "Khối lượng riêng của nước là 1000 kg/m³." },
    ],
    mcq: [
      { q: "Công thức tính khối lượng riêng là", options: ["D = m·V", "D = m/V", "D = V/m", "D = F/S"], answer: 1 },
      { q: "Đơn vị khối lượng riêng là", options: ["N/m²", "kg/m³", "N/m³", "kg"], answer: 1 },
      { q: "Một khối nhôm có thể tích 0,001 m³, D = 2700 kg/m³. Khối lượng của khối là", options: ["2,7 kg", "27 kg", "270 kg", "0,27 kg"], answer: 0 },
      { q: "1 g/cm³ bằng", options: ["10 kg/m³", "100 kg/m³", "1000 kg/m³", "1 kg/m³"], answer: 2 },
    ],
    tf: [
      { q: "Khối lượng riêng của một chất phụ thuộc vào kích thước của vật.", answer: false },
      { q: "Có thể dùng khối lượng riêng để nhận biết một chất.", answer: true },
      { q: "Sắt có khối lượng riêng lớn hơn nước.", answer: true },
      { q: "Cùng thể tích, vật có khối lượng riêng lớn hơn thì nặng hơn.", answer: true },
    ],
    fill: [
      { q: "Density is mass divided by ___.", vi: "Khối lượng riêng bằng khối lượng chia cho thể tích.", answer: "volume" },
      { q: "The SI unit of ___ is the kilogram.", vi: "Đơn vị của khối lượng trong hệ SI là kilôgam.", answer: "mass" },
      { q: "Iron has a high ___.", vi: "Sắt có khối lượng riêng lớn.", answer: "density" },
    ],
    essay: [
      {
        q: "Một can chứa 5 lít dầu ăn (D = 800 kg/m³). Tính khối lượng dầu trong can.",
        answer: "V = 5 lít = 0,005 m³. m = D·V = 800 × 0,005 = 4 kg.",
      },
      {
        q: "Hai khối có cùng khối lượng 1 kg, một bằng sắt, một bằng nhôm. Khối nào có thể tích lớn hơn? Vì sao?",
        answer: "Khối nhôm có thể tích lớn hơn vì V = m/D; cùng m, D của nhôm (2700 kg/m³) nhỏ hơn D của sắt (7800 kg/m³) nên V lớn hơn.",
      },
    ],
  },

  // ============================ BÀI 14 ============================
  {
    id: "n8-14",
    theory: [
      {
        h: "Dụng cụ",
        en: "Equipment",
        points: ["**Cân** (balance) để đo khối lượng; **bình chia độ / ống đong** (measuring cylinder) để đo thể tích chất lỏng; thước để đo kích thước khối hộp."],
      },
      {
        h: "Các cách xác định khối lượng riêng",
        en: "Ways to find density",
        points: [
          "Khối hộp chữ nhật: đo dài, rộng, cao → **V = a·b·c**; cân khối lượng m → D = m/V.",
          "Vật có hình dạng bất kì: thả chìm vào bình chia độ có nước, **thể tích nước dâng lên = thể tích vật**.",
          "Chất lỏng: cân bình rỗng (m₁), rót chất lỏng vào rồi cân (m₂) → m = m₂ − m₁; đọc thể tích V trên vạch chia.",
        ],
      },
      {
        h: "Lưu ý khi đo",
        en: "Tips for accurate measurement",
        points: ["Đặt mắt **ngang mực chất lỏng** khi đọc vạch chia.", "Đo **3 lần**, lấy giá trị trung bình, ghi vào bảng số liệu."],
      },
    ],
    remember: [
      "Cần đo hai đại lượng: khối lượng m (bằng cân) và thể tích V.",
      "Thể tích vật rắn không thấm nước = thể tích nước dâng lên trong bình chia độ.",
      "Đo nhiều lần, lấy trung bình để giảm sai số.",
    ],
    sentences: [
      { en: "We use a balance to measure mass.", vi: "Chúng ta dùng cân để đo khối lượng." },
      { en: "The water level rises by the volume of the stone.", vi: "Mực nước dâng lên đúng bằng thể tích hòn đá." },
      { en: "We repeat the measurement three times and take the average.", vi: "Chúng ta đo ba lần và lấy giá trị trung bình." },
    ],
    mcq: [
      { q: "Để đo thể tích hòn sỏi, ta dùng", options: ["cân", "bình chia độ có nước", "lực kế", "nhiệt kế"], answer: 1 },
      { q: "Bình chia độ chỉ 60 cm³; thả vật vào chỉ 75 cm³. Thể tích vật là", options: ["60 cm³", "75 cm³", "15 cm³", "135 cm³"], answer: 2 },
      { q: "Một khối hộp kích thước 2 cm × 3 cm × 5 cm. Thể tích khối là", options: ["10 cm³", "30 cm³", "15 cm³", "25 cm³"], answer: 1 },
      { q: "Khi đọc thể tích trên bình chia độ, mắt cần đặt", options: ["cao hơn mực chất lỏng", "thấp hơn mực chất lỏng", "ngang mực chất lỏng", "ở bất kì đâu"], answer: 2 },
    ],
    tf: [
      { q: "Đo khối lượng chất lỏng phải trừ khối lượng bình chứa.", answer: true },
      { q: "Chỉ cần đo một lần là đủ chính xác.", answer: false },
      { q: "Thể tích nước dâng lên bằng thể tích phần vật chìm trong nước.", answer: true },
      { q: "Cân dùng để đo thể tích.", answer: false },
    ],
    fill: [
      { q: "A measuring ___ is used to measure the volume of a liquid.", vi: "Ống đong dùng để đo thể tích chất lỏng.", answer: "cylinder" },
      { q: "We use a ___ to measure mass.", vi: "Ta dùng cân để đo khối lượng.", answer: "balance" },
      { q: "We take the ___ of three readings.", vi: "Ta lấy giá trị trung bình của ba lần đo.", answer: "average" },
    ],
    essay: [
      {
        q: "Nêu các bước xác định khối lượng riêng của một hòn đá nhỏ.",
        answer: "B1: cân hòn đá được m. B2: rót nước vào bình chia độ, đọc V₁. B3: thả chìm hòn đá, đọc V₂ → V = V₂ − V₁. B4: tính D = m/V. Lặp lại 3 lần, lấy trung bình.",
      },
      {
        q: "Hòn đá nặng 52 g, làm nước trong bình chia độ dâng từ 40 cm³ lên 60 cm³. Tính khối lượng riêng của đá.",
        answer: "V = 60 − 40 = 20 cm³; D = 52 : 20 = 2,6 g/cm³ = 2600 kg/m³.",
      },
    ],
  },

  // ============================ BÀI 15 ============================
  {
    id: "n8-15",
    theory: [
      {
        h: "Áp lực và áp suất",
        en: "Force and pressure",
        points: [
          "**Áp lực** là lực ép có phương vuông góc với mặt bị ép.",
          "**Áp suất** (pressure) là độ lớn của áp lực trên một đơn vị diện tích bị ép.",
          "Công thức: **p = F/S** — F: áp lực (N), S: diện tích bị ép (m²), p: áp suất (**Pa**, 1 Pa = 1 N/m²).",
        ],
      },
      {
        h: "Tăng, giảm áp suất",
        en: "Increasing and reducing pressure",
        points: [
          "**Tăng áp suất**: tăng áp lực hoặc giảm diện tích bị ép (mài dao sắc, đầu đinh nhọn, mũi khoan).",
          "**Giảm áp suất**: giảm áp lực hoặc tăng diện tích bị ép (bánh xích xe tăng, móng nhà rộng, ván trượt tuyết).",
        ],
      },
    ],
    remember: [
      "Áp suất p = F/S, đơn vị pascal (Pa).",
      "Cùng áp lực, diện tích bị ép càng nhỏ thì áp suất càng lớn.",
      "Muốn tăng áp suất: tăng F hoặc giảm S; muốn giảm áp suất: giảm F hoặc tăng S.",
    ],
    sentences: [
      { en: "Pressure is force divided by area.", vi: "Áp suất bằng áp lực chia cho diện tích bị ép." },
      { en: "A sharp knife has a small area, so the pressure is high.", vi: "Dao sắc có diện tích bị ép nhỏ nên áp suất lớn." },
      { en: "Wide tracks reduce the pressure on soft ground.", vi: "Bánh xích bản rộng làm giảm áp suất lên đất mềm." },
    ],
    mcq: [
      { q: "Đơn vị của áp suất là", options: ["N", "Pa", "kg/m³", "J"], answer: 1 },
      { q: "Áp lực 500 N tác dụng lên diện tích 0,25 m². Áp suất là", options: ["125 Pa", "2000 Pa", "500 Pa", "250 Pa"], answer: 1 },
      { q: "Cách nào làm TĂNG áp suất?", options: ["Tăng diện tích bị ép", "Giảm áp lực", "Giảm diện tích bị ép", "Đặt thêm tấm ván"], answer: 2 },
      { q: "Người ta làm móng nhà rộng hơn tường để", options: ["tăng áp suất lên đất", "giảm áp suất lên đất", "nhà nặng hơn", "dễ xây hơn"], answer: 1 },
    ],
    tf: [
      { q: "1 Pa = 1 N/m².", answer: true },
      { q: "Đầu đinh nhọn để giảm áp suất.", answer: false },
      { q: "Áp lực là lực ép có phương vuông góc với mặt bị ép.", answer: true },
      { q: "Cùng một người, nằm trên đệm gây áp suất lớn hơn khi đứng.", answer: false },
    ],
    fill: [
      { q: "Pressure is force divided by ___.", vi: "Áp suất bằng áp lực chia cho diện tích.", answer: "area" },
      { q: "The unit of pressure is the ___.", vi: "Đơn vị áp suất là pascal.", answer: "pascal" },
      { q: "A sharp nail gives a high ___.", vi: "Đầu đinh nhọn gây áp suất lớn.", answer: "pressure" },
    ],
    essay: [
      {
        q: "Một bạn học sinh nặng 450 N, diện tích tiếp xúc của hai bàn chân với sàn là 0,03 m². Tính áp suất bạn đó tác dụng lên sàn khi đứng hai chân và khi đứng một chân.",
        answer: "Hai chân: p = 450 : 0,03 = 15 000 Pa. Một chân: S = 0,015 m² → p = 450 : 0,015 = 30 000 Pa (gấp đôi).",
      },
      {
        q: "Giải thích vì sao ô tô đi trên đường đất mềm, người ta thường lót ván dưới bánh xe.",
        answer: "Tấm ván làm tăng diện tích bị ép nên giảm áp suất của xe lên đất, bánh xe ít bị lún.",
      },
    ],
  },

  // ============================ BÀI 16 ============================
  {
    id: "n8-16",
    theory: [
      {
        h: "Áp suất chất lỏng",
        en: "Liquid pressure",
        points: [
          "Chất lỏng gây áp suất lên **đáy bình, thành bình và các vật trong lòng nó**, theo **mọi phương**.",
          "Càng xuống **sâu**, áp suất chất lỏng càng lớn (thợ lặn phải mặc áo lặn chịu áp suất).",
          "**Bình thông nhau**: chứa cùng một chất lỏng đứng yên thì mực chất lỏng ở các nhánh luôn ở cùng một độ cao (ứng dụng: ấm nước, tháp nước).",
          "**Máy nén thuỷ lực**: chất lỏng truyền nguyên vẹn áp suất → lực nhỏ ở pit-tông nhỏ tạo lực lớn ở pit-tông lớn.",
        ],
      },
      {
        h: "Áp suất khí quyển",
        en: "Atmospheric pressure",
        points: [
          "Lớp không khí bao quanh Trái Đất gây ra **áp suất khí quyển** (atmospheric pressure) theo mọi phương.",
          "Ví dụ: hút nước bằng ống hút; giác mút dính vào tường; hộp sữa bị bẹp khi hút hết không khí.",
          "Càng lên cao, áp suất khí quyển càng **giảm**.",
        ],
      },
    ],
    remember: [
      "Áp suất chất lỏng tác dụng theo mọi phương và tăng theo độ sâu.",
      "Trong bình thông nhau, cùng chất lỏng đứng yên thì các mực chất lỏng ngang nhau.",
      "Trái Đất và mọi vật trên Trái Đất đều chịu áp suất khí quyển.",
    ],
    sentences: [
      { en: "Liquid pressure increases with depth.", vi: "Áp suất chất lỏng tăng theo độ sâu." },
      { en: "Liquids push in all directions.", vi: "Chất lỏng gây áp suất theo mọi phương." },
      { en: "Atmospheric pressure pushes the juice up the straw.", vi: "Áp suất khí quyển đẩy nước cam lên ống hút." },
    ],
    mcq: [
      { q: "Áp suất chất lỏng tác dụng", options: ["chỉ lên đáy bình", "chỉ lên thành bình", "theo mọi phương", "chỉ hướng xuống"], answer: 2 },
      { q: "Tại điểm nào trong hồ nước, áp suất lớn nhất?", options: ["Gần mặt nước", "Ở giữa hồ", "Sát đáy hồ", "Như nhau"], answer: 2 },
      { q: "Hiện tượng nào do áp suất khí quyển gây ra?", options: ["Quả bóng lăn", "Giác mút dính vào tường kính", "Nước sôi", "Đèn sáng"], answer: 1 },
      { q: "Vòi ấm nước được làm cao ngang miệng ấm là ứng dụng của", options: ["máy nén thuỷ lực", "bình thông nhau", "đòn bẩy", "lực đẩy Archimedes"], answer: 1 },
    ],
    tf: [
      { q: "Càng lên cao, áp suất khí quyển càng tăng.", answer: false },
      { q: "Máy nén thuỷ lực giúp tạo lực lớn từ một lực nhỏ.", answer: true },
      { q: "Áp suất chất lỏng chỉ tác dụng lên đáy bình.", answer: false },
      { q: "Thợ lặn càng xuống sâu càng chịu áp suất lớn.", answer: true },
    ],
    fill: [
      { q: "Liquid pressure increases with ___.", vi: "Áp suất chất lỏng tăng theo độ sâu.", answer: "depth" },
      { q: "A hydraulic ___ can lift a car.", vi: "Máy nén thuỷ lực có thể nâng một chiếc ô tô.", answer: "press" },
      { q: "___ pressure is caused by the air around the Earth.", vi: "Áp suất khí quyển do lớp không khí bao quanh Trái Đất gây ra.", answer: "Atmospheric" },
    ],
    essay: [
      {
        q: "Vì sao khi lặn sâu, người thợ lặn phải mặc bộ áo lặn chịu được áp suất lớn?",
        answer: "Vì áp suất chất lỏng tăng theo độ sâu; ở dưới sâu nước gây áp suất rất lớn lên cơ thể, áo lặn giúp chịu áp suất đó, bảo vệ cơ thể.",
      },
      {
        q: "Giải thích vì sao hút nước bằng ống hút thì nước lên được miệng.",
        answer: "Khi hút, không khí trong ống bị hút ra nên áp suất trong ống giảm; áp suất khí quyển trên mặt nước trong cốc lớn hơn, đẩy nước lên ống.",
      },
    ],
  },

  // ============================ BÀI 17 ============================
  {
    id: "n8-17",
    theory: [
      {
        h: "Lực đẩy Archimedes",
        en: "Archimedes' principle",
        points: [
          "Vật nhúng trong chất lỏng bị chất lỏng tác dụng một lực đẩy hướng từ dưới lên gọi là **lực đẩy Archimedes** (upthrust).",
          "Độ lớn bằng trọng lượng phần chất lỏng bị vật chiếm chỗ: **FA = d·V** — d: trọng lượng riêng của chất lỏng (N/m³), V: thể tích phần chất lỏng bị vật chiếm chỗ (m³).",
          "Trọng lượng riêng của nước: d = 10 000 N/m³ (d = 10·D).",
        ],
      },
      {
        h: "Điều kiện vật nổi, vật chìm",
        en: "Floating and sinking",
        points: ["So sánh trọng lượng P của vật với lực đẩy FA khi vật chìm hoàn toàn."],
        table: {
          head: ["So sánh", "Vật sẽ"],
          rows: [
            ["P > FA (D vật > D chất lỏng)", "chìm xuống"],
            ["P = FA (D vật = D chất lỏng)", "lơ lửng"],
            ["P < FA (D vật < D chất lỏng)", "nổi lên"],
          ],
        },
      },
    ],
    remember: [
      "Lực đẩy Archimedes hướng thẳng đứng từ dưới lên, FA = d·V.",
      "V là thể tích phần chất lỏng bị vật chiếm chỗ (phần chìm).",
      "P > FA: chìm; P = FA: lơ lửng; P < FA: nổi.",
    ],
    sentences: [
      { en: "The upthrust equals the weight of the liquid displaced.", vi: "Lực đẩy Archimedes bằng trọng lượng phần chất lỏng bị chiếm chỗ." },
      { en: "An object floats when the upthrust balances its weight.", vi: "Vật nổi khi lực đẩy cân bằng với trọng lượng của vật." },
      { en: "Wood floats because it is less dense than water.", vi: "Gỗ nổi vì khối lượng riêng nhỏ hơn nước." },
    ],
    mcq: [
      { q: "Lực đẩy Archimedes có chiều", options: ["từ trên xuống", "từ dưới lên", "nằm ngang", "bất kì"], answer: 1 },
      { q: "Vật có thể tích 0,005 m³ chìm hoàn toàn trong nước. Lực đẩy Archimedes là", options: ["5 N", "50 N", "500 N", "0,5 N"], answer: 1 },
      { q: "Vật lơ lửng trong chất lỏng khi", options: ["P > FA", "P < FA", "P = FA", "P = 0"], answer: 2 },
      { q: "Thả hòn bi sắt vào thuỷ ngân (D = 13 600 kg/m³), hòn bi sẽ", options: ["chìm", "nổi", "lơ lửng", "tan ra"], answer: 1 },
    ],
    tf: [
      { q: "Lực đẩy Archimedes phụ thuộc vào trọng lượng riêng của chất lỏng.", answer: true },
      { q: "Vật càng nặng thì lực đẩy Archimedes càng lớn (dù thể tích chìm như nhau).", answer: false },
      { q: "Quả trứng có thể nổi trong nước muối đặc.", answer: true },
      { q: "Tàu thép nổi được vì thép nhẹ hơn nước.", answer: false },
    ],
    fill: [
      { q: "Wood ___ on water.", vi: "Gỗ nổi trên mặt nước.", answer: "floats" },
      { q: "A stone ___ in water.", vi: "Hòn đá chìm trong nước.", answer: "sinks" },
      { q: "The ___ acts upwards on an object in water.", vi: "Lực đẩy Archimedes tác dụng hướng lên lên vật trong nước.", answer: "upthrust" },
    ],
    essay: [
      {
        q: "Một vật treo vào lực kế, ngoài không khí lực kế chỉ 8 N, nhúng chìm trong nước lực kế chỉ 5 N. Tính lực đẩy Archimedes và thể tích của vật.",
        answer: "FA = 8 − 5 = 3 N. V = FA : d = 3 : 10 000 = 0,0003 m³ = 300 cm³.",
      },
      {
        q: "Vì sao con tàu bằng thép rất nặng vẫn nổi trên mặt nước?",
        answer: "Tàu có phần rỗng lớn nên thể tích chiếm chỗ trong nước rất lớn; lực đẩy Archimedes đủ lớn cân bằng trọng lượng tàu (khối lượng riêng trung bình của tàu nhỏ hơn của nước).",
      },
    ],
  },

  // ============================ BÀI 18 ============================
  {
    id: "n8-18",
    theory: [
      {
        h: "Tác dụng làm quay của lực",
        en: "The turning effect of a force",
        points: [
          "Lực tác dụng lên vật có trục quay cố định có thể làm vật **quay** (mở cửa, vặn ốc, đạp xe).",
          "Lực có giá **đi qua trục quay** hoặc **song song với trục quay** thì không làm vật quay.",
        ],
      },
      {
        h: "Moment lực",
        en: "Moment of a force",
        points: [
          "**Moment lực** (moment) đặc trưng cho tác dụng làm quay của lực: **M = F·d**.",
          "F: độ lớn của lực (N); d: khoảng cách từ trục quay đến giá của lực — gọi là **cánh tay đòn** (m); M đo bằng **N·m**.",
          "Lực càng lớn, cánh tay đòn càng dài → tác dụng làm quay càng mạnh (cờ lê cán dài vặn ốc dễ hơn).",
        ],
      },
    ],
    remember: [
      "Moment lực M = F·d đặc trưng cho tác dụng làm quay của lực.",
      "d là khoảng cách từ trục quay đến giá của lực (cánh tay đòn).",
      "Lực có giá đi qua trục quay không làm vật quay.",
    ],
    sentences: [
      { en: "The moment of a force is force times distance.", vi: "Moment lực bằng lực nhân khoảng cách." },
      { en: "Push the door far from the hinges to open it easily.", vi: "Đẩy cửa ở xa bản lề thì mở cửa dễ dàng." },
      { en: "A long spanner gives a bigger turning effect.", vi: "Cờ lê cán dài cho tác dụng làm quay lớn hơn." },
    ],
    mcq: [
      { q: "Moment lực được tính bằng công thức", options: ["M = F/d", "M = F·d", "M = F + d", "M = d/F"], answer: 1 },
      { q: "Đơn vị của moment lực là", options: ["N", "N/m", "N·m", "Pa"], answer: 2 },
      { q: "Lực 30 N, cánh tay đòn 0,2 m. Moment lực là", options: ["6 N·m", "150 N·m", "30,2 N·m", "1,5 N·m"], answer: 0 },
      { q: "Muốn mở cửa dễ nhất, ta đẩy", options: ["sát bản lề", "ở giữa cửa", "ở mép xa bản lề", "vào bản lề"], answer: 2 },
    ],
    tf: [
      { q: "Lực có giá đi qua trục quay sẽ làm vật quay mạnh nhất.", answer: false },
      { q: "Tay nắm cửa đặt xa bản lề để tăng cánh tay đòn.", answer: true },
      { q: "Moment lực càng lớn thì tác dụng làm quay càng mạnh.", answer: true },
      { q: "Cánh tay đòn là khoảng cách từ trục quay đến điểm đặt của vật.", answer: false },
    ],
    fill: [
      { q: "The ___ of a force is its turning effect.", vi: "Moment lực là tác dụng làm quay của lực.", answer: "moment" },
      { q: "A door turns around its hinges, which act as a ___.", vi: "Cửa quay quanh bản lề — đóng vai trò trục quay.", answer: "pivot" },
      { q: "Moment = force × ___.", vi: "Moment = lực × khoảng cách.", answer: "distance" },
    ],
    essay: [
      {
        q: "Vì sao tay nắm cửa thường được lắp ở mép cửa, xa bản lề?",
        answer: "Lắp xa bản lề làm cánh tay đòn d lớn → với lực nhỏ vẫn tạo được moment lực đủ lớn để quay cánh cửa.",
      },
      {
        q: "Vặn một con ốc cần moment 12 N·m. Nếu dùng cờ lê dài 0,3 m thì cần lực ít nhất bao nhiêu?",
        answer: "F = M : d = 12 : 0,3 = 40 N.",
      },
    ],
  },

  // ============================ BÀI 19 ============================
  {
    id: "n8-19",
    theory: [
      {
        h: "Cấu tạo đòn bẩy",
        en: "Parts of a lever",
        points: [
          "**Đòn bẩy** (lever) là một vật rắn quay được quanh một điểm cố định O gọi là **điểm tựa** (fulcrum).",
          "Lực tác dụng F₁ (effort) đặt tại O₁; lực cản F₂ (load) đặt tại O₂.",
          "Đòn bẩy cân bằng khi **F₁·d₁ = F₂·d₂**; khi d₁ > d₂ thì F₁ < F₂ → **được lợi về lực**.",
        ],
      },
      {
        h: "Các loại đòn bẩy",
        en: "Classes of levers",
        points: ["Phân loại theo vị trí điểm tựa, lực tác dụng và lực cản."],
        table: {
          head: ["Loại", "Đặc điểm", "Ví dụ"],
          rows: [
            ["Loại 1", "Điểm tựa O nằm giữa O₁ và O₂", "Bập bênh, cái kéo, kìm"],
            ["Loại 2", "Lực cản O₂ nằm giữa O và O₁", "Xe cút kít, cái mở nắp chai"],
            ["Loại 3", "Lực tác dụng O₁ nằm giữa O và O₂", "Cần câu, cái nhíp, cẳng tay người"],
          ],
        },
      },
    ],
    remember: [
      "Đòn bẩy gồm điểm tựa, lực tác dụng và lực cản.",
      "Đòn bẩy cân bằng khi F₁·d₁ = F₂·d₂.",
      "Muốn được lợi về lực: khoảng cách từ điểm tựa đến lực tác dụng phải lớn hơn đến lực cản.",
    ],
    sentences: [
      { en: "A lever turns around a fixed point called the fulcrum.", vi: "Đòn bẩy quay quanh một điểm cố định gọi là điểm tựa." },
      { en: "A lever helps us lift heavy loads with a small effort.", vi: "Đòn bẩy giúp ta nâng vật nặng bằng lực nhỏ." },
      { en: "Scissors are a class-one lever.", vi: "Cái kéo là đòn bẩy loại 1." },
    ],
    mcq: [
      { q: "Dụng cụ nào là đòn bẩy loại 2?", options: ["Bập bênh", "Xe cút kít", "Cần câu", "Cái nhíp"], answer: 1 },
      { q: "Đòn bẩy cân bằng khi", options: ["F₁ = F₂", "d₁ = d₂", "F₁·d₁ = F₂·d₂", "F₁ + d₁ = F₂ + d₂"], answer: 2 },
      { q: "Bập bênh: bạn A nặng 400 N ngồi cách điểm tựa 1,5 m. Bạn B nặng 300 N phải ngồi cách điểm tựa", options: ["1 m", "2 m", "1,5 m", "3 m"], answer: 1 },
      { q: "Cẳng tay người khi cầm vật là đòn bẩy loại", options: ["1", "2", "3", "không phải đòn bẩy"], answer: 2 },
    ],
    tf: [
      { q: "Đòn bẩy nào cũng giúp được lợi về lực.", answer: false },
      { q: "Cái kéo có điểm tựa nằm giữa lực tác dụng và lực cản.", answer: true },
      { q: "Muốn được lợi về lực, cánh tay đòn của lực tác dụng phải dài hơn của lực cản.", answer: true },
      { q: "Cần câu là đòn bẩy loại 2.", answer: false },
    ],
    fill: [
      { q: "A see-saw is a ___.", vi: "Bập bênh là một đòn bẩy.", answer: "lever" },
      { q: "A lever turns around the ___.", vi: "Đòn bẩy quay quanh điểm tựa.", answer: "fulcrum" },
      { q: "The heavy object we lift is called the ___.", vi: "Vật nặng cần nâng gọi là lực cản.", answer: "load" },
    ],
    essay: [
      {
        q: "Dùng xà beng dài 1,2 m để bẩy hòn đá nặng 1200 N. Điểm tựa cách hòn đá 0,2 m. Tính lực tối thiểu tay phải tác dụng ở đầu kia.",
        answer: "d₂ = 0,2 m; d₁ = 1,2 − 0,2 = 1 m. F₁ = F₂·d₂ : d₁ = 1200 × 0,2 : 1 = 240 N.",
      },
      {
        q: "Kể tên 3 dụng cụ trong nhà dùng nguyên tắc đòn bẩy và chỉ ra điểm tựa của mỗi dụng cụ.",
        answer: "Ví dụ: kéo cắt giấy (điểm tựa là đinh ốc giữa hai lưỡi), cái mở nắp chai (điểm tựa là mép nắp), cái kẹp gắp than/nhíp (điểm tựa là đầu nối hai thanh).",
      },
    ],
  },
];
