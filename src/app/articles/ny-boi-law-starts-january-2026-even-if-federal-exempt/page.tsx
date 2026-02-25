import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, AlertTriangle, CheckCircle2, ShieldAlert, Info } from 'lucide-react';
import RelatedArticles from '@/components/RelatedArticles';

export const metadata: Metadata = {
    title: 'NY BOI Law Starts January 2026 — Even If Federal BOI Is Exempt',
    description: 'New York marches ahead with its own transparency framework regardless of federal changes. Learn what the NY LLC Transparency Act means for your business.',
};

export default function ArticlePage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-12 md:py-20 lg:px-8">
            <Link href="/articles" className="inline-flex items-center text-sm mb-8 hover:text-blue-600 transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
            </Link>

            <header className="mb-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-block px-3 py-1 rounded bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
                        State Compliance
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Updated: February 25, 2026</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight" style={{ color: 'var(--color-text)' }}>
                    NY BOI Law Starts January 2026 — Even If Federal BOI Is Exempt
                </h1>

                <p className="text-xl leading-relaxed mb-8" style={{ color: 'var(--color-text-muted)' }}>
                    New York marches ahead with its own transparency framework regardless of federal changes. The NY LLC Transparency Act (NYLLCTA) demands beneficial ownership disclosures from every LLC formed or operating in the state, even if your business qualifies for the federal domestic exemption.
                </p>

                <div className="flex items-center gap-4 border-t border-b py-4 border-gray-200 dark:border-gray-800">
                    <div className="flex-1 flex gap-4 text-sm font-medium">
                        <div className="flex flex-col">
                            <span style={{ color: 'var(--color-text-muted)' }}>Written by</span>
                            <span style={{ color: 'var(--color-text)' }}>USFinNexus Compliance Team</span>
                        </div>
                        <div className="flex flex-col border-l pl-4 border-gray-200 dark:border-gray-800">
                            <span style={{ color: 'var(--color-text-muted)' }}>Reading Time</span>
                            <span style={{ color: 'var(--color-text)' }}>6 minutes</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500">
                <figure className="my-10">
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
                        <Image src="/images/ny-boi-law.png" alt="New York City skyline with compliance documents overlay" fill className="object-cover" priority />
                    </div>
                    <figcaption className="text-center text-sm mt-3 text-gray-500 dark:text-gray-400">New York is leading the charge on state-level beneficial ownership transparency.</figcaption>
                </figure>

                <h2>Why New York Didn&apos;t Wait for Washington</h2>
                <p>
                    When the federal government rolled back BOI requirements for domestic companies in early 2025, New York legislators saw an opportunity—and a risk. The state, home to one of the world&apos;s largest financial centers, was not willing to let the federal retreat create a loophole for illicit capital flows through New York LLCs.
                </p>
                <p>
                    Governor Kathy Hochul signed the <strong>New York LLC Transparency Act</strong> into law in late 2024, with an effective date of <strong>January 1, 2026</strong>. The law mirrors much of the original federal CTA framework but operates entirely under state jurisdiction.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                    <div className="flex items-start gap-4">
                        <Info className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 m-0 mb-2">Key Dates</h3>
                            <ul className="m-0 pl-5 text-blue-800 dark:text-blue-200 space-y-2 text-sm">
                                <li><strong>January 1, 2026:</strong> The NYLLCTA takes full effect.</li>
                                <li><strong>New LLCs:</strong> Must file within 30 days of formation.</li>
                                <li><strong>Existing LLCs:</strong> Must file within the first year (by December 31, 2026).</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2>Who Must File Under the NYLLCTA?</h2>
                <p>
                    The law casts a wide net. <strong>Every LLC</strong> that is formed under the laws of New York, or registered to do business in New York as a foreign LLC, is required to file beneficial ownership information with the New York Department of State.
                </p>
                <p>
                    This includes:
                </p>
                <ul>
                    <li>Single-member LLCs used by freelancers and consultants.</li>
                    <li>Multi-member LLCs used for real estate investment.</li>
                    <li>Foreign LLCs registered in New York (e.g., a Delaware LLC with a New York office).</li>
                    <li>Series LLCs if their series are individually registered in New York.</li>
                </ul>

                <h2>What Information Is Required?</h2>
                <p>The filing requires disclosure of:</p>
                <ul>
                    <li>Full legal names of all beneficial owners (those with 25%+ ownership or &quot;substantial control&quot;).</li>
                    <li>Residential addresses (no P.O. Boxes).</li>
                    <li>Dates of birth.</li>
                    <li>The LLC&apos;s principal business address.</li>
                </ul>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
                    <div className="flex items-start gap-4">
                        <ShieldAlert className="w-6 h-6 text-yellow-600 mt-1 shrink-0" />
                        <div>
                            <p className="font-bold text-yellow-900 dark:text-yellow-300 m-0 mb-2">Privacy Concern</p>
                            <p className="text-yellow-800 dark:text-yellow-200 m-0 text-sm">
                                Unlike the federal BOI system (which stored data in a confidential FinCEN database), New York&apos;s database is accessible to law enforcement and certain regulatory agencies, raising privacy concerns for business owners.
                            </p>
                        </div>
                    </div>
                </div>

                <h2>Penalties for Non-Compliance</h2>
                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-6 my-8">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-red-600 mt-1 shrink-0" />
                        <div>
                            <p className="font-bold text-red-900 dark:text-red-300 m-0 mb-2">LLC Suspension Risk</p>
                            <p className="text-red-800 dark:text-red-200 m-0 text-sm">
                                The most severe consequence is the potential <strong>suspension or cancellation</strong> of your LLC&apos;s authorization to conduct business in New York. This effectively means you cannot enforce contracts, file lawsuits, or operate legally until compliance is restored.
                            </p>
                        </div>
                    </div>
                </div>

                <h2>Your Action Plan</h2>
                <ul className="list-none pl-0 space-y-4 my-8 not-prose">
                    <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="block text-gray-900 dark:text-gray-100 mb-1">File Proactively</strong>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">Don&apos;t wait until December 2026. File your NYLLCTA disclosure as soon as possible to avoid last-minute issues.</span>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="block text-gray-900 dark:text-gray-100 mb-1">Keep Ownership Records Updated</strong>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">Any ownership changes during 2026 must be reflected in an updated filing.</span>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="block text-gray-900 dark:text-gray-100 mb-1">Consult NY-Specific Legal Counsel</strong>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">The NYLLCTA has nuances that differ from the old federal CTA. A New York business attorney can ensure full compliance.</span>
                        </div>
                    </li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                    Even if you celebrated the federal BOI exemption, if your LLC touches New York in any way, you have a brand-new state obligation in 2026. The NYLLCTA is real, enforceable, and carries meaningful consequences. Take action now.
                </p>

                <hr className="my-10 border-gray-200 dark:border-gray-800" />

                <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl text-center not-prose">
                    <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--color-navy)' }}>Operating an LLC in New York?</h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-400">
                        Let our compliance specialists handle your NYLLCTA filing so you can focus on running your business.
                    </p>
                    <button className="btn-primary py-3 px-8 text-sm w-full sm:w-auto shadow-xl">
                        File My NY Disclosure
                    </button>
                </div>
            </div>

            <RelatedArticles currentSlug="ny-boi-law-starts-january-2026-even-if-federal-exempt" />
        </article>
    );
}
