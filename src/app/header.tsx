"use client"

import clsx from "clsx"
import Link from "next/link.js"
import { useEffect, useRef } from "react"
import { useEvent } from "react-use"

import { classes } from "@/lib/classes.ts"
import { useStore } from "@/lib/store.ts"
import GithubIcon from "@/assets/github-icon.tsx"
import SoundcloudIcon from "@/assets/soundcloud-icon.tsx"

const LINKS: React.HTMLProps<HTMLAnchorElement>[] = [
  {
    href: "/",
    children: "home",
  },
  {
    href: "/art",
    children: "art",
  },
]

interface SideLink {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  href: string
}

const sideLinks: SideLink[] = [
  {
    Icon: SoundcloudIcon,
    href: "https://soundcloud.com/siiiiinging",
  },
  {
    Icon: GithubIcon,
    href: "https://github.com/veryeasily",
  },
]

const HEADER_CLASSES = {
  active: "border-b-primary text-primary",
  inactive: "text-primary",
}

function HeaderLink({ children, target, href = "#" }: React.HTMLProps<HTMLAnchorElement>) {
  const isActive = false

  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        isActive ? HEADER_CLASSES.active : HEADER_CLASSES.inactive,
        "header_link border border-white bg-white px-1 md:px-2 py-1 md:py-0.5 hover:border-teal-500 hover:text-teal-500 active:border-teal-400 active:text-teal-400",
      )}
    >
      <div className="header_inner-link flex items-center gap-1 text-base leading-none underline md:text-2xl">
        <div className="header_link-text">{children}</div>
      </div>
    </Link>
  )
}

const Header = ({ className, ...rest }: React.HTMLProps<HTMLElement>) => {
  const store = useStore()
  const headerRef = useRef<HTMLElement>(null)

  /**
   * Records the header height in the global store
   */
  function recordHeight() {
    const header = headerRef.current
    if (!header) return

    store.setHeaderHeight(header.clientHeight)
  }

  useEffect(recordHeight, [store])
  useEvent("resize", recordHeight)

  return (
    <header
      className={classes(
        "header shadow-2xl shadow-primary z-10 flex items-center justify-between leading-none px-1 md:px-2 py-1 md:py-2",
        className,
      )}
      ref={headerRef}
      {...rest}
    >
      <div className="header_logo flex-1" />

      <div className="header_inner mx-auto flex max-w-screen-sm justify-center gap-1 md:gap-2">
        {LINKS.map((props) => (
          <HeaderLink key={props.href} {...props} />
        ))}
      </div>

      <div className="header_side-links flex gap-1 md:gap-2 flex-1 justify-end">
        {sideLinks.map(({ Icon, href }) => (
          <a
            href={href}
            target="_blank"
            key={href}
            className="header_side-link block hover:text-teal-500 text-primary"
          >
            <Icon className="w-5 h-5 md:w-8 md:h-8" />
          </a>
        ))}
      </div>
    </header>
  )
}

export default Header
