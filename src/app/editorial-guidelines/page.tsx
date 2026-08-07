import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Editorial Guidelines & Corrections | USFinNexus',
    description: 'How USFinNexus researches financial content, uses primary sources, labels estimates, handles corrections and updates time-sensitive calculator assumptions.',
    alternates: { canonical: 'https://usfinnexus.com/editorial-guidelines' },
    openGraph: {
        type: 'website',
        url: 'https://usfinnexus.com/editorial-guidelines',
        title: 'Editorial Guidelines & Corrections | USFinNexus',
        description: 'Research, sourcing, corrections and update standards for USFinNexus financial calculators and guides.',
        siteName: 'USFinNexus',
    },
};

export default function EditorialGuidelinesPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://usfinnexus.com/editorial-guidelines',
        name: 'USFinNexus Editorial Guidelines & Corrections',
        url: 'https://usfinnexus.com/editorial-guidelines',
        dateModified: '2026-08-07',
        isPartOf: { '@id': 'https://usfinnexus.com/#website' },
        about: { '@id': 'https://usfinnexus.com/#organization' },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <main className="max-w-4xl mx-auto px-4 py-8 sm:py-10">
                <Breadcrumbs items={[{ name: 'Editorial Guidelines', item: '/editorial-guidelines' }]} />
                <header className="mb-9">
                    <h1 className="text-3xl sm:text-5xl font-black mb-4">Editorial Guidelines &amp; Corrections</h1>
                    <p className="text-lg text-gray-600 max-w-3xl">Financial information can become outdated quickly. These standards explain how USFinNexus separates calculator math from financial guidance, verifies time-sensitive facts, and corrects material errors.</p>
                    <p className="text-xs mt-3 font-bold uppercase tracking-wider text-gray-500">Last reviewed: August 7, 2026</p>
                </header>

                <div className="space-y-9 text-sm sm:text-base leading-relaxed text-gray-700">
                    <section><h2 className="text-2xl font-black text-navy-900 mb-3">Primary Sources First</h2><p>For federal tax rules, mortgage regulations and government loan limits, we prefer the agency responsible for the rule: IRS, CFPB, FHFA, HUD, SSA, VA, USDA or another authoritative public source. Secondary sources can help explain context but should not replace the controlling source for a material number or rule.</p></section>
                    <section><h2 className="text-2xl font-black text-navy-900 mb-3">Calculator Math vs. Eligibility</h2><p>A mathematical result is not the same as eligibility. We aim to label outputs such as mortgage payments, amortization, DTI and tax estimates as estimates and avoid presenting a planning threshold as a universal approval rule. Loan qualification, tax filing and investment decisions require facts beyond a simple calculator.</p></section>
                    <section><h2 className="text-2xl font-black text-navy-900 mb-3">Time-Sensitive Information</h2><p>Annual statutory values should identify the applicable tax year or program year. Volatile values such as mortgage rates should identify a source date when presented as a market observation. We avoid changing a visible updated date unless the underlying page has been materially reviewed or changed.</p></section>
                    <section><h2 className="text-2xl font-black text-navy-900 mb-3">Titles, Search Keywords and Accuracy</h2><p>Search titles should describe the page in plain language—such as Mortgage Calculator or Debt-to-Income Ratio Calculator—without unsupported superlatives, certification claims or a year that does not materially affect the content. Search visibility never takes priority over factual accuracy.</p></section>
                    <section><h2 className="text-2xl font-black text-navy-900 mb-3">Authorship and Review</h2><p>We do not invent professional credentials or claim CPA, CFP, attorney or mortgage-professional review unless a real qualified reviewer has performed that review and can be identified. Pages without a named individual author may be attributed to the USFinNexus Editorial Team, which means USFinNexus accepts responsibility for the published content rather than implying external professional certification.</p></section>
                    <section><h2 className="text-2xl font-black text-navy-900 mb-3">Corrections</h2><p>Material factual or calculation errors should be corrected promptly. This includes changes to tax brackets, statutory limits, regulatory descriptions, formulas or assumptions that could meaningfully change a result or decision. The page review or modification date should be updated when a substantive correction is published.</p><p className="mt-3">To report a suspected error, use the <Link href="/contact" className="font-bold text-blue-600 hover:underline">Contact page</Link> and include the URL, the statement or result in question, and a source if available.</p></section>
                    <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6"><h2 className="text-xl font-black text-navy-900 mb-2">Related transparency pages</h2><div className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/methodology" className="font-bold text-blue-700 hover:underline">Calculation Methodology</Link><Link href="/about" className="font-bold text-blue-700 hover:underline">About USFinNexus</Link><Link href="/privacy" className="font-bold text-blue-700 hover:underline">Privacy Policy</Link><Link href="/disclaimer" className="font-bold text-blue-700 hover:underline">Disclaimer</Link></div></section>
                </div>
            </main>
        </>
    );
}
