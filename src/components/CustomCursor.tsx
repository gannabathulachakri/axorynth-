import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isPointer, setIsPointer] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const mouseSpeed = useMotionValue(0);
  const glowScale = useSpring(useTransform(mouseSpeed, [0, 500], [1, 1.5]), springConfig);

  const addParticle = useCallback((x: number, y: number) => {
    const id = particleIdRef.current++;
    const colors = ['#00f2ff', '#bc13fe', '#ff00bd'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    setParticles(prev => [...prev.slice(-15), { id, x, y, color }]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 800);
  }, []);

  useEffect(() => {
    let lastTime = Date.now();
    let lastX = 0;
    let lastY = 0;
    let particleThrottle = 0;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const now = Date.now();
      const dt = now - lastTime;
      if (dt > 0) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        mouseSpeed.set(dist / dt * 100);

        // Add particles if moving fast enough or periodically
        particleThrottle++;
        if (dist > 5 && particleThrottle % 2 === 0) {
           addParticle(e.clientX, e.clientY);
        }
      }
      
      lastTime = now;
      lastX = e.clientX;
      lastY = e.clientY;

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, mouseSpeed, addParticle]);

  return (
    <>
      {/* Particle Trail */}
      <div className="fixed inset-0 pointer-events-none z-[99] overflow-hidden hidden lg:block">
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{ 
                opacity: 0, 
                scale: 0,
                x: particle.x + (Math.random() - 0.5) * 20,
                y: particle.y + (Math.random() - 0.5) * 20,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-1 h-1 rounded-full blur-[1px]"
              style={{ 
                backgroundColor: particle.color,
                left: 0,
                top: 0,
                translateX: '-50%',
                translateY: '-50%',
                x: particle.x,
                y: particle.y,
                boxShadow: `0 0 10px ${particle.color}`
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Outer Ring Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-cyan z-[100] pointer-events-none mix-blend-screen hidden lg:block origin-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: isPointer ? 1.5 : 1,
        }}
      >
        <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-sm animate-pulse" />
      </motion.div>

      {/* Tiny Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full z-[101] pointer-events-none hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Reactive Glow Core (Responsive & Dynamic) */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] z-[-1] pointer-events-none opacity-40 lg:opacity-60"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: glowScale,
          background: 'radial-gradient(circle, rgba(0,242,255,0.15) 0%, rgba(188,19,254,0.1) 40%, transparent 70%)',
        }}
      />

      {/* Mobile Subtle Aura (Smaller/Softer) */}
      <div className="lg:hidden fixed top-0 left-0 w-[200px] h-[200px] rounded-full blur-[60px] bg-neon-cyan/5 pointer-events-none z-[-1] opacity-30 transform -translate-x-1/2 -translate-y-1/2" 
           style={{ left: '-100%', top: '-100%' }} /> 
    </>
  );
}
