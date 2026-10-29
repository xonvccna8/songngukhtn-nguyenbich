// Project Firebase dùng CHUNG với các app khác (Auth + Firestore) → mọi dữ liệu của
// Song Ngữ Vật Lí đều có tiền tố "lsnly_" (claims "ly*") để không đụng chạm dữ liệu/quyền của app khác,
// kể cả web Sinh (tiền tố "lsn_", claims "lsn*") đang chạy trên cùng project.
import type { Claims, Role } from "@/lib/types";

/** Tên bộ sưu tập Firestore */
export const COL = {
  schools: "lsnly_schools",
  users: "lsnly_users",
  classes: "lsnly_classes",
  /** bộ sưu tập con của lsnly_classes/{id} */
  students: "students",
  private: "lsnly_private",
  stats: "lsnly_studentStats",
  /** Tiết học: lsnly_lessons/{id} + slides/{slideId} (HS đọc được) + teacher/{slideId} (đáp án, chỉ GV) */
  lessons: "lsnly_lessons",
  slides: "slides",
  teacherKeys: "teacher",
  /** Phiên dạy: lsnly_sessions/{id} + participants/{uid} + responses/{uid}~{slideId} */
  sessions: "lsnly_sessions",
  participants: "participants",
  responses: "responses",
  /** Phiếu của từng em: lsnly_sessions/{id}/mine/{uid} — câu đã gửi + kết quả câu ĐÃ CÔNG BỐ (máy chủ ghi) */
  mine: "mine",
  /** Bộ đếm số em trả lời đúng mỗi câu (xếp hạng thưởng tốc độ, chỉ máy chủ): lsnly_sessions/{id}/qstats/{slideId} */
  qstats: "qstats",
  /** Tin nhắn GV → HS: lsnly_messages/{id} + receipts/{uid} (biên nhận của từng em) */
  messages: "lsnly_messages",
  receipts: "receipts",
  /** Mã thiết bị nhận thông báo đẩy: lsnly_fcmTokens/{uid}/tokens/{id} */
  fcmTokens: "lsnly_fcmTokens",
  tokens: "tokens",
  /** GĐ 5 — Bài tập về nhà: lsnly_assignments/{id} + submissions/{uid} (chỉ máy chủ ghi) */
  assignments: "lsnly_assignments",
  submissions: "submissions",
  /** Thời gian học thật theo ngày: lsnly_studyDaily/{uid}_{yyyymmdd} */
  studyDaily: "lsnly_studyDaily",
  /** Thẻ từ vựng (lịch ôn lặp ngắt quãng) của từng em: lsnly_cards/{uid} */
  cards: "lsnly_cards",
  /** Ngân hàng thuật ngữ: lsnly_terms/{id} */
  terms: "lsnly_terms",
  /** GĐ 6b — số lượt dùng trợ lý AI theo ngày: lsnly_aiUsage/{uid}_{ngày} (chỉ máy chủ) */
  aiUsage: "lsnly_aiUsage",
  /** GĐ 3 mới — sự kiện học tập (mỗi lần cộng XP / lên cấp), chỉ máy chủ ghi: lsnly_events/{id} */
  events: "lsnly_events",
  /** Điểm thi đua tuần của lớp (1 tài liệu/lớp/tuần): lsnly_weekly/{classId}_{yyyy-Www} */
  weekly: "lsnly_weekly",
  /** GĐ 4 — học liệu do GV thêm (link GeoGebra / video / phiếu học tập): lsnly_resources/{id} */
  resources: "lsnly_resources",
  /** GĐ 5 — trò chơi: lsnly_games/{id} + live/board + players/{uid} + private/key (src/lib/games/types.ts) */
  games: "lsnly_games",
  gameLive: "live",
  gamePlayers: "players",
  gamePrivate: "private",
  /** Ngân hàng câu hỏi: lsnly_questions/{id} (đề + đáp án — chỉ GV đọc; HS nhận câu qua bài tập) */
  questions: "lsnly_questions",
  /** Dự án STEM theo tổ: lsnly_projects/{id} + teams/{số tổ} (máy chủ ghi) */
  projects: "lsnly_projects",
  projectTeams: "teams",
  /** Cộng đồng học tập (hỏi – đáp trong lớp, GV duyệt): lsnly_posts/{id} + replies/{id} */
  posts: "lsnly_posts",
  replies: "replies",
  /** Trợ lý học tập AI: nhật kí trò chuyện mỗi em mỗi ngày lsnly_tutor/{uid}_{ngày} (chỉ máy chủ đọc/ghi; GV xem qua API) */
  tutor: "lsnly_tutor",
} as const;

/** ID câu trả lời: mỗi em một câu trả lời cho mỗi trang */
export const responseId = (uid: string, slideId: string) => `${uid}~${slideId}`;

/** Tên custom claims (app khác đã dùng "role", "schoolId" — không được ghi đè) */
export const CLAIM = { role: "lyRole", school: "lySchool", classes: "lyClasses" } as const;

export function readClaims(raw: Record<string, unknown> | undefined | null): Claims {
  const r = raw ?? {};
  return {
    role: r[CLAIM.role] as Role | undefined,
    schoolId: r[CLAIM.school] as string | undefined,
    classIds: (r[CLAIM.classes] as string[] | undefined) ?? [],
  };
}

export function toClaims(c: Claims): Record<string, unknown> {
  return { [CLAIM.role]: c.role, [CLAIM.school]: c.schoolId, [CLAIM.classes]: c.classIds ?? [] };
}
