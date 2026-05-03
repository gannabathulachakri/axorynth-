import React from 'react';
import { motion } from 'motion/react';

export default function VisionSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20 brightness-50"
          >
             <source src="https://assets.mixkit.io/videos/preview/mixkit-galaxy-and-planets-in-infinite-space-11539-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-7xl font-bold mb-12 italic tracking-tighter"
            >
              "From one idea to an <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">AI-powered future."</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl lg:text-2xl text-white/70 leading-relaxed font-light"
            >
              Our ambition is to redefine software. Speed isn't just a goal; it's our requirement. We build bold, we build fast, and we build with intelligence at the core. Axorynth is the lab for the next era of business.
            </motion.p>
            
            <div className="flex justify-center mt-16">
               <div className="w-16 h-16 rounded-full glass border-neon-cyan flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full" />
               </div>
            </div>
        </div>
      </div>
    </section>
  );
}
