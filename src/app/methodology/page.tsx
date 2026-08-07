import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Shield, Calculator, FileText } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Calculation Methodology & Data Sources | USFinNexus',
    description: 'See how USFinNexus calculates mortgage payments, DTI, affordability and refinance estimates, including formulas, assumptions, limitations and primary data sources.',
    alternates: { canonical: 'https://usfinnexus.com/methodology' },
    openGraph: {
        type: 'article',
        url: 'https://usfinnexus.com/methodology',
        title: 'Calculation Methodology & Data Sources | USFinNexus',
        description: 'Mortgage formulas, annual loan limits, tax inputs, planning assumptions and calculator limitations explained.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Calculation Methodology & Data Sources | USFinNexus',
        description: 'How USFinNexus calculates mortgage and personal-finance estimates and verifies time-sensitive inputs.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const SOURCES = [
    {
        org: 'Consumer Financial Protection Bureau (CFPB)',
        url: 'https://www.consumerfinance.gov/',
        description: 'Ability-to-repay and Qualified Mortgage regulatory references. The current General QM definition does not use a universal 43% DTI cap; 28%, 36%, and 43% values shown by planning tools are scenarios or rules of thumb unless a page states a program-specific requirement.',
        icon: '🏛️',
    },
    {
        org: 'Federal Housing Finance Agency (FHFA)',
        url: 'https://www.fhfa.gov/data/conforming-loan-limit',
        description: '2026 one-unit conforming loan limits: $832,750 national baseline and $1,249,125 high-cost-area ceiling, with county-level variation and special statutory areas.',
        icon: '🏦',
    },
    {
        org: 'U.S. Department of Housing and Urban Development (HUD)',
        url: 'https://www.hud.gov/hud-partners/single-family-lender',
        description: '2026 FHA one-unit nationwide floor of $541,287 and high-cost-area ceiling of $1,249,125, with local limits and special-area rules.',
        icon: '🏠',
    },
    {
        org: 'Internal Revenue Service (IRS)',
        url: 'https://www.irs.gov/',
        description: 'Tax-year 2026 federal ordinary-income brackets, standard deductions and federal tax guidance used by the income-tax calculator.',
        icon: '🧾',
    },
    {
        org: 'Social Security Administration (SSA)',
        url: 'https://www.ssa.gov/OACT/cola/cbb.html',
        description: '2026 Social Security contribution and benefit base of $184,500 used for employee payroll-tax estimates.',
        icon: '📊',
    },
    {
        org: 'Freddie Mac Primary Mortgage Market Survey',
        url: 'https://www.freddiemac.com/pmms',
        description: 'A public reference for national average mortgage-rate trends. A calculator default rate is only a starting assumption and is not a live lender quote unless explicitly identified with a current source date.',
        icon: '📈',
    },
];

const FORMULAS = [
    {
        title: 'Monthly Mortgage Payment (Principal & Interest)',
        formula: 'M = P × [r(1+r)ⁿ] / [(1+r)ⁿ - 1]',
        explanation: 'M is the monthly principal-and-interest payment, P is principal, r is the monthly interest rate, and n is the number of monthly payments. Property taxes, insurance, PMI and HOA costs are estimated separately.',
    },
    {
        title: 'Debt-to-Income Ratio (DTI)',
        formula: 'DTI = (Recurring Monthly Debt ÷ Gross Monthly Income) × 100',
        explanation: 'DTI is a ratio, not an approval decision. Actual underwriting treatment and acceptable ratios vary by loan program, lender, automated underwriting and borrower profile.',
    },
    {
        title: 'Loan-to-Value Ratio (LTV)',
        formula: 'LTV = (Loan Amount ÷ Property Value Used by the Program) × 100',
        explanation: 'LTV is used in mortgage pricing, insurance and eligibility rules. The relevant property value and threshold depend on the loan program and transaction.',
    },
    {
        title: 'Simple PMI Estimate',
        formula: 'Estimated Annual PMI = Loan Amount × Assumed PMI Rate',
        explanation: 'Actual private mortgage-insurance pricing depends on insurer, credit profile, LTV, coverage, loan characteristics and other factors. Conventional PMI cancellation and automatic termination are subject to federal Homeowners Protection Act conditions; FHA mortgage insurance follows different rules.',
    },
    {
        title: 'Simple Refinance Break-Even',
        formula: 'Break-Even Months = Closing Costs ÷ Monthly Payment Savings',
        explanation: 'This simple metric does not capture every economic effect. A refinance decision should also consider the new term, lifetime interest, financed costs, points, taxes and how long the loan is expected to remain outstanding.',
    },
];

export default function MethodologyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'TechArticle',
                    '@id': 'https://usfinnexus.com/methodology',
                    headline: 'USFinNexus Calculation Methodology & Data Sources',
                    description: 'How USFinNexus calculates mortgage payments, DTI ratios, affordability and refinance estimates, including assumptions and limitations.',
                    url: 'https://usfinnexus.com/methodology',
                    datePublished: '2025-12-01',
                    dateModified: '2026-08-07',
                    inLanguage: 'en-US',
                    isAccessibleForFree: true,
                    author: { '@type': 'Organization', name: 'USFinNexus', url: 'https://usfinnexus.com/' },
                    publisher: { '@id': 'https://usfinnexus.com/#organization' },
                    about: [
                        { '@type': 'Thing', name: 'Mortgage calculation formulas' },
                        { '@type': 'Thing', name: 'Debt-to-income ratio' },
                        { '@type': 'Thing', name: 'FHFA conforming loan limits 2026' },
                        { '@type': 'Thing', name: 'FHA loan limits 2026' },
                        { '@type': 'Thing', name: 'Federal income tax estimates 2026' },
                    ],
                    breadcrumb: {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usfinnexus.com/' },
                            { '@type': 'ListItem', position: 2, name: 'Methodology', item: 'https://usfinnexus.com/methodology' },
                        ],
                    },
                }) }}
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
                        Calculation Methodology & Data Sources
                    </h1>
                    <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
                        USFinNexus separates mathematical formulas, planning assumptions and time-sensitive regulatory inputs. This page explains what each type of number means and where important annual limits are verified.
                    </p>
                    <p className="text-xs mt-3 font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                        Last reviewed: August 7, 2026
                    </p>
                </header>

                <div className="card p-6 mb-12 border-l-4 border-[#0da6f2]">
                    <div className="flex gap-4">
                        <FileText size={22} className="text-[#0da6f2] shrink-0 mt-0.5" />
                        <div>
                            <h2 className="font-bold mb-2" style={{ color: 'var(--color-text)' }}>Calculation Principles</h2>
                            <ul className="text-sm space-y-1 list-disc pl-4" style={{ color: 'var(--color-text-muted)' }}>
                                <li>Use standard financial formulas for amortization and ratio calculations.</li>
                                <li>Use primary government sources for annual federal loan limits and tax brackets where practicable.</li>
                                <li>Do not describe USFinNexus calculators as government-certified or regulator-approved.</li>
                                <li>Do not present 43% DTI as a universal current General QM cap.</li>
                                <li>Clearly label property-tax, insurance, PMI, market-rate and other variable inputs as estimates or user assumptions.</li>
                                <li>Update a page&apos;s review date only after meaningful content or source verification.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-text)' }}>Primary Data Sources</h2>
                    <div className="space-y-4">
                        {SOURCES.map(source => (
                            <div key={source.org} className="card p-5">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl shrink-0">{source.icon}</span>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <h3 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{source.org}</h3>
                                            <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#0da6f2] hover:underline font-bold uppercase tracking-wider">
                                                <ExternalLink size={10} /> Source
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
                        {FORMULAS.map(formula => (
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
                        <h2 className="font-bold mb-3 text-amber-400">Important Limitations</h2>
                        <ul className="text-sm space-y-2 list-disc pl-4" style={{ color: 'var(--color-text-muted)' }}>
                            <li>Calculator outputs are estimates, not loan offers, approvals, tax returns, legal conclusions or personalized advice.</li>
                            <li>Actual loan pricing and eligibility depend on lender and program underwriting.</li>
                            <li>Property taxes, insurance, HOA dues, PMI and closing costs can vary substantially from planning assumptions.</li>
                            <li>Time-sensitive limits can change through new law or agency guidance; verify important decisions against the current primary source.</li>
                            <li>Tax calculators omit many credits, deductions, income types and special rules unless expressly stated.</li>
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
