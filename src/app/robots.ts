import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: '*', allow: '/', disallow: '/private/' },
            { userAgent: ['Googlebot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot'], allow: '/', disallow: '/private/' },
        ],
        sitemap: ['https://usfinnexus.com/sitemap.xml', 'https://usfinnexus.com/sitemap-index.xml'],
    };
}
