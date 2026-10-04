import React from 'react';
import { Sparkles, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';

interface AnnouncementTickerProps {
  onOpenInquiry: () => void;
}

export const AnnouncementTicker: React.FC<AnnouncementTickerProps> = ({ onOpenInquiry }) => {
  return (
    <div className="relative z-40 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 text-xs font-semibold py-2 px-4 shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left marquee / highlight badge */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 bg-slate-950 text-amber-300 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm animate-pulse">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Admissions 2026-27
          </span>
          <p className="hidden sm:inline font-medium">
            Registrations open for Grades 4 to 12 (Residential & Day-Boarding) • Merit Scholarships Up to 40%
          </p>
          <p className="sm:hidden font-medium">
            Admissions Open AY 2026-27 (Grades 4-12)
          </p>
        </div>

        {/* Right CTA Links */}
        <div className="flex items-center gap-4 text-slate-950">
          <a
            href="tel:+919837077777"
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            data-cursor="Call"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>+91-98370-77777</span>
          </a>

          <div className="hidden lg:flex items-center gap-1 text-[11px] bg-amber-400/80 px-2 py-0.5 rounded text-slate-900 border border-amber-600/30">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
            <span>CBSE & Cambridge Certified</span>
          </div>

          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-1 text-xs font-bold underline hover:text-white transition-colors cursor-pointer"
            data-cursor="Apply"
          >
            <span>Book Campus Visit</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
