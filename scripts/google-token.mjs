// Lấy access token Google cho script đăng rules / tạo chỉ mục:
// 1) phiên Firebase CLI (npx firebase login) nếu có; 2) nếu chưa đăng nhập → dùng tài khoản dịch vụ FIREBASE_ADMIN_* trong .env.local.
import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

/** { token, cli }: cli = token của phiên Firebase CLI (cần header x-goog-user-project); tài khoản dịch vụ thì không cần */
export async function googleToken() {
  const file = join(homedir(), ".config", "configstore", "firebase-tools.json");
  const refresh = existsSync(file) ? JSON.parse(readFileSync(file, "utf8")).tokens?.refresh_token : undefined;
  if (refresh) {
    const tok = await (
      await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refresh,
          // client công khai của Firebase CLI
          client_id: "563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com",
          client_secret: "j9iVZfS8kkCEFUPaAeJV0sAi",
        }),
      })
    ).json();
    if (tok.access_token) return { token: tok.access_token, cli: true };
  }
  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!projectId || !clientEmail || !privateKey) throw new Error("Chưa đăng nhập Firebase CLI (npx firebase login) và thiếu FIREBASE_ADMIN_* trong .env.local");
  const { cert } = await import("firebase-admin/app");
  return { token: (await cert({ projectId, clientEmail, privateKey }).getAccessToken()).access_token, cli: false };
}
