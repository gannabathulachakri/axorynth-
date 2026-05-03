import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play, Terminal, Database } from 'lucide-react';
import HeroScene from './HeroScene';

function GlitchText({ children }: { children: React.ReactNode }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
      
      const nextGlitch = Math.random() * 5000 + 3000; // random interval
      setTimeout(triggerGlitch, nextGlitch);
    };

    const initialTimeout = setTimeout(triggerGlitch, 3000);
    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <span className={`relative inline-block transition-all duration-300 ${isGlitching ? 'translate-x-[2px] skew-x-3 text-neon-purple shadow-[2px_0_0_#00f2ff,-2px_0_0_#ff00bd]' : ''}`}>
      {children}
      {isGlitching && (
        <>
          <span className="absolute inset-0 text-neon-cyan opacity-70 animate-pulse translate-x-[3px] -z-10">{children}</span>
          <span className="absolute inset-0 text-neon-pink opacity-70 animate-pulse -translate-x-[3px] -z-10">{children}</span>
        </>
      )}
    </span>
  );
}

export default function Hero() {
  const [serverStatus, setServerStatus] = useState<'connecting' | 'online' | 'offline'>('connecting');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'online') setServerStatus('online');
      })
      .catch(() => setServerStatus('offline'));
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Full-screen Video Background with Glowing Border */}
      <div className="absolute inset-0 z-0 p-4 lg:p-8">
        <div className="relative w-full h-full overflow-hidden rounded-[2rem] lg:rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,242,255,0.1)]">
          {/* Animated Glowing Border */}
          <div className="absolute inset-0 z-30 pointer-events-none rounded-[2rem] lg:rounded-[3rem] border-2 border-neon-cyan/20 animate-pulse-glow-cyan shadow-[inset_0_0_30px_rgba(0,242,255,0.2)]" />
          
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40 grayscale brightness-75 contrast-125"
          >
            <source src="https://assets.mixkit.io/videos/preview/mixkit-digital-circuit-board-loop-animation-44246-large.mp4" type="video/mp4" />
          </video>
          
          {/* Multi-layered Gradient Overlay for Depth */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black" />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>
      </div>

      {/* 3D Scene */}
      <HeroScene status={serverStatus} />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center mono text-xs text-neon-cyan mb-4 tracking-[0.4em]"
          >
            <span className={`w-2 h-2 rounded-full mr-2 ${serverStatus === 'online' ? 'bg-neon-cyan animate-pulse' : 'bg-red-500'}`} />
            SYSTEM STATUS: {serverStatus === 'online' ? 'OPTIMIZED [v.2.0.0]' : 'INITIALIZING...'}
          </motion.div>

          <h1 className="text-[64px] lg:text-[88px] font-bold tracking-tighter leading-[0.9] mb-8 uppercase overflow-hidden">
            <GlitchText>
              {"Building".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  whileHover={{ 
                    scale: 1.1,
                    color: "#00f2ff",
                    textShadow: "0 0 15px rgba(0,242,255,0.8)"
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.05, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="inline-block cursor-default animate-glow-cyan"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </GlitchText>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl lg:text-3xl block mb-2 text-white/40 tracking-[0.2em] font-light italic"
            >
              The Next Era of
            </motion.span>
            <GlitchText>
              <span className="neon-text-cyan underline decoration-neon-cyan/30 animate-pulse-glow-cyan">AI Systems</span>
            </GlitchText>
          </h1>

          <p className="max-w-xl mb-8 text-white/50 text-lg leading-relaxed">
            Custom AI Web Dev, Trading MVP Labs, AI Agents, and SaaS Automation built for the next generation of visionary founders.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#core-systems" className="px-8 py-4 glass-card text-white font-bold rounded-none border border-neon-cyan/50 uppercase text-sm tracking-widest hover:bg-neon-cyan/10 transition-all">
              Explore Systems
            </a>
            <a 
              href="https://chakrigannabathulaportfolio-pi.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-4 space-x-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan transition-colors">
                <Play className="w-4 h-4 fill-white" />
              </div>
              <span className="text-sm uppercase tracking-widest font-bold">Founder Vision</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:block relative"
        >
          {/* Animated Terminal */}
          <div className="glass-dark rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="flex items-center gap-2 mb-4 p-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-[10px] text-white/30 ml-4 font-mono">axorynth-core ~/system</span>
            </div>
            <div className="font-mono text-sm leading-relaxed space-y-2">
              <div className="flex gap-2">
                <span className="text-neon-cyan">$</span>
                <span className="text-white">init --ai-studio</span>
              </div>
              <div className="text-white/40">{">"} Initializing Axorynth Lab...</div>
              <div className="text-white/40">{">"} Compiling UI/UX Engine...</div>
              <div className="flex gap-2">
                <span className="text-neon-cyan">$</span>
                <span className="text-white">deploy --next-gen</span>
              </div>
              <div className="text-neon-purple animate-pulse">
                [SYSTEM READY] Axorynth is now building the future.
              </div>
              <div className="mt-4 p-3 bg-neon-cyan/10 border border-neon-cyan/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] font-bold text-neon-cyan uppercase tracking-widest">Active Modules</div>
                  <div className="flex items-center gap-1">
                    <Database size={8} className={serverStatus === 'online' ? 'text-neon-cyan' : 'text-white/20'} />
                    <span className="text-[7px] text-white/40 uppercase tracking-tighter">Back-end Link: {serverStatus}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-white/60">
                   <div className="flex items-center gap-1"><div className="w-1 h-1 bg-neon-cyan rounded-full" /> WebGen AI</div>
                   <div className="flex items-center gap-1"><div className="w-1 h-1 bg-neon-cyan rounded-full" /> TradePilot</div>
                   <div className="flex items-center gap-1"><div className="w-1 h-1 bg-neon-cyan rounded-full" /> AutoFlow</div>
                   <div className="flex items-center gap-1"><div className="w-1 h-1 bg-neon-cyan rounded-full" /> DesignOS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI Mockup */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-12 -right-12 w-48 h-48 glass rounded-3xl p-4 rotate-12 border-neon-purple/30 group hover:rotate-0 transition-transform duration-500"
          >
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-12 rounded-full border border-neon-purple/40 flex items-center justify-center">
                    <Terminal className="text-neon-purple" />
                </div>
                <span className="text-[8px] font-bold tracking-widest text-neon-purple">MVP GEN V1</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] tracking-[0.4em] text-white/30 uppercase">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent" />
      </motion.div>
    </section>
  );
}
