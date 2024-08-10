"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const INTERVAL_TIME = 1500;

export const ArtworkContext = React.createContext({
  width: 0,
  height: 0,
});

export interface ArtworkProps {
  src: string;
  active?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

function makeRandomPosition() {
  // need to dance around server-side rendering here
  const window = globalThis.window;
  const width = window?.innerWidth || 0;
  const height = window?.innerHeight || 0;
  return {
    x: Math.floor(Math.random() * width) - width / 2,
    y: Math.floor(Math.random() * height) - height / 2,
    z: Math.floor(Math.random() * -10),
    rotateX: Math.random(),
    rotateY: Math.random(),
    rotateZ: Math.random(),
    rotateDeg: Math.floor(Math.random() * 180),
  };
}

function makeTransform(
  position: ReturnType<typeof makeRandomPosition>,
  active: boolean,
) {
  const window = globalThis.window;
  const width = window?.innerWidth || 0;
  const height = window?.innerHeight || 0;

  if (active) {
    return `translate3d(-50%, -50%, 0)`;
  }

  return `
    translate3d(${position.x}px, ${position.y}px, ${position.z}px)
    rotate3d(${position.rotateX}, ${position.rotateY}, ${position.rotateZ}, ${position.rotateDeg}deg)
    scale(0.5)
  `;
}

function useRandomPosition() {
  const [position, setPosition] = useState(() => makeRandomPosition());

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(makeRandomPosition());
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, []);

  return position;
}

export default function Artwork({
  src,
  active = false,
  onClick = () => {},
  ...rest
}: ArtworkProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const position = useRandomPosition();
  const loaded = dimensions.width > 0 && dimensions.height > 0;
  const wrapper = React.use(ArtworkContext);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = (e: Event) => {
      const img = e.target as HTMLImageElement;
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };
  }, [src]);

  if (!loaded) return null;

  return (
    <div
      className={clsx(
        "absolute left-0 top-0 cursor-pointer duration-1000",
        active && "left-1/2 top-1/2 z-10",
      )}
      style={{
        transform: makeTransform(position, active),
      }}
    >
      <img
        src={src}
        alt="artwork"
        style={{
          maxWidth: wrapper.width,
          maxHeight: wrapper.height,
        }}
        onClick={(e) => {
          e.stopPropagation();
          console.log("CLICK", e);
          onClick();
        }}
        {...rest}
      />
    </div>
  );
}
