import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SideKanaNav from "../../components/SideKanaNav";
import SiteFooter from "../../components/SiteFooter";
import LightboxImage from "../../components/LightboxImage";

const editorFeatures = [
  {
    title: "表裏プレビュー",
    description:
      "オモテ面とウラ面を何度でも確認しながら、デザインを調整できます。",
  },
  {
    title: "レイヤー編集",
    description:
      "テキストと画像の前後関係を扱い、名刺らしい余白と配置を整えられるようにしました。",
  },
  {
    title: "画像書き出し",
    description:
      "作成したデザインを PNG / JPEG として書き出し、確認や共有に使える形にしています。",
  },
  {
    title: "デザイン保存",
    description:
      "ローカルストレージに編集中の状態を保存し、作業を切り上げてもあとから再開できます。",
  },
];

const buildPoints = [
  "ブラウザだけで名刺デザインを作れる編集画面を構成",
  "テンプレート選択、文字編集、画像配置、レイヤー順をひとつの操作画面に集約",
  "プレビューと書き出し結果のズレを減らすため、表示と生成の状態をそろえる",
  "CardCraft 単体だけでなく、nfc-redirect と組み合わせた商品導線も想定",
];

const hardParts = [
  "編集画面の自由度と、入稿データとして破綻しない制約のバランス",
  "テキスト、画像、背景、前後関係を触ってもレイアウトが崩れにくい状態管理",
  "ローカル保存した編集状態を、次に開いたときも自然に復元できるようにすること",
  "表裏確認、保存、書き出しまでをひとつの体験としてつなげること",
];

const stack = ["Next.js 16", "React 19", "TypeScript", "Supabase", "Canvas", "PNG / JPEG Export"];

const screenshots = [
  {
    title: "デスクトップ編集画面",
    description:
      "キャンバス、左側パネル、上部ツールバーを同時に見ながら、文字や配置を調整できます。",
    src: "/screenshots/cardcraft/desktop-editor.png",
    alt: "CardCraft のデスクトップ編集画面",
    width: 1920,
    height: 946,
  },
  {
    title: "モバイル編集画面",
    description:
      "狭い画面でもプレビューと編集パネルを行き来しながら、細かな調整を進められます。",
    src: "/screenshots/cardcraft/mobile-editor.png",
    alt: "CardCraft のモバイル編集画面",
    width: 1287,
    height: 946,
  },
];

export const metadata: Metadata = {
  title: "cardcraft | Portfolio",
  description:
    "ブラウザ上で名刺デザインを編集し、プレビュー、保存、PNG / JPEG 書き出しまで扱える CardCraft の紹介ページです。",
};

export default function CardCraftPage() {
  return (
    <main className="min-h-screen bg-[#dbd5cd] text-[#2a2a2a]">
      <SideKanaNav />
      <section className="relative overflow-hidden border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-8 sm:px-8">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/work-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[#dbd5cd]/62" />

        <div className="relative mx-auto max-w-[1440px]">
          <nav className="mb-20 flex items-center text-sm font-medium">
            <Link href="/" className="transition hover:text-[#0e6871]">
              Portfolio
            </Link>
          </nav>

          <div className="grid gap-10 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div>
              <p className="section-kicker mb-5 inline-flex border-b border-[#0e6871]/30 pb-1">
                Business card editor
              </p>
              <h1 className="section-title text-5xl font-semibold sm:text-7xl">
                cardcraft
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700">
                名刺デザインをブラウザ上で作り、表裏プレビュー、保存、PNG / JPEG 書き出しまで扱えるWebエディタです。
                いちばん苦労したプロジェクトで、nfc-redirect と組み合わせた名刺運用も見据えて作りました。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://muu-cardcraft.vercel.app/editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-action"
                >
                  アプリを開く
                </a>
                <a
                  href="/downloads/cardcraft-1.pptx"
                  download
                  className="secondary-action"
                >
                  資料1をダウンロード
                </a>
                <a
                  href="/downloads/cardcraft-2.pptx"
                  download
                  className="secondary-action"
                >
                  資料2をダウンロード
                </a>
              </div>
            </div>

            <div className="surface-card p-5">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-500">Editor Preview</p>
                  <p className="mt-2 text-2xl font-semibold">何度でもプレビュー</p>
                </div>
                <span className="rounded-full bg-[#0e6871]/10 px-3 py-1 text-xs font-semibold text-[#0e6871]">
                  saved
                </span>
              </div>
              <figure className="media-frame mt-5 p-0">
                <LightboxImage
                  src="/screenshots/cardcraft/desktop-editor.png"
                  alt="CardCraft の編集画面プレビュー"
                  width={1920}
                  height={946}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  title="Editor Preview"
                  description="CardCraft のデスクトップ編集画面です。"
                  imageClassName="portfolio-image h-auto w-full object-cover"
                />
              </figure>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  ["DESIGN ID", "saved-preview"],
                  ["LOCAL SAVE", "resume draft"],
                  ["EXPORT", "PNG / JPEG"],
                  ["LAYERS", "text / image"],
                ].map(([label, value]) => (
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
              名刺づくりを、
              <br />
              ブラウザ上で完結できるようにしています。
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-600">
              表裏確認、レイヤー調整、画像書き出し、保存再開までを、ひとつの編集体験としてまとめています。
            </p>
          </div>
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {editorFeatures.map((feature) => (
              <article
                key={feature.title}
                className="surface-card p-4 sm:p-5"
              >
                <h3 className="text-xl font-semibold tracking-normal">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-b border-[#c8c0b6] pb-8">
            <p className="section-kicker">
              Editor Screenshots
            </p>
            <h2 className="section-title mt-3 text-3xl font-semibold sm:text-5xl">
              実際の編集画面です。
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-600">
              PCでもモバイルでも、キャンバスを見ながら文字、背景、画像、レイヤーを調整できるようにしています。
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {screenshots.map((screenshot) => (
              <figure
                key={screenshot.title}
                className="media-frame p-3"
              >
                <LightboxImage
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={screenshot.width}
                  height={screenshot.height}
                  sizes="(max-width: 1024px) 100vw, 600px"
                  title={screenshot.title}
                  description={screenshot.description}
                  imageClassName="portfolio-image h-auto w-full object-cover"
                />
                <figcaption className="mt-4">
                  <p className="text-xl font-semibold tracking-normal">{screenshot.title}</p>
                  <p className="image-caption mt-2">
                    {screenshot.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#c8c0b6] bg-[#2a2a2a] px-5 py-14 text-[#dbd5cd] sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl border-b border-white/10 pb-6">
            <p className="section-kicker-dark">
              Product Flow
            </p>
            <h2 className="section-title mt-3 text-3xl font-semibold sm:text-5xl">
              nfc-redirect とセットで使う想定でした。
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-200">
              名刺のデザインを作るだけで終わらせず、NFC / QR のリンク管理までつなげることで、配布後もプロフィールや案内先を更新できる商品導線を考えていました。
            </p>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {buildPoints.map((point, index) => (
              <div key={point} className="flex gap-4 rounded-[var(--portfolio-radius)] border border-white/15 bg-white/5 p-4 sm:p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--portfolio-radius)] bg-[#b6d9dc] text-sm font-semibold text-[#083b46]">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-zinc-100">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-[#c8c0b6] pb-8">
            <p className="section-kicker">
              Hard Parts
            </p>
            <h2 className="section-title mt-3 max-w-5xl text-3xl font-semibold sm:text-5xl">
              自由に触れる編集体験を、
              <br />
              崩れにくくまとめています。
            </h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <figure className="media-frame p-2">
              <LightboxImage
                src="/screenshots/cardcraft/hard-parts.png"
                alt="CardCraft の編集画面でテキストとレイヤーを調整している状態"
                width={1920}
                height={938}
                sizes="(max-width: 1024px) 100vw, 560px"
                title="編集状態とレイヤー管理"
                description="テキスト、画像、背景の調整とレイヤー操作を同じ編集画面で扱います。"
                imageClassName="portfolio-image h-auto w-full object-cover"
              />
            </figure>
            <div className="grid gap-3">
              {hardParts.map((part, index) => (
                <div key={part} className="surface-card flex gap-4 p-3 sm:p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--portfolio-radius)] bg-[#083b46] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-7 text-zinc-800">{part}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 border-b border-zinc-300 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">
                Stack
              </p>
              <h2 className="section-title mt-3 text-3xl font-semibold">使っている技術です</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/downloads/cardcraft-1.pptx"
                download
                className="primary-action shrink-0"
              >
                資料1をダウンロード
              </a>
              <a
                href="/downloads/cardcraft-2.pptx"
                download
                className="secondary-action shrink-0"
              >
                資料2をダウンロード
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="meta-tag"
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
