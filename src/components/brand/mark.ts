// Hình bên trong logo (khung 40×40, chưa có nền): nguyên tử có quỹ đạo electron + tia sét ở giữa.
// Dùng chung cho LogoMark (giao diện) và /icons/[name] (biểu tượng PWA) để hai nơi luôn giống nhau.
export const LOGO_BG = "#0F1B3D";

export const LOGO_MARK =
  // Ba quỹ đạo electron
  '<ellipse cx="20" cy="20" rx="14.5" ry="5.6" fill="none" stroke="#5B8CFF" stroke-width="1.8"/>' +
  '<ellipse cx="20" cy="20" rx="14.5" ry="5.6" fill="none" stroke="#38D0F0" stroke-width="1.8" transform="rotate(60 20 20)"/>' +
  '<ellipse cx="20" cy="20" rx="14.5" ry="5.6" fill="none" stroke="#FF8A5B" stroke-width="1.8" transform="rotate(120 20 20)"/>' +
  // Electron
  '<circle cx="34.5" cy="20" r="2.1" fill="#5B8CFF"/>' +
  '<circle cx="12.75" cy="7.45" r="2.1" fill="#38D0F0"/>' +
  '<circle cx="12.75" cy="32.55" r="2.1" fill="#FF8A5B"/>' +
  // Hạt nhân: tia sét năng lượng
  '<path d="M21.6 11.5 L15.4 21.2 H19.6 L18.2 28.5 L24.6 18.6 H20.4 Z" fill="#FFC53D" stroke="#0F1B3D" stroke-width="0.8" stroke-linejoin="round"/>';
