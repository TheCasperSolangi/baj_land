import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary">Careers</span> at BajGo
          </motion.h1>
          <motion.p
            className="text-background/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Join our team and help shape the future of local delivery.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-2xl">
          <motion.div
            className="text-center bg-secondary rounded-3xl p-12 md:p-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Briefcase className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              We're Not Currently Hiring
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              We don't have any open positions at the moment, but we're always looking for talented individuals. Check back soon or send us your resume — we'd love to keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@bajgo.ph"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Send your resume to careers@bajgo.ph →
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
