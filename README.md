# E104A-H2-HVHC

Ứng dụng ôn tập và thi trắc nghiệm Hậu cần – Kỹ thuật, giao diện React/PWA trên GitHub Pages, sử dụng **Google Apps Script và Google Sheets hiện có** làm backend và nguồn dữ liệu duy nhất.

## Kiến trúc
- React + Vite: giao diện responsive, hỗ trợ PC và điện thoại.
- PWA: có thể cài ứng dụng khi trình duyệt hỗ trợ.
- Google Apps Script: xử lý lấy môn học, tạo bài, chấm điểm và lưu kết quả.
- Google Sheets hiện tại: tiếp tục lưu ngân hàng câu hỏi, môn học, phiên thi và kết quả.
- Không tạo ngân hàng câu hỏi mới, không sao chép dữ liệu sang database khác.

## Backend hiện có
Các hàm backend đã có trong dự án Apps Script:
- `getAppData()`
- `startQuiz(data)`
- `submitQuiz(sessionId, answers)`
- `getPublicResults(name)`

Giao diện GitHub Pages cần lớp API trung gian được bổ sung/kiểm thử trên Apps Script trước khi gọi trực tiếp từ trình duyệt. Không coi kết nối là hoàn tất cho đến khi kiểm thử được tải môn học, bắt đầu bài, nộp bài và đọc kết quả thực tế.

## Phát triển tại máy
```bash
npm install
npm run dev
```

## Build / kiểm tra
```bash
npm run build
npm run preview
```

## Tiến độ
- [x] Khung React responsive
- [x] GitHub Pages deployment
- [x] Xác định backend Apps Script/Sheets hiện có
- [ ] API bridge an toàn cho GitHub Pages
- [ ] Nạp môn học và số câu thật
- [ ] Luyện tập có giải thích
- [ ] Thi kiểm tra, giới hạn thời gian
- [ ] Nộp bài, chấm điểm và lưu lịch sử
- [ ] Thống kê kết quả
- [ ] Hoàn thiện PWA

## Lưu ý bảo mật
Không đưa mã PIN quản trị hoặc thông tin bí mật vào mã React công khai. Các thao tác quản trị phải được xác thực ở backend.
