// Kiểm tra rules đang chạy: đăng nhập thử bằng custom token (claims ly*) rồi đọc Firestore qua REST
import { readFileSync } from "node:fs";
import { parseEnv } from "node:util";
import { cert, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const env = parseEnv(readFileSync(".env.local", "utf8"));
const PROJECT = env.FIREBASE_ADMIN_PROJECT_ID;
const app = initializeApp({ credential: cert({ projectId: PROJECT, clientEmail: env.FIREBASE_ADMIN_CLIENT_EMAIL, privateKey: env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n") }) });
const auth = getAuth(app);

async function idToken(uid, claims) {
  const custom = await auth.createCustomToken(uid, claims);
  const r = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${env.NEXT_PUBLIC_FIREBASE_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: custom, returnSecureToken: true }),
  });
  const j = await r.json();
  if (!j.idToken) throw new Error("Không đăng nhập thử được: " + JSON.stringify(j.error?.message));
  return j.idToken;
}

// Truy vấn 1 bộ sưu tập (giới hạn 1 tài liệu) — trả về mã HTTP
async function query(tok, col, where) {
  const q = { from: [{ collectionId: col }], limit: 1 };
  if (where) q.where = { fieldFilter: { field: { fieldPath: where[0] }, op: "EQUAL", value: { stringValue: where[1] } } };
  const r = await fetch(`https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents:runQuery`, {
    method: "POST",
    headers: { Authorization: `Bearer ${tok}`, "Content-Type": "application/json" },
    body: JSON.stringify({ structuredQuery: q }),
  });
  return r.status;
}

const UID = "ly_rules_check";
const teacher = await idToken(UID, { lyRole: "teacher", lySchool: "thcs-mau", lyClasses: [] });
const student = await idToken(UID, { lyRole: "student", lySchool: "thcs-mau", lyClasses: [] });
const nobody = await idToken(UID, {});

const checks = [
  ["GV web Lý đọc tiết học Vật lí (lsnly_lessons)", await query(teacher, "lsnly_lessons"), 200],
  ["GV web Lý đọc ngân hàng câu hỏi Vật lí (lsnly_questions)", await query(teacher, "lsnly_questions"), 200],
  ["GV web Lý đọc thuật ngữ Vật lí (lsnly_terms)", await query(teacher, "lsnly_terms"), 200],
  ["HS web Lý đọc thuật ngữ đã duyệt", await query(student, "lsnly_terms", ["status", "approved"]), 200],
  ["HS web Lý bị chặn đọc ngân hàng câu hỏi (có đáp án)", await query(student, "lsnly_questions"), 403],
  ["Người chưa có quyền bị chặn đọc tiết học Vật lí", await query(nobody, "lsnly_lessons"), 403],
  ["GV web Lý bị chặn đọc dữ liệu web Sinh (lsn_lessons)", await query(teacher, "lsn_lessons"), 403],
  ["GV web Lý bị chặn đọc câu hỏi web Sinh (lsn_questions)", await query(teacher, "lsn_questions"), 403],
];
let ok = 0;
for (const [name, got, want] of checks) {
  const pass = got === want;
  ok += pass;
  console.log(`${pass ? "✔" : "✘"} ${name}: ${got}${pass ? "" : ` (mong đợi ${want})`}`);
}
console.log(`${ok}/${checks.length} đạt`);
// Dọn tài khoản thử
try {
  await auth.deleteUser(UID);
  console.log("Đã xoá tài khoản thử");
} catch (e) {
  console.log("Không xoá được tài khoản thử:", e.message);
}
