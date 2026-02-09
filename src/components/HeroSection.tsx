import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Sick One Tattoos studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="font-condensed text-muted-foreground text-sm uppercase tracking-wider">
            5-Star Rated Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6"
        >
          Award-Winning
          <br />
          <span className="text-gradient">Custom Tattoos</span>
          <br />
          in Las Vegas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Where artistry meets precision. Custom designs, cover-ups, piercings & more — crafted by Las Vegas's most trusted tattoo artists.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 font-condensed font-bold text-lg uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 animate-pulse-glow"
          >
            Book an Appointment
          </a>
          <a
            href="#gallery"
            className="border border-foreground/30 text-foreground px-8 py-4 font-condensed font-bold text-lg uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
          >
            View Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-12 text-muted-foreground"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-condensed text-sm uppercase tracking-wider">
            300 W Utah Ave, Ste 104 • Las Vegas, NV 89102
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
