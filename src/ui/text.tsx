"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const CLASSES = ["roboto", "sankofa"]
const CHARS = ["●", "★", "▲", "■", "▼", "◆", "○", "◇", "◎", "◉"]

const getRandomClass = () => {
  const classes = []
  if (Math.random() > 0.2) {
    classes.push("roboto")
  } else {
    classes.push(CLASSES[Math.floor(Math.random() * CLASSES.length)])
  }

  if (Math.random() < 1 / 10) {
    classes.push("font-bold")
  }

  if (Math.random() < 1 / 40) {
    classes.push("font-thin")
  }

  if (Math.random() < 1 / 20) {
    classes.push("text-blue-500")
  }

  if (Math.random() < 1 / 20) {
    classes.push("text-pink-500")
  }

  return classes.join(" ")
}

const styleize = (text: string) => {
  if (Math.random() > 9 / 10) {
    text = text.split("").reverse().join("")
  }

  return text.split("").map((c, idx) => {
    let str = c
    const rand = Math.random()
    switch (true) {
      case rand < 1 / 10: {
        str = CHARS[Math.floor(Math.random() * CHARS.length)]
        break
      }
    }

    return (
      <span key={idx} className={getRandomClass()} suppressHydrationWarning>
        {str}
      </span>
    )
  })
}

interface TextProps {
  children: string
}

export default function Text({ children }: TextProps) {
  const [content, setContent] = useState(() => styleize(children))
  const handle = useRef<number | null>(null)

  const cb = useCallback(() => {
    if (Math.random() < 1 / 60) {
      setContent(styleize(children))
    }
    handle.current = requestAnimationFrame(cb)
  }, [children])

  useEffect(() => {
    handle.current = requestAnimationFrame(cb)
    return () => cancelAnimationFrame(handle.current || 0)
  }, [cb])

  return <span suppressHydrationWarning>{content}</span>
}
