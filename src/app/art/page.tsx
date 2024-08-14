"use client";

import clsx from "clsx";
import { useState } from "react";

import Artwork from "@/components/artwork";
import { IMG_LIST } from "@/lib/constants.ts";
import { useStore } from "@/lib/store.ts";

export default function ArtPage() {
  const [active, setActive] = useState<string | null>(null);
  const store = useStore();

  return (
    <div className="art-page">
      <h3 className="text-2xl">artwork here:</h3>

      <div
        className={clsx(
          active ? "bg-opacity-85" : "bg-opacity-0",
          "art-page__backdrop fixed inset-0 bg-black transition-all duration-1000",
        )}
        onClick={() => setActive(null)}
      />

      <div
        className="js-artwork-container fixed inset-0 m-16"
        style={{
          marginTop: `${store.headerHeight + 64}px`,
        }}
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
    </div>
  );
}
