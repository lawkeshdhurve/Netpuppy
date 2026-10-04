import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Compass, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Eye
} from 'lucide-react';
import { CAMPUS_LOCATIONS } from '../data/tisData';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose, onOpenInquiry }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const location = CAMPUS_LOCATIONS[activeIdx];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-5xl h-[85vh] bg-slate-900 border border-amber-500/40 rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden text-white"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-400 text-slate-950">
                <Compass className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>360° Virtual Campus Experience</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 text-[10px] font-mono">
                    22 Acres • Dehradun
                  </span>
                </h3>
                <p className="text-xs text-slate-400">{location.name} — {location.tagline}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual Arena */}
          <div className="relative flex-1 bg-slate-950 overflow-hidden flex items-center justify-center">
            <motion.img
              key={location.id}
              src={location.imageUrl}
              alt={location.name}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

            {/* Simulated 360 Overlay Badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-400" />
              <span>Interactive 360 Panorama Mode Active</span>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : CAMPUS_LOCATIONS.length - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-slate-700 hover:border-amber-400 text-white cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setActiveIdx((prev) => (prev < CAMPUS_LOCATIONS.length - 1 ? prev + 1 : 0))}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-slate-700 hover:border-amber-400 text-white cursor-pointer transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Floating Info Pill */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-amber-500/30 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{location.category}</span>
                <h4 className="text-lg font-bold text-white">{location.name}</h4>
                <p className="text-xs text-slate-300 line-clamp-1">{location.description}</p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="px-5 py-2.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs hover:bg-yellow-300 transition-colors cursor-pointer"
              >
                Schedule On-Campus Visit
              </button>
            </div>
          </div>

          {/* Location Thumbnail Bar */}
          <div className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2 overflow-x-auto">
            {CAMPUS_LOCATIONS.map((loc, idx) => (
              <button
                key={loc.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 p-2 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all cursor-pointer ${
                  activeIdx === idx
                    ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{loc.name}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
