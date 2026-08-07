import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, CheckCircle2, Database, Lock, Shield } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'About USFinNexus | Financial Calculator Methodology',
    description:
        'Learn how USFinNexus builds free financial calculators, documents assumptions, checks time-sensitive inputs against primary U.S. government sources, and handles calculator data.',
    alternates: { canonical: 'https://usfinnexus.com/about' },
    openGraph: {
        type: 'website',
        title: 'About USFinNexus | Financial Calculator Methodology',
        description:
            'How USFinNexus builds financial calculators, documents assumptions and verifies time-sensitive data against primary sources.',
        url: 'https://usfinnexus.com/about',
        siteName: 'USFinNexus',
    },
    twitter: {
        card: 'summary',
        title: 'About USFinNexus',
        description: 'Our calculator methodology, source policy and privacy approach.',
    },
};

const SOURCES = [
    ['CFPB', 'Mortgage consumer-protection rules, Ability-to-Repay and Qualified Mortgage information', 'https://www.consumerfinance.gov/'],
    ['FHFA', 'Conforming loan limits and related housing-finance data', 'https://www.fhfa.gov/'],
    ['HUD / FHA', 'FHA program guidance and annual FHA loan limits', 'https://www.hud.gov/'],
    ['IRS', 'Federal tax law guidance, annual inflation adjustments and tax publications', 'https://www.irs.gov/'],
    ['SSA', 'Social Security contribution and benefit base data', 'https://www.ssa.gov/'],
    ['Freddie Mac PMMS', 'Weekly mortgage-rate survey data when a page explicitly references market averages', 'https://www.freddiemac.com/pmms'],
];

export default function AboutPage() {
    const aboutSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': 'https://usfinnexus.com/about',
        name: 'About USFinNexus',
        url: 'https://usfinnexus.com/about',
        description:
            'USFinNexus publishes free financial calculators and educational resources with documented assumptions and primary-source references.',
        isPartOf: { '@id': 'https://usfinnexus.com/#website' },
        about: { '@id': 'https://usfinnexus.com/#organization' },
        dateModified: '2026-08-07',
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />

            <div className="max-w-3xl mx-auto px-4 py-7 sm:py-9">
                <Breadcrumbs items={[{ name: 'About', item: '/about' }]} />
                <h1 className="text-3xl font-black mb-2" style={{ color: 'var(--color-text)' }}>About USFinNexus</h1>
                <p className="text-xs mb-7 font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                    Last reviewed: August 7, 2026
                </p>

                <div className="card p-6 mb-8" style={{ borderLeft: '4px solid #00C853' }}>
                    <p className="text-lg font-semibold leading-relaxed" style={{ color: 'var(--color-text)' }}>
                        USFinNexus is a free financial-calculator and education website for U.S. consumers. Our goal is to make mortgage, loan, debt and tax math easier to inspect by showing the assumptions behind each estimate and linking time-sensitive claims to authoritative sources.
                    </p>
                </div>

                <div className="space-y-9 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>What We Publish</h2>
                        <p>
                            The site includes interactive calculators and educational guides. Calculator outputs are estimates, not approvals, quotes, tax returns or personalized financial advice. When a result depends on assumptions such as interest rates, taxes, insurance, loan-program rules or annual tax parameters, the page should identify those assumptions or provide a source.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><BookOpen size={16} /> Primary Source Policy</span>
                        </h2>
                        <p className="mb-4">
                            For financial rules and annual limits, we prefer the agency or statute responsible for the rule rather than secondary summaries. Current core sources include:
                        </p>
                        <ul className="space-y-3">
                            {SOURCES.map(([name, purpose, url]) => (
                                <li key={name} className="flex items-start gap-2">
                                    <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: '#00C853' }} />
                                    <span>
                                        <strong style={{ color: 'var(--color-text)' }}>{name}:</strong> {purpose}.{' '}
                                        <a href={url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#0da6f2' }}>Official source</a>
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4">
                            For 2026 federal income-tax parameters, the site uses IRS tax-year 2026 guidance and Revenue Procedure 2025-32, not the pre-2025 assumption that individual TCJA rate schedules would automatically revert in 2026.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><Database size={16} /> Calculation & Update Standards</span>
                        </h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Formula-based calculators use documented equations and clearly labeled user inputs.</li>
                            <li>Annual statutory limits are updated when the responsible agency publishes the new value.</li>
                            <li>Volatile market rates are treated as examples unless a page explicitly states a source date for live or recently retrieved data.</li>
                            <li>Mortgage qualification outcomes are never guaranteed; lender, investor and loan-program underwriting can differ.</li>
                            <li>Material corrections should update the page&apos;s visible review date and structured-data modification date.</li>
                        </ul>
                        <p className="mt-4">
                            See the <Link href="/methodology" className="font-semibold hover:underline" style={{ color: '#0da6f2' }}>Calculation Methodology &amp; Data Sources</Link> page for the core formulas and limitations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><Lock size={16} /> Calculator Data & Privacy</span>
                        </h2>
                        <div className="card p-4" style={{ background: 'var(--color-bg-secondary)' }}>
                            <p>
                                Calculator inputs are designed to be processed in the browser and are not submitted to USFinNexus as loan applications. The website itself uses normal hosting/CDN requests and may use third-party advertising or analytics technologies as described in our Privacy Policy. We do not sell calculator-input data to mortgage lenders.
                            </p>
                        </div>
                        <p className="mt-3">
                            Read the full <Link href="/privacy" className="font-semibold hover:underline" style={{ color: '#0da6f2' }}>Privacy Policy</Link> for the current service-level disclosures.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><Shield size={16} /> Editorial Responsibility</span>
                        </h2>
                        <p>
                            USFinNexus is responsible for the content published on this site. We do not describe calculator outputs as CFPB-certified or government-approved. References to CFPB, IRS, FHFA, HUD, SSA or other agencies mean that a rule, limit or explanation is sourced from that organization; they do not imply endorsement of USFinNexus.
                        </p>
                    </section>
                </div>

                <div className="mt-9 p-4 rounded-lg text-xs leading-relaxed" style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                    <strong style={{ color: 'var(--color-text)' }}>Important:</strong> USFinNexus provides estimates and educational information only. It is not a lender, broker, tax preparer, law firm or investment adviser. Confirm material decisions with the appropriate licensed or qualified professional.
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link href="/calculators/mortgage" className="btn-green text-sm">Mortgage Calculator</Link>
                    <Link href="/methodology" className="btn-outline text-sm">View Methodology</Link>
                    <Link href="/contact" className="btn-outline text-sm">Contact</Link>
                </div>
            </div>
        </>
    );
}
