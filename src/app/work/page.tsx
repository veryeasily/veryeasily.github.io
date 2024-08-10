import Link from "next/link.js";

import BasePage from "@/components/base_page";

export default function WorkPage() {
  return (
    <BasePage>
      <div className="flex flex-col gap-8">
        <div>
          <p>you can see my resume here:</p>
          <Link
            href={process.env.NEXT_PUBLIC_RESUME_URL || ""}
            className="text-blue-500 underline"
            target="_blank"
          >
            link
          </Link>
        </div>

        {/* <div>
          <h3>
            <Text>Whitney Museum of American Art</Text>
          </h3>

          <h3>
            <Text>Chatlands Horizons</Text>
          </h3>

          <h3>
            <Text>The Markup</Text>
          </h3>
        </div> */}
      </div>
    </BasePage>
  );
}
