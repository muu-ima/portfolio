"use client";

import Image from "next/image";
import { useState } from "react";

type Screenshot = {
  title: string;
  description: string;
  src: string;
};

type ScreenshotSliderProps = {
  screenshots: Screenshot[];
};

export default function ScreenshotSlider({ screenshots }: ScreenshotSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const active = screenshots[activeIndex];
  const nextIndex =
    activeIndex === screenshots.length - 1 ? 0 : activeIndex + 1;
  const next = screenshots[nextIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="mt-10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-cyan-200">
          {activeIndex + 1}
          <span className="mx-3 text-zinc-500">/</span>
          <span className="text-zinc-500">{screenshots.length}</span>
        </p>
        <div className="hidden h-px flex-1 bg-white/15 sm:block" />
      </div>

      <div className="relative overflow-hidden">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
          <article className="relative">
            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="group relative block aspect-[1920/946] w-full overflow-hidden border border-white/20 bg-white text-left shadow-sm"
              aria-label={`${active.title}のスクリーンショットを拡大表示`}
            >
              <Image
                src={active.src}
                alt={`${active.title}のスクリーンショット`}
                fill
                priority={activeIndex === 0}
                unoptimized
                sizes="(min-width: 1280px) 980px, 100vw"
                className="object-contain transition duration-300 group-hover:scale-[1.01]"
              />
              <span className="absolute bottom-4 right-4 bg-zinc-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-sm transition group-hover:opacity-100">
                拡大
              </span>
            </button>
            <div className="mt-5 grid gap-4 lg:grid-cols-[0.45fr_1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold text-cyan-200">
                  {activeIndex + 1} / {screenshots.length}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-normal">
                  {active.title}
                </h3>
              </div>
              <p className="text-base leading-7 text-zinc-300">
                {active.description}
              </p>
            </div>
          </article>

          <article className="hidden lg:block">
            <button
              type="button"
              onClick={goToNext}
              className="group block w-full text-left"
              aria-label={`${next.title}のスクリーンショットへ移動`}
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-white/15 bg-white opacity-70 transition group-hover:opacity-100">
                <Image
                  src={next.src}
                  alt={`${next.title}のスクリーンショット`}
                  fill
                  unoptimized
                  sizes="420px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <p className="text-2xl font-semibold">{next.title}</p>
                </div>
              </div>
            </button>
          </article>
        </div>

        <div className="mt-5 flex gap-2 lg:absolute lg:left-[calc(100%-470px)] lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:flex-col xl:left-[calc(100%-530px)]">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="前のスクリーンショット"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dbd5cd] text-xl font-semibold text-[#2a2a2a] shadow-sm transition hover:bg-white"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="次のスクリーンショット"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dbd5cd] text-xl font-semibold text-[#2a2a2a] shadow-sm transition hover:bg-white"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {screenshots.map((screenshot, index) => {
          const selected = index === activeIndex;

          return (
            <button
              key={screenshot.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={selected}
              className={`border px-3 py-2 text-left text-sm font-semibold transition ${
                selected
                  ? "border-cyan-200 bg-cyan-200 text-zinc-950"
                  : "border-white/20 bg-white/5 text-zinc-300 hover:bg-white/10"
              }`}
            >
              {screenshot.title}
            </button>
          );
        })}
      </div>

      {isGalleryOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title}のスクリーンショット拡大表示`}
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
                <p className="text-sm font-semibold text-cyan-200">
                  {activeIndex + 1} / {screenshots.length}
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
                alt={`${active.title}のスクリーンショット`}
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
                  onClick={goToPrevious}
                  className="border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-zinc-950"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-zinc-950"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
