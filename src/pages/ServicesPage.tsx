import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Paintbrush, Layers, CircleDot, Zap, Sparkles, Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import serviceCustom from "@/assets/tattoo-work-5.jpg";

const services = [
  {
    icon: Paintbrush,
    title: "Custom Tattoos",
    description: "Every tattoo we create is a one-of-a-kind masterpiece, designed specifically for you. Our artists specialize in every major style and work closely with you from concept to completion.",
    features: ["Free design consultation", "Custom artwork included", "All styles: realism, traditional, Japanese, fine line, geometric, watercolor", "Touch-ups included within 90 days"],
    image: serviceCustom,
    pricing: "Starting at $150/hour",
  },
  {
    icon: Layers,
    title: "Tattoo Cover-Ups",
    description: "Got an old tattoo you regret? Our cover-up specialists can transform any unwanted piece into stunning new artwork that you'll love. We also offer combination treatments with laser fading for the most challenging cover-ups.",
    features: ["Expert assessment of existing tattoo", "Creative design solutions", "Laser fading preparation available", "Color matching and blending expertise"],
    image: null,
    pricing: "Starting at $200/hour",
  },
  {
    icon: CircleDot,
    title: "Body Piercing",
    description: "Professional body piercing performed by experienced piercers using sterile, single-use needles. We carry a wide selection of high-quality jewelry from trusted brands.",
    features: ["Sterile single-use equipment", "Premium titanium & gold jewelry", "Aftercare guidance included", "All body locations available"],
    image: null,
    pricing: "Starting at $40",
  },
  {
    icon: Zap,
    title: "Laser Tattoo Removal",
    description: "Our state-of-the-art Q-switched laser technology safely and effectively removes unwanted tattoos. We offer full removal and partial fading for cover-up preparation.",
    features: ["FDA-approved laser technology", "Safe for all skin types", "Minimal downtime", "Cover-up fading packages available"],
    image: null,
    pricing: "Starting at $100/session",
  },
  {
    icon: Sparkles,
    title: "Laser Hair Removal",
    description: "Achieve smooth, hair-free skin with our advanced laser hair removal treatments. Safe, effective, and long-lasting results with our professional-grade equipment.",
    features: ["Advanced diode laser technology", "All body areas treated", "Suitable for most skin types", "Package deals available"],
    image: null,
    pricing: "Starting at $75/session",
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "Share your ideas, reference images, and placement. We'll discuss sizing, style, and your artist will guide you on what works best." },
  { step: "02", title: "Design", desc: "Your artist creates a custom design based on your vision. We refine it together until it's exactly what you want — no rush, no compromises." },
  { step: "03", title: "Tattoo Session", desc: "Relax in our private, sterile station while your artist brings the design to life. We ensure your comfort throughout the entire process." },
  { step: "04", title: "Aftercare", desc: "We provide detailed aftercare instructions and premium healing products. We're available for questions and include complimentary touch-ups." },
];

const AnimSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <>
      <PageHero title="Our" highlight="Services" subtitle="From custom tattoos to laser treatments — everything you need under one roof." />

      {/* Services Detail */}
      <section className="py-12 md:py-24 bg-gradient-dark overflow-hidden">
        <div className="container space-y-16 md:space-y-20">
          {services.map((service, i) => (
            <AnimSection key={service.title}>
              <div className={`flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className={`order-2 md:order-1 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <service.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                  <h2 className="font-display text-2xl md:text-3xl lg:text-5xl mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start md:items-center gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1 md:mt-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-condensed text-primary font-bold uppercase tracking-wider text-sm md:text-base">{service.pricing}</span>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-foreground font-condensed font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors">
                      Book Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className={`order-1 md:order-2 w-full ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  {service.image ? (
                    <div className="aspect-video md:aspect-square overflow-hidden rounded-lg border border-border/50">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  ) : (
                    <div className="w-full aspect-video md:aspect-square bg-secondary border border-border flex items-center justify-center rounded-lg">
                      <service.icon className="w-24 h-24 text-primary/20" />
                    </div>
                  )}
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <AnimSection className="text-center mb-16">
            <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">How It Works</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Our <span className="text-gradient">Process</span></h2>
          </AnimSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <AnimSection key={p.step} delay={i * 0.1}>
                <div className="bg-gradient-card border border-border p-8 shadow-card h-full hover:border-primary/30 transition-colors">
                  <span className="font-display text-5xl text-primary/20">{p.step}</span>
                  <h3 className="font-display text-2xl mt-2 mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-dark">
        <div className="container max-w-3xl">
          <AnimSection className="text-center mb-16">
            <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">Common Questions</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3"><span className="text-gradient">FAQ</span></h2>
          </AnimSection>
          <div className="space-y-6">
            {[
              { q: "Do I need an appointment?", a: "Walk-ins are always welcome! However, for custom work or specific artists, we recommend booking in advance to ensure availability." },
              { q: "How much does a tattoo cost?", a: "Pricing varies based on size, detail, and placement. Our hourly rate starts at $150. Small pieces may have a shop minimum of $80. We provide free consultations and quotes." },
              { q: "How old do I need to be?", a: "You must be 18 years or older with a valid photo ID. We do not tattoo minors under any circumstances." },
              { q: "How should I prepare for my session?", a: "Get a good night's sleep, eat a full meal beforehand, stay hydrated, and wear comfortable clothing that provides easy access to the tattoo area." },
              { q: "Do you do cover-ups?", a: "Yes! Our artists are experienced in cover-up work. We recommend booking a consultation so we can assess the existing tattoo and discuss the best approach." },
            ].map((item, i) => (
              <AnimSection key={i} delay={i * 0.05}>
                <div className="border border-border p-6 bg-gradient-card">
                  <h3 className="font-condensed text-foreground font-bold uppercase tracking-wider mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">Ready to Start Your Piece?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Book a free consultation and let our artists bring your vision to life.</p>
          <Link to="/contact" className="inline-block bg-background text-foreground px-8 py-4 font-condensed font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
