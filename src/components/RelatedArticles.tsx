import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRelatedArticles, ALL_ARTICLES } from '@/lib/articles';
import { getRelatedBlogPosts } from '@/lib/blogs';

interface RelatedArticlesProps {
    currentSlug?: string;
    limit?: number;
    title?: string;
    category?: string;
}

export default function RelatedArticles({ currentSlug = '', limit = 3, title = 'Related Articles', category }: RelatedArticlesProps) {
    // Determine if this is a BOI/FinCEN article or a general blog post
    const isBoiArticle = ALL_ARTICLES.some(a => a.slug === currentSlug);
    
    // If it's not a known BOI article, assume it's a general blog post
    const articles = isBoiArticle 
        ? getRelatedArticles(currentSlug, limit)
        : getRelatedBlogPosts(currentSlug, limit, category);

    if (articles.length === 0) return null;

    const basePath = isBoiArticle ? '/articles' : '/blog';

    return (
        <section className="mt-12 pt-10 border-t border-gray-100">
            <h2 className="text-xl font-black mb-6" style={{ color: 'var(--color-text)' }}>{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {articles.map(article => (
                    <Link
                        href={`${basePath}/${article.slug}`}
                        key={article.slug}
                        className="group block card overflow-hidden hover:-translate-y-1 transition-all duration-200 no-underline"
                    >
                        {article.image && (
                            <div className="h-36 bg-gray-100 overflow-hidden relative">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                                />
                            </div>
                        )}
                        <div className="p-5">
                            <span className="inline-block px-2 py-0.5 rounded text-xs font-black uppercase tracking-wider mb-3 bg-[#00C853]/10 text-[#00C853]">
                                {article.category}
                            </span>
                            <h3 className="font-bold text-sm mb-2 leading-snug group-hover:text-[#0da6f2] transition-colors" style={{ color: 'var(--color-text)' }}>
                                {article.title}
                            </h3>
                            <p className="text-xs mb-3 leading-relaxed line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>
                                {article.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                <span>{article.readTime} read</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
