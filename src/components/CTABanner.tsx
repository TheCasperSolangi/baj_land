import { motion } from "framer-motion";
import { ArrowRight, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CTABanner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    orders: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success message
      setSubmitStatus({
        type: "success",
        message: "We will be in touch with you shortly."
      });

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        orders: "",
        message: ""
      });

    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          className="relative bg-primary rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-foreground/10" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary-foreground/10" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - CTA Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-5">
                Ready to get started?
              </h2>
              <p className="text-primary-foreground/70 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-10">
                Join thousands of happy customers and vendors. Download the app or
                sign up as a vendor today.
              </p>
              
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="rounded-full text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-bold bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105"
                >
                  Download App <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-bold border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  Become a Vendor
                </Button>
              </div>
            </div>

            {/* Right Column - White Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                Get in touch
              </h3>
              
              {/* Status Alert */}
              {submitStatus.type && (
                <Alert 
                  variant={submitStatus.type === "success" ? "default" : "destructive"}
                  className={`mb-6 ${
                    submitStatus.type === "success" 
                      ? "bg-green-50 text-green-800 border-green-200" 
                      : "bg-red-50 text-red-800 border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <AlertDescription>
                    {submitStatus.message}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-700 text-sm font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary/30"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary/30"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Expected Orders */}
                <div className="space-y-2">
                  <Label htmlFor="orders" className="text-gray-700 text-sm font-medium">
                    How many orders do you expect?
                  </Label>
                  <Input
                    type="number"
                    id="orders"
                    name="orders"
                    value={formData.orders}
                    onChange={handleChange}
                    placeholder="e.g., 1000"
                    min="0"
                    className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary/30"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary/30 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white hover:bg-primary/90 font-bold py-5 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              {/* Trust indicator */}
              <p className="text-xs text-gray-500 text-center mt-4">
                We'll get back to you within 24 hours
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;