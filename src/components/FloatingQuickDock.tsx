import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  Compass, 
  ArrowUp, 
  GraduationCap
} from 'lucide-react';

interface FloatingQuickDockProps {
  onOpenInquiry: () => void;
  onOpenTourModal: () => void;
}

export const FloatingQuickDock: React.FC<FloatingQuickDockProps> = ({ 
  onOpenInquiry, 
  onOpenTourModal 
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Action Dock */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 p-1.5 rounded-full bg-slate-950/90 backdrop-blur-2xl border border-amber-500/40 shadow-2xl shadow-amber-500/20"
      >
        {/* WhatsApp Admissions */}
        <a
          href="https://wa.me/919837077777?text=Hello%20TIS%20Admissions%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20admissions%20for%20AY%202026-27."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-all hover:scale-110 shadow-md"
          title="Chat with Admissions on WhatsApp"
          data-cursor="WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        {/* Quick Phone Call */}
        <a
          href="tel:+919837077777"
          className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 hover:border-amber-400 transition-all hover:scale-110 shadow-md"
          title="Call Admissions Desk"
          data-cursor="Call"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* 360 Tour Launcher */}
        <button
          onClick={onOpenTourModal}
          className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 hover:border-amber-400 transition-all hover:scale-110 shadow-md cursor-pointer"
          title="Virtual Campus Tour"
          data-cursor="360°"
        >
          <Compass className="w-4 h-4" />
        </button>

        {/* High-Converting Apply Button */}
        <button
          onClick={onOpenInquiry}
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/30 hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
          data-cursor="Apply"
        >
          <GraduationCap className="w-4 h-4" />
          <span className="hidden sm:inline">Apply 2026-27</span>
        </button>
      </motion.div>

      {/* Back To Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900/90 text-amber-400 border border-amber-500/30 hover:bg-amber-400 hover:text-slate-950 transition-all shadow-lg cursor-pointer"
            title="Scroll to Top"
            data-cursor="Top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
