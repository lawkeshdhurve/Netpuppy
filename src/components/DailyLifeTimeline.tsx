import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Coffee, 
  Sparkles, 
  BookOpen, 
  Cpu, 
  Trophy, 
  Compass, 
  Moon,
  Clock
} from 'lucide-react';
import { DAILY_ROUTINE } from '../data/tisData';

export const DailyLifeTimeline: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-5 h-5 text-amber-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-amber-400" />;
      default: return <Moon className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="daily-life" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-slate-950 via-[var(--bg-secondary)] to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Harmonious Gurukul Life</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            A Day in the Life of a <span className="gold-gradient-text">TIS Scholar</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every day is structured to cultivate discipline, intellectual stamina, physical vigor, 
            and inner serenity in the lap of nature.
          </p>
        </div>

        {/* Interactive Timeline Stepper */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Vertical / Grid Timeline Navigation */}
          <div className="lg:col-span-6 space-y-3">
            {DAILY_ROUTINE.map((item, index) => {
              const isSelected = selectedStep === index;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedStep(index)}
                  className={`w-full text-left p-4 rounded-2xl flex items-center justify-between transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400/15 border-amber-400 text-white shadow-lg shadow-amber-500/15 scale-[1.02]'
                      : 'glass-panel border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  }`}
                  data-cursor="Time"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-900 text-amber-400 border border-slate-800'}`}>
                      {getTimelineIcon(item.icon)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-amber-400">{item.time}</div>
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                    </div>
                  </div>

                  <span className={`text-xs px-2.5 py-1 rounded-full ${isSelected ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}>
                    {item.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Highlight Stage */}
          <div className="lg:col-span-6">
            <motion.div
              key={selectedStep}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-panel rounded-3xl p-8 sm:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{DAILY_ROUTINE[selectedStep].time}</span>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  Step {selectedStep + 1} of {DAILY_ROUTINE.length}
                </span>
              </div>

              <div className="mt-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-400/30 mb-4">
                  {getTimelineIcon(DAILY_ROUTINE[selectedStep].icon)}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {DAILY_ROUTINE[selectedStep].title}
                </h3>

                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {DAILY_ROUTINE[selectedStep].description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Category: <strong className="text-amber-300">{DAILY_ROUTINE[selectedStep].category}</strong></span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedStep((prev) => (prev > 0 ? prev - 1 : DAILY_ROUTINE.length - 1))}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-200 cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setSelectedStep((prev) => (prev < DAILY_ROUTINE.length - 1 ? prev + 1 : 0))}
                    className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold hover:bg-yellow-300 cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
