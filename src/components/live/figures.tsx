// Hình vẽ Vật lí cho bảng trình chiếu — các phần hiện dần theo bước (step)
import type { FigureId, Lang } from "@/lib/live/types";

interface Props {
  step: number;
  lang: Lang;
  labels?: { top?: string; left?: string };
  className?: string;
}

// Màu cố định, nổi trên nền bảng đậm
const WATER = "#4CC9DB";
const WOOD = "#E0A15A";
const ALU = "#C9D3DE";
const IRON = "#7C8794";
const FORCE = "#FF8A3D";
const UP = "#6BD58E";
const VOLT = "#FFD34D";
const HOT = "#FF6B6B";

/** Nhóm hiện khi bước hiện tại ≥ s */
function G({ s, step, children }: { s: number; step: number; children: React.ReactNode }) {
  return (
    <g className="transition-opacity duration-500" style={{ opacity: step >= s ? 1 : 0 }}>
      {children}
    </g>
  );
}

/** Nhãn song ngữ trong hình: chữ Anh thẳng, chữ Việt nghiêng mờ */
function Lbl({ x, y, en, vi, lang, anchor }: { x: number; y: number; en: string; vi: string; lang: Lang; anchor?: "start" | "middle" | "end" }) {
  return (
    <>
      {lang !== "vi" && (
        <text x={x} y={y} textAnchor={anchor} fontSize="24" fill="var(--chalk)">
          {en}
        </text>
      )}
      {lang !== "en" && (
        <text x={x} y={lang === "vi" ? y : y + 22} textAnchor={anchor} fontSize={lang === "vi" ? 24 : 18} fill={lang === "vi" ? "var(--chalk)" : "var(--chalk-dim)"} fontStyle={lang === "vi" ? "normal" : "italic"}>
          {vi}
        </text>
      )}
    </>
  );
}

/** Mũi tên lực (vector) từ (x1,y1) tới (x2,y2) */
function Vec({ x1, y1, x2, y2, color }: { x1: number; y1: number; x2: number; y2: number; color: string }) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 16;
  const p1 = `${x2 - h * Math.cos(a - 0.45)},${y2 - h * Math.sin(a - 0.45)}`;
  const p2 = `${x2 - h * Math.cos(a + 0.45)},${y2 - h * Math.sin(a + 0.45)}`;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="6" strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${p1} ${p2}`} fill={color} />
    </g>
  );
}

/** Ba khối cùng khối lượng, thể tích khác nhau (gỗ – nhôm – sắt) — tĩnh; labels.top = chú thích dưới hình */
function DensityBlocks({ labels, lang, className }: Props) {
  return (
    <svg viewBox="0 0 700 360" className={className} role="img" aria-label="Three blocks with the same mass: a big wood block, a medium aluminium block and a small iron block">
      <line x1="30" y1="260" x2="670" y2="260" stroke="var(--chalk-dim)" strokeWidth="3" />
      <rect x="50" y="80" width="200" height="180" rx="10" fill={WOOD} fillOpacity=".85" />
      <rect x="320" y="150" width="120" height="110" rx="8" fill={ALU} fillOpacity=".9" />
      <rect x="520" y="200" width="70" height="60" rx="6" fill={IRON} />
      <Lbl x={150} y={300} en="wood" vi="gỗ" lang={lang} anchor="middle" />
      <Lbl x={380} y={300} en="aluminium" vi="nhôm" lang={lang} anchor="middle" />
      <Lbl x={555} y={300} en="iron" vi="sắt" lang={lang} anchor="middle" />
      {labels?.top && (
        <text x="350" y="50" textAnchor="middle" fontSize="26" fontWeight="700" fill="var(--hi)">
          {labels.top}
        </text>
      )}
    </svg>
  );
}

/** Đo thể tích vật bằng bình chia độ: 0 bình + nước 50 · 1 thả đá · 2 mực nước 65 · 3 V = 15 cm³ */
function MeasureVolume({ step, lang, className }: Props) {
  const level = step >= 2 ? 145 : 190;
  const marks = [50, 55, 60, 65, 70, 75];
  return (
    <svg viewBox="0 0 700 390" className={className} role="img" aria-label="A measuring cylinder: the water level rises from 50 to 65 cubic centimetres when a stone is dropped in">
      <G s={0} step={step}>
        <rect x="250" y={level} width="140" height={330 - level} fill={WATER} fillOpacity=".35" className="transition-all duration-700" />
        <path d="M250 40 V330 H390 V40" fill="none" stroke="var(--chalk)" strokeWidth="5" />
        {marks.map((m, i) => (
          <g key={m}>
            <line x1="390" y1={190 - i * 15} x2="410" y2={190 - i * 15} stroke="var(--chalk-dim)" strokeWidth="2" />
            <text x="418" y={196 - i * 15} fontSize="16" fill="var(--chalk-dim)">
              {m}
            </text>
          </g>
        ))}
        <Lbl x={240} y={196} en="50 cm³" vi="50 cm³" lang="en" anchor="end" />
        <Lbl x={320} y={372} en="measuring cylinder" vi="bình chia độ" lang={lang} anchor="middle" />
      </G>
      <G s={1} step={step}>
        <path d="M285 300 C280 270 320 262 345 276 C368 290 360 318 330 320 C305 322 288 316 285 300 Z" fill={IRON} />
        <Lbl x={530} y={300} en="stone" vi="hòn đá" lang={lang} />
        <line x1="522" y1="294" x2="362" y2="296" stroke="var(--hi)" strokeWidth="2.5" />
      </G>
      <G s={2} step={step}>
        <Vec x1={470} y1={190} x2={470} y2={150} color={VOLT} />
        <Lbl x={490} y={150} en="65 cm³" vi="65 cm³" lang="en" />
      </G>
      <G s={3} step={step}>
        <text x="560" y="80" textAnchor="middle" fontSize="28" fontWeight="700" fill="var(--hi)">
          V = 65 − 50 = 15 cm³
        </text>
      </G>
    </svg>
  );
}

/** Vật nổi – vật chìm: 0 chậu nước · 1 gỗ nổi, đá chìm · 2 trọng lượng P · 3 lực đẩy FA */
function Floating({ step, lang, className }: Props) {
  return (
    <svg viewBox="0 0 700 390" className={className} role="img" aria-label="A wooden block floats and a stone sinks in water; arrows show weight and upthrust">
      <G s={0} step={step}>
        <rect x="80" y="140" width="540" height="200" fill={WATER} fillOpacity=".3" />
        <path d="M80 60 V340 H620 V60" fill="none" stroke="var(--chalk)" strokeWidth="5" />
        <Lbl x={600} y={180} en="water" vi="nước" lang={lang} anchor="end" />
      </G>
      <G s={1} step={step}>
        <rect x="170" y="110" width="120" height="60" rx="6" fill={WOOD} />
        <rect x="430" y="280" width="80" height="56" rx="10" fill={IRON} />
        <Lbl x={230} y={100} en="wood: floats" vi="gỗ: nổi" lang={lang} anchor="middle" />
        <Lbl x={470} y={264} en="stone: sinks" vi="đá: chìm" lang={lang} anchor="middle" />
      </G>
      <G s={2} step={step}>
        <Vec x1={230} y1={150} x2={230} y2={225} color={FORCE} />
        <text x="244" y="222" fontSize="26" fontWeight="700" fill={FORCE}>
          P
        </text>
      </G>
      <G s={3} step={step}>
        <Vec x1={200} y1={170} x2={200} y2={92} color={UP} />
        <text x="140" y="110" fontSize="26" fontWeight="700" fill={UP}>
          F
        </text>
        <text x="156" y="118" fontSize="16" fontWeight="700" fill={UP}>
          A
        </text>
      </G>
    </svg>
  );
}

/** Đòn bẩy: 0 thanh + điểm tựa · 1 lực tác dụng F₁, d₁ · 2 lực cản F₂, d₂ */
function Lever({ step, lang, className }: Props) {
  return (
    <svg viewBox="0 0 700 390" className={className} role="img" aria-label="A lever on a pivot with an effort on one side and a load on the other">
      <G s={0} step={step}>
        <rect x="60" y="200" width="580" height="16" rx="8" fill={WOOD} />
        <polygon points="250,216 220,290 280,290" fill="var(--chalk)" />
        <Lbl x={250} y={325} en="pivot (O)" vi="điểm tựa (O)" lang={lang} anchor="middle" />
      </G>
      <G s={1} step={step}>
        <Vec x1={600} y1={110} x2={600} y2={196} color={FORCE} />
        <text x="612" y="140" fontSize="26" fontWeight="700" fill={FORCE}>
          F₁
        </text>
        <path d="M250 245 H600" stroke={FORCE} strokeWidth="2.5" strokeDasharray="8 6" />
        <text x="425" y="270" textAnchor="middle" fontSize="22" fill={FORCE}>
          d₁
        </text>
        <Lbl x={600} y={90} en="effort" vi="lực tác dụng" lang={lang} anchor="middle" />
      </G>
      <G s={2} step={step}>
        <rect x="80" y="140" width="80" height="60" rx="8" fill={IRON} />
        <Vec x1={120} y1={210} x2={120} y2={290} color={UP} />
        <text x="134" y="285" fontSize="26" fontWeight="700" fill={UP}>
          F₂
        </text>
        <path d="M120 180 H250" stroke={UP} strokeWidth="2.5" strokeDasharray="8 6" />
        <text x="185" y="172" textAnchor="middle" fontSize="22" fill={UP}>
          d₂
        </text>
        <Lbl x={120} y={120} en="load" vi="lực cản" lang={lang} anchor="middle" />
        <text x="470" y="60" textAnchor="middle" fontSize="28" fontWeight="700" fill="var(--hi)">
          F₁·d₁ = F₂·d₂
        </text>
      </G>
    </svg>
  );
}

/** Mạch điện đơn giản: 0 nguồn · 1 dây + công tắc · 2 bóng đèn · 3 chiều dòng điện */
function Circuit({ step, lang, className }: Props) {
  const on = step >= 3;
  return (
    <svg viewBox="0 0 700 390" className={className} role="img" aria-label="A simple circuit with a cell, a switch, a lamp and the direction of the current">
      <G s={0} step={step}>
        <line x1="320" y1="300" x2="320" y2="340" stroke="var(--chalk)" strokeWidth="6" />
        <line x1="345" y1="310" x2="345" y2="330" stroke="var(--chalk)" strokeWidth="10" />
        <text x="306" y="296" fontSize="22" fill="var(--hi)">
          +
        </text>
        <text x="352" y="300" fontSize="22" fill="var(--hi)">
          −
        </text>
        <Lbl x={332} y={375} en="cell" vi="pin (nguồn điện)" lang={lang} anchor="middle" />
      </G>
      <G s={1} step={step}>
        <path d="M320 320 H120 V80 H260" fill="none" stroke="var(--chalk)" strokeWidth="4" />
        <path d="M345 320 H580 V80 H440" fill="none" stroke="var(--chalk)" strokeWidth="4" />
        <circle cx="260" cy="80" r="6" fill="var(--chalk)" />
        <circle cx="330" cy="80" r="6" fill="var(--chalk)" />
        <line x1="260" y1="80" x2={step >= 2 ? 330 : 322} y2={step >= 2 ? 80 : 50} stroke="var(--chalk)" strokeWidth="4" className="transition-all duration-500" />
        <line x1="330" y1="80" x2="370" y2="80" stroke="var(--chalk)" strokeWidth="4" />
        <Lbl x={295} y={40} en="switch" vi="công tắc" lang={lang} anchor="middle" />
      </G>
      <G s={2} step={step}>
        <circle cx="405" cy="80" r="34" fill={on ? VOLT : "none"} fillOpacity=".5" stroke="var(--chalk)" strokeWidth="4" />
        <path d="M381 56 L429 104 M429 56 L381 104" stroke="var(--chalk)" strokeWidth="4" />
        <line x1="370" y1="80" x2="371" y2="80" stroke="var(--chalk)" strokeWidth="4" />
        <Lbl x={405} y={150} en="lamp" vi="bóng đèn" lang={lang} anchor="middle" />
      </G>
      <G s={3} step={step}>
        <Vec x1={120} y1={250} x2={120} y2={150} color={VOLT} />
        <Vec x1={580} y1={130} x2={580} y2={240} color={VOLT} />
        <Lbl x={620} y={210} en="current" vi="dòng điện" lang={lang} anchor="start" />
      </G>
    </svg>
  );
}

/** Ba cách truyền nhiệt khi đun nồi nước: 0 bếp + nồi · 1 dẫn nhiệt (quai) · 2 đối lưu · 3 bức xạ */
function HeatTransfer({ step, lang, className }: Props) {
  return (
    <svg viewBox="0 0 700 390" className={className} role="img" aria-label="Heating a pot of water: conduction through the handle, convection currents in the water and radiation from the flame">
      <G s={0} step={step}>
        <rect x="200" y="120" width="260" height="170" rx="10" fill={WATER} fillOpacity=".3" stroke="var(--chalk)" strokeWidth="5" />
        <path d="M250 330 C235 305 262 300 255 280 C278 300 285 315 270 330 Z M325 330 C305 300 340 290 330 268 C362 292 368 315 348 330 Z M405 330 C390 305 417 300 410 280 C433 300 440 315 425 330 Z" fill={HOT} />
        <Lbl x={330} y={370} en="flame" vi="ngọn lửa" lang={lang} anchor="middle" />
      </G>
      <G s={1} step={step}>
        <rect x="460" y="140" width="150" height="16" rx="8" fill={IRON} />
        <Vec x1={470} y1={130} x2={600} y2={130} color={FORCE} />
        <Lbl x={540} y={110} en="conduction" vi="dẫn nhiệt" lang={lang} anchor="middle" />
      </G>
      <G s={2} step={step}>
        <path d="M290 270 V160 M290 160 C290 140 370 140 370 160 M370 160 V270" fill="none" stroke={HOT} strokeWidth="4" strokeDasharray="10 6" />
        <Vec x1={290} y1={220} x2={290} y2={170} color={HOT} />
        <Vec x1={370} y1={170} x2={370} y2={240} color={WATER} />
        <Lbl x={330} y={210} en="convection" vi="đối lưu" lang={lang} anchor="middle" />
      </G>
      <G s={3} step={step}>
        <path d="M150 320 q-12 -12 0 -24 q12 -12 0 -24 q-12 -12 0 -24" fill="none" stroke={VOLT} strokeWidth="4" />
        <path d="M110 320 q-12 -12 0 -24 q12 -12 0 -24 q-12 -12 0 -24" fill="none" stroke={VOLT} strokeWidth="4" />
        <Lbl x={130} y={230} en="radiation" vi="bức xạ nhiệt" lang={lang} anchor="middle" />
      </G>
    </svg>
  );
}

export function Figure({ id, ...p }: Props & { id: FigureId }) {
  switch (id) {
    case "density-blocks":
      return <DensityBlocks {...p} />;
    case "measure-volume":
      return <MeasureVolume {...p} />;
    case "floating":
      return <Floating {...p} />;
    case "lever":
      return <Lever {...p} />;
    case "circuit":
      return <Circuit {...p} />;
    case "heat-transfer":
      return <HeatTransfer {...p} />;
    default:
      // Hình của các phiên bản cũ đã bỏ → không vẽ gì
      return null;
  }
}
