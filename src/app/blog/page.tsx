import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CANONICALIZED_ALIASES } from '@/lib/blogs';

export const metadata: Metadata = {
    title: 'Mortgage, Housing Market & Finance Blog',
    description: 'Free guides on mortgage rates, housing market trends, homeowner tax deductions, home buying programs, and personal finance - written for everyday Americans in 2026.',
    alternates: { canonical: 'https://usfinnexus.com/blog' },
    openGraph: { title: 'Mortgage, Housing Market & Finance Blog', description: 'Free guides on mortgage rates, housing market trends, and personal finance for everyday Americans.', url: 'https://usfinnexus.com/blog', type: 'website', siteName: 'USFinNexus' },
};

// Image mappings based on category for placeholder automation
const IMG = {
    housing: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mortgage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    taxes: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    investing: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    retirement: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    auto: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    finance: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
};

import fs from 'fs';
import path from 'path';

// Dynamically generate the POSTS array to guarantee 100% SEO indexability
function getBlogPosts() {
    try {
        const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
        const entries = fs.readdirSync(blogDir, { withFileTypes: true });
        
        const posts = [];
        let thinPosts = [];

        for (const dirent of entries) {
            if (!dirent.isDirectory() || CANONICALIZED_ALIASES.has(dirent.name)) continue;
            const slug = dirent.name;
            
            const pagePath = path.join(blogDir, slug, 'page.tsx');
            if (!fs.existsSync(pagePath)) continue;
            
            const content = fs.readFileSync(pagePath, 'utf8');
            
            // --- AUDIT VERIFICATION: Word Count Check ---
            const textOnly = content.replace(/<[^>]+>/g, ' ').replace(/import.*?['"]/g, '');
            const wordCount = textOnly.split(/\s+/).filter(w => w.length > 1).length;
            if (wordCount < 1000) {
                thinPosts.push(`${slug} (${wordCount} words)`);
            }

            // --- SEO FIX: Extract Metadata ---
            let title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            const titleMatch = content.match(/title:\s*(['"])(.*?)\1/);
            if (titleMatch && titleMatch[2]) {
                title = titleMatch[2].replace(' | USFinNexus', '');
            }
            
            let category = 'Personal Finance';
            if (slug.includes('student-loan')) category = 'Education';
            else if (slug.includes('mortgage') || slug.includes('refinance') || slug.includes('fha') || slug.includes('va') || slug.includes('loan')) category = 'Mortgage';
            else if (slug.includes('tax') || slug.includes('mileage-rate')) category = 'Taxes';
            else if (slug.includes('invest') || slug.includes('stock') || slug.includes('bond')) category = 'Investing';
            else if (slug.includes('retire') || slug.includes('401k') || slug.includes('ira') || slug.includes('fire') || slug.includes('medicare') || slug.includes('savers-credit') || slug.includes('required-minimum')) category = 'Retirement';
            else if (slug.includes('auto') || slug.includes('car')) category = 'Auto Loans';
            else if (slug.includes('home') || slug.includes('housing') || slug.includes('real-estate')) category = 'Housing Market';
            
            let image = IMG.finance;
            if (category === 'Mortgage') image = IMG.mortgage;
            else if (category === 'Taxes') image = IMG.taxes;
            else if (category === 'Investing') image = IMG.investing;
            else if (category === 'Retirement') image = IMG.retirement;
            else if (category === 'Auto Loans') image = IMG.auto;
            else if (category === 'Housing Market') image = IMG.housing;
            
            // Prefer the editorial publish date embedded in ArticleSchema.
            const stats = fs.statSync(pagePath);
            const publishedMatch = content.match(/datePublished=["'](\d{4}-\d{2}-\d{2})["']/);
            const dateISO = publishedMatch?.[1] || stats.mtime.toISOString().split('T')[0];
            const dateStr = new Date(dateISO + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

            if (slug === 'trump-accounts-2026-guide') image = '/images/trump-accounts-2026.webp';
            if (slug === 'trump-account-vs-529-plan') image = '/images/trump-account-vs-529.webp';
            if (slug === 'car-loan-interest-tax-deduction-2026') image = '/images/car-loan-interest-tax-deduction-2026.webp';
            if (slug === 'no-tax-on-overtime-deduction-2026') image = '/images/no-tax-on-overtime-2026.webp';
            if (slug === '401k-contribution-limits-2026') image = '/images/401k-contribution-limits-2026.webp';
            if (slug === 'federal-student-loan-interest-rates-2026-27') image = '/images/federal-student-loan-interest-rates-2026-27.webp';
            if (slug === 'roth-ira-income-limits-2026') image = '/images/roth-ira-income-limits-2026.webp';
            if (slug === 'social-security-earnings-test-2026') image = '/images/social-security-earnings-test-2026.webp';
            if (slug === 'irs-standard-mileage-rate-2026') image = '/images/irs-standard-mileage-rate-2026.webp';
            if (slug === 'medicare-irmaa-brackets-2026') image = '/images/medicare-irmaa-brackets-2026.webp';
            if (slug === 'no-tax-on-tips-deduction-2026') image = '/images/no-tax-on-tips-deduction-2026.webp';
            if (slug === 'child-tax-credit-2026') image = '/images/child-tax-credit-2026.webp';
            if (slug === '2026-federal-tax-brackets-standard-deduction') image = '/images/2026-federal-tax-brackets-standard-deduction.webp';
            if (slug === 'hsa-contribution-limits-2026') image = '/images/hsa-contribution-limits-2026.webp';
            if (slug === 'salt-deduction-limit-2026') image = '/images/salt-deduction-limit-2026.webp';
            if (slug === 'aca-premium-tax-credit-2026') image = '/images/aca-premium-tax-credit-2026.webp';
            if (slug === 'capital-gains-tax-rates-2026') image = '/images/capital-gains-tax-rates-2026.webp';
            if (slug === 'earned-income-tax-credit-2026') image = '/images/earned-income-tax-credit-2026.webp';
            if (slug === 'savers-credit-2026') image = '/images/savers-credit-2026.webp';
            if (slug === 'required-minimum-distributions-2026') image = '/images/required-minimum-distributions-2026.webp';

            posts.push({ slug, title, date: dateStr, dateISO, category, readTime: '10 min', image });
        }

        // Output audit results to the console for the dev team
        console.log(`\n\n🔍 SEO CRAWL AUDIT (Blog Index):`);
        console.log(`✅ Dynamically injected ${posts.length} blog posts into the index page.`);
        if (thinPosts.length > 0) {
            console.log(`⚠️ FOUND ${thinPosts.length} THIN POSTS (< 1,000 words):`);
            thinPosts.forEach(p => console.log(`   - ${p}`));
            try { fs.writeFileSync('e:/UsFinNexus/thin_posts.json', JSON.stringify(thinPosts, null, 2)); } catch(e){}
        } else {
            console.log(`✅ VERIFIED: All ${posts.length} posts are heavily expanded (No thin content detected!)`);
            try { fs.writeFileSync('e:/UsFinNexus/thin_posts.json', JSON.stringify([], null, 2)); } catch(e){}
        }
        console.log(`\n\n`);

        return posts.sort((a, b) => b.dateISO.localeCompare(a.dateISO) || a.title.localeCompare(b.title));
    } catch (e) {
        console.error('Failed to dynamically load blog posts:', e);
        return [];
    }
}

const POSTS = getBlogPosts();

const CATEGORIES = ['All', 'Housing Market', 'Real Estate Investment', 'Mortgage', 'Home Buying', 'Affordability', 'Refinance', 'Taxes', 'Investing', 'Bonds & Fixed Income', 'Retirement', 'FinTech', 'Banking', 'Credit Cards', 'Personal Finance', 'Auto Loans', 'Education'];

export default function BlogPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }]} />
            <div className="mb-8 sm:mb-12 text-center sm:text-left">
                <h1 className="text-3xl sm:text-5xl font-black mb-4" style={{ color: 'var(--color-text)' }}>Mortgage & Finance Resources</h1>
                <p className="text-base sm:text-xl max-w-3xl" style={{ color: 'var(--color-text-muted)' }}>
                    Free, expert-written guides on home buying, mortgage calculations, refinancing, and personal finance—designed for everyday Americans in 2026.
                </p>
            </div>

            <div className="flex gap-2 mb-8 sm:mb-12 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                {CATEGORIES.map(c => (
                    <button key={c} className={`px-4 py-2 min-h-[44px] rounded-full text-sm font-semibold border transition-all whitespace-nowrap flex-shrink-0 ${c === 'All' ? 'text-white border-transparent shadow-md' : 'border-gray-200 hover:border-blue-500 hover:text-blue-600'}`}
                        style={{ background: c === 'All' ? 'var(--color-navy)' : 'white', color: c === 'All' ? 'white' : 'var(--color-text-muted)' }}>
                        {c}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {POSTS.map(post => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 no-underline hover:-translate-y-1">
                        <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                            <Image 
                                src={post.image}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="mb-3">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ background: 'rgba(0,102,204,0.1)', color: '#0066CC' }}>
                                    {post.category}
                                </span>
                            </div>
                            <h2 className="font-bold text-lg sm:text-xl mb-3 leading-snug group-hover:text-blue-600 transition-colors" style={{ color: 'var(--color-text)' }}>
                                {post.title}
                            </h2>
                            <div className="mt-auto flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                <span>{post.date}</span>
                                <span>·</span>
                                <span>{post.readTime} read</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

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
