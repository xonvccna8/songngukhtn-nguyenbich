// Vở ghi Vật lí KHTN 8: tra cứu theo bài + từ vựng của bài (ngân hàng thuật ngữ, dự phòng bằng kho học liệu)
import { curLesson, type CurLesson } from "@/lib/curriculum";
import { KHO_KHTN8 } from "@/lib/library/kho-khtn8";
import { termId } from "@/lib/lessons/terms";
import { LESSONS_ALL, termsOfLesson } from "@/lib/lessons/by-lesson";
import { NOTES_CH3_4 } from "@/lib/notebook/khtn8-ch3-4";
import { NOTES_CH5_6 } from "@/lib/notebook/khtn8-ch5-6";
import type { NoteLesson } from "@/lib/notebook/types";

export * from "@/lib/notebook/types";

export const NOTES: NoteLesson[] = [...NOTES_CH3_4, ...NOTES_CH5_6];
const BY_ID = new Map(NOTES.map((n) => [n.id, n]));

export const noteOf = (lessonId: string | null | undefined) => (lessonId ? BY_ID.get(lessonId) : undefined);

/** Bài có vở ghi, theo thứ tự SGK */
export const NOTE_LESSONS: CurLesson[] = LESSONS_ALL.filter((l) => BY_ID.has(l.id));

/** Tìm bài có vở ghi theo số bài trong SGK (lớp 8: Bài 13–29) */
export const lessonByNo = (no: number) => NOTE_LESSONS.find((l) => l.no === no);

export interface VocabRow {
  id: string;
  en: string;
  ipa: string;
  vi: string;
}

/** Từ vựng của bài: lấy từ ngân hàng thuật ngữ (đã duyệt, có thể GV bổ sung); chưa tải được thì lấy từ kho học liệu */
export function vocabOf(lessonId: string, bank: { id: string; en: string; ipa: string; vi: string; curLessonIds?: string[] }[]): VocabRow[] {
  const fromBank = termsOfLesson(bank, lessonId);
  if (fromBank.length) return fromBank.map(({ id, en, ipa, vi }) => ({ id, en, ipa, vi }));
  return (KHO_KHTN8.find((l) => l.curLessonId === lessonId)?.terms ?? []).map((t) => ({ id: termId(t.en), ...t }));
}

/** Khung từ gợi ý cho bài điền từ (xếp A→Z để không lộ thứ tự đáp án) */
export const fillWordBox = (n: NoteLesson) => [...new Set(n.fill.map((f) => f.answer))].sort((a, b) => a.localeCompare(b));

export const LETTERS = ["A", "B", "C", "D"] as const;

/** Tách "**đậm**" thành các đoạn để hiển thị / xuất Word */
export function richParts(s: string): { text: string; bold: boolean }[] {
  return s
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((p) => (p.startsWith("**") && p.endsWith("**") ? { text: p.slice(2, -2), bold: true } : { text: p, bold: false }));
}

/** Bỏ dấu ** khi cần chữ thuần */
export const plain = (s: string) => s.replace(/\*\*/g, "");

/** Nhãn đầy đủ của bài */
export const noteTitle = (lessonId: string) => {
  const l = curLesson(lessonId);
  return l ? `Bài ${l.no}. ${l.vi}` : lessonId;
};
