import Link from "next/link.js";
import Text from "../text";

const TEXT = "Luke Underwood";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24 text-base">
      <h1>
        <Link href="/" className="text-lime-500 underline">
          <Text>{TEXT}</Text>
        </Link>
      </h1>

      <div className="flex w-full max-w-screen-sm flex-col">
        <h2 className="mb-1 border-b border-white text-xs">
          <Text>Art</Text>
        </h2>

        <div className="flex flex-col gap-1">
          <h3>Put art here!</h3>
        </div>
      </div>
    </main>
  );
}