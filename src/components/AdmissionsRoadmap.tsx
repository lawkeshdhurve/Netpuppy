import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileEdit, 
  Brain, 
  Users2, 
  CheckCheck, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';

interface AdmissionsRoadmapProps {
  onOpenInquiry: () => void;
}

export const AdmissionsRoadmap: React.FC<AdmissionsRoadmapProps> = ({ onOpenInquiry }) => {
  const steps = [
    {
      step: '01',
      title: 'Digital Application & Registration',
      description: 'Complete the quick 3-minute online registration form and upload recent report cards.',
      icon: <FileEdit className="w-5 h-5 text-amber-400" />,
      badge: 'Step 1'
    },
    {
      step: '02',
      title: 'TIS Holistic Aptitude Assessment',
      description: 'An inquiry-based evaluation measuring logical reasoning, language aptitude, and creative problem solving.',
      icon: <Brain className="w-5 h-5 text-amber-400" />,
      badge: 'Step 2'
    },
    {
      step: '03',
      title: 'Headmaster & Pastoral Interaction',
      description: 'A warm conversational dialogue between parents, student, and the school leadership team.',
      icon: <Users2 className="w-5 h-5 text-amber-400" />,
      badge: 'Step 3'
    },
    {
      step: '04',
      title: 'Offer Letter & Housemaster Allocation',
      description: 'Receipt of formal acceptance, scholarship grant confirmation, and boarding house allotment.',
      icon: <CheckCheck className="w-5 h-5 text-amber-400" />,
      badge: 'Step 4'
    },
    {
      step: '05',
      title: 'Gurukul Induction & Welcome Kit',
      description: 'Orientation camp, uniform sizing, room allocation, and seamless induction into the TIS family.',
      icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
      badge: 'Step 5'
    }
  ];

  return (
    <section id="admissions" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-slate-950 via-[var(--bg-secondary)] to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Admissions AY 2026-27</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Your 5-Step Gateway to <span className="gold-gradient-text">Tula's International</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A transparent, merit-driven, and supportive onboarding journey designed to understand your child's unique potential.
          </p>
        </div>

        {/* 5-Step Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 group hover:-translate-y-1 relative flex flex-col justify-between"
              data-cursor="Roadmap"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-serif-luxury font-extrabold text-2xl text-amber-400/40 group-hover:text-amber-400 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  {item.badge}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Dedicated Counselor Assigned</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action Card */}
        <div className="mt-12 glass-panel rounded-3xl p-8 border border-amber-500/30 text-center max-w-4xl mx-auto shadow-2xl space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Ready to Begin the Transformation?
          </h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Limited boarding seats available for Grades 4 through 9 for the upcoming 2026-27 session. 
            Scholarship aptitude assessments currently being conducted.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer"
              data-cursor="Apply"
            >
              <GraduationCap className="w-5 h-5 text-slate-950" />
              <span>Submit Admission Inquiry AY 2026-27</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href="tel:+919837077777"
              className="px-6 py-3.5 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 text-white font-semibold text-sm transition-all"
            >
              Direct Admissions Helpline: +91-98370-77777
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
