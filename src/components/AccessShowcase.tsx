import { motion } from "motion/react";
import { MousePointer2, Zap, ShieldCheck, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AccessShowcase() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-400 mb-8">
              <Zap className="h-4 w-4" />
              Instant One-Click Access
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-[1.1]">
              <span className="text-blue-500">One-Click</span> Access System
            </h2>
            
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Stop dealing with login issues and constant rechecks. Open your dashboard, click the tool you need, and start working. This one click access setup is built for SEO tools group buy users who want speed without the headache.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: ShieldCheck, title: "Secure Session Bridge", desc: "Your work stays private and your session stays stable." },
                { icon: Globe, title: "Multi-Region Support", desc: "Smooth access from different locations when you need it." },
                { icon: Zap, title: "Fast Loading", desc: "Quick tool open times so audits and research do not slow you down." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 font-bold">
              <Download className="mr-2 h-5 w-5" /> Download Extension
            </Button>
          </motion.div>

          <div className="relative">
            {/* Extension UI Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2.5rem] p-8 border-white/10 shadow-2xl relative z-10"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">S</div>
                  <span className="font-bold text-sm">SEO Hub Extension</span>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              </div>

              <div className="space-y-4">
                {[
                  { name: "Ahrefs", domain: "ahrefs.com" },
                  { name: "SEMrush", domain: "semrush.com" },
                  { name: "Moz Pro", domain: "moz.com" },
                ].map((tool, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between group hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center p-2 shadow-lg">
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`}
                          alt={tool.name}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="font-bold text-sm">{tool.name}</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-8 px-4 rounded-lg text-[10px] font-bold">
                      ONE-CLICK LOGIN
                    </Button>
                  </div>
                ))}
              </div>

              {/* Simulated Mouse Pointer */}
              <motion.div 
                animate={{ 
                  x: [0, 150, 150, 0],
                  y: [0, 50, 100, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 z-20 pointer-events-none"
              >
                <MousePointer2 className="h-6 w-6 text-white fill-black shadow-lg" />
              </motion.div>
            </motion.div>

            {/* Background Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/20 blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
