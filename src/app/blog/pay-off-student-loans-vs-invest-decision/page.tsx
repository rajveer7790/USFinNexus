import type { Metadata } from 'next';
import Link from 'next/link';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import AuthorBio, { USFinNexusEditorialTeam } from '@/components/AuthorBio';
import RelatedCalculators from '@/components/RelatedCalculators';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleSchema from '@/components/ArticleSchema';
export const metadata: Metadata = { title: "Should You Pay Off Student Loans or Invest? The Math | Guide", description: 'Calculate whether to aggressively pay off student loans or invest the money. Run both scenarios.', openGraph: { title: 'Should You Pay Off Student Loans or Invest? The Math', description: 'Calculate whether to aggressively pay off student loans or invest the money. Run both scenarios.', url: 'https://usfinnexus.com/blog/pay-off-student-loans-vs-invest-decision', type: 'article', siteName: 'USFinNexus' }, alternates: { canonical: 'https://usfinnexus.com/blog/pay-off-student-loans-vs-invest-decision' } };
export default function PostComponent() { return (<><ArticleSchema title="Should You Pay Off Student Loans or Invest? The Math" description="Calculate whether to aggressively pay off student loans or invest the money. Run both scenarios." url="https://usfinnexus.com/blog/pay-off-student-loans-vs-invest-decision" datePublished="2026-05-15" dateModified="2026-05-15" authorName="USFinNexus Editorial Team" keywords={['finance']} /><div className="max-w-4xl mx-auto px-4 py-7"><Breadcrumbs items={[{ name: 'Blog', item: '/blog' }]} /><article className="prose prose-slate max-w-none"><h1 className="text-4xl font-black mb-6">Should You Pay Off Student Loans or Invest? The Math</h1><p className="text-xl mb-8">Calculate whether to aggressively pay off student loans or invest the money. Run both scenarios.</p><h2 className="text-2xl font-bold mt-8 mb-4">Should You Pay Off Student Loans or Invest the Money?</h2><p>Learn more with <Link href="https://usfinnexus.com" className="text-blue-600">free calculators</Link>.</p></article><ContextualInternalLinks currentSlug="pay-off-student-loans-vs-invest-decision" showBlogs showCalculators />




                <AuthorBio author={USFinNexusEditorialTeam} /></div></> ); }
