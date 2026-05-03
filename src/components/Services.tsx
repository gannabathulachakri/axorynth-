import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Code, Layout, TrendingUp, Cpu, Layers, Server } from 'lucide-react';

const services = [
  {
    title: "AI Web Development",
    description: "High-performance, AI-integrated web systems built for scale and futuristic user experiences.",
    icon: Code,
    color: "cyan"
  },
  {
    title: "AI UI/UX Designer",
    description: "Intelligent interfaces that adapt to user behavior, combined with cutting-edge cyberpunk aesthetics.",
    icon: Layout,
    color: "purple"
  },
  {
    title: "AI Trading MVP Systems",
    description: "Quantitative trading platforms with AI-driven signals and risk management for fintech pioneers.",
    icon: TrendingUp,
    color: "pink"
  },
  {
    title: "AI Automation Tools",
    description: "Server-side pipelines and agents that automate complex workflows, saving thousands of hours.",
    icon: Cpu,
    color: "blue"
  },
  {
    title: "AI SaaS Platforms",
    description: "End-to-end multi-tenant SaaS architectures powered by specialized neural network models.",
    icon: Layers,
    color: "cyan"
  },
  {
    title: "AI Server Infrastructure",
    description: "Robust GPU-accelerated backends designed to handle heavy AI inference and data processing.",
    icon: Server,
    color: "purple"
  }
];

function ServiceCard({ service, i }: { service: any; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      whileHover="hover"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group p-8 glass-dark rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden cursor-pointer shadow-black/80 hover:shadow-2xl"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10"
      >
        <div className="w-14 h-14 rounded-2xl glass mb-6 flex items-center justify-center relative group-hover:bg-white/10 transition-all duration-500 overflow-hidden">
          <motion.div
            variants={{
              hover: { 
                scale: 1.4, 
                rotate: 12,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }
            }}
            className={`text-white transition-all duration-500 
              ${service.color === 'cyan' ? 'group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]' : ''}
              ${service.color === 'purple' ? 'group-hover:text-neon-purple group-hover:drop-shadow-[0_0_8px_rgba(188,19,254,0.8)]' : ''}
              ${service.color === 'pink' ? 'group-hover:text-neon-pink group-hover:drop-shadow-[0_0_8px_rgba(255,0,189,0.8)]' : ''}
              ${service.color === 'blue' ? 'group-hover:text-neon-blue group-hover:drop-shadow-[0_0_8px_rgba(45,125,250,0.8)]' : ''}
            `}
          >
            <service.icon className="w-7 h-7" />
          </motion.div>
          <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
            ${service.color === 'cyan' ? 'bg-neon-cyan/20' : ''}
            ${service.color === 'purple' ? 'bg-neon-purple/20' : ''}
            ${service.color === 'pink' ? 'bg-neon-pink/20' : ''}
            ${service.color === 'blue' ? 'bg-neon-blue/20' : ''}
          `} />
        </div>
        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
        <p className="text-white/40 group-hover:text-white/70 transition-colors mb-8 leading-relaxed">
          {service.description}
        </p>
        
        <button className="text-xs font-bold uppercase tracking-widest text-neon-cyan flex items-center gap-2 group/btn">
          Learn More <div className="w-6 h-[1px] bg-neon-cyan group-hover/btn:w-10 transition-all" />
        </button>
      </div>

      <div className="absolute top-4 right-8 opacity-5 font-mono text-4xl">0{i+1}</div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-7xl font-black mb-6 tracking-tighter uppercase relative z-10 animate-pulse-glow-cyan"
          >
            CORE <span className="text-neon-cyan animate-pulse-glow-cyan hover:italic transition-all cursor-default">SYSTEMS</span>
          </motion.h2>
          {/* Echo Effect */}
          <motion.div 
             animate={{ scale: [1, 1.3], opacity: [0.2, 0] }}
             transition={{ duration: 2.5, repeat: Infinity }}
             className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-12 lg:h-16 text-4xl lg:text-7xl font-black tracking-tighter uppercase text-neon-cyan/20 blur-md select-none pointer-events-none animate-pulse-slow"
          >
            CORE SYSTEMS
          </motion.div>
          <p className="text-white/50 text-lg mono tracking-tighter">
            [STATUS: OPERATIONAL] <br />
            Next-gen AI modules for visionary founders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

