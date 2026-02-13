import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Food Vendor, Quezon City",
    text: "BajGo tripled my daily orders within the first month. The Lalamove integration is seamless — my customers get their food hot and fresh every time!",
    rating: 5,
  },
  {
    name: "Carlos Reyes",
    role: "Customer, Makati",
    text: "I use BajGo for everything — groceries, midnight cravings, even sending gifts. The delivery is incredibly fast and reliable.",
    rating: 5,
  },
  {
    name: "Angela Cruz",
    role: "Flower Shop Owner, Pasig",
    text: "Setting up my shop on BajGo was so easy. Their vendor support is amazing and the analytics help me understand my customers better.",
    rating: 5,
  },
  {
    name: "James Tan",
    role: "Customer, Taguig",
    text: "The app is super intuitive. I love how I can track my delivery in real-time. Best delivery platform in the metro!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Loved by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            See what vendors and customers are saying about BajGo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
