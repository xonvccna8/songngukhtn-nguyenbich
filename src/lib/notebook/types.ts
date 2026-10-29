// Vở ghi bài học Vật lí – KHTN 8 (song ngữ): lý thuyết + câu tiếng Anh cần nhớ + bài tập (có đáp án cho GV).
// Nội dung tĩnh trong mã nguồn (không tốn lượt đọc Firestore); từ vựng lấy từ Ngân hàng thuật ngữ theo bài.
// Trong chữ: **từ khoá** = in đậm.
import type { Bi } from "@/lib/live/types";

export interface NoteSection {
  /** Tiêu đề mục (tiếng Việt) */
  h: string;
  /** Tiêu đề tiếng Anh */
  en: string;
  points: string[];
  /** Bảng (nếu có), vd khối lượng riêng của các chất */
  table?: { head: string[]; rows: string[][] };
}

/** Trắc nghiệm 4 lựa chọn; answer = chỉ số đáp án đúng (0 = A) */
export interface Mcq {
  q: string;
  options: [string, string, string, string];
  answer: number;
}

/** Nhận định Đúng / Sai */
export interface TrueFalse {
  q: string;
  answer: boolean;
}

/** Điền từ tiếng Anh vào chỗ trống "___" */
export interface Fill {
  q: string;
  /** Câu dịch để HS hiểu nghĩa */
  vi: string;
  answer: string;
}

/** Tự luận: gợi ý đáp án cho GV */
export interface Essay {
  q: string;
  answer: string;
}

export interface NoteLesson {
  /** Mã bài trong khung chương trình, vd "n8-13" */
  id: string;
  theory: NoteSection[];
  /** Ghi nhớ — tóm tắt cuối bài */
  remember: string[];
  /** Câu tiếng Anh cần nhớ (đọc to, chép vào vở) */
  sentences: Bi[];
  mcq: Mcq[];
  tf: TrueFalse[];
  fill: Fill[];
  essay: Essay[];
}
