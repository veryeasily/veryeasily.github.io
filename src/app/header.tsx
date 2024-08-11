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

// .header-btn {
//   @apply border;
//   @apply border-white;
//   @apply bg-white;
//   @apply px-3;
//   @apply py-1;
//   @apply text-base md:text-2xl;
//   @apply text-primary;
//   @apply underline;
//   @apply hover:border-teal-500 hover:text-teal-500;
//   @apply duration-150;
//   transition-property: border;
// }

function HeaderLink({
  children,
  target,
  href = "#",
}: React.HTMLProps<HTMLAnchorElement>) {
  const isNewTab = target === "_blank";

  return (
    // <Link href={href} target={target} className="header-btn">
    <Link
      href={href}
      target={target}
      className="border border-transparent bg-white px-1.5 py-0.5 text-primary hover:border-teal-500 hover:text-teal-500"
    >
      <div className="flex items-center gap-1 text-base underline md:text-2xl">
        <span>{children}</span>
        {isNewTab && (
          <div className="material-symbols--open-in-new mt-0.5 text-xs leading-none md:mt-1" />
        )}
      </div>
    </Link>
  );
}

export default function Header() {
  return (
    // <div className="border-b border-slate-500 bg-slate-500 bg-opacity-10 shadow shadow-slate-500">
    <div className="shadow-2xl shadow-primary">
      <header className="mx-auto flex w-full max-w-screen-sm flex-none justify-start gap-3 p-4">
        {LINKS.map((props) => (
          <HeaderLink key={props.href} {...props} />
        ))}
      </header>
    </div>
  );
}
