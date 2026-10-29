// Thuật ngữ chia theo bài + Vở ghi Vật lí – KHTN 8 (Bài 13–29): đủ bài, dữ liệu hợp lệ, xuất Word được
import { describe, expect, it } from "vitest";
import { Packer } from "docx";
import { KHO_KHTN8 } from "@/lib/library/kho-khtn8";
import { LESSONS_ALL, LOOSE, groupByLesson, lessonTitle, termsOfLesson } from "@/lib/lessons/by-lesson";
import { chaptersOf, curLesson } from "@/lib/curriculum";
import { sanitizeTerm } from "@/lib/lessons/terms";
import { NOTES, NOTE_LESSONS, fillWordBox, lessonByNo, noteOf, plain, richParts, vocabOf } from "@/lib/notebook";
import { buildNotebookDoc } from "@/lib/notebook/word";

const t = (id: string, curLessonIds?: string[]) => ({ id, en: id, ipa: "", vi: id, curLessonIds });

describe("thuật ngữ chia theo bài", () => {
  it("nhóm đúng thứ tự SGK, từ trong bài theo thứ tự kho, nhóm chưa gắn bài ở cuối", () => {
    const g = groupByLesson([t("depth", ["n8-16"]), t("liquid-pressure", ["n8-16"]), t("upthrust", ["n8-17"]), t("zebra"), t("pressure", ["n8-16", "n8-15"]), t("speed", ["n7-8"])]);
    expect(g.map((x) => (x.lesson ? `${x.lesson.grade}-${x.lesson.no}` : LOOSE))).toEqual(["7-8", "8-15", "8-16", "8-17", LOOSE]); // lớp 7 trước lớp 8
    expect(g[2].terms.map((x) => x.id)).toEqual(["liquid-pressure", "depth", "pressure"]); // theo thứ tự kho; "pressure" không có trong kho bài 16 → cuối
    expect(g[4].terms.map((x) => x.id)).toEqual(["zebra"]);
    expect(lessonTitle(curLesson("n8-16")!)).toBe("Lớp 8 · Bài 16. Áp suất chất lỏng. Áp suất khí quyển");
  });
  it("một từ thuộc nhiều bài hiện ở cả hai bài", () => {
    const list = [t("pressure", ["n8-15", "n8-16"])];
    expect(termsOfLesson(list, "n8-15")).toHaveLength(1);
    expect(termsOfLesson(list, "n8-16")).toHaveLength(1);
  });
  it("kho học liệu có từ vựng cho đủ 17 bài lớp 8", () => {
    const l8 = chaptersOf(8).flatMap((c) => c.lessons);
    expect(l8.map((l) => l.no)).toEqual(Array.from({ length: 17 }, (_, i) => 13 + i));
    expect(LESSONS_ALL.length).toBeGreaterThan(l8.length); // có cả lớp 6, 7, 9
    l8.forEach((l) => expect(KHO_KHTN8.find((k) => k.curLessonId === l.id)?.terms.length, l.id).toBeGreaterThanOrEqual(5));
  });
  it("GV gắn bài cho thuật ngữ: chỉ nhận mã bài có thật, bỏ trùng", () => {
    const r = sanitizeTerm({ en: "depth", vi: "độ sâu", grade: 8, curLessonIds: ["n8-16", "n8-16", "n8-30", 5] });
    if (typeof r === "string") throw new Error(r);
    expect(r.curLessonIds).toEqual(["n8-16"]);
    const keep = sanitizeTerm({ en: "depth", vi: "độ sâu" });
    expect(typeof keep !== "string" && keep.curLessonIds).toBeUndefined(); // không gửi → giữ nguyên khi sửa
  });
});

describe("vở ghi Vật lí 8", () => {
  it("đủ vở ghi cho 17 bài (13–29), không trùng", () => {
    expect(NOTE_LESSONS.map((l) => l.no)).toEqual(Array.from({ length: 17 }, (_, i) => 13 + i));
    expect(new Set(NOTES.map((n) => n.id)).size).toBe(NOTES.length);
    expect(lessonByNo(16)?.id).toBe("n8-16");
    expect(lessonByNo(30)).toBeUndefined();
  });
  it("mỗi bài có lý thuyết, ghi nhớ, câu tiếng Anh và đủ 4 dạng bài tập hợp lệ", () => {
    NOTES.forEach((n) => {
      expect(n.theory.length, n.id).toBeGreaterThanOrEqual(2);
      n.theory.forEach((s) => {
        expect(s.h && s.en && s.points.length, n.id).toBeTruthy();
        s.table?.rows.forEach((r) => expect(r.length, `${n.id} ${s.h}`).toBe(s.table!.head.length));
      });
      expect(n.remember.length, n.id).toBeGreaterThanOrEqual(3);
      n.sentences.forEach((x) => expect(x.en && x.vi, n.id).toBeTruthy());
      expect(n.mcq.length, n.id).toBeGreaterThanOrEqual(4);
      n.mcq.forEach((q) => {
        expect(q.answer >= 0 && q.answer < 4, `${n.id}: ${q.q}`).toBe(true);
        expect(new Set(q.options).size, `${n.id}: ${q.q}`).toBe(4);
      });
      expect(n.tf.length, n.id).toBeGreaterThanOrEqual(4);
      expect(n.tf.some((x) => x.answer) && n.tf.some((x) => !x.answer), `${n.id}: Đ/S nên có cả đúng và sai`).toBe(true);
      n.fill.forEach((f) => {
        expect(f.q.split("___").length, `${n.id}: ${f.q}`).toBe(2);
        expect(f.answer.trim(), n.id).toBe(f.answer);
      });
      expect(fillWordBox(n).length, n.id).toBe(new Set(n.fill.map((f) => f.answer)).size);
      expect(n.essay.length, n.id).toBeGreaterThanOrEqual(2);
      n.essay.forEach((e) => expect(e.q && e.answer, n.id).toBeTruthy());
      // Không còn sót dấu ** lẻ
      [...n.theory.flatMap((s) => s.points), ...n.remember].forEach((p) => expect((p.match(/\*\*/g) ?? []).length % 2, `${n.id}: ${p}`).toBe(0));
    });
  });
  it("chữ đậm và chữ thuần", () => {
    expect(richParts("Công thức **D = m/V** và đơn vị")).toEqual([
      { text: "Công thức ", bold: false },
      { text: "D = m/V", bold: true },
      { text: " và đơn vị", bold: false },
    ]);
    expect(plain("**a** b")).toBe("a b");
  });
  it("từ vựng của bài: lấy ngân hàng thuật ngữ, chưa có thì lấy kho", () => {
    expect(vocabOf("n8-16", [t("depth", ["n8-16"])]).map((v) => v.id)).toEqual(["depth"]);
    expect(vocabOf("n8-16", []).map((v) => v.en)).toContain("atmospheric pressure");
    expect(noteOf("n6-40")).toBeUndefined();
  });
  it("xuất Word được cả quyển, bản HS và bản GV", async () => {
    for (const answers of [false, true]) {
      const doc = buildNotebookDoc(
        NOTE_LESSONS.map((l) => l.id),
        { answers, vocab: (id) => vocabOf(id, []) }
      );
      const buf = await Packer.toBuffer(doc);
      expect(buf.length).toBeGreaterThan(20_000);
    }
  });
});
