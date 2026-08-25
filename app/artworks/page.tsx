import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArtworksGallery from "../components/ArtworksGallery";
import SideKanaNav from "../components/SideKanaNav";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Artworks | Portfolio",
  description:
    "絵画教室で描いた模写、スケッチ、水彩の習作をまとめたギャラリーページです。",
};

export default function ArtworksPage() {
  return (
    <main className="min-h-screen bg-[#dbd5cd] text-[#2a2a2a]">
      <SideKanaNav />
      <section className="relative overflow-hidden border-b border-[#c8c0b6] bg-[#dbd5cd]">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/artworks/studies/akira.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center mix-blend-multiply"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(219,213,205,0.98)_0%,rgba(219,213,205,0.9)_52%,rgba(219,213,205,0.64)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <nav className="mb-20 flex items-center gap-3 text-sm font-medium">
            <Link href="/" className="transition hover:text-[#0e6871]">
              Portfolio
            </Link>
            <span className="text-zinc-400" aria-hidden="true">
              /
            </span>
            <span className="text-zinc-600">Artworks</span>
          </nav>

          <div className="pb-20">
            <p className="section-kicker mb-5 inline-flex border-b border-[#0e6871]/30 pb-1">
              Artworks
            </p>
            <h1 className="section-title text-4xl font-semibold sm:whitespace-nowrap sm:text-6xl lg:text-7xl">
              絵画教室で描いた習作です。
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-700">
              模写やスケッチ、水彩を通して、形の取り方、構図、濃淡、余白の置き方を練習しています。
              Web制作とは別の入口から、ものを見る力を育てるために続けているものです。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c8c0b6] bg-[#eee8df] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-[#c8c0b6] pb-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="section-kicker">
                Gallery
              </p>
              <h2 className="section-title mt-3 text-3xl font-semibold sm:text-5xl">
                教室で描いたもの
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-7 text-zinc-600 lg:justify-self-end">
              クリックすると拡大して見られます。細かい線や淡い色の重なりも、そのまま見えるように載せています。
            </p>
          </div>

          <ArtworksGallery />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
