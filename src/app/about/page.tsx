import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, BookOpen, Database, Lock } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'About USFinNexus | CFPB-Compliant Free Mortgage Calculators',
    description: 'USFinNexus provides free, CFPB-compliant mortgage and finance calculators for Americans — no email required, no lender referrals, zero data collection. Learn about our methodology and commitment.',
    keywords: [
        'about USFinNexus', 'free mortgage calculator no signup', 'CFPB compliant calculator',
        'no lender referrals mortgage calculator', 'privacy first mortgage calculator',
        'USFinNexus mission', 'unbiased mortgage calculator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/about' },
    openGraph: {
        type: 'website',
        title: 'About USFinNexus | Free, Privacy-First Finance Calculators',
        description: 'Learn about USFinNexus — our CFPB-compliant calculation methods, privacy commitment, and why we built a truly free mortgage calculator without lender referrals.',
        url: 'https://usfinnexus.com/about',
    },
    twitter: {
        card: 'summary',
        title: 'About USFinNexus | CFPB-Compliant Free Mortgage Calculators',
        description: 'Free mortgage calculators — no signup, no lender referrals, zero data collection. CFPB-compliant.',
    },
};

export default function AboutPage() {
    return (
        <>
            {/* AboutPage + FinancialService JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': ['AboutPage', 'WebPage'],
                    '@id': 'https://usfinnexus.com/about',
                    name: 'About USFinNexus',
                    url: 'https://usfinnexus.com/about',
                    description: 'USFinNexus provides free, CFPB-compliant mortgage and finance calculators for Americans with no data collection and no lender referrals.',
                    isPartOf: { '@id': 'https://usfinnexus.com/#website' },
                    about: { '@id': 'https://usfinnexus.com/#organization' },
                    breadcrumb: {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usfinnexus.com' },
                            { '@type': 'ListItem', position: 2, name: 'About', item: 'https://usfinnexus.com/about' },
                        ],
                    },
                }) }}
            />

            <div className="max-w-3xl mx-auto px-4 py-7 sm:py-9">
                <Breadcrumbs items={[{ name: 'About', item: '/about' }]} />
                <h1 className="text-3xl font-black mb-6" style={{ color: 'var(--color-text)' }}>About USFinNexus</h1>

                <div className="card p-6 mb-6" style={{ borderLeft: '4px solid #00C853' }}>
                    <p className="text-lg font-semibold leading-relaxed" style={{ color: 'var(--color-text)' }}>
                        USFinNexus.com is a free, spam-free finance calculator platform built specifically for everyday Americans. Our mission: give you professional-grade mortgage tools without requiring your email, phone number, or subjecting you to lender spam calls.
                    </p>
                </div>

                <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>

                    <section>
                        <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Why We Built This</h2>
                        <p>Every major mortgage calculator site — Bankrate, Zillow, NerdWallet — forces you through a funnel that ends with a lender calling you. They earn commissions from lender referrals. We don&apos;t. Our only incentive is to give you the most accurate, unbiased financial calculations possible — with no strings attached.</p>
                        <p className="mt-3">We built USFinNexus in 2025 to solve a simple problem: Americans deserve professional mortgage math without surrendering their privacy or triggering a sales call.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><BookOpen size={16} /> Calculation Standards &amp; Data Sources</span>
                        </h2>
                        <p className="mb-3">All calculations follow published U.S. regulatory guidelines and authoritative government data sources:</p>
                        <ul className="list-none space-y-2">
                            {[
                                ['CFPB Mortgage Formulas', 'Payment math and DTI guidelines from the Consumer Financial Protection Bureau (consumerfinance.gov)'],
                                ['2026 FHFA Conforming Limits', '$832,750 baseline · $1,249,125 high-cost ceiling (fhfa.gov)'],
                                ['2026 FHA Loan Limits', '$541,287 floor · $1,249,125 ceiling (hud.gov)'],
                                ['VA Loan Baseline', 'Entitlement and limit data from VA.gov'],
                                ['PMI Cancellation Rules', 'Homeowners Protection Act — cancellation at 78% LTV (auto) / 80% LTV (request)'],
                                ['Property Tax Estimates', 'State average effective rates from the Tax Foundation'],
                                ['2026 Tax Brackets', 'IRS Rev. Proc. 2025-28 inflation adjustments'],
                                ['Amortization Math', 'Standard U.S. monthly compounding formula (monthly rate = annual rate ÷ 12)'],
                            ].map(([title, body]) => (
                                <li key={String(title)} className="flex items-start gap-2">
                                    <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: '#00C853' }} />
                                    <span><strong style={{ color: 'var(--color-text)' }}>{title}:</strong> {body}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3">
                            For full formula documentation, see our <Link href="/methodology" style={{ color: '#0da6f2', fontWeight: 600 }}>Methodology page</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><Lock size={16} /> Privacy &amp; Data Policy</span>
                        </h2>
                        <div className="card p-4" style={{ background: 'var(--color-bg-secondary)' }}>
                            <ul className="space-y-2">
                                {[
                                    'All calculations run 100% client-side in your browser — nothing you type is sent to our servers',
                                    'We do not collect, store, log, or sell any personally identifiable information',
                                    'No &ldquo;get pre-qualified&rdquo; popups — we earn nothing from lender referrals',
                                    'PDF and CSV reports are generated in your browser with zero server contact',
                                    'We use Google AdSense for non-targeted display ads (standard ad cookies only)',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <Shield size={13} className="mt-0.5 shrink-0" style={{ color: '#0da6f2' }} />
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><Database size={16} /> Editorial Standards</span>
                        </h2>
                        <p className="mb-2">All content on USFinNexus is reviewed for accuracy against the regulatory sources listed above. We update loan limits annually (or when FHFA/HUD issues mid-cycle changes) and review rate guidance monthly against current Freddie Mac PMMS data.</p>
                        <p>Content is written by our editorial team and reviewed for compliance with CFPB Plain Language guidelines. Calculator results are verified against CFPB&apos;s own loan estimate examples.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Our Commitment</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>All core calculators will always be 100% free</li>
                            <li>PDF and CSV downloads will always be free — no paywall, ever</li>
                            <li>No user data sold to lenders or third parties</li>
                            <li>No &quot;get pre-qualified&quot; popups on calculator pages</li>
                            <li>Annual updates to reflect current loan limits and tax guidelines</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-8 p-4 rounded-lg text-xs leading-relaxed" style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                    <strong style={{ color: 'var(--color-text)' }}>Important:</strong> Calculator results are estimates for educational purposes only and do not constitute financial, mortgage, tax, legal, or investment advice. Always consult a licensed professional before making financial decisions. See our full <Link href="/disclaimer" style={{ color: '#0da6f2' }}>Disclaimer</Link>.
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link href="/calculators/mortgage" className="btn-green text-sm">Start Mortgage Calculator</Link>
                    <Link href="/methodology" className="btn-outline text-sm">View Methodology</Link>
                    <Link href="/disclaimer" className="btn-outline text-sm">Full Disclaimer</Link>
                </div>
            </div>
        </>
    );
}
