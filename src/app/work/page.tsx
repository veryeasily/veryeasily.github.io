import Link from "next/link.js"

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p>you can see my resume here:</p>
        <Link
          href="https://drive.google.com/file/d/1v1VjByEnhcjktkTrMWXCxMA2Dor5gEE-/view?usp=sharing"
          className="text-blue-500 underline"
          target="_blank"
        >
          link
        </Link>
      </div>
    </div>
  )
}
