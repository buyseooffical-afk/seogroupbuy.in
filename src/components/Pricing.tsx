import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, Globe } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    price: "15",
    description: "Perfect for freelancers and small projects.",
    features: [
      "5 Premium SEO Tools", 
      "Instant Access", 
      "99.9% Uptime", 
      "24/7 Live Chat Support", 
      "Secure Web Portal",
      "Daily Usage Limits"
    ],
    button: "Get Started",
    popular: false,
    icon: Globe,
    color: "blue"
  },
  {
    name: "Professional",
    price: "25",
    description: "The complete toolkit for serious marketers.",
    features: [
      "All 50+ SEO Tools Included", 
      "Ahrefs & SEMrush Full Access", 
      "Canva Pro & Grammarly", 
      "Priority Support", 
      "VIP Tool Requests",
      "Unlimited Usage",
      "Browser Extension"
    ],
    button: "Go Pro",
    popular: true,
    icon: Zap,
    color: "blue"
  },
  {
    name: "Agency",
    price: "89",
    description: "Scale your agency with unlimited access.",
    features: [
      "Everything in Pro", 
      "Multi-User Access (5 Seats)", 
      "White-label Dashboard", 
      "Dedicated Account Manager", 
      "Custom Tool Integrations",
      "API Access",
      "SLA Guarantee"
    ],
    button: "Contact Sales",
    popular: false,
    icon: Shield,
    color: "purple"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-black">
      <div className="blue-glow -bottom-20 -right-20 w-[600px] h-[600px] opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Simple, <span className="text-blue-500">Transparent</span> Pricing</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Choose the plan that's right for your business. No hidden fees, cancel anytime. 
              All plans include our 100% uptime guarantee.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass-card p-10 rounded-[3rem] flex flex-col transition-all hover:scale-[1.02] ${plan.popular ? 'border-blue-500/50 ring-1 ring-blue-500/20 shadow-[0_0_40px_-12px_rgba(59,130,246,0.3)]' : 'border-white/5'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <div className={`h-12 w-12 rounded-2xl bg-${plan.color}-500/10 flex items-center justify-center mb-6`}>
                  <plan.icon className={`h-6 w-6 text-${plan.color}-500`} />
                </div>
                <h3 className="text-2xl font-bold font-display mb-2">{plan.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-bold font-display tracking-tighter">${plan.price}</span>
                  <span className="text-zinc-500 font-medium">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-blue-500" />
                    </div>
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className={`h-16 rounded-2xl font-bold text-lg transition-all ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}
              >
                {plan.button}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-500 text-sm">
            Need a custom plan for a larger team? <a href="#" className="text-blue-500 font-bold hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
}
