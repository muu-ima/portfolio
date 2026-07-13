import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "UK / US 利益計算",
    description:
      "販売価格、仕入れ、送料、カテゴリ手数料、Payoneer 手数料、両替手数料をまとめて計算。UK は VAT と 135 GBP ルール、US は州税や固定手数料を考慮します。",
  },
  {
    title: "逆算モード",
    description:
      "目標利益率から必要な売値を逆算。通常計算と同じロジックを使い、売上ベースや最終利益ベースの判断を揃えています。",
  },
  {
    title: "送料・商品管理の拡張",
    description:
      "海外発送商品の重量、サイズ、配送方法、実送料を管理する Shipping Manager を同居。WordPress 連携を見据えた構成です。",
  },
];

const stack = ["Next.js App Router", "TypeScript", "Tailwind CSS", "Framer Motion", "Docker", "Vercel"];

export const metadata: Metadata = {
  title: "tools-hub | Portfolio",
  description:
    "海外販売向けの利益計算、送料計算、為替表示をまとめた業務支援ハブアプリ tools-hub の紹介ページです。",
};

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-zinc-950">
      <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/portfolio-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_48%,rgba(255,255,255,0.62)_100%)]" />

        <div className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <nav className="mb-20 flex items-center justify-between text-sm font-medium">
            <Link href="/" className="transition hover:text-teal-700">
              Portfolio
            </Link>
            <Link href="/#works" className="text-zinc-600 transition hover:text-zinc-950">
              Works
            </Link>
          </nav>

          <div className="grid gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-5 inline-flex border border-teal-700/20 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
                Business Tools
              </p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-normal sm:text-7xl">
                tools-hub
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700">
                海外販売向けの利益計算、送料シミュレーション、為替表示をまとめた業務支援ハブです。
                UK / US の販売条件や手数料を整理し、毎日の価格判断を速くするために作りました。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/downloads/tools-hub-overview.pptx"
                  download
                  className="inline-flex h-12 items-center justify-center bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  PPTX資料をダウンロード
                </a>
                <a
                  href="https://github.com/muu-ima/muu-tools-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center border border-zinc-950/20 bg-white/80 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-white"
                >
                  GitHubを見る
                </a>
              </div>
            </div>

            <div className="border border-zinc-200 bg-white/88 p-5 shadow-2xl shadow-zinc-950/10 backdrop-blur">
              <div className="border-b border-zinc-200 pb-4">
                <p className="text-sm font-semibold text-zinc-500">Dashboard Preview</p>
                <p className="mt-2 text-2xl font-semibold">Profit Calculator</p>
              </div>
              <div className="grid gap-4 py-5">
                {[
                  ["Final Profit", "JPY 18,420", "text-teal-700"],
                  ["VAT / Tax", "Auto", "text-rose-600"],
                  ["Shipping", "EMS / DHL", "text-amber-600"],
                ].map(([label, value, color]) => (
                  <div key={label} className="flex items-center justify-between bg-zinc-50 p-4">
                    <span className="text-sm font-medium text-zinc-500">{label}</span>
                    <span className={`text-xl font-semibold ${color}`}>{value}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 bg-teal-500" />
                <div className="h-16 bg-rose-500" />
                <div className="h-16 bg-amber-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-teal-700">
              Overview
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              複雑な販売計算を、毎日使える形にする。
            </h2>
          </div>
          <div className="grid gap-5">
            {features.map((feature) => (
              <article key={feature.title} className="border border-zinc-200 bg-white p-5">
                <h3 className="text-2xl font-semibold tracking-normal">{feature.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 border-b border-zinc-200 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-rose-700">
                Stack
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal">使っている技術</h2>
            </div>
            <a
              href="/downloads/tools-hub-overview.pptx"
              download
              className="inline-flex h-12 shrink-0 items-center justify-center bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              資料をダウンロード
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 px-5 py-12 text-white sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-2xl font-semibold">tools-hub</p>
          <Link
            href="/#works"
            className="inline-flex h-12 items-center justify-center bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            一覧に戻る
          </Link>
        </div>
      </footer>
    </main>
  );
}
