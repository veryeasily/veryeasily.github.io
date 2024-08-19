"use client"

import clsx from "clsx"
import Link from "next/link.js"
import { useEffect, useRef } from "react"
import { useEvent } from "react-use"

import { classes } from "@/lib/classes.ts"
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
    target: "_blank",
    children: "code",
  },
  {
    href: "https://soundcloud.com/siiiiinging",
    Icon: SoundcloudIcon,
    target: "_blank",
    children: "music",
  },
]

// interface SideLink {
//   Icon: React.FC<React.SVGProps<SVGSVGElement>>
//   href: string
// }

// const sideLinks: SideLink[] = [
//   {
//     Icon: SoundcloudIcon,
//     href: "https://soundcloud.com/siiiiinging",
//   },
//   {
//     Icon: GithubIcon,
//     href: "https://github.com/veryeasily",
//   },
// ]

const HEADER_CLASSES = {
  active: "border-b-primary text-primary",
  inactive: "text-primary",
}

function HeaderLink({ children, target, Icon, href = "#" }: HeaderLinkProps) {
  const isActive = false

  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        isActive ? HEADER_CLASSES.active : HEADER_CLASSES.inactive,
        "header_link flex items-center gap-1.5 border border-white bg-white px-1 py-1 hover:border-teal-500 hover:text-teal-500 active:border-teal-400 active:text-teal-400 md:px-2 md:py-1",
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

      <div className="header_side-links flex flex-1 justify-end gap-1 md:gap-2">
        {/* {sideLinks.map(({ Icon, href }) => (
          <a
            href={href}
            target="_blank"
            key={href}
            className="header_side-link text-cycle block invert hover:text-teal-500"
          >
            <Icon className="h-5 w-5 md:h-8 md:w-8" />
          </a>
        ))} */}
      </div>
    </header>
  )
}

export default Header
