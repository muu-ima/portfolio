import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

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
    title: "送料シミュレーション",
    description:
      "実重量と容積重量を比較し、小型包装、FedEx、EMS の送料候補を算出。利益計算と同じ判断材料として使えるようにしています。",
  },
  {
    title: "発送情報管理システム",
    description:
      "WordPress Products と連携し、SKU、カテゴリ、重量、サイズ、実送料を検索・編集できる Shipping Manager を実装。商品データ管理、重量計算、配送料ロジックを分離した構成です。",
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
    <main className="min-h-screen bg-[#e6e0d6] text-zinc-950">
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#e6e0d6]">
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

        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <nav className="mb-20 flex items-center justify-between text-sm font-medium">
            <Link href="/" className="transition hover:text-sky-700">
              Portfolio
            </Link>
            <Link href="/#works" className="text-zinc-600 transition hover:text-zinc-950">
              Works
            </Link>
          </nav>

          <div className="grid gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-5 inline-flex rounded-md border border-sky-700/20 bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-800">
                Business Tools
              </p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-normal sm:text-7xl">
                tools-hub
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700">
                海外販売向けの利益計算、送料シミュレーション、為替表示、発送情報管理をまとめた業務支援ハブです。
                UK / US の販売条件や商品ごとの送料を整理し、毎日の判断を少し軽くするために作りました。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://muu-tools-hub.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-sky-700 px-6 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  アプリを開く
                </a>
                <a
                  href="https://github.com/muu-ima/muu-tools-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-950/20 bg-white/80 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-white"
                >
                  GitHubを見る
                </a>
              </div>
            </div>

            <div className="rounded-md border border-zinc-200 bg-white/88 p-5 shadow-2xl shadow-zinc-950/10 backdrop-blur">
              <div className="border-b border-zinc-200 pb-4">
                <p className="text-sm font-semibold text-zinc-500">Dashboard Preview</p>
                <p className="mt-2 text-2xl font-semibold">Profit Calculator</p>
              </div>
              <div className="grid gap-4 py-5">
                {[
                  ["Final Profit", "JPY 18,420", "text-cyan-700"],
                  ["VAT / Tax", "Auto", "text-blue-600"],
                  ["Shipping", "EMS / FedEx", "text-sky-600"],
                  ["Product Meta", "WP Sync", "text-indigo-700"],
                ].map(([label, value, color]) => (
                  <div key={label} className="flex items-center justify-between rounded-md bg-zinc-50 p-4">
                    <span className="text-sm font-medium text-zinc-500">{label}</span>
                    <span className={`text-xl font-semibold ${color}`}>{value}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 bg-cyan-500" />
                <div className="h-16 bg-sky-400" />
                <div className="h-16 bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
              Overview
            </p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-normal sm:text-5xl">
              面倒な計算と発送管理を、日々の作業に馴染ませています。
            </h2>
          </div>
          <div className="mt-8 grid gap-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-md border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/5 sm:p-5"
              >
                <h3 className="text-xl font-semibold tracking-normal">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e6e0d6] px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="border-b border-zinc-200 pb-6 lg:border-b-0 lg:pb-0">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-blue-700">
                Mode Switcher
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
                計算モードを切り替えられます。
              </h2>
            </div>
            <p className="mt-6 text-base leading-7 text-zinc-600">
              UK版、US版、発送管理を上部ナビから移動しつつ、計算画面では通常計算、逆算ロジック、最安値モードを切り替えられるようにしています。
            </p>
          </div>
          <figure className="rounded-md border border-zinc-200 bg-zinc-50 p-3 shadow-sm shadow-zinc-950/5">
            <Image
              src="/screenshots/tools-hub/mode-switcher.png"
              alt="tools-hub のモードチェンジャー画面"
              width={1920}
              height={951}
              sizes="(max-width: 1024px) 100vw, 800px"
              className="h-auto w-full rounded-md border border-zinc-200 object-cover"
            />
            <figcaption className="mt-4 text-sm leading-6 text-zinc-500">
              利益計算の通常・逆算・最安値モードと、発送管理への切り替えを同じハブ上で扱います。
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-[#083344] px-5 py-14 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl border-b border-white/10 pb-6">
            <p className="text-sm font-semibold uppercase tracking-normal text-cyan-200">
              Shipping Manager
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              発送情報を商品データとして扱えます。
            </h2>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "WordPress Products CPT と REST API で商品メタを同期",
              "SKU、カテゴリ、実送料、実重量、適用重量で検索・絞り込み",
              "実重量と容積重量を比較し、送料計算に使う重量を整理",
              "商品一覧、編集フォーム、認証付き入力フォームを Next.js 側で実装",
            ].map((item) => (
              <div key={item} className="rounded-md border border-white/15 bg-white/5 p-4 sm:p-5">
                <p className="text-base leading-7 text-zinc-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e6e0d6] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl border-b border-zinc-200 pb-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
                Entry Form
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
                必要な人だけが入力できる導線です。
              </h2>
            </div>
            <p className="mt-6 text-base leading-7 text-zinc-600">
              発送情報を追加するための認証画面と、新規登録フォームを分けて実装。管理画面に直接入らず、必要な商品メタだけを登録できる流れにしています。
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "発送情報フォーム認証",
                description: "登録フォームへ入る前に、共有用の認証画面を挟みます。",
                src: "/screenshots/tools-hub/tools-hub-entry.png",
                alt: "tools-hub の発送情報フォーム認証画面",
              },
              {
                title: "発送情報入力フォーム",
                description: "SKU、重量、サイズ、実送料など、発送管理に必要な情報を登録します。",
                src: "/screenshots/tools-hub/tools-hub-new.png",
                alt: "tools-hub の発送情報入力フォーム画面",
              },
            ].map((screenshot) => (
              <figure key={screenshot.title} className="rounded-md border border-zinc-200 bg-white p-3 shadow-sm shadow-zinc-950/5">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={1920}
                  height={946}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-auto w-full rounded-md border border-zinc-200 object-cover"
                />
                <figcaption className="mt-4">
                  <p className="text-xl font-semibold tracking-normal">{screenshot.title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {screenshot.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e6e0d6] px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 border-b border-zinc-200 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-blue-700">
                Stack
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal">使っている技術です</h2>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
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

      <SiteFooter />
    </main>
  );
}
