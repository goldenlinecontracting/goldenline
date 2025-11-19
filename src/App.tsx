import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { GallerySection } from "./components/GallerySection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
  <HeroSection />
  <ServicesSection />
  <AboutSection />
  <GallerySection />
  <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}