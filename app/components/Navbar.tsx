"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WA_LINK = "https://wa.me/50761546401";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-green-deep/90 backdrop-blur-md border-b border-green/15"
          : "bg-transparent"
      }`}
    >
      <a
        href="#inicio"
        className={`transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <Image src="/logo.png" alt="La Estación Barbershop" width={120} height={40} className="h-8 w-auto object-contain" />
      </a>

      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-white/55 hover:text-green text-xs tracking-[0.2em] uppercase transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green text-white text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-green/90 transition-colors"
      >
        Reservar cita
      </a>
    </nav>
  );
}
