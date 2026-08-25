"use client";

import LightboxImage from "./LightboxImage";

type Artwork = {
  title: string;
  label: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  layout: string;
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
    layout: "md:row-span-2",
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
    layout: "",
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
    layout: "",
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
    layout: "md:col-span-2",
    previewClassName: "object-cover object-[50%_38%]",
  },
];

export default function ArtworksGallery() {
  return (
    <div className="mt-10 grid auto-rows-[18rem] gap-5 md:grid-cols-3 md:auto-rows-[20rem]">
      {artworks.map((artwork) => (
        <article
          key={artwork.src}
          className={`relative overflow-hidden rounded-md border border-[#c8c0b6] bg-[#f8f6f2] ${artwork.layout}`}
        >
          <LightboxImage
            src={artwork.src}
            alt={artwork.alt}
            width={artwork.width}
            height={artwork.height}
            sizes="(max-width: 768px) 100vw, 33vw"
            title={artwork.title}
            description={artwork.description}
            buttonClassName="h-full w-full"
            imageClassName={`h-full w-full ${artwork.previewClassName} transition duration-500 group-hover:scale-[1.03]`}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/78 via-zinc-950/30 to-transparent p-5 text-white"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
              {artwork.label}
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              {artwork.title}
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}
