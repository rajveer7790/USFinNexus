import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ALL_ARTICLES } from '@/lib/articles';
import Breadcrumbs from '@/components/Breadcrumbs';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'FinCEN & BOI Compliance Articles 2026 | USFinNexus',
    description: 'Expert guides on 2026 FinCEN BOI exemptions, Real Estate Reporting Rules, LLC Transparency Acts, and US tax compliance. Stay compliant.',
    alternates: { canonical: 'https://usfinnexus.com/articles' },
    openGraph: {
        title: 'FinCEN & BOI Compliance Articles 2026 | USFinNexus',
        description: 'Expert guides on 2026 FinCEN BOI exemptions, Real Estate Reporting Rules, LLC Transparency Acts, and US tax compliance.',
        url: 'https://usfinnexus.com/articles',
        type: 'website',
        siteName: 'USFinNexus',
    },
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
    'Real Estate':      { bg: 'bg-blue-50',   text: 'text-blue-700',   dot: 'bg-blue-500' },
    'BOI Exemption':    { bg: 'bg-green-50',  text: 'text-green-700',  dot: 'bg-green-500' },
    'BOI Updates':      { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500' },
    'State Compliance': { bg: 'bg-orange-50', text: 'text-orange-700', dot: 'bg-orange-500' },
    'Tax':              { bg: 'bg-emerald-50',text: 'text-emerald-700',dot: 'bg-emerald-500' },
    'Cross-Border':     { bg: 'bg-sky-50',    text: 'text-sky-700',    dot: 'bg-sky-500' },
};

const ABOVE_FOLD = 3; // first row of 3-col grid gets priority preload

export default function ArticlesPage() {
    const featured = ALL_ARTICLES[0];
    const rest = ALL_ARTICLES.slice(1);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
            <Breadcrumbs items={[{ name: 'Articles', item: '/articles' }]} />

            {/* Header */}
            <header className="mb-10 md:mb-14">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 bg-blue-100 text-blue-700 uppercase tracking-wider">
                    Compliance &amp; Tax Guides
                </span>
                <h1 className="text-3xl md:text-5xl font-black mb-3 tracking-tight" style={{ color: 'var(--color-text)' }}>
                    FinCEN &amp; BOI Compliance Articles
                </h1>
                <p className="text-base md:text-lg max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
                    Stay ahead of 2026 updates — March 1 Real Estate Reporting Rule, domestic BOI exemptions, NY Transparency Act, and TCJA tax changes.
                </p>
                <p className="mt-2 text-sm font-medium text-gray-400">{ALL_ARTICLES.length} articles</p>
            </header>

            {/* Featured Article — full-width hero card */}
            <Link
                href={`/articles/${featured.slug}`}
                className="group block mb-10 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 bg-white"
            >
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-56 md:h-72 bg-gray-100 overflow-hidden">
                        <Image
                            src={featured.image}
                            alt={featured.title}
                            width={800}
                            height={450}
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:block hidden" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-red-500 text-white uppercase tracking-wider">
                            Featured
                        </span>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                        {(() => {
                            const c = CATEGORY_COLORS[featured.category] ?? CATEGORY_COLORS['BOI Updates'];
                            return (
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold mb-3 w-fit ${c.bg} ${c.text}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                                    {featured.category}
                                </span>
                            );
                        })()}
                        <h2 className="text-xl md:text-2xl font-black mb-3 leading-snug group-hover:text-blue-600 transition-colors" style={{ color: 'var(--color-text)' }}>
                            {featured.title}
                        </h2>
                        <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--color-text-muted)' }}>
                            {featured.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                            <span>{featured.date}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span>{featured.readTime} read</span>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:gap-2 transition-all">
                            Read Article <span aria-hidden>→</span>
                        </span>
                    </div>
                </div>
            </Link>

            {/* Article Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((article, i) => {
                    const c = CATEGORY_COLORS[article.category] ?? CATEGORY_COLORS['BOI Updates'];
                    const isPriority = i < ABOVE_FOLD - 1; // featured used slot 0
                    return (
                        <Link
                            key={article.slug}
                            href={`/articles/${article.slug}`}
                            className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 bg-white"
                        >
                            {/* Thumbnail */}
                            <div className="h-44 bg-gray-100 flex-shrink-0 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={400}
                                    height={176}
                                    priority={isPriority}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-bold ${c.bg} ${c.text}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                                        {article.category}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium ml-auto">{article.readTime}</span>
                                </div>

                                <h2 className="text-sm font-bold leading-snug mb-2 line-clamp-3 group-hover:text-blue-600 transition-colors" style={{ color: 'var(--color-text)' }}>
                                    {article.title}
                                </h2>

                                <p className="text-xs line-clamp-2 mb-3 flex-1" style={{ color: 'var(--color-text-muted)' }}>
                                    {article.excerpt}
                                </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs text-gray-400">{article.date}</span>
                                    <span className="text-xs font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                                        Read <span aria-hidden>→</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* CTA */}
            <div className="mt-14 rounded-2xl p-8 text-center bg-gradient-to-br from-[#0A192F] to-[#1a4d9a] text-white">
                <h2 className="text-2xl font-black mb-3">Need Help With 2026 Compliance?</h2>
                <p className="mb-6 max-w-xl mx-auto text-blue-100 text-sm">
                    Don&apos;t risk daily $500 fines. Our professional filing service ensures your US or Canadian business meets all FinCEN and state-level transparency requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#00C853] hover:bg-[#00a844] text-white text-sm font-bold rounded-xl transition-colors">
                        Check My Exemption Status
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-xl border border-white/20 transition-colors">
                        Contact Compliance Team
                    </Link>
                </div>
            </div>
        </div>
    );
}
