import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IdentidadSection from "./components/IdentidadSection";
import ExperienciaSection from "./components/ExperienciaSection";
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
        <IdentidadSection />
        <ExperienciaSection />
        <ServiciosSection />
        <GaleriaSection />
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
