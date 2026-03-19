'use client';

import { useState, useMemo, useDeferredValue } from 'react';
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

    // Defer heavy dual-simulation calculations so inputs stay responsive
    const deferredDebts = useDeferredValue(debts);
    const deferredExtra = useDeferredValue(extra);
    const isCalculating = deferredDebts !== debts || deferredExtra !== extra;

    const snowball = useMemo(() => calcDebtPayoff({ debts: deferredDebts, extraMonthly: deferredExtra }, 'snowball'), [deferredDebts, deferredExtra]);
    const avalanche = useMemo(() => calcDebtPayoff({ debts: deferredDebts, extraMonthly: deferredExtra }, 'avalanche'), [deferredDebts, deferredExtra]);
    const active = strategy === 'snowball' ? snowball : avalanche;

    const interestSaved = snowball.totalInterest - avalanche.totalInterest;
    const totalBalance = debts.reduce((s, d) => s + d.balance, 0);
    const totalMinPayments = debts.reduce((s, d) => s + d.minPayment, 0);

    // No extra payments baseline
    const noExtra = useMemo(() => calcDebtPayoff({ debts: deferredDebts, extraMonthly: 0 }, strategy), [deferredDebts, strategy]);

    return (
        <div className="relative min-h-screen bg-white text-navy-900 pb-20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/6 rounded-full blur-[130px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0da6f2]/8 rounded-full blur-[120px]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 relative z-10">
            <div className="mb-6 sm:mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20">
                        <TrendingDown className="text-rose-500" size={22} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-rose-500">Debt Strategy</span>
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-navy-900 via-rose-500 to-navy-900 bg-clip-text text-transparent">
                    Debt Payoff Calculator
                </h1>
                <p className="text-gray-500 max-w-2xl font-medium text-lg">
                    Add your debts and compare payoff strategies. Snowball vs Avalanche — see which method saves you the most.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                {/* LEFT: Inputs */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card p-4 sm:p-8">
                        <div className="flex justify-between items-center mb-5 sm:mb-8">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">
                                Your Debts
                            </h2>
                            <button onClick={addDebt} className="flex items-center gap-1 text-xs font-black px-3 py-2 min-h-[36px] rounded-lg transition-colors bg-[#0da6f2]/10 text-[#0da6f2] hover:bg-[#0da6f2]/20 uppercase tracking-widest">
                                <Plus size={14} /> Add Debt
                            </button>
                        </div>

                        <div className="space-y-4">
                            {debts.map((debt, i) => (
                                <div key={i} className="p-4 rounded-xl border relative" style={{ borderColor: 'var(--color-border)' }}>
                                    {debts.length > 1 && (
                                        <button onClick={() => removeDebt(i)} className="absolute top-2 right-2 p-1 rounded-lg hover:bg-red-100 text-red-400 hover:text-red-600 transition-colors">
                                            <X size={14} />
                                        </button>
                                    )}
                                    <div className="mb-3">
                                        <input type="text" className="input-field text-sm font-bold" value={debt.name} onChange={e => updateDebt(i, 'name', e.target.value)} placeholder="Debt name" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                        <div>
                                            <label className="text-xs font-bold uppercase mb-1 block" style={{ color: 'var(--color-text-muted)' }}>Balance</label>
                                            <div className="relative">
                                                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">$</span>
                                                <input type="number" className="input-field pl-5 text-sm" value={debt.balance} onChange={e => updateDebt(i, 'balance', +e.target.value)} min={0} step={100} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold uppercase mb-1 block" style={{ color: 'var(--color-text-muted)' }}>APR</label>
                                            <div className="relative">
                                                <input type="number" className="input-field pr-6 text-sm" value={debt.rate} onChange={e => updateDebt(i, 'rate', +e.target.value)} min={0} max={40} step={0.1} />
                                                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold uppercase mb-1 block" style={{ color: 'var(--color-text-muted)' }}>Min Pay</label>
                                            <div className="relative">
                                                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">$</span>
                                                <input type="number" className="input-field pl-5 text-sm" value={debt.minPayment} onChange={e => updateDebt(i, 'minPayment', +e.target.value)} min={10} step={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-4 sm:p-8">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4 sm:mb-6">
                            Extra Monthly Payment
                        </h2>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">$</span>
                            <input type="number" className="input-field pl-7" value={extra} onChange={e => setExtra(+e.target.value)} min={0} step={25} />
                        </div>
                        <input type="range" min={0} max={2000} step={25} value={extra} onChange={e => setExtra(+e.target.value)} className="slider w-full mt-2" style={{ '--value': `${(extra / 2000) * 100}%` } as React.CSSProperties} />
                        <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                            Total monthly: {formatCurrency(totalMinPayments + extra)} (minimums + extra)
                        </p>
                    </div>

                    {/* Summary */}
                    <div className="glass-panel p-5">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <p className="text-xs uppercase tracking-widest font-black text-gray-400 mb-1">Total Debt</p>
                                <p className="text-xl font-black text-rose-500">{formatCurrency(totalBalance)}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest font-black text-gray-400 mb-1">Number of Debts</p>
                                <p className="text-xl font-black">{debts.length}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Results */}
                <div className="lg:col-span-3 space-y-6 lg:self-start">
                    {/* Strategy toggle */}
                    <div className="glass-tab-list p-1 flex gap-2">
                        <button onClick={() => setStrategy('avalanche')}
                            className={`flex-1 px-4 py-3 rounded-xl text-xs font-black transition-all ${strategy === 'avalanche' ? 'bg-rose-500 text-white shadow-lg' : 'text-gray-500 hover:bg-white/5'}`}>
                            🔥 Avalanche <span className="block font-medium mt-0.5 opacity-80 normal-case">Highest rate first</span>
                        </button>
                        <button onClick={() => setStrategy('snowball')}
                            className={`flex-1 px-4 py-3 rounded-xl text-xs font-black transition-all ${strategy === 'snowball' ? 'bg-[#0da6f2] text-white shadow-lg' : 'text-gray-500 hover:bg-white/5'}`}>
                            ❄️ Snowball <span className="block font-medium mt-0.5 opacity-80 normal-case">Smallest balance first</span>
                        </button>
                    </div>

                    {/* Results comparison */}
                    <div className="glass-card p-4 sm:p-8 animate-slide-up">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5 sm:mb-8">
                            <div className="text-center glass-panel p-6 bg-rose-500/5 border-rose-500/20">
                                <p className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-3">Avalanche</p>
                                <p className="text-2xl font-black text-rose-400">
                                    {Math.floor(avalanche.totalMonths / 12)}y {avalanche.totalMonths % 12}m
                                </p>
                                <p className="text-xs mt-3 font-bold uppercase tracking-widest text-gray-500">Interest: {formatCurrency(avalanche.totalInterest)}</p>
                            </div>
                            <div className="text-center glass-panel p-6 bg-[#0da6f2]/5 border-[#0da6f2]/20">
                                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0da6f2] mb-3">Snowball</p>
                                <p className="text-2xl font-black text-[#0da6f2]">
                                    {Math.floor(snowball.totalMonths / 12)}y {snowball.totalMonths % 12}m
                                </p>
                                <p className="text-xs mt-3 font-bold uppercase tracking-widest text-gray-500">Interest: {formatCurrency(snowball.totalInterest)}</p>
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
                            <div className="p-3 rounded-xl border border-amber-200 bg-amber-50 mb-6">
                                <p className="text-xs text-gray-400">
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
                                    <span className="ml-auto text-xs text-gray-400">
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
        </div>
    );
}
