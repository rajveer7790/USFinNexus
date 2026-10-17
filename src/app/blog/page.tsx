import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getAllBlogPosts } from '@/lib/blogs';
import BlogDirectory from '@/components/BlogDirectory';

export const metadata: Metadata = {
    title: 'Mortgage, Housing Market & Finance Blog',
    description: 'Free guides on mortgage rates, housing market trends, homeowner tax deductions, home buying programs, and personal finance - written for everyday Americans in 2026.',
    alternates: { canonical: 'https://usfinnexus.com/blog' },
    openGraph: { title: 'Mortgage, Housing Market & Finance Blog', description: 'Free guides on mortgage rates, housing market trends, and personal finance for everyday Americans.', url: 'https://usfinnexus.com/blog', type: 'website', siteName: 'USFinNexus' },
};

export default function BlogPage() {
    const POSTS = getAllBlogPosts();
    return (
        <div className="max-w-6xl mx-auto px-4 py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }]} />
            <div className="mb-8 sm:mb-12 text-center sm:text-left">
                <h1 className="text-3xl sm:text-5xl font-black mb-4" style={{ color: 'var(--color-text)' }}>Mortgage & Finance Resources</h1>
                <p className="text-base sm:text-xl max-w-3xl" style={{ color: 'var(--color-text-muted)' }}>
                    Practical guides on home buying, mortgage calculations, refinancing, and personal finance—designed for everyday Americans in 2026.
                </p>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl text-left">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p className="text-xs font-black uppercase tracking-wider text-blue-700">Answer first</p><p className="mt-1 text-sm text-slate-600">Check the decision, assumptions and source before acting.</p></div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p className="text-xs font-black uppercase tracking-wider text-blue-700">Reviewed dates</p><p className="mt-1 text-sm text-slate-600">Time-sensitive tax, rates and benefit pages show when facts were checked.</p></div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p className="text-xs font-black uppercase tracking-wider text-blue-700">Use the math</p><p className="mt-1 text-sm text-slate-600">Open a calculator beside the guide and test your own numbers.</p></div>
                </div>
            </div>

            <BlogDirectory posts={POSTS} />

            {/* SEO-rich calculator links */}
            <div className="mt-12 sm:mt-16 bg-blue-50 rounded-3xl p-6 sm:p-10 border border-blue-100 text-center">
                <h2 className="text-2xl font-black mb-4 text-navy-900">Run Your Own Numbers</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Stop guessing and start planning. Use our suite of free, zero-data-collection financial calculators to make the smartest money moves in 2026.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                    {[
                        ['Mortgage Calculator', '/calculators/mortgage'],
                        ['Affordability Calc', '/calculators/affordability'],
                        ['Refinance Calc', '/calculators/refinance'],
                        ['Rent vs Buy', '/calculators/rent-vs-buy'],
                    ].map(([label, href]) => (
                        <Link key={String(href)} href={String(href)} className="bg-white text-navy-900 font-bold py-3 px-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm">
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
