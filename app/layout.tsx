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
    <html lang="es" className={`${geistSans.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
