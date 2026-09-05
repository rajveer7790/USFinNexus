import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio, { USFinNexusEditorialTeam } from '@/components/AuthorBio';
import RelatedCalculators from '@/components/RelatedCalculators';
import RelatedArticles from '@/components/RelatedArticles';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleSchema from '@/components/ArticleSchema';

export const metadata: Metadata = {
    title: "TCJA Tax Sunset 2026: What It Means For Your Mortgage | Guide",
    description: 'The Tax Cuts and Jobs Act (TCJA) is set to sunset in 2026. Learn how the return of previous tax brackets and deduction limits could impact your mortgage and home affordability.',
    openGraph: {
        title: 'TCJA Tax Sunset 2026: What It Means For Your Mortgage',
        description: 'How the sunsetting of the TCJA affects mortgage interest deductions, the SALT cap, standard deduction, and home affordability.',
        url: 'https://usfinnexus.com/blog/tcja-tax-sunset-2026-mortgage-impact',
        type: 'article',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'TCJA Tax Sunset 2026 Mortgage Impact – USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TCJA Tax Sunset 2026: What It Means For Your Mortgage',
        description: 'How the sunsetting of the TCJA affects mortgage interest deductions, the SALT cap, standard deduction, and home affordability.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
    alternates: {
        canonical: 'https://usfinnexus.com/blog/tcja-tax-sunset-2026-mortgage-impact',
    },
};

export default function TCJASunsetBlog() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: 'What TCJA provisions are expiring in 2026?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'The major TCJA provisions expiring at the end of 2025 (taking effect for the 2026 tax year) include: the nearly doubled standard deduction reverting from $30,000 (married filing jointly) to approximately $16,500; the $10,000 SALT (state and local tax) deduction cap being lifted entirely; the mortgage interest deduction loan limit returning from $750,000 to $1,000,000; the 20% pass-through business income deduction (Section 199A) expiring; the Child Tax Credit reverting from $2,000 to $1,000 per child; and individual income tax brackets returning to pre-2018 rates (with the top rate going from 37% back to 39.6%). The AMT exemption amounts will also revert to lower pre-TCJA levels, pulling more middle-class taxpayers into the Alternative Minimum Tax.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'How does the TCJA sunset affect the mortgage interest deduction?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Under TCJA (2018-2025), homeowners could only deduct mortgage interest on up to $750,000 of loan principal. After the sunset, the cap reverts to $1,000,000 for mortgages on your primary and secondary residence. This is a major benefit for buyers in high-cost markets (California, New York, Washington DC) who often carry loans above $750k. Additionally, the sunset reinstates the deduction for home equity loan interest up to $100,000 regardless of how the money was spent—under TCJA, equity debt had to be used specifically for home improvements. The most significant effect is indirect: because the standard deduction will roughly halve, far more homeowners will find it beneficial to itemize, making the mortgage interest deduction meaningful again for millions who were previously taking the standard deduction.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'Will the SALT cap be removed in 2026?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'If the TCJA sunsets without congressional extension or replacement legislation, yes—the $10,000 SALT (state and local tax) deduction cap will be removed, and taxpayers can once again deduct their full state income taxes plus property taxes on Schedule A. This is enormously valuable for homeowners in high-tax states like California (where state income tax can exceed 13%), New York, New Jersey, Illinois, and Massachusetts. A homeowner in New York City paying $18,000 in property taxes and $20,000 in state/local income taxes could reclaim the ability to deduct the full $38,000, potentially saving $10,000+ in federal taxes annually depending on their marginal bracket.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'Should I refinance my mortgage before the TCJA expires?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'The TCJA sunset itself is not a reason to refinance—refinancing decisions should be driven by interest rate differentials and break-even analysis, not tax law changes. However, the sunset does change the calculus for itemizing deductions post-close. If you currently have a mortgage above $750,000 taken out after 2017, you are deducting interest only on $750k of principal under TCJA. Post-sunset, you could deduct interest on the full $1M limit (if your loan is under that), giving you greater tax benefit on your existing mortgage. For homeowners considering a cash-out refinance to consolidate high-interest debt, the post-sunset rules restoring home equity interest deductibility make that strategy more attractive. Consult a tax professional for your specific situation.',
                        },
                    },
                ],
            }) }} />
            <ArticleSchema
                title="TCJA Tax Sunset 2026: What It Means For Your Mortgage"
                description="How the sunsetting of the TCJA affects mortgage interest deductions and home affordability."
                url="https://usfinnexus.com/blog/tcja-tax-sunset-2026-mortgage-impact"
                datePublished="2026-05-10"
                dateModified="2026-05-14"
                authorName="USFinNexus Editorial Team"
                keywords={['TCJA sunset 2026', 'mortgage interest deduction 2026', 'SALT deduction cap', 'home affordability taxes', 'standard deduction 2026']}
            />
            <div className="max-w-3xl mx-auto px-4 py-7 sm:py-9">
                <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: 'Taxes & Real Estate', item: '/blog/tcja-tax-sunset-2026-mortgage-impact' }]} />
                <article className="prose prose-slate max-w-none">
                    <header className="mb-10">
                        <span className="inline-block px-3 py-1 rounded text-xs font-bold mb-4" style={{ background: 'rgba(13, 166, 242, 0.1)', color: '#0da6f2' }}>Tax Policy & Housing</span>
                        <h1 className="text-2xl md:text-4xl font-black mb-6 leading-tight text-slate-900">TCJA Tax Sunset 2026: What It Means For Your Mortgage</h1>
                        <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
                            <span>By {USFinNexusEditorialTeam.name}</span>
                            <span>·</span>
                            <span>May 14, 2026</span>
                            <span>·</span>
                            <span>10 min read</span>
                        </div>
                    </header>
                    <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-slate-900 flex items-center justify-center min-h-[300px] bg-gradient-to-r from-blue-600 to-indigo-800">
                        <h2 className="text-white text-3xl font-black text-center px-4">The 2026 Tax Landscape Shift</h2>
                    </div>
                    <div className="prose max-w-none text-slate-800">
                        <p className="lead text-lg font-medium mb-8 text-slate-600">
                            The sweeping tax changes introduced by the Tax Cuts and Jobs Act (TCJA) of 2017 are scheduled to &quot;sunset&quot; at the end of 2025. For American homeowners and prospective buyers in 2026, this means a seismic shift in how mortgages, property taxes, and home equity are treated come tax season. The stakes are enormous: depending on your income, home value, and state of residence, your effective federal tax bill could increase or decrease by thousands of dollars annually.
                        </p>

                        <h2 className="text-2xl font-bold mt-12 mb-4">What Is the TCJA Sunset? A Plain-Language Explainer</h2>
                        <p className="mb-4">
                            The Tax Cuts and Jobs Act was signed into law in December 2017 and represented the most comprehensive overhaul of the US tax code in three decades. To comply with Senate budget reconciliation rules, most of the individual tax provisions were written with a built-in expiration date: December 31, 2025. Unless Congress passes legislation to extend or replace them, these provisions automatically expire and the tax code reverts to its pre-2018 state beginning January 1, 2026.
                        </p>
                        <p className="mb-4">
                            As of May 2026, Congress has not yet passed a comprehensive extension—though negotiations are ongoing. This means millions of Americans are potentially facing their first full tax year under the reverted, pre-TCJA rules.
                        </p>

                        <h2 className="text-2xl font-bold mt-12 mb-4">How Does the Standard Deduction Change for Homeowners?</h2>
                        <p className="mb-4">
                            The TCJA&apos;s most impactful change was nearly doubling the standard deduction. Here are the approximate figures as they stand and where they revert:
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="text-left p-3 border border-slate-200 font-bold">Filing Status</th>
                                        <th className="text-right p-3 border border-slate-200 font-bold">2025 (Under TCJA)</th>
                                        <th className="text-right p-3 border border-slate-200 font-bold">2026 (Post-Sunset, Projected)</th>
                                        <th className="text-right p-3 border border-slate-200 font-bold">Reduction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border border-slate-200">Married Filing Jointly</td>
                                        <td className="p-3 border border-slate-200 text-right font-mono">$30,000</td>
                                        <td className="p-3 border border-slate-200 text-right font-mono">~$16,500</td>
                                        <td className="p-3 border border-slate-200 text-right text-red-600 font-bold">-$13,500</td>
                                    </tr>
                                    <tr className="bg-slate-50">
                                        <td className="p-3 border border-slate-200">Single / MFS</td>
                                        <td className="p-3 border border-slate-200 text-right font-mono">$15,000</td>
                                        <td className="p-3 border border-slate-200 text-right font-mono">~$8,250</td>
                                        <td className="p-3 border border-slate-200 text-right text-red-600 font-bold">-$6,750</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-200">Head of Household</td>
                                        <td className="p-3 border border-slate-200 text-right font-mono">$22,500</td>
                                        <td className="p-3 border border-slate-200 text-right font-mono">~$12,150</td>
                                        <td className="p-3 border border-slate-200 text-right text-red-600 font-bold">-$10,350</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mb-4">
                            This single change triggers a cascade effect for homeowners. Under TCJA, the vast majority of homeowners—even those with sizable mortgages—found the standard deduction exceeded their potential itemized deductions, so they simply took the standard deduction. Post-sunset, with the standard deduction roughly halving, millions more homeowners will find that their combined mortgage interest + property taxes + state income taxes exceed the standard deduction threshold, making itemizing worthwhile again.
                        </p>

                        <h2 className="text-2xl font-bold mt-12 mb-4">What Happens to the Mortgage Interest Deduction With the Return to a $1 Million Cap?</h2>
                        <p className="mb-4">
                            Under TCJA, the mortgage interest deduction was limited to loans up to $750,000 in principal. Post-sunset, the cap reverts to $1,000,000. Here is what this means in practice:
                        </p>
                        <ul className="mb-6">
                            <li><strong>Loans under $750k:</strong> No change in deductible interest—you were already covered under both regimes.</li>
                            <li><strong>Loans between $750k and $1M (originated after 2017):</strong> Post-sunset, you can now deduct interest on the full balance, not just the first $750k. This could be worth $1,500–$3,000+ annually depending on your rate.</li>
                            <li><strong>Pre-2018 loans up to $1M:</strong> Were already grandfathered under TCJA. Post-sunset, the grandfather clause becomes moot and the $1M limit applies universally.</li>
                            <li><strong>Home equity loan interest:</strong> Post-sunset restores deductibility of up to $100,000 in home equity debt for any purpose (TCJA restricted this to home improvement use only).</li>
                        </ul>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                            <h3 className="text-lg font-bold mb-3 text-blue-900">Real-World Example: $600,000 Mortgage at 6.5%</h3>
                            <p className="text-sm mb-4 text-slate-700">Consider a married couple in New Jersey with a $600,000 mortgage at 6.5%, $15,000 in annual property taxes, and $22,000 in state/local income taxes:</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-blue-100">
                                            <th className="text-left p-2 border border-blue-200">Item</th>
                                            <th className="text-right p-2 border border-blue-200">2025 (TCJA)</th>
                                            <th className="text-right p-2 border border-blue-200">2026 (Post-Sunset)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-800">
                                        <tr>
                                            <td className="p-2 border border-blue-200">Mortgage interest (year 1 ~)</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">$38,700</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">$38,700</td>
                                        </tr>
                                        <tr className="bg-blue-50/50">
                                            <td className="p-2 border border-blue-200">Property taxes (SALT cap applies)</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">$10,000 (capped)</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">$15,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border border-blue-200">State income taxes (SALT cap)</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">$0 (over cap)</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">$22,000</td>
                                        </tr>
                                        <tr className="bg-blue-50/50 font-bold">
                                            <td className="p-2 border border-blue-200">Total potential itemized deductions</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">$48,700</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">$75,700</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border border-blue-200">Standard deduction (MFJ)</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">$30,000</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">$16,500</td>
                                        </tr>
                                        <tr className="bg-green-50 font-bold text-green-800">
                                            <td className="p-2 border border-blue-200">Benefit of itemizing (vs. standard)</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">+$18,700</td>
                                            <td className="p-2 border border-blue-200 text-right font-mono">+$59,200</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-slate-500 mt-3">This couple&apos;s incremental tax deduction benefit from itemizing grows from $18,700 to $59,200—a $40,500 increase. At a 24% marginal rate, that is roughly $9,700 in additional annual federal tax savings.</p>
                        </div>

                        <h2 className="text-2xl font-bold mt-12 mb-4">How Does the SALT Cap Expiration Benefit CA, NY, and NJ Homeowners?</h2>
                        <p className="mb-4">
                            The $10,000 SALT (state and local tax) deduction cap was one of the most bitterly contested provisions of the TCJA. It disproportionately punished high-income homeowners in high-tax blue states—effectively a stealth tax increase on residents of California, New York, New Jersey, Illinois, Connecticut, and Massachusetts.
                        </p>
                        <p className="mb-4">
                            Post-sunset, the cap disappears entirely. Homeowners in these states can once again deduct their full property taxes plus state and local income taxes on Schedule A. The savings can be dramatic:
                        </p>
                        <ul className="mb-6">
                            <li>A New York City homeowner paying $25,000 in property taxes + $30,000 in state/city income taxes was previously limited to deducting $10,000 total. Post-sunset, they could potentially deduct the full $55,000, saving roughly $13,200 annually at a 24% federal rate.</li>
                            <li>A California homeowner with $18,000 in property taxes and $45,000 in state income taxes jumps from a $10,000 SALT deduction to a potential $63,000 deduction—a staggering change that dramatically improves the math of homeownership in high-cost California markets.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-12 mb-4">Will the AMT Trap More Middle-Class Households?</h2>
                        <p className="mb-4">
                            One of the less-discussed consequences of the TCJA sunset is the reversion of Alternative Minimum Tax (AMT) exemption amounts. The TCJA dramatically increased AMT exemptions, effectively removing tens of millions of middle and upper-middle-class households from AMT exposure.
                        </p>
                        <p className="mb-4">
                            Post-sunset, the AMT exemption returns to lower pre-2018 levels (approximately $55,400 for singles and $86,200 for married filing jointly, versus the TCJA levels of ~$85,700 and ~$133,300 respectively). The AMT phase-out thresholds also drop sharply. This means:
                        </p>
                        <ul className="mb-6">
                            <li>Households with incomes of $200,000–$500,000 who were removed from AMT under TCJA may find themselves subject to it again in 2026.</li>
                            <li>The AMT disallows many common deductions—including the SALT deduction. So even homeowners who regain significant SALT deductions post-sunset may find the AMT limits their actual benefit.</li>
                            <li>Stock option holders, homeowners in expensive markets, and high-income earners with large deductions should model their 2026 AMT exposure with a tax professional immediately.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-12 mb-4">What Happens to the Pass-Through Business Deduction and Child Tax Credit?</h2>
                        <p className="mb-4">
                            Two other TCJA provisions expiring have indirect relevance to homeowners and families:
                        </p>
                        <p className="mb-4">
                            <strong>Section 199A Pass-Through Deduction (20% QBI Deduction):</strong> Self-employed individuals and owners of S-corps, LLCs, and partnerships have been deducting 20% of qualified business income under this provision. Post-sunset, this deduction disappears—effectively a significant tax increase on the self-employed. For real estate investors holding properties in pass-through entities (LLCs), this has direct cash flow implications.
                        </p>
                        <p className="mb-4">
                            <strong>Child Tax Credit:</strong> Reverts from $2,000 per child (TCJA) back to $1,000 per child, with lower phase-out thresholds. For families with two or three children, this alone represents $2,000–$3,000 in annual tax increases, directly reducing the discretionary income available for housing costs.
                        </p>

                        <h2 className="text-2xl font-bold mt-12 mb-4">What Should Homeowners Do Now in 2026?</h2>

                        <h3 className="text-xl font-bold mt-8 mb-3">1. How Do You Model Your Itemized Deductions Under Both Scenarios?</h3>
                        <p className="mb-4">
                            Use a tax planning tool or work with your accountant to calculate your 2026 federal tax under both regimes. Calculate your total mortgage interest, property taxes, state income taxes, charitable contributions, and other itemizable expenses. Compare this total to the post-sunset standard deduction. If you are materially above the standard deduction threshold, begin organizing and maximizing your itemized deductions now.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-3">2. Should You Consider Accelerating Deductions Into 2025?</h3>
                        <p className="mb-4">
                            If the TCJA is NOT extended (still uncertain as of this writing), and you expect to be in a higher tax bracket in 2026 due to reverted rates, there may be strategies to accelerate income into 2025 (when TCJA rates still apply) or defer deductions to 2026 (when they may be more valuable). For example, if you are considering a large charitable donation, waiting until 2026—when itemizing becomes more beneficial—could maximize the deduction&apos;s tax impact.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-3">3. Should You Evaluate Roth Conversion Opportunities?</h3>
                        <p className="mb-4">
                            The TCJA&apos;s lower tax brackets represent a closing window for Roth conversions. Converting traditional IRA or 401(k) balances to a Roth IRA while TCJA rates still apply (or were recently in effect) can lock in lower tax rates on those funds permanently. For homeowners with significant home equity who plan to downsize or sell, this strategy can be especially powerful for managing the tax impact of capital gains.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-3">4. What Is the Best Refinancing Strategy?</h3>
                        <p className="mb-4">
                            The sunset does not directly change the economics of refinancing—your break-even point is still driven by rate savings versus closing costs. However, if you have a mortgage above $750,000 originated after 2017, the post-sunset rules removing the $750k cap mean you will have more deductible interest going forward. Factor this into your total cost-of-ownership calculations when deciding whether to refinance, move, or stay put. Use the USFinNexus mortgage calculator below to model your exact scenario.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-3">5. Why Should You Watch Legislative Developments Closely?</h3>
                        <p className="mb-4">
                            Congress may yet extend some or all TCJA provisions. The political dynamics are complex: extending all provisions would add an estimated $4+ trillion to the deficit over 10 years. As of May 2026, various compromise proposals circulate including permanent extension of lower brackets but allowing the SALT cap to lapse, or extending the standard deduction increase while retaining the $750k MID cap. Any of these outcomes would materially change the analysis above. Sign up for tax alerts and check back here for updates.
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="text-lg font-bold mb-2">Calculate Your 2026 Reality</h3>
                            <p className="mb-4">Don&apos;t guess how these changes affect you. Use our free tools to project your numbers:</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/calculators/income-tax" className="inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition">
                                    2026 Income Tax Calculator
                                </Link>
                                <Link href="/calculators/mortgage" className="inline-flex justify-center items-center px-4 py-2 border border-slate-300 rounded font-bold hover:bg-slate-100 transition">
                                    Mortgage Calculator
                                </Link>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mt-12 mb-4">What Is the Bottom Line?</h2>
                        <p className="mb-4">
                            The TCJA sunset is one of the most consequential tax events for American homeowners in nearly a decade. The near-halving of the standard deduction alone will push millions of homeowners back into itemizing territory, where their mortgage interest, property taxes, and state income taxes suddenly become powerful tax weapons again. For homeowners in high-tax coastal states, the elimination of the SALT cap is potentially worth tens of thousands of dollars annually.
                        </p>
                        <p className="mb-4">
                            At the same time, the reversion of AMT exemptions, the loss of the pass-through deduction, and the reduction in the Child Tax Credit will create pain points for many households. The winners and losers from the TCJA sunset depend heavily on individual circumstances—income level, state of residence, mortgage size, and business ownership status.
                        </p>
                        <p className="mb-4">
                            The math for &quot;Rent vs. Buy&quot; fundamentally changes when you can deduct a massive property tax bill and interest on a $1M mortgage. If you are buying a home or refinancing in 2026, you need to factor these tax changes into your true cost of ownership. Consult with a tax professional, and use CFPB-compliant calculators to run your numbers under both the current and post-sunset scenarios.
                        </p>
                    </div>

                <hr className="my-12 border-gray-200" />



                <AuthorBio author={USFinNexusEditorialTeam} updatedDate="May 14, 2026" />
                </article>
            </div>
            <RelatedCalculators exclude={['income-tax']} limit={4} title="Relevant Calculators" />
            <RelatedArticles currentSlug="tcja-tax-sunset-2026-mortgage-impact" category="Taxes" />
        </>
    );
}
