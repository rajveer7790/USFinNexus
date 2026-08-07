import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, BookOpen, Database, Lock } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'About USFinNexus | Mortgage & Finance Calculators',
    description: 'Learn how USFinNexus builds free mortgage and personal finance calculators, verifies key U.S. financial inputs, documents assumptions, and handles calculator data.',
    alternates: { canonical: 'https://usfinnexus.com/about' },
    openGraph: {
        type: 'website',
        title: 'About USFinNexus | Mortgage & Finance Calculators',
        description: 'Learn about USFinNexus calculation methods, source selection, privacy practices and editorial standards.',
        url: 'https://usfinnexus.com/about',
    },
    twitter: {
        card: 'summary',
        title: 'About USFinNexus | Mortgage & Finance Calculators',
        description: 'How USFinNexus builds and reviews its mortgage and personal finance calculators.',
    },
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': ['AboutPage', 'WebPage'],
                    '@id': 'https://usfinnexus.com/about',
                    name: 'About USFinNexus',
                    url: 'https://usfinnexus.com/about',
                    description: 'About USFinNexus, a website providing mortgage and personal finance calculators for U.S. consumers.',
                    isPartOf: { '@id': 'https://usfinnexus.com/#website' },
                    about: { '@id': 'https://usfinnexus.com/#organization' },
                    breadcrumb: {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usfinnexus.com/' },
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
                        USFinNexus.com provides free mortgage and personal finance calculators for U.S. consumers. The goal is simple: useful planning tools with clear assumptions, transparent limitations, and no calculator signup requirement.
                    </p>
                </div>

                <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    <section>
                        <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Why We Built This</h2>
                        <p>Many finance websites combine calculators with lead-generation forms, account gates, or product marketing. USFinNexus was built as an alternative focused first on calculation tools and educational explanations. Calculator outputs are estimates and are not lender offers, approvals, tax returns, or professional advice.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><BookOpen size={16} /> Calculation Standards &amp; Data Sources</span>
                        </h2>
                        <p className="mb-3">Different calculators use different formulas and reference inputs. Where a rule or annual limit affects a result, we prefer primary U.S. government sources and identify assumptions instead of describing the entire site as regulator-certified.</p>
                        <ul className="list-none space-y-2">
                            {[
                                ['Mortgage amortization', 'Standard fixed-rate amortization math for principal and interest; taxes, insurance, PMI and HOA inputs are separate estimates.'],
                                ['2026 FHFA conforming limits', '$832,750 one-unit baseline and $1,249,125 one-unit high-cost ceiling, subject to county-specific limits.'],
                                ['2026 FHA loan limits', '$541,287 one-unit floor and $1,249,125 one-unit high-cost ceiling, subject to local limits and HUD rules.'],
                                ['Qualified Mortgage rules', 'Current General QM rules do not use a universal 43% DTI cap; DTI benchmarks shown in planning tools are scenarios, not a CFPB approval threshold.'],
                                ['PMI cancellation', 'Conventional PMI cancellation and termination are described using the federal Homeowners Protection Act and applicable conditions.'],
                                ['2026 federal income tax', 'Ordinary-income brackets and standard deductions use IRS Revenue Procedure 2025-32.'],
                                ['Property tax and insurance', 'These are planning estimates that can vary materially by property, jurisdiction, insurer and coverage.'],
                            ].map(([title, body]) => (
                                <li key={String(title)} className="flex items-start gap-2">
                                    <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: '#00C853' }} />
                                    <span><strong style={{ color: 'var(--color-text)' }}>{title}:</strong> {body}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3">
                            For formula documentation and limitations, see our <Link href="/methodology" style={{ color: '#0da6f2', fontWeight: 600 }}>Methodology page</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                            <span className="inline-flex items-center gap-2"><Lock size={16} /> Privacy &amp; Calculator Inputs</span>
                        </h2>
                        <div className="card p-4" style={{ background: 'var(--color-bg-secondary)' }}>
                            <ul className="space-y-2">
                                {[
                                    'Calculator inputs are designed to be processed client-side in your browser rather than submitted as lender leads.',
                                    'No calculator signup, email gate, or phone-number form is required to get a calculation result.',
                                    'PDF and CSV reports are designed to be generated in the browser where those export features are available.',
                                    'The website may use third-party advertising or analytics technologies that can process browser, device, cookie, or usage data as described in the Privacy Policy.',
                                    'USFinNexus does not represent third-party advertising or analytics activity as zero data collection.',
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
                            <span className="inline-flex items-center gap-2"><Database size={16} /> Editorial &amp; Review Standards</span>
                        </h2>
                        <p className="mb-2">Time-sensitive rules and limits should be checked against primary sources when a calculator is materially updated. Pages display review dates where a time-sensitive calculation has been specifically re-verified. We avoid presenting a page as freshly reviewed solely because the website was rebuilt or redeployed.</p>
                        <p>USFinNexus does not claim that a government agency has certified or approved its calculators. When a calculator uses an industry planning benchmark, the page should distinguish that benchmark from a legal or underwriting requirement.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>Our Commitment</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Keep core calculators free to use without a calculator account gate</li>
                            <li>Correct material formula or regulatory errors when identified</li>
                            <li>Use primary sources for time-sensitive federal limits and tax brackets where practicable</li>
                            <li>Separate planning assumptions from legal, regulatory, lender, and tax requirements</li>
                            <li>Clearly disclose that calculator results are estimates</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-8 p-4 rounded-lg text-xs leading-relaxed" style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                    <strong style={{ color: 'var(--color-text)' }}>Important:</strong> Calculator results are estimates for educational purposes only and do not constitute financial, mortgage, tax, legal, lending, or investment advice. Always verify important decisions with the appropriate lender, agency, tax professional, attorney, or other qualified professional. See our full <Link href="/disclaimer" style={{ color: '#0da6f2' }}>Disclaimer</Link>.
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
