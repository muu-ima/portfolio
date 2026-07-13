import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const workspaces = [
  {
    title: "古物台帳",
    description:
      "受入れ、払出し、相手方・本人確認をタブで分け、SKU、商品名、仕入先、販売先を検索できる横長テーブルUIです。",
  },
  {
    title: "仕入れ管理",
    description:
      "仕入れ元データと仕入れ表への反映を同じ操作感で扱います。発送、梱包、原票情報を業務単位で整理します。",
  },
  {
    title: "EC販売",
    description:
      "販売額、送料、手数料、為替、損益を追える集計ビュー。Shopee や決済明細との接続を見据えています。",
  },
  {
    title: "為替・ペイメント",
    description:
      "販売時レート、出金時レート、Payout、手数料明細を分けて扱い、過度に自動計算しない段階的な設計にしています。",
  },
];

const architecture = [
  "WordPress を台帳データと管理権限のバックエンドとして利用",
  "Next.js を日常入力に使うフロントエンドとして分離",
  "WordPress プラグインに REST API、カスタムテーブル、保存処理を集約",
  "WordPress テーマは Vercel / Next.js を表示する薄いシェルに限定",
  "既存の横長スプレッドシート運用に合わせ、カード型ではなく表形式UIを中心に設計",
];

const stack = ["Next.js 16", "React 19", "TypeScript", "WordPress", "REST API", "Docker", "MySQL"];

const screenshots = [
  {
    title: "古物台帳一覧",
    description: "WordPress 管理画面側で、登録済みの仕入れ・販売データを一覧確認できます。",
    src: "/screenshots/kobutsu-ledger-system/ledger-system-1.png",
  },
  {
    title: "古物台帳編集",
    description: "SKU、商品名、状態、仕入日、販売日、Order no. などを入力する編集画面です。",
    src: "/screenshots/kobutsu-ledger-system/ledger-system-2.png",
  },
  {
    title: "EC販売",
    description: "販売額、Payout、受取金額、最終損益、利益率を行単位で確認・更新できます。",
    src: "/screenshots/kobutsu-ledger-system/ec-sales.png",
  },
  {
    title: "為替レート",
    description: "ExchangeRate-API の取得状況、手動補完、保存済みレートを管理します。",
    src: "/screenshots/kobutsu-ledger-system/exchange-rates.png",
  },
  {
    title: "Shopeeオーダー",
    description: "Shopee orders CSV を取り込み、後続のEC販売・ペイメント照合に使える原票として保存します。",
    src: "/screenshots/kobutsu-ledger-system/shopee.png",
  },
];

export const metadata: Metadata = {
  title: "kobutsu-ledger-system | Portfolio",
  description:
    "Next.js と WordPress を組み合わせた古物台帳・EC販売管理システムの紹介ページです。",
};

export default function KobutsuLedgerSystemPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-zinc-950">
      <section className="border-b border-zinc-200 bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <nav className="mb-20 flex items-center justify-between text-sm font-medium">
            <Link href="/" className="transition hover:text-slate-700">
              Portfolio
            </Link>
            <Link href="/#works" className="text-zinc-600 transition hover:text-zinc-950">
              Works
            </Link>
          </nav>

          <div className="grid gap-10 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div>
              <p className="mb-5 inline-flex border border-slate-300 bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-800">
                Ledger System / Operations Workspace
              </p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-normal sm:text-7xl">
                kobutsu-ledger-system
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700">
                古物台帳、仕入れ管理、EC販売、為替、ペイメントをひとつの業務画面で扱うためのシステムです。
                既存のスプレッドシート運用を尊重しながら、WordPress をバックエンド、Next.js を入力用ワークスペースとして分けています。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://muu-ledger-system.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  アプリを開く
                </a>
                <a
                  href="https://github.com/muu-ima/muu-ledger-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center border border-zinc-950/20 bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-50"
                >
                  GitHubを見る
                </a>
              </div>
            </div>

            <div className="border border-zinc-200 bg-zinc-50 p-5">
              <div className="border-b border-zinc-200 pb-4">
                <p className="text-sm font-semibold text-zinc-500">Workspace</p>
                <p className="mt-2 text-2xl font-semibold">業務別の画面構成</p>
              </div>
              <div className="mt-5 grid gap-3">
                {["古物台帳", "仕入れ管理", "EC販売", "為替レート", "ペイメント", "Shopeeオーダー"].map(
                  (item, index) => (
                    <div key={item} className="flex items-center justify-between border border-zinc-200 bg-white p-4">
                      <span className="text-sm font-semibold text-zinc-700">{item}</span>
                      <span className="text-xs font-medium text-zinc-400">0{index + 1}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-teal-300">
                Screenshots
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
                実際の管理画面
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-zinc-300">
              WordPress 管理画面をベースに、古物台帳、EC販売、為替、CSV取込を同じ業務導線で扱います。
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {screenshots.map((screenshot) => (
              <article key={screenshot.src} className="border border-white/15 bg-white/5 p-4">
                <div className="relative aspect-[1920/946] overflow-hidden border border-white/10 bg-white">
                  <Image
                    src={screenshot.src}
                    alt={`${screenshot.title}のスクリーンショット`}
                    fill
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <h3 className="text-2xl font-semibold tracking-normal">{screenshot.title}</h3>
                  <p className="max-w-2xl text-base leading-7 text-zinc-300">
                    {screenshot.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-slate-700">
              What It Handles
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              台帳とEC販売のつながりを、業務画面に整理する。
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {workspaces.map((item) => (
              <article key={item.title} className="border border-zinc-200 bg-white p-5">
                <h3 className="text-2xl font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-teal-700">
              Architecture
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              WordPress を業務バックエンドとして使う。
            </h2>
          </div>
          <div className="grid gap-3">
            {architecture.map((item, index) => (
              <div key={item} className="flex gap-4 border-b border-zinc-200 pb-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-zinc-950 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-lg leading-7 text-zinc-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="border-b border-zinc-300 pb-8">
            <p className="text-sm font-semibold uppercase tracking-normal text-rose-700">
              Stack
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">使っている技術</h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 px-5 py-12 text-white sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-2xl font-semibold">kobutsu-ledger-system</p>
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
