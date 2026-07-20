import LightboxImage from "../../components/LightboxImage";

const screenshot = {
  title: "WordPress 管理画面",
  description:
    "WordPress の管理画面で、発行・公開・停止・URL再発行をまとめて扱います。",
  src: "/screenshots/nfc-redirect/nfc-redirect.png",
  alt: "NFC Redirect の WordPress 管理画面。code の自動生成、path 生成、停止機能を扱う画面。",
};

export default function WordPressSideImage() {
  return (
    <figure className="media-frame p-2">
      <LightboxImage
        src={screenshot.src}
        alt={screenshot.alt}
        width={1920}
        height={876}
        sizes="(min-width: 1024px) 42vw, 100vw"
        title={screenshot.title}
        description={screenshot.description}
        buttonClassName="aspect-[16/9] w-full rounded-sm bg-zinc-50"
        imageClassName="portfolio-image h-full w-full object-contain transition duration-300 group-hover:scale-[1.01]"
      />
      <figcaption className="image-caption px-2 pb-1 pt-3">
        {screenshot.description}
      </figcaption>
    </figure>
  );
}
