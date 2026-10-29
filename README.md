# Song Ngữ Vật Lí — Vật lí (KHTN) song ngữ Việt–Anh cho THCS

Web dạy và học Vật lí – phân môn của Khoa học tự nhiên, lớp 6–9 – song ngữ: giáo viên dạy trên tivi + laptop, học sinh trả lời bằng điện thoại, theo dõi học tập theo thời gian thực, nhắn tin cảnh báo, tự học ở nhà, soạn bài theo CV 5512 (có trợ lý AI).

- Bản chạy thật: xem mục “Đưa lên Vercel” (dự án Vercel riêng, KHÔNG dùng chung với web Sinh)
- Hướng dẫn sử dụng: [HUONG_DAN_GIAO_VIEN.md](HUONG_DAN_GIAO_VIEN.md) · [HUONG_DAN_HOC_SINH.md](HUONG_DAN_HOC_SINH.md)
- Đặc tả: [docs/TINH-NANG.md](docs/TINH-NANG.md) · Dữ liệu & bảo mật: [docs/DU-LIEU.md](docs/DU-LIEU.md) · Giao diện: [docs/GIAO-DIEN.md](docs/GIAO-DIEN.md)

## Chức năng chính

| Nhóm | Có gì |
|---|---|
| Đăng nhập | Quản trị / giáo viên: Google hoặc email. Học sinh: **mã lớp + chọn tên + PIN 6 số** (không email, không số điện thoại) |
| Quản lý lớp | Thêm học sinh (dán từ Excel), chia tổ, in phiếu PIN có QR, đặt lại PIN |
| Dạy trực tiếp | Tivi + laptop + điện thoại đồng bộ; trắc nghiệm, đúng/sai, nhập số, gõ chữ, kéo nhãn, luyện nói (máy chấm phát âm); gọi tên ngẫu nhiên; giơ tay |
| Theo dõi | Ai đang học / không học, đúng/sai, điểm Khoa học (Vật lí) – Ngôn ngữ, bảng điểm xuất Excel, hồ sơ từng em |
| Nhắn tin | Chú ý / Nhắc nhở / Khen / Thông báo; chuông + rung; thông báo đẩy khi tắt màn hình; trạng thái Đã nhận → Đã xem → Đã xác nhận |
| Tự học | Bài tập về nhà (gợi ý 3 tầng), thẻ từ vựng ôn lặp ngắt quãng, luyện phát âm, chuỗi ngày, bảng xếp hạng top 5 |
| Soạn bài | Trình soạn song ngữ theo CV 5512 + 4C, ngân hàng thuật ngữ, duyệt bài, xuất Word, **Soạn bằng AI** (OpenAI) |
| Thí nghiệm ảo · 3D | 31 mô phỏng PhET Vật lí dựng sẵn cho lớp 6–9 (đổi giao diện Anh/Việt, nhiệm vụ + từ vựng song ngữ, toàn màn hình để chiếu tivi); GV thêm mô phỏng PhET / mô hình 3D Sketchfab qua Học liệu số |
| Ngân hàng câu hỏi | Câu song ngữ gắn bài SGK, YCCĐ, mức Biết/Hiểu/Vận dụng (TT 22); trắc nghiệm, đúng/sai, nhập số, gõ chữ, luyện nói; giao bài về nhà (máy chấm, gợi ý 3 tầng); xuất đề Word + đáp án |
| Bài tập AI | AI đề xuất câu hỏi song ngữ theo YCCĐ của bài → “Nháp AI”, GV kiểm tra rồi mới giao được (chung hạn mức 20 lượt/GV/ngày) |
| Dự án STEM | Dự án theo tổ, 6 bước thiết kế kĩ thuật, nhật kí song ngữ trên điện thoại, nộp link sản phẩm, chấm rubric 4 tiêu chí → XP cho cả tổ; 24 mẫu dự án Vật lí (20 mẫu lớp 8 phủ Bài 13–29 + mẫu lớp 6, 7, 9) |
| Cộng đồng học tập | Hỏi – đáp trong lớp, GV duyệt trước khi hiện; không nhắn riêng giữa HS, không đăng link/SĐT, chỉ hiện tên gọi; khung câu tiếng Anh; “Trả lời hay nhất” +10 XP |
| AI cho học sinh | **Chấm câu gõ chữ**: máy so khớp chấm sai → AI xét đúng ý (đệm kết quả, chặn câu “ra lệnh”, GV thấy nhãn “AI”) · **Chấm phát âm**: ghi âm ngắn → OpenAI nhận giọng nói → chấm từng từ + lời khuyên song ngữ (không lưu ghi âm; tự quay về Web Speech khi AI tắt / hết lượt) · **Trợ lý học tập “Tia”**: gợi mở, không làm bài hộ, lọc nội dung 2 chiều, 30 câu/em/ngày, GV bật/tắt theo lớp và xem nhật kí (Trợ lý AI) |
| PWA | Cài lên màn hình điện thoại như ứng dụng; trang báo mất mạng |

## Công nghệ

Next.js (App Router) + TypeScript + Tailwind + shadcn/ui · Firebase (Auth, Firestore, Cloud Messaging) · API route trên Vercel dùng `firebase-admin` (gói Firebase Spark miễn phí, không dùng Cloud Functions) · OpenAI `gpt-5.4-mini` cho trợ lý soạn bài · Deploy Vercel.

## Cài đặt trên máy tính

Cần **Node.js 20 trở lên** (đang dùng 24) và tài khoản Firebase, Vercel.

```powershell
npm install
copy .env.example .env.local     # rồi điền các giá trị (xem bảng dưới)
npm run check                    # kiểm tra kết nối Firebase Admin
npm run dev                      # mở http://localhost:3000
```

### Biến môi trường (`.env.local`, KHÔNG đưa lên git, không gửi cho ai)

| Biến | Lấy ở đâu | Bí mật? |
|---|---|---|
| `NEXT_PUBLIC_FIREBASE_*` (6 biến) | Firebase Console → Project settings → Your apps → Web app | Công khai được |
| `NEXT_PUBLIC_FIREBASE_VAPID_KEY` | Project settings → Cloud Messaging → Web Push certificates (để trống thì dùng khoá mặc định) | Công khai được |
| `FIREBASE_ADMIN_PROJECT_ID`, `FIREBASE_ADMIN_CLIENT_EMAIL`, `FIREBASE_ADMIN_PRIVATE_KEY` | Project settings → Service accounts → Generate new private key | **Bí mật** |
| `ADMIN_EMAILS` | Email (cách nhau dấu phẩy) tự thành quản trị khi đăng nhập lần đầu | — |
| `DEFAULT_SCHOOL_ID`, `DEFAULT_SCHOOL_NAME` | Mã và tên trường | — |
| `CRON_SECRET` | Chuỗi ngẫu nhiên dài (việc chạy hằng ngày: nhắc bài trước hạn) | **Bí mật** |
| `OPENAI_API_KEY`, `OPENAI_MODEL` | platform.openai.com → API keys; model `gpt-5.4-mini` | **Bí mật** (khoá) |

## Firebase — lưu ý quan trọng

Project Firebase **dùng chung với các ứng dụng khác**. Vì vậy:

1. Mọi dữ liệu của Song Ngữ Vật Lí có tiền tố `lsnly_` (ví dụ `lsnly_classes`), quyền dùng claims riêng `lyRole`, `lySchool`, `lyClasses` — tách hẳn khỏi web Sinh (tiền tố `lsn_`, claims `lsn*`).
2. **Không** chạy `firebase deploy` cho rules/indexes (sẽ xoá phần của app khác). Dùng:
   - `npm run deploy:rules` — chỉ thay phần giữa `>>> SONG NGU VAT LI` và `<<< SONG NGU VAT LI` (không đụng phần `LOP SONG NGU` của web Sinh), tự sao lưu bản cũ vào `rules-backup/`.
   - `npm run indexes` — chỉ **thêm** chỉ mục còn thiếu.
3. Hướng dẫn chi tiết từng bước: [docs/CAI-DAT-FIREBASE.md](docs/CAI-DAT-FIREBASE.md).

## Lệnh thường dùng

| Lệnh | Việc |
|---|---|
| `npm run dev` | Chạy thử trên máy |
| `npm run build` | Đóng gói bản chạy thật (kiểm tra lỗi) |
| `npm test` | Chạy test (chấm điểm, soạn bài, AI, tự học…) |
| `npm run test:rules` | Test security rules bằng trình giả lập (cần cài **Java**) |
| `npm run deploy:rules` | Đăng security rules (an toàn với app khác) |
| `npm run indexes` | Tạo chỉ mục Firestore còn thiếu |
| `npm run make-admin -- --email=ten@gmail.com` | Cấp quyền quản trị (thêm `--role=teacher` để cấp quyền giáo viên) |
| `npm run seed:lesson` | Nạp / cập nhật tiết mẫu “Khối lượng riêng” (Vật lí 8 · Bài 13) + thuật ngữ |
| `npm run seed:bank` | Nạp ngân hàng 134 câu hỏi song ngữ Vật lí 8 · Bài 13–29 (dữ liệu ở `src/lib/bank/kho/`; câu đã có giữ nguyên). `-- --dry-run` xem trước, `-- --remove` gỡ |
| `npm run seed:kho` | Nạp kho học liệu Vật lí 8 · Bài 13–29 (thí nghiệm ảo PhET + bài đọc tiếng Anh dễ + 104 thuật ngữ có IPA, dữ liệu ở `src/lib/library/kho-khtn8.ts`). `-- --dry-run` xem trước, `-- --remove` gỡ. Kiểm tra link: `npx tsx scripts/check-kho-links.mts` |
| `npm run seed` · `npm run seed:clear` | Tạo / xoá **dữ liệu mẫu** (lớp 7A giả). ⚠️ Không chạy trên dữ liệu thật của trường |

## Đưa lên Vercel

```powershell
npx vercel deploy --prod --yes
```

> ⚠️ Thư mục `.vercel/` phải trỏ tới dự án Vercel của **Vật lí**. Không link vào dự án `songngu-khtn` (web Sinh đang chạy).

- Biến môi trường trên Vercel: Project → Settings → Environment Variables (giống `.env.local`). Trên Windows PowerShell, thêm bằng `npx vercel env add TEN production --value=GIA_TRI --yes` — **không** dùng dấu `|` (sẽ chèn kí tự ẩn làm hỏng giá trị).
- Vercel Cron gọi `/api/cron/daily` lúc 18:00 giờ Việt Nam (khai báo trong `vercel.json`).
- Sau khi đổi `firestore.rules`: chạy `npm run deploy:rules`.

## Cấu trúc thư mục

```
src/app/            trang & API: /teacher (GV), /admin (quản trị), /s (học sinh), /present (tivi), /api/*
src/components/     giao diện: live/ (dạy trực tiếp), lessons/ (soạn bài), messages/, class/, student/, pwa/
src/lib/            nghiệp vụ: live/ (chấm điểm, điều khiển tiết), lessons/ (soạn bài, AI, Word), study/, messages/, server/ (chỉ máy chủ)
public/lsn-sw.js    service worker: thông báo đẩy + trang mất mạng
firestore.rules     security rules (phần Song Ngữ Vật Lí nằm giữa hai dấu SONG NGU VAT LI)
scripts/            nạp dữ liệu, cấp quyền, đăng rules, tạo chỉ mục
tests/              test (vitest)
docs/               đặc tả, dữ liệu, giao diện, cài đặt Firebase
```

## Riêng tư & an toàn

- Học sinh dưới 18 tuổi: chỉ lưu **họ tên, lớp, tổ**. Không email, không số điện thoại, **không lưu ghi âm** (luyện nói chỉ gửi điểm + câu máy nghe được).
- Mọi thao tác ghi quan trọng (chấm điểm, lưu bài, duyệt, nhắn tin) đi qua API máy chủ; rules chặn ghi trực tiếp từ trình duyệt.
- Học sinh chỉ đọc được bài và thuật ngữ **đã duyệt**; đáp án nằm riêng, chỉ giáo viên đọc được.
- Trợ lý AI chỉ nhận nội dung giáo án, không nhận dữ liệu học sinh; giới hạn 20 lượt/giáo viên/ngày, 100 lượt/trường/ngày (mỗi lượt ≈ 5.500 token, vài trăm đồng). Nên đặt mức chi tối đa hằng tháng trên platform.openai.com → Limits.
