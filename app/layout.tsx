import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.laestacionbarbershop.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "La Estación Barbershop | Cortes Premium en Ciudad del Saber, Panamá",
  description:
    "Estamos ubicados en la Ciudad del Saber, más que una Barberia, somos la parada obligatoria de tu día. Ven y danos la oportunidad de consentirte.",
  keywords: [
    "barbería panamá",
    "barbería ciudad del saber",
    "corte de caballero panamá",
    "barba premium panamá",
    "barbershop panamá",
    "la estación barbershop",
  ],
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
    title: "La Estación Barbershop | Cortes Premium en Ciudad del Saber, Panamá",
    description: "Estamos ubicados en la Ciudad del Saber, más que una Barberia, somos la parada obligatoria de tu día. Ven y danos la oportunidad de consentirte.",
    url: SITE_URL,
    siteName: "La Estación Barbershop",
    locale: "es_PA",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "La Estación Barbershop — Ciudad del Saber, Panamá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Estación Barbershop | Cortes Premium en Ciudad del Saber, Panamá",
    description: "Estamos ubicados en la Ciudad del Saber, más que una Barberia, somos la parada obligatoria de tu día. Ven y danos la oportunidad de consentirte.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "La Estación Barbershop",
  description: "Barbería profesional en Ciudad del Saber, Panamá con servicios de cortes de caballero, corte de niños, barba premium y más.",
  url: SITE_URL,
  telephone: "+507 6364-6860",
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: "$$",
  servesCuisine: "Barbershop Services",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ciudad del Saber, Panamá",
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
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  sameAs: [
    "https://www.instagram.com/laestacionbarbershop_",
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
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
