"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Works", href: "/#works" },
  { label: "tools-hub", href: "/works/tools-hub" },
  { label: "cardcraft", href: "/works/cardcraft" },
  { label: "nfc-redirect", href: "/works/nfc-redirect" },
  { label: "ledger-system", href: "/works/kobutsu-ledger-system" },
];

export default function SideKanaNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "ナビゲーションを閉じる" : "ナビゲーションを開く"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="fixed right-6 top-8 z-50 flex h-12 w-16 flex-col items-center justify-center gap-2 text-zinc-700 transition hover:text-cyan-800"
      >
        <span
          className={`h-px w-14 bg-current transition ${isOpen ? "translate-y-[9px] rotate-12" : ""}`}
        />
        <span className={`h-px w-14 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
        <span
          className={`h-px w-14 bg-current transition ${isOpen ? "-translate-y-[9px] -rotate-12" : ""}`}
        />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-[rgb(240,240,240)]/95 transition duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="作品ナビゲーション"
          className="mx-auto grid min-h-screen max-w-7xl gap-12 px-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >
          <div className="max-w-sm self-end lg:self-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-800">
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-semibold tracking-[0.08em] text-zinc-700 transition hover:text-cyan-800 sm:text-6xl"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
