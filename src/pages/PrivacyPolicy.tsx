import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
            Privacy <span className="text-primary">Policy</span>
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
        <div className="container max-w-3xl prose prose-neutral">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly, including your name, email address, phone number, delivery address, and payment information when you create an account or place an order. We also collect usage data such as browsing activity, device information, and location data to improve our services.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>Your information is used to process and deliver orders, communicate with you about your orders and account, improve our platform and services, personalize your experience, ensure platform safety and prevent fraud, and comply with legal obligations.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Information Sharing</h2>
              <p>We share your information with vendors to fulfill your orders, with Lalamove for delivery purposes, with payment processors to complete transactions, and with service providers who assist our operations. We do not sell your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information at any time through your account settings. You may also opt out of marketing communications and request a copy of your data.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Cookies</h2>
              <p>We use cookies and similar technologies to enhance your browsing experience, analyze traffic, and personalize content. You can manage your cookie preferences through your browser settings.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@bajgo.ph" className="text-primary hover:underline">privacy@bajgo.ph</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
