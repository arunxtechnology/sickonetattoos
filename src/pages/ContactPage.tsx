import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock, Instagram, Mail, Send, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";

const hours = [
  { day: "Monday", time: "11:00 AM – 10:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 10:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 10:00 PM" },
  { day: "Thursday", time: "11:00 AM – 10:00 PM" },
  { day: "Friday", time: "11:00 AM – 10:00 PM" },
  { day: "Saturday", time: "11:00 AM – 10:00 PM" },
  { day: "Sunday", time: "12:00 PM – 8:00 PM" },
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

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero title="Contact" highlight="Us" subtitle="Walk-ins welcome or book your session in advance. We'd love to hear from you." showCta={false} />

      {/* Contact Info + Form */}
      <section className="py-24 bg-gradient-dark">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Info */}
            <AnimSection>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl mb-6">Get In <span className="text-gradient">Touch</span></h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're ready to book your next session or just have questions, we're here to help. Walk-ins are always welcome, or reach out to schedule a consultation for custom work.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-condensed text-foreground font-bold uppercase tracking-wider text-sm mb-1">Location</h3>
                      <p className="text-muted-foreground text-sm">300 W Utah Ave, Ste 104<br />Las Vegas, NV 89102</p>
                      <a href="https://maps.google.com/?q=300+W+Utah+Ave+Ste+104+Las+Vegas+NV+89102" target="_blank" rel="noopener noreferrer" className="text-primary text-xs font-condensed uppercase tracking-wider mt-1 inline-block hover:underline">
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-condensed text-foreground font-bold uppercase tracking-wider text-sm mb-1">Phone</h3>
                      <a href="tel:+17025551234" className="text-muted-foreground text-sm hover:text-primary transition-colors">(702) 555-1234</a>
                      <p className="text-muted-foreground text-xs mt-1">Call or text for appointments</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-condensed text-foreground font-bold uppercase tracking-wider text-sm mb-1">Email</h3>
                      <a href="mailto:info@sickonetattoos.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">info@sickonetattoos.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-condensed text-foreground font-bold uppercase tracking-wider text-sm mb-1">Instagram</h3>
                      <a href="https://instagram.com/sickonetattoos" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">@sickonetattoos</a>
                      <p className="text-muted-foreground text-xs mt-1">DM us for quick questions</p>
                    </div>
                  </div>
                </div>

                {/* Big CTA */}
                <a
                  href="tel:+17025551234"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-condensed font-bold text-lg uppercase tracking-wider hover:bg-primary/90 transition-all animate-pulse-glow"
                >
                  <Phone className="w-5 h-5" />
                  Call to Book Now
                </a>
              </div>
            </AnimSection>

            {/* Right: Form */}
            <AnimSection delay={0.2}>
              <div className="bg-gradient-card border border-border p-8 md:p-10 shadow-card">
                <h3 className="font-display text-2xl mb-2">Request a Booking</h3>
                <p className="text-muted-foreground text-sm mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h4 className="font-display text-2xl mb-2">Request Sent!</h4>
                    <p className="text-muted-foreground text-sm">We'll be in touch within 24 hours to confirm your appointment.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-condensed text-xs uppercase tracking-wider text-muted-foreground block mb-2">First Name *</label>
                        <input required type="text" className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="font-condensed text-xs uppercase tracking-wider text-muted-foreground block mb-2">Last Name *</label>
                        <input required type="text" className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-condensed text-xs uppercase tracking-wider text-muted-foreground block mb-2">Email *</label>
                        <input required type="email" className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="font-condensed text-xs uppercase tracking-wider text-muted-foreground block mb-2">Phone *</label>
                        <input required type="tel" className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="font-condensed text-xs uppercase tracking-wider text-muted-foreground block mb-2">Service</label>
                      <select className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors">
                        <option value="">Select a service</option>
                        <option>Custom Tattoo</option>
                        <option>Tattoo Cover-Up</option>
                        <option>Body Piercing</option>
                        <option>Laser Tattoo Removal</option>
                        <option>Laser Hair Removal</option>
                        <option>Consultation Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-condensed text-xs uppercase tracking-wider text-muted-foreground block mb-2">Preferred Date</label>
                      <input type="date" className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="font-condensed text-xs uppercase tracking-wider text-muted-foreground block mb-2">Tell Us About Your Idea</label>
                      <textarea rows={4} className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Describe your tattoo idea, placement, size, style references..." />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-condensed font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimSection>
              <div className="flex gap-4 mb-8">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="font-display text-3xl md:text-4xl mb-2">Business <span className="text-gradient">Hours</span></h2>
                  <p className="text-muted-foreground text-sm">Walk-ins welcome during all operating hours</p>
                </div>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                    <span className="font-condensed text-foreground font-semibold uppercase tracking-wider text-sm">{h.day}</span>
                    <span className="text-muted-foreground text-sm">{h.time}</span>
                  </div>
                ))}
              </div>
            </AnimSection>

            {/* Map */}
            <AnimSection delay={0.2}>
              <iframe
                title="Sick One Tattoos Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.5!2d-115.155!3d36.164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s300+W+Utah+Ave+Las+Vegas+NV!5e0!3m2!1sen!2sus!4v1700000000"
                className="w-full h-full min-h-[400px] border border-border"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </AnimSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
