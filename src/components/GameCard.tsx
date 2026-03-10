import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
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
              {Object.entries(game.info).map(([key, value]) => (
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
