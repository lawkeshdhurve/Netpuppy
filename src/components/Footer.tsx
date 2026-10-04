import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Globe
} from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
  onOpenTourModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onOpenTourModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-amber-500/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-serif-luxury text-amber-400 font-bold text-xl">TIS</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif-luxury font-bold text-xl text-white">TULA'S</h3>
                <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase">International School</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              <strong>The Modern Gurukul</strong> — A premier co-educational residential boarding school in Dehradun, blending ancient Guru-Shishya values with 21st-century technological supremacy and 16+ Olympic sports.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a href="https://tis.edu.in" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-400 hover:text-amber-400 flex items-center gap-1.5 text-xs transition-colors">
                <Globe className="w-3.5 h-3.5" />
                <span>tis.edu.in</span>
              </a>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#philosophy" className="hover:text-amber-400 transition-colors">The Modern Gurukul</a></li>
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">Academics & STEM</a></li>
              <li><a href="#sports" className="hover:text-amber-400 transition-colors">16+ Olympic Sports</a></li>
              <li><button onClick={onOpenTourModal} className="hover:text-amber-400 transition-colors cursor-pointer">360° Virtual Campus</button></li>
              <li><a href="#fee-estimator" className="hover:text-amber-400 transition-colors">Fee & Scholarship Calculator</a></li>
              <li><a href="#admissions" className="hover:text-amber-400 transition-colors">Admissions 2026-27</a></li>
            </ul>
          </div>

          {/* Col 3: Academic Affiliations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Accreditations</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CBSE Affiliated (Class 4 to 12)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cambridge Assessment Pathway</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Trinity College London Center</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mindler Global Career Partner</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="w-full py-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold text-xs hover:bg-amber-400 hover:text-slate-950 transition-colors cursor-pointer"
              >
                Apply for Admission 2026-27
              </button>
            </div>
          </div>

          {/* Col 4: Campus Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Campus Contact</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun - 248011, Uttarakhand, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919837077777" className="hover:text-amber-400 text-white font-semibold">
                  +91-98370-77777 / 0135-2699300
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:admissions@tis.edu.in" className="hover:text-amber-400">
                  admissions@tis.edu.in / info@tis.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Tula's International School (TIS). All Rights Reserved. "The Modern Gurukul"</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">CBSE Mandatory Disclosure</a>
            <a href="#" className="hover:text-slate-400">Terms of Admission</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
