import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg mb-4">Golden Line Contracting LTD</h3>
            <p className="text-sm opacity-80 mb-4">
              Calgary's trusted painting professionals since 2009. 
              We transform spaces with quality craftsmanship and exceptional service.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61579348362164"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Golden Line on Facebook"
                className="hover:text-primary"
              >
                <Facebook className="h-[26px] w-[26px] text-secondary-foreground opacity-80" />
              </a>
              <a
                href="https://www.instagram.com/golden_line_contracting_ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Golden Line on Instagram"
                className="hover:text-primary"
              >
                <Instagram className="h-[26px] w-[26px] text-secondary-foreground opacity-80" />
              </a>
            </div>
            {/* <div className="text-sm opacity-80">
              Licensed • Insured • Bonded
            </div> */}
          </div>
          
          <div>
            <h4 className="mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Residential Interior Painting</li>
              <li>Residential Exterior Painting</li>
              <li>Commercial Painting</li>
              <li>Specialty Finishes</li>
              <li>Color Consultation</li>
              <li>Deck & Fence Staining</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+14039095375"
                  className="hover:underline"
                  aria-label="Call Golden Line Contracting at (403) 909-5375"
                >
                  (403) 909-5375
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:goldenlinecontracting@gmail.com"
                  className="hover:underline"
                  aria-label="Email Golden Line Contracting"
                >
                  goldenlinecontracting@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Calgary, AB & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Golden Line Contracting LTD. All rights reserved.</p>
          <p className="mt-2">
            Designed by{" "}
            <a
              href="https://nutab.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{ color: "var(--primary)" }}
            >
              NuTab Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}