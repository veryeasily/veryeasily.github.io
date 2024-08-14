import Link from "next/link.js"

export default function HomePage() {
  return (
    <article className="flex flex-col text-lg text-black">
      <h2 className="text-2xl">hey!!</h2>

      <section className="pt-2 text-base">
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
      </section>
    </article>
  )
}
