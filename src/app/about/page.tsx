import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, BookOpen, Database, Lock } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'About USFinNexus | Financial Calculator Methodology',
    description: 'Learn how USFinNexus builds free U.S. mortgage and finance calculators, documents assumptions, uses government sources, and handles calculator inputs and advertising.',
    alternates: { canonical: '/about' },
    openGraph: {
        type: 'website',
        title: 'About USFinNexus | Financial Calculator Methodology',
        description: 'Learn about USFinNexus calculator methodology, primary data sources, privacy approach and editorial standards.',
        url: 'https://usfinnexus.com/about',
    },
    twitter: {
        card: 'summary',
        title: 'About USFinNexus | Financial Calculator Methodology',
        description: 'How USFinNexus builds and documents its U.S. mortgage and finance calculators.',
    },
};

export default function AboutPage() {
    const aboutSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': 'https://usfinnexus.com/about#page',
        name: 'About USFinNexus',
        url: 'https://usfinnexus.com/about',
        description: 'How USFinNexus builds and documents free mortgage and personal finance calculators for U.S. consumers.',
        isPartOf: { '@id': 'https://usfinnexus.com/#website' },
        about: { '@id': 'https://usfinnexus.com/#organization' },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usfinnexus.com/' },
                { '@type': 'ListItem', position: 2, name: 'About', item: 'https://usfinnexus.com/about' },
            ],
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
            <div className="max-w-3xl mx-auto px-4 py-7 sm:py-9">
                <Breadcrumbs items={[{ name: 'About', item: '/about' }]} />
                <h1 className="text-3xl font-black mb-6" style={{ color: 'var(--color-text)' }}>About USFinNexus</h1>

                <div className="card p-6 mb-6" style={{ borderLeft: '4px solid #00C853' }}>
                    <p className="text-lg font-semibold leading-relaxed" style={{ color: 'var(--color-text)' }}>
                        USFinNexus is a free financial-calculator and educational website for U.S. consumers. Our goal is to make mortgage and personal-finance calculations easy to inspect, with clear assumptions, source notes and no account required to use the core tools.
                    </p>
                </div>

                <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    <section>
                        <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>What We Build</h2>
                        <p>USFinNexus focuses on calculators for mortgage payments, home affordability, refinancing, amortization, debt planning, taxes and related personal-finance questions. Calculator outputs are estimates, not lender offers, underwriting decisions, tax returns or professional advice.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><BookOpen size={16} /> Calculation Standards &amp; Primary Sources</span>
                        </h2>
                        <p className="mb-3">Where a calculator depends on regulated limits or year-specific figures, we prefer first-party U.S. government sources and identify the applicable year. Examples currently used across the site include:</p>
                        <ul className="list-none space-y-2">
                            {[
                                ['Mortgage consumer guidance', 'Consumer Financial Protection Bureau (consumerfinance.gov) for mortgage and ability-to-repay guidance'],
                                ['2026 conforming loan limit', 'FHFA baseline one-unit limit of $832,750; high-cost limits vary by area and can reach $1,249,125'],
                                ['2026 FHA limits', 'HUD one-unit national floor of $541,287 and standard high-cost ceiling of $1,249,125, with location-specific limits'],
                                ['Federal income tax', 'IRS Revenue Procedure 2025-32 and related IRS 2026 tax guidance'],
                                ['2026 Social Security wage base', 'Social Security Administration taxable maximum of $184,500'],
                                ['Amortization', 'Standard fixed-payment amortization mathematics with assumptions shown in the relevant calculator'],
                            ].map(([title, body]) => (
                                <li key={String(title)} className="flex items-start gap-2">
                                    <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: '#00C853' }} />
                                    <span><strong style={{ color: 'var(--color-text)' }}>{title}:</strong> {body}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3">See the <Link href="/methodology" style={{ color: '#0da6f2', fontWeight: 600 }}>Methodology page</Link> for formula and assumption notes.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><Lock size={16} /> Privacy &amp; Calculator Inputs</span>
                        </h2>
                        <div className="card p-4" style={{ background: 'var(--color-bg-secondary)' }}>
                            <ul className="space-y-2">
                                {[
                                    'Core calculator inputs are designed to be processed in the browser rather than submitted as a loan application',
                                    'You do not need to create an account to use the core calculators',
                                    'USFinNexus does not operate a lender-referral form on the core calculator pages',
                                    'The website may use advertising, cookies and analytics technologies; see the Privacy Policy for the current disclosure',
                                    'Do not enter sensitive identifiers such as Social Security numbers, bank credentials or account numbers into calculator fields',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <Shield size={13} className="mt-0.5 shrink-0" style={{ color: '#0da6f2' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><Database size={16} /> Editorial &amp; Update Standards</span>
                        </h2>
                        <p className="mb-2">For year-dependent financial values, we aim to cite or identify authoritative sources and update the affected calculator when official figures change. We do not describe a calculator as government-approved or regulator-certified unless an official source expressly provides that status.</p>
                        <p>USFinNexus content is educational. A calculator can simplify a rule and may omit exceptions that matter to an individual borrower or taxpayer. Important decisions should be checked against the linked government source and, when appropriate, a qualified professional.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Our Commitments</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Keep the core calculators accessible without requiring an account</li>
                            <li>State important assumptions and limitations rather than presenting estimates as guaranteed outcomes</li>
                            <li>Prefer first-party sources for tax, mortgage-program and regulatory figures</li>
                            <li>Correct material factual errors when they are identified</li>
                            <li>Keep privacy and advertising disclosures consistent with the technologies actually used by the site</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-8 p-4 rounded-lg text-xs leading-relaxed" style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                    <strong style={{ color: 'var(--color-text)' }}>Important:</strong> Calculator results are estimates for educational purposes only and do not constitute financial, mortgage, tax, legal, lending, or investment advice. See our <Link href="/disclaimer" style={{ color: '#0da6f2' }}>Disclaimer</Link>.
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link href="/calculators/mortgage" className="btn-green text-sm">Mortgage Calculator</Link>
                    <Link href="/methodology" className="btn-outline text-sm">View Methodology</Link>
                    <Link href="/privacy" className="btn-outline text-sm">Privacy Policy</Link>
                </div>
            </div>
        </>
    );
}
