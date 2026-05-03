import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // navLinks removed for simplicity

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 border-b border-white/[0.08] px-10 flex items-center',
        isScrolled 
          ? 'bg-black/60 backdrop-blur-xl' 
          : 'bg-white/[0.03] backdrop-blur-[16px]'
      )}
    >
      <div className="w-full flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-neon-cyan rounded-sm rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg] duration-500">
            <div className="w-4 h-4 bg-black rounded-sm" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">AXORYNTH</span>
        </a>

        {/* Desktop Links - Removed for simplicity */}
        <div className="hidden lg:flex items-center space-x-8 text-sm uppercase tracking-widest font-semibold text-gray-400">
        </div>

        <div className="hidden lg:block">
          <a href="#contact" className="px-6 py-2 bg-white text-black font-bold uppercase text-xs tracking-tighter hover:bg-neon-cyan transition-colors">
            Build With AI
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg glass text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 bg-white text-black text-center font-bold uppercase text-xs tracking-tighter hover:bg-neon-cyan transition-colors">
                Build With AI
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
