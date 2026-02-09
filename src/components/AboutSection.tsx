import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Clock } from "lucide-react";
import studioInterior from "@/assets/studio-interior.jpg";

const stats = [
  { icon: Award, label: "Years of Experience", value: "15+" },
  { icon: Shield, label: "5-Star Reviews", value: "500+" },
  { icon: Clock, label: "Tattoos Completed", value: "10K+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gradient-dark">
      <div className="container" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={studioInterior}
              alt="Inside Sick One Tattoos studio"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/10 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6">
              Where Art Meets <span className="text-gradient">Skin</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sick One Tattoos is a premier tattoo studio in the heart of Las Vegas, known for delivering exceptional custom artwork in a clean, professional environment. Our team of skilled artists specializes in a wide range of styles — from bold traditional to intricate realism.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              We take pride in creating a welcoming atmosphere where every client feels comfortable. Whether it's your first tattoo or your hundredth, our artists work closely with you to bring your vision to life with precision and artistry.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-3xl md:text-4xl text-foreground">{stat.value}</div>
                  <div className="font-condensed text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
