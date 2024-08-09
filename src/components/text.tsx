"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CLASSES = ["roboto", "sankofa"];
const CHARS = ["●", "★", "▲", "■", "▼", "◆", "○", "◇", "◎", "◉"];

const getRandomClass = () => {
  if (Math.random() > 0.02) {
    return "roboto";
  }

  return CLASSES[Math.floor(Math.random() * CLASSES.length)];
};

const styleize = (text: string) => {
  return text.split("").map((c, idx) => {
    let str = c;
    const rand = Math.random();
    switch (true) {
      case rand < 0.005: {
        str = CHARS[Math.floor(Math.random() * CHARS.length)];
        break;
      }
      case rand < 0.02: {
        str = c.toUpperCase();
        break;
      }
    }

    return (
      <span key={idx} className={getRandomClass()}>
        {str}
      </span>
    );
  });
};

interface TextProps {
  children: string;
}

export default function Text(props: TextProps) {
  const [content, setContent] = useState(() => styleize(props.children));
  const handle = useRef<number | null>(null);

  const cb = useCallback(() => {
    setContent(styleize(props.children));
    handle.current = requestAnimationFrame(cb);
  }, [props.children]);

  useEffect(() => {
    handle.current = requestAnimationFrame(cb);
    return () => cancelAnimationFrame(handle.current || 0);
  }, [cb]);

  return <span>{content}</span>;
}
