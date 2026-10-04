import React, { useState } from 'react';
import { 
  GraduationCap, 
  Cpu, 
  Globe2, 
  Languages, 
  Compass, 
  Award, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { UNIVERSITY_PLACEMENTS } from '../data/tisData';

interface AcademicsExcellenceProps {
  onOpenInquiry: () => void;
}

export const AcademicsExcellence: React.FC<AcademicsExcellenceProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'stem' | 'global' | 'trinity' | 'career'>('stem');

  const academicTracks = [
    {
      id: 'stem',
      title: 'Einstein Innovation & STEM',
      shortTitle: 'STEM & Robotics',
      icon: <Cpu className="w-5 h-5" />,
      tagline: 'Practical Experiential Discovery Over Rote Memorization',
      description: 'The Einstein Tinkering Lab at TIS is a sandbox of innovation. Students from Grade 4 onwards program microcontrollers, build autonomous robots, design 3D models, and study AI ethics.',
      points: [
        'Dedicated 3D printing & rapid prototyping stations',
        'VEX Robotics & FIRST Lego League participation',
        'Drone assembly, aerial telemetry & rocketry clubs',
        'AI, Python, and Machine Learning curriculum'
      ],
      badge: 'Future-Ready',
      stat: '100% Practical STEM'
    },
    {
      id: 'global',
      title: 'CBSE & Cambridge Benchmark Pathways',
      shortTitle: 'Global Curriculum',
      icon: <Globe2 className="w-5 h-5" />,
      tagline: 'Holistic Inquiry-Based International Standards',
      description: 'We integrate CBSE academic rigor with Cambridge analytical frameworks. Small batch sizes ensure personalized feedback and deep conceptual comprehension.',
      points: [
        '8:1 Student-to-Teacher Mentorship Ratio',
        'Dedicated Olympiad & competitive prep (JEE, NEET, SAT, AP)',
        'Experiential field studies in Himalayan flora and biodiversity',
        'Continuous formative feedback & diagnostic assessment'
      ],
      badge: 'Academic Benchmark',
      stat: 'Top 1% Board Results'
    },
    {
      id: 'trinity',
      title: 'Trinity College London Speech & Drama',
      shortTitle: 'Oratory & Arts',
      icon: <Languages className="w-5 h-5" />,
      tagline: 'Cultivating Persuasive Global Communicators',
      description: 'Integrated Trinity College London communication masteries develop oratory prowess, stage confidence, critical articulation, and emotional intelligence.',
      points: [
        'International Trinity College graded certifications',
        'Oxford-style parliamentary debating leagues',
        'Shakespearean theatrical productions in open-air amphitheatre',
        'Creative writing, journalism & literary publications'
      ],
      badge: 'Global Oratory',
      stat: 'Trinity London Certified'
    },
    {
      id: 'career',
      title: 'Mindler Career & University Counseling',
      shortTitle: 'Ivy League Pathway',
      icon: <Compass className="w-5 h-5" />,
      tagline: 'End-to-End Profile Building from Grade 8',
      description: 'Our in-house career cell collaborates with Mindler to curate student profiles, internships, research papers, and applications to the world’s top universities.',
      points: [
        'Comprehensive psychometric profiling and career roadmaps',
        'Common App & UCAS international university guidance',
        'Leadership fellowships and community social projects',
        '100% global university admissions track record'
      ],
      badge: 'University Gateway',
      stat: '100% Placements'
    }
  ];

  const currentTrack = academicTracks.find(t => t.id === activeTab) || academicTracks[0];

  return (
    <section id="academics" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-slate-950 via-[var(--bg-secondary)] to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>Intellectual Distinction</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Academic Excellence & <span className="gold-gradient-text">Global Pathways</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Where curious young minds evolve into visionary scientists, ethical entrepreneurs, and world leaders.
          </p>
        </div>

        {/* Academic Program Switcher */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {academicTracks.map((track) => {
            const isActive = activeTab === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTab(track.id as any)}
                className={`px-5 py-3 rounded-2xl flex items-center gap-2.5 font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-amber-400/40'
                }`}
                data-cursor="Track"
              >
                <span className={isActive ? 'text-slate-950' : 'text-amber-400'}>{track.icon}</span>
                <span>{track.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Track Showcase */}
        <div className="mt-10 glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  {currentTrack.badge}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {currentTrack.stat}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {currentTrack.title}
                </h3>
                <p className="text-sm font-medium text-amber-400 mt-1 italic">
                  "{currentTrack.tagline}"
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentTrack.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentTrack.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onOpenInquiry}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-amber-500/30 transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
                  data-cursor="Apply"
                >
                  <span>Download Curriculum Brochure</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* University Placements */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-amber-500/20 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Award className="w-4 h-4" />
                  <span>Global University Placements</span>
                </div>
                <span className="text-[10px] text-slate-400">100% Acceptance</span>
              </div>

              <p className="text-xs text-slate-300">
                TIS alumni secure scholarships and admissions at the world’s top universities:
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {UNIVERSITY_PLACEMENTS.map((uni, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5 hover:border-amber-400/40 transition-colors"
                  >
                    <span className="text-xl">{uni.logo}</span>
                    <div>
                      <div className="text-xs font-bold text-white line-clamp-1">{uni.name}</div>
                      <div className="text-[10px] text-slate-400">{uni.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
