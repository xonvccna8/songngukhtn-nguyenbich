// Hình Vật lí điểm nhấn + biểu tượng 4 ô đáp án (không chỉ phân biệt bằng màu).
// Giữ tên khoá cũ cho ô A/B/C/D: triangle = tia sét · diamond = nam châm · circle = nguyên tử · square = sóng
import { Atom } from "lucide-react";
import { cn } from "cn";

export type ShapeKind = "triangle" | "diamond" | "circle" | "square";

export const SHAPE_COLORS: Record<ShapeKind, { bg: string; dk: string; text: string; label: string }> = {
  triangle: { bg: "#2F5BEA", dk: "#1E40AF", text: "#fff", label: "A" },
  diamond: { bg: "#F2545B", dk: "#B91C3C", text: "#fff", label: "B" },
  circle: { bg: "#FFB020", dk: "#C77800", text: "#0F1B3D", label: "C" },
  square: { bg: "#7C3AED", dk: "#5B21B6", text: "#fff", label: "D" },
};

/** Tên hình (đọc cho trình đọc màn hình / chú thích) */
export const SHAPE_NAME: Record<ShapeKind, string> = { triangle: "Tia sét", diamond: "Nam châm", circle: "Nguyên tử", square: "Sóng" };

export function ShapeIcon({ kind, className, color = "currentColor" }: { kind: ShapeKind; className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} aria-hidden>
      {kind === "triangle" && <path d="M13.8 1.8 L4.5 13.6 H11 L9.4 22.2 L19.5 9.8 H13 Z" fill={color} strokeLinejoin="round" />}
      {kind === "diamond" && (
        <>
          <path d="M4 3.5 H9.5 V12 A2.5 2.5 0 0 0 14.5 12 V3.5 H20 V12 A8 8 0 0 1 4 12 Z" fill={color} />
          <path d="M4 3.5 H9.5 V7 H4 Z M14.5 3.5 H20 V7 H14.5 Z" fill="#fff" opacity="0.55" />
        </>
      )}
      {kind === "circle" && (
        <>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2.8" fill={color} />
        </>
      )}
      {kind === "square" && (
        <>
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill={color} />
          <path d="M5 12 C7 7 9 7 10.5 12 S14 17 15.5 12 S18.5 7 19.5 10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        </>
      )}
    </svg>
  );
}

/** Tia sét, nam châm, nguyên tử, sóng trôi nổi làm nền trang trí */
export function FloatingShapes({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const o = tone === "dark" ? 0.22 : 0.9;
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <ShapeIcon kind="triangle" color="#FFB020" className="animate-zap absolute top-[3%] left-[2%] size-11 opacity-90" />
      <ShapeIcon kind="circle" color="#2F5BEA" className="animate-spin-slow absolute top-[16%] right-[8%] size-12" />
      <ShapeIcon kind="diamond" color="#F2545B" className="animate-float absolute bottom-[18%] left-[10%] size-9 [--r:-18deg] [animation-delay:-4s]" />
      <ShapeIcon kind="square" color="#0891B2" className="animate-breathe absolute right-[14%] bottom-[10%] size-10 [animation-delay:-1s]" />
      <Atom className="animate-spin-slow absolute top-[48%] left-[44%] size-9 text-teal opacity-30" strokeWidth={2.2} />
      <ShapeIcon kind="triangle" color="#2F5BEA" className="animate-sway absolute right-[38%] bottom-[4%] size-7 opacity-60 [--r:20deg] [animation-delay:-3s]" />
      <div className="absolute -top-24 -right-24 size-72 rounded-full bg-sun/30 blur-3xl" style={{ opacity: o }} />
      <div className="absolute -bottom-32 -left-24 size-80 rounded-full bg-blue/25 blur-3xl" style={{ opacity: o }} />
    </div>
  );
}
