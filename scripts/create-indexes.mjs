// Tạo chỉ mục Firestore của Song Ngữ Vật Lí theo kiểu CHỈ THÊM (không xoá chỉ mục của app khác).
//   npm run indexes
// KHÔNG dùng "firebase deploy --only firestore:indexes" — project dùng chung, lệnh đó có thể xoá chỉ mục app khác.
import { readFileSync } from "node:fs";
import { googleToken } from "./google-token.mjs";

try {
  process.loadEnvFile(".env.local");
} catch {}
const PROJECT = process.env.FIREBASE_ADMIN_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const tok = await googleToken();
const H = { Authorization: `Bearer ${tok.token}`, "Content-Type": "application/json", ...(tok.cli ? { "x-goog-user-project": PROJECT } : {}) };

const { indexes } = JSON.parse(readFileSync("firestore.indexes.json", "utf8"));
const sig = (fields) => fields.map((f) => `${f.fieldPath}:${f.order ?? f.arrayConfig}`).join(",");

for (const ix of indexes) {
  const base = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/collectionGroups/${ix.collectionGroup}/indexes`;
  // API có thể trả lẫn chỉ mục của bộ sưu tập khác → lọc theo tên chỉ mục
  const existing = ((await (await fetch(base, { headers: H })).json()).indexes ?? []).filter((e) => e.name?.includes(`/collectionGroups/${ix.collectionGroup}/`));
  const want = sig(ix.fields);
  const found = existing.find((e) => e.queryScope === ix.queryScope && sig(e.fields.filter((f) => f.fieldPath !== "__name__")) === want);
  if (found) {
    console.log(`✔ Đã có: ${ix.collectionGroup} (${want}) — trạng thái ${found.state}`);
    continue;
  }
  const r = await fetch(base, { method: "POST", headers: H, body: JSON.stringify({ queryScope: ix.queryScope, fields: ix.fields }) });
  const j = await r.json();
  console.log(r.ok ? `✔ Đang tạo: ${ix.collectionGroup} (${want}) — mất vài phút` : `✘ ${ix.collectionGroup}: ${j.error?.message}`);
}
