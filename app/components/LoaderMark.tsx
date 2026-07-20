type LoaderMarkProps = {
  label?: string;
};

export default function LoaderMark({ label = "Portfolio" }: LoaderMarkProps) {
  return (
    <div className="flex flex-col items-center gap-5 text-[#252525]" role="status" aria-live="polite">
      <div className="relative h-14 w-14" aria-hidden="true">
        <span className="absolute inset-0 rounded-[var(--portfolio-radius)] border border-[#aaa197]" />
        <span className="absolute inset-2 rounded-[calc(var(--portfolio-radius)-2px)] border border-transparent border-t-[#0e6871] motion-safe:animate-spin" />
      </div>
      <p className="section-kicker">{label}</p>
    </div>
  );
}
