"use client";

import clsx from "clsx";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";

import { classes } from "@/lib/classes.ts";

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

const HEADER_CLASSES = {
  active: "border-gray-400 text-primary",
  inactive: "border-white text-primary",
};

function HeaderLink({
  children,
  target,
  href = "#",
}: React.HTMLProps<HTMLAnchorElement>) {
  const isNewTab = target === "_blank";
  const pathname = usePathname();

  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        pathname === href ? HEADER_CLASSES.active : HEADER_CLASSES.inactive,
        "header__link border bg-white px-1.5 py-0.5 hover:border-teal-500 hover:text-teal-500 active:border-teal-400 active:text-teal-400",
      )}
    >
      <div className="header__inner-link flex items-center gap-1 text-base leading-none underline md:text-2xl">
        <div className="header__link-text">{children}</div>
        {isNewTab && (
          <div className="header__new-tab-link material-symbols--open-in-new relative mt-0.5 text-xs md:mt-1" />
        )}
      </div>
    </Link>
  );
}

export default function Header({
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={classes("shadow-2xl shadow-primary", className)} {...rest}>
      <header className="mx-auto flex w-full max-w-screen-sm flex-none justify-start gap-1.5 p-2 md:gap-2.5 md:p-4">
        {LINKS.map((props) => (
          <HeaderLink key={props.href} {...props} />
        ))}
      </header>
    </div>
  );
}
