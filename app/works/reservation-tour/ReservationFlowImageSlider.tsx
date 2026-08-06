"use client";

import { useState } from "react";
import LightboxImage from "../../components/LightboxImage";

const flowSlides = [
  {
    label: "Start",
    title: "予約入口",
    description: "最短空き枠またはカレンダーから予約方法を選択する画面です。",
    src: "/screenshots/reservation-tour/reservation-top.png",
    alt: "reservation-tour の予約入口画面",
    height: 946,
  },
  {
    label: "Calendar",
    title: "カレンダー",
    description: "公開された予約枠と受付可否を見ながら日程を選ぶ画面です。",
    src: "/screenshots/reservation-tour/calender.png",
    alt: "reservation-tour のカレンダー画面",
    height: 949,
  },
  {
    label: "Admin",
    title: "管理画面",
    description: "予約一覧、状態更新、日別の受付ON / OFFを扱う管理画面です。",
    src: "/screenshots/reservation-tour/admin.png",
    alt: "reservation-tour の管理画面",
    height: 949,
  },
];

export default function ReservationFlowImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = flowSlides[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? flowSlides.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === flowSlides.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <figure className="media-frame media-frame-dark p-2">
      <LightboxImage
        src={active.src}
        alt={active.alt}
        width={1920}
        height={active.height}
        sizes="(min-width: 1024px) 620px, 100vw"
        title={active.title}
        description={active.description}
        unoptimized
        onPrevious={showPrevious}
        onNext={showNext}
        positionLabel={`${activeIndex + 1} / ${flowSlides.length}`}
        buttonClassName="aspect-[16/10] w-full rounded-sm bg-white"
        imageClassName="portfolio-image h-full w-full object-contain transition duration-300 group-hover:scale-[1.01]"
      />

      <figcaption className="mt-4 min-h-24 px-1 pb-1">
        <div className="flex flex-col gap-3">
          <div>
            <p className="section-kicker-dark">
              {active.label}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-normal text-zinc-100">
              {active.title}
            </h3>
          </div>
          <p className="text-sm leading-6 text-zinc-300">
            {active.description}
          </p>
        </div>
      </figcaption>

      <div className="flex flex-wrap gap-2 px-1 pb-1">
        {flowSlides.map((slide, index) => {
          const selected = index === activeIndex;

          return (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={selected}
              className={`border px-3 py-2 text-sm font-semibold transition ${
                selected
                  ? "border-cyan-200 bg-[#b6d9dc] text-[#083b46]"
                  : "border-white/20 bg-white/5 text-zinc-200 hover:border-white/40 hover:bg-white/10"
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
