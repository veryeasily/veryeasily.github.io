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
  {
    href: "https://soundcloud.com/siiiiinging",
    target: "_blank",
    text: "music",
  },
];

export default function Header() {
  return (
    <header className="flex flex-none justify-center gap-3 py-12">
      {LINKS.map(({ href, target, text }) => (
        <Link key={href} target={target} href={href} className="header-btn">
          {text}
        </Link>
      ))}
    </header>
  );
}
