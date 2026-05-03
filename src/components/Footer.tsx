import React from 'react';
import { Cpu, Twitter, Github, Linkedin, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-16 border-t border-white/5 flex items-center justify-between px-10 glass-card rounded-none z-50 group">
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan bg-[length:200%_auto] animate-gradient-x opacity-30 group-hover:opacity-100 group-hover:h-[3px] transition-all duration-500 shadow-[0_0_15px_rgba(0,242,255,0.5)] group-hover:shadow-[0_0_25px_rgba(188,19,254,0.8)]" />
      <div className="flex items-center space-x-6">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Founder</span>
          <span className="text-xs font-bold uppercase transition-colors hover:text-neon-cyan cursor-pointer" onClick={() => window.location.href="#founder"}>CHAKRI GANNABATHULA</span>
        </div>
        <div className="w-px h-6 bg-white/10" />
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Location</span>
          <span className="text-xs font-bold uppercase">HYDERABAD // GLOBAL</span>
        </div>
      </div>
      
      <div className="hidden md:flex space-x-4 opacity-50">
        {[Twitter, Github, Linkedin].map((Icon, i) => (
           <div key={i} className="w-6 h-6 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
              <Icon size={12} />
           </div>
        ))}
      </div>
    </footer>
  );
}
