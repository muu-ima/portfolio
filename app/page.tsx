import Image from "next/image";
import Link from "next/link";

const works = [
  {
    title: "tools-hub",
    category: "Business Tools",
    description:
      "海外販売向けの利益計算、送料シミュレーション、為替表示をまとめた業務支援ハブ。UK / US の販売条件や手数料を整理し、日々の判断を速くするためのツール群です。",
    tags: ["Next.js", "Profit Calc", "Shipping"],
    accent: "bg-teal-500",
    href: "/works/tools-hub",
  },
  {
    title: "cardcraft",
    category: "Design Editor",
    description:
      "名刺デザインをブラウザ上で編集できる入稿前プレビュー付きエディタ。テンプレート選択、テキスト・画像編集、レイヤー調整、保存、PNG / JPEG 書き出しまで扱えます。",
    tags: ["Next.js 16", "Editor", "Supabase"],
    accent: "bg-rose-500",
  },
  {
    title: "nfc-redirect",
    category: "NFC Profile",
    description:
      "NFC / QR に焼き込む不変IDを軸に、WordPress の発行台帳、Next.js API、Supabase のプロフィールDBを分離したリダイレクト・編集システムです。",
    tags: ["Next.js API", "WordPress", "Supabase"],
    accent: "bg-amber-400",
  },
  {
    title: "kobutsu-ledger-system",
    category: "Ledger System",
    description:
      "Next.js、WordPress、Docker で構成した古物台帳システムの雛形。商品台帳API、管理画面、EC販売や仕入れ管理へ拡張しやすい業務基盤です。",
    tags: ["Next.js", "WordPress", "Docker"],
    accent: "bg-slate-800",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-zinc-950">
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="/portfolio-hero.png"
          alt="複数のアプリ画面が並ぶポートフォリオのビジュアル"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,244,238,0.96)_0%,rgba(247,244,238,0.84)_36%,rgba(247,244,238,0.28)_68%,rgba(247,244,238,0)_100%)]" />
        <div className="absolute inset-x-0 top-0 z-10 border-b border-black/10 bg-[#f7f4ee]/72 backdrop-blur">
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
            <p className="mb-5 inline-flex border border-zinc-950/15 bg-white/70 px-3 py-1 text-sm font-medium text-zinc-700 backdrop-blur">
              Apps / Systems / Websites
            </p>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-normal text-zinc-950 sm:text-7xl">
              作ってきたアプリとシステムを、わかりやすく紹介する場所。
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-700">
              利益計算ツール、名刺デザインエディタ、NFCプロフィール連携、古物台帳システムまで。
              実務で使うために作ってきたプロダクトを整理したポートフォリオです。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#works"
                className="inline-flex h-12 items-center justify-center bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800"
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
              <p className="text-sm font-semibold uppercase tracking-normal text-teal-700">
                Selected Works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
                紹介するアプリ
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-zinc-600">
              それぞれの目的、役割、使っている技術がひと目で伝わるようにまとめています。
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {works.map((work) => {
              const cardContent = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-zinc-500">{work.category}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-normal">
                        {work.title}
                      </h3>
                    </div>
                    <span className={`h-10 w-10 ${work.accent}`} aria-hidden="true" />
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
                    <p className="mt-7 text-sm font-semibold text-teal-700">詳細を見る</p>
                  ) : null}
                </>
              );

              return work.href ? (
                <Link
                  key={work.title}
                  href={work.href}
                  className="group border border-zinc-200 bg-zinc-50 p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-950/5"
                >
                  {cardContent}
                </Link>
              ) : (
                <article
                  key={work.title}
                  className="group border border-zinc-200 bg-zinc-50 p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-950/5"
                >
                  {cardContent}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 px-5 py-16 text-white sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-teal-300">Portfolio</p>
            <p className="mt-3 text-3xl font-semibold tracking-normal">
              制作してきたアプリとシステムの記録。
            </p>
          </div>
          <a
            href="#works"
            className="inline-flex h-12 shrink-0 items-center justify-center bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            Works
          </a>
        </div>
      </footer>
    </main>
  );
}
