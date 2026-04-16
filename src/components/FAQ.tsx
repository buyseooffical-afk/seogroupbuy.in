import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    question: "How does the group buy system actually work?",
    answer: "We use a proprietary cloud-bridge technology that allows multiple users to access a single premium account simultaneously without triggering security alerts or session conflicts. Each user gets a dedicated, isolated environment that feels exactly like a direct subscription."
  },
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. We use AES-256 encryption for all session data. Your search history, project data, and keyword lists are isolated to your account and are never shared with other users or the tool providers."
  },
  {
    question: "What happens if a tool goes down?",
    answer: "Our automated monitoring system detects downtime within seconds. We maintain redundant accounts for every tool in our ecosystem. If one account fails, our load balancer automatically routes you to a fresh, active session instantly."
  },
  {
    question: "Can I use these tools for client projects?",
    answer: "Yes. All tools provided are full premium versions. You can export reports, download data, and use all features for your client work just as you would with a direct subscription."
  },
  {
    question: "Do you offer a refund if I'm not satisfied?",
    answer: "We offer a 24-hour 'No Questions Asked' refund policy. If you find that the tools don't meet your expectations within the first day, we'll refund your full payment immediately."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      <div className="blue-glow -top-40 -left-40 w-[600px] h-[600px] opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Frequently Asked Questions About <span className="text-blue-500">Group Buy SEO Tools</span></h2>
            <p className="text-xl text-zinc-400">
              Everything you need to know about the world's most advanced SEO group buy platform.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${i}`} className="border border-white/5 bg-white/5 rounded-3xl px-8 overflow-hidden">
                  <AccordionTrigger className="text-left text-lg font-bold py-6 hover:no-underline hover:text-blue-500 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
