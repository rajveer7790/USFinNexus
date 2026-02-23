'use client';

import { useState, useMemo } from 'react';
import { calcInterestOnly, formatCurrency, formatPercent } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';

export default function InterestOnlyClient() {
    const [homePrice, setHomePrice] = useState(500000);
    const [downPayment, setDownPayment] = useState(100000);
    const [interestRate, setInterestRate] = useState(6.5);
    const [ioTerm, setIoTerm] = useState(10);
    const [loanTerm, setLoanTerm] = useState(30);

    const loanAmount = homePrice - downPayment;

    const result = useMemo(() => {
        if (loanAmount <= 0) return null;
        try {
            return calcInterestOnly({
                loanAmount,
                annualInterestRate: interestRate,
                ioTermYears: ioTerm,
                loanTermYears: loanTerm,
            });
        } catch { return null; }
    }, [loanAmount, interestRate, ioTerm, loanTerm]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-navy-900 dark:text-white mb-2">Interest-Only Mortgage Calculator</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Calculate your payments during the initial interest-only period, and see how much your payment will jump when the loan fully amortizes.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* Left Column - Inputs */}
                <div className="xl:col-span-2 space-y-4">
                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: 'var(--color-text-muted)' }}>Loan Details</h2>

                        {[
                            { label: 'Home Price', v: homePrice, set: setHomePrice, prefix: '$', step: 5000 },
                            { label: 'Down Payment', v: downPayment, set: setDownPayment, prefix: '$', step: 5000 },
                        ].map(f => (
                            <div key={f.label} className="mb-4">
                                <label className="input-label">{f.label}</label>
                                <div className="relative">
                                    {f.prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-gray-400">{f.prefix}</span>}
                                    <input type="number" className={`input-field ${f.prefix ? 'pl-7' : ''}`} value={f.v} onChange={e => f.set(+e.target.value)} step={f.step} />
                                </div>
                            </div>
                        ))}

                        <div className="mt-4 mb-6 p-4 rounded-xl bg-gray-50 dark:bg-navy-900 border dark:border-navy-700">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Loan Amount:</span>
                                <span className="text-lg font-black text-navy-900 dark:text-white">{formatCurrency(loanAmount)}</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Interest Rate</label>
                            <div className="relative">
                                <input type="number" className="input-field pr-8" value={interestRate} onChange={e => setInterestRate(+e.target.value)} step={0.125} />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-gray-400">%</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Interest-Only Period (Years)</label>
                            <div className="flex gap-2">
                                {[5, 7, 10].map(t => (
                                    <button key={t} onClick={() => setIoTerm(t)}
                                        className={`flex-1 py-2 rounded-lg text-sm font-semibold border transition-all ${ioTerm === t ? 'text-white border-transparent' : 'border-current'}`}
                                        style={{ background: ioTerm === t ? 'var(--color-navy)' : 'transparent', color: ioTerm === t ? 'white' : 'var(--color-text-muted)' }}>
                                        {t} yr
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Total Loan Term (Years)</label>
                            <div className="flex gap-2">
                                {[30, 40].map(t => (
                                    <button key={t} onClick={() => setLoanTerm(t)}
                                        className={`flex-1 py-1.5 rounded-lg text-sm font-semibold border transition-all ${loanTerm === t ? 'text-white border-transparent' : 'border-current'}`}
                                        style={{ background: loanTerm === t ? 'var(--color-navy)' : 'transparent', color: loanTerm === t ? 'white' : 'var(--color-text-muted)' }}>
                                        {t} yr
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Results */}
                <div className="xl:col-span-3 space-y-5">
                    {result ? (
                        <>
                            {/* Payment Timeline Visual */}
                            <div className="card p-0 overflow-hidden shadow-lg animate-slide-up">
                                {/* Top Half: IO Period */}
                                <div className="p-8 bg-green-50 dark:bg-green-900/10 border-b-4 border-green-500 relative">
                                    <span className="absolute top-4 right-4 px-3 py-1 bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-100 rounded-full text-xs font-bold shadow-sm">Years 1-{ioTerm}</span>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-green-700 dark:text-green-400 mb-1">Phase 1: Interest Only</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">You pay zero principal. Loan balance remains exactly {formatCurrency(loanAmount)}.</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-black text-green-700 dark:text-green-400">{formatCurrency(result.ioMonthlyPayment)}</span>
                                        <span className="text-green-700/70 font-bold">/mo</span>
                                    </div>
                                </div>

                                {/* Bottom Half: Amortization Jump */}
                                <div className="p-8 bg-white dark:bg-navy-900 relative">
                                    <span className="absolute top-4 right-4 px-3 py-1 bg-gray-100 text-gray-600 dark:bg-navy-800 dark:text-gray-300 rounded-full text-xs font-bold shadow-sm">Years {ioTerm + 1}-{loanTerm}</span>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">Phase 2: Fully Amortizing</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                                        Payment jumps to pay off the full {formatCurrency(loanAmount)} balance in only {loanTerm - ioTerm} years.
                                    </p>

                                    <div className="flex justify-between items-end">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-black text-navy-900 dark:text-white">{formatCurrency(result.amortizedMonthlyPayment)}</span>
                                            <span className="text-gray-500 font-bold">/mo</span>
                                        </div>

                                        <div className="text-right">
                                            <span className="inline-block px-3 py-1.5 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-black text-sm border-l-4 border-red-500">
                                                +{formatCurrency(result.amortizedMonthlyPayment - result.ioMonthlyPayment)} Jump
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="card p-5 bg-gray-50 dark:bg-navy-800/50">
                                    <p className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-1">Total Payments Over Life</p>
                                    <p className="text-2xl font-black text-navy-900 dark:text-white">{formatCurrency(result.totalPayments)}</p>
                                </div>
                                <div className="card p-5 bg-gray-50 dark:bg-navy-800/50">
                                    <p className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-1">Total Interest Paid</p>
                                    <p className="text-2xl font-black text-orange-600 dark:text-orange-400">{formatCurrency(result.totalInterest)}</p>
                                </div>
                            </div>

                            <div className="card p-5">
                                <h3 className="font-bold text-navy-900 dark:text-white mb-2">The Danger of Interest-Only</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    If you make minimum payments for the first {ioTerm} years, you build <strong>zero equity</strong> from payments.
                                    In year {ioTerm + 1}, your payment will jump by {formatPercent(((result.amortizedMonthlyPayment - result.ioMonthlyPayment) / result.ioMonthlyPayment) * 100)}% to {formatCurrency(result.amortizedMonthlyPayment)}.
                                    You must be prepared to handle this &quot;payment shock&quot; or refinance/sell before phase 2 begins.
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="card p-12 text-center flex-1 flex flex-col justify-center">
                            <p className="text-lg font-bold">Enter loan details to see the payment timeline</p>
                        </div>
                    )}

                    <div className="mt-4">
                        <DisclaimerBanner calculatorName="the Interest-Only Calculator" />
                    </div>
                </div>
            </div>
        </div>
    );
}
