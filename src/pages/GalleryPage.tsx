import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import tattoo1 from "@/assets/348s (6).jpg";
import tattoo2 from "@/assets/348s (7).jpg";
import tattoo3 from "@/assets/348s (8).jpg";
import tattoo4 from "@/assets/348s (9).jpg";
import tattoo5 from "@/assets/tattoo-work-5.jpg";
import tattoo6 from "@/assets/tattoo-work-6.jpg";
import tattoo7 from "@/assets/348s (10).jpg";
import tattoo8 from "@/assets/tattoo-work-8.jpg";

const galleryItems = [
  { src: tattoo1, alt: "Intricate black and grey filigree design", category: "Fine Line" },
  { src: tattoo2, alt: "Japanese waves with cherry blossoms", category: "Japanese" },
  { src: tattoo3, alt: "Neo-traditional skull with roses", category: "Neo-Traditional" },
  { src: tattoo4, alt: "Geometric mandala on forearm", category: "Geometric" },
  { src: tattoo5, alt: "Photorealistic lion portrait", category: "Realism" },
  { src: tattoo6, alt: "Polynesian-inspired tribal art", category: "Tribal" },
  { src: tattoo7, alt: "Rose cover-up transformation", category: "Cover-Up" },
  { src: tattoo8, alt: "Watercolor hummingbird with splashes", category: "Watercolor" },
  // Duplicate for fuller gallery
  { src: tattoo5, alt: "Realistic animal portrait work", category: "Realism" },
  { src: tattoo1, alt: "Delicate ornamental linework", category: "Fine Line" },
  { src: tattoo3, alt: "Bold traditional color work", category: "Neo-Traditional" },
  { src: tattoo4, alt: "Sacred geometry patterns", category: "Geometric" },
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
                key={`${item.category}-${i}`}
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
