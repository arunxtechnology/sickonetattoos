import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  highlight: string;
  subtitle: string;
  showCta?: boolean;
}

const PageHero = ({ title, highlight, subtitle, showCta = true }: PageHeroProps) => {
  return (
    <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--foreground)) 35px, hsl(var(--foreground)) 36px)",
        }} />
      </div>
      <div className="container relative z-10 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl mt-3 mb-4"
        >
          {title} <span className="text-gradient">{highlight}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        {showCta && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-condensed font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
