"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CLASSES = ["roboto", "sankofa"];
const CHARS = ["●", "★", "▲", "■", "▼", "◆", "○", "◇", "◎", "◉"];

const getRandomClass = () => {
  if (Math.random() > 0.2) {
    return "roboto";
  }

  return CLASSES[Math.floor(Math.random() * CLASSES.length)];
};

const styleize = (text: string) => {
  if (Math.random() > 9 / 10) {
    text = text.split("").reverse().join("");
  }

  return text.split("").map((c, idx) => {
    let str = c;
    const rand = Math.random();
    switch (true) {
      case rand < 1 / 10: {
        str = CHARS[Math.floor(Math.random() * CHARS.length)];
        break;
      }
      case rand < 2 / 10: {
        str = c.toUpperCase();
        break;
      }
    }

    return (
      <span key={idx} className={getRandomClass()} suppressHydrationWarning>
        {str}
      </span>
    );
  });
};

interface TextProps {
  children: string;
}

export default function Text({ children }: TextProps) {
  const [content, setContent] = useState(() => styleize(children));
  const handle = useRef<number | null>(null);

  const cb = useCallback(() => {
    if (Math.random() < 1 / 30) {
      setContent(styleize(children));
    }
    handle.current = requestAnimationFrame(cb);
  }, [children]);

  useEffect(() => {
    handle.current = requestAnimationFrame(cb);
    return () => cancelAnimationFrame(handle.current || 0);
  }, [cb]);

  return <span suppressHydrationWarning>{content}</span>;
}
