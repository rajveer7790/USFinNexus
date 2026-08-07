import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleSchema from '@/components/ArticleSchema';
import RelatedArticles from '@/components/RelatedArticles';

const URL = 'https://usfinnexus.com/articles/2026-income-tax-brackets-how-the-tcja-sunset-affects-you';

export const metadata: Metadata = {
    title: '2026 Federal Income Tax Brackets & Standard Deduction | USFinNexus',
    description: 'See the official 2026 federal ordinary-income tax brackets and standard deductions for Single, Married Filing Jointly and Head of Household, with IRS source links.',
    alternates: { canonical: URL },
    openGraph: {
        type: 'article',
        title: '2026 Federal Income Tax Brackets & Standard Deduction | USFinNexus',
        description: 'Official 2026 federal ordinary-income brackets and standard deductions with IRS source links.',
        url: URL,
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/images/tax_deduction_hero_1772351400720.png', width: 1200, height: 630, alt: '2026 federal income tax brackets and standard deduction' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '2026 Federal Income Tax Brackets & Standard Deduction | USFinNexus',
        description: 'Official 2026 federal ordinary-income brackets and standard deductions.',
        images: ['https://usfinnexus.com/images/tax_deduction_hero_1772351400720.png'],
    },
};

const singleRows = [
    ['10%', '$0–$12,400'],
    ['12%', '$12,401–$50,400'],
    ['22%', '$50,401–$105,700'],
    ['24%', '$105,701–$201,775'],
    ['32%', '$201,776–$256,225'],
    ['35%', '$256,226–$640,600'],
    ['37%', 'Over $640,600'],
];

const marriedRows = [
    ['10%', '$0–$24,800'],
    ['12%', '$24,801–$100,800'],
    ['22%', '$100,801–$211,400'],
    ['24%', '$211,401–$403,550'],
    ['32%', '$403,551–$512,450'],
    ['35%', '$512,451–$768,700'],
    ['37%', 'Over $768,700'],
];

const hohRows = [
    ['10%', '$0–$17,700'],
    ['12%', '$17,701–$67,450'],
    ['22%', '$67,451–$105,700'],
    ['24%', '$105,701–$201,750'],
    ['32%', '$201,751–$256,200'],
    ['35%', '$256,201–$640,600'],
    ['37%', 'Over $640,600'],
];

function BracketTable({ title, rows }: { title: string; rows: string[][] }) {
    return (
        <div className="my-7">
            <h3>{title}</h3>
            <div className="overflow-x-auto">
                <table>
                    <thead><tr><th>Rate</th><th>Taxable income</th></tr></thead>
                    <tbody>{rows.map(([rate, income]) => <tr key={`${title}-${rate}`}><td><strong>{rate}</strong></td><td>{income}</td></tr>)}</tbody>
                </table>
            </div>
        </div>
    );
}

export default function ArticlePage() {
    return (
        <>
            <ArticleSchema
                title="2026 Federal Income Tax Brackets and Standard Deduction"
                description="Official 2026 federal ordinary-income tax brackets and standard deductions with IRS source links."
                url={URL}
                datePublished="2026-03-01"
                dateModified="2026-08-07"
                authorName="USFinNexus Editorial Team"
            />
            <article className="max-w-4xl mx-auto px-4 py-7 sm:py-9 lg:px-8">
                <Breadcrumbs items={[{ name: 'Articles', item: '/articles' }, { name: '2026 Federal Tax Brackets', item: '/articles/2026-income-tax-brackets-how-the-tcja-sunset-affects-you' }]} />

                <header className="mb-10">
                    <span className="inline-block px-3 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">Tax Year 2026</span>
                    <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight tracking-tight">2026 Federal Income Tax Brackets &amp; Standard Deduction</h1>
                    <p className="text-xl leading-relaxed text-gray-600">
                        The IRS&apos;s tax-year 2026 guidance uses the same seven ordinary federal income-tax rates—10%, 12%, 22%, 24%, 32%, 35% and 37%—with inflation-adjusted thresholds and higher standard-deduction amounts.
                    </p>
                    <div className="mt-5 text-sm text-gray-500">Written by USFinNexus Editorial Team · Fact data reviewed August 7, 2026</div>
                </header>

                <div className="prose prose-lg max-w-none prose-a:text-blue-600">
                    <div className="not-prose rounded-2xl border border-amber-200 bg-amber-50 p-5 mb-8 text-sm text-amber-900">
                        <strong>Correction:</strong> Earlier versions of this URL discussed an automatic 2026 reversion to pre-TCJA individual brackets. That is no longer the law in effect for tax year 2026. This page now uses current IRS 2026 guidance.
                    </div>

                    <h2>2026 Standard Deduction</h2>
                    <ul>
                        <li><strong>Single:</strong> $16,100</li>
                        <li><strong>Married Filing Jointly:</strong> $32,200</li>
                        <li><strong>Head of Household:</strong> $24,150</li>
                    </ul>
                    <p>These are the basic standard-deduction amounts. Additional amounts can apply for age or blindness, and some taxpayers may itemize instead.</p>

                    <h2>2026 Ordinary Federal Income-Tax Brackets</h2>
                    <p>Federal income tax is progressive. Reaching a higher bracket does not cause all taxable income to be taxed at the higher rate; only the portion within that bracket uses that rate.</p>
                    <BracketTable title="Single" rows={singleRows} />
                    <BracketTable title="Married Filing Jointly" rows={marriedRows} />
                    <BracketTable title="Head of Household" rows={hohRows} />

                    <h2>Why the old “TCJA sunset” assumption is wrong for 2026</h2>
                    <p>
                        Before subsequent legislation, many tax projections assumed several individual provisions of the 2017 Tax Cuts and Jobs Act would expire after 2025. Current IRS guidance for tax year 2026 does not use a return to the old 15%, 25%, 28%, 33% and 39.6% ordinary-rate schedule. The 2026 IRS schedules retain the 10%, 12%, 22%, 24%, 32%, 35% and 37% rates.
                    </p>

                    <h2>Primary sources</h2>
                    <ul>
                        <li><a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="noopener noreferrer">IRS: Tax year 2026 inflation adjustments</a></li>
                        <li><a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer">IRS Revenue Procedure 2025-32</a></li>
                    </ul>

                    <h2>Estimate your 2026 federal tax</h2>
                    <p>
                        Use the <Link href="/calculators/income-tax">2026 Federal Income Tax Calculator</Link> for a simplified ordinary-income estimate. It does not replace tax-return software or professional tax advice and does not model every credit, deduction or special tax rule.
                    </p>

                    <p className="text-sm text-gray-500">Tax information can change through legislation or IRS guidance. Confirm current IRS materials before filing or making a material tax decision.</p>
                </div>

                <RelatedArticles currentSlug="2026-income-tax-brackets-how-the-tcja-sunset-affects-you" />
            </article>
        </>
    );
}
