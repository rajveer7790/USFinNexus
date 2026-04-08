import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Mortgage, Housing Market & Finance Blog | USFinNexus',
    description: 'Free guides on mortgage rates, housing market trends, homeowner tax deductions, home buying programs, and personal finance — written for everyday Americans in 2026.',
    alternates: { canonical: 'https://usfinnexus.com/blog' },
};

const POSTS = [
    { slug: 'spring-2026-housing-market-forecast', title: 'Spring 2026 Housing Market Forecast: Rates, Prices & What Buyers Should Expect', date: 'Apr 2026', category: 'Market Analysis', readTime: '10 min' },
    { slug: 'tariffs-housing-market-impact-2026', title: 'How Tariffs Are Raising Home Prices in 2026 (And What You Can Do)', date: 'Apr 2026', category: 'Housing Market', readTime: '9 min' },
    { slug: 'homeowner-tax-deductions-2026', title: 'Every Homeowner Tax Deduction You Can Claim in 2026', date: 'Apr 2026', category: 'Taxes', readTime: '10 min' },
    { slug: 'first-time-home-buyer-programs-2026', title: 'First-Time Home Buyer Programs 2026: Every Grant, Loan & Assistance Available', date: 'Apr 2026', category: 'Home Buying', readTime: '11 min' },
    { slug: '30-year-vs-15-year-mortgage-2026', title: '30-Year vs 15-Year Mortgage in 2026: Which Saves You More?', date: 'Apr 2026', category: 'Mortgage', readTime: '8 min' },
    { slug: 'usa-people-search-finance', title: 'How to Find Unclaimed Money in the USA (2026 Guide)', date: 'Mar 2026', category: 'Personal Finance', readTime: '8 min' },
    { slug: 'free-mortgage-calculator-2026-pdf', title: 'Best Free Mortgage Calculator 2026 with PDF Download', date: 'Feb 2026', category: 'Mortgage', readTime: '5 min' },
    { slug: 'how-much-house-can-i-afford-2026', title: 'How Much House Can I Afford in 2026?', date: 'Feb 2026', category: 'Affordability', readTime: '7 min' },
    { slug: 'should-i-refinance-2026', title: 'Should You Refinance in 2026? Calculator + Break-Even Guide', date: 'Feb 2026', category: 'Refinance', readTime: '8 min' },
    { slug: 'pmi-explained-avoid-cancel', title: 'PMI Explained: How to Avoid, Calculate, and Cancel It', date: 'Feb 2026', category: 'Mortgage', readTime: '6 min' },
    { slug: 'mortgage-amortization-schedule-guide', title: 'How to Read a Mortgage Amortization Schedule', date: 'Feb 2026', category: 'Education', readTime: '6 min' },
];

const CATEGORIES = ['All', 'Market Analysis', 'Housing Market', 'Taxes', 'Home Buying', 'Mortgage', 'Affordability', 'Refinance', 'Education', 'Personal Finance'];

export default function BlogPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }]} />
            <div className="mb-6 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl font-black mb-2 sm:mb-3" style={{ color: 'var(--color-text)' }}>Mortgage & Finance Resources</h1>
                <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-muted)' }}>
                    Free guides on home buying, mortgage calculations, refinancing, and personal finance — written for everyday Americans.
                </p>
            </div>

            <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                {CATEGORIES.map(c => (
                    <button key={c} className={`px-3 sm:px-4 py-1.5 sm:py-2 min-h-[32px] sm:min-h-[36px] rounded-lg text-xs font-semibold border transition-all whitespace-nowrap flex-shrink-0 ${c === 'All' ? 'text-white border-transparent' : 'border-current'}`}
                        style={{ background: c === 'All' ? 'var(--color-navy)' : 'transparent', color: c === 'All' ? 'white' : 'var(--color-text-muted)' }}>
                        {c}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {POSTS.map(post => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="card p-4 sm:p-6 cursor-pointer hover:-translate-y-1 transition-all duration-200 block no-underline">
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-bold mb-2 sm:mb-3" style={{ background: 'rgba(0,200,83,0.12)', color: '#00C853' }}>
                            {post.category}
                        </span>
                        <h2 className="font-bold text-sm sm:text-base mb-2 leading-snug" style={{ color: 'var(--color-text)' }}>
                            {post.title}
                        </h2>
                        <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime} read</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* SEO-rich calculator links */}
            <div className="mt-8 sm:mt-12 card p-4 sm:p-6">
                <h2 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Free Calculator Tools</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {[
                        ['Mortgage Calculator', '/calculators/mortgage'],
                        ['Affordability Calc', '/calculators/affordability'],
                        ['Refinance Calc', '/calculators/refinance'],
                        ['Rent vs Buy', '/calculators/rent-vs-buy'],
                    ].map(([label, href]) => (
                        <Link key={String(href)} href={String(href)} className="btn-outline text-center text-xs py-2">
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
