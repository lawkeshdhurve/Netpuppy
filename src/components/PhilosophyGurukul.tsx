import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Flame, 
  HeartHandshake, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { GURUKUL_PILLARS } from '../data/tisData';

interface PhilosophyGurukulProps {
  onOpenInquiry: () => void;
}

export const PhilosophyGurukul: React.FC<PhilosophyGurukulProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<string>('mind');

  const getPillarIcon = (iconName: string) => {
    if (iconName === 'Brain') return <Brain className="w-6 h-6" />;
    if (iconName === 'Flame') return <Flame className="w-6 h-6" />;
    return <HeartHandshake className="w-6 h-6" />;
  };

  const currentPillar = GURUKUL_PILLARS.find((p) => p.id === activeTab) || GURUKUL_PILLARS[0];

  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Ancient Philosophy Reimagined</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            The Trinity of <span className="gold-gradient-text">The Modern Gurukul</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Education is not merely preparing for examinations; it is the awakening of consciousness. 
            At TIS, we harmonize ancient Vedic mindfulness with 21st-century technological prowess.
          </p>
        </div>

        {/* Pillar Switcher Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {GURUKUL_PILLARS.map((pillar) => {
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`relative px-6 py-3.5 rounded-2xl flex items-center gap-3 font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-xl shadow-amber-500/30 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-amber-400/40'
                }`}
                data-cursor="Pillar"
              >
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-amber-400/10 text-amber-400'}`}>
                  {getPillarIcon(pillar.icon)}
                </div>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Pillar Card Display */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Content Area */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                    {currentPillar.badge}
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                      {currentPillar.title} — <span className="text-amber-400">{currentPillar.subtitle}</span>
                    </h3>
                    <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      {currentPillar.desc}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {currentPillar.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800"
                      >
                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={onOpenInquiry}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer"
                      data-cursor="Apply"
                    >
                      <span>Experience Gurukul Life</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>8:1 Student-Teacher Gurukul Mentorship</span>
                    </div>
                  </div>
                </div>

                {/* Right Interactive Visual Showcase */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-amber-400/30 shadow-2xl group">
                    <img
                      src={
                        currentPillar.id === 'mind'
                          ? 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
                          : currentPillar.id === 'body'
                          ? 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80'
                          : 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
                      }
                      alt={currentPillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/30">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        {currentPillar.id === 'mind'
                          ? 'Einstein Robotics & AI Suite'
                          : currentPillar.id === 'body'
                          ? 'Horse Riding Academy & Olympic Range'
                          : 'Holistic Pastoral Mentorship'}
                      </div>
                      <div className="text-xs text-slate-300 mt-1">
                        Cultivating agile thinkers, resilient athletes, and compassionate world citizens.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
