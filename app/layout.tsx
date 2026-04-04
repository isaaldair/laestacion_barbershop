import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

// Cambia esto por tu dominio real cuando lo tengas
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://laestacionbarbershop.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "La Estación Barbershop | Ciudad del Saber, Panamá",
  description:
    "Barbería en Ciudad del Saber, Panamá. Cortes de caballero, corte de niño, barba premium y más. Abierto todos los días.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  openGraph: {
    title: "La Estación Barbershop",
    description: "Barbería en Ciudad del Saber, Panamá. Cortes, barba y más.",
    url: SITE_URL,
    siteName: "La Estación Barbershop",
    locale: "es_PA",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "La Estación Barber Shop — Ciudad del Saber, Panamá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Estación Barbershop",
    description: "Barbería en Ciudad del Saber, Panamá.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "La Estación Barber Shop",
  description: "Barbería en Ciudad del Saber, Panamá. Cortes de caballero, barba premium, primer corte para bebés y servicios extras.",
  url: SITE_URL,
  telephone: "+507 6364-6860",
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ciudad del Saber",
    addressLocality: "Panamá",
    addressCountry: "PA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.999029,
    longitude: -79.585645,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  priceRange: "$5 – $17",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  sameAs: [
    "https://instagram.com/laestacionbarbershop_",
    "https://maps.app.goo.gl/ZNDTt7dXjnTKxMaY7",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${poppins.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
