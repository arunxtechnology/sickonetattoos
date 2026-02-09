import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Instagram, Mail } from "lucide-react";

const hours = [
  { day: "Monday – Saturday", time: "11:00 AM – 10:00 PM" },
  { day: "Sunday", time: "12:00 PM – 8:00 PM" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">
            Book Your <span className="text-gradient">Session</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-condensed text-foreground font-bold uppercase tracking-wider mb-1">Location</h3>
                <p className="text-muted-foreground">300 W Utah Ave, Ste 104<br />Las Vegas, NV 89102</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-condensed text-foreground font-bold uppercase tracking-wider mb-1">Phone</h3>
                <a href="tel:+17025551234" className="text-muted-foreground hover:text-primary transition-colors">
                  (702) 555-1234
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-condensed text-foreground font-bold uppercase tracking-wider mb-1">Hours</h3>
                {hours.map((h) => (
                  <p key={h.day} className="text-muted-foreground text-sm">
                    <span className="text-foreground/70">{h.day}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Instagram className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-condensed text-foreground font-bold uppercase tracking-wider mb-1">Follow Us</h3>
                <a
                  href="https://instagram.com/sickonetattoos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @sickonetattoos
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-condensed text-foreground font-bold uppercase tracking-wider mb-1">Email</h3>
                <a
                  href="mailto:info@sickonetattoos.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@sickonetattoos.com
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:+17025551234"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-condensed font-bold text-lg uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 animate-pulse-glow"
            >
              <Phone className="w-5 h-5" />
              Book Your Appointment
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <iframe
              title="Sick One Tattoos Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.5!2d-115.155!3d36.164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s300+W+Utah+Ave+Las+Vegas+NV!5e0!3m2!1sen!2sus!4v1700000000"
              className="w-full aspect-square lg:aspect-auto lg:h-full min-h-[400px] border border-border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
