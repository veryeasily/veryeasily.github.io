import Link from "next/link.js"

import logo from "@/assets/logo.png"

export default function HomePage() {
  return (
    <article className="flex flex-col text-lg text-black">
      <section className="flex gap-2">
        <div className="flex-1">
          <h2 className="text-2xl">hey!!</h2>

          <div className="text-base mt-2">
            <p>this is where i put stuff i do!</p>

            <p>
              you can see my resume{" "}
              <Link
                href="https://drive.google.com/file/d/15eq-Ec4faLtWqT8hZ68_YsUuEYIuiSae/view?usp=sharing"
                className="text-primary underline"
                target="_blank"
              >
                here
              </Link>
            </p>
          </div>
        </div>

        <img
          src={logo.src}
          alt="logo"
          className="w-24 h-24 md:w-40 md:h-40 flex-none block rounded-full"
        />
      </section>
    </article>
  )
}
