import fs from 'fs';
import path from 'path';

export interface BlogPostEntry {
    slug: string;
    title: string;
    category: string;
    readTime: string;
    image: string;
    date: string;
    excerpt?: string;
}

const IMG = {
    housing: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mortgage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    taxes: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    investing: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    retirement: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    auto: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    finance: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
};

let cachedPosts: BlogPostEntry[] | null = null;

export const CANONICALIZED_ALIASES = new Set([
    'first-time-home-buyer-programs-2026', 'free-mortgage-calculator-2026-pdf',
    'how-much-house-can-afford-2026', 'interest-only-mortgages-explained',
    'mortgage-affordability-28-36-rule', 'mortgage-amortization-schedule',
    'mortgage-closing-costs-2026-guide', 'mortgage-help-guide-2026',
    'mortgage-points-discount-points-calculator', 'negotiate-closing-costs-strategies',
    'paying-off-mortgage-early-vs-investing', 'pmi-explained-avoid-cancel',
    'remove-pmi-mortgage-hpa-rules-2026', 'reverse-mortgage-hecm-explained',
    'va-loans-military-benefits', 'what-is-a-good-debt-to-income-ratio',
    'what-is-a-jumbo-loan-2026', 'when-to-refinance-1-percent-rule',
]);

export function getAllBlogPosts(): BlogPostEntry[] {
    if (cachedPosts) return cachedPosts;

    try {
        const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
        const entries = fs.readdirSync(blogDir, { withFileTypes: true });
        
        const posts: BlogPostEntry[] = [];

        for (const dirent of entries) {
            if (!dirent.isDirectory() || CANONICALIZED_ALIASES.has(dirent.name)) continue;
            const slug = dirent.name;
            
            const pagePath = path.join(blogDir, slug, 'page.tsx');
            if (!fs.existsSync(pagePath)) continue;
            
            const content = fs.readFileSync(pagePath, 'utf8');
            
            let title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
            if (titleMatch && titleMatch[1]) {
                title = titleMatch[1].replace(' | USFinNexus', '');
            }
            
            let category = 'Personal Finance';
            if (slug.includes('mortgage') || slug.includes('refinance') || slug.includes('fha') || slug.includes('va') || slug.includes('loan')) category = 'Mortgage';
            else if (slug.includes('tax')) category = 'Taxes';
            else if (slug.includes('invest') || slug.includes('stock') || slug.includes('bond')) category = 'Investing';
            else if (slug.includes('retire') || slug.includes('401k') || slug.includes('ira') || slug.includes('fire')) category = 'Retirement';
            else if (slug.includes('auto') || slug.includes('car')) category = 'Auto Loans';
            else if (slug.includes('home') || slug.includes('housing') || slug.includes('real-estate')) category = 'Housing Market';
            
            let image = IMG.finance;
            if (category === 'Mortgage') image = IMG.mortgage;
            else if (category === 'Taxes') image = IMG.taxes;
            else if (category === 'Investing') image = IMG.investing;
            else if (category === 'Retirement') image = IMG.retirement;
            else if (category === 'Auto Loans') image = IMG.auto;
            else if (category === 'Housing Market') image = IMG.housing;
            
            const stats = fs.statSync(pagePath);
            const dateStr = stats.mtime.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
            
            posts.push({ slug, title, date: dateStr, category, readTime: '10 min', image, excerpt: 'Read this comprehensive guide to understand the financial strategies you need for ' + new Date().getFullYear() + '.' });
        }

        cachedPosts = posts.sort((a, b) => a.title.localeCompare(b.title));
        return cachedPosts;
    } catch (e) {
        console.error('Failed to dynamically load blog posts:', e);
        return [];
    }
}

function seededRandom(seed: number) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function shuffleArray<T>(array: T[], seedStr: string): T[] {
    let seed = 0;
    for (let i = 0; i < seedStr.length; i++) {
        seed += seedStr.charCodeAt(i);
    }
    
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(seed++) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function getRelatedBlogPosts(currentSlug: string, count = 4, categoryStr?: string): BlogPostEntry[] {
    const all = getAllBlogPosts();
    const current = all.find(a => a.slug === currentSlug);
    
    const others = all.filter(a => a.slug !== currentSlug);
    
    // Shuffle deterministically based on slug so they are mixed but stable per page
    const shuffled = shuffleArray(others, currentSlug);
    
    // Try to match category if provided or if current is found
    const targetCategory = categoryStr || current?.category;
    
    if (targetCategory) {
        const sameCategory = shuffled.filter(a => a.category === targetCategory);
        const diffCategory = shuffled.filter(a => a.category !== targetCategory);
        
        return [...sameCategory, ...diffCategory].slice(0, count);
    }
    
    return shuffled.slice(0, count);
}
