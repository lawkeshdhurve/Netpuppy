import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Sun, 
  Compass, 
  Phone, 
  GraduationCap, 
  Sparkles,
  TreePine,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenInquiry: () => void;
  onOpenTourModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onOpenTourModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Gurukul', href: '#philosophy' },
    { label: 'Academics & STEM', href: '#academics' },
    { label: 'Olympic Sports', href: '#sports' },
    { label: '360° Campus Tour', href: '#virtual-tour' },
    { label: 'Daily Life', href: '#daily-life' },
    { label: 'Fee Estimator', href: '#fee-estimator' },
    { label: 'Admissions', href: '#admissions' },
  ];

  const getThemeIcon = () => {
    if (theme === 'royal') return <Sparkles className="w-4 h-4 text-amber-400" />;
    if (theme === 'himalayan') return <TreePine className="w-4 h-4 text-emerald-400" />;
    return <Sun className="w-4 h-4 text-amber-600" />;
  };

  const getThemeLabel = () => {
    if (theme === 'royal') return 'Royal Mode';
    if (theme === 'himalayan') return 'Himalayan Mode';
    return 'Light Mode';
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-amber-500/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Crest & Logo */}
        <a href="#" className="flex items-center gap-3 group" data-cursor="TIS Home">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-yellow-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-serif-luxury text-amber-400 font-bold text-lg tracking-wider">TIS</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif-luxury font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-amber-300 transition-colors">
                TULA'S
              </span>
              <span className="font-sans font-light text-xs sm:text-sm tracking-widest text-amber-400 uppercase">
                International
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-amber-400/90 font-medium tracking-wider uppercase">
              The Modern Gurukul • Dehradun
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 text-slate-300 hover:text-amber-400 transition-colors group"
              data-cursor="Navigate"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Animated Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-amber-500/30 text-xs font-medium text-slate-200 transition-all cursor-pointer shadow-sm hover:border-amber-400"
            title={`Current: ${getThemeLabel()} (Click to toggle)`}
            data-cursor="Theme"
          >
            {getThemeIcon()}
            <span className="hidden lg:inline text-xs">{getThemeLabel()}</span>
          </button>

          {/* 360 Tour Quick Button */}
          <button
            onClick={onOpenTourModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold transition-all hover:scale-105 cursor-pointer shadow-sm"
            data-cursor="360°"
          >
            <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span className="hidden md:inline">360° Tour</span>
          </button>

          {/* Primary High-Converting CTA Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenInquiry}
            className="relative px-5 py-2 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 border border-amber-300/40 transition-all flex items-center gap-1.5 cursor-pointer"
            data-cursor="Apply"
          >
            <GraduationCap className="w-4 h-4 text-slate-950" />
            <span>Apply AY 2026-27</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-400 sm:hidden"
            aria-label="Toggle Theme"
          >
            {getThemeIcon()}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900/90 border border-amber-500/40 text-amber-400 hover:text-white transition-colors"
            aria-label="Toggle Mobile Menu"
            data-cursor="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-amber-500/20 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-medium text-slate-200 hover:text-amber-400 border-b border-slate-800/80"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-amber-400/60" />
                  </a>
                ))}
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTourModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 font-semibold text-sm"
                >
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Launch 360° Virtual Campus Tour</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20"
                >
                  <GraduationCap className="w-5 h-5 text-slate-950" />
                  <span>Apply for Admission AY 2026-27</span>
                </button>

                <div className="flex items-center justify-center gap-6 pt-2 text-xs text-slate-400">
                  <a href="tel:+919837077777" className="flex items-center gap-1 hover:text-amber-400">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>+91-98370-77777</span>
                  </a>
                  <span>•</span>
                  <span>Dehradun, Uttarakhand</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
