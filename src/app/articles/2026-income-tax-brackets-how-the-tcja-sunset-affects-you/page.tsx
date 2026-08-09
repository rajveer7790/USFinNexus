import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, DollarSign, ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleSchema from '@/components/ArticleSchema';

export const metadata: Metadata = {
    title: "2026 Federal Income Tax Brackets & Standard Deduction | Key Facts",
    description: 'Official 2026 federal income tax brackets and standard deductions, plus what actually happened to the expected TCJA sunset. Based on IRS 2026 guidance.',
    alternates: { canonical: '/articles/2026-income-tax-brackets-how-the-tcja-sunset-affects-you' },
    openGraph: {
        title: '2026 Federal Income Tax Brackets & Standard Deduction',
        description: 'Official 2026 federal tax brackets, standard deductions and an explanation of why the expected TCJA rate sunset did not occur.',
        url: 'https://usfinnexus.com/articles/2026-income-tax-brackets-how-the-tcja-sunset-affects-you',
        type: 'article',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/images/tax_deduction_hero_1772351400720.png', width: 1200, height: 630, alt: '2026 federal income tax brackets and standard deduction' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '2026 Federal Income Tax Brackets',
        description: 'Official 2026 federal brackets and standard deductions based on IRS guidance.',
        images: ['https://usfinnexus.com/images/tax_deduction_hero_1772351400720.png'],
    },
};

const SINGLE = [
    ['10%', '$0 – $12,400'], ['12%', '$12,401 – $50,400'], ['22%', '$50,401 – $105,700'],
    ['24%', '$105,701 – $201,775'], ['32%', '$201,776 – $256,225'], ['35%', '$256,226 – $640,600'], ['37%', 'Over $640,600'],
];
const MARRIED = [
    ['10%', '$0 – $24,800'], ['12%', '$24,801 – $100,800'], ['22%', '$100,801 – $211,400'],
    ['24%', '$211,401 – $403,550'], ['32%', '$403,551 – $512,450'], ['35%', '$512,451 – $768,700'], ['37%', 'Over $768,700'],
];
const HOH = [
    ['10%', '$0 – $17,700'], ['12%', '$17,701 – $67,450'], ['22%', '$67,451 – $105,700'],
    ['24%', '$105,701 – $201,750'], ['32%', '$201,751 – $256,200'], ['35%', '$256,201 – $640,600'], ['37%', 'Over $640,600'],
];

function BracketTable({ rows, label }: { rows: string[][]; label: string }) {
    return (
        <div className="overflow-x-auto my-6">
            <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50"><tr><th className="py-3 px-4 text-left">Rate</th><th className="py-3 px-4 text-left">2026 taxable income — {label}</th></tr></thead>
                <tbody>{rows.map(([rate, income]) => <tr key={rate} className="border-t border-gray-200"><td className="py-3 px-4 font-bold">{rate}</td><td className="py-3 px-4">{income}</td></tr>)}</tbody>
            </table>
        </div>
    );
}

export default function ArticlePage() {
    return (
        <>
            <ArticleSchema
                title="2026 Federal Income Tax Brackets & Standard Deduction"
                description="Official 2026 federal income tax brackets and standard deductions based on IRS guidance, with an explanation of the expected TCJA sunset."
                url="https://usfinnexus.com/articles/2026-income-tax-brackets-how-the-tcja-sunset-affects-you"
                datePublished="2026-03-01"
                dateModified="2026-08-07"
                authorName="USFinNexus Editorial Team"
            />
            <article className="max-w-4xl mx-auto px-4 py-7 sm:py-9 lg:px-8">
                <Breadcrumbs items={[{ name: 'Articles', item: '/articles' }, { name: '2026 Federal Tax Brackets', item: '/articles/2026-income-tax-brackets-how-the-tcja-sunset-affects-you' }]} />
                <header className="mb-10">
                    <span className="inline-block px-3 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">Tax Year 2026</span>
                    <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight">2026 Federal Income Tax Brackets &amp; Standard Deduction</h1>
                    <p className="text-xl leading-relaxed text-gray-600">The widely expected 2026 return to pre-TCJA individual rates did not happen. The 2026 federal rate structure remains 10%, 12%, 22%, 24%, 32%, 35% and 37%. Below are the official inflation-adjusted thresholds and standard deductions published by the IRS.</p>
                    <p className="text-sm text-gray-500 mt-4">Substantively reviewed: August 7, 2026 · Primary source: IRS Revenue Procedure 2025-32 and IRS 2026 inflation-adjustment guidance</p>
                </header>

                <div className="prose prose-lg max-w-none prose-a:text-blue-600">
                    <div className="not-prose my-8 p-5 rounded-2xl border border-blue-200 bg-blue-50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex-1"><p className="font-bold text-[#0A192F] mb-1">Estimate your 2026 federal tax</p><p className="text-sm text-gray-600">Use the calculator with the official 2026 rate thresholds and standard deductions.</p></div>
                        <Link href="/calculators/income-tax" className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0A192F] text-white text-sm font-bold rounded-xl"><DollarSign size={15} /> 2026 Tax Calculator</Link>
                    </div>

                    <h2>What happened to the TCJA sunset?</h2>
                    <p>When the Tax Cuts and Jobs Act was enacted in 2017, many individual provisions were scheduled to expire after 2025. That led to years of planning around a possible return to older rates, including a 39.6% top rate and a smaller standard deduction.</p>
                    <p>Congress changed that outcome in 2025. For tax year 2026, the individual federal rate structure remains <strong>10%, 12%, 22%, 24%, 32%, 35% and 37%</strong>. Articles or calculators that still model an automatic 2026 reversion to the old 10/15/25/28/33/35/39.6% rate structure are outdated.</p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-xl flex gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                        <p className="m-0 text-amber-900"><strong>Important:</strong> “Permanent” in tax legislation means there is no built-in sunset date for the provision; Congress can still change tax law in the future.</p>
                    </div>

                    <h2>2026 federal income tax brackets</h2>
                    <p>Federal income tax is progressive. A marginal rate applies only to the portion of taxable income inside that bracket, not to every dollar of income.</p>
                    <h3>Single filers</h3><BracketTable rows={SINGLE} label="Single" />
                    <h3>Married filing jointly</h3><BracketTable rows={MARRIED} label="Married filing jointly" />
                    <h3>Head of household</h3><BracketTable rows={HOH} label="Head of household" />

                    <h2>2026 standard deduction</h2>
                    <ul>
                        <li><strong>Single or married filing separately:</strong> $16,100</li>
                        <li><strong>Married filing jointly:</strong> $32,200</li>
                        <li><strong>Head of household:</strong> $24,150</li>
                    </ul>
                    <p>The standard deduction generally reduces income before the ordinary income-tax brackets are applied, although an individual return can involve additional rules, adjustments and deductions.</p>

                    <h2>Taxable income is not the same as salary</h2>
                    <p>The bracket thresholds apply to <strong>taxable income</strong>, not simply gross salary. A simplified path is gross income minus eligible adjustments and then the standard deduction or eligible itemized deductions. Tax credits are different: they generally reduce tax rather than taxable income.</p>

                    <h2>Why your actual tax can differ from a simple calculator</h2>
                    <p>A basic federal tax calculator may not model every rule that can affect a return, including credits, qualified dividends, long-term capital gains, Alternative Minimum Tax, Net Investment Income Tax, self-employment tax, additional deductions, phaseouts, withholding or state/local taxes.</p>
                    <p>Use the estimate for planning and check filing decisions against current IRS instructions or a qualified tax professional.</p>

                    <h2>Primary sources</h2>
                    <ul>
                        <li><a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="noopener noreferrer">IRS — 2026 tax inflation adjustments <ExternalLink className="inline" size={14} /></a></li>
                        <li><a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer">IRS Revenue Procedure 2025-32 <ExternalLink className="inline" size={14} /></a></li>
                    </ul>
                    <p className="text-sm text-gray-500">This article is educational information, not individualized tax advice.</p>
                </div>
            </article>
        </>
    );
}
