# Laptop Store - Website Thông Tin Sản Phẩm Laptop

Website hiển thị thông tin các sản phẩm laptop với giao diện chuyên nghiệp, hỗ trợ chế độ khách và admin.

## 🌟 Tính năng chính

### Chế độ khách (Guest Mode)
- ✅ Xem danh sách laptop với giao diện grid responsive
- ✅ Tìm kiếm sản phẩm theo từ khóa
- ✅ Lọc theo thương hiệu, giá, loại sản phẩm
- ✅ Xem chi tiết thông số kỹ thuật
- ✅ Giao diện modal hiển thị thông tin chi tiết
- ✅ Liên kết mạng xã hội (Facebook, Zalo, TikTok)

### Chế độ quản trị (Admin Mode)
- ✅ Đăng nhập bảo mật (demo: admin/admin123)
- ✅ Quản lý danh sách sản phẩm
- ✅ Thêm sản phẩm mới
- ✅ Chỉnh sửa thông tin sản phẩm
- ✅ Xóa sản phẩm
- ✅ Giao diện quản trị responsive

## 🎨 Thiết kế

- **Responsive Design**: Tối ưu cho desktop, tablet, và mobile
- **Modern UI**: Sử dụng CSS Grid, Flexbox và Font Awesome icons
- **Professional Colors**: Palette màu chuyên nghiệp, dễ nhìn
- **Smooth Animations**: Hiệu ứng mượt mà, trải nghiệm người dùng tốt

## 🔧 Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic
- **CSS3**: Grid layout, Flexbox, CSS Variables, Responsive design
- **Vanilla JavaScript**: Không dependency, tối ưu tốc độ
- **Font Awesome**: Icons chuyên nghiệp
- **LocalStorage**: Lưu trữ dữ liệu demo

## 📁 Cấu trúc dự án

```
laptop-store/
├── index.html              # Trang chủ (chế độ khách)
├── admin.html              # Trang quản trị
├── styles/
│   ├── main.css           # CSS chính
│   └── admin.css          # CSS cho admin panel
├── js/
│   ├── main.js            # JavaScript trang chủ
│   ├── admin.js           # JavaScript admin panel
│   └── data.js            # Dữ liệu và functions
└── README.md              # Tài liệu dự án
```

## 🚀 Hướng dẫn sử dụng

### 1. Chạy website
- Mở file `index.html` trong trình duyệt
- Hoặc sử dụng Live Server extension trong VS Code

### 2. Truy cập Admin Panel
- Vào trang `/admin.html`
- Đăng nhập với:
  - **Username**: admin  
  - **Password**: admin123

### 3. Quản lý sản phẩm
- **Thêm sản phẩm**: Click "Thêm sản phẩm" và điền thông tin
- **Sửa sản phẩm**: Click icon edit (✏️) trong bảng
- **Xóa sản phẩm**: Click icon delete (🗑️) và xác nhận

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px  
- **Mobile**: ≤ 480px

## 🎯 Demo Data

Website đã có sẵn 8 laptop demo với đầy đủ thông tin:
- Dell XPS 13 9315 (Ultrabook)
- HP Pavilion Gaming 15 (Gaming)
- Lenovo ThinkPad E14 (Văn phòng)
- Asus ROG Strix G15 (Gaming)
- MSI Creator 15 (Đồ họa)
- Acer Aspire 5 (Văn phòng)
- MSI GF63 Thin (Gaming)
- Asus ZenBook 14 (Ultrabook)

## 🌐 Social Media Links

Website tích hợp links đến:
- **Facebook**: Fanpage của store
- **Zalo**: Chat hỗ trợ khách hàng
- **TikTok**: Video reviews sản phẩm

## ⚡ Tối ưu hiệu năng

- **Lazy loading images**: Tải ảnh khi cần thiết
- **Debounced search**: Tối ưu tìm kiếm real-time
- **CSS minification**: Giảm kích thước file
- **Mobile-first approach**: Ưu tiên mobile

## 🔮 Tính năng có thể mở rộng

- [ ] Tích hợp backend API
- [ ] Database thật (MySQL/MongoDB)
- [ ] Upload ảnh sản phẩm
- [ ] Export/Import dữ liệu
- [ ] Phân quyền admin chi tiết
- [ ] Analytics dashboard
- [ ] PWA support

## 📞 Liên hệ

Nếu có câu hỏi hoặc góp ý, vui lòng liên hệ qua:
- Email: info@laptopstore.com
- Phone: 0123 456 789

## 📄 License

MIT License - Tự do sử dụng cho mục đích học tập và thương mại.