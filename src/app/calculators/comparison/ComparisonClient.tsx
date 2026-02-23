'use client';

import { useState, useMemo } from 'react';
import { calcMortgageSummary, formatCurrency } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';

interface Scenario {
    label: string;
    homePrice: number;
    downPayment: number;
    rate: number;
    termYears: number;
    propTax: number;
    insurance: number;
}

const DEFAULT_SCENARIOS: Scenario[] = [
    { label: 'Scenario A', homePrice: 400000, downPayment: 80000, rate: 6.75, termYears: 30, propTax: 5000, insurance: 1400 },
    { label: 'Scenario B', homePrice: 400000, downPayment: 40000, rate: 6.75, termYears: 30, propTax: 5000, insurance: 1400 },
    { label: 'Scenario C', homePrice: 400000, downPayment: 80000, rate: 6.25, termYears: 15, propTax: 5000, insurance: 1400 },
];

export default function ComparisonClient() {
    const [scenarios, setScenarios] = useState<Scenario[]>(DEFAULT_SCENARIOS);

    const update = (i: number, field: keyof Scenario, val: string | number) => {
        setScenarios(prev => prev.map((s, idx) => idx === i ? { ...s, [field]: val } : s));
    };

    const results = useMemo(() => scenarios.map(s => {
        try {
            return calcMortgageSummary({
                homePrice: s.homePrice, downPayment: s.downPayment, annualInterestRate: s.rate,
                loanTermYears: s.termYears, annualPropertyTax: s.propTax, annualInsurance: s.insurance,
                monthlyHOA: 0, pmiRate: s.homePrice > 0 && (s.homePrice - s.downPayment) / s.homePrice > 0.80 ? 0.0085 : 0,
                startDate: new Date(),
            });
        } catch { return null; }
    }), [scenarios]);

    const COLORS = ['#0A2540', '#00C853', '#1a4d9a'];
    const compareRows = [
        ['Home Price', (s: Scenario) => formatCurrency(s.homePrice)],
        ['Down Payment', (s: Scenario) => `${formatCurrency(s.downPayment)} (${((s.downPayment / s.homePrice) * 100).toFixed(1)}%)`],
        ['Interest Rate', (s: Scenario) => `${s.rate}%`],
        ['Loan Term', (s: Scenario) => `${s.termYears} yr`],
        ['Monthly P&I', (_: Scenario, r: typeof results[0]) => r ? formatCurrency(r.principalAndInterest) : '—'],
        ['Monthly PITI', (_: Scenario, r: typeof results[0]) => r ? formatCurrency(r.totalMonthly) : '—'],
        ['Loan Amount', (_: Scenario, r: typeof results[0]) => r ? formatCurrency(r.loanAmount) : '—'],
        ['Total Interest', (_: Scenario, r: typeof results[0]) => r ? formatCurrency(r.totalInterest) : '—'],
        ['Total Payments', (_: Scenario, r: typeof results[0]) => r ? formatCurrency(r.totalPayments) : '—'],
    ] as [string, (s: Scenario, r: typeof results[0]) => string][];

    const bestPayment = results.reduce((best, r, i) => {
        if (!r) return best;
        if (best === -1 || r.totalMonthly < (results[best]?.totalMonthly ?? Infinity)) return i;
        return best;
    }, -1);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-navy-900 dark:text-white mb-2">Side-by-Side Loan Comparison</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">Compare up to 3 mortgage scenarios simultaneously. Edit any field to see results update instantly.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {scenarios.map((s, i) => (
                    <div key={i} className="card p-5" style={{ borderTop: `3px solid ${COLORS[i]}` }}>
                        <input type="text" className="input-field text-center font-bold mb-4" value={s.label} onChange={e => update(i, 'label', e.target.value)} />
                        {[
                            { label: 'Home Price', field: 'homePrice' as keyof Scenario, prefix: '$', step: 5000 },
                            { label: 'Down Payment', field: 'downPayment' as keyof Scenario, prefix: '$', step: 5000 },
                            { label: 'Interest Rate %', field: 'rate' as keyof Scenario, suffix: '%', step: 0.125 },
                            { label: 'Loan Term (years)', field: 'termYears' as keyof Scenario, step: 5 },
                            { label: 'Annual Property Tax', field: 'propTax' as keyof Scenario, prefix: '$', step: 500 },
                            { label: 'Annual Insurance', field: 'insurance' as keyof Scenario, prefix: '$', step: 100 },
                        ].map(f => (
                            <div className="mb-3" key={f.field}>
                                <label className="input-label">{f.label}</label>
                                <div className="relative">
                                    {f.prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>{f.prefix}</span>}
                                    <input type="number" className={`input-field ${f.prefix ? 'pl-7' : ''} ${f.suffix ? 'pr-8' : ''}`} value={Number(s[f.field])} onChange={e => update(i, f.field, +e.target.value)} step={f.step} min={0} />
                                    {f.suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>{f.suffix}</span>}
                                </div>
                            </div>
                        ))}
                        {results[i] && (
                            <div className="mt-4 p-3 rounded-xl text-center" style={{ background: `${COLORS[i]}15` }}>
                                <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>Monthly Payment</p>
                                <p className="text-2xl font-black" style={{ color: COLORS[i] }}>{formatCurrency(results[i]!.totalMonthly)}</p>
                                {bestPayment === i && <p className="mt-1 text-xs font-bold" style={{ color: '#00C853' }}>✓ Lowest Payment</p>}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Metric</th>
                                {scenarios.map((s, i) => <th key={i} style={{ color: COLORS[i] }}>{s.label}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {compareRows.map(([label, fn]) => (
                                <tr key={String(label)}>
                                    <td className="font-semibold" style={{ color: 'var(--color-text-muted)' }}>{label}</td>
                                    {scenarios.map((s, i) => <td key={i} className="font-bold">{fn(s, results[i])}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-6">
                <DisclaimerBanner calculatorName="the Loan Comparison Calculator" />
            </div>
        </div>
    );
}
