import LoaderMark from "./components/LoaderMark";

export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#dbd5cd] text-[#252525]">
      <LoaderMark label="Loading" />
    </div>
  );
}
