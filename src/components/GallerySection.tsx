import React, { useEffect } from "react";

// Replaced gallery content with Elfsight Instagram feed embed.
// The original request provided the following HTML to embed:
// <!-- Elfsight Instagram Feed | goldenline-instagram-feed -->
// <script src="https://elfsightcdn.com/platform.js" async></script>
// <div class="elfsight-app-aacafa1f-d8b4-4b1b-8ac3-ce7f40a6b60c" data-elfsight-app-lazy></div>

export function GallerySection() {
  useEffect(() => {
    // Inject Elfsight platform script once
    if (typeof window === "undefined") return;
    const src = "https://elfsightcdn.com/platform.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section id="gallery" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elfsight widget container (keeps original widget id supplied) */}
        <div
          className="elfsight-app-aacafa1f-d8b4-4b1b-8ac3-ce7f40a6b60c"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}

export default GallerySection;
