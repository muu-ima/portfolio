"use client";

import { useEffect, useState } from "react";

export default function PortfolioControls() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 650);

    const updateScrollTopVisibility = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      setShowScrollTop(window.scrollY > 560 || pageHeight - scrollPosition < 480);
    };

    updateScrollTopVisibility();
    window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });
    window.addEventListener("resize", updateScrollTopVisibility);

    return () => {
      window.clearTimeout(loadingTimer);
      window.removeEventListener("scroll", updateScrollTopVisibility);
      window.removeEventListener("resize", updateScrollTopVisibility);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden={!isLoading}
        className={`fixed inset-0 z-[70] grid place-items-center bg-[rgb(240,240,240)] transition duration-500 ${
          isLoading ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 text-[#2a2a2a]">
          <div className="relative h-14 w-14">
            <span className="absolute inset-0 border border-[#2a2a2a]/20" />
            <span className="absolute inset-2 animate-spin border border-transparent border-t-cyan-700" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-normal text-cyan-800">
            Portfolio
          </p>
        </div>
      </div>

      <button
        type="button"
        aria-label="ページ上部へ戻る"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-[rgb(240,240,240)] text-xl font-semibold text-zinc-800 shadow-lg shadow-zinc-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-700 hover:text-cyan-800 ${
          showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        ↑
      </button>
    </>
  );
}
