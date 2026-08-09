import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

const SOURCE_DATE = 'August 6, 2026';

export const metadata: Metadata = {
    title: 'Current Mortgage Rates: August 2026',
    description: 'Freddie Mac weekly mortgage-rate averages for August 2026, with clear methodology, trend context and links to payment, affordability and refinance calculators.',
    alternates: { canonical: '/mortgage-rates' },
    openGraph: {
        type: 'article',
        url: 'https://usfinnexus.com/mortgage-rates',
        title: 'Current Mortgage Rates: August 2026',
        description: 'Freddie Mac PMMS weekly averages, methodology and calculator links.',
    },
};

export default function MortgageRatesPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Breadcrumbs items={[{ name: 'Home', item: '/' }, { name: 'Mortgage Rates', item: '/mortgage-rates' }]} />
            <article className="prose prose-slate max-w-none">
                <header className="not-prose my-8">
                    <p className="text-sm font-semibold text-blue-700">Data updated {SOURCE_DATE}</p>
                    <h1 className="text-4xl font-black text-navy-900 mt-2">Current Mortgage Rates: August 2026</h1>
                    <p className="text-lg text-gray-600 mt-3">National weekly averages are context, not a personalized lender quote.</p>
                </header>

                <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
                    <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                        <p className="text-sm text-gray-600">30-year fixed average</p>
                        <p className="text-4xl font-black text-navy-900">6.69%</p>
                        <p className="text-sm text-gray-600">Freddie Mac PMMS, {SOURCE_DATE}</p>
                    </section>
                    <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                        <p className="text-sm text-gray-600">15-year fixed average</p>
                        <p className="text-4xl font-black text-navy-900">6.01%</p>
                        <p className="text-sm text-gray-600">Freddie Mac PMMS, {SOURCE_DATE}</p>
                    </section>
                </div>

                <h2>What these mortgage-rate averages mean</h2>
                <p>
                    Freddie Mac&apos;s Primary Mortgage Market Survey uses mortgage-rate information from thousands of conventional, conforming purchase applications submitted through Loan Product Advisor. The published figure is a national weekly average. Your quote can differ based on credit, loan-to-value ratio, property, occupancy, loan size, points, lender and lock period.
                </p>
                <p>
                    The August 6 average increased from 6.66% the prior week. A one-week move is not a forecast. Compare a lender&apos;s annual percentage rate, points, lender fees and cash to close—not only the note rate.
                </p>

                <h2>How a rate change affects a payment</h2>
                <p>
                    A higher rate increases principal-and-interest expense for the same balance and term. Taxes, homeowners insurance, mortgage insurance and HOA fees must be added separately. Use the <Link href="/calculators/mortgage">mortgage calculator</Link> to test a quoted rate and the <Link href="/calculators/affordability">affordability calculator</Link> to keep debt and cash assumptions visible.
                </p>

                <h2>When a refinance deserves a closer look</h2>
                <p>
                    A lower proposed rate is only one input. Compare closing costs, points, payment savings, remaining loan term and how long you expect to keep the loan. The <Link href="/calculators/refinance">refinance calculator</Link> estimates a simple break-even month from your own quote and cost assumptions.
                </p>

                <h2>Source and update policy</h2>
                <p>
                    Source: <a href="https://www.freddiemac.com/pmms" rel="nofollow external">Freddie Mac Primary Mortgage Market Survey</a>. PMMS is generally published weekly. This page shows the source date prominently and should be refreshed after each new release; it does not predict future rates or represent an offer to lend.
                </p>
            </article>
        </main>
    );
}
