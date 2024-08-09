import Link from "next/link.js";
import Text from "../text";

const TEXT = "Luke Underwood";

export default function Work() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-1 p-24 text-base">
      <h1>
        <Link href="/" className="text-lime-500 underline">
          <Text>{TEXT}</Text>
        </Link>
      </h1>

      <div className="flex w-full max-w-screen-sm flex-col">
        <h2 className="mb-1 border-b border-white text-xs">
          <Text>Work Experience</Text>
        </h2>

        <div>
          <h3>
            <Text>Whitney Museum of American Art</Text>
          </h3>

          <h3>
            <Text>Chatlands Horizons</Text>
          </h3>

          <h3>
            <Text>The Markup</Text>
          </h3>
        </div>
      </div>
    </main>
  );
}
