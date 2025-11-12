import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const images = [
  {
    before:
      "https://images.unsplash.com/photo-1581931871685-9b6d0b7ffb62?auto=format&fit=crop&w=1200&q=60",
    after:
      "https://images.unsplash.com/photo-1560184897-6cc6b6d1b4a9?auto=format&fit=crop&w=1200&q=60",
    alt: "Living room before and after"
  },
  {
    before:
      "https://images.unsplash.com/photo-1505691723518-36a56b0e3b3a?auto=format&fit=crop&w=1200&q=60",
    after:
      "https://images.unsplash.com/photo-1536530776192-4e6a6a5c4b6f?auto=format&fit=crop&w=1200&q=60",
    alt: "Exterior before and after"
  },
  {
    before:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=60",
    after:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=60",
    alt: "Kitchen before and after"
  }
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Before & After Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-sm font-medium text-foreground">{img.alt}</div>
                  <div className="rounded overflow-hidden shadow">
                    <div className="grid grid-cols-2">
                      <ImageWithFallback
                        src={img.before}
                        alt={`${img.alt} - before`}
                        className="h-40 w-full object-cover"
                      />
                      <ImageWithFallback
                        src={img.after}
                        alt={`${img.alt} - after`}
                        className="h-40 w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default GallerySection;
