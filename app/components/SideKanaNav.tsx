"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Works", href: "/#works" },
  { label: "tools-hub", href: "/works/tools-hub" },
  { label: "cardcraft", href: "/works/cardcraft" },
  { label: "nfc-redirect", href: "/works/nfc-redirect" },
  { label: "ledger-system", href: "/works/kobutsu-ledger-system" },
];

export default function SideKanaNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "ナビゲーションを閉じる" : "ナビゲーションを開く"}
        aria-expanded={isOpen}
        aria-controls="portfolio-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="fixed right-4 top-4 z-50 flex h-20 w-24 flex-col items-center justify-center gap-2 text-zinc-700 transition hover:text-[#0e6871] sm:right-7 sm:top-5"
      >
        <span aria-hidden="true" className="flex h-5 flex-col items-center justify-center gap-2">
          <span
            className={`h-px w-16 bg-current transition ${isOpen ? "translate-y-[9px] rotate-[30deg]" : ""}`}
          />
          <span className={`h-px w-16 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-16 bg-current transition ${isOpen ? "-translate-y-[9px] -rotate-[30deg]" : ""}`}
          />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
          {isOpen ? "Close" : "Menu"}
        </span>
      </button>

      <div
        id="portfolio-navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 bg-[#dbd5cd]/95 transition duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="作品ナビゲーション"
          className="mx-auto grid min-h-screen max-w-7xl gap-12 px-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >
          <div className="max-w-sm self-end lg:self-center">
            <p className="section-kicker">
              Portfolio
            </p>
            <p className="mt-6 text-4xl font-semibold tracking-normal text-zinc-900 sm:text-6xl">
              muu-ima
            </p>
            <p className="mt-5 text-base leading-7 text-zinc-600">
              実務の中で作ってきたアプリ、管理画面、ツールをまとめています。
            </p>
            <div className="mt-10 grid gap-3 border-t border-zinc-300 pt-6 text-sm font-medium text-zinc-500">
              <span>Apps and systems</span>
              <span>Next.js / WordPress / Supabase</span>
            </div>
          </div>

          <div className="grid gap-5 text-right lg:justify-self-end">
            {navItems.map((item) => {
              const isActive = item.href === "/#works" ? pathname === "/" : pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={isActive ? "page" : undefined}
                  className={`group inline-flex items-center justify-end gap-4 text-4xl font-semibold tracking-[0.04em] transition sm:text-6xl ${
                    isActive ? "text-[#0e6871]" : "text-zinc-700 hover:text-[#0e6871]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full bg-current transition ${
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-60"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}
