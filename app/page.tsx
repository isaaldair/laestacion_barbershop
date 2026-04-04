import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IdentidadSection from "./components/IdentidadSection";
import ServiciosSection from "./components/ServiciosSection";
import GaleriaSection from "./components/GaleriaSection";
import ContactoSection from "./components/ContactoSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServiciosSection />
        <IdentidadSection />
        <GaleriaSection />
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
