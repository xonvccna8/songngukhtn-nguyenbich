// CÁCH ĐỌC KÍ HIỆU, CÔNG THỨC, ĐƠN VỊ VẬT LÍ (KHTN 6–9) bằng tiếng Anh (có nút nghe).
// "say" = câu máy đọc mẫu; ghi chú "note" chỉ ra chỗ dễ nhầm hoặc khác nhau giữa cách viết Việt Nam và quốc tế.
export type SymbolTopic = "formulas" | "quantities" | "units" | "circuit";

export const SYMBOL_TOPICS: Record<SymbolTopic, { vi: string; en: string }> = {
  formulas: { vi: "Công thức", en: "Formulas" },
  quantities: { vi: "Kí hiệu đại lượng", en: "Symbols for quantities" },
  units: { vi: "Đơn vị đo", en: "Units of measurement" },
  circuit: { vi: "Điện và mạch điện", en: "Electricity and circuits" },
};

export interface SciSymbol {
  id: string;
  topic: SymbolTopic;
  /** Cách viết */
  sym: string;
  /** Đọc bằng tiếng Anh (cũng là câu máy đọc) */
  en: string;
  /** Đọc bằng tiếng Việt */
  vi: string;
  /** Lớp học lần đầu */
  grade: number;
  note?: string;
}

type Row = [sym: string, en: string, vi: string, grade: number, note?: string];

const RAW: Record<SymbolTopic, Row[]> = {
  formulas: [
    ["v = s / t", "v equals s over t; speed equals distance divided by time", "tốc độ bằng quãng đường chia thời gian", 7],
    ["D = m / V", "D equals m over V; density equals mass divided by volume", "khối lượng riêng bằng khối lượng chia thể tích", 8],
    ["P = 10·m", "P equals ten m; weight equals ten times mass", "trọng lượng bằng 10 lần khối lượng", 8, "Lấy g ≈ 10 N/kg; quốc tế thường viết W = m·g"],
    ["d = 10·D", "d equals ten D; specific weight equals ten times density", "trọng lượng riêng bằng 10 lần khối lượng riêng", 8],
    ["p = F / S", "p equals F over S; pressure equals force divided by area", "áp suất bằng áp lực chia diện tích bị ép", 8, "Quốc tế viết p = F / A (A = area)"],
    ["p = d·h", "p equals d times h; liquid pressure equals specific weight times depth", "áp suất chất lỏng bằng trọng lượng riêng nhân độ sâu", 8],
    ["FA = d·V", "F A equals d times V; the upthrust equals specific weight times volume", "lực đẩy Archimedes bằng trọng lượng riêng nhân thể tích chiếm chỗ", 8],
    ["M = F·d", "M equals F times d; the moment equals force times distance", "moment lực bằng lực nhân cánh tay đòn", 8],
    ["F₁·d₁ = F₂·d₂", "F one d one equals F two d two", "điều kiện cân bằng của đòn bẩy", 8],
    ["I = U / R", "I equals U over R; current equals voltage divided by resistance", "cường độ dòng điện bằng hiệu điện thế chia điện trở", 9, "Định luật Ohm; quốc tế viết V = I·R"],
    ["P = U·I", "P equals U times I; power equals voltage times current", "công suất điện bằng hiệu điện thế nhân cường độ dòng điện", 9],
    ["Wđ = ½·m·v²", "kinetic energy equals one half m v squared", "động năng bằng một nửa m nhân v bình phương", 9, "Quốc tế viết KE hoặc Eₖ"],
  ],
  quantities: [
    ["m", "m; mass", "khối lượng", 6],
    ["V", "V; volume", "thể tích", 8],
    ["D", "D; density", "khối lượng riêng", 8, "Quốc tế thường dùng chữ Hi Lạp ρ (rho)"],
    ["F", "F; force", "lực", 6],
    ["S", "S; area", "diện tích", 8],
    ["p", "p; pressure", "áp suất", 8],
    ["h", "h; height or depth", "độ cao, độ sâu", 8],
    ["t", "t; time", "thời gian", 7],
    ["s", "s; distance", "quãng đường", 7],
    ["I", "I; current", "cường độ dòng điện", 8],
    ["U", "U; voltage", "hiệu điện thế", 8, "Quốc tế thường kí hiệu V"],
    ["t (°C)", "t; temperature", "nhiệt độ", 6],
  ],
  units: [
    ["kg/m³", "kilograms per cubic metre", "ki-lô-gam trên mét khối", 8],
    ["g/cm³", "grams per cubic centimetre", "gam trên xen-ti-mét khối", 8, "1 g/cm³ = 1000 kg/m³"],
    ["N", "newton", "niu-tơn", 6],
    ["N/m³", "newtons per cubic metre", "niu-tơn trên mét khối", 8],
    ["Pa", "pascal", "pa-xcan", 8, "1 Pa = 1 N/m²"],
    ["N·m", "newton metre", "niu-tơn mét", 8],
    ["m/s", "metres per second", "mét trên giây", 7],
    ["km/h", "kilometres per hour", "ki-lô-mét trên giờ", 7],
    ["J", "joule", "jun", 6],
    ["W", "watt", "oát", 9],
    ["°C", "degrees Celsius", "độ C", 6],
    ["K", "kelvin", "ken-vin", 6],
    ["m³", "cubic metre", "mét khối", 6],
    ["ml", "millilitre", "mi-li-lít", 6, "1 ml = 1 cm³"],
  ],
  circuit: [
    ["A", "ampere", "ampe", 8],
    ["mA", "milliampere", "mi-li-ampe", 8, "1 A = 1000 mA"],
    ["V", "volt", "vôn", 8],
    ["kV", "kilovolt", "ki-lô-vôn", 8],
    ["Ω", "ohm", "ôm", 9],
    ["(+) / (−)", "positive terminal, negative terminal", "cực dương, cực âm", 8],
    ["(A)", "ammeter", "ampe kế", 8, "Kí hiệu trong sơ đồ: vòng tròn có chữ A"],
    ["(V)", "voltmeter", "vôn kế", 8, "Kí hiệu trong sơ đồ: vòng tròn có chữ V"],
    ["LED", "L E D; light-emitting diode", "đi ốt phát quang", 8],
    ["DC / AC", "direct current, alternating current", "dòng điện một chiều, dòng điện xoay chiều", 9],
  ],
};

export const SYMBOLS: SciSymbol[] = (Object.keys(RAW) as SymbolTopic[]).flatMap((topic) =>
  RAW[topic].map(([sym, en, vi, grade, note], i) => ({ id: `${topic}-${i + 1}`, topic, sym, en, vi, grade, ...(note ? { note } : {}) }))
);

/** Câu máy đọc: phần trước dấu ";" (cách đọc chính) */
export const sayOf = (s: SciSymbol) => s.en.split(";")[0].trim();
