import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Mortgage & Finance Resources Blog | USFinNexus',
    description: 'Free guides on mortgage calculations, home buying, refinancing, and personal finance for Americans.',
};

const POSTS = [
    { slug: 'usa-people-search-finance', title: 'USA People Search: Find Lost Money Daily', date: 'Feb 2026', category: 'Personal Finance', readTime: '6 min' },
    { slug: 'free-mortgage-calculator-2026-pdf', title: 'Best Free Mortgage Calculator 2026 with PDF Download', date: 'Feb 2026', category: 'Mortgage', readTime: '5 min' },
    { slug: 'how-much-house-can-i-afford-2026', title: 'How Much House Can I Afford in 2026?', date: 'Feb 2026', category: 'Affordability', readTime: '7 min' },
    { slug: 'mortgage-amortization-schedule-guide', title: 'How to Read a Mortgage Amortization Schedule', date: 'Feb 2026', category: 'Education', readTime: '6 min' },
    { slug: 'should-i-refinance-2026', title: 'Should You Refinance in 2026? Calculator + Break-Even Guide', date: 'Feb 2026', category: 'Refinance', readTime: '8 min' },
    { slug: 'pmi-explained-avoid-cancel', title: 'PMI Explained: How to Avoid, Calculate, and Cancel It', date: 'Feb 2026', category: 'Mortgage', readTime: '6 min' },
];

const CATEGORIES = ['All', 'Mortgage', 'Affordability', 'Refinance', 'Education'];

export default function BlogPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }]} />
            <div className="mb-10">
                <h1 className="text-3xl font-black mb-3" style={{ color: 'var(--color-text)' }}>Mortgage & Finance Resources</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    Free guides on home buying, mortgage calculations, refinancing, and personal finance — written for everyday Americans.
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {CATEGORIES.map(c => (
                    <button key={c} className={`px-4 py-2 min-h-[36px] rounded-lg text-xs font-semibold border transition-all ${c === 'All' ? 'text-white border-transparent' : 'border-current'}`}
                        style={{ background: c === 'All' ? 'var(--color-navy)' : 'transparent', color: c === 'All' ? 'white' : 'var(--color-text-muted)' }}>
                        {c}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {POSTS.map(post => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="card p-6 cursor-pointer hover:-translate-y-1 transition-all duration-200 block no-underline">
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-bold mb-3" style={{ background: 'rgba(0,200,83,0.12)', color: '#00C853' }}>
                            {post.category}
                        </span>
                        <h2 className="font-bold text-base mb-2 leading-snug" style={{ color: 'var(--color-text)' }}>
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
            <div className="mt-12 card p-6">
                <h2 className="font-bold mb-4" style={{ color: 'var(--color-text)' }}>Free Calculator Tools</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
