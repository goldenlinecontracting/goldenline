import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import logo from "../assets/0dd70d48835ac32ee8cb88aad5856bf8c763a037.png";
import { scrollToId } from "../lib/scrollTo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    scrollToId(id);
  };

  // Track viewport so mobile UI is only rendered on small screens
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      // MediaQueryListEvent for addEventListener, MediaQueryList for .matches fallback
      setIsMobile("matches" in e ? e.matches : mq.matches);
    };

    // init handled by useState; add listener
    if (mq.addEventListener) mq.addEventListener("change", onChange as any);
    else mq.addListener(onChange as any);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange as any);
      else mq.removeListener(onChange as any);
    };
  }, []);

  // Ensure menu is closed when switching to desktop
  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="goldenlinecontracting" 
              className="h-24 w-auto"
            />
            <span className="ml-2 text-sm text-muted-foreground">Calgary, AB</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a
                href="tel:+14039095375"
                className="hover:underline"
                aria-label="Call Golden Line Contracting at (403) 909-5375"
              >
                (403) 909-5375
              </a>
            </div>
            <Button type="button" onClick={() => scrollToSection("contact")}>
              Get Quote
            </Button>

            {/* Mobile menu toggle - only rendered on mobile sizes */}
            {isMobile && (
              <button
                type="button"
                className="ml-2 inline-flex items-center justify-center rounded-md p-2 hover:bg-muted/50"
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu panel - only rendered on mobile sizes */}
      {isMobile && mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md mx-6">
            <nav className="flex flex-col items-center justify-center space-y-6 py-12 bg-transparent">
              <button
                onClick={() => scrollToSection("services")}
                className="text-lg text-foreground hover:text-primary font-normal"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-lg text-foreground hover:text-primary font-normal"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-lg text-foreground hover:text-primary font-normal"
              >
                Contact
              </button>

              <a
                href="tel:+14039095375"
                className="flex items-center gap-3 text-lg hover:underline"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span>(403) 909-5375</span>
              </a>

              <div className="pt-2">
                <Button type="button" onClick={() => scrollToSection("contact")}>
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}