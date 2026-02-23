import Link from 'next/link';
import type { Metadata } from 'next';
import {
    Home, DollarSign, TrendingUp, Car, Calculator,
    Scale, ArrowLeftRight, BarChart2, FileDown, Table2, Link2,
    Shield, Zap, Star,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Free Mortgage & Finance Calculators 2026 | USFinNexus',
    description:
        'Free mortgage, affordability, refinance, auto & personal loan calculators. Instant PDF + CSV downloads — no signup, no email, no lead-gen spam. Built for Americans.',
};

const TOOLS = [
    {
        href: '/calculators/mortgage',
        icon: Home,
        title: 'Mortgage Calculator',
        desc: 'Full PITI breakdown, amortization schedule, extra payments, and free PDF + CSV export.',
        badge: 'Most Popular',
        color: '#0A2540',
    },
    {
        href: '/calculators/affordability',
        icon: DollarSign,
        title: 'Affordability Calculator',
        desc: 'Based on CFPB 28%/43% DTI guidelines. Find out how much house you can actually afford.',
        badge: '',
        color: '#00C853',
    },
    {
        href: '/calculators/refinance',
        icon: TrendingUp,
        title: 'Refinance Calculator',
        desc: 'Calculate monthly savings and break-even timeline before refinancing your mortgage.',
        badge: '',
        color: '#1a4d9a',
    },
    {
        href: '/calculators/auto-loan',
        icon: Car,
        title: 'Auto Loan Calculator',
        desc: 'Vehicle financing with taxes, trade-in, full amortization, and CSV download.',
        badge: '',
        color: '#7c3aed',
    },
    {
        href: '/calculators/personal-loan',
        icon: Calculator,
        title: 'Personal Loan Calculator',
        desc: 'Calculate any debt payment with full payoff schedule and exportable data.',
        badge: '',
        color: '#dc2626',
    },
    {
        href: '/calculators/comparison',
        icon: Scale,
        title: 'Loan Comparison',
        desc: 'Compare up to 3 mortgage scenarios side by side. Find the best deal instantly.',
        badge: 'Unique',
        color: '#d97706',
    },
    {
        href: '/calculators/rent-vs-buy',
        icon: ArrowLeftRight,
        title: 'Rent vs. Buy',
        desc: 'Comprehensive net-cost analysis to help you decide whether to rent or buy.',
        badge: '',
        color: '#0891b2',
    },
    {
        href: '/calculators/points-buydown',
        icon: BarChart2,
        title: 'Points Buy-Down',
        desc: 'Find break-even on paying discount points to lower your interest rate.',
        badge: '',
        color: '#059669',
    },
];

const DIFFERENTIATORS = [
    {
        icon: FileDown,
        title: 'Free PDF Reports',
        desc: 'Professional multi-page reports with your results, tables, and legal disclaimers — downloaded in one click.',
    },
    {
        icon: Table2,
        title: 'Free CSV / Excel',
        desc: 'Full amortization data ready to open in Excel or Google Sheets. No pay wall ever.',
    },
    {
        icon: Link2,
        title: 'Shareable Links',
        desc: 'One click to copy a URL with all your inputs pre-filled. Share with your realtor or spouse.',
    },
    {
        icon: Shield,
        title: 'Privacy First',
        desc: 'All calculations run locally in your browser. Your financial data is never sent to any server.',
    },
    {
        icon: Zap,
        title: 'Real-Time Results',
        desc: 'Results update as you type — no "Calculate" button needed. Sliders and inputs stay in sync.',
    },
    {
        icon: Star,
        title: 'US Standard Math',
        desc: 'Formulas follow CFPB guidelines, FHFA 2026 loan limits ($832,750), and standard US amortization.',
    },
];

export default function HomePage() {
    return (
        <div>
            {/* ── Hero ──────────────────────────────────────────────────────────────── */}
            <section className="gradient-hero text-white py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6" style={{ background: 'rgba(0,200,83,0.2)', color: '#00C853', border: '1px solid rgba(0,200,83,0.3)' }}>
                        <Zap size={12} /> 100% Free • No Signup • No Lead-Gen Spam
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white" style={{ lineHeight: 1.1 }}>
                        Free Mortgage &amp; Finance
                        <br />
                        <span style={{ color: '#00C853' }}>Calculators for Americans</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10">
                        Professional-grade mortgage calculations with instant <strong className="text-white">PDF &amp; CSV downloads</strong> — no email, no signup, no lender spam. Built to US CFPB standards.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/calculators/mortgage"
                            className="px-8 py-4 rounded-xl text-lg font-black text-navy-900 transition-all hover:-translate-y-1 hover:shadow-xl"
                            style={{ background: '#00C853', color: '#060f1e' }}
                        >
                            🏠 Start Mortgage Calculator
                        </Link>
                        <Link
                            href="/calculators/affordability"
                            className="px-8 py-4 rounded-xl text-lg font-semibold border border-white/30 text-white hover:bg-white/10 transition-all"
                        >
                            💰 How Much Can I Afford?
                        </Link>
                    </div>

                    {/* Trust stats */}
                    <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
                        {[
                            { value: '8', label: 'Free Calculators' },
                            { value: '$0', label: 'Downloads Cost' },
                            { value: '2026', label: 'CFPB Standards' },
                            { value: '∞', label: 'No Signups' },
                        ].map(s => (
                            <div key={s.label}>
                                <p className="text-3xl font-black" style={{ color: '#00C853' }}>{s.value}</p>
                                <p className="text-sm text-white/50 mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why USFinNexus ──────────────────────────────────────────────────── */}
            <section className="py-16 px-4" style={{ background: 'var(--color-bg-secondary)' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-black text-center mb-3" style={{ color: 'var(--color-text)' }}>
                        Why Americans Choose USFinNexus
                    </h2>
                    <p className="text-center mb-10 max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                        Bankrate, Zillow, and NerdWallet don&rsquo;t offer free PDF/CSV downloads. We do.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {DIFFERENTIATORS.map(d => (
                            <div key={d.title} className="card p-5 flex gap-4">
                                <div className="p-2.5 rounded-xl flex-shrink-0 h-fit" style={{ background: 'rgba(0,200,83,0.12)' }}>
                                    <d.icon size={20} style={{ color: '#00C853' }} />
                                </div>
                                <div>
                                    <p className="font-bold mb-1" style={{ color: 'var(--color-text)' }}>{d.title}</p>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{d.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── All Tools ───────────────────────────────────────────────────────── */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-black text-center mb-3" style={{ color: 'var(--color-text)' }}>
                        All Free Finance Tools
                    </h2>
                    <p className="text-center mb-10" style={{ color: 'var(--color-text-muted)' }}>
                        Every tool is 100% free, real-time updating, and PDF/CSV ready.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {TOOLS.map(tool => (
                            <Link key={tool.href} href={tool.href} className="tool-card relative group">
                                {tool.badge && (
                                    <span className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: '#00C853', color: '#060f1e' }}>
                                        {tool.badge}
                                    </span>
                                )}
                                <div className="p-3 rounded-xl w-fit mb-3" style={{ background: `${tool.color}15` }}>
                                    <tool.icon size={22} style={{ color: tool.color }} />
                                </div>
                                <h3 className="font-bold mb-1.5" style={{ color: 'var(--color-text)' }}>{tool.title}</h3>
                                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{tool.desc}</p>
                                <p className="text-xs font-bold mt-3" style={{ color: '#00C853' }}>
                                    Open Calculator →
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 2026 Reference ─────────────────────────────────────────────────── */}
            <section className="py-12 px-4" style={{ background: 'var(--color-bg-secondary)' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-black text-center mb-8" style={{ color: 'var(--color-text)' }}>
                        2026 US Mortgage Reference Data
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { label: 'Conforming Loan Limit', value: '$832,750', source: 'FHFA 2026' },
                            { label: 'FHA Floor (Low-Cost)', value: '$541,287', source: 'HUD 2026' },
                            { label: 'FHA Ceiling (High-Cost)', value: '$1,249,125', source: 'HUD 2026' },
                            { label: 'QM Max DTI (CFPB)', value: '43%', source: 'CFPB Standard' },
                            { label: 'PMI Triggered Below', value: '20% Down', source: 'Conventional' },
                            { label: 'PMI Auto-Cancel LTV', value: '78%', source: 'HPA (Federal Law)' },
                            { label: 'Front-End DTI Limit', value: '28%', source: 'CFPB Recommended' },
                            { label: 'VA Baseline Limit', value: '$832,750', source: 'VA 2026' },
                        ].map(r => (
                            <div key={r.label} className="card p-4 text-center">
                                <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>{r.label}</p>
                                <p className="text-xl font-black" style={{ color: 'var(--color-navy)' }}>{r.value}</p>
                                <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>{r.source}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Bottom ──────────────────────────────────────────────────────── */}
            <section className="gradient-navy py-16 px-4 text-center text-white">
                <h2 className="text-3xl font-black mb-4">Ready to Run the Numbers?</h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto">
                    Free PDF reports, real-time results, no signup. Built for Americans, backed by CFPB standards.
                </p>
                <Link href="/calculators/mortgage" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-black transition-all hover:-translate-y-1" style={{ background: '#00C853', color: '#060f1e' }}>
                    <Home size={20} />
                    Open Mortgage Calculator — Free
                </Link>
            </section>
        </div>
    );
}
