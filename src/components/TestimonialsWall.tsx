import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  Award, 
  HeartHandshake, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { TESTIMONIALS } from '../data/tisData';

export const TestimonialsWall: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
            <span>Voices of Trust & Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            What Parents & Alumni <span className="gold-gradient-text">Say About TIS</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real stories of intellectual growth, character building, and athletic excellence from our residential community.
          </p>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="mt-14 max-w-4xl mx-auto">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-panel rounded-3xl p-8 sm:p-12 border border-amber-500/30 shadow-2xl relative"
          >
            <Quote className="w-12 h-12 text-amber-400/30 absolute top-6 right-6" />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-amber-400">5.0 Star Parent Review</span>
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-2xl text-white font-medium italic leading-relaxed">
              "{current.quote}"
            </blockquote>

            {/* Student Milestone Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs font-semibold">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Student Milestone: {current.studentAchievement}</span>
            </div>

            {/* Author Profile */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <h4 className="text-base font-bold text-white">{current.name}</h4>
                  <p className="text-xs text-amber-400">{current.role}</p>
                  <p className="text-[11px] text-slate-400">{current.relation} • {current.location}</p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-200 transition-colors cursor-pointer"
                  aria-label="Previous review"
                  data-cursor="Prev"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-amber-400 text-slate-950 font-bold hover:bg-yellow-300 transition-colors cursor-pointer"
                  aria-label="Next review"
                  data-cursor="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Small Review Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeIdx === idx
                  ? 'glass-panel border-amber-400 shadow-lg shadow-amber-500/10 scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 line-clamp-3 italic">
                "{t.quote}"
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{t.name}</div>
                  <div className="text-[10px] text-amber-400">{t.location}</div>
                </div>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
