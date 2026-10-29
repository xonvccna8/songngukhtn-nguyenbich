// Khung chương trình KHTN THCS — phần Vật lí (mạch "Năng lượng và sự biến đổi", CT GDPT 2018) theo bộ sách Kết nối tri thức
import type { Bi } from "@/lib/live/types";

/** Các chủ đề Vật lí lớp 6–9 (màu khớp với dải chủ đề ở trang chủ) */
export type Strand = "do" | "lu" | "ap" | "nl" | "as" | "am" | "dt" | "nh" | "vt";

export const STRANDS: Record<Strand, Bi & { color: string }> = {
  do: { vi: "Đo lường", en: "Measurement", color: "#0E7490" },
  lu: { vi: "Lực và chuyển động", en: "Forces and motion", color: "#2563EB" },
  ap: { vi: "Khối lượng riêng và áp suất", en: "Density and pressure", color: "#0891B2" },
  nl: { vi: "Năng lượng", en: "Energy", color: "#EA580C" },
  as: { vi: "Ánh sáng", en: "Light", color: "#CA8A04" },
  am: { vi: "Âm thanh", en: "Sound", color: "#7C3AED" },
  dt: { vi: "Điện và từ", en: "Electricity and magnetism", color: "#4F46E5" },
  nh: { vi: "Nhiệt", en: "Heat", color: "#DC2626" },
  vt: { vi: "Trái Đất và bầu trời", en: "Earth and space", color: "#1E3A8A" },
};

/** Yêu cầu cần đạt (YCCĐ) — id dạng "n8-13-1" */
export interface Outcome extends Bi {
  id: string;
}

/** Bài trong SGK — id dạng "n8-13" (n = KHTN, lớp 8, bài 13 — giữ số bài như SGK) */
export interface CurLesson extends Bi {
  id: string;
  no: number;
  grade: number;
  chapterId: string;
  outcomes: Outcome[];
}

export interface Chapter extends Bi {
  id: string;
  no: number;
  grade: number;
  strand: Strand;
  lessons: CurLesson[];
}
