import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    if (isOpen) {
      trackEvent('login_modal_opened');
    }
  }, [isOpen, trackEvent]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative w-full h-full sm:h-auto sm:max-w-md glass-card p-8 sm:rounded-2xl border-brand-accent/20 flex flex-col justify-center"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <div className="text-center space-y-6 mb-12">
              <div className="w-20 h-20 bg-brand-gold rounded-2xl mx-auto flex items-center justify-center font-display text-5xl text-black font-bold shadow-[0_0_40px_rgba(212,175,55,0.4)]">K</div>
              <div className="space-y-2">
                <h2 className="text-4xl font-display tracking-tight">KMCEI Access</h2>
                <p className="text-[10px] text-brand-accent font-mono uppercase tracking-[0.3em]">Intangible Authentication Required</p>
              </div>
            </div>

            <form className="space-y-8" onSubmit={(e) => {
              e.preventDefault();
              trackEvent('login_attempt');
            }}>
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-base focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30 transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Password</label>
                <input 
                  type="password" 
                  placeholder="Enter your password"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-base focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30 transition-all"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-brand-gold text-black font-display text-xl font-bold rounded-xl hover:bg-brand-gold-muted transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)] active:scale-[0.98]"
              >
                Initialize Session
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-white/5 text-center">
              <p className="text-[10px] text-white/20 font-mono uppercase tracking-[0.4em]">
                Restricted to Core Personnel Only
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
