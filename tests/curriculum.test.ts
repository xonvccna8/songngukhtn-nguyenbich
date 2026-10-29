import { describe, expect, it } from "vitest";
import { CHAPTERS, GRADES, chapterOf, chaptersOf, curLesson, fold, isOutcomeId, outcomesOf, starCounts, starsOf } from "@/lib/curriculum";
import { FRAMES, PHRASES, SYMBOLS, matches, sayOf, searchFrames, searchSymbols } from "@/lib/library";
import { embedUrl, geogebraId, sanitizeResource, youtubeId } from "@/lib/library/resources";
import { sanitizeLesson } from "@/lib/lessons/editor";
import { computeLevel, requirements, type Facts } from "@/lib/progress/levels";
import { masteryByUid } from "@/lib/progress/xp";
import { isMathCurId, isMathLesson, isMathTerm } from "@/lib/subject";

describe("khung chương trình Vật lí · KHTN 6–9 (KNTT)", () => {
  // Phần Vật lí của KHTN lớp 6–9; lớp 8: Chương III–VI (Bài 13–29)
  it("đủ 4 khối; lớp 8 có 17 bài, 4 chương (đối chiếu mục lục SGK)", () => {
    expect(GRADES).toEqual([6, 7, 8, 9]);
    expect([6, 7, 9].map((g) => chaptersOf(g).length)).toEqual([4, 4, 5]);
    expect(chaptersOf(8).map((c) => c.no)).toEqual([3, 4, 5, 6]);
    expect(chaptersOf(8).reduce((s, c) => s + c.lessons.length, 0)).toBe(17);
  });
  it("số bài liên tục đúng như SGK, id duy nhất, không còn mã Toán cũ", () => {
    const nos = chaptersOf(8).flatMap((c) => c.lessons.map((l) => l.no));
    expect(nos).toEqual(Array.from({ length: 17 }, (_, i) => 13 + i));
    const ids = CHAPTERS.flatMap((c) => c.lessons.map((l) => l.id));
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.every((id) => id.startsWith("n"))).toBe(true);
  });
  it("bài nào cũng có YCCĐ song ngữ", () => {
    CHAPTERS.forEach((c) => c.lessons.forEach((l) => {
      expect(l.outcomes.length).toBeGreaterThan(0);
      l.outcomes.forEach((o) => expect(o.vi && o.en).toBeTruthy());
    }));
    expect(outcomesOf(8).length).toBeGreaterThan(20);
  });
  it("tra cứu bài, chương, YCCĐ", () => {
    expect(curLesson("n8-16")).toMatchObject({ vi: "Áp suất chất lỏng. Áp suất khí quyển", grade: 8, chapterId: "n8-c3" });
    expect(chapterOf("n8-24")?.vi).toBe("Điện");
    expect(chapterOf("n8-28")?.strand).toBe("nh");
    expect(curLesson("n6-43")?.grade).toBe(6);
    expect(curLesson("n9-11")?.vi).toBe("Điện trở. Định luật Ohm");
    expect(curLesson("n8-30")).toBeUndefined(); // bài Sinh học không còn
    expect(isOutcomeId("n8-16-2")).toBe(true);
    expect(isOutcomeId("n8-16-9")).toBe(false);
    expect(curLesson("k8-15")).toBeUndefined(); // mã bài Toán cũ không còn hợp lệ
  });
  it("tìm không dấu", () => {
    expect(fold("Áp suất chất lỏng")).toBe("ap suat chat long");
    expect(matches("luc day", "Lực đẩy Archimedes")).toBe(true);
  });
});

describe("ẩn dữ liệu Toán cũ (Firebase dùng chung — chỉ ẩn, không xoá)", () => {
  it("nhận ra tiết, học liệu, thuật ngữ Toán", () => {
    expect(isMathLesson({ subject: "Toán", curLessonId: null })).toBe(true);
    expect(isMathLesson({ subject: "", curLessonId: "k7-16" })).toBe(true);
    expect(isMathLesson({ subject: "KHTN", curLessonId: "n6-18" })).toBe(false);
    expect(isMathCurId("k8-15")).toBe(true);
    expect(isMathCurId("n8-33")).toBe(false);
    const math = new Set(["toan7-tam-giac-can"]);
    expect(isMathTerm({ lessonIds: ["toan7-tam-giac-can"] }, math)).toBe(true);
    expect(isMathTerm({ lessonIds: ["toan7-tam-giac-can", "khtn6-te-bao"] }, math)).toBe(false); // dùng chung → vẫn hiện
    expect(isMathTerm({ lessonIds: [] }, math)).toBe(false); // GV tự thêm, chưa gắn tiết
  });
});

describe("Sao thành thạo", () => {
  it("cần đủ số câu và tỉ lệ đúng", () => {
    expect(starsOf(undefined)).toBe(0);
    expect(starsOf({ a: 1, c: 1 })).toBe(0); // 1 câu chưa kết luận được
    expect(starsOf({ a: 2, c: 1 })).toBe(1);
    expect(starsOf({ a: 4, c: 3 })).toBe(2);
    expect(starsOf({ a: 6, c: 6 })).toBe(3);
    expect(starsOf({ a: 10, c: 4 })).toBe(0);
  });
  it("đếm số YCCĐ theo Sao", () => expect(starCounts({ x: { a: 6, c: 6 }, y: { a: 2, c: 1 }, z: { a: 1, c: 0 } })).toEqual({ seen: 3, s1: 2, s2: 1, s3: 1 }));
  it("gom câu trả lời trong tiết theo YCCĐ (luyện nói đạt từ 80)", () => {
    const m = masteryByUid(
      [
        { uid: "a", slideId: "s1", qtype: "mcq", correct: true },
        { uid: "a", slideId: "s2", qtype: "speak", score: 85 },
        { uid: "b", slideId: "s1", qtype: "mcq", correct: false },
        { uid: "b", slideId: "s9", qtype: "mcq", correct: true },
      ],
      (sid) => ({ s1: ["k8-1-1"], s2: ["k8-1-1", "k8-1-2"] })[sid]
    );
    expect(m).toEqual({ a: { "k8-1-1": { a: 2, c: 2 }, "k8-1-2": { a: 1, c: 1 } }, b: { "k8-1-1": { a: 1, c: 0 } } });
  });
  it("điều kiện Sao chỉ xét khi em đã gặp YCCĐ, và không đòi quá 80% số đã gặp", () => {
    const f = (o: Partial<Facts>): Facts => ({ termsLearned: 99, termsAvailable: 0, speakGood: 99, bestStreak: 99, ...o });
    expect(requirements(2, f({})).some((r) => r.vi.includes("1⭐"))).toBe(false);
    const r = requirements(2, f({ outcomesSeen: 3, stars1: 1 })).find((x) => x.vi.includes("1⭐"))!;
    expect(r.goal).toBe(3);
    expect(computeLevel(900, f({ outcomesSeen: 3, stars1: 1 }))).toBe(5); // kẹt ở Tập sự III
    expect(computeLevel(900, f({ outcomesSeen: 3, stars1: 3 }))).toBe(6); // Khám phá I
  });
});

describe("thư viện học liệu dựng sẵn", () => {
  it("đủ số lượng, id duy nhất, đủ 2 thứ tiếng", () => {
    expect(FRAMES).toHaveLength(60);
    expect(PHRASES).toHaveLength(150);
    expect(SYMBOLS.length).toBeGreaterThanOrEqual(30);
    expect(SYMBOLS.every((s) => (GRADES as readonly number[]).includes(s.grade))).toBe(true);
    for (const list of [FRAMES.map((f) => f.id), PHRASES.map((p) => p.id), SYMBOLS.map((s) => s.id)]) expect(new Set(list).size).toBe(list.length);
    FRAMES.forEach((f) => [f.e1, f.e2, f.e3].forEach((t) => expect(t.en && t.vi).toBeTruthy()));
  });
  it("tìm khung câu và kí hiệu", () => {
    expect(searchFrames("disagree").length).toBeGreaterThan(0);
    expect(searchFrames("ampe ke").length).toBeGreaterThan(0);
    expect(searchSymbols("ap suat")[0].sym).toBe("p = F / S");
    expect(sayOf(SYMBOLS.find((s) => s.sym === "Pa")!)).toBe("pascal");
    expect(sayOf(SYMBOLS.find((s) => s.sym === "D = m / V")!)).toBe("D equals m over V");
    expect(searchSymbols("di hop")).toHaveLength(0); // kí hiệu di truyền lớp 9 đã gỡ
  });
  it("không còn nội dung Toán trong thư viện", () => {
    const all = [...FRAMES.flatMap((f) => [f.e1, f.e2, f.e3]), ...PHRASES, ...SYMBOLS].flatMap((x) => [x.en, x.vi]).join(" ");
    for (const w of ["triangle", "tam giác", "theorem", "định lí", "equation", "phương trình", "angle", "protractor"]) expect(all.toLowerCase()).not.toContain(w);
    // không còn nội dung Sinh học
    for (const w of ["tế bào", "photosynthesis", "quang hợp", "kính hiển vi", "microscope", "organ "]) expect(all.toLowerCase()).not.toContain(w);
  });
});

describe("học liệu (link)", () => {
  const ok = { kind: "geogebra", title: { vi: "Áp suất chất lỏng", en: "" }, url: "https://www.geogebra.org/m/abc123XY", grade: 8, curLessonId: "n8-16", note: "" };
  it("nhận link GeoGebra / YouTube và tạo link nhúng", () => {
    expect(geogebraId("https://www.geogebra.org/m/abc123XY")).toBe("abc123XY");
    expect(youtubeId("https://youtu.be/dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ");
    expect(youtubeId("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=10")).toBe("dQw4w9WgXcQ");
    expect(embedUrl({ kind: "video", url: "https://youtu.be/dQw4w9WgXcQ" })).toContain("youtube-nocookie.com/embed/dQw4w9WgXcQ");
    expect(embedUrl({ kind: "worksheet", url: "https://docs.google.com/x" })).toBeNull();
  });
  it("kiểm tra dữ liệu GV nhập", () => {
    expect(typeof sanitizeResource(ok)).toBe("object");
    expect(sanitizeResource({ ...ok, url: "http://www.geogebra.org/m/abc123XY" })).toMatch(/https/);
    expect(sanitizeResource({ ...ok, url: "https://evil.com/m/abc" })).toMatch(/GeoGebra/);
    expect(sanitizeResource({ ...ok, kind: "video", url: "https://vimeo.com/1" })).toMatch(/YouTube/);
    expect(sanitizeResource({ ...ok, grade: 5 })).toMatch(/6, 7, 8 hoặc 9/);
    expect(sanitizeResource({ ...ok, curLessonId: "n7-99" })).toMatchObject({ curLessonId: null }); // bài không có thật
    expect(sanitizeResource({ ...ok, title: { vi: "" } })).toMatch(/tên/);
  });
});

describe("soạn bài gắn khung chương trình", () => {
  const slide = (extra: object) => ({ id: "s1", type: "mcq", title: { en: "Q", vi: "Q" }, blocks: [], question: { type: "mcq", prompt: { en: "?", vi: "?" }, options: [{ en: "a" }, { en: "b" }] }, key: { answer: 0 }, ...extra });
  it("chỉ nhận bài SGK và YCCĐ có thật", () => {
    const r = sanitizeLesson({ meta: { title: { en: "x", vi: "x" }, grade: 8, curLessonId: "n8-16" }, slides: [slide({ outcomeIds: ["n8-16-1", "bogus", "n8-16-1", "k8-15-1"] })] });
    expect(r.meta.curLessonId).toBe("n8-16");
    expect(r.slides[0].outcomeIds).toEqual(["n8-16-1"]);
    const bad = sanitizeLesson({ meta: { title: { en: "x", vi: "x" }, curLessonId: "k8-15" }, slides: [slide({})] });
    expect(bad.meta.curLessonId).toBeNull();
    expect(bad.slides[0].outcomeIds).toBeUndefined();
  });
});
