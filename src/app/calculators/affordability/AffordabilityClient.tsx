'use client';

import { useMemo, useState } from 'react';
import { calcAffordability, formatCurrency, formatPercent, US_MORTGAGE_CONSTANTS } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { Home, Info, Scale, TrendingUp } from 'lucide-react';

export default function AffordabilityClient() {
    const [income, setIncome] = useState(7500);
    const [debts, setDebts] = useState(500);
    const [downPayment, setDownPayment] = useState(50000);
    const [rate, setRate] = useState(6.75);
    const [term, setTerm] = useState(30);
    const [propTaxRate, setPropTaxRate] = useState(1.2);
    const [creditScore, setCreditScore] = useState<'excellent' | 'good' | 'fair' | 'poor'>('good');

    const result = useMemo(() => {
        if (income <= 0) return null;
        try {
            return calcAffordability({
                grossMonthlyIncome: income,
                monthlyDebts: debts,
                downPayment,
                annualInterestRate: rate,
                loanTermYears: term,
                annualPropertyTax: propTaxRate,
                annualInsurance: 0,
                monthlyHOA: 0,
                creditScore,
            });
        } catch {
            return null;
        }
    }, [income, debts, downPayment, rate, term, propTaxRate, creditScore]);

    return (
        <div className="relative bg-white text-navy-900 pb-16">
            <div className="max-w-7xl mx-auto pt-5 sm:pt-7 pb-8">
                <header className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20"><Home className="text-indigo-500" size={22} /></div>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-indigo-500">Home-buying planning</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight">How Much House Can I Afford? Calculator</h1>
                    <p className="text-gray-500 max-w-3xl font-medium text-sm sm:text-lg">
                        Estimate a home-price range from your income, recurring debt, down payment, rate and property-tax assumptions. The 28% and 43% outputs are planning scenarios — not universal mortgage approval limits.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    <div className="lg:col-span-2">
                        <div className="glass-card p-5 sm:p-6 space-y-5">
                            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-400">Your assumptions</h2>

                            <label className="block">
                                <span className="input-label">Gross Monthly Income</span>
                                <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span><input className="glass-input pl-8" type="number" min={0} step={500} value={income} onChange={(e) => setIncome(Number(e.target.value))} /></div>
                                <span className="text-xs text-gray-500 mt-1 block">Annual gross income: {formatCurrency(income * 12)}</span>
                            </label>

                            <label className="block">
                                <span className="input-label">Recurring Monthly Debt</span>
                                <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span><input className="glass-input pl-8" type="number" min={0} step={50} value={debts} onChange={(e) => setDebts(Number(e.target.value))} /></div>
                                <span className="text-xs text-gray-500 mt-1 block">Use required recurring obligations for a planning estimate; lender treatment can differ.</span>
                            </label>

                            <label className="block">
                                <span className="input-label">Down Payment</span>
                                <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span><input className="glass-input pl-8" type="number" min={0} step={5000} value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} /></div>
                            </label>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="block">
                                    <span className="input-label">Interest Rate</span>
                                    <div className="relative"><input className="glass-input pr-8" type="number" min={0.1} max={20} step={0.125} value={rate} onChange={(e) => setRate(Number(e.target.value))} /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span></div>
                                </label>
                                <label className="block">
                                    <span className="input-label">Property Tax Rate</span>
                                    <div className="relative"><input className="glass-input pr-8" type="number" min={0} max={10} step={0.1} value={propTaxRate} onChange={(e) => setPropTaxRate(Number(e.target.value))} /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span></div>
                                </label>
                            </div>

                            <label className="block">
                                <span className="input-label">Credit Profile</span>
                                <select className="glass-input" value={creditScore} onChange={(e) => setCreditScore(e.target.value as typeof creditScore)}>
                                    <option value="excellent">Excellent (750+)</option>
                                    <option value="good">Good (700–749)</option>
                                    <option value="fair">Fair (650–699)</option>
                                    <option value="poor">Below 650</option>
                                </select>
                            </label>

                            <div>
                                <span className="input-label">Loan Term</span>
                                <div className="glass-tab-list p-1 flex gap-1">
                                    {[15, 20, 30].map((years) => (
                                        <button key={years} type="button" onClick={() => setTerm(years)} className={`flex-1 py-3 rounded-lg text-xs font-black ${term === years ? 'bg-indigo-500 text-white' : 'text-gray-500'}`}>{years} YR</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-5">
                        {result ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="glass-card p-5 border-emerald-500/20">
                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-3">28% housing-cost scenario</p>
                                        <p className="text-4xl font-black tabular-nums">{formatCurrency(result.conservativeHomePrice, 0)}</p>
                                        <p className="text-xs text-gray-500 mt-3">A conservative planning output based on housing cost at 28% of gross monthly income.</p>
                                    </div>
                                    <div className="glass-card p-5 border-indigo-500/20">
                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 mb-3">43% total-debt scenario</p>
                                        <p className="text-4xl font-black tabular-nums">{formatCurrency(result.maxHomePrice, 0)}</p>
                                        <p className="text-xs text-gray-500 mt-3">A stretch planning output based on total debt at 43% — not a current General QM maximum or approval guarantee.</p>
                                    </div>
                                </div>

                                <div className="glass-card p-5 sm:p-6">
                                    <div className="flex items-center gap-2 mb-5"><Scale size={18} className="text-indigo-500" /><h2 className="font-black">Debt-to-Income Snapshot</h2></div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="rounded-xl border border-gray-200 p-4"><p className="text-xs uppercase tracking-wider text-gray-500">Housing / gross income</p><p className="text-3xl font-black mt-2">{formatPercent(result.frontEndDTI, 1)}</p></div>
                                        <div className="rounded-xl border border-gray-200 p-4"><p className="text-xs uppercase tracking-wider text-gray-500">Total debt / gross income</p><p className="text-3xl font-black mt-2">{formatPercent(result.backEndDTI, 1)}</p></div>
                                    </div>
                                    <div className="mt-4 flex gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4 text-sm text-blue-900">
                                        <Info size={18} className="shrink-0 mt-0.5" />
                                        <p>The CFPB removed the former fixed 43% DTI cap from the General Qualified Mortgage definition and replaced it with price-based thresholds. Actual underwriting varies by program and lender.</p>
                                    </div>
                                </div>

                                <div className="glass-card p-5 sm:p-6">
                                    <div className="flex items-center gap-2 mb-5"><TrendingUp size={18} className="text-indigo-500" /><h2 className="font-black">Planning Output</h2></div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <div className="flex justify-between border-b border-gray-100 py-3"><span>Stretch loan amount</span><strong>{formatCurrency(result.maxLoanAmount)}</strong></div>
                                        <div className="flex justify-between border-b border-gray-100 py-3"><span>Estimated monthly payment</span><strong>{formatCurrency(result.monthlyPaymentAtMax)}</strong></div>
                                        <div className="flex justify-between border-b border-gray-100 py-3"><span>2026 conforming baseline</span><strong>{formatCurrency(US_MORTGAGE_CONSTANTS.CONFORMING_LOAN_LIMIT)}</strong></div>
                                        <div className="flex justify-between border-b border-gray-100 py-3"><span>2026 FHA one-unit floor</span><strong>{formatCurrency(US_MORTGAGE_CONSTANTS.FHA_FLOOR)}</strong></div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="glass-card p-8 text-center"><p className="font-bold">Enter a positive income to calculate an affordability range.</p></div>
                        )}
                        <DisclaimerBanner calculatorName="the Home Affordability Calculator" />
                    </div>
                </div>
            </div>
        </div>
    );
}
