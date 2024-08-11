"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import Artwork, { ArtworkContext } from "@/components/artwork";
import { IMG_LIST } from "@/lib/constants";

function getDimensions(elt: HTMLDivElement | null) {
  const width = elt?.clientWidth || Infinity;
  const height = elt?.clientHeight || Infinity;
  return { width, height };
}

export default function ArtPage() {
  const [active, setActive] = useState<string | null>(null);
  const [elt, setElt] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const bgClick = (e: MouseEvent) => {
      setActive(null);
    };
    document.addEventListener("click", bgClick);
    return () => document.removeEventListener("click", bgClick);
  }, []);

  return (
    <ArtworkContext.Provider value={getDimensions(elt)}>
      <h3 className="text-2xl">artwork here:</h3>

      <div
        className={clsx(
          "art-page__backdrop pointer-events-none fixed inset-0 z-10 bg-black transition-all duration-1000",
          active ? "bg-opacity-85" : "bg-opacity-0",
        )}
      />

      <div
        ref={(div) => {
          if (div !== elt) setElt(div);
        }}
        className="relative m-4 flex-1 md:m-6"
      >
        {IMG_LIST.map((src) => (
          <Artwork
            src={src}
            key={src}
            active={active === src}
            onClick={() => {
              setActive(src === active ? null : src);
            }}
          />
        ))}
      </div>
    </ArtworkContext.Provider>
  );
}
