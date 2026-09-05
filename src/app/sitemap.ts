import { MetadataRoute } from 'next';
import { ALL_ARTICLES } from '@/lib/articles';
import { ALL_GUIDES } from '@/lib/guides';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const CALC_PRIORITY: Record<string, number> = {
    '/calculators/mortgage': 0.95,
    '/calculators/affordability': 0.95,
    '/calculators/refinance': 0.95,
    '/calculators/rent-vs-buy': 0.90,
    '/calculators/closing-costs': 0.90,
    '/calculators/dti': 0.90,
    '/calculators/amortization': 0.88,
    '/calculators/mortgage-payoff': 0.88,
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

function getBlogEntries(): Array<{ slug: string; lastModified?: Date }> {
    // These URLs intentionally canonicalize to stronger pages. Keeping aliases out
    // of the sitemap avoids conflicting indexation signals.
    const canonicalizedAliases = new Set([
        'first-time-home-buyer-programs-2026',
        'free-mortgage-calculator-2026-pdf',
        'how-much-house-can-afford-2026',
        'interest-only-mortgages-explained',
        'mortgage-affordability-28-36-rule',
        'mortgage-amortization-schedule',
        'mortgage-closing-costs-2026-guide',
        'mortgage-help-guide-2026',
        'mortgage-points-discount-points-calculator',
        'negotiate-closing-costs-strategies',
        'paying-off-mortgage-early-vs-investing',
        'pmi-explained-avoid-cancel',
        'remove-pmi-mortgage-hpa-rules-2026',
        'reverse-mortgage-hecm-explained',
        'va-loans-military-benefits',
        'what-is-a-good-debt-to-income-ratio',
        'what-is-a-jumbo-loan-2026',
        'when-to-refinance-1-percent-rule',
        'personal-loan-calculator-amount',
        'tcja-tax-sunset-2026-mortgage-impact',
    ]);
    try {
        const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
        return fs.readdirSync(blogDir, { withFileTypes: true })
            .filter((entry) => entry.isDirectory() && !canonicalizedAliases.has(entry.name) && fs.existsSync(path.join(blogDir, entry.name, 'page.tsx')))
            .map((entry) => {
                const source = fs.readFileSync(path.join(blogDir, entry.name, 'page.tsx'), 'utf8');
                const modified = source.match(/dateModified=["'](\d{4}-\d{2}-\d{2})["']/)?.[1];
                const published = source.match(/datePublished=["'](\d{4}-\d{2}-\d{2})["']/)?.[1];
                return { slug: entry.name, lastModified: safeDate(modified || published) };
            });
    } catch (error) {
        console.error('Error reading blog directory for sitemap:', error);
        return [];
    }
}

function safeDate(value: string | undefined): Date | undefined {
    if (!value) return undefined;
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://usfinnexus.com';

    // Use explicit dates only where we know a meaningful content update occurred.
    // Do not use filesystem mtimes: a fresh Cloudflare checkout can make unchanged URLs look newly modified.
    const corePages: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/`, lastModified: new Date('2026-08-07'), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/calculators`, changeFrequency: 'weekly', priority: 0.90 },
        { url: `${baseUrl}/canada`, changeFrequency: 'weekly', priority: 0.80 },
        { url: `${baseUrl}/blog`, lastModified: new Date('2026-09-04'), changeFrequency: 'weekly', priority: 0.80 },
        { url: `${baseUrl}/guides`, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${baseUrl}/articles`, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${baseUrl}/mortgage-rates`, lastModified: new Date('2026-08-06'), changeFrequency: 'weekly', priority: 0.85 },
        { url: `${baseUrl}/about`, lastModified: new Date('2026-08-07'), changeFrequency: 'monthly', priority: 0.65 },
        { url: `${baseUrl}/methodology`, changeFrequency: 'monthly', priority: 0.65 },
        { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.50 },
        { url: `${baseUrl}/disclaimer`, changeFrequency: 'yearly', priority: 0.50 },
        { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.50 },
        { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.50 },
    ];

    const calculators: MetadataRoute.Sitemap = Object.entries(CALC_PRIORITY).map(([route, priority]) => ({
        url: `${baseUrl}${route}`,
        ...(route === '/calculators/income-tax' ? { lastModified: new Date('2026-08-07') } : {}),
        changeFrequency: 'monthly' as const,
        priority,
    }));

    const articles: MetadataRoute.Sitemap = ALL_ARTICLES.map((article) => ({
        url: `${baseUrl}/articles/${article.slug}`,
        ...(safeDate(article.date) ? { lastModified: safeDate(article.date) } : {}),
        changeFrequency: 'monthly' as const,
        priority: 0.70,
    }));

    const guides: MetadataRoute.Sitemap = ALL_GUIDES.map((guide) => ({
        url: `${baseUrl}/guides/${guide.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.70,
    }));

    const blogPosts: MetadataRoute.Sitemap = getBlogEntries().map(({ slug, lastModified }) => ({
        url: `${baseUrl}/blog/${slug}`,
        ...(lastModified ? { lastModified } : {}),
        changeFrequency: 'monthly' as const,
        priority: 0.70,
    }));

    return [...corePages, ...calculators, ...articles, ...guides, ...blogPosts];
}
