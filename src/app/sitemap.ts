import { MetadataRoute } from 'next';
import { ALL_ARTICLES } from '@/lib/articles';
import { ALL_GUIDES } from '@/lib/guides';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';
// Production content release: July 31, 2026.
// Priority tiers for calculators
const CALC_PRIORITY: Record<string, number> = {
    '/calculators/mortgage': 0.95,
    '/calculators/affordability': 0.95,
    '/calculators/refinance': 0.95,
    '/calculators/rent-vs-buy': 0.90,
    '/calculators/closing-costs': 0.90,
    '/calculators/dti': 0.90,
    '/calculators/amortization': 0.88,
    '/calculators/arm': 0.85,
    '/calculators/fha-va-usda': 0.85,
    '/calculators/debt-payoff': 0.85,
    '/calculators/budget': 0.85,
    '/calculators/income-tax': 0.85,
    '/calculators/down-payment': 0.82,
    '/calculators/heloc': 0.82,
    '/calculators/auto-loan': 0.82,
    '/calculators/rental-property': 0.82,
    '/calculators/comparison': 0.80,
    '/calculators/personal-loan': 0.80,
    '/calculators/retirement': 0.80,
    '/calculators/investment': 0.80,
    '/calculators/trump-account': 0.90,
    '/calculators/fire-planner': 0.80,
    '/calculators/points-buydown': 0.78,
    '/calculators/interest-only': 0.78,
    '/calculators/student-loan': 0.78,
    '/calculators/credit-card': 0.78,
    '/calculators/drip': 0.78,
    '/calculators/crypto-tax': 0.78,
    '/calculators/california': 0.75,
    '/calculators/texas': 0.75,
    '/calculators/florida': 0.75,
    '/calculators/fha': 0.75,
    '/calculators/va': 0.75,
    '/calculators/options-profit': 0.75,
    '/canada/mortgage-calculator': 0.90,
};

// Dynamically read all blog post folders
function getBlogPosts() {
    try {
        const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
        const entries = fs.readdirSync(blogDir, { withFileTypes: true });
        
        return entries
            .filter(dirent => dirent.isDirectory())
            .map(dirent => {
                const pagePath = path.join(blogDir, dirent.name, 'page.tsx');
                let lastMod = new Date('2026-05-18'); // Default to recent
                if (fs.existsSync(pagePath)) {
                    const stats = fs.statSync(pagePath);
                    lastMod = stats.mtime;
                }
                return {
                    slug: dirent.name,
                    date: lastMod.toISOString().split('T')[0]
                };
            });
    } catch (e) {
        console.error('Error reading blog directory for sitemap:', e);
        return [];
    }
}

const BLOG_POSTS = getBlogPosts();

function parseArticleDate(dateStr: string): Date {
    return new Date(dateStr);
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://usfinnexus.com';

    // 1. Core Static Pages
    const corePages = [
        { route: '', priority: 1.0, lastMod: '2026-05-14' },
        { route: '/calculators', priority: 0.90, lastMod: '2026-07-26' },
        { route: '/canada', priority: 0.90, lastMod: '2026-07-26' },
        { route: '/blog', priority: 0.85, lastMod: '2026-07-31' },
        { route: '/guides', priority: 0.80, lastMod: '2026-03-01' },
        { route: '/articles', priority: 0.75, lastMod: '2026-03-01' },
        { route: '/about', priority: 0.65, lastMod: '2026-03-01' },
        { route: '/methodology', priority: 0.65, lastMod: '2026-03-01' },
        { route: '/contact', priority: 0.60, lastMod: '2026-03-01' },
        { route: '/disclaimer', priority: 0.55, lastMod: '2026-03-01' },
        { route: '/privacy', priority: 0.50, lastMod: '2026-03-01' },
        { route: '/terms', priority: 0.50, lastMod: '2026-03-01' },
    ].map(({ route, priority, lastMod }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(lastMod),
        changeFrequency: 'weekly' as const,
        priority,
    }));

    // 2. Financial Calculators (priority from CALC_PRIORITY map)
    const calculators = Object.keys(CALC_PRIORITY).map((route) => {
        let lastMod = new Date('2026-05-01');
        try {
            const pagePath = path.join(process.cwd(), 'src', 'app', route, 'page.tsx');
            if (fs.existsSync(pagePath)) {
                const stats = fs.statSync(pagePath);
                lastMod = stats.mtime;
            }
        } catch (e) {
            // Ignore errors
        }
        return {
            url: `${baseUrl}${route}`,
            lastModified: lastMod,
            changeFrequency: 'weekly' as const,
            priority: CALC_PRIORITY[route],
        };
    });

    // 3. Articles - use real publish dates from metadata
    const articles = ALL_ARTICLES.map((article) => ({
        url: `${baseUrl}/articles/${article.slug}`,
        lastModified: parseArticleDate(article.date),
        changeFrequency: 'weekly' as const,
        priority: 0.70,
    }));

    // 4. Guides
    const guidePages = ALL_GUIDES.map(g => ({
        url: `${baseUrl}/guides/${g.slug}`,
        lastModified: new Date('2026-03-01'),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    // 5. Blog Posts
    const blogPosts = BLOG_POSTS.map(({ slug, date }) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(date),
        changeFrequency: 'monthly' as const,
        priority: 0.80,
    }));

    return [...corePages, ...calculators, ...articles, ...guidePages, ...blogPosts];
}
