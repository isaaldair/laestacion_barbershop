# La Estación Barbershop — Diseño del Sitio Web

**Fecha:** 2026-03-31  
**Proyecto:** Sitio web corporativo para La Estación Barbershop  
**Stack:** Next.js 16.2.2 · React 19 · Tailwind CSS v4 · TypeScript  

---

## 1. Identidad del negocio

| Campo | Valor |
|-------|-------|
| Nombre | La Estación Barbershop |
| Instagram | @laestacionbarbershop_ |
| WhatsApp | +507 6154-6401 |
| Ubicación | Ciudad del Saber, Panamá |
| Horario | Lun–Sáb 10am–7pm · Dom 10am–5pm |
| Tipo | Barbería de corte masculino |

**Diferenciadores clave:**
- Plantas reales en el local — ambiente botánico único
- Barberos trabajan con guantes en cada servicio
- Ubicación en Ciudad del Saber (zona premium de Panamá)

---

## 2. Dirección visual

| Atributo | Decisión |
|----------|----------|
| Estilo | Moderno minimalista |
| Color principal | `#58685e` (verde salvia oscuro) |
| Fondo oscuro | `#080f08` / `#0d1a10` |
| Fondo claro | `#f7f5f0` |
| Tipografía | Sistema sans-serif (Geist Sans ya configurado) |
| Acento decorativo | Líneas finas, letras espaciadas, numeración 01/02/03 |
| Idioma | Español |

---

## 3. Arquitectura de la página

La página es un **single-page site** (`app/page.tsx`) dividida en 6 secciones con navegación fija que hace scroll suave. No hay rutas adicionales.

```
/
├── <Navbar>          — fijo, transparente con blur, link a WhatsApp
├── <HeroSection>     — full-screen, headline bold, CTAs
├── <IdentidadSection> — quiénes somos, stats, Ciudad del Saber
├── <ExperienciaSection> — 3 diferenciadores: plantas/guantes/ubicación
├── <ServiciosSection> — 3 cards de servicios con precio (placeholder $XX)
├── <GaleriaSection>  — grid de fotos del Instagram/local
└── <ContactoSection> — dirección, horarios, WhatsApp, mapa, Instagram
    <Footer>
```

### Componentes (`app/components/`)

| Componente | Descripción |
|------------|-------------|
| `Navbar` | Logo + links de nav + botón "Reservar cita" → WhatsApp |
| `HeroSection` | Full screen, fondo oscuro-verde, headline, 2 CTAs |
| `IdentidadSection` | 2 columnas: texto + 3 stats verticales |
| `ExperienciaSection` | Header + grid de 3 cards (01/02/03) |
| `ServiciosSection` | Grid 3 cols, card central destacada en `#58685e` |
| `GaleriaSection` | Grid asimétrico (2.2fr 1fr 1fr × 2 filas), imágenes reales |
| `ContactoSection` | 2 cols: info+botones / mapa de Google Maps embed |
| `Footer` | Logo, copyright, links sociales |

---

## 4. Secciones — detalle de contenido

### 4.1 Navbar
- Logo: "La Estación" en mayúsculas, letra espaciada
- Links: Servicios · Experiencia · Galería · Contacto (scroll suave)
- CTA: "Reservar cita" → abre WhatsApp (`https://wa.me/50761546401`)
- Comportamiento: transparente en top, fondo `rgba(8,15,8,0.85)` + backdrop-blur al hacer scroll

### 4.2 Hero
- Fondo: gradiente `#1a2e22 → #080f08`
- Elemento decorativo: línea vertical izquierda, badge de ubicación derecha
- Tagline pequeño: "Barbershop · Est. Panamá"
- Headline: `El corte / que / mereces.` — "mereces" en `#58685e`
- Subtítulo: "Precisión, estilo y un ambiente que te hace volver. En el corazón de Ciudad del Saber."
- Horarios flotantes abajo-derecha
- CTA primario: "💬 Escríbenos al WhatsApp" → `https://wa.me/50761546401`
- CTA secundario: "📷 Ver Instagram" → `https://instagram.com/laestacionbarbershop_`

### 4.3 Identidad
- Fondo: `#f7f5f0` (crema claro)
- Grid 2 columnas: texto izquierda / stats derecha
- Texto: historia del local, Ciudad del Saber, filosofía
- Stats: `100%` Barberos con guantes · `7` Días disponibles · `CDS` Ciudad del Saber

### 4.4 Experiencia
- Fondo: `#0d1a10` (verde muy oscuro)
- Grid 3 cards, cada una con número (01/02/03), borde superior `#58685e`
- Card 1: 🌿 Ambiente natural — plantas reales
- Card 2: 🧤 Higiene sin compromisos — guantes
- Card 3: 📍 Zona exclusiva — Ciudad del Saber

### 4.5 Servicios
- Fondo: `#fff`
- 3 cards en grid, card central con `background: #58685e` (destacada)
- Servicios (precios a confirmar con el cliente, por ahora `$XX`):
  - Corte de Cabello — Clásico
  - Corte + Barba — Más popular (destacado)
  - Arreglo de Barba — Detalle

### 4.6 Galería
- Fondo: `#0a0f0a`
- Grid asimétrico: celda grande izquierda (2 filas) + 4 celdas normales
- 5 imágenes: ambiente del local, 2 cortes, detalle de plantas, barba/fade
- Link "↗ Ver más en Instagram" → perfil de Instagram
- Imágenes: se usarán fotos reales del Instagram. Por ahora, placeholders con `next/image`.

### 4.7 Contacto
- Fondo: `#58685e` (la sección más llamativa)
- Columna izquierda: dirección, horarios, teléfono, botones CTA
- Columna derecha: embed de Google Maps con la ubicación de Ciudad del Saber
- CTA primario: "💬 Escríbenos por WhatsApp" → `https://wa.me/50761546401`
- CTA secundario: "📷 @laestacionbarbershop_" → Instagram

### 4.8 Footer
- Fondo: `#080f08`
- Logo · Copyright 2025 · Ciudad del Saber, Panamá · Links sociales

---

## 5. Datos de contacto y links

```
WhatsApp:  https://wa.me/50761546401
Instagram: https://instagram.com/laestacionbarbershop_
Dirección: Ciudad del Saber, Panamá
```

---

## 6. Manejo de imágenes

- Galería usa `next/image` con `sizes` apropiados para el grid
- Las imágenes reales se colocarán en `public/gallery/` (1.jpg a 5.jpg)
- Durante desarrollo se usan placeholders con fondo `#1a2e22`
- No hay CDN externo ni Cloudinary — imágenes servidas estáticamente

---

## 7. SEO y metadata

```ts
// app/layout.tsx
export const metadata = {
  title: 'La Estación Barbershop | Ciudad del Saber, Panamá',
  description: 'Barbería de hombres en Ciudad del Saber, Panamá. Cortes, fade, arreglo de barba. Ambiente natural con plantas. Barberos con guantes.',
  openGraph: { ... }
}
```

---

## 8. Decisiones fuera de scope

- **Sin sistema de reservas online** — solo WhatsApp e Instagram
- **Sin autenticación ni backend** — sitio estático puro
- **Sin i18n** — solo español
- **Sin dark mode toggle** — el sitio usa su propio sistema de colores
- **Sin animaciones complejas** — solo transitions CSS simples al hover/scroll

---

## 9. Fuera del primer entregable (backlog)

- Precios reales cuando el cliente los confirme
- Fotos reales en galería cuando el cliente las provea
- Dirección exacta en Google Maps
