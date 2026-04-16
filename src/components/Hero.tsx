import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play, Star, Zap, Search, Loader2, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<null | string>(null);

  const simulateSearch = () => {
    if (!searchQuery) return;
    setIsSearching(true);
    setSearchResult(null);
    setTimeout(() => {
      setIsSearching(false);
      setSearchResult(`Access granted for ${searchQuery}. Connecting to premium cluster...`);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-30" />
      <div className="purple-glow bottom-0 right-0 w-[500px] h-[500px] opacity-20" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-20 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-400 mb-8">
              <ShieldCheck className="h-4 w-4" />
              #1 Trusted SEO Group Buy Platform
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display mb-8 leading-[1.1]">
              Unlock Premium Group Buy <br />
              <span className="gradient-text">SEO Tools at 95% Off</span>
            </h1>
            
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-xl">
              Get instant access to Ahrefs, SEMrush, Canva Pro, and 50+ other premium tools 
              starting at just $15/month. No limits, no downtime, just results.
            </p>

            {/* Tool Search / Access Simulation */}
            <div className="relative max-w-md mb-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative flex items-center bg-zinc-900 border border-white/10 rounded-2xl p-2">
                <Search className="ml-3 h-5 w-5 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search for a tool (e.g. Ahrefs)..."
                  className="bg-transparent border-none focus:ring-0 text-sm w-full px-3 text-white placeholder:text-zinc-600 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && simulateSearch()}
                />
                <Button 
                  onClick={simulateSearch}
                  disabled={isSearching}
                  className="bg-blue-600 hover:bg-blue-700 h-10 px-6 rounded-xl font-bold"
                >
                  {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : "Access"}
                </Button>
              </div>
              
              <AnimatePresence>
                {searchResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-4 glass-card p-4 rounded-xl text-sm text-green-400 font-medium flex items-center gap-3 border-green-500/20"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    {searchResult}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="h-14 px-10 text-lg bg-blue-600 hover:bg-blue-700 rounded-full w-full sm:w-auto font-bold">
                Get Instant Access <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white/10 hover:bg-white/5 rounded-full w-full sm:w-auto font-bold">
                View All Tools
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* High Fidelity Member Portal Preview */}
            <div className="glass-card rounded-[2.5rem] p-1 overflow-hidden shadow-2xl border-white/10">
              <div className="bg-zinc-950 rounded-[2.3rem] overflow-hidden aspect-square md:aspect-video relative p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">S</div>
                    <span className="font-bold text-sm tracking-tight">Member Portal</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Live Status</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: "Ahrefs", domain: "ahrefs.com" },
                    { name: "SEMrush", domain: "semrush.com" },
                    { name: "Canva", domain: "canva.com" },
                    { name: "Grammarly", domain: "grammarly.com" },
                    { name: "Jasper", domain: "jasper.ai" },
                    { name: "Moz", domain: "moz.com" },
                  ].map((tool, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center group hover:bg-white/10 transition-colors">
                      <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center p-2 mb-3 shadow-lg">
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`}
                          alt={tool.name}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-xs font-bold mb-3">{tool.name}</p>
                      <button className="w-full py-1.5 bg-blue-600/20 text-blue-400 text-[10px] font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                        ACCESS
                      </button>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-6 rounded-3xl z-20 shadow-2xl border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Savings</p>
                  <p className="text-2xl font-bold font-display text-green-500">$1,450/mo</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-10 glass-card p-6 rounded-3xl z-20 shadow-2xl border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Uptime</p>
                  <p className="text-2xl font-bold font-display text-blue-500">99.9%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
