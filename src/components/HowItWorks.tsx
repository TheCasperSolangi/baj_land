import { motion } from "framer-motion";
import {
  Percent,
  Clock,
  Wallet,
  LayoutDashboard
} from "lucide-react";

const steps = [
  {
    icon: Percent,
    title: "Low 5% Commission",
    description:
      "Keep more profit with our industry-lowest 5% commission on every order.",
  },
  {
    icon: Clock,
    title: "Instant & Scheduled Delivery",
    description:
      "Deliver immediately or schedule orders in advance for maximum convenience.",
  },
  {
    icon: Wallet,
    title: "Auto Payment Transfer",
    description:
      "Earnings are automatically transferred to your account with zero hassle.",
  },
  {
    icon: LayoutDashboard,
    title: "Powerful Vendor Dashboard",
    description:
      "Track orders, revenue, customers, and performance with real-time analytics.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
           Why thousands of vendors  <span className="text-primary">Choose Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Grow faster with lower fees, smarter tools, and reliable delivery
            built for modern businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Clean badge design instead of overflowing number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{index + 1}</span>
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <step.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;