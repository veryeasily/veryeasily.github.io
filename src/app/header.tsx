import Link from "next/link.js";

const LINKS: React.HTMLProps<HTMLAnchorElement>[] = [
  {
    href: "/",
    children: "lju.me",
  },
  {
    href: "/art",
    children: "art",
  },
  {
    href: "https://github.com/veryeasily",
    target: "_blank",
    children: "code",
  },
  {
    href: "https://soundcloud.com/siiiiinging",
    target: "_blank",
    children: "music",
  },
];

function HeaderLink({
  children,
  target,
  href = "#",
}: React.HTMLProps<HTMLAnchorElement>) {
  const isNewTab = target === "_blank";

  return (
    <Link
      href={href}
      target={target}
      className="header-lnk border border-white bg-white px-1.5 py-0.5 text-primary hover:border-teal-500 hover:text-teal-500"
    >
      <div className="header-lnk__inner flex items-center gap-1 text-base leading-none underline md:text-2xl">
        <div className="header-link__text">{children}</div>
        {isNewTab && (
          <div className="header-lnk__new-tab material-symbols--open-in-new relative mt-0.5 text-xs md:mt-1" />
        )}
      </div>
    </Link>
  );
}

export default function Header() {
  return (
    // <div className="border-b border-slate-500 bg-slate-500 bg-opacity-10 shadow shadow-slate-500">
    <div className="shadow-2xl shadow-primary">
      <header className="mx-auto flex w-full max-w-screen-sm flex-none justify-start gap-1.5 p-2 md:gap-2.5 md:p-4">
        {LINKS.map((props) => (
          <HeaderLink key={props.href} {...props} />
        ))}
      </header>
    </div>
  );
}
