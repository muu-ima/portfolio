import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LightboxImage from "../../components/LightboxImage";
import SideKanaNav from "../../components/SideKanaNav";
import SiteFooter from "../../components/SiteFooter";

const sheetUrl =
  "https://docs.google.com/spreadsheets/d/1ghEfLjb73SaHbTntEcKZM5MQrwvFpUDZ5RPIdxTzQoI/edit?gid=988467076#gid=988467076";

const flowSteps = [
  "入力シートで売値、仕入れ、送料、為替、原産国、HTSコード、カテゴリを指定",
  "HTSコードと原産国のマスタから、税率条件と追加関税を参照",
  "関税設定で原産国税率、基礎関税、301条、232条を合成",
  "PolicyBandsで安全側仮関税USDから採用する帯を決定",
  "ロジックで販売手数料、決済手数料、関税、MPF、Disbursementを計算",
  "入力シートへ最終利益、利益率、関税内訳、VeRO補正後の比較値を戻す",
];

const detailSections = [
  {
    title: "入力シート",
    kicker: "Input Sheet",
    heading: "販売前に触る画面で、利益と関税内訳をまとめて確認します。",
    description:
      "販売前に触る画面です。入力パラメータ、結果サマリー、関税内訳、VeRO比較を同じ場所で確認できます。",
    src: "/duty-profit-sheet/duty-profit-sheet-main.png",
    alt: "関税計算シートの入力シート画面",
    width: 1920,
    height: 883,
    points: [
      "USDJPY、仕入れ、売値、送料、原産国、HTSコード、カテゴリを入力",
      "最終利益、利益率、関税内訳、VeRO補正後の比較値を同じ画面に集約",
      "日常運用ではこのタブを入口にし、裏側の税率マスタやロジックは直接触らずに使える",
    ],
  },
  {
    title: "ロジック",
    kicker: "Calculation Logic",
    heading: "販売手数料、関税、VeRO補正までを段階的に計算します。",
    description:
      "eBay US販売ロジック、関税計算、VeRO補正計算を並べ、最終利益までの根拠を追えるようにしています。",
    src: "/duty-profit-sheet/logic.png",
    alt: "関税計算シートのロジック画面",
    width: 1920,
    height: 885,
    points: [
      "売上、州税、カテゴリ手数料、決済手数料、Final Value Feeを分解して計算",
      "関税、MPF、Disbursementを別々に出し、関税込みの最終利益へ合算",
      "通常販売額とVeRO補正後の販売額を並べ、条件違いの利益差を比較",
    ],
  },
  {
    title: "HTSコード",
    kicker: "HTS Master",
    heading: "品目ごとの税率をマスタ化して、計算前提を追えるようにしています。",
    description:
      "品目ごとのHTSコード、基礎関税、301条、232条、合算税率を持つマスタです。",
    src: "/duty-profit-sheet/hts-code.png",
    alt: "関税計算シートのHTSコードマスタ画面",
    width: 1920,
    height: 883,
    points: [
      "HSコード、HTSコード、品目、基礎関税、301条、232条、合算税率を管理",
      "商品カテゴリが変わったときも、税率の根拠をマスタ側で確認できる",
      "入力シートで選ばれたHTSコードをもとに、関税設定タブへ税率条件を渡す",
    ],
  },
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
                src="/duty-profit-sheet/duty-profit-sheet-main.png"
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
            <h2 className="section-title mt-3 max-w-5xl text-3xl font-semibold sm:text-5xl">
              US販売のコストを、複数タブの連動で利益までつなげます。
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-600">
              商品価格だけでなく、関税、MPF、Disbursement、カテゴリ手数料、決済手数料、両替手数料まで含めて、販売後に残る利益を見られるようにしています。
              入力シートの裏側では、HTSコード、原産国、関税設定、PolicyBands、カテゴリ手数料が連動します。
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {flowSteps.map((step, index) => (
              <article key={step} className="surface-card p-4 sm:p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-[var(--portfolio-radius)] bg-[#0e6871] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="mt-4 text-base leading-7 text-zinc-700">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {detailSections.map((section, index) => {
        const isReversed = index % 2 === 1;

        return (
          <section
            key={section.title}
            className={`border-b border-[#c8c0b6] px-5 py-14 sm:px-8 ${
              isReversed ? "bg-[#eee8df]" : "bg-[#dbd5cd]"
            }`}
          >
            <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
              <div className={isReversed ? "lg:order-2" : ""}>
                <p className="section-kicker">
                  {section.kicker}
                </p>
                <h2 className="section-title mt-3 text-3xl font-semibold sm:text-5xl">
                  {section.heading}
                </h2>
                <p className="mt-6 text-base leading-7 text-zinc-600">
                  {section.description}
                </p>
                <div className="mt-7 grid gap-3">
                  {section.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[var(--portfolio-radius)] border border-[#c8c0b6] bg-white/28 p-4"
                    >
                      <p className="text-sm leading-6 text-zinc-700">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <figure className="media-frame p-3">
                <LightboxImage
                  src={section.src}
                  alt={section.alt}
                  width={section.width}
                  height={section.height}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 860px"
                  title={section.title}
                  description={section.description}
                  imageClassName="portfolio-image h-auto w-full object-contain"
                />
                <figcaption className="image-caption mt-4">
                  {section.description}
                </figcaption>
              </figure>
            </div>
          </section>
        );
      })}

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
