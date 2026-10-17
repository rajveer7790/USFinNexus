'use client';
import { useState } from 'react';
import Link from 'next/link';
import EditorialImage from '@/components/EditorialImage';
import type { BlogPostEntry } from '@/lib/blogs';

export default function BlogDirectory({ posts }: { posts: BlogPostEntry[] }) {
    const [category, setCategory] = useState('All');
    const [query, setQuery] = useState('');
    const categories = ['All', ...Array.from(new Set(posts.map(p => p.category))).sort()];
    const filtered = posts.filter(p => (category === 'All' || p.category === category) && `${p.title} ${p.excerpt}`.toLowerCase().includes(query.trim().toLowerCase()));
    return <section aria-label="Browse finance guides">
        <label className="block text-sm font-semibold mb-2" htmlFor="blog-search">Find a guide</label>
        <input id="blog-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search mortgage, tax, retirement…" className="w-full max-w-xl rounded-xl border border-slate-300 px-4 py-3 mb-5" />
        <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(c => <button type="button" key={c} aria-pressed={category === c} onClick={() => setCategory(c)} className={`px-4 py-2 min-h-[44px] rounded-full text-sm font-semibold border ${category === c ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-700 hover:border-blue-500'}`}>{c}</button>)}
        </div>
        <p role="status" className="text-sm text-slate-600 mb-6">{filtered.length} guides</p>
        {/* All canonical cards are server-rendered on first load; filtering is optional. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map(post => <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow no-underline">
                <div className="relative w-full h-56 bg-slate-100 overflow-hidden"><EditorialImage src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" /></div>
                <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold text-blue-700 mb-3">{post.category}</span>
                    <h2 className="font-bold text-lg mb-3 leading-snug text-slate-900 group-hover:text-blue-700">{post.title}</h2>
                    <p className="text-sm leading-relaxed text-slate-600 mb-4">{post.excerpt}</p>
                    <p className="mt-auto text-sm text-slate-500">{post.dateISO ? 'Published ' : ''}{post.date} · {post.readTime} read</p>
                </div>
            </Link>)}
        </div>
        {!filtered.length && <p className="rounded-xl bg-slate-50 p-6">No matching guides. Try a broader term or choose All.</p>}
    </section>;
}
