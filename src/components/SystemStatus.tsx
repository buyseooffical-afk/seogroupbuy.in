import { motion } from "motion/react";
import { CheckCircle2, AlertCircle, Activity, Server, Cpu, Database } from "lucide-react";

const toolsStatus = [
  { name: "Ahrefs", status: "Operational", latency: "120ms", uptime: "99.98%", load: 45 },
  { name: "SEMrush", status: "Operational", latency: "145ms", uptime: "99.95%", load: 62 },
  { name: "Moz Pro", status: "Operational", latency: "98ms", uptime: "99.99%", load: 28 },
  { name: "SpyFu", status: "Operational", latency: "110ms", uptime: "99.97%", load: 35 },
  { name: "Majestic", status: "Operational", latency: "160ms", uptime: "99.92%", load: 55 },
  { name: "Canva Pro", status: "Operational", latency: "45ms", uptime: "99.99%", load: 12 },
];

export function SystemStatus() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              All Systems Operational
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              <span className="text-blue-500">99.9%</span> Uptime Guarantee
            </h2>
            <p className="text-xl text-zinc-400">
              We monitor our global tool clusters 24/7. Our proprietary load-balancing 
              technology ensures you never experience downtime during critical audits.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="glass-card p-4 rounded-2xl text-center min-w-[120px]">
              <p className="text-2xl font-bold font-display">99.99%</p>
              <p className="text-xs text-zinc-500 uppercase">Avg Uptime</p>
            </div>
            <div className="glass-card p-4 rounded-2xl text-center min-w-[120px]">
              <p className="text-2xl font-bold font-display">112ms</p>
              <p className="text-xs text-zinc-500 uppercase">Avg Latency</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsStatus.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-3xl group hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {tool.name[0]}
                  </div>
                  <h3 className="font-bold text-lg">{tool.name}</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-green-500">
                  <CheckCircle2 className="h-4 w-4" />
                  {tool.status}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Response Time</span>
                  <span className="font-mono text-blue-400">{tool.latency}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Uptime (30d)</span>
                  <span className="font-mono text-zinc-300">{tool.uptime}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-600">
                    <span>Server Load</span>
                    <span>{tool.load}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.load}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full rounded-full ${tool.load > 80 ? 'bg-red-500' : tool.load > 50 ? 'bg-yellow-500' : 'bg-blue-500'}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
              <Server className="text-blue-500 h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold mb-2">Global Clusters</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Distributed nodes in US, EU, and Asia to minimize latency for global users.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0">
              <Database className="text-purple-500 h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold mb-2">Redundant Accounts</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Multiple premium accounts per tool to ensure zero "limit reached" errors.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0">
              <Activity className="text-green-500 h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold mb-2">Auto-Healing</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Smart scripts that automatically detect and fix login issues in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
