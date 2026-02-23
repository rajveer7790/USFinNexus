'use client';

import { useState, useMemo } from 'react';
import { calcAffordability, formatCurrency, formatPercent, US_MORTGAGE_CONSTANTS } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-navy-900 dark:text-white mb-2">How Much House Can I Afford?</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Based on CFPB guidelines: 28% front-end DTI / 43% back-end DTI for Qualified Mortgages. 2026 loan limits from FHFA.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* Inputs */}
                <div className="xl:col-span-2 space-y-4">
                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-5" style={{ color: 'var(--color-text-muted)' }}>Your Financial Profile</h2>

                        <div className="mb-4">
                            <label className="input-label">Gross Monthly Income</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input type="number" className="input-field pl-7" value={income} onChange={e => setIncome(+e.target.value)} min={0} step={500} />
                            </div>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>Before taxes (gross). Annual: {formatCurrency(income * 12)}</p>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Monthly Debts</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input type="number" className="input-field pl-7" value={debts} onChange={e => setDebts(+e.target.value)} min={0} step={50} />
                            </div>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>Car loans, student loans, credit cards (minimums)</p>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Down Payment Available</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input type="number" className="input-field pl-7" value={downPayment} onChange={e => setDownPayment(+e.target.value)} min={0} step={5000} />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Credit Score Range</label>
                            <select className="input-field" value={creditScore} onChange={e => setCreditScore(e.target.value as typeof creditScore)}>
                                <option value="excellent">Excellent (750+)</option>
                                <option value="good">Good (700–749)</option>
                                <option value="fair">Fair (650–699)</option>
                                <option value="poor">Poor (Below 650)</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Interest Rate</label>
                            <div className="relative">
                                <input type="number" className="input-field pr-8" value={rate} onChange={e => setRate(+e.target.value)} min={0.1} max={20} step={0.125} />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold" style={{ color: 'var(--color-text-muted)' }}>%</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Loan Term</label>
                            <div className="flex gap-2">
                                {[15, 20, 30].map(t => (
                                    <button
                                        key={t}
                                        onClick={() => setTerm(t)}
                                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold border transition-all ${term === t ? 'text-white border-transparent' : 'border-current'}`}
                                        style={{ background: term === t ? 'var(--color-navy)' : 'transparent', color: term === t ? 'white' : 'var(--color-text-muted)' }}
                                    >
                                        {t} yr
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Annual Property Tax Rate</label>
                            <div className="relative">
                                <input type="number" className="input-field pr-8" value={propTaxRate} onChange={e => setPropTaxRate(+e.target.value)} min={0} max={5} step={0.1} />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold" style={{ color: 'var(--color-text-muted)' }}>%</span>
                            </div>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>National avg: 1.1%. TX: 1.68%, CA: 0.76%, NJ: 2.47%</p>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="xl:col-span-3 space-y-5">
                    {result ? (
                        <>
                            {/* Main Result */}
                            <div className="card p-6 animate-slide-up">
                                <h2 className="text-sm font-bold uppercase tracking-wide mb-6" style={{ color: 'var(--color-text-muted)' }}>Your Affordability Results</h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="p-5 rounded-xl text-center" style={{ background: 'rgba(0,200,83,0.08)', border: '2px solid #00C853' }}>
                                        <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#00C853' }}>Conservative Estimate</p>
                                        <p className="text-4xl font-black mb-1" style={{ color: 'var(--color-navy)' }}>
                                            {formatCurrency(result.conservativeHomePrice, 0)}
                                        </p>
                                        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>28% front-end DTI (CFPB recommended)</p>
                                    </div>
                                    <div className="p-5 rounded-xl text-center" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
                                        <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>Maximum (Stretch)</p>
                                        <p className="text-4xl font-black mb-1" style={{ color: 'var(--color-text)' }}>
                                            {formatCurrency(result.maxHomePrice, 0)}
                                        </p>
                                        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>43% back-end DTI (QM limit)</p>
                                    </div>
                                </div>

                                {/* DTI Meters */}
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <div className="flex justify-between items-center mb-1.5">
                                            <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>Front-End DTI (Housing)</span>
                                            <span className={`text-xs font-bold flex items-center gap-1 ${frontEndOk ? 'text-green-600' : 'text-red-500'}`}>
                                                {frontEndOk ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                                                {formatPercent(result.frontEndDTI, 1)} / 28% limit
                                            </span>
                                        </div>
                                        <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
                                            <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, result.frontEndDTI / 50 * 100)}%`, background: result.frontEndDTI <= 28 ? '#00C853' : result.frontEndDTI <= 36 ? '#f59e0b' : '#ef4444' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-1.5">
                                            <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>Back-End DTI (Total Debt)</span>
                                            <span className={`text-xs font-bold flex items-center gap-1 ${backEndOk ? 'text-green-600' : 'text-red-500'}`}>
                                                {backEndOk ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                                                {formatPercent(result.backEndDTI, 1)} / 43% limit
                                            </span>
                                        </div>
                                        <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
                                            <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, result.backEndDTI / 60 * 100)}%`, background: result.backEndDTI <= 36 ? '#00C853' : result.backEndDTI <= 43 ? '#f59e0b' : '#ef4444' }} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-0">
                                    {[
                                        ['Max Loan Amount', formatCurrency(result.maxLoanAmount)],
                                        ['Loan Category', result.loanType],
                                        ['Monthly Payment at Max', formatCurrency(result.monthlyPaymentAtMax)],
                                        ['2026 Conforming Limit', formatCurrency(US_MORTGAGE_CONSTANTS.CONFORMING_LOAN_LIMIT)],
                                        ['2026 FHA Floor', formatCurrency(US_MORTGAGE_CONSTANTS.FHA_FLOOR)],
                                    ].map(([label, value]) => (
                                        <div key={String(label)} className="result-row">
                                            <span className="result-label">{label}</span>
                                            <span className="result-value">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 p-3 rounded-xl flex gap-2" style={{ background: 'var(--color-bg-secondary)' }}>
                                    <Info size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-text-muted)' }} />
                                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                        <strong>CFPB Guidelines:</strong> For a Qualified Mortgage (QM), total debt-to-income must not exceed 43%. Housing expense should ideally stay at or below 28% of gross income. Source: consumerfinance.gov
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="card p-12 text-center">
                            <p className="text-lg font-bold mb-2">Enter your financial details</p>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Fill in your income, debts, and down payment to see your home affordability.</p>
                        </div>
                    )}
                    <DisclaimerBanner calculatorName="the Affordability Calculator" />
                </div>
            </div>
        </div>
    );
}
