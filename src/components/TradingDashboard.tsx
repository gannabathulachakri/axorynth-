import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';

export default function TradingDashboard() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const triggerAnalysis = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setProgress(0);
    
    const duration = 2500;
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        clearInterval(timer);
        setIsProcessing(false);
      }
    }, interval);
  };

  useEffect(() => {
    const autoInterval = setInterval(triggerAnalysis, 8000);
    // Trigger once on mount
    triggerAnalysis();
    return () => clearInterval(autoInterval);
  }, []);

  const chartPoints = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      x: i * 20,
      y: 100 + Math.random() * 50 + Math.sin(i * 0.5) * 30
    }));
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
        
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
           >
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase animate-pulse-glow-cyan">Axorynth <span className="text-neon-cyan animate-pulse-glow-cyan">TradePilot</span></h2>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">
                A futuristic trading engine for founders who want to leverage AI for data-driven decisions. Our MVP demonstrations include live signal analysis and risk modeling.
              </p>
              
              <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-4 p-4 glass rounded-2xl border-neon-cyan/20">
                    <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan text-glow-cyan">
                       <TrendingUp size={20} />
                    </div>
                    <div>
                       <div className="text-sm font-bold">94% Confidence Rate</div>
                       <div className="text-xs text-white/40">AI-driven pattern recognition signals.</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 glass rounded-2xl border-neon-purple/20">
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center text-neon-purple">
                       <ShieldCheck size={20} />
                    </div>
                    <div>
                       <div className="text-sm font-bold">Dynamic Risk Guard</div>
                       <div className="text-xs text-white/40">Auto-calibrating stop-loss algorithms.</div>
                    </div>
                 </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerAnalysis}
                disabled={isProcessing}
                className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all ${
                  isProcessing 
                  ? 'bg-white/5 text-white/40 cursor-not-allowed' 
                  : 'bg-neon-cyan text-black shadow-[0_0_20px_rgba(0,242,255,0.4)]'
                }`}
              >
                <Cpu className={isProcessing ? 'animate-spin' : ''} size={16} />
                {isProcessing ? `AI Processing... ${Math.round(progress)}%` : 'Manual AI Scan'}
              </motion.button>

              <p className="text-[10px] text-white/20 mt-8 font-mono italic">
                DISCLAIMER: For research and MVP demonstration only. Not financial advice.
              </p>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden group"
           >
              {/* Card Overlay for Processing */}
              <AnimatePresence>
                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 glass-dark flex flex-col items-center justify-center gap-6 backdrop-blur-md"
                  >
                    <div className="relative">
                       <motion.div 
                         animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                         className="w-20 h-20 rounded-full border-2 border-dashed border-neon-cyan/40"
                       />
                       <motion.div 
                         animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                         className="absolute inset-0 w-20 h-20 rounded-full border-2 border-dashed border-neon-purple/40"
                       />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Cpu className="text-neon-cyan animate-pulse" size={32} />
                       </div>
                    </div>
                    <div className="text-center">
                       <div className="text-lg font-bold tracking-[0.3em] uppercase text-neon-cyan animate-pulse">AI Processing</div>
                       <div className="text-[10px] mono text-white/40 mt-2">EXECUTING QUANTUM ANALYSIS: {Math.round(progress)}%</div>
                    </div>
                    
                    <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan"
                         initial={{ width: "0%" }}
                         animate={{ width: `${progress}%` }}
                       />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex justify-between items-center mb-10">
                 <div className="flex items-center gap-3 font-mono text-xs">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                    BTC/USDT <span className="text-neon-cyan">+4.2%</span>
                 </div>
                 <div className="flex gap-2">
                    <div className="px-2 py-1 bg-white/5 rounded text-[10px] font-bold">1H</div>
                    <div className="px-2 py-1 bg-neon-cyan text-black rounded text-[10px] font-bold">1D</div>
                 </div>
              </div>

              {/* Mock Chart */}
              <div className="h-64 relative mb-8">
                <svg className="w-full h-full">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(0, 242, 255, 0.4)" />
                      <stop offset="100%" stopColor="rgba(0, 242, 255, 0)" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={`M 0 200 ${chartPoints.map((p: any) => `L ${p.x} ${p.y}`).join(' ')} L ${chartPoints[chartPoints.length - 1].x} 200 Z`}
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                    <motion.polyline
                       fill="none"
                       stroke="rgba(0, 242, 255, 0.8)"
                       strokeWidth="3"
                       points={chartPoints.map(p => `${p.x},${p.y}`).join(' ')}
                       initial={{ pathLength: 0 }}
                       whileInView={{ pathLength: 1 }}
                       transition={{ duration: 2, ease: "easeInOut" }}
                    />
                 {/* AI Thinking Animation in Chart */}
                 <foreignObject
                    x={chartPoints[chartPoints.length-10].x - 40}
                    y={chartPoints[chartPoints.length-10].y - 40}
                    width="100"
                    height="100"
                    className="overflow-visible"
                 >
                    <div className="relative w-full h-full flex items-center justify-center">
                       {/* Pulsing Nodes */}
                       <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute w-12 h-12 rounded-full border border-neon-cyan/40"
                       />
                       <motion.div
                          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute w-20 h-20 rounded-full border border-neon-purple/20"
                       />
                       <div className="w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_10px_rgba(0,242,255,1)]" />
                    </div>
                  </foreignObject>
                 </svg>
                 
              {/* Floating Signal Tooltip */}
                 <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute top-20 right-10 glass-dark p-3 rounded-xl border-neon-cyan/40 shadow-[0_0_20px_rgba(0,242,255,0.2)]"
                 >
                    <AnimatePresence mode="wait">
                      {isProcessing ? (
                        <motion.div
                          key="processing"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <span className="relative flex h-2 w-2">
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-purple opacity-75"></span>
                             <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-purple"></span>
                          </span>
                          <div className="text-[8px] font-bold text-neon-purple tracking-widest uppercase">RECUNSTRUCTING...</div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="ready"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                             <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                             </span>
                             <div className="text-[8px] font-bold text-neon-cyan tracking-widest uppercase animate-glow-cyan">AI Signal Verified</div>
                          </div>
                          <div className="text-xl font-bold animate-glow-cyan">STRONG BUY</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <motion.div 
                   animate={isProcessing ? { scale: [1, 0.98, 1], opacity: [1, 0.7, 1] } : {}}
                   transition={{ duration: 1, repeat: Infinity }}
                   className="bg-neon-cyan/5 p-4 rounded-2xl border border-neon-cyan/10 relative overflow-hidden group"
                 >
                    {isProcessing && (
                      <motion.div 
                        initial={{ left: '-100%' }}
                        animate={{ left: '100%' }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent skew-x-12"
                      />
                    )}
                    <div className="text-[8px] text-white/30 uppercase mb-1">Signal Value</div>
                    <div className="text-xl font-bold flex items-center justify-between">
                      {isProcessing ? 'SCANNING...' : '$42,891'}
                      <TrendingUp size={14} className={isProcessing ? 'animate-pulse text-neon-cyan' : 'text-neon-cyan'} />
                    </div>
                 </motion.div>
                 
                 <motion.div 
                   animate={isProcessing ? { scale: [1, 0.98, 1], opacity: [1, 0.7, 1] } : {}}
                   transition={{ duration: 1.2, repeat: Infinity }}
                   className="bg-neon-purple/5 p-4 rounded-2xl border border-neon-purple/10 relative overflow-hidden group"
                 >
                    {isProcessing && (
                      <motion.div 
                        initial={{ left: '-100%' }}
                        animate={{ left: '100%' }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.2 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple/10 to-transparent skew-x-12"
                      />
                    )}
                    <div className="text-[8px] text-white/30 uppercase mb-1">Risk Weight</div>
                    <div className="text-xl font-bold flex items-center justify-between">
                      {isProcessing ? 'ANALYZING...' : 'LOW'}
                      <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-neon-purple animate-ping' : 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]'}`} />
                    </div>
                 </motion.div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
