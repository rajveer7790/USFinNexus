'use client';

import { useState, useMemo } from 'react';
import { calcArmMortgage, formatCurrency, formatPercent } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';

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
                capPeriodic: capInitial, // simplified to matching initial cap for UI
                capLifetime,
                loanTermYears: loanTerm,
            });
        } catch {
            return null;
        }
    }, [loanAmount, initialTerm, initialRate, margin, indexRate, capInitial, capLifetime, loanTerm]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-navy-900 dark:text-white mb-2">Adjustable Rate Mortgage (ARM) Calculator</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Understand the risks and rewards of an ARM. See your initial payment, worst-case scenario, and fully-indexed expected payment.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* Left Col - Inputs */}
                <div className="xl:col-span-2 space-y-4">
                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: 'var(--color-text-muted)' }}>Loan & Initial Terms</h2>

                        <div className="mb-4">
                            <label className="input-label">Loan Amount</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-gray-400">$</span>
                                <input type="number" className="input-field pl-7" value={loanAmount} onChange={e => setLoanAmount(+e.target.value)} step={5000} />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">ARM Type (Initial Fixed Period)</label>
                            <div className="flex gap-2">
                                {[
                                    { label: '3/1 ARM', val: 3 },
                                    { label: '5/1 ARM', val: 5 },
                                    { label: '7/1 ARM', val: 7 },
                                    { label: '10/1 ARM', val: 10 },
                                ].map(t => (
                                    <button key={t.val} onClick={() => setInitialTerm(t.val)}
                                        className={`flex-1 py-2 rounded-lg text-sm font-semibold border transition-all ${initialTerm === t.val ? 'text-white border-transparent' : 'border-current'}`}
                                        style={{ background: initialTerm === t.val ? 'var(--color-navy)' : 'transparent', color: initialTerm === t.val ? 'white' : 'var(--color-text-muted)' }}>
                                        {t.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Initial Interest Rate</label>
                            <div className="relative">
                                <input type="number" className="input-field pr-8" value={initialRate} onChange={e => setInitialRate(+e.target.value)} step={0.125} />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-gray-400">%</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Total Loan Term</label>
                            <div className="flex gap-2">
                                {[15, 20, 30].map(t => (
                                    <button key={t} onClick={() => setLoanTerm(t)}
                                        className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-all ${loanTerm === t ? 'text-white border-transparent' : 'border-current'}`}
                                        style={{ background: loanTerm === t ? 'var(--color-navy)' : 'transparent', color: loanTerm === t ? 'white' : 'var(--color-text-muted)' }}>
                                        {t} yr
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: 'var(--color-text-muted)' }}>Adjustment Rules (Caps & Index)</h2>

                        {[
                            { label: 'Index Rate (e.g., SOFR)', v: indexRate, set: setIndexRate, step: 0.25 },
                            { label: 'Lender Margin', v: margin, set: setMargin, step: 0.125 },
                            { label: 'Initial/Periodic Adjustment Cap', v: capInitial, set: setCapInitial, step: 1 },
                            { label: 'Lifetime Cap (Above Initial Rate)', v: capLifetime, set: setCapLifetime, step: 1 },
                        ].map(f => (
                            <div key={f.label} className="mb-4">
                                <label className="input-label">{f.label}</label>
                                <div className="relative">
                                    <input type="number" className="input-field pr-8" value={f.v} onChange={e => f.set(+e.target.value)} step={f.step} />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-gray-400">%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Col - Results */}
                <div className="xl:col-span-3 space-y-5 flex flex-col">
                    {result ? (
                        <>
                            {/* Initial Payment Info */}
                            <div className="card p-6 bg-gradient-to-br from-navy-900 to-navy-800 text-white animate-slide-up shadow-xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                                </div>

                                <h2 className="text-sm font-bold tracking-wide uppercase text-white/70 mb-2">Initial Monthly Payment (P&I)</h2>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-5xl font-black">{formatCurrency(result.initialPayment)}</span>
                                    <span className="text-white/60">/mo</span>
                                </div>
                                <p className="text-sm text-green-400 font-semibold mb-6">
                                    Locked for the first {initialTerm} years at {formatPercent(initialRate)}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mt-6 border-t border-white/10 pt-6">
                                    <div>
                                        <p className="text-xs text-white/50 mb-1 uppercase tracking-wider font-bold">Fully Indexed Rate</p>
                                        <p className="text-xl font-bold">{formatPercent(result.fullyIndexedRate)}</p>
                                        <p className="text-xs text-white/40 mt-1">Index + Margin</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50 mb-1 uppercase tracking-wider font-bold">Expected Payment</p>
                                        <p className="text-xl font-bold">{formatCurrency(result.fullyIndexedPayment)}</p>
                                        <p className="text-xs text-white/40 mt-1">If rates stay same</p>
                                    </div>
                                </div>
                            </div>

                            {/* Scenarios Comparison */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Worst Case */}
                                <div className="card p-5 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10 dark:border-red-600">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                        <h3 className="font-bold text-red-900 dark:text-red-400 uppercase tracking-widest text-xs">Worst-Case Scenario</h3>
                                    </div>
                                    <p className="text-3xl font-black text-red-700 dark:text-red-300 mb-1">{formatCurrency(result.worstCasePayment)}</p>
                                    <p className="text-sm text-red-600/70 dark:text-red-400/70 mb-4 font-semibold">Maximum Possible Payment</p>

                                    <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg flex justify-between items-center text-sm">
                                        <span className="text-red-800/60 dark:text-red-200/50">Max Rate:</span>
                                        <span className="font-bold text-red-900 dark:text-red-300">{formatPercent(result.worstCaseRate)}</span>
                                    </div>
                                </div>

                                {/* Best Case */}
                                <div className="card p-5 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 dark:border-green-600">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        <h3 className="font-bold text-green-900 dark:text-green-400 uppercase tracking-widest text-xs">Best-Case Scenario</h3>
                                    </div>
                                    <p className="text-3xl font-black text-green-700 dark:text-green-300 mb-1">{formatCurrency(result.bestCasePayment)}</p>
                                    <p className="text-sm text-green-600/70 dark:text-green-400/70 mb-4 font-semibold">Minimum Possible Payment</p>

                                    <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg flex justify-between items-center text-sm">
                                        <span className="text-green-800/60 dark:text-green-200/50">Min Rate (Margin):</span>
                                        <span className="font-bold text-green-900 dark:text-green-300">{formatPercent(result.bestCaseRate)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card p-6 mt-auto">
                                <h3 className="font-bold text-navy-900 dark:text-white mb-2">How Caps Work</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    Your ARM has a <strong>{capInitial}/{capInitial}/{capLifetime}</strong> structure.
                                    This means at your first adjustment in year {initialTerm + 1}, your rate cannot increase more than <strong>{capInitial}%</strong>.
                                    Each subsequent year, it cannot change by more than <strong>{capInitial}%</strong>.
                                    Over the entire life of the loan, your rate will never exceed <strong>{formatPercent(initialRate + capLifetime)}</strong>.
                                </p>
                            </div>

                        </>
                    ) : (
                        <div className="card p-12 text-center flex-1 flex flex-col justify-center">
                            <p className="text-lg font-bold">Enter ARM details to see analysis</p>
                        </div>
                    )}

                    <div className="mt-4">
                        <DisclaimerBanner calculatorName="the Adjustable Rate Mortgage Calculator" />
                    </div>
                </div>
            </div>
        </div>
    );
}
