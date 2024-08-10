"use client";

import { useState } from "react";

import BasePage from "@/components/base_page";
import Artwork from "@/components/artwork";
import { IMG_LIST } from "@/lib/constants";

export default function ArtPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <BasePage>
      <h3 className="text-2xl">artwork here:</h3>

      <div className="relative flex-1">
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
  );
}
