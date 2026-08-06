import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LightboxImage from "../../components/LightboxImage";
import SideKanaNav from "../../components/SideKanaNav";
import SiteFooter from "../../components/SiteFooter";

const flowGroups = [
  {
    label: "予約する",
    description: "見学者が日程を選び、フォーム入力へ進む入口です。",
    image: {
      src: "/screenshots/reservation-tour/reservation-top.png",
      alt: "reservation-tour の予約入口画面",
      title: "予約入口",
      height: 946,
    },
    items: [
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
    ],
  },
  {
    label: "確定する",
    description: "入力内容を検証し、メール確認とスタッフ通知につなげます。",
    image: {
      src: "/screenshots/reservation-tour/calender.png",
      alt: "reservation-tour のカレンダー画面",
      title: "カレンダー",
      height: 949,
    },
    items: [
      {
        title: "入力と重複枠を検証",
        description: "Laravel API が入力値、reCAPTCHA、同じ枠の重複予約を確認します。",
      },
      {
        title: "確認メールと通知を送信",
        description: "見学者へ確認メールを送り、スタッフには必要な予約情報を通知します。",
      },
    ],
  },
  {
    label: "運用する",
    description: "管理画面で状態を見ながら、外部CMSへ副本を残します。",
    image: {
      src: "/screenshots/reservation-tour/admin.png",
      alt: "reservation-tour の管理画面",
      title: "管理画面",
      height: 949,
    },
    items: [
      {
        title: "管理画面で運用",
        description: "予約一覧、状態変更、削除、日別の受付可否を管理画面から扱います。",
      },
      {
        title: "WordPressへ副本同期",
        description: "確認済み予約を booked として扱い、WordPress REST API へ同期します。",
      },
    ],
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

      <section className="border-y border-[#c8c0b6] bg-[#dbd5cd] px-5 py-14 text-[#2a2a2a] sm:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="border-b border-[#c8c0b6] pb-8">
            <div>
              <p className="section-kicker">
                System Flow
              </p>
              <h2 className="section-title mt-3 text-3xl font-semibold sm:text-4xl">
                受付から副本同期までつなげています。
              </h2>
            </div>
            <p className="mt-5 max-w-5xl text-base leading-8 text-zinc-600">
              予約者向けUI、Laravel API、管理画面、WordPress同期の役割を分けながら、ひとつの予約状態を進めていく構成です。
            </p>
          </div>
          <div className="mt-9 space-y-6">
            {flowGroups.map((group, groupIndex) => {
              const offset = flowGroups
                .slice(0, groupIndex)
                .reduce((total, current) => total + current.items.length, 0);

              return (
                <article
                  key={group.label}
                  className="grid gap-6 border-t border-[#c8c0b6] pt-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start"
                >
                  <figure className="media-frame p-2">
                    <LightboxImage
                      src={group.image.src}
                      alt={group.image.alt}
                      width={1920}
                      height={group.image.height}
                      sizes="(min-width: 1024px) 520px, 100vw"
                      title={group.image.title}
                      description={group.description}
                      unoptimized
                      buttonClassName="aspect-[16/10] w-full rounded-sm bg-white"
                      imageClassName="portfolio-image h-full w-full object-contain transition duration-300 group-hover:scale-[1.01]"
                    />
                  </figure>
                  <div>
                    <div className="border-b border-[#c8c0b6] pb-4">
                      <p className="section-kicker">
                        {group.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        {group.description}
                      </p>
                    </div>
                    <ol className="mt-4 space-y-3">
                      {group.items.map((item, itemIndex) => (
                        <li
                          key={item.title}
                          className="surface-card flex gap-4 p-4"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--portfolio-radius)] bg-[#b6d9dc] text-sm font-semibold text-[#083b46]">
                            {offset + itemIndex + 1}
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-lg font-semibold tracking-normal text-zinc-950">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-zinc-600">
                              {item.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </article>
              );
            })}
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
