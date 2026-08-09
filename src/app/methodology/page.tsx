import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Shield, Calculator, FileText } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Financial Calculator Methodology & Data Sources',
    description: 'See the formulas, assumptions, limitations and primary sources behind USFinNexus mortgage, DTI, affordability, refinance and tax calculators.',
    alternates: { canonical: '/methodology' },
    openGraph: {
        type: 'article',
        url: 'https://usfinnexus.com/methodology',
        title: 'Financial Calculator Methodology & Data Sources',
        description: 'Formulas, assumptions, limitations and primary sources used by USFinNexus financial calculators.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Financial Calculator Methodology',
        description: 'How USFinNexus calculates mortgage, DTI, affordability and related estimates.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const SOURCES = [
    {
        org: 'Consumer Financial Protection Bureau (CFPB)',
        url: 'https://www.consumerfinance.gov/',
        description: 'Consumer mortgage guidance, debt-to-income explanations, ability-to-repay and Qualified Mortgage rules, Loan Estimate education, and conventional PMI cancellation guidance.',
        icon: '🏛️',
    },
    {
        org: 'Federal Housing Finance Agency (FHFA)',
        url: 'https://www.fhfa.gov/data/conforming-loan-limit',
        description: 'Conforming loan limits. For 2026, the one-unit baseline is $832,750 and the one-unit high-cost ceiling can reach $1,249,125 depending on location.',
        icon: '🏦',
    },
    {
        org: 'U.S. Department of Housing and Urban Development (HUD)',
        url: 'https://www.hud.gov/hud-partners/single-family-mortgage-limits',
        description: 'FHA mortgage limits and FHA program information. For 2026, the one-unit national floor is $541,287 and the standard high-cost ceiling is $1,249,125, subject to location-specific limits.',
        icon: '🏠',
    },
    {
        org: 'Internal Revenue Service (IRS)',
        url: 'https://www.irs.gov/',
        description: 'Federal tax brackets, standard deductions and other tax-year-specific figures. The 2026 federal income-tax calculator uses IRS Revenue Procedure 2025-32 and related IRS 2026 guidance.',
        icon: '🧾',
    },
    {
        org: 'Social Security Administration (SSA)',
        url: 'https://www.ssa.gov/',
        description: 'Social Security contribution and benefit base. The 2026 employee FICA estimate uses the official $184,500 Social Security taxable wage base.',
        icon: '📘',
    },
    {
        org: 'Freddie Mac Primary Mortgage Market Survey (PMMS)',
        url: 'https://www.freddiemac.com/pmms',
        description: 'Weekly market context for average mortgage rates. A historical or example rate shown on USFinNexus should not be treated as a live lender quote unless it is explicitly labeled with its source date.',
        icon: '📈',
    },
];

const FORMULAS = [
    {
        title: 'Fixed-Rate Monthly Principal & Interest',
        formula: 'M = P × [r(1+r)ⁿ] / [(1+r)ⁿ - 1]',
        explanation: 'M is the monthly principal-and-interest payment, P is principal, r is the monthly interest rate and n is the number of monthly payments. Taxes, insurance, PMI/MIP, HOA dues and other costs are added separately when applicable.',
    },
    {
        title: 'Debt-to-Income Ratio (DTI)',
        formula: 'DTI = (Recurring Monthly Debt ÷ Gross Monthly Income) × 100',
        explanation: 'DTI is a ratio used in lending analysis. Which obligations and income sources count depends on the loan program and underwriting rules. The current CFPB General Qualified Mortgage definition does not impose a universal 43% DTI cap.',
    },
    {
        title: 'Loan-to-Value Ratio (LTV)',
        formula: 'LTV = (Loan Amount ÷ Property Value Used by Lender) × 100',
        explanation: 'LTV compares the loan amount with the property value used for underwriting. Program definitions and treatment of purchase price versus appraised value can vary, so calculator LTV is a planning estimate.',
    },
    {
        title: 'Illustrative PMI Estimate',
        formula: 'Monthly PMI Estimate = Loan Amount × Assumed Annual PMI Rate ÷ 12',
        explanation: 'Actual conventional PMI pricing depends on multiple borrower, loan and insurer factors. A calculator assumption is not an insurer quote. Conventional PMI cancellation rights under the Homeowners Protection Act also have eligibility and timing conditions.',
    },
    {
        title: 'Simple Refinance Break-Even',
        formula: 'Break-Even Months = Upfront Refinance Costs ÷ Monthly Payment Savings',
        explanation: 'This simple payback calculation does not by itself measure total economic benefit. Loan term changes, interest already paid, cash-out, taxes, opportunity cost and how long you keep the new loan can materially affect a refinance decision.',
    },
];

export default function MethodologyPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        '@id': 'https://usfinnexus.com/methodology#article',
        headline: 'USFinNexus Financial Calculator Methodology & Data Sources',
        description: 'Formulas, assumptions, limitations and primary sources used by USFinNexus financial calculators.',
        url: 'https://usfinnexus.com/methodology',
        datePublished: '2025-12-01',
        dateModified: '2026-08-07',
        inLanguage: 'en-US',
        isAccessibleForFree: true,
        author: { '@type': 'Organization', name: 'USFinNexus', url: 'https://usfinnexus.com/' },
        publisher: { '@id': 'https://usfinnexus.com/#organization' },
        citation: SOURCES.map((source) => ({ '@type': 'WebSite', name: source.org, url: source.url })),
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usfinnexus.com/' },
                { '@type': 'ListItem', position: 2, name: 'Methodology', item: 'https://usfinnexus.com/methodology' },
            ],
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="max-w-4xl mx-auto px-4 py-7 sm:py-9">
                <Breadcrumbs items={[{ name: 'Methodology', item: '/methodology' }]} />

                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-[#0da6f2]/10 border border-[#0da6f2]/20"><Shield size={20} className="text-[#0da6f2]" /></div>
                        <span className="text-xs font-black uppercase tracking-widest text-[#0da6f2]">Transparency</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight" style={{ color: 'var(--color-text)' }}>Financial Calculator Methodology &amp; Data Sources</h1>
                    <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
                        We document the formulas, assumptions and year-specific data behind our calculators so you can understand what each result does — and does not — mean.
                    </p>
                    <p className="text-xs mt-3 font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>Last reviewed: August 7, 2026</p>
                </header>

                <div className="card p-6 mb-12 border-l-4 border-[#0da6f2]">
                    <div className="flex gap-4">
                        <FileText size={22} className="text-[#0da6f2] shrink-0 mt-0.5" />
                        <div>
                            <h2 className="font-bold mb-2" style={{ color: 'var(--color-text)' }}>Calculation Principles</h2>
                            <ul className="text-sm space-y-1 list-disc pl-4" style={{ color: 'var(--color-text-muted)' }}>
                                <li>Use standard financial mathematics for amortization and clearly separate P&amp;I from estimated housing costs.</li>
                                <li>Use first-party government sources for regulatory limits and federal tax values whenever practical.</li>
                                <li>Label year-specific figures with the applicable year and avoid presenting stale market rates as current.</li>
                                <li>Treat DTI percentages as planning references unless a specific program rule is being described and sourced.</li>
                                <li>State material omissions and assumptions instead of presenting calculator estimates as guaranteed outcomes.</li>
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
                                    <span className="text-2xl shrink-0">{source.icon}</span>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <h3 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{source.org}</h3>
                                            <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#0da6f2] hover:underline font-bold uppercase tracking-wider"><ExternalLink size={10} /> official source</a>
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
                                        <code className="block px-4 py-2 rounded-lg text-sm font-mono mb-3" style={{ background: 'rgba(13,166,242,0.08)', color: '#0da6f2' }}>{formula.formula}</code>
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
                            <li>Calculator results are estimates for education and planning, not loan approvals, tax returns or professional advice.</li>
                            <li>Actual loan terms, rates, fees and qualification depend on program rules, property, borrower information and lender underwriting.</li>
                            <li>Taxes, insurance, PMI/MIP, HOA dues and closing costs can vary materially from assumptions or averages.</li>
                            <li>A market-average mortgage rate is not the rate an individual borrower will receive.</li>
                            <li>Tax calculators simplify complex rules and should be checked against current IRS guidance or a qualified tax professional for filing decisions.</li>
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
