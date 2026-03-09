/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Globe, 
  Youtube, 
  Music, 
  BookOpen, 
  Lock, 
  ExternalLink, 
  ChevronRight,
  Code,
  Palette,
  Layers,
  Users,
  Eye,
  Zap,
  Building2,
  ArrowRight,
  Mail,
  Coffee,
  LogIn
} from 'lucide-react';
import { 
  TEAM_MEMBERS, 
  GAMES, 
  MEDIA_LINKS, 
  NOVELS, 
  MERCH_ITEMS, 
  ABOUT_TEXT,
  DESIGN_TOKENS, 
  SONGS,
  SUPPORT_LINK,
  TeamMember,
  Song
} from './constants';

const CybersigilismBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Structured star clusters for a true constellation look
  const stars = React.useMemo(() => {
    const constellationCount = 8;
    const result = [];
    for (let i = 0; i < constellationCount; i++) {
      const centerX = Math.random() * 100;
      const centerY = Math.random() * 100;
      const starCount = Math.floor(Math.random() * 4) + 3;
      
      for (let j = 0; j < starCount; j++) {
        result.push({
          id: `${i}-${j}`,
          constellationId: i,
          x: centerX + (Math.random() - 0.5) * 12,
          y: centerY + (Math.random() - 0.5) * 12,
          size: j === 0 ? 3 : Math.random() * 1.5 + 1, // First star in cluster is a "node"
          brightness: Math.random() * 0.7 + 0.3,
          duration: Math.random() * 5 + 5,
          delay: Math.random() * 5,
        });
      }
    }
    return result;
  }, []);

  // Connect stars within the same constellation
  const paths = React.useMemo(() => {
    const constellationPaths = [];
    const groups: { [key: number]: any[] } = {};
    stars.forEach(star => {
      if (!groups[star.constellationId]) groups[star.constellationId] = [];
      groups[star.constellationId].push(star);
    });

    Object.values(groups).forEach(group => {
      for (let i = 0; i < group.length - 1; i++) {
        constellationPaths.push({
          id: `path-${group[i].id}-${group[i+1].id}`,
          d: `M${group[i].x},${group[i].y} L${group[i+1].x},${group[i+1].y}`,
          brightness: Math.random() * 0.15 + 0.05,
        });
      }
      // Occasionally close the shape
      if (group.length > 2 && Math.random() > 0.5) {
        constellationPaths.push({
          id: `path-close-${group[0].id}`,
          d: `M${group[group.length-1].x},${group[group.length-1].y} L${group[0].x},${group[0].y}`,
          brightness: Math.random() * 0.1 + 0.05,
        });
      }
    });
    return constellationPaths;
  }, [stars]);

  // Ultra-detailed Cybersigilism Paths
  const sigils = [
    // Intricate center-piece sigil
    "M50,2 L52,20 L65,15 L58,25 L80,35 L55,32 L50,60 L45,32 L20,35 L42,25 L35,15 L48,20 Z M50,10 L51,22 L60,20 L55,26 L70,35 L53,32 L50,50 L47,32 L30,35 L45,26 L40,20 L49,22 Z",
    // Sharp flowing side sigil
    "M5,40 Q15,35 20,20 T40,5 Q45,25 60,30 T80,45 Q65,50 60,65 T40,85 Q35,65 20,60 T5,40 M15,40 Q25,37 30,25 T45,15 Q50,30 60,35 T75,45 Q60,48 55,60 T40,75 Q35,60 25,55 T15,40",
    // Geometric blade with inner detail
    "M20,10 L40,5 L60,10 L55,25 L80,30 L55,35 L60,55 L40,50 L20,55 L25,35 L0,30 L25,25 Z M30,18 L40,16 L50,18 L48,28 L65,30 L48,32 L50,45 L40,43 L30,45 L32,32 L15,30 L32,28 Z",
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]">
      {/* Layered Nebula Glows for Depth */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]"
      />
      <div className="absolute inset-0 bg-radial-at-t from-brand-accent/5 via-transparent to-transparent opacity-60" />
      
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
        <defs>
          <filter id="star-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="sigil-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(212,175,55,0.05)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0.05)" />
          </linearGradient>
        </defs>

        {/* Detailed Cybersigilism Elements */}
        {sigils.map((d, i) => (
          <motion.path
            key={`sigil-${i}`}
            d={d}
            fill="url(#sigil-grad)"
            stroke="white"
            strokeWidth="0.015"
            strokeOpacity="0.05"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 0.25, 
              scale: 1,
              x: mousePos.x * (0.003 * (i + 1)),
              y: mousePos.y * (0.003 * (i + 1)),
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut",
              x: { type: "spring", damping: 70, stiffness: 15 },
              y: { type: "spring", damping: 70, stiffness: 15 }
            }}
            style={{ transformOrigin: 'center' }}
          />
        ))}

        {/* Constellation Lines */}
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="white"
            strokeWidth="0.02"
            strokeOpacity="0.3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: path.brightness,
              x: mousePos.x * 0.001,
              y: mousePos.y * 0.001
            }}
            transition={{ 
              pathLength: { duration: 6, ease: "easeInOut" },
              opacity: { duration: 4 },
              x: { type: "spring", damping: 50, stiffness: 30 },
              y: { type: "spring", damping: 50, stiffness: 30 }
            }}
          />
        ))}

        {/* Stars */}
        {stars.map((star) => (
          <motion.circle
            key={star.id}
            cx={star.x}
            cy={star.y}
            r={star.size * 0.06}
            fill="white"
            filter="url(#star-glow)"
            animate={{
              opacity: [star.brightness, star.brightness * 0.2, star.brightness],
              scale: [1, 1.5, 1],
              x: mousePos.x * 0.002,
              y: mousePos.y * 0.002
            }}
            transition={{
              opacity: {
                duration: star.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              },
              scale: {
                duration: star.duration * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              },
              x: { type: "spring", damping: 60, stiffness: 20 },
              y: { type: "spring", damping: 60, stiffness: 20 }
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const ComingSoonCard = () => (
  <div className="min-w-[300px] flex-shrink-0 flex flex-col items-center justify-center glass-card border-dashed border-brand-gold/20 opacity-40 hover:opacity-100 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="w-16 h-16 rounded-full border border-brand-gold/20 flex items-center justify-center mb-4 group-hover:border-brand-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500">
      <Zap size={24} className="text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
    </div>
    <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-brand-gold/40 group-hover:text-brand-gold transition-colors">Coming Soon</span>
  </div>
);

const SongCard: React.FC<{ song: Song }> = ({ song }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="glass-card group relative overflow-hidden min-w-[320px] flex-shrink-0 border-white/5 hover:border-brand-accent/30 transition-all duration-500"
  >
    <div className="aspect-[4/5] overflow-hidden relative">
      <img 
        src={song.image} 
        alt={song.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <div className="space-y-1">
            <span className="text-[8px] font-mono text-brand-accent uppercase tracking-[0.3em]">Featured In</span>
            <p className="text-xs text-white/90 font-medium">{song.featuredIn}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[8px] font-mono text-brand-accent uppercase tracking-[0.3em]">Composition</span>
            <p className="text-xs text-white/90 font-medium">{song.composer}</p>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Music size={12} className="text-brand-accent" />
              <span className="text-[10px] font-mono text-white/60">{song.duration}</span>
            </div>
            <span className="text-[10px] font-mono text-brand-gold/60">{song.license}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-5 bg-black/40 backdrop-blur-sm">
      <h4 className="text-xl font-display text-white tracking-wide">{song.title}</h4>
    </div>
  </motion.div>
);

const TechIcon = ({ Icon, className = "" }: { Icon: any, className?: string, key?: any }) => (
  <div className={`p-2 rounded-lg bg-white/5 border border-white/10 tech-glow hover:border-brand-accent transition-all duration-300 ${className}`}>
    <Icon size={18} className="text-brand-accent" strokeWidth={1.5} />
  </div>
);

const SocialButton = ({ link }: { link: any, key?: any }) => (
  <motion.a
    href={link.url}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300 group"
  >
    <link.icon size={14} className="text-white/60 group-hover:text-brand-accent transition-colors" />
    <span className="text-[10px] uppercase tracking-widest font-mono text-white/40 group-hover:text-white transition-colors">
      {link.platform}
    </span>
  </motion.a>
);

const MemberCard = ({ member }: { member: TeamMember, key?: any }) => {
  const isPrimary = member.tier === 'primary';
  const isSecondary = member.tier === 'secondary';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-card p-6 relative overflow-hidden group w-full h-full border-white/5 hover:border-brand-accent/40 transition-all duration-700 ${
        isPrimary ? 'border-brand-gold/30 hover:border-brand-gold/60' : ''
      } ${isSecondary ? 'border-brand-accent/30 hover:border-brand-accent/60' : ''}`}
    >
      {/* Background Accent */}
      <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[100px] opacity-10 transition-opacity group-hover:opacity-30 ${
        isPrimary ? 'bg-brand-gold' : 'bg-brand-accent'
      }`} />

      <div className="flex flex-col md:flex-row gap-8">
        <div className={`relative shrink-0 ${isPrimary ? 'w-full md:w-56' : 'w-full md:w-40'}`}>
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
          <div className="absolute -inset-1 rounded-xl border border-white/10 group-hover:border-brand-accent/50 transition-all duration-700 pointer-events-none" />
        </div>

        <div className="flex-1 min-w-0 py-2">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.3em] whitespace-nowrap">
                {member.role}
              </span>
              {isPrimary && <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse" />}
            </div>
            <h3 className={`${isPrimary ? 'text-4xl' : 'text-2xl'} font-display text-white tracking-tight group-hover:text-brand-gold transition-colors duration-500`}>
              {member.name}
            </h3>
          </div>

          <p className="text-sm text-white/50 leading-relaxed mb-6 font-light">
            {member.bio}
          </p>

          <div className="flex flex-wrap gap-3">
            {member.links.map((link, i) => (
              <SocialButton key={i} link={link} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GameCard = ({ game }: { game: any, key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card group cursor-pointer overflow-hidden relative aspect-video"
      >
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center">
          <h4 className="text-2xl font-display text-white mb-3">{game.title}</h4>
          <p className="text-sm text-white/70 leading-relaxed">
            {game.description}
          </p>
          <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-brand-accent uppercase tracking-widest">
            <span>Click for details</span>
            <ChevronRight size={12} className={isOpen ? 'rotate-90 transition-transform' : 'transition-transform'} />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="glass-card p-6 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 border-brand-accent/20">
              {Object.entries(game.info).map(([key, value]: [string, any]) => (
                <div key={key} className="space-y-1">
                  <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">{key}</span>
                  <p className="text-sm text-white/80 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MerchCard = ({ item }: { item: any, key?: any }) => (
  <motion.a
    href={item.storeUrl}
    whileHover={{ y: -5 }}
    className="glass-card group block overflow-hidden"
  >
    <div className="aspect-square overflow-hidden relative">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
      <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
        <span className="text-xs font-mono text-brand-gold">{item.price}</span>
      </div>
    </div>
    <div className="p-5 flex justify-between items-center">
      <h4 className="text-lg font-display text-white">{item.name}</h4>
      <ExternalLink size={16} className="text-white/20 group-hover:text-brand-accent transition-colors" />
    </div>
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen pb-20">
      <CybersigilismBackground />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-gold rounded flex items-center justify-center font-display text-2xl text-black font-bold">K</div>
            <div>
              <h1 className="text-lg font-display tracking-widest uppercase">KMCEI</h1>
              <p className="text-[8px] font-mono text-white/40 tracking-[0.4em] -mt-1">PRODUCTIONS</p>
            </div>
          </div>

          <div className="flex gap-8 items-center">
            <button className="text-[10px] uppercase tracking-[0.3em] text-brand-accent">
              KMCEI
            </button>
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors">
              <LogIn size={14} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-32"
        >
              {/* Hero Section */}
              <section className="relative py-32 min-h-[70vh] flex flex-col justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-brand-accent/5 blur-[150px] rounded-full" />
                
                <div className="relative text-center space-y-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <h2 className="text-[12vw] md:text-[14rem] font-display leading-[0.75] tracking-tighter uppercase">KMCEI</h2>
                    <div className="flex items-center justify-center gap-4">
                      <div className="h-[1px] w-12 md:w-24 bg-brand-gold/30" />
                      <h3 className="text-3xl md:text-6xl font-display italic text-brand-gold/80 tracking-[0.2em] uppercase">Productions</h3>
                      <div className="h-[1px] w-12 md:w-24 bg-brand-gold/30" />
                    </div>
                  </motion.div>

                  <div className="max-w-4xl mx-auto space-y-8">
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl md:text-3xl font-display italic font-light text-white/70 leading-relaxed tracking-wide px-4"
                    >
                      "KMCEI Productions is a creative studio dedicated to producing immersive experiences. <span className="text-brand-gold/60">Helping bridge the gap between imagination and intangible limitations.</span>"
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col items-center gap-4 pt-8"
                    >
                      <span className="text-[9px] font-mono text-brand-accent uppercase tracking-[0.5em]">Forging stories into living fabric</span>
                      <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Games Section */}
              <section id="games" className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/4 lg:sticky lg:top-32 space-y-2 lg:border-r lg:border-white/10 lg:pr-8 pb-8 lg:pb-0">
                  <h2 className="text-5xl font-display">Games</h2>
                  <p className="text-sm text-white/40 font-mono uppercase tracking-widest">Interactive Realities</p>
                </div>

                <div className="lg:w-3/4 flex flex-wrap gap-12 justify-center lg:justify-start">
                  {/* To add new games, copy the object structure in constants.ts -> GAMES array */}
                  {GAMES.map((game: any) => (
                    <div key={game.id} className="w-full lg:w-[calc(50%-24px)] min-w-[320px]">
                      <GameCard game={game} />
                    </div>
                  ))}
                  <div className="w-full lg:w-[calc(50%-24px)] min-w-[320px] flex">
                    <ComingSoonCard />
                  </div>
                </div>
              </section>

              {/* About Section */}
              <section id="about" className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/4 lg:sticky lg:top-32 space-y-2 lg:border-r lg:border-white/10 lg:pr-8 pb-8 lg:pb-0">
                  <h2 className="text-5xl font-display">About</h2>
                  <p className="text-sm text-white/40 font-mono uppercase tracking-widest">Our Philosophy</p>
                </div>
                <div className="lg:w-3/4 glass-card p-12 w-full border-brand-accent/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] -mr-32 -mt-32" />
                  
                  <div className="relative space-y-12">
                    <h3 className="text-3xl md:text-5xl font-display italic text-white/80 leading-tight tracking-tight max-w-[90%]">
                      {ABOUT_TEXT}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                      <p className="text-sm text-white/40 leading-relaxed text-justify font-light">
                        KMCEI Productions was founded on the principle that digital media should be more than just consumption—it should be an extension of the human experience. We combine technical rigor with artistic intuition to build worlds that resonate long after the screen goes dark.
                      </p>
                      <p className="text-sm text-white/40 leading-relaxed text-justify font-light">
                        Our studio operates at the intersection of narrative depth and interactive innovation. Every project is a testament to our commitment to bridging the gap between what is imagined and what is possible, pushing the boundaries of intangible limitations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Media Section */}
              <section id="media" className="space-y-12">
                <div className="flex items-end justify-between border-b border-white/10 pb-8">
                  <div className="space-y-2">
                    <h2 className="text-5xl font-display">Media</h2>
                    <p className="text-sm text-white/40 font-mono uppercase tracking-widest">Social & Professional Channels</p>
                  </div>
                </div>
                <div className="lg:w-3/4 flex flex-wrap gap-6">
                  {MEDIA_LINKS.map((link: any, i: number) => (
                    <motion.a
                      key={i}
                      href={link.url}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-card p-8 flex flex-col items-center gap-4 min-w-[160px] group border-white/5 hover:border-brand-accent/30"
                    >
                      <link.icon size={32} className="text-brand-accent group-hover:tech-glow transition-all" />
                      <span className="text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                        {link.platform}
                      </span>
                    </motion.a>
                  ))}
                  <motion.a
                    href={SUPPORT_LINK}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-8 flex flex-col items-center gap-4 min-w-[160px] group border-brand-gold/30 hover:border-brand-gold/60"
                  >
                    <Coffee size={32} className="text-brand-gold group-hover:tech-glow transition-all" />
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-gold/60 group-hover:text-brand-gold transition-colors">
                      Support
                    </span>
                  </motion.a>
                </div>
              </section>

              {/* Novel Section */}
              <section id="novel" className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/4 lg:sticky lg:top-32 space-y-2 lg:border-r lg:border-white/10 lg:pr-8 pb-8 lg:pb-0">
                  <h2 className="text-5xl font-display">Novels and Composition</h2>
                  <p className="text-sm text-white/40 font-mono uppercase tracking-widest">Literary & Sonic Works</p>
                </div>
                <div className="lg:w-3/4 space-y-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {NOVELS.map((novel: any) => (
                      <motion.a
                        key={novel.id}
                        href={novel.link}
                        className="glass-card p-6 flex gap-6 group border-white/5 hover:border-brand-gold/50 transition-colors"
                      >
                        <div className="w-32 shrink-0 aspect-[2/3] overflow-hidden rounded-lg">
                          <img src={novel.image} alt={novel.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-2xl font-display text-white">{novel.title}</h4>
                          <p className="text-sm text-white/50 leading-relaxed">{novel.description}</p>
                          <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-brand-gold uppercase tracking-widest">
                            <span>Read More</span>
                            <ArrowRight size={12} />
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Songs Slider */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Music size={20} className="text-brand-accent" />
                      <h3 className="text-2xl font-display">Original Compositions</h3>
                    </div>
                    <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                      {SONGS.map((song) => (
                        <SongCard key={song.id} song={song} />
                      ))}
                      <ComingSoonCard />
                    </div>
                  </div>
                </div>
              </section>

              {/* Merch Section */}
              <section id="merch" className="space-y-12">
                <div className="flex items-end justify-between border-b border-white/10 pb-8">
                  <div className="space-y-2">
                    <h2 className="text-5xl font-display">Merch</h2>
                    <p className="text-sm text-white/40 font-mono uppercase tracking-widest">Bespoke Artifacts</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                  {MERCH_ITEMS.map((item: any) => (
                    <div key={item.id} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] min-w-[280px]">
                      <MerchCard item={item} />
                    </div>
                  ))}
                  <div className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] min-w-[280px] flex">
                    <ComingSoonCard />
                  </div>
                </div>
              </section>

              {/* Core Team Section */}
              <section id="core-team" className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/4 lg:sticky lg:top-32 space-y-2 lg:border-r lg:border-white/10 lg:pr-8 pb-8 lg:pb-0">
                  <h2 className="text-5xl font-display">Core Team</h2>
                  <p className="text-sm text-white/40 font-mono uppercase tracking-widest">Leadership & Creative Direction</p>
                </div>

                <div className="lg:w-3/4 flex flex-col gap-8">
                  <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-6">
                    {TEAM_MEMBERS.map((member) => (
                      <div key={member.id} className={`w-full ${member.tier === 'primary' ? 'lg:flex-[1.5]' : 'lg:flex-1'}`}>
                        <MemberCard member={member} />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <ComingSoonCard />
                  </div>
                </div>
              </section>
            </motion.div>
        </main>

      {/* Footer */}
      <footer className="mt-40 border-t border-white/5 py-20">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 bg-brand-gold rounded flex items-center justify-center font-display text-xl text-black font-bold">K</div>
              <h1 className="text-sm font-display tracking-widest uppercase">KMCEI PRODUCTIONS</h1>
            </div>
            <p className="text-xs text-white/40">Building immersive digital experiences across game dev, software, and content creation.</p>
          </div>

          <div className="flex gap-12">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono text-brand-accent uppercase tracking-widest">Connect</h4>
              <div className="flex gap-4">
                <TechIcon Icon={Instagram} />
                <TechIcon Icon={Youtube} />
                <TechIcon Icon={Twitter} />
                <TechIcon Icon={Mail} />
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">© 2026 KMCEI PRODUCTIONS</p>
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
