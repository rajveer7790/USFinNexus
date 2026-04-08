'use client';

import { useState, useMemo } from 'react';
import { calcGovLoan, formatCurrency, formatPercent, type GovLoanType } from '@/lib/formulas';
import { exportGenericCSV } from '@/lib/csvExporter';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { Shield, Info, Table2, Zap } from 'lucide-react';

const TABS: { key: GovLoanType; label: string; icon: string; color: string }[] = [
    { key: 'fha', label: 'FHA Loan', icon: '🏠', color: '#059669' },
    { key: 'va', label: 'VA Loan', icon: '🎖️', color: '#1d4ed8' },
    { key: 'usda', label: 'USDA Loan', icon: '🌾', color: '#d97706' },
];

const LOAN_TERMS = [15, 20, 30];

export default function GovLoanClient({ initialTab = 'fha' }: { initialTab?: GovLoanType }) {
    const [loanType, setLoanType] = useState<GovLoanType>(initialTab);
    const [homePrice, setHomePrice] = useState(350000);
    const [downPct, setDownPct] = useState(initialTab === 'fha' ? 3.5 : 0);
    const [rate, setRate] = useState(6.25);
    const [term, setTerm] = useState(30);
    const [propTax, setPropTax] = useState(4200);
    const [insurance, setInsurance] = useState(1400);
    const [vaFirstTime, setVaFirstTime] = useState(true);
    const [vaDisability, setVaDisability] = useState(false);

    // Auto-adjust min down when switching loan types
    const minDown = loanType === 'fha' ? 3.5 : 0;
    const effectiveDown = Math.max(downPct, minDown);

    const result = useMemo(() => {
        if (homePrice <= 0 || rate <= 0) return null;
        return calcGovLoan({
            loanType, homePrice, downPaymentPercent: effectiveDown,
            annualInterestRate: rate, loanTermYears: term,
            annualPropertyTax: propTax, annualInsurance: insurance,
            vaFirstTimeUse: vaFirstTime, vaDisabilityExempt: vaDisability,
        });
    }, [loanType, homePrice, effectiveDown, rate, term, propTax, insurance, vaFirstTime, vaDisability]);

    const activeTab = TABS.find(t => t.key === loanType)!;

    return (
        <div className="relative min-h-screen bg-white text-navy-900 pb-20">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0da6f2]/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 relative z-10">
                <div className="mb-6 sm:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-[#0da6f2]/10 border border-[#0da6f2]/20">
                            <Shield className="text-[#0da6f2]" size={24} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0da6f2]">Government Backed</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-none bg-gradient-to-r from-navy-900 via-[#0da6f2] to-navy-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
                        FHA / VA / USDA Loan Calculator
                    </h1>
                    <p className="text-gray-500 max-w-2xl font-medium text-lg">
                        Precision calculations for MIP, VA funding fees, and USDA guarantee fees updated for 2026.
                    </p>
                </div>

                {/* Loan Type Tabs - Premium Glass style */}
                <div className="glass-tab-list p-1.5 mb-10 flex flex-wrap sm:flex-nowrap gap-1">
                    {TABS.map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => { 
                                setLoanType(tab.key); 
                                if (tab.key !== 'fha' && downPct < 0) setDownPct(0); 
                            }}
                            className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-black transition-all duration-300 ${loanType === tab.key ? 'bg-[#0da6f2] text-white shadow-[0_0_20px_rgba(13,166,242,0.4)]' : 'text-gray-500 hover:bg-white/5'}`}
                        >
                            <span className="text-xl">{tab.icon}</span>
                            <span className="uppercase tracking-widest">{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    {/* LEFT: Inputs */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass-card p-4 sm:p-8">
                            <div className="flex justify-between items-center mb-5 sm:mb-8">
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">
                                    {activeTab.label} Parameters
                                </h2>
                                <Info size={16} className="text-gray-400" />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <label className="input-label">Home Price</label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">$</span>
                                        <input 
                                            type="number" 
                                            className="glass-input pl-8" 
                                            value={homePrice} 
                                            onChange={e => setHomePrice(+e.target.value)} 
                                            min={50000} 
                                            step={5000} 
                                        />
                                    </div>
                                    <div className="mt-6 px-1">
                                        <input 
                                            type="range" 
                                            min={100000} 
                                            max={1500000} 
                                            step={5000} 
                                            value={homePrice} 
                                            onChange={e => setHomePrice(+e.target.value)} 
                                            className="glass-slider" 
                                            style={{ '--value': `${((homePrice - 100000) / 1400000) * 100}%` } as React.CSSProperties} 
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="input-label">Down Payment (%)</label>
                                    <div className="relative group">
                                        <input 
                                            type="number" 
                                            className="glass-input pr-8" 
                                            value={effectiveDown} 
                                            onChange={e => setDownPct(+e.target.value)} 
                                            min={minDown} 
                                            max={99} 
                                            step={0.5} 
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-[#0da6f2] transition-colors">%</span>
                                    </div>
                                    <p className="text-xs mt-3 font-bold uppercase tracking-widest text-[#0da6f2]">
                                        Amount: {formatCurrency(homePrice * effectiveDown / 100)} • Required: {loanType === 'fha' ? '3.5%' : '0%'}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="input-label">Rate (%)</label>
                                        <input 
                                            type="number" 
                                            className="glass-input" 
                                            value={rate} 
                                            onChange={e => setRate(+e.target.value)} 
                                            min={1} 
                                            max={15} 
                                            step={0.125} 
                                        />
                                    </div>
                                    <div>
                                        <label className="input-label">Term (Years)</label>
                                        <select 
                                            className="glass-input appearance-none" 
                                            value={term} 
                                            onChange={e => setTerm(+e.target.value)}
                                        >
                                            {LOAN_TERMS.map(t => (
                                                <option key={t} value={t}>{t} Years</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="input-label">Taxes/yr</label>
                                        <input 
                                            type="number" 
                                            className="glass-input" 
                                            value={propTax} 
                                            onChange={e => setPropTax(+e.target.value)} 
                                            min={0} 
                                            step={100} 
                                        />
                                    </div>
                                    <div>
                                        <label className="input-label">Insurance/yr</label>
                                        <input 
                                            type="number" 
                                            className="glass-input" 
                                            value={insurance} 
                                            onChange={e => setInsurance(+e.target.value)} 
                                            min={0} 
                                            step={100} 
                                        />
                                    </div>
                                </div>

                                {/* VA-specific options */}
                                {loanType === 'va' && (
                                    <div className="pt-4 border-t border-white/10 space-y-4">
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0da6f2]">VA Customization</h3>
                                        <div className="space-y-3">
                                            <label className="flex items-center gap-4 cursor-pointer group">
                                                <div className="relative flex items-center">
                                                    <input 
                                                        type="checkbox" 
                                                        checked={vaFirstTime} 
                                                        onChange={e => setVaFirstTime(e.target.checked)} 
                                                        className="w-5 h-5 rounded border-2 border-white/20 bg-transparent accent-[#0da6f2] transition-all cursor-pointer" 
                                                    />
                                                </div>
                                                <span className="text-sm font-semibold text-gray-600 group-hover:text-white transition-colors">First-time VA use</span>
                                            </label>
                                            <label className="flex items-center gap-4 cursor-pointer group">
                                                <input 
                                                    type="checkbox" 
                                                    checked={vaDisability} 
                                                    onChange={e => setVaDisability(e.target.checked)} 
                                                    className="w-5 h-5 rounded border-2 border-white/20 bg-transparent accent-[#0da6f2] transition-all cursor-pointer" 
                                                />
                                                <span className="text-sm font-semibold text-gray-600 group-hover:text-white transition-colors">Service Disability (No fee)</span>
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Results */}
                    <div className="lg:col-span-3 space-y-8 lg:self-start">
                        {result ? (
                            <div className="space-y-8 animate-slide-up">
                                {/* Total payment hero panel */}
                                <div className="glass-card p-5 sm:p-12 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs font-black uppercase tracking-widest text-[#0da6f2] mb-1">Status</span>
                                        <span className="text-lg font-black text-[#00C853] flex items-center gap-2">READY <Zap size={16} /></span>
                                    </div>
                                    
                                    <div className="text-center relative z-10">
                                        <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Projected Monthly Payment</p>
                                        <div className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-glow tabular-nums transition-all hover:scale-105 duration-500">
                                            {formatCurrency(result.totalMonthly)}
                                        </div>
                                        <div className="w-16 h-1 bg-gradient-to-r from-[#0da6f2] to-[#00C853] mx-auto mt-8 rounded-full" />
                                    </div>

                                    {/* Mini summary row */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-12 pt-6 sm:pt-12 border-t border-white/10">
                                        {[
                                            { label: 'Base Loan', value: formatCurrency(result.baseLoanAmount) },
                                            { label: 'Upfront Fee', value: formatPercent(result.upfrontFeePercent, 2) },
                                            { label: 'Annual Fee', value: formatPercent(result.annualFeePercent, 2) },
                                            { label: 'Total Loan', value: formatCurrency(result.loanAmount) },
                                        ].map(s => (
                                            <div key={s.label}>
                                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{s.label}</p>
                                                <p className="text-sm font-black text-gray-700">{s.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Detailed Breakdown Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="glass-card p-4 sm:p-8">
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-5 sm:mb-8 text-gray-400">Payment Composition</h3>
                                        <div className="space-y-4">
                                            {[
                                                { label: 'Principal & Interest', value: result.monthlyPrincipalInterest, color: activeTab.color },
                                                { label: loanType === 'fha' ? 'Monthly MIP' : loanType === 'usda' ? 'Gov Guarantee Fee' : 'VA Admin Fee', value: result.monthlyMIP, color: '#f59e0b' },
                                                { label: 'Property Tax', value: result.monthlyPropertyTax, color: '#00C853' },
                                                { label: 'Home Insurance', value: result.monthlyInsurance, color: '#0da6f2' },
                                            ].filter(r => r.value > 0).map(row => (
                                                <div key={row.label} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors group">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full group-hover:scale-150 transition-transform" style={{ background: row.color }} />
                                                        <span className="text-sm font-bold text-gray-500">{row.label}</span>
                                                    </div>
                                                    <span className="text-sm font-black tabular-nums">{formatCurrency(row.value)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="glass-card p-4 sm:p-8">
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-5 sm:mb-8 text-gray-400">Loan Lifecycle</h3>
                                        <div className="space-y-4">
                                            {[
                                                { label: 'Upfront Guarantee Fee', value: formatCurrency(result.upfrontFee) },
                                                { label: 'Total Interest Paid', value: formatCurrency(result.totalInterest) },
                                                { label: 'Total Cost of Loan', value: formatCurrency(result.totalCost) },
                                            ].map(row => (
                                                <div key={row.label} className="flex flex-col py-4 border-b border-white/5 last:border-0">
                                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{row.label}</span>
                                                    <span className="text-xl font-black tabular-nums text-navy-900">{row.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Eligibility badges - Premium Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { key: 'fha', icon: '🏠', label: 'FHA', detail: '3.5% Down • High Leverage' },
                                        { key: 'va', icon: '🎖️', label: 'VA', detail: '0% Down • Veteran Benefit' },
                                        { key: 'usda', icon: '🌾', label: 'USDA', detail: '0% Down • Rural Housing' },
                                    ].map(item => (
                                        <div 
                                            key={item.key} 
                                            className={`glass-panel p-5 border-2 transition-all duration-500 ${loanType === item.key ? 'border-[#0da6f2] bg-[#0da6f2]/10 ring-4 ring-[#0da6f2]/10 scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-lg">{item.icon}</span>
                                                <span className="text-sm font-black uppercase tracking-widest">{item.label}</span>
                                            </div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">{item.detail}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Exports */}
                                <div className="glass-card p-6 flex flex-wrap gap-4 items-center justify-between border-[#0da6f2]/20">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-[#0da6f2]/10">
                                            <Table2 size={24} className="text-[#0da6f2]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black">Generate Report</p>
                                            <p className="text-xs uppercase font-bold text-gray-500">CSV / Excel Format</p>
                                        </div>
                                    </div>
                                    <button 
                                        className="btn-primary bg-[#0da6f2] hover:bg-[#0da6f2]/90 px-8 py-3 rounded-xl shadow-lg shadow-[#0da6f2]/20"
                                        onClick={() => {
                                            const headers = ['Metric', 'Value'];
                                            const data = result ? [
                                                ['Loan Type', loanType.toUpperCase()],
                                                ['Home Price', homePrice],
                                                ['Loan Amount', result.loanAmount],
                                                ['Monthly Payment', result.totalMonthly],
                                                ['Total Interest', result.totalInterest],
                                                ['Total Cost', result.totalCost]
                                            ] : [];
                                            exportGenericCSV(headers, data, `USFinNexus-${loanType.toUpperCase()}-Analysis.csv`);
                                        }}
                                    >
                                        Download CSV
                                    </button>
                                </div>

                                <div className="glass-panel p-6 border-blue-500/20 bg-blue-500/5">
                                    <div className="flex gap-4">
                                        <Info className="flex-shrink-0 text-[#0da6f2]" size={20} />
                                        <p className="text-sm font-medium leading-relaxed text-gray-600">
                                            {loanType === 'fha' ? 'FHA MIP is mandatory for the life of the loan in most cases. The upfront MIP (1.75%) is usually financed into the loan amount.' : loanType === 'va' ? 'VA loans do not require PMI. The Funding Fee is a one-time cost that can be waived for disabled veterans or financed into the loan.' : 'USDA loans require both upfront (1.0%) and annual (0.35%) guarantee fees. These apply for the life of the loan regardless of equity.'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="glass-card p-8 sm:p-24 text-center">
                                <Shield size={48} className="mx-auto mb-6 text-gray-400 opacity-20" />
                                <h3 className="text-2xl font-black mb-4">Complete Your Parameters</h3>
                                <p className="text-gray-500 max-w-md mx-auto font-medium">
                                    Enter a home price and interest rate above to see your specialized government loan breakdown.
                                </p>
                            </div>
                        )}
                        <DisclaimerBanner calculatorName="the Government Loan Calculator" />
                    </div>
                </div>
            </div>
        </div>
    );
}
