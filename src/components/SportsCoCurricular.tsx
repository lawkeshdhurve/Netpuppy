import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Medal,
  ArrowRight
} from 'lucide-react';
import { SPORTS_COLLECTION } from '../data/tisData';

interface SportsCoCurricularProps {
  onOpenInquiry: () => void;
}

export const SportsCoCurricular: React.FC<SportsCoCurricularProps> = ({ onOpenInquiry }) => {
  const [filter, setFilter] = useState<'all' | 'olympic' | 'specialized' | 'indoor'>('all');

  const filteredSports = filter === 'all' 
    ? SPORTS_COLLECTION 
    : SPORTS_COLLECTION.filter(s => s.category === filter);

  return (
    <section id="sports" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Athletic Grandeur</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            16+ Olympic Standard <span className="gold-gradient-text">Sports Academies</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From premier equestrian show jumping to precision Olympic shooting, our 22-acre sports infrastructure 
            builds grit, tactical intellect, and sportsmanship under NIS and national-level coaches.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            { id: 'all', label: 'All 16+ Sports' },
            { id: 'specialized', label: 'Equestrian & Precision (Horse Riding / Shooting)' },
            { id: 'olympic', label: 'Olympic Athletics & Courts' },
            { id: 'indoor', label: 'Indoor Arena & Squash' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === item.id
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
              data-cursor="Sport"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Sports Card Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredSports.map((sport) => (
              <motion.div
                key={sport.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-400/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col"
                data-cursor="Sports"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={sport.imageUrl}
                    alt={sport.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-[11px] font-bold text-amber-300">
                    {sport.badge}
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {sport.name}
                    </h3>
                    <div className="mt-2 text-xs text-slate-400 flex items-center gap-1.5">
                      <Medal className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="line-clamp-1">{sport.coach}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      <span className="font-semibold text-slate-300">Facility:</span> {sport.facilities}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Specialized Sports Scholarships Available
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Up to 40% tuition concessions for state and national-level student athletes.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenInquiry}
            className="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg hover:shadow-amber-500/40 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105"
            data-cursor="Apply"
          >
            <span>Inquire for Sports Trials</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
