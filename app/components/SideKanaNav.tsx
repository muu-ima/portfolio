"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { kana: "わーくす", slug: "works", href: "/#works" },
  { kana: "つぅるはぶ", slug: "tools-hub", href: "/works/tools-hub" },
  { kana: "えぬえふしー", slug: "nfc-redirect", href: "/works/nfc-redirect" },
  { kana: "れじゃー", slug: "ledger-system", href: "/works/kobutsu-ledger-system" },
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
        className={`fixed inset-0 z-40 bg-[#e6e0d6]/95 transition duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="作品ナビゲーション"
          className="mx-auto flex min-h-screen max-w-7xl items-center justify-end px-10 py-20"
        >
          <div className="flex items-start gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-start gap-2 text-zinc-700 transition hover:text-cyan-800"
              >
                <span className="vertical-rl text-2xl font-semibold tracking-[0.2em]">
                  {item.kana}
                </span>
                <span className="vertical-rl text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 transition group-hover:text-cyan-700">
                  {item.slug}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
