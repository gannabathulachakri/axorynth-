import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  
  const bootLogs = [
    "INITIALIZING AXORYNTH CORE...",
    "LOADING NEURAL NETWORK MODULES...",
    "ESTABLISHING SECURE PROTOCOLS...",
    "BOOTING AI WEB ENGINE...",
    "CALIBRATING TRADING ALGORITHMS...",
    "SYNCHRONIZING UI/UX ASSETS...",
    "AXORYNTH AI SYSTEM ONLINE."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const logTimer = setInterval(() => {
      setLogs(prev => {
        const nextIndex = prev.length;
        if (nextIndex < bootLogs.length) {
          return [...prev, bootLogs[nextIndex]];
        }
        return prev;
      });
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Scanning Line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-[2px] bg-neon-cyan/50 animate-scan shadow-[0_0_20px_rgba(0,242,255,1)]" />
      </div>

      <div className="w-full max-w-md px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-neon-cyan tracking-widest text-center">
            AXORYNTH <span className="text-white">LABS</span>
          </h1>
          <p className="text-[10px] text-white/40 text-center tracking-[0.3em] mt-2">
            SYSTEM BOOTING
          </p>
        </motion.div>

        <div className="mb-4 h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
          <motion.div
            className="h-full bg-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center mb-10">
          <span className="text-[10px] text-neon-cyan tracking-widest">STATUS: BUSY</span>
          <span className="text-xl font-bold text-neon-cyan">{progress}%</span>
        </div>

        <div className="h-32 text-[10px] text-white/50 leading-loose">
          <AnimatePresence>
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-neon-cyan rounded-full animate-pulse" />
                {log}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
