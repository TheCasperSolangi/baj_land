import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-10 bg-foreground text-background">
        <div className="container text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Terms of <span className="text-primary">Service</span>
          </motion.h1>
          <motion.p
            className="text-background/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Last updated: February 11, 2026
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using BajGo's platform, mobile application, or any related services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. User Accounts</h2>
              <p>You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials and for all activity under your account. You must be at least 18 years old to use BajGo.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Orders & Payments</h2>
              <p>All orders are subject to vendor availability and acceptance. Prices listed on the platform are set by vendors and may change without notice. Payment is due at the time of order. Delivery fees are calculated based on distance and are displayed before checkout.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Vendor Terms</h2>
              <p>Vendors are independent businesses responsible for the quality and accuracy of their products. BajGo serves as a marketplace platform and is not liable for the products or services provided by vendors. Vendors agree to comply with all local regulations.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Delivery</h2>
              <p>Delivery services are provided through our partner Lalamove. Estimated delivery times are approximations and not guaranteed. BajGo is not responsible for delays caused by traffic, weather, or other circumstances beyond our control.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Cancellations & Refunds</h2>
              <p>Orders may be cancelled before the vendor begins preparation. Refund eligibility depends on the circumstances and will be reviewed on a case-by-case basis. Refunds are processed within 5-7 business days to the original payment method.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Prohibited Conduct</h2>
              <p>Users may not use the platform for unlawful purposes, harass vendors or delivery riders, submit false information, attempt to circumvent security measures, or engage in fraudulent activity.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">8. Limitation of Liability</h2>
              <p>BajGo shall not be liable for any indirect, incidental, or consequential damages arising from the use of our platform. Our total liability is limited to the amount paid by you for the specific order in question.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">9. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance. We will notify users of significant changes via email or in-app notification.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">10. Contact</h2>
              <p>For questions regarding these Terms, contact us at <a href="mailto:legal@bajgo.ph" className="text-primary hover:underline">legal@bajgo.ph</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
