import React from 'react';
import { motion } from 'motion/react';
import { Shield, FastForward, Zap, Globe } from 'lucide-react';

const cards = [
  {
    title: "Vision",
    description: "To lead the transition to an AI-powered society where creativity knows no bounds.",
    icon: Globe,
    color: "neon-cyan"
  },
  {
    title: "Mission",
    description: "Equipping founders with futuristic AI tools to build, scale, and innovate at light speed.",
    icon: Zap,
    color: "neon-purple"
  },
  {
    title: "Innovation",
    description: "Pushing the boundaries of what's possible with neural networks and automation.",
    icon: Shield,
    color: "neon-pink"
  },
  {
    title: "Speed",
    description: "Turning bold ideas into functional MVPs in record time through AI workflow efficiency.",
    icon: FastForward,
    color: "neon-blue"
  }
];

export default function About() {
  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold mb-6 italic tracking-tighter"
          >
            The <span className="text-neon-cyan">Axorynth</span> Philosophy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 leading-relaxed"
          >
            We don't just build software. We engineer intelligent ecosystems. Axorynth is an AI-first innovation studio dedicated to the new era of founders.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5, 
                rotateY: -5,
                z: 50,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ perspective: 1000 }}
              className="group relative p-8 glass rounded-3xl border-white/5 hover:border-neon-cyan/50 hover:bg-white/10 transition-all duration-500 overflow-hidden cursor-pointer"
            >
                {/* Hologram Scan Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(0,242,255,0.1),transparent)] h-[200%] w-full top-[-100%] group-hover:animate-scan pointer-events-none opacity-0 group-hover:opacity-100" />
                
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-${card.color}/10 border border-${card.color}/30 text-${card.color} group-hover:scale-110 transition-transform`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                {card.description}
              </p>
              
              <div className="absolute bottom-4 right-4 text-[8px] font-mono text-white/10 tracking-[0.2em]">
                BLOCK_{i+100}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
