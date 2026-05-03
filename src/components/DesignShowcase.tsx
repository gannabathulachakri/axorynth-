import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Layout, Monitor, PenTool } from 'lucide-react';

export default function DesignShowcase() {
  return (
    <section id="design" className="py-24 relative overflow-hidden bg-black/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <motion.div
             initial={{ opacity: 0, order: 2 }}
             whileInView={{ opacity: 1, order: 0 }}
             className="relative"
           >
              {/* App Mockup */}
              <div className="relative mx-auto w-64 h-[500px] glass rounded-[3rem] p-4 border-white/10 shadow-2xl">
                 <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-[#111] to-black overflow-hidden relative border border-white/5">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/10 rounded-full" />
                    
                    <div className="p-6 mt-12 space-y-6">
                       <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center">
                          <Smartphone className="text-neon-purple" size={24} />
                       </div>
                       <div className="space-y-2">
                          <div className="h-4 w-3/4 bg-white/10 rounded" />
                          <div className="h-4 w-1/2 bg-white/10 rounded" />
                       </div>
                       <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 bg-white/5 rounded-2xl border border-white/5 animate-pulse" />
                          <div className="h-20 bg-white/5 rounded-2xl border border-white/5 animate-pulse" />
                       </div>
                       <div className="h-32 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 rounded-2xl border border-white/5" />
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-mono text-neon-purple opacity-50">AXORYNTH DESIGN OS</div>
                 </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-20 -left-10 p-4 glass rounded-2xl w-40 z-20 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                  <div className="text-[10px] text-white/40 mb-2 font-mono">COLOR ENGINE</div>
                  <div className="flex gap-2">
                     <div className="w-6 h-6 rounded bg-neon-cyan shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
                     <div className="w-6 h-6 rounded bg-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.5)]" />
                     <div className="w-6 h-6 rounded bg-neon-pink" />
                  </div>
              </motion.div>

              <motion.div
                animate={{ y: [20, 0, 20], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 p-4 glass rounded-2xl w-48 z-20 border-white/10"
              >
                  <div className="text-[10px] text-white/40 mb-2 font-mono uppercase tracking-tighter">Architecture Map</div>
                  <div className="space-y-1">
                     <div className="h-[2px] w-full bg-neon-cyan/20 overflow-hidden">
                       <motion.div 
                          animate={{ x: ['-100%', '100%'] }} 
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="h-full w-1/3 bg-neon-cyan" 
                       />
                     </div>
                     <div className="h-[2px] w-2/3 bg-white/10" />
                     <div className="h-[2px] w-3/4 bg-white/10" />
                  </div>
              </motion.div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-4xl lg:text-7xl font-bold mb-8 tracking-tighter uppercase">Design to <span className="text-neon-purple underline decoration-neon-purple/30">Code</span> Engine</h2>
              <p className="text-white/50 text-xl mb-12 leading-relaxed">
                Axorynth's design process is a fusion of AI precision and human creativity. We bridge the gap between complex wireframes and production-ready code instantly.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-neon-purple">
                       <Layout size={24} />
                    </div>
                    <h5 className="font-bold">Wireframe Intelligence</h5>
                    <p className="text-xs text-white/40">AI analyzes layouts to generate optimal UI structures.</p>
                 </div>
                 <div className="space-y-4">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-neon-pink">
                       <PenTool size={24} />
                    </div>
                    <h5 className="font-bold">Generative Aesthetics</h5>
                    <p className="text-xs text-white/40">Unique color theories and typography systems per brand.</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
