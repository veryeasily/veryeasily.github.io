"use client"

import clsx from "clsx"
import { useState } from "react"

import Artwork from "@/ui/artwork"
import { ART_PORTFOLIO } from "@/lib/constants.ts"
import { useStore } from "@/lib/store.ts"
import { useWindowSize } from "react-use"
import { AnimatePresence, motion } from "framer-motion"

export default function ArtPage() {
  const [active, setActive] = useState<string | null>(null)
  const store = useStore()
  const size = useWindowSize()
  const isMobile = size.width < 640
  const style = { marginTop: store.headerHeight + (isMobile ? 16 : 64) }

  return (
    <div className="art-page">
      <h3 className="text-2xl">artwork here:</h3>
      {/* <p className="text-xs text-primary">(click to zoom)</p> */}

      <div style={style} className="js-artwork-container fixed inset-0 m-4 sm:m-16">
        <AnimatePresence>
          {active && (
            <motion.div
              className="art-page_backdrop fixed inset-0 z-10 bg-black bg-opacity-85"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />
          )}
        </AnimatePresence>

        {ART_PORTFOLIO.map((img) => (
          <Artwork
            src={img.src}
            key={img.src}
            active={active === img.src}
            onClick={() => {
              setActive(img.src === active ? null : img.src)
            }}
          />
        ))}
      </div>
    </div>
  )
}
