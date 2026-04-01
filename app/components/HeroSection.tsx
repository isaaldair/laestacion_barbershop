import { MessageCircle, Camera } from "lucide-react";
import { WA_LINK, IG_LINK } from "../lib/constants";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1a2e22 0%, #0d1a10 45%, #080f08 100%)",
      }}
    >
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{ background: "linear-gradient(to left, rgba(88,104,94,0.12), transparent)" }}
      />
      <div
        className="absolute left-12 inset-y-0 w-px pointer-events-none hidden md:block"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(88,104,94,0.4), transparent)" }}
      />

      <div className="absolute top-28 right-6 md:right-12 text-right border border-green/30 px-4 py-3 hidden md:block">
        <span className="text-green font-bold text-sm tracking-[0.15em] block">
          Ciudad del Saber
        </span>
        <span className="text-white/35 text-xs tracking-[0.2em] uppercase leading-loose">
          Panamá<br />Barbershop
        </span>
      </div>

      <div className="relative z-10 max-w-2xl">
        <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-5">
          <span className="w-8 h-px bg-green" />
          Barbershop · Est. Panamá
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight text-white mb-6">
          El corte<br />que<br />
          <em className="not-italic text-green">mereces.</em>
        </h1>

        <p className="text-white/45 text-sm leading-loose max-w-sm mb-12">
          Precisión, estilo y un ambiente que te hace volver.
          En el corazón de Ciudad del Saber.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-white text-xs font-bold tracking-[0.25em] uppercase px-9 py-4 hover:bg-green/90 transition-colors flex items-center gap-3"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
            Escríbenos al WhatsApp
          </a>
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white/70 text-xs font-medium tracking-[0.25em] uppercase px-7 py-4 hover:border-green hover:text-green transition-colors flex items-center gap-3"
          >
            <Camera className="w-4 h-4" strokeWidth={2} />
            Ver Instagram
          </a>
        </div>
      </div>

      <div className="absolute bottom-20 right-6 md:right-12 text-right text-white/25 text-xs tracking-[0.15em] uppercase leading-loose hidden md:block">
        <span className="text-white/50 block mb-1 font-medium">Horarios</span>
        Lun – Sáb &nbsp; 10am – 7pm<br />
        Domingo &nbsp;&nbsp;&nbsp; 10am – 5pm
      </div>
    </section>
  );
}
