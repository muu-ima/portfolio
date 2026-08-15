import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SideKanaNav from "../../components/SideKanaNav";
import SiteFooter from "../../components/SiteFooter";

const features = [
  {
    title: "度数で指板を見る",
    description:
      "ルートから見た 3rd、5th、7th などの位置を、音名よりも度数の関係として確認できるようにしています。",
  },
  {
    title: "練習中にすぐ確認する",
    description:
      "曲作りやフレーズ練習中に、指板上の見え方をさっと見直すための自分用メモツールとして作りました。",
  },
  {
    title: "音楽理論をUIに落とす",
    description:
      "頭の中だけで考えがちな音程の関係を、フレットボード上の配置として手元で確認できる形にしています。",
  },
  {
    title: "まだ育てている途中",
    description:
      "完成サービスではなく、使いながら必要な表示や操作を足していくパーソナルツールとして扱っています。",
  },
];

const buildNotes = [
  "度数、弦、フレットを視覚的に追えるシンプルな画面を優先",
  "自分の練習中に迷ったポイントを、そのまま機能追加の起点にする",
  "音名よりもインターバルの理解を助ける見せ方を探る",
  "完成度よりも、実際に使い続けながら改善できる余白を残す",
];

const stack = ["Next.js", "React", "TypeScript", "Music Theory", "Responsive UI"];

const strings = ["E", "B", "G", "D", "A", "E"];
const fretMarkers = ["R", "m3", "5", "b7", "9", "11"];

export const metadata: Metadata = {
  title: "muu-fret-degree | Portfolio",
  description:
    "ギター指板上で度数や音程の見え方を確認するための自分用フレットボード学習ツール muu-fret-degree の紹介ページです。",
};

export default function MuuFretDegreePage() {
  return (
    <main className="min-h-screen bg-[#dbd5cd] text-[#2a2a2a]">
      <SideKanaNav />
      <section className="relative overflow-hidden border-b border-[#c8c0b6] bg-[#dbd5cd]">
        <div className="absolute inset-0 opacity-45">
          <Image
            src="/work-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(219,213,205,0.98)_0%,rgba(219,213,205,0.9)_52%,rgba(219,213,205,0.62)_100%)]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-8 sm:px-8">
          <nav className="mb-20 flex items-center text-sm font-medium">
            <Link href="/" className="transition hover:text-[#0e6871]">
              Portfolio
            </Link>
          </nav>

          <div className="grid gap-10 pb-20 lg:grid-cols-[0.98fr_1.02fr] lg:items-end">
            <div>
              <p className="section-kicker mb-5 inline-flex border-b border-[#0e6871]/30 pb-1">
                Personal Music Tool
              </p>
              <h1 className="section-title text-4xl font-semibold sm:text-7xl">
                muu-fret-degree
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700">
                ギター指板上で、ルートから見た度数や音程の位置を確認するための自分用フレットボード学習ツールです。
                完成されたサービスというより、練習や作曲中に自分が迷うところをアプリ化している途中のプロジェクトです。
              </p>
              <div className="mt-9 flex flex-wrap gap-2">
                {["Personal Tool", "In Progress", "Music Theory"].map((label) => (
                  <span key={label} className="meta-tag">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-card p-5">
              <div className="flex items-start justify-between gap-4 border-b border-[#c8c0b6] pb-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-500">Fretboard View</p>
                  <p className="mt-2 text-2xl font-semibold">度数の位置を眺める</p>
                </div>
                <span className="rounded-[var(--portfolio-radius)] bg-[#0e6871]/10 px-3 py-1 text-xs font-semibold text-[#0e6871]">
                  draft
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-[var(--portfolio-radius)] border border-[#c8c0b6] bg-[#1f2422] p-4 text-[#f6f1e9]">
                <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#b6d9dc]">
                  <span>Root: C</span>
                  <span>Mode: Degree</span>
                </div>
                <div className="grid gap-2">
                  {strings.map((stringName, stringIndex) => (
                    <div key={`${stringName}-${stringIndex}`} className="grid grid-cols-[1.8rem_repeat(6,minmax(2.2rem,1fr))] items-center gap-2">
                      <span className="text-xs font-semibold text-[#d8c9aa]">{stringName}</span>
                      {fretMarkers.map((marker, fretIndex) => {
                        const isActive = (stringIndex + fretIndex) % 3 === 0;

                        return (
                          <span
                            key={`${stringName}-${marker}-${fretIndex}`}
                            className={`flex h-9 min-w-0 items-center justify-center border-l border-[#8f7d5f] text-xs font-semibold ${
                              isActive
                                ? "rounded-full bg-[#b6d9dc] text-[#083b46]"
                                : "text-[#e3dacb]/55"
                            }`}
                          >
                            {isActive ? marker : ""}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-b border-[#c8c0b6] pb-8">
            <p className="section-kicker">
              What It Does
            </p>
            <h2 className="section-title mt-3 max-w-5xl text-3xl font-semibold sm:text-5xl">
              自分の練習のために、
              <br />
              指板と度数を結びつけています。
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-600">
              業務アプリとは違い、日々の練習で感じた小さな不便をそのまま形にした個人制作です。
            </p>
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="surface-card p-4 sm:p-5">
                <h3 className="text-xl font-semibold tracking-normal">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#c8c0b6] bg-[#2a2a2a] px-5 py-14 text-[#dbd5cd] sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl border-b border-white/10 pb-6">
            <p className="section-kicker-dark">
              Build Notes
            </p>
            <h2 className="section-title mt-3 text-3xl font-semibold sm:text-5xl">
              完成度よりも、使いながら育てることを優先しています。
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-200">
              ポートフォリオでは、商用・業務向けではない自分用ツールとして位置づけています。
              小さなプロトタイプから自分の理解を支える画面へ育てていくタイプの制作です。
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {buildNotes.map((note, index) => (
              <div key={note} className="rounded-[var(--portfolio-radius)] border border-white/15 bg-white/5 p-4 sm:p-5">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--portfolio-radius)] bg-[#b6d9dc] text-sm font-semibold text-[#083b46]">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-7 text-zinc-100">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 border-b border-zinc-200 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">
                Stack
              </p>
              <h2 className="section-title mt-3 text-3xl font-semibold">使っている技術です</h2>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="meta-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
