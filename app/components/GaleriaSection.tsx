"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { IG_LINK } from "../lib/constants";

const images = [
  { tall: true,  src: "/images/1.jpeg", alt: "La Estación Barbershop" },
  { tall: false, src: "/images/2.jpeg", alt: "La Estación Barbershop" },
  { tall: false, src: "/images/3.jpeg", alt: "La Estación Barbershop" },
  { tall: false, src: "/images/4.jpeg", alt: "La Estación Barbershop" },
  { tall: false, src: "/images/5.jpeg", alt: "La Estación Barbershop" },
];

const slides = images.map((img) => ({ src: img.src, alt: img.alt }));

export default function GaleriaSection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  return (
    <section id="galeria" className="bg-green-deep px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
          <div>
            <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-4">
              <span className="w-6 h-px bg-green" />
              Nuestro trabajo
            </p>
            <h2 className="text-4xl md:text-5xl font-black">
              La Estación<br />en imágenes.
            </h2>
          </div>
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green text-xs tracking-[0.2em] uppercase hover:text-white transition-colors"
          >
            ↗ Ver más en Instagram
          </a>
        </div>

        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: "2.2fr 1fr 1fr",
            gridTemplateRows: "220px 220px",
          }}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => openAt(i)}
              className="relative overflow-hidden bg-green-mid group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-green"
              style={img.tall ? { gridRow: "1 / 3" } : {}}
              aria-label={`Ver imagen ${i + 1}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                sizes={img.tall ? "(max-width: 768px) 100vw, 55vw" : "(max-width: 768px) 50vw, 25vw"}
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </section>
  );
}
