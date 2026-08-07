import type { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, ExternalLink, FileText, Shield } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Calculation Methodology & Data Sources | USFinNexus',
    description:
        'See the formulas, assumptions and primary sources used by USFinNexus mortgage, affordability, DTI, refinance and tax calculators.',
    alternates: { canonical: 'https://usfinnexus.com/methodology' },
    openGraph: {
        type: 'article',
        url: 'https://usfinnexus.com/methodology',
        title: 'Calculation Methodology & Data Sources | USFinNexus',
        description: 'Transparent formulas, assumptions, update rules and primary U.S. government sources for USFinNexus calculators.',
        siteName: 'USFinNexus',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Calculation Methodology & Data Sources | USFinNexus',
        description: 'How USFinNexus calculators work and where time-sensitive financial inputs come from.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const SOURCES = [
    {
        org: 'Consumer Financial Protection Bureau (CFPB)',
        url: 'https://www.consumerfinance.gov/rules-policy/final-rules/qualified-mortgage-definition-under-truth-lending-act-regulation-z-general-qm-loan-definition/',
        description: 'Ability-to-Repay and Qualified Mortgage rules. The current General QM definition does not use the former universal 43% DTI cap; the CFPB replaced that element with price-based thresholds.',
        icon: '🏛️',
    },
    {
        org: 'Federal Housing Finance Agency (FHFA)',
        url: 'https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026',
        description: '2026 one-unit conforming loan limit: $832,750 baseline, with a $1,249,125 ceiling in high-cost areas.',
        icon: '🏦',
    },
    {
        org: 'U.S. Department of Housing and Urban Development (HUD)',
        url: 'https://www.hud.gov/hud-partners/single-family-mortgage-limits',
        description: 'FHA mortgage-limit information. For 2026, the one-unit low-cost floor is $541,287 and the high-cost ceiling is $1,249,125.',
        icon: '🏠',
    },
    {
        org: 'Internal Revenue Service (IRS)',
        url: 'https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill',
        description: 'Tax-year 2026 federal income-tax brackets, standard deductions and related annual inflation adjustments under Revenue Procedure 2025-32.',
        icon: '🧾',
    },
    {
        org: 'Social Security Administration (SSA)',
        url: 'https://www.ssa.gov/OACT/COLA/cbbdet.html',
        description: '2026 Social Security contribution and benefit base of $184,500.',
        icon: '📋',
    },
    {
        org: 'Freddie Mac Primary Mortgage Market Survey (PMMS)',
        url: 'https://www.freddiemac.com/pmms',
        description: 'Weekly national mortgage-rate survey. A page should identify the observation date when it displays a PMMS market average rather than presenting an old rate as current.',
        icon: '📈',
    },
];

const FORMULAS = [
    {
        title: 'Monthly Mortgage Principal & Interest',
        formula: 'M = P × [r(1+r)ⁿ] / [(1+r)ⁿ − 1]',
        explanation: 'M is the monthly principal-and-interest payment, P is principal, r is the monthly interest rate and n is the number of monthly payments. Taxes, insurance, PMI/MIP and HOA dues are added separately when included in a calculator.',
    },
    {
        title: 'Debt-to-Income Ratio (DTI)',
        formula: 'DTI = (Monthly Debt Payments ÷ Gross Monthly Income) × 100',
        explanation: 'DTI is a ratio, not an approval decision. Lenders and loan programs can use different underwriting rules. Historical 28/36 and 43% figures can be useful planning references, but USFinNexus does not label 43% as the current universal General QM maximum.',
    },
    {
        title: 'Loan-to-Value Ratio (LTV)',
        formula: 'LTV = (Loan Amount ÷ Property Value) × 100',
        explanation: 'LTV is used in mortgage pricing, mortgage-insurance and underwriting decisions. Program requirements and cancellation rules depend on loan type and other conditions.',
    },
    {
        title: 'Amortization Interest',
        formula: 'Monthly Interest = Beginning Balance × (Annual Rate ÷ 12)',
        explanation: 'For a standard fixed-rate amortizing loan, the remainder of the scheduled principal-and-interest payment reduces principal. The process repeats each month until payoff.',
    },
    {
        title: 'Refinance Simple Break-Even',
        formula: 'Break-Even Months = Refinance Costs ÷ Monthly Payment Savings',
        explanation: 'This simple break-even measure is only one comparison. A complete refinance decision should also consider term reset, total interest, financed costs, cash paid at closing, taxes and how long the borrower expects to keep the loan.',
    },
];

export default function MethodologyPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        '@id': 'https://usfinnexus.com/methodology',
        headline: 'USFinNexus Calculation Methodology & Data Sources',
        description: 'Formula documentation, assumptions and primary sources used in USFinNexus financial calculators.',
        url: 'https://usfinnexus.com/methodology',
        datePublished: '2025-12-01',
        dateModified: '2026-08-07',
        inLanguage: 'en-US',
        isAccessibleForFree: true,
        author: { '@id': 'https://usfinnexus.com/#organization' },
        publisher: { '@id': 'https://usfinnexus.com/#organization' },
        isPartOf: { '@id': 'https://usfinnexus.com/#website' },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="max-w-4xl mx-auto px-4 py-7 sm:py-9">
                <Breadcrumbs items={[{ name: 'Methodology', item: '/methodology' }]} />

                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-[#0da6f2]/10 border border-[#0da6f2]/20">
                            <Shield size={20} className="text-[#0da6f2]" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest text-[#0da6f2]">Transparency</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight" style={{ color: 'var(--color-text)' }}>
                        Calculation Methodology &amp; Data Sources
                    </h1>
                    <p className="text-lg leading-relaxed max-w-3xl" style={{ color: 'var(--color-text-muted)' }}>
                        This page explains the math behind the core calculators, the difference between a planning assumption and a regulatory rule, and how time-sensitive values are sourced.
                    </p>
                    <p className="text-xs mt-3 font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                        Last reviewed: August 7, 2026
                    </p>
                </header>

                <div className="card p-6 mb-12 border-l-4 border-[#0da6f2]">
                    <div className="flex gap-4">
                        <FileText size={22} className="text-[#0da6f2] shrink-0 mt-0.5" />
                        <div>
                            <h2 className="font-bold mb-2" style={{ color: 'var(--color-text)' }}>Methodology Principles</h2>
                            <ul className="text-sm space-y-2 list-disc pl-4" style={{ color: 'var(--color-text-muted)' }}>
                                <li>Separate mathematical formulas from underwriting or eligibility decisions.</li>
                                <li>Use primary government sources for annual statutory limits and federal tax parameters.</li>
                                <li>Show a source date for volatile market data rather than calling a stale number “current.”</li>
                                <li>Do not claim that USFinNexus calculators are government certified, approved or CFPB compliant.</li>
                                <li>Label results as estimates and describe important inputs that can materially change the output.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-text)' }}>Primary Data Sources</h2>
                    <div className="space-y-4">
                        {SOURCES.map((source) => (
                            <div key={source.org} className="card p-5">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl shrink-0" aria-hidden="true">{source.icon}</span>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <h3 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{source.org}</h3>
                                            <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#0da6f2] hover:underline font-bold uppercase tracking-wider">
                                                <ExternalLink size={10} /> Official source
                                            </a>
                                        </div>
                                        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{source.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-text)' }}>Core Calculation Formulas</h2>
                    <div className="space-y-5">
                        {FORMULAS.map((formula) => (
                            <div key={formula.title} className="card p-6">
                                <div className="flex items-start gap-3">
                                    <Calculator size={18} className="text-[#0da6f2] shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-text)' }}>{formula.title}</h3>
                                        <code className="block px-4 py-2 rounded-lg text-sm font-mono mb-3" style={{ background: 'rgba(13,166,242,0.08)', color: '#0da6f2' }}>
                                            {formula.formula}
                                        </code>
                                        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{formula.explanation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <div className="card p-6 border border-amber-500/30 bg-amber-500/5">
                        <h2 className="font-bold mb-3 text-amber-500">Important Limitations</h2>
                        <ul className="text-sm space-y-2 list-disc pl-4" style={{ color: 'var(--color-text-muted)' }}>
                            <li>Calculator results are estimates and do not constitute financial, mortgage, tax, legal or investment advice.</li>
                            <li>Mortgage approval depends on the lender, loan program, credit profile, documentation, property and other underwriting factors.</li>
                            <li>Property taxes, insurance and closing costs vary by property and location; averages should not be treated as quotes.</li>
                            <li>Federal tax estimates can differ from an actual return because of credits, special deductions, other income types, AMT, NIIT, self-employment rules and other provisions not modeled by a simplified calculator.</li>
                            <li>Use current lender documents, government guidance and qualified professional advice for material decisions.</li>
                        </ul>
                    </div>
                </section>

                <div className="flex flex-wrap gap-3">
                    <Link href="/calculators/mortgage" className="btn-primary text-sm">Mortgage Calculator</Link>
                    <Link href="/about" className="btn-outline text-sm">About USFinNexus</Link>
                    <Link href="/disclaimer" className="btn-outline text-sm">Full Disclaimer</Link>
                </div>
            </div>
        </>
    );
}
