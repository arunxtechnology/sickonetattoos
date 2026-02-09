import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, Award, Clock, Heart, Users, Droplets } from "lucide-react";
import PageHero from "@/components/PageHero";
import studioInterior from "@/assets/studio-interior.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  { icon: Heart, title: "Passion for Art", desc: "Every tattoo we create is a labor of love. Our artists pour their creativity and expertise into every piece, treating your skin as a canvas for lasting art." },
  { icon: Shield, title: "Safety First", desc: "We maintain the highest standards of cleanliness and sterilization. All equipment is single-use or autoclave-sterilized, exceeding Nevada health department requirements." },
  { icon: Users, title: "Client Focused", desc: "Your comfort and satisfaction are our top priorities. We take time to understand your vision and work collaboratively to create the perfect design." },
  { icon: Droplets, title: "Premium Inks", desc: "We use only the highest quality, vegan-friendly inks from top manufacturers. Our colors stay vibrant and our blacks stay deep for years to come." },
];

const timeline = [
  { year: "2009", title: "The Beginning", desc: "Sick One Tattoos opened its doors in downtown Las Vegas with a single artist and a bold vision for exceptional custom tattoo work." },
  { year: "2012", title: "Growing Reputation", desc: "Word spread fast. Our commitment to quality attracted talented artists and loyal clients, establishing us as a go-to studio in the valley." },
  { year: "2016", title: "Award Recognition", desc: "Multiple awards at regional tattoo conventions cemented our reputation for excellence in both realism and traditional styles." },
  { year: "2019", title: "Studio Expansion", desc: "Relocated to our current location at 300 W Utah Ave with a larger, state-of-the-art facility featuring private stations and expanded services." },
  { year: "2023", title: "Laser Services Added", desc: "Invested in cutting-edge laser technology to offer tattoo removal and hair removal services alongside our tattoo and piercing work." },
  { year: "Today", title: "Las Vegas's Best", desc: "With over 10,000 tattoos completed, 500+ five-star reviews, and a team of 6 exceptional artists, we continue to push the boundaries of tattoo artistry." },
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

const AboutPage = () => {
  return (
    <>
      <PageHero title="About" highlight="Us" subtitle="Learn about Las Vegas's most trusted tattoo studio — our story, our values, and the artists behind the art." />

      {/* Story */}
      <section className="py-24 bg-gradient-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimSection>
              <div className="relative">
                <img src={studioInterior} alt="Sick One Tattoos studio interior" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute inset-0 border border-primary/20" />
              </div>
            </AnimSection>
            <AnimSection delay={0.2}>
              <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">Est. 2009</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 mb-6">Born From a Love of <span className="text-gradient">Ink</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sick One Tattoos was founded with a simple mission: to create world-class tattoo art in an environment that's clean, professional, and welcoming. Located in the heart of Las Vegas, we've grown from a single-chair shop into one of the city's most respected studios.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team of artists brings diverse specialties and decades of combined experience. Whether you're looking for photorealistic portraits, bold traditional designs, intricate dotwork, or delicate fine-line pieces, we have an artist who specializes in exactly what you need.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe every tattoo tells a story. Our job is to make sure that story is told with precision, artistry, and respect for the craft. From your first consultation to the final heal, we're with you every step of the way.
              </p>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <AnimSection className="text-center mb-16">
            <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">What Drives Us</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Our <span className="text-gradient">Values</span></h2>
          </AnimSection>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimSection key={v.title} delay={i * 0.1}>
                <div className="bg-gradient-card border border-border p-8 shadow-card flex gap-6 h-full hover:border-primary/30 transition-colors">
                  <v.icon className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-2xl mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-dark">
        <div className="container">
          <AnimSection className="text-center mb-16">
            <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">Our Journey</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Studio <span className="text-gradient">Timeline</span></h2>
          </AnimSection>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((item, i) => (
              <AnimSection key={item.year} delay={i * 0.1}>
                <div className={`relative pl-12 md:pl-0 mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                  <div className={`absolute left-2.5 md:left-auto top-1 w-3 h-3 rounded-full bg-primary ${i % 2 === 0 ? "md:right-[-6.5px]" : "md:left-[-6.5px]"}`} />
                  <span className="font-display text-primary text-2xl">{item.year}</span>
                  <h3 className="font-display text-xl mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Image */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <AnimSection className="text-center mb-16">
            <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">Our Space</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">The <span className="text-gradient">Studio</span></h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our studio features private tattooing stations, a comfortable waiting area, and a sterile environment that exceeds all Nevada health and safety standards.
            </p>
          </AnimSection>
          <div className="grid md:grid-cols-2 gap-4">
            <AnimSection>
              <img src={heroBg} alt="Tattoo workstation" className="w-full aspect-video object-cover border border-border" />
            </AnimSection>
            <AnimSection delay={0.1}>
              <img src={studioInterior} alt="Studio waiting area" className="w-full aspect-video object-cover border border-border" />
            </AnimSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">Come Visit Us</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Walk-ins always welcome. Or book a consultation to discuss your custom piece.</p>
          <Link to="/contact" className="inline-block bg-background text-foreground px-8 py-4 font-condensed font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
