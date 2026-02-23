import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Shield, Home, TrendingUp, DollarSign, Globe } from 'lucide-react';
import { ALL_ARTICLES } from '@/lib/articles';

export const metadata: Metadata = {
    title: 'FinCEN & BOI News 2026 | USFinNexus Articles',
    description: 'Stay updated on 2026 FinCEN BOI exemptions, Real Estate Reporting Rules, LLC Transparency Acts, and US tax compliance.',
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
    'Real Estate': <Home className="w-4 h-4" />,
    'BOI Exemption': <Shield className="w-4 h-4" />,
    'BOI Updates': <FileText className="w-4 h-4" />,
    'State Compliance': <TrendingUp className="w-4 h-4" />,
    'Cross-Border': <Globe className="w-4 h-4" />,
    'Tax': <DollarSign className="w-4 h-4" />,
};

export default function ArticlesPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
            <header className="mb-12 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    Compliance & Tax Guides
                </span>
                <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: 'var(--color-text)' }}>
                    FinCEN & BOI Compliance Articles
                </h1>
                <p className="text-lg max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
                    Stay ahead of the 2026 updates including the new March 1 Real Estate Reporting Rule, domestic BOI exemptions, and NY Transparency Act deadlines.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ALL_ARTICLES.map((article, i) => (
                    <Link href={`/articles/${article.slug}`} key={article.slug} className="group flex flex-col h-full card hover:border-[var(--color-navy)] transition-colors overflow-hidden relative">
                        {i === 0 && (
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10">
                                Trending
                            </div>
                        )}
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-100 dark:bg-gray-800 text-xs font-medium" style={{ color: 'var(--color-text)' }}>
                                    {CATEGORY_ICONS[article.category] || <FileText className="w-4 h-4" />}
                                    {article.category}
                                </span>
                                <span className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>{article.readTime}</span>
                            </div>
                            <h2 className="text-lg font-bold mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" style={{ color: 'var(--color-text)' }}>
                                {article.title}
                            </h2>
                            <p className="text-sm line-clamp-2 mb-4" style={{ color: 'var(--color-text-muted)' }}>
                                {article.excerpt}
                            </p>
                            <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                                Read Guide &rarr;
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-16 card p-8 text-center bg-gray-50 dark:bg-gray-900">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Need help with 2026 Compliance?</h2>
                <p className="mb-6 max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                    Don&apos;t risk daily $500 fines. Our professional filing service ensures your US or Canadian business meets all FinCEN and state-level transparency requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="btn-primary py-3 px-8 text-sm shadow-xl shadow-green-500/20">
                        Check My Exemption Status
                    </button>
                    <button className="btn-outline py-3 px-8 text-sm border-gray-300 dark:border-gray-700">
                        Contact Compliance Team
                    </button>
                </div>
            </div>
        </div>
    );
}
