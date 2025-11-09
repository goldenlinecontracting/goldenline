import { Button } from "./ui/button";
import { Phone, Mail } from "lucide-react";
import logo from "figma:asset/0dd70d48835ac32ee8cb88aad5856bf8c763a037.png";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
              <span>(403) 555-0123</span>
            </div>
            <Button onClick={() => scrollToSection('contact')}>
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}