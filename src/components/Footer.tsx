import { Phone, Mail, MapPin } from "lucide-react";

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
            <div className="text-sm opacity-80">
              Licensed • Insured • Bonded
            </div>
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
                <span>(403) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@goldenlinepainting.ca</span>
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
        </div>
      </div>
    </footer>
  );
}