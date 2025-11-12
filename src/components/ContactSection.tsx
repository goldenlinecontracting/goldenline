import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    toast.success("Thank you! We'll contact you within 24 hours to schedule your free estimate.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      projectType: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 text-primary">Get Your Free Estimate</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Contact us today for a free, no-obligation estimate. 
            We'll work with you to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request Your Free Estimate</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        placeholder="(403) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Type *</Label>
                      <Select value={formData.service} onValueChange={(value: string) => handleChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential-interior">Residential Interior</SelectItem>
                          <SelectItem value="residential-exterior">Residential Exterior</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="specialty">Specialty Finishes</SelectItem>
                          <SelectItem value="consultation">Color Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select value={formData.projectType} onValueChange={(value: string) => handleChange("projectType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-room">Single Room</SelectItem>
                        <SelectItem value="multiple-rooms">Multiple Rooms</SelectItem>
                        <SelectItem value="whole-house">Whole House</SelectItem>
                        <SelectItem value="exterior-only">Exterior Only</SelectItem>
                        <SelectItem value="touch-up">Touch-up Work</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your project, preferred timeline, and any specific requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Request Free Estimate
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">
                      <a
                        href="tel:+14039095375"
                        className="hover:underline"
                        aria-label="Call Golden Line Contracting at (403) 909-5375"
                      >
                        (403) 909-5375
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">Call or text anytime</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">
                      <a
                        href="mailto:moe@goldenlinecontracting.com"
                        className="hover:underline"
                        aria-label="Email Golden Line Contracting"
                      >
                        moe@goldenlinecontracting.com
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">Email us anytime</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Calgary, AB</p>
                    <p className="text-sm text-muted-foreground">Serving Calgary & area</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Mon-Fri: 8AM-6PM</p>
                    <p className="text-sm text-muted-foreground">Saturday: 9AM-4PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent">
              <CardContent className="p-6">
                <h3 className="mb-3 text-primary">Why Get an Estimate?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Detailed project assessment</li>
                  <li>• Material recommendations</li>
                  <li>• Timeline planning</li>
                  <li>• No obligation to proceed</li>
                  <li>• Professional color advice</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}