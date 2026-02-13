import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Zap, Globe, Users, Package, TrendingUp } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <span className="text-primary">BajGo</span>
          </motion.h1>
          <motion.p
            className="text-background/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            We're building the future of local commerce — connecting vendors and customers through fast, reliable delivery.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                BajGo was born out of a simple observation: local vendors have incredible products, but reaching customers beyond their immediate neighborhood was nearly impossible. Meanwhile, customers were stuck with limited options and slow deliveries.
              </p>
              <p>
                Founded in 2025, we set out to bridge this gap. By partnering with Lalamove — one of Asia's most trusted delivery networks — we created a platform where any vendor, from a home-based baker to a neighborhood pharmacy, can reach thousands of customers with lightning-fast delivery.
              </p>
              <p>
                What started as a small pilot in Manila has grown into a thriving marketplace serving communities across the metro. Every day, we're helping local businesses grow while making life more convenient for the people they serve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-secondary">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
              To empower every local vendor to thrive in the digital economy and deliver happiness to every doorstep.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Customer First", desc: "Every decision starts with how it impacts the people who use our platform." },
                { icon: Zap, title: "Speed Matters", desc: "We believe great experiences are built on reliability and speed." },
                { icon: Globe, title: "Local Impact", desc: "We strengthen communities by empowering local businesses to grow." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-card rounded-2xl p-8 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
              Our <span className="text-primary">Impact</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: "50K+", label: "Happy Customers" },
                { icon: Package, value: "200K+", label: "Orders Delivered" },
                { icon: TrendingUp, value: "10K+", label: "Active Vendors" },
                { icon: Globe, value: "15+", label: "Cities Covered" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
