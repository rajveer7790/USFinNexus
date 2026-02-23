'use client';

import { useState, useMemo } from 'react';
import { calcRefinance, formatCurrency, formatMonthYear } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { Shield, Info, DollarSign } from 'lucide-react';

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
    void Shield; void Info; void DollarSign; // referenced in JSX below

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-navy-900 dark:text-white mb-2">Refinance Savings Calculator</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Compare your current mortgage to a new loan and find your break-even point.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                <div className="xl:col-span-2 space-y-4">
                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-5" style={{ color: 'var(--color-text-muted)' }}>Current Mortgage</h2>
                        {[
                            { label: 'Remaining Balance', value: currentBalance, set: setCurrentBalance, prefix: '$', step: 1000 },
                            { label: 'Current Interest Rate', value: currentRate, set: setCurrentRate, suffix: '%', step: 0.125 },
                            { label: 'Current Monthly P&I Payment', value: currentMonthlyPayment, set: setCurrentMonthlyPayment, prefix: '$', step: 50 },
                            { label: 'Months Remaining', value: monthsRemaining, set: setMonthsRemaining, step: 12, min: 1, max: 360 },
                        ].map(field => (
                            <div className="mb-4" key={field.label}>
                                <label className="input-label">{field.label}</label>
                                <div className="relative">
                                    {field.prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold" style={{ color: 'var(--color-text-muted)' }}>{field.prefix}</span>}
                                    <input type="number" className={`input-field ${field.prefix ? 'pl-7' : ''} ${field.suffix ? 'pr-8' : ''}`} value={field.value} onChange={e => field.set(+e.target.value)} step={field.step} min={field.min ?? 0} max={field.max} />
                                    {field.suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold" style={{ color: 'var(--color-text-muted)' }}>{field.suffix}</span>}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-5" style={{ color: 'var(--color-text-muted)' }}>New Loan Terms</h2>
                        <div className="mb-4">
                            <label className="input-label">New Interest Rate</label>
                            <div className="relative">
                                <input type="number" className="input-field pr-8" value={newRate} onChange={e => setNewRate(+e.target.value)} step={0.125} min={0.1} max={20} />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold" style={{ color: 'var(--color-text-muted)' }}>%</span>
                            </div>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>Rate reduction: {(currentRate - newRate).toFixed(3)}%</p>
                        </div>
                        <div className="mb-4">
                            <label className="input-label">New Loan Term</label>
                            <div className="flex gap-2">
                                {[15, 20, 30].map(t => (
                                    <button key={t} onClick={() => setNewTerm(t)} className={`flex-1 py-2 rounded-lg text-sm font-semibold border transition-all ${newTerm === t ? 'text-white border-transparent' : 'border-current'}`} style={{ background: newTerm === t ? 'var(--color-navy)' : 'transparent', color: newTerm === t ? 'white' : 'var(--color-text-muted)' }}>{t} yr</button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="input-label">Estimated Closing Costs</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input type="number" className="input-field pl-7" value={closingCosts} onChange={e => setClosingCosts(+e.target.value)} step={500} min={0} />
                            </div>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>Typical: $3,000–$6,000 (1–3% of loan amount)</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-3 space-y-5">
                    {result ? (
                        <div className="card p-6 animate-slide-up">
                            <div className={`p-4 rounded-xl mb-6 flex items-start gap-3 ${isWorthIt ? 'border border-green-600' : 'border border-amber-400'}`} style={{ background: isWorthIt ? 'rgba(0,200,83,0.08)' : 'rgba(245,158,11,0.08)' }}>
                                <span className="text-2xl">{isWorthIt ? '✅' : '⚠️'}</span>
                                <div>
                                    <p className="font-bold text-sm" style={{ color: isWorthIt ? '#00C853' : '#f59e0b' }}>
                                        {isWorthIt ? 'Refinancing Looks Favorable!' : 'Refinancing May Not Be Worth It'}
                                    </p>
                                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                                        {result.monthlySavings > 0 ? `Break-even in ${result.breakEvenMonths} months (${(result.breakEvenMonths / 12).toFixed(1)} years)` : 'New payment is higher than current payment.'}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                                {[
                                    { label: 'New Monthly Payment', value: formatCurrency(result.newMonthlyPayment), highlight: true },
                                    { label: 'Monthly Savings', value: formatCurrency(result.monthlySavings), positive: result.monthlySavings > 0 },
                                    { label: 'Break-Even', value: result.breakEvenMonths === Infinity ? 'N/A' : `${result.breakEvenMonths} mo` },
                                    { label: 'Lifetime Savings', value: formatCurrency(result.lifetimeSavings), positive: result.lifetimeSavings > 0 },
                                ].map(s => (
                                    <div key={s.label} className="text-center p-3 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                                        <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>{s.label}</p>
                                        <p className={`text-lg font-black tabular-nums ${s.positive === true ? 'text-green-600' : s.positive === false ? 'text-red-500' : ''}`} style={s.highlight ? { color: 'var(--color-navy)' } : {}}>{s.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-0">
                                {[
                                    ['Monthly Payment', formatCurrency(currentMonthlyPayment), formatCurrency(result.newMonthlyPayment)],
                                    ['Total Cost', formatCurrency(result.totalCurrentCost), formatCurrency(result.totalNewCost)],
                                    ['Break-Even Date', '—', result.breakEvenMonths !== Infinity ? formatMonthYear(result.breakEvenDate) : 'Never'],
                                    ['Net Savings (lifetime)', '—', formatCurrency(result.netSavings)],
                                ].map(([label, current, newVal]) => (
                                    <div key={String(label)} className="result-row">
                                        <span className="result-label">{label}</span>
                                        <div className="flex gap-4 items-center">
                                            <span className="text-xs text-red-400 tabular-nums line-through">{current}</span>
                                            <span className="result-value" style={{ color: '#00C853' }}>{newVal}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="card p-12 text-center"><p className="text-lg font-bold mb-2">Enter your current mortgage details</p></div>
                    )}
                    <DisclaimerBanner calculatorName="the Refinance Calculator" />
                </div>
            </div>
        </div>
    );
}
