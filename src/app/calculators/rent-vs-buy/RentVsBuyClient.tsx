'use client';

import { useState, useMemo } from 'react';
import { calcRentVsBuy, formatCurrency } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import dynamic from 'next/dynamic';
import { Home, ArrowLeftRight, CheckCircle } from 'lucide-react';

const RentVsBuyChart = dynamic(() => import('./RentVsBuyChart'), {
    ssr: false,
    loading: () => <div className="h-56 animate-pulse rounded-xl bg-white/5" />,
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
        <div className="relative min-h-screen bg-white text-navy-900 pb-20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0da6f2]/6 rounded-full blur-[130px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/6 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 lg:pt-8 pb-8 sm:pb-12 relative z-10">
                <div className="mb-6 sm:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-[#0da6f2]/10 border border-[#0da6f2]/20">
                            <ArrowLeftRight className="text-[#0da6f2]" size={24} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0da6f2]">Decision Tool</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-none bg-gradient-to-r from-navy-900 via-[#0da6f2] to-navy-900 bg-clip-text text-transparent">
                        Rent vs. Buy Calculator
                    </h1>
                    <p className="text-gray-500 max-w-2xl font-medium text-lg">
                        Find out whether buying or renting makes more financial sense over your planned time horizon.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass-card p-4 sm:p-6">
                            <div className="flex items-center gap-2 mb-5 sm:mb-8">
                                <Home size={16} className="text-emerald-500" />
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Buying Costs</h2>
                            </div>
                            <div className="space-y-5">
                                {[
                                    { label: 'Home Price', v: homePrice, set: setHomePrice, prefix: '$', step: 5000 },
                                    { label: 'Down Payment', v: downPayment, set: setDownPayment, prefix: '$', step: 5000 },
                                    { label: 'Mortgage Rate', v: mortgageRate, set: setMortgageRate, suffix: '%', step: 0.125 },
                                    { label: 'Annual Property Tax Rate', v: propTax, set: setPropTax, suffix: '%', step: 0.1 },
                                    { label: 'Annual Insurance', v: insurance, set: setInsurance, prefix: '$', step: 100 },
                                    { label: 'Annual Home Appreciation', v: appreciation, set: setAppreciation, suffix: '%', step: 0.5 },
                                ].map(f => (
                                    <div key={f.label}>
                                        <label className="input-label">{f.label}</label>
                                        <div className="relative group">
                                            {f.prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">{f.prefix}</span>}
                                            <input type="number" className={`glass-input ${f.prefix ? 'pl-8' : ''} ${f.suffix ? 'pr-8' : ''}`} value={f.v} onChange={e => f.set(+e.target.value)} step={f.step} min={0} />
                                            {f.suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">{f.suffix}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card p-8">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-8">Renting & Assumptions</h2>
                            <div className="space-y-5">
                                {[
                                    { label: 'Monthly Rent', v: monthlyRent, set: setMonthlyRent, prefix: '$', step: 50 },
                                    { label: 'Annual Rent Increase', v: rentIncrease, set: setRentIncrease, suffix: '%', step: 0.5 },
                                    { label: 'Years to Stay', v: yearsToStay, set: setYearsToStay, step: 1, min: 1, max: 30 },
                                    { label: 'Investment Return (if renting)', v: investmentReturn, set: setInvestmentReturn, suffix: '%', step: 0.5 },
                                    { label: 'Selling Costs (% of price)', v: sellingCosts, set: setSellingCosts, suffix: '%', step: 0.5 },
                                ].map(f => (
                                    <div key={f.label}>
                                        <label className="input-label">{f.label}</label>
                                        <div className="relative group">
                                            {f.prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">{f.prefix}</span>}
                                            <input type="number" className={`glass-input ${f.prefix ? 'pl-8' : ''} ${f.suffix ? 'pr-8' : ''}`} value={f.v} onChange={e => f.set(+e.target.value)} step={f.step} min={'min' in f ? f.min : 0} max={'max' in f ? f.max : undefined} />
                                            {f.suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">{f.suffix}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-5 lg:self-start">
                        {result ? (
                            <>
                                {/* Winner Banner */}
                                <div className={`glass-card p-4 sm:p-6 animate-slide-up text-center border-2 ${result.winner === 'buy' ? 'border-emerald-500/40' : 'border-[#0da6f2]/40'}`}>
                                    <div className="text-4xl mb-4">{result.winner === 'buy' ? '🏠' : '🏢'}</div>
                                    <p className={`text-3xl font-black mb-3 ${result.winner === 'buy' ? 'text-emerald-500' : 'text-[#0da6f2]'}`}>
                                        {result.winner === 'buy' ? 'Buying Wins!' : 'Renting Wins!'}
                                    </p>
                                    <p className="text-gray-500 font-medium">Over {yearsToStay} years, based on your inputs</p>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                    {[
                                        { label: 'Net Buy Cost', value: formatCurrency(Math.abs(result.netBuyCost)), color: 'text-[#0da6f2]' },
                                        { label: 'Net Rent Cost', value: formatCurrency(result.netRentCost), color: 'text-purple-400' },
                                        { label: 'Home Equity Built', value: formatCurrency(result.homeEquity), color: 'text-emerald-500' },
                                        { label: 'Break-Even Year', value: `Year ${result.breakEvenYear}`, color: 'text-amber-500' },
                                    ].map(s => (
                                        <div key={s.label} className="glass-card p-4 sm:p-6 text-center group">
                                            <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-4">{s.label}</p>
                                            <p className={`text-3xl font-black tabular-nums transition-all group-hover:scale-105 duration-300 ${s.color}`}>{s.value}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Chart */}
                                <div className="glass-card p-8">
                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-6">Cumulative Cost Comparison</h3>
                                    <RentVsBuyChart yearlyData={result.yearlyData} />
                                </div>

                                <div className="glass-panel p-5 border-[#0da6f2]/20 bg-[#0da6f2]/5">
                                    <div className="flex gap-3">
                                        <CheckCircle className="flex-shrink-0 text-[#0da6f2]" size={18} />
                                        <p className="text-sm font-medium text-gray-600">
                                            The chart tracks equity minus costs over time. Closing costs typically make ownership cheaper after 3–7 years. Results vary greatly by local market.
                                        </p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="glass-card p-4 sm:p-6 text-center">
                                <ArrowLeftRight size={48} className="mx-auto mb-6 text-gray-400 opacity-20" />
                                <p className="text-2xl font-black mb-4">Enter your details</p>
                                <p className="text-gray-500 font-medium">Fill in both tabs to see a comprehensive rent vs. buy analysis.</p>
                            </div>
                        )}
                        <DisclaimerBanner calculatorName="the Rent vs. Buy Calculator" />
                    </div>
                </div>
            </div>
        </div>
    );
}
