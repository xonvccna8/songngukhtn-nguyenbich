import Link from "next/link";
import {
  ArrowRight,
  Atom,
  AudioWaveform,
  BarChart3,
  BatteryCharging,
  BellRing,
  BookOpen,
  ChevronRight,
  Database,
  FileText,
  Flame,
  FlaskConical,
  Gauge,
  Languages,
  Lightbulb,
  Magnet,
  MonitorPlay,
  Orbit,
  Ruler,
  Scale,
  Smartphone,
  Sparkles,
  Sun,
  Thermometer,
  Users,
  Zap,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { Tam } from "@/components/brand/tam";
import { FloatingShapes, SHAPE_COLORS, ShapeIcon, type ShapeKind } from "@/components/brand/shapes";
import { cn } from "cn";
import { APP_DESCRIPTION, SUBJECT } from "@/lib/subject";

const ANSWERS: { kind: ShapeKind; en: string }[] = [
  { kind: "triangle", en: "pascal" },
  { kind: "diamond", en: "newton" },
  { kind: "circle", en: "joule" },
  { kind: "square", en: "volt" },
];

/** Công thức trôi nổi trên nền hero */
const FLOATING_FORMULAS = [
  { f: "D = m/V", cls: "top-[16%] right-[44%] rotate-[-6deg] hidden xl:block" },
  { f: "p = F/S", cls: "top-[22%] right-[3%] rotate-[5deg]" },
  { f: "M = F·d", cls: "bottom-[24%] left-[2%] rotate-[4deg] hidden md:block" },
  { f: "I = U/R", cls: "bottom-[8%] right-[40%] rotate-[-4deg] hidden lg:block" },
  { f: "v = s/t", cls: "top-[4%] right-[34%] rotate-[3deg] hidden lg:block" },
];

const FEATURES = [
  {
    icon: MonitorPlay,
    color: "bg-blue",
    title: "Một nút Tiếp cho cả tiết",
    en: "One button runs the lesson",
    text: "Hiện từng bước, mở câu hỏi, khoá, công bố đáp án — bằng phím Space hay bút trình chiếu.",
  },
  {
    icon: Smartphone,
    color: "bg-coral",
    title: "Tivi · Laptop · Điện thoại",
    en: "Three screens in sync",
    text: "Điện thoại học sinh hiện đúng nội dung trên tivi, tự chuyển sang chế độ trả lời khi câu hỏi mở.",
  },
  {
    icon: Languages,
    color: "bg-teal",
    title: "Song ngữ có phát âm",
    en: "Bilingual, with pronunciation",
    text: "Thuật ngữ, công thức, đơn vị kèm cách đọc tiếng Anh và nút nghe; thầy cô Vật lí không cần giỏi tiếng Anh vẫn dạy tự tin.",
  },
  {
    icon: BarChart3,
    color: "bg-sun",
    title: "Theo dõi từng em",
    en: "Every student, in real time",
    text: "Ai đang học, ai rời trang, đúng sai phần Khoa học hay phần Ngôn ngữ — thấy ngay trên laptop.",
  },
];

/** 8 chức năng chính — mỗi ô dẫn tới nơi dùng thật */
const MAIN_FEATURES = [
  {
    icon: BookOpen,
    from: "#2F5BEA",
    to: "#1E3A8A",
    vi: "Bài học song ngữ",
    en: "Bilingual lessons",
    text: "Bài giảng hai cột Việt – Anh, hình vẽ Vật lí hiện từng bước, công tắc Anh / Song ngữ / Việt; dạy trên tivi, HS trả lời bằng điện thoại.",
  },
  {
    icon: FlaskConical,
    from: "#0891B2",
    to: "#2563EB",
    vi: "Phòng thí nghiệm ảo",
    en: "Virtual physics lab",
    text: "Hơn 30 mô phỏng PhET lớp 6–9: khối lượng riêng, áp suất, mạch điện, đòn bẩy, truyền nhiệt… đổi giao diện Anh/Việt, có nhiệm vụ song ngữ.",
  },
  {
    icon: Sparkles,
    from: "#7C3AED",
    to: "#4F46E5",
    vi: "Bài tập AI tương tác",
    en: "AI-powered practice",
    text: "AI soạn câu hỏi song ngữ theo yêu cầu cần đạt; HS làm trên điện thoại, chấm ngay, gợi ý 3 tầng, AI chấm phát âm.",
  },
  {
    icon: Database,
    from: "#EA580C",
    to: "#F59E0B",
    vi: "Ngân hàng câu hỏi",
    en: "Question bank",
    text: "Câu hỏi tính toán và lí thuyết gắn bài SGK, YCCĐ, mức Biết / Hiểu / Vận dụng (TT 22); giao bài 1 chạm, xuất đề Word kèm đáp án.",
  },
  {
    icon: Lightbulb,
    from: "#F2545B",
    to: "#F97316",
    vi: "Dự án STEM",
    en: "STEM projects",
    text: "Máy nén thuỷ lực, cần cẩu nam châm điện, pin trái cây… mỗi tổ một sản phẩm theo 6 bước thiết kế kĩ thuật, chấm rubric 4 tiêu chí.",
  },
  {
    icon: FileText,
    from: "#0E7490",
    to: "#0D9488",
    vi: "Tạo giáo án song ngữ",
    en: "Bilingual lesson plans",
    text: "Soạn theo CV 5512 + khung 4C, AI gợi ý phần tiếng Anh từ giáo án tiếng Việt, xuất Word / PowerPoint, quy trình duyệt bài.",
  },
  {
    icon: BarChart3,
    from: "#F59E0B",
    to: "#EAB308",
    vi: "Đánh giá – Theo dõi tiến độ",
    en: "Assessment & progress",
    text: "Ai đang học, đúng sai phần Khoa học / Ngôn ngữ, Sao thành thạo theo YCCĐ, XP – cấp độ, bảng điểm xuất Excel.",
  },
  {
    icon: Users,
    from: "#4F46E5",
    to: "#7C3AED",
    vi: "Cộng đồng học tập",
    en: "Learning community",
    text: "Góc hỏi – đáp của lớp có thầy cô kiểm duyệt, khung câu giúp hỏi bằng tiếng Anh, thưởng XP cho câu trả lời hay.",
  },
];

/** Các chủ đề Vật lí lớp 6–9 (KHTN, Kết nối tri thức) */
const GRADES = [
  {
    grade: 6,
    color: "#0E7490",
    soft: "#DDF5FB",
    topics: [
      { icon: Ruler, vi: "Phép đo", en: "Measurement" },
      { icon: Zap, vi: "Lực trong đời sống", en: "Forces" },
      { icon: BatteryCharging, vi: "Năng lượng", en: "Energy" },
      { icon: Orbit, vi: "Trái Đất và bầu trời", en: "Earth and space" },
    ],
  },
  {
    grade: 7,
    color: "#7C3AED",
    soft: "#EFE7FF",
    topics: [
      { icon: Gauge, vi: "Tốc độ", en: "Speed" },
      { icon: AudioWaveform, vi: "Âm thanh", en: "Sound" },
      { icon: Sun, vi: "Ánh sáng", en: "Light" },
      { icon: Magnet, vi: "Từ", en: "Magnetism" },
    ],
  },
  {
    grade: 8,
    color: "#2F5BEA",
    soft: "#E3EBFF",
    star: true,
    topics: [
      { icon: Gauge, vi: "Khối lượng riêng và áp suất", en: "Density and pressure" },
      { icon: Scale, vi: "Moment lực, đòn bẩy", en: "Moments and levers" },
      { icon: Zap, vi: "Điện", en: "Electricity" },
      { icon: Thermometer, vi: "Nhiệt", en: "Heat" },
    ],
  },
  {
    grade: 9,
    color: "#EA580C",
    soft: "#FFEDD5",
    topics: [
      { icon: Atom, vi: "Năng lượng cơ học", en: "Mechanical energy" },
      { icon: Lightbulb, vi: "Ánh sáng – thấu kính", en: "Light and lenses" },
      { icon: Magnet, vi: "Điện – Điện từ", en: "Electricity and electromagnetism" },
      { icon: Flame, vi: "Năng lượng với cuộc sống", en: "Energy and life" },
    ],
  },
];

/** Công thức song ngữ: viết – đọc tiếng Anh – nghĩa */
const FORMULAS = [
  { f: "D = m / V", en: "Density equals mass divided by volume.", vi: "Khối lượng riêng bằng khối lượng chia thể tích." },
  { f: "p = F / S", en: "Pressure equals force divided by area.", vi: "Áp suất bằng áp lực chia diện tích bị ép." },
  { f: "M = F · d", en: "The moment equals force times distance.", vi: "Moment lực bằng lực nhân cánh tay đòn." },
  { f: "FA = d · V", en: "The upthrust equals specific weight times volume.", vi: "Lực đẩy Archimedes bằng trọng lượng riêng nhân thể tích." },
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden">
      {/* Hero nền "bản vẽ kĩ thuật" xanh đêm */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(91,140,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(91,140,255,.16) 1px, transparent 1px), linear-gradient(rgba(91,140,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(91,140,255,.07) 1px, transparent 1px)",
            backgroundSize: "96px 96px, 96px 96px, 24px 24px, 24px 24px",
          }}
        />
        <div aria-hidden className="absolute -top-40 left-1/2 size-[720px] -translate-x-1/2 rounded-full bg-blue/35 blur-[120px]" />
        <div aria-hidden className="absolute -right-32 bottom-0 size-96 rounded-full bg-sun/20 blur-[100px]" />
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {FLOATING_FORMULAS.map((x) => (
            <span key={x.f} className={cn("animate-float absolute rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 font-display text-sm font-bold text-white/55 backdrop-blur-sm", x.cls)}>
              {x.f}
            </span>
          ))}
        </div>

        {/* Thanh trên */}
        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Logo tone="light" />
          <nav className="flex items-center gap-2">
            <Link href="/login" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "hidden text-white hover:bg-white/10 hover:text-white sm:inline-flex")}>
              Giáo viên
            </Link>
            <Link href="/s/login" className={buttonVariants({ variant: "sun", size: "sm" })}>
              Vào lớp <ArrowRight />
            </Link>
          </nav>
        </header>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pt-6 pb-24 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/85 backdrop-blur">
              <Zap className="animate-zap size-3.5 text-sun" /> {SUBJECT.vi} · THCS lớp 6–9 · Song ngữ Việt – Anh
            </span>
            <h1 className="mt-5 text-[2.6rem] leading-[1.02] font-extrabold sm:text-6xl lg:text-[4.2rem]">
              Mỗi tiết {SUBJECT.short},{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-sun via-[#FFD45C] to-[#FF8A5B] bg-clip-text text-transparent">thêm một</span>
              </span>{" "}
              tiết tiếng Anh.
            </h1>
            <p className="mt-4 font-display text-xl font-semibold text-[#9DB8FF] sm:text-2xl">Think like a physicist. Speak like one.</p>
            <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              Song Ngữ Vật Lí giúp thầy cô dạy trực tiếp trên tivi với hình vẽ, thí nghiệm ảo và công thức song ngữ; học sinh trả lời bằng điện thoại, mọi
              kết quả được lưu lại để theo dõi tiến bộ của từng em.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/s/login" className={cn(buttonVariants({ variant: "sun", size: "xl" }), "relative overflow-hidden")}>
                <span aria-hidden className="animate-beam absolute inset-0" />
                <span className="relative inline-flex items-center gap-2">
                  Em là học sinh — Vào lớp <ArrowRight />
                </span>
              </Link>
              <Link href="/login" className={cn(buttonVariants({ variant: "outline", size: "xl" }), "border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white")}>
                Thầy cô đăng nhập
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-5 text-sm font-semibold text-white/65">
              <span className="flex items-center gap-1.5">
                <Users className="size-4 text-[#38D0F0]" /> Không cần email cho học sinh
              </span>
              <span className="hidden items-center gap-1.5 sm:flex">
                <BellRing className="size-4 text-[#FF8A5B]" /> Nhắc chú ý 1 chạm
              </span>
            </div>
          </div>

          {/* Mô phỏng tivi + điện thoại */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="rounded-[28px] bg-ink-tv p-3 shadow-[0_30px_80px_-20px_rgba(47,91,234,.65)] ring-1 ring-white/15">
              <div className="rounded-[20px] bg-gradient-to-b from-[#16285C] to-ink-tv p-5 font-present sm:p-7">
                <div className="flex items-center justify-between text-white/70">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Câu 3 / 8 · Bài 15</span>
                  <span className="flex items-center gap-2 text-xs font-semibold">
                    <span className="flex gap-1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className={cn("size-1.5 rounded-full", i < 7 ? "bg-sun" : "bg-white/20")} />
                      ))}
                    </span>
                    21/30
                  </span>
                </div>
                <p className="mt-5 text-xl leading-snug font-semibold text-white sm:text-2xl">
                  The unit of pressure is the <span className="rounded-md bg-sun px-1.5 text-ink">____</span>.
                </p>
                <p className="mt-1.5 text-sm text-white/55 italic">Đơn vị của áp suất là ____.</p>
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
                  {ANSWERS.map((a) => {
                    const c = SHAPE_COLORS[a.kind];
                    return (
                      <div
                        key={a.kind}
                        className="flex items-center gap-2.5 rounded-2xl px-3.5 py-3 font-semibold sm:py-4"
                        style={{ background: c.bg, color: c.text, boxShadow: `0 5px 0 ${c.dk}` }}
                      >
                        <ShapeIcon kind={a.kind} color={c.text} className="size-5 opacity-90" />
                        {a.en}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mx-auto h-4 w-28 rounded-b-xl bg-ink-tv/80" />

            {/* Điện thoại HS + thẻ laptop GV, nằm dưới tivi để không che nội dung */}
            <div className="relative z-10 -mt-10 flex items-end justify-between gap-4 px-2 sm:px-6">
              <div className="w-[160px] rotate-[-5deg] rounded-[30px] bg-[#1C2B57] p-2 shadow-2xl ring-1 ring-white/15 sm:w-[180px]">
                <div className="flex flex-col items-center rounded-[24px] bg-success-bg px-3 pt-4 pb-4 text-center">
                  <Tam mood="cheer" className="size-14" />
                  <p className="mt-1 font-display text-lg font-extrabold text-success-fg">Correct!</p>
                  <p className="text-vi text-xs">Chính xác!</p>
                  <p className="mt-2 rounded-full bg-white px-3 py-1 font-display text-sm font-extrabold text-ink shadow-[0_3px_0_#cfeee0]">+142 XP</p>
                </div>
              </div>

              <div className="hidden w-56 rotate-[3deg] rounded-2xl border-2 border-line bg-white p-3 text-ink shadow-xl sm:block">
                <p className="text-xs font-bold text-ink-2">Lớp 8A · đang học</p>
                <div className="mt-2 space-y-1.5 text-xs font-semibold">
                  <p className="flex items-center justify-between rounded-lg bg-teal-soft px-2 py-1 text-teal-dk">
                    Đang theo dõi <b>24</b>
                  </p>
                  <p className="flex items-center justify-between rounded-lg bg-blue-soft px-2 py-1 text-blue-dk">
                    Đã trả lời <b>21</b>
                  </p>
                  <p className="flex items-center justify-between rounded-lg bg-coral-soft px-2 py-1 text-coral-dk">
                    Rời trang <b>2</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Đường sóng chuyển sang phần dưới */}
        <svg aria-hidden viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-px block h-10 w-full sm:h-14">
          <path d="M0 40 C 180 0, 360 0, 540 30 S 900 60, 1080 30 S 1320 0, 1440 24 V60 H0 Z" fill="var(--color-white, #fff)" />
        </svg>
      </section>

      {/* Tính năng */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Dạy song ngữ, nhẹ như một cú bấm</h2>
            <p className="text-en mt-2 font-display text-lg font-semibold">Built for real classrooms — TV, laptop and phones.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="card-lsn hover-glow group p-5">
                <span className={cn("hover-wiggle inline-flex size-12 items-center justify-center rounded-2xl text-white shadow-[inset_0_-4px_0_rgba(0,0,0,.18)]", f.color)}>
                  <f.icon className={cn("size-6", f.color === "bg-sun" && "text-ink")} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="text-en text-sm font-semibold">{f.en}</p>
                <p className="mt-2 text-sm text-ink-2">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Công thức song ngữ */}
      <section className="relative overflow-hidden border-t-2 border-line">
        <div className="bg-cells absolute inset-0 opacity-80" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sun-soft px-3 py-1 text-xs font-bold text-sun-dk">
              <Sigma /> Công thức song ngữ
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Viết công thức — đọc thành câu tiếng Anh</h2>
            <p className="text-en mt-2 font-display text-lg font-semibold">Every formula becomes a sentence you can say.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FORMULAS.map((x) => (
              <div key={x.f} className="card-lsn hover-glow relative overflow-hidden p-5">
                <div aria-hidden className="absolute -top-8 -right-8 size-24 rounded-full bg-blue-soft" />
                <p className="relative font-display text-3xl font-extrabold text-blue-dk">{x.f}</p>
                <p className="text-en relative mt-3 text-sm font-semibold">{x.en}</p>
                <p className="text-vi relative mt-1 text-sm">{x.vi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Các chức năng chính */}
      <section className="relative border-t-2 border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Các chức năng chính</h2>
            <p className="text-en mt-2 font-display text-lg font-semibold">Everything a bilingual physics class needs.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {MAIN_FEATURES.map((f) => (
              <div
                key={f.vi}
                className="hover-glow group relative flex flex-col overflow-hidden rounded-[22px] p-4 text-white shadow-[0_6px_0_rgba(0,0,0,.15)] sm:p-5"
                style={{ background: `linear-gradient(140deg, ${f.from}, ${f.to})` }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-25"
                  style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
                />
                <f.icon className="hover-wiggle relative size-9 sm:size-11" strokeWidth={1.8} />
                <h3 className="relative mt-3 text-base leading-snug font-extrabold sm:text-lg">{f.vi}</h3>
                <p className="relative text-sm font-semibold text-white/80">{f.en}</p>
                <p className="relative mt-2 hidden text-sm text-white/90 sm:block">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chủ đề Vật lí lớp 6–9 */}
      <section className="relative overflow-hidden border-t-2 border-line">
        <div className="bg-cells absolute inset-0 opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft px-3 py-1 text-xs font-bold text-blue-dk">
                <Atom className="size-3.5" /> Phân môn Vật lí · KHTN THCS
              </span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Khám phá thế giới vật lí bằng hai ngôn ngữ</h2>
              <p className="text-en mt-2 font-display text-lg font-semibold">From forces to circuits — explore physics in English.</p>
            </div>
            <Tam mood="cheer" className="hidden size-28 shrink-0 md:block" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GRADES.map((g) => (
              <div key={g.grade} className={cn("card-lsn hover-glow relative p-5", g.star && "border-blue ring-4 ring-blue-soft")}>
                <div className="flex items-center justify-between">
                  <p className="font-display text-2xl font-extrabold" style={{ color: g.color }}>
                    Lớp {g.grade}
                  </p>
                  {g.star && <span className="rounded-full bg-blue px-2.5 py-0.5 text-[11px] font-bold text-white">Kho đầy đủ</span>}
                </div>
                <ul className="mt-4 space-y-3">
                  {g.topics.map((t) => (
                    <li key={t.vi} className="group flex items-start gap-3">
                      <span className="hover-wiggle grid size-10 shrink-0 place-items-center rounded-xl" style={{ background: g.soft, color: g.color }}>
                        <t.icon className="size-5" strokeWidth={2.2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block leading-snug font-bold">{t.vi}</span>
                        <span className="text-en block text-xs font-semibold">{t.en}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kêu gọi */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-ink via-[#16285C] to-blue-dk px-6 py-10 text-white sm:px-12">
          <FloatingShapes tone="dark" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <Tam mood="happy" className="hidden size-24 shrink-0 sm:block" />
              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl">Sẵn sàng cho tiết Vật lí đầu tiên?</h2>
                <p className="mt-1 text-white/70">Tạo lớp, dán danh sách từ Excel, in phiếu PIN — chưa tới 5 phút.</p>
              </div>
            </div>
            <Link href="/login" className={buttonVariants({ variant: "sun", size: "lg" })}>
              Bắt đầu ngay <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-line py-6 text-center text-sm text-ink-2">
        © {new Date().getFullYear()} Song Ngữ Vật Lí · {APP_DESCRIPTION}
      </footer>
    </main>
  );
}

/** Kí hiệu Σ nhỏ cho nhãn "Công thức" */
function Sigma() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
      <path d="M12.5 3 H4 L8.5 8 L4 13 H12.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
