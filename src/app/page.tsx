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

      <div className="flex flex-col gap-1.5">
        <h2 className="text-base border-b border-white">Work Experience</h2>

        <div className="text-base">
          <h3>Whitney Museum of American Art</h3>
          <h3>Chatlands Horizons</h3>
          <h3>The Markup</h3>
        </div>
      </div>
    </main>
  );
}
