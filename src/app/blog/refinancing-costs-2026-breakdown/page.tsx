import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio, { USFinNexusEditorialTeam } from '@/components/AuthorBio';
import RelatedCalculators from '@/components/RelatedCalculators';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleSchema from '@/components/ArticleSchema';

export const metadata: Metadata = { title: "Refinancing Costs: What You're Really Paying (2026 Data) - USFinNexus 2026", description: 'Refinancing costs 2-6% of your loan. Understand each fee and how to lower your costs.', openGraph: { title: "Refinancing Costs: What You're Really Paying (2026 Data)", description: 'Refinancing costs 2-6% of your loan. Understand each fee and how to lower your costs.', url: 'https://usfinnexus.com/blog/refinancing-costs-2026-breakdown', type: 'article', siteName: 'USFinNexus' }, alternates: { canonical: 'https://usfinnexus.com/blog/refinancing-costs-2026-breakdown' } };

export default function PostComponent() {
    return (<>
        <ArticleSchema title="Refinancing Costs: What You're Really Paying (2026 Data)" description="Refinancing costs 2-6% of your loan. Understand each fee and how to lower your costs." url="https://usfinnexus.com/blog/refinancing-costs-2026-breakdown" datePublished="2026-05-15" dateModified="2026-05-15" authorName="USFinNexus Editorial Team" keywords={['finance']} />
        <div className="max-w-4xl mx-auto px-4 py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: "Refinancing Costs: What You're Really Paying (2026 Data)", item: '/blog/refinancing-costs-2026-breakdown' }]} />
            <article className="prose prose-slate max-w-none">
                <header className="mb-10"><h1 className="text-4xl font-black mb-6">Refinancing Costs: What You're Really Paying (2026 Data)</h1><div className="text-sm text-gray-600"><span>By {USFinNexusEditorialTeam.name}</span><span> · </span><span>May 2026</span></div></header>
                <div className="prose-lg"><p className="lead text-xl mb-8">Refinancing costs 2-6% of your loan. Understand each fee and how to lower your costs.</p><h2 className="text-2xl font-bold mt-12 mb-4">Overview</h2><p>This guide covers the key concepts and connects you to <Link href="https://usfinnexus.com" className="text-blue-600">USFinNexus tools</Link> to help you make informed decisions.</p><h2 className="text-2xl font-bold mt-12 mb-4">Try USFinNexus</h2><div className="bg-blue-50 p-6 mb-8 border-l-4 border-blue-500"><p>Use our free calculators to model scenarios specific to your situation.</p></div></div>
            </article>
            <div className="mt-12"><RelatedCalculators /><AuthorBio author={USFinNexusEditorialTeam} /></div>
        </div>
    </>);
}
