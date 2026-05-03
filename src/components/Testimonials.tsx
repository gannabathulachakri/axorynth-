import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Axorynth turned our scaling nightmare into an automated dream in weeks. The AI agents they built are flawless.",
    role: "Fintech Founder",
    accent: "neon-cyan"
  },
  {
    text: "The design language is from the future. It's not just a website; it's a high-tech interface.",
    role: "SaaS Startup Lead",
    accent: "neon-purple"
  },
  {
    text: "Fastest MVP delivery I've ever seen. The attention to detail in the trading signals is incredible.",
    role: "Web3 Architect",
    accent: "neon-pink"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative">
       <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 tracking-widest text-white/30 uppercase text-center italic">TRUSTED BY <span className="text-white">VISIONARIES</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
             {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-10 rounded-[3rem] relative group"
                >
                   <Quote className={`absolute top-6 right-8 text-${t.accent} opacity-20`} size={48} />
                   <p className="text-xl text-white/70 italic leading-relaxed mb-12 relative z-10 group-hover:text-white transition-colors">
                     "{t.text}"
                   </p>
                   <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-${t.accent}`} />
                      <div className="text-sm font-bold tracking-widest uppercase">{t.role}</div>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
