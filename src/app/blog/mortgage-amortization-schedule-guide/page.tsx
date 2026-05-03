import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Info } from 'lucide-react';
import AuthorBio, { USFinNexusEditorialTeam } from '@/components/AuthorBio';
import RelatedCalculators from '@/components/RelatedCalculators';
import RelatedArticles from '@/components/RelatedArticles';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleSchema from '@/components/ArticleSchema';

export const metadata: Metadata = {
    title: 'How to Read a Mortgage Amortization Schedule | USFinNexus',
    description: 'Learn how to read and understand a mortgage amortization schedule, including how principal and interest change over time.',
    openGraph: {
        title: 'How to Read a Mortgage Amortization Schedule',
        description: 'Learn how to read and understand a mortgage amortization schedule, including how principal and interest change over time.',
        url: 'https://usfinnexus.com/blog/mortgage-amortization-schedule-guide',
        type: 'article',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Guide to reading and understanding a mortgage amortization schedule' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'How to Read a Mortgage Amortization Schedule',
        description: 'Learn how to read and understand a mortgage amortization schedule, including how principal and interest change over time.',
        images: ['https://usfinnexus.com/images/home-hero-v2.png'],
    },
    alternates: {
        canonical: 'https://usfinnexus.com/blog/mortgage-amortization-schedule-guide',
    },
};

export default function BlogPost() {
    return (
        <>
        <ArticleSchema
            title="How to Read a Mortgage Amortization Schedule | USFinNexus"
            description="Learn how to read and understand a mortgage amortization schedule, including how principal and interest change over time."
            url="https://usfinnexus.com/blog/mortgage-amortization-schedule-guide"
            datePublished="2026-02-25"
            dateModified="2026-03-12"
            authorName="USFinNexus Editorial Team"
        />
        <div className="max-w-4xl mx-auto px-4 py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: 'Amortization Guide', item: '/blog/mortgage-amortization-schedule-guide' }]} />
            <article className="prose prose-slate max-w-none">

            <header className="mb-10">
                <span className="inline-block px-3 py-1 rounded text-xs font-bold mb-4" style={{ background: 'rgba(0,200,83,0.12)', color: '#00C853' }}>
                    Education
                </span>
                <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--color-text)' }}>
                    How to Read a Mortgage Amortization Schedule
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    <span>By {USFinNexusEditorialTeam.name}</span>
                    <span>·</span>
                    <span>February 25, 2026</span>
                    <span>·</span>
                    <span>6 min read</span>
                    <span>·</span>
                    <span className="text-[#0da6f2] font-bold">Updated March 12, 2026</span>
                </div>
            </header>

            <div className="prose prose-lg max-w-none" style={{ color: 'var(--color-text)' }}>
                <p className="lead text-xl font-medium mb-8" style={{ color: 'var(--color-text-muted)' }}>
                    An amortization schedule is the single most important document in your mortgage. It tells you exactly where every dollar of your monthly payment goes—month by month, for the entire life of your loan. Here&apos;s how to read it like a pro.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">What Is an Amortization Schedule?</h2>
                <p className="mb-6">
                    An amortization schedule is a table that breaks down each of your mortgage payments into two components: <strong>principal</strong> (the amount that reduces your loan balance) and <strong>interest</strong> (the cost of borrowing). It also shows your remaining balance after each payment.
                </p>

                <div className="card p-6 mb-8 border-l-4" style={{ borderLeftColor: 'var(--color-navy)' }}>
                    <div className="flex gap-4">
                        <Info className="w-6 h-6 shrink-0" style={{ color: 'var(--color-navy)' }} />
                        <div>
                            <h3 className="font-bold mb-2">Key Insight</h3>
                            <p className="text-sm m-0">In the early years of a 30-year mortgage, roughly <strong>70–80% of your payment goes to interest</strong>. It&apos;s only in the final decade that the majority shifts to principal. This is why understanding your schedule is critical.</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-4">The 5 Columns You&apos;ll See</h2>
                <p className="mb-4">A standard amortization schedule contains these columns:</p>
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#00C853' }} />
                            <span><strong>Payment Number:</strong> Which payment this is (1 through 360 for a 30-year loan).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#00C853' }} />
                            <span><strong>Payment Amount:</strong> Your total monthly payment (usually fixed).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#00C853' }} />
                            <span><strong>Principal Portion:</strong> How much of this payment reduces your loan balance.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#00C853' }} />
                            <span><strong>Interest Portion:</strong> How much goes to the lender as the cost of borrowing.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#00C853' }} />
                            <span><strong>Remaining Balance:</strong> Your outstanding loan balance after this payment.</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-4">A Real Example</h2>
                <p className="mb-6">Consider a $300,000 loan at 6.75% over 30 years:</p>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-2 px-3 font-bold">Payment #</th>
                                <th className="text-right py-2 px-3 font-bold">Payment</th>
                                <th className="text-right py-2 px-3 font-bold">Principal</th>
                                <th className="text-right py-2 px-3 font-bold">Interest</th>
                                <th className="text-right py-2 px-3 font-bold">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 px-3">1</td>
                                <td className="py-2 px-3 text-right">$1,946</td>
                                <td className="py-2 px-3 text-right text-green-600">$259</td>
                                <td className="py-2 px-3 text-right text-red-500">$1,688</td>
                                <td className="py-2 px-3 text-right">$299,741</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 px-3">12</td>
                                <td className="py-2 px-3 text-right">$1,946</td>
                                <td className="py-2 px-3 text-right text-green-600">$276</td>
                                <td className="py-2 px-3 text-right text-red-500">$1,670</td>
                                <td className="py-2 px-3 text-right">$296,794</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 px-3">180</td>
                                <td className="py-2 px-3 text-right">$1,946</td>
                                <td className="py-2 px-3 text-right text-green-600">$747</td>
                                <td className="py-2 px-3 text-right text-red-500">$1,199</td>
                                <td className="py-2 px-3 text-right">$212,605</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-3">360</td>
                                <td className="py-2 px-3 text-right">$1,946</td>
                                <td className="py-2 px-3 text-right text-green-600">$1,935</td>
                                <td className="py-2 px-3 text-right text-red-500">$11</td>
                                <td className="py-2 px-3 text-right">$0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mb-6">
                    Notice how in payment #1, only $259 goes to principal while $1,688 goes to interest. By payment #360, nearly the entire payment ($1,935) goes to principal. This is the &quot;front-loaded interest&quot; effect that makes early extra payments incredibly powerful.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">Why Extra Payments Are So Powerful</h2>
                <p className="mb-6">
                    Making just <strong>one extra payment per year</strong> on a 30-year mortgage can shave off approximately 4–5 years from your loan term and save tens of thousands in interest. When you make an extra payment, 100% of that extra amount goes directly to principal reduction.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">Generate Your Own Schedule</h2>
                <p className="mb-6">
                    Rather than trying to build a spreadsheet manually, use a calculator that generates a complete amortization schedule instantly. Our mortgage calculator creates a detailed, month-by-month breakdown that you can download as a PDF or CSV.
                </p>

                <hr className="my-10 border-gray-200" />

                <div className="card p-4 sm:p-6 text-center">
                    <h3 className="text-xl font-bold mb-3">See Your Complete Amortization Schedule</h3>
                    <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                        Enter your loan details and get a full month-by-month breakdown with PDF export.
                    </p>
                    <Link href="/calculators/mortgage" className="btn-primary py-3 px-6 text-sm inline-block">
                        Generate My Schedule
                    </Link>
                </div>
                <AuthorBio author={USFinNexusEditorialTeam} updatedDate="March 12, 2026" />
            </div>
            </article>
        </div>
        <RelatedCalculators exclude={['/calculators/mortgage']} limit={4} title="Related Calculators" />
        <RelatedArticles currentSlug="mortgage-amortization-schedule-guide" category="Education" />
        </>
    );
}
