"use client";

import Image from "next/image";
import { useState } from "react";
import LightboxImage from "./LightboxImage";

type Artwork = {
  title: string;
  label: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  previewClassName: string;
};

const artworks: Artwork[] = [
  {
    title: "AKIRA study",
    label: "Pencil / Watercolor",
    description: "線画と淡い色で、構図の強さと奥行きの作り方を見ながら描いた習作です。",
    src: "/artworks/studies/akira.jpg",
    alt: "AKIRAを題材にした鉛筆と水彩の模写作品",
    width: 3472,
    height: 4624,
    previewClassName: "object-cover object-center",
  },
  {
    title: "Picture book study",
    label: "Pencil",
    description: "絵本の場面から、人物と動きのある配置、余白の取り方を追ったスケッチです。",
    src: "/artworks/studies/ehon.jpg",
    alt: "絵本の場面を題材にした鉛筆の模写スケッチ",
    width: 3174,
    height: 2430,
    previewClassName: "object-cover object-center",
  },
  {
    title: "Horse study",
    label: "Colored Pencil / Watercolor",
    description: "馬の大きな形と、色を薄く重ねたときの空気感を試した習作です。",
    src: "/artworks/studies/uma.jpg",
    alt: "馬と騎手を題材にした色鉛筆と水彩の習作",
    width: 3264,
    height: 2448,
    previewClassName: "object-cover object-center",
  },
  {
    title: "Arare study",
    label: "Pencil",
    description: "複数モチーフを一枚に置き、濃淡と視線誘導を確かめながら描いたスケッチです。",
    src: "/artworks/studies/arare.jpg",
    alt: "アラレちゃんと大きな鳥を題材にした鉛筆スケッチ",
    width: 2448,
    height: 3171,
    previewClassName: "object-cover object-[50%_38%]",
  },
];

export default function ArtworksGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = artworks[activeIndex];
  const nextIndex = activeIndex === artworks.length - 1 ? 0 : activeIndex + 1;
  const next = artworks[nextIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? artworks.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === artworks.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="mt-10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-[#0e6871]">
          {activeIndex + 1}
          <span className="mx-3 text-zinc-400">/</span>
          <span className="text-zinc-500">{artworks.length}</span>
        </p>
        <div className="hidden h-px flex-1 bg-[#c8c0b6] sm:block" />
      </div>

      <div className="relative overflow-hidden">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
          <article>
            <LightboxImage
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="(min-width: 1280px) 860px, 100vw"
              title={active.title}
              description={active.description}
              onPrevious={showPrevious}
              onNext={showNext}
              positionLabel={`${activeIndex + 1} / ${artworks.length}`}
              buttonClassName="aspect-[4/3] w-full rounded-md border border-[#c8c0b6] bg-[#f8f6f2]"
              imageClassName={`portfolio-image h-full w-full ${active.previewClassName} transition duration-300 group-hover:scale-[1.01]`}
            />

            <div className="mt-5 grid gap-4 lg:grid-cols-[0.36fr_1fr] lg:items-start">
              <div>
                <p className="section-kicker">
                  {active.label}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-normal text-zinc-950">
                  {active.title}
                </h3>
              </div>
              <p className="text-base leading-7 text-zinc-600">
                {active.description}
              </p>
            </div>
          </article>

          <article className="hidden lg:block">
            <button
              type="button"
              onClick={showNext}
              className="group block w-full text-left"
              aria-label={`${next.title}へ移動`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[#c8c0b6] bg-[#f8f6f2] opacity-75 transition group-hover:opacity-100">
                <Image
                  src={next.src}
                  alt={next.alt}
                  fill
                  sizes="420px"
                  className={next.previewClassName}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                    Next
                  </p>
                  <p className="mt-2 text-2xl font-semibold">{next.title}</p>
                </div>
              </div>
            </button>
          </article>
        </div>

        <div className="mt-5 flex gap-2 lg:absolute lg:left-[calc(100%-470px)] lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:flex-col xl:left-[calc(100%-530px)]">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="前の作品"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#083b46] text-xl font-semibold text-white shadow-sm transition hover:bg-[#0e6871]"
          >
            ←
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="次の作品"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#083b46] text-xl font-semibold text-white shadow-sm transition hover:bg-[#0e6871]"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {artworks.map((artwork, index) => {
          const selected = index === activeIndex;

          return (
            <button
              key={artwork.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={selected}
              className={`border px-3 py-2 text-left text-sm font-semibold transition ${
                selected
                  ? "border-[#0e6871] bg-[#b6d9dc] text-[#083b46]"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500"
              }`}
            >
              {artwork.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
