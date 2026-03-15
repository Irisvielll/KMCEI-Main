/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Music, 
  ExternalLink, 
  Coffee, 
  LogIn,
  Mail
} from 'lucide-react';
import { 
  TEAM_MEMBERS, 
  GAMES, 
  MEDIA_LINKS, 
  NOVELS, 
  MERCH_ITEMS, 
  ABOUT_TEXT,
  SONGS,
  SUPPORT_LINK
} from './constants';
import { 
  CybersigilismBackground, 
  MemberCard, 
  GameCard, 
  MerchCard, 
  SongCard, 
  ComingSoonCard, 
  TechIcon,
  AquariusConstellation,
  LoginModal,
  ErrorBoundary
} from './components';
import { useAnalytics } from './hooks/useAnalytics';

function AppContent() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    trackEvent('app_loaded');
  }, [trackEvent]);

  return (
    <div className="min-h-screen pb-20 selection:bg-brand-accent selection:text-black">
      <CybersigilismBackground />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

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
            <a href="#games" className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-brand-accent transition-colors">
              Games
            </a>
            <a href="#about" className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-brand-accent transition-colors">
              About
            </a>
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
              aria-label="Open login modal"
            >
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
            <AquariusConstellation />
            
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
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col items-center gap-4 pt-8"
                >
                  <span className="text-[9px] font-mono text-brand-accent uppercase tracking-[0.5em]">Forging stories into the living ether</span>
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

            <div className="lg:w-3/4 flex overflow-x-auto pb-8 gap-6 md:gap-12 luxury-scroll snap-x snap-mandatory">
              {GAMES.map((game) => (
                <div key={game.id} className="w-[280px] md:w-[calc(50%-24px)] shrink-0 snap-start">
                  <GameCard game={game} />
                </div>
              ))}
              <div className="w-[280px] md:w-[calc(50%-24px)] flex shrink-0 snap-start">
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
                {ABOUT_TEXT && (
                  <h3 className="text-3xl md:text-5xl font-display italic text-white/80 leading-tight tracking-tight max-w-[90%]">
                    {ABOUT_TEXT}
                  </h3>
                )}
                
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
            <div className="lg:w-3/4 flex overflow-x-auto pb-8 gap-6 luxury-scroll snap-x snap-mandatory">
              {MEDIA_LINKS.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-8 flex flex-col items-center gap-4 min-w-[160px] group border-white/5 hover:border-brand-accent/30 shrink-0 snap-start"
                  aria-label={`Visit our ${link.platform} page`}
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
                aria-label="Support us on Ko-fi"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-brand-gold group-hover:tech-glow transition-all w-full h-full"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gold/60 group-hover:text-brand-gold transition-colors">
                  Ko-fi
                </span>
              </motion.a>
            </div>

            {/* Team Media Section */}
            <div className="space-y-8 pt-12 border-t border-white/5">
              <div className="space-y-2">
                <h3 className="text-3xl font-display">Team Media</h3>
                <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest">Individual Member Channels</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TEAM_MEMBERS.map((member) => (
                  <div key={member.id} className="glass-card p-6 space-y-4 border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-[40px] -mr-16 -mt-16 group-hover:bg-brand-accent/10 transition-colors" />
                    <div className="flex items-center gap-4 relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-accent/20">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-display">{member.name}</h4>
                        <p className="text-[8px] font-mono text-white/40 uppercase tracking-widest">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 relative">
                      {member.links.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href={link.url}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="p-2 bg-white/5 rounded-lg hover:bg-brand-accent/20 transition-colors group/link"
                          aria-label={`${member.name}'s ${link.platform}`}
                        >
                          <link.icon size={16} className="text-white/40 group-hover/link:text-brand-accent transition-colors" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Novel Section */}
          <section id="novel" className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/4 lg:sticky lg:top-32 space-y-2 lg:border-r lg:border-white/10 lg:pr-8 pb-8 lg:pb-0">
              <h2 className="text-5xl font-display">Novels</h2>
              <p className="text-sm text-white/40 font-mono uppercase tracking-widest">Literary Works</p>
            </div>
            <div className="lg:w-3/4 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {NOVELS.map((novel) => (
                  <motion.a
                    key={novel.id}
                    href={novel.link}
                    className="glass-card p-6 flex gap-6 group border-white/5 hover:border-brand-gold/50 transition-colors"
                    aria-label={`Read more about ${novel.title}`}
                  >
                    <div className="w-32 shrink-0 aspect-[2/3] overflow-hidden rounded-lg">
                      <img src={novel.image} alt={novel.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-2xl font-display text-white">{novel.title}</h4>
                      <p className="text-sm text-white/50 leading-relaxed">{novel.description}</p>
                      <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-brand-gold uppercase tracking-widest">
                        <span>Read More</span>
                        <ExternalLink size={12} />
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
                <div className="flex gap-6 overflow-x-auto pb-6 luxury-scroll snap-x snap-mandatory">
                  {SONGS.map((song) => (
                    <div key={song.id} className="shrink-0 snap-start">
                      <SongCard song={song} />
                    </div>
                  ))}
                  <div className="shrink-0 snap-start flex">
                    <ComingSoonCard />
                  </div>
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
            <div className="flex overflow-x-auto pb-8 gap-8 luxury-scroll snap-x snap-mandatory">
              {MERCH_ITEMS.map((item) => (
                <div key={item.id} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] min-w-[280px] shrink-0 snap-start">
                  <MerchCard item={item} />
                </div>
              ))}
              <div className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] min-w-[280px] flex shrink-0 snap-start">
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

            <div className="lg:w-3/4 flex overflow-x-auto pb-8 gap-8 luxury-scroll snap-x snap-mandatory">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.id} className={`shrink-0 snap-start ${member.tier === 'primary' ? 'w-[400px] md:w-[600px]' : 'w-[300px] md:w-[450px]'}`}>
                  <MemberCard member={member} />
                </div>
              ))}
              <div className="shrink-0 snap-start flex">
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

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}
