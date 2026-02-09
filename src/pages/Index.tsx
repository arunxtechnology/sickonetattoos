import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, Shield, Award, Clock, Paintbrush, Layers, CircleDot, Zap, Sparkles } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import studioInterior from "@/assets/studio-interior.jpg";
import tattoo1 from "@/assets/tattoo-work-1.jpg";
import tattoo3 from "@/assets/tattoo-work-3.jpg";
import tattoo5 from "@/assets/tattoo-work-5.jpg";
import tattoo8 from "@/assets/tattoo-work-8.jpg";

const stats = [
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Shield, label: "5-Star Reviews", value: "500+" },
  { icon: Clock, label: "Tattoos Completed", value: "10K+" },
];

const featuredWork = [
  { src: tattoo1, alt: "Fine line work" },
  { src: tattoo3, alt: "Neo-traditional skull" },
  { src: tattoo5, alt: "Realistic lion portrait" },
  { src: tattoo8, alt: "Watercolor hummingbird" },
];

const services = [
  { icon: Paintbrush, title: "Custom Tattoos", desc: "One-of-a-kind designs in every style" },
  { icon: Layers, title: "Cover-Ups", desc: "Transform old ink into new masterpieces" },
  { icon: CircleDot, title: "Body Piercing", desc: "Professional piercings with premium jewelry" },
  { icon: Zap, title: "Laser Removal", desc: "State-of-the-art laser tattoo removal" },
  { icon: Sparkles, title: "Laser Hair Removal", desc: "Advanced laser hair removal services" },
];

const reviews = [
  { name: "Marcus T.", text: "Absolutely incredible work! My sleeve turned out better than I ever imagined." },
  { name: "Ashley R.", text: "Got my first tattoo here and the experience was perfect. Already planning my next one!" },
  { name: "David L.", text: "Best cover-up artist in Vegas. The transformation was unreal." },
];

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <>
      <HeroSection />

      {/* About Preview */}
      <section className="py-24 bg-gradient-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <img src={studioInterior} alt="Inside Sick One Tattoos" className="w-full aspect-[4/5] object-cover border border-border" />
            </AnimatedSection>
            <AnimatedSection>
              <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">Our Story</span>
              <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6">Where Art Meets <span className="text-gradient">Skin</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Sick One Tattoos is a premier tattoo studio in the heart of Las Vegas, known for delivering exceptional custom artwork in a clean, professional environment. Our team of skilled artists specializes in a wide range of styles.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-display text-3xl">{s.value}</div>
                    <div className="font-condensed text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-condensed font-bold uppercase tracking-wider hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">What We Offer</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Our <span className="text-gradient">Services</span></h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <AnimatedSection key={s.title}>
                <div className="bg-gradient-card border border-border p-6 h-full hover:border-primary/50 transition-all duration-500 shadow-card group">
                  <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-condensed font-bold uppercase tracking-wider hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-gradient-dark">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">Portfolio</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Featured <span className="text-gradient">Work</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {featuredWork.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="aspect-square overflow-hidden group">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-condensed font-bold uppercase tracking-wider hover:gap-3 transition-all">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">Testimonials</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Client <span className="text-gradient">Love</span></h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <AnimatedSection key={i}>
                <div className="bg-gradient-card border border-border p-8 shadow-card h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
                  <span className="font-condensed text-foreground font-semibold uppercase tracking-wider text-sm">{r.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-primary font-condensed font-bold uppercase tracking-wider hover:gap-3 transition-all">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(0 0% 0%) 35px, hsl(0 0% 0%) 36px)",
          }} />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-4">Ready to Get Inked?</h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Walk-ins welcome or book your session today. Let our award-winning artists bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-background text-foreground px-8 py-4 font-condensed font-bold text-lg uppercase tracking-wider hover:bg-foreground hover:text-background transition-all"
            >
              Book Now
            </Link>
            <a
              href="tel:+17025551234"
              className="border border-primary-foreground/50 text-primary-foreground px-8 py-4 font-condensed font-bold text-lg uppercase tracking-wider hover:bg-primary-foreground/10 transition-all"
            >
              Call (702) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
