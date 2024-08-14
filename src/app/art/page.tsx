"use client"

import clsx from "clsx"
import { useState } from "react"

import Artwork from "@/ui/artwork"
import { IMG_LIST } from "@/lib/constants.ts"
import { useStore } from "@/lib/store.ts"
import { useWindowSize } from "react-use"

export default function ArtPage() {
  const [active, setActive] = useState<string | null>(null)
  const store = useStore()
  const size = useWindowSize()
  const isMobile = size.width < 640
  const style = { marginTop: store.headerHeight + (isMobile ? 16 : 64) }

  return (
    <div className="art-page">
      <h3 className="text-2xl">artwork here:</h3>

      <div
        className={clsx(
          active ? "bg-opacity-85" : "bg-opacity-0",
          "art-page_backdrop fixed inset-0 bg-black transition-all duration-1000",
        )}
        onClick={() => setActive(null)}
      />

      <div style={style} className="js-artwork-container fixed inset-0 m-4 sm:m-16">
        {IMG_LIST.map((src) => (
          <Artwork
            src={src}
            key={src}
            active={active === src}
            onClick={() => {
              setActive(src === active ? null : src)
            }}
          />
        ))}
      </div>
    </div>
  )
}
