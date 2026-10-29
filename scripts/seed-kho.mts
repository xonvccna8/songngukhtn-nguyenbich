// Nạp kho học liệu Vật lí 8 (Bài 13–29) vào Firestore: npm run seed:kho
//   --dry-run  chỉ kiểm tra + in số lượng, không ghi
//   --remove   gỡ toàn bộ học liệu + thuật ngữ do kho này tạo (thuật ngữ có sẵn của GV chỉ bị bỏ gắn bài)
// Học liệu: lsnly_resources/kho-<bài>-NN (Đã duyệt). Thuật ngữ: lsnly_terms/<mã tiếng Anh> — thuật ngữ đã có thì KHÔNG ghi đè,
// chỉ gắn thêm curLessonIds để hiện ở "Xem trước bài" và trình soạn bài.
import { existsSync } from "node:fs";
import { FieldValue } from "firebase-admin/firestore";

if (existsSync(".env.local") && !process.env.FIRESTORE_EMULATOR_HOST) process.loadEnvFile(".env.local");
const { adminDb } = await import("../src/lib/firebase/admin");
const { COL } = await import("../src/lib/namespace");
const { sanitizeResource } = await import("../src/lib/library/resources");
const { termId } = await import("../src/lib/lessons/terms");
const { curLesson } = await import("../src/lib/curriculum");
const { KHO_COMMON, KHO_KHTN8, KHO_SEED, khoCommonId, khoResourceId } = await import("../src/lib/library/kho-khtn8");

const DRY = process.argv.includes("--dry-run");
const REMOVE = process.argv.includes("--remove");
const META = { createdBy: "kho", createdByName: "Kho học liệu Vật lí 8", schoolId: null, seed: KHO_SEED };

try {
  const db = adminDb();

  if (REMOVE) {
    const res = await db.collection(COL.resources).where("seed", "==", KHO_SEED).get();
    const terms = await db.collection(COL.terms).where("seed", "==", KHO_SEED).get();
    const ids = KHO_KHTN8.map((l) => l.curLessonId);
    const linked = await db.collection(COL.terms).where("curLessonIds", "array-contains-any", ids.slice(0, 30)).get();
    const batch = db.batch();
    res.docs.forEach((d) => batch.delete(d.ref));
    terms.docs.forEach((d) => batch.delete(d.ref));
    linked.docs.filter((d) => d.get("seed") !== KHO_SEED).forEach((d) => batch.update(d.ref, { curLessonIds: FieldValue.arrayRemove(...ids) }));
    await batch.commit();
    console.log(`✔ Đã gỡ ${res.size} học liệu, ${terms.size} thuật ngữ của kho; bỏ gắn bài ở ${linked.size - terms.size} thuật ngữ có sẵn.`);
    process.exit(0);
  }

  // ---- Kiểm tra dữ liệu trước khi ghi (cùng hàm kiểm tra như khi GV thêm tay) ----
  const resources: { id: string; data: Record<string, unknown> }[] = [];
  const add = (id: string, r: (typeof KHO_COMMON)[number], curLessonId: string | null) => {
    const clean = sanitizeResource({ ...r, grade: 8, curLessonId });
    if (typeof clean === "string") throw new Error(`Học liệu ${id} không hợp lệ: ${clean} (${r.url})`);
    resources.push({ id, data: { ...clean, status: "approved", ...META } });
  };
  KHO_COMMON.forEach((r, i) => add(khoCommonId(i), r, null));
  for (const l of KHO_KHTN8) {
    if (!curLesson(l.curLessonId)) throw new Error(`Không có bài ${l.curLessonId} trong khung chương trình.`);
    l.resources.forEach((r, i) => add(khoResourceId(l.curLessonId, i), r, l.curLessonId));
  }
  // Thuật ngữ: gộp theo mã (một thuật ngữ có thể thuộc nhiều bài)
  const terms = new Map<string, { en: string; ipa: string; vi: string; lessons: string[] }>();
  for (const l of KHO_KHTN8)
    for (const t of l.terms) {
      const id = termId(t.en);
      const cur = terms.get(id);
      if (cur) cur.lessons.push(l.curLessonId);
      else terms.set(id, { ...t, lessons: [l.curLessonId] });
    }

  console.log(`Kho Vật lí 8: ${KHO_KHTN8.length} bài · ${resources.length} học liệu · ${terms.size} thuật ngữ`);
  if (DRY) {
    console.log("(--dry-run: không ghi gì)");
    process.exit(0);
  }

  // ---- Ghi học liệu (id cố định → chạy lại chỉ cập nhật) ----
  for (let i = 0; i < resources.length; i += 400) {
    const batch = db.batch();
    resources.slice(i, i + 400).forEach((r) => batch.set(db.collection(COL.resources).doc(r.id), { ...r.data, createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() }, { merge: true }));
    await batch.commit();
  }

  // ---- Ghi thuật ngữ: chưa có → tạo (Đã duyệt, lớp 8); đã có → chỉ gắn thêm bài ----
  const refs = [...terms.keys()].map((id) => db.collection(COL.terms).doc(id));
  const snaps = await db.getAll(...refs);
  let created = 0;
  let linked = 0;
  const otherGrade: string[] = [];
  const batch = db.batch();
  snaps.forEach((s, i) => {
    const t = terms.get(refs[i].id)!;
    // Đã có (của GV, hoặc của kho từ lần nạp trước và có thể đã được GV sửa) → chỉ gắn thêm bài, không ghi đè nội dung
    if (s.exists) {
      linked++;
      if (s.get("grade") !== 8) otherGrade.push(`${t.en} (lớp ${s.get("grade")})`);
      batch.update(s.ref, { curLessonIds: FieldValue.arrayUnion(...t.lessons), updatedAt: FieldValue.serverTimestamp() });
    } else {
      created++;
      batch.set(s.ref, { en: t.en, ipa: t.ipa, vi: t.vi, grade: 8, status: "approved", lessonIds: [], curLessonIds: t.lessons, imageUrl: null, ...META, updatedAt: FieldValue.serverTimestamp() });
    }
  });
  await batch.commit();

  console.log(`✔ Đã nạp ${resources.length} học liệu (Đã duyệt) → ${COL.resources}`);
  console.log(`✔ Thuật ngữ: tạo mới ${created}, đã có sẵn (giữ nguyên nội dung, chỉ gắn bài) ${linked} → ${COL.terms}`);
  if (otherGrade.length) console.log(`  Lưu ý: ${otherGrade.length} thuật ngữ có sẵn thuộc khối khác nên không hiện ở thẻ ôn lớp 8: ${otherGrade.join(", ")}`);
  process.exit(0);
} catch (e) {
  console.error("✘ " + (e instanceof Error ? e.message : e));
  process.exit(1);
}
