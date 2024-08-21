import * as React from "react"
import { useEffect, useState, useCallback } from "react"
import clsx from "clsx"

import { randomElement, sampleRandomWeibull } from "@/lib/functions.ts"
import { useWeibullInterval } from "@/lib/hooks.ts"

/**
 * We use an irrational number for FAST_INTERVAL_TIME so that it never syncs
 * with INTERVAL_TIME.
 */
const FAST_INTERVAL_TIME = Math.PI * 1000 * (3 / 10)
const INTERVAL_TIME = 1500

// The weibull distribution parameters for the "click me" text
const W_SCALE = 5000
const W_SHAPE = 2 / 5
const W_OFFSET = 500

const CLICK_ME_CLASSES = ["text-primary", "text-secondary", "text-tertiary", "text-quaternary"]

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

const makeRandomPosition = () => {
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

const makeTransform = (position: ReturnType<typeof makeRandomPosition>, active: boolean) => {
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

const useRandomPosition = () => {
  const [position, setPosition] = useState(() => makeRandomPosition())

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(makeRandomPosition())
    }, INTERVAL_TIME)

    return () => clearInterval(interval)
  }, [])

  return position
}

/**
 * Generates random classes for the "click me" text. The timing of the random
 * generation is done using a Weibull distribution.
 *
 * @param disabled If we should disable the "click me" text.
 * @returns The random class to be used.
 */
const useClickMeClass = (disabled: boolean) => {
  const [clickMeClass, setClickMeClass] = useState("hidden")

  const weibullHandler = useCallback(() => {
    if (disabled) return

    const randClass = randomElement(CLICK_ME_CLASSES)
    setClickMeClass(randClass)

    const timeout = setTimeout(() => {
      setClickMeClass("hidden")
    }, W_OFFSET + 500)

    return () => {
      if (timeout != null) {
        clearTimeout(timeout)
      }
    }
  }, [disabled])

  useWeibullInterval(weibullHandler, W_SCALE, W_SHAPE, [disabled], W_OFFSET)

  return clickMeClass
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
  const clickMeClass = useClickMeClass(active)
  const position = useRandomPosition()

  useEffect(() => {
    if (!elt) {
      setElt(document.querySelector(".js-artwork-container") as HTMLDivElement)
    }
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
          clickMeClass,
        )}
      >
        click to zoom!
      </div>
    </div>
  )
}
