import Link from "next/link.js";

const LINKS = [
  {
    href: "/",
    text: <span>home</span>,
  },
  {
    href: "/art",
    text: <span>art</span>,
  },
  {
    href: "https://soundcloud.com/siiiiinging",
    target: "_blank",
    text: (
      <div className="flex items-center gap-0.5">
        <span>music</span>
        <span className="material-symbols--open-in-new mt-1" />
      </div>
    ),
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
