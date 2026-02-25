'use client';

import { useState, useMemo } from 'react';
import { calcDebtPayoff, formatCurrency, type DebtItem } from '@/lib/formulas';
import { exportGenericCSV } from '@/lib/csvExporter';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { Plus, X, TrendingDown, Table2, Zap } from 'lucide-react';

const DEFAULT_DEBTS: DebtItem[] = [
    { name: 'Credit Card', balance: 5000, rate: 22.99, minPayment: 150 },
    { name: 'Car Loan', balance: 12000, rate: 6.5, minPayment: 350 },
    { name: 'Student Loan', balance: 25000, rate: 5.5, minPayment: 280 },
];

export default function DebtPayoffClient() {
    const [debts, setDebts] = useState<DebtItem[]>(DEFAULT_DEBTS);
    const [extra, setExtra] = useState(200);
    const [strategy, setStrategy] = useState<'avalanche' | 'snowball'>('avalanche');

    const addDebt = () => setDebts([...debts, { name: `Debt ${debts.length + 1}`, balance: 1000, rate: 10, minPayment: 50 }]);
    const removeDebt = (i: number) => setDebts(debts.filter((_, idx) => idx !== i));
    const updateDebt = (i: number, field: keyof DebtItem, value: string | number) => {
        const updated = [...debts];
        if (field === 'name') updated[i] = { ...updated[i], name: value as string };
        else updated[i] = { ...updated[i], [field]: +value };
        setDebts(updated);
    };

    const snowball = useMemo(() => calcDebtPayoff({ debts, extraMonthly: extra }, 'snowball'), [debts, extra]);
    const avalanche = useMemo(() => calcDebtPayoff({ debts, extraMonthly: extra }, 'avalanche'), [debts, extra]);
    const active = strategy === 'snowball' ? snowball : avalanche;

    const interestSaved = snowball.totalInterest - avalanche.totalInterest;
    const totalBalance = debts.reduce((s, d) => s + d.balance, 0);
    const totalMinPayments = debts.reduce((s, d) => s + d.minPayment, 0);

    // No extra payments baseline
    const noExtra = useMemo(() => calcDebtPayoff({ debts, extraMonthly: 0 }, strategy), [debts, strategy]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-navy-900 dark:text-white mb-2">
                    Debt Payoff Calculator — Snowball vs Avalanche
                </h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Add your debts and compare payoff strategies. See which method saves you the most interest and gets you debt-free fastest.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* LEFT: Inputs */}
                <div className="xl:col-span-2 space-y-4">
                    <div className="card p-6">
                        <div className="flex justify-between items-center mb-5">
                            <h2 className="text-sm font-bold uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                                Your Debts
                            </h2>
                            <button onClick={addDebt} className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors hover:bg-green-600/10" style={{ color: '#00C853' }}>
                                <Plus size={14} /> Add Debt
                            </button>
                        </div>

                        <div className="space-y-4">
                            {debts.map((debt, i) => (
                                <div key={i} className="p-4 rounded-xl border relative" style={{ borderColor: 'var(--color-border)' }}>
                                    {debts.length > 1 && (
                                        <button onClick={() => removeDebt(i)} className="absolute top-2 right-2 p-1 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 text-red-400 hover:text-red-600 transition-colors">
                                            <X size={14} />
                                        </button>
                                    )}
                                    <div className="mb-3">
                                        <input type="text" className="input-field text-sm font-bold" value={debt.name} onChange={e => updateDebt(i, 'name', e.target.value)} placeholder="Debt name" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div>
                                            <label className="text-[10px] font-bold uppercase mb-1 block" style={{ color: 'var(--color-text-muted)' }}>Balance</label>
                                            <div className="relative">
                                                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                                <input type="number" className="input-field pl-5 text-sm" value={debt.balance} onChange={e => updateDebt(i, 'balance', +e.target.value)} min={0} step={100} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold uppercase mb-1 block" style={{ color: 'var(--color-text-muted)' }}>APR</label>
                                            <div className="relative">
                                                <input type="number" className="input-field pr-6 text-sm" value={debt.rate} onChange={e => updateDebt(i, 'rate', +e.target.value)} min={0} max={40} step={0.1} />
                                                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'var(--color-text-muted)' }}>%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold uppercase mb-1 block" style={{ color: 'var(--color-text-muted)' }}>Min Pay</label>
                                            <div className="relative">
                                                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                                <input type="number" className="input-field pl-5 text-sm" value={debt.minPayment} onChange={e => updateDebt(i, 'minPayment', +e.target.value)} min={10} step={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: 'var(--color-text-muted)' }}>
                            Extra Monthly Payment
                        </h2>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                            <input type="number" className="input-field pl-7" value={extra} onChange={e => setExtra(+e.target.value)} min={0} step={25} />
                        </div>
                        <input type="range" min={0} max={2000} step={25} value={extra} onChange={e => setExtra(+e.target.value)} className="slider w-full mt-2" style={{ '--value': `${(extra / 2000) * 100}%` } as React.CSSProperties} />
                        <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                            Total monthly: {formatCurrency(totalMinPayments + extra)} (minimums + extra)
                        </p>
                    </div>

                    {/* Summary */}
                    <div className="p-4 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Total Debt</p>
                                <p className="text-lg font-black" style={{ color: 'var(--color-text)' }}>{formatCurrency(totalBalance)}</p>
                            </div>
                            <div>
                                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Number of Debts</p>
                                <p className="text-lg font-black" style={{ color: 'var(--color-text)' }}>{debts.length}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Results */}
                <div className="xl:col-span-3 space-y-5">
                    {/* Strategy toggle */}
                    <div className="flex gap-2">
                        <button onClick={() => setStrategy('avalanche')}
                            className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all border-2 ${strategy === 'avalanche' ? 'text-white border-transparent' : ''}`}
                            style={{ background: strategy === 'avalanche' ? '#ef4444' : 'transparent', color: strategy === 'avalanche' ? 'white' : 'var(--color-text-muted)', borderColor: strategy === 'avalanche' ? 'transparent' : 'var(--color-border)' }}>
                            🔥 Avalanche <span className="block text-xs font-normal mt-0.5 opacity-80">Highest rate first (saves most $)</span>
                        </button>
                        <button onClick={() => setStrategy('snowball')}
                            className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all border-2 ${strategy === 'snowball' ? 'text-white border-transparent' : ''}`}
                            style={{ background: strategy === 'snowball' ? '#1d4ed8' : 'transparent', color: strategy === 'snowball' ? 'white' : 'var(--color-text-muted)', borderColor: strategy === 'snowball' ? 'transparent' : 'var(--color-border)' }}>
                            ❄️ Snowball <span className="block text-xs font-normal mt-0.5 opacity-80">Smallest balance first (quick wins)</span>
                        </button>
                    </div>

                    {/* Results comparison */}
                    <div className="card p-6 animate-slide-up">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.08)' }}>
                                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>Avalanche</p>
                                <p className="text-xl font-black" style={{ color: '#ef4444' }}>
                                    {Math.floor(avalanche.totalMonths / 12)}y {avalanche.totalMonths % 12}m
                                </p>
                                <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>Interest: {formatCurrency(avalanche.totalInterest)}</p>
                            </div>
                            <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(29,78,216,0.08)' }}>
                                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>Snowball</p>
                                <p className="text-xl font-black" style={{ color: '#1d4ed8' }}>
                                    {Math.floor(snowball.totalMonths / 12)}y {snowball.totalMonths % 12}m
                                </p>
                                <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>Interest: {formatCurrency(snowball.totalInterest)}</p>
                            </div>
                        </div>

                        {/* Savings from extra payments */}
                        {extra > 0 && noExtra.totalMonths > active.totalMonths && (
                            <div className="p-4 rounded-xl border mb-6" style={{ borderColor: '#00C853', background: 'rgba(0,200,83,0.05)' }}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Zap size={16} style={{ color: '#00C853' }} />
                                    <p className="font-bold text-sm" style={{ color: '#00C853' }}>Extra Payment Impact</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Time Saved</p>
                                        <p className="text-lg font-black" style={{ color: '#00C853' }}>
                                            {Math.floor((noExtra.totalMonths - active.totalMonths) / 12)}y {(noExtra.totalMonths - active.totalMonths) % 12}m
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Interest Saved</p>
                                        <p className="text-lg font-black" style={{ color: '#00C853' }}>
                                            {formatCurrency(noExtra.totalInterest - active.totalInterest)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Comparison */}
                        {Math.abs(interestSaved) > 1 && (
                            <div className="p-3 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700 mb-6">
                                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                    <strong>💡 Comparison:</strong> Avalanche saves <strong style={{ color: 'var(--color-text)' }}>{formatCurrency(Math.abs(interestSaved))}</strong> more in interest than Snowball. Snowball provides faster psychological wins by eliminating smaller debts first.
                                </p>
                            </div>
                        )}

                        {/* Payoff order */}
                        <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--color-text)' }}>Payoff Order ({strategy === 'avalanche' ? '🔥 Avalanche' : '❄️ Snowball'})</h3>
                        <div className="space-y-2 mb-6">
                            {active.payoffOrder.map((name, i) => (
                                <div key={name} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: strategy === 'avalanche' ? '#ef4444' : '#1d4ed8' }}>
                                        {i + 1}
                                    </span>
                                    <span className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{name}</span>
                                    <span className="ml-auto text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                        {formatCurrency(debts.find(d => d.name === name)?.balance || 0)} at {debts.find(d => d.name === name)?.rate}%
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CSV export */}
                        <button onClick={() => {
                            const uniqueMonths = [...new Set(active.schedule.map(s => s.month))];
                            const rows = uniqueMonths.map(m => {
                                const entries = active.schedule.filter(s => s.month === m);
                                return entries.map(e => [m, e.debtName, e.payment.toFixed(2), e.principal.toFixed(2), e.interest.toFixed(2), e.balance.toFixed(2)]);
                            }).flat();
                            exportGenericCSV(
                                ['Month', 'Debt', 'Payment', 'Principal', 'Interest', 'Balance'],
                                rows,
                                `USFinNexus-DebtPayoff-${strategy}.csv`
                            );
                        }} className="btn-outline w-full">
                            <Table2 size={16} /> Download Payoff Schedule (CSV)
                        </button>
                    </div>
                    <DisclaimerBanner calculatorName="the Debt Payoff Calculator" />
                </div>
            </div>
        </div>
    );
}
