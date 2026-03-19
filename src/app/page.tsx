import Link from 'next/link';
import type { Metadata } from 'next';
import AdUnit from '@/components/AdUnit';
import { AD_SLOTS } from '@/lib/adConfig';
import {
    Home, DollarSign, TrendingUp, Car, Calculator,
    Scale, ArrowLeftRight, BarChart2, Table2,
    Landmark, FileText, Target, PiggyBank,
    Activity, Percent, LineChart, Map, ChevronRight,
    BookOpen, Star, CheckCircle, Users, Lock,
    Shield, Zap, TrendingDown, ArrowRight, Sparkles,
    Eye, Download, Clock,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Free Mortgage & Finance Calculators 2026 | USFinNexus',
    description:
        'Free mortgage, affordability, refinance, auto & personal loan calculators. Instant PDF + CSV downloads — no signup, no email, no lead-gen spam. Built for Americans.',
};

/* ═══ DATA ═══ */
const RATES = [
    { l: '30-Yr Fixed', v: '6.84%' }, { l: '15-Yr Fixed', v: '6.12%' },
    { l: 'FHA', v: '6.53%' }, { l: 'VA', v: '6.28%' },
    { l: 'CONFORMING', v: '$832,750' }, { l: 'FHA FLOOR', v: '$541,287' },
    { l: 'MAX DTI', v: '43%' }, { l: 'PMI @', v: '78% LTV' },
];

const STEPS = [
    { n: '01', h: 'Pick a Calculator', p: 'Choose from 28+ CFPB-verified tools.' },
    { n: '02', h: 'Enter Numbers', p: 'Simple inputs — no signup or email.' },
    { n: '03', h: 'Get Results', p: 'Instant breakdown with charts & tables.' },
    { n: '04', h: 'Download PDF', p: 'One-click PDF report. Zero server contact.' },
];

const TOOLS = [
    // Mortgage & Housing
    { href: '/calculators/mortgage', icon: Home, title: 'Mortgage Calculator', desc: 'Full PITI + amortization. Instant PDF export.', badge: 'hot', cat: 'mortgage' },
    { href: '/calculators/affordability', icon: DollarSign, title: 'Home Affordability', desc: 'CFPB 28/43 DTI guidelines.', badge: 'hot', cat: 'mortgage' },
    { href: '/calculators/refinance', icon: TrendingUp, title: 'Refinance Calculator', desc: 'Monthly savings & break-even point.', badge: 'hot', cat: 'mortgage' },
    { href: '/calculators/rent-vs-buy', icon: ArrowLeftRight, title: 'Rent vs. Buy', desc: '5-year total cost comparison.', cat: 'mortgage' },
    { href: '/calculators/fha-va-usda', icon: Landmark, title: 'FHA / VA / USDA', desc: 'Government loan comparison.', cat: 'mortgage' },
    { href: '/calculators/heloc', icon: Home, title: 'HELOC', desc: 'Equity line estimator.', cat: 'mortgage' },
    { href: '/calculators/fha', icon: Home, title: 'FHA Calculator', desc: 'FHA-specific with MIP.', cat: 'mortgage' },
    { href: '/calculators/va', icon: Star, title: 'VA Calculator', desc: 'Zero-down VA loan math.', cat: 'mortgage' },
    { href: '/calculators/arm', icon: Activity, title: 'ARM Calculator', desc: 'Adjustable rate scenarios.', cat: 'mortgage' },
    { href: '/calculators/interest-only', icon: Percent, title: 'Interest-Only', desc: 'IO period vs full amortization.', cat: 'mortgage' },
    { href: '/calculators/amortization', icon: Table2, title: 'Amortization', desc: 'Full schedule with extra payments.', cat: 'mortgage' },
    { href: '/calculators/down-payment', icon: PiggyBank, title: 'Down Payment', desc: 'Savings timeline planner.', cat: 'mortgage' },
    { href: '/calculators/points-buydown', icon: BarChart2, title: 'Points Buy-Down', desc: 'Rate buy-down break-even.', cat: 'mortgage' },
    { href: '/calculators/dti', icon: Scale, title: 'DTI Calculator', desc: 'Front & back-end ratios.', cat: 'mortgage' },
    // Loans & Debt
    { href: '/calculators/auto-loan', icon: Car, title: 'Auto Loan', desc: 'Monthly payment + total interest.', cat: 'loans' },
    { href: '/calculators/student-loan', icon: BookOpen, title: 'Student Loan', desc: 'Repayment plan comparison.', badge: 'new', cat: 'loans' },
    { href: '/calculators/credit-card', icon: Target, title: 'Credit Card Payoff', desc: 'Payoff date + interest saved.', badge: 'new', cat: 'loans' },
    { href: '/calculators/personal-loan', icon: Calculator, title: 'Personal Loan', desc: 'APR comparison tool.', cat: 'loans' },
    { href: '/calculators/debt-payoff', icon: Target, title: 'Debt Payoff Planner', desc: 'Snowball vs Avalanche strategies.', badge: 'hot', cat: 'loans' },
    { href: '/calculators/comparison', icon: Scale, title: 'Loan Comparison', desc: 'Side-by-side loan analysis.', cat: 'loans' },
    // Wealth & Tax
    { href: '/calculators/retirement', icon: TrendingUp, title: 'Retirement Planner', desc: 'Compound growth projections.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/investment', icon: LineChart, title: 'Compound Interest', desc: 'Investment growth calculator.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/income-tax', icon: FileText, title: 'Income Tax 2026', desc: '2026 brackets + TCJA sunset.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/budget', icon: PiggyBank, title: 'Budget 50/30/20', desc: 'Needs, wants, savings split.', cat: 'wealth' },
    // Regional
    { href: '/calculators/california', icon: Map, title: 'California Closing', desc: 'CA-specific costs.', cat: 'regional' },
    { href: '/calculators/texas', icon: Map, title: 'Texas Closing', desc: 'TX-specific costs.', cat: 'regional' },
    { href: '/calculators/florida', icon: Map, title: 'Florida Closing', desc: 'FL-specific costs.', cat: 'regional' },
    { href: '/calculators/closing-costs', icon: FileText, title: 'General Closing', desc: 'National average estimate.', cat: 'regional' },
];

const STATS = [
    { val: '50,000+', label: 'Monthly Users', src: 'Analytics' },
    { val: '28+', label: 'Free Calculators', src: 'Platform' },
    { val: '$0', label: 'Cost to You', src: 'Always' },
    { val: '0 bytes', label: 'Data Collected', src: 'Privacy' },
];

const DIFFS = [
    { icon: Shield, h: 'CFPB-Verified Math', p: 'Every formula follows Consumer Financial Protection Bureau guidelines.', c: 'di-cyan' },
    { icon: Lock, h: 'Zero Data Collection', p: 'All calculations run client-side — nothing hits our servers.', c: 'di-mag' },
    { icon: Download, h: 'Instant PDF Reports', p: 'One-click professional PDF. Generated in your browser.', c: 'di-vio' },
    { icon: Eye, h: 'No Paywalls or Signup', p: 'Every tool is free forever. No email walls. No lead-gen.', c: 'di-lime' },
    { icon: Zap, h: '2026 Limits Updated', p: '$832,750 conforming · $541,287 FHA floor · Updated monthly.', c: 'di-amb' },
];

/* ═══ PAGE ═══ */
export default function HomePage() {
    return (
        <div className="neo-root">

            {/* ═══ HERO ═══ */}
            <section className="neo-hero">
                <div className="neo-orb neo-orb-a" />
                <div className="neo-orb neo-orb-b" />
                <div className="neo-orb neo-orb-c" />

                <div className="neo-hero-grid neo-container">
                    {/* Left */}
                    <div className="neo-hero-left">
                        <div className="neo-status neo-reveal">
                            <span className="neo-status-pulse" />
                            CFPB Compliant · March 2026
                        </div>
                        <h1 className="neo-h1 neo-reveal neo-reveal--d1">
                            <span className="neo-h1-w1">Smart Financial</span>
                            <span className="neo-h1-w2">Tools. Built for</span>
                            <span className="neo-h1-w3">Americans.</span>
                        </h1>
                        <p className="neo-hero-p neo-reveal neo-reveal--d2">
                            28+ professional calculators with instant <strong>PDF reports</strong>.
                            No signup, no email, no hidden fees — <strong>100% free, forever.</strong>
                        </p>
                        <div className="neo-hero-actions neo-reveal neo-reveal--d3">
                            <Link href="/calculators/mortgage" className="neo-btn-main">
                                <Home size={17} /> Mortgage Calculator <ArrowRight size={15} />
                            </Link>
                            <Link href="#tools" className="neo-btn-alt">
                                Browse All Tools <ChevronRight size={15} />
                            </Link>
                        </div>
                        <div className="neo-hero-trust neo-reveal neo-reveal--d4">
                            {[
                                { i: Users, t: '50K+ Users' },
                                { i: Lock, t: 'Zero Data' },
                                { i: Shield, t: 'CFPB Verified' },
                            ].map(x => (
                                <span key={x.t} className="neo-trust-pill"><x.i size={12} /> {x.t}</span>
                            ))}
                        </div>
                    </div>

                    {/* Right — Dashboard Preview */}
                    <div className="neo-hero-right neo-reveal neo-reveal--d3">
                        <div className="neo-dash">
                            <div className="neo-dash-top">
                                <div className="neo-dash-dots">
                                    <span className="dd-red" /><span className="dd-yel" /><span className="dd-grn" />
                                </div>
                                <span className="neo-dash-title">MORTGAGE CALCULATOR</span>
                            </div>
                            <div className="neo-dash-amount">$2,847<span>/mo</span></div>
                            <div className="neo-dash-sub">$450,000 loan · 30yr fixed · 6.84% APR</div>
                            <div className="neo-dash-bars">
                                {[
                                    { l: 'Principal', w: '72', c: 'bar-neo' },
                                    { l: 'Interest', w: '18', c: 'bar-mag' },
                                    { l: 'Tax', w: '6', c: 'bar-vio' },
                                    { l: 'Insurance', w: '4', c: 'bar-amb' },
                                ].map(b => (
                                    <div key={b.l} className="neo-bar-row">
                                        <span className="neo-bar-label">{b.l}</span>
                                        <div className="neo-bar-track">
                                            <div className={`neo-bar-fill ${b.c}`} style={{ width: `${b.w}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="neo-dash-chips">
                                <div className="neo-chip"><span className="neo-chip-val">$574K</span><span className="neo-chip-lbl">Total Paid</span></div>
                                <div className="neo-chip"><span className="neo-chip-val">$124K</span><span className="neo-chip-lbl">Interest</span></div>
                                <div className="neo-chip"><span className="neo-chip-val">78%</span><span className="neo-chip-lbl">PMI Drop</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ TICKER ═══ */}
            <div className="neo-ticker">
                <div className="neo-ticker-track">
                    {[...RATES, ...RATES].map((r, i) => (
                        <span key={i} className="neo-ticker-item">
                            <span className="neo-ticker-dot" />{r.l} <strong>{r.v}</strong>
                        </span>
                    ))}
                </div>
            </div>

            {/* ═══ HOW IT WORKS (LIGHT ZONE) ═══ */}
            <section className="neo-light-zone">
                <div className="neo-container neo-steps-section">
                    <div className="neo-sec-tag"><span className="neo-sec-dot" /> How It Works</div>
                    <h2 className="neo-sec-h2">Clarity in <em>four simple steps.</em></h2>
                    <p className="neo-sec-p">From question to professional PDF report in under 60 seconds.</p>
                    <div className="neo-steps-grid">
                        {STEPS.map(s => (
                            <div key={s.n} className="neo-step-card">
                                <div className="neo-step-num">{s.n}</div>
                                <h3>{s.h}</h3>
                                <p>{s.p}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ═══ ALL TOOLS ═══ */}
                <div className="neo-container neo-tools-section" id="tools">
                    <div className="neo-sec-tag"><span className="neo-sec-dot" /> Calculator Suite</div>
                    <h2 className="neo-sec-h2">28+ <em>free tools,</em> one platform.</h2>
                    <p className="neo-sec-p">Every calculator is CFPB-verified with instant PDF export.</p>

                    {/* Spotlight hero card */}
                    <Link href="/calculators/mortgage" className="neo-tool-hero">
                        <div>
                            <span className="neo-tool-badge neo-badge-hot">Most Popular</span>
                            <h3>Mortgage Calculator</h3>
                            <p>Full PITI breakdown with amortization schedule, PMI, taxes & insurance. Instant PDF export.</p>
                        </div>
                        <span className="neo-hero-launch"><Home size={15} /> Launch Calculator <ArrowRight size={14} /></span>
                    </Link>

                    <div className="neo-tools-grid">
                        {TOOLS.filter(t => t.href !== '/calculators/mortgage').map(t => (
                            <Link key={t.href} href={t.href} className="neo-tool-card">
                                {t.badge && (
                                    <span className={`neo-tool-badge ${t.badge === 'hot' ? 'neo-badge-hot' : t.badge === 'new' ? 'neo-badge-new' : ''}`}>
                                        {t.badge === 'hot' ? 'Popular' : 'New'}
                                    </span>
                                )}
                                <h3><t.icon size={15} className="neo-tool-card-icon" /> {t.title}</h3>
                                <p>{t.desc}</p>
                                <span className="neo-tool-go"><ArrowRight size={12} /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ STATS (DARK BAND) ═══ */}
            <section className="neo-stats-band">
                <div className="neo-stats-bg" />
                <div className="neo-container neo-stats-inner">
                    <div className="neo-sec-tag neo-sec-tag--dark"><span className="neo-sec-dot" /> By The Numbers</div>
                    <h2 className="neo-sec-h2 neo-sec-h2--light">Trusted by <em>thousands.</em></h2>
                    <div className="neo-stats-row">
                        {STATS.map(s => (
                            <div key={s.label} className="neo-stat-block">
                                <div className="neo-stat-val">{s.val}</div>
                                <div className="neo-stat-name">{s.label}</div>
                                <div className="neo-stat-src">{s.src}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ AD UNIT ═══ */}
            <div className="neo-container py-4">
                <AdUnit slot={AD_SLOTS.HOMEPAGE_BANNER} format="horizontal" />
            </div>

            {/* ═══ WHY USFINNEXUS (LIGHT) ═══ */}
            <section className="neo-light-zone">
                <div className="neo-container neo-diff-section">
                    <div className="neo-sec-tag"><span className="neo-sec-dot" /> Why USFinNexus</div>
                    <h2 className="neo-sec-h2">What makes us <em>different.</em></h2>
                    <div className="neo-diff-grid">
                        <div className="neo-diff-list">
                            {DIFFS.map(d => (
                                <div key={d.h} className="neo-diff-item">
                                    <div className={`neo-diff-icon ${d.c}`}><d.icon size={18} /></div>
                                    <div>
                                        <h4>{d.h}</h4>
                                        <p>{d.p}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="neo-diff-visual">
                            <div className="neo-dv-glow" />
                            <div className="neo-dv-title">Feature Comparison</div>
                            <div className="neo-dv-header">
                                <span>Others</span>
                                <span>USFinNexus</span>
                            </div>
                            {[
                                { l: 'Cost', them: '$9.99/mo', us: 'Free Forever' },
                                { l: 'Email Required', them: 'Yes', us: 'Never' },
                                { l: 'Data Collected', them: 'Everything', us: '0 bytes' },
                                { l: 'PDF Export', them: 'Premium Only', us: 'Always Free' },
                                { l: 'CFPB Verified', them: '✕', us: '✓' },
                            ].map(r => (
                                <div key={r.l} className="neo-dv-row">
                                    <span className="neo-dv-label">{r.l}</span>
                                    <span className="neo-dv-them">{r.them}</span>
                                    <span className="neo-dv-us">{r.us}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="neo-cta">
                <div className="neo-cta-glow-a" />
                <div className="neo-cta-glow-b" />
                <div className="neo-container neo-cta-inner">
                    <div className="neo-sec-tag neo-sec-tag--dark"><span className="neo-sec-dot" /> Get Started</div>
                    <h2 className="neo-sec-h2 neo-sec-h2--light">Your financial clarity <em>starts here.</em></h2>
                    <p className="neo-cta-p">Join 50,000+ monthly users making smarter decisions. Always free. Always private.</p>
                    <div className="neo-cta-btns">
                        <Link href="/calculators/mortgage" className="neo-btn-main">
                            <Home size={16} /> Start Mortgage Calculator <ArrowRight size={14} />
                        </Link>
                        <Link href="/guides" className="neo-btn-alt">Financial Guides</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
