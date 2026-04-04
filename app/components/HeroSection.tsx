import Image from "next/image";
import LogoMark from "./LogoMark";
import { WhatsAppIcon, InstagramIcon } from "./icons/SocialIcons";
import { WA_LINK, IG_LINK } from "../lib/constants";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 overflow-hidden"
    >
      {/* Background photo — Ken Burns zoom */}
      <Image
        src="/header.jpeg"
        alt="La Estación Barbershop"
        fill
        priority
        className="object-cover object-center hero-zoom"
      />
      {/* Dark green gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(26,46,34,0.92) 0%, rgba(13,26,16,0.88) 45%, rgba(8,15,8,0.95) 100%)" }}
      />
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

      {/* Logo grande — visible solo cuando el navbar es transparente */}
      <div className="absolute top-0 left-6 md:left-12 py-4 z-10">
        <Image
          src="/logo.png"
          alt="La Estación Barbershop"
          width={220}
          height={80}
          className="h-16 md:h-20 w-auto object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="mb-6 fade-up fade-up-1">
          <LogoMark size="lg" />
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight text-white mb-6 fade-up fade-up-2">
          El corte<br />que<br />
          <em className="not-italic text-green">mereces.</em>
        </h1>

        <p className="text-white/45 text-sm leading-loose max-w-sm mb-12 fade-up fade-up-3">
          Precisión, estilo y un ambiente que te hace volver.
          En el corazón de Ciudad del Saber.
        </p>

        <div className="flex flex-wrap gap-4 fade-up fade-up-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-white text-xs font-bold tracking-[0.25em] uppercase px-9 py-4 hover:bg-green/90 transition-colors flex items-center gap-3"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Escríbenos al WhatsApp
          </a>
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white/70 text-xs font-medium tracking-[0.25em] uppercase px-7 py-4 hover:border-green hover:text-green transition-colors flex items-center gap-3"
          >
            <InstagramIcon className="w-4 h-4" />
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
