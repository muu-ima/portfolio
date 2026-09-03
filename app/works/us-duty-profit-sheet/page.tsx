import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SideKanaNav from "../../components/SideKanaNav";
import SiteFooter from "../../components/SiteFooter";

const sheetUrl =
  "https://docs.google.com/spreadsheets/d/1kKjHDPP8ugVEubMa-hVXxXM5-hB8Z2YAd74AfTtjxdM/edit?gid=988467076#gid=988467076";

const features = [
  {
    title: "関税込みの利益計算",
    description:
      "売値、送料、仕入、為替、関税、MPF、Disbursement、販売手数料をまとめて、最終利益と利益率まで確認できます。",
  },
  {
    title: "HTSコード別の税率管理",
    description:
      "品目ごとのHTSコード、基礎関税、301条、232条、その他追加税率を表として持ち、入力シートの計算に使います。",
  },
  {
    title: "原産国ルールの反映",
    description:
      "原産国税率や免除フラグを分けて管理し、中国製品など追加関税が絡むケースも判断できるようにしています。",
  },
  {
    title: "VeRO補正の比較",
    description:
      "通常の利益だけでなく、VeRO補正後の販売額、経費、利益、利益率も並べて、出品条件を比較できます。",
  },
];

const sheetStructure = [
  "入力シート",
  "ロジック",
  "HTSコード",
  "原産国",
  "関税設定",
  "カテゴリ手数料",
  "PolicyBands",
];

const stack = [
  "Google Sheets",
  "Spreadsheet Logic",
  "HTS Code",
  "Duty Rules",
  "eBay Fees",
  "Profit Simulation",
];

export const metadata: Metadata = {
  title: "us-duty-profit-sheet | Portfolio",
  description:
    "eBay US販売向けに、HTSコード、原産国、関税、手数料、送料をまとめて利益判断する関税計算シートの紹介ページです。",
};

export default function UsDutyProfitSheetPage() {
  return (
    <main className="min-h-screen bg-[#dbd5cd] text-[#2a2a2a]">
      <SideKanaNav />
      <section className="relative overflow-hidden border-b border-[#c8c0b6] bg-[#dbd5cd]">
        <div className="absolute inset-0 opacity-45">
          <Image
            src="/portfolio-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(219,213,205,0.98)_0%,rgba(219,213,205,0.92)_48%,rgba(219,213,205,0.64)_100%)]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-8 sm:px-8">
          <nav className="mb-20 flex items-center text-sm font-medium">
            <Link href="/" className="transition hover:text-[#0e6871]">
              Portfolio
            </Link>
          </nav>

          <div className="grid gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="section-kicker mb-5 inline-flex border-b border-[#0e6871]/30 pb-1">
                Spreadsheet Logic
              </p>
              <h1 className="section-title text-4xl font-semibold sm:text-7xl">
                us-duty-profit-sheet
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700">
                eBay US販売向けに、HTSコード、原産国、関税、カテゴリ手数料、送料をまとめて利益判断する関税計算シートです。
                仕入れ前や出品前に、関税込みで採算が合うかをすぐ確認できるように作りました。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={sheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-action"
                >
                  シートを開く
                </a>
              </div>
            </div>

            <div className="media-frame p-3 backdrop-blur">
              <Image
                src="/duty-profit-dheet-main.png"
                alt="関税計算シートの入力シート画面"
                width={1920}
                height={883}
                priority
                sizes="(min-width: 1024px) 680px, 100vw"
                className="portfolio-image h-auto w-full object-contain"
              />
              <p className="image-caption mt-4">
                公開Googleシートで、入力値、関税内訳、最終利益を確認できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-b border-[#c8c0b6] pb-8">
            <p className="section-kicker">
              Overview
            </p>
            <h2 className="section-title mt-3 text-3xl font-semibold sm:text-5xl">
              US販売の見落としやすいコストをまとめています。
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-600">
              商品価格だけでなく、関税、MPF、Disbursement、カテゴリ手数料、決済手数料、両替手数料まで含めて、販売後に残る利益を見られるようにしています。
            </p>
          </div>
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="surface-card p-4 sm:p-5">
                <h3 className="text-xl font-semibold tracking-normal">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#c8c0b6] bg-[#2a2a2a] px-5 py-14 text-[#dbd5cd] sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl border-b border-white/10 pb-6">
            <p className="section-kicker-dark">
              Sheet Structure
            </p>
            <h2 className="section-title mt-3 text-3xl font-semibold sm:text-5xl">
              入力、計算、参照マスタを分けています。
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-200">
              手入力する場所と、HTSコードや税率のように参照する場所を分けることで、計算の前提を追いやすくしています。
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sheetStructure.map((sheet, index) => (
              <div key={sheet} className="rounded-[var(--portfolio-radius)] border border-white/15 bg-white/5 p-4 sm:p-5">
                <p className="text-sm font-semibold text-cyan-200">
                  0{index + 1}
                </p>
                <p className="mt-3 text-xl font-semibold tracking-normal text-zinc-50">
                  {sheet}
                </p>
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
