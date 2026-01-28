import React from "react";
import { getAllArticlesFlat } from "@/lib/content-config";
import LabyrinthGrid from "@/components/ui/LabyrinthGrid";
import CustomCursor from "@/components/ui/CustomCursor";

export default function LibraryPage() {
    const articles = getAllArticlesFlat();

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24 font-inter relative overflow-x-hidden">
            <CustomCursor />

            {/* SUBTLE FILM GRAIN */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />

            <div className="max-w-[1600px] mx-auto relative z-10">
                {/* HEADER */}
                <header className="mb-20 text-center px-6">
                    <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">
                        The Collective Unconscious Data-Stream
                    </p>
                    <h1 className="text-6xl md:text-8xl font-cinzel font-bold tracking-tight mb-8">
                        THE LABYRINTH
                    </h1>
                    <div className="w-24 h-[1px] bg-amber-500/50 mx-auto" />
                </header>

                <LabyrinthGrid initialArticles={articles} />

                {/* FOOTER */}
                <footer className="mt-32 border-t border-white/5 py-24 px-12 flex justify-between items-center text-[10px] tracking-[0.4em] text-white/20 uppercase">
                    <span>© 2026 Jung Archive Protocol</span>
                    <a href="/select" className="hover:text-white transition-colors">
                        Return to Mandala →
                    </a>
                </footer>
            </div>
        </main>
    );
}
