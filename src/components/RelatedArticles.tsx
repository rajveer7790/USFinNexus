import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRelatedArticles } from '@/lib/articles';

interface RelatedArticlesProps {
    currentSlug?: string;
    limit?: number;
    title?: string;
    category?: string;
}

export default function RelatedArticles({ currentSlug = '', limit = 3, title = 'Related Articles' }: RelatedArticlesProps) {
    const articles = getRelatedArticles(currentSlug, limit);

    if (articles.length === 0) return null;

    return (
        <section className="mt-12 pt-10 border-t border-gray-100">
            <h2 className="text-xl font-black mb-6" style={{ color: 'var(--color-text)' }}>{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {articles.map(article => (
                    <Link
                        href={`/articles/${article.slug}`}
                        key={article.slug}
                        className="group block card overflow-hidden hover:-translate-y-1 transition-all duration-200 no-underline"
                    >
                        {article.image && (
                            <div className="h-36 bg-gray-100 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={400}
                                    height={144}
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
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
