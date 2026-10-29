// Chạy thử script nạp kho (scripts/seed-kho.mts) trên Firestore Emulator: nạp 2 lần, không ghi đè thuật ngữ có sẵn, gỡ sạch.
//   npx firebase-tools emulators:exec --only firestore --project demo-lsn "npx vitest run tests/kho.emulator.test.ts"
import { execFileSync } from "node:child_process";
import { beforeAll, describe, expect, it } from "vitest";
import { adminDb } from "@/lib/firebase/admin";
import { COL } from "@/lib/namespace";
import { KHO_COMMON, KHO_KHTN8, KHO_SEED } from "@/lib/library/kho-khtn8";

const on = !!process.env.FIRESTORE_EMULATOR_HOST;
const run = (...args: string[]) => execFileSync(process.execPath, ["--import", "tsx", "scripts/seed-kho.mts", ...args], { encoding: "utf8", env: process.env });
const total = KHO_COMMON.length + KHO_KHTN8.reduce((s, l) => s + l.resources.length, 0);

describe.skipIf(!on)("nạp kho học liệu KHTN 8", () => {
  const db = () => adminDb();
  beforeAll(async () => {
    await db().recursiveDelete(db().collection(COL.resources));
    await db().recursiveDelete(db().collection(COL.terms));
    // Thuật ngữ GV đã soạn từ trước (lớp 8) — không được ghi đè
    await db().doc(`${COL.terms}/heart`).set({ en: "heart", ipa: "/hɑːt/", vi: "quả tim (GV soạn)", grade: 8, status: "approved", lessonIds: ["L9"] });
    // Học liệu GV tự thêm — không bị đụng tới
    await db().doc(`${COL.resources}/R-gv`).set({ kind: "video", title: { vi: "GV" }, url: "https://youtu.be/abcdefgh", status: "approved", grade: 8, curLessonId: "n8-33" });
  });

  it("--dry-run không ghi gì", async () => {
    expect(run("--dry-run")).toMatch(/không ghi/);
    expect((await db().collection(COL.resources).where("seed", "==", KHO_SEED).get()).size).toBe(0);
  });

  it("nạp: đủ học liệu Đã duyệt, gắn đúng bài; thuật ngữ mới lớp 8 + gắn bài", async () => {
    expect(run()).toMatch(/Đã nạp/);
    expect((await db().collection(COL.resources).where("seed", "==", KHO_SEED).get()).size).toBe(total);
    const r = (await db().doc(`${COL.resources}/kho-n8-33-01`).get()).data()!;
    expect(r).toMatchObject({ kind: "video", status: "approved", grade: 8, curLessonId: "n8-33", createdBy: "kho" });
    // Truy vấn giống trang "Xem trước bài" của HS (kho + 1 học liệu GV)
    const prep = await db().collection(COL.resources).where("status", "==", "approved").where("curLessonId", "==", "n8-33").get();
    expect(prep.size).toBe(KHO_KHTN8.find((l) => l.curLessonId === "n8-33")!.resources.length + 1);
    const t = (await db().doc(`${COL.terms}/homeostasis`).get()).data()!;
    expect(t).toMatchObject({ grade: 8, status: "approved", curLessonIds: ["n8-36"], lessonIds: [] });
  });

  it("thuật ngữ có sẵn: giữ nguyên nội dung GV, chỉ gắn thêm bài", async () => {
    const h = (await db().doc(`${COL.terms}/heart`).get()).data()!;
    expect(h.vi).toBe("quả tim (GV soạn)");
    expect(h.lessonIds).toEqual(["L9"]);
    expect(h.curLessonIds).toEqual(["n8-33"]);
    expect(h.seed).toBeUndefined();
  });

  it("chạy lại không tạo trùng", async () => {
    run();
    expect((await db().collection(COL.resources).where("seed", "==", KHO_SEED).get()).size).toBe(total);
    expect((await db().doc(`${COL.terms}/heart`).get()).get("curLessonIds")).toEqual(["n8-33"]);
  });

  it("--remove gỡ sạch phần của kho, giữ dữ liệu của GV", async () => {
    run("--remove");
    expect((await db().collection(COL.resources).where("seed", "==", KHO_SEED).get()).size).toBe(0);
    expect((await db().collection(COL.terms).where("seed", "==", KHO_SEED).get()).size).toBe(0);
    expect((await db().doc(`${COL.resources}/R-gv`).get()).exists).toBe(true);
    const h = (await db().doc(`${COL.terms}/heart`).get()).data()!;
    expect(h.vi).toBe("quả tim (GV soạn)");
    expect(h.curLessonIds).toEqual([]);
  });
});
