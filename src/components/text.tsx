"use client";

import { useEffect, useState } from "react";

const CLASSES = ["roboto", "sankofa"];

const getRandomClass = () => {
  return CLASSES[Math.floor(Math.random() * CLASSES.length)];
};

const styleize = (text: string) => {
  return text.split("").map((c, idx) => {
    const str = Math.random() < 0.05 ? "!" : c;

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

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(styleize(props.children));
    }, 100);

    return () => clearInterval(interval);
  }, [props.children]);

  return <span>{content}</span>;
}
