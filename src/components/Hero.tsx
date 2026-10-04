import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Sparkles, 
  Play, 
  ArrowRight, 
  Compass, 
  ShieldCheck, 
  TreePine, 
  GraduationCap, 
  Trophy, 
  Users,
  ChevronDown
} from 'lucide-react';
import { TIS_STATS } from '../data/tisData';

interface HeroProps {
  onOpenInquiry: () => void;
  onOpenTourModal: () => void;
  onOpenVideoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenInquiry, 
  onOpenTourModal, 
  onOpenVideoModal 
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background with Himalayan Atmosphere & Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=80"
          alt="Tula's International School Dehradun Foothills"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.1] transition-transform duration-10000 hover:scale-110"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-slate-950/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent" />
        
        {/* Ambient Animated Glow Orbs */}
        <div className="absolute top-1/4 left-[20%] w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse-subtle pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse-subtle pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Top Floating Prestige Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold shadow-lg shadow-amber-500/10 mb-6"
        >
          <Award className="w-4 h-4 text-amber-400" />
          <span>Ranked #1 Co-Ed Residential Boarding School in Dehradun</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="hidden sm:inline text-slate-300 font-normal">CBSE & Cambridge Pathway</span>
        </motion.div>

        {/* Primary Animated Sanskrit & English Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-3 max-w-4xl"
        >
          <div className="flex items-center justify-center gap-2 text-amber-400 font-serif-luxury tracking-widest text-sm uppercase">
            <Sparkles className="w-4 h-4" />
            <span>The Modern Gurukul</span>
            <Sparkles className="w-4 h-4" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
            Ancient Wisdom.{' '}
            <span className="gold-gradient-text block sm:inline">
              Exponential Future.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed pt-2">
            Set amidst 22 serene Himalayan acres in Dehradun. Where the sacred Guru-Shishya tradition meets 
            Einstein STEM labs, 16+ Olympic sports, and global university gateways for Grades 4 to 12.
          </p>
        </motion.div>

        {/* Action Button Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full max-w-md sm:max-w-none"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenInquiry}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 flex items-center justify-center gap-2 cursor-pointer"
            data-cursor="Apply"
          >
            <GraduationCap className="w-5 h-5 text-slate-950" />
            <span>Apply for Admission AY 2026-27</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenTourModal}
            className="w-full sm:w-auto px-6 py-4 rounded-full font-semibold text-sm sm:text-base text-white bg-slate-900/80 hover:bg-slate-800/90 border border-amber-500/40 backdrop-blur-md shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
            data-cursor="Explore"
          >
            <Compass className="w-5 h-5 text-amber-400" />
            <span>Explore 360° Virtual Campus</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenVideoModal}
            className="w-full sm:w-auto px-5 py-4 rounded-full font-medium text-sm text-slate-300 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-700/60 backdrop-blur-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            data-cursor="Play"
          >
            <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-sm">
              <Play className="w-3.5 h-3.5 fill-slate-950 ml-0.5" />
            </div>
            <span>Watch Campus Film (2 Min)</span>
          </motion.button>
        </motion.div>

        {/* Live Key Highlights & Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-14 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl"
        >
          {TIS_STATS.map((stat, index) => {
            const getIcon = () => {
              if (index === 0) return <TreePine className="w-5 h-5 text-amber-400" />;
              if (index === 1) return <Trophy className="w-5 h-5 text-amber-400" />;
              if (index === 2) return <Users className="w-5 h-5 text-amber-400" />;
              if (index === 3) return <GraduationCap className="w-5 h-5 text-amber-400" />;
              return <ShieldCheck className="w-5 h-5 text-amber-400" />;
            };

            return (
              <div
                key={stat.label}
                className="glass-panel rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center group hover:border-amber-400/50 hover:bg-slate-900/90 transition-all duration-300 shadow-lg"
                data-cursor="Stats"
              >
                <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/20 mb-2 group-hover:scale-110 transition-transform">
                  {getIcon()}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-amber-400">{stat.unit}</span>
                </div>
                <div className="text-xs font-medium text-slate-300 mt-1">{stat.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{stat.subtext}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Smooth Scroll Anchor Prompt */}
        <motion.a
          href="#philosophy"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 flex flex-col items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors text-xs"
          data-cursor="Scroll"
        >
          <span>Discover The Modern Gurukul</span>
          <ChevronDown className="w-4 h-4 text-amber-400" />
        </motion.a>
      </div>
    </section>
  );
};
