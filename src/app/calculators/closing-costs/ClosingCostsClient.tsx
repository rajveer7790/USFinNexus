'use client';

import { useState, useMemo } from 'react';
import { calcClosingCosts, formatCurrency, formatPercent, type ClosingCostLineItem } from '@/lib/formulas';
import { exportGenericCSV } from '@/lib/csvExporter';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { DollarSign, Table2 } from 'lucide-react';

const US_STATES = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN',
    'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
    'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
];

const STATE_NAMES: Record<string, string> = {
    AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado',
    CT: 'Connecticut', DC: 'Washington DC', DE: 'Delaware', FL: 'Florida', GA: 'Georgia', HI: 'Hawaii',
    ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana',
    ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi',
    MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
    NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma',
    OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota',
    TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington',
    WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
};

const CATEGORY_LABELS: Record<string, string> = {
    lender: '🏦 Lender Fees',
    title: '📋 Title & Escrow',
    government: '🏛️ Government & Taxes',
    prepaid: '📅 Prepaid Costs',
    seller: '💼 Seller Costs',
};

const CATEGORY_COLORS: Record<string, string> = {
    lender: '#0A2540',
    title: '#1a4d9a',
    government: '#059669',
    prepaid: '#d97706',
    seller: '#ef4444',
};

export default function ClosingCostsClient() {
    const [homePrice, setHomePrice] = useState(400000);
    const [downPct, setDownPct] = useState(20);
    const [state, setState] = useState('CA');
    const [loanType, setLoanType] = useState<'conventional' | 'fha' | 'va'>('conventional');

    const loanAmount = homePrice * (1 - downPct / 100);

    const result = useMemo(() => {
        if (homePrice <= 0) return null;
        return calcClosingCosts({
            homePrice, loanAmount, state, loanType, isNewConstruction: false,
        });
    }, [homePrice, loanAmount, state, loanType]);

    const groupByCategory = (items: ClosingCostLineItem[]) => {
        const groups: Record<string, ClosingCostLineItem[]> = {};
        items.forEach(item => {
            if (!groups[item.category]) groups[item.category] = [];
            groups[item.category].push(item);
        });
        return groups;
    };

    return (
        <div className="relative min-h-screen bg-white text-navy-900 pb-20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0da6f2]/6 rounded-full blur-[130px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/6 rounded-full blur-[120px]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 lg:pt-8 pb-8 sm:pb-12 relative z-10">
            <div className="mb-6 sm:mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-[#0da6f2]/10 border border-[#0da6f2]/20">
                        <DollarSign className="text-[#0da6f2]" size={22} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0da6f2]">Cost Estimator</span>
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-navy-900 via-[#0da6f2] to-navy-900 bg-clip-text text-transparent">
                    Closing Costs Calculator 2026
                </h1>
                <p className="text-gray-500 max-w-2xl font-medium text-lg">
                    Estimate buyer and seller closing costs for any US home purchase. Includes state-specific transfer taxes for all 50 states + DC.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                {/* LEFT: Inputs */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card p-4 sm:p-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-5 sm:mb-8">
                            Purchase Details
                        </h2>

                        <div className="mb-5">
                            <label className="input-label">Home Price</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">$</span>
                                <input type="number" className="input-field pl-7" value={homePrice} onChange={e => setHomePrice(+e.target.value)} min={50000} step={5000} />
                            </div>
                            <input type="range" min={100000} max={2000000} step={10000} value={homePrice} onChange={e => setHomePrice(+e.target.value)} className="slider w-full mt-2" style={{ '--value': `${((homePrice - 100000) / 1900000) * 100}%` } as React.CSSProperties} />
                        </div>

                        <div className="mb-5">
                            <label className="input-label">Down Payment</label>
                            <div className="relative">
                                <input type="number" className="input-field pr-8" value={downPct} onChange={e => setDownPct(+e.target.value)} min={0} max={100} step={0.5} />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">%</span>
                            </div>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                Loan Amount: {formatCurrency(loanAmount)}
                            </p>
                        </div>

                        <div className="mb-5">
                            <label className="input-label">State</label>
                            <select value={state} onChange={e => setState(e.target.value)} className="input-field">
                                {US_STATES.map(s => (
                                    <option key={s} value={s}>{STATE_NAMES[s]} ({s})</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-5">
                            <label className="input-label">Loan Type</label>
                            <div className="flex gap-2 flex-wrap">
                                {(['conventional', 'fha', 'va'] as const).map(lt => (
                                    <button key={lt} onClick={() => setLoanType(lt)}
                                        className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all capitalize ${loanType === lt ? 'text-white border-transparent' : 'border-current'}`}
                                        style={{ background: loanType === lt ? 'var(--color-navy)' : 'transparent', color: loanType === lt ? 'white' : 'var(--color-text-muted)' }}>
                                        {lt.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Results */}
                <div className="lg:col-span-3 space-y-6 lg:self-start">
                    {result ? (
                        <>
                            {/* Summary cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div className="glass-card p-4 sm:p-6 text-center animate-slide-up">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0da6f2] mb-4">Buyer Closing Costs</p>
                                    <div className="text-2xl sm:text-4xl font-black text-[#0da6f2]">{formatCurrency(result.buyerTotal)}</div>
                                    <p className="text-xs mt-4 font-bold uppercase tracking-widest text-gray-500">{formatPercent(result.buyerPercent, 1)} of home price</p>
                                </div>
                                <div className="glass-card p-4 sm:p-6 text-center animate-slide-up">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Seller Closing Costs</p>
                                    <div className="text-2xl sm:text-4xl font-black text-rose-400">{formatCurrency(result.sellerTotal)}</div>
                                    <p className="text-xs mt-4 font-bold uppercase tracking-widest text-gray-500">{formatPercent(result.sellerPercent, 1)} of home price</p>
                                </div>
                            </div>

                            {/* Buyer breakdown */}
                            <div className="glass-card p-8 animate-slide-up">
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">
                                    Buyer Cost Breakdown
                                </h3>
                                {Object.entries(groupByCategory(result.buyerItems)).map(([cat, items]) => (
                                    <div key={cat} className="mb-4">
                                        <p className="text-xs font-bold mb-2" style={{ color: CATEGORY_COLORS[cat] || 'var(--color-text)' }}>
                                            {CATEGORY_LABELS[cat] || cat}
                                        </p>
                                        {items.map(item => (
                                            <div key={item.label} className="result-row">
                                                <span className="result-label">{item.label}</span>
                                                <span className="result-value">{formatCurrency(item.amount)}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                                <div className="flex justify-between items-center pt-3 mt-2 border-t-2 border-green-600">
                                    <span className="font-black text-sm" style={{ color: 'var(--color-text)' }}>Total Buyer Costs</span>
                                    <span className="text-lg font-black" style={{ color: '#0A2540' }}>{formatCurrency(result.buyerTotal)}</span>
                                </div>
                            </div>

                            {/* Seller breakdown */}
                            <div className="glass-card p-8 animate-slide-up">
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">
                                    Seller Cost Breakdown
                                </h3>
                                {result.sellerItems.map(item => (
                                    <div key={item.label} className="result-row">
                                        <span className="result-label">{item.label}</span>
                                        <span className="result-value">{formatCurrency(item.amount)}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between items-center pt-3 mt-2 border-t-2 border-red-500">
                                    <span className="font-black text-sm" style={{ color: 'var(--color-text)' }}>Total Seller Costs</span>
                                    <span className="text-lg font-black text-red-500">{formatCurrency(result.sellerTotal)}</span>
                                </div>
                            </div>

                            {/* Cash needed */}
                            <div className="glass-card p-8">
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">
                                    Total Cash Needed to Close
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {[
                                        ['Down Payment', formatCurrency(homePrice * downPct / 100)],
                                        ['Closing Costs', formatCurrency(result.buyerTotal)],
                                        ['Total Cash', formatCurrency(homePrice * downPct / 100 + result.buyerTotal)],
                                    ].map(([l, v]) => (
                                        <div key={String(l)} className="p-3 rounded-xl text-center" style={{ background: 'var(--color-bg-secondary)' }}>
                                            <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>{l}</p>
                                            <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{v}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CSV export */}
                            <button onClick={() => exportGenericCSV(
                                ['Side', 'Category', 'Item', 'Amount'],
                                [
                                    ...result.buyerItems.map(i => ['Buyer', i.category, i.label, i.amount.toFixed(2)]),
                                    ...result.sellerItems.map(i => ['Seller', i.category, i.label, i.amount.toFixed(2)]),
                                ],
                                `USFinNexus-ClosingCosts-${state}.csv`
                            )} className="btn-outline w-full">
                                <Table2 size={16} /> Download Closing Costs (CSV)
                            </button>
                        </>
                    ) : (
                        <div className="card p-4 sm:p-6 text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--color-bg-secondary)' }}>
                                <DollarSign size={28} style={{ color: 'var(--color-text-muted)' }} />
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Enter purchase details</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                Fill in the home price, state, and loan type to see a full closing costs breakdown.
                            </p>
                        </div>
                    )}
                    <DisclaimerBanner calculatorName="the Closing Costs Calculator" />
                </div>
            </div>
            </div>
        </div>
    );
}
