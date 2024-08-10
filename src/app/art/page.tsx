"use client";

import { useState } from "react";

import BasePage from "@/components/base_page";
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

  return (
    <ArtworkContext.Provider value={getDimensions(elt)}>
      <BasePage>
        <h3 className="text-2xl">artwork here:</h3>
        <div
          ref={(div) => {
            if (div !== elt) setElt(div);
          }}
          className="relative flex-1"
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
      </BasePage>
    </ArtworkContext.Provider>
  );
}
