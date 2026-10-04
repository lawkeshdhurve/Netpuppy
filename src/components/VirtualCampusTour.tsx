import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  MapPin, 
  Check, 
  Maximize2, 
  Sparkles, 
  Eye
} from 'lucide-react';
import { CAMPUS_LOCATIONS } from '../data/tisData';
import type { CampusLocation } from '../data/tisData';

interface VirtualCampusTourProps {
  onOpenTourModal: () => void;
}

export const VirtualCampusTour: React.FC<VirtualCampusTourProps> = ({ onOpenTourModal }) => {
  const [selectedLocation, setSelectedLocation] = useState<CampusLocation>(CAMPUS_LOCATIONS[0]);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section id="virtual-tour" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive 22-Acre Himalayan Campus</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              360° Virtual <span className="gold-gradient-text">Campus Explorer</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
              Nestled at Dhoolkot, Dehradun in the pristine foothills of the Himalayas. Click across our world-class infrastructure.
            </p>
          </div>

          <button
            onClick={onOpenTourModal}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 hover:text-white hover:bg-amber-500 hover:border-amber-400 font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 cursor-pointer"
            data-cursor="360°"
          >
            <Maximize2 className="w-4 h-4" />
            <span>Launch Fullscreen 360° Walkthrough</span>
          </button>
        </div>

        {/* Location Selector Tabs */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-3 scrollbar-thin">
          {CAMPUS_LOCATIONS.map((loc) => {
            const isSelected = selectedLocation.id === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => {
                  setSelectedLocation(loc);
                  setActiveHotspot(null);
                }}
                className={`px-4 py-2.5 rounded-xl whitespace-nowrap text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-800'
                }`}
                data-cursor="Location"
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-amber-400'}`} />
                <span>{loc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Arena with Interactive Hotspots */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden aspect-[16/10] border border-amber-500/30 shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedLocation.id}
                src={selectedLocation.imageUrl}
                alt={selectedLocation.name}
                initial={{ opacity: 0.4, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.4 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

            {/* Interactive 360 Hotspots */}
            <div className="absolute inset-0 pointer-events-auto">
              {/* Hotspot 1 */}
              <button
                onClick={() => setActiveHotspot(activeHotspot === 1 ? null : 1)}
                className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 group/spot cursor-pointer"
                title="Click hotspot for facility insight"
                data-cursor="Info"
              >
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/50 animate-bounce">
                  <Eye className="w-5 h-5" />
                  <span className="absolute -inset-1 rounded-full bg-amber-400/30 animate-ping" />
                </div>
                {activeHotspot === 1 && (
                  <div className="absolute top-12 left-0 w-52 p-3 rounded-xl bg-slate-950/95 backdrop-blur-md border border-amber-400 text-left text-xs text-slate-200 shadow-2xl z-30">
                    <p className="font-bold text-amber-400 mb-1">{selectedLocation.highlights[0]}</p>
                    <p className="text-[11px] text-slate-300">Certified by international coaching bodies with full digital telemetry.</p>
                  </div>
                )}
              </button>

              {/* Hotspot 2 */}
              <button
                onClick={() => setActiveHotspot(activeHotspot === 2 ? null : 2)}
                className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 group/spot cursor-pointer"
                title="Click hotspot for facility insight"
                data-cursor="Info"
              >
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/50 animate-pulse">
                  <Sparkles className="w-5 h-5" />
                  <span className="absolute -inset-1 rounded-full bg-amber-400/30 animate-ping" />
                </div>
                {activeHotspot === 2 && (
                  <div className="absolute top-12 right-0 w-52 p-3 rounded-xl bg-slate-950/95 backdrop-blur-md border border-amber-400 text-left text-xs text-slate-200 shadow-2xl z-30">
                    <p className="font-bold text-amber-400 mb-1">{selectedLocation.highlights[1]}</p>
                    <p className="text-[11px] text-slate-300">Safety standards compliant with 24/7 supervisor coverage.</p>
                  </div>
                )}
              </button>
            </div>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                  {selectedLocation.category}
                </span>
                <h4 className="text-sm sm:text-lg font-bold text-white">
                  {selectedLocation.name}
                </h4>
              </div>

              <div className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                {selectedLocation.stats}
              </div>
            </div>
          </div>

          {/* Right Detailed Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-amber-500/20 shadow-xl space-y-5">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  {selectedLocation.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1 font-display">
                  {selectedLocation.name}
                </h3>
                <p className="text-xs text-amber-300 font-medium italic mt-1">
                  "{selectedLocation.tagline}"
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedLocation.description}
              </p>

              <div className="pt-2 border-t border-slate-800 space-y-2.5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Infrastructure Highlights
                </h5>
                {selectedLocation.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenTourModal}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-102"
                  data-cursor="360°"
                >
                  <Compass className="w-4 h-4" />
                  <span>Start 360° Virtual Walkthrough</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
