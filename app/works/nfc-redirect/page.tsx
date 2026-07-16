import type { Metadata } from "next";
import Link from "next/link";
import SideKanaNav from "../../components/SideKanaNav";
import SiteFooter from "../../components/SiteFooter";

const principles = [
  {
    title: "code は変えない番号",
    description:
      "NFC / QR に入れるカードごとの番号として扱い、発行後も変えない軸にします。公開URLの見せ方が変わっても、カードの紐づけは保てます。",
  },
  {
    title: "slug は見せるURL",
    description:
      "人が読みやすいURLとして公開ページに使います。プロフィール名や見せ方に合わせて、後から変更できるようにしています。",
  },
  {
    title: "WordPress 側で発行を管理",
    description:
      "pastel-wp の nfc-redirect プラグインで、カード発行、公開・停止、URL再発行を扱います。発行済みカードの管理場所として使います。",
  },
  {
    title: "Next.js がつなぎ役",
    description:
      "WordPress からの同期、公開プロフィール、編集画面を担当します。カード管理とプロフィールDBの間をつなぐ役割です。",
  },
];

const pluginFeatures = [
  "カードごとの code と公開状態を WordPress 側で管理",
  "/n/{code} にアクセスすると、公開中のプロフィールへリダイレクト",
  "停止中のカードは専用ページを表示し、使えない状態を明確にする",
  "公開時に Next.js と同期し、公開URLと編集URLを保存",
  "管理画面からコード生成、URLコピー、URL再発行まで扱えるようにする",
];

const flows = [
  "WordPress 側でカードを発行する",
  "公開保存時に Next.js と同期し、プロフィールデータを作成",
  "公開URLと編集URLを WordPress 側にも保存",
  "NFC / QR から /n/{code} にアクセス",
  "公開中ならプロフィールへ進み、停止中なら停止ページを表示",
  "編集URLからプロフィールを更新し、公開ページに反映",
];

const productFlow = [
  "CardCraft で名刺デザインと入稿データを作成",
  "名刺に NFC / QR を組み込み、code を不変IDとして発行",
  "nfc-redirect でリンク先プロフィールと公開状態を管理",
  "配布後もプロフィールや導線を差し替えられる運用にする",
];

const stack = ["Next.js 16", "React 19", "TypeScript", "Supabase", "WordPress", "REST API"];

export const metadata: Metadata = {
  title: "nfc-redirect | Portfolio",
  description:
    "WordPress、Next.js、Supabase を分離して構成した NFC / QR プロフィールリダイレクトシステムの紹介ページです。",
};

export default function NfcRedirectPage() {
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
              <p className="mb-5 inline-flex rounded-md border border-sky-500/30 bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
                Digital card operation
              </p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-normal sm:text-7xl">
                nfc-redirect
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700">
                CardCraft で作った名刺に NFC / QR を組み込み、配ったあとでもプロフィールや案内先を変えられるようにする仕組みです。
                WordPress、Next.js、Supabase の役割を分けて、発行から編集までを扱える形にしました。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/downloads/nfc-redirect-overview.pptx"
                  download
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#082f49] px-6 text-sm font-semibold text-white transition hover:bg-[#0c4a6e]"
                >
                  PPTX資料をダウンロード
                </a>
                <a
                  href="https://github.com/muu-ima/nfc-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-950/20 bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-50"
                >
                  GitHubを見る
                </a>
              </div>
            </div>

            <div className="rounded-md border border-zinc-200 bg-zinc-50 p-5">
              <div className="border-b border-zinc-200 pb-4">
                <p className="text-sm font-semibold text-zinc-500">System Boundary</p>
                <p className="mt-2 text-2xl font-semibold">役割を3つに分ける</p>
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  ["WordPress", "カード発行 / 公開・停止 / URL再発行", "bg-sky-500"],
                  ["Next.js", "同期処理 / 公開ページ / 編集画面", "bg-cyan-950"],
                  ["Supabase", "プロフィール情報の保存先", "bg-cyan-500"],
                ].map(([label, text, color]) => (
                  <div key={label} className="grid grid-cols-[9rem_1fr] overflow-hidden rounded-md border border-zinc-200 bg-white">
                    <div className={`${color} px-4 py-4 text-sm font-semibold text-white`}>
                      {label}
                    </div>
                    <div className="px-4 py-4 text-sm leading-6 text-zinc-700">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-[rgb(240,240,240)] px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border-b border-zinc-200 pb-6 lg:border-b-0 lg:pb-0">
            <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
              Product Concept
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
              CardCraft とセットで、配った後も育てられる名刺にしています。
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-600">
              名刺デザインを作るだけで終わらせず、NFC / QR に紐づくプロフィールやリンク先を後から変更できる構成を想定しました。印刷して配ったあとでも、案内先を変えられるのがこの仕組みの中心です。
            </p>
            <div className="mt-8">
              <a
                href="https://muu-cardcraft.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#082f49] px-6 text-sm font-semibold text-white transition hover:bg-[#0c4a6e]"
              >
                CardCraftを見る
              </a>
            </div>
          </div>
          <div className="grid gap-3">
            {productFlow.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-md border border-zinc-200 bg-white p-3 shadow-sm shadow-zinc-950/5 sm:p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-sky-400 text-sm font-semibold text-zinc-950">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-zinc-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-[rgb(240,240,240)] px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border-b border-zinc-200 pb-6 lg:border-b-0 lg:pb-0">
            <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
              WordPress Side
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              WordPress 側で、発行と停止を管理しています。
            </h2>
            <div className="mt-8 max-w-sm border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/5">
              <div className="border-b border-zinc-200 pb-3">
                <p className="text-sm font-semibold text-zinc-500">WP Admin</p>
                <p className="mt-1 text-lg font-semibold text-zinc-900">NFC Redirect</p>
              </div>
              <div className="mt-4 grid gap-2">
                {["発行", "公開", "停止", "URL再発行"].map((item) => (
                  <div key={item} className="flex items-center justify-between border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-zinc-700">
                    <span>{item}</span>
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {pluginFeatures.map((feature, index) => (
              <div key={feature} className="flex gap-4 rounded-md border border-zinc-200 bg-zinc-50 p-3 sm:p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-sky-400 text-sm font-semibold text-zinc-950">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-zinc-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border-b border-zinc-200 pb-6 lg:border-b-0 lg:pb-0">
            <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
              Design Rules
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              変えられるものと、変えないものを分けています。
            </h2>
            <div className="mt-8 max-w-sm border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/5">
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-sm font-semibold text-zinc-700">
                <span className="border border-zinc-200 bg-[rgb(240,240,240)] px-3 py-3 text-center">
                  code
                </span>
                <span className="text-sky-700">→</span>
                <span className="border border-zinc-200 bg-[rgb(240,240,240)] px-3 py-3 text-center">
                  profile
                </span>
              </div>
              <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-sm font-semibold text-zinc-700">
                <span className="border border-zinc-200 bg-white px-3 py-3 text-center">
                  WordPress
                </span>
                <span className="text-sky-700">↔</span>
                <span className="border border-zinc-200 bg-white px-3 py-3 text-center">
                  Next.js
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                変えない番号を軸に、見せるURLやプロフィールだけを差し替えます。
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="rounded-md border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/5 sm:p-5">
                <div className="mb-5 h-1.5 w-12 rounded-full bg-sky-400" />
                <h3 className="text-xl font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-[rgb(240,240,240)] px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border-b border-zinc-200 pb-6 lg:border-b-0 lg:pb-0">
            <p className="text-sm font-semibold uppercase tracking-normal text-cyan-700">
              Flow
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              配ったあとも直せます。
            </h2>
            <div className="mt-8 max-w-sm border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/5">
              <div className="flex items-center gap-3 text-sm font-semibold text-zinc-700">
                <span className="flex-1 border border-zinc-200 bg-zinc-50 px-3 py-3 text-center">
                  NFC / QR
                </span>
                <span className="text-cyan-700">→</span>
                <span className="flex-1 border border-zinc-200 bg-zinc-50 px-3 py-3 text-center">
                  /n/code
                </span>
              </div>
              <div className="my-3 flex justify-center text-cyan-700">↓</div>
              <div className="border border-zinc-200 bg-[rgb(240,240,240)] px-3 py-3 text-center text-sm font-semibold text-zinc-700">
                公開プロフィールへ進む
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                停止中は止め、公開中はプロフィールへつなぎます。
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {flows.map((flow, index) => (
              <div key={flow} className="flex gap-4 rounded-md border border-zinc-200 bg-zinc-50 p-3 sm:p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#082f49] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-zinc-800">{flow}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 border-b border-zinc-300 pb-8 sm:flex-row sm:items-end">
            <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-blue-700">
                Stack
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal">使っている技術です</h2>
            </div>
            <a
              href="/downloads/nfc-redirect-overview.pptx"
              download
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-[#082f49] px-6 text-sm font-semibold text-white transition hover:bg-[#0c4a6e]"
            >
              資料をダウンロード
            </a>
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
