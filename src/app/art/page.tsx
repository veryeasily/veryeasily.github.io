"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useWindowSize } from "react-use"

import { ART_PORTFOLIO } from "@/lib/constants.ts"
import { useStore } from "@/lib/store.ts"
import Artwork, { ArtworkZoomInfo } from "@/ui/artwork.tsx"
import { randomElement } from "@/lib/functions.ts"

interface ZoomItemState {
  src: string
  color: string
}

const INTERVAL = Math.PI * 1000 * (4 / 3)
const ZOOM_INFO_CLASSES = ["text-primary", "text-secondary", "text-tertiary", "text-quaternary"]

function makeZoomItems(): ZoomItemState[] {
  let artworks = ART_PORTFOLIO.slice()
  const results = []
  for (let i = 0; i < 4; i++) {
    const color = randomElement(ZOOM_INFO_CLASSES)
    const src = randomElement(artworks).src
    artworks = artworks.filter((img) => img.src !== src)
    results.push({ src, color })
  }
  return results
}

export default function ArtPage() {
  const [activeSrc, setActiveSrc] = useState<string | null>(null)
  const store = useStore()
  const size = useWindowSize()
  const isMobile = size.width < 640
  const style = { marginTop: store.headerHeight + (isMobile ? 16 : 64) }
  const [zoomItems, setZoomItems] = useState(() => makeZoomItems())

  useEffect(() => {
    const int = setInterval(() => {
      if (zoomItems.length) {
        setZoomItems([])
      } else {
        setZoomItems(makeZoomItems())
      }
    }, INTERVAL)

    return () => clearInterval(int)
  })

  return (
    <div className="art-page">
      <h3 className="text-2xl">artwork here:</h3>

      <div style={style} className="js-artwork-container fixed inset-0 m-4 sm:m-16">
        <AnimatePresence>
          {activeSrc && (
            <motion.div
              className="art-page_backdrop fixed inset-0 z-10 bg-black bg-opacity-85"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSrc(null)}
            />
          )}
        </AnimatePresence>

        {ART_PORTFOLIO.map((img) => {
          const active = activeSrc === img.src
          const item = zoomItems.find((ctz) => ctz.src === img.src)
          return (
            <Artwork
              src={img.src}
              key={img.src}
              active={activeSrc === img.src}
              onClick={() => {
                setActiveSrc(active ? null : img.src)
              }}
            >
              <ArtworkZoomInfo className={!active && item ? item.color : "hidden"} />
            </Artwork>
          )
        })}
      </div>
    </div>
  )
}
