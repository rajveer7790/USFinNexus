'use client';

import React from 'react';
import Link from 'next/link';
import { 
    Clock, AlertCircle, ChevronRight, Share2, 
    Printer, Shield, Bookmark, Info
} from 'lucide-react';
import RelatedCalculators from './RelatedCalculators';
import { usePathname } from 'next/navigation';

interface CalculatorLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
    expertSummary?: string;
    lastUpdated?: string;
}

const LATEST_INSIGHTS = [
    { href: '/guides/mortgage-rates-forecast-2026', tag: 'Forecast', title: 'Mortgage Rate Forecast 2026: When Will They Drop?', time: '8 min' },
    { href: '/articles/hidden-closing-costs', tag: 'Expert', title: '7 Hidden Closing Costs That Could Tank Your Deal', time: '5 min' },
    { href: '/guides/dti-ratio-explained', tag: 'Basics', title: 'DTI Ratio: The #1 Factor in Loan Approval', time: '6 min' },
];

export default function CalculatorLayout({ 
    title, 
    description, 
    children, 
    expertSummary,
    lastUpdated = 'March 2026'
}: CalculatorLayoutProps) {
    const pathname = usePathname();

    return (
        <div className="bg-[#fcfdfd] min-h-screen font-sans selection:bg-[#0da6f2]/20 text-slate-900">
            {/* ── HEADER AREA ── */}
            <header className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-4">
                            <Link href="/" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#0da6f2] transition-colors">USFinNexus</Link>
                            <ChevronRight size={10} className="text-slate-300" />
                            <Link href="/calculators" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#0da6f2] transition-colors">Calculators</Link>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                            {title}
                        </h1>
                        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                            {description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-slate-50">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                <Clock size={14} />
                                Updated: {lastUpdated}
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                <Shield size={14} className="text-[#0da6f2]" />
                                Verified Accuracy
                            </div>
                            <div className="flex items-center gap-4 ml-auto">
                                <button className="p-2 text-slate-400 hover:text-[#0da6f2] transition-colors" title="Print Report">
                                    <Printer size={18} />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-[#0da6f2] transition-colors" title="Share Tool">
                                    <Share2 size={18} />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-[#0da6f2] transition-colors" title="Save">
                                    <Bookmark size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ── MAIN GRID ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                    
                    {/* LEFT: Calculator Engine */}
                    <main className="flex-1 min-w-0">
                        
                        {/* EXPERT SUMMARY (ABOVE THE FOLD SEO) */}
                        {expertSummary && (
                            <div className="mb-10 p-6 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-start gap-4">
                                <div className="p-2 bg-white rounded-xl shadow-sm border border-blue-100 shrink-0">
                                    <Info size={20} className="text-[#0da6f2]" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Expert Summary</h2>
                                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{expertSummary}</p>
                                </div>
                            </div>
                        )}

                        <div className="relative">
                            {children}
                        </div>

                        {/* ── IN-CONTENT AD SLOT ── */}
                        <div className="mt-16 w-full bg-slate-50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center py-10">
                            <p className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] mb-4">Advertisement</p>
                            <div className="w-full max-w-[728px] h-[90px] bg-slate-100/50 rounded flex items-center justify-center text-slate-300 text-xs font-medium">
                                AdSense Leaderboard (Responsive)
                            </div>
                        </div>
                    </main>

                    {/* RIGHT: Sidebar (Sticky) */}
                    <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-8">
                        
                        {/* ── TOP SIDEBAR AD SLOT ── */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-4 min-h-[280px]">
                            <p className="text-xs font-black text-slate-300 uppercase tracking-widest mb-4">Advertisement</p>
                            <div className="w-[300px] h-[250px] bg-slate-100/50 rounded flex items-center justify-center text-slate-300 text-xs font-medium border border-slate-200/50">
                                AdSense Rectangle (300x250)
                            </div>
                        </div>

                        {/* RELATED TOOLS (SIDEBAR VARIANT) */}
                        <RelatedCalculators exclude={[pathname]} variant="sidebar" limit={5} />

                        {/* 2026 MARKET BENCHMARKS */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <AlertCircle size={18} className="text-[#0da6f2]" />
                                <h3 className="font-black text-slate-900 text-sm">Market Benchmarks</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { k: 'Avg 30-Yr Fixed', v: '6.84%' },
                                    { k: 'Avg 15-Yr Fixed', v: '6.12%' },
                                    { k: 'Primary Residence DTI', v: '43%' },
                                    { k: 'PMI Required below', v: '20% Down' },
                                ].map(bench => (
                                    <div key={bench.k} className="flex items-center justify-between pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">{bench.k}</span>
                                        <span className="text-xs font-black text-slate-800">{bench.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── STICKY SKYSCRAPER AD ── */}
                        <div className="sticky top-24">
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-4 min-h-[620px]">
                                <p className="text-xs font-black text-slate-300 uppercase tracking-widest mb-4">Advertisement</p>
                                <div className="w-[300px] h-[600px] bg-slate-100/50 rounded flex items-center justify-center text-slate-300 text-sm font-medium border border-slate-200/50 text-center px-8 leading-snug">
                                    AdSense Skyscraper<br />(300x600)
                                </div>
                            </div>
                        </div>

                        {/* MARKET INSIGHTS */}
                        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                            <div className="bg-slate-900 px-6 py-4">
                                <h3 className="font-bold text-white text-sm">Expert Insights</h3>
                            </div>
                            <div className="p-6 space-y-5">
                                {LATEST_INSIGHTS.map(article => (
                                    <Link key={article.href} href={article.href} className="group block space-y-1">
                                        <p className="text-xs font-black uppercase text-slate-400 group-hover:text-[#0da6f2] transition-colors">{article.tag}</p>
                                        <h4 className="text-xs font-bold text-slate-700 leading-snug group-hover:text-[#0da6f2] transition-colors">{article.title}</h4>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                                            <Clock size={10} /> {article.time} read
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    );
}
