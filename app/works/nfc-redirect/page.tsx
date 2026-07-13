import type { Metadata } from "next";
import Link from "next/link";

const principles = [
  {
    title: "code は不変ID",
    description:
      "NFC / QR に焼き込む永久IDとして扱い、Supabase の主キーにも使う。カード発行後にURL表現が変わっても、識別軸はぶれません。",
  },
  {
    title: "slug は表示用URL",
    description:
      "人が読みやすいURLとして公開ページへ使う一方、データ識別には使わない設計。SEOや見た目の都合で後から変更できます。",
  },
  {
    title: "WordPress は台帳",
    description:
      "pastel-wp の nfc-redirect プラグインでカード発行、リダイレクト状態、URL再発行を管理。プロフィール本文は Supabase 側を正とします。",
  },
  {
    title: "Next.js が境界レイヤー",
    description:
      "WordPress からの同期API、公開プロフィール、編集画面、トークン検証を担当。外部システムとDBの間を受け止めます。",
  },
];

const pluginFeatures = [
  "nfc_redirect CPT でカードごとの code と status を管理",
  "/n/{code} の rewrite を追加し、active なら target URL または /p/{code} へ 302 リダイレクト",
  "disabled のカードは 410 を返し、停止中テンプレートを表示",
  "公開時に Next.js の create API を呼び、Public URL と Edit URL を保存",
  "管理画面でコード自動生成、URLコピー、URL再発行、同期トークン設定を扱う",
];

const flows = [
  "WordPress プラグインで nfc_redirect を発行",
  "公開保存時に Next.js の /api/profile/create を呼び、Supabase に profile を作成",
  "Next.js が public_url と edit_url を返し、WordPress の投稿メタに保存",
  "NFC / QR から WordPress の /n/{code} にアクセス",
  "active なら Next.js 側の公開プロフィールへリダイレクト、disabled なら停止ページを表示",
  "編集URLからプロフィールを更新し、公開ページへ反映",
];

const stack = ["Next.js 16", "React 19", "TypeScript", "Supabase", "WordPress", "REST API"];

export const metadata: Metadata = {
  title: "nfc-redirect | Portfolio",
  description:
    "WordPress、Next.js、Supabase を分離して構成した NFC / QR プロフィールリダイレクトシステムの紹介ページです。",
};

export default function NfcRedirectPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-zinc-950">
      <section className="border-b border-zinc-200 bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <nav className="mb-20 flex items-center justify-between text-sm font-medium">
            <Link href="/" className="transition hover:text-amber-700">
              Portfolio
            </Link>
            <Link href="/#works" className="text-zinc-600 transition hover:text-zinc-950">
              Works
            </Link>
          </nav>

          <div className="grid gap-10 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div>
              <p className="mb-5 inline-flex border border-amber-500/30 bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                NFC Profile / Redirect System
              </p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-normal sm:text-7xl">
                nfc-redirect
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700">
                NFCカードやQRコードに焼き込む不変IDを軸に、WordPress の発行台帳、
                Next.js の同期API、Supabase のプロフィールDBを分離したシステムです。
                発行後もプロフィールを編集でき、公開URLの見た目も柔軟に扱えます。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/downloads/nfc-redirect-overview.pptx"
                  download
                  className="inline-flex h-12 items-center justify-center bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  PPTX資料をダウンロード
                </a>
                <a
                  href="https://github.com/muu-ima/nfc-profile"
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
                <p className="text-sm font-semibold text-zinc-500">System Boundary</p>
                <p className="mt-2 text-2xl font-semibold">3つの責務に分ける</p>
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  ["WordPress", "nfc-redirect プラグイン / 発行台帳 / 停止制御", "bg-amber-400"],
                  ["Next.js", "同期API / 公開ページ / 編集画面", "bg-zinc-950"],
                  ["Supabase", "プロフィールの Source of Truth", "bg-teal-500"],
                ].map(([label, text, color]) => (
                  <div key={label} className="grid grid-cols-[9rem_1fr] border border-zinc-200 bg-white">
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

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-amber-700">
              WordPress Plugin
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              pastel-wp 側のプラグインで発行と停止を制御。
            </h2>
          </div>
          <div className="grid gap-3">
            {pluginFeatures.map((feature, index) => (
              <div key={feature} className="flex gap-4 border-b border-zinc-200 pb-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-amber-400 text-sm font-semibold text-zinc-950">
                  {index + 1}
                </span>
                <p className="pt-1 text-lg leading-7 text-zinc-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-amber-700">
              Design Rules
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              変更できるものと、変えてはいけないものを分ける。
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="border border-zinc-200 bg-white p-5">
                <h3 className="text-2xl font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-teal-700">
              Flow
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">
              発行から公開、編集までの流れ
            </h2>
          </div>
          <div className="grid gap-3">
            {flows.map((flow, index) => (
              <div key={flow} className="flex gap-4 border-b border-zinc-200 pb-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-zinc-950 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-lg leading-7 text-zinc-800">{flow}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 border-b border-zinc-300 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-rose-700">
                Stack
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal">使っている技術</h2>
            </div>
            <a
              href="/downloads/nfc-redirect-overview.pptx"
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
          <p className="text-2xl font-semibold">nfc-redirect</p>
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
