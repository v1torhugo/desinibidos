"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/asset-path";

const photos = [
  {
    src: "/desinibidos-elenco-fundo.png",
    label: "Elenco reunido",
    position: "center center",
  },
  {
    src: "/desinibidos-comemorando.jpg",
    label: "Comemoração do time",
    position: "center top",
  },
];

export function HeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  function changePhoto(direction: number) {
    setActiveIndex((current) => (current + direction + photos.length) % photos.length);
  }

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {photos.map((photo, index) => (
          <Image
            key={photo.src}
            src={assetPath(photo.src)}
            alt=""
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : "eager"}
            sizes="100vw"
            style={{ objectPosition: photo.position }}
            className={`object-cover transition-opacity duration-500 motion-reduce:transition-none ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,31,51,0.65),rgba(7,31,51,0.55),rgba(7,31,51,0.8))]" />
      </div>

      <div role="group" aria-label="Fotos de fundo" className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          aria-label="Foto anterior"
          onClick={() => changePhoto(-1)}
          className="border-white/40 bg-black/30 text-white hover:bg-white/20 focus-visible:ring-white"
        >
          <ChevronLeft aria-hidden="true" />
        </Button>
        <p aria-live="polite" aria-atomic="true" className="min-w-12 text-center text-sm font-semibold tabular-nums text-white">
          <span className="sr-only">{photos[activeIndex].label}. Foto </span>
          {activeIndex + 1} / {photos.length}
        </p>
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          aria-label="Próxima foto"
          onClick={() => changePhoto(1)}
          className="border-white/40 bg-black/30 text-white hover:bg-white/20 focus-visible:ring-white"
        >
          <ChevronRight aria-hidden="true" />
        </Button>
      </div>
    </>
  );
}
