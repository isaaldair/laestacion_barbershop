import Image from "next/image";
import { IG_LINK } from "../lib/constants";

const images = [
  {
    label: "Ambiente del local",
    tall: true,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    alt: "Interior de La Estación Barbershop",
  },
  {
    label: "Corte fade",
    tall: false,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Corte de cabello profesional",
  },
  {
    label: "Detalle del corte",
    tall: false,
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Detalle de corte fade",
  },
  {
    label: "Barbería",
    tall: false,
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
    alt: "Ambiente de la barbería",
  },
  {
    label: "Arreglo de barba",
    tall: false,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    alt: "Arreglo de barba profesional",
  },
];

export default function GaleriaSection() {
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
          {images.map((img) => (
            <div
              key={img.label}
              className="relative overflow-hidden bg-green-mid"
              style={img.tall ? { gridRow: "1 / 3" } : {}}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
                sizes={img.tall ? "(max-width: 768px) 100vw, 55vw" : "(max-width: 768px) 50vw, 25vw"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
