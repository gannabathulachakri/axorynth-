import React from 'react';
import { motion } from 'motion/react';
import { Server, Cpu, Database, Network, Workflow } from 'lucide-react';

export default function ServerAutomation() {
  return (
    <section id="core-systems" className="py-32 relative bg-black overflow-hidden">
      {/* Grid Floor */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[linear-gradient(rgba(0,242,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)_scale(2.5)] origin-bottom" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-4xl lg:text-7xl font-bold tracking-tighter"
           >
             Autonomous <span className="text-neon-cyan">Infrastructure</span>
           </motion.h2>
           <p className="text-white/40 mt-4 max-w-xl mx-auto italic font-mono uppercase tracking-[0.2em] text-[10px]">
             AI Agents | API Pipelines | Global Cloud
           </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[400px] flex items-center justify-center">
            {/* Center Node */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-32 h-32 glass rounded-full flex items-center justify-center border-neon-cyan relative z-20"
            >
               <Cpu className="text-neon-cyan" size={48} />
               <div className="absolute inset-0 rounded-full border border-neon-cyan animate-ping opacity-20" />
            </motion.div>

            {/* Orbiting Nodes */}
            {[
              { icon: Server, label: 'Gpu Server' },
              { icon: Database, label: 'Neural DB' },
              { icon: Network, label: 'API Edge' },
              { icon: Workflow, label: 'AutoAgent' }
            ].map((node, i) => (
              <motion.div
                key={i}
                animate={{
                   x: [Math.cos(i * 1.57) * 250, Math.cos(i * 1.57 + 0.1) * 250, Math.cos(i * 1.57) * 250],
                   y: [Math.sin(i * 1.57) * 250, Math.sin(i * 1.57 + 0.1) * 250, Math.sin(i * 1.57) * 250],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute flex flex-col items-center gap-2"
              >
                 <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-white/50 hover:text-neon-cyan hover:border-neon-cyan/50 hover:bg-white/10 transition-all cursor-pointer">
                    <node.icon size={24} />
                 </div>
                 <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">{node.label}</span>
                 
                 {/* Connection lines back to center - simplified with CSS line */}
                 <div className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-neon-cyan/40 to-transparent w-[250px] origin-left -z-10" 
                      style={{ transform: `rotate(${i * 90 + 180}deg)` }} />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
