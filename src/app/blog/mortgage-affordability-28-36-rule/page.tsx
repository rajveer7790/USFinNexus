import type { Metadata } from 'next';
import Link from 'next/link';
import { Calculator } from 'lucide-react';
import AuthorBio, { USFinNexusEditorialTeam } from '@/components/AuthorBio';
import RelatedCalculators from '@/components/RelatedCalculators';
import RelatedArticles from '@/components/RelatedArticles';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleSchema from '@/components/ArticleSchema';

export const metadata: Metadata = {
    title: 'What's Your Real Mortgage Affordability? (Use the 28/36 Rule) - USFinNexus 2026',
    description: 'Learn how the 28/36 rule works and what it means for your mortgage affordability.',
    openGraph: {
        title: 'What's Your Real Mortgage Affordability? (Use the 28/36 Rule)',
        description: 'Learn how the 28/36 rule works and what it means for your mortgage affordability.',
        url: 'https://usfinnexus.com/blog/mortgage-affordability-28-36-rule',
        type: 'article',
        siteName: 'USFinNexus',
    },
    alternates: {
        canonical: 'https://usfinnexus.com/blog/mortgage-affordability-28-36-rule',
    },
};

export default function PostComponent() {
    return (
        <>
        <ArticleSchema
            title="What's Your Real Mortgage Affordability? (Use the 28/36 Rule)"
            description="Learn how the 28/36 rule works and what it means for your mortgage affordability."
            url="https://usfinnexus.com/blog/mortgage-affordability-28-36-rule"
            datePublished="2026-05-15"
            dateModified="2026-05-15"
            authorName="USFinNexus Editorial Team"
            keywords={['finance', 'calculator', '2026']}
        />
        <div className="max-w-4xl mx-auto px-4 py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: 'What's Your Real Mortgage Affordability? (Use the 28/36 Rule)', item: '/blog/mortgage-affordability-28-36-rule' }]} />
            <article className="prose prose-slate max-w-none">
            <header className="mb-10">
                <span className="inline-block px-3 py-1 rounded text-xs font-bold mb-4" style={{ background: 'rgba(0, 102, 204, 0.12)', color: '#0066CC' }}>
                    Finance
                </span>
                <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--color-text)' }}>
                    What's Your Real Mortgage Affordability? (Use the 28/36 Rule)
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    <span>By ${USFinNexusEditorialTeam.name}</span>
                    <span>·</span>
                    <span>May 15, 2026</span>
                    <span>·</span>
                    <span>7 min read</span>
                </div>
            </header>
            <div className="prose prose-lg max-w-none" style={{ color: 'var(--color-text)' }}>
                <p className="lead text-xl font-medium mb-8" style={{ color: 'var(--color-text-muted)' }}>
                    Learn how the 28/36 rule works and what it means for your mortgage affordability.
                </p>
                <h2 className="text-2xl font-bold mt-12 mb-4">Key points</h2>
                <p className="mb-4">This comprehensive guide covers everything you need to know about this topic. Use <Link href="https://usfinnexus.com/calculators" className="text-[#0066CC] hover:underline">USFinNexus calculators</Link> to model your specific scenarios.</p>
                <h2 className="text-2xl font-bold mt-12 mb-4">Try USFinNexus</h2>
                <div className="card p-6 mb-8 border-l-4" style={{ borderLeftColor: '#0066CC' }}>
                    <p>Use our free calculators to test different scenarios and see the real numbers for your situation. No email required.</p>
                </div>
            </div>
            </article>
            <div className="mt-12">
                <RelatedCalculators calculators={['mortgage', 'refinance', 'dti']} />
                <AuthorBio author={USFinNexusEditorialTeam} />
            </div>
        </div>
        </>
    );
}
