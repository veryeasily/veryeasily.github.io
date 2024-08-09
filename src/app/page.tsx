import Link from "next/link.js";

import BasePage from "@/components/base_page";

export default function Home() {
  return (
    <BasePage header="Index">
      <h3>
        <Link href="/art" className="text-lime-500 underline">
          Art
        </Link>
      </h3>

      <h3>
        <Link
          href="https://soundcloud.com/siiiiinging"
          className="text-lime-500 underline"
          target="_blank"
        >
          Music
        </Link>
      </h3>

      <h3>
        <Link href="/work" className="text-lime-500 underline">
          Work
        </Link>
      </h3>
    </BasePage>
  );
}
