"use client";

import { useEffect, useRef, useState } from "react";

import BasePage from "@/components/base_page";
import Artwork, { ArtworkContext } from "@/components/artwork";
import { IMG_LIST } from "@/lib/constants";

export default function ArtPage() {
  const [active, setActive] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elt = wrapper.current;
    const needsUpdate =
      elt &&
      elt.clientWidth !== dimensions.width &&
      elt.clientHeight !== dimensions.height;
    if (!needsUpdate) return;

    setDimensions({
      width: elt.clientWidth,
      height: elt.clientHeight,
    });
  }, [dimensions]);

  return (
    <ArtworkContext.Provider value={dimensions}>
      <BasePage>
        <h3 className="text-2xl">artwork here:</h3>

        <div ref={wrapper} className="relative flex-1">
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
