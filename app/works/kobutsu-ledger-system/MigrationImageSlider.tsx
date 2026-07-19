"use client";

import { useState } from "react";
import LightboxImage from "../../components/LightboxImage";

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
  const active = migrationSlides[activeIndex];

  return (
    <figure className="overflow-hidden rounded-md border border-zinc-200 bg-[rgb(240,240,240)] p-2 shadow-sm shadow-zinc-950/10">
      <LightboxImage
        src={active.src}
        alt={active.alt}
        width={1920}
        height={activeIndex === 0 ? 774 : 938}
        sizes="(min-width: 1024px) 680px, 100vw"
        title={active.title}
        description={active.description}
        unoptimized
        buttonClassName="aspect-[16/10] w-full rounded-sm bg-white"
        imageClassName="h-full w-full object-contain transition duration-300 group-hover:scale-[1.01]"
      />

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

    </figure>
  );
}
