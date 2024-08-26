import * as React from "react"
import { useEffect, useState } from "react"
import clsx from "clsx"

import { randomElement } from "@/lib/functions.ts"

/**
 * We use an irrational number for FAST_INTERVAL_TIME so that it never syncs
 * with INTERVAL_TIME.
 */
const FAST_INTERVAL_TIME = Math.PI * 1000 * (2 / 3)
const INTERVAL_TIME = 1500

export const ArtworkContext = React.createContext({
  width: 0,
  height: 0,
})

export interface ArtworkProps {
  src: string
  active?: boolean
  onClick?: () => void
  [key: string]: any
}

function makeRandomPosition() {
  // need to dance around server-side rendering here
  const window = globalThis.window
  const width = window?.innerWidth || 0
  const height = window?.innerHeight || 0
  return {
    x: Math.floor(Math.random() * width) - width / 2,
    y: Math.floor(Math.random() * height) - height / 2,
    z: Math.floor(Math.random() * -10),
    rotateX: Math.random(),
    rotateY: Math.random(),
    rotateZ: Math.random(),
    rotateDeg: Math.floor(Math.random() * 180),
  }
}

function makeTransform(position: ReturnType<typeof makeRandomPosition>, active: boolean) {
  if (active) {
    return `translate3d(-50%, -50%, 0)`
  }

  const translate = `
    translate3d(
      ${position.x}px,
      ${position.y}px,
      ${position.z}px
    )
  `

  const rotate = `
    rotate3d(
      ${position.rotateX},
      ${position.rotateY},
      ${position.rotateZ},
      ${position.rotateDeg}deg
    )
  `

  return `${translate} ${rotate} scale(0.5)`
}

function useRandomPosition() {
  const [position, setPosition] = useState(() => makeRandomPosition())

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(makeRandomPosition())
    }, INTERVAL_TIME)

    return () => clearInterval(interval)
  }, [])

  return position
}

function makeClickMeClass() {
  const rand = Math.random()
  if (rand < 7 / 8) return "hidden"

  return randomElement(["text-primary", "text-secondary", "text-tertiary", "text-quaternary"])
}

export default function Artwork({
  src,
  active = false,
  onClick = () => {},
  ...rest
}: ArtworkProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const loaded = dimensions.width > 0 && dimensions.height > 0

  const [elt, setElt] = useState<HTMLDivElement | null>(null)
  const [clickMeClass, setClickMeClass] = useState(() => makeClickMeClass())
  const position = useRandomPosition()

  useEffect(() => {
    if (active) return

    const interval = setInterval(() => {
      setClickMeClass(makeClickMeClass())
    }, FAST_INTERVAL_TIME)

    return () => {
      clearInterval(interval)
    }
  }, [active])

  useEffect(() => {
    if (elt) return

    setElt(document.querySelector(".js-artwork-container") as HTMLDivElement)
  }, [elt])

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = (e: Event) => {
      const img = e.target as HTMLImageElement
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight })
    }
  }, [src])

  if (!loaded) return null

  return (
    <div
      className={clsx(
        "absolute cursor-pointer duration-1000",
        active ? "left-1/2 top-1/2 z-50" : "left-0 top-0",
      )}
      style={{
        transform: makeTransform(position, active),
      }}
    >
      <img
        src={src}
        alt="artwork"
        style={{
          maxWidth: elt?.clientWidth,
          maxHeight: elt?.clientHeight,
        }}
        onClick={(e) => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
          onClick()
        }}
        {...rest}
      />

      <div
        className={clsx(
          "pointer-events-none absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center text-6xl font-bold",
          active ? "hidden" : clickMeClass,
        )}
      >
        click to zoom!
      </div>
    </div>
  )
}
