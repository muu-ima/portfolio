import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LightboxImage from "../../components/LightboxImage";
import SideKanaNav from "../../components/SideKanaNav";
import SiteFooter from "../../components/SiteFooter";
import ReservationFlowImageSlider from "./ReservationFlowImageSlider";

const features = [
  {
    scope: "予約入口",
    title: "予約受付とカレンダー",
    description:
      "最短空き枠の提示、月別カレンダー、AM / PM の時間帯選択をひとつの予約導線としてまとめています。",
  },
  {
    scope: "公開制御",
    title: "予約枠の公開制御",
    description:
      "26日ルールに沿って翌月分の予約枠を公開。日付や受付可否だけでなく、運用上の解禁タイミングも制御しています。",
  },
  {
    scope: "確認",
    title: "メール確認フロー",
    description:
      "仮予約を作成し、署名付きURLの確認メールを送信。一定時間内に確認されない予約は自動キャンセルする想定です。",
  },
  {
    scope: "通知",
    title: "スタッフ通知",
    description:
      "予約内容から必要な情報だけを抽出し、スタッフ向け通知メールとして送る業務連絡の流れを実装しています。",
  },
  {
    scope: "運用",
    title: "管理画面",
    description:
      "予約一覧、ステータス更新、削除、日別の受付ON / OFFを扱う管理画面を用意。運用側が予約状況を確認できます。",
  },
  {
    scope: "外部連携",
    title: "WordPress副本同期",
    description:
      "Laravel側で予約を処理し、WordPress REST APIへ副本として同期。既存CMS運用を残せる構成にしています。",
  },
];

const flow = [
  {
    title: "予約方法を選択",
    description: "Next.js の画面で、最短空き枠かカレンダーから予約の入口を選びます。",
  },
  {
    title: "予約フォームへ進む",
    description: "選んだ日付と時間帯を引き継ぎ、見学者情報の入力へ進みます。",
  },
  {
    title: "予約できる日だけ公開",
    description: "26日ルールと受付可否を見て、公開対象の予約枠だけを表示します。",
  },
  {
    title: "入力と重複枠を検証",
    description: "Laravel API が入力値、reCAPTCHA、同じ枠の重複予約を確認します。",
  },
  {
    title: "確認メールと通知を送信",
    description: "見学者へ確認メールを送り、スタッフには必要な予約情報を通知します。",
  },
  {
    title: "管理画面で運用",
    description: "予約一覧、状態変更、削除、日別の受付可否を管理画面から扱います。",
  },
  {
    title: "WordPressへ副本同期",
    description: "確認済み予約を booked として扱い、WordPress REST API へ同期します。",
  },
];

const stack = [
  "Next.js 16",
  "React",
  "TypeScript",
  "Laravel",
  "PostgreSQL",
  "WordPress REST API",
  "Docker",
  "Vercel",
  "Render",
];

export const metadata: Metadata = {
  title: "reservation-tour | Portfolio",
  description:
    "見学予約受付、確認メール、スタッフ通知、WordPress副本同期まで扱う予約管理システム reservation-tour の紹介ページです。",
};

export default function ReservationTourPage() {
  return (
    <main className="min-h-screen bg-[#dbd5cd] text-[#2a2a2a]">
      <SideKanaNav />
      <section className="relative overflow-hidden border-b border-[#c8c0b6] bg-[#dbd5cd]">
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(219,213,205,0.98)_0%,rgba(219,213,205,0.88)_52%,rgba(219,213,205,0.58)_100%)]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-8 sm:px-8">
          <nav className="mb-20 flex items-center text-sm font-medium">
            <Link href="/" className="transition hover:text-[#0e6871]">
              Portfolio
            </Link>
          </nav>

          <div className="grid gap-10 pb-20 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="section-kicker mb-5 inline-flex border-b border-[#0e6871]/30 pb-1">
                Reservation System
              </p>
              <h1 className="section-title text-4xl font-semibold sm:text-7xl">
                reservation-tour
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700">
                見学予約の受付から確認メール、スタッフ通知、未確認予約の自動キャンセル、WordPressへの副本同期までを扱う予約管理システムです。
                既存CMS運用を残しながら、予約処理を独立したWebアプリとして構成しました。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://muu-reservation-tour.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-action"
                >
                  デモを開く
                </a>
                <a
                  href="https://github.com/muu-ima/muu-reservation-tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-action"
                >
                  GitHubを見る
                </a>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                ※ デモ版のため、実際の予約・メール送信・DB保存は行われません。
              </p>
            </div>

            <figure className="media-frame p-3 backdrop-blur">
              <LightboxImage
                src="/screenshots/reservation-tour/top.png"
                alt="reservation-tour の予約方法選択画面"
                width={1920}
                height={911}
                sizes="(min-width: 1024px) 680px, 100vw"
                title="予約方法選択"
                description="最短空き枠かカレンダーから、見学予約の入り口を選べるトップ画面です。"
                imageClassName="portfolio-image h-auto w-full object-contain"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 border-b border-[#c8c0b6] pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker">
                What It Does
              </p>
              <h2 className="section-title mt-3 text-3xl font-semibold sm:text-4xl">
                予約業務の流れを、
                <br />
                ひとつのシステムにまとめています。
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-zinc-600">
              単なるフォームではなく、予約状態、確認メール、通知、外部CMS同期まで含めて、業務で使う流れとして設計しています。
            </p>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="surface-card grid gap-4 p-5 sm:grid-cols-[3.25rem_1fr] sm:p-6"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-[var(--portfolio-radius)] bg-[#083b46] text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0e6871]">{feature.scope}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-normal">{feature.title}</h3>
                  <p className="mt-3 text-base leading-8 text-zinc-600">{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#c8c0b6] bg-[#2a2a2a] px-5 py-14 text-[#dbd5cd] sm:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker-dark">
                System Flow
              </p>
              <h2 className="section-title mt-3 text-3xl font-semibold sm:text-4xl">
                受付から副本同期までつなげています。
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-zinc-300">
              予約者向けUI、Laravel API、管理画面、WordPress同期の役割を分けながら、ひとつの予約状態を進めていく構成です。
            </p>
          </div>
          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <ReservationFlowImageSlider />
            <ol className="space-y-3">
              {flow.map((item, index) => (
                <li
                  key={item.title}
                  className="grid gap-3 rounded-[var(--portfolio-radius)] border border-white/15 bg-white/5 p-4 sm:grid-cols-[2.75rem_1fr]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-[var(--portfolio-radius)] bg-[#b6d9dc] text-sm font-semibold text-[#083b46]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-normal text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#dbd5cd] px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="border-b border-zinc-200 pb-6 lg:border-b-0 lg:pb-0">
            <p className="section-kicker">
              Demo Mode
            </p>
            <h2 className="section-title mt-3 text-3xl font-semibold sm:text-5xl">
              backendなしでも触れるデモです。
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-600">
              ポートフォリオ用に、サンプル予約データで動くデモモードを追加しました。
              実予約やメール送信は行わず、UIと予約体験だけを公開できます。
            </p>
          </div>
          <figure className="media-frame p-3">
            <LightboxImage
              src="/screenshots/reservation-tour/top.png"
              alt="reservation-tour のデモトップ画面"
              width={1920}
              height={911}
              sizes="(max-width: 1024px) 100vw, 800px"
              title="Portfolio Demo"
              description="Vercel上でbackendなしに表示できる、ポートフォリオ用のデモ画面です。"
              imageClassName="portfolio-image h-auto w-full object-cover"
            />
            <figcaption className="image-caption mt-4">
              Vercelでは `NEXT_PUBLIC_DEMO_MODE=true` を使い、サンプルデータで予約フローを見せています。
            </figcaption>
          </figure>
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
