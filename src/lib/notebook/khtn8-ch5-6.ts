// Vở ghi Vật lí – KHTN 8, Chương V "Điện" + Chương VI "Nhiệt" (Bài 20–29).
// Bám SGK Kết nối tri thức với cuộc sống. GV có thể đối chiếu, chỉnh câu chữ cho phù hợp lớp mình.
import type { NoteLesson } from "@/lib/notebook/types";

export const NOTES_CH5_6: NoteLesson[] = [
  // ============================ BÀI 20 ============================
  {
    id: "n8-20",
    theory: [
      {
        h: "Vật nhiễm điện",
        en: "Charged objects",
        points: [
          "Cọ xát thước nhựa, thanh thuỷ tinh, bóng bay… vào vải khô, chúng hút được vật nhẹ → vật đã **nhiễm điện** (charged).",
          "Nguyên nhân: khi cọ xát, **electron** dịch chuyển từ vật này sang vật kia.",
          "Vật **nhận thêm electron** → nhiễm điện **âm**; vật **mất bớt electron** → nhiễm điện **dương**.",
        ],
      },
      {
        h: "Hai loại điện tích",
        en: "Two types of charge",
        points: [
          "Có hai loại điện tích: **dương (+)** và **âm (−)**.",
          "Điện tích **cùng loại đẩy nhau** (repel), **khác loại hút nhau** (attract).",
          "Ứng dụng / tác hại: sơn tĩnh điện, lọc bụi; tia lửa điện khi chạm tay nắm cửa, sét.",
        ],
      },
    ],
    remember: [
      "Nhiều vật bị nhiễm điện khi cọ xát do electron dịch chuyển.",
      "Nhận thêm electron → âm; mất bớt electron → dương.",
      "Cùng loại đẩy nhau, khác loại hút nhau.",
    ],
    sentences: [
      { en: "Rubbing can make an object electrically charged.", vi: "Cọ xát có thể làm vật nhiễm điện." },
      { en: "Like charges repel and unlike charges attract.", vi: "Điện tích cùng loại đẩy nhau, khác loại hút nhau." },
      { en: "An object that gains electrons becomes negatively charged.", vi: "Vật nhận thêm electron thì nhiễm điện âm." },
    ],
    mcq: [
      { q: "Vật nhiễm điện dương khi", options: ["nhận thêm electron", "mất bớt electron", "nhận thêm proton", "bị nung nóng"], answer: 1 },
      { q: "Hai quả cầu nhiễm điện đẩy nhau thì chúng", options: ["nhiễm điện khác loại", "nhiễm điện cùng loại", "không nhiễm điện", "một quả không nhiễm điện"], answer: 1 },
      { q: "Hiện tượng nào KHÔNG liên quan đến nhiễm điện do cọ xát?", options: ["Lược nhựa hút tóc", "Màn hình tivi bám bụi", "Nam châm hút đinh sắt", "Bị điện giật nhẹ khi cởi áo len"], answer: 2 },
      { q: "Thanh thuỷ tinh cọ xát với lụa nhiễm điện dương. Lụa sẽ", options: ["nhiễm điện dương", "nhiễm điện âm", "không nhiễm điện", "nhiễm từ"], answer: 1 },
    ],
    tf: [
      { q: "Có hai loại điện tích: dương và âm.", answer: true },
      { q: "Điện tích khác loại thì đẩy nhau.", answer: false },
      { q: "Khi cọ xát, electron dịch chuyển từ vật này sang vật khác.", answer: true },
      { q: "Chỉ kim loại mới bị nhiễm điện do cọ xát.", answer: false },
    ],
    fill: [
      { q: "Like charges ___ each other.", vi: "Điện tích cùng loại đẩy nhau.", answer: "repel" },
      { q: "Unlike charges ___ each other.", vi: "Điện tích khác loại hút nhau.", answer: "attract" },
      { q: "A balloon becomes charged when you ___ it on your hair.", vi: "Quả bóng nhiễm điện khi em cọ xát nó lên tóc.", answer: "rub" },
    ],
    essay: [
      {
        q: "Giải thích vì sao vào ngày hanh khô, chải tóc bằng lược nhựa thì tóc bị lược hút kéo thẳng ra.",
        answer: "Khi chải, lược nhựa và tóc cọ xát nhau nên nhiễm điện khác loại (electron dịch chuyển từ vật này sang vật kia) → lược hút tóc.",
      },
      {
        q: "Vì sao xe chở xăng thường có một sợi xích sắt kéo lê trên mặt đường?",
        answer: "Khi xe chạy, thân xe cọ xát với không khí nên nhiễm điện; xích sắt dẫn điện tích xuống đất, tránh phóng tia lửa điện gây cháy nổ xăng.",
      },
    ],
  },

  // ============================ BÀI 21 ============================
  {
    id: "n8-21",
    theory: [
      {
        h: "Dòng điện",
        en: "Electric current",
        points: [
          "**Dòng điện** (electric current) là dòng chuyển dời có hướng của các hạt mang điện.",
          "Trong kim loại, dòng điện là dòng các **electron tự do** chuyển dời có hướng.",
        ],
      },
      {
        h: "Nguồn điện",
        en: "Power sources",
        points: [
          "**Nguồn điện** cung cấp năng lượng điện để duy trì dòng điện: pin, acquy, pin mặt trời, máy phát điện.",
          "Mỗi nguồn điện có hai cực: **cực dương (+)** và **cực âm (−)**.",
        ],
      },
      {
        h: "Vật dẫn điện và vật cách điện",
        en: "Conductors and insulators",
        points: [
          "**Vật dẫn điện** (conductor) cho dòng điện chạy qua: đồng, nhôm, sắt, than chì, nước muối.",
          "**Vật cách điện** (insulator) không cho dòng điện chạy qua: nhựa, cao su, thuỷ tinh, sứ, gỗ khô, không khí khô.",
        ],
      },
    ],
    remember: [
      "Dòng điện là dòng chuyển dời có hướng của các hạt mang điện.",
      "Nguồn điện có hai cực (+) và (−), cung cấp năng lượng điện.",
      "Kim loại dẫn điện tốt; nhựa, cao su, sứ cách điện.",
    ],
    sentences: [
      { en: "An electric current is a flow of charged particles.", vi: "Dòng điện là dòng các hạt mang điện chuyển dời có hướng." },
      { en: "Metals are good conductors of electricity.", vi: "Kim loại là vật dẫn điện tốt." },
      { en: "Plastic and rubber are insulators.", vi: "Nhựa và cao su là vật cách điện." },
    ],
    mcq: [
      { q: "Dòng điện trong kim loại là dòng chuyển dời có hướng của", options: ["proton", "electron tự do", "nguyên tử", "phân tử nước"], answer: 1 },
      { q: "Vật nào là vật dẫn điện?", options: ["Thước nhựa", "Dây đồng", "Cục tẩy", "Cốc sứ"], answer: 1 },
      { q: "Thiết bị nào KHÔNG phải nguồn điện?", options: ["Pin", "Acquy", "Bóng đèn", "Pin mặt trời"], answer: 2 },
      { q: "Vỏ dây điện làm bằng nhựa vì nhựa", options: ["dẫn điện tốt", "cách điện", "rẻ và đẹp", "dẫn nhiệt tốt"], answer: 1 },
    ],
    tf: [
      { q: "Mỗi nguồn điện có hai cực.", answer: true },
      { q: "Nước muối là chất cách điện.", answer: false },
      { q: "Dòng điện chạy được trong dây đồng.", answer: true },
      { q: "Cao su là vật dẫn điện tốt.", answer: false },
    ],
    fill: [
      { q: "Copper is a good ___.", vi: "Đồng là vật dẫn điện tốt.", answer: "conductor" },
      { q: "Rubber is an ___.", vi: "Cao su là vật cách điện.", answer: "insulator" },
      { q: "A ___ supplies electrical energy to a circuit.", vi: "Pin cung cấp năng lượng điện cho mạch.", answer: "battery" },
    ],
    essay: [
      {
        q: "Kể tên 3 vật dẫn điện và 3 vật cách điện có trong lớp học của em.",
        answer: "Dẫn điện: lõi dây điện (đồng), chân bàn sắt, ruột bút chì (than chì). Cách điện: vỏ bút nhựa, cục tẩy, cửa kính.",
      },
      {
        q: "Vì sao thợ điện khi sửa điện phải đi ủng và đeo găng tay cao su?",
        answer: "Cao su là vật cách điện nên ngăn dòng điện đi qua cơ thể xuống đất, giúp thợ điện không bị điện giật.",
      },
    ],
  },

  // ============================ BÀI 22 ============================
  {
    id: "n8-22",
    theory: [
      {
        h: "Mạch điện",
        en: "Electric circuits",
        points: [
          "Mạch điện đơn giản gồm: **nguồn điện**, **dây nối**, **công tắc** và **thiết bị tiêu thụ điện** (bóng đèn, quạt…).",
          "Dòng điện chỉ chạy trong **mạch kín**; khi công tắc mở, mạch **hở**, không có dòng điện.",
          "Chiều dòng điện **quy ước**: từ cực dương, qua mạch ngoài, tới cực âm của nguồn.",
        ],
      },
      {
        h: "Kí hiệu một số bộ phận",
        en: "Circuit symbols",
        points: ["Sơ đồ mạch điện dùng kí hiệu để biểu diễn mạch gọn, dễ đọc."],
        table: {
          head: ["Bộ phận", "Tiếng Anh", "Công dụng"],
          rows: [
            ["Pin / nguồn", "cell / battery", "Cung cấp năng lượng điện"],
            ["Công tắc", "switch", "Đóng, ngắt mạch"],
            ["Bóng đèn", "lamp", "Phát sáng"],
            ["Điện trở / biến trở", "resistor / rheostat", "Cản trở / điều chỉnh dòng điện"],
            ["Cầu chì", "fuse", "Tự ngắt mạch khi dòng quá lớn"],
            ["Đi ốt / LED", "diode / LED", "Cho dòng điện đi một chiều; LED phát sáng"],
            ["Ampe kế / vôn kế", "ammeter / voltmeter", "Đo cường độ dòng điện / hiệu điện thế"],
          ],
        },
      },
    ],
    remember: [
      "Mạch điện đơn giản: nguồn, dây nối, công tắc, thiết bị dùng điện.",
      "Dòng điện chỉ chạy trong mạch kín.",
      "Chiều dòng điện quy ước: từ (+) qua mạch ngoài tới (−).",
    ],
    sentences: [
      { en: "Current only flows in a closed circuit.", vi: "Dòng điện chỉ chạy trong mạch kín." },
      { en: "A switch opens and closes the circuit.", vi: "Công tắc đóng và ngắt mạch điện." },
      { en: "A fuse melts when the current is too large.", vi: "Cầu chì nóng chảy khi dòng điện quá lớn." },
    ],
    mcq: [
      { q: "Khi công tắc mở, mạch điện", options: ["kín, đèn sáng", "hở, đèn tắt", "kín, đèn tắt", "hở, đèn sáng"], answer: 1 },
      { q: "Bộ phận nào tự ngắt mạch khi dòng điện quá lớn?", options: ["Bóng đèn", "Cầu chì", "Pin", "Dây nối"], answer: 1 },
      { q: "Đi ốt phát quang (LED) sáng khi", options: ["mắc chiều nào cũng sáng", "mắc đúng chiều", "không cần nguồn", "mắc vào nam châm"], answer: 1 },
      { q: "Chiều dòng điện quy ước trong mạch ngoài là", options: ["từ (−) đến (+)", "từ (+) đến (−)", "không có chiều", "thay đổi liên tục"], answer: 1 },
    ],
    tf: [
      { q: "Sơ đồ mạch điện dùng kí hiệu để biểu diễn các bộ phận.", answer: true },
      { q: "Dòng điện chạy được trong mạch hở.", answer: false },
      { q: "Biến trở dùng để điều chỉnh cường độ dòng điện.", answer: true },
      { q: "Cầu chì giúp đèn sáng hơn.", answer: false },
    ],
    fill: [
      { q: "A ___ opens and closes a circuit.", vi: "Công tắc đóng và ngắt mạch.", answer: "switch" },
      { q: "Current only flows in a closed ___.", vi: "Dòng điện chỉ chạy trong mạch kín.", answer: "circuit" },
      { q: "A ___ protects the circuit when the current is too large.", vi: "Cầu chì bảo vệ mạch khi dòng điện quá lớn.", answer: "fuse" },
    ],
    essay: [
      {
        q: "Vẽ sơ đồ mạch điện gồm 1 pin, 1 công tắc đóng, 1 bóng đèn và dây nối. Dùng mũi tên chỉ chiều dòng điện.",
        answer: "Sơ đồ: kí hiệu pin (vạch dài = cực +, vạch ngắn = cực −) nối tiếp công tắc đóng và bóng đèn thành một vòng kín. Mũi tên đi ra từ cực (+), qua công tắc, bóng đèn, về cực (−).",
      },
      {
        q: "Đèn pin không sáng. Nêu 3 nguyên nhân có thể và cách kiểm tra.",
        answer: "Pin hết điện (thay pin mới); bóng đèn đứt dây tóc (thay bóng); tiếp xúc ở công tắc hoặc lò xo bị hở / gỉ (lau sạch, đóng lại cho chặt).",
      },
    ],
  },

  // ============================ BÀI 23 ============================
  {
    id: "n8-23",
    theory: [
      {
        h: "Các tác dụng của dòng điện",
        en: "Effects of electric current",
        points: ["Dòng điện có năm tác dụng chính."],
        table: {
          head: ["Tác dụng", "Biểu hiện", "Ứng dụng"],
          rows: [
            ["Nhiệt (heating)", "Vật dẫn nóng lên", "Bàn là, nồi cơm điện, ấm điện"],
            ["Phát sáng (lighting)", "Đèn sáng", "Đèn LED, đèn huỳnh quang"],
            ["Hoá học (chemical)", "Kim loại bám vào điện cực", "Mạ điện, tinh chế kim loại"],
            ["Sinh lí (physiological)", "Co giật cơ", "Châm cứu điện, máy kích tim"],
            ["Từ (magnetic)", "Hút vật bằng sắt, làm lệch kim la bàn", "Chuông điện, cần cẩu điện, loa"],
          ],
        },
      },
      {
        h: "An toàn điện",
        en: "Electrical safety",
        points: [
          "Dòng điện qua cơ thể người có thể gây **điện giật**, nguy hiểm đến tính mạng.",
          "Không chạm vào dây điện hở, ổ cắm; không dùng tay ướt cắm điện; thấy người bị điện giật phải **ngắt nguồn điện** trước.",
        ],
      },
    ],
    remember: [
      "Dòng điện có tác dụng nhiệt, phát sáng, hoá học, sinh lí và từ.",
      "Nam châm điện, chuông điện dùng tác dụng từ.",
      "Luôn tuân thủ quy tắc an toàn điện.",
    ],
    sentences: [
      { en: "An electric kettle uses the heating effect of current.", vi: "Ấm điện dùng tác dụng nhiệt của dòng điện." },
      { en: "An electric bell uses the magnetic effect of current.", vi: "Chuông điện dùng tác dụng từ của dòng điện." },
      { en: "Never touch a bare wire.", vi: "Không bao giờ chạm vào dây điện hở." },
    ],
    mcq: [
      { q: "Nồi cơm điện hoạt động dựa vào tác dụng", options: ["từ", "nhiệt", "hoá học", "sinh lí"], answer: 1 },
      { q: "Mạ vàng cho đồ trang sức dựa vào tác dụng", options: ["hoá học", "từ", "phát sáng", "nhiệt"], answer: 0 },
      { q: "Cần cẩu điện nâng sắt thép dựa vào tác dụng", options: ["nhiệt", "sinh lí", "từ", "hoá học"], answer: 2 },
      { q: "Thấy bạn bị điện giật, việc đầu tiên cần làm là", options: ["kéo tay bạn ra", "ngắt nguồn điện", "gọi to", "dội nước"], answer: 1 },
    ],
    tf: [
      { q: "Dòng điện có tác dụng sinh lí.", answer: true },
      { q: "Bóng đèn LED hoạt động dựa vào tác dụng hoá học.", answer: false },
      { q: "Chuông điện dùng nam châm điện.", answer: true },
      { q: "Dùng tay ướt cắm phích điện là an toàn.", answer: false },
    ],
    fill: [
      { q: "An ___ is a magnet made by an electric current.", vi: "Nam châm điện là nam châm tạo ra bởi dòng điện.", answer: "electromagnet" },
      { q: "A kettle uses the ___ effect of current.", vi: "Ấm điện dùng tác dụng nhiệt của dòng điện.", answer: "heating" },
      { q: "Electroplating uses the ___ effect of current.", vi: "Mạ điện dùng tác dụng hoá học của dòng điện.", answer: "chemical" },
    ],
    essay: [
      {
        q: "Kể tên 5 đồ dùng điện trong gia đình em và cho biết mỗi đồ dùng dựa chủ yếu vào tác dụng nào của dòng điện.",
        answer: "Ví dụ: bàn là, ấm điện (nhiệt); bóng đèn LED (phát sáng); quạt điện, máy bơm (từ — động cơ điện); chuông cửa (từ).",
      },
      {
        q: "Nêu 3 việc làm để sử dụng điện an toàn ở nhà.",
        answer: "Không chạm vào dây điện hở, ổ cắm; không dùng tay ướt; lắp cầu chì / aptomat; không thả diều gần đường dây điện; ngắt điện khi sửa chữa.",
      },
    ],
  },

  // ============================ BÀI 24 ============================
  {
    id: "n8-24",
    theory: [
      {
        h: "Cường độ dòng điện",
        en: "Current",
        points: [
          "**Cường độ dòng điện** (I) cho biết độ mạnh, yếu của dòng điện; đơn vị **ampe (A)**, 1 A = 1000 mA.",
          "Đo bằng **ampe kế** (ammeter) mắc **nối tiếp** với dụng cụ cần đo; chốt (+) nối về phía cực dương của nguồn.",
          "Dòng điện qua đèn càng lớn thì đèn sáng càng mạnh.",
        ],
      },
      {
        h: "Hiệu điện thế",
        en: "Voltage",
        points: [
          "Giữa hai cực của nguồn điện có một **hiệu điện thế** (U) — hiệu điện thế tạo ra dòng điện; đơn vị **vôn (V)**, 1 kV = 1000 V.",
          "Đo bằng **vôn kế** (voltmeter) mắc **song song** với dụng cụ cần đo.",
          "Số vôn ghi trên mỗi nguồn (pin 1,5 V; acquy 12 V) là hiệu điện thế giữa hai cực khi chưa mắc vào mạch.",
        ],
      },
    ],
    remember: [
      "Cường độ dòng điện: kí hiệu I, đơn vị A, đo bằng ampe kế mắc nối tiếp.",
      "Hiệu điện thế: kí hiệu U, đơn vị V, đo bằng vôn kế mắc song song.",
      "Chọn dụng cụ đo có giới hạn đo phù hợp.",
    ],
    sentences: [
      { en: "Current is measured in amperes.", vi: "Cường độ dòng điện được đo bằng ampe." },
      { en: "An ammeter is connected in series.", vi: "Ampe kế được mắc nối tiếp." },
      { en: "A voltmeter is connected in parallel.", vi: "Vôn kế được mắc song song." },
    ],
    mcq: [
      { q: "Đơn vị của hiệu điện thế là", options: ["ampe (A)", "vôn (V)", "oát (W)", "jun (J)"], answer: 1 },
      { q: "Ampe kế được mắc", options: ["song song với đèn", "nối tiếp với đèn", "vào hai cực của nguồn", "tuỳ ý"], answer: 1 },
      { q: "350 mA bằng", options: ["3,5 A", "0,35 A", "35 A", "0,035 A"], answer: 1 },
      { q: "Trên pin có ghi 1,5 V. Con số này cho biết", options: ["cường độ dòng điện", "hiệu điện thế giữa hai cực pin", "khối lượng pin", "thời gian dùng pin"], answer: 1 },
    ],
    tf: [
      { q: "Vôn kế được mắc song song với dụng cụ cần đo.", answer: true },
      { q: "1 A = 100 mA.", answer: false },
      { q: "Dòng điện qua đèn càng lớn, đèn càng sáng.", answer: true },
      { q: "Hiệu điện thế được đo bằng ampe kế.", answer: false },
    ],
    fill: [
      { q: "An ___ measures current.", vi: "Ampe kế đo cường độ dòng điện.", answer: "ammeter" },
      { q: "A ___ measures voltage.", vi: "Vôn kế đo hiệu điện thế.", answer: "voltmeter" },
      { q: "The unit of current is the ___.", vi: "Đơn vị cường độ dòng điện là ampe.", answer: "ampere" },
    ],
    essay: [
      {
        q: "Vẽ sơ đồ mạch điện gồm nguồn, công tắc, bóng đèn, ampe kế đo cường độ dòng điện qua đèn và vôn kế đo hiệu điện thế giữa hai đầu đèn.",
        answer: "Nguồn – công tắc – ampe kế – bóng đèn mắc nối tiếp thành mạch kín; vôn kế mắc song song với hai đầu bóng đèn. Chốt (+) của các dụng cụ đo nối về phía cực (+) của nguồn.",
      },
      {
        q: "Đổi đơn vị: 0,6 A = ? mA; 1250 mA = ? A; 2,5 kV = ? V.",
        answer: "0,6 A = 600 mA; 1250 mA = 1,25 A; 2,5 kV = 2500 V.",
      },
    ],
  },

  // ============================ BÀI 25 ============================
  {
    id: "n8-25",
    theory: [
      {
        h: "Chuẩn bị",
        en: "Preparation",
        points: ["Nguồn điện (pin), công tắc, bóng đèn, dây nối, **ampe kế**, **vôn kế**; bảng ghi số liệu."],
      },
      {
        h: "Các bước tiến hành",
        en: "Procedure",
        points: [
          "Kiểm tra **giới hạn đo (GHĐ)** và **độ chia nhỏ nhất (ĐCNN)** của dụng cụ; chỉnh kim về số 0.",
          "Mắc ampe kế **nối tiếp**, vôn kế **song song** với bóng đèn; chốt (+) về phía cực dương.",
          "Đóng công tắc, đọc và ghi số chỉ; thay đổi số pin, đo lại; **ngắt công tắc** trước khi thay đổi mạch.",
          "Nhận xét: hiệu điện thế giữa hai đầu đèn càng lớn thì cường độ dòng điện qua đèn càng lớn.",
        ],
      },
    ],
    remember: [
      "Chọn dụng cụ có GHĐ lớn hơn giá trị cần đo.",
      "Không mắc ampe kế trực tiếp vào hai cực nguồn (đoản mạch).",
      "Ngắt điện trước khi lắp lại mạch.",
    ],
    sentences: [
      { en: "Check the range of the meter before measuring.", vi: "Kiểm tra giới hạn đo của dụng cụ trước khi đo." },
      { en: "Switch off the circuit before changing it.", vi: "Ngắt mạch trước khi thay đổi cách mắc." },
      { en: "We record the readings in a data table.", vi: "Chúng ta ghi số chỉ vào bảng số liệu." },
    ],
    mcq: [
      { q: "Trước khi đo, cần chọn ampe kế có GHĐ", options: ["nhỏ hơn giá trị cần đo", "lớn hơn giá trị cần đo", "bằng 0", "bất kì"], answer: 1 },
      { q: "Mắc ampe kế trực tiếp vào hai cực nguồn sẽ", options: ["đo chính xác hơn", "gây đoản mạch, hỏng dụng cụ", "làm đèn sáng hơn", "không ảnh hưởng"], answer: 1 },
      { q: "Tăng số pin (tăng U) thì cường độ dòng điện qua đèn", options: ["giảm", "tăng", "không đổi", "bằng 0"], answer: 1 },
      { q: "Khi muốn thay đổi cách mắc mạch, việc đầu tiên là", options: ["tháo pin", "ngắt công tắc", "tháo bóng đèn", "đọc số chỉ"], answer: 1 },
    ],
    tf: [
      { q: "Chốt (+) của ampe kế nối về phía cực dương của nguồn.", answer: true },
      { q: "Vôn kế mắc nối tiếp với bóng đèn.", answer: false },
      { q: "Cần đọc số chỉ khi kim đã đứng yên.", answer: true },
      { q: "Có thể thay đổi mạch khi đang đóng công tắc.", answer: false },
    ],
    fill: [
      { q: "Check the ___ of the ammeter first.", vi: "Kiểm tra giới hạn đo của ampe kế trước.", answer: "range" },
      { q: "Write each ___ in the data table.", vi: "Ghi mỗi số chỉ vào bảng số liệu.", answer: "reading" },
      { q: "Connecting an ammeter across the battery makes a short ___.", vi: "Mắc ampe kế vào hai cực pin gây đoản mạch.", answer: "circuit" },
    ],
    essay: [
      {
        q: "Lập bảng số liệu ghi kết quả đo U và I khi dùng 1 pin, 2 pin. Rút ra nhận xét.",
        answer: "Bảng gồm cột: Số pin | U (V) | I (A). Ví dụ: 1 pin – 1,4 V – 0,15 A; 2 pin – 2,8 V – 0,22 A. Nhận xét: U giữa hai đầu đèn tăng thì I qua đèn tăng, đèn sáng hơn.",
      },
      {
        q: "Nêu 3 quy tắc an toàn khi làm thí nghiệm về điện.",
        answer: "Chỉ dùng nguồn điện có hiệu điện thế thấp (pin); ngắt công tắc khi lắp, sửa mạch; không mắc ampe kế trực tiếp vào hai cực nguồn; kiểm tra GHĐ dụng cụ đo.",
      },
    ],
  },

  // ============================ BÀI 26 ============================
  {
    id: "n8-26",
    theory: [
      {
        h: "Năng lượng nhiệt và nội năng",
        en: "Thermal energy and internal energy",
        points: [
          "Các phân tử tạo nên vật luôn **chuyển động hỗn loạn không ngừng**; nhiệt độ càng cao, phân tử chuyển động càng **nhanh**.",
          "**Nội năng** (internal energy) của vật là tổng động năng và thế năng của các phân tử tạo nên vật.",
          "**Năng lượng nhiệt** (thermal energy) là phần năng lượng vật nhận thêm hay mất bớt khi truyền nhiệt.",
        ],
      },
      {
        h: "Làm thay đổi nội năng",
        en: "Changing internal energy",
        points: [
          "**Thực hiện công**: cọ xát hai bàn tay, khoan, cưa → vật nóng lên, nội năng tăng.",
          "**Truyền nhiệt**: đặt vật vào nước nóng, hơ lửa → nội năng tăng; năng lượng nhiệt truyền từ vật nóng sang vật lạnh.",
        ],
      },
    ],
    remember: [
      "Nhiệt độ càng cao, các phân tử chuyển động càng nhanh, nội năng càng lớn.",
      "Có thể làm thay đổi nội năng bằng thực hiện công hoặc truyền nhiệt.",
      "Năng lượng nhiệt truyền từ vật nóng hơn sang vật lạnh hơn.",
    ],
    sentences: [
      { en: "The hotter an object is, the faster its particles move.", vi: "Vật càng nóng thì các phân tử chuyển động càng nhanh." },
      { en: "Rubbing your hands makes them warm.", vi: "Xoa hai bàn tay làm tay ấm lên." },
      { en: "Heat flows from a hot object to a cold object.", vi: "Nhiệt truyền từ vật nóng sang vật lạnh." },
    ],
    mcq: [
      { q: "Khi nhiệt độ của vật tăng, các phân tử", options: ["chuyển động chậm lại", "chuyển động nhanh hơn", "đứng yên", "nhỏ lại"], answer: 1 },
      { q: "Xoa hai tay vào nhau tay nóng lên là do", options: ["truyền nhiệt", "thực hiện công", "bức xạ", "đối lưu"], answer: 1 },
      { q: "Thả thìa kim loại vào cốc nước nóng, nội năng của thìa", options: ["giảm", "tăng", "không đổi", "bằng 0"], answer: 1 },
      { q: "Nội năng của vật là", options: ["trọng lượng của vật", "tổng năng lượng của các phân tử tạo nên vật", "nhiệt độ của vật", "thể tích của vật"], answer: 1 },
    ],
    tf: [
      { q: "Vật nào cũng có nội năng.", answer: true },
      { q: "Năng lượng nhiệt tự truyền từ vật lạnh sang vật nóng.", answer: false },
      { q: "Cưa gỗ làm lưỡi cưa nóng lên do thực hiện công.", answer: true },
      { q: "Nước đá ở 0 °C không có nội năng.", answer: false },
    ],
    fill: [
      { q: "___ energy is the total energy of the particles in an object.", vi: "Nội năng là tổng năng lượng của các phân tử trong vật.", answer: "Internal" },
      { q: "When water is heated, its ___ move faster.", vi: "Khi đun nước, các phân tử nước chuyển động nhanh hơn.", answer: "particles" },
      { q: "A thermometer measures ___.", vi: "Nhiệt kế đo nhiệt độ.", answer: "temperature" },
    ],
    essay: [
      {
        q: "Nêu hai cách làm cho một đồng xu nóng lên. Mỗi cách thuộc hình thức nào làm thay đổi nội năng?",
        answer: "Cọ xát đồng xu lên mặt bàn (thực hiện công); thả đồng xu vào nước nóng hoặc hơ trên lửa (truyền nhiệt).",
      },
      {
        q: "Giải thích vì sao nhỏ một giọt mực vào cốc nước nóng thì mực loang nhanh hơn cốc nước lạnh.",
        answer: "Ở nhiệt độ cao, các phân tử nước chuyển động nhanh hơn, va chạm mạnh hơn với các phân tử mực nên mực hoà lẫn (khuếch tán) nhanh hơn.",
      },
    ],
  },

  // ============================ BÀI 27 ============================
  {
    id: "n8-27",
    theory: [
      {
        h: "Dụng cụ",
        en: "Equipment",
        points: ["**Joulemeter** (đo năng lượng điện cung cấp, đơn vị jun J), dây đốt nóng / bình nhiệt lượng kế, **nhiệt kế**, cân, nước, đồng hồ bấm giây."],
      },
      {
        h: "Tiến hành",
        en: "Procedure",
        points: [
          "Cân khối lượng nước, đo nhiệt độ ban đầu t₁.",
          "Bật nguồn, đun nước; **khuấy đều**; sau mỗi khoảng thời gian đọc số chỉ joulemeter (năng lượng E) và nhiệt độ t.",
          "Lập bảng E – Δt (Δt = t − t₁). Nhận xét: năng lượng cung cấp càng lớn thì độ tăng nhiệt độ càng lớn; khối lượng nước càng lớn thì cần nhiều năng lượng hơn.",
        ],
      },
    ],
    remember: [
      "Joulemeter đo năng lượng điện cung cấp, đơn vị jun (J).",
      "Cùng khối lượng, năng lượng nhận được càng lớn thì vật nóng lên càng nhiều.",
      "Khuấy đều và đọc nhiệt kế đúng cách để kết quả chính xác.",
    ],
    sentences: [
      { en: "Energy is measured in joules.", vi: "Năng lượng được đo bằng đơn vị jun." },
      { en: "We stir the water to spread the heat evenly.", vi: "Chúng ta khuấy nước để nhiệt phân bố đều." },
      { en: "More water needs more energy to warm up.", vi: "Nhiều nước hơn thì cần nhiều năng lượng hơn để nóng lên." },
    ],
    mcq: [
      { q: "Joulemeter dùng để đo", options: ["nhiệt độ", "năng lượng điện cung cấp", "khối lượng", "thời gian"], answer: 1 },
      { q: "Đơn vị đo năng lượng là", options: ["W", "J", "°C", "N"], answer: 1 },
      { q: "Trong thí nghiệm, khuấy nước để", options: ["nước nhanh sôi", "nhiệt độ nước đồng đều", "nước bay hơi", "làm lạnh nước"], answer: 1 },
      { q: "Muốn 400 g nước tăng thêm 10 °C cần năng lượng so với 200 g nước tăng thêm 10 °C", options: ["bằng một nửa", "bằng nhau", "khoảng gấp đôi", "gấp bốn"], answer: 2 },
    ],
    tf: [
      { q: "Năng lượng nhận được càng nhiều, nước nóng lên càng nhiều.", answer: true },
      { q: "Joulemeter đo nhiệt độ của nước.", answer: false },
      { q: "Cần đo nhiệt độ ban đầu của nước trước khi đun.", answer: true },
      { q: "Khối lượng nước không ảnh hưởng tới năng lượng cần cung cấp.", answer: false },
    ],
    fill: [
      { q: "A ___ measures temperature.", vi: "Nhiệt kế đo nhiệt độ.", answer: "thermometer" },
      { q: "A joulemeter shows energy in ___.", vi: "Joulemeter hiển thị năng lượng theo đơn vị jun.", answer: "joules" },
      { q: "We ___ the water during heating.", vi: "Chúng ta khuấy nước trong khi đun.", answer: "stir" },
    ],
    essay: [
      {
        q: "Một nhóm đo được: năng lượng 4200 J làm 100 g nước tăng 10 °C. Dự đoán năng lượng cần để 200 g nước tăng 10 °C.",
        answer: "Khối lượng gấp đôi, cùng độ tăng nhiệt độ → năng lượng cần khoảng gấp đôi: ≈ 8400 J.",
      },
      {
        q: "Nêu 2 nguyên nhân làm kết quả đo năng lượng nhiệt bị sai lệch và cách khắc phục.",
        answer: "Nhiệt thất thoát ra môi trường (dùng bình cách nhiệt, đậy nắp); nhiệt độ nước không đều (khuấy đều); đọc nhiệt kế sai (đặt mắt ngang vạch).",
      },
    ],
  },

  // ============================ BÀI 28 ============================
  {
    id: "n8-28",
    theory: [
      {
        h: "Ba cách truyền nhiệt",
        en: "Three ways of heat transfer",
        points: ["Năng lượng nhiệt truyền từ nơi nóng sang nơi lạnh bằng ba cách."],
        table: {
          head: ["Cách truyền", "Xảy ra ở", "Ví dụ"],
          rows: [
            ["Dẫn nhiệt (conduction)", "Chủ yếu chất rắn", "Thìa kim loại trong cốc nước nóng nóng dần lên"],
            ["Đối lưu (convection)", "Chất lỏng, chất khí", "Đun nước: nước nóng nổi lên, nước lạnh chìm xuống"],
            ["Bức xạ nhiệt (radiation)", "Cả trong chân không", "Nhiệt từ Mặt Trời tới Trái Đất"],
          ],
        },
      },
      {
        h: "Vận dụng",
        en: "Applications",
        points: [
          "Kim loại **dẫn nhiệt tốt** (nồi, xoong); không khí, nước, gỗ, nhựa **dẫn nhiệt kém** (cán xoong, áo len giữ ấm).",
          "Bếp đun đặt ở **đáy** nồi, máy lạnh đặt ở **trên cao** để tạo dòng đối lưu.",
          "Vật **màu sẫm, bề mặt xù xì** hấp thụ bức xạ nhiệt tốt; **màu sáng, nhẵn bóng** phản xạ tốt.",
        ],
      },
    ],
    remember: [
      "Ba cách truyền nhiệt: dẫn nhiệt, đối lưu, bức xạ nhiệt.",
      "Đối lưu chỉ xảy ra trong chất lỏng và chất khí.",
      "Bức xạ nhiệt truyền được cả trong chân không.",
    ],
    sentences: [
      { en: "Heat travels by conduction, convection and radiation.", vi: "Nhiệt truyền bằng dẫn nhiệt, đối lưu và bức xạ nhiệt." },
      { en: "Metals are good conductors of heat.", vi: "Kim loại dẫn nhiệt tốt." },
      { en: "Dark surfaces absorb more heat radiation.", vi: "Bề mặt sẫm màu hấp thụ nhiều bức xạ nhiệt hơn." },
    ],
    mcq: [
      { q: "Hình thức truyền nhiệt chủ yếu trong chất rắn là", options: ["đối lưu", "dẫn nhiệt", "bức xạ nhiệt", "bay hơi"], answer: 1 },
      { q: "Nhiệt từ Mặt Trời truyền tới Trái Đất bằng", options: ["dẫn nhiệt", "đối lưu", "bức xạ nhiệt", "cả ba cách"], answer: 2 },
      { q: "Máy điều hoà thường lắp ở trên cao để", options: ["dễ lắp", "tạo dòng đối lưu làm mát cả phòng", "tăng bức xạ", "tiết kiệm dây"], answer: 1 },
      { q: "Cán xoong, nồi làm bằng nhựa hoặc gỗ vì", options: ["dẫn nhiệt tốt", "dẫn nhiệt kém", "nặng", "rẻ"], answer: 1 },
    ],
    tf: [
      { q: "Đối lưu xảy ra trong chất rắn.", answer: false },
      { q: "Bức xạ nhiệt có thể truyền trong chân không.", answer: true },
      { q: "Áo len giữ ấm vì không khí giữa các sợi len dẫn nhiệt kém.", answer: true },
      { q: "Vật màu trắng hấp thụ bức xạ nhiệt tốt hơn vật màu đen.", answer: false },
    ],
    fill: [
      { q: "Heat moves through a metal spoon by ___.", vi: "Nhiệt truyền qua thìa kim loại bằng dẫn nhiệt.", answer: "conduction" },
      { q: "Warm air rises by ___.", vi: "Không khí nóng bốc lên nhờ đối lưu.", answer: "convection" },
      { q: "The Sun warms the Earth by ___.", vi: "Mặt Trời sưởi ấm Trái Đất bằng bức xạ nhiệt.", answer: "radiation" },
    ],
    essay: [
      {
        q: "Vì sao mùa đông mặc nhiều áo mỏng ấm hơn mặc một áo dày (cùng khối lượng)?",
        answer: "Giữa các lớp áo mỏng có nhiều lớp không khí; không khí dẫn nhiệt kém nên hạn chế nhiệt từ cơ thể truyền ra ngoài.",
      },
      {
        q: "Giải thích vì sao bóng đèn sợi đốt hoặc bếp đun được đặt ở phía dưới khi sưởi ấm gà con, còn máy lạnh đặt trên cao.",
        answer: "Không khí nóng nhẹ nổi lên, không khí lạnh nặng chìm xuống tạo dòng đối lưu: nguồn nóng đặt dưới thì khí nóng lan lên khắp nơi; máy lạnh đặt trên thì khí lạnh chìm xuống làm mát cả phòng.",
      },
    ],
  },

  // ============================ BÀI 29 ============================
  {
    id: "n8-29",
    theory: [
      {
        h: "Sự nở vì nhiệt của các chất",
        en: "Thermal expansion of substances",
        points: [
          "Hầu hết các chất **nở ra khi nóng lên** và **co lại khi lạnh đi** (thermal expansion).",
          "Các chất rắn khác nhau nở vì nhiệt khác nhau; các chất lỏng khác nhau nở vì nhiệt khác nhau.",
          "Chất **khí nở vì nhiệt nhiều nhất**, rồi đến chất lỏng, chất rắn nở ít nhất.",
        ],
      },
      {
        h: "Ứng dụng và lưu ý",
        en: "Uses and precautions",
        points: [
          "**Ứng dụng**: nhiệt kế chất lỏng, băng kép (bimetallic strip) trong bàn là, quả bóng bàn bẹp nhúng nước nóng phồng lên.",
          "**Lưu ý**: để khe hở giữa các thanh ray, ở đầu cầu; dây điện căng võng vào mùa hè; không đổ nước quá đầy ấm khi đun.",
        ],
      },
    ],
    remember: [
      "Các chất nở ra khi nóng lên, co lại khi lạnh đi.",
      "Khí nở nhiều nhất, rồi đến lỏng, rắn nở ít nhất.",
      "Sự nở vì nhiệt bị ngăn cản có thể gây ra lực rất lớn.",
    ],
    sentences: [
      { en: "Most substances expand when they are heated.", vi: "Hầu hết các chất nở ra khi nóng lên." },
      { en: "Gases expand more than liquids and solids.", vi: "Chất khí nở vì nhiệt nhiều hơn chất lỏng và chất rắn." },
      { en: "Gaps are left between rails for expansion.", vi: "Giữa các thanh ray có khe hở để ray nở ra." },
    ],
    mcq: [
      { q: "Khi bị nung nóng, chất rắn", options: ["co lại", "nở ra", "không thay đổi", "nhẹ đi"], answer: 1 },
      { q: "Cùng tăng nhiệt độ, chất nở vì nhiệt nhiều nhất là", options: ["sắt", "nước", "không khí", "thuỷ tinh"], answer: 2 },
      { q: "Vì sao không đổ nước thật đầy ấm khi đun?", options: ["Nước nở ra tràn ra ngoài", "Nước co lại", "Ấm bị nhẹ", "Nước bay hơi hết"], answer: 0 },
      { q: "Băng kép hoạt động dựa trên", options: ["hai kim loại nở vì nhiệt khác nhau", "lực đẩy Archimedes", "tác dụng từ", "áp suất khí quyển"], answer: 0 },
    ],
    tf: [
      { q: "Các chất rắn khác nhau nở vì nhiệt như nhau.", answer: false },
      { q: "Nhiệt kế chất lỏng dựa trên sự nở vì nhiệt của chất lỏng.", answer: true },
      { q: "Dây điện thường căng hơn vào mùa hè.", answer: false },
      { q: "Quả bóng bàn bẹp nhúng nước nóng có thể phồng lên.", answer: true },
    ],
    fill: [
      { q: "Most solids ___ when heated.", vi: "Hầu hết chất rắn nở ra khi nóng lên.", answer: "expand" },
      { q: "Most substances ___ when cooled.", vi: "Hầu hết các chất co lại khi lạnh đi.", answer: "contract" },
      { q: "A small ___ is left between rails.", vi: "Có một khe hở nhỏ giữa các thanh ray.", answer: "gap" },
    ],
    essay: [
      {
        q: "Vì sao khi rót nước nóng vào cốc thuỷ tinh dày, cốc dễ bị vỡ hơn cốc mỏng?",
        answer: "Thuỷ tinh dẫn nhiệt kém: mặt trong cốc dày nóng lên và nở ra trước, mặt ngoài chưa kịp nóng nên không nở; sự nở không đều gây lực lớn làm cốc vỡ. Cốc mỏng nóng lên đều nhanh hơn.",
      },
      {
        q: "Nút thuỷ tinh của lọ bị kẹt. Nêu cách mở nút dựa vào sự nở vì nhiệt và giải thích.",
        answer: "Hơ nóng cổ lọ (hoặc nhúng cổ lọ vào nước nóng): cổ lọ nóng lên nở ra trước, nút chưa kịp nở → nút lỏng ra, dễ mở.",
      },
    ],
  },
];
