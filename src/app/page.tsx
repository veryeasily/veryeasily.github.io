"use client"

import { useEffect, useState } from "react";

const CLASSES = ["one", "two"];
const TEXT = "Luke Underwood";

const getRandomClass = () => {
  return CLASSES[Math.floor(Math.random() * CLASSES.length)];
}

const styleize = (text: string) => {
  return text.split("").map((c, idx) => {
    return <span key={idx} className={getRandomClass()}>{c}</span>
  });
}

export default function Home() {
  const [content, setContent] = useState(() => styleize(TEXT));

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(styleize(TEXT));
    }, 100);

    return () => clearInterval(interval);
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-3xl">{content}</p>
    </main>
  );
}
