// Linh vật "Tia": một bóng đèn sáng có dây tóc tia sét và electron bay quanh (chủ đề Vật lí — KHTN).
// Giữ tên component `Tam` để các trang đang dùng không phải sửa.
import { cn } from "cn";

type Mood = "happy" | "cheer" | "alert" | "calm" | "sleepy";

const INK = "#0F1B3D";

export function Tam({ mood = "happy", className, title = "Tia" }: { mood?: Mood; className?: string; title?: string }) {
  const lit = mood !== "sleepy";
  return (
    <svg viewBox="0 0 120 120" className={cn("size-24", className)} role="img" aria-label={title}>
      <defs>
        <radialGradient id="tia-glass" cx="42%" cy="35%" r="70%">
          <stop offset="0%" stopColor={lit ? "#FFF6D1" : "#E8ECF7"} />
          <stop offset="55%" stopColor={lit ? "#FFD45C" : "#C9D3E8"} />
          <stop offset="100%" stopColor={lit ? "#FFA51F" : "#9AA8C7"} />
        </radialGradient>
        <radialGradient id="tia-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD45C" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FFD45C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Bóng dưới chân */}
      <ellipse cx="60" cy="114" rx="26" ry="4" fill={INK} opacity="0.12" />

      {/* Quầng sáng */}
      {lit && <circle cx="60" cy="52" r="56" fill="url(#tia-glow)" className="animate-breathe" />}

      {/* Quỹ đạo + electron bay quanh */}
      <g className="animate-spin-slow" style={{ transformOrigin: "60px 52px", transformBox: "view-box" }}>
        <ellipse cx="60" cy="52" rx="54" ry="16" fill="none" stroke="#5B8CFF" strokeWidth="2.5" strokeDasharray="6 7" opacity="0.7" transform="rotate(-18 60 52)" />
        <circle cx="111" cy="36" r="5" fill="#2F5BEA" />
        <circle cx="9" cy="68" r="4" fill="#0891B2" />
      </g>

      {/* Đuôi đèn (đui xoáy) */}
      <rect x="45" y="88" width="30" height="8" rx="3" fill="#8D9BBC" />
      <rect x="47" y="96" width="26" height="7" rx="3" fill="#6F7EA3" />
      <path d="M52 103 h16 l-4 6 h-8 Z" fill="#4A5878" />

      {/* Bầu thuỷ tinh */}
      <path d="M60 10 C35 10 20 28 20 49 C20 64 30 72 38 80 C42 84 45 86 45 89 H75 C75 86 78 84 82 80 C90 72 100 64 100 49 C100 28 85 10 60 10 Z" fill="url(#tia-glass)" stroke={INK} strokeWidth="3.5" />
      {/* Ánh phản chiếu */}
      <path d="M34 36 Q40 24 52 20" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.65" />

      {/* Dây tóc tia sét */}
      <path d="M58 70 L54 80 M62 70 L66 80" stroke={INK} strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />

      {mood === "cheer" && (
        <g stroke="#FFB020" strokeWidth="4" strokeLinecap="round" className="animate-zap">
          <path d="M14 22 l-8 -6" />
          <path d="M8 44 l-8 0" />
          <path d="M106 22 l8 -6" />
          <path d="M112 44 l8 0" />
        </g>
      )}

      {/* Mắt */}
      {mood === "sleepy" ? (
        <g stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M40 50 q6 5 12 0" />
          <path d="M68 50 q6 5 12 0" />
        </g>
      ) : (
        <g className="animate-blink">
          <circle cx="46" cy="48" r={mood === "alert" ? 11 : 9.5} fill="#fff" />
          <circle cx="74" cy="48" r={mood === "alert" ? 11 : 9.5} fill="#fff" />
          <circle cx={mood === "calm" ? 46 : 47.5} cy="49" r="5" fill={INK} />
          <circle cx={mood === "calm" ? 74 : 75.5} cy="49" r="5" fill={INK} />
          <circle cx="49" cy="46.5" r="1.6" fill="#fff" />
          <circle cx="77" cy="46.5" r="1.6" fill="#fff" />
        </g>
      )}

      {/* Má hồng */}
      {(mood === "happy" || mood === "cheer") && (
        <g fill="#FF8A5B" opacity="0.6">
          <ellipse cx="34" cy="62" rx="5" ry="3" />
          <ellipse cx="86" cy="62" rx="5" ry="3" />
        </g>
      )}

      {/* Miệng */}
      {mood === "happy" && <path d="M51 63 Q60 72 69 63" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />}
      {mood === "cheer" && <path d="M49 62 Q60 78 71 62 Z" fill={INK} stroke={INK} strokeWidth="3" strokeLinejoin="round" />}
      {mood === "alert" && <ellipse cx="60" cy="67" rx="5" ry="6" fill={INK} />}
      {mood === "calm" && <path d="M53 65 h14" stroke={INK} strokeWidth="4" strokeLinecap="round" />}
      {mood === "sleepy" && <path d="M54 65 Q60 69 66 65" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />}
    </svg>
  );
}
