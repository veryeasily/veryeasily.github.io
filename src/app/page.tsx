"use client";

import { useEffect, useState } from "react";

import Text from "./text";

const CLASSES = ["one", "two"];
const TEXT = "Luke Underwood";

const getRandomClass = () => {
  return CLASSES[Math.floor(Math.random() * CLASSES.length)];
};

const styleize = (text: string) => {
  return text.split("").map((c, idx) => {
    return (
      <span key={idx} className={getRandomClass()}>
        {c}
      </span>
    );
  });
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-4">
      <h1 className="text-base">
        <Text>{TEXT}</Text>
      </h1>

      <div className="flex flex-col gap-1.5 max-w-screen-sm w-full">
        <h2 className="text-xs border-b border-white">
          <Text>Work Experience</Text>
        </h2>

        <div className="text-base">
          <h3>
            <Text>Whitney Museum of American Art</Text>
          </h3>
          <h3>
            <Text>Chatlands Horizons</Text>
          </h3>
          <h3>
            <Text>The Markup</Text>
          </h3>
        </div>
      </div>
    </main>
  );
}
