"use client";

import Image from "next/image";
import { useState } from "react";

const migrationSlides = [
  {
    label: "Before",
    title: "スプレッドシート運用",
    description:
      "複数タブと参照式で、台帳・販売・為替・支払いをつないでいた状態です。",
    src: "/kobutsu-ledger/ledger-before.png",
    alt: "スプレッドシートで運用していた古物台帳の画面",
  },
  {
    label: "After",
    title: "Web管理画面",
    description:
      "入力元を残しながら、仕入れ・販売・精算へ分けて確認できる画面にしています。",
    src: "/kobutsu-ledger/ledger-after.png",
    alt: "Web管理画面に移した古物台帳システムの画面",
  },
];

export default function MigrationImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const active = migrationSlides[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? migrationSlides.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === migrationSlides.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <figure className="overflow-hidden rounded-md border border-zinc-200 bg-[rgb(240,240,240)] p-2 shadow-sm shadow-zinc-950/10">
      <button
        type="button"
        onClick={() => setIsGalleryOpen(true)}
        className="group relative block aspect-[16/10] w-full overflow-hidden rounded-sm bg-white"
        aria-label={`${active.title}の画像を拡大表示`}
      >
        <Image
          src={active.src}
          alt={active.alt}
          fill
          unoptimized
          sizes="(min-width: 1024px) 680px, 100vw"
          className="object-contain transition duration-300 group-hover:scale-[1.01]"
        />
        <span className="absolute bottom-3 right-3 bg-zinc-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-sm transition group-hover:opacity-100">
          拡大
        </span>
      </button>

      <figcaption className="mt-4 min-h-24 px-1 pb-1">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-sky-700">
              {active.label}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-normal">
              {active.title}
            </h3>
          </div>
          <p className="text-sm leading-6 text-zinc-600">
            {active.description}
          </p>
        </div>
      </figcaption>

      <div className="flex gap-2 px-1 pb-1">
        {migrationSlides.map((slide, index) => {
          const selected = index === activeIndex;

          return (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={selected}
              className={`border px-3 py-2 text-sm font-semibold transition ${
                selected
                  ? "border-cyan-200 bg-cyan-200 text-[#083344]"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500"
              }`}
            >
              {slide.label}
            </button>
          );
        })}
      </div>

      {isGalleryOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title}の拡大画像`}
          className="fixed inset-0 z-50 bg-zinc-950/90 p-4 text-white sm:p-8"
        >
          <button
            type="button"
            onClick={() => setIsGalleryOpen(false)}
            className="absolute inset-0 cursor-zoom-out"
            aria-label="拡大表示を閉じる"
          />

          <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-normal text-cyan-200">
                  {active.label}
                </p>
                <p className="mt-1 text-xl font-semibold">{active.title}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsGalleryOpen(false)}
                className="border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-zinc-950"
              >
                閉じる
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden border border-white/20 bg-white">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="max-w-3xl text-sm leading-6 text-zinc-300">
                {active.description}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-zinc-950"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-zinc-950"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </figure>
  );
}
