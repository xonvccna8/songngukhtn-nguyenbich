// GĐ 7 — PWA: cài web như ứng dụng (bắt buộc trên iPhone để nhận thông báo khi tắt màn hình)
import type { MetadataRoute } from "next";
import { APP_DESCRIPTION, SUBJECT } from "@/lib/subject";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: `Song Ngữ Vật Lí — ${SUBJECT.short} song ngữ THCS`,
    short_name: "Song Ngữ Vật Lí",
    description: APP_DESCRIPTION,
    lang: "vi",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#F4F7FF",
    theme_color: "#0F1B3D",
    categories: ["education"],
    icons: [
      { src: "/icons/192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Học sinh vào lớp", short_name: "Vào lớp", url: "/s", icons: [{ src: "/icons/192", sizes: "192x192" }] },
      { name: "Giáo viên", short_name: "Giáo viên", url: "/teacher", icons: [{ src: "/icons/192", sizes: "192x192" }] },
    ],
  };
}
