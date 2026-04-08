'use client';

import { useState, useMemo } from 'react';
import { calcAffordability, formatCurrency, formatPercent, US_MORTGAGE_CONSTANTS } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { CheckCircle, AlertCircle, Info, Shield, Zap, TrendingUp } from 'lucide-react';

export default function AffordabilityClient() {
    const [income, setIncome] = useState(7500);
    const [debts, setDebts] = useState(500);
    const [downPayment, setDownPayment] = useState(50000);
    const [rate, setRate] = useState(6.75);
    const [term, setTerm] = useState(30);
    const [propTaxRate, setPropTaxRate] = useState(1.2);
    const [insurance] = useState(0);
    const [hoa] = useState(0);
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
                annualInsurance: insurance,
                monthlyHOA: hoa,
                creditScore,
            });
        } catch { return null; }
    }, [income, debts, downPayment, rate, term, propTaxRate, insurance, hoa, creditScore]);

    const frontEndOk = result ? result.frontEndDTI <= 28 : null;
    const backEndOk = result ? result.backEndDTI <= 43 : null;

    return (
        <div className="relative min-h-screen bg-white text-navy-900 pb-20">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0da6f2]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[130px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 relative z-10">
                <div className="mb-6 sm:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                            <Shield className="text-indigo-500" size={24} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500">Qualification Analysis</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-none bg-gradient-to-r from-navy-900 via-indigo-500 to-navy-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
                        How Much House Can You Afford?
                    </h1>
                    <p className="text-gray-500 max-w-2xl font-medium text-sm sm:text-lg">
                        Smart affordability analysis based on CFPB guidelines and 2026 FHFA loan limits.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    {/* LEFT: Inputs */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass-card p-4 sm:p-8">
                            <div className="flex justify-between items-center mb-5 sm:mb-8">
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Financial Profile</h2>
                                <Info size={16} className="text-gray-400" />
                            </div>

                            <div className="space-y-5 sm:space-y-8">
                                <div>
                                    <label className="input-label">Gross Monthly Income</label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-indigo-500 transition-colors">$</span>
                                        <input
                                            type="number"
                                            className="glass-input pl-8"
                                            value={income}
                                            onChange={e => setIncome(+e.target.value)}
                                            min={0}
                                            step={500}
                                        />
                                    </div>
                                    <p className="text-xs mt-2 font-bold uppercase tracking-widest text-indigo-500">
                                        Annual: {formatCurrency(income * 12)}
                                    </p>
                                </div>

                                <div>
                                    <label className="input-label">Monthly Debts</label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-indigo-500 transition-colors">$</span>
                                        <input
                                            type="number"
                                            className="glass-input pl-8"
                                            value={debts}
                                            onChange={e => setDebts(+e.target.value)}
                                            min={0}
                                            step={50}
                                        />
                                    </div>
                                    <p className="text-xs mt-2 font-bold text-gray-400 uppercase tracking-tighter italic">
                                        Car loans, students, credit card minimums
                                    </p>
                                </div>

                                <div>
                                    <label className="input-label">Down Payment</label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-indigo-500 transition-colors">$</span>
                                        <input
                                            type="number"
                                            className="glass-input pl-8"
                                            value={downPayment}
                                            onChange={e => setDownPayment(+e.target.value)}
                                            min={0}
                                            step={5000}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="input-label">Credit Score</label>
                                        <select 
                                            className="glass-input appearance-none" 
                                            value={creditScore} 
                                            onChange={e => setCreditScore(e.target.value as typeof creditScore)}
                                        >
                                            <option value="excellent">Excellent (750+)</option>
                                            <option value="good">Good (700-749)</option>
                                            <option value="fair">Fair (650-699)</option>
                                            <option value="poor">Poor (&lt; 650)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="input-label">Interest Rate</label>
                                        <div className="relative group">
                                            <input 
                                                type="number" 
                                                className="glass-input pr-8"
                                                value={rate} 
                                                onChange={e => setRate(+e.target.value)} 
                                                min={0.1} 
                                                max={20} 
                                                step={0.125} 
                                            />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-indigo-500 transition-colors">%</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="input-label">Loan Term</label>
                                    <div className="glass-tab-list p-1 flex gap-1">
                                        {[15, 20, 30].map(t => (
                                            <button
                                                key={t}
                                                onClick={() => setTerm(t)}
                                                className={`flex-1 py-3 px-4 rounded-lg text-xs font-black transition-all ${term === t ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-500 hover:bg-white/5'}`}
                                            >
                                                {t} YR
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="input-label">Property Tax Rate (%)</label>
                                    <div className="relative group">
                                        <input 
                                            type="number" 
                                            className="glass-input pr-8"
                                            value={propTaxRate} 
                                            onChange={e => setPropTaxRate(+e.target.value)} 
                                            min={0} 
                                            max={5} 
                                            step={0.1} 
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-indigo-500 transition-colors">%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Results */}
                    <div className="lg:col-span-3 space-y-5 sm:space-y-8 lg:self-start">
                        {result ? (
                            <div className="space-y-5 sm:space-y-8 animate-slide-up">
                                {/* Comparison Hero Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="glass-card p-5 sm:p-10 relative overflow-hidden group border-emerald-500/20">
                                        <div className="absolute top-0 right-0 p-6">
                                            <TrendingUp className="text-emerald-500/20 group-hover:text-emerald-500 group-hover:scale-125 transition-all" size={32} />
                                        </div>
                                        <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-4">Conservative Estimate</p>
                                        <div className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter text-glow tabular-nums transition-all group-hover:scale-105 duration-500">
                                            {formatCurrency(result.conservativeHomePrice, 0)}
                                        </div>
                                        <p className="text-xs mt-4 sm:mt-6 font-bold uppercase tracking-widest text-gray-500 border-t border-white/5 pt-4 sm:pt-6">
                                            Based on 28% front-end DTI
                                        </p>
                                    </div>

                                    <div className="glass-card p-5 sm:p-10 border-indigo-500/20 relative group">
                                        <div className="absolute top-0 right-0 p-6">
                                            <Zap className="text-indigo-500/20 group-hover:text-indigo-500 group-hover:scale-125 transition-all" size={32} />
                                        </div>
                                        <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500 mb-4">Maximum (Stretch)</p>
                                        <div className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter tabular-nums transition-all group-hover:scale-105 duration-500">
                                            {formatCurrency(result.maxHomePrice, 0)}
                                        </div>
                                        <p className="text-xs mt-6 font-bold uppercase tracking-widest text-gray-500 border-t border-white/5 pt-6">
                                            Based on 43% back-end DTI
                                        </p>
                                    </div>
                                </div>

                                {/* DTI Meters Panel */}
                                <div className="glass-card p-4 sm:p-8">
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 sm:mb-10 text-gray-400">Debt-to-Income Analysis</h3>
                                    
                                    <div className="space-y-12">
                                        {/* Front End */}
                                        <div className="relative">
                                            <div className="flex justify-between items-end mb-4">
                                                <div>
                                                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 block mb-1">Front-End DTI (Housing)</span>
                                                    <span className={`text-sm font-black flex items-center gap-2 ${frontEndOk ? 'text-emerald-500' : 'text-amber-500'}`}>
                                                        {frontEndOk ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                                                        {frontEndOk ? 'Recommended' : 'High Burden'}
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-2xl sm:text-4xl font-black tabular-nums">{formatPercent(result.frontEndDTI, 1)}</span>
                                                    <span className="text-xs font-bold text-gray-500 uppercase ml-2">/ 28% limit</span>
                                                </div>
                                            </div>
                                            <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
                                                <div 
                                                    className="h-full rounded-full transition-all duration-1000 ease-out relative group" 
                                                    style={{ 
                                                        width: `${Math.min(100, (result.frontEndDTI / 40) * 100)}%`, 
                                                        background: result.frontEndDTI <= 28 ? 'linear-gradient(90deg, #10b981, #34d399)' : result.frontEndDTI <= 36 ? 'linear-gradient(90deg, #f59e0b, #fbbf24)' : 'linear-gradient(90deg, #ef4444, #f87171)' 
                                                    }}
                                                >
                                                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Back End */}
                                        <div className="relative">
                                            <div className="flex justify-between items-end mb-4">
                                                <div>
                                                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 block mb-1">Back-End DTI (Total Debt)</span>
                                                    <span className={`text-sm font-black flex items-center gap-2 ${backEndOk ? 'text-emerald-500' : 'text-rose-500'}`}>
                                                        {backEndOk ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                                                        {backEndOk ? 'Within QM Limit' : 'Exceeds QM Limit'}
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-2xl sm:text-4xl font-black tabular-nums">{formatPercent(result.backEndDTI, 1)}</span>
                                                    <span className="text-xs font-bold text-gray-500 uppercase ml-2">/ 43% limit</span>
                                                </div>
                                            </div>
                                            <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
                                                <div 
                                                    className="h-full rounded-full transition-all duration-1000 ease-out relative" 
                                                    style={{ 
                                                        width: `${Math.min(100, (result.backEndDTI / 60) * 100)}%`, 
                                                        background: result.backEndDTI <= 36 ? 'linear-gradient(90deg, #10b981, #34d399)' : result.backEndDTI <= 43 ? 'linear-gradient(90deg, #f59e0b, #fbbf24)' : 'linear-gradient(90deg, #ef4444, #f87171)' 
                                                    }}
                                                >
                                                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Statistics Table */}
                                <div className="glass-card p-5 sm:p-10">
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-5 sm:mb-8 text-gray-400">Detailed Metric Breakdown</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                        {[
                                            { label: 'Max Loan Amount', value: formatCurrency(result.maxLoanAmount) },
                                            { label: 'Loan Category', value: result.loanType, accent: true },
                                            { label: 'Monthly Payment (Max)', value: formatCurrency(result.monthlyPaymentAtMax) },
                                            { label: 'FHFA Conforming Limit', value: formatCurrency(US_MORTGAGE_CONSTANTS.CONFORMING_LOAN_LIMIT) },
                                            { label: 'FHA Floor Limit', value: formatCurrency(US_MORTGAGE_CONSTANTS.FHA_FLOOR) },
                                            { label: 'Qualifying Balance', value: formatCurrency(income - debts) },
                                        ].map(row => (
                                            <div key={row.label} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 group hover:bg-white/5 px-2 rounded-lg transition-colors">
                                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{row.label}</span>
                                                <span className={`text-lg font-black tabular-nums ${row.accent ? 'text-indigo-400' : ''}`}>{row.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass-panel p-6 border-indigo-500/20 bg-indigo-500/5">
                                    <div className="flex gap-4">
                                        <Info className="flex-shrink-0 text-indigo-400" size={20} />
                                        <p className="text-sm font-medium leading-relaxed text-gray-600">
                                            <strong>QM Limitation:</strong> For a Qualified Mortgage (QM), your total debt-to-income must not exceed 43%. Lenders typically look for consistent income and a clear employment history. Calculated limits reflect national guidelines; local variations may apply.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="glass-card p-8 sm:p-24 text-center">
                                <TrendingUp size={48} className="mx-auto mb-6 text-gray-400 opacity-20" />
                                <h3 className="text-2xl font-black mb-4">Calculate Your Power</h3>
                                <p className="text-gray-500 max-w-md mx-auto font-medium">
                                    Enter your monthly income and current debts to see how much home a lender would realistically approve you for.
                                </p>
                            </div>
                        )}
                        <DisclaimerBanner calculatorName="the Affordability Calculator" />
                    </div>
                </div>
            </div>
        </div>
    );
}
