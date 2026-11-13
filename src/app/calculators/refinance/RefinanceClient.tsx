'use client';

import { useId, useState, useMemo } from 'react';
import { calcRefinance, formatCurrency, formatMonthYear } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { Info, TrendingDown, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

export default function RefinanceClient() {
    const id = useId();
    const [currentBalance, setCurrentBalance] = useState(320000);
    const [currentRate, setCurrentRate] = useState(7.5);
    const [currentMonthlyPayment, setCurrentMonthlyPayment] = useState(2240);
    const [monthsRemaining, setMonthsRemaining] = useState(300);
    const [newRate, setNewRate] = useState(6.25);
    const [newTerm, setNewTerm] = useState(30);
    const [closingCosts, setClosingCosts] = useState(4500);

    const result = useMemo(() => {
        if (currentBalance <= 0) return null;
        try {
            return calcRefinance({
                currentBalance, currentRate, currentMonthlyPayment,
                currentMonthsRemaining: monthsRemaining, newRate, newTermYears: newTerm, closingCosts,
            });
        } catch { return null; }
    }, [currentBalance, currentRate, currentMonthlyPayment, monthsRemaining, newRate, newTerm, closingCosts]);

    // A modeled cost difference is not a personalized recommendation or holding-period test.
    const isWorthIt = result && result.netSavings > 0;
    return (
        <div className="bg-white text-navy-900 pb-6 sm:pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 lg:pt-8 pb-8 sm:pb-12 relative z-10">
                <div className="mb-6 sm:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                            <TrendingDown className="text-emerald-500" size={24} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800">Savings Analysis</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight text-navy-900">
                        Mortgage Refinance Calculator
                    </h1>
                    <p className="text-gray-500 max-w-2xl font-medium text-lg">
                        Compare your current mortgage with a new loan: estimate monthly payment changes, closing costs, simple break-even timing and projected interest. Inputs are examples, not current rate offers.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    {/* LEFT: Inputs */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Current Mortgage */}
                        <div className="glass-card p-4 sm:p-6">
                            <div className="flex justify-between items-center mb-5 sm:mb-8">
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Current Mortgage</h2>
                                <TrendingUp size={16} className="text-rose-400" />
                            </div>
                            <div className="space-y-6">
                                {[
                                    { label: 'Remaining Balance', value: currentBalance, set: setCurrentBalance, prefix: '$', step: 1000 },
                                    { label: 'Current Rate', value: currentRate, set: setCurrentRate, suffix: '%', step: 0.125 },
                                    { label: 'Monthly P&I Payment', value: currentMonthlyPayment, set: setCurrentMonthlyPayment, prefix: '$', step: 50 },
                                    { label: 'Months Remaining', value: monthsRemaining, set: setMonthsRemaining, step: 12, min: 1, max: 360 },
                                ].map((field, index) => (
                                    <div key={field.label}>
                                        <label htmlFor={id + '-current-' + index} className="input-label">{field.label}</label>
                                        <div className="relative group">
                                            {field.prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">{field.prefix}</span>}
                                            <input
                                                id={id + '-current-' + index}
                                                type="number"
                                                inputMode={field.suffix ? 'decimal' : 'numeric'}
                                                className={`glass-input ${field.prefix ? 'pl-8' : ''} ${field.suffix ? 'pr-8' : ''}`}
                                                value={field.value}
                                                onChange={e => field.set(+e.target.value)}
                                                step={field.step}
                                                min={field.min ?? 0}
                                                max={field.max}
                                            />
                                            {field.suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">{field.suffix}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button type="button" onClick={() => setNewTerm(monthsRemaining / 12)} className="btn-outline w-full">Match remaining term ({monthsRemaining} months)</button>
                        <p className="text-sm text-slate-600">A lower payment can still cost more over the full loan. Compare lifetime net savings and your planned holding period.</p>
                        {/* New Loan Terms */}
                        <div className="glass-card p-4 sm:p-6">
                            <div className="flex justify-between items-center mb-5 sm:mb-8">
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">New Loan Terms</h2>
                                <TrendingDown size={16} className="text-emerald-400" />
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor={id + '-rate'} className="input-label">New Interest Rate</label>
                                    <div className="relative group">
                                        <input id={id + '-rate'} aria-describedby={id + '-rate-note'} type="number" inputMode="decimal" className="glass-input pr-8" value={newRate} onChange={e => setNewRate(+e.target.value)} step={0.125} min={0.1} max={20} />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-emerald-500 transition-colors">%</span>
                                    </div>
                                    <p id={id + '-rate-note'} className="text-xs mt-2 font-bold uppercase tracking-widest text-emerald-800">
                                        Rate reduction: {(currentRate - newRate).toFixed(3)}%
                                    </p>
                                </div>

                                <div>
                                    <span id={id + '-term'} className="input-label">New Loan Term</span>
                                    <div role="group" aria-labelledby={id + '-term'} className="glass-tab-list fn-refinance-terms p-1 gap-1">
                                        {[15, 20, 30].map(t => (
                                            <button key={t} type="button" aria-pressed={newTerm === t} onClick={() => setNewTerm(t)} className={`min-h-11 flex-1 py-3 rounded-lg text-xs font-black transition-colors ${newTerm === t ? 'bg-emerald-800 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
                                                {t} YR
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor={id + '-costs'} className="input-label">Estimated Closing Costs</label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-emerald-500 transition-colors">$</span>
                                        <input id={id + '-costs'} aria-describedby={id + '-costs-note'} type="number" inputMode="decimal" className="glass-input pl-8" value={closingCosts} onChange={e => setClosingCosts(+e.target.value)} step={500} min={0} />
                                    </div>
                                    <p id={id + '-costs-note'} className="text-xs mt-2 font-bold text-slate-600 uppercase tracking-tighter italic">
                                        Enter the loan costs from your actual quote; sample inputs are not a market average.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Results */}
                    <div className="lg:col-span-3 space-y-5 lg:self-start">
                        {result ? (
                            <div className="space-y-5">
                                {/* Verdict Banner */}
                                <div className={`glass-card p-4 sm:p-5 border-2 ${isWorthIt ? 'border-emerald-500/40' : 'border-amber-500/40'}`}>
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl flex-shrink-0 ${isWorthIt ? 'bg-emerald-500/10' : 'bg-amber-500/10'}`}>
                                            {isWorthIt ? <CheckCircle className="text-emerald-500" size={24} /> : <AlertCircle className="text-amber-500" size={24} />}
                                        </div>
                                        <div>
                                            <p className={`text-xl font-black mb-2 ${isWorthIt ? 'text-emerald-800' : 'text-amber-900'}`}>
                                                {isWorthIt ? 'Lower Modeled Lifetime Cost' : 'Compare Payment Savings With Total Cost'}
                                            </p>
                                            <p className="text-sm font-medium text-gray-500">
                                                {result.monthlySavings > 0
                                                    ? `Simple payment payback is ${result.breakEvenMonths} months. A longer term or different remaining balance can still make refinancing cost more overall.`
                                                    : 'There is no monthly payment reduction in this scenario. Compare the term, total modeled cost and your reason for refinancing.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Key Metrics */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="glass-card p-4 sm:p-6 text-center border-emerald-500/20 group">
                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800 mb-4">Monthly Savings</p>
                                        <div className={`text-3xl sm:text-4xl font-black tracking-tighter tabular-nums ${result.monthlySavings > 0 ? 'text-emerald-800' : 'text-rose-800'}`}>
                                            {formatCurrency(Math.abs(result.monthlySavings))}
                                        </div>
                                        <p className="text-xs mt-3 font-bold uppercase tracking-widest text-gray-500 border-t border-white/5 pt-3">
                                            {result.monthlySavings > 0 ? 'Saved every month' : 'Additional cost/mo'}
                                        </p>
                                    </div>
                                    <div className="glass-card p-4 sm:p-6 text-center group">
                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-800 mb-4">Break-Even</p>
                                        <div className="text-3xl sm:text-4xl font-black tracking-tighter tabular-nums transition-all group-hover:scale-105 duration-500">
                                            {result.breakEvenMonths === Infinity ? '∞' : result.breakEvenMonths}
                                        </div>
                                        <p className="text-xs mt-3 font-bold uppercase tracking-widest text-gray-500 border-t border-white/5 pt-3">
                                            {result.breakEvenMonths === Infinity ? 'Never breaks even' : `Months to recover closing costs`}
                                        </p>
                                    </div>
                                </div>

                                {/* Side-by-Side Comparison */}
                                <div className="glass-card p-4 sm:p-6">
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 sm:mb-5 text-gray-500">Old vs. New Comparison</h3>
                                    <div className="space-y-0">
                                        {/* Header */}
                                        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                                            <div />
                                            <div className="text-xs font-black uppercase tracking-widest text-rose-800 text-center">CURRENT</div>
                                            <div className="text-xs font-black uppercase tracking-widest text-emerald-800 text-center">NEW</div>
                                        </div>
                                        {[
                                            { label: 'Monthly Payment', current: formatCurrency(currentMonthlyPayment), newVal: formatCurrency(result.newMonthlyPayment) },
                                            { label: 'Total Cost', current: formatCurrency(result.totalCurrentCost), newVal: formatCurrency(result.totalNewCost) },
                                            { label: 'Break-Even Date', current: '-', newVal: result.breakEvenMonths !== Infinity ? formatMonthYear(result.breakEvenDate) : 'Never' },
                                            { label: 'Net Savings (lifetime)', current: '-', newVal: formatCurrency(result.netSavings) },
                                        ].map(row => (
                                            <div key={row.label} className="grid grid-cols-3 gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors group">
                                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{row.label}</span>
                                                <span className="text-sm font-semibold text-center tabular-nums text-slate-700">{row.current}</span>
                                                <span className={`text-sm font-black text-center tabular-nums ${row.label === 'Net Savings (lifetime)' && result.netSavings < 0 ? 'text-rose-800' : 'text-emerald-800'}`}>{row.newVal}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass-panel p-6 border-emerald-500/20 bg-emerald-500/5">
                                    <div className="flex gap-4">
                                        <Info className="flex-shrink-0 text-emerald-400" size={20} />
                                        <p className="text-sm font-medium leading-relaxed text-gray-600">
                                            Simple payment payback is not a complete savings test. Compare remaining balances, total costs and the period you expect to keep the loan. A shorter payback alone does not establish that refinancing is worthwhile.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="glass-card p-4 sm:p-6 text-center">
                                <TrendingDown size={48} className="mx-auto mb-6 text-gray-400 opacity-20" />
                                <h3 className="text-2xl font-black mb-4">See Your Savings</h3>
                                <p className="text-gray-500 max-w-md mx-auto font-medium">
                                    Fill in your current mortgage details and the proposed new rate to see your personalized refinance analysis.
                                </p>
                            </div>
                        )}
                        <DisclaimerBanner calculatorName="the Refinance Calculator" />
                    </div>
                </div>
            </div>
        </div>
    );
}

