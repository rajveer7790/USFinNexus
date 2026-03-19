'use client';

import { useState, useMemo } from 'react';
import { calcBudget, formatCurrency, formatPercent, type BudgetCategory } from '@/lib/formulas';
import { exportGenericCSV } from '@/lib/csvExporter';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { Plus, X, Table2, CheckCircle, AlertTriangle } from 'lucide-react';

const DEFAULT_NEEDS: BudgetCategory[] = [
    { label: 'Rent / Mortgage', amount: 1500 },
    { label: 'Utilities', amount: 200 },
    { label: 'Groceries', amount: 400 },
    { label: 'Insurance', amount: 300 },
    { label: 'Transportation', amount: 250 },
    { label: 'Minimum Debt Payments', amount: 200 },
];

const DEFAULT_WANTS: BudgetCategory[] = [
    { label: 'Dining Out', amount: 200 },
    { label: 'Entertainment', amount: 100 },
    { label: 'Subscriptions', amount: 50 },
    { label: 'Shopping', amount: 150 },
];

const DEFAULT_SAVINGS: BudgetCategory[] = [
    { label: 'Emergency Fund', amount: 200 },
    { label: '401(k) / IRA', amount: 300 },
    { label: 'Extra Debt Payments', amount: 100 },
];

type CatGroup = 'needs' | 'wants' | 'savings';

const CAT_CONFIG: Record<CatGroup, { title: string; emoji: string; rule: string; color: string; target: string }> = {
    needs: { title: 'Needs', emoji: '🏠', rule: '50%', color: '#0A2540', target: 'Housing, utilities, groceries, insurance, transportation, minimum debt payments' },
    wants: { title: 'Wants', emoji: '🎮', rule: '30%', color: '#1d4ed8', target: 'Dining, entertainment, subscriptions, shopping, travel' },
    savings: { title: 'Savings / Debt', emoji: '💰', rule: '20%', color: '#059669', target: 'Emergency fund, retirement (401k/IRA), extra debt payments, investments' },
};

export default function BudgetClient() {
    const [income, setIncome] = useState(5000);
    const [needs, setNeeds] = useState<BudgetCategory[]>(DEFAULT_NEEDS);
    const [wants, setWants] = useState<BudgetCategory[]>(DEFAULT_WANTS);
    const [savings, setSavings] = useState<BudgetCategory[]>(DEFAULT_SAVINGS);

    const getSet = (group: CatGroup) => {
        if (group === 'needs') return { items: needs, setItems: setNeeds };
        if (group === 'wants') return { items: wants, setItems: setWants };
        return { items: savings, setItems: setSavings };
    };

    const addItem = (group: CatGroup) => {
        const { items, setItems } = getSet(group);
        setItems([...items, { label: 'New Item', amount: 0 }]);
    };

    const removeItem = (group: CatGroup, i: number) => {
        const { items, setItems } = getSet(group);
        setItems(items.filter((_, idx) => idx !== i));
    };

    const updateItem = (group: CatGroup, i: number, field: 'label' | 'amount', value: string | number) => {
        const { items, setItems } = getSet(group);
        const updated = [...items];
        if (field === 'amount') updated[i] = { ...updated[i], amount: +value };
        else updated[i] = { ...updated[i], label: value as string };
        setItems(updated);
    };

    const result = useMemo(() => calcBudget({ monthlyIncome: income, needs, wants, savings }), [income, needs, wants, savings]);

    const totalSpending = result.actualNeeds + result.actualWants + result.actualSavings;
    const remaining = income - totalSpending;

    const renderGroup = (group: CatGroup) => {
        const config = CAT_CONFIG[group];
        const { items } = getSet(group);
        const actual = group === 'needs' ? result.actualNeeds : group === 'wants' ? result.actualWants : result.actualSavings;
        const target = group === 'needs' ? result.targetNeeds : group === 'wants' ? result.targetWants : result.targetSavings;
        const diff = target - actual;
        const pct = group === 'needs' ? result.needsPercent : group === 'wants' ? result.wantsPercent : result.savingsPercent;

        return (
            <div key={group} className="glass-card p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">{config.emoji}</span>
                        <div>
                            <h3 className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{config.title} ({config.rule})</h3>
                            <p className="text-xs text-gray-400">{config.target}</p>
                        </div>
                    </div>
                    <button onClick={() => addItem(group)} className="flex items-center gap-1 text-xs font-black px-3 py-2 min-h-[36px] rounded-lg transition-colors bg-[#0da6f2]/10 text-[#0da6f2] hover:bg-[#0da6f2]/20 uppercase tracking-widest">
                        <Plus size={12} /> Add
                    </button>
                </div>

                {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                        <input type="text" className="input-field text-sm flex-1 py-1.5 min-w-0" value={item.label} onChange={e => updateItem(group, i, 'label', e.target.value)} />
                        <div className="relative w-28 flex-shrink-0">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">$</span>
                            <input type="number" className="input-field pl-5 text-sm py-2 w-full" value={item.amount} onChange={e => updateItem(group, i, 'amount', e.target.value)} min={0} step={10} />
                        </div>
                        <button onClick={() => removeItem(group, i)} className="flex-shrink-0 p-2 min-h-[36px] min-w-[36px] flex items-center justify-center rounded hover:bg-red-100 text-red-400 hover:text-red-600">
                            <X size={12} />
                        </button>
                    </div>
                ))}

                {/* Subtotal bar */}
                <div className="mt-3 p-3 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold" style={{ color: 'var(--color-text-muted)' }}>
                            Actual: {formatCurrency(actual)} ({formatPercent(pct, 0)})
                        </span>
                        <span className="text-xs font-bold" style={{ color: 'var(--color-text-muted)' }}>
                            Target: {formatCurrency(target)} ({config.rule})
                        </span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden" style={{ background: '#e5e7eb' }}>
                        <div className="h-full rounded-full transition-all" style={{
                            width: `${Math.min(100, target > 0 ? (actual / target) * 100 : 0)}%`,
                            background: diff >= 0 ? config.color : '#ef4444',
                        }} />
                    </div>
                    <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: diff >= 0 ? '#059669' : '#ef4444' }}>
                        {diff >= 0 ? <CheckCircle size={12} /> : <AlertTriangle size={12} />}
                        {diff >= 0
                            ? (group === 'savings'
                                ? `${formatCurrency(Math.abs(diff))} below target — try to increase savings!`
                                : `${formatCurrency(diff)} under budget ✓`)
                            : `${formatCurrency(Math.abs(diff))} over budget`}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className="relative min-h-screen bg-white text-navy-900 pb-20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0da6f2]/6 rounded-full blur-[130px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/6 rounded-full blur-[120px]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 relative z-10">
            <div className="mb-6 sm:mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <CheckCircle className="text-emerald-500" size={22} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Budget Planner</span>
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-navy-900 via-emerald-500 to-navy-900 bg-clip-text text-transparent">
                    Budget Calculator
                </h1>
                <p className="text-gray-500 max-w-2xl font-medium text-lg">
                    Plan your monthly budget using the 50/30/20 rule. 50% Needs, 30% Wants, 20% Savings & Debt repayment.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                {/* LEFT: Income + Categories */}
                <div className="lg:col-span-3 space-y-4">
                    {/* Income */}
                    <div className="glass-card p-4 sm:p-8">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4 sm:mb-6">
                            Monthly After-Tax Income
                        </h2>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">$</span>
                            <input type="number" className="input-field pl-7" value={income} onChange={e => setIncome(+e.target.value)} min={500} step={100} />
                        </div>
                        <input type="range" min={1000} max={25000} step={100} value={income} onChange={e => setIncome(+e.target.value)} className="slider w-full mt-2" style={{ '--value': `${((income - 1000) / 24000) * 100}%` } as React.CSSProperties} />
                    </div>

                    {/* Categories */}
                    {(['needs', 'wants', 'savings'] as CatGroup[]).map(g => renderGroup(g))}
                </div>

                {/* RIGHT: Summary */}
                <div className="lg:col-span-2 space-y-6 lg:self-start">
                    <div className="glass-card p-4 sm:p-8 animate-slide-up lg:sticky lg:top-24">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">
                            Budget Summary
                        </h2>

                        {/* Big donut-style breakdown */}
                        <div className="mb-6">
                            <div className="h-5 rounded-full overflow-hidden flex mb-3">
                                <div className="h-full transition-all" style={{ width: `${result.needsPercent}%`, background: '#0A2540' }} title={`Needs: ${formatPercent(result.needsPercent, 0)}`} />
                                <div className="h-full transition-all" style={{ width: `${result.wantsPercent}%`, background: '#1d4ed8' }} title={`Wants: ${formatPercent(result.wantsPercent, 0)}`} />
                                <div className="h-full transition-all" style={{ width: `${result.savingsPercent}%`, background: '#059669' }} title={`Savings: ${formatPercent(result.savingsPercent, 0)}`} />
                            </div>
                            <div className="flex justify-between text-xs font-bold">
                                <span style={{ color: '#0A2540' }}>Needs {formatPercent(result.needsPercent, 0)}</span>
                                <span style={{ color: '#1d4ed8' }}>Wants {formatPercent(result.wantsPercent, 0)}</span>
                                <span style={{ color: '#059669' }}>Save {formatPercent(result.savingsPercent, 0)}</span>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-3 mb-6">
                            {([
                                { label: '🏠 Needs', actual: result.actualNeeds, target: result.targetNeeds, pct: result.needsPercent, rule: '50%' },
                                { label: '🎮 Wants', actual: result.actualWants, target: result.targetWants, pct: result.wantsPercent, rule: '30%' },
                                { label: '💰 Savings', actual: result.actualSavings, target: result.targetSavings, pct: result.savingsPercent, rule: '20%' },
                            ]).map(row => (
                                <div key={row.label} className="p-3 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{row.label}</span>
                                        <span className="text-sm font-bold tabular-nums" style={{ color: 'var(--color-text)' }}>{formatCurrency(row.actual)}</span>
                                    </div>
                                    <div className="flex justify-between text-xs mt-1">
                                        <span style={{ color: 'var(--color-text-muted)' }}>Target ({row.rule}): {formatCurrency(row.target)}</span>
                                        <span style={{ color: row.actual <= row.target || row.label.includes('Savings') ? '#059669' : '#ef4444' }}>
                                            {formatPercent(row.pct, 0)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Remaining */}
                        <div className="p-4 rounded-xl border-2" style={{
                            borderColor: remaining >= 0 ? '#00C853' : '#ef4444',
                            background: remaining >= 0 ? 'rgba(0,200,83,0.05)' : 'rgba(239,68,68,0.05)',
                        }}>
                            <p className="text-xs font-bold uppercase mb-1" style={{ color: 'var(--color-text-muted)' }}>
                                {remaining >= 0 ? 'Unallocated' : 'Over Budget'}
                            </p>
                            <p className="text-2xl font-black" style={{ color: remaining >= 0 ? '#00C853' : '#ef4444' }}>
                                {formatCurrency(Math.abs(remaining))}
                            </p>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                {remaining >= 0
                                    ? 'Consider adding this to your savings category!'
                                    : 'Your spending exceeds your income. Review your categories.'}
                            </p>
                        </div>

                        {/* CSV Export */}
                        <button onClick={() => exportGenericCSV(
                            ['Category', 'Item', 'Amount', 'Target', 'Percent'],
                            [
                                ...needs.map(n => ['Needs', n.label, n.amount.toFixed(2), result.targetNeeds.toFixed(2), result.needsPercent.toFixed(1)]),
                                ...wants.map(w => ['Wants', w.label, w.amount.toFixed(2), result.targetWants.toFixed(2), result.wantsPercent.toFixed(1)]),
                                ...savings.map(s => ['Savings', s.label, s.amount.toFixed(2), result.targetSavings.toFixed(2), result.savingsPercent.toFixed(1)]),
                            ],
                            'USFinNexus-Budget-50-30-20.csv'
                        )} className="btn-outline w-full mt-4">
                            <Table2 size={16} /> Download Budget (CSV)
                        </button>
                    </div>
                    <DisclaimerBanner calculatorName="the Budget Calculator" />
                </div>
            </div>
            </div>
        </div>
    );
}
