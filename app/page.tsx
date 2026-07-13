import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
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
    href: "https://muu-cardcraft.vercel.app/",
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
    <main className="min-h-screen bg-[#f3f8fc] text-zinc-950">
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="/portfolio-hero.png"
          alt="複数のアプリ画面が並ぶポートフォリオのビジュアル"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(243,248,252,0.97)_0%,rgba(243,248,252,0.84)_36%,rgba(243,248,252,0.28)_68%,rgba(243,248,252,0)_100%)]" />
        <div className="absolute inset-x-0 top-0 z-10 border-b border-sky-950/10 bg-[#f3f8fc]/76 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-sm font-medium sm:px-8">
            <a href="#" className="text-base font-semibold">
              Portfolio
            </a>
            <div className="flex items-center gap-5 text-zinc-700">
              <a href="#works" className="transition hover:text-zinc-950">
                Works
              </a>
            </div>
          </nav>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl items-center px-5 pb-24 pt-28 sm:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-md border border-zinc-950/15 bg-white/75 px-3 py-1 text-sm font-medium text-zinc-700 backdrop-blur">
              Apps, systems, and small products
            </p>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-normal text-zinc-950 sm:text-7xl">
              作ってきたものを、使い道ごとに見える形で紹介します。
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-700">
              利益計算ツール、名刺デザインエディタ、NFCプロフィール連携、古物台帳システムまで。
              実務で使うために作ってきたプロダクトを、背景と役割が伝わるように整理しています。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#works"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#082f49] px-6 text-sm font-semibold text-white transition hover:bg-[#0c4a6e]"
              >
                実績を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 border-b border-zinc-200 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
                Selected Works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
                紹介しているアプリです
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-zinc-600">
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
                    className="group rounded-md border border-zinc-200 bg-zinc-50 p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-950/5"
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
                  className="group rounded-md border border-zinc-200 bg-zinc-50 p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-950/5"
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={work.title}
                  href={work.href}
                  className="group rounded-md border border-zinc-200 bg-zinc-50 p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-950/5"
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
