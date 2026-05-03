'use client';

import React, { useState, useCallback, useMemo, useDeferredValue, useTransition } from 'react';
import dynamic from 'next/dynamic';
import { Loader2, TrendingDown, Info, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const MortgageAmortTable = dynamic(() => import('./MortgageAmortTable'), {
    ssr: false,
    loading: () => (
        <div className="space-y-2 animate-pulse">
            <div className="h-10 bg-gray-100 rounded-xl" />
            {[...Array(8)].map((_, i) => <div key={i} className="h-10 bg-gray-50 rounded" />)}
        </div>
    ),
});

const MortgageCharts = dynamic(() => import('./MortgageCharts'), {
    ssr: false,
    loading: () => (
        <div className="flex justify-center items-center h-64 text-gray-400">
            <Loader2 className="animate-spin mr-2" /> Loading Charts...
        </div>
    )
});

import {
    calcMortgageSummary, calcAmortization, calcYearlyAmortization,
    formatCurrency, formatPercent, formatMonthYear,
    type MortgageSummary, type AmortizationRow, US_MORTGAGE_CONSTANTS,
} from '@/lib/formulas';
import { calcPMIRate } from '@/lib/formulas';
import { getTaxEstimate } from '@/lib/taxEstimates';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import DownloadButtons from '@/components/DownloadButtons';

const LOAN_TERMS = [10, 15, 20, 30];

const DEFAULT = {
    homePrice: 400000,
    downPaymentDollar: 80000,
    downPaymentPct: 20,
    interestRate: 6.75,
    loanTerm: 30,
    zip: '',
    propertyTax: 5000,
    insurance: 1400,
    hoa: 0,
    pmiRate: 0,
    startDate: new Date(),
    extraMonthly: 0,
    biWeekly: false,
};

type TabKey = 'breakdown' | 'amortization' | 'extra' | 'charts';

export default function MortgageCalculator({ initialTab = 'breakdown' }: { initialTab?: TabKey } = {}) {
    const [homePrice, setHomePrice] = useState(DEFAULT.homePrice);
    const [downDollar, setDownDollar] = useState(DEFAULT.downPaymentDollar);
    const [downPct, setDownPct] = useState(DEFAULT.downPaymentPct);
    const [rate, setRate] = useState(DEFAULT.interestRate);
    const [term, setTerm] = useState(DEFAULT.loanTerm);
    const [customTerm, setCustomTerm] = useState('');
    const [zip, setZip] = useState('');
    const [propTax, setPropTax] = useState(DEFAULT.propertyTax);
    const [insurance, setInsurance] = useState(DEFAULT.insurance);
    const [hoa, setHoa] = useState(0);
    const [extraMonthly, setExtraMonthly] = useState(0);
    const [biWeekly, setBiWeekly] = useState(false);
    const [pmiOverride, setPmiOverride] = useState<number | null>(null);
    const [tab, setTab] = useState<TabKey>(initialTab);
    const [, startTabTransition] = useTransition();
    const switchTab = (t: TabKey) => startTabTransition(() => setTab(t));
    const [showYearly, setShowYearly] = useState(false);
    const [amortFilter, setAmortFilter] = useState('all');

    // Sync down payment ↔ percent
    const syncFromDollar = (val: number) => {
        setDownDollar(val);
        setDownPct(homePrice > 0 ? +(val / homePrice * 100).toFixed(2) : 0);
    };
    const syncFromPct = (pct: number) => {
        setDownPct(pct);
        setDownDollar(Math.round(homePrice * pct / 100));
    };
    const syncFromHomePrice = (price: number) => {
        setHomePrice(price);
        setDownDollar(Math.round(price * downPct / 100));
    };

    // ZIP lookup
    const handleZipChange = useCallback((z: string) => {
        setZip(z);
        if (z.length === 5) {
            const est = getTaxEstimate(z);
            setPropTax(Math.round(homePrice * est.rate / 100));
            setInsurance(est.insurance);
            toast.info(`📍 ${z}: Tax ${est.rate}% | Insurance ~${formatCurrency(est.insurance)}/yr (estimate)`);
        }
    }, [homePrice]);

    // Computed values
    const loanTermYears = customTerm ? parseInt(customTerm) || 30 : term;
    const ltv = homePrice > 0 ? (homePrice - downDollar) / homePrice : 0;
    const autoPMI = pmiOverride !== null ? pmiOverride / 100 : (ltv > 0.80 ? calcPMIRate(ltv) : 0);
    const startDate = useMemo(() => new Date(), []);

    const inputs = useMemo(() => ({
        homePrice,
        downPayment: downDollar,
        annualInterestRate: rate,
        loanTermYears,
        annualPropertyTax: propTax,
        annualInsurance: insurance,
        monthlyHOA: hoa,
        pmiRate: autoPMI,
        startDate,
        extraMonthly,
        biWeekly,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [homePrice, downDollar, rate, loanTermYears, propTax, insurance, hoa, autoPMI, extraMonthly, biWeekly]);

    // Defer heavy calculations so inputs stay responsive while amortization computes in background
    const deferredInputs = useDeferredValue(inputs);
    const isCalculating = deferredInputs !== inputs;

    const summary = useMemo<MortgageSummary | null>(() => {
        if (deferredInputs.homePrice <= 0 || deferredInputs.downPayment >= deferredInputs.homePrice || deferredInputs.annualInterestRate <= 0) return null;
        try { return calcMortgageSummary(deferredInputs); } catch { return null; }
    }, [deferredInputs]);

    const amortization = useMemo<AmortizationRow[]>(() => {
        if (deferredInputs.homePrice <= 0 || deferredInputs.downPayment >= deferredInputs.homePrice || deferredInputs.annualInterestRate <= 0) return [];
        try { return calcAmortization(deferredInputs); } catch { return []; }
    }, [deferredInputs]);

    const yearlyAmort = useMemo(() => calcYearlyAmortization(amortization), [amortization]);

    // Pie chart data
    const pieData = useMemo(() => {
        if (!summary) return [];
        const d = [
            { name: 'Principal & Interest', value: +summary.principalAndInterest.toFixed(2) },
            { name: 'Property Tax', value: +summary.monthlyPropertyTax.toFixed(2) },
            { name: 'Insurance', value: +summary.monthlyInsurance.toFixed(2) },
        ];
        if (summary.monthlyHOA > 0) d.push({ name: 'HOA', value: +summary.monthlyHOA.toFixed(2) });
        if (summary.monthlyPMI > 0) d.push({ name: 'PMI', value: +summary.monthlyPMI.toFixed(2) });
        return d;
    }, [summary]);

    // Amortization filter
    const filteredAmort = useMemo(() => {
        if (showYearly) return [];
        if (amortFilter === 'all') return amortization;
        const y = parseInt(amortFilter);
        return amortization.filter(r => r.month > (y - 1) * 12 && r.month <= y * 12);
    }, [amortization, amortFilter, showYearly]);

    const yearOptions = Array.from({ length: loanTermYears }, (_, i) => i + 1);

    const formState = {
        hp: homePrice, dd: downDollar, r: rate, t: loanTermYears,
        pt: propTax, ins: insurance, hoa, em: extraMonthly,
    };

    return (
        <div className="py-6 animate-fade-in relative z-10">
            {/* Background ambient glow matching Stitch design */}
            <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#0da6f2] rounded-full mix-blend-screen filter blur-[128px] opacity-20 pointer-events-none hidden" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-green-500 rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none hidden" />

            {/* Page Header */}
            <div className="mb-5 sm:mb-7 text-center relative">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy-900 mb-2 sm:mb-3 tracking-tight leading-tight">
                    Premium Mortgage Calculator
                </h1>
                <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                    Calculate your full PITI mortgage payment instantly with our high-end, responsive tool.
                </p>
            </div>

            {/* Download Bar (Top) */}
            {summary && (
                <div className="mb-6 animate-slide-up">
                    <DownloadButtons
                        summary={summary}
                        amortization={amortization}
                        formState={formState}
                        calculatorName="Mortgage"
                    />
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative">
                {/* ── LEFT: Inputs ──────────────────────────────────────────────────── */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="glass-card p-4 sm:p-5">
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-5 sm:mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#0da6f2] shadow-[0_0_8px_rgba(13,166,242,0.8)]" />
                            Loan Details
                        </h2>

                        {/* Home Price */}
                        <div className="mb-6">
                            <label className="input-label">Home Price</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">$</span>
                                <input
                                    type="number"
                                    className="glass-input pl-8"
                                    value={homePrice}
                                    onChange={e => syncFromHomePrice(parseFloat(e.target.value) || 0)}
                                    min={50000} max={10000000} step={1000}
                                    aria-label="Home price in dollars"
                                />
                            </div>
                            <input
                                type="range" min={50000} max={2000000} step={5000}
                                value={homePrice}
                                onChange={e => syncFromHomePrice(parseInt(e.target.value))}
                                className="glass-slider w-full mt-4"
                                style={{ '--value': `${((homePrice - 50000) / (2000000 - 50000)) * 100}%` } as React.CSSProperties}
                            />
                            <div className="flex justify-between text-xs mt-2 text-gray-400 font-medium">
                                <span>$50k</span><span>$2M</span>
                            </div>
                        </div>

                        {/* Down Payment */}
                        <div className="mb-6">
                            <label className="input-label">Down Payment</label>
                            {/* Stack on phones, side-by-side on sm+ */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                <div className="relative flex-1 group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">$</span>
                                    <input
                                        type="number"
                                        className="glass-input pl-8"
                                        value={downDollar}
                                        onChange={e => syncFromDollar(parseFloat(e.target.value) || 0)}
                                        min={0} max={homePrice}
                                        aria-label="Down payment in dollars"
                                    />
                                </div>
                                <div className="relative w-full sm:w-28 group">
                                    <input
                                        type="number"
                                        className="glass-input pr-8 text-center"
                                        value={downPct}
                                        onChange={e => syncFromPct(parseFloat(e.target.value) || 0)}
                                        min={0} max={100} step={0.5}
                                        aria-label="Down payment as percentage"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">%</span>
                                </div>
                            </div>
                            {ltv > 0.80 && (
                                <p className="text-xs mt-2 text-amber-500 flex items-center gap-1.5 font-medium">
                                    <Info size={14} />
                                    LTV {formatPercent(ltv * 100, 1)} — PMI Required
                                </p>
                            )}
                            {ltv <= 0 && downDollar > 0 && (
                                <p className="text-xs mt-1.5 text-red-500">Down payment cannot exceed home price</p>
                            )}
                        </div>

                        {/* Interest Rate */}
                        <div className="mb-6">
                            <label className="input-label">Annual Interest Rate</label>
                            <div className="relative group">
                                <input
                                    type="number"
                                    className="glass-input pr-8"
                                    value={rate}
                                    onChange={e => setRate(parseFloat(e.target.value) || 0)}
                                    min={0.1} max={20} step={0.125}
                                    aria-label="Annual interest rate in percent"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">%</span>
                            </div>
                            <input
                                type="range" min={1} max={15} step={0.125}
                                value={rate}
                                onChange={e => setRate(parseFloat(e.target.value))}
                                className="glass-slider w-full mt-4"
                                style={{ '--value': `${((rate - 1) / (15 - 1)) * 100}%` } as React.CSSProperties}
                            />
                            <div className="flex justify-between text-xs mt-2 text-gray-400 font-medium">
                                <span>1%</span><span>15%</span>
                            </div>
                        </div>

                        {/* Loan Term */}
                        <div className="mb-6">
                            <label className="input-label">Loan Term</label>
                            {/* 4 term buttons + custom — grid on mobile, flex on sm+ */}
                            <div className="grid grid-cols-3 sm:flex gap-2 flex-wrap">
                                {LOAN_TERMS.map(t => (
                                    <button
                                        key={t}
                                        onClick={() => { setTerm(t); setCustomTerm(''); }}
                                        className={`px-3 sm:px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border-2 min-h-[44px] ${term === t && !customTerm
                                            ? 'border-[#0da6f2] bg-[#0da6f2]/10 text-[#0da6f2] shadow-[0_0_15px_rgba(13,166,242,0.3)]'
                                            : 'border-gray-200 text-gray-500 hover:border-[#0da6f2]/50 hover:text-[#0da6f2]'
                                            }`}
                                    >
                                        {t} yr
                                    </button>
                                ))}
                                <div className="relative">
                                    <input
                                        type="number"
                                        placeholder="Custom"
                                        className="glass-input w-full sm:w-24 text-center py-2.5 text-sm min-h-[44px]"
                                        value={customTerm}
                                        onChange={e => setCustomTerm(e.target.value)}
                                        min={1} max={50}
                                        aria-label="Custom loan term in years"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ZIP Code */}
                        <div className="mb-5">
                            <label className="input-label flex items-center gap-2">
                                <MapPin size={14} className="text-[#0da6f2]" /> ZIP Code
                            </label>
                            <input
                                type="text"
                                className="glass-input"
                                placeholder="e.g., 78701"
                                value={zip}
                                onChange={e => handleZipChange(e.target.value.replace(/\D/g, '').slice(0, 5))}
                                maxLength={5}
                                aria-label="ZIP code for property tax estimate"
                            />
                        </div>
                    </div>

                    {/* Monthly Costs Card */}
                    <div className="glass-card p-4 sm:p-5">
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-5 sm:mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                            Monthly Costs
                        </h2>

                        {/* Property Tax */}
                        <div className="mb-5">
                            <label className="input-label">Annual Property Tax</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">$</span>
                                <input
                                    type="number"
                                    className="glass-input pl-8"
                                    value={propTax}
                                    onChange={e => setPropTax(parseFloat(e.target.value) || 0)}
                                    min={0} step={100}
                                    aria-label="Annual property tax"
                                />
                            </div>
                            <p className="text-xs mt-2 text-gray-400 font-medium">
                                {formatCurrency(propTax / 12)}/month
                            </p>
                        </div>

                        {/* Insurance */}
                        <div className="mb-5">
                            <label className="input-label">Homeowners Insurance (Annual)</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">$</span>
                                <input
                                    type="number"
                                    className="glass-input pl-8"
                                    value={insurance}
                                    onChange={e => setInsurance(parseFloat(e.target.value) || 0)}
                                    min={0} step={100}
                                    aria-label="Annual homeowners insurance"
                                />
                            </div>
                            <p className="text-xs mt-2 text-gray-400 font-medium">
                                {formatCurrency(insurance / 12)}/month
                            </p>
                        </div>

                        {/* HOA */}
                        <div className="mb-5">
                            <label className="input-label">HOA Fees (Monthly)</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">$</span>
                                <input
                                    type="number"
                                    className="glass-input pl-8"
                                    value={hoa}
                                    onChange={e => setHoa(parseFloat(e.target.value) || 0)}
                                    min={0} step={50}
                                    aria-label="Monthly HOA fees"
                                />
                            </div>
                        </div>

                        {/* PMI Override */}
                        {ltv > 0.80 && (
                            <div className="mb-5">
                                <label className="input-label">PMI Rate Override (Annual %)</label>
                                <div className="relative group">
                                    <input
                                        type="number"
                                        className="glass-input pr-8"
                                        placeholder={`Auto: ${formatPercent(autoPMI * 100, 2)}`}
                                        value={pmiOverride ?? ''}
                                        onChange={e => setPmiOverride(e.target.value ? parseFloat(e.target.value) : null)}
                                        min={0} max={3} step={0.01}
                                        aria-label="PMI rate override"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">%</span>
                                </div>
                                <p className="text-xs mt-2 text-amber-500 font-medium">
                                    Auto: {formatPercent(autoPMI * 100, 2)}/yr based on LTV. PMI cancels at 78% LTV.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── RIGHT: Results ─────────────────────────────────────────────────── */}
                <div className="lg:col-span-8 space-y-6 flex flex-col lg:self-start">

                    {/* Main Payment Card */}
                    {summary ? (
                        <div suppressHydrationWarning className={`glass-card p-4 sm:p-5 animate-slide-up flex-1 flex flex-col transition-opacity duration-150 ${isCalculating ? 'opacity-60' : 'opacity-100'}`}>
                            {/* Total Payment Giant Display */}
                            <div className="text-center mb-8 pb-8 border-b border-gray-200 relative">
                                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0da6f2]/50 to-transparent" />
                                <p className="text-sm font-bold uppercase tracking-widest mb-3 text-gray-500">
                                    Total Monthly Payment
                                </p>
                                <div className="text-3xl sm:text-4xl md:text-5xl font-black tabular-nums tracking-tighter text-navy-900 transition-all duration-500 ease-out" style={{textShadow: '0 0 40px rgba(13, 166, 242, 0.15)'}}>
                                    <span className="text-lg sm:text-xl md:text-2xl align-top mr-1 font-bold text-gray-400">$</span>
                                    {summary.totalMonthly.toFixed(0)}
                                </div>
                                <p className="text-xs sm:text-sm mt-3 sm:mt-4 font-medium text-gray-400">
                                    P&I: <strong className="text-gray-700">{formatCurrency(summary.principalAndInterest)}</strong> 
                                    <span className="mx-2 opacity-50">|</span> 
                                    Taxes, Ins, & Fees: <strong className="text-gray-700">{formatCurrency(summary.monthlyPropertyTax + summary.monthlyInsurance + summary.monthlyHOA + summary.monthlyPMI)}</strong>
                                </p>
                            </div>

                            {/* Quick Stats Row */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-5">
                                {[
                                    { label: 'Loan Amount', value: formatCurrency(summary.loanAmount) },
                                    { label: 'Total Interest', value: formatCurrency(summary.totalInterest) },
                                    { label: 'Payoff Date', value: formatMonthYear(summary.payoffDate) },
                                ].map(stat => (
                                    <div key={stat.label} className="glass-panel p-2 sm:p-4 text-center">
                                        <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1 leading-tight">{stat.label}</p>
                                        <p className="text-xs sm:text-sm font-black text-navy-900 truncate">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Tabs Navigation */}
                            <div className="glass-tab-list justify-start sm:justify-center mb-4 sm:mb-5 mx-auto self-center overflow-x-auto scrollbar-hide w-full flex-nowrap">
                                {([
                                    { key: 'breakdown', label: 'Payment Breakdown' },
                                    { key: 'amortization', label: 'Amortization Table' },
                                    { key: 'extra', label: 'Extra Payments' },
                                    { key: 'charts', label: 'Visual Charts' },
                                ] as { key: TabKey; label: string }[]).map(t => (
                                    <button
                                        key={t.key}
                                        onClick={() => switchTab(t.key)}
                                        className={`glass-tab ${tab === t.key ? 'active' : ''}`}
                                        role="tab"
                                        aria-selected={tab === t.key}
                                    >
                                        {t.label}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            {tab === 'breakdown' && (
                                <div className="animate-fade-in">
                                    {/* PITI breakdown rows */}
                                    <div className="space-y-1">
                                        {[
                                            { label: 'Principal & Interest', value: summary.principalAndInterest, color: '#0da6f2', glow: 'rgba(13,166,242,0.6)' },
                                            { label: 'Property Tax', value: summary.monthlyPropertyTax, color: '#10b981', glow: 'rgba(16,185,129,0.6)' },
                                            { label: 'Homeowners Insurance', value: summary.monthlyInsurance, color: '#6366f1', glow: 'rgba(99,102,241,0.6)' },
                                            { label: 'HOA Fees', value: summary.monthlyHOA, color: '#f59e0b', glow: 'rgba(245,158,11,0.6)' },
                                            { label: `PMI (${formatPercent(autoPMI * 100, 2)}/yr)`, value: summary.monthlyPMI, color: '#ef4444', glow: 'rgba(239,68,68,0.6)' },
                                        ]
                                            .filter(r => r.value > 0)
                                            .map(row => (
                                                <div key={row.label} className="flex justify-between items-center py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors">
                                                    <span className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: row.color, boxShadow: `0 0 8px ${row.glow}` }} />
                                                        {row.label}
                                                    </span>
                                                    <span className="font-bold tabular-nums text-navy-900">{formatCurrency(row.value)}</span>
                                                </div>
                                            ))}
                                        {/* Total */}
                                        <div className="flex justify-between items-center pt-4 mt-3 border-t border-gray-200 px-3">
                                            <span className="font-black text-sm uppercase tracking-wider text-gray-800">Total Monthly</span>
                                            <span className="text-xl font-black text-[#0da6f2]" style={{textShadow: '0 0 15px rgba(13,166,242,0.3)'}}>{formatCurrency(summary.totalMonthly)}</span>
                                        </div>
                                    </div>

                                    <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                                    {/* Loan overview */}
                                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                                        {[
                                            ['Home Price', formatCurrency(homePrice)],
                                            ['Down Payment', `${formatCurrency(downDollar)} (${formatPercent(summary.downPaymentPercent, 1)})`],
                                            ['Loan Amount', formatCurrency(summary.loanAmount)],
                                            ['Loan-to-Value', formatPercent(summary.ltv, 1)],
                                            ['Total Payments', formatCurrency(summary.totalPayments)],
                                            ['Total Interest', formatCurrency(summary.totalInterest)],
                                            ['Payoff Date', formatMonthYear(summary.payoffDate)],
                                            ['Loan Category', summary.loanType.replace('_', ' ').toUpperCase()],
                                        ].map(([label, value]) => (
                                            <div key={String(label)} className="glass-panel p-3 text-center">
                                                <p className="text-xs mb-1 text-gray-500 capitalize">{label}</p>
                                                <p className="text-sm font-bold tabular-nums text-navy-900">{value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Conforming limit notice */}
                                    {summary.loanAmount > US_MORTGAGE_CONSTANTS.CONFORMING_LOAN_LIMIT && (
                                        <div className="mt-4 p-3 rounded-xl border border-amber-200 bg-amber-50">
                                            <p className="text-xs text-amber-800">
                                                <strong>⚠️ Jumbo Loan:</strong> Loan amount {formatCurrency(summary.loanAmount)} exceeds the 2026 conforming loan limit of $832,750. Jumbo loans typically require higher credit scores and larger down payments.
                                            </p>
                                        </div>
                                    )}

                                    {/* Extended Badges Section */}
                                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* FHA Badge */}
                                        <div className={`p-3 rounded-xl border ${summary.loanAmount <= US_MORTGAGE_CONSTANTS.FHA_FLOOR && summary.downPaymentPercent >= 3.5 ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                                            <h4 className="text-xs font-bold mb-1 flex items-center gap-1">
                                                {summary.loanAmount <= US_MORTGAGE_CONSTANTS.FHA_FLOOR && summary.downPaymentPercent >= 3.5 ? <span className="text-green-600 font-bold">✅ FHA Eligible</span> : <span className="text-gray-500 font-bold">❌ FHA Ineligible</span>}
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                FHA loans require 3.5% down and loan amounts under the floor. {summary.downPaymentPercent < 3.5 ? 'Increase down payment to 3.5%.' : ''}
                                            </p>
                                        </div>

                                        {/* VA Badge */}
                                        <div className={`p-3 rounded-xl border ${summary.loanAmount <= US_MORTGAGE_CONSTANTS.VA_BASELINE ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
                                            <h4 className="text-xs font-bold mb-1 flex items-center gap-1">
                                                {summary.loanAmount <= US_MORTGAGE_CONSTANTS.VA_BASELINE ? <span className="text-blue-600 font-bold">🎖️ VA Loan Eligible</span> : <span className="text-gray-500 font-bold">❌ VA Loan Ineligible</span>}
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                For eligible veterans, 0% down is allowed up to baseline.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {tab === 'amortization' && (
                                <MortgageAmortTable
                                    showYearly={showYearly}
                                    setShowYearly={setShowYearly}
                                    amortFilter={amortFilter}
                                    setAmortFilter={setAmortFilter}
                                    yearOptions={yearOptions}
                                    filteredAmort={filteredAmort}
                                    yearlyAmort={yearlyAmort}
                                />
                            )}

                            {tab === 'extra' && (
                                <div className="animate-fade-in space-y-5">
                                    <div className="glass-panel p-6">
                                        <div className="flex items-center gap-3 mb-6">
                                            <TrendingDown className="text-[#0da6f2]" size={24} />
                                            <div>
                                                <h3 className="text-lg font-black text-navy-900">Extra Payment Strategy</h3>
                                                <p className="text-sm text-gray-500">Accelerate your payoff and save thousands in interest.</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div>
                                                <label className="input-label">Additional Monthly Payment</label>
                                                <div className="relative group">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">$</span>
                                                    <input
                                                        type="number"
                                                        className="glass-input pl-8"
                                                        value={extraMonthly}
                                                        onChange={e => setExtraMonthly(parseFloat(e.target.value) || 0)}
                                                        min={0} step={50}
                                                        aria-label="Extra monthly payment"
                                                    />
                                                </div>
                                            </div>

                                            <label className="flex items-center gap-3 cursor-pointer p-4 glass-panel hover:bg-white/5 transition-colors rounded-xl group">
                                                <input
                                                    type="checkbox"
                                                    checked={biWeekly}
                                                    onChange={e => setBiWeekly(e.target.checked)}
                                                    className="w-5 h-5 rounded border-gray-300 text-[#0da6f2] focus:ring-[#0da6f2] transition-colors cursor-pointer"
                                                />
                                                <div className="flex-1">
                                                    <span className="block text-sm font-bold text-gray-700 group-hover:text-[#0da6f2] transition-colors">Bi-weekly payments</span>
                                                    <span className="text-xs text-gray-400">Half payment every 2 weeks (13 full payments per year)</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    {extraMonthly > 0 && summary && (() => {
                                        const baseAmort = calcAmortization({ ...inputs, extraMonthly: 0 });
                                        const extraAmort = calcAmortization(inputs);
                                        const baseLast = baseAmort[baseAmort.length - 1];
                                        const extraLast = extraAmort[extraAmort.length - 1];
                                        const monthsSaved = baseAmort.length - extraAmort.length;
                                        const interestSaved = (baseLast?.cumulativeInterest || 0) - (extraLast?.cumulativeInterest || 0);
                                        
                                        if (monthsSaved <= 0) return null;

                                        return (
                                            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                                                
                                                <div className="flex items-center gap-2 mb-6 z-10 relative">
                                                    <TrendingDown size={20} className="text-emerald-500" />
                                                    <p className="font-bold text-emerald-600 uppercase tracking-wider text-sm">Potential Savings Impact</p>
                                                </div>
                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 z-10 relative">
                                                    <div>
                                                        <p className="text-xs mb-1 text-emerald-700/70 font-medium uppercase">Interest Saved</p>
                                                        <p className="text-2xl font-black text-emerald-600 drop-shadow-sm">{formatCurrency(interestSaved)}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs mb-1 text-emerald-700/70 font-medium uppercase">Time Saved</p>
                                                        <p className="text-2xl font-black text-navy-900">
                                                            {Math.floor(monthsSaved / 12)}y {monthsSaved % 12}m
                                                        </p>
                                                    </div>
                                                    <div className="border-t lg:border-t-0 lg:border-l border-emerald-500/20 pt-4 lg:pt-0 lg:pl-6">
                                                        <p className="text-xs mb-1 text-gray-500 font-medium uppercase">Original Payoff</p>
                                                        <p className="text-base font-bold text-gray-700">{formatMonthYear(baseLast?.date ?? summary.payoffDate)}</p>
                                                    </div>
                                                    <div className="border-t lg:border-t-0 border-emerald-500/20 pt-4 lg:pt-0">
                                                        <p className="text-xs mb-1 text-emerald-700/70 font-medium uppercase">New Payoff</p>
                                                        <p className="text-base font-bold text-emerald-600">{formatMonthYear(extraLast?.date ?? summary.payoffDate)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>
                            )}

                            {tab === 'charts' && (
                                <div className="animate-fade-in space-y-5">
                                    <MortgageCharts pieData={pieData} amortization={amortization} />
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Empty state */
                        <div className="glass-card p-4 sm:p-6 text-center flex-1 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[500px]">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-[#0da6f2]/10 border border-[#0da6f2]/20 shadow-[0_0_30px_rgba(13,166,242,0.15)] relative">
                                <div className="absolute inset-0 rounded-full bg-[#0da6f2] animate-ping opacity-20 duration-1000"></div>
                                <span className="text-4xl text-[#0da6f2]">🏠</span>
                            </div>
                            <h3 className="text-2xl font-black mb-3 text-navy-900">Ready for your details</h3>
                            <p className="text-base text-gray-500 max-w-sm mx-auto">
                                Fill in the home price, interest rate, and down payment to generate your premium mortgage breakdown.
                            </p>
                        </div>
                    )}

                    {/* Download (Bottom) */}
                    {summary && (
                        <div className="mt-6">
                            <DownloadButtons
                                summary={summary}
                                amortization={amortization}
                                formState={formState}
                                calculatorName="Mortgage"
                            />
                        </div>
                    )}

                    <DisclaimerBanner calculatorName="the Mortgage Calculator" />
                </div>
            </div>
        </div>
    );
}
