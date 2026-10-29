// Chia thuật ngữ theo từng bài SGK Vật lí KHTN 6–9 — bài nào từ vựng bài đó để HS dễ học. Hàm thuần, có test.
import { CHAPTERS, type Chapter, type CurLesson } from "@/lib/curriculum";
import { KHO_KHTN8 } from "@/lib/library/kho-khtn8";
import { termId } from "@/lib/lessons/terms";

/** Các chương Vật lí lớp 6 → 9 theo thứ tự SGK */
export const CHAPTERS_ALL: Chapter[] = CHAPTERS;
/** Các bài Vật lí lớp 6 → 9 theo thứ tự SGK */
export const LESSONS_ALL: CurLesson[] = CHAPTERS.flatMap((c) => c.lessons);

/** Nhãn chương có khối lớp (các lớp trùng số chương): "Lớp 8 · Chương 3. Khối lượng riêng và áp suất" */
export const chapterTitle = (c: Chapter) => `Lớp ${c.grade} · Chương ${c.no}. ${c.vi}`;

/** Thứ tự từ trong kho (từ khái quát → cụ thể), dùng để xếp từ trong mỗi bài */
const KHO_ORDER = new Map(KHO_KHTN8.map((l) => [l.curLessonId, new Map(l.terms.map((t, i) => [termId(t.en), i]))]));

/** Thuật ngữ tối thiểu cần để nhóm */
type T = { id: string; en: string; curLessonIds?: string[] };

/** Xếp từ của một bài: theo kho trước, từ GV thêm sau (A→Z) */
export function sortInLesson<X extends T>(lessonId: string, list: X[]): X[] {
  const order = KHO_ORDER.get(lessonId);
  const rank = (t: X) => order?.get(t.id) ?? 1000;
  return [...list].sort((a, b) => rank(a) - rank(b) || a.en.localeCompare(b.en));
}

/** Thuật ngữ của một bài */
export const termsOfLesson = <X extends T>(terms: X[], lessonId: string): X[] => sortInLesson(lessonId, terms.filter((t) => t.curLessonIds?.includes(lessonId)));

/** Thuật ngữ chưa gắn bài nào */
export const LOOSE = "none";

export interface LessonGroup<X> {
  /** null = "Chưa gắn bài" */
  lesson: CurLesson | null;
  terms: X[];
}

/** Nhóm theo bài (đúng thứ tự SGK); bỏ bài không có từ; nhóm "Chưa gắn bài" ở cuối */
export function groupByLesson<X extends T>(terms: X[]): LessonGroup<X>[] {
  const ids = new Set(LESSONS_ALL.map((l) => l.id));
  const out: LessonGroup<X>[] = LESSONS_ALL.map((l) => ({ lesson: l, terms: termsOfLesson(terms, l.id) })).filter((g) => g.terms.length);
  const loose = terms.filter((t) => !t.curLessonIds?.some((id) => ids.has(id)));
  if (loose.length) out.push({ lesson: null, terms: [...loose].sort((a, b) => a.en.localeCompare(b.en)) });
  return out;
}

/** Nhãn bài ngắn: "Lớp 8 · Bài 13. Khối lượng riêng" */
export const lessonTitle = (l: CurLesson) => `Lớp ${l.grade} · Bài ${l.no}. ${l.vi}`;
