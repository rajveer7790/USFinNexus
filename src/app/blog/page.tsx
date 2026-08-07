import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Mortgage & Personal Finance Guides | USFinNexus',
    description: 'Read USFinNexus guides on mortgages, home buying, refinancing, taxes, loans, retirement and personal finance. Time-sensitive claims are reviewed against primary sources where applicable.',
    alternates: { canonical: 'https://usfinnexus.com/blog' },
    openGraph: {
        title: 'Mortgage & Personal Finance Guides | USFinNexus',
        description: 'Mortgage, home buying, tax, loan and personal-finance guides with transparent source standards.',
        url: 'https://usfinnexus.com/blog',
        type: 'website',
        siteName: 'USFinNexus',
    },
};

const IMG = {
    housing: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mortgage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    taxes: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    investing: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    retirement: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    auto: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    finance: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
};

const CUSTOM_IMAGES: Record<string, string> = {
    'trump-accounts-2026-guide': '/images/trump-accounts-2026.webp',
    'trump-account-vs-529-plan': '/images/trump-account-vs-529.webp',
    'car-loan-interest-tax-deduction-2026': '/images/car-loan-interest-tax-deduction-2026.webp',
    'no-tax-on-overtime-deduction-2026': '/images/no-tax-on-overtime-2026.webp',
    '401k-contribution-limits-2026': '/images/401k-contribution-limits-2026.webp',
    'federal-student-loan-interest-rates-2026-27': '/images/federal-student-loan-interest-rates-2026-27.webp',
    'roth-ira-income-limits-2026': '/images/roth-ira-income-limits-2026.webp',
    'social-security-earnings-test-2026': '/images/social-security-earnings-test-2026.webp',
    'irs-standard-mileage-rate-2026': '/images/irs-standard-mileage-rate-2026.webp',
    'medicare-irmaa-brackets-2026': '/images/medicare-irmaa-brackets-2026.webp',
    'no-tax-on-tips-deduction-2026': '/images/no-tax-on-tips-deduction-2026.webp',
    'child-tax-credit-2026': '/images/child-tax-credit-2026.webp',
    '2026-federal-tax-brackets-standard-deduction': '/images/2026-federal-tax-brackets-standard-deduction.webp',
    'hsa-contribution-limits-2026': '/images/hsa-contribution-limits-2026.webp',
    'salt-deduction-limit-2026': '/images/salt-deduction-limit-2026.webp',
    'aca-premium-tax-credit-2026': '/images/aca-premium-tax-credit-2026.webp',
};

function categoryForSlug(slug: string) {
    if (slug.includes('student-loan')) return 'Education';
    if (slug.includes('tax') || slug.includes('mileage-rate')) return 'Taxes';
    if (slug.includes('invest') || slug.includes('stock') || slug.includes('bond')) return 'Investing';
    if (slug.includes('retire') || slug.includes('401k') || slug.includes('ira') || slug.includes('fire') || slug.includes('medicare')) return 'Retirement';
    if (slug.includes('auto') || slug.includes('car')) return 'Auto Loans';
    if (slug.includes('mortgage') || slug.includes('refinance') || slug.includes('fha') || slug.includes('va') || slug.includes('loan')) return 'Mortgage';
    if (slug.includes('home') || slug.includes('housing') || slug.includes('real-estate')) return 'Housing';
    return 'Personal Finance';
}

function imageForCategory(category: string) {
    if (category === 'Mortgage') return IMG.mortgage;
    if (category === 'Taxes') return IMG.taxes;
    if (category === 'Investing') return IMG.investing;
    if (category === 'Retirement') return IMG.retirement;
    if (category === 'Auto Loans') return IMG.auto;
    if (category === 'Housing') return IMG.housing;
    return IMG.finance;
}

function getBlogPosts() {
    try {
        const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
        return fs.readdirSync(blogDir, { withFileTypes: true })
            .filter((entry) => entry.isDirectory())
            .map((entry) => {
                const slug = entry.name;
                const pagePath = path.join(blogDir, slug, 'page.tsx');
                if (!fs.existsSync(pagePath)) return null;
                const content = fs.readFileSync(pagePath, 'utf8');

                const rawTitle = content.match(/title:\s*['"](.*?)['"]/)?.[1];
                const title = (rawTitle || slug.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()))
                    .replace(/\s*\|\s*USFinNexus.*$/i, '');

                const category = categoryForSlug(slug);
                const published = content.match(/datePublished=["'](\d{4}-\d{2}-\d{2})["']/)?.[1]
                    || content.match(/datePublished:\s*["'](\d{4}-\d{2}-\d{2})["']/)?.[1];
                const dateISO = published || '2026-01-01';
                const date = new Date(`${dateISO}T12:00:00Z`).toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
                });

                return {
                    slug,
                    title,
                    category,
                    dateISO,
                    date,
                    image: CUSTOM_IMAGES[slug] || imageForCategory(category),
                };
            })
            .filter((post): post is NonNullable<typeof post> => Boolean(post))
            .sort((a, b) => b.dateISO.localeCompare(a.dateISO) || a.title.localeCompare(b.title));
    } catch {
        return [];
    }
}

const POSTS = getBlogPosts();

export default function BlogPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-7 sm:py-10">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }]} />
            <header className="mb-9 sm:mb-12 max-w-4xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Research & education</p>
                <h1 className="text-3xl sm:text-5xl font-black mb-4">Mortgage &amp; Personal Finance Guides</h1>
                <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                    Guides on mortgages, home buying, taxes, loans, retirement and personal finance. For year-specific rules and limits, we prefer primary U.S. government sources and show the applicable year rather than treating old information as current.
                </p>
                <div className="flex flex-wrap gap-4 mt-5 text-sm">
                    <Link href="/editorial-guidelines" className="font-bold text-blue-700 hover:underline">Editorial guidelines</Link>
                    <Link href="/methodology" className="font-bold text-blue-700 hover:underline">Methodology &amp; sources</Link>
                    <Link href="/calculators" className="font-bold text-blue-700 hover:underline">Financial calculators</Link>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {POSTS.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 no-underline hover:-translate-y-1">
                        <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                            <Image src={post.image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="mb-3"><span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">{post.category}</span></div>
                            <h2 className="font-bold text-lg sm:text-xl mb-3 leading-snug group-hover:text-blue-600 transition-colors">{post.title}</h2>
                            <div className="mt-auto text-sm font-medium text-gray-500"><time dateTime={post.dateISO}>{post.date}</time></div>
                        </div>
                    </Link>
                ))}
            </div>

            <section className="mt-12 sm:mt-16 bg-blue-50 rounded-3xl p-6 sm:p-10 border border-blue-100 text-center">
                <h2 className="text-2xl font-black mb-3 text-navy-900">Run the Numbers</h2>
                <p className="text-gray-600 mb-7 max-w-2xl mx-auto">Use a calculator for the mathematical scenario, then use the related guide to understand assumptions, limitations and source context.</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
                    {[
                        ['Mortgage Calculator', '/calculators/mortgage'],
                        ['Home Affordability', '/calculators/affordability'],
                        ['Refinance Calculator', '/calculators/refinance'],
                        ['Debt-to-Income Ratio', '/calculators/dti'],
                    ].map(([label, href]) => (
                        <Link key={href} href={href} className="bg-white text-navy-900 font-bold py-3 px-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm">{label}</Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
