import { motion } from "motion/react";
import { Zap, Shield, Clock, Search, LayoutGrid, List, Settings, LogOut, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const activeTools = [
  { name: "Ahrefs", domain: "ahrefs.com", status: "Active", usage: "45%", limit: "50/day" },
  { name: "SEMrush", domain: "semrush.com", status: "Active", usage: "12%", limit: "Unlimited" },
  { name: "Canva Pro", domain: "canva.com", status: "Active", usage: "88%", limit: "Unlimited" },
  { name: "Grammarly", domain: "grammarly.com", status: "Active", usage: "5%", limit: "Unlimited" },
];

export function MemberDashboard() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display mb-6"
          >
            Your <span className="text-blue-500">Member</span> Dashboard
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A unified interface to manage and access all your premium tools. 
            One-click login, real-time usage tracking, and instant support.
          </p>
        </div>

        <div className="glass-card rounded-[3rem] border-white/10 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Sidebar */}
            <div className="w-full lg:w-64 bg-white/5 border-r border-white/5 p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-12">
                <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white">S</div>
                <span className="font-bold text-lg">SEO Hub</span>
              </div>
              
              <nav className="space-y-2 flex-grow">
                {[
                  { icon: LayoutGrid, label: "All Tools", active: true },
                  { icon: Clock, label: "History", active: false },
                  { icon: Bell, label: "Updates", active: false },
                  { icon: Settings, label: "Settings", active: false },
                ].map((item) => (
                  <button 
                    key={item.label}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${item.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-zinc-500 hover:bg-white/5 hover:text-white'}`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="pt-8 mt-8 border-t border-white/5">
                <div className="flex items-center gap-3 px-4 mb-6">
                  <div className="h-8 w-8 rounded-full bg-white/10 border border-white/10 grid place-items-center text-xs font-bold text-white" aria-hidden="true">
                    JD
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold">John Doe</p>
                    <p className="text-[10px] text-zinc-500">Pro Member</p>
                  </div>
                </div>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-red-400 transition-colors text-sm font-bold">
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                <div>
                  <h3 className="text-2xl font-bold font-display mb-2">Welcome back, John!</h3>
                  <p className="text-zinc-500 text-sm">You have access to 52 premium tools.</p>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="relative flex-grow md:w-64">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                    <input 
                      type="text" 
                      placeholder="Search tools..." 
                      className="w-full h-11 bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                  <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl border-white/10">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeTools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/5 rounded-[2rem] p-6 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-lg">
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`}
                            alt={tool.name}
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{tool.name}</h4>
                          <div className="flex items-center gap-1.5 text-[10px] text-green-500 font-bold uppercase tracking-widest">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            {tool.status}
                          </div>
                        </div>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 h-10 px-6 rounded-xl font-bold shadow-lg shadow-blue-600/20">
                        ACCESS
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                        <span>Daily Usage</span>
                        <span>{tool.usage}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: tool.usage }} />
                      </div>
                      <p className="text-[10px] text-zinc-600">Limit: {tool.limit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-600/40">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">New Tool Added: Ahrefs v2</h4>
                    <p className="text-sm text-zinc-400">Experience 2x faster loading speeds with our new cluster.</p>
                  </div>
                </div>
                <Button className="bg-white text-black hover:bg-zinc-200 h-12 px-8 rounded-xl font-bold">
                  Try It Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
