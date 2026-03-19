'use client';

import { useState, useMemo } from 'react';
import { calcMonthlyPI, formatCurrency } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { exportGenericCSV } from '@/lib/csvExporter';
import { Table2 } from 'lucide-react';

export default function PersonalLoanClient() {
    const [principal, setPrincipal] = useState(15000);
    const [rate, setRate] = useState(10.5);
    const [termMonths, setTermMonths] = useState(36);

    const monthlyPayment = useMemo(() => {
        if (principal <= 0 || rate <= 0) return 0;
        return calcMonthlyPI(principal, rate, termMonths / 12);
    }, [principal, rate, termMonths]);

    const totalInterest = monthlyPayment * termMonths - principal;
    const totalCost = monthlyPayment * termMonths;

    const amortization = useMemo(() => {
        const r = rate / 100 / 12;
        let balance = principal;
        const rows = [];
        for (let m = 1; m <= termMonths; m++) {
            const interest = balance * r;
            const principalPaid = Math.min(monthlyPayment - interest, balance);
            balance -= principalPaid;
            rows.push({ month: m, payment: monthlyPayment, principal: principalPaid, interest, balance: Math.max(0, balance) });
        }
        return rows;
    }, [principal, rate, termMonths, monthlyPayment]);

    const TERM_OPTIONS = [12, 24, 36, 48, 60, 84];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-navy-900 mb-4">Personal Loan Calculator 2026</h1>
                <p className="text-gray-600 max-w-2xl font-medium text-lg">
                    Calculate monthly payments, total interest costs, and view your 2026 debt payoff schedule for personal loans, credit cards, or consolidation.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 card p-6 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>Loan Details</h2>

                    <div>
                        <label className="input-label">Loan Amount</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">$</span>
                            <input type="number" className="input-field pl-7" value={principal} onChange={e => setPrincipal(+e.target.value)} step={500} min={100} />
                        </div>
                        <input type="range" min={1000} max={100000} step={500} value={principal} onChange={e => setPrincipal(+e.target.value)} className="slider w-full mt-2" style={{ '--value': `${((principal - 1000) / 99000) * 100}%` } as React.CSSProperties} />
                    </div>

                    <div>
                        <label className="input-label">Annual Interest Rate (APR)</label>
                        <div className="relative">
                            <input type="number" className="input-field pr-8" value={rate} onChange={e => setRate(+e.target.value)} step={0.1} min={0.1} max={36} />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">%</span>
                        </div>
                        <input type="range" min={1} max={36} step={0.5} value={rate} onChange={e => setRate(+e.target.value)} className="slider w-full mt-2" style={{ '--value': `${((rate - 1) / 35) * 100}%` } as React.CSSProperties} />
                    </div>

                    <div>
                        <label className="input-label">Loan Term</label>
                        <div className="flex flex-wrap gap-2">
                            {TERM_OPTIONS.map(t => (
                                <button
                                    key={t}
                                    onClick={() => setTermMonths(t)}
                                    className={`px-3 py-2 min-h-[36px] rounded-lg text-xs font-semibold border transition-all ${termMonths === t ? 'text-white border-transparent' : 'border-current'}`}
                                    style={{ background: termMonths === t ? 'var(--color-navy)' : 'transparent', color: termMonths === t ? 'white' : 'var(--color-text-muted)' }}
                                >
                                    {t} mo
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Payoff visual */}
                    <div className="mt-4 p-4 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                        <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>
                            <span>Principal</span>
                            <span>Interest Cost</span>
                        </div>
                        <div className="h-4 rounded-full overflow-hidden flex">
                            <div className="h-full" style={{ width: `${(principal / totalCost) * 100}%`, background: '#0A2540' }} />
                            <div className="h-full" style={{ width: `${(totalInterest / totalCost) * 100}%`, background: '#00C853' }} />
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                            <span style={{ color: '#0A2540' }} className="font-bold">{((principal / totalCost) * 100).toFixed(0)}%</span>
                            <span style={{ color: '#00C853' }} className="font-bold">{((totalInterest / totalCost) * 100).toFixed(0)}%</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 space-y-5 lg:self-start">
                    <div className="card p-6 animate-slide-up">
                        <div className="text-center mb-6">
                            <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Monthly Payment</p>
                            <div className="payment-amount">{formatCurrency(monthlyPayment)}</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                            {[
                                ['Total Interest', formatCurrency(totalInterest), 'text-red-500'],
                                ['Total Cost', formatCurrency(totalCost), ''],
                                ['Loan Term', `${termMonths} months`, ''],
                            ].map(([l, v, cls]) => (
                                <div key={String(l)} className="p-3 rounded-xl text-center" style={{ background: 'var(--color-bg-secondary)' }}>
                                    <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>{l}</p>
                                    <p className={`text-sm font-bold ${cls}`}>{v}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => exportGenericCSV(['Month', 'Payment', 'Principal', 'Interest', 'Balance'], amortization.map(r => [r.month, r.payment.toFixed(2), r.principal.toFixed(2), r.interest.toFixed(2), r.balance.toFixed(2)]), 'USFinNexus-PersonalLoan.csv')} className="btn-outline w-full mb-4">
                            <Table2 size={16} /> Download Payoff Schedule (CSV)
                        </button>
                        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--color-border)', maxHeight: '280px' }}>
                            <table className="data-table">
                                <thead><tr><th>#</th><th>Payment</th><th>Principal</th><th>Interest</th><th>Balance</th></tr></thead>
                                <tbody>
                                    {amortization.map(r => (
                                        <tr key={r.month}>
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
                    <DisclaimerBanner calculatorName="the Personal Loan Calculator" />
                </div>
            </div>
        </div>
    );
}
