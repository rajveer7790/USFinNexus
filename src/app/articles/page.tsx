import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ALL_ARTICLES } from '@/lib/articles';
import Breadcrumbs from '@/components/Breadcrumbs';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'FinCEN & BOI Compliance Articles 2026',
    description: 'Expert guides on 2026 FinCEN BOI exemptions, Real Estate Reporting Rules, LLC Transparency Acts, and US tax compliance. Stay compliant.',
    alternates: { canonical: 'https://usfinnexus.com/articles' },
    openGraph: {
        title: 'FinCEN & BOI Compliance Articles 2026',
        description: 'Expert guides on 2026 FinCEN BOI exemptions, Real Estate Reporting Rules, LLC Transparency Acts, and US tax compliance.',
        url: 'https://usfinnexus.com/articles',
        type: 'website',
        siteName: 'USFinNexus',
    },
};

const ABOVE_FOLD = 3; // first row of 3-col grid gets priority preload

export default function ArticlesPage() {
    const featured = ALL_ARTICLES[0];
    const rest = ALL_ARTICLES.slice(1);

    return (
        <div className="fn-shell py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Articles', item: '/articles' }]} />

            {/* Header */}
            <header className="fn-inner-intro">
                <span className="fn-card-topic">
                    Compliance &amp; Tax Guides
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 tracking-tight" style={{ color: 'var(--color-text)' }}>
                    FinCEN &amp; BOI Compliance Articles
                </h1>
                <p className="text-base md:text-lg max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
                    Read source-dated reporting-status, BOI, New York disclosure and federal tax explainers. Older announced deadlines may have changed; open the current status guide before acting.
                </p>
                <p className="mt-2 text-sm font-medium text-gray-400">{ALL_ARTICLES.length} articles</p>
            </header>

            {/* Featured Article - full-width hero card */}
            <Link
                href={`/articles/${featured.slug}`}
                className="fn-card group block mb-10 overflow-hidden"
            >
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative aspect-video bg-gray-100 overflow-hidden">
                        <Image
                            src={featured.image}
                            alt={featured.title}
                            width={800}
                            height={450}
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="w-full h-full object-cover"
                        />
                        <span className="fn-card-topic absolute top-3 left-3 rounded-md border border-slate-200 bg-white px-2.5 py-1">
                            Featured
                        </span>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                        <span className="fn-card-topic mb-3">{featured.category}</span>
                        <h2 className="text-xl md:text-2xl font-black mb-3 leading-snug">
                            {featured.title}
                        </h2>
                        <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--color-text-muted)' }}>
                            {featured.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                            <span>{featured.date}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span>{featured.readTime} read</span>
                        </div>
                        <span className="fn-articles-link mt-4 inline-flex items-center gap-1 text-sm font-bold">
                            Read Article <span aria-hidden>→</span>
                        </span>
                    </div>
                </div>
            </Link>

            {/* Article Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((article, i) => {
                    const isPriority = i < ABOVE_FOLD - 1; // featured used slot 0
                    return (
                        <Link
                            key={article.slug}
                            href={`/articles/${article.slug}`}
                            className="fn-card group flex flex-col overflow-hidden"
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
                                    <span className="fn-card-topic">{article.category}</span>
                                    <span className="text-xs text-slate-600 font-medium ml-auto">{article.readTime}</span>
                                </div>

                                <h2 className="text-sm font-bold leading-snug mb-2 line-clamp-3">
                                    {article.title}
                                </h2>

                                <p className="text-xs line-clamp-2 mb-3 flex-1" style={{ color: 'var(--color-text-muted)' }}>
                                    {article.excerpt}
                                </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs text-slate-600">{article.date}</span>
                                    <span className="fn-articles-link text-xs font-bold inline-flex items-center gap-0.5">
                                        Read <span aria-hidden>→</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <section className="fn-articles-next" aria-labelledby="compliance-next">
                <div>
                    <h2 id="compliance-next">Looking for the latest compliance guidance?</h2>
                    <p>Start with the current reporting status guide and its official sources. For questions about this website, contact USFinNexus.</p>
                </div>
                <div className="fn-articles-actions">
                    <Link href={`/articles/${featured.slug}`} className="fn-button fn-button-primary">
                        Read the status guide
                    </Link>
                    <Link href="/contact" className="fn-button fn-button-secondary">
                        Contact us
                    </Link>
                </div>
            </section>
        </div>
    );
}
