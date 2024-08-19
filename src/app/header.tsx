"use client"

import clsx from "clsx"
import Link from "next/link.js"
import { useEffect, useRef } from "react"
import { useEvent } from "react-use"

import { classes } from "@/lib/styles.ts"
import { useStore } from "@/lib/store.ts"
import GithubIcon from "@/assets/github-icon.tsx"
import SoundcloudIcon from "@/assets/soundcloud-icon.tsx"

interface HeaderLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>
}

const LINKS: HeaderLinkProps[] = [
  {
    href: "/",
    children: "home",
  },
  {
    href: "/art",
    children: "art",
  },
  {
    href: "https://github.com/veryeasily",
    Icon: GithubIcon,
    children: "code",
  },
  {
    href: "https://soundcloud.com/siiiiinging",
    Icon: SoundcloudIcon,
    children: "music",
  },
]

function HeaderLink({ children, target, Icon, href = "#" }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        "header_link flex items-center gap-1.5 border border-white bg-white px-1 py-1 text-primary hover:border-teal-500 hover:text-teal-500 md:px-2 md:py-1",
      )}
    >
      <div className="header_inner-link flex items-center gap-1 text-base leading-none underline md:text-2xl">
        <div className="header_link-text leading-none">{children}</div>
      </div>

      {Icon && <Icon className="h-4 w-4 md:mt-0.5 md:h-5 md:w-5" />}
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
        "header z-10 flex items-center justify-between px-1 py-1 leading-none shadow-2xl shadow-primary md:px-2 md:py-2",
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

      <div className="header_spacer flex-1" />
    </header>
  )
}

export default Header
