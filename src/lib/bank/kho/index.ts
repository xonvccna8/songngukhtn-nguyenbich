// Ngân hàng câu hỏi dựng sẵn (kho) — Vật lí KHTN 8 (Bài 13–29). Nạp vào Firestore: npm run seed:bank
import { KHO8_CH3_4 } from "@/lib/bank/kho/khtn8-ch3-4";
import { KHO8_CH5_6 } from "@/lib/bank/kho/khtn8-ch5-6";
import type { KhoQuestion } from "@/lib/bank/kho/helpers";

export const BANK_SEED = "kho-bank-vatli8-v1";
export const KHO_BANK: KhoQuestion[] = [...KHO8_CH3_4, ...KHO8_CH5_6];

/** Mã tài liệu cố định: kho8-<bài>-<số> (vd kho8-n8-13-07) */
export const bankDocId = (q: Pick<KhoQuestion, "curLessonId" | "key">) => `kho8-${q.curLessonId}-${q.key}`;
