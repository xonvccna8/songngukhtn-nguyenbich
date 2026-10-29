// Bộ dự án STEM mẫu Vật lí – KHTN 8: đủ số lượng, phủ đủ bài, dữ liệu hợp lệ
import { describe, expect, it } from "vitest";
import { STEM_TEMPLATES, sanitizeProject } from "@/lib/stem/projects";
import { STEM_TEMPLATES_KHTN8 } from "@/lib/stem/templates-khtn8";
import { chaptersOf, curLesson } from "@/lib/curriculum";

const NOW = Date.UTC(2026, 9, 23);
const physicsLessons = chaptersOf(8).flatMap((c) => c.lessons.map((l) => l.id));

describe("dự án STEM mẫu Vật lí 8", () => {
  it("có ít nhất 20 dự án mới, mã không trùng trong toàn bộ mẫu", () => {
    expect(STEM_TEMPLATES_KHTN8.length).toBeGreaterThanOrEqual(20);
    const ids = STEM_TEMPLATES.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it("gắn đúng bài Vật lí lớp 8 và phủ đủ 17 bài (13–29)", () => {
    STEM_TEMPLATES_KHTN8.forEach((t) => {
      expect(t.grade, t.id).toBe(8);
      expect(physicsLessons, t.id).toContain(t.curLessonId);
    });
    const covered = new Set(STEM_TEMPLATES.filter((t) => t.grade === 8).map((t) => t.curLessonId));
    expect(physicsLessons.filter((l) => !covered.has(l))).toEqual([]);
    // mẫu lớp 6, 7, 9 gắn đúng bài cùng khối
    STEM_TEMPLATES.filter((t) => t.grade !== 8).forEach((t) => expect(curLesson(t.curLessonId)?.grade, t.id).toBe(t.grade));
  });
  it("song ngữ đầy đủ, có từ vựng, có lưu ý an toàn hoặc tiêu chí; không bị cắt khi lưu", () => {
    STEM_TEMPLATES_KHTN8.forEach((t) => {
      for (const f of [t.title, t.goal, t.brief]) expect(f.en && f.vi, t.id).toBeTruthy();
      expect(t.vocab.length, t.id).toBeGreaterThanOrEqual(3);
      expect(t.brief.vi, t.id).toMatch(/Tiêu chí/);
      expect(t.brief.vi.length, t.id).toBeLessThanOrEqual(2000);
      expect(t.brief.en.length, t.id).toBeLessThanOrEqual(2000);
      expect(t.materials.length, t.id).toBeLessThanOrEqual(600);
      expect(t.title.vi.length, t.id).toBeLessThanOrEqual(160);
      const p = sanitizeProject({ ...t, dueAt: NOW + 14 * 86_400_000 }, NOW);
      if (typeof p === "string") throw new Error(`${t.id}: ${p}`);
      expect(p).toMatchObject({ title: t.title, brief: t.brief, materials: t.materials, curLessonId: t.curLessonId });
    });
  });
  it("bài SGK của dự án phải cùng khối", () => {
    // Khối ngoài 6–9 bị từ chối; bài khác khối hoặc không có thật → bỏ gắn bài
    expect(typeof sanitizeProject({ title: { vi: "X" }, grade: 5, curLessonId: "n8-16", dueAt: NOW + 86_400_000 }, NOW)).toBe("string");
    expect(sanitizeProject({ title: { vi: "X" }, grade: 8, curLessonId: "n7-99", dueAt: NOW + 86_400_000 }, NOW)).toMatchObject({ curLessonId: null });
    expect(sanitizeProject({ title: { vi: "X" }, grade: 8, curLessonId: "n7-12", dueAt: NOW + 86_400_000 }, NOW)).toMatchObject({ curLessonId: null });
    expect(curLesson("n8-29")?.vi).toBe("Sự nở vì nhiệt");
  });
});
