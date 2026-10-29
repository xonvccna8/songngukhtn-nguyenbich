// Kiểm tra dữ liệu kho học liệu Vật lí – KHTN 8 (Bài 13–29) trước khi nạp
import { describe, expect, it } from "vitest";
import { KHO_COMMON, KHO_KHTN8, khoResourceId } from "@/lib/library/kho-khtn8";
import { sanitizeResource } from "@/lib/library/resources";
import { chaptersOf, curLesson } from "@/lib/curriculum";
import { termId } from "@/lib/lessons/terms";

describe("kho học liệu Vật lí 8", () => {
  it("phủ đủ Bài 13–29 (Chương III–VI lớp 8), mỗi bài một lần", () => {
    const want = chaptersOf(8).flatMap((c) => c.lessons.map((l) => l.id));
    expect(want).toHaveLength(17);
    expect(KHO_KHTN8.map((l) => l.curLessonId).sort()).toEqual([...want].sort());
  });
  it("mọi học liệu hợp lệ theo đúng hàm kiểm tra của app", () => {
    [...KHO_COMMON.map((r) => ({ r, l: null as string | null })), ...KHO_KHTN8.flatMap((l) => l.resources.map((r) => ({ r, l: l.curLessonId })))].forEach(({ r, l }) => {
      const out = sanitizeResource({ ...r, grade: 8, curLessonId: l });
      expect(typeof out, `${r.url}: ${out}`).toBe("object");
      expect(r.title.vi && r.title.en && r.note).toBeTruthy();
      expect(r.url.startsWith("https://")).toBe(true);
    });
  });
  it("mỗi bài có ít nhất 1 học liệu và 5 thuật ngữ; không trùng link / thuật ngữ trong bài", () => {
    KHO_KHTN8.forEach((l) => {
      expect(l.resources.length, l.curLessonId).toBeGreaterThanOrEqual(1);
      expect(l.terms.length, l.curLessonId).toBeGreaterThanOrEqual(5);
      expect(new Set(l.resources.map((r) => r.url)).size).toBe(l.resources.length);
      expect(new Set(l.terms.map((t) => termId(t.en))).size).toBe(l.terms.length);
    });
  });
  it("thuật ngữ có IPA dạng /…/ và nghĩa tiếng Việt", () => {
    KHO_KHTN8.flatMap((l) => l.terms).forEach((t) => {
      expect(t.ipa, t.en).toMatch(/^\/[^/]+\/$/);
      expect(t.vi, t.en).toBeTruthy();
    });
  });
  it("mã học liệu cố định, không trùng", () => {
    const ids = KHO_KHTN8.flatMap((l) => l.resources.map((_, i) => khoResourceId(l.curLessonId, i)));
    expect(new Set(ids).size).toBe(ids.length);
    expect(khoResourceId("n8-16", 0)).toBe("kho-n8-16-01");
    expect(curLesson("n8-29")?.vi).toBe("Sự nở vì nhiệt");
  });
});
