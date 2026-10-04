import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  ShieldCheck,
  Download
} from 'lucide-react';

interface FeeCalculatorProps {
  onOpenInquiry: () => void;
}

export const FeeCalculatorSection: React.FC<FeeCalculatorProps> = ({ onOpenInquiry }) => {
  const [gradeGroup, setGradeGroup] = useState<'junior' | 'middle' | 'secondary' | 'senior'>('middle');
  const [boardingType, setBoardingType] = useState<'full' | 'day'>('full');
  const [equestrian, setEquestrian] = useState(false);
  const [shooting, setShooting] = useState(false);
  const [trinity, setTrinity] = useState(true);
  const [meritScore, setMeritScore] = useState<number>(0); // 0, 15, 25, 40%

  // Pricing Model (Approx in INR Lakhs per annum for estimation)
  const baseTuition = {
    junior: 380000,
    middle: 440000,
    secondary: 490000,
    senior: 540000,
  }[gradeGroup];

  const boardingFee = boardingType === 'full' ? 220000 : 90000;
  const equestrianFee = equestrian ? 45000 : 0;
  const shootingFee = shooting ? 35000 : 0;
  const trinityFee = trinity ? 20000 : 0;

  const subtotal = baseTuition + boardingFee + equestrianFee + shootingFee + trinityFee;
  const discountAmount = Math.round((baseTuition * meritScore) / 100);
  const estimatedTotal = subtotal - discountAmount;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="fee-estimator" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Transparent Investment in Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Interactive <span className="gold-gradient-text">Fee & Scholarship Estimator</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            All-inclusive transparent structure covering academic tuition, smart residential dorms, 
            organic dining, laundry, sports, and pastoral healthcare.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Options Area */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/20 shadow-xl space-y-6">
            {/* Grade Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                1. Select Academic Grade Level
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'junior', label: 'Grades 4 - 6', desc: 'Junior Gurukul' },
                  { id: 'middle', label: 'Grades 7 - 8', desc: 'Middle School' },
                  { id: 'secondary', label: 'Grades 9 - 10', desc: 'Secondary (CBSE)' },
                  { id: 'senior', label: 'Grades 11 - 12', desc: 'Senior Secondary' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setGradeGroup(item.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      gradeGroup === item.id
                        ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className={`text-[10px] ${gradeGroup === item.id ? 'text-slate-800' : 'text-slate-400'}`}>{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Boarding Residency Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                2. Boarding & Residency Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setBoardingType('full')}
                  className={`p-4 rounded-xl text-left border flex items-center justify-between cursor-pointer transition-all ${
                    boardingType === 'full'
                      ? 'bg-amber-400/15 border-amber-400 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold text-white">Full Residential Boarding</div>
                    <div className="text-xs text-slate-400">24/7 En-suite House Care & Organic Meals</div>
                  </div>
                  {boardingType === 'full' && <Check className="w-5 h-5 text-amber-400" />}
                </button>

                <button
                  onClick={() => setBoardingType('day')}
                  className={`p-4 rounded-xl text-left border flex items-center justify-between cursor-pointer transition-all ${
                    boardingType === 'day'
                      ? 'bg-amber-400/15 border-amber-400 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold text-white">Day-Boarding (Dehradun)</div>
                    <div className="text-xs text-slate-400">8:00 AM to 6:30 PM with Transport & Meals</div>
                  </div>
                  {boardingType === 'day' && <Check className="w-5 h-5 text-amber-400" />}
                </button>
              </div>
            </div>

            {/* Specialized Sports & Arts Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                3. Specialized Academy Add-ons (Optional)
              </label>
              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={equestrian}
                      onChange={(e) => setEquestrian(e.target.checked)}
                      className="w-4 h-4 accent-amber-400 rounded"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">North India Equestrian & Horse Riding Academy</span>
                      <p className="text-[11px] text-slate-400">Stabling, trainer sessions & show jumping track</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-amber-400">+ ₹45,000 / yr</span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={shooting}
                      onChange={(e) => setShooting(e.target.checked)}
                      className="w-4 h-4 accent-amber-400 rounded"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">ISSF Certified 10m/50m Shooting Academy</span>
                      <p className="text-[11px] text-slate-400">Precision rifle/pistol targets with national coach</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-amber-400">+ ₹35,000 / yr</span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={trinity}
                      onChange={(e) => setTrinity(e.target.checked)}
                      className="w-4 h-4 accent-amber-400 rounded"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">Trinity College London Speech & Drama Certification</span>
                      <p className="text-[11px] text-slate-400">International examiners & stage performance</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-amber-400">+ ₹20,000 / yr</span>
                </label>
              </div>
            </div>

            {/* Merit Scholarship Eligibility Estimator */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                4. Merit Scholarship Eligibility Tier
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { percent: 0, label: 'Standard Fee' },
                  { percent: 15, label: '15% (85%+ Marks)' },
                  { percent: 25, label: '25% (92%+ Marks)' },
                  { percent: 40, label: '40% (National Sport/96%+)' },
                ].map((tier) => (
                  <button
                    key={tier.percent}
                    onClick={() => setMeritScore(tier.percent)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-semibold border cursor-pointer ${
                      meritScore === tier.percent
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 font-bold'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Breakdown & Calculation Card */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Estimated Annual Investment
                </span>
                <h3 className="text-3xl font-extrabold text-white mt-1 font-display">
                  {formatINR(estimatedTotal)}
                </h3>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-amber-400/10 text-amber-300 text-xs font-bold">
                AY 2026-27
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Academic & Smart Lab Tuition:</span>
                <span className="font-semibold text-white">{formatINR(baseTuition)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Residential Boarding & Organic Dining:</span>
                <span className="font-semibold text-white">{formatINR(boardingFee)}</span>
              </div>
              {(equestrian || shooting || trinity) && (
                <div className="flex justify-between text-slate-300">
                  <span>Specialized Academies Add-on:</span>
                  <span className="font-semibold text-white">{formatINR(equestrianFee + shootingFee + trinityFee)}</span>
                </div>
              )}
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400 font-bold">
                  <span>Merit Scholarship Deduction ({meritScore}%):</span>
                  <span>- {formatINR(discountAmount)}</span>
                </div>
              )}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Hidden Fees Guarantee</span>
              </div>
              <p>
                Includes all textbooks, laboratory supplies, laundry, pastoral infirmary care, and basic excursion trips.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={onOpenInquiry}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-102"
                data-cursor="Apply"
              >
                <span>Apply with Estimated Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenInquiry}
                className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer"
                data-cursor="PDF"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Official 2026-27 Fee Structure (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
