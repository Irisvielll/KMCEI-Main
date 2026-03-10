import React from 'react';
import { motion } from 'motion/react';
import { TeamMember, SocialLink as SocialLinkType } from '../types';

interface SocialButtonProps {
  link: SocialLinkType;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ link }) => (
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

interface MemberCardProps {
  member: TeamMember;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
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
