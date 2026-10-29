"use client";

// Bộ dựng slide PowerPoint dùng chung (bảng màu "Phòng thí nghiệm Vật lí", khung trang, ô đáp án A–D, bìa, trang kết).
// Dùng cho: bài giảng từ Vở ghi (lib/notebook/pptx.ts) và bài giảng GV tự soạn (lib/lessons/pptx.ts).
import type PptxGenJS from "pptxgenjs";
import { plain, richParts } from "@/lib/notebook";

export type Pptx = PptxGenJS;
export type Slide = PptxGenJS.Slide;
export type Run = PptxGenJS.TextProps;

// Bảng màu "Phòng thí nghiệm Vật lí" (docs/GIAO-DIEN.md). Giữ tên khoá cũ: green = màu chính (xanh điện)
export const C = {
  ink: "0F1B3D",
  grey: "4A5878",
  paper: "F4F7FF",
  line: "CFD9EE",
  green: "2F5BEA",
  greenDk: "1E40AF",
  greenSoft: "E3EBFF",
  sun: "FFB020",
  sunSoft: "FFF3D6",
  coral: "F2545B",
  coralSoft: "FFE4E6",
  blue: "0891B2",
  white: "FFFFFF",
};
/** Màu 4 ô A B C D — giống trò chơi trên điện thoại */
export const OPT = [C.green, C.coral, "C77800", "7C3AED"];
export const LETTERS = ["A", "B", "C", "D"] as const;
export const FONT = "Arial";
export const W = 13.333;
export const H = 7.5;
export const X0 = 0.6;
export const CW = W - 2 * X0;
export const BODY = { x: X0, y: 1.9, w: CW, h: H - 2.5 };
const MASTER = "LSN";

export interface Ctx {
  pptx: Pptx;
  footer: string;
}

/** Bộ slide mới 16:9 (đã khai báo trang nền chung) */
export async function newDeck(title: string, footer: string, subject: string): Promise<Ctx> {
  const { default: PptxGenJSCtor } = await import("pptxgenjs");
  const pptx = new PptxGenJSCtor();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Song Ngữ Vật Lí";
  pptx.title = title;
  pptx.subject = subject;
  // Nền + dải màu trái chung cho mọi trang nội dung (kể cả trang bảng tự ngắt sang trang mới)
  pptx.defineSlideMaster({ title: MASTER, background: { color: C.paper }, objects: [{ rect: { x: 0, y: 0, w: 0.22, h: H, fill: { color: C.green } } }] });
  return { pptx, footer };
}

/** Chữ có **đậm** → các đoạn chữ của PowerPoint */
export const rich = (s: string, o: PptxGenJS.TextPropsOptions = {}): Run[] => richParts(s).map((x) => ({ text: x.text, options: { ...o, bold: o.bold || x.bold } }));

/** Ghép các đoạn thành các dòng gạch đầu dòng.
 *  PowerPoint (pptxgenjs) mở đoạn mới ở mỗi chữ có "bullet" → chỉ gắn bullet cho chữ đầu dòng. */
export function bullets(items: Run[][], o: PptxGenJS.TextPropsOptions = {}): Run[] {
  const { bullet = { code: "25CF" }, ...rest } = o;
  return items.flatMap((runs, i) =>
    runs.map((r, j) => {
      const ro = { ...r.options };
      delete ro.bullet;
      const end = j === runs.length - 1 && i < items.length - 1;
      return { text: r.text, options: { ...rest, ...ro, ...(j === 0 && bullet ? { bullet } : {}), paraSpaceAfter: 8, breakLine: end || !!ro.breakLine } };
    })
  );
}

/** Chia danh sách thành các trang theo "độ dài" ước lượng (số dòng) */
export function paginate<T>(items: T[], weight: (x: T) => number, max: number): T[][] {
  const pages: T[][] = [[]];
  let used = 0;
  items.forEach((x) => {
    const w = weight(x);
    if (used + w > max && pages[pages.length - 1].length) {
      pages.push([]);
      used = 0;
    }
    pages[pages.length - 1].push(x);
    used += w;
  });
  return pages.filter((p) => p.length);
}

/** Số dòng ước lượng của một đoạn chữ cỡ ~20pt trên khổ rộng */
export const lines = (s: string, perLine = 88) => Math.max(1, Math.ceil(plain(s).length / perLine)) + 0.35;

/** Khung trang nội dung: dải màu bên trái, tiêu đề Việt (đậm) + Anh (xanh), chân trang, ghi chú GV */
export function frame(c: Ctx, vi: string, en: string, tag?: string, notes?: string): Slide {
  const s = c.pptx.addSlide({ masterName: MASTER });
  if (tag) s.addText(tag.toUpperCase(), { x: X0, y: 0.3, w: CW, h: 0.3, fontFace: FONT, fontSize: 11, bold: true, color: C.green, charSpacing: 2 });
  s.addText(
    [
      { text: vi || en, options: { fontSize: 30, bold: true, color: C.ink, breakLine: true } },
      { text: vi ? en : "", options: { fontSize: 18, color: C.greenDk } },
    ],
    { x: X0, y: tag ? 0.55 : 0.35, w: CW, h: 1.05, fontFace: FONT, valign: "top", margin: 0, fit: "shrink" }
  );
  s.addShape(c.pptx.ShapeType.line, { x: X0, y: 1.68, w: CW, h: 0, line: { color: C.line, width: 1.5 } });
  s.addText(c.footer, { x: X0, y: H - 0.45, w: CW - 1, h: 0.3, fontFace: FONT, fontSize: 10, color: C.grey });
  s.slideNumber = { x: W - 1.0, y: H - 0.45, w: 0.6, h: 0.3, fontFace: FONT, fontSize: 10, color: C.grey, align: "right" };
  if (notes) s.addNotes(notes);
  return s;
}

/** Trang bìa nền tối */
export function cover(c: Ctx, o: { kicker: string; vi: string; en: string; badge: string; sub: string; notes: string }) {
  const s = c.pptx.addSlide();
  s.background = { color: C.ink };
  // Họa tiết nguyên tử: hạt nhân + vòng quỹ đạo electron
  const atoms: [number, number, number, string][] = [
    [10.6, 0.6, 2.6, C.green],
    [11.8, 4.6, 1.6, C.sun],
    [9.4, 5.6, 1.1, C.coral],
  ];
  atoms.forEach(([x, y, d, col]) => {
    s.addShape(c.pptx.ShapeType.ellipse, { x, y: y + d * 0.32, w: d, h: d * 0.36, fill: { color: col, transparency: 100 }, line: { color: col, width: 2 } });
    s.addShape(c.pptx.ShapeType.ellipse, { x: x + d * 0.32, y, w: d * 0.36, h: d, fill: { color: col, transparency: 100 }, line: { color: col, width: 2 } });
    s.addShape(c.pptx.ShapeType.ellipse, { x: x + d * 0.4, y: y + d * 0.4, w: d * 0.2, h: d * 0.2, fill: { color: col, transparency: 10 }, line: { color: col, width: 0 } });
  });
  s.addText(o.kicker.toUpperCase(), { x: 0.8, y: 1.1, w: 9, h: 0.4, fontFace: FONT, fontSize: 14, bold: true, color: C.sun, charSpacing: 1 });
  s.addText(
    [
      { text: o.vi || o.en, options: { fontSize: 44, bold: true, color: C.white, breakLine: true } },
      { text: o.vi ? o.en : "", options: { fontSize: 26, color: "9DB8FF" } },
    ],
    { x: 0.8, y: 1.7, w: 9.2, h: 2.8, fontFace: FONT, valign: "top", margin: 0, fit: "shrink" }
  );
  s.addShape(c.pptx.ShapeType.roundRect, { x: 0.8, y: 5.2, w: 4.6, h: 0.6, fill: { color: C.sun }, line: { color: C.sun }, rectRadius: 0.5 });
  s.addText(o.badge, { x: 0.8, y: 5.2, w: 4.6, h: 0.6, fontFace: FONT, fontSize: 16, bold: true, color: C.ink, align: "center", valign: "middle" });
  s.addText(o.sub, { x: 0.8, y: 5.95, w: 8, h: 0.4, fontFace: FONT, fontSize: 13, color: "B8C6E6" });
  s.addNotes(o.notes);
}

/** Câu hỏi trắc nghiệm: đề + 2–4 ô đáp án; reveal = tô xanh ô đúng, làm mờ ô sai */
export function choiceBoxes(c: Ctx, s: Slide, prompt: Run[], options: Run[][], answer: number | undefined, reveal: boolean) {
  s.addText(prompt, { x: X0, y: 1.85, w: CW, h: 1.3, fontFace: FONT, valign: "middle", fit: "shrink" });
  options.slice(0, 4).forEach((opt, j) => {
    const two = options.length <= 2;
    const x = X0 + (j % 2) * (CW / 2 + 0.1);
    const y = two ? 3.8 : 3.35 + Math.floor(j / 2) * 1.6;
    const w = CW / 2 - 0.1;
    const right = j === answer;
    const dim = reveal && !right;
    s.addShape(c.pptx.ShapeType.roundRect, { x, y, w, h: 1.4, fill: { color: reveal && right ? C.greenSoft : C.white }, line: { color: reveal && right ? C.green : C.line, width: reveal && right ? 3 : 1.5 }, rectRadius: 0.12 });
    s.addText(LETTERS[j], { x: x + 0.2, y: y + 0.3, w: 0.8, h: 0.8, shape: c.pptx.ShapeType.roundRect, rectRadius: 0.2, fill: { color: OPT[j], transparency: dim ? 60 : 0 }, fontFace: FONT, fontSize: 24, bold: true, color: C.white, align: "center", valign: "middle" });
    s.addText(
      opt.map((r) => ({ text: r.text, options: { ...r.options, color: dim ? "9AA8C7" : r.options?.color, bold: (reveal && right) || r.options?.bold } })),
      { x: x + 1.15, y: y + 0.1, w: w - 1.3, h: 1.2, fontFace: FONT, valign: "middle", fit: "shrink" }
    );
    if (reveal && right) s.addText("✓", { x: x + w - 0.75, y: y + 0.1, w: 0.6, h: 0.6, fontFace: FONT, fontSize: 28, bold: true, color: C.green, align: "center" });
  });
}

/** Ô "Đáp án" lớn (câu nhập số / gõ chữ / luyện nói) */
export function answerBox(c: Ctx, s: Slide, label: string, text: string, y = 4.2) {
  s.addShape(c.pptx.ShapeType.roundRect, { x: X0, y, w: CW, h: 1.3, fill: { color: C.greenSoft }, line: { color: C.green, width: 2 }, rectRadius: 0.12 });
  s.addText(
    [
      { text: `${label}  `, options: { fontSize: 18, color: C.grey } },
      { text, options: { fontSize: 28, bold: true, color: C.greenDk } },
    ],
    { x: X0 + 0.3, y, w: CW - 0.6, h: 1.3, fontFace: FONT, valign: "middle", fit: "shrink" }
  );
}

/** Trang kết: cảm ơn + nhiệm vụ về nhà */
export function closing(c: Ctx, homework: string, notes: string) {
  const s = c.pptx.addSlide();
  s.background = { color: C.ink };
  s.addText(
    [
      { text: "Cảm ơn các em!", options: { fontSize: 48, bold: true, color: C.white, breakLine: true } },
      { text: "Thank you, class!", options: { fontSize: 28, color: "9DB8FF" } },
    ],
    { x: 0.8, y: 1.6, w: W - 1.6, h: 2.2, fontFace: FONT, align: "center", valign: "middle" }
  );
  s.addShape(c.pptx.ShapeType.roundRect, { x: 2.4, y: 4.4, w: W - 4.8, h: 1.5, fill: { color: "1C2B57" }, line: { color: C.sun, width: 1.5 }, rectRadius: 0.15 });
  s.addText(
    [
      { text: "Nhiệm vụ về nhà · Homework", options: { bold: true, color: C.sun, fontSize: 18, breakLine: true } },
      { text: homework, options: { color: C.white, fontSize: 16 } },
    ],
    { x: 2.6, y: 4.4, w: W - 5.2, h: 1.5, fontFace: FONT, align: "center", valign: "middle" }
  );
  s.addNotes(notes);
}

/** Tên file an toàn (bỏ kí tự Windows không cho phép) */
export const safeName = (s: string) => s.replace(/[\\/:*?"<>|]+/g, "").replace(/\s+/g, " ").trim().slice(0, 80);

/** Ghi bộ slide ra file .pptx và tải về máy */
export async function downloadDeck(c: Ctx, fileName: string) {
  const blob = (await c.pptx.write({ outputType: "blob" })) as Blob;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}
