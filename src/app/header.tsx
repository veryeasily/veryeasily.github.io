import Link from "next/link.js";

const LINKS = [
  {
    href: "/",
    text: "home",
  },
  {
    href: "/art",
    text: "art",
  },
];

export default function Header() {
  return (
    <header className="flex justify-center gap-3 py-12">
      {LINKS.map(({ href, text }) => (
        <Link
          key={href}
          href={href}
          className="text-primary border border-white bg-white px-3 py-1 text-2xl underline transition hover:border-teal-500 hover:text-teal-500"
        >
          {text}
        </Link>
      ))}
    </header>
  );
}
