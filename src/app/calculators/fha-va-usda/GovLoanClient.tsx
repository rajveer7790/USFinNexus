'use client';

import { useState, useMemo } from 'react';
import { calcGovLoan, formatCurrency, formatPercent, type GovLoanType, US_MORTGAGE_CONSTANTS } from '@/lib/formulas';
import { exportGenericCSV } from '@/lib/csvExporter';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { Shield, Info, Table2 } from 'lucide-react';

const TABS: { key: GovLoanType; label: string; icon: string; color: string }[] = [
    { key: 'fha', label: 'FHA Loan', icon: '🏠', color: '#059669' },
    { key: 'va', label: 'VA Loan', icon: '🎖️', color: '#1d4ed8' },
    { key: 'usda', label: 'USDA Loan', icon: '🌾', color: '#d97706' },
];

const LOAN_TERMS = [15, 20, 30];

export default function GovLoanClient() {
    const [loanType, setLoanType] = useState<GovLoanType>('fha');
    const [homePrice, setHomePrice] = useState(350000);
    const [downPct, setDownPct] = useState(3.5);
    const [rate, setRate] = useState(6.25);
    const [term, setTerm] = useState(30);
    const [propTax, setPropTax] = useState(4200);
    const [insurance, setInsurance] = useState(1400);
    const [vaFirstTime, setVaFirstTime] = useState(true);
    const [vaDisability, setVaDisability] = useState(false);

    // Auto-adjust min down when switching loan types
    const minDown = loanType === 'fha' ? 3.5 : 0;
    const effectiveDown = Math.max(downPct, minDown);

    const result = useMemo(() => {
        if (homePrice <= 0 || rate <= 0) return null;
        return calcGovLoan({
            loanType, homePrice, downPaymentPercent: effectiveDown,
            annualInterestRate: rate, loanTermYears: term,
            annualPropertyTax: propTax, annualInsurance: insurance,
            vaFirstTimeUse: vaFirstTime, vaDisabilityExempt: vaDisability,
        });
    }, [loanType, homePrice, effectiveDown, rate, term, propTax, insurance, vaFirstTime, vaDisability]);

    const activeTab = TABS.find(t => t.key === loanType)!;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-navy-900 dark:text-white mb-2">
                    FHA / VA / USDA Loan Calculator 2026
                </h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Compare government-backed mortgage programs. See MIP, VA funding fees, and USDA guarantee fees calculated automatically to 2026 guidelines.
                </p>
            </div>

            {/* Loan Type Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
                {TABS.map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => { setLoanType(tab.key); if (tab.key !== 'fha' && downPct < 0) setDownPct(0); }}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all border-2 ${loanType === tab.key ? 'text-white border-transparent shadow-lg' : 'border-current'}`}
                        style={{
                            background: loanType === tab.key ? tab.color : 'transparent',
                            color: loanType === tab.key ? 'white' : 'var(--color-text-muted)',
                            borderColor: loanType === tab.key ? 'transparent' : undefined,
                        }}
                    >
                        <span className="text-lg">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* LEFT: Inputs */}
                <div className="xl:col-span-2 space-y-4">
                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-5" style={{ color: 'var(--color-text-muted)' }}>
                            {activeTab.label} Details
                        </h2>

                        <div className="mb-5">
                            <label className="input-label">Home Price</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input type="number" className="input-field pl-7" value={homePrice} onChange={e => setHomePrice(+e.target.value)} min={50000} step={5000} />
                            </div>
                            <input type="range" min={100000} max={1500000} step={5000} value={homePrice} onChange={e => setHomePrice(+e.target.value)} className="slider w-full mt-2" style={{ '--value': `${((homePrice - 100000) / 1400000) * 100}%` } as React.CSSProperties} />
                        </div>

                        <div className="mb-5">
                            <label className="input-label">Down Payment</label>
                            <div className="relative">
                                <input type="number" className="input-field pr-8" value={effectiveDown} onChange={e => setDownPct(+e.target.value)} min={minDown} max={50} step={0.5} />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>%</span>
                            </div>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                {formatCurrency(homePrice * effectiveDown / 100)} • Min {loanType === 'fha' ? '3.5%' : '0%'} for {activeTab.label}
                            </p>
                        </div>

                        <div className="mb-5">
                            <label className="input-label">Interest Rate</label>
                            <div className="relative">
                                <input type="number" className="input-field pr-8" value={rate} onChange={e => setRate(+e.target.value)} min={1} max={15} step={0.125} />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>%</span>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label className="input-label">Loan Term</label>
                            <div className="flex gap-2">
                                {LOAN_TERMS.map(t => (
                                    <button key={t} onClick={() => setTerm(t)}
                                        className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${term === t ? 'text-white border-transparent' : 'border-current'}`}
                                        style={{ background: term === t ? activeTab.color : 'transparent', color: term === t ? 'white' : 'var(--color-text-muted)' }}>
                                        {t} yr
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="input-label">Property Tax/yr</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                    <input type="number" className="input-field pl-7" value={propTax} onChange={e => setPropTax(+e.target.value)} min={0} step={100} />
                                </div>
                            </div>
                            <div>
                                <label className="input-label">Insurance/yr</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                    <input type="number" className="input-field pl-7" value={insurance} onChange={e => setInsurance(+e.target.value)} min={0} step={100} />
                                </div>
                            </div>
                        </div>

                        {/* VA-specific options */}
                        {loanType === 'va' && (
                            <div className="mt-5 p-4 rounded-xl border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700">
                                <h3 className="text-xs font-bold mb-3 text-blue-700 dark:text-blue-300">VA Loan Options</h3>
                                <label className="flex items-center gap-3 cursor-pointer mb-2">
                                    <input type="checkbox" checked={vaFirstTime} onChange={e => setVaFirstTime(e.target.checked)} className="w-4 h-4 accent-blue-600" />
                                    <span className="text-sm" style={{ color: 'var(--color-text)' }}>First-time VA loan use</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" checked={vaDisability} onChange={e => setVaDisability(e.target.checked)} className="w-4 h-4 accent-blue-600" />
                                    <span className="text-sm" style={{ color: 'var(--color-text)' }}>Disability exemption (no funding fee)</span>
                                </label>
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT: Results */}
                <div className="xl:col-span-3 space-y-5">
                    {result ? (
                        <div className="card p-6 animate-slide-up">
                            {/* Total payment hero */}
                            <div className="text-center mb-6">
                                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>Total Monthly Payment</p>
                                <div className="payment-amount">{formatCurrency(result.totalMonthly)}</div>
                            </div>

                            {/* PITI breakdown */}
                            <div className="space-y-0 mb-6">
                                {[
                                    { label: 'Principal & Interest', value: result.monthlyPrincipalInterest, color: activeTab.color },
                                    { label: loanType === 'fha' ? 'Monthly MIP' : loanType === 'usda' ? 'Annual Fee (Monthly)' : 'VA Fee (Monthly)', value: result.monthlyMIP, color: '#f59e0b' },
                                    { label: 'Property Tax', value: result.monthlyPropertyTax, color: '#00C853' },
                                    { label: 'Homeowners Insurance', value: result.monthlyInsurance, color: '#1a4d9a' },
                                ].filter(r => r.value > 0).map(row => (
                                    <div key={row.label} className="result-row">
                                        <span className="result-label flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: row.color }} />
                                            {row.label}
                                        </span>
                                        <span className="result-value">{formatCurrency(row.value)}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between items-center pt-3 mt-2 border-t-2" style={{ borderColor: activeTab.color }}>
                                    <span className="font-black text-sm" style={{ color: 'var(--color-text)' }}>Total Monthly</span>
                                    <span className="text-lg font-black" style={{ color: activeTab.color }}>{formatCurrency(result.totalMonthly)}</span>
                                </div>
                            </div>

                            {/* Fees detail */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                                {[
                                    ['Base Loan', formatCurrency(result.baseLoanAmount)],
                                    ['Upfront Fee', `${formatCurrency(result.upfrontFee)} (${formatPercent(result.upfrontFeePercent, 2)})`],
                                    ['Total Loan', formatCurrency(result.loanAmount)],
                                    ['Annual Fee', `${formatCurrency(result.annualFee)}/yr (${formatPercent(result.annualFeePercent, 2)})`],
                                    ['Total Interest', formatCurrency(result.totalInterest)],
                                    ['Total Cost', formatCurrency(result.totalCost)],
                                ].map(([label, value]) => (
                                    <div key={String(label)} className="p-3 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                                        <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>{label}</p>
                                        <p className="text-sm font-bold tabular-nums" style={{ color: 'var(--color-text)' }}>{value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Eligibility badges */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                                <div className={`p-3 rounded-xl border ${loanType === 'fha' ? 'border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700' : 'border-gray-200 bg-gray-50 dark:bg-navy-800 dark:border-navy-700'}`}>
                                    <h4 className="text-xs font-bold mb-1">🏠 FHA</h4>
                                    <p className="text-[10px]" style={{ color: 'var(--color-text-muted)' }}>
                                        3.5% min down • 1.75% upfront MIP • 0.55% annual MIP • Limit: {formatCurrency(US_MORTGAGE_CONSTANTS.FHA_FLOOR)}
                                    </p>
                                </div>
                                <div className={`p-3 rounded-xl border ${loanType === 'va' ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700' : 'border-gray-200 bg-gray-50 dark:bg-navy-800 dark:border-navy-700'}`}>
                                    <h4 className="text-xs font-bold mb-1">🎖️ VA</h4>
                                    <p className="text-[10px]" style={{ color: 'var(--color-text-muted)' }}>
                                        0% down eligible • No PMI • Funding fee 1.25-3.3% • Veterans & active duty
                                    </p>
                                </div>
                                <div className={`p-3 rounded-xl border ${loanType === 'usda' ? 'border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700' : 'border-gray-200 bg-gray-50 dark:bg-navy-800 dark:border-navy-700'}`}>
                                    <h4 className="text-xs font-bold mb-1">🌾 USDA</h4>
                                    <p className="text-[10px]" style={{ color: 'var(--color-text-muted)' }}>
                                        0% down • 1% upfront fee • 0.35% annual fee • Rural areas only
                                    </p>
                                </div>
                            </div>

                            {/* Info box */}
                            <div className="p-3 rounded-xl border border-blue-200 bg-blue-50 dark:bg-blue-900/10 dark:border-blue-800">
                                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                    <Info size={12} className="inline mr-1" />
                                    <strong>Note:</strong> {loanType === 'fha' ? 'FHA MIP is required for the life of the loan (for loans with down payment < 10%). The upfront MIP is typically rolled into the loan balance.' : loanType === 'va' ? 'VA funding fee varies by service type, down payment, and first vs. subsequent use. Veterans with service-connected disabilities are exempt.' : 'USDA loans are limited to eligible rural areas. Income limits apply based on county and household size. Check USDA eligibility maps online.'}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="card p-12 text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--color-bg-secondary)' }}>
                                <Shield size={28} style={{ color: 'var(--color-text-muted)' }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Select a government loan type</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                Choose FHA, VA, or USDA and enter your home price to see the full payment breakdown with government fees.
                            </p>
                        </div>
                    )}
                    <DisclaimerBanner calculatorName="the FHA / VA / USDA Calculator" />
                </div>
            </div>
        </div>
    );
}
