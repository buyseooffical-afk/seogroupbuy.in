import { motion } from "motion/react";
import { Search, ExternalLink, Plus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const toolCategories = [
  {
    name: "Premium SEO Tools",
    tools: [
      { name: "Ahrefs", desc: "Backlink & Keyword Research", domain: "ahrefs.com", color: "from-orange-500 to-red-500" },
      { name: "SEMrush", desc: "Full Marketing Toolkit", domain: "semrush.com", color: "from-orange-400 to-orange-600" },
      { name: "Moz Pro", desc: "Domain Authority & SEO", domain: "moz.com", color: "from-blue-400 to-blue-600" },
      { name: "SpyFu", desc: "Competitor Analysis", domain: "spyfu.com", color: "from-green-400 to-green-600" },
      { name: "Majestic", desc: "Link Intelligence", domain: "majestic.com", color: "from-red-400 to-red-600" },
      { name: "Surfer SEO", desc: "Content Optimization", domain: "surferseo.com", color: "from-pink-500 to-rose-500" },
    ]
  },
  {
    name: "Content & Writing",
    tools: [
      { name: "Jasper AI", desc: "AI Copywriting Tool", domain: "jasper.ai", color: "from-purple-500 to-pink-500" },
      { name: "Grammarly", desc: "Writing Assistant", domain: "grammarly.com", color: "from-green-400 to-teal-500" },
      { name: "Quillbot", desc: "Paraphrasing Tool", domain: "quillbot.com", color: "from-emerald-400 to-green-600" },
      { name: "Copy.ai", desc: "AI Marketing Copy", domain: "copy.ai", color: "from-blue-600 to-cyan-600" },
    ]
  },
  {
    name: "Design & Creative",
    tools: [
      { name: "Canva Pro", desc: "Graphic Design Platform", domain: "canva.com", color: "from-cyan-400 to-blue-500" },
      { name: "Envato Elements", desc: "Digital Assets Library", domain: "elements.envato.com", color: "from-green-500 to-emerald-600" },
      { name: "Adobe Stock", desc: "Premium Stock Photos", domain: "stock.adobe.com", color: "from-red-500 to-rose-600" },
      { name: "Crello", desc: "Visual Content Creator", domain: "crello.com", color: "from-blue-500 to-indigo-600" },
    ]
  }
];

export function ToolGrid() {
  return (
    <section id="tools" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Premium Group Buy <span className="text-blue-500">SEO Tools Collection</span>
            </h2>
            <p className="text-xl text-zinc-400">
              Pick the tools you actually use for SEO. Keyword research, backlinks, audits, writing, and design all in one place. This SEO tools group buy helps freelancers and agencies keep costs low and productivity high.
            </p>
          </div>
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search for a tool..." 
              className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        <div className="space-y-20">
          {toolCategories.map((category, catIdx) => (
            <div key={category.name}>
              <h3 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-4">
                {category.name}
                <div className="h-px bg-white/5 flex-grow" />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 rounded-3xl group hover:border-blue-500/30 transition-all cursor-pointer relative overflow-hidden"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center p-2 shadow-lg group-hover:scale-110 transition-transform">
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`}
                          alt={tool.name}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-lg group-hover:text-blue-400 transition-colors">{tool.name}</h4>
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        </div>
                        <p className="text-sm text-zinc-500">{tool.desc}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Zap className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-card p-12 rounded-[3rem] text-center relative overflow-hidden">
          <div className="blue-glow -top-20 -right-20 w-64 h-64 opacity-20" />
          <h3 className="text-3xl font-bold font-display mb-4">Need a Specific Tool?</h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            If your favorite tool is not listed, tell us. We review requests weekly and add the most needed SEO and marketing tools as soon as seats are available.
          </p>
          <Button size="lg" className="h-14 px-10 rounded-full bg-blue-600 hover:bg-blue-700 font-bold">
            <Plus className="mr-2 h-5 w-5" /> Request a New Tool
          </Button>
        </div>
      </div>
    </section>
  );
}
