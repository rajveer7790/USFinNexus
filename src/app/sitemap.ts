import { MetadataRoute } from 'next';
import { ALL_ARTICLES } from '@/lib/articles';
import { ALL_GUIDES } from '@/lib/guides';

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
    '/calculators/comparison': 0.80,
    '/calculators/personal-loan': 0.80,
    '/calculators/points-buydown': 0.78,
    '/calculators/interest-only': 0.78,
    '/calculators/retirement': 0.80,
    '/calculators/investment': 0.80,
    '/calculators/student-loan': 0.78,
    '/calculators/credit-card': 0.78,
    '/calculators/california': 0.75,
    '/calculators/texas': 0.75,
    '/calculators/florida': 0.75,
    '/calculators/fha': 0.75,
    '/calculators/va': 0.75,
};

function parseArticleDate(dateStr: string): Date {
    return new Date(dateStr);
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://usfinnexus.com';

    // 1. Core Static Pages
    const corePages = [
        { route: '', priority: 1.0 },
        { route: '/calculators', priority: 0.90 },
        { route: '/articles', priority: 0.85 },
        { route: '/blog', priority: 0.80 },
        { route: '/about', priority: 0.65 },
        { route: '/contact', priority: 0.60 },
        { route: '/methodology', priority: 0.60 },
        { route: '/privacy', priority: 0.50 },
        { route: '/terms', priority: 0.50 },
        { route: '/disclaimer', priority: 0.50 },
    ].map(({ route, priority }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date('2026-03-01'),
        changeFrequency: 'weekly' as const,
        priority,
    }));

    // 2. Financial Calculators (priority from CALC_PRIORITY map)
    const calculators = Object.keys(CALC_PRIORITY).map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date('2026-03-01'),
        changeFrequency: 'monthly' as const,
        priority: CALC_PRIORITY[route],
    }));

    // 3. Articles — use real publish dates from metadata
    const articles = ALL_ARTICLES.map((article) => ({
        url: `${baseUrl}/articles/${article.slug}`,
        lastModified: parseArticleDate(article.date),
        changeFrequency: 'weekly' as const,
        priority: 0.80,
    }));

    // 4. Guides
    const guidePages = [
        { route: '/guides', priority: 0.80 },
        ...ALL_GUIDES.map(g => ({ route: `/guides/${g.slug}`, priority: 0.75 })),
    ].map(({ route, priority }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date('2026-03-01'),
        changeFrequency: 'monthly' as const,
        priority,
    }));

    // 5. Blog Posts
    const blogPosts = [
        '/blog/usa-people-search-finance',
        '/blog/free-mortgage-calculator-2026-pdf',
        '/blog/how-much-house-can-i-afford-2026',
        '/blog/mortgage-amortization-schedule-guide',
        '/blog/should-i-refinance-2026',
        '/blog/pmi-explained-avoid-cancel',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date('2026-02-01'),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    return [...corePages, ...calculators, ...articles, ...guidePages, ...blogPosts];
}
