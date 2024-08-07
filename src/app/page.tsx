import Link from "next/link.js";
import Text from "./text";

const TEXT = "Luke Underwood";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
      <h1 className="text-base">
        <Link href="/" className="text-lime-500 underline">
          <Text>{TEXT}</Text>
        </Link>
      </h1>

      <div className="flex w-full max-w-screen-sm flex-col gap-1.5">
        <h2 className="mb-1 border-b border-white text-2xl">
          <Text>Index</Text>
        </h2>

        <div className="flex flex-col gap-1 text-base">
          <h3 className="text-xs">
            <Link href="/art" className="text-lime-500 underline">
              Art
            </Link>
          </h3>

          <h3 className="text-xs">
            <Link href="/music" className="text-lime-500 underline">
              Music
            </Link>
          </h3>

          <h3 className="text-xs">
            <Link href="/work" className="text-lime-500 underline">
              Work
            </Link>
          </h3>
        </div>
      </div>
    </main>
  );
}
