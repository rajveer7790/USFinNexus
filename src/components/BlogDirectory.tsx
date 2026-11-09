'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Search } from 'lucide-react';
import EditorialImage from '@/components/EditorialImage';
import type { BlogPostEntry } from '@/lib/blogs';

const PAGE_SIZE = 12;
const STORY = 'closing-costs-itemized-breakdown-2026';
const TOPICS = ['Mortgage', 'Housing Market', 'Taxes', 'Banking', 'Retirement', 'Personal Finance'];

function DateLine({ post }: { post: BlogPostEntry }) {
    return <span className="fn-story-meta">{post.dateISO ? <time dateTime={post.dateISO}>{post.date}</time> : 'Guide'}<span aria-hidden="true"> · </span>{post.readTime} read</span>;
}

function StoryCard({ post, featured = false }: { post: BlogPostEntry; featured?: boolean }) {
    return <Link href={`/blog/${post.slug}`} className={`fn-card fn-story ${featured ? 'fn-story-feature' : ''}`}>
        <div className="fn-story-image"><EditorialImage src={post.image} alt="" fill priority={featured} sizes={featured ? '(min-width: 900px) 58vw, 100vw' : '(min-width: 1050px) 27vw, (min-width: 620px) 46vw, 100vw'} className="object-cover" /></div>
        <div className="fn-story-copy">
            <span className="fn-card-topic">{post.category}</span>
            <h3>{post.title}</h3>
            {post.excerpt && <p>{post.excerpt}</p>}
            <DateLine post={post} />
        </div>
    </Link>;
}

export default function BlogDirectory({ posts }: { posts: BlogPostEntry[] }) {
    const [category, setCategory] = useState('All');
    const [query, setQuery] = useState('');
    const [limit, setLimit] = useState(PAGE_SIZE);
    const categories = ['All', ...Array.from(new Set(posts.map(p => p.category))).sort()];
    useEffect(() => {
        const readQuery = () => {
            const params = new URLSearchParams(window.location.search);
            const topic = params.get('topic');
            setQuery((params.get('q') ?? '').slice(0, 100));
            setCategory(topic && posts.some(post => post.category === topic) ? topic : 'All');
            setLimit(PAGE_SIZE);
        };
        readQuery();
        window.addEventListener('popstate', readQuery);
        return () => window.removeEventListener('popstate', readQuery);
    }, [posts]);
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const filtered = posts.filter(p => (category === 'All' || p.category === category) && terms.every(term => `${p.title} ${p.excerpt ?? ''} ${p.category}`.toLowerCase().includes(term)));
    const hero = posts.find(post => post.slug === STORY) ?? posts[0];
    const latest = posts.filter(post => post.dateISO && post.slug !== hero?.slug).slice(0, 5);
    const defaultView = category === 'All' && !terms.length;
    const feed = defaultView ? filtered.filter(post => post.slug !== hero?.slug && !latest.some(item => item.slug === post.slug)) : filtered;
    const remaining = feed.slice(limit);

    function chooseTopic(topic: string) {
        setCategory(topic);
        setLimit(PAGE_SIZE);
        const url = new URL(window.location.href);
        if (topic === 'All') url.searchParams.delete('topic'); else url.searchParams.set('topic', topic);
        window.history.replaceState(window.history.state, '', url);
    }

    return <>
        <nav className="fn-topic-bar" aria-label="Blog topics">
            {TOPICS.filter(topic => categories.includes(topic)).map(topic => <a href={`/blog?topic=${encodeURIComponent(topic)}#blog-library`} onClick={e => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault(); setQuery(''); chooseTopic(topic);
                const url = new URL(window.location.href); url.searchParams.delete('q'); url.hash = 'blog-library';
                window.history.replaceState(window.history.state, '', url);
                document.getElementById('blog-library')?.scrollIntoView();
            }} key={topic}>{topic}</a>)}
            <a href="#blog-library">All topics <ArrowRight size={15} aria-hidden="true" /></a>
        </nav>

        {defaultView && hero && <section className="fn-news-lead" aria-label="Featured and latest stories">
            <div><h2 className="fn-news-kicker">Featured guide</h2><StoryCard post={hero} featured /></div>
            <div className="fn-news-latest">
                <h2>Latest stories</h2>
                <ul>{latest.map(post => <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                        <div className="fn-latest-image"><EditorialImage src={post.image} alt="" fill sizes="100px" className="object-cover" /></div>
                        <div><span className="fn-card-topic">{post.category}</span><h3>{post.title}</h3><DateLine post={post} /></div>
                    </Link>
                </li>)}</ul>
            </div>
        </section>}

        <section id="blog-library" aria-labelledby="blog-library-heading" className="fn-news-library">
            <div className="fn-section-heading"><h2 id="blog-library-heading">Browse the archive</h2><p role="status">{filtered.length} {filtered.length === 1 ? 'story' : 'stories'}</p></div>
            <div className="fn-news-controls">
                <label htmlFor="blog-search">Find a guide <span><Search size={18} aria-hidden="true" /><input id="blog-search" type="search" value={query} onChange={e => { setQuery(e.target.value); setLimit(PAGE_SIZE); }} placeholder="Search mortgage, tax, retirement…" maxLength={100} /></span></label>
                <label htmlFor="blog-category">Category <select id="blog-category" value={category} onChange={e => chooseTopic(e.target.value)}>{categories.map(c => <option key={c} value={c}>{c === 'All' ? 'All categories' : c}</option>)}</select></label>
                {!defaultView && <button type="button" className="fn-button fn-button-secondary" onClick={() => {
                    setQuery(''); chooseTopic('All');
                    const url = new URL(window.location.href); url.searchParams.delete('q'); window.history.replaceState(window.history.state, '', url);
                }}>Clear filters</button>}
            </div>
            <div className="fn-news-grid">{feed.slice(0, limit).map(post => <StoryCard post={post} key={post.slug} />)}</div>
            {!feed.length && <p className="fn-news-empty">No matching stories. Try a shorter search or another category.</p>}
            {remaining.length > 0 && <div className="fn-news-more">
                <button type="button" className="fn-button fn-button-primary" onClick={() => {
                    setLimit(n => n + PAGE_SIZE);
                    requestAnimationFrame(() => document.querySelectorAll<HTMLAnchorElement>('.fn-news-grid .fn-story')[limit]?.focus());
                }}>Load more stories <ArrowRight size={17} aria-hidden="true" /></button>
                <details className="fn-disclosure">
                    <summary>Browse remaining {remaining.length} titles <ChevronDown size={16} aria-hidden="true" /></summary>
                    <ul className="fn-archive-links">{remaining.map(post => <li key={post.slug}><Link href={`/blog/${post.slug}`}>{post.title}</Link></li>)}</ul>
                </details>
            </div>}
        </section>
    </>;
}
