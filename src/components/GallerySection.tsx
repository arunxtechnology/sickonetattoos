import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import tattoo1 from "@/assets/348s (11).jpg";
import tattoo2 from "@/assets/348s (12).jpg";
import tattoo3 from "@/assets/348s (13).jpg";
import tattoo4 from "@/assets/348s (14).jpg";
import tattoo5 from "@/assets/tattoo-work-5.jpg";
import tattoo6 from "@/assets/tattoo-work-6.jpg";
import tattoo7 from "@/assets/348s.jpg";
import tattoo8 from "@/assets/tattoo-work-8.jpg";

const galleryItems = [
  { src: tattoo1, alt: "Black and grey filigree tattoo", category: "Fine Line" },
  { src: tattoo2, alt: "Japanese waves and cherry blossoms", category: "Japanese" },
  { src: tattoo3, alt: "Skull with roses neo-traditional", category: "Neo-Traditional" },
  { src: tattoo4, alt: "Geometric mandala tattoo", category: "Geometric" },
  { src: tattoo5, alt: "Realistic lion portrait", category: "Realism" },
  { src: tattoo6, alt: "Tribal shoulder tattoo", category: "Tribal" },
  { src: tattoo7, alt: "Cover-up before and after", category: "Cover-Up" },
  { src: tattoo8, alt: "Watercolor hummingbird", category: "Watercolor" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-gradient-dark">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">
            Our <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group aspect-square overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
