import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "SEO Director at GrowthFlow",
    content: "SEO Hub has completely transformed how our agency operates. We saved over $2,000/month in subscription costs while maintaining 100% of our tool capabilities. The latency is practically non-existent.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Independent Consultant",
    content: "I was skeptical about group buy services until I tried this. The stability is what sets them apart. I've never had a login fail during a client presentation. Truly enterprise-grade.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Content at TechPulse",
    content: "The Jasper and Canva Pro access alone is worth the price. Being able to jump between Ahrefs for research and Jasper for writing in one tab is a massive productivity booster.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="purple-glow -top-40 -right-40 w-[600px] h-[600px] opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">What Customers Say About Our <span className="text-blue-500">Group Buy SEO Tools</span></h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Join 12,000+ SEO professionals, agencies, and freelancers who rely on 
            SEO Hub for their daily marketing operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[3rem] relative group hover:border-blue-500/30 transition-all"
            >
              <Quote className="absolute top-8 right-8 h-12 w-12 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
              
              <div className="flex items-center gap-1 text-yellow-500 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="text-lg text-zinc-300 mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="h-14 w-14 rounded-2xl border-2 border-white/5 bg-white/5 grid place-items-center text-white font-bold"
                  aria-hidden="true"
                >
                  {testimonial.name
                    .split(" ")
                    .slice(0, 2)
                    .map((p) => p[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Real Brand Logos (Simulated with text for reliability) */}
          {["FORBES", "TECHCRUNCH", "WIRED", "THE VERGE", "ENTREPRENEUR"].map(brand => (
            <span key={brand} className="text-2xl font-black tracking-tighter font-display">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
