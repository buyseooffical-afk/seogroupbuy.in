import { motion } from "motion/react";
import { UserPlus, CreditCard, LayoutDashboard, Rocket } from "lucide-react";

const steps = [
  {
    title: "Create Account",
    desc: "Sign up in seconds with Google or email. No complex verification required.",
    icon: UserPlus,
    color: "blue"
  },
  {
    title: "Choose Plan",
    desc: "Select the toolkit that fits your needs. Instant activation upon payment.",
    icon: CreditCard,
    color: "purple"
  },
  {
    title: "Access Portal",
    desc: "Log in to our secure web portal to see your unified tool dashboard.",
    icon: LayoutDashboard,
    color: "blue"
  },
  {
    title: "Start Growing",
    desc: "Launch any tool with one click and start dominating your niche.",
    icon: Rocket,
    color: "green"
  }
];

export function Process() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">How Group Buy <span className="text-blue-500">SEO Tools Work</span></h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Create your account, choose a plan, then open the tools you need from one dashboard. It is simple even if you are new to SEO group buy tools.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-8 inline-block">
                  <div className={`h-24 w-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-blue-500/30 group-hover:bg-blue-600/10`}>
                    <step.icon className={`h-10 w-10 text-blue-500`} />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-display mb-4">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
