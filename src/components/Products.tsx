import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Activity, Zap, Layers } from 'lucide-react';

const products = [
  {
    name: "WebGen AI",
    tagline: "Build entire sites from prompts",
    status: "PROTOTYPING",
    icon: Sparkles,
    color: "neon-cyan"
  },
  {
    name: "DesignAI",
    tagline: "System-wide UI generators",
    status: "BETA",
    icon: Terminal,
    color: "neon-purple"
  },
  {
    name: "TradePilot MVP",
    tagline: "Intelligent trade signals",
    status: "LIVE ALPHA",
    icon: Activity,
    color: "neon-pink"
  },
  {
    name: "AutoFlow AI",
    tagline: "Deep workflow automation",
    status: "INTERNAL",
    icon: Zap,
    color: "neon-blue"
  },
  {
    name: "SaaSCore",
    tagline: "AI SaaS foundation boilerplate",
    status: "COMING SOON",
    icon: Layers,
    color: "white"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-black relative">
       <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-4">
             <div>
                <h3 className="text-sm font-bold tracking-[0.4em] text-white/30 uppercase mb-4">The MVP Lab</h3>
                <h2 className="text-4xl lg:text-7xl font-bold italic tracking-tighter">AI <span className="text-neon-cyan">Products</span></h2>
             </div>
             <p className="text-white/40 max-w-sm text-sm">Experimental AI units currently in development or live testing at the Axorynth lab.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
             {products.map((p, i) => (
                <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-6 glass-dark rounded-3xl border-white/5 hover:neon-border transition-all group cursor-default"
                >
                   <div className={`w-10 h-10 rounded-xl bg-${p.color}/10 border border-${p.color}/20 flex items-center justify-center text-${p.color} mb-6 group-hover:scale-110 transition-transform`}>
                      <p.icon size={20} />
                   </div>
                   <h4 className="text-xl font-bold mb-1">{p.name}</h4>
                   <p className="text-white/40 text-xs mb-8">{p.tagline}</p>
                   
                   <div className="flex items-center gap-2">
                       <div className="flex gap-1">
                          {[1,2,3].map(j => (
                             <div key={j} className={`w-1 h-1 rounded-full ${p.status === 'COMING SOON' ? 'bg-white/20' : 'bg-neon-cyan/50'}`} />
                          ))}
                       </div>
                       <span className={`text-[8px] font-bold tracking-widest ${p.status === 'COMING SOON' ? 'text-white/20' : 'text-neon-cyan'}`}>{p.status}</span>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
