'use client';

import { useState, useMemo } from 'react';
import { calcArmMortgage, formatCurrency, formatPercent } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { TrendingUp, AlertCircle, CheckCircle, Activity } from 'lucide-react';

export default function ArmCalculatorClient() {
    const [loanAmount, setLoanAmount] = useState(400000);
    const [initialTerm, setInitialTerm] = useState(5);
    const [initialRate, setInitialRate] = useState(6.0);
    const [margin, setMargin] = useState(2.75);
    const [indexRate, setIndexRate] = useState(4.5);
    const [capInitial, setCapInitial] = useState(2);
    const [capLifetime, setCapLifetime] = useState(5);
    const [loanTerm, setLoanTerm] = useState(30);

    const result = useMemo(() => {
        if (loanAmount <= 0) return null;
        try {
            return calcArmMortgage({
                loanAmount,
                initialTermYears: initialTerm,
                initialRate,
                margin,
                indexRate,
                capInitial,
                capPeriodic: capInitial,
                capLifetime,
                loanTermYears: loanTerm,
            });
        } catch {
            return null;
        }
    }, [loanAmount, initialTerm, initialRate, margin, indexRate, capInitial, capLifetime, loanTerm]);

    return (
        <div className="relative min-h-screen bg-white text-navy-900 pb-20">
            {/* Ambient Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/6 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0da6f2]/8 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 relative z-10">
                <div className="mb-6 sm:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                            <Activity className="text-amber-500" size={24} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-500">ARM Analysis</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-none bg-gradient-to-r from-navy-900 via-amber-500 to-navy-900 bg-clip-text text-transparent">
                        ARM Calculator
                    </h1>
                    <p className="text-gray-500 max-w-2xl font-medium text-lg">
                        Understand the risks and rewards of an adjustable rate mortgage. See your initial payment, worst-case scenario, and fully indexed expected payment.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    {/* Left Col - Inputs */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass-card p-4 sm:p-8">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-5 sm:mb-8">Loan & Initial Terms</h2>
                            <div className="space-y-5 sm:space-y-6">
                                <div>
                                    <label className="input-label">Loan Amount</label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-amber-500 transition-colors">$</span>
                                        <input type="number" className="glass-input pl-8" value={loanAmount} onChange={e => setLoanAmount(+e.target.value)} step={5000} />
                                    </div>
                                </div>

                                <div>
                                    <label className="input-label">ARM Type (Initial Fixed Period)</label>
                                    <div className="glass-tab-list p-1 flex gap-1">
                                        {[
                                            { label: '3/1', val: 3 },
                                            { label: '5/1', val: 5 },
                                            { label: '7/1', val: 7 },
                                            { label: '10/1', val: 10 },
                                        ].map(t => (
                                            <button key={t.val} onClick={() => setInitialTerm(t.val)}
                                                className={`flex-1 py-3 rounded-lg text-xs font-black transition-all ${initialTerm === t.val ? 'bg-amber-500 text-white shadow-lg' : 'text-gray-500 hover:bg-white/5'}`}>
                                                {t.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="input-label">Initial Interest Rate</label>
                                    <div className="relative group">
                                        <input type="number" className="glass-input pr-8" value={initialRate} onChange={e => setInitialRate(+e.target.value)} step={0.125} />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-amber-500 transition-colors">%</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="input-label">Total Loan Term</label>
                                    <div className="glass-tab-list p-1 flex gap-1">
                                        {[15, 20, 30].map(t => (
                                            <button key={t} onClick={() => setLoanTerm(t)}
                                                className={`flex-1 py-3 rounded-lg text-xs font-black transition-all ${loanTerm === t ? 'bg-[#0da6f2] text-white shadow-lg' : 'text-gray-500 hover:bg-white/5'}`}>
                                                {t} YR
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-4 sm:p-8">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-5 sm:mb-8">Adjustment Rules (Caps & Index)</h2>
                            <div className="space-y-6">
                                {[
                                    { label: 'Index Rate (e.g., SOFR)', v: indexRate, set: setIndexRate, step: 0.25 },
                                    { label: 'Lender Margin', v: margin, set: setMargin, step: 0.125 },
                                    { label: 'Initial/Periodic Cap', v: capInitial, set: setCapInitial, step: 1 },
                                    { label: 'Lifetime Cap (Above Initial)', v: capLifetime, set: setCapLifetime, step: 1 },
                                ].map(f => (
                                    <div key={f.label}>
                                        <label className="input-label">{f.label}</label>
                                        <div className="relative group">
                                            <input type="number" className="glass-input pr-8" value={f.v} onChange={e => f.set(+e.target.value)} step={f.step} />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-amber-500 transition-colors">%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Col - Results */}
                    <div className="lg:col-span-3 space-y-8 flex flex-col lg:self-start">
                        {result ? (
                            <>
                                {/* Initial Payment Hero */}
                                <div className="glass-card p-5 sm:p-10 animate-slide-up relative overflow-hidden border-amber-500/20">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-4 sm:mb-6">Initial Monthly Payment (P&I)</p>
                                    <div className="flex items-baseline gap-3 mb-4">
                                        <span className="text-4xl sm:text-6xl font-black tracking-tighter tabular-nums text-amber-400">{formatCurrency(result.initialPayment)}</span>
                                        <span className="text-gray-500 text-xl">/mo</span>
                                    </div>
                                    <p className="text-sm text-emerald-500 font-black mb-5 sm:mb-8">
                                        Locked for the first {initialTerm} years at {formatPercent(initialRate)}
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 sm:gap-6 border-t border-white/5 pt-5 sm:pt-8">
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-widest font-black mb-2">Fully Indexed Rate</p>
                                            <p className="text-2xl font-black text-[#0da6f2]">{formatPercent(result.fullyIndexedRate)}</p>
                                            <p className="text-xs text-gray-500 mt-1">Index + Margin</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-widest font-black mb-2">Expected Payment</p>
                                            <p className="text-2xl font-black text-white">{formatCurrency(result.fullyIndexedPayment)}</p>
                                            <p className="text-xs text-gray-500 mt-1">If rates stay same</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Scenario Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="glass-card p-8 border-rose-500/30 bg-rose-500/5">
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse flex-shrink-0" />
                                            <span className="text-xs font-black uppercase tracking-[0.3em] text-rose-500">Worst-Case</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <AlertCircle className="text-rose-500 flex-shrink-0" size={20} />
                                        </div>
                                        <p className="text-2xl sm:text-4xl font-black text-rose-400 mb-2 tabular-nums">{formatCurrency(result.worstCasePayment)}</p>
                                        <p className="text-xs text-rose-400/70 font-bold mb-6">Maximum Possible Payment</p>
                                        <div className="glass-panel p-3 rounded-xl flex justify-between items-center">
                                            <span className="text-xs text-gray-500">Max Rate:</span>
                                            <span className="text-sm font-black text-rose-400">{formatPercent(result.worstCaseRate)}</span>
                                        </div>
                                    </div>

                                    <div className="glass-card p-8 border-emerald-500/30 bg-emerald-500/5">
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                                            <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Best-Case</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <CheckCircle className="text-emerald-500 flex-shrink-0" size={20} />
                                        </div>
                                        <p className="text-2xl sm:text-4xl font-black text-emerald-400 mb-2 tabular-nums">{formatCurrency(result.bestCasePayment)}</p>
                                        <p className="text-xs text-emerald-400/70 font-bold mb-6">Minimum Possible Payment</p>
                                        <div className="glass-panel p-3 rounded-xl flex justify-between items-center">
                                            <span className="text-xs text-gray-500">Min Rate (Margin):</span>
                                            <span className="text-sm font-black text-emerald-400">{formatPercent(result.bestCaseRate)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* How Caps Work */}
                                <div className="glass-card p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <TrendingUp className="text-[#0da6f2]" size={20} />
                                        <h3 className="font-black text-sm uppercase tracking-widest text-gray-400">How Your Caps Work</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Your ARM has a <strong className="text-white">{capInitial}/{capInitial}/{capLifetime}</strong> cap structure.
                                        At your first adjustment in year {initialTerm + 1}, your rate cannot increase more than <strong className="text-amber-500">{capInitial}%</strong>.
                                        Each subsequent year, it cannot change by more than <strong className="text-amber-500">{capInitial}%</strong>.
                                        Over the life of the loan, your rate will never exceed <strong className="text-rose-400">{formatPercent(initialRate + capLifetime)}</strong>.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="glass-card p-8 sm:p-24 text-center flex-1 flex flex-col justify-center">
                                <Activity size={48} className="mx-auto mb-6 text-gray-400 opacity-20" />
                                <p className="text-2xl font-black mb-4">Enter ARM Details</p>
                                <p className="text-gray-500 font-medium">Fill in your loan and cap structure to see your full risk analysis.</p>
                            </div>
                        )}
                        <DisclaimerBanner calculatorName="the Adjustable Rate Mortgage Calculator" />
                    </div>
                </div>
            </div>
        </div>
    );
}
