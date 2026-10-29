// Môn học của ứng dụng: Vật lí — phân môn của Khoa học tự nhiên (KHTN) THCS. Tên môn hiển thị lấy từ đây.
// Kỹ năng câu hỏi (Skill) tách 2 phần: kiến thức môn ("Khoa học") và tiếng Anh ("Ngôn ngữ").
export const SUBJECT = {
  vi: "Vật lí – Khoa học tự nhiên",
  short: "Vật lí",
  en: "Physics – Natural Science",
  /** Tên ngắn tiếng Anh dùng trên logo, nhãn */
  enShort: "Physics",
} as const;

// ---- Dữ liệu của trang Toán cũ ----
// Web Vật lí dùng bộ sưu tập riêng (lsnly_) nên không còn dữ liệu Toán; giữ bộ lọc phòng khi GV nhập bài cũ.

/** Mã bài thuộc khung chương trình Toán cũ (vd "k8-15"); khung KHTN dùng "n8-13" */
export const isMathCurId = (id: string | null | undefined) => /^k\d/.test(id ?? "");

/** Tiết học của trang Toán cũ: môn "Toán" hoặc gắn bài SGK Toán */
export const isMathLesson = (l: { subject?: string | null; curLessonId?: string | null }) => l.subject === "Toán" || isMathCurId(l.curLessonId);

/** Thuật ngữ chỉ thuộc các tiết Toán (không gắn tiết nào khác) */
export const isMathTerm = (t: { lessonIds?: string[] }, mathLessonIds: ReadonlySet<string>) =>
  (t.lessonIds?.length ?? 0) > 0 && t.lessonIds!.every((id) => mathLessonIds.has(id));

/** Mô tả ứng dụng (metadata, manifest, chân trang) */
export const APP_DESCRIPTION = `Dạy và học ${SUBJECT.vi} song ngữ Việt – Anh cho THCS (lớp 6–9)`;
