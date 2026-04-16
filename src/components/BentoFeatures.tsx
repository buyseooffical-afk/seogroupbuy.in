import { motion } from "motion/react";
import { Shield, Zap, Globe, Lock, Cpu, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Real-time Data Sync",
    description: "Our proprietary bridge technology syncs your local queries with premium tool clusters in under 150ms. No more stale data or cached results.",
    icon: Zap,
    className: "lg:col-span-2 lg:row-span-2 bg-blue-600/10 border-blue-500/20",
    visual: (
      <div className="mt-8 relative h-48 w-full bg-black/40 rounded-2xl border border-white/5 overflow-hidden p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Live Stream: Tool Cluster A-12</span>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center justify-between">
              <div className="h-2 w-32 bg-white/5 rounded-full" />
              <div className="h-2 w-12 bg-blue-500/40 rounded-full" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-600/20 to-transparent" />
      </div>
    )
  },
  {
    title: "Military-Grade Security",
    description: "AES-256 encryption for all session data. Your research remains private and secure.",
    icon: Shield,
    className: "bg-zinc-900/50 border-white/5",
  },
  {
    title: "Global Edge Network",
    description: "Access tools from 12+ global regions to bypass geo-restrictions and local limits.",
    icon: Globe,
    className: "bg-zinc-900/50 border-white/5",
  },
  {
    title: "Automated Onboarding",
    description: "Get instant access to all 50+ tools the moment your subscription is confirmed. No manual setup required.",
    icon: Cpu,
    className: "lg:col-span-2 bg-purple-600/10 border-purple-500/20",
    visual: (
      <div className="mt-4 flex gap-4 overflow-hidden">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 shrink-0 flex items-center justify-center font-bold text-zinc-500">
            {i}
          </div>
        ))}
      </div>
    )
  }
];

export function BentoFeatures() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Engineered for <span className="text-blue-500">Performance.</span>
          </h2>
          <p className="text-xl text-zinc-400">
            We didn't just build a group buy service. We built a high-performance 
            infrastructure layer that makes premium tools feel like local software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-[2.5rem] border flex flex-col ${feature.className}`}
            >
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed flex-grow">{feature.description}</p>
              {feature.visual}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
