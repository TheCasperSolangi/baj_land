import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: TrendingUp, title: "Boost Your Sales", desc: "Reach thousands of customers in your area." },
  { icon: Globe, title: "Online Storefront", desc: "Get your own digital store page for free." },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated vendor support team always available." },
];

const VendorCTA = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              For Vendors
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-background">
              Grow your business with{" "}
              <span className="text-primary">BajGo</span>
            </h2>
            <p className="text-background/60 text-lg mb-10 max-w-md">
              Join us and let Lalamove handle deliveries while you
              focus on what you do best — selling.
            </p>
            <Button
              size="lg"
              className="rounded-full text-lg px-8 py-6 font-bold shadow-lg shadow-primary/30"
            >
            Go Online <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feat, index) => (
              <motion.div
                key={feat.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <feat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-background">{feat.title}</h3>
                  <p className="text-background/50">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorCTA;
