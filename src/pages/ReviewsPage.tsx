import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Star, Quote, ThumbsUp, MessageCircle, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";

const reviews = [
  { name: "Marcus T.", date: "2 weeks ago", text: "Absolutely incredible work! The artists here are true professionals. My sleeve turned out better than I ever imagined. Clean shop, friendly staff, and amazing attention to detail. I'll be coming back for more.", rating: 5 },
  { name: "Ashley R.", date: "1 month ago", text: "Got my first tattoo here and the experience was perfect. They made me feel so comfortable and the result is stunning. The artist took time to adjust the design until it was exactly right. Already planning my next one!", rating: 5 },
  { name: "David L.", date: "3 weeks ago", text: "Best cover-up artist in Vegas, hands down. They turned my old faded tattoo into a masterpiece. Couldn't be happier with the transformation. The new piece looks incredible and you can't tell there was ever anything underneath.", rating: 5 },
  { name: "Sarah K.", date: "2 months ago", text: "Professional, clean, and incredibly talented. I've been to many shops in Vegas and Sick One is by far the best. The attention to detail is remarkable. Every line is crisp and clean.", rating: 5 },
  { name: "James W.", date: "1 week ago", text: "Walk-in friendly and they still deliver top-tier work. Got a piece done same day and the quality was outstanding. No waiting, no attitude — just great tattoos. Will definitely be back for more.", rating: 5 },
  { name: "Michelle P.", date: "3 months ago", text: "The detail in my portrait tattoo is jaw-dropping. These artists are truly gifted. It looks exactly like the reference photo I brought in. Worth every penny and then some.", rating: 5 },
  { name: "Carlos M.", date: "1 month ago", text: "Just had my second session on my Japanese sleeve and I'm blown away. The color saturation is incredible and the design flows perfectly. This is museum-quality work.", rating: 5 },
  { name: "Jennifer H.", date: "2 months ago", text: "I drove 3 hours to get tattooed here and it was absolutely worth it. The shop is immaculate, the staff is welcoming, and my geometric piece is flawless. These are true artists.", rating: 5 },
  { name: "Ryan D.", date: "4 weeks ago", text: "Got my ears pierced here too and the experience was great. Everything is sterile, professional, and the jewelry selection is top-notch. They really care about doing things right.", rating: 5 },
  { name: "Lisa T.", date: "5 days ago", text: "Third tattoo from Sick One and they keep getting better. The watercolor piece they did for me is absolutely stunning — vibrant colors and beautiful blending. Can't recommend enough.", rating: 5 },
  { name: "Mike S.", date: "2 weeks ago", text: "Had laser removal started on an old tattoo to prep for a cover-up. The staff explained the whole process clearly, the treatment was quick, and I'm already seeing great fading results after two sessions.", rating: 5 },
  { name: "Amanda G.", date: "6 weeks ago", text: "The fine-line work here is next level. My delicate floral piece is so precise and detailed — exactly what I wanted. Such a comfortable, welcoming atmosphere too. 10/10.", rating: 5 },
];

const statsData = [
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: MessageCircle, value: "500+", label: "Total Reviews" },
  { icon: ThumbsUp, value: "98%", label: "Recommend Us" },
  { icon: TrendingUp, value: "#1", label: "Rated in Las Vegas" },
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

const ReviewsPage = () => {
  return (
    <>
      <PageHero title="Client" highlight="Reviews" subtitle="Don't take our word for it — hear what our clients have to say about their Sick One experience." showCta={false} />

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((s, i) => (
              <AnimSection key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-display text-4xl md:text-5xl">{s.value}</div>
                  <div className="font-condensed text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-gradient-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <AnimSection key={i} delay={i * 0.05}>
                <div className="bg-gradient-card border border-border p-8 relative shadow-card h-full hover:border-primary/30 transition-colors">
                  <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-condensed text-foreground font-semibold uppercase tracking-wider text-sm">{review.name}</span>
                    <span className="text-muted-foreground text-xs">{review.date}</span>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">Join Our Happy Clients</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Experience the quality and service that keeps Las Vegas coming back.</p>
          <Link to="/contact" className="inline-block bg-background text-foreground px-8 py-4 font-condensed font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all">
            Book Your Session
          </Link>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
