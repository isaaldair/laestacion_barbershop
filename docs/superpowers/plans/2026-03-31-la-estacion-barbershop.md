# La Estación Barbershop — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page marketing website for La Estación Barbershop (Ciudad del Saber, Panamá) with 6 sections: Hero, Identidad, Experiencia, Servicios, Galería, and Contacto.

**Architecture:** Single `app/page.tsx` that composes 8 server components plus one client component (Navbar). All sections are pure presentational — no API calls, no state except Navbar scroll detection. Colors are defined as CSS custom properties in `globals.css` and consumed by Tailwind v4's `@theme` block.

**Tech Stack:** Next.js 16.2.2 · React 19 · Tailwind CSS v4 · TypeScript · `next/image` for gallery

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `app/globals.css` | Color palette, base styles, smooth scroll |
| Modify | `app/layout.tsx` | SEO metadata, lang="es" |
| Modify | `app/page.tsx` | Compose all section components |
| Create | `app/components/Navbar.tsx` | Fixed nav, scroll-aware bg, WhatsApp CTA |
| Create | `app/components/HeroSection.tsx` | Full-screen hero with headline and CTAs |
| Create | `app/components/IdentidadSection.tsx` | 2-col: about text + 3 stats |
| Create | `app/components/ExperienciaSection.tsx` | 3-card grid (plants/gloves/location) |
| Create | `app/components/ServiciosSection.tsx` | 3 service cards, center card featured |
| Create | `app/components/GaleriaSection.tsx` | Asymmetric 5-photo grid |
| Create | `app/components/ContactoSection.tsx` | Info + Google Maps iframe |
| Create | `app/components/Footer.tsx` | Logo, copyright, social links |

---

## Task 1: Color palette and global styles

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace globals.css contents**

```css
@import "tailwindcss";

:root {
  --green:        #58685e;
  --green-dark:   #0d1a10;
  --green-deep:   #080f08;
  --green-mid:    #1a2e22;
  --green-card:   #111e13;
  --green-light:  #a8bfa8;
  --cream:        #f7f5f0;
  --foreground:   #111111;
  --muted:        #666666;
  --border:       #e8e8e8;
}

@theme inline {
  --color-green:       var(--green);
  --color-green-dark:  var(--green-dark);
  --color-green-deep:  var(--green-deep);
  --color-green-mid:   var(--green-mid);
  --color-green-card:  var(--green-card);
  --color-green-light: var(--green-light);
  --color-cream:       var(--cream);
  --color-foreground:  var(--foreground);
  --color-muted:       var(--muted);
  --color-border:      var(--border);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--green-deep);
  color: #ffffff;
  font-family: var(--font-geist-sans), Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 2: Verify dev server still starts**

```bash
npm run dev
```

Expected: Server starts at http://localhost:3000 with no CSS errors.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add La Estacion color palette to globals.css"
```

---

## Task 2: Update layout metadata

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace layout.tsx**

```tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Estación Barbershop | Ciudad del Saber, Panamá",
  description:
    "Barbería de hombres en Ciudad del Saber, Panamá. Cortes, fade y arreglo de barba. Ambiente con plantas naturales. Barberos con guantes.",
  openGraph: {
    title: "La Estación Barbershop",
    description: "Barbería premium en Ciudad del Saber, Panamá.",
    locale: "es_PA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} scroll-smooth`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Verify no TypeScript errors**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: update metadata for La Estacion Barbershop"
```

---

## Task 3: Navbar component

**Files:**
- Create: `app/components/Navbar.tsx`

- [ ] **Step 1: Create the components directory and Navbar**

```tsx
"use client";

import { useEffect, useState } from "react";

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
      <span className="text-white font-bold tracking-[0.25em] uppercase text-sm">
        La Estación
      </span>

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
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/Navbar.tsx
git commit -m "feat: add Navbar with scroll-aware background"
```

---

## Task 4: HeroSection component

**Files:**
- Create: `app/components/HeroSection.tsx`

- [ ] **Step 1: Create HeroSection.tsx**

```tsx
const WA_LINK = "https://wa.me/50761546401";
const IG_LINK = "https://instagram.com/laestacionbarbershop_";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1a2e22 0%, #0d1a10 45%, #080f08 100%)",
      }}
    >
      {/* Right overlay */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{ background: "linear-gradient(to left, rgba(88,104,94,0.12), transparent)" }}
      />

      {/* Vertical accent line */}
      <div
        className="absolute left-12 inset-y-0 w-px pointer-events-none hidden md:block"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(88,104,94,0.4), transparent)" }}
      />

      {/* Location badge */}
      <div className="absolute top-28 right-6 md:right-12 text-right border border-green/30 px-4 py-3 hidden md:block">
        <span className="text-green font-bold text-sm tracking-[0.15em] block">
          Ciudad del Saber
        </span>
        <span className="text-white/35 text-xs tracking-[0.2em] uppercase leading-loose">
          Panamá<br />Barbershop
        </span>
      </div>

      {/* Content */}
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
            className="bg-green text-white text-xs font-bold tracking-[0.25em] uppercase px-9 py-4 hover:bg-green/90 transition-colors flex items-center gap-2"
          >
            💬 Escríbenos al WhatsApp
          </a>
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white/70 text-xs font-medium tracking-[0.25em] uppercase px-7 py-4 hover:border-green hover:text-green transition-colors flex items-center gap-2"
          >
            📷 Ver Instagram
          </a>
        </div>
      </div>

      {/* Floating hours */}
      <div className="absolute bottom-20 right-6 md:right-12 text-right text-white/25 text-xs tracking-[0.15em] uppercase leading-loose hidden md:block">
        <span className="text-white/50 block mb-1 font-medium">Horarios</span>
        Lun – Sáb &nbsp; 10am – 7pm<br />
        Domingo &nbsp;&nbsp;&nbsp; 10am – 5pm
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx temporarily to verify it renders**

```tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
```

- [ ] **Step 3: Check at http://localhost:3000 — full-screen dark green hero visible**

- [ ] **Step 4: Commit**

```bash
git add app/components/HeroSection.tsx app/page.tsx
git commit -m "feat: add HeroSection full-screen component"
```

---

## Task 5: IdentidadSection component

**Files:**
- Create: `app/components/IdentidadSection.tsx`

- [ ] **Step 1: Create IdentidadSection.tsx**

```tsx
const stats = [
  { num: "100%", desc: "Barberos con guantes · higiene total" },
  { num: "7", desc: "Días a la semana disponibles" },
  { num: "CDS", desc: "Ciudad del Saber · Panamá" },
];

export default function IdentidadSection() {
  return (
    <section id="identidad" className="bg-cream text-foreground px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
        {/* Left: text */}
        <div>
          <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-5">
            <span className="w-6 h-px bg-green" />
            Quiénes somos
          </p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-7">
            Más que una<br />barbería.
          </h2>
          <p className="text-muted text-base leading-loose max-w-lg">
            La Estación nació en Ciudad del Saber — una de las zonas más privilegiadas
            de Panamá. Un espacio rodeado de naturaleza donde cada detalle está pensado
            para que tu visita sea una experiencia completa, desde el ambiente hasta
            el último detalle del corte.
          </p>
        </div>

        {/* Right: stats */}
        <div className="flex flex-col gap-8">
          {stats.map((stat) => (
            <div key={stat.num} className="border-l-[3px] border-green pl-6">
              <div className="text-4xl font-black text-green leading-none">{stat.num}</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted mt-2">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IdentidadSection from "./components/IdentidadSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IdentidadSection />
    </>
  );
}
```

- [ ] **Step 3: Verify cream background and 2-column layout renders at http://localhost:3000**

- [ ] **Step 4: Commit**

```bash
git add app/components/IdentidadSection.tsx app/page.tsx
git commit -m "feat: add IdentidadSection with stats"
```

---

## Task 6: ExperienciaSection component

**Files:**
- Create: `app/components/ExperienciaSection.tsx`

- [ ] **Step 1: Create ExperienciaSection.tsx**

```tsx
const cards = [
  {
    num: "01",
    icon: "🌿",
    title: "Ambiente natural",
    body: "Plantas reales en cada rincón del local. Un espacio vivo, relajado y completamente único en Panamá.",
  },
  {
    num: "02",
    icon: "🧤",
    title: "Higiene sin compromisos",
    body: "Nuestros barberos trabajan con guantes en cada servicio. Porque la limpieza es parte del estilo.",
  },
  {
    num: "03",
    icon: "📍",
    title: "Zona exclusiva",
    body: "En Ciudad del Saber, el hub de innovación de Panamá. Fácil acceso, ambiente tranquilo, clientela selecta.",
  },
];

export default function ExperienciaSection() {
  return (
    <section id="experiencia" className="bg-green-dark px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 gap-6">
          <div>
            <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-4">
              <span className="w-6 h-px bg-green" />
              La diferencia
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Por qué La<br />Estación.
            </h2>
          </div>
          <p className="text-white/40 text-sm leading-loose md:max-w-xs md:text-right">
            No es solo un corte. Es el ambiente, el detalle y el lugar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-0.5">
          {cards.map((card) => (
            <div
              key={card.num}
              className="bg-green-card border-t-2 border-green px-8 py-10"
            >
              <div className="text-green text-xs tracking-[0.3em] mb-6">{card.num}</div>
              <h3 className="text-xl font-bold mb-3">
                {card.icon} {card.title}
              </h3>
              <p className="text-white/45 text-sm leading-loose">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IdentidadSection from "./components/IdentidadSection";
import ExperienciaSection from "./components/ExperienciaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IdentidadSection />
      <ExperienciaSection />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/components/ExperienciaSection.tsx app/page.tsx
git commit -m "feat: add ExperienciaSection 3-card grid"
```

---

## Task 7: ServiciosSection component

**Files:**
- Create: `app/components/ServiciosSection.tsx`

- [ ] **Step 1: Create ServiciosSection.tsx**

```tsx
const services = [
  {
    badge: "Clásico",
    name: "Corte de Cabello",
    desc: "Fade, tijera o clásico. Lavado y styling incluido. El corte que te define.",
    price: "$XX",
    featured: false,
  },
  {
    badge: "Más popular",
    name: "Corte + Barba",
    desc: "El combo completo. Corte, perfilado y arreglo de barba con navaja.",
    price: "$XX",
    featured: true,
  },
  {
    badge: "Detalle",
    name: "Arreglo de Barba",
    desc: "Perfilado, alineación y acabado profesional con navaja.",
    price: "$XX",
    featured: false,
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-white px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-4">
            <span className="w-6 h-px bg-green" />
            Lo que ofrecemos
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">Servicios</h2>
        </div>

        <div className="grid md:grid-cols-3 divide-x divide-border border border-border">
          {services.map((svc) => (
            <div
              key={svc.name}
              className={`p-10 flex flex-col gap-4 ${
                svc.featured ? "bg-green text-white" : "bg-white text-foreground"
              }`}
            >
              <span
                className={`text-xs tracking-[0.3em] uppercase font-medium ${
                  svc.featured ? "text-white/60" : "text-green"
                }`}
              >
                {svc.badge}
              </span>
              <h3 className="text-xl font-black">{svc.name}</h3>
              <p
                className={`text-sm leading-loose flex-1 ${
                  svc.featured ? "text-white/65" : "text-muted"
                }`}
              >
                {svc.desc}
              </p>
              <div
                className={`text-4xl font-black mt-2 ${
                  svc.featured ? "text-white" : "text-green"
                }`}
              >
                {svc.price}{" "}
                <span
                  className={`text-sm font-normal ${
                    svc.featured ? "text-white/50" : "text-muted/60"
                  }`}
                >
                  / servicio
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IdentidadSection from "./components/IdentidadSection";
import ExperienciaSection from "./components/ExperienciaSection";
import ServiciosSection from "./components/ServiciosSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IdentidadSection />
      <ExperienciaSection />
      <ServiciosSection />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/components/ServiciosSection.tsx app/page.tsx
git commit -m "feat: add ServiciosSection with 3 service cards"
```

---

## Task 8: GaleriaSection component

**Files:**
- Create: `app/components/GaleriaSection.tsx`

Note: Real photos go in `public/gallery/1.jpg` through `5.jpg`. Until they're provided, placeholders (colored divs) are rendered instead.

- [ ] **Step 1: Create GaleriaSection.tsx**

```tsx
const IG_LINK = "https://instagram.com/laestacionbarbershop_";

// Labels for placeholder cells — replace with real images in public/gallery/
const cells = [
  { label: "Ambiente / local", tall: true },
  { label: "Corte 1", tall: false },
  { label: "Corte 2", tall: false },
  { label: "Plantas / detalle", tall: false },
  { label: "Barba / fade", tall: false },
];

export default function GaleriaSection() {
  return (
    <section id="galeria" className="bg-green-deep px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Grid */}
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: "2.2fr 1fr 1fr",
            gridTemplateRows: "220px 220px",
          }}
        >
          {cells.map((cell, i) => (
            <div
              key={i}
              className="bg-green-mid flex items-center justify-center"
              style={i === 0 ? { gridRow: "1 / 3" } : {}}
            >
              <span className="text-white/18 text-xs tracking-[0.3em] uppercase text-center leading-loose px-4">
                {cell.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IdentidadSection from "./components/IdentidadSection";
import ExperienciaSection from "./components/ExperienciaSection";
import ServiciosSection from "./components/ServiciosSection";
import GaleriaSection from "./components/GaleriaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IdentidadSection />
      <ExperienciaSection />
      <ServiciosSection />
      <GaleriaSection />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/components/GaleriaSection.tsx app/page.tsx
git commit -m "feat: add GaleriaSection asymmetric grid"
```

---

## Task 9: ContactoSection component

**Files:**
- Create: `app/components/ContactoSection.tsx`

Note: The Google Maps embed uses the general Ciudad del Saber area. Replace the `src` URL with the exact embed URL once the precise address is confirmed.

- [ ] **Step 1: Create ContactoSection.tsx**

```tsx
const WA_LINK = "https://wa.me/50761546401";
const IG_LINK  = "https://instagram.com/laestacionbarbershop_";
// Replace with exact embed URL from Google Maps → Share → Embed a map
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.2!2d-79.5388!3d8.9938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCiudad+del+Saber%2C+Panam%C3%A1!5e0!3m2!1ses!2spa!4v1706000000000!5m2!1ses!2spa";

const infoRows = [
  {
    icon: "📍",
    label: "Dirección",
    value: "Ciudad del Saber, Panamá",
  },
  {
    icon: "🕐",
    label: "Horarios",
    value: "Lun – Sáb: 10am – 7pm\nDomingo: 10am – 5pm",
  },
  {
    icon: "📱",
    label: "WhatsApp",
    value: "+507 6154-6401",
  },
];

export default function ContactoSection() {
  return (
    <section
      id="contacto"
      className="px-6 md:px-12 py-24 md:py-32"
      style={{ background: "#58685e" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* Left: info */}
        <div>
          <p className="flex items-center gap-3 text-white/55 text-xs tracking-[0.4em] uppercase mb-5">
            <span className="w-6 h-px bg-white/50" />
            Visítanos
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none mb-11">
            ¿Listo para<br />tu cita?
          </h2>

          <div className="flex flex-col gap-5 mb-10">
            {infoRows.map((row) => (
              <div key={row.label} className="flex gap-4">
                <span className="text-base opacity-70 mt-0.5">{row.icon}</span>
                <div>
                  <span className="text-white/55 text-xs tracking-[0.25em] uppercase block mb-1">
                    {row.label}
                  </span>
                  <span className="text-white text-sm leading-loose whitespace-pre-line">
                    {row.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green font-bold text-xs tracking-[0.2em] uppercase px-7 py-5 flex items-center gap-3 hover:bg-white/90 transition-colors"
            >
              💬 Escríbenos por WhatsApp
            </a>
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/35 text-white font-semibold text-xs tracking-[0.2em] uppercase px-7 py-4 flex items-center gap-3 hover:border-white hover:bg-white/10 transition-colors"
            >
              📷 @laestacionbarbershop_
            </a>
          </div>
        </div>

        {/* Right: map */}
        <div className="h-80 md:h-[420px] border border-white/15 overflow-hidden">
          <iframe
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="La Estación Barbershop — Ciudad del Saber, Panamá"
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IdentidadSection from "./components/IdentidadSection";
import ExperienciaSection from "./components/ExperienciaSection";
import ServiciosSection from "./components/ServiciosSection";
import GaleriaSection from "./components/GaleriaSection";
import ContactoSection from "./components/ContactoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IdentidadSection />
      <ExperienciaSection />
      <ServiciosSection />
      <GaleriaSection />
      <ContactoSection />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/components/ContactoSection.tsx app/page.tsx
git commit -m "feat: add ContactoSection with map and CTA buttons"
```

---

## Task 10: Footer component and final page.tsx

**Files:**
- Create: `app/components/Footer.tsx`
- Modify: `app/page.tsx` (final composition)

- [ ] **Step 1: Create Footer.tsx**

```tsx
const IG_LINK = "https://instagram.com/laestacionbarbershop_";
const WA_LINK = "https://wa.me/50761546401";

export default function Footer() {
  return (
    <footer className="bg-green-deep border-t border-green/15 px-6 md:px-12 py-7 flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-bold">
        La <span className="text-green">Estación</span>
      </span>
      <span className="text-white/20 text-xs tracking-[0.2em] uppercase">
        © 2025 · Ciudad del Saber, Panamá
      </span>
      <div className="flex gap-6">
        <a
          href={IG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/20 hover:text-green text-xs tracking-[0.2em] uppercase transition-colors"
        >
          Instagram
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/20 hover:text-green text-xs tracking-[0.2em] uppercase transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Write final page.tsx**

```tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IdentidadSection from "./components/IdentidadSection";
import ExperienciaSection from "./components/ExperienciaSection";
import ServiciosSection from "./components/ServiciosSection";
import GaleriaSection from "./components/GaleriaSection";
import ContactoSection from "./components/ContactoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IdentidadSection />
        <ExperienciaSection />
        <ServiciosSection />
        <GaleriaSection />
        <ContactoSection />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Run full build to catch any TypeScript or build errors**

```bash
npm run build
```

Expected: `✓ Compiled successfully` with no errors. Route `/` shown as static.

- [ ] **Step 4: Commit final composition**

```bash
git add app/components/Footer.tsx app/page.tsx
git commit -m "feat: compose full La Estacion Barbershop page"
```

---

## Task 11: Add .gitignore entry for brainstorm artifacts

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add .superpowers to .gitignore**

Open `.gitignore` and append:

```
# Brainstorm visual companion artifacts
.superpowers/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore .superpowers brainstorm artifacts"
```

---

## Backlog (not in scope for this plan)

- Replace `$XX` prices when client confirms them — edit `ServiciosSection.tsx` `services` array
- Replace gallery placeholder divs with real `<Image>` tags once photos are provided (`public/gallery/1.jpg`–`5.jpg`)
- Replace Google Maps embed URL with exact location once address is confirmed
- Mobile hamburger menu for Navbar on small screens
