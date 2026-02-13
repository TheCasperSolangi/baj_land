import { motion } from "framer-motion";
import { Check, Percent, Zap, Shield, TrendingUp, Coffee, Gift, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Pricing = () => {
  const [monthlySales, setMonthlySales] = useState(50000);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const commission = monthlySales * 0.05;
  const competitors = [
    { name: "Others", commission: "30-40%", color: "text-red-500" },
    { name: "BajGo", commission: "5%", color: "text-primary" },
  ];

  const benefits = [
    { icon: Coffee, text: "No monthly fees, ever" },
    { icon: Gift, text: "Free storefront included" },
    { icon: TrendingUp, text: "Unlimited products" },
    { icon: Shield, text: "Pay only when you sell" },
  ];

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container relative">
        {/* Hero section with animated 5% commission */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Main commission display */}
          <motion.div 
            className="inline-flex flex-col items-center mb-8"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
              <div className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-full shadow-2xl shadow-primary/30 flex items-center gap-4">
                <Percent className="h-8 w-8" />
                <span className="text-5xl font-black">5%</span>
                <span className="text-xl font-semibold">commission</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="text-muted-foreground">That's it. No tiers. No hidden fees.</p>
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Pay only{" "}
            <span className="text-primary relative">
              when you sell
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zero monthly fees. Zero setup costs. Just{" "}
            <span className="font-bold text-foreground">5%</span> on successful orders.
            Keep 95% of every sale.
          </p>
        </motion.div>

    
        {/* Benefits grid */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Competitor comparison */}
        <motion.div 
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-lg font-bold mb-6 text-center">Compare with others</h3>
            <div className="space-y-4">
              {competitors.map((comp, index) => (
                <motion.div 
                  key={comp.name}
                  className="flex items-center justify-between p-4 rounded-xl"
                  style={{ 
                    backgroundColor: comp.name === "BajGo" ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.05)"
                  }}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onHoverStart={() => setHoveredCard(comp.name)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <span className="font-semibold">{comp.name}</span>
                  <div className="flex items-center gap-3">
                    <span className={`font-bold text-lg ${comp.color}`}>
                      {comp.commission}
                    </span>
                    {comp.name === "BajGo" && (
                      <motion.div
                        animate={hoveredCard === "BajGo" ? { rotate: [0, 10, -10, 0] } : {}}
                      >
                        <Check className="h-5 w-5 text-primary" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p 
              className="text-sm text-center mt-6 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-bold text-primary">Save 7-15%</span> on every sale compared to traditional platforms
            </motion.p>
          </div>
        </motion.div>

    
      </div>
    </section>
  );
};

export default Pricing;