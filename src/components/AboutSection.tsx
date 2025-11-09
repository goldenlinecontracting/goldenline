import image_c03acc4c2c1fa51627110fb1459dfe614cb1d879 from 'figma:asset/c03acc4c2c1fa51627110fb1459dfe614cb1d879.png';
import { Card, CardContent } from "./ui/card";
import { Users, Award, Clock, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Customers"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: Clock,
      number: "1000+",
      label: "Projects Completed"
    },
    {
      icon: MapPin,
      number: "Calgary",
      label: "& Surrounding Areas"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl mb-6 text-primary">
              About Golden Line Contracting
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2009, Golden Line Contracting has been Calgary's trusted painting 
              partner for over 15 years. We take pride in delivering exceptional craftsmanship 
              and customer service that has earned us a reputation as one of the city's premier 
              painting contractors.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced professionals is committed to transforming your vision 
              into reality. Whether it's a single room refresh or a complete property makeover, 
              we approach every project with the same attention to detail and dedication to excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <ImageWithFallback 
              src={image_c03acc4c2c1fa51627110fb1459dfe614cb1d879}
              alt="Professional painter at work"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="mb-4 text-primary">Our Commitment</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Licensed and fully insured for your peace of mind</li>
                <li>• Using only premium, eco-friendly paint products</li>
                <li>• Thorough surface preparation for lasting results</li>
                <li>• Clean, professional work environment</li>
                <li>• Competitive pricing with transparent quotes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}