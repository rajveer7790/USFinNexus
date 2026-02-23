'use client';

import { useState, useMemo } from 'react';
import { calcPointsBuyDown, formatCurrency, formatPercent } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';

export default function PointsBuyDownPage() {
    const [loanAmount, setLoanAmount] = useState(320000);
    const [baseRate, setBaseRate] = useState(7.0);
    const [points, setPoints] = useState(2);
    const [rateReducPerPoint, setRateReducPerPoint] = useState(0.25);
    const [termYears, setTermYears] = useState(30);

    const result = useMemo(() => {
        if (loanAmount <= 0) return null;
        try {
            return calcPointsBuyDown({ loanAmount, baseRate, points, rateReductionPerPoint: rateReducPerPoint, loanTermYears: termYears });
        } catch { return null; }
    }, [loanAmount, baseRate, points, rateReducPerPoint, termYears]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-navy-900 dark:text-white mb-2">Mortgage Points Buy-Down Calculator</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Analyze whether paying discount points upfront to reduce your interest rate is worth it.
                    1 point = 1% of your loan amount; typically reduces rate by 0.25%.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                <div className="xl:col-span-2 card p-6 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>Loan Details</h2>

                    {[
                        { label: 'Loan Amount', v: loanAmount, set: setLoanAmount, prefix: '$', step: 5000 },
                        { label: 'Base Interest Rate (No Points)', v: baseRate, set: setBaseRate, suffix: '%', step: 0.125 },
                        { label: 'Number of Points', v: points, set: setPoints, step: 0.5, min: 0, max: 5 },
                        { label: 'Rate Reduction Per Point', v: rateReducPerPoint, set: setRateReducPerPoint, suffix: '%', step: 0.0625 },
                    ].map(f => (
                        <div key={f.label}>
                            <label className="input-label">{f.label}</label>
                            <div className="relative">
                                {f.prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold" style={{ color: 'var(--color-text-muted)' }}>{f.prefix}</span>}
                                <input type="number" className={`input-field ${f.prefix ? 'pl-7' : ''} ${f.suffix ? 'pr-8' : ''}`} value={f.v} onChange={e => f.set(+e.target.value)} step={f.step} min={f.min ?? 0} max={f.max} />
                                {f.suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold" style={{ color: 'var(--color-text-muted)' }}>{f.suffix}</span>}
                            </div>
                        </div>
                    ))}

                    <div>
                        <label className="input-label">Loan Term</label>
                        <div className="flex gap-2">
                            {[15, 20, 30].map(t => (
                                <button key={t} onClick={() => setTermYears(t)}
                                    className={`flex-1 py-2 rounded-lg text-sm font-semibold border transition-all ${termYears === t ? 'text-white border-transparent' : 'border-current'}`}
                                    style={{ background: termYears === t ? 'var(--color-navy)' : 'transparent', color: termYears === t ? 'white' : 'var(--color-text-muted)' }}>
                                    {t} yr
                                </button>
                            ))}
                        </div>
                    </div>

                    {result && (
                        <div className="p-4 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                            <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-text-muted)' }}>Points Cost</p>
                            <p className="text-2xl font-black" style={{ color: 'var(--color-navy)' }}>{formatCurrency(result.pointsCost)}</p>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                {points} point(s) × 1% × {formatCurrency(loanAmount)}
                            </p>
                        </div>
                    )}
                </div>

                <div className="xl:col-span-3 space-y-5">
                    {result ? (
                        <div className="card p-6 animate-slide-up">
                            {/* Rate comparison */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
                                    <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>Original Rate</p>
                                    <p className="text-3xl font-black" style={{ color: 'var(--color-text)' }}>{formatPercent(result.originalRate, 3)}</p>
                                    <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{formatCurrency(result.originalPayment)}/mo</p>
                                </div>
                                <div className="p-4 rounded-xl border-2 border-green-600" style={{ background: 'rgba(0,200,83,0.08)' }}>
                                    <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#00C853' }}>Rate with Points</p>
                                    <p className="text-3xl font-black" style={{ color: '#00C853' }}>{formatPercent(result.newRate, 3)}</p>
                                    <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{formatCurrency(result.newPayment)}/mo</p>
                                </div>
                            </div>

                            <div className="space-y-0">
                                {[
                                    ['Monthly Savings', formatCurrency(result.monthlySavings), result.monthlySavings > 0],
                                    ['Points Cost', formatCurrency(result.pointsCost), false],
                                    ['Break-Even Point', result.breakEvenMonths === Infinity ? 'Never' : `${result.breakEvenMonths} months (${(result.breakEvenMonths / 12).toFixed(1)} years)`, null],
                                    ['Total Interest Saved (life)', formatCurrency(result.totalInterestSaved), result.totalInterestSaved > 0],
                                ].map(([label, value, isPositive]) => (
                                    <div key={String(label)} className="result-row">
                                        <span className="result-label">{label}</span>
                                        <span className={`result-value ${isPositive === true ? 'text-green-600' : isPositive === false ? 'text-red-500' : ''}`}>{value}</span>
                                    </div>
                                ))}
                            </div>

                            {result.breakEvenMonths !== Infinity && result.breakEvenMonths <= termYears * 12 && (
                                <div className="mt-4 p-3 rounded-xl" style={{ background: 'rgba(0,200,83,0.06)', border: '1px solid #00C853' }}>
                                    <p className="text-xs font-bold" style={{ color: '#00C853' }}>
                                        ✅ Worth It If You Stay {(result.breakEvenMonths / 12).toFixed(1)}+ Years
                                    </p>
                                    <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                        After break-even, you save {formatCurrency(result.monthlySavings)}/month for the remaining loan term.
                                    </p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="card p-12 text-center">
                            <p className="text-lg font-bold">Enter loan details to analyze points</p>
                        </div>
                    )}
                    <DisclaimerBanner calculatorName="the Points Buy-Down Calculator" />
                </div>
            </div>
        </div>
    );
}
