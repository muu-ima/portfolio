import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SideKanaNav from "../../components/SideKanaNav";
import SiteFooter from "../../components/SiteFooter";

const features = [
  {
    title: "ベース指板を度数で見る",
    description:
      "ルートとコードタイプを選ぶと、4弦ベースの指板上に 1、3、5、b7 などのコード構成音を表示します。",
  },
  {
    title: "音を鳴らして確認する",
    description:
      "指板上のノート、アルペジオ、コード再生を Web Audio API で鳴らし、目で見た位置と耳で聞く音をつなげます。",
  },
  {
    title: "メトロノームと進行再生",
    description:
      "BPM、Tap Tempo、拍子、Pulse、Count-in、Swing を設定し、コード進行ループと合わせて練習できます。",
  },
  {
    title: "コード進行エディター",
    description:
      "小節、拍、Hit / Rest / Tie、16分ステップ、音価、Undo / Redo を扱う専用エディターを作っています。",
  },
  {
    title: "スケール譜面と指番号",
    description:
      "12キーのスケール、Key Modes、度数と指番号の切り替え、PDF印刷用の譜面コンテンツを用意しています。",
  },
  {
    title: "反復練習コンテンツ",
    description:
      "E Major Triplets など、メトロノーム位置や身体の拍感を確認するための練習譜面も入れています。",
  },
];

const buildNotes = [
  "練習中に迷ったポイントを、そのまま機能追加の起点にする",
  "度数、音名、指番号、譜面、再生音をひとつの練習導線につなげる",
  "コード進行の編集ロジックは React UI から分け、テストしやすい純粋関数側へ寄せる",
  "完成サービスではなく、日々使いながら必要な表示と操作を足していく",
];

const stack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Web Audio API",
  "VexFlow",
  "Music Theory Data",
  "localStorage",
  "Vitest",
];

const appUrl = "https://nuu-fret-degree.vercel.app/";

const strings = ["G", "D", "A", "E"];
const fretMarkers = ["1", "3", "5", "b7", "9", "11"];
const toolPanels = [
  ["Practice", "指板 / 度数 / コード再生"],
  ["Metronome", "BPM / Count-in / Swing"],
  ["Progression", "ループ再生 / 伴奏パターン"],
  ["Scales", "度数 / 指番号 / PDF"],
];

export const metadata: Metadata = {
  title: "muu-fret-degree | Portfolio",
  description:
    "ベース指板のコード度数確認、メトロノーム、コード進行エディター、スケール譜面をまとめた自分用練習ツール muu-fret-degree の紹介ページです。",
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
                ベース指板上のコード構成音を度数で確認し、メトロノーム、コード進行ループ、進行エディター、スケール譜面まで使える自分用の練習ツールです。
                完成されたサービスというより、練習中に自分が迷うところを少しずつアプリ化しているプロジェクトです。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-action"
                >
                  アプリを開く
                </a>
                <a
                  href="https://github.com/muu-ima/nuu-fret-degree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-action"
                >
                  GitHubを見る
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Personal Tool", "In Progress", "Bass Practice"].map((label) => (
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
                  <p className="mt-2 text-2xl font-semibold">度数と練習機能をまとめる</p>
                </div>
                <span className="rounded-[var(--portfolio-radius)] bg-[#0e6871]/10 px-3 py-1 text-xs font-semibold text-[#0e6871]">
                  in progress
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-[var(--portfolio-radius)] border border-[#c8c0b6] bg-[#1f2422] p-4 text-[#f6f1e9]">
                <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#b6d9dc]">
                  <span>Root: E</span>
                  <span>Chord: m7</span>
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
              <div className="mt-4 grid grid-cols-2 gap-3">
                {toolPanels.map(([label, value]) => (
                  <div key={label} className="rounded-[var(--portfolio-radius)] border border-[#c8c0b6] bg-white/25 px-3 py-3">
                    <p className="text-xs font-semibold text-[#0e6871]">{label}</p>
                    <p className="mt-1 text-sm font-medium text-zinc-700">{value}</p>
                  </div>
                ))}
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
              指板、リズム、コード進行、譜面を、
              <br />
              ひとつの練習場所にまとめています。
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-600">
              業務アプリとは違い、日々の練習で感じた小さな不便をそのまま形にした個人制作です。
              音楽理論を読むだけで終わらせず、指板、音、コード譜、譜面として触れるようにしています。
            </p>
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-3">
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
              自分用だからこそ、細かい練習の違和感まで拾っています。
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-200">
              ポートフォリオでは、商用・業務向けではない自分用ツールとして位置づけています。
              ただ、メトロノーム、進行編集、譜面表示、音声再生まで入っているので、音楽理論とUIをつなぐ実験として見せられる内容になっています。
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
