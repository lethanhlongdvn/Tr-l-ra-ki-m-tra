# HƯỚNG DẪN KẾT NỐI WEBSITE VỚI GOOGLE DRIVE THẬT 100%

Hướng dẫn này giúp bạn kết nối giao diện Website Thư viện Giáo viên trực tiếp vào kho **Google Drive `THU_VIEN`** của bạn thông qua Google Apps Script (hoàn toàn miễn phí, không cần thuê máy chủ).

---

## BƯỚC 1: Lấy ID của thư mục `THU_VIEN` trên Google Drive

1. Mở trình duyệt và truy cập vào [Google Drive](https://drive.google.com).
2. Tìm đến thư mục **`THU_VIEN`** của bạn.
3. Nhấp đúp chuột để **mở thư mục `THU_VIEN`**.
4. Nhìn lên thanh địa chỉ (URL) của trình duyệt, bạn sẽ thấy đường dẫn có dạng:
   ```text
   https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoPqRsTuVwXyZ123456
   ```
5. Hãy sao chép chuỗi ký tự sau chữ `folders/` (ví dụ: `1aBcDeFgHiJkLmNoPqRsTuVwXyZ123456`). **Đó chính là FOLDER_ID của bạn.**

---

## BƯỚC 2: Tạo và Triển khai Google Apps Script Backend

1. Truy cập vào trang quản lý script: 👉 **[https://script.google.com](https://script.google.com)** (đăng nhập đúng tài khoản Google đang chứa thư mục Drive).
2. Bấm nút **"Dự án mới" (New Project)** ở góc trên bên trái.
3. Đặt tên cho dự án (ví dụ: `API Thư Viện Giáo Viên`).
4. Xóa hết mã nguồn mặc định trong khung soạn thảo `Mã.gs` (Code.gs).
5. Mở tệp [`backend/Code.gs`](file:///c:/Users/Admin/Desktop/Th%C6%B0%20vi%E1%BB%87n%20gi%C3%A1o%20vi%C3%AAn/backend/Code.gs) trong dự án này, sao chép toàn bộ nội dung và dán vào trình soạn thảo Google Apps Script.
6. **Thay đổi 2 thông tin quan trọng ở đầu file:**
   - Dòng 10: Thay `"YOUR_THU_VIEN_FOLDER_ID_HERE"` bằng **FOLDER_ID** bạn vừa lấy ở Bước 1.
   - Dòng 13: Bạn có thể đổi `ADMIN_PASSWORD` thành mật khẩu quản trị của riêng bạn (mặc định là `admin@thuvien123`).
7. Bấm biểu tượng **💾 Lưu dự án (Save)** (hoặc nhấn `Ctrl + S`).

---

## BƯỚC 3: Xuất bản Web App (Deploy) để lấy link API

1. Ở góc trên bên phải màn hình Google Apps Script, bấm nút màu xanh **"Triển khai" (Deploy)** -> Chọn **"Quản lý bản triển khai mới" (New deployment)**.
2. Bấm vào biểu tượng bánh răng ⚙️ cạnh chữ *Chọn loại (Select type)* -> Chọn **"Ứng dụng web" (Web app)**.
3. Điền thông tin cấu hình như sau:
   - **Mô tả (Description)**: `API Thư viện v1`
   - **Thực thi dưới dạng (Execute as)**: Chọn **"Tôi" (Me - địa chỉ email của bạn)**
   - **Ai có quyền truy cập (Who has access)**: Chọn **"Bất kỳ ai" (Anyone)** *(Rất quan trọng: Phải chọn mục này để website có thể tải và xem tài liệu)*
4. Bấm nút **"Triển khai" (Deploy)**.
5. Google sẽ hiện hộp thoại yêu cầu cấp quyền:
   - Bấm **Ủy quyền truy cập (Authorize access)**.
   - Chọn tài khoản Google của bạn.
   - Nếu thấy cảnh báo *"Google chưa xác minh ứng dụng này"*, bấm vào **Nâng cao (Advanced)** -> Chọn **Đi tới API Thư Viện Giáo Viên (không an toàn)** -> Bấm **Cho phép (Allow)**.
6. Sau khi hoàn tất, Google sẽ cấp cho bạn một đường link dạng:
   ```text
   https://script.google.com/macros/s/AKfycbx_AbCdEfGh.../exec
   ```
7. Bấm nút **Sao chép (Copy)** đường link này.

---

## BƯỚC 4: Gắn link API vào Website

1. Mở file [`js/config.js`](file:///c:/Users/Admin/Desktop/Th%C6%B0%20vi%E1%BB%87n%20gi%C3%A1o%20vi%C3%AAn/js/config.js) trên máy tính của bạn.
2. Dán link Web App vừa sao chép vào `API_URL` và dán Folder ID vào `ROOT_FOLDER_ID`:
   ```javascript
   const CONFIG = {
     API_URL: "https://script.google.com/macros/s/AKfycbx_AbCdEfGh.../exec",
     ROOT_FOLDER_ID: "1aBcDeFgHiJkLmNoPqRsTuVwXyZ123456",
     // ... các cấu hình khác
   };
   ```
3. Lưu file `config.js`.

---

## BƯỚC 5: Trải nghiệm & Kiểm tra tính năng

1. Mở file [`index.html`](file:///c:/Users/Admin/Desktop/Th%C6%B0%20vi%E1%BB%87n%20gi%C3%A1o%20vi%C3%AAn/index.html) bằng bất kỳ trình duyệt nào (Chrome, Edge, Cốc Cốc, Safari...).
2. **Kiểm tra quyền Khách**:
   - Duyệt vào các thư mục Khối 1 - 5, các môn học.
   - Xem trước (Preview) tài liệu PDF, Word, PowerPoint, Ảnh.
   - Bấm Tải xuống (Download) thử một tệp.
   - Bấm "Tải lên tài liệu" để tải tệp mới vào thư mục. Nếu tải tệp `.pptx` hoặc tệp nặng, website sẽ hiện cảnh báo bảo vệ dung lượng Drive 15GB miễn phí.
   - Khách sẽ **không thấy nút Xóa**.
3. **Kiểm tra quyền Quản trị viên (Admin)**:
   - Bấm nút **"Đăng nhập"** ở góc dưới thanh Sidebar.
   - Nhập mật khẩu Admin (mặc định ban đầu: `admin@thuvien123`).
   - Sau khi đăng nhập:
     - Nút **"Đổi MK"** xuất hiện ở góc dưới Sidebar: Quản trị viên có thể đổi mật khẩu mới bất kỳ lúc nào trực tiếp trên giao diện web (mật khẩu được lưu bền vững trên Google Apps Script).
     - Nút **Xóa (Thùng rác đỏ)** sẽ xuất hiện cạnh từng file và thư mục, kèm theo nút **"Tạo thư mục"** trên thanh điều hướng.
   - Bấm Xóa thử một tệp -> Xác nhận -> Tệp sẽ lập tức bị xóa khỏi kho Google Drive của bạn!
