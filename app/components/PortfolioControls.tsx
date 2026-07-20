"use client";

import { useEffect, useState } from "react";
import LoaderMark from "./LoaderMark";

export default function PortfolioControls() {
  const [showInitialLoader, setShowInitialLoader] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const storageKey = "portfolio-initial-loader-seen";
    const hasVisited = window.sessionStorage.getItem(storageKey) === "true";

    if (!hasVisited) {
      window.sessionStorage.setItem(storageKey, "true");
    }

    const loadingTimer = window.setTimeout(
      () => setShowInitialLoader(false),
      hasVisited ? 0 : 650,
    );
    return () => window.clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const updateScrollTopVisibility = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      setShowScrollTop(window.scrollY > 560 || pageHeight - scrollPosition < 480);
    };

    updateScrollTopVisibility();
    window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });
    window.addEventListener("resize", updateScrollTopVisibility);

    return () => {
      window.removeEventListener("scroll", updateScrollTopVisibility);
      window.removeEventListener("resize", updateScrollTopVisibility);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden={!showInitialLoader}
        className={`fixed inset-0 z-[90] grid place-items-center bg-[#dbd5cd] transition-opacity duration-500 ${
          showInitialLoader ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <LoaderMark label="Portfolio" />
      </div>

      <button
        type="button"
        aria-label="ページ上部へ戻る"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-[var(--portfolio-radius)] border border-[#aaa197] bg-[#dbd5cd]/90 text-lg font-semibold text-zinc-800 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#0e6871] hover:text-[#0e6871] ${
          showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        ↑
      </button>
    </>
  );
}
