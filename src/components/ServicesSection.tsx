import image_79ad1e49a911882d2448a73091f65b39cfb6fb1b from 'figma:asset/79ad1e49a911882d2448a73091f65b39cfb6fb1b.png';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Home, Building2, Brush, Palette, Shield, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Residential Painting",
      description: "Interior and exterior painting for homes, condos, and townhouses",
      features: ["Interior walls & ceilings", "Exterior siding & trim", "Deck & fence staining", "Cabinet painting"]
    },
    {
      icon: Building2,
      title: "Commercial Painting",
      description: "Professional painting services for offices, retail, and industrial spaces",
      features: ["Office buildings", "Retail stores", "Warehouses", "Property management"]
    },
    {
      icon: Brush,
      title: "Specialty Finishes",
      description: "Custom textures, faux finishes, and decorative painting techniques",
      features: ["Texture application", "Faux painting", "Accent walls", "Custom murals"]
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Expert advice to help you choose the perfect colors for your space",
      features: ["Color matching", "Trend analysis", "Lighting assessment", "Sample testing"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties"
    },
    {
      icon: Clock,
      title: "On-Time Completion",
      description: "Projects completed on schedule with minimal disruption"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 text-primary">Our Painting Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From residential homes to commercial buildings, we provide comprehensive painting solutions 
            tailored to your specific needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl mb-6 text-primary">Why Choose Golden Line Contracting?</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <benefit.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <ImageWithFallback 
              src={image_79ad1e49a911882d2448a73091f65b39cfb6fb1b}
              alt="Interior painting project"
              className="rounded-lg h-48 object-cover"
            />
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1617049036786-a0a08d0dcda0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoZXMlMjB0b29scyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTY0MTQyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional painting tools"
              className="rounded-lg h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}