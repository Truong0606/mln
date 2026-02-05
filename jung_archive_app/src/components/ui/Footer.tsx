"use client";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-black/10 backdrop-blur-sm py-6 mt-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <div className="text-xs text-white/60">
                    <strong className="text-white">Cam kết sử dụng A.I:</strong> Chúng tôi sử dụng Trí tuệ Nhân tạo như một công cụ hỗ trợ nghiên cứu, biên tập và minh họa; mọi nội dung được kiểm duyệt và hiệu chỉnh bởi đội ngũ biên tập.
                </div>

                <div className="text-xs text-white/50">
                    Created by Nguyễn Duy Khang · Ngô Huy Quang Trường · Trần Quốc Anh
                </div>
            </div>
        </footer>
    );
}
