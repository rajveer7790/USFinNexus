import { MetadataRoute } from 'next';
import { ALL_ARTICLES } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://usfinnexus.com';

    // 1. Core Static Pages
    const corePages = [
        '',
        '/about',
        '/articles',
        '/calculators',
        '/blog',
        '/privacy',
        '/terms',
        '/disclaimer'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Financial Calculators
    const calculators = [
        '/calculators/mortgage',
        '/calculators/affordability',
        '/calculators/arm',
        '/calculators/auto-loan',
        '/calculators/comparison',
        '/calculators/interest-only',
        '/calculators/personal-loan',
        '/calculators/points-buydown',
        '/calculators/refinance',
        '/calculators/rent-vs-buy'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // 3. Articles (FinCEN / Compliance / Taxes)
    const articles = ALL_ARTICLES.map((article) => ({
        url: `${baseUrl}/articles/${article.slug}`,
        // Ideally we would have a specific publish/modified date per article, 
        // but falling back to the build timestamp ensures it is always fresh
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // 4. Blog Posts
    const blogPosts = [
        '/blog/usa-people-search-finance'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...corePages, ...calculators, ...articles, ...blogPosts];
}
