"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type LightboxImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  title?: string;
  description?: string;
  imageClassName?: string;
  buttonClassName?: string;
  loading?: ImageProps["loading"];
  priority?: ImageProps["priority"];
  unoptimized?: ImageProps["unoptimized"];
  onPrevious?: () => void;
  onNext?: () => void;
  positionLabel?: string;
};

export default function LightboxImage({
  src,
  alt,
  width,
  height,
  sizes,
  title,
  description,
  imageClassName = "h-auto w-full",
  buttonClassName = "w-full",
  loading,
  priority,
  unoptimized,
  onPrevious,
  onNext,
  positionLabel,
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousHandlerRef = useRef(onPrevious);
  const nextHandlerRef = useRef(onNext);
  const label = title ?? alt;

  useEffect(() => {
    previousHandlerRef.current = onPrevious;
    nextHandlerRef.current = onNext;
  }, [onPrevious, onNext]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") previousHandlerRef.current?.();
      if (event.key === "ArrowRight") nextHandlerRef.current?.();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className={`group relative block cursor-zoom-in overflow-hidden text-left ${buttonClassName}`}
        aria-label={`${label}の画像を拡大表示`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading}
          priority={priority}
          unoptimized={unoptimized}
          className={imageClassName}
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-zinc-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-sm transition group-hover:opacity-100 group-focus-visible:opacity-100">
          拡大
        </span>
      </button>

      {isOpen
        ? createPortal(
          <div
          className="lightbox-backdrop fixed inset-0 z-[80] bg-zinc-950/90 px-4 py-6 text-white backdrop-blur-sm sm:px-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${label}の拡大画像`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="lightbox-panel relative mx-auto flex h-full max-w-7xl flex-col gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                {title ? <p className="text-lg font-semibold">{title}</p> : null}
                {description ? (
                  <p className="mt-1 max-w-3xl text-sm leading-6 text-zinc-300">
                    {description}
                  </p>
                ) : null}
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl leading-none text-white transition hover:bg-white/20"
                aria-label="閉じる"
              >
                ×
              </button>
            </div>
            <div className="relative min-h-0 flex-1 cursor-zoom-out" onClick={() => setIsOpen(false)}>
              <Image
                src={src}
                alt={alt}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
            {onPrevious || onNext ? (
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-zinc-300">{positionLabel}</p>
                <div className="flex gap-2">
                  {onPrevious ? (
                    <button
                      type="button"
                      onClick={onPrevious}
                      className="flex h-11 min-w-11 items-center justify-center border border-white/30 px-4 text-lg transition hover:bg-white hover:text-zinc-950"
                      aria-label="前の画像"
                    >
                      ←
                    </button>
                  ) : null}
                  {onNext ? (
                    <button
                      type="button"
                      onClick={onNext}
                      className="flex h-11 min-w-11 items-center justify-center border border-white/30 px-4 text-lg transition hover:bg-white hover:text-zinc-950"
                      aria-label="次の画像"
                    >
                      →
                    </button>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
          </div>,
          document.body,
        )
        : null}
    </>
  );
}
