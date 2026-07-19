import type { Metadata } from "next";
import Image from "next/image";
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
  "code を自動生成し、カードごとの公開状態を WordPress 側で管理",
  "/n/{code} にアクセスすると、公開中のプロフィールへリダイレクト",
  "停止機能で専用ページへ切り替え、使えない状態を明確にする",
  "公開時に Next.js と同期し、path、公開URL、編集URLを保存",
  "管理画面から path 生成、URLコピー、URL再発行まで扱えるようにする",
];

const flows = [
  "WordPress 側で code を自動生成してカードを発行",
  "公開保存時に Next.js と同期し、プロフィールデータを作成",
  "path、公開URL、編集URLを WordPress 側にも保存",
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
    <main className="min-h-screen bg-[#dbd5cd] text-[#2a2a2a]">
      <SideKanaNav />
      <section className="relative overflow-hidden border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-8 sm:px-8">
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
        <div className="absolute inset-0 bg-[#dbd5cd]/75" />

        <div className="relative mx-auto max-w-[1440px]">
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

            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
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
                  <div key={label} className="grid grid-cols-[9rem_1fr] overflow-hidden rounded-lg border border-zinc-200 bg-white">
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

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-b border-[#c8c0b6] pb-8">
            <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
              Product Concept
            </p>
            <h2 className="mt-3 max-w-5xl text-3xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
              CardCraft とつなぐ名刺です。
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-600">
              NFC / QR に紐づくプロフィールやリンク先を、配ったあとでも差し替えられるようにしています。
            </p>
          </div>
          <div className="mt-8 flex">
            <a
              href="https://muu-cardcraft.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#082f49] px-6 text-sm font-semibold text-white transition hover:bg-[#0c4a6e]"
            >
              CardCraftを見る
            </a>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {productFlow.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-lg border border-zinc-200 bg-white p-3 shadow-sm shadow-zinc-950/5 sm:p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-sky-400 text-sm font-semibold text-zinc-950">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-zinc-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-b border-[#c8c0b6] pb-8">
            <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
              WordPress Side
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              WordPress 側で、発行と停止を管理しています。
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-600">
              管理画面から code の自動生成、path 生成、公開停止まで扱えるようにしています。名刺を配ったあとも、WordPress 側で運用を止めたり直したりできます。
            </p>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <figure className="overflow-hidden rounded-md border border-zinc-200 bg-white p-2 shadow-sm shadow-zinc-950/5">
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-zinc-50">
                <Image
                  src="/screenshots/nfc-redirect/nfc-redirect.png"
                  alt="NFC Redirect の WordPress 管理画面。code の自動生成、path 生成、停止機能を扱う画面。"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="px-2 pb-1 pt-3 text-sm leading-6 text-zinc-500">
                WordPress の管理画面で、発行・公開・停止・URL再発行をまとめて扱います。
              </figcaption>
            </figure>

            <div className="grid gap-3 sm:grid-cols-2">
              {pluginFeatures.map((feature, index) => (
                <div key={feature} className="flex gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-3 sm:p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-sky-400 text-sm font-semibold text-zinc-950">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-7 text-zinc-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-b border-[#c8c0b6] pb-8">
            <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
              Design Rules
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              変えられるものと、変えないものを分けています。
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-600">
              NFC / QR に焼き込む番号は固定し、プロフィールや公開URLは後から差し替えられるようにしました。
              <br className="hidden sm:block" />
              配った名刺を無駄にしないための分け方です。
            </p>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-950/5">
              <p className="text-sm font-semibold text-sky-700">Structure Map</p>
              <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-center text-sm font-semibold text-zinc-700">
                <div className="rounded-lg border border-zinc-200 bg-[rgb(240,240,240)] px-4 py-5">
                  code
                  <span className="mt-2 block text-xs font-medium text-zinc-500">変えないID</span>
                </div>
                <span className="text-xl text-sky-700">→</span>
                <div className="rounded-lg border border-zinc-200 bg-[rgb(240,240,240)] px-4 py-5">
                  profile
                  <span className="mt-2 block text-xs font-medium text-zinc-500">見せる内容</span>
                </div>
              </div>
              <div className="my-5 flex justify-center text-sky-700">↓</div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-center text-sm font-semibold text-zinc-700">
                <div className="rounded-lg border border-zinc-200 bg-white px-4 py-5">
                  WordPress
                  <span className="mt-2 block text-xs font-medium text-zinc-500">発行管理</span>
                </div>
                <span className="text-xl text-sky-700">↔</span>
                <div className="rounded-lg border border-zinc-200 bg-white px-4 py-5">
                  Next.js
                  <span className="mt-2 block text-xs font-medium text-zinc-500">公開・編集</span>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((item) => (
                <article key={item.title} className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/5 sm:p-5">
                  <div className="mb-5 h-1.5 w-12 rounded-full bg-sky-400" />
                  <h3 className="text-xl font-semibold tracking-normal">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-zinc-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[rgb(240,240,240)] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-b border-zinc-300 pb-8">
            <p className="text-sm font-semibold uppercase tracking-normal text-cyan-700">
              Flow
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              発行して、公開して、あとから直せます。
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-600">
              WordPress でカードを発行し、Next.js と Supabase に渡して公開ページを作ります。
              <br className="hidden sm:block" />
              公開後も編集URLからプロフィールを更新できます。
            </p>
          </div>

          <div className="mt-9 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm shadow-zinc-950/5">
            <div className="grid gap-0 lg:grid-cols-6">
              {flows.map((flow, index) => (
                <article
                  key={flow}
                  className="relative border-b border-zinc-200 p-5 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#082f49] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="mt-5 text-base font-semibold leading-7 text-zinc-800">{flow}</p>
                  {index < flows.length - 1 ? (
                    <span className="absolute bottom-5 right-5 hidden text-xl text-sky-700 lg:block">→</span>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-950/5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-sm font-semibold text-zinc-700">
              <span className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-3 text-center">
                NFC / QR
              </span>
              <span className="text-cyan-700">→</span>
              <span className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-3 text-center">
                /n/code
              </span>
            </div>
            <p className="text-sm leading-6 text-zinc-500">
              停止中は止め、公開中はプロフィールへつなぎます。配布後の変更を、URLの再印刷なしで吸収するための流れです。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-12 sm:px-8">
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
