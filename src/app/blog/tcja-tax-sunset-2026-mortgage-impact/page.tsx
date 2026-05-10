import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio, { USFinNexusEditorialTeam } from '@/components/AuthorBio';
import RelatedCalculators from '@/components/RelatedCalculators';
import RelatedArticles from '@/components/RelatedArticles';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleSchema from '@/components/ArticleSchema';

export const metadata: Metadata = {
    title: 'TCJA Tax Sunset 2026: What It Means For Your Mortgage | USFinNexus',
    description: 'The Tax Cuts and Jobs Act (TCJA) is set to sunset in 2026. Learn how the return of previous tax brackets and deduction limits could impact your mortgage and home affordability.',
    openGraph: {
        title: 'TCJA Tax Sunset 2026: What It Means For Your Mortgage',
        description: 'How the sunsetting of the TCJA affects mortgage interest deductions and home affordability.',
        url: 'https://usfinnexus.com/blog/tcja-tax-sunset-2026-mortgage-impact',
        type: 'article',
    },
};

export default function TCJASunsetBlog() {
    return (
        <>
            <ArticleSchema 
                title="TCJA Tax Sunset 2026: What It Means For Your Mortgage" 
                description="How the sunsetting of the TCJA affects mortgage interest deductions and home affordability." 
                url="https://usfinnexus.com/blog/tcja-tax-sunset-2026-mortgage-impact" 
                datePublished="2026-05-10" 
                dateModified="2026-05-10" 
                authorName="USFinNexus Editorial Team" 
                keywords={['tcja sunset 2026', 'mortgage interest deduction 2026', 'home affordability taxes']} 
            />
            <div className="max-w-3xl mx-auto px-4 py-7 sm:py-9">
                <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: 'Taxes & Real Estate', item: '/blog/tcja-tax-sunset-2026-mortgage-impact' }]} />
                <article className="prose prose-slate max-w-none">
                    <header className="mb-10">
                        <span className="inline-block px-3 py-1 rounded text-xs font-bold mb-4" style={{ background: 'rgba(13, 166, 242, 0.1)', color: '#0da6f2' }}>Tax Policy & Housing</span>
                        <h1 className="text-2xl md:text-4xl font-black mb-6 leading-tight text-slate-900">TCJA Tax Sunset 2026: What It Means For Your Mortgage</h1>
                    </header>
                    <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-slate-900 flex items-center justify-center min-h-[300px] bg-gradient-to-r from-blue-600 to-indigo-800">
                        <h2 className="text-white text-3xl font-black text-center px-4">The 2026 Tax Landscape Shift</h2>
                    </div>
                    <div className="prose max-w-none text-slate-800">
                        <p className="lead text-lg font-medium mb-8 text-slate-600">
                            The sweeping tax changes introduced by the Tax Cuts and Jobs Act (TCJA) of 2017 are scheduled to "sunset" at the end of 2025. For American homeowners and prospective buyers in 2026, this means a significant shift in how mortgages are treated come tax season.
                        </p>

                        <h2 className="text-2xl font-bold mt-12 mb-4">The Return of the Old Mortgage Interest Deduction (MID)</h2>
                        <p>Under the TCJA, the standard deduction was nearly doubled, which led to a massive drop in the number of taxpayers who itemized their deductions. The limit on the mortgage interest deduction was also capped at $750,000 of mortgage debt.</p>
                        <p>If the TCJA sunsets without congressional intervention, the rules revert to their pre-2018 state:</p>
                        <ul>
                            <li><strong>Standard Deduction Drops:</strong> The standard deduction will roughly halve, meaning millions more homeowners will suddenly find it beneficial to itemize.</li>
                            <li><strong>MID Limit Increases:</strong> The cap on deductible mortgage debt will return to $1,000,000 (up from $750,000), a huge boon for buyers in high-cost-of-living (HCOL) areas.</li>
                            <li><strong>Home Equity Loan Interest:</strong> You will once again be able to deduct interest on up to $100,000 of home equity debt, regardless of what the money was used for (under TCJA, it had to be used for home improvements).</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-12 mb-4">State and Local Tax (SALT) Deduction Cap Expires</h2>
                        <p>Perhaps the most controversial part of the TCJA was capping the SALT deduction at $10,000. In states with high property and income taxes (like California, New York, and New Jersey), this significantly increased the true cost of homeownership.</p>
                        <p>With the sunset, the SALT cap disappears. Homeowners in these states will once again be able to fully deduct their hefty property taxes, potentially saving them thousands and making homeownership in these areas relatively more affordable.</p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="text-lg font-bold mb-2">Calculate Your 2026 Reality</h3>
                            <p className="mb-4">Don't guess how these changes affect you. Use our free tools to project your numbers:</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/calculators/income-tax" className="inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition">
                                    2026 Income Tax Calculator
                                </Link>
                                <Link href="/calculators/mortgage" className="inline-flex justify-center items-center px-4 py-2 border border-slate-300 rounded font-bold hover:bg-slate-100 transition">
                                    Mortgage Calculator
                                </Link>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mt-12 mb-4">What Should You Do Now?</h2>
                        <p>If you're buying a home or refinancing in 2026, you need to factor these tax changes into your true cost of ownership. The math for "Rent vs. Buy" fundamentally changes when you can deduct a massive property tax bill and interest on a $1M mortgage.</p>
                        <p>Consult with a tax professional, and use CFPB-compliant calculators to run your numbers under both the current and post-sunset scenarios.</p>
                    </div>
                    <AuthorBio author={USFinNexusEditorialTeam} updatedDate="May 10, 2026" />
                </article>
            </div>
            <RelatedCalculators exclude={['income-tax']} limit={4} title="Relevant Calculators" />
            <RelatedArticles currentSlug="tcja-tax-sunset-2026-mortgage-impact" category="Taxes" />
        </>
    );
}
