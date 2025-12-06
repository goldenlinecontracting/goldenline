import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import React, { Suspense } from "react";
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }>{
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, info: any) {
    console.error("Render error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <div className="p-6 text-red-600">Something went wrong rendering this section.</div>;
    }
    return this.props.children as React.ReactElement;
  }
}
function Fallback() {
  return (
    <div className="w-full py-8 flex items-center justify-center">
      <div className="animate-pulse h-6 w-32 rounded bg-muted" />
    </div>
  );
}
const ServicesSection = React.lazy(() => import("./components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const AboutSection = React.lazy(() => import("./components/AboutSection").then(m => ({ default: m.AboutSection })));
const ContactSection = React.lazy(() => import("./components/ContactSection").then(m => ({ default: m.ContactSection })));
const GallerySection = React.lazy(() => import("./components/GallerySection").then(m => ({ default: m.GallerySection })));
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
  <HeroSection />
  <ErrorBoundary>
    <Suspense fallback={<Fallback />}>
      <ServicesSection />
    </Suspense>
  </ErrorBoundary>
  <ErrorBoundary>
    <Suspense fallback={<Fallback />}>
      <AboutSection />
    </Suspense>
  </ErrorBoundary>
  <ErrorBoundary>
    <Suspense fallback={<Fallback />}>
      <GallerySection />
    </Suspense>
  </ErrorBoundary>
  <ErrorBoundary>
    <Suspense fallback={<Fallback />}>
      <ContactSection />
    </Suspense>
  </ErrorBoundary>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}