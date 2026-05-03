import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black">
      {/* Background Particles Placeholder */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass p-16 lg:p-24 rounded-[4rem] border-neon-cyan/20 text-center max-w-5xl mx-auto relative group overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           
           <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="text-4xl lg:text-8xl font-black mb-10 tracking-tighter"
           >
             READY TO BUILD <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">YOUR FUTURE?</span>
           </motion.h2>

           <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-5 glass border-white/20 font-bold rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-all">
                 Contact Founder
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}
