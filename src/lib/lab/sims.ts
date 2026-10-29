// Thí nghiệm ảo dựng sẵn: mô phỏng PhET (Đại học Colorado, miễn phí, giấy phép CC-BY) cho Vật lí KHTN 6–9.
// Mỗi mô phỏng có nhiệm vụ song ngữ + từ vựng để HS vừa làm thí nghiệm vừa luyện tiếng Anh.
// Chạy trong iframe; giao diện mô phỏng đổi được Anh / Việt (phetUrl). Mọi slug đã kiểm tra mở được (10/2026).
import type { Bi } from "@/lib/live/types";
import { fold } from "@/lib/curriculum";
import { phetSlug } from "@/lib/library/resources";

export type LabTopic = "mech" | "elec" | "heat" | "wave" | "space";

export const LAB_TOPICS: Record<LabTopic, { vi: string; en: string; color: string; soft: string }> = {
  mech: { vi: "Lực, áp suất, chuyển động", en: "Forces, pressure and motion", color: "#2563EB", soft: "#DBEAFE" },
  elec: { vi: "Điện và từ", en: "Electricity and magnetism", color: "#4F46E5", soft: "#E0E7FF" },
  heat: { vi: "Nhiệt và năng lượng", en: "Heat and energy", color: "#EA580C", soft: "#FFEDD5" },
  wave: { vi: "Âm thanh và ánh sáng", en: "Sound and light", color: "#CA8A04", soft: "#FEF9C3" },
  space: { vi: "Trái Đất và bầu trời", en: "Earth and space", color: "#1E3A8A", soft: "#E0E7FF" },
};

export interface LabSim {
  /** Mã PhET (vd "density") — hoặc mã riêng khi dùng `url` */
  slug: string;
  /** Mô phỏng không phải PhET: link chạy trực tiếp (không đổi Anh/Việt được) */
  url?: string;
  source?: "phet" | "netlogo" | "utah";
  title: Bi;
  grades: number[];
  topic: LabTopic;
  about: Bi;
  tasks: Bi[];
  vocab: { en: string; vi: string }[];
}

export const LAB_SIMS: LabSim[] = [
  // ---------- Lực, áp suất, chuyển động ----------
  {
    slug: "density",
    title: { en: "Density", vi: "Khối lượng riêng" },
    grades: [8],
    topic: "mech",
    about: { en: "Compare blocks of different materials and find their density.", vi: "So sánh các khối làm từ chất khác nhau và tìm khối lượng riêng." },
    tasks: [
      { en: "Choose “Same Mass”. Which block has the largest volume?", vi: "Chọn “Same Mass”. Khối nào có thể tích lớn nhất?" },
      { en: "Use the water level to find the volume of the mystery block.", vi: "Dùng mực nước dâng lên để tìm thể tích khối bí ẩn." },
      { en: "Complete: “Density equals ___ divided by ___.”", vi: "Hoàn thành: “Khối lượng riêng bằng ___ chia cho ___.”" },
    ],
    vocab: [
      { en: "density", vi: "khối lượng riêng" },
      { en: "mass", vi: "khối lượng" },
      { en: "volume", vi: "thể tích" },
      { en: "material", vi: "vật liệu, chất" },
    ],
  },
  {
    slug: "under-pressure",
    title: { en: "Under Pressure", vi: "Áp suất chất lỏng" },
    grades: [8],
    topic: "mech",
    about: { en: "Measure the pressure at different depths in a liquid.", vi: "Đo áp suất ở các độ sâu khác nhau trong chất lỏng." },
    tasks: [
      { en: "Move the gauge deeper. How does the pressure change?", vi: "Kéo áp kế xuống sâu hơn. Áp suất thay đổi thế nào?" },
      { en: "Change the liquid to honey. Is the pressure at the same depth bigger or smaller?", vi: "Đổi chất lỏng sang mật ong. Áp suất ở cùng độ sâu lớn hơn hay nhỏ hơn?" },
      { en: "Turn the atmosphere off. What happens to the reading at the surface?", vi: "Tắt khí quyển (Atmosphere off). Số đo ở mặt thoáng thay đổi ra sao?" },
    ],
    vocab: [
      { en: "pressure", vi: "áp suất" },
      { en: "depth", vi: "độ sâu" },
      { en: "liquid", vi: "chất lỏng" },
      { en: "atmosphere", vi: "khí quyển" },
    ],
  },
  {
    slug: "buoyancy",
    title: { en: "Buoyancy", vi: "Lực đẩy Archimedes" },
    grades: [8],
    topic: "mech",
    about: { en: "Weigh objects in air and in water to find the upthrust.", vi: "Đo trọng lượng vật trong không khí và trong nước để tìm lực đẩy." },
    tasks: [
      { en: "Hang a block on the scale, then lower it into the water. What happens to the reading?", vi: "Treo khối lên lực kế rồi nhúng vào nước. Số chỉ lực kế thay đổi thế nào?" },
      { en: "Which blocks float? Compare their density with water.", vi: "Những khối nào nổi? So sánh khối lượng riêng của chúng với nước." },
      { en: "Say: “The upthrust equals the weight of the water ___.”", vi: "Nói: “The upthrust equals the weight of the water ___.” (bị chiếm chỗ)" },
    ],
    vocab: [
      { en: "upthrust", vi: "lực đẩy" },
      { en: "float", vi: "nổi" },
      { en: "sink", vi: "chìm" },
      { en: "displaced", vi: "bị chiếm chỗ" },
    ],
  },
  {
    slug: "balancing-act",
    title: { en: "Balancing Act", vi: "Cân bằng thanh – đòn bẩy" },
    grades: [8],
    topic: "mech",
    about: { en: "Put masses on a plank and make it balance.", vi: "Đặt các quả nặng lên thanh và làm cho thanh cân bằng." },
    tasks: [
      { en: "Put 10 kg at 1 m on the left. Where do you put 5 kg on the right to balance?", vi: "Đặt 10 kg cách điểm tựa 1 m bên trái. Đặt 5 kg ở đâu bên phải để cân bằng?" },
      { en: "Play the Game tab and predict which side goes down.", vi: "Vào thẻ Game, dự đoán bên nào sẽ nghiêng xuống." },
      { en: "Explain using “moment = force × distance”.", vi: "Giải thích bằng “moment = lực × khoảng cách”." },
    ],
    vocab: [
      { en: "balance", vi: "cân bằng" },
      { en: "pivot", vi: "điểm tựa" },
      { en: "moment", vi: "moment lực" },
      { en: "distance", vi: "khoảng cách" },
    ],
  },
  {
    slug: "forces-and-motion-basics",
    title: { en: "Forces and Motion: Basics", vi: "Lực và chuyển động" },
    grades: [6, 8],
    topic: "mech",
    about: { en: "Push, pull and see how forces change motion.", vi: "Đẩy, kéo và quan sát lực làm thay đổi chuyển động." },
    tasks: [
      { en: "In “Net Force”, put two people on each side. When does the cart not move?", vi: "Ở “Net Force”, đặt mỗi bên hai người. Khi nào xe không chuyển động?" },
      { en: "In “Friction”, change the friction. What happens to the speed?", vi: "Ở “Friction”, thay đổi ma sát. Tốc độ thay đổi thế nào?" },
      { en: "Draw the force arrows in your notebook.", vi: "Vẽ các mũi tên lực vào vở." },
    ],
    vocab: [
      { en: "push", vi: "đẩy" },
      { en: "pull", vi: "kéo" },
      { en: "force", vi: "lực" },
      { en: "friction", vi: "ma sát" },
    ],
  },
  {
    slug: "friction",
    title: { en: "Friction", vi: "Lực ma sát" },
    grades: [6],
    topic: "mech",
    about: { en: "Rub two surfaces and watch the particles heat up.", vi: "Cọ xát hai bề mặt, quan sát các hạt nóng lên." },
    tasks: [
      { en: "Drag the book. What happens to the temperature?", vi: "Kéo quyển sách. Nhiệt độ thay đổi thế nào?" },
      { en: "Name one way friction is useful and one way it is a problem.", vi: "Nêu một lợi ích và một tác hại của ma sát." },
    ],
    vocab: [
      { en: "friction", vi: "ma sát" },
      { en: "surface", vi: "bề mặt" },
      { en: "rub", vi: "cọ xát" },
    ],
  },
  {
    slug: "hookes-law",
    title: { en: "Hooke's Law", vi: "Biến dạng của lò xo" },
    grades: [6],
    topic: "mech",
    about: { en: "Pull a spring and measure how far it stretches.", vi: "Kéo lò xo và đo độ giãn." },
    tasks: [
      { en: "Double the force. What happens to the extension?", vi: "Tăng lực gấp đôi. Độ giãn thay đổi thế nào?" },
      { en: "Fill a table: force – extension.", vi: "Lập bảng: lực – độ giãn." },
    ],
    vocab: [
      { en: "spring", vi: "lò xo" },
      { en: "stretch", vi: "giãn ra" },
      { en: "extension", vi: "độ giãn" },
    ],
  },
  {
    slug: "gravity-force-lab-basics",
    title: { en: "Gravity Force Lab: Basics", vi: "Lực hấp dẫn" },
    grades: [6],
    topic: "mech",
    about: { en: "See how mass and distance change the pull of gravity.", vi: "Quan sát khối lượng và khoảng cách ảnh hưởng tới lực hấp dẫn." },
    tasks: [
      { en: "Make one mass bigger. Does the force get bigger or smaller?", vi: "Tăng một khối lượng. Lực lớn lên hay nhỏ đi?" },
      { en: "Move the masses apart. What happens?", vi: "Kéo hai vật ra xa nhau. Điều gì xảy ra?" },
    ],
    vocab: [
      { en: "gravity", vi: "lực hấp dẫn" },
      { en: "mass", vi: "khối lượng" },
      { en: "attract", vi: "hút" },
    ],
  },
  {
    slug: "projectile-motion",
    title: { en: "Projectile Motion", vi: "Tốc độ và chuyển động ném" },
    grades: [7],
    topic: "mech",
    about: { en: "Fire objects and measure distance and time.", vi: "Bắn vật đi, đo quãng đường và thời gian." },
    tasks: [
      { en: "Use the tape and the timer. Calculate the average speed v = s/t.", vi: "Dùng thước và đồng hồ đo. Tính tốc độ trung bình v = s/t." },
      { en: "Change the initial speed. How does the distance change?", vi: "Đổi tốc độ ban đầu. Quãng đường thay đổi thế nào?" },
    ],
    vocab: [
      { en: "speed", vi: "tốc độ" },
      { en: "distance", vi: "quãng đường" },
      { en: "time", vi: "thời gian" },
    ],
  },

  // ---------- Điện và từ ----------
  {
    slug: "balloons-and-static-electricity",
    title: { en: "Balloons and Static Electricity", vi: "Nhiễm điện do cọ xát" },
    grades: [8],
    topic: "elec",
    about: { en: "Rub a balloon on a jumper and watch the charges move.", vi: "Cọ bóng bay vào áo len, quan sát điện tích dịch chuyển." },
    tasks: [
      { en: "Rub the balloon on the jumper. Which charges move to the balloon?", vi: "Cọ bóng vào áo len. Loại điện tích nào chuyển sang bóng?" },
      { en: "Bring the balloon near the wall. Why does it stick?", vi: "Đưa bóng lại gần tường. Vì sao bóng dính vào tường?" },
      { en: "Say: “Like charges ___ and unlike charges ___.”", vi: "Nói: “Like charges ___ and unlike charges ___.”" },
    ],
    vocab: [
      { en: "charge", vi: "điện tích" },
      { en: "rub", vi: "cọ xát" },
      { en: "attract", vi: "hút" },
      { en: "repel", vi: "đẩy" },
    ],
  },
  {
    slug: "john-travoltage",
    title: { en: "John Travoltage", vi: "Tia lửa điện" },
    grades: [8],
    topic: "elec",
    about: { en: "Rub a foot on the carpet and touch the door handle.", vi: "Chà chân lên thảm rồi chạm tay nắm cửa." },
    tasks: [
      { en: "Rub the foot. Where do the electrons collect?", vi: "Chà chân. Electron tập trung ở đâu?" },
      { en: "Move the hand to the handle. What happens to the electrons?", vi: "Đưa tay lại tay nắm cửa. Electron đi đâu?" },
    ],
    vocab: [
      { en: "electron", vi: "electron" },
      { en: "spark", vi: "tia lửa điện" },
      { en: "discharge", vi: "phóng điện" },
    ],
  },
  {
    slug: "circuit-construction-kit-dc",
    title: { en: "Circuit Construction Kit: DC", vi: "Lắp mạch điện một chiều" },
    grades: [8, 9],
    topic: "elec",
    about: { en: "Build circuits with batteries, bulbs, switches and meters.", vi: "Lắp mạch với pin, bóng đèn, công tắc và dụng cụ đo." },
    tasks: [
      { en: "Build a circuit with one battery and one bulb. Does it light?", vi: "Lắp mạch gồm 1 pin, 1 bóng đèn. Đèn có sáng không?" },
      { en: "Add a switch and open it. What happens?", vi: "Thêm công tắc và mở công tắc. Điều gì xảy ra?" },
      { en: "Test a coin, a pencil and an eraser: conductor or insulator?", vi: "Thử đồng xu, bút chì, cục tẩy: vật dẫn hay vật cách điện?" },
    ],
    vocab: [
      { en: "circuit", vi: "mạch điện" },
      { en: "battery", vi: "pin" },
      { en: "switch", vi: "công tắc" },
      { en: "conductor", vi: "vật dẫn điện" },
    ],
  },
  {
    slug: "circuit-construction-kit-dc-virtual-lab",
    title: { en: "Circuit Construction Kit: DC – Virtual Lab", vi: "Thực hành đo I và U" },
    grades: [8, 9],
    topic: "elec",
    about: { en: "Measure current and voltage with an ammeter and a voltmeter.", vi: "Đo cường độ dòng điện và hiệu điện thế bằng ampe kế, vôn kế." },
    tasks: [
      { en: "Connect the ammeter in series. Write down the reading.", vi: "Mắc ampe kế nối tiếp. Ghi số chỉ." },
      { en: "Connect the voltmeter across the bulb. Write down the voltage.", vi: "Mắc vôn kế song song với bóng đèn. Ghi hiệu điện thế." },
      { en: "Add a second battery. How do the readings change?", vi: "Thêm một pin. Số chỉ thay đổi thế nào?" },
    ],
    vocab: [
      { en: "ammeter", vi: "ampe kế" },
      { en: "voltmeter", vi: "vôn kế" },
      { en: "current", vi: "cường độ dòng điện" },
      { en: "voltage", vi: "hiệu điện thế" },
    ],
  },
  {
    slug: "ohms-law",
    title: { en: "Ohm's Law", vi: "Định luật Ohm" },
    grades: [9],
    topic: "elec",
    about: { en: "Change voltage and resistance and watch the current.", vi: "Thay đổi hiệu điện thế, điện trở và quan sát dòng điện." },
    tasks: [
      { en: "Increase the voltage. What happens to the current?", vi: "Tăng hiệu điện thế. Dòng điện thay đổi thế nào?" },
      { en: "Check I = U/R with three pairs of values.", vi: "Kiểm tra I = U/R với ba cặp giá trị." },
    ],
    vocab: [
      { en: "resistance", vi: "điện trở" },
      { en: "current", vi: "dòng điện" },
      { en: "voltage", vi: "hiệu điện thế" },
    ],
  },
  {
    slug: "resistance-in-a-wire",
    title: { en: "Resistance in a Wire", vi: "Điện trở của dây dẫn" },
    grades: [9],
    topic: "elec",
    about: { en: "See how length, area and material change resistance.", vi: "Quan sát chiều dài, tiết diện, vật liệu ảnh hưởng tới điện trở." },
    tasks: [
      { en: "Make the wire longer. What happens to R?", vi: "Tăng chiều dài dây. R thay đổi thế nào?" },
      { en: "Make the wire thicker. What happens to R?", vi: "Tăng tiết diện dây. R thay đổi thế nào?" },
    ],
    vocab: [
      { en: "length", vi: "chiều dài" },
      { en: "cross-section", vi: "tiết diện" },
      { en: "resistivity", vi: "điện trở suất" },
    ],
  },
  {
    slug: "magnet-and-compass",
    title: { en: "Magnet and Compass", vi: "Nam châm và la bàn" },
    grades: [7],
    topic: "elec",
    about: { en: "Move a compass around a magnet and see the field.", vi: "Di chuyển la bàn quanh nam châm và quan sát từ trường." },
    tasks: [
      { en: "Move the compass around the magnet. Which way does the needle point?", vi: "Di chuyển la bàn quanh nam châm. Kim chỉ hướng nào?" },
      { en: "Flip the magnet. What happens to the compass?", vi: "Lật nam châm. La bàn thay đổi thế nào?" },
    ],
    vocab: [
      { en: "magnet", vi: "nam châm" },
      { en: "compass", vi: "la bàn" },
      { en: "magnetic field", vi: "từ trường" },
      { en: "north pole", vi: "cực Bắc" },
    ],
  },
  {
    slug: "faradays-electromagnetic-lab",
    title: { en: "Faraday's Electromagnetic Lab", vi: "Nam châm điện" },
    grades: [7, 8, 9],
    topic: "elec",
    about: { en: "Make an electromagnet and change its strength.", vi: "Tạo nam châm điện và thay đổi độ mạnh của nó." },
    tasks: [
      { en: "Open the Electromagnet tab. Add more loops. What happens to the field?", vi: "Mở thẻ Electromagnet. Thêm vòng dây. Từ trường thay đổi thế nào?" },
      { en: "Reverse the battery. What happens to the compass?", vi: "Đảo chiều pin. La bàn thay đổi thế nào?" },
    ],
    vocab: [
      { en: "electromagnet", vi: "nam châm điện" },
      { en: "coil", vi: "cuộn dây" },
      { en: "loop", vi: "vòng dây" },
    ],
  },
  {
    slug: "faradays-law",
    title: { en: "Faraday's Law", vi: "Cảm ứng điện từ" },
    grades: [9],
    topic: "elec",
    about: { en: "Move a magnet through a coil and light a bulb.", vi: "Đưa nam châm qua cuộn dây để đèn sáng." },
    tasks: [
      { en: "Move the magnet quickly and slowly. When is the bulb brighter?", vi: "Di chuyển nam châm nhanh và chậm. Khi nào đèn sáng hơn?" },
      { en: "Hold the magnet still inside the coil. Is there a current?", vi: "Giữ nam châm đứng yên trong cuộn dây. Có dòng điện không?" },
    ],
    vocab: [
      { en: "induction", vi: "cảm ứng" },
      { en: "coil", vi: "cuộn dây" },
      { en: "induced current", vi: "dòng điện cảm ứng" },
    ],
  },
  {
    slug: "generator",
    title: { en: "Generator", vi: "Máy phát điện" },
    grades: [9],
    topic: "elec",
    about: { en: "Use flowing water to turn a magnet and make electricity.", vi: "Dùng dòng nước quay nam châm để tạo ra điện." },
    tasks: [
      { en: "Turn on the water. What makes the bulb light?", vi: "Mở vòi nước. Điều gì làm đèn sáng?" },
      { en: "Describe the energy changes from water to light.", vi: "Mô tả sự chuyển hoá năng lượng từ dòng nước tới ánh sáng." },
    ],
    vocab: [
      { en: "generator", vi: "máy phát điện" },
      { en: "alternating current", vi: "dòng điện xoay chiều" },
    ],
  },

  // ---------- Nhiệt và năng lượng ----------
  {
    slug: "energy-forms-and-changes",
    title: { en: "Energy Forms and Changes", vi: "Các dạng năng lượng và truyền nhiệt" },
    grades: [6, 8],
    topic: "heat",
    about: { en: "Heat and cool objects and follow the energy.", vi: "Đun nóng, làm lạnh các vật và theo dõi năng lượng." },
    tasks: [
      { en: "Put an iron block on the heater. Turn on “Energy Symbols”. Where does the energy go?", vi: "Đặt khối sắt lên bếp. Bật “Energy Symbols”. Năng lượng đi đâu?" },
      { en: "Put a hot block into cold water. Which way does heat flow?", vi: "Thả khối nóng vào nước lạnh. Nhiệt truyền theo chiều nào?" },
      { en: "In “Systems”, build a chain: sun → solar panel → light bulb.", vi: "Ở “Systems”, lắp chuỗi: Mặt Trời → pin mặt trời → bóng đèn." },
    ],
    vocab: [
      { en: "thermal energy", vi: "năng lượng nhiệt" },
      { en: "heat transfer", vi: "sự truyền nhiệt" },
      { en: "energy conversion", vi: "sự chuyển hoá năng lượng" },
    ],
  },
  {
    slug: "states-of-matter",
    title: { en: "States of Matter", vi: "Chuyển động phân tử – sự nở vì nhiệt" },
    grades: [8],
    topic: "heat",
    about: { en: "Heat solids, liquids and gases and watch the particles.", vi: "Đun nóng chất rắn, lỏng, khí và quan sát các hạt." },
    tasks: [
      { en: "Heat the solid. How do the particles move?", vi: "Đun nóng chất rắn. Các hạt chuyển động thế nào?" },
      { en: "Why does a heated gas take up more space?", vi: "Vì sao khí bị đun nóng chiếm nhiều chỗ hơn?" },
    ],
    vocab: [
      { en: "particle", vi: "hạt, phân tử" },
      { en: "solid", vi: "chất rắn" },
      { en: "liquid", vi: "chất lỏng" },
      { en: "gas", vi: "chất khí" },
    ],
  },
  {
    slug: "gas-properties",
    title: { en: "Gas Properties", vi: "Áp suất và nhiệt độ chất khí" },
    grades: [8],
    topic: "heat",
    about: { en: "Pump gas into a box and change its temperature.", vi: "Bơm khí vào hộp và thay đổi nhiệt độ." },
    tasks: [
      { en: "Heat the gas. What happens to the pressure?", vi: "Đun nóng khí. Áp suất thay đổi thế nào?" },
      { en: "Keep the pressure constant and heat the gas. What happens to the volume?", vi: "Giữ áp suất không đổi rồi đun nóng. Thể tích thay đổi thế nào?" },
    ],
    vocab: [
      { en: "gas", vi: "chất khí" },
      { en: "pressure", vi: "áp suất" },
      { en: "expand", vi: "nở ra" },
    ],
  },
  {
    slug: "energy-skate-park-basics",
    title: { en: "Energy Skate Park: Basics", vi: "Động năng – thế năng" },
    grades: [6, 9],
    topic: "heat",
    about: { en: "Watch a skater change kinetic and potential energy.", vi: "Quan sát người trượt ván chuyển hoá động năng và thế năng." },
    tasks: [
      { en: "Turn on the bar graph. Where is the kinetic energy largest?", vi: "Bật biểu đồ cột. Ở đâu động năng lớn nhất?" },
      { en: "Add friction. What happens to the total mechanical energy?", vi: "Thêm ma sát. Cơ năng thay đổi thế nào?" },
    ],
    vocab: [
      { en: "kinetic energy", vi: "động năng" },
      { en: "potential energy", vi: "thế năng" },
      { en: "mechanical energy", vi: "cơ năng" },
    ],
  },
  {
    slug: "greenhouse-effect",
    title: { en: "The Greenhouse Effect", vi: "Hiệu ứng nhà kính" },
    grades: [9],
    topic: "heat",
    about: { en: "See how greenhouse gases trap heat radiation.", vi: "Quan sát khí nhà kính giữ lại bức xạ nhiệt." },
    tasks: [
      { en: "Add more greenhouse gases. What happens to the temperature?", vi: "Tăng khí nhà kính. Nhiệt độ thay đổi thế nào?" },
      { en: "Suggest one way to use less fossil fuel.", vi: "Đề xuất một cách dùng ít nhiên liệu hoá thạch hơn." },
    ],
    vocab: [
      { en: "radiation", vi: "bức xạ" },
      { en: "greenhouse gas", vi: "khí nhà kính" },
      { en: "fossil fuel", vi: "nhiên liệu hoá thạch" },
    ],
  },

  // ---------- Âm thanh và ánh sáng ----------
  {
    slug: "sound-waves",
    title: { en: "Sound Waves", vi: "Sóng âm" },
    grades: [7],
    topic: "wave",
    about: { en: "Change frequency and amplitude and listen to the sound.", vi: "Thay đổi tần số, biên độ và nghe âm thanh." },
    tasks: [
      { en: "Increase the frequency. Is the sound higher or lower?", vi: "Tăng tần số. Âm cao hơn hay thấp hơn?" },
      { en: "Increase the amplitude. Is the sound louder or softer?", vi: "Tăng biên độ. Âm to hơn hay nhỏ hơn?" },
    ],
    vocab: [
      { en: "frequency", vi: "tần số" },
      { en: "amplitude", vi: "biên độ" },
      { en: "pitch", vi: "độ cao của âm" },
      { en: "loudness", vi: "độ to của âm" },
    ],
  },
  {
    slug: "waves-intro",
    title: { en: "Waves Intro", vi: "Sóng – nước, âm, ánh sáng" },
    grades: [7],
    topic: "wave",
    about: { en: "Make water, sound and light waves.", vi: "Tạo sóng nước, sóng âm và sóng ánh sáng." },
    tasks: [
      { en: "In “Sound”, turn on the particles. How does the air move?", vi: "Ở “Sound”, bật hiển thị hạt. Không khí dao động thế nào?" },
      { en: "In “Water”, increase the frequency. What happens to the distance between the waves?", vi: "Ở “Water”, tăng tần số. Khoảng cách giữa các gợn sóng thay đổi thế nào?" },
    ],
    vocab: [
      { en: "wave", vi: "sóng" },
      { en: "vibrate", vi: "dao động" },
    ],
  },
  {
    slug: "bending-light",
    title: { en: "Bending Light", vi: "Khúc xạ ánh sáng" },
    grades: [9],
    topic: "wave",
    about: { en: "Shine a laser from air into water and glass.", vi: "Chiếu tia laser từ không khí vào nước, thuỷ tinh." },
    tasks: [
      { en: "Shine the laser into water. Does the ray bend towards or away from the normal?", vi: "Chiếu laser vào nước. Tia sáng lệch lại gần hay ra xa pháp tuyến?" },
      { en: "Find an angle where total internal reflection happens.", vi: "Tìm góc tới để xảy ra phản xạ toàn phần." },
    ],
    vocab: [
      { en: "refraction", vi: "khúc xạ" },
      { en: "normal", vi: "pháp tuyến" },
      { en: "angle of incidence", vi: "góc tới" },
    ],
  },
  {
    slug: "geometric-optics-basics",
    title: { en: "Geometric Optics: Basics", vi: "Thấu kính và gương" },
    grades: [7, 9],
    topic: "wave",
    about: { en: "See images made by lenses and mirrors.", vi: "Quan sát ảnh tạo bởi thấu kính và gương." },
    tasks: [
      { en: "Move the object closer to the lens. What happens to the image?", vi: "Đưa vật lại gần thấu kính. Ảnh thay đổi thế nào?" },
      { en: "Switch to the mirror. Is the image the same size as the object?", vi: "Chuyển sang gương. Ảnh có bằng vật không?" },
    ],
    vocab: [
      { en: "lens", vi: "thấu kính" },
      { en: "mirror", vi: "gương" },
      { en: "image", vi: "ảnh" },
      { en: "focal point", vi: "tiêu điểm" },
    ],
  },
  {
    slug: "color-vision",
    title: { en: "Color Vision", vi: "Ánh sáng màu" },
    grades: [7, 9],
    topic: "wave",
    about: { en: "Mix red, green and blue light.", vi: "Trộn ánh sáng đỏ, lục, lam." },
    tasks: [
      { en: "Mix red and green light. What colour do you see?", vi: "Trộn ánh sáng đỏ và lục. Em thấy màu gì?" },
      { en: "Use a filter. Which colours pass through?", vi: "Dùng kính lọc. Màu nào đi qua được?" },
    ],
    vocab: [
      { en: "colour", vi: "màu sắc" },
      { en: "filter", vi: "kính lọc màu" },
      { en: "white light", vi: "ánh sáng trắng" },
    ],
  },

  // ---------- Trái Đất và bầu trời ----------
  {
    slug: "gravity-and-orbits",
    title: { en: "Gravity and Orbits", vi: "Lực hấp dẫn và quỹ đạo" },
    grades: [6],
    topic: "space",
    about: { en: "Watch the Earth go around the Sun and the Moon around the Earth.", vi: "Quan sát Trái Đất quay quanh Mặt Trời, Mặt Trăng quay quanh Trái Đất." },
    tasks: [
      { en: "Turn gravity off. What happens to the Earth?", vi: "Tắt lực hấp dẫn. Trái Đất chuyển động thế nào?" },
      { en: "Choose Earth and Moon. How long is one orbit?", vi: "Chọn Trái Đất – Mặt Trăng. Một vòng quay mất bao lâu?" },
    ],
    vocab: [
      { en: "orbit", vi: "quỹ đạo" },
      { en: "gravity", vi: "lực hấp dẫn" },
      { en: "planet", vi: "hành tinh" },
    ],
  },
  {
    slug: "my-solar-system",
    title: { en: "My Solar System", vi: "Hệ Mặt Trời của em" },
    grades: [6],
    topic: "space",
    about: { en: "Build a solar system and watch the planets move.", vi: "Tạo hệ hành tinh và quan sát các hành tinh chuyển động." },
    tasks: [
      { en: "Make a planet further from the star. Does it move faster or slower?", vi: "Đặt hành tinh xa ngôi sao hơn. Nó chuyển động nhanh hơn hay chậm hơn?" },
      { en: "Turn on “Path”. What shape is the orbit?", vi: "Bật “Path”. Quỹ đạo có hình gì?" },
    ],
    vocab: [
      { en: "star", vi: "ngôi sao" },
      { en: "solar system", vi: "hệ Mặt Trời" },
    ],
  },
];

/** Link chạy một mô phỏng: PhET theo ngôn ngữ chọn; nguồn khác chạy đúng link */
export const simLaunchUrl = (s: LabSim, locale: "en" | "vi" = "en") => s.url ?? `https://phet.colorado.edu/sims/html/${s.slug}/latest/${s.slug}_all.html?locale=${locale}`;

/** Học liệu (link) trùng với một mô phỏng dựng sẵn → không hiện lặp trong Phòng thí nghiệm ảo */
export const isBuiltInSim = (url: string) => {
  const slug = phetSlug(url);
  return LAB_SIMS.some((s) => (slug && !s.url && s.slug === slug) || (s.url && s.url === url));
};

/** Ghi công nguồn hiển thị */
export const SIM_SOURCE: Record<NonNullable<LabSim["source"]>, string> = {
  phet: "PhET – ĐH Colorado",
  netlogo: "NetLogo Web – ĐH Northwestern",
  utah: "Learn.Genetics – ĐH Utah",
};

/** Lọc theo khối, chủ đề và từ khoá (tiếng Việt/Anh, có dấu hay không) */
export function searchSims(opts: { grade?: number | null; topic?: LabTopic | ""; q?: string }): LabSim[] {
  const q = fold(opts.q?.trim() ?? "");
  return LAB_SIMS.filter(
    (s) =>
      (!opts.grade || s.grades.includes(opts.grade)) &&
      (!opts.topic || s.topic === opts.topic) &&
      (!q || fold([s.title.en, s.title.vi, s.about.en, s.about.vi, ...s.vocab.flatMap((v) => [v.en, v.vi])].join(" ")).includes(q))
  );
}
