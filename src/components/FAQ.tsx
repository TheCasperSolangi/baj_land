import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does BajGo delivery work?",
    a: "BajGo partners with Lalamove for all deliveries. Once you place an order, the nearest Lalamove rider picks it up from the vendor and delivers it to your doorstep — usually in under 30 minutes.",
  },
  {
    q: "How can I become a vendor on BajGo?",
    a: "Simply click 'Become a Vendor,' fill out the registration form with your business details, and our team will review your application within 24-48 hours. It's completely free to get started!",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept GCash, Maya, credit/debit cards, bank transfers, and cash on delivery (COD). More payment options are coming soon.",
  },
  {
    q: "Is there a minimum order amount?",
    a: "There's no minimum order amount on BajGo. However, individual vendors may set their own minimums. Delivery fees may vary based on distance.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order is confirmed and a Lalamove rider is assigned, you'll get real-time GPS tracking directly in the BajGo app. You'll also receive SMS and push notifications for status updates.",
  },
  {
    q: "Can I schedule a delivery for later?",
    a: "Yes! BajGo supports scheduled deliveries. You can choose a specific date and time window during checkout and we'll make sure your order arrives right on time.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container max-w-3xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-bold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
