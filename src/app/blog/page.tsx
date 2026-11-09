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
        <div className="fn-shell fn-news-page py-5 sm:py-7">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }]} />
            <div className="fn-inner-intro">
                <span className="fn-card-topic">News &amp; guides</span>
                <h1 className="text-3xl sm:text-5xl font-black mb-4" style={{ color: 'var(--color-text)' }}>Mortgage & Finance Resources</h1>
                <p className="text-base sm:text-xl max-w-3xl" style={{ color: 'var(--color-text-muted)' }}>
                    Practical guides on home buying, mortgage calculations, refinancing, and personal finance—designed for everyday Americans in 2026.
                </p>
            </div>

            <BlogDirectory posts={POSTS} />

            {/* SEO-rich calculator links */}
            <div className="fn-news-utility mt-10 p-5 sm:p-8 text-center">
                <h2 className="text-2xl font-black mb-4 text-navy-900">Run Your Own Numbers</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Test your own assumptions with free mortgage and housing calculators. No account required.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                    {[
                        ['Mortgage Calculator', '/calculators/mortgage'],
                        ['Affordability Calc', '/calculators/affordability'],
                        ['Refinance Calc', '/calculators/refinance'],
                        ['Rent vs Buy', '/calculators/rent-vs-buy'],
                    ].map(([label, href]) => (
                        <Link key={href} href={href} className="fn-card font-bold py-3 px-3">
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
