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
    '/calculators/rental-property': 0.82,
    '/calculators/comparison': 0.80,
    '/calculators/personal-loan': 0.80,
    '/calculators/retirement': 0.80,
    '/calculators/investment': 0.80,
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
};

// All blog posts with their publish dates
const BLOG_POSTS: Array<{ slug: string; date: string }> = [
    // May 2026
    { slug: 'commercial-real-estate-reset-2026', date: '2026-05-05' },
    { slug: 'crypto-tax-guide-2026', date: '2026-05-05' },
    { slug: 'fractional-real-estate-investing-2026', date: '2026-05-04' },
    { slug: 'high-yield-checking-accounts-2026', date: '2026-05-04' },
    { slug: 'coast-fire-vs-barista-fire-2026', date: '2026-05-03' },
    { slug: 'direct-indexing-tax-loss-harvesting-2026', date: '2026-05-03' },
    { slug: 'silver-tsunami-housing-shift-2026', date: '2026-05-02' },
    { slug: 'short-term-rental-regulations-2026', date: '2026-05-02' },
    { slug: 'mega-backdoor-roth-ira-guide-2026', date: '2026-05-01' },
    { slug: 'investing-during-geopolitical-conflict-2026', date: '2026-05-01' },
    { slug: 'defense-cybersecurity-stocks-2026', date: '2026-05-01' },
    { slug: 'global-conflict-real-estate-impact-2026', date: '2026-05-01' },
    { slug: 'energy-market-investing-crisis-2026', date: '2026-05-01' },
    { slug: 'safe-yields-bonds-treasuries-2026', date: '2026-05-01' },
    { slug: 'dividend-vs-growth-investing-2026', date: '2026-05-01' },
    { slug: 'ai-personal-finance-investing-2026', date: '2026-05-01' },
    { slug: 'house-hacking-guide-2026', date: '2026-05-01' },
    { slug: 'high-yield-savings-vs-index-funds-2026', date: '2026-05-01' },
    { slug: 'top-sunbelt-real-estate-markets-2026', date: '2026-05-01' },
    // April 2026
    { slug: 'spring-2026-housing-market-forecast', date: '2026-04-20' },
    { slug: 'tariffs-housing-market-impact-2026', date: '2026-04-18' },
    { slug: 'homeowner-tax-deductions-2026', date: '2026-04-15' },
    { slug: 'first-time-home-buyer-programs-2026', date: '2026-04-12' },
    { slug: '30-year-vs-15-year-mortgage-2026', date: '2026-04-10' },
    { slug: 'tcja-tax-sunset-2026-mortgage-impact', date: '2026-04-08' },
    { slug: 'fed-rates-unchanged-april-2026', date: '2026-04-07' },
    { slug: 'mortgage-help-guide-2026', date: '2026-04-05' },
    { slug: 'adjustable-rate-mortgage-trends-2026', date: '2026-04-03' },
    // March 2026
    { slug: 'usa-people-search-finance', date: '2026-03-15' },
    // February 2026
    { slug: 'free-mortgage-calculator-2026-pdf', date: '2026-02-25' },
    { slug: 'how-much-house-can-i-afford-2026', date: '2026-02-20' },
    { slug: 'should-i-refinance-2026', date: '2026-02-18' },
    { slug: 'pmi-explained-avoid-cancel', date: '2026-02-15' },
    { slug: 'mortgage-amortization-schedule-guide', date: '2026-02-10' },
];

function parseArticleDate(dateStr: string): Date {
    return new Date(dateStr);
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://usfinnexus.com';

    // 1. Core Static Pages
    const corePages = [
        { route: '', priority: 1.0, lastMod: '2026-05-14' },
        { route: '/calculators', priority: 0.90, lastMod: '2026-05-01' },
        { route: '/blog', priority: 0.85, lastMod: '2026-05-05' },
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
    const calculators = Object.keys(CALC_PRIORITY).map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date('2026-05-01'),
        changeFrequency: 'monthly' as const,
        priority: CALC_PRIORITY[route],
    }));

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

    // 5. Blog Posts — all 34 posts with real publish dates
    const blogPosts = BLOG_POSTS.map(({ slug, date }) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(date),
        changeFrequency: 'monthly' as const,
        priority: 0.80,
    }));

    return [...corePages, ...calculators, ...articles, ...guidePages, ...blogPosts];
}
