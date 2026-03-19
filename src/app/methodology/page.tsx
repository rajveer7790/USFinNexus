import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Shield, Calculator, FileText } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Our Methodology & Data Sources | USFinNexus',
    description: 'How USFinNexus calculates mortgage payments, DTI ratios, and affordability metrics. All formulas sourced from CFPB, HUD, FHFA, and the Tax Foundation.',
    alternates: { canonical: 'https://usfinnexus.com/methodology' },
};

const SOURCES = [
    {
        org: 'Consumer Financial Protection Bureau (CFPB)',
        url: 'https://www.consumerfinance.gov/',
        description: 'Mortgage payment formulas, Qualified Mortgage DTI guidelines (28% front-end / 43% back-end), ability-to-repay standards, and PMI cancellation rules under the Homeowners Protection Act.',
        icon: '🏛️',
    },
    {
        org: 'Federal Housing Finance Agency (FHFA)',
        url: 'https://www.fhfa.gov/',
        description: '2026 conforming loan limits: $806,500 baseline / $1,209,750 high-cost areas. Used in our mortgage and affordability calculators to flag jumbo loan thresholds.',
        icon: '🏦',
    },
    {
        org: 'U.S. Department of Housing and Urban Development (HUD)',
        url: 'https://www.hud.gov/',
        description: '2026 FHA loan limits: $524,225 floor / $1,209,750 ceiling. FHA mortgage insurance premium (MIP) rates and USDA income guidelines used in our government loan calculator.',
        icon: '🏠',
    },
    {
        org: 'Tax Foundation',
        url: 'https://taxfoundation.org/',
        description: 'State-by-state effective property tax rates used in our mortgage, affordability, and Texas/California/Florida state calculators.',
        icon: '📊',
    },
    {
        org: 'Freddie Mac Primary Mortgage Market Survey',
        url: 'https://www.freddiemac.com/pmms',
        description: 'Weekly average 30-year and 15-year fixed mortgage rates used as default pre-filled values in our calculators to reflect current market conditions.',
        icon: '📈',
    },
    {
        org: 'National Association of Realtors (NAR) / Redfin',
        url: 'https://www.nar.realtor/',
        description: 'Median home price data by state used in state-specific calculator defaults and blog post examples.',
        icon: '🏡',
    },
];

const FORMULAS = [
    {
        title: 'Monthly Mortgage Payment (P&I)',
        formula: 'M = P × [r(1+r)ⁿ] / [(1+r)ⁿ - 1]',
        explanation: 'Where M = monthly payment, P = principal loan amount, r = monthly interest rate (annual rate ÷ 12), n = total number of payments (years × 12).',
    },
    {
        title: 'Debt-to-Income Ratio (DTI)',
        formula: 'DTI = (Total Monthly Debt Payments ÷ Gross Monthly Income) × 100',
        explanation: 'Front-end DTI includes only PITI (principal, interest, taxes, insurance). Back-end DTI includes all recurring monthly debt obligations per CFPB Qualified Mortgage guidelines.',
    },
    {
        title: 'Loan-to-Value Ratio (LTV)',
        formula: 'LTV = (Loan Amount ÷ Appraised Property Value) × 100',
        explanation: 'LTV determines PMI requirement (required if LTV > 80%), eligibility for cash-out refinancing (max 80% LTV for most conventional loans), and jumbo loan classification.',
    },
    {
        title: 'PMI Calculation',
        formula: 'Annual PMI = Loan Amount × PMI Rate',
        explanation: 'PMI rates range from 0.5%–1.5% of the loan amount annually, varying by credit score, LTV, and loan type. PMI is automatically canceled at 78% LTV per the Homeowners Protection Act of 1998.',
    },
    {
        title: 'Refinance Break-Even',
        formula: 'Break-Even Months = Total Closing Costs ÷ Monthly Payment Savings',
        explanation: 'If the break-even period is less than your planned remaining stay in the home, refinancing is financially beneficial. Closing costs typically range from 2%–5% of the new loan amount.',
    },
];

export default function MethodologyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            <Breadcrumbs items={[{ name: 'Methodology', item: '/methodology' }]} />

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#0da6f2]/10 border border-[#0da6f2]/20">
                        <Shield size={20} className="text-[#0da6f2]" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#0da6f2]">Transparency</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight" style={{ color: 'var(--color-text)' }}>
                    Our Methodology & Data Sources
                </h1>
                <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
                    Every number on USFinNexus comes from a verifiable, official government or industry source. Here is exactly how our calculators work and where our data comes from.
                </p>
                <p className="text-xs mt-3 font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                    Last Updated: March 12, 2026
                </p>
            </header>

            {/* Our Commitment */}
            <div className="card p-6 mb-12 border-l-4 border-[#0da6f2]">
                <div className="flex gap-4">
                    <FileText size={22} className="text-[#0da6f2] shrink-0 mt-0.5" />
                    <div>
                        <h2 className="font-bold mb-2" style={{ color: 'var(--color-text)' }}>Calculation Principles</h2>
                        <ul className="text-sm space-y-1 list-disc pl-4" style={{ color: 'var(--color-text-muted)' }}>
                            <li>All formulas use standard US monthly compounding (not annual compounding)</li>
                            <li>Loan limit thresholds are updated annually to reflect FHFA and HUD announcements</li>
                            <li>Default rate values reflect the current Freddie Mac PMMS weekly average</li>
                            <li>Property tax rates use the Tax Foundation effective rate, not statutory rates</li>
                            <li>DTI guidelines follow CFPB Qualified Mortgage standards (effective 2021+)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Primary Sources */}
            <section className="mb-12">
                <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-text)' }}>Primary Data Sources</h2>
                <div className="space-y-4">
                    {SOURCES.map((source) => (
                        <div key={source.org} className="card p-5">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl shrink-0">{source.icon}</span>
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h3 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{source.org}</h3>
                                        <a
                                            href={source.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs text-[#0da6f2] hover:underline font-bold uppercase tracking-wider"
                                        >
                                            <ExternalLink size={10} />
                                            official source
                                        </a>
                                    </div>
                                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{source.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Formulas */}
            <section className="mb-12">
                <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-text)' }}>Core Calculation Formulas</h2>
                <div className="space-y-5">
                    {FORMULAS.map((f) => (
                        <div key={f.title} className="card p-6">
                            <div className="flex items-start gap-3">
                                <Calculator size={18} className="text-[#0da6f2] shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-text)' }}>{f.title}</h3>
                                    <code className="block px-4 py-2 rounded-lg text-sm font-mono mb-3"
                                        style={{ background: 'rgba(13,166,242,0.08)', color: '#0da6f2' }}>
                                        {f.formula}
                                    </code>
                                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{f.explanation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Limitation Disclaimer */}
            <section className="mb-12">
                <div className="card p-6 border border-amber-500/30 bg-amber-500/5">
                    <h2 className="font-bold mb-3 text-amber-400">Important Limitations</h2>
                    <ul className="text-sm space-y-2 list-disc pl-4" style={{ color: 'var(--color-text-muted)' }}>
                        <li>Calculator results are estimates only and do not constitute financial or mortgage advice.</li>
                        <li>Actual loan terms, rates, and qualification depend on your individual creditworthiness and lender policies.</li>
                        <li>Property tax rates are effective averages and vary by specific county and municipality.</li>
                        <li>Homeowners insurance estimates are national averages; your actual premium depends on location, coverage, and insurer.</li>
                        <li>Always consult a licensed mortgage professional or financial advisor before making home purchase decisions.</li>
                    </ul>
                </div>
            </section>

            <div className="flex flex-wrap gap-3">
                <Link href="/calculators/mortgage" className="btn-primary text-sm">Try Mortgage Calculator</Link>
                <Link href="/about" className="btn-outline text-sm">About USFinNexus</Link>
                <Link href="/disclaimer" className="btn-outline text-sm">Full Disclaimer</Link>
            </div>
        </div>
    );
}
