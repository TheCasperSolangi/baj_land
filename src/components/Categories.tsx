import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingCart, Pill, Gift, Flower2, Shirt } from "lucide-react";

const categories = [
  { icon: UtensilsCrossed, name: "Food & Drinks", count: "2,500+ vendors" },
  { icon: ShoppingCart, name: "Groceries", count: "800+ vendors" },
  { icon: Pill, name: "Pharmacy", count: "300+ vendors" },
  { icon: Gift, name: "Gifts & Parcels", count: "600+ vendors" },
  { icon: Flower2, name: "Flowers", count: "150+ vendors" },
  { icon: Shirt, name: "Fashion", count: "1,200+ vendors" },
];

const Categories = () => {
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
            Shop by <span className="text-primary">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Whatever you're looking for, we've got it covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              className="group cursor-pointer text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                <cat.icon className="h-9 w-9 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-sm mb-1">{cat.name}</h3>
              <p className="text-xs text-muted-foreground">{cat.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
