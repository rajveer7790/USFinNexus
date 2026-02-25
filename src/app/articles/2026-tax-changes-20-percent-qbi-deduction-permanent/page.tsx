import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, DollarSign, TrendingUp, Info } from 'lucide-react';
import RelatedArticles from '@/components/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 Tax Changes: 20% QBI Deduction Made Permanent',
    description: 'The One Big Beautiful Bill locked in LLC tax savings permanently. Learn what the permanent 20% QBI deduction means for your LLC in 2026.',
};

export default function ArticlePage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-12 md:py-20 lg:px-8">
            <Link href="/articles" className="inline-flex items-center text-sm mb-8 hover:text-blue-600 transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
            </Link>

            <header className="mb-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-block px-3 py-1 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider">
                        Tax
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Updated: February 25, 2026</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight" style={{ color: 'var(--color-text)' }}>
                    2026 Tax Changes: 20% QBI Deduction Made Permanent — Save Big on Your LLC
                </h1>

                <p className="text-xl leading-relaxed mb-8" style={{ color: 'var(--color-text-muted)' }}>
                    The One Big Beautiful Bill locked in LLC tax savings permanently. The 20% Qualified Business Income (QBI) deduction, originally set to expire in 2025, is now a permanent fixture of the U.S. tax code. Here is what it means for you.
                </p>

                <div className="flex items-center gap-4 border-t border-b py-4 border-gray-200 dark:border-gray-800">
                    <div className="flex-1 flex gap-4 text-sm font-medium">
                        <div className="flex flex-col">
                            <span style={{ color: 'var(--color-text-muted)' }}>Written by</span>
                            <span style={{ color: 'var(--color-text)' }}>USFinNexus Compliance Team</span>
                        </div>
                        <div className="flex flex-col border-l pl-4 border-gray-200 dark:border-gray-800">
                            <span style={{ color: 'var(--color-text-muted)' }}>Reading Time</span>
                            <span style={{ color: 'var(--color-text)' }}>8 minutes</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500">
                <figure className="my-10">
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
                        <Image src="/images/qbi-deduction.png" alt="20% QBI deduction tax savings for LLCs" fill className="object-cover" priority />
                    </div>
                    <figcaption className="text-center text-sm mt-3 text-gray-500 dark:text-gray-400">The permanent 20% QBI deduction is one of the biggest tax wins for small businesses in a decade.</figcaption>
                </figure>

                <h2>What Is the QBI Deduction?</h2>
                <p>
                    The Qualified Business Income (QBI) deduction, also known as the Section 199A deduction, allows owners of pass-through entities—such as LLCs, S-corporations, sole proprietorships, and partnerships—to deduct up to <strong>20% of their qualified business income</strong> from their personal tax returns.
                </p>
                <p>
                    In practical terms, if your LLC generates $100,000 in qualified business income, you can deduct $20,000 before calculating your federal income tax. This can result in thousands of dollars in annual savings.
                </p>

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 my-8 rounded-r-xl">
                    <div className="flex items-start gap-4">
                        <Info className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-green-900 dark:text-green-300 m-0 mb-2">Made Permanent in 2025</h3>
                            <p className="m-0 text-green-800 dark:text-green-200">
                                Originally introduced as part of the Tax Cuts and Jobs Act (TCJA) of 2017, the QBI deduction was set to expire on December 31, 2025. The &quot;One Big Beautiful Bill&quot; signed into law in late 2025 made it <strong>permanent</strong>, giving small business owners long-term certainty.
                            </p>
                        </div>
                    </div>
                </div>

                <h2>Who Qualifies?</h2>
                <p>The deduction is available to:</p>
                <ul>
                    <li><strong>Single-member LLCs</strong> taxed as sole proprietorships.</li>
                    <li><strong>Multi-member LLCs</strong> taxed as partnerships.</li>
                    <li><strong>S-corporations</strong> with owner-employees.</li>
                    <li><strong>Sole proprietors</strong> and independent contractors.</li>
                </ul>
                <p>
                    However, there are income thresholds and limitations for Specified Service Trades or Businesses (SSTBs)—such as doctors, lawyers, and consultants—once taxable income exceeds certain levels ($191,950 for single filers and $383,900 for joint filers in 2026).
                </p>

                <h2>How Much Can You Save?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-sm text-center">
                        <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-3" />
                        <h4 className="font-bold text-2xl mb-1" style={{ color: 'var(--color-navy)' }}>$10,000</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Savings on $50K income at 22% bracket</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-sm text-center">
                        <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-3" />
                        <h4 className="font-bold text-2xl mb-1" style={{ color: 'var(--color-navy)' }}>$4,400</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Tax saved on $100K income at 22% bracket</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-sm text-center">
                        <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-3" />
                        <h4 className="font-bold text-2xl mb-1" style={{ color: 'var(--color-navy)' }}>$7,200</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Tax saved on $150K income at 24% bracket</p>
                    </div>
                </div>

                <h2>Tips to Maximize Your QBI Deduction in 2026</h2>
                <ul className="list-none pl-0 space-y-4 my-8 not-prose">
                    <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="block text-gray-900 dark:text-gray-100 mb-1">Maximize W-2 Wages (For S-Corps)</strong>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">If your QBI is limited by the W-2 wage limitation, consider optimizing your salary to boost the deduction.</span>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="block text-gray-900 dark:text-gray-100 mb-1">Keep Taxable Income Below SSTB Thresholds</strong>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">If you&apos;re in a specified service business, consider retirement contributions or other deductions to stay under the phaseout range.</span>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="block text-gray-900 dark:text-gray-100 mb-1">Consider Entity Restructuring</strong>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">Separating service and non-service components of your business into different entities may allow the non-service portion to qualify for QBI.</span>
                        </div>
                    </li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                    The permanent 20% QBI deduction is a landmark victory for small business owners. Whether you&apos;re a freelance developer, a real estate investor, or a local retail owner operating through an LLC, this deduction can save you thousands every year—forever. Make sure you&apos;re taking full advantage in 2026.
                </p>

                <hr className="my-10 border-gray-200 dark:border-gray-800" />

                <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl text-center not-prose">
                    <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--color-navy)' }}>Want to Maximize Your Tax Savings?</h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-400">
                        Use our free calculators to estimate your QBI deduction and optimize your LLC&apos;s tax strategy for 2026.
                    </p>
                    <Link href="/calculators" className="btn-primary py-3 px-8 text-sm w-full sm:w-auto shadow-xl inline-block">
                        Try Our Free Calculators
                    </Link>
                </div>
            </div>

            <RelatedArticles currentSlug="2026-tax-changes-20-percent-qbi-deduction-permanent" />
        </article>
    );
}
