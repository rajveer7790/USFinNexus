'use client';

import { useState, useMemo } from 'react';
import { calcRentVsBuy, formatCurrency } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import dynamic from 'next/dynamic';

const RentVsBuyChart = dynamic(() => import('./RentVsBuyChart'), {
    ssr: false,
    loading: () => <div className="h-56 animate-pulse rounded-xl" style={{ background: 'var(--color-bg-secondary)' }} />,
});

export default function RentVsBuyClient() {
    const [homePrice, setHomePrice] = useState(400000);
    const [downPayment, setDownPayment] = useState(80000);
    const [mortgageRate, setMortgageRate] = useState(6.75);
    const [loanTerm] = useState(30);
    const [propTax, setPropTax] = useState(1.2);
    const [insurance, setInsurance] = useState(1400);
    const [hoa] = useState(0);
    const [appreciation, setAppreciation] = useState(3.5);
    const [monthlyRent, setMonthlyRent] = useState(2200);
    const [rentIncrease, setRentIncrease] = useState(3);
    const [yearsToStay, setYearsToStay] = useState(10);
    const [investmentReturn, setInvestmentReturn] = useState(7);
    const [sellingCosts, setSellingCosts] = useState(7);

    const result = useMemo(() => {
        if (homePrice <= 0) return null;
        try {
            return calcRentVsBuy({
                homePrice, downPayment, mortgageRate, loanTermYears: loanTerm,
                annualPropertyTax: propTax, annualInsurance: insurance, monthlyHOA: hoa,
                annualHomeAppreciation: appreciation, monthlyRent, annualRentIncrease: rentIncrease,
                yearsToStay, investmentReturn, sellingCostPercent: sellingCosts,
            });
        } catch { return null; }
    }, [homePrice, downPayment, mortgageRate, loanTerm, propTax, insurance, hoa, appreciation, monthlyRent, rentIncrease, yearsToStay, investmentReturn, sellingCosts]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-navy-900 dark:text-white mb-2">Rent vs. Buy Calculator</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Find out whether buying or renting makes more financial sense for your situation over your planned time horizon.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                <div className="xl:col-span-2 space-y-4">
                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: 'var(--color-text-muted)' }}>Buying Costs</h2>
                        {[
                            { label: 'Home Price', v: homePrice, set: setHomePrice, prefix: '$', step: 5000 },
                            { label: 'Down Payment', v: downPayment, set: setDownPayment, prefix: '$', step: 5000 },
                            { label: 'Mortgage Rate', v: mortgageRate, set: setMortgageRate, suffix: '%', step: 0.125 },
                            { label: 'Annual Property Tax Rate', v: propTax, set: setPropTax, suffix: '%', step: 0.1 },
                            { label: 'Annual Insurance', v: insurance, set: setInsurance, prefix: '$', step: 100 },
                            { label: 'Annual Home Appreciation', v: appreciation, set: setAppreciation, suffix: '%', step: 0.5 },
                        ].map(f => (
                            <div className="mb-3" key={f.label}>
                                <label className="input-label">{f.label}</label>
                                <div className="relative">
                                    {f.prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: 'var(--color-text-muted)' }}>{f.prefix}</span>}
                                    <input type="number" className={`input-field ${f.prefix ? 'pl-7' : ''} ${f.suffix ? 'pr-8' : ''}`} value={f.v} onChange={e => f.set(+e.target.value)} step={f.step} min={0} />
                                    {f.suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: 'var(--color-text-muted)' }}>{f.suffix}</span>}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: 'var(--color-text-muted)' }}>Renting &amp; Assumptions</h2>
                        {[
                            { label: 'Monthly Rent', v: monthlyRent, set: setMonthlyRent, prefix: '$', step: 50 },
                            { label: 'Annual Rent Increase', v: rentIncrease, set: setRentIncrease, suffix: '%', step: 0.5 },
                            { label: 'Years to Stay', v: yearsToStay, set: setYearsToStay, step: 1, min: 1, max: 30 },
                            { label: 'Investment Return (if renting)', v: investmentReturn, set: setInvestmentReturn, suffix: '%', step: 0.5 },
                            { label: 'Selling Costs (% of price)', v: sellingCosts, set: setSellingCosts, suffix: '%', step: 0.5 },
                        ].map(f => (
                            <div className="mb-3" key={f.label}>
                                <label className="input-label">{f.label}</label>
                                <div className="relative">
                                    {f.prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: 'var(--color-text-muted)' }}>{f.prefix}</span>}
                                    <input type="number" className={`input-field ${f.prefix ? 'pl-7' : ''} ${f.suffix ? 'pr-8' : ''}`} value={f.v} onChange={e => f.set(+e.target.value)} step={f.step} min={'min' in f ? f.min : 0} max={'max' in f ? f.max : undefined} />
                                    {f.suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: 'var(--color-text-muted)' }}>{f.suffix}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="xl:col-span-3 space-y-5">
                    {result ? (
                        <>
                            <div className="card p-6 animate-slide-up">
                                <div className={`p-5 rounded-xl text-center mb-6 ${result.winner === 'buy' ? 'border-2 border-green-600' : 'border-2 border-blue-500'}`} style={{ background: result.winner === 'buy' ? 'rgba(0,200,83,0.08)' : 'rgba(59,130,246,0.08)' }}>
                                    <p className="text-4xl mb-2">{result.winner === 'buy' ? '🏠' : '🏢'}</p>
                                    <p className="text-xl font-black" style={{ color: result.winner === 'buy' ? '#00C853' : '#3b82f6' }}>
                                        {result.winner === 'buy' ? 'Buying Wins!' : 'Renting Wins!'}
                                    </p>
                                    <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>Over {yearsToStay} years, based on your inputs</p>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-5">
                                    {[
                                        { label: 'Net Buy Cost', value: formatCurrency(Math.abs(result.netBuyCost)), color: '#0A2540' },
                                        { label: 'Net Rent Cost', value: formatCurrency(result.netRentCost), color: '#3b82f6' },
                                        { label: 'Home Equity Built', value: formatCurrency(result.homeEquity), color: '#00C853' },
                                        { label: 'Break-Even Year', value: `Year ${result.breakEvenYear}`, color: 'var(--color-text)' },
                                    ].map(s => (
                                        <div key={s.label} className="p-3 rounded-xl text-center" style={{ background: 'var(--color-bg-secondary)' }}>
                                            <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>{s.label}</p>
                                            <p className="text-lg font-black" style={{ color: s.color }}>{s.value}</p>
                                        </div>
                                    ))}
                                </div>

                                <RentVsBuyChart yearlyData={result.yearlyData} />
                            </div>
                        </>
                    ) : (
                        <div className="card p-12 text-center"><p className="text-lg font-bold">Enter details to compare</p></div>
                    )}
                    <DisclaimerBanner calculatorName="the Rent vs. Buy Calculator" />
                </div>
            </div>
        </div>
    );
}
