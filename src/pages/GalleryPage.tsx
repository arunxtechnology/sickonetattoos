import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
// Imports for gallery images
import tattoo1 from "@/assets/348s (15).jpg";
import tattoo2 from "@/assets/348s (16).jpg";
import tattoo3 from "@/assets/348s (17).jpg";
import tattoo4 from "@/assets/348s (18).jpg";
import tattoo5 from "@/assets/348s (19).jpg";
import tattoo6 from "@/assets/348s (20).jpg";
import tattoo7 from "@/assets/348s (21).jpg";
import tattoo8 from "@/assets/348s (22).jpg";
import tattoo9 from "@/assets/348s (23).jpg";
import tattoo10 from "@/assets/348s (24).jpg";
import tattoo11 from "@/assets/348s (25).jpg";
import tattoo12 from "@/assets/348s (26).jpg";
import tattoo13 from "@/assets/348s (27).jpg";
import tattoo14 from "@/assets/348s (28).jpg";
import tattoo15 from "@/assets/348s (29).jpg";
import tattoo16 from "@/assets/348s (30).jpg";

const galleryItems = [
  { src: tattoo1, alt: "Custom Tattoo Art 1" },
  { src: tattoo2, alt: "Custom Tattoo Art 2" },
  { src: tattoo3, alt: "Custom Tattoo Art 3" },
  { src: tattoo4, alt: "Custom Tattoo Art 4" },
  { src: tattoo5, alt: "Custom Tattoo Art 5" },
  { src: tattoo6, alt: "Custom Tattoo Art 6" },
  { src: tattoo7, alt: "Custom Tattoo Art 7" },
  { src: tattoo8, alt: "Custom Tattoo Art 8" },
  { src: tattoo9, alt: "Custom Tattoo Art 9" },
  { src: tattoo10, alt: "Custom Tattoo Art 10" },
  { src: tattoo11, alt: "Custom Tattoo Art 11" },
  { src: tattoo12, alt: "Custom Tattoo Art 12" },
  { src: tattoo13, alt: "Custom Tattoo Art 13" },
  { src: tattoo14, alt: "Custom Tattoo Art 14" },
  { src: tattoo15, alt: "Custom Tattoo Art 15" },
  { src: tattoo16, alt: "Custom Tattoo Art 16" },
];

const GalleryPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <PageHero title="Our" highlight="Gallery" subtitle="Browse our portfolio of custom tattoo work across every style — from bold traditional to delicate fine line." showCta={false} />

      <section className="py-24 bg-gradient-dark" ref={ref}>
        <div className="container">
          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryItems.map((item, i) => (
              <motion.div
                key={`gallery-item-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative group aspect-square overflow-hidden cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-4">See More on <span className="text-gradient">Instagram</span></h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Follow us for daily posts of fresh tattoo work, behind-the-scenes content, and inspiration.
          </p>
          <a
            href="https://instagram.com/sickonetattoos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 font-condensed font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            @sickonetattoos
          </a>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
