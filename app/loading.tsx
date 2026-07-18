export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[rgb(240,240,240)] text-[#2a2a2a]">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-14 w-14">
          <span className="absolute inset-0 border border-[#2a2a2a]/20" />
          <span className="absolute inset-2 animate-spin border border-transparent border-t-cyan-700" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-normal text-cyan-800">
          Portfolio
        </p>
      </div>
    </div>
  );
}
