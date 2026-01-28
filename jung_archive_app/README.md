# 🏛️ THE JUNG ARCHIVE - Kho Lưu Trữ Tâm Thức

> *"Một Grimoire Kỹ Thuật Số về Vô Thức Tập Thể"*

---

## 📜 Tổng Quan Dự Án

**The Jung Archive** là một trải nghiệm web điện ảnh (Cinematic Web Experience) được thiết kế để khám phá tư tưởng của Carl Gustav Jung qua 120 bài viết được phân loại thành 10 trụ cột chính. Dự án kết hợp giữa tâm lý học sâu, nghệ thuật 3D, và thiết kế UI/UX cao cấp để tạo ra một "thư viện số" huyền bí và hấp dẫn.

---

## ✨ Tính Năng Chính

### 🌀 **Phase 1: The Mandala (Cổng Vào)**
- **3D Mandala Selector**: 10 vật thể 3D xoay quanh trung tâm, mỗi vật thể đại diện cho một trụ cột tư tưởng
- **Diving Camera Effect**: Hiệu ứng zoom điện ảnh khi chọn một trụ cột
- **Dynamic Lighting**: Ánh sáng thay đổi theo màu sắc của từng trụ cột

### 📚 **Phase 2: The Pillar Pages (Thư Viện Nguyên Mẫu)**
- **Dynamic Routing**: Tự động tạo trang cho 10 trụ cột từ dữ liệu file system
- **3D Artifact Display**: Hiển thị vật thể 3D đặc trưng cho mỗi trụ cột
- **Article Grid**: Danh sách bài viết được sắp xếp theo thứ tự với hiệu ứng hover cao cấp

### 🌌 **Phase 3: The Labyrinth (Mê Cung Nội Dung)**
- **Masonry Grid**: Lưới bài viết động với 120+ hồ sơ
- **Search & Filter**: Tìm kiếm theo từ khóa và lọc theo trụ cột
- **Ouroboros Progress**: Thanh tiến trình hình con rắn cắn đuôi theo dõi quá trình đọc
- **Marginalia**: Ghi chú lề trang trí với trích dẫn và metadata

### 🧪 **Phase 4: The Alchemical Lab (Phòng Thí Nghiệm)**
- **Active Imagination Engine**: Trò chuyện với Philemon (nhân vật từ Sách Đỏ)
- **Dream Journal**: Phân tích biểu tượng giấc mơ theo tâm lý học Jungian
- **Shadow Mirror**: Công cụ đối diện với bóng tối (Coming Soon)
- **Synchronicity Oracle**: Xúc xắc đồng hiện (Coming Soon)

---

## 🗂️ Cấu Trúc Nội Dung (120 Bài Viết)

### 10 Trụ Cột Chính:

1. **TIỂU SỬ & CUỘC ĐỜI** (Biography) - 12 bài
2. **CẤU TRÚC TÂM THỨC** (Concepts) - 13 bài
3. **SÁCH ĐỎ & THỊ KIẾN** (Red Book) - 12 bài
4. **GIẢ KIM THUẬT** (Alchemy) - 13 bài
5. **THỰC HÀNH & TRỊ LIỆU** (Practice) - 12 bài
6. **BIỂU TƯỢNG HỌC** (Symbols) - 12 bài
7. **TÂM LINH & TÔN GIÁO** (Spirit) - 12 bài
8. **DI SẢN & TƯƠNG LAI** (Legacy) - 11 bài
9. **VŨ TRỤ & ĐỒNG BỘ** (Cosmos) - 10 bài
10. **QUAN HỆ & GẶP GỠ** (Encounters) - 13 bài

---

## 🚀 Cài Đặt & Chạy Dự Án

### Yêu Cầu Hệ Thống
- Node.js 18+ 
- npm hoặc yarn

### Cài Đặt Dependencies
```bash
npm install
```

### Chạy Development Server
```bash
npm run dev
```

Mở trình duyệt tại: [http://localhost:3000](http://localhost:3000)

### Build Production
```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS + Custom CSS
- **Content**: Markdown (Gray Matter)
- **Typography**: Cinzel (Serif), Inter (Sans-serif)

---

## 📂 Cấu Trúc Thư Mục

```
jung_archive_app/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Trang chủ (Gateway)
│   ├── select/              # Mandala Hub
│   ├── library/             # Labyrinth Grid
│   ├── pillar/[id]/         # Dynamic Pillar Pages
│   └── globals.css          # Global Styles
├── components/
│   ├── 3d/                  # 3D Components (Mandala, Objects)
│   ├── ui/                  # UI Components (Grid, Progress...)
│   ├── reading/             # Reading Page Components
│   └── PillarPageTemplate.tsx
├── content/                 # 120 Markdown Articles
├── lib/
│   ├── content-config.ts    # Content Loading Logic
│   ├── pillar-constants.ts  # Pillar Metadata
│   └── pillar-objects.ts    # 3D Object Mapping
└── public/                  # Static Assets
```

---

## 🎨 Nguyên Tắc Thiết Kế

1. **Cinematic**: Mọi chuyển cảnh đều mượt mà như phim điện ảnh
2. **Alchemical**: Sử dụng màu vàng (#ffd700), đen (#000508) làm chủ đạo
3. **Mysterious**: Tạo cảm giác bí ẩn, huyền bí qua hiệu ứng blur, glow
4. **High-End**: Không dung túng cho thiết kế "tạm bợ" hay "placeholder"

---

## 📊 Trạng Thái Dự Án

✅ **100% Complete (Golden Master)**

- [x] Phase 1: Mandala Selector với Diving Effect
- [x] Phase 2: Dynamic Pillar Pages (10/10)
- [x] Phase 3: Labyrinth Grid + Search/Filter + Ouroboros
- [x] Phase 4: Active Imagination + Dream Journal
- [x] 120 bài viết đã được xác thực và làm phong phú
- [x] Localization tiếng Việt hoàn chỉnh
- [x] Không sử dụng hình ảnh AI (theo yêu cầu)

---

## 🔮 Roadmap Tương Lai

- [ ] Red Book Gallery (Carousel nghệ thuật)
- [ ] Shadow Mirror (Webcam interaction)
- [ ] Audio Ambience nâng cao (Binaural beats)
- [ ] Mobile Optimization
- [ ] Dark/Light Mode Toggle

---

## 📝 License

© 2026 Jung Archive Protocol - Educational & Research Purpose

---

## 🙏 Credits

- **Concept & Design**: Inspired by Carl Jung's Liber Novus (The Red Book)
- **3D Assets**: Custom-built with React Three Fiber
- **Content**: Verified from Jung's original works and scholarly sources

---

**"Ai nhìn ra bên ngoài, mơ mộng. Ai nhìn vào bên trong, thức tỉnh."**  
— Carl Gustav Jung
