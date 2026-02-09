import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import PageHero from "@/components/PageHero";

const GalleryPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const galleryItems = useMemo(() => {
    // Dynamically load all jpg images from assets
    const images = import.meta.glob('@/assets/*.{jpg,jpeg,png}', {
      eager: true,
      query: '?url',
      import: 'default'
    });

    // Convert to array and filter
    return Object.entries(images)
      .filter(([path]) => {
        // Exclude specific system/layout images
        const filename = path.split('/').pop()?.toLowerCase() || '';
        return !filename.includes('logo') &&
          !filename.includes('hero-bg') &&
          !filename.includes('studio-interior');
      })
      .map(([path, src]) => ({
        src: src as string,
        alt: path.split('/').pop()?.replace(/\.[^/.]+$/, "").replace(/-/g, " ") || "Gallery Image"
      }));
  }, []);

  return (
    <>
      <PageHero title="Our" highlight="Gallery" subtitle="Browse our complete portfolio of custom tattoo work, piercings, and studio life." showCta={false} />

      <section className="py-24 bg-gradient-dark" ref={ref}>
        <div className="container">
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
