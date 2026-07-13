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
  const active = screenshots[activeIndex];

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
      <article className="rounded-md border border-white/15 bg-white/5 p-4">
        <div className="relative aspect-[1920/946] overflow-hidden rounded-md border border-white/10 bg-white">
          <Image
            src={active.src}
            alt={`${active.title}のスクリーンショット`}
            fill
            priority={activeIndex === 0}
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-contain"
          />
        </div>

        <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
          <div>
            <p className="text-sm font-semibold text-teal-300">
              {activeIndex + 1} / {screenshots.length}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-normal">
              {active.title}
            </h3>
          </div>
          <p className="max-w-2xl text-base leading-7 text-zinc-300">
            {active.description}
          </p>
        </div>
      </article>

      <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="前のスクリーンショット"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-white/10 text-xl font-semibold text-white transition hover:bg-white hover:text-zinc-950"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="次のスクリーンショット"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-white/10 text-xl font-semibold text-white transition hover:bg-white hover:text-zinc-950"
          >
            →
          </button>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-end">
          {screenshots.map((screenshot, index) => {
            const selected = index === activeIndex;

            return (
              <button
                key={screenshot.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={selected}
                className={`rounded-md border px-3 py-2 text-left text-sm font-semibold transition ${
                  selected
                    ? "border-teal-300 bg-teal-300 text-zinc-950"
                    : "border-white/20 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                {screenshot.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
