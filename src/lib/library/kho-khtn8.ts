// Kho học liệu Vật lí – KHTN 8 (Kết nối tri thức) · Chương III–VI (Bài 13–29).
// Chỉ gồm link từ nguồn uy tín, kiểm tra được bằng: npx tsx scripts/check-kho-links.mts
//   PhET (ĐH Colorado — thí nghiệm ảo, có giao diện tiếng Việt) · Simple English Wikipedia (bài đọc tiếng Anh dễ) · Hành trang số (NXB Giáo dục VN).
// Nạp vào Firestore bằng: npm run seed:kho  (scripts/seed-kho.mts — id cố định, chạy lại không bị trùng; --remove để gỡ).
// Thuật ngữ: tiếng Anh + IPA (Anh – Anh, giống tiết mẫu) + nghĩa theo SGK; gắn curLessonIds để hiện ở "Xem trước bài" và trình soạn bài.
import type { Bi } from "@/lib/live/types";
import type { ResourceKind } from "@/lib/library/resources";

export const KHO_SEED = "kho-vatli8-v1";

export interface KhoResource {
  kind: ResourceKind;
  url: string;
  title: Bi;
  /** Nguồn + gợi ý dùng trên lớp */
  note: string;
}

export interface KhoTerm {
  en: string;
  ipa: string;
  vi: string;
}

export interface KhoLesson {
  /** Mã bài trong khung chương trình (src/lib/curriculum) */
  curLessonId: string;
  resources: KhoResource[];
  terms: KhoTerm[];
}

/** Thí nghiệm ảo PhET */
const phet = (slug: string, vi: string, en: string, note: string): KhoResource => ({
  kind: "simulation",
  url: `https://phet.colorado.edu/en/simulations/${slug}`,
  title: { vi: `Thí nghiệm ảo: ${vi}`, en: `${en} (PhET)` },
  note: `Nguồn: PhET, ĐH Colorado — có giao diện tiếng Việt. ${note}`.trim(),
});
/** Bài đọc tiếng Anh dễ (Simple English Wikipedia) */
const read = (page: string, vi: string, en: string, note = ""): KhoResource => ({
  kind: "web",
  url: `https://simple.wikipedia.org/wiki/${page}`,
  title: { vi: `Bài đọc tiếng Anh: ${vi}`, en },
  note: `Nguồn: Simple English Wikipedia — tiếng Anh đơn giản (mức E2–E3). Giao mỗi tổ đọc 1 đoạn, tìm 3 thuật ngữ.${note ? ` ${note}` : ""}`,
});

/** Dùng chung cả khối (không gắn bài) */
export const KHO_COMMON: KhoResource[] = [
  {
    kind: "web",
    url: "https://hanhtrangso.nxbgd.vn/",
    title: { vi: "Sách điện tử KHTN 8 – Kết nối tri thức (Hành trang số)", en: "Natural Science 8 e-textbook (Hanh trang so)" },
    note: "Nguồn chính thức: NXB Giáo dục Việt Nam. Đăng nhập, nhập mã trên tem sách để mở SGK + học liệu điện tử của bộ Kết nối tri thức.",
  },
  {
    kind: "web",
    url: "https://phet.colorado.edu/vi/",
    title: { vi: "Kho thí nghiệm ảo PhET (tiếng Việt)", en: "PhET Interactive Simulations" },
    note: "Nguồn: PhET, ĐH Colorado — miễn phí, chạy trên trình duyệt điện thoại. Lọc theo môn Vật lí.",
  },
];

export const KHO_KHTN8: KhoLesson[] = [
  // ===================== CHƯƠNG III. KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT =====================
  {
    curLessonId: "n8-13",
    resources: [
      phet("density", "Khối lượng riêng – vật nổi, vật chìm", "Density", "Chọn khối gỗ, nhôm, sắt cùng khối lượng — so sánh thể tích."),
      read("Density", "Khối lượng riêng", "Density"),
    ],
    terms: [
      { en: "density", ipa: "/ˈdensəti/", vi: "khối lượng riêng" },
      { en: "mass", ipa: "/mæs/", vi: "khối lượng" },
      { en: "volume", ipa: "/ˈvɒljuːm/", vi: "thể tích" },
      { en: "substance", ipa: "/ˈsʌbstəns/", vi: "chất" },
      { en: "kilogram per cubic metre", ipa: "/ˈkɪləɡræm pə ˈkjuːbɪk ˈmiːtə/", vi: "kilôgam trên mét khối (kg/m³)" },
      { en: "formula", ipa: "/ˈfɔːmjələ/", vi: "công thức" },
    ],
  },
  {
    curLessonId: "n8-14",
    resources: [
      phet("density", "Đo thể tích bằng nước dâng lên", "Density", "Thả vật vào bể, đọc mực nước dâng lên để tìm thể tích."),
      read("Graduated_cylinder", "Ống đong (bình chia độ)", "Graduated cylinder"),
    ],
    terms: [
      { en: "measuring cylinder", ipa: "/ˈmeʒərɪŋ ˈsɪlɪndə/", vi: "ống đong, bình chia độ" },
      { en: "balance", ipa: "/ˈbæləns/", vi: "cân" },
      { en: "irregular shape", ipa: "/ɪˈreɡjələ ʃeɪp/", vi: "hình dạng bất kì" },
      { en: "displace", ipa: "/dɪsˈpleɪs/", vi: "chiếm chỗ (làm dâng lên)" },
      { en: "average", ipa: "/ˈævərɪdʒ/", vi: "giá trị trung bình" },
      { en: "measurement", ipa: "/ˈmeʒəmənt/", vi: "phép đo" },
    ],
  },
  {
    curLessonId: "n8-15",
    resources: [
      read("Pressure", "Áp suất", "Pressure"),
      phet("forces-and-motion-basics", "Lực đẩy, lực kéo (ôn khái niệm lực)", "Forces and Motion: Basics", "Ôn lực trước khi học áp lực."),
    ],
    terms: [
      { en: "pressure", ipa: "/ˈpreʃə/", vi: "áp suất" },
      { en: "force", ipa: "/fɔːs/", vi: "lực" },
      { en: "area", ipa: "/ˈeəriə/", vi: "diện tích" },
      { en: "pascal", ipa: "/ˈpæskl/", vi: "pascal (Pa)" },
      { en: "surface", ipa: "/ˈsɜːfɪs/", vi: "bề mặt" },
      { en: "increase", ipa: "/ɪnˈkriːs/", vi: "tăng" },
      { en: "reduce", ipa: "/rɪˈdjuːs/", vi: "giảm" },
    ],
  },
  {
    curLessonId: "n8-16",
    resources: [
      phet("under-pressure", "Áp suất chất lỏng theo độ sâu", "Under Pressure", "Kéo áp kế xuống sâu dần, ghi số đo; đổi chất lỏng, đổi trọng trường."),
      phet("gas-properties", "Áp suất chất khí", "Gas Properties", "Bơm thêm hạt khí, xem áp suất thay đổi."),
      read("Atmospheric_pressure", "Áp suất khí quyển", "Atmospheric pressure"),
    ],
    terms: [
      { en: "liquid pressure", ipa: "/ˈlɪkwɪd ˈpreʃə/", vi: "áp suất chất lỏng" },
      { en: "depth", ipa: "/depθ/", vi: "độ sâu" },
      { en: "atmospheric pressure", ipa: "/ˌætməsˈferɪk ˈpreʃə/", vi: "áp suất khí quyển" },
      { en: "communicating vessels", ipa: "/kəˈmjuːnɪkeɪtɪŋ ˈveslz/", vi: "bình thông nhau" },
      { en: "hydraulic press", ipa: "/haɪˈdrɔːlɪk pres/", vi: "máy nén thuỷ lực" },
      { en: "in all directions", ipa: "/ɪn ɔːl dəˈrekʃnz/", vi: "theo mọi phương" },
    ],
  },
  {
    curLessonId: "n8-17",
    resources: [
      phet("buoyancy", "Lực đẩy Archimedes", "Buoyancy", "Dùng lực kế đo trọng lượng vật trong không khí và trong nước."),
      phet("buoyancy-basics", "Vật nổi, vật chìm (bản cơ bản)", "Buoyancy: Basics", "Phù hợp HS mức E1–E2."),
      read("Buoyancy", "Lực đẩy của chất lỏng", "Buoyancy"),
    ],
    terms: [
      { en: "upthrust", ipa: "/ˈʌpθrʌst/", vi: "lực đẩy (Archimedes)" },
      { en: "buoyancy", ipa: "/ˈbɔɪənsi/", vi: "sức nổi, lực đẩy" },
      { en: "float", ipa: "/fləʊt/", vi: "nổi" },
      { en: "sink", ipa: "/sɪŋk/", vi: "chìm" },
      { en: "weight", ipa: "/weɪt/", vi: "trọng lượng" },
      { en: "suspended", ipa: "/səˈspendɪd/", vi: "lơ lửng" },
    ],
  },

  // ===================== CHƯƠNG IV. TÁC DỤNG LÀM QUAY CỦA LỰC =====================
  {
    curLessonId: "n8-18",
    resources: [
      phet("balancing-act", "Cân bằng thanh – moment lực", "Balancing Act", "Đặt các vật ở khoảng cách khác nhau, dự đoán thanh nghiêng bên nào."),
      read("Torque", "Moment lực", "Torque (moment of force)"),
    ],
    terms: [
      { en: "moment", ipa: "/ˈməʊmənt/", vi: "moment lực" },
      { en: "turning effect", ipa: "/ˈtɜːnɪŋ ɪˈfekt/", vi: "tác dụng làm quay" },
      { en: "pivot", ipa: "/ˈpɪvət/", vi: "trục quay, điểm tựa" },
      { en: "distance", ipa: "/ˈdɪstəns/", vi: "khoảng cách" },
      { en: "rotate", ipa: "/rəʊˈteɪt/", vi: "quay" },
      { en: "newton metre", ipa: "/ˈnjuːtn ˈmiːtə/", vi: "niutơn mét (N·m)" },
    ],
  },
  {
    curLessonId: "n8-19",
    resources: [
      phet("balancing-act", "Bập bênh – đòn bẩy cân bằng", "Balancing Act", "Tìm vị trí để hai bạn khác cân nặng ngồi cân bằng."),
      read("Lever", "Đòn bẩy", "Lever"),
    ],
    terms: [
      { en: "lever", ipa: "/ˈliːvə/", vi: "đòn bẩy" },
      { en: "fulcrum", ipa: "/ˈfʊlkrəm/", vi: "điểm tựa" },
      { en: "effort", ipa: "/ˈefət/", vi: "lực tác dụng" },
      { en: "load", ipa: "/ləʊd/", vi: "lực cản (vật cần nâng)" },
      { en: "see-saw", ipa: "/ˈsiː sɔː/", vi: "bập bênh" },
      { en: "equilibrium", ipa: "/ˌiːkwɪˈlɪbriəm/", vi: "trạng thái cân bằng" },
    ],
  },

  // ===================== CHƯƠNG V. ĐIỆN =====================
  {
    curLessonId: "n8-20",
    resources: [
      phet("balloons-and-static-electricity", "Bóng bay và điện tích", "Balloons and Static Electricity", "Cọ bóng vào áo len, xem điện tích dịch chuyển."),
      phet("john-travoltage", "Chà chân lên thảm – tia lửa điện", "John Travoltage", "Giải thích vì sao bị điện giật nhẹ khi chạm tay nắm cửa."),
      read("Static_electricity", "Tĩnh điện", "Static electricity"),
    ],
    terms: [
      { en: "electric charge", ipa: "/ɪˈlektrɪk tʃɑːdʒ/", vi: "điện tích" },
      { en: "rub", ipa: "/rʌb/", vi: "cọ xát" },
      { en: "attract", ipa: "/əˈtrækt/", vi: "hút" },
      { en: "repel", ipa: "/rɪˈpel/", vi: "đẩy" },
      { en: "electron", ipa: "/ɪˈlektrɒn/", vi: "electron" },
      { en: "positive", ipa: "/ˈpɒzətɪv/", vi: "dương" },
      { en: "negative", ipa: "/ˈneɡətɪv/", vi: "âm" },
    ],
  },
  {
    curLessonId: "n8-21",
    resources: [
      phet("circuit-construction-kit-dc", "Vật dẫn điện và vật cách điện", "Circuit Construction Kit: DC", "Đặt bút chì, đồng xu, cục tẩy vào mạch — vật nào làm đèn sáng?"),
      read("Electric_current", "Dòng điện", "Electric current"),
    ],
    terms: [
      { en: "electric current", ipa: "/ɪˈlektrɪk ˈkʌrənt/", vi: "dòng điện" },
      { en: "power source", ipa: "/ˈpaʊə sɔːs/", vi: "nguồn điện" },
      { en: "battery", ipa: "/ˈbætri/", vi: "pin, acquy" },
      { en: "conductor", ipa: "/kənˈdʌktə/", vi: "vật dẫn điện" },
      { en: "insulator", ipa: "/ˈɪnsjuleɪtə/", vi: "vật cách điện" },
      { en: "terminal", ipa: "/ˈtɜːmɪnl/", vi: "cực (của nguồn)" },
    ],
  },
  {
    curLessonId: "n8-22",
    resources: [
      phet("circuit-construction-kit-dc", "Lắp mạch điện đơn giản", "Circuit Construction Kit: DC", "Lắp mạch pin – công tắc – đèn; bật chế độ sơ đồ (kí hiệu)."),
      phet("circuit-construction-kit-dc-virtual-lab", "Phòng thực hành mạch điện", "Circuit Construction Kit: DC – Virtual Lab", ""),
      read("Electrical_circuit", "Mạch điện", "Electrical circuit"),
    ],
    terms: [
      { en: "circuit", ipa: "/ˈsɜːkɪt/", vi: "mạch điện" },
      { en: "switch", ipa: "/swɪtʃ/", vi: "công tắc" },
      { en: "bulb", ipa: "/bʌlb/", vi: "bóng đèn" },
      { en: "wire", ipa: "/ˈwaɪə/", vi: "dây nối" },
      { en: "circuit diagram", ipa: "/ˈsɜːkɪt ˈdaɪəɡræm/", vi: "sơ đồ mạch điện" },
      { en: "fuse", ipa: "/fjuːz/", vi: "cầu chì" },
      { en: "diode", ipa: "/ˈdaɪəʊd/", vi: "đi ốt" },
    ],
  },
  {
    curLessonId: "n8-23",
    resources: [
      phet("faradays-electromagnetic-lab", "Nam châm điện – tác dụng từ của dòng điện", "Faraday's Electromagnetic Lab", "Mở thẻ Electromagnet, đổi số vòng dây và pin."),
      read("Electroplating", "Mạ điện (tác dụng hoá học)", "Electroplating"),
    ],
    terms: [
      { en: "heating effect", ipa: "/ˈhiːtɪŋ ɪˈfekt/", vi: "tác dụng nhiệt" },
      { en: "lighting effect", ipa: "/ˈlaɪtɪŋ ɪˈfekt/", vi: "tác dụng phát sáng" },
      { en: "magnetic effect", ipa: "/mæɡˈnetɪk ɪˈfekt/", vi: "tác dụng từ" },
      { en: "chemical effect", ipa: "/ˈkemɪkl ɪˈfekt/", vi: "tác dụng hoá học" },
      { en: "electromagnet", ipa: "/ɪˈlektrəʊˌmæɡnət/", vi: "nam châm điện" },
      { en: "electric shock", ipa: "/ɪˈlektrɪk ʃɒk/", vi: "điện giật" },
    ],
  },
  {
    curLessonId: "n8-24",
    resources: [
      phet("ohms-law", "Hiệu điện thế và cường độ dòng điện", "Ohm's Law", "Tăng hiệu điện thế, xem dòng điện thay đổi (chuẩn bị cho lớp 9)."),
      read("Voltage", "Hiệu điện thế", "Voltage"),
    ],
    terms: [
      { en: "current", ipa: "/ˈkʌrənt/", vi: "cường độ dòng điện" },
      { en: "ampere", ipa: "/ˈæmpeə/", vi: "ampe (A)" },
      { en: "voltage", ipa: "/ˈvəʊltɪdʒ/", vi: "hiệu điện thế" },
      { en: "volt", ipa: "/vəʊlt/", vi: "vôn (V)" },
      { en: "ammeter", ipa: "/ˈæmiːtə/", vi: "ampe kế" },
      { en: "voltmeter", ipa: "/ˈvəʊltmiːtə/", vi: "vôn kế" },
      { en: "in series", ipa: "/ɪn ˈsɪəriːz/", vi: "mắc nối tiếp" },
      { en: "in parallel", ipa: "/ɪn ˈpærəlel/", vi: "mắc song song" },
    ],
  },
  {
    curLessonId: "n8-25",
    resources: [
      phet("circuit-construction-kit-dc-virtual-lab", "Đo cường độ dòng điện và hiệu điện thế", "Circuit Construction Kit: DC – Virtual Lab", "Mắc ampe kế nối tiếp, vôn kế song song; ghi bảng số liệu."),
      read("Ammeter", "Ampe kế", "Ammeter"),
    ],
    terms: [
      { en: "range", ipa: "/reɪndʒ/", vi: "giới hạn đo" },
      { en: "reading", ipa: "/ˈriːdɪŋ/", vi: "số chỉ" },
      { en: "scale", ipa: "/skeɪl/", vi: "thang đo, vạch chia" },
      { en: "short circuit", ipa: "/ʃɔːt ˈsɜːkɪt/", vi: "đoản mạch" },
      { en: "data table", ipa: "/ˈdeɪtə ˈteɪbl/", vi: "bảng số liệu" },
    ],
  },

  // ===================== CHƯƠNG VI. NHIỆT =====================
  {
    curLessonId: "n8-26",
    resources: [
      phet("states-of-matter-basics", "Chuyển động của phân tử khi nóng, lạnh", "States of Matter: Basics", "Đun nóng, làm lạnh — các hạt chuyển động nhanh hay chậm?"),
      read("Internal_energy", "Nội năng", "Internal energy"),
    ],
    terms: [
      { en: "thermal energy", ipa: "/ˈθɜːml ˈenədʒi/", vi: "năng lượng nhiệt" },
      { en: "internal energy", ipa: "/ɪnˈtɜːnl ˈenədʒi/", vi: "nội năng" },
      { en: "particle", ipa: "/ˈpɑːtɪkl/", vi: "phân tử, hạt" },
      { en: "temperature", ipa: "/ˈtemprətʃə/", vi: "nhiệt độ" },
      { en: "heat", ipa: "/hiːt/", vi: "nhiệt, làm nóng" },
      { en: "work", ipa: "/wɜːk/", vi: "công (cơ học)" },
    ],
  },
  {
    curLessonId: "n8-27",
    resources: [
      phet("energy-forms-and-changes", "Đun nóng nước – năng lượng nhiệt", "Energy Forms and Changes", "Đun nước và dầu, so sánh nhiệt độ tăng."),
      read("Joule", "Đơn vị jun (J)", "Joule"),
    ],
    terms: [
      { en: "joulemeter", ipa: "/ˈdʒuːlmiːtə/", vi: "joulemeter (máy đo năng lượng)" },
      { en: "joule", ipa: "/dʒuːl/", vi: "jun (J)" },
      { en: "thermometer", ipa: "/θəˈmɒmɪtə/", vi: "nhiệt kế" },
      { en: "heater", ipa: "/ˈhiːtə/", vi: "dây đốt nóng, máy đun" },
      { en: "temperature rise", ipa: "/ˈtemprətʃə raɪz/", vi: "độ tăng nhiệt độ" },
    ],
  },
  {
    curLessonId: "n8-28",
    resources: [
      phet("energy-forms-and-changes", "Truyền nhiệt giữa các vật", "Energy Forms and Changes", "Đặt khối sắt nóng vào nước lạnh, bật hiển thị năng lượng."),
      read("Convection", "Đối lưu", "Convection"),
      read("Thermal_radiation", "Bức xạ nhiệt", "Thermal radiation"),
    ],
    terms: [
      { en: "conduction", ipa: "/kənˈdʌkʃn/", vi: "dẫn nhiệt" },
      { en: "convection", ipa: "/kənˈvekʃn/", vi: "đối lưu" },
      { en: "radiation", ipa: "/ˌreɪdiˈeɪʃn/", vi: "bức xạ nhiệt" },
      { en: "heat transfer", ipa: "/hiːt ˈtrænsfɜː/", vi: "sự truyền nhiệt" },
      { en: "absorb", ipa: "/əbˈzɔːb/", vi: "hấp thụ" },
      { en: "good conductor", ipa: "/ɡʊd kənˈdʌktə/", vi: "chất dẫn nhiệt tốt" },
    ],
  },
  {
    curLessonId: "n8-29",
    resources: [
      phet("states-of-matter", "Các thể của chất và chuyển động phân tử", "States of Matter", ""),
      phet("gas-properties", "Chất khí nở ra khi nóng lên", "Gas Properties", "Giữ áp suất không đổi, đun nóng — thể tích tăng."),
      read("Thermal_expansion", "Sự nở vì nhiệt", "Thermal expansion"),
    ],
    terms: [
      { en: "thermal expansion", ipa: "/ˈθɜːml ɪkˈspænʃn/", vi: "sự nở vì nhiệt" },
      { en: "expand", ipa: "/ɪkˈspænd/", vi: "nở ra" },
      { en: "contract", ipa: "/kənˈtrækt/", vi: "co lại" },
      { en: "bimetallic strip", ipa: "/ˌbaɪmɪˈtælɪk strɪp/", vi: "băng kép" },
      { en: "gap", ipa: "/ɡæp/", vi: "khe hở" },
      { en: "gas", ipa: "/ɡæs/", vi: "chất khí" },
    ],
  },
];

/** Mã tài liệu cố định của học liệu thứ i trong bài (chạy lại không tạo trùng) */
export const khoResourceId = (curLessonId: string, i: number) => `kho-${curLessonId}-${String(i + 1).padStart(2, "0")}`;
export const khoCommonId = (i: number) => `kho-n8-chung-${String(i + 1).padStart(2, "0")}`;
