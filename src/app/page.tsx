import Link from "next/link.js";

import BasePage from "@/components/base_page";

export default function HomePage() {
  return (
    <BasePage>
      <div className="flex flex-col gap-4 text-black">
        <h2 className="text-2xl">hey!!</h2>
        <p className="text-lg">this is where i plan to put stuff i do!</p>
        <div className="text-lg">
          <p>you can see my resume here:</p>
          <Link
            href="https://drive.google.com/file/d/15eq-Ec4faLtWqT8hZ68_YsUuEYIuiSae/view?usp=sharing"
            className="text-blue-500 underline"
            target="_blank"
          >
            link
          </Link>
        </div>
      </div>
    </BasePage>
  );
}
