# 🎓 THƯ VIỆN GIÁO VIÊN TIỂU HỌC
### Hệ Thống Kho Học Liệu & Quản Lý Tài Liệu Dạy Học Trực Tuyến

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Google Drive](https://img.shields.io/badge/Google%20Drive-34A853?style=for-the-badge&logo=googledrive&logoColor=white)

---

## 📖 1. Giới thiệu dự án

**Thư Viện Giáo Viên Tiểu Học** là giải pháp kho học liệu số dùng chung dành cho các trường tiểu học. Hệ thống kết nối trực tiếp hai chiều với **Google Drive** thông qua **Google Apps Script REST API** (hoàn toàn miễn phí, không phát sinh chi phí duy trì máy chủ hàng tháng).

Hệ thống cho phép giáo viên, tổ chuyên môn và ban giám hiệu dễ dàng tra cứu, xem trước giáo án, bài giảng PowerPoint, đề thi, chuyên đề SKKN và đóng góp tài nguyên trực tiếp từ trình duyệt web.

---

## 🌟 2. Các tính năng nổi bật

- 🌳 **Cây danh mục phân cấp thông minh**: Hiển thị đầy đủ cây thư mục từ Khối 1 đến Khối 5 và các phân môn (Toán, Tiếng Việt, Tiếng Anh, Tự nhiên & Xã hội, v.v.) với cơ chế Accordion mượt mà, định tuyến theo đường dẫn duy nhất chống trùng lặp.
- ⚡ **Tải trước toàn bộ hệ thống (0ms switching)**: Nạp cây tài liệu đệm vào bộ nhớ trong lần truy cập đầu tiên, chuyển đổi giữa các thư mục và khối lớp ngay lập tức mà không phải tải lại Drive nhiều lần.
- 🔄 **Tự động đồng bộ ngầm định kỳ (10 phút/lần)**: Hệ thống tự động quét cập nhật dữ liệu mới nhất từ Google Drive mà không làm gián đoạn trải nghiệm của thầy cô.
- ✍️ **Ghi nhận & Tôn vinh Người đóng góp**: Tự động lưu tên giáo viên / tổ chuyên môn khi tải lên tài liệu và gắn huy hiệu trang trọng trên từng bài giảng, đề thi.
- 👁️ **Xem trước tài liệu đa định dạng (Preview trực tuyến)**: Hỗ trợ xem trực tiếp file Word (.docx), PowerPoint (.pptx), PDF, Excel (.xlsx) và hình ảnh mà không cần tải về máy.
- 🔍 **Tìm kiếm toàn cục tức thì**: Tra cứu nhanh tên tài liệu theo từ khóa trong toàn bộ hệ thống thư viện.
- 🔐 **Phân quyền Khách & Quản trị viên (Admin)**: Khách được xem và tải tài liệu; Quản trị viên sau khi đăng nhập mật khẩu có quyền Xóa vĩnh viễn và Tạo thư mục mới trực tiếp trên Drive.
- 📦 **Tải lên linh hoạt**: Tải trực tiếp qua web cho tệp thông thường (hỗ trợ đến 50MB) và nút 1-click mở Drive cho các tệp siêu lớn (>100MB, video bài giảng).

---

## 📁 3. Cấu trúc thư mục dự án

```text
Thư viện giáo viên/
├── backend/
│   └── Code.gs               # Mã nguồn Google Apps Script Backend (API REST)
├── css/
│   └── style.css             # Thiết kế giao diện chuẩn Sư phạm (Xanh Navy & Trắng)
├── js/
│   ├── api.js                # Module gọi API Google Apps Script & xử lý bất đồng bộ
│   ├── app.js                # Logic ứng dụng (DOM, Cache, Accordion, Upload, Preview)
│   └── config.js             # Cấu hình API URL, Root Folder ID, dung lượng giới hạn
├── .gitignore                # Danh sách tệp loại trừ khi đưa lên Git
├── CHAY_THU_VIEN.bat         # File khởi động nhanh trên máy tính Windows
├── HUONG_DAN_TRIEN_KHAI.md   # Hướng dẫn chi tiết từng bước kết nối Google Drive
├── index.html                # Giao diện chính của thư viện
└── README.md                 # Tài liệu tổng quan dự án
```

---

## 🚀 4. Hướng dẫn cài đặt & Triển khai nhanh

### Cách 1: Chạy trực tiếp trên máy tính cá nhân
1. Tải toàn bộ mã nguồn về máy tính.
2. Nhấp đúp vào tệp `index.html` hoặc chạy `CHAY_THU_VIEN.bat` để mở thư viện trên trình duyệt.

### Cách 2: Triển khai trực tuyến miễn phí lên GitHub Pages
1. Tạo một Repository mới trên [GitHub](https://github.com/new).
2. Tải toàn bộ các tệp trong thư mục dự án lên nhánh `main`.
3. Vào mục **Settings** của Repo trên GitHub $\rightarrow$ Chọn **Pages** $\rightarrow$ Tại mục **Build and deployment / Branch**, chọn `main` và thư mục `/ (root)` $\rightarrow$ Bấm **Save**.
4. GitHub sẽ cấp cho bạn một đường link website chạy trực tuyến miễn phí 24/7 (Ví dụ: `https://username.github.io/thu-vien-giao-vien/`).

---

## ⚙️ 5. Kết nối với Google Drive của bạn

Để thư viện lưu trữ và nạp tài liệu từ Google Drive của trường học:
1. Mở [`HUONG_DAN_TRIEN_KHAI.md`](HUONG_DAN_TRIEN_KHAI.md) và làm theo 4 bước hướng dẫn chi tiết.
2. Dán mã [`backend/Code.gs`](backend/Code.gs) vào **Google Apps Script** và bấm **Deploy**.
3. Cập nhật `API_URL` và `ROOT_FOLDER_ID` trong [`js/config.js`](js/config.js).

---

## 📜 6. Giấy phép & Đóng góp

- Dự án phục vụ mục đích giáo dục phi lợi nhuận.
- Mọi đóng góp cải tiến tính năng xin vui lòng tạo **Pull Request** hoặc gửi **Issue** trên GitHub.

*Chúc quý thầy cô có những giờ dạy học hiệu quả và sáng tạo!* 🌟
