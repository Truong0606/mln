import React from "react";
import Link from "next/link";
import { getAllArticlesFlat } from "@/lib/content-config";
import ActiveImagination from "@/components/ui/ActiveImagination";
import DreamJournal from "@/components/ui/DreamJournal";
import LabyrinthGrid from "@/components/ui/LabyrinthGrid";
import MandalaClient from "@/components/3d/MandalaClient";

export default function SelectionPage() {
    // Server-side data fetching
    const articles = getAllArticlesFlat();

    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-inter relative">

            {/* --- PHASE 1: THE COSMIC SPIRAL (BACKGROUND) --- */}
            <div className="fixed inset-0 z-0">
                <MandalaClient />
            </div>

            {/* --- GRADIENT OVERLAY FOR READABILITY --- */}
            <div className="fixed inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />


            {/* --- PHASE 3: THE LABYRINTH (DEEP DIVE GRID) --- */}
            <div className="relative z-20 mt-[80vh] bg-gradient-to-b from-transparent via-black to-black pt-20 pb-40">
                <LabyrinthGrid initialArticles={articles} />
            </div>

            {/* --- PHASE 4: THE ALCHEMICAL LAB (TOOLS FOOTER) --- */}
            <footer className="relative z-30 bg-[#0a0a0a] border-t border-white/5 py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-20">
                        <h4 className="text-xs font-cinzel text-amber-500/80 tracking-[0.8em] mb-4 uppercase">
                            Phòng Thí Nghiệm Giả Kim (The Alchemical Lab)
                        </h4>
                        <p className="text-3xl font-cinzel text-white/90">
                            Công cụ đối thoại với Vô thức.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* LEFT: INTERACTIVE ENGINES */}
                        <div className="space-y-12">
                            <ActiveImagination />
                            <DreamJournal />
                        </div>

                        {/* RIGHT: PORTAL CARDS & NEWSLETTER */}
                        <div className="space-y-16">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Link href="/library" className="group relative p-8 border border-white/5 hover:border-amber-500/30 bg-white/[0.02] hover:bg-amber-900/10 transition-all rounded-xl col-span-2">
                                    <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">🏛️</span>
                                    <h5 className="font-cinzel font-bold text-white mb-3 text-lg text-amber-500/60 group-hover:text-amber-500 transition-colors">Đại Sảnh Thư Viện</h5>
                                    <p className="text-xs text-stone-500 leading-relaxed font-light italic">
                                        Truy cập toàn bộ 113 tác phẩm, tài liệu gốc và hồ sơ toàn thư với công cụ tìm kiếm chuẩn xác.
                                    </p>
                                </Link>

                                <Link href="/mirror" className="group relative p-8 border border-white/5 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all rounded-xl">
                                    <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">🪞</span>
                                    <h5 className="font-cinzel font-bold text-white mb-3 text-lg text-amber-500/60 group-hover:text-amber-500 transition-colors">Gương soi Bóng</h5>
                                    <p className="text-xs text-stone-500 leading-relaxed font-light italic">
                                        Đối mặt với phần tối bị chối bỏ qua ống kính kỹ thuật số.
                                    </p>
                                </Link>

                                <Link href="/oracle" className="group relative p-8 border border-white/5 hover:border-purple-500/20 bg-white/[0.02] hover:bg-purple-900/10 transition-all rounded-xl">
                                    <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">🎲</span>
                                    <h5 className="font-cinzel font-bold text-white mb-3 text-lg text-purple-500/60 group-hover:text-purple-400 transition-colors">Xúc xắc Đồng hiện</h5>
                                    <p className="text-xs text-stone-500 leading-relaxed font-light italic">
                                        Tham vấn những sự trùng hợp có ý nghĩa từ vũ trụ.
                                    </p>
                                </Link>
                            </div>

                            <div className="p-12 border border-white/5 bg-white/[0.02] rounded-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                        <path d="M22 10.5c0-1.4-1.3-3.5-3.5-3.5-1.5 0-3 1-3.5 2.5a5.5 5.5 0 0 1-5.5 5.5c-1.4 0-2.5-1.1-2.5-2.5V11c0-2-1.5-3.5-3.5-3.5S0 9 0 11v1.5c0 2 1.5 3.5 3.5 3.5 1 0 2-.5 2.5-1.5v3c0 2.5 2.5 4.5 5.5 4.5h2c3 0 5.5-2 5.5-4.5v-3c.5 1 1.5 1.5 2.5 1.5 2 0 3.5-1.5 3.5-3.5z" />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-cinzel text-amber-500 tracking-[0.2em] mb-6 uppercase">The Raven's Message</h4>
                                <p className="text-sm text-stone-600 italic max-w-sm mb-12 leading-loose">
                                    "Con chim của trí tuệ Hermetic mang tin tức từ những tầng sâu thẳm nhất của vô thức."
                                </p>
                                <form className="flex flex-col gap-6 max-w-sm">
                                    <input
                                        type="email"
                                        placeholder="Để lại email để nhận thông điệp..."
                                        className="bg-transparent border-b border-stone-800 py-4 text-stone-300 focus:outline-none focus:border-amber-500 transition-all font-mono text-xs"
                                    />
                                    <button className="self-start px-10 py-3 bg-amber-500 text-black text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-white transition-all">
                                        Triệu Hồi Bản Tin
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-32 opacity-20 text-[9px] tracking-[1em] uppercase hover:opacity-50 transition-opacity">
                        © 2026 Jung Archive Protocol
                    </div>
                </div>
            </footer>
        </main>
    );
}
