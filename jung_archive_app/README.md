# 🔮 The Jung Archive: A Digital Grimoire (Hồ Sơ C.G. Jung)

> *"Who works with images work with the soul."* — C.G. Jung

**The Jung Archive** là một trải nghiệm web tương tác (Interactive Web Experience) kết hợp giữa nghệ thuật, tâm lý học và công nghệ 3D (WebGL). Dự án tái hiện hành trình khám phá Tâm thức (Unconscious) thông qua các khái niệm cốt lõi của **Carl Gustav Jung** như *Bóng âm (Shadow)*, *Cái Tôi (Ego)*, *Mandala*, và *Giả kim thuật*.

Dự án không chỉ là một blog đọc bài bình thường, mà là một "thư viện số sống động" (Digital Grimoire), nơi người dùng bước vào một không gian 3D huyền bí, điều hướng qua các tầng kiến thức bằng trực giác và âm thanh.

![Project Screenshot](public/thumbnail.png) *(Tự thêm ảnh demo vào đây)*

---

## ✨ Tính Năng Nổi Bật (Key Features)

### 1. Trải Nghiệm 3D Immersive (React Three Fiber)
- **Mandala Navigation**: Hệ thống điều hướng 3D xoay tròn, mỗi quả cầu (Sphere) đại diện cho một "Cột trụ" kiến thức (Archetypes, Shadow, Alchemy...).
- **Cosmic Mind Scene**: Cảnh mở màn mô phỏng vũ trụ tâm thức với các neuron thần kinh rực sáng kết nối.
- **Custom Shaders**: Hiệu ứng "Ink Reveal" (Mực loang trên giấy) và các hiệu ứng hạt (Particles) độc bản.

### 2. Giao Diện "Tech-Mystic" (Cinematic UI)
- **Cinematic Transitions**: Hiệu ứng chuyển cảnh "Warp Speed" khi đi sâu vào vô thức.
- **Micro-interactions**: Nút bấm, hiệu ứng hover, trỏ chuột (Custom Cursor) được thiết kế theo phong cách ma thuật công nghệ cao.
- **Responsive Layout**: Tối ưu hóa cho cả trải nghiệm máy tính và màn hình lớn.

### 3. Chế Độ Đọc Chuyên Sâu (Deep Reading Mode)
- **Ambient Atmosphere**: Video nền (Background Video) nhẹ nhàng kết hợp với âm thanh "Deep Hum" (Sound Engine) giúp tăng sự tập trung.
- **Interactive Markdown**: Nội dung bài viết được render từ Markdown với typography được tinh chỉnh (Font Cinzel & Playfair Display).
- **Ouroboros Progress**: Thanh tiến trình đọc bài cách điệu hình rắn cắn đuôi.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

Dự án được xây dựng trên nền tảng Web hiện đại, tối ưu hiệu năng đồ họa:

- **Core**: [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/).
- **3D & Graphics**:
    - [React Three Fiber](https://docs.pmnd.rs/react-three-fiber): Render Three.js trong React.
    - [Drei](https://github.com/pmndrs/drei): Thư viện hỗ trợ cho R3F.
    - [React Three Postprocessing](https://github.com/pmndrs/react-postprocessing): Hiệu ứng hậu kỳ (Bloom, Noise, Vignette).
    - [Custom GLSL Shaders]: Viết tay các shader hiệu ứng đặc biệt.
- **Styling & Animation**:
    - [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS.
    - [Framer Motion](https://www.framer.com/motion/): Animation cho UI 2D.
- **Content**:
    - `gray-matter`, `remark`, `rehype`: Xử lý nội dung Markdown.

---

## 🚀 Hướng Dẫn Cài Đặt (Installation Guide)

### Yêu cầu hệ thống
- **Node.js**: Phiên bản 18.x hoặc mới hơn.
- **Package Manager**: npm, yarn, hoặc pnpm.
- **Trình duyệt**: Chrome/Edge/Firefox (Cần hỗ trợ WebGL tốt).

### Các bước cài đặt

1.  **Clone dự án về máy:**
    ```bash
    git clone https://github.com/your-username/jung-archive-app.git
    cd jung-archive-app
    ```

2.  **Cài đặt `node_modules`:**
    ```bash
    npm install
    # hoặc
    yarn install
    ```

3.  **Tạo thư mục nội dung (Nếu chưa có):**
    Hãy chắc chắn rằng thư mục `content/` ở gốc dự án có chứa các file `.md` với định dạng frontmatter đúng.
    *Ví dụ cấu trúc file `content/shadow.md`:*
    ```markdown
    ---
    title: "The Shadow"
    description: "Khám phá mặt tối của tâm hồn."
    date: "2024-01-29"
    ---
    Nội dung bài viết ở đây...
    ```

4.  **Chạy server phát triển (Development Mode):**
    ```bash
    npm run dev
    ```
    Truy cập `http://localhost:3000` (hoặc port hiển thị trên terminal) để xem kết quả.

5.  **Build production (Tùy chọn):**
    ```bash
    npm run build
    npm start
    ```

---

## 📂 Cấu Trúc Dự Án (Project Structure)

```
jung_archive_app/
├── public/                 # Tài nguyên tĩnh (video, images, fonts)
│   ├── vid1.mp4           # Video Intro
│   ├── vid3.mp4           # Video nền đọc bài
│   └── textures/          # Texture cho 3D
├── content/                # Các bài viết Markdown (Cơ sở dữ liệu)
├── src/
│   ├── app/                # Next.js App Router (Các trang)
│   │   ├── page.tsx        # Trang chủ (Intro)
│   │   ├── select/         # Trang chọn Cột trụ (Mandala)
│   │   └── layout.tsx      # Layout chính
│   ├── components/
│   │   ├── 3d/             # Các component 3D (Quan trọng)
│   │   │   ├── AlchemicalCanvas.tsx  # Shader nền
│   │   │   ├── MandalaScene.tsx      # Cảnh chính
│   │   │   └── ...
│   │   ├── library/        # Component hiển thị bài đọc
│   │   ├── ui/             # Component UI chung (Button, Cursor...)
│   │   └── audio/          # Xử lý âm thanh
│   └── lib/                # Các hàm tiện ích (đọc file md...)
├── tailwind.config.ts      # Cấu hình Tailwind theme
└── next.config.mjs         # Cấu hình Next.js
```

---

## ⚠️ Lưu Ý & Troubleshooting

- **Lỗi WebGL**: Nếu màn hình đen hoặc không hiện vật thể 3D, hãy kiểm tra xem trình duyệt có bật Hardware Acceleration chưa.
- **Hydration Mismatch**: Đôi khi xảy ra do sự khác biệt giữa Server và Client khi render ngày giờ hoặc số ngẫu nhiên. Refresh lại trang thường sẽ hết.
- **Video không tự chạy**: Do chính sách Autoplay của trình duyệt. Hãy chắc chắn bạn đã tương tác (click) vào trang ít nhất 1 lần.

---

## 📜 Credits

Created by **Antigravity Team** & **[Tên Bạn]**.
Inspired by the works of C.G. Jung and the Red Book.

*“Vinh quang cho kẻ dám nhìn vào gương và không vỡ vụn.”*
