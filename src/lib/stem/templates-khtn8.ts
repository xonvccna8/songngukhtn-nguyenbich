// 20 dự án STEM mẫu Vật lí – KHTN 8 (Chương III Khối lượng riêng và áp suất · IV Moment lực · V Điện · VI Nhiệt).
// Mỗi dự án gắn bài SGK (Kết nối tri thức), có tiêu chí sản phẩm đo được, vật liệu rẻ dễ kiếm, lưu ý an toàn, từ vựng song ngữ.
// GV chọn mẫu ở “Tạo dự án STEM” rồi sửa tự do cho phù hợp lớp mình.
import type { StemTemplate } from "@/lib/stem/projects";

const SAFE = "An toàn: dùng kéo, dao rọc giấy, keo nến có GV giám sát.";
const SAFE_E = "An toàn điện: chỉ dùng pin 1,5 V – 9 V, tuyệt đối không cắm vào ổ điện 220 V.";
const SAFE_H = "An toàn nhiệt: dùng nước ấm dưới 60 °C, có GV giám sát khi đun.";

export const STEM_TEMPLATES_KHTN8: StemTemplate[] = [
  // ===================== CHƯƠNG III. KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT =====================
  {
    id: "v8-density-detective",
    grade: 8,
    curLessonId: "n8-13",
    title: { en: "Density detectives: identify the mystery material", vi: "Thám tử khối lượng riêng: nhận biết chất bí ẩn" },
    goal: { en: "Use D = m/V to find out what three mystery objects are made of.", vi: "Dùng D = m/V để tìm ra ba vật bí ẩn làm bằng chất gì." },
    brief: {
      en: "The teacher gives each team three wrapped objects. Measure the mass and the volume of each, calculate the density and compare it with a density table to name the material. Make a poster “Case files” with your data in English.",
      vi: "GV phát cho mỗi tổ ba vật bọc kín. Đo khối lượng, thể tích từng vật, tính khối lượng riêng rồi so với bảng khối lượng riêng để gọi tên chất. Làm áp phích “Hồ sơ vụ án” có số liệu bằng tiếng Anh. Tiêu chí: tìm đúng ≥ 2/3 chất, sai số khối lượng riêng ≤ 10%, có bảng số liệu đo 3 lần.",
    },
    materials: "Cân điện tử, bình chia độ, thước, vật nhỏ bằng nhôm, sắt, đồng, nhựa, gỗ. " + SAFE,
    vocab: [
      { en: "density", vi: "khối lượng riêng" },
      { en: "identify", vi: "nhận biết" },
      { en: "data table", vi: "bảng số liệu" },
    ],
  },
  {
    id: "v8-density-tower",
    grade: 8,
    curLessonId: "n8-13",
    title: { en: "A rainbow density tower", vi: "Tháp cầu vồng khối lượng riêng" },
    goal: { en: "Stack liquids of different densities in one glass without mixing.", vi: "Xếp các chất lỏng có khối lượng riêng khác nhau thành lớp trong một cốc mà không trộn lẫn." },
    brief: {
      en: "Pour honey, syrup, coloured water, oil and alcohol-free mouthwash slowly over a spoon into a tall glass. Predict the order first. Drop small objects (grape, cork, plastic bead) and see where they stop. Explain in English why.",
      vi: "Rót chậm mật ong, si-rô, nước pha màu, dầu ăn… theo thìa vào cốc cao. Dự đoán thứ tự trước khi rót. Thả vật nhỏ (nho, nút bần, hạt nhựa) xem dừng ở lớp nào và giải thích bằng tiếng Anh. Tiêu chí: ≥ 4 lớp tách rõ, dự đoán đúng thứ tự, giải thích đúng bằng khối lượng riêng.",
    },
    materials: "Cốc thuỷ tinh cao, mật ong, si-rô, nước, phẩm màu thực phẩm, dầu ăn, thìa. Không uống thử.",
    vocab: [
      { en: "layer", vi: "lớp" },
      { en: "denser", vi: "có khối lượng riêng lớn hơn" },
      { en: "predict", vi: "dự đoán" },
    ],
  },
  {
    id: "v8-cylinder-kit",
    grade: 8,
    curLessonId: "n8-14",
    title: { en: "A home-made measuring cylinder", vi: "Tự làm bình chia độ" },
    goal: { en: "Make a measuring cylinder from a bottle and use it to find the density of a stone.", vi: "Làm bình chia độ từ chai nhựa và dùng nó để xác định khối lượng riêng của hòn đá." },
    brief: {
      en: "Cut a clear bottle, pour in 10 ml at a time with a syringe and mark the scale. Use your cylinder and a kitchen scale to find the density of three stones. Compare with the school cylinder.",
      vi: "Cắt chai nhựa trong, dùng xi lanh rót mỗi lần 10 ml để vạch thang chia. Dùng bình tự làm và cân nhà bếp xác định khối lượng riêng của ba hòn đá; so sánh với kết quả đo bằng bình chia độ của trường. Tiêu chí: vạch chia đều, sai lệch ≤ 5 ml so với bình chuẩn, báo cáo song ngữ có bảng số liệu.",
    },
    materials: "Chai nhựa trong, xi lanh 10 ml, bút dạ, thước, cân nhà bếp, đá nhỏ. " + SAFE,
    vocab: [
      { en: "measuring cylinder", vi: "bình chia độ" },
      { en: "scale", vi: "vạch chia" },
      { en: "accurate", vi: "chính xác" },
    ],
  },
  {
    id: "v8-snow-shoes",
    grade: 8,
    curLessonId: "n8-15",
    title: { en: "Shoes that do not sink in sand", vi: "Đôi giày không lún trên cát" },
    goal: { en: "Design shoes that reduce pressure so a toy figure does not sink into sand or flour.", vi: "Thiết kế đế giày giảm áp suất để búp bê / tượng nhỏ không bị lún trên cát hoặc bột." },
    brief: {
      en: "Measure how deep a weighted figure sinks into a tray of sand. Design shoes with a larger area from cardboard. Calculate p = F/S before and after. Present your design in English.",
      vi: "Đo độ lún của một vật nặng (tượng nhỏ có gắn quả nặng) trên khay cát. Thiết kế đế giày bằng bìa có diện tích lớn hơn. Tính p = F/S trước và sau. Trình bày thiết kế bằng tiếng Anh. Tiêu chí: độ lún giảm ≥ 50%, có tính áp suất đúng đơn vị Pa, giải thích được vì sao.",
    },
    materials: "Khay cát hoặc bột mì, quả nặng 100–200 g, bìa các-tông, thước, lực kế. " + SAFE,
    vocab: [
      { en: "pressure", vi: "áp suất" },
      { en: "area", vi: "diện tích" },
      { en: "reduce", vi: "giảm" },
    ],
  },
  {
    id: "v8-bed-of-nails",
    grade: 8,
    curLessonId: "n8-15",
    title: { en: "Balloon on a bed of pins", vi: "Quả bóng trên giường đinh ghim" },
    goal: { en: "Show that many pins spread a force and lower the pressure.", vi: "Chứng minh nhiều đinh ghim chia đều lực nên áp suất nhỏ, bóng không vỡ." },
    brief: {
      en: "Push one pin into a balloon (it pops). Then press a balloon onto a board with 100 pins and put a book on top. Explain using p = F/S. Film a short video with English commentary.",
      vi: "Ấn một đinh ghim vào bóng (bóng vỡ). Sau đó đặt bóng lên tấm xốp cắm 100 đinh ghim và đặt sách lên trên. Giải thích bằng p = F/S. Quay video ngắn có thuyết minh tiếng Anh. Tiêu chí: bóng không vỡ với ≥ 1 kg sách, giải thích đúng, video ≤ 2 phút.",
    },
    materials: "Tấm xốp dày, đinh ghim, bóng bay, sách. GV cắm đinh trước; HS đeo kính bảo hộ khi bóng có thể vỡ.",
    vocab: [
      { en: "spread", vi: "phân bố, dàn đều" },
      { en: "force", vi: "lực" },
      { en: "pop", vi: "vỡ, nổ" },
    ],
  },
  {
    id: "v8-hydraulic-arm",
    grade: 8,
    curLessonId: "n8-16",
    title: { en: "A hydraulic robot arm", vi: "Cánh tay robot thuỷ lực" },
    goal: { en: "Build an arm that moves using syringes filled with water.", vi: "Làm cánh tay robot cử động nhờ các xi lanh chứa nước." },
    brief: {
      en: "Cut the arm from cardboard. Connect pairs of syringes with plastic tubes filled with water to lift, turn and grab. Use a small syringe to push a large one and compare the forces. Explain in English how liquids pass on pressure.",
      vi: "Cắt các khớp tay bằng bìa cứng. Nối từng cặp xi lanh bằng ống nhựa chứa nước để nâng, xoay, gắp. Thử dùng xi lanh nhỏ đẩy xi lanh lớn và so sánh lực. Giải thích bằng tiếng Anh chất lỏng truyền áp suất thế nào. Tiêu chí: tay gắp và nâng được vật 50 g lên cao 10 cm, có ≥ 2 khớp cử động.",
    },
    materials: "Bìa cứng, 4–6 xi lanh, ống truyền dịch, nước pha màu, ghim, keo nến. " + SAFE,
    vocab: [
      { en: "hydraulic", vi: "thuỷ lực" },
      { en: "syringe", vi: "xi lanh" },
      { en: "piston", vi: "pit-tông" },
    ],
  },
  {
    id: "v8-water-tower",
    grade: 8,
    curLessonId: "n8-16",
    title: { en: "Water jets and depth", vi: "Tia nước và độ sâu" },
    goal: { en: "Show that liquid pressure increases with depth and design a water tower for a model house.", vi: "Chứng minh áp suất chất lỏng tăng theo độ sâu và thiết kế tháp nước cho ngôi nhà mô hình." },
    brief: {
      en: "Make three holes at different heights in a bottle and measure how far each jet goes. Then build a model water tower with a tube to a “house tap” and test which tower height gives the strongest flow.",
      vi: "Đục ba lỗ ở các độ cao khác nhau trên chai, đo tầm xa từng tia nước. Sau đó làm tháp nước mô hình có ống dẫn tới “vòi nước” của ngôi nhà, thử độ cao tháp nào cho dòng chảy mạnh nhất. Tiêu chí: bảng số liệu độ sâu – tầm xa, rút ra kết luận đúng, mô hình chạy được, thuyết trình 2 phút bằng tiếng Anh.",
    },
    materials: "Chai nhựa 1,5 l, đinh nung (GV làm), ống nhựa, khay hứng nước, thước dây. " + SAFE,
    vocab: [
      { en: "depth", vi: "độ sâu" },
      { en: "jet", vi: "tia nước" },
      { en: "water tower", vi: "tháp nước" },
    ],
  },
  {
    id: "v8-air-pressure-show",
    grade: 8,
    curLessonId: "n8-16",
    title: { en: "The atmospheric pressure magic show", vi: "Ảo thuật với áp suất khí quyển" },
    goal: { en: "Perform and explain three tricks that use atmospheric pressure.", vi: "Biểu diễn và giải thích ba “màn ảo thuật” dùng áp suất khí quyển." },
    brief: {
      en: "Prepare three tricks: a glass of water upside down with a card, an egg pulled into a bottle (teacher only), and a straw that lifts water. Each member explains one trick in English using “air pressure pushes…”.",
      vi: "Chuẩn bị ba màn: cốc nước úp ngược có tấm bìa; quả trứng bị hút vào chai (GV làm); ống hút giữ nước. Mỗi thành viên giải thích một màn bằng tiếng Anh dùng mẫu câu “air pressure pushes…”. Tiêu chí: 3 màn thành công, giải thích đúng nguyên nhân, mọi thành viên đều nói.",
    },
    materials: "Cốc nhựa, tấm bìa cứng, ống hút, chai thuỷ tinh miệng rộng, trứng luộc bóc vỏ. Phần đốt giấy do GV làm.",
    vocab: [
      { en: "atmospheric pressure", vi: "áp suất khí quyển" },
      { en: "upside down", vi: "lộn ngược" },
      { en: "push", vi: "đẩy" },
    ],
  },
  {
    id: "v8-foil-boat",
    grade: 8,
    curLessonId: "n8-17",
    title: { en: "The strongest foil boat", vi: "Thuyền giấy bạc chở nặng nhất" },
    goal: { en: "Design a boat from one sheet of foil that carries the most coins.", vi: "Thiết kế thuyền từ một tờ giấy bạc chở được nhiều đồng xu nhất." },
    brief: {
      en: "Each team gets a 20 × 20 cm sheet of foil. Shape a boat, test how many coins it carries before sinking, improve the shape and test again. Explain with upthrust and displaced water.",
      vi: "Mỗi tổ nhận tờ giấy bạc 20 × 20 cm. Gấp thành thuyền, thử chở đồng xu đến khi chìm, cải tiến hình dạng rồi thử lại. Giải thích bằng lực đẩy Archimedes và thể tích nước bị chiếm chỗ. Tiêu chí: lần 2 chở nhiều hơn lần 1, có bảng số liệu, giải thích đúng bằng tiếng Anh.",
    },
    materials: "Giấy bạc nhôm, chậu nước, đồng xu hoặc vòng đệm cùng loại, khăn lau.",
    vocab: [
      { en: "upthrust", vi: "lực đẩy Archimedes" },
      { en: "displace", vi: "chiếm chỗ" },
      { en: "carry", vi: "chở" },
    ],
  },
  {
    id: "v8-cartesian-diver",
    grade: 8,
    curLessonId: "n8-17",
    title: { en: "A Cartesian diver submarine", vi: "Tàu ngầm Descartes" },
    goal: { en: "Make a diver that sinks, floats and stays suspended when you squeeze a bottle.", vi: "Làm “thợ lặn” chìm, nổi, lơ lửng khi bóp chai." },
    brief: {
      en: "Put a pipette or ketchup sachet with a little air into a full bottle and close it. Squeeze the bottle and watch the diver. Explain the conditions for sinking, floating and being suspended. Decorate the diver as a submarine.",
      vi: "Thả ống nhỏ giọt (hoặc gói tương nhỏ) có ít không khí vào chai đầy nước, đậy nắp. Bóp chai và quan sát thợ lặn. Giải thích điều kiện vật chìm, nổi, lơ lửng. Trang trí thành tàu ngầm. Tiêu chí: điều khiển được thợ lặn dừng ở giữa chai ≥ 3 giây, giải thích đúng so sánh P và FA.",
    },
    materials: "Chai nhựa 1,5 l có nắp, ống nhỏ giọt, kẹp giấy, nước.",
    vocab: [
      { en: "submarine", vi: "tàu ngầm" },
      { en: "suspended", vi: "lơ lửng" },
      { en: "squeeze", vi: "bóp" },
    ],
  },

  // ===================== CHƯƠNG IV. TÁC DỤNG LÀM QUAY CỦA LỰC =====================
  {
    id: "v8-mobile-balance",
    grade: 8,
    curLessonId: "n8-18",
    title: { en: "A balanced hanging mobile", vi: "Chùm treo cân bằng" },
    goal: { en: "Build a hanging mobile that balances using moments.", vi: "Làm chùm đồ treo cân bằng nhờ quy tắc moment lực." },
    brief: {
      en: "Hang shapes of different masses from straws and string. Measure masses and distances and calculate moments so that every level is balanced. Label each shape with a physics word in English.",
      vi: "Treo các hình có khối lượng khác nhau bằng ống hút và chỉ. Đo khối lượng, khoảng cách và tính moment để mọi tầng đều cân bằng. Mỗi hình ghi một thuật ngữ Vật lí tiếng Anh. Tiêu chí: ≥ 3 tầng, các thanh nằm ngang, có bảng tính M = F·d cho từng tầng.",
    },
    materials: "Ống hút cứng hoặc que tre, chỉ, bìa màu, kẹp giấy, cân nhà bếp, thước. " + SAFE,
    vocab: [
      { en: "moment", vi: "moment lực" },
      { en: "balanced", vi: "cân bằng" },
      { en: "hang", vi: "treo" },
    ],
  },
  {
    id: "v8-door-handle",
    grade: 8,
    curLessonId: "n8-18",
    title: { en: "Where should the handle go?", vi: "Tay nắm cửa nên đặt ở đâu?" },
    goal: { en: "Measure the force needed to open a door at different distances from the hinges.", vi: "Đo lực cần để mở cửa ở các khoảng cách khác nhau tới bản lề." },
    brief: {
      en: "Fix a spring balance to a classroom door at 4 distances from the hinges and read the force needed to open it. Draw a graph of force against distance and calculate the moment each time. Give advice for a door designer in English.",
      vi: "Móc lực kế vào cửa lớp ở 4 khoảng cách khác nhau tới bản lề, đọc lực cần để mở cửa. Vẽ đồ thị lực – khoảng cách, tính moment mỗi lần. Viết lời khuyên cho nhà thiết kế cửa bằng tiếng Anh. Tiêu chí: 4 lần đo × 3 lần lặp, đồ thị đúng, nhận xét moment gần như không đổi.",
    },
    materials: "Lực kế, thước dây, dây buộc, giấy kẻ ô.",
    vocab: [
      { en: "hinge", vi: "bản lề" },
      { en: "spring balance", vi: "lực kế" },
      { en: "graph", vi: "đồ thị" },
    ],
  },
  {
    id: "v8-catapult",
    grade: 8,
    curLessonId: "n8-19",
    title: { en: "A lever catapult", vi: "Máy bắn đá đòn bẩy" },
    goal: { en: "Build a lever catapult and find the pivot position that throws furthest.", vi: "Làm máy bắn đá kiểu đòn bẩy và tìm vị trí điểm tựa bắn xa nhất." },
    brief: {
      en: "Build a catapult from a ruler, a pencil (pivot) and a bottle cap. Move the pivot to 5 positions and measure the distance a paper ball travels. Name the class of lever and explain the result.",
      vi: "Làm máy bắn đá từ thước kẻ, bút chì (điểm tựa) và nắp chai. Dịch điểm tựa tới 5 vị trí, đo tầm xa viên giấy. Gọi tên loại đòn bẩy và giải thích kết quả. Tiêu chí: bắn trúng hộp đích cách 2 m, có bảng số liệu 5 vị trí, chỉ đúng O, O₁, O₂. Chỉ bắn giấy vo tròn, không ngắm vào người.",
    },
    materials: "Thước nhựa 30 cm, bút chì, nắp chai, dây chun, băng dính, giấy vo tròn.",
    vocab: [
      { en: "lever", vi: "đòn bẩy" },
      { en: "fulcrum", vi: "điểm tựa" },
      { en: "launch", vi: "phóng, bắn" },
    ],
  },
  {
    id: "v8-lever-tools",
    grade: 8,
    curLessonId: "n8-19",
    title: { en: "A lever museum in our kitchen", vi: "Bảo tàng đòn bẩy trong căn bếp" },
    goal: { en: "Find, photograph and classify levers at home.", vi: "Tìm, chụp ảnh và phân loại các đòn bẩy trong nhà." },
    brief: {
      en: "Find at least 9 tools that are levers (scissors, bottle opener, tongs…). Photograph them, mark the fulcrum, effort and load, and sort them into class 1, 2 and 3. Make a digital museum with English captions.",
      vi: "Tìm ít nhất 9 dụng cụ là đòn bẩy (kéo, cái mở nắp chai, kẹp gắp…). Chụp ảnh, đánh dấu điểm tựa, lực tác dụng, lực cản; xếp vào loại 1, 2, 3. Làm “bảo tàng số” có chú thích tiếng Anh. Tiêu chí: đủ 3 loại, mỗi loại ≥ 3 dụng cụ, đánh dấu đúng ≥ 8/9.",
    },
    materials: "Điện thoại / máy ảnh, ứng dụng trình chiếu, đồ dùng gia đình. Cẩn thận với dao, kéo.",
    vocab: [
      { en: "effort", vi: "lực tác dụng" },
      { en: "load", vi: "lực cản" },
      { en: "classify", vi: "phân loại" },
    ],
  },

  // ===================== CHƯƠNG V. ĐIỆN =====================
  {
    id: "v8-static-detector",
    grade: 8,
    curLessonId: "n8-20",
    title: { en: "A static electricity detector", vi: "Máy dò điện tích" },
    goal: { en: "Make an electroscope and test which materials become charged when rubbed.", vi: "Làm điện nghiệm đơn giản và thử vật nào nhiễm điện khi cọ xát." },
    brief: {
      en: "Make an electroscope from a jar, a paper clip and two foil strips. Rub 8 materials with wool or paper and bring them near. Record how far the strips open. Rank the materials and explain with electrons.",
      vi: "Làm điện nghiệm từ lọ thuỷ tinh, kẹp giấy và hai lá giấy bạc. Cọ xát 8 vật liệu với len hoặc giấy rồi đưa lại gần. Ghi độ xoè của lá. Xếp hạng vật liệu và giải thích bằng sự dịch chuyển electron. Tiêu chí: điện nghiệm hoạt động, thử đủ 8 vật liệu, giải thích đúng “cùng loại đẩy nhau”.",
    },
    materials: "Lọ thuỷ tinh có nắp nhựa, kẹp giấy, giấy bạc, thước nhựa, bóng bay, vải len.",
    vocab: [
      { en: "electroscope", vi: "điện nghiệm" },
      { en: "charged", vi: "nhiễm điện" },
      { en: "repel", vi: "đẩy nhau" },
    ],
  },
  {
    id: "v8-conductor-tester",
    grade: 8,
    curLessonId: "n8-21",
    title: { en: "A conductor tester", vi: "Bút thử vật dẫn điện" },
    goal: { en: "Build a tester with an LED and sort 15 objects into conductors and insulators.", vi: "Làm dụng cụ thử có đèn LED và phân loại 15 vật thành vật dẫn điện, vật cách điện." },
    brief: {
      en: "Connect a battery, an LED and two probe wires. Touch the probes to 15 objects (coin, pencil lead, rubber, salt water…). Record the results and make a sorting poster in English.",
      vi: "Nối pin, đèn LED và hai que dò. Chạm que dò vào 15 vật (đồng xu, ruột bút chì, cục tẩy, nước muối…). Ghi kết quả, làm áp phích phân loại bằng tiếng Anh. Tiêu chí: dụng cụ hoạt động, phân loại đúng ≥ 13/15, nêu được ứng dụng vỏ dây điện. " + SAFE_E,
    },
    materials: "Pin 3 V hoặc 2 pin AA, đèn LED, điện trở 100 Ω, dây nối có kẹp cá sấu. " + SAFE_E,
    vocab: [
      { en: "conductor", vi: "vật dẫn điện" },
      { en: "insulator", vi: "vật cách điện" },
      { en: "probe", vi: "que dò" },
    ],
  },
  {
    id: "v8-steady-hand",
    grade: 8,
    curLessonId: "n8-22",
    title: { en: "The steady-hand buzzer game", vi: "Trò chơi “bàn tay vững” có chuông" },
    goal: { en: "Design a circuit game with a buzzer and draw its circuit diagram.", vi: "Thiết kế trò chơi mạch điện có còi và vẽ sơ đồ mạch." },
    brief: {
      en: "Bend a bare wire into a wavy track. Move a wire loop along it: if they touch, the circuit closes and the buzzer sounds. Draw the circuit diagram with correct symbols and explain open and closed circuits in English.",
      vi: "Uốn dây đồng trần thành đường lượn sóng. Di chuyển vòng dây dọc theo đường: chạm vào là mạch kín, còi kêu. Vẽ sơ đồ mạch đúng kí hiệu và giải thích mạch kín, mạch hở bằng tiếng Anh. Tiêu chí: trò chơi chạy ổn định, sơ đồ đúng kí hiệu, có công tắc tắt mở. " + SAFE_E,
    },
    materials: "Dây đồng cứng, đế gỗ / xốp, còi (buzzer) 3–6 V, pin, dây nối, công tắc. " + SAFE_E,
    vocab: [
      { en: "circuit diagram", vi: "sơ đồ mạch điện" },
      { en: "buzzer", vi: "còi điện" },
      { en: "closed circuit", vi: "mạch kín" },
    ],
  },
  {
    id: "v8-electromagnet-crane",
    grade: 8,
    curLessonId: "n8-23",
    title: { en: "An electromagnet crane", vi: "Cần cẩu nam châm điện" },
    goal: { en: "Build a crane with an electromagnet that picks up and drops paper clips.", vi: "Làm cần cẩu dùng nam châm điện gắp và thả kẹp giấy." },
    brief: {
      en: "Wind wire around an iron nail to make an electromagnet. Test how many paper clips it lifts with 20, 40 and 60 turns. Mount it on a cardboard crane with a switch. Explain the magnetic effect of current in English.",
      vi: "Quấn dây quanh đinh sắt thành nam châm điện. Thử số kẹp giấy hút được với 20, 40, 60 vòng dây. Gắn lên cần cẩu bằng bìa có công tắc. Giải thích tác dụng từ của dòng điện bằng tiếng Anh. Tiêu chí: gắp và thả được ≥ 10 kẹp giấy, có bảng số vòng – số kẹp. " + SAFE_E,
    },
    materials: "Đinh sắt to, dây điện từ (dây đồng có sơn cách điện), pin 1,5 V, công tắc, bìa, kẹp giấy. Ngắt pin khi không dùng vì dây nóng. " + SAFE_E,
    vocab: [
      { en: "electromagnet", vi: "nam châm điện" },
      { en: "coil", vi: "cuộn dây" },
      { en: "magnetic effect", vi: "tác dụng từ" },
    ],
  },
  {
    id: "v8-lemon-battery",
    grade: 8,
    curLessonId: "n8-24",
    title: { en: "A fruit battery that lights an LED", vi: "Pin trái cây thắp sáng đèn LED" },
    goal: { en: "Make a battery from lemons and measure its voltage and current.", vi: "Làm pin từ quả chanh và đo hiệu điện thế, cường độ dòng điện." },
    brief: {
      en: "Push a copper coin and a zinc-coated nail into a lemon. Measure the voltage with a voltmeter, then join 2, 3 and 4 lemons in series and measure again. Find how many lemons light an LED. Present a graph in English.",
      vi: "Cắm đồng xu (hoặc dây đồng) và đinh mạ kẽm vào quả chanh. Đo hiệu điện thế bằng vôn kế; nối tiếp 2, 3, 4 quả rồi đo lại. Tìm số quả chanh cần để đèn LED sáng. Trình bày đồ thị bằng tiếng Anh. Tiêu chí: đo đúng cách mắc vôn kế, ampe kế; LED sáng; có đồ thị số quả – hiệu điện thế.",
    },
    materials: "4–6 quả chanh, dây đồng, đinh mạ kẽm, dây nối, đèn LED đỏ, đồng hồ vạn năng (đo V, mA). Không ăn chanh sau thí nghiệm.",
    vocab: [
      { en: "voltage", vi: "hiệu điện thế" },
      { en: "in series", vi: "nối tiếp" },
      { en: "voltmeter", vi: "vôn kế" },
    ],
  },
  {
    id: "v8-dimmer-lamp",
    grade: 8,
    curLessonId: "n8-25",
    title: { en: "A pencil dimmer for a desk lamp", vi: "Đèn bàn điều chỉnh độ sáng bằng ruột bút chì" },
    goal: { en: "Make a simple dimmer and record how current changes with brightness.", vi: "Làm biến trở đơn giản và ghi lại cường độ dòng điện thay đổi theo độ sáng." },
    brief: {
      en: "Use a pencil lead as a rheostat. Slide a clip along it and measure the current with an ammeter and the voltage across the lamp with a voltmeter at 5 positions. Put the dimmer into a model desk lamp.",
      vi: "Dùng ruột bút chì làm biến trở. Trượt kẹp dọc ruột chì, ở 5 vị trí đo cường độ dòng điện bằng ampe kế và hiệu điện thế hai đầu đèn bằng vôn kế. Lắp biến trở vào mô hình đèn bàn. Tiêu chí: mắc đúng ampe kế nối tiếp, vôn kế song song; bảng 5 lần đo; đèn sáng – mờ rõ rệt. " + SAFE_E,
    },
    materials: "Ruột bút chì 2B dài, kẹp cá sấu, bóng đèn 2,5 V, pin, ampe kế, vôn kế, bìa làm thân đèn. Ruột chì có thể nóng — không cầm lâu. " + SAFE_E,
    vocab: [
      { en: "rheostat", vi: "biến trở" },
      { en: "ammeter", vi: "ampe kế" },
      { en: "brightness", vi: "độ sáng" },
    ],
  },

  // ===================== CHƯƠNG VI. NHIỆT =====================
  {
    id: "v8-hand-warmer",
    grade: 8,
    curLessonId: "n8-26",
    title: { en: "Warm hands: work into internal energy", vi: "Ấm tay: biến công thành nội năng" },
    goal: { en: "Compare ways to warm up an object by doing work and by heating.", vi: "So sánh các cách làm vật nóng lên bằng thực hiện công và bằng truyền nhiệt." },
    brief: {
      en: "Shake sand in a closed bottle 200 times, rub a coin on paper, and put a coin in warm water. Measure temperature changes with a thermometer. Make an infographic: “Two ways to change internal energy”.",
      vi: "Lắc cát trong chai kín 200 lần, cọ xát đồng xu lên giấy, thả đồng xu vào nước ấm. Đo độ tăng nhiệt độ bằng nhiệt kế. Làm infographic “Hai cách làm thay đổi nội năng”. Tiêu chí: mỗi cách đo 3 lần, số liệu rõ ràng, phân loại đúng công / truyền nhiệt. " + SAFE_H,
    },
    materials: "Chai nhựa có nắp, cát khô, nhiệt kế, đồng xu, cốc nước ấm.",
    vocab: [
      { en: "internal energy", vi: "nội năng" },
      { en: "do work", vi: "thực hiện công" },
      { en: "temperature rise", vi: "độ tăng nhiệt độ" },
    ],
  },
  {
    id: "v8-solar-water-heater",
    grade: 8,
    curLessonId: "n8-27",
    title: { en: "A mini solar water heater", vi: "Máy nước nóng năng lượng Mặt Trời mini" },
    goal: { en: "Design a heater that warms 200 ml of water the most in 30 minutes of sunlight.", vi: "Thiết kế máy làm nóng 200 ml nước nhiều nhất sau 30 phút phơi nắng." },
    brief: {
      en: "Try black and white bottles, foil reflectors and a plastic cover. Measure the temperature every 5 minutes. Estimate the energy the water gained using the class joulemeter result (energy per °C for 200 ml). Present the best design in English.",
      vi: "Thử chai sơn đen / trắng, tấm phản xạ giấy bạc, nắp nhựa trong. Đo nhiệt độ 5 phút một lần. Ước tính năng lượng nước nhận được dựa vào kết quả đo bằng joulemeter trên lớp (năng lượng cho mỗi °C của 200 ml nước). Trình bày thiết kế tốt nhất bằng tiếng Anh. Tiêu chí: nước tăng ≥ 8 °C, có đồ thị nhiệt độ – thời gian, so sánh ≥ 2 thiết kế.",
    },
    materials: "Chai nhựa nhỏ, sơn hoặc giấy đen, giấy bạc, hộp xốp, màng bọc thực phẩm, nhiệt kế. Không nhìn thẳng vào Mặt Trời.",
    vocab: [
      { en: "thermal energy", vi: "năng lượng nhiệt" },
      { en: "absorb", vi: "hấp thụ" },
      { en: "joulemeter", vi: "joulemeter" },
    ],
  },
  {
    id: "v8-ice-keeper",
    grade: 8,
    curLessonId: "n8-28",
    title: { en: "Save the ice cube!", vi: "Giải cứu viên đá" },
    goal: { en: "Design a box that keeps an ice cube from melting for as long as possible.", vi: "Thiết kế hộp giữ viên đá lâu tan nhất." },
    brief: {
      en: "Use cheap materials to reduce conduction, convection and radiation. Weigh the ice before and after 60 minutes. Label on your box which material stops which type of heat transfer. Compare with a box with no insulation.",
      vi: "Dùng vật liệu rẻ tiền hạn chế dẫn nhiệt, đối lưu, bức xạ nhiệt. Cân viên đá trước và sau 60 phút. Ghi chú trên hộp vật liệu nào ngăn cách truyền nhiệt nào. So sánh với hộp không cách nhiệt. Tiêu chí: còn lại ≥ 60% khối lượng đá, giải thích đủ 3 cách truyền nhiệt bằng tiếng Anh.",
    },
    materials: "Hộp giấy nhỏ, xốp, giấy bạc, vải, bông, báo cũ, viên đá cùng cỡ, cân nhà bếp.",
    vocab: [
      { en: "insulation", vi: "vật liệu cách nhiệt" },
      { en: "conduction", vi: "dẫn nhiệt" },
      { en: "melt", vi: "tan chảy" },
    ],
  },
  {
    id: "v8-convection-lantern",
    grade: 8,
    curLessonId: "n8-28",
    title: { en: "A spinning convection lantern", vi: "Đèn kéo quân đối lưu" },
    goal: { en: "Make a paper spiral that spins over warm air to show convection.", vi: "Làm vòng xoắn giấy quay trên luồng khí nóng để minh hoạ đối lưu." },
    brief: {
      en: "Cut a paper spiral and hang it above a warm (not burning) source such as a lamp or a cup of hot water. Count the turns per minute at 3 heights. Explain convection currents in English and design a lantern in Vietnamese Mid-Autumn style.",
      vi: "Cắt vòng xoắn giấy, treo phía trên nguồn ấm (bóng đèn sợi đốt, cốc nước nóng — không dùng lửa). Đếm số vòng quay mỗi phút ở 3 độ cao. Giải thích dòng đối lưu bằng tiếng Anh, trang trí thành đèn kéo quân Trung thu. Tiêu chí: vòng xoắn quay liên tục ≥ 1 phút, có bảng số liệu, giải thích đúng. " + SAFE_H,
    },
    materials: "Giấy bìa mỏng, chỉ, kim, bóng đèn sợi đốt hoặc cốc nước nóng, màu vẽ.",
    vocab: [
      { en: "convection current", vi: "dòng đối lưu" },
      { en: "warm air rises", vi: "không khí nóng bốc lên" },
      { en: "spin", vi: "quay" },
    ],
  },
  {
    id: "v8-thermometer",
    grade: 8,
    curLessonId: "n8-29",
    title: { en: "A home-made liquid thermometer", vi: "Tự làm nhiệt kế chất lỏng" },
    goal: { en: "Build a thermometer that works by thermal expansion and calibrate it.", vi: "Làm nhiệt kế hoạt động nhờ sự nở vì nhiệt và chia vạch cho nó." },
    brief: {
      en: "Fill a small bottle with coloured water, seal it with modelling clay and a clear straw. Put it in cold and warm water next to a real thermometer and mark 0, 20, 40 °C. Test its accuracy and explain thermal expansion in English.",
      vi: "Đổ nước pha màu vào chai nhỏ, bịt kín bằng đất nặn và cắm ống hút trong. Đặt vào nước lạnh, nước ấm cạnh nhiệt kế thật để đánh dấu vạch 0, 20, 40 °C. Kiểm tra độ chính xác và giải thích sự nở vì nhiệt bằng tiếng Anh. Tiêu chí: cột nước dâng rõ khi nóng, sai lệch ≤ 3 °C so với nhiệt kế thật. " + SAFE_H,
    },
    materials: "Chai nhựa nhỏ, ống hút trong, đất nặn, phẩm màu, nhiệt kế, cốc nước ấm, nước đá.",
    vocab: [
      { en: "thermal expansion", vi: "sự nở vì nhiệt" },
      { en: "calibrate", vi: "chia vạch, hiệu chỉnh" },
      { en: "thermometer", vi: "nhiệt kế" },
    ],
  },
];
