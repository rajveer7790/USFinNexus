import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Globe, Home, Star, Shield, TrendingUp, DollarSign } from 'lucide-react';
import { ALL_GUIDES } from '@/lib/guides';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Financial Guides 2026 — Mortgage & Cross-Border | USFinNexus',
    description: 'Expert guides on US & Canadian real estate, cross-border mortgages, first-time home buying, and credit requirements.',
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
    'Mortgage': <Home className="w-4 h-4" />,
    'Education': <BookOpen className="w-4 h-4" />,
    'Cross-Border': <Globe className="w-4 h-4" />,
};

export default function GuidesPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
            <Breadcrumbs items={[{ name: 'Guides', item: '/guides' }]} />
            
            <header className="mb-12 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-blue-100 text-blue-700">
                    Expert Financial Handbook
                </span>
                <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: 'var(--color-text)' }}>
                    Mortgage & Financing Guides
                </h1>
                <p className="text-lg max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
                    Deep dives into complex financial topics, designed to give you professional-level clarity on home buying and cross-border investing.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ALL_GUIDES.map((guide) => (
                    <Link href={`/guides/${guide.slug}`} key={guide.slug} className="group flex flex-col h-full card hover:border-[var(--color-navy)] transition-colors overflow-hidden">
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-100 text-xs font-medium" style={{ color: 'var(--color-text)' }}>
                                    {CATEGORY_ICONS[guide.category] || <BookOpen className="w-4 h-4" />}
                                    {guide.category}
                                </span>
                                <span className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>{guide.readTime}</span>
                            </div>
                            <h2 className="text-lg font-bold mb-3 leading-snug group-hover:text-blue-600 transition-colors" style={{ color: 'var(--color-text)' }}>
                                {guide.title}
                            </h2>
                            <p className="text-sm line-clamp-2 mb-4" style={{ color: 'var(--color-text-muted)' }}>
                                {guide.excerpt}
                            </p>
                            <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-blue-600">
                                View Guide &rarr;
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-16 card p-8 text-center bg-gray-50">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Need custom calculations?</h2>
                <p className="mb-6 max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                    Our guides provide the knowledge, but our tools provide the math. Use our 100% free premium calculators for mortgage, auto, and personal finance analysis.
                </p>
                <div className="flex justify-center">
                    <Link href="/#calculators" className="btn-primary py-3 px-8 text-sm shadow-xl">
                        Launch All Calculators
                    </Link>
                </div>
            </div>
        </div>
    );
}
