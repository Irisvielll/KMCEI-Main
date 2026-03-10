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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md glass-card p-8 border-brand-accent/20"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <div className="text-center space-y-4 mb-8">
              <div className="w-16 h-16 bg-brand-gold rounded-xl mx-auto flex items-center justify-center font-display text-4xl text-black font-bold shadow-[0_0_30px_rgba(212,175,55,0.3)]">K</div>
              <h2 className="text-3xl font-display tracking-tight">KMCEI Access</h2>
              <p className="text-xs text-white/40 font-mono uppercase tracking-widest">Intangible Authentication Required</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              trackEvent('login_attempt');
            }}>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-brand-accent uppercase tracking-widest ml-1">Identity</label>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-brand-accent uppercase tracking-widest ml-1">Cipher</label>
                <input 
                  type="password" 
                  placeholder="Password"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-brand-gold text-black font-display text-lg font-bold rounded-lg hover:bg-brand-gold-muted transition-colors shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                Initialize Session
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-[10px] text-white/20 font-mono uppercase tracking-widest">
                Restricted to Core Personnel Only
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
