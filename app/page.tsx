import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import SideKanaNav from "./components/SideKanaNav";
import SiteFooter from "./components/SiteFooter";

type WorkIconName = "tools" | "card" | "nfc" | "ledger";

const workIcons: Record<WorkIconName, ReactNode> = {
  tools: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M4 18h16M6 15l4-4 3 3 5-7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18 7h-4m4 0v4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ),
  card: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 10h5M8 14h8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  ),
  nfc: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M7 8a7 7 0 0 1 0 8M11 6a10 10 0 0 1 0 12M15 4a13 13 0 0 1 0 16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <circle cx="5" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  ledger: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M6 4h11a1 1 0 0 1 1 1v15H7a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8 8h7M8 12h7M8 16h4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  ),
};

const works = [
  {
    title: "tools-hub",
    category: "Business Tools",
    description:
      "海外販売向けの利益計算、送料、為替、発送情報管理をまとめた業務支援ハブです。",
    tags: ["Next.js", "Profit Calc", "Shipping"],
    accent: "bg-cyan-500",
    icon: "tools" as WorkIconName,
    href: "/works/tools-hub",
  },
  {
    title: "cardcraft",
    category: "Design Editor",
    description:
      "名刺デザインをブラウザ上で編集し、保存やPNG / JPEG書き出しまで行えるエディタです。",
    tags: ["Next.js 16", "Editor", "Supabase"],
    accent: "bg-sky-400",
    icon: "card" as WorkIconName,
    href: "/works/cardcraft",
  },
  {
    title: "nfc-redirect",
    category: "NFC Profile",
    description:
      "CardCraft と組み合わせて使う、NFC / QR 名刺のリンク管理システムです。",
    tags: ["Next.js API", "WordPress", "Supabase"],
    accent: "bg-blue-500",
    icon: "nfc" as WorkIconName,
    href: "/works/nfc-redirect",
  },
  {
    title: "kobutsu-ledger-system",
    category: "Ledger System",
    description:
      "古物台帳、仕入れ、EC販売、為替をひとつの業務画面で扱う管理システムです。",
    tags: ["Next.js", "WordPress", "Docker"],
    accent: "bg-cyan-900",
    icon: "ledger" as WorkIconName,
    href: "/works/kobutsu-ledger-system",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#dbd5cd] text-[#2a2a2a]">
      <SideKanaNav />
      <section className="relative overflow-hidden border-b border-[#c8c0b6] px-5 pb-20 pt-8 sm:px-8">
        <nav className="mx-auto flex max-w-7xl items-center py-6 text-sm font-semibold uppercase tracking-[0.28em] text-zinc-700">
          <a href="#" className="text-base normal-case tracking-[0.18em] text-zinc-500">
            Portfolio
          </a>
        </nav>

        <div className="relative mx-auto max-w-7xl pt-6">
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden bg-[#d8f2ee]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/portfolio-hero.png"
                alt="複数のアプリ画面が並ぶポートフォリオのビジュアル"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="relative z-20 mx-auto -mt-14 grid max-w-6xl gap-6 lg:grid-cols-[1fr_20rem] lg:items-end">
            <div className="bg-white/92 p-6 backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                Apps, Systems, Tools
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-normal text-zinc-950 sm:text-6xl">
                作ってきたものを紹介します。
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-700">
                実務の中で作ってきたアプリと管理システムをまとめています。
              </p>
            </div>
            <a
              href="#works"
              className="flex min-h-28 items-center justify-between bg-zinc-950 px-6 py-5 text-white transition hover:bg-cyan-950"
            >
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  View More
                </span>
                <span className="mt-2 block text-lg font-semibold">Selected Works</span>
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200 text-sm font-semibold">
                04
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="works" className="bg-[#dbd5cd] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-zinc-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Selected Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              紹介しているアプリです
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-600">
              それぞれの目的、役割、使っている技術がひと目で伝わるようにまとめています。
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {works.map((work) => {
              const isExternal = work.href?.startsWith("http");
              const cardContent = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-zinc-500">{work.category}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-normal">
                        {work.title}
                      </h3>
                    </div>
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${work.accent} text-white shadow-lg shadow-sky-950/10 ring-8 ring-sky-50 transition group-hover:scale-105`}
                      aria-hidden="true"
                    >
                      {workIcons[work.icon]}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-7 text-zinc-600">{work.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {work.href ? (
                    <p className="mt-7 text-sm font-semibold text-sky-700">
                      {isExternal ? "サイトを見る" : "詳細を見る"}
                    </p>
                  ) : null}
                </>
              );

              if (!work.href) {
                return (
                  <article
                    key={work.title}
                    className="group border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/5"
                  >
                    {cardContent}
                  </article>
                );
              }

              return isExternal ? (
                <a
                  key={work.title}
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/5"
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={work.title}
                  href={work.href}
                  className="group border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/5"
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
