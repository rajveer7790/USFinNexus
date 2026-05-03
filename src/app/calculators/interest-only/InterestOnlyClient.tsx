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
        <div className="relative min-h-screen bg-white text-navy-900 pb-20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0da6f2]/6 rounded-full blur-[130px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/6 rounded-full blur-[120px]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 lg:pt-8 pb-8 sm:pb-12 relative z-10">
            <div className="mb-6 sm:mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <span className="text-amber-500 font-black text-lg">IO</span>
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-500">Interest-Only Loan</span>
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-navy-900 via-amber-500 to-navy-900 bg-clip-text text-transparent">
                    Interest-Only Calculator
                </h1>
                <p className="text-gray-500 max-w-2xl font-medium text-lg">
                    Calculate your payments during the interest-only period and see how much your payment will jump when the loan fully amortizes.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                {/* Left Column - Inputs */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card p-4 sm:p-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-5 sm:mb-8">Loan Details</h2>

                        {[
                            { label: 'Home Price', v: homePrice, set: setHomePrice, prefix: '$', step: 5000 },
                            { label: 'Down Payment', v: downPayment, set: setDownPayment, prefix: '$', step: 5000 },
                        ].map(f => (
                            <div key={f.label} className="mb-4">
                                <label className="input-label">{f.label}</label>
                                <div className="relative">
                                    {f.prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">{f.prefix}</span>}
                                    <input type="number" className={`input-field ${f.prefix ? 'pl-7' : ''}`} value={f.v} onChange={e => f.set(+e.target.value)} step={f.step} />
                                </div>
                            </div>
                        ))}

                        <div className="mt-4 mb-6 p-4 rounded-xl bg-gray-50 border">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-gray-600">Loan Amount:</span>
                                <span className="text-lg font-black text-navy-900">{formatCurrency(loanAmount)}</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Interest Rate</label>
                            <div className="relative">
                                <input type="number" className="input-field pr-8" value={interestRate} onChange={e => setInterestRate(+e.target.value)} step={0.125} />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">%</span>
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
                                        className={`flex-1 py-2 min-h-[36px] rounded-lg text-sm font-semibold border transition-all ${loanTerm === t ? 'text-white border-transparent' : 'border-current'}`}
                                        style={{ background: loanTerm === t ? 'var(--color-navy)' : 'transparent', color: loanTerm === t ? 'white' : 'var(--color-text-muted)' }}>
                                        {t} yr
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Results */}
                <div className="lg:col-span-3 space-y-6 lg:self-start">
                    {result ? (
                        <>
                            {/* Payment Timeline Visual */}
                            <div className="glass-card p-0 overflow-hidden shadow-lg animate-slide-up border-emerald-500/20">
                                {/* Top Half: IO Period */}
                                <div className="p-4 sm:p-6 bg-emerald-500/5 border-b border-emerald-500/20 relative">
                                    <span className="absolute top-5 right-5 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-black uppercase tracking-widest">Years 1-{ioTerm}</span>
                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-2">Phase 1: Interest Only</h3>
                                    <p className="text-xs text-gray-500 mb-6">You pay zero principal. Loan balance remains {formatCurrency(loanAmount)}.</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl sm:text-4xl font-black text-emerald-400 tabular-nums tracking-tighter">{formatCurrency(result.ioMonthlyPayment)}</span>
                                        <span className="text-emerald-500/70 font-black">/mo</span>
                                    </div>
                                </div>

                                {/* Bottom Half: Amortization Jump */}
                                <div className="p-4 sm:p-6 relative">
                                    <span className="absolute top-5 right-5 px-3 py-1 bg-rose-500/20 text-rose-400 rounded-full text-xs font-black uppercase tracking-widest">Years {ioTerm + 1}-{loanTerm}</span>
                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-2">Phase 2: Fully Amortizing</h3>
                                    <p className="text-xs text-gray-500 mb-6">
                                        Payment jumps to pay off the full {formatCurrency(loanAmount)} balance in {loanTerm - ioTerm} years.
                                    </p>

                                    <div className="flex justify-between items-end">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl sm:text-4xl font-black tabular-nums tracking-tighter">{formatCurrency(result.amortizedMonthlyPayment)}</span>
                                            <span className="text-gray-500 font-black">/mo</span>
                                        </div>

                                        <div className="text-right">
                                            <span className="inline-block px-4 py-2 rounded-xl bg-rose-500/10 text-rose-400 font-black text-sm border border-rose-500/30">
                                                +{formatCurrency(result.amortizedMonthlyPayment - result.ioMonthlyPayment)} Jump
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Stats */}
                            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                <div className="glass-card p-4 sm:p-6 text-center">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Total Payments</p>
                                    <p className="text-3xl font-black tabular-nums">{formatCurrency(result.totalPayments)}</p>
                                </div>
                                <div className="glass-card p-4 sm:p-6 text-center">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Total Interest Paid</p>
                                    <p className="text-3xl font-black tabular-nums text-amber-500">{formatCurrency(result.totalInterest)}</p>
                                </div>
                            </div>

                            <div className="glass-card p-8">
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-6">⚠ The Danger of Interest-Only</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    If you make minimum payments for the first {ioTerm} years, you build <strong>zero equity</strong> from payments.
                                    In year {ioTerm + 1}, your payment will jump by {formatPercent(((result.amortizedMonthlyPayment - result.ioMonthlyPayment) / result.ioMonthlyPayment) * 100)}% to {formatCurrency(result.amortizedMonthlyPayment)}.
                                    You must be prepared to handle this &ldquo;payment shock&rdquo; or refinance/sell before phase 2 begins.
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="card p-4 sm:p-6 text-center flex-1 flex flex-col justify-center">
                            <p className="text-lg font-bold">Enter loan details to see the payment timeline</p>
                        </div>
                    )}

                    <DisclaimerBanner calculatorName="the Interest-Only Calculator" />
                </div>
            </div>
            </div>
        </div>
    );
}
