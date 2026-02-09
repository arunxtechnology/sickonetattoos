import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    text: "Absolutely incredible work! The artists here are true professionals. My sleeve turned out better than I ever imagined. Clean shop, friendly staff, and amazing attention to detail.",
    rating: 5,
  },
  {
    name: "Ashley R.",
    text: "Got my first tattoo here and the experience was perfect. They made me feel so comfortable and the result is stunning. Already planning my next one!",
    rating: 5,
  },
  {
    name: "David L.",
    text: "Best cover-up artist in Vegas, hands down. They turned my old faded tattoo into a masterpiece. The transformation was unreal.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    text: "Professional, clean, and incredibly talented. I've been to many shops in Vegas and Sick One is by far the best. Highly recommend!",
    rating: 5,
  },
  {
    name: "James W.",
    text: "Walk-in friendly and they still deliver top-tier work. Got a piece done same day and the quality was outstanding. Will definitely be back.",
    rating: 5,
  },
  {
    name: "Michelle P.",
    text: "The detail in my portrait tattoo is jaw-dropping. These artists are truly gifted. Worth every penny and then some.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-24 bg-secondary">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-condensed text-primary uppercase tracking-[0.3em] text-sm font-semibold">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-card border border-border p-8 relative shadow-card"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{review.text}"</p>
              <div className="font-condensed text-foreground font-semibold uppercase tracking-wider text-sm">
                {review.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
