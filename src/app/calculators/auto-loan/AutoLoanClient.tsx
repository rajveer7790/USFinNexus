'use client';

import { useState, useMemo } from 'react';
import { calcAutoLoan, formatCurrency } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { exportGenericCSV } from '@/lib/csvExporter';
import { Table2 } from 'lucide-react';

export default function AutoLoanClient() {
    const [vehiclePrice, setVehiclePrice] = useState(35000);
    const [downPayment, setDownPayment] = useState(5000);
    const [tradeIn, setTradeIn] = useState(0);
    const [salesTax, setSalesTax] = useState(8);
    const [rate, setRate] = useState(7.5);
    const [termMonths, setTermMonths] = useState(60);

    const result = useMemo(() => {
        if (vehiclePrice <= 0) return null;
        try {
            return calcAutoLoan({ vehiclePrice, downPayment, tradeInValue: tradeIn, salesTaxRate: salesTax, annualInterestRate: rate, loanTermMonths: termMonths });
        } catch { return null; }
    }, [vehiclePrice, downPayment, tradeIn, salesTax, rate, termMonths]);

    const handleCSV = () => {
        if (!result) return;
        exportGenericCSV(
            ['Month', 'Payment', 'Principal', 'Interest', 'Balance'],
            result.amortization.map(r => [r.month, r.payment.toFixed(2), r.principal.toFixed(2), r.interest.toFixed(2), r.balance.toFixed(2)]),
            'USFinNexus-AutoLoan.csv'
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-navy-900 mb-4">Auto Loan Calculator 2026</h1>
                <p className="text-gray-600 max-w-2xl font-medium text-lg">
                    Estimate your monthly car payments including taxes, trade-in value, and interest. Plus, download your full 2026 amortization schedule.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 card p-6 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>Vehicle Details</h2>

                    {[
                        { label: 'Vehicle Price', value: vehiclePrice, set: setVehiclePrice, prefix: '$', step: 500 },
                        { label: 'Down Payment', value: downPayment, set: setDownPayment, prefix: '$', step: 500 },
                        { label: 'Trade-In Value', value: tradeIn, set: setTradeIn, prefix: '$', step: 500 },
                        { label: 'Sales Tax Rate', value: salesTax, set: setSalesTax, suffix: '%', step: 0.1 },
                        { label: 'Annual Interest Rate (APR)', value: rate, set: setRate, suffix: '%', step: 0.1 },
                    ].map(f => (
                        <div key={f.label}>
                            <label className="input-label">{f.label}</label>
                            <div className="relative">
                                {f.prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">{f.prefix}</span>}
                                <input type="number" className={`input-field ${f.prefix ? 'pl-7' : ''} ${f.suffix ? 'pr-8' : ''}`} value={f.value} onChange={e => f.set(+e.target.value)} step={f.step} min={0} />
                                {f.suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">{f.suffix}</span>}
                            </div>
                        </div>
                    ))}

                    <div>
                        <label className="input-label">Loan Term</label>
                        <div className="flex flex-wrap gap-2">
                            {[24, 36, 48, 60, 72, 84].map(t => (
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
                </div>

                <div className="lg:col-span-3 space-y-5 lg:self-start">
                    {result ? (
                        <div className="card p-6 animate-slide-up">
                            <div className="text-center mb-6">
                                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Monthly Payment</p>
                                <div className="payment-amount">{formatCurrency(result.monthlyPayment)}</div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                                {[
                                    ['Loan Amount', formatCurrency(result.loanAmount)],
                                    ['Total Interest', formatCurrency(result.totalInterest)],
                                    ['Total Cost', formatCurrency(result.totalCost)],
                                ].map(([l, v]) => (
                                    <div key={String(l)} className="p-3 rounded-xl text-center" style={{ background: 'var(--color-bg-secondary)' }}>
                                        <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>{l}</p>
                                        <p className="text-sm font-bold">{v}</p>
                                    </div>
                                ))}
                            </div>
                            <button onClick={handleCSV} className="btn-outline w-full mb-4">
                                <Table2 size={16} /> Download Amortization CSV
                            </button>
                            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--color-border)', maxHeight: '280px' }}>
                                <table className="data-table">
                                    <thead><tr><th>#</th><th>Payment</th><th>Principal</th><th>Interest</th><th>Balance</th></tr></thead>
                                    <tbody>
                                        {result.amortization.map(r => (
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
                    ) : (
                        <div className="card p-6 sm:p-12 text-center">
                            <p className="text-lg font-bold">Enter vehicle details to calculate</p>
                        </div>
                    )}
                    <DisclaimerBanner calculatorName="the Auto Loan Calculator" />
                </div>
            </div>
        </div>
    );
}
