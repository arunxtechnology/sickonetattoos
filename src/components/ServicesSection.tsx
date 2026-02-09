import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Paintbrush, Layers, CircleDot, Zap, Sparkles } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Custom Tattoos",
    description: "One-of-a-kind designs tailored to your vision. Our artists specialize in every style from realism to traditional, Japanese, and fine line work.",
  },
  {
    icon: Layers,
    title: "Tattoo Cover-Ups",
    description: "Transform old or unwanted tattoos into stunning new artwork. Our cover-up specialists work magic with creative solutions.",
  },
  {
    icon: CircleDot,
    title: "Body Piercing",
    description: "Professional piercings performed with hospital-grade sterilization. Wide selection of premium jewelry for every style.",
  },
  {
    icon: Zap,
    title: "Laser Tattoo Removal",
    description: "State-of-the-art laser technology for safe, effective tattoo removal. Fade treatments also available for cover-up preparation.",
  },
  {
    icon: Sparkles,
    title: "Laser Hair Removal",
    description: "Advanced laser hair removal services for smooth, long-lasting results. Professional treatments in a comfortable environment.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">
            Our <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-gradient-card border border-border p-8 hover:border-primary/50 transition-all duration-500 shadow-card"
            >
              <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-2xl mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
