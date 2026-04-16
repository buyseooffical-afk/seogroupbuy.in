import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { motion } from "motion/react";
import { TrendingUp, Users, Globe, ArrowUpRight, Search, Filter } from "lucide-react";

const trafficData = [
  { name: 'Jan', traffic: 4000, keywords: 2400 },
  { name: 'Feb', traffic: 3000, keywords: 1398 },
  { name: 'Mar', traffic: 2000, keywords: 9800 },
  { name: 'Apr', traffic: 2780, keywords: 3908 },
  { name: 'May', traffic: 1890, keywords: 4800 },
  { name: 'Jun', traffic: 2390, keywords: 3800 },
  { name: 'Jul', traffic: 3490, keywords: 4300 },
];

const rankingData = [
  { name: 'W1', pos: 12 },
  { name: 'W2', pos: 8 },
  { name: 'W3', pos: 5 },
  { name: 'W4', pos: 3 },
  { name: 'W5', pos: 2 },
  { name: 'W6', pos: 1 },
];

export function RealDashboard() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display mb-6"
          >
            Professional <span className="text-blue-500">Analytics</span> Dashboard
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Access the same data visualization tools used by Fortune 500 SEO teams. 
            Real-time tracking, keyword monitoring, and competitor analysis.
          </p>
        </div>

        <div className="glass-card rounded-[2.5rem] p-4 md:p-8 border-white/10 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Search className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">Project: seohub-global-audit</h3>
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Last updated: 2 mins ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-zinc-900 bg-white/10 grid place-items-center text-[10px] font-bold text-white"
                    aria-hidden="true"
                  >
                    {`T${i}`}
                  </div>
                ))}
              </div>
              <button className="h-9 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
              </button>
              <button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-bold transition-colors">
                Export PDF
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Organic Traffic", value: "124,502", change: "+12.5%", icon: Users, color: "text-blue-500" },
              { label: "Top 3 Keywords", value: "1,240", change: "+4.2%", icon: TrendingUp, color: "text-green-500" },
              { label: "Domain Authority", value: "78", change: "+2", icon: Globe, color: "text-purple-500" },
              { label: "Backlinks", value: "45.2K", change: "+850", icon: ArrowUpRight, color: "text-orange-500" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-white/5 ${stat.color}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-zinc-500 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold font-display">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white/5 border border-white/5 rounded-2xl p-6 h-[400px]">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold font-display">Traffic Overview</h4>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <div className="h-2 w-2 rounded-full bg-blue-500" /> Organic
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <div className="h-2 w-2 rounded-full bg-purple-500" /> Direct
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData}>
                  <defs>
                    <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #ffffff10', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="traffic" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <h4 className="font-bold font-display mb-6">Keyword Positions</h4>
              <div className="space-y-6">
                {[
                  { keyword: "seo tools", pos: 1, volume: "45K", diff: "Easy" },
                  { keyword: "group buy seo", pos: 2, volume: "12K", diff: "Medium" },
                  { keyword: "ahrefs alternative", pos: 3, volume: "8K", diff: "Hard" },
                  { keyword: "semrush discount", pos: 5, volume: "15K", diff: "Easy" },
                  { keyword: "best seo software", pos: 8, volume: "22K", diff: "Hard" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{item.keyword}</span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Vol: {item.volume} • {item.diff}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 font-bold text-sm">
                        #{item.pos}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <button className="w-full h-10 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold transition-colors">
                  View All 1,240 Keywords
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
