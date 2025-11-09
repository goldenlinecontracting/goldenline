import image_47506b2a7ed370e85a455cac22c080443088bf78 from 'figma:asset/47506b2a7ed370e85a455cac22c080443088bf78.png';
import { Button } from "./ui/button";
import { CheckCircle, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">5.0 (50+ Reviews)</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl mb-6 text-foreground">
              Calgary's Premier <span className="text-primary">Golden</span> Standard in <span className="text-secondary">Painting</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Transform your home or business with our expert painting services. 
              Over 15 years of experience delivering exceptional results across Calgary and surrounding areas.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Licensed & Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Free Estimates & Color Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact}>
                Get Free Estimate
              </Button>
              <Button variant="outline" size="lg">
                Call (403) 555-0123
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback 
              src={image_47506b2a7ed370e85a455cac22c080443088bf78}
              alt="Professional house painting exterior"
              className="rounded-lg shadow-2xl w-full h-[300px] object-contain"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary-foreground">15+</div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}