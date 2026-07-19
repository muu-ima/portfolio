"use client";

import Image from "next/image";
import { useState } from "react";

const screenshot = {
  title: "WordPress 管理画面",
  description:
    "WordPress の管理画面で、発行・公開・停止・URL再発行をまとめて扱います。",
  src: "/screenshots/nfc-redirect/nfc-redirect.png",
  alt: "NFC Redirect の WordPress 管理画面。code の自動生成、path 生成、停止機能を扱う画面。",
};

export default function WordPressSideImage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <figure className="overflow-hidden rounded-md border border-zinc-200 bg-white p-2 shadow-sm shadow-zinc-950/5">
      <button
        type="button"
        onClick={() => setIsGalleryOpen(true)}
        className="group relative block aspect-[16/9] w-full overflow-hidden rounded-sm bg-zinc-50"
        aria-label={`${screenshot.title}の画像を拡大表示`}
      >
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          unoptimized
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-contain transition duration-300 group-hover:scale-[1.01]"
        />
        <span className="absolute bottom-3 right-3 bg-zinc-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-sm transition group-hover:opacity-100">
          拡大
        </span>
      </button>

      <figcaption className="px-2 pb-1 pt-3 text-sm leading-6 text-zinc-500">
        {screenshot.description}
      </figcaption>

      {isGalleryOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${screenshot.title}の拡大画像`}
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
                  WordPress Side
                </p>
                <p className="mt-1 text-xl font-semibold">
                  {screenshot.title}
                </p>
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
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-300">
              {screenshot.description}
            </p>
          </div>
        </div>
      ) : null}
    </figure>
  );
}
