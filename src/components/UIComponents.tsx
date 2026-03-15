import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Zap, Music } from 'lucide-react';
import { MerchItem, Song } from '../types';

interface MerchCardProps {
  item: MerchItem;
}

export const MerchCard: React.FC<MerchCardProps> = ({ item }) => (
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

export const SongCard: React.FC<{ song: Song }> = ({ song }) => (
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

export const ComingSoonCard: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center glass-card border-dashed border-brand-gold/20 opacity-40 hover:opacity-100 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="w-16 h-16 rounded-full border border-brand-gold/20 flex items-center justify-center mb-4 group-hover:border-brand-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500">
      <Zap size={24} className="text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
    </div>
    <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-brand-gold/40 group-hover:text-brand-gold transition-colors">Coming Soon</span>
  </div>
);

interface TechIconProps {
  Icon: any;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ Icon, className = "" }) => (
  <div className={`p-2 rounded-lg bg-white/5 border border-white/10 tech-glow hover:border-brand-accent transition-all duration-300 ${className}`}>
    <Icon size={18} className="text-brand-accent" strokeWidth={1.5} />
  </div>
);

export const AquariusConstellation: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
      <svg 
        viewBox="0 0 1000 1000" 
        className="absolute top-1/2 left-1/2 w-full h-full max-w-7xl animate-constellation-strobe"
      >
        <g stroke="rgba(0, 240, 255, 0.2)" strokeWidth="0.5" fill="none">
          <path d="M400,300 L450,350 L550,320 L650,380 L750,350 L850,400" />
          <path d="M450,350 L420,450 L350,550 L250,600" />
          <path d="M420,450 L500,500 L580,480 L650,550 L720,520" />
          <path d="M500,500 L480,600 L520,700 L600,750" />
        </g>
        <g fill="rgba(0, 240, 255, 0.5)">
          <circle cx="400" cy="300" r="2" />
          <circle cx="450" cy="350" r="3" />
          <circle cx="550" cy="320" r="2" />
          <circle cx="650" cy="380" r="2.5" />
          <circle cx="750" cy="350" r="2" />
          <circle cx="850" cy="400" r="3" />
          <circle cx="420" cy="450" r="2.5" />
          <circle cx="350" cy="550" r="2" />
          <circle cx="250" cy="600" r="2" />
          <circle cx="500" cy="500" r="3" />
          <circle cx="580" cy="480" r="2" />
          <circle cx="650" cy="550" r="2.5" />
          <circle cx="720" cy="520" r="2" />
          <circle cx="480" cy="600" r="2" />
          <circle cx="520" cy="700" r="2.5" />
          <circle cx="600" cy="750" r="2" />
        </g>
      </svg>
    </div>
  );
};
