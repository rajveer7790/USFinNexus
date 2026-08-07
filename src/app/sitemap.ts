import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { ALL_ARTICLES } from '@/lib/articles';
import { ALL_GUIDES } from '@/lib/guides';

export const dynamic = 'force-static';

const BASE_URL = 'https://usfinnexus.com';

const CORE_ROUTES = [
    '',
    '/calculators',
    '/blog',
    '/guides',
    '/articles',
    '/about',
    '/methodology',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/privacy-focused-mortgage-calculator',
    '/why-we-dont-collect-data',
    '/canada',
];

function listPageDirectories(root: string): string[] {
    try {
        return fs
            .readdirSync(root, { withFileTypes: true })
            .filter((entry) => entry.isDirectory())
            .filter((entry) => fs.existsSync(path.join(root, entry.name, 'page.tsx')))
            .map((entry) => entry.name)
            .sort();
    } catch {
        return [];
    }
}

function getVerifiedModifiedDate(pagePath: string): Date | undefined {
    try {
        const content = fs.readFileSync(pagePath, 'utf8');
        const patterns = [
            /dateModified=["'](\d{4}-\d{2}-\d{2})["']/,
            /modifiedTime:\s*["'](\d{4}-\d{2}-\d{2})["']/,
            /dateModified:\s*["'](\d{4}-\d{2}-\d{2})["']/,
        ];

        for (const pattern of patterns) {
            const match = content.match(pattern);
            if (match?.[1]) return new Date(`${match[1]}T00:00:00Z`);
        }
    } catch {
        // A missing explicit modification date is better than an invented one.
    }
    return undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const appRoot = path.join(process.cwd(), 'src', 'app');

    const corePages: MetadataRoute.Sitemap = CORE_ROUTES.map((route) => ({
        url: `${BASE_URL}${route}`,
    }));

    const calculatorRoot = path.join(appRoot, 'calculators');
    const calculators: MetadataRoute.Sitemap = listPageDirectories(calculatorRoot).map((slug) => {
        const pagePath = path.join(calculatorRoot, slug, 'page.tsx');
        const lastModified = getVerifiedModifiedDate(pagePath);
        return {
            url: `${BASE_URL}/calculators/${slug}`,
            ...(lastModified ? { lastModified } : {}),
        };
    });

    const blogRoot = path.join(appRoot, 'blog');
    const blogPosts: MetadataRoute.Sitemap = listPageDirectories(blogRoot).map((slug) => {
        const pagePath = path.join(blogRoot, slug, 'page.tsx');
        const lastModified = getVerifiedModifiedDate(pagePath);
        return {
            url: `${BASE_URL}/blog/${slug}`,
            ...(lastModified ? { lastModified } : {}),
        };
    });

    const articles: MetadataRoute.Sitemap = ALL_ARTICLES.map((article) => ({
        url: `${BASE_URL}/articles/${article.slug}`,
    }));

    const guides: MetadataRoute.Sitemap = ALL_GUIDES.map((guide) => ({
        url: `${BASE_URL}/guides/${guide.slug}`,
    }));

    const seen = new Set<string>();
    return [...corePages, ...calculators, ...blogPosts, ...articles, ...guides].filter((entry) => {
        if (seen.has(entry.url)) return false;
        seen.add(entry.url);
        return true;
    });
}
