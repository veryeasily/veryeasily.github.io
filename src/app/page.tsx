import Link from "next/link.js"

import { LOGO, RESUME_LINK } from "@/lib/constants.ts"

export default function HomePage() {
  return (
    <article className="flex flex-col text-lg text-black">
      <section className="flex gap-2">
        <div className="flex-1">
          <h2 className="text-2xl">hey!!</h2>

          <div className="mt-2 text-base">
            <p>this is where i put stuff i do!</p>

            <p>
              you can see my resume{" "}
              <Link href={RESUME_LINK} className="text-primary underline" target="_blank">
                here
              </Link>
            </p>
          </div>
        </div>

        <img
          src={LOGO.src}
          alt="logo"
          className="block h-24 w-24 flex-none rounded-full md:h-40 md:w-40"
        />
      </section>
    </article>
  )
}
