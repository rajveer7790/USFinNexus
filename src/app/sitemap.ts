import { MetadataRoute } from 'next';
import { ALL_ARTICLES } from '@/lib/articles';
import { ALL_GUIDES } from '@/lib/guides';

export const dynamic = 'force-static';

const CALCULATOR_ROUTES = [
    '/calculators/mortgage',
    '/calculators/affordability',
    '/calculators/refinance',
    '/calculators/rent-vs-buy',
    '/calculators/closing-costs',
    '/calculators/dti',
    '/calculators/amortization',
    '/calculators/arm',
    '/calculators/fha-va-usda',
    '/calculators/debt-payoff',
    '/calculators/budget',
    '/calculators/income-tax',
    '/calculators/down-payment',
    '/calculators/heloc',
    '/calculators/auto-loan',
    '/calculators/rental-property',
    '/calculators/comparison',
    '/calculators/personal-loan',
    '/calculators/retirement',
    '/calculators/investment',
    '/calculators/trump-account',
    '/calculators/fire-planner',
    '/calculators/points-buydown',
    '/calculators/interest-only',
    '/calculators/student-loan',
    '/calculators/credit-card',
    '/calculators/drip',
    '/calculators/crypto-tax',
    '/calculators/california',
    '/calculators/texas',
    '/calculators/florida',
    '/calculators/fha',
    '/calculators/va',
    '/calculators/options-profit',
    '/canada/mortgage-calculator',
] as const;

const CORE_ROUTES = [
    '/',
    '/calculators',
    '/canada',
    '/blog',
    '/guides',
    '/articles',
    '/about',
    '/methodology',
    '/contact',
    '/disclaimer',
    '/privacy',
    '/terms',
] as const;

const REVIEWED_ON_2026_08_07 = new Set<string>([
    '/',
    '/calculators/mortgage',
    '/calculators/income-tax',
]);

function validDate(value: string): Date | undefined {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? undefined : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://usfinnexus.com';

    const corePages: MetadataRoute.Sitemap = CORE_ROUTES.map((route) => ({
        url: route === '/' ? `${baseUrl}/` : `${baseUrl}${route}`,
        ...(REVIEWED_ON_2026_08_07.has(route) ? { lastModified: new Date('2026-08-07') } : {}),
    }));

    const calculators: MetadataRoute.Sitemap = CALCULATOR_ROUTES.map((route) => ({
        url: `${baseUrl}${route}`,
        ...(REVIEWED_ON_2026_08_07.has(route) ? { lastModified: new Date('2026-08-07') } : {}),
    }));

    const articles: MetadataRoute.Sitemap = ALL_ARTICLES.map((article) => {
        const published = validDate(article.date);
        return {
            url: `${baseUrl}/articles/${article.slug}`,
            ...(published ? { lastModified: published } : {}),
        };
    });

    const guides: MetadataRoute.Sitemap = ALL_GUIDES.map((guide) => ({
        url: `${baseUrl}/guides/${guide.slug}`,
    }));

    return [...corePages, ...calculators, ...articles, ...guides];
}
