import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import PageHero from "@/components/PageHero";
import tattoo1 from "@/assets/tattoo-work-1.jpg";
import tattoo2 from "@/assets/tattoo-work-2.jpg";
import tattoo3 from "@/assets/tattoo-work-3.jpg";
import tattoo4 from "@/assets/tattoo-work-4.jpg";
import tattoo5 from "@/assets/tattoo-work-5.jpg";
import tattoo6 from "@/assets/tattoo-work-6.jpg";
import tattoo7 from "@/assets/tattoo-work-7.jpg";
import tattoo8 from "@/assets/tattoo-work-8.jpg";

const categories = ["All", "Fine Line", "Japanese", "Neo-Traditional", "Geometric", "Realism", "Tribal", "Cover-Up", "Watercolor"];

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
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero title="Our" highlight="Gallery" subtitle="Browse our portfolio of custom tattoo work across every style — from bold traditional to delicate fine line." showCta={false} />

      <section className="py-24 bg-gradient-dark" ref={ref}>
        <div className="container">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-condensed text-sm font-semibold uppercase tracking-wider px-5 py-2.5 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filtered.map((item, i) => (
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
                <div className="absolute inset-0 bg-background/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                  <span className="font-condensed text-primary text-xs uppercase tracking-wider font-semibold mb-1">{item.category}</span>
                  <p className="text-foreground text-sm">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-12 font-condensed uppercase tracking-wider">No pieces found in this category.</p>
          )}
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
