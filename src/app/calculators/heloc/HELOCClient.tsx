'use client';

import { useState, useMemo } from 'react';
import { calcHELOC, formatCurrency, formatPercent, calcMonthlyPI } from '@/lib/formulas';
import { exportGenericCSV } from '@/lib/csvExporter';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { Home, TrendingDown, Info, Table2 } from 'lucide-react';

export default function HELOCClient() {
    const [homeValue, setHomeValue] = useState(500000);
    const [mortgageBalance, setMortgageBalance] = useState(250000);
    const [cltvLimit, setCltvLimit] = useState(85);
    const [drawAmount, setDrawAmount] = useState(75000);
    const [drawYears, setDrawYears] = useState(10);
    const [repayYears, setRepayYears] = useState(20);
    const [drawRate, setDrawRate] = useState(8.5);
    const [repayRate, setRepayRate] = useState(9.0);

    const result = useMemo(() => {
        if (homeValue <= 0 || drawAmount <= 0) return null;
        return calcHELOC({
            homeValue, mortgageBalance, creditLimitPercent: cltvLimit,
            drawAmount, drawPeriodYears: drawYears, repaymentPeriodYears: repayYears,
            drawRate, repaymentRate: repayRate,
        });
    }, [homeValue, mortgageBalance, cltvLimit, drawAmount, drawYears, repayYears, drawRate, repayRate]);

    // Build amortization for CSV
    const schedule = useMemo(() => {
        if (!result || drawAmount <= 0) return [];
        const amt = Math.min(drawAmount, result.maxCreditLine);
        const rows: { period: string; month: number; payment: number; principal: number; interest: number; balance: number }[] = [];
        // Draw period
        const drawMonthlyRate = drawRate / 100 / 12;
        for (let m = 1; m <= drawYears * 12; m++) {
            const interest = amt * drawMonthlyRate;
            rows.push({ period: 'Draw', month: m, payment: interest, principal: 0, interest, balance: amt });
        }
        // Repayment period
        const repayPI = calcMonthlyPI(amt, repayRate, repayYears);
        let bal = amt;
        const repayMonthlyRate = repayRate / 100 / 12;
        for (let m = 1; m <= repayYears * 12; m++) {
            const interest = bal * repayMonthlyRate;
            const principal = Math.min(repayPI - interest, bal);
            bal = Math.max(0, bal - principal);
            rows.push({ period: 'Repayment', month: drawYears * 12 + m, payment: repayPI, principal, interest, balance: bal });
        }
        return rows;
    }, [result, drawAmount, drawRate, drawYears, repayRate, repayYears]);

    const equity = homeValue - mortgageBalance;
    const maxLine = useMemo(() => Math.max(0, homeValue * (cltvLimit / 100) - mortgageBalance), [homeValue, mortgageBalance, cltvLimit]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-navy-900 dark:text-white mb-2">
                    HELOC Calculator 2026
                </h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Calculate payments on a Home Equity Line of Credit. See interest-only draw period payments and full P&amp;I repayment period costs side by side.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* LEFT: Inputs */}
                <div className="xl:col-span-2 space-y-4">
                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-5" style={{ color: 'var(--color-text-muted)' }}>
                            Home & Equity
                        </h2>

                        <div className="mb-5">
                            <label className="input-label">Home Value</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input type="number" className="input-field pl-7" value={homeValue} onChange={e => setHomeValue(+e.target.value)} min={50000} step={5000} />
                            </div>
                            <input type="range" min={100000} max={2000000} step={10000} value={homeValue} onChange={e => setHomeValue(+e.target.value)} className="slider w-full mt-2" style={{ '--value': `${((homeValue - 100000) / 1900000) * 100}%` } as React.CSSProperties} />
                        </div>

                        <div className="mb-5">
                            <label className="input-label">Outstanding Mortgage Balance</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input type="number" className="input-field pl-7" value={mortgageBalance} onChange={e => setMortgageBalance(+e.target.value)} min={0} step={5000} />
                            </div>
                        </div>

                        <div className="mb-5">
                            <label className="input-label">CLTV Limit <span className="text-xs font-normal">(lender max)</span></label>
                            <div className="relative">
                                <input type="number" className="input-field pr-8" value={cltvLimit} onChange={e => setCltvLimit(+e.target.value)} min={50} max={100} step={5} />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>%</span>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label className="input-label">Draw Amount</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input type="number" className="input-field pl-7" value={drawAmount} onChange={e => setDrawAmount(+e.target.value)} min={1000} step={1000} />
                            </div>
                            {drawAmount > maxLine && maxLine > 0 && (
                                <p className="text-xs mt-1.5 text-amber-600 dark:text-amber-400 flex items-center gap-1">
                                    <Info size={12} /> Draw exceeds max credit line of {formatCurrency(maxLine)}. Capped automatically.
                                </p>
                            )}
                        </div>

                        {/* Equity bar */}
                        <div className="p-4 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                            <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>
                                <span>Mortgage Owed</span><span>Available Equity</span>
                            </div>
                            <div className="h-4 rounded-full overflow-hidden flex">
                                <div className="h-full" style={{ width: `${Math.min(100, (mortgageBalance / homeValue) * 100)}%`, background: '#ef4444' }} />
                                <div className="h-full" style={{ width: `${Math.max(0, (equity / homeValue) * 100)}%`, background: '#00C853' }} />
                            </div>
                            <div className="flex justify-between text-xs mt-1 font-bold">
                                <span style={{ color: '#ef4444' }}>{formatCurrency(mortgageBalance)}</span>
                                <span style={{ color: '#00C853' }}>{formatCurrency(Math.max(0, equity))}</span>
                            </div>
                        </div>
                    </div>

                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-5" style={{ color: 'var(--color-text-muted)' }}>
                            HELOC Terms
                        </h2>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="input-label">Draw Period</label>
                                <div className="relative">
                                    <input type="number" className="input-field pr-10" value={drawYears} onChange={e => setDrawYears(+e.target.value)} min={1} max={15} />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: 'var(--color-text-muted)' }}>YRS</span>
                                </div>
                            </div>
                            <div>
                                <label className="input-label">Repayment Period</label>
                                <div className="relative">
                                    <input type="number" className="input-field pr-10" value={repayYears} onChange={e => setRepayYears(+e.target.value)} min={5} max={30} />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: 'var(--color-text-muted)' }}>YRS</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="input-label">Draw Rate (Variable)</label>
                                <div className="relative">
                                    <input type="number" className="input-field pr-8" value={drawRate} onChange={e => setDrawRate(+e.target.value)} min={1} max={20} step={0.125} />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>%</span>
                                </div>
                            </div>
                            <div>
                                <label className="input-label">Repayment Rate</label>
                                <div className="relative">
                                    <input type="number" className="input-field pr-8" value={repayRate} onChange={e => setRepayRate(+e.target.value)} min={1} max={20} step={0.125} />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Results */}
                <div className="xl:col-span-3 space-y-5">
                    {result ? (
                        <div className="card p-6 animate-slide-up">
                            {/* Hero stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(0,200,83,0.08)' }}>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>Draw Period Payment</p>
                                    <div className="payment-amount text-2xl">{formatCurrency(result.drawMonthlyPayment)}</div>
                                    <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>Interest-only / month</p>
                                </div>
                                <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(10,37,64,0.08)' }}>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>Repayment Period Payment</p>
                                    <div className="text-2xl font-black" style={{ color: 'var(--color-navy)' }}>{formatCurrency(result.repaymentMonthlyPayment)}</div>
                                    <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>P&amp;I / month</p>
                                </div>
                            </div>

                            {/* Detail grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                                {[
                                    ['Available Equity', formatCurrency(result.availableEquity)],
                                    ['Max Credit Line', formatCurrency(result.maxCreditLine)],
                                    ['Your Draw', formatCurrency(Math.min(drawAmount, result.maxCreditLine))],
                                    ['Total Interest', formatCurrency(result.totalInterest)],
                                    ['Total Cost', formatCurrency(result.totalCost)],
                                    ['Total Term', `${drawYears + repayYears} years`],
                                ].map(([label, value]) => (
                                    <div key={String(label)} className="p-3 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                                        <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>{label}</p>
                                        <p className="text-sm font-bold tabular-nums" style={{ color: 'var(--color-text)' }}>{value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Payment comparison */}
                            <div className="p-4 rounded-xl border mb-6" style={{ borderColor: '#00C853', background: 'rgba(0,200,83,0.05)' }}>
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingDown size={16} style={{ color: '#00C853' }} />
                                    <p className="font-bold text-sm" style={{ color: '#00C853' }}>Payment Jump Warning</p>
                                </div>
                                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                    When the draw period ends, your payment increases from <strong style={{ color: 'var(--color-text)' }}>{formatCurrency(result.drawMonthlyPayment)}</strong> (interest-only) to <strong style={{ color: 'var(--color-text)' }}>{formatCurrency(result.repaymentMonthlyPayment)}</strong> (full P&amp;I) — a {formatPercent(result.repaymentMonthlyPayment > 0 ? ((result.repaymentMonthlyPayment - result.drawMonthlyPayment) / result.drawMonthlyPayment) * 100 : 0, 0)} increase. Plan accordingly.
                                </p>
                            </div>

                            {/* CSV download + schedule */}
                            <button onClick={() => exportGenericCSV(
                                ['Period', 'Month', 'Payment', 'Principal', 'Interest', 'Balance'],
                                schedule.map(r => [r.period, r.month, r.payment.toFixed(2), r.principal.toFixed(2), r.interest.toFixed(2), r.balance.toFixed(2)]),
                                'USFinNexus-HELOC-Schedule.csv'
                            )} className="btn-outline w-full mb-4">
                                <Table2 size={16} /> Download HELOC Schedule (CSV)
                            </button>

                            {/* Schedule table */}
                            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--color-border)', maxHeight: '320px' }}>
                                <table className="data-table">
                                    <thead><tr><th>Period</th><th>#</th><th>Payment</th><th>Principal</th><th>Interest</th><th>Balance</th></tr></thead>
                                    <tbody>
                                        {schedule.filter((_, i) => i % 12 === 0).map(r => (
                                            <tr key={r.month}>
                                                <td className="text-xs font-bold">{r.period}</td>
                                                <td className="text-center text-xs">{r.month}</td>
                                                <td>{formatCurrency(r.payment)}</td>
                                                <td style={{ color: '#00C853' }}>{formatCurrency(r.principal)}</td>
                                                <td className="text-red-500">{formatCurrency(r.interest)}</td>
                                                <td>{formatCurrency(r.balance)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="card p-12 text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--color-bg-secondary)' }}>
                                <Home size={28} style={{ color: 'var(--color-text-muted)' }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Enter your home details</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                Fill in your home value, mortgage balance, and desired draw amount to see your HELOC payment breakdown.
                            </p>
                        </div>
                    )}
                    <DisclaimerBanner calculatorName="the HELOC Calculator" />
                </div>
            </div>
        </div>
    );
}
