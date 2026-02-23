'use client';

import { useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

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
import { Info, TrendingDown, ChevronDown, ChevronUp, Plus, X, Share2, ArrowRight, Shield, Download, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const LOAN_TERMS = [10, 15, 20, 30];
const PIE_COLORS = ['#0A2540', '#00C853', '#1a4d9a', '#f59e0b', '#ef4444'];

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

export default function MortgageCalculator() {
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
    const [tab, setTab] = useState<TabKey>('breakdown');
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
    }), [homePrice, downDollar, rate, loanTermYears, propTax, insurance, hoa, autoPMI, startDate, extraMonthly, biWeekly]);

    const summary = useMemo<MortgageSummary | null>(() => {
        if (homePrice <= 0 || downDollar >= homePrice || rate <= 0) return null;
        try { return calcMortgageSummary(inputs); } catch { return null; }
    }, [inputs, homePrice, downDollar, rate]);

    const amortization = useMemo<AmortizationRow[]>(() => {
        if (!summary) return [];
        return calcAmortization(inputs);
    }, [inputs, summary]);

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

    // Balance chart data (every 12 months)
    const balanceData = useMemo(() => {
        return amortization
            .filter((_, i) => i % 12 === 11 || i === 0)
            .map(r => ({
                year: Math.ceil(r.month / 12),
                balance: +r.balance.toFixed(0),
                equity: +(homePrice - r.balance).toFixed(0),
                interest: +r.cumulativeInterest.toFixed(0),
            }));
    }, [amortization, homePrice]);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">

            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-navy-900 dark:text-white mb-2">
                    Free Mortgage Calculator 2026
                </h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                    Calculate your full PITI mortgage payment instantly. Download a professional PDF report or CSV/Excel file — free, no signup required.
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

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* ── LEFT: Inputs ──────────────────────────────────────────────────── */}
                <div className="xl:col-span-2 space-y-4">
                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-5" style={{ color: 'var(--color-text-muted)' }}>
                            Loan Details
                        </h2>

                        {/* Home Price */}
                        <div className="mb-5">
                            <label className="input-label">Home Price</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input
                                    type="number"
                                    className="input-field pl-7"
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
                                className="slider w-full mt-2"
                                style={{ '--value': `${((homePrice - 50000) / (2000000 - 50000)) * 100}%` } as React.CSSProperties}
                            />
                            <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                <span>$50k</span><span>$2M</span>
                            </div>
                        </div>

                        {/* Down Payment */}
                        <div className="mb-5">
                            <label className="input-label">Down Payment</label>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                    <input
                                        type="number"
                                        className="input-field pl-7"
                                        value={downDollar}
                                        onChange={e => syncFromDollar(parseFloat(e.target.value) || 0)}
                                        min={0} max={homePrice}
                                        aria-label="Down payment in dollars"
                                    />
                                </div>
                                <div className="relative w-24">
                                    <input
                                        type="number"
                                        className="input-field pr-6 text-center"
                                        value={downPct}
                                        onChange={e => syncFromPct(parseFloat(e.target.value) || 0)}
                                        min={0} max={100} step={0.5}
                                        aria-label="Down payment as percentage"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>%</span>
                                </div>
                            </div>
                            {ltv > 0.80 && (
                                <p className="text-xs mt-1.5 text-amber-600 dark:text-amber-400 flex items-center gap-1">
                                    <Info size={12} />
                                    LTV {formatPercent(ltv * 100, 1)} — PMI required below 20% down
                                </p>
                            )}
                            {ltv <= 0 && downDollar > 0 && (
                                <p className="text-xs mt-1.5 text-red-500">Down payment cannot exceed home price</p>
                            )}
                        </div>

                        {/* Interest Rate */}
                        <div className="mb-5">
                            <label className="input-label">Annual Interest Rate</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    className="input-field pr-8"
                                    value={rate}
                                    onChange={e => setRate(parseFloat(e.target.value) || 0)}
                                    min={0.1} max={20} step={0.125}
                                    aria-label="Annual interest rate in percent"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>%</span>
                            </div>
                            <input
                                type="range" min={1} max={15} step={0.125}
                                value={rate}
                                onChange={e => setRate(parseFloat(e.target.value))}
                                className="slider w-full mt-2"
                                style={{ '--value': `${((rate - 1) / (15 - 1)) * 100}%` } as React.CSSProperties}
                            />
                            <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                <span>1%</span><span>15%</span>
                            </div>
                        </div>

                        {/* Loan Term */}
                        <div className="mb-5">
                            <label className="input-label">Loan Term</label>
                            <div className="flex gap-2 flex-wrap">
                                {LOAN_TERMS.map(t => (
                                    <button
                                        key={t}
                                        onClick={() => { setTerm(t); setCustomTerm(''); }}
                                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${term === t && !customTerm
                                            ? 'text-white border-transparent'
                                            : 'border-current hover:border-green-600 hover:text-green-600'
                                            }`}
                                        style={{
                                            background: term === t && !customTerm ? 'var(--color-navy)' : 'transparent',
                                            color: term === t && !customTerm ? 'white' : 'var(--color-text-muted)',
                                        }}
                                    >
                                        {t} yr
                                    </button>
                                ))}
                                <div className="relative">
                                    <input
                                        type="number"
                                        placeholder="Custom"
                                        className="input-field w-20 text-center py-2"
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
                            <label className="input-label">ZIP Code <span className="text-xs font-normal">(auto-fill taxes)</span></label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="e.g., 78701"
                                value={zip}
                                onChange={e => handleZipChange(e.target.value.replace(/\D/g, '').slice(0, 5))}
                                maxLength={5}
                                aria-label="ZIP code for property tax estimate"
                            />
                        </div>
                    </div>

                    {/* Monthly Costs */}
                    <div className="card p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide mb-5" style={{ color: 'var(--color-text-muted)' }}>
                            Monthly Costs
                        </h2>

                        {/* Property Tax */}
                        <div className="mb-4">
                            <label className="input-label">Annual Property Tax</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input
                                    type="number"
                                    className="input-field pl-7"
                                    value={propTax}
                                    onChange={e => setPropTax(parseFloat(e.target.value) || 0)}
                                    min={0} step={100}
                                    aria-label="Annual property tax"
                                />
                            </div>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                {formatCurrency(propTax / 12)}/month
                            </p>
                        </div>

                        {/* Insurance */}
                        <div className="mb-4">
                            <label className="input-label">Homeowners Insurance (Annual)</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input
                                    type="number"
                                    className="input-field pl-7"
                                    value={insurance}
                                    onChange={e => setInsurance(parseFloat(e.target.value) || 0)}
                                    min={0} step={100}
                                    aria-label="Annual homeowners insurance"
                                />
                            </div>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                {formatCurrency(insurance / 12)}/month
                            </p>
                        </div>

                        {/* HOA */}
                        <div className="mb-4">
                            <label className="input-label">HOA Fees (Monthly)</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                <input
                                    type="number"
                                    className="input-field pl-7"
                                    value={hoa}
                                    onChange={e => setHoa(parseFloat(e.target.value) || 0)}
                                    min={0} step={50}
                                    aria-label="Monthly HOA fees"
                                />
                            </div>
                        </div>

                        {/* PMI Override */}
                        {ltv > 0.80 && (
                            <div className="mb-4">
                                <label className="input-label">PMI Rate Override (Annual %)</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        className="input-field pr-8"
                                        placeholder={`Auto: ${formatPercent(autoPMI * 100, 2)}`}
                                        value={pmiOverride ?? ''}
                                        onChange={e => setPmiOverride(e.target.value ? parseFloat(e.target.value) : null)}
                                        min={0} max={3} step={0.01}
                                        aria-label="PMI rate override"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: 'var(--color-text-muted)' }}>%</span>
                                </div>
                                <p className="text-xs mt-1 text-amber-600 dark:text-amber-400">
                                    Auto: {formatPercent(autoPMI * 100, 2)}/yr based on LTV. PMI cancels at 78% LTV (Homeowners Protection Act).
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── RIGHT: Results ─────────────────────────────────────────────────── */}
                <div className="xl:col-span-3 space-y-5">

                    {/* Main Payment Card */}
                    {summary ? (
                        <div className="card p-6 animate-slide-up">
                            {/* Total Payment */}
                            <div className="text-center mb-6">
                                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>
                                    Total Monthly Payment
                                </p>
                                <div className="payment-amount">
                                    {formatCurrency(summary.totalMonthly)}
                                </div>
                                <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                    Principal &amp; Interest: {formatCurrency(summary.principalAndInterest)} + Taxes/Ins/Other: {formatCurrency(summary.monthlyPropertyTax + summary.monthlyInsurance + summary.monthlyHOA + summary.monthlyPMI)}
                                </p>
                            </div>

                            {/* Quick Stats Row */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {[
                                    { label: 'Loan Amount', value: formatCurrency(summary.loanAmount) },
                                    { label: 'Total Interest', value: formatCurrency(summary.totalInterest) },
                                    { label: 'Payoff Date', value: formatMonthYear(summary.payoffDate) },
                                ].map(stat => (
                                    <div key={stat.label} className="text-center p-3 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                                        <p className="text-xs font-semibold mb-1" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</p>
                                        <p className="text-sm font-bold tabular-nums" style={{ color: 'var(--color-text)' }}>{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Tabs */}
                            <div className="tab-list mb-6">
                                {([
                                    { key: 'breakdown', label: 'Breakdown' },
                                    { key: 'amortization', label: 'Amortization' },
                                    { key: 'extra', label: 'Extra Payments' },
                                    { key: 'charts', label: 'Charts' },
                                ] as { key: TabKey; label: string }[]).map(t => (
                                    <button
                                        key={t.key}
                                        onClick={() => setTab(t.key)}
                                        className={`tab-item ${tab === t.key ? 'active' : ''}`}
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
                                    <div className="space-y-0">
                                        {[
                                            { label: 'Principal & Interest', value: summary.principalAndInterest, color: '#0A2540' },
                                            { label: 'Property Tax', value: summary.monthlyPropertyTax, color: '#00C853' },
                                            { label: 'Homeowners Insurance', value: summary.monthlyInsurance, color: '#1a4d9a' },
                                            { label: 'HOA Fees', value: summary.monthlyHOA, color: '#f59e0b' },
                                            { label: `PMI (${formatPercent(autoPMI * 100, 2)}/yr)`, value: summary.monthlyPMI, color: '#ef4444' },
                                        ]
                                            .filter(r => r.value > 0)
                                            .map(row => (
                                                <div key={row.label} className="result-row">
                                                    <span className="result-label flex items-center gap-2">
                                                        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: row.color }} />
                                                        {row.label}
                                                    </span>
                                                    <span className="result-value">{formatCurrency(row.value)}</span>
                                                </div>
                                            ))}
                                        {/* Total */}
                                        <div className="flex justify-between items-center pt-3 mt-2 border-t-2 border-green-600">
                                            <span className="font-black text-sm" style={{ color: 'var(--color-text)' }}>Total Monthly</span>
                                            <span className="text-lg font-black" style={{ color: '#00C853' }}>{formatCurrency(summary.totalMonthly)}</span>
                                        </div>
                                    </div>

                                    <div className="section-divider" />

                                    {/* Loan overview */}
                                    <div className="grid grid-cols-2 gap-3">
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
                                            <div key={String(label)} className="p-3 rounded-xl" style={{ background: 'var(--color-bg-secondary)' }}>
                                                <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>{label}</p>
                                                <p className="text-sm font-bold tabular-nums" style={{ color: 'var(--color-text)' }}>{value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Conforming limit notice */}
                                    {summary.loanAmount > US_MORTGAGE_CONSTANTS.CONFORMING_LOAN_LIMIT && (
                                        <div className="mt-4 p-3 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700">
                                            <p className="text-xs text-amber-800 dark:text-amber-300">
                                                <strong>⚠️ Jumbo Loan:</strong> Loan amount {formatCurrency(summary.loanAmount)} exceeds the 2026 conforming loan limit of $832,750. Jumbo loans typically require higher credit scores and larger down payments.
                                            </p>
                                        </div>
                                    )}

                                    {/* Extended Badges Section */}
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {/* FHA Badge */}
                                        <div className={`p-3 rounded-xl border ${summary.loanAmount <= US_MORTGAGE_CONSTANTS.FHA_FLOOR && summary.downPaymentPercent >= 3.5 ? 'border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700' : 'border-gray-200 bg-gray-50 dark:bg-navy-800 dark:border-navy-700'}`}>
                                            <h4 className="text-xs font-bold mb-1 flex items-center gap-1">
                                                {summary.loanAmount <= US_MORTGAGE_CONSTANTS.FHA_FLOOR && summary.downPaymentPercent >= 3.5 ? <span className="text-green-600 dark:text-green-400">✅ FHA Eligible</span> : <span className="text-gray-500">❌ FHA Ineligible</span>}
                                            </h4>
                                            <p className="text-[10px] text-gray-500 dark:text-gray-400">
                                                FHA loans require 3.5% down and loan amounts under the $541,287 floor. {summary.downPaymentPercent < 3.5 ? 'Increase down payment to 3.5%.' : ''} {summary.loanAmount > US_MORTGAGE_CONSTANTS.FHA_FLOOR ? 'Loan exceeds FHA 2026 floor limit.' : ''}
                                            </p>
                                        </div>

                                        {/* VA Badge */}
                                        <div className={`p-3 rounded-xl border ${summary.loanAmount <= US_MORTGAGE_CONSTANTS.VA_BASELINE ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700' : 'border-gray-200 bg-gray-50 dark:bg-navy-800 dark:border-navy-700'}`}>
                                            <h4 className="text-xs font-bold mb-1 flex items-center gap-1">
                                                {summary.loanAmount <= US_MORTGAGE_CONSTANTS.VA_BASELINE ? <span className="text-blue-600 dark:text-blue-400">🎖️ VA Loan Eligible</span> : <span className="text-gray-500">❌ VA Loan Ineligible</span>}
                                            </h4>
                                            <p className="text-[10px] text-gray-500 dark:text-gray-400">
                                                For eligible veterans, 0% down is allowed up to the $832,750 baseline. Watch out for the VA Funding Fee (1.24% - 3.3%).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {tab === 'amortization' && (
                                <div className="animate-fade-in">
                                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setShowYearly(false)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${!showYearly ? 'text-white' : ''}`}
                                                style={{ background: !showYearly ? 'var(--color-navy)' : 'var(--color-bg-secondary)', color: !showYearly ? 'white' : 'var(--color-text-muted)' }}
                                            >
                                                Monthly
                                            </button>
                                            <button
                                                onClick={() => setShowYearly(true)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${showYearly ? 'text-white' : ''}`}
                                                style={{ background: showYearly ? 'var(--color-navy)' : 'var(--color-bg-secondary)', color: showYearly ? 'white' : 'var(--color-text-muted)' }}
                                            >
                                                Yearly
                                            </button>
                                        </div>
                                        {!showYearly && (
                                            <select
                                                value={amortFilter}
                                                onChange={e => setAmortFilter(e.target.value)}
                                                className="input-field py-1.5 text-xs w-auto"
                                                aria-label="Filter amortization by year"
                                            >
                                                <option value="all">All Years</option>
                                                {yearOptions.map(y => (
                                                    <option key={y} value={y}>Year {y}</option>
                                                ))}
                                            </select>
                                        )}
                                    </div>

                                    <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--color-border)', maxHeight: '380px' }}>
                                        <table className="data-table">
                                            {showYearly ? (
                                                <>
                                                    <thead>
                                                        <tr>
                                                            <th>Year</th>
                                                            <th>Principal Paid</th>
                                                            <th>Interest Paid</th>
                                                            <th>Ending Balance</th>
                                                            <th>Cumulative Interest</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {yearlyAmort.map(r => (
                                                            <tr key={r.year}>
                                                                <td className="text-center font-bold">{r.year}</td>
                                                                <td>{formatCurrency(r.principalPaid)}</td>
                                                                <td className="text-red-500">{formatCurrency(r.interestPaid)}</td>
                                                                <td>{formatCurrency(r.endingBalance)}</td>
                                                                <td className="text-red-400">{formatCurrency(r.cumulativeInterest)}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </>
                                            ) : (
                                                <>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Date</th>
                                                            <th>Payment</th>
                                                            <th>Principal</th>
                                                            <th>Interest</th>
                                                            <th>Balance</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {filteredAmort.map(r => (
                                                            <tr key={r.month}>
                                                                <td className="text-center text-xs">{r.month}</td>
                                                                <td className="text-xs">{formatMonthYear(r.date)}</td>
                                                                <td>{formatCurrency(r.payment)}</td>
                                                                <td style={{ color: '#00C853' }}>{formatCurrency(r.principal)}</td>
                                                                <td className="text-red-500">{formatCurrency(r.interest)}</td>
                                                                <td>{formatCurrency(r.balance)}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </>
                                            )}
                                        </table>
                                    </div>
                                </div>
                            )}

                            {tab === 'extra' && (
                                <div className="animate-fade-in space-y-5">
                                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                        Add extra payments to see how much interest you can save and how much sooner you&apos;ll pay off your loan.
                                    </p>

                                    <div>
                                        <label className="input-label">Extra Monthly Payment</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>$</span>
                                            <input
                                                type="number"
                                                className="input-field pl-7"
                                                value={extraMonthly}
                                                onChange={e => setExtraMonthly(parseFloat(e.target.value) || 0)}
                                                min={0} step={50}
                                                aria-label="Extra monthly payment"
                                            />
                                        </div>
                                    </div>

                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={biWeekly}
                                            onChange={e => setBiWeekly(e.target.checked)}
                                            className="w-4 h-4 accent-green-600"
                                        />
                                        <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                                            Bi-weekly payments (half payment every 2 weeks = 13 payments/year)
                                        </span>
                                    </label>

                                    {extraMonthly > 0 && summary && (() => {
                                        const baseAmort = calcAmortization({ ...inputs, extraMonthly: 0 });
                                        const extraAmort = calcAmortization(inputs);
                                        const baseLast = baseAmort[baseAmort.length - 1];
                                        const extraLast = extraAmort[extraAmort.length - 1];
                                        const monthsSaved = baseAmort.length - extraAmort.length;
                                        const interestSaved = baseLast.cumulativeInterest - extraLast.cumulativeInterest;
                                        return (
                                            <div className="p-4 rounded-xl border" style={{ borderColor: '#00C853', background: 'rgba(0,200,83,0.05)' }}>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <TrendingDown size={16} style={{ color: '#00C853' }} />
                                                    <p className="font-bold text-sm" style={{ color: '#00C853' }}>Extra Payment Impact</p>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Interest Saved</p>
                                                        <p className="text-lg font-black" style={{ color: '#00C853' }}>{formatCurrency(interestSaved)}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Time Saved</p>
                                                        <p className="text-lg font-black text-navy-900 dark:text-white">
                                                            {Math.floor(monthsSaved / 12)}y {monthsSaved % 12}m
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Original Payoff</p>
                                                        <p className="text-sm font-bold">{formatMonthYear(baseLast?.date ?? summary.payoffDate)}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>New Payoff</p>
                                                        <p className="text-sm font-bold" style={{ color: '#00C853' }}>{formatMonthYear(extraLast?.date ?? summary.payoffDate)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>
                            )}

                            {tab === 'charts' && (
                                <div className="animate-fade-in space-y-8">
                                    <MortgageCharts pieData={pieData} amortization={amortization} />
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Empty state */
                        <div className="card p-12 text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--color-bg-secondary)' }}>
                                <span className="text-3xl">🏠</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Enter your loan details</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                Fill in the home price, interest rate, and down payment to see your complete mortgage breakdown.
                            </p>
                        </div>
                    )}

                    {/* Download (Bottom) */}
                    {summary && (
                        <DownloadButtons
                            summary={summary}
                            amortization={amortization}
                            formState={formState}
                            calculatorName="Mortgage"
                        />
                    )}

                    <DisclaimerBanner calculatorName="the Mortgage Calculator" />
                </div>
            </div>
        </div>
    );
}
