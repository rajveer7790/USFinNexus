'use client';

import { useState } from 'react';
import { Percent, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export default function DtiClient() {
    const [grossIncome, setGrossIncome] = useState(8000);
    const [monthlyDebt, setMonthlyDebt] = useState(1200);

    const dti = grossIncome > 0 ? (monthlyDebt / grossIncome) * 100 : 0;

    const getStatus = () => {
        if (dti <= 28) return { label: 'Low DTI', color: 'text-emerald-500', border: 'border-emerald-500/30', bg: 'bg-emerald-500/5', icon: CheckCircle, advice: 'Your current recurring debt is low relative to gross monthly income. Actual mortgage qualification still depends on the loan program, housing payment, credit, assets and lender underwriting.' };
        if (dti <= 36) return { label: 'Moderate DTI', color: 'text-[#0da6f2]', border: 'border-[#0da6f2]/30', bg: 'bg-[#0da6f2]/5', icon: TrendingUp, advice: 'This range is commonly used as a planning benchmark, but it is not a universal mortgage approval threshold.' };
        if (dti <= 43) return { label: 'Higher DTI', color: 'text-amber-500', border: 'border-amber-500/30', bg: 'bg-amber-500/5', icon: AlertCircle, advice: 'A higher DTI can reduce borrowing flexibility. The current CFPB General Qualified Mortgage definition does not impose a universal 43% DTI maximum.' };
        return { label: 'High DTI', color: 'text-rose-500', border: 'border-rose-500/30', bg: 'bg-rose-500/5', icon: AlertCircle, advice: 'A high DTI may make qualification more difficult, but approval limits vary by loan program, lender, credit profile and other underwriting factors.' };
    };

    const status = getStatus();
    const StatusIcon = status.icon;
    const dtiPercent = Math.min(dti, 60);

    const getBarColor = () => {
        if (dti <= 28) return 'from-emerald-500 to-emerald-400';
        if (dti <= 36) return 'from-[#0da6f2] to-blue-400';
        if (dti <= 43) return 'from-amber-500 to-amber-400';
        return 'from-rose-500 to-rose-400';
    };

    return (
        <div className="relative min-h-screen bg-white text-navy-900 pb-20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0da6f2]/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-2xl mx-auto px-4 pt-5 sm:pt-7 lg:pt-8 pb-8 sm:pb-12 relative z-10">
                <div className="mb-6 sm:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-[#0da6f2]/10 border border-[#0da6f2]/20"><Percent className="text-[#0da6f2]" size={22} /></div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0da6f2]">Debt Analysis</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-navy-900 via-[#0da6f2] to-navy-900 bg-clip-text text-transparent">Debt-to-Income (DTI) Ratio Calculator</h1>
                    <p className="text-gray-500 font-medium text-lg">Calculate your DTI from recurring monthly debt and gross monthly income.</p>
                </div>

                <div className="space-y-6">
                    <div className="glass-card p-10">
                        <div className="space-y-6">
                            <div>
                                <label className="input-label">Gross Monthly Income (Before Taxes)</label>
                                <div className="relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">$</span>
                                    <input type="number" value={grossIncome || ''} onChange={(e) => setGrossIncome(Number(e.target.value))} className="glass-input pl-8" />
                                </div>
                            </div>
                            <div>
                                <label className="input-label">Total Monthly Debt Payments</label>
                                <p className="text-xs text-gray-400 mb-3 font-medium">Include recurring obligations such as auto loans, student loans and required minimum debt payments. For mortgage underwriting, the exact debts counted can depend on program rules.</p>
                                <div className="relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">$</span>
                                    <input type="number" value={monthlyDebt || ''} onChange={(e) => setMonthlyDebt(Number(e.target.value))} className="glass-input pl-8" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`glass-card p-4 sm:p-6 text-center border-2 ${status.border}`}>
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 ${status.bg} ${status.color}`}><StatusIcon size={12} />{status.label}</div>
                        <div className={`text-4xl sm:text-5xl font-black tracking-tighter mb-2 tabular-nums ${status.color}`}>{dti.toFixed(1)}%</div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-10">Your DTI Ratio</p>
                        <div className="mb-8">
                            <div className="h-3 rounded-full bg-white/5 relative overflow-hidden">
                                <div className={`h-full rounded-full bg-gradient-to-r ${getBarColor()} transition-all duration-700`} style={{ width: `${(dtiPercent / 60) * 100}%` }} />
                            </div>
                            <div className="flex justify-between text-xs font-black uppercase tracking-widest text-gray-500 mt-2"><span>0%</span><span>28%</span><span>36%</span><span>43%</span><span>60%+</span></div>
                        </div>
                        <p className={`text-sm font-semibold leading-relaxed ${status.color}`}>{status.advice}</p>
                    </div>

                    <div className="glass-card p-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Planning Benchmarks — Not Approval Limits</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-5">28%, 36% and 43% are commonly encountered planning reference points, but mortgage underwriting varies. The CFPB removed the former fixed 43% DTI cap from the General Qualified Mortgage definition and replaced it with price-based thresholds.</p>
                        <div className="space-y-3">
                            {[
                                { range: '≤ 28%', label: 'Conservative housing-planning reference', color: 'text-emerald-500' },
                                { range: '≤ 36%', label: 'Common total-debt planning reference', color: 'text-[#0da6f2]' },
                                { range: '≤ 43%', label: 'Historical General QM reference — not current universal cap', color: 'text-amber-500' },
                                { range: 'Varies', label: 'Actual loan-program and lender underwriting limit', color: 'text-rose-400' },
                            ].map(item => (
                                <div key={item.label} className="flex items-center justify-between gap-4 py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors">
                                    <span className="text-sm font-medium text-gray-500">{item.label}</span><span className={`text-sm font-black tabular-nums text-right ${item.color}`}>{item.range}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
