import fs from 'fs';
import path from 'path';
import { BLOG_ALIASES } from '@/lib/canonical-routes';
import { blogCategory, blogExcerpt, blogImage, blogTitle } from '@/lib/blog-editorial';
import { editorialTopic, editorialFamily, meaningfulTerms, CURATED_RELATED } from '@/lib/editorial-topics';

export interface BlogPostEntry {
    slug: string;
    title: string;
    category: string;
    readTime: string;
    image: string;
    date: string;
    excerpt?: string;
    dateISO?: string;
}
export const CANONICALIZED_ALIASES = BLOG_ALIASES;
let cachedPosts: BlogPostEntry[] | null = null;

export function getAllBlogPosts(): BlogPostEntry[] {
    if (cachedPosts) return cachedPosts;
    const dir = path.join(process.cwd(), 'src', 'app', 'blog');
    const posts: BlogPostEntry[] = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory() || BLOG_ALIASES.has(entry.name)) continue;
        const file = path.join(dir, entry.name, 'page.tsx');
        if (!fs.existsSync(file)) continue;
        const content = fs.readFileSync(file, 'utf8');
        const slug = entry.name;
        const category = blogCategory(slug);
        const dateISO = content.match(/(?:datePublished|published)=["'](\d{4}-\d{2}-\d{2})["']/)?.[1] || '';
        const date = dateISO ? new Date(dateISO + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : 'Undated guide';
        const prose = [...content.matchAll(/<(?:p|li|h[1-3])\b[^>]*>([\s\S]*?)<\/(?:p|li|h[1-3])>/g)].map(m => m[1].replace(/<[^>]+>/g, ' ')).join(' ');
        const minutes = Math.max(2, Math.ceil(prose.trim().split(/\s+/).length / 220));
        posts.push({ slug, title: blogTitle(content, slug), category, date, dateISO, readTime: minutes + ' min', image: blogImage(content, slug, category), excerpt: blogExcerpt(content) });
    }
    cachedPosts = posts.sort((a,b) => (b.dateISO || '').localeCompare(a.dateISO || '') || a.title.localeCompare(b.title));
    return cachedPosts;
}

export function getRelatedBlogPosts(currentSlug: string, count = 4, category?: string): BlogPostEntry[] {
    const all = getAllBlogPosts();
    const current = all.find(p => p.slug === currentSlug);
    const terms = meaningfulTerms(currentSlug);
    const topic = editorialTopic(currentSlug);
    return all.filter(p => p.slug !== currentSlug).map(post => ({
        post,
        score: (CURATED_RELATED[currentSlug]?.includes(post.slug) ? 100 - CURATED_RELATED[currentSlug].indexOf(post.slug) : 0)
            + (editorialTopic(post.slug) === topic ? 40 : editorialFamily(editorialTopic(post.slug)) === editorialFamily(topic) ? 8 : 0)
            + [...meaningfulTerms(post.slug)].filter(t => terms.has(t)).length * 3
            + (post.category === (category || current?.category) ? 1 : 0),
    })).filter(x => x.score >= 8).sort((a,b) => b.score-a.score || (b.post.dateISO || '').localeCompare(a.post.dateISO || '') || a.post.slug.localeCompare(b.post.slug)).slice(0,count).map(x=>x.post);
}
