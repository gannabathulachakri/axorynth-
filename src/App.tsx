import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import VideoShowcase from './components/VideoShowcase';
import Products from './components/Products';
import TradingDashboard from './components/TradingDashboard';
import DesignShowcase from './components/DesignShowcase';
import ServerAutomation from './components/ServerAutomation';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import CustomCursor from './components/CustomCursor';
import NeuralBackground from './components/NeuralBackground';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-neon-cyan selection:text-black">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative bg-grid min-h-screen"
          >
            {/* Immersive UI Overlays */}
            <div className="fixed inset-0 pointer-events-none z-[60] scanline opacity-30" />
            <div className="fixed inset-0 pointer-events-none z-[55] noise" />
            
            {/* Glow Orbs */}
            <div className="fixed -top-20 -left-20 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-neon-purple/15 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* Extreme Background Effects */}
            <NeuralBackground />
            <CustomCursor />
            
            {/* Scroll Progress */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-[2px] bg-neon-cyan z-[100] origin-left shadow-[0_0_10px_rgba(0,242,255,1)]"
              style={{ scaleX }}
            />

            <Navbar />
            
            <Suspense fallback={<div className="h-screen bg-black" />}>
              <Hero />
              <About />
              <Services />
              <VideoShowcase />
              <Products />
              
              {/* Interactive Showcase Sections */}
              <TradingDashboard />
              <DesignShowcase />
              <ServerAutomation />
              
              <Founder />
              <Testimonials />
              <CTASection />
            </Suspense>

            {/* Matrix/Code Rain Overlay (Subtle) */}
            <div className="fixed inset-0 pointer-events-none z-[-1] opacity-5">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] animate-pulse" />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
