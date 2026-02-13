import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import VendorCTA from "@/components/VendorCTA";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
    
      <Testimonials />
      <Pricing />
      <VendorCTA />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
