"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Works", href: "/#works" },
  { label: "tools-hub", href: "/works/tools-hub" },
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
        className={`fixed inset-0 z-40 bg-[#e6e0d6]/95 transition duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="作品ナビゲーション"
          className="mx-auto flex min-h-screen max-w-7xl items-center justify-end px-10 py-20"
        >
          <div className="grid gap-5 text-right">
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
