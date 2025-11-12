import { Card, CardContent } from "./ui/card";
import { Users, Award, Clock, MapPin } from "lucide-react";

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
              <span className="lead-name">Moe</span>, the founder and lead painter, began his professional painting career in 2008. Over more than a decade of field experience, 
              he has refined a methodical approach to surface preparation, paint selection, and finishing that prioritizes longevity and precision.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              <span className="lead-name">He</span> established Golden Line with a clear objective: provide clients with dependable, high-quality painting services delivered with integrity. 
              Under Moe’s leadership, the company follows industry best practices, maintains strict quality controls, and communicates clearly at every stage. 
              From single-room interiors to comprehensive exterior projects, clients can expect professional execution, timely delivery, and a durable, refined finish.
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
            <img 
              src="src/assets/man-painting.png"
              alt="Professional painter at work"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            
            <div className="bg-secondary text-secondary-foreground p-6 rounded-lg shadow-md">
              <h3 className="mb-4">Our Commitment</h3>
              <ul className="space-y-2">
                {/* <li>• Licensed & insured — contact us to confirm coverage and details</li> */}
                <li>• We strive to use premium, eco-friendly paint products when available</li>
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