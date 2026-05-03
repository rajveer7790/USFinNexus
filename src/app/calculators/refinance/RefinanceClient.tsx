'use client';

import { useState, useMemo } from 'react';
import { calcRefinance, formatCurrency, formatMonthYear } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { Shield, Info, DollarSign, TrendingDown, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

export default function RefinanceClient() {
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

    const isWorthIt = result && result.monthlySavings > 0 && result.breakEvenMonths !== Infinity && result.breakEvenMonths <= 60;
    void Shield; void DollarSign;

    return (
        <div className="relative min-h-screen bg-white text-navy-900 pb-20">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[130px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0da6f2]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 lg:pt-8 pb-8 sm:pb-12 relative z-10">
                <div className="mb-6 sm:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                            <TrendingDown className="text-emerald-500" size={24} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Savings Analysis</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-none bg-gradient-to-r from-navy-900 via-emerald-500 to-navy-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
                        Refinance Savings Calculator
                    </h1>
                    <p className="text-gray-500 max-w-2xl font-medium text-lg">
                        See your break-even point and total lifetime savings from refinancing your mortgage.
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
                                ].map(field => (
                                    <div key={field.label}>
                                        <label className="input-label">{field.label}</label>
                                        <div className="relative group">
                                            {field.prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">{field.prefix}</span>}
                                            <input
                                                type="number"
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

                        {/* New Loan Terms */}
                        <div className="glass-card p-4 sm:p-6">
                            <div className="flex justify-between items-center mb-5 sm:mb-8">
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">New Loan Terms</h2>
                                <TrendingDown size={16} className="text-emerald-400" />
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="input-label">New Interest Rate</label>
                                    <div className="relative group">
                                        <input type="number" className="glass-input pr-8" value={newRate} onChange={e => setNewRate(+e.target.value)} step={0.125} min={0.1} max={20} />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-emerald-500 transition-colors">%</span>
                                    </div>
                                    <p className="text-xs mt-2 font-bold uppercase tracking-widest text-emerald-500">
                                        Rate reduction: {(currentRate - newRate).toFixed(3)}%
                                    </p>
                                </div>

                                <div>
                                    <label className="input-label">New Loan Term</label>
                                    <div className="glass-tab-list p-1 flex gap-1">
                                        {[15, 20, 30].map(t => (
                                            <button key={t} onClick={() => setNewTerm(t)} className={`flex-1 py-3 rounded-lg text-xs font-black transition-all ${newTerm === t ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-500 hover:bg-white/5'}`}>
                                                {t} YR
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="input-label">Estimated Closing Costs</label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-emerald-500 transition-colors">$</span>
                                        <input type="number" className="glass-input pl-8" value={closingCosts} onChange={e => setClosingCosts(+e.target.value)} step={500} min={0} />
                                    </div>
                                    <p className="text-xs mt-2 font-bold text-gray-400 uppercase tracking-tighter italic">
                                        Typically $3,000–$6,000 (1–3% of loan amount)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Results */}
                    <div className="lg:col-span-3 space-y-5 lg:self-start">
                        {result ? (
                            <div className="space-y-5 animate-slide-up">
                                {/* Verdict Banner */}
                                <div className={`glass-card p-4 sm:p-5 border-2 ${isWorthIt ? 'border-emerald-500/40' : 'border-amber-500/40'}`}>
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl flex-shrink-0 ${isWorthIt ? 'bg-emerald-500/10' : 'bg-amber-500/10'}`}>
                                            {isWorthIt ? <CheckCircle className="text-emerald-500" size={24} /> : <AlertCircle className="text-amber-500" size={24} />}
                                        </div>
                                        <div>
                                            <p className={`text-xl font-black mb-2 ${isWorthIt ? 'text-emerald-500' : 'text-amber-500'}`}>
                                                {isWorthIt ? 'Refinancing Looks Favorable!' : 'Proceed with Caution'}
                                            </p>
                                            <p className="text-sm font-medium text-gray-500">
                                                {result.monthlySavings > 0
                                                    ? `You break-even in ${result.breakEvenMonths} months (${(result.breakEvenMonths / 12).toFixed(1)} yrs). After that, it's pure savings.`
                                                    : 'Your new payment is higher than the current one. Consider a different term or rate.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Key Metrics */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="glass-card p-4 sm:p-6 text-center border-emerald-500/20 group">
                                        <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-4">Monthly Savings</p>
                                        <div className={`text-3xl sm:text-4xl font-black tracking-tighter tabular-nums transition-all group-hover:scale-105 duration-500 ${result.monthlySavings > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                            {formatCurrency(Math.abs(result.monthlySavings))}
                                        </div>
                                        <p className="text-xs mt-3 font-bold uppercase tracking-widest text-gray-500 border-t border-white/5 pt-3">
                                            {result.monthlySavings > 0 ? 'Saved every month' : 'Additional cost/mo'}
                                        </p>
                                    </div>
                                    <div className="glass-card p-4 sm:p-6 text-center group">
                                        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0da6f2] mb-4">Break-Even</p>
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
                                            <div className="text-xs font-black uppercase tracking-widest text-rose-400 text-center">CURRENT</div>
                                            <div className="text-xs font-black uppercase tracking-widest text-emerald-400 text-center">NEW</div>
                                        </div>
                                        {[
                                            { label: 'Monthly Payment', current: formatCurrency(currentMonthlyPayment), newVal: formatCurrency(result.newMonthlyPayment) },
                                            { label: 'Total Cost', current: formatCurrency(result.totalCurrentCost), newVal: formatCurrency(result.totalNewCost) },
                                            { label: 'Break-Even Date', current: '—', newVal: result.breakEvenMonths !== Infinity ? formatMonthYear(result.breakEvenDate) : 'Never' },
                                            { label: 'Net Savings (lifetime)', current: '—', newVal: formatCurrency(result.netSavings) },
                                        ].map(row => (
                                            <div key={row.label} className="grid grid-cols-3 gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors group">
                                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{row.label}</span>
                                                <span className="text-sm font-black text-center tabular-nums text-rose-400 line-through opacity-70">{row.current}</span>
                                                <span className="text-sm font-black text-center tabular-nums text-emerald-400">{row.newVal}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass-panel p-6 border-emerald-500/20 bg-emerald-500/5">
                                    <div className="flex gap-4">
                                        <Info className="flex-shrink-0 text-emerald-400" size={20} />
                                        <p className="text-sm font-medium leading-relaxed text-gray-600">
                                            A break-even under 24 months is typically excellent. Plan to stay in the home long enough to exceed the break-even point to realize savings. Factor in closing costs carefully.
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


