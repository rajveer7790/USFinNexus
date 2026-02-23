import Link from 'next/link';
import { getRelatedArticles } from '@/lib/articles';
import { FileText } from 'lucide-react';

export default function RelatedArticles({ currentSlug }: { currentSlug: string }) {
    const related = getRelatedArticles(currentSlug, 4);

    if (related.length === 0) return null;

    return (
        <section className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-black mb-8" style={{ color: 'var(--color-text)' }}>
                📚 More Articles You May Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((article) => (
                    <Link
                        href={`/articles/${article.slug}`}
                        key={article.slug}
                        className="group card p-5 hover:border-blue-500 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[11px] font-semibold" style={{ color: 'var(--color-text-muted)' }}>
                                <FileText className="w-3 h-3" />
                                {article.category}
                            </span>
                            <span className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>{article.readTime}</span>
                        </div>
                        <h3 className="font-bold text-sm leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" style={{ color: 'var(--color-text)' }}>
                            {article.title}
                        </h3>
                        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>
                            {article.excerpt}
                        </p>
                    </Link>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link href="/articles" className="btn-outline text-sm py-2.5 px-8 inline-block">
                    View All Articles →
                </Link>
            </div>
        </section>
    );
}
