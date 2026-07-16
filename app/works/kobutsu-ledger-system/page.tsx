import type { Metadata } from "next";
import Link from "next/link";
import SideKanaNav from "../../components/SideKanaNav";
import SiteFooter from "../../components/SiteFooter";
import ScreenshotSlider from "./ScreenshotSlider";

const workspaces = [
  {
    title: "古物台帳",
    description:
      "スプレッドシートで追っていた受入れ、払出し、相手方情報を、検索できる台帳画面として整理しています。",
  },
  {
    title: "仕入れ管理",
    description:
      "仕入れ元データを原票として保存し、商品・仕入れ・販売へつながる入口にしています。",
  },
  {
    title: "EC販売",
    description:
      "販売額、送料、手数料、為替、損益をひとつの流れで確認できるようにしています。",
  },
  {
    title: "為替・ペイメント",
    description:
      "販売時レート、出金時レート、Payout、手数料明細を分けて、後から確認できる形にしています。",
  },
];

const architecture = [
  "スプレッドシートの横長データを、原票・商品・仕入れ・販売に分けて保存",
  "WordPress を台帳データと管理権限のバックエンドとして利用",
  "Next.js を日常入力に使うフロントエンドとして分離",
  "WordPress プラグインに REST API、カスタムテーブル、保存処理を集約",
  "CSV 原票、Shopee オーダー、ペイメント、為替を補助データとして扱う",
];

const stack = ["Next.js 16", "React 19", "TypeScript", "WordPress", "REST API", "Docker", "MySQL"];

const migrationPoints = [
  {
    label: "Before",
    title: "横長シートで人が判断",
    description:
      "古物台帳、EC販売、仕入れ、為替、ペイメントが複数タブに分かれ、手動列と自動計算が同じ流れに混在していました。",
  },
  {
    label: "Issue",
    title: "数式と参照が崩れやすい",
    description:
      "VLOOKUP、為替レート、送料、容積重量、手数料の参照が増えるほど、#N/A や #VALUE! の確認が必要になっていました。",
  },
  {
    label: "After",
    title: "原票を残してWeb管理",
    description:
      "入力元を原票として保存し、商品、仕入れ、販売、精算へ分けて扱えるようにしています。",
  },
];

const screenshots = [
  {
    title: "古物台帳一覧",
    description: "WordPress 管理画面側で、登録済みの仕入れ・販売データを一覧確認できます。",
    src: "/screenshots/kobutsu-ledger-system/ledger-list-redacted.png",
  },
  {
    title: "古物台帳編集",
    description: "SKU、商品名、状態、仕入日、販売日、Order no. などを入力する編集画面です。",
    src: "/screenshots/kobutsu-ledger-system/ledger-edit-redacted.png",
  },
  {
    title: "EC販売",
    description: "販売額、Payout、受取金額、最終損益、利益率を行単位で確認・更新できます。",
    src: "/screenshots/kobutsu-ledger-system/ec-sales-redacted.png",
  },
  {
    title: "為替レート",
    description: "ExchangeRate-API の取得状況、手動補完、保存済みレートを管理します。",
    src: "/screenshots/kobutsu-ledger-system/exchange-rates-redacted.png",
  },
  {
    title: "Shopeeオーダー",
    description: "Shopee orders CSV を取り込み、後続のEC販売・ペイメント照合に使える原票として保存します。",
    src: "/screenshots/kobutsu-ledger-system/shopee-orders-redacted.png",
  },
];

export const metadata: Metadata = {
  title: "kobutsu-ledger-system | Portfolio",
  description:
    "スプレッドシート運用をWeb化した、古物台帳・EC販売管理システムの紹介ページです。",
};

export default function KobutsuLedgerSystemPage() {
  return (
    <main className="min-h-screen bg-[rgb(240,240,240)] text-zinc-950">
      <SideKanaNav />
      <section className="border-b border-zinc-200 bg-[rgb(240,240,240)] px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-20 flex items-center text-sm font-medium">
            <Link href="/" className="transition hover:text-sky-700">
              Portfolio
            </Link>
          </nav>

          <div className="grid gap-10 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div>
              <p className="mb-5 inline-flex rounded-md border border-sky-300 bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-800">
                Ledger System / Operations Workspace
              </p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-normal sm:text-7xl">
                kobutsu-ledger-system
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700">
                スプレッドシートで管理していた古物台帳、仕入れ、EC販売、為替、ペイメントを、
                Web上で扱える業務システムとして作り直しています。
                原票を残しながら、入力・確認・更新の流れを整理しています。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://muu-ledger-system.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#082f49] px-6 text-sm font-semibold text-white transition hover:bg-[#0c4a6e]"
                >
                  アプリを開く
                </a>
                <a
                  href="https://github.com/muu-ima/muu-ledger-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-950/20 bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-50"
                >
                  GitHubを見る
                </a>
              </div>
            </div>

            <div className="rounded-md border border-zinc-200 bg-zinc-50 p-5 shadow-sm shadow-zinc-950/5">
              <div className="border-b border-zinc-200 pb-4">
                <p className="text-sm font-semibold text-zinc-500">Workspace</p>
                <p className="mt-2 text-2xl font-semibold">業務別の画面構成</p>
              </div>
              <div className="mt-5 grid gap-3">
                {["古物台帳", "仕入れ管理", "EC販売", "為替レート", "ペイメント", "Shopeeオーダー"].map(
                  (item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-md border border-zinc-200 bg-white p-4">
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

      <section className="border-b border-zinc-200 bg-[rgb(240,240,240)] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
                Migration
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-5xl">
                表計算の運用を、業務データとして分けました。
              </h2>
            </div>
            <div className="grid gap-3">
              {migrationPoints.map((item) => (
                <article
                  key={item.label}
                  className="grid gap-3 rounded-md border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/5 sm:grid-cols-[7rem_1fr] sm:p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
                    {item.label}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold tracking-normal">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#083344] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-cyan-200">
                Screenshots
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-5xl">
                スプレッドシート運用を画面に移しました。
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-zinc-300">
              古物台帳、EC販売、為替、CSV取込を、同じ業務導線の中で確認できるようにしています。
            </p>
          </div>

          <ScreenshotSlider screenshots={screenshots} />
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="border-b border-zinc-200 pb-6 lg:border-b-0 lg:pb-0">
            <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
              What It Handles
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-5xl">
              台帳、仕入れ、販売を分けて扱えます。
            </h2>
            <div className="mt-8 grid max-w-sm gap-2">
              {[
                ["台帳", "受入れ・払出し"],
                ["仕入れ", "原票と梱包"],
                ["販売", "売上と損益"],
                ["為替", "レートと支払い"],
              ].map(([label, text]) => (
                <div key={label} className="flex items-center justify-between border border-zinc-200 bg-white px-4 py-3 text-sm shadow-sm shadow-zinc-950/5">
                  <span className="font-semibold text-zinc-900">{label}</span>
                  <span className="text-zinc-500">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            {workspaces.map((item) => (
              <article key={item.title} className="rounded-md border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/5 sm:p-5">
                <h3 className="text-xl font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[rgb(240,240,240)] px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="border-b border-zinc-200 pb-6 lg:border-b-0 lg:pb-0">
            <p className="text-sm font-semibold uppercase tracking-normal text-cyan-700">
              Architecture
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-5xl">
              原票を残して、必要な画面へ同期します。
            </h2>
            <div className="mt-8 max-w-sm border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/5">
              <div className="border border-zinc-200 bg-[rgb(240,240,240)] px-3 py-3 text-center text-sm font-semibold text-zinc-800">
                WordPress
              </div>
              <div className="my-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-sm font-semibold text-zinc-700">
                <span className="border border-zinc-200 bg-white px-3 py-3 text-center">
                  Plugin
                </span>
                <span className="text-cyan-700">+</span>
                <span className="border border-zinc-200 bg-white px-3 py-3 text-center">
                  Table
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-zinc-700">
                <span className="flex-1 border border-zinc-200 bg-zinc-50 px-3 py-3 text-center">
                  REST API
                </span>
                <span className="text-cyan-700">→</span>
                <span className="flex-1 border border-zinc-200 bg-zinc-50 px-3 py-3 text-center">
                  Next.js
                </span>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            {architecture.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-md border border-zinc-200 bg-zinc-50 p-3 sm:p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#082f49] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-zinc-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-zinc-300 pb-8">
            <p className="text-sm font-semibold uppercase tracking-normal text-blue-700">
              Stack
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">使っている技術です</h2>
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

      <SiteFooter />
    </main>
  );
}
