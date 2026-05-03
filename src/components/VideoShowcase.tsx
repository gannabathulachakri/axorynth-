import React from 'react';
import { motion } from 'motion/react';

const videos = [
  {
    title: "AI Web Development",
    category: "Systems",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    url: "https://assets.mixkit.io/videos/preview/mixkit-software-developer-working-on-his-computer-34354-large.mp4",
    stats: ["Stack: Next.js/AI", "v.2.4.0"],
    link: "https://www.google.com/search?q=what+ai+web+development"
  },
  {
    title: "AI UI/UX Designer",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    url: "https://assets.mixkit.io/videos/preview/mixkit-close-up-of-a-screen-with-computer-code-9243-large.mp4",
    stats: ["Engine: Neural", "UX: 99%"],
    link: "https://www.google.com/search?q=what+is+ai+ui/ux+designer"
  },
  {
    title: "AI Trading MVP Systems",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    url: "https://assets.mixkit.io/videos/preview/mixkit-digital-animation-of-stock-market-prices-31835-large.mp4",
    stats: ["Conf: 99.4%", "Latency: 8ms"],
    link: "https://www.google.com/search?q=what+is+AI+Trading+MVP+Systems"
  },
  {
    title: "AI Automation Tools",
    category: "Efficiency",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    url: "https://assets.mixkit.io/videos/preview/mixkit-server-room-rack-flashing-with-multiple-blue-lights-30043-large.mp4",
    stats: ["Agents: Active", "ROI: 300%"],
    link: "https://www.google.com/search?q=what+is+AI+Automation+Tools"
  },
  {
    title: "AI Agents",
    category: "Scalability",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    url: "https://assets.mixkit.io/videos/preview/mixkit-man-working-on-computer-with-multiple-screens-18239-large.mp4",
    stats: ["Scale: Infinite", "Users: Multi"],
    link: "https://www.google.com/search?q=what+is+AI+Agents"
  },
  {
    title: "AI Server Infrastructure",
    category: "Core",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    url: "https://assets.mixkit.io/videos/preview/mixkit-hand-working-on-a-digital-screen-with-futuristic-graphics-34446-large.mp4",
    stats: ["Uptime: 100%", "Security: Max"],
    link: "https://www.google.com/search?q=AI+Server+Infrastructure"
  }
];

export default function VideoShowcase() {
  return (
    <section id="videos" className="py-24 overflow-hidden bg-black/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-3xl lg:text-5xl font-bold mb-16 tracking-[0.2em] text-center uppercase animate-pulse-glow-cyan"
        >
            NEURAL <span className="text-neon-cyan animate-pulse-glow-cyan">VISION</span> SHOWCASE
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial="initial"
              whileHover="hover"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 30 },
                hover: { 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(0, 242, 255, 0.2)",
                  transition: { duration: 0.4, ease: "easeOut" }
                }
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden glass border-white/5 cursor-pointer"
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                  src={video.image} 
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-120 transition-all duration-1000"
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 opacity-0 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-150 transition-all duration-700"
                >
                    <source src={video.url} type="video/mp4" />
                </video>
              </div>

              {/* Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%),linear-gradient(90deg,rgba(255,0,0,0.1),rgba(0,255,0,0.05),rgba(0,0,255,0.1))] bg-[length:100%_3px,4px_100%]" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 z-10 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Corner Accents - "Real" UI */}
              <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-neon-cyan/30 group-hover:border-neon-cyan group-hover:shadow-[0_0_10px_rgba(0,242,255,0.5)] transition-all" />
              <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-neon-cyan/30 group-hover:border-neon-cyan group-hover:shadow-[0_0_10px_rgba(0,242,255,0.5)] transition-all" />

              {/* Holographic Stats Overlay */}
              <div className="absolute top-10 left-10 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-5 group-hover:translate-x-0">
                {video.stats.map((stat, idx) => (
                  <div key={idx} className="mono text-[8px] text-neon-cyan font-bold mb-1 flex items-center gap-2 drop-shadow-[0_0_3px_#00f2ff]">
                    <span className="w-1 h-1 bg-neon-cyan rounded-full animate-pulse" />
                    {stat}
                  </div>
                ))}
              </div>
              
              {/* Scanning Line Animation */}
              <motion.div 
                initial={{ top: '-10%' }}
                animate={{ top: '110%' }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 h-[100px] bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100"
              />

              <div className="absolute bottom-10 left-10 z-20">
                <motion.div 
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    hover: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="pointer-events-none"
                >
                  <div className="text-[10px] font-bold tracking-[0.4em] text-neon-cyan mb-3 uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_12px_rgba(0,242,255,1)]" />
                      {video.category}
                  </div>
                  <h4 className="text-3xl font-black text-white group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_10px_#00f2ff] transition-all duration-500 leading-tight tracking-tighter uppercase relative">
                    {video.title}
                    <motion.div 
                      variants={{
                        initial: { width: "0%" },
                        hover: { width: "100%" }
                      }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="absolute -bottom-2 left-0 h-0.5 bg-neon-cyan shadow-[0_0_10px_#00f2ff]"
                    />
                  </h4>
                </motion.div>
              </div>
              
              <div className="absolute top-6 right-6 z-30 flex items-center gap-3">
                <motion.a 
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0"
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 25px rgba(0,242,255,0.6)",
                    backgroundColor: "rgba(0,242,255,0.1)"
                  }}
                >
                  <span className="text-[10px] font-bold tracking-widest text-neon-cyan uppercase drop-shadow-[0_0_5px_#00f2ff]">Learn More</span>
                </motion.a>
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 shadow-[0_0_20px_rgba(0,242,255,0.4)] group-hover:shadow-[0_0_40px_rgba(0,242,255,0.8)]">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-neon-cyan border-b-[6px] border-b-transparent ml-1 shadow-[0_0_8px_#00f2ff]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
