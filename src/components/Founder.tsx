import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Twitter, Github, Linkedin, Briefcase, Instagram } from 'lucide-react';

export default function Founder() {
  const socials = [
    { icon: Twitter, url: 'https://x.com/chakriisin', label: 'X (Twitter)' },
    { icon: Github, url: 'https://github.com/gannabathulachakri', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/chakrigannabathula/', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/chakri_gannabathula/', label: 'Instagram' },
  ];
  return (
    <section id="founder" className="py-24 relative bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          whileHover={{ rotateY: 5, rotateX: 5 }}
          style={{ perspective: 1000 }}
          className="glass-dark rounded-[3rem] p-12 border-white/5 relative overflow-hidden group transition-all duration-700 cursor-default"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <Briefcase size={200} />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="space-y-4"
               >
                  <h3 className="text-neon-cyan font-mono text-sm tracking-[0.4em] uppercase">The Architect</h3>
                  <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter">Chakri <br /> Gannabathula</h2>
                  <p className="text-xl text-white/60 leading-relaxed max-w-md">
                    A young 20-year-old visionary building futuristic AI systems that bridge the gap between imagination and production.
                  </p>
               </motion.div>

               <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://chakrigannabathulaportfolio-pi.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-neon-cyan transition-colors"
                  >
                     View Portfolio <ExternalLink size={18} />
                  </a>
                  <div className="flex items-center gap-2">
                     {socials.map((social, i) => (
                        <a 
                          key={i} 
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:text-neon-cyan hover:border-neon-cyan/50 transition-all cursor-pointer group"
                        >
                           <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative"
            >
               {/* Founder Photo Silhouette Placeholder */}
               <div className="aspect-[4/5] max-w-sm mx-auto glass rounded-3xl overflow-hidden border-neon-cyan/30 bg-gradient-to-b from-white/5 to-black relative">
                  <img 
                    src="https://i.ibb.co/7dWNsbVK/mine.jpg" 
                    alt="Chakri Gannabathula" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  {/* Floating Bio Tags */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 right-4 glass p-2 rounded-lg text-[10px] border-neon-purple/50 text-neon-purple font-bold"
                  >
                     NEXT-GEN GENIUS
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute bottom-20 left-4 glass p-2 rounded-lg text-[10px] border-neon-cyan/50 text-neon-cyan font-bold"
                  >
                     AI INNOVATOR
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
