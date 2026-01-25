# Test Website Features

## ✅ Hoàn thành các tính năng mới:

### 1. **Quản lý số lượng sản phẩm**
- ✅ Thêm trường "Số lượng" vào form thêm/sửa sản phẩm
- ✅ Hiển thị số lượng trong bảng admin với badge màu
- ✅ Số lượng < 5 hiển thị màu vàng (cảnh báo hết hàng)

### 2. **Quản lý thông tin liên hệ**
- ✅ Thêm tab "Cài đặt" trong admin panel
- ✅ Form chỉnh sửa số điện thoại, email, địa chỉ
- ✅ Tự động cập nhật footer trang chủ

### 3. **Quản lý liên kết mạng xã hội**
- ✅ Form chỉnh sửa link Facebook, Zalo, TikTok
- ✅ Tự động cập nhật links trong footer trang chủ
- ✅ Icon tương ứng cho từng mạng xã hội

## 🔧 Cách test:

### Test Admin Panel:
1. Vào `/admin.html`
2. Đăng nhập: `admin` / `admin123`
3. **Tab Sản phẩm**: Test thêm/sửa sản phẩm với trường số lượng
4. **Tab Cài đặt**: Test chỉnh sửa thông tin liên hệ và social media

### Test trang chủ:
1. Vào `/index.html`
2. Kiểm tra footer có hiển thị thông tin mới không
3. Test click vào các link mạng xã hội

## 📱 Responsive Design:
- Admin panel responsive cho mobile/tablet
- Navigation menu collapse trên mobile
- Form settings responsive

## 💾 Data Storage:
- Tất cả settings lưu trong localStorage
- Dữ liệu persist sau khi reload
- Có thể export/import sau này