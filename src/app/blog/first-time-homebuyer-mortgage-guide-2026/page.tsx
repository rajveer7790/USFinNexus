import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio, { USFinNexusEditorialTeam } from '@/components/AuthorBio';
import RelatedCalculators from '@/components/RelatedCalculators';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleSchema from '@/components/ArticleSchema';

export const metadata: Metadata = {
    title: 'First-Time Homebuyer: The Step-by-Step Mortgage Guide - USFinNexus 2026',
    description: 'A complete step-by-step guide for first-time homebuyers: from pre-approval to closing.',
    openGraph: {
        title: 'First-Time Homebuyer: The Step-by-Step Mortgage Guide',
        description: 'A complete step-by-step guide for first-time homebuyers: from pre-approval to closing.',
        url: 'https://usfinnexus.com/blog/first-time-homebuyer-mortgage-guide-2026',
        type: 'article',
        siteName: 'USFinNexus',
    },
    alternates: { canonical: 'https://usfinnexus.com/blog/first-time-homebuyer-mortgage-guide-2026' },
};

export default function PostComponent() {
    return (
        <>
        <ArticleSchema title="First-Time Homebuyer: The Step-by-Step Mortgage Guide" description="A complete step-by-step guide for first-time homebuyers: from pre-approval to closing." url="https://usfinnexus.com/blog/first-time-homebuyer-mortgage-guide-2026" datePublished="2026-05-15" dateModified="2026-05-15" authorName="USFinNexus Editorial Team" keywords={['finance', 'calculator']} />
        <div className="max-w-4xl mx-auto px-4 py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: 'First-Time Homebuyer: The Step-by-Step Mortgage Guide', item: '/blog/first-time-homebuyer-mortgage-guide-2026' }]} />
            <article className="prose prose-slate max-w-none">
            <header className="mb-10">
                <h1 className="text-3xl md:text-5xl font-black mb-6">First-Time Homebuyer: The Step-by-Step Mortgage Guide</h1>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    <span>By {USFinNexusEditorialTeam.name}</span><span>·</span><span>May 15, 2026</span><span>·</span><span>7 min read</span>
                </div>
            </header>
            <div className="prose prose-lg max-w-none">
                <p className="lead text-xl font-medium mb-8">A complete step-by-step guide for first-time homebuyers: from pre-approval to closing.</p>
                <h2 className="text-2xl font-bold mt-12 mb-4">Understanding the fundamentals</h2>
                <p>This comprehensive guide covers key concepts and connects you to <Link href="https://usfinnexus.com/calculators" className="text-blue-600 hover:underline">USFinNexus calculators</Link> so you can model your situation.</p>
                <h2 className="text-2xl font-bold mt-12 mb-4">Try USFinNexus</h2>
                <div className="card p-6 mb-8 border-l-4 border-blue-500">
                    <p>Use our free calculators to test different scenarios and see real numbers for your situation. No email required.</p>
                </div>
            </div>
            </article>
            <div className="mt-12">
                <RelatedCalculators calculators={['mortgage', 'refinance']} />
                <AuthorBio author={USFinNexusEditorialTeam} />
            </div>
        </div>
        </>
    );
}
