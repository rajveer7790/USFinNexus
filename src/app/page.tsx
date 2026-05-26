import Link from 'next/link';
import type { Metadata } from 'next';
import AdUnit from '@/components/AdUnit';
import { AD_SLOTS } from '@/lib/adConfig';
import dynamic from 'next/dynamic';
const HomeHeroWidget = dynamic(() => import('@/components/HomeHeroWidget'));
import {
    Home, DollarSign, TrendingUp, Car, Calculator,
    Scale, ArrowLeftRight, BarChart2, Table2,
    Landmark, FileText, Target, PiggyBank,
    Activity, Percent, LineChart, Map, ChevronRight,
    BookOpen, Star, Lock,
    Shield, Zap, ArrowRight,
    Eye, Download,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Free Mortgage & Finance Calculators 2026 | USFinNexus',
    description: 'Free mortgage, affordability, refinance, auto & personal loan calculators. Instant PDF + CSV downloads — no signup, no email, no lead-gen spam. Built for Americans.',
    keywords: [
        'free mortgage calculator', 'mortgage calculator 2026', 'home affordability calculator',
        'refinance calculator', 'DTI calculator', 'amortization schedule calculator',
        'free financial calculators', 'PITI calculator', 'mortgage calculator with PDF',
        'no signup mortgage calculator', 'CFPB mortgage calculator', 'FHA loan calculator',
        'VA loan calculator', 'debt payoff calculator', 'retirement calculator',
    ],
    alternates: { canonical: 'https://usfinnexus.com' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://usfinnexus.com',
        siteName: 'USFinNexus',
        title: 'Free Mortgage & Finance Calculators 2026 | USFinNexus',
        description: '28+ free CFPB-compliant mortgage and finance calculators. Instant PDF + CSV reports. No signup, no email, no lead-gen. Built for Americans.',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus — Free Mortgage & Finance Calculators for Americans' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Mortgage & Finance Calculators 2026 | USFinNexus',
        description: '28+ free CFPB-compliant calculators. Instant PDF reports. Zero data collection. No signup ever.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

/* ═══ DATA ═══ */
const RATES = [
    { l: '30-Yr Fixed', v: '6.37%' }, { l: '15-Yr Fixed', v: '5.72%' },
    { l: 'FHA', v: '6.06%' }, { l: 'VA', v: '5.95%' },
    { l: 'CONFORMING', v: '$832,750' }, { l: 'FHA FLOOR', v: '$541,287' },
    { l: 'MAX DTI', v: '43%' }, { l: 'PMI @', v: '78% LTV' },
];

const STEPS = [
    { n: '01', h: 'Pick a Calculator', p: 'Choose from 28+ CFPB-compliant tools.' },
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
    { href: '/calculators/rental-property', icon: Home, title: 'Rental Property ROI', desc: 'Cash flow & Cap Rate analyzer.', badge: 'new', cat: 'mortgage' },
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
    { href: '/calculators/fire-planner', icon: TrendingUp, title: 'FIRE Planner', desc: 'Early retirement timeline.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/investment', icon: LineChart, title: 'Compound Interest', desc: 'Investment growth calculator.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/drip', icon: LineChart, title: 'DRIP Forecaster', desc: 'Dividend reinvestment plan.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/income-tax', icon: FileText, title: 'Income Tax 2026', desc: '2026 brackets + TCJA sunset.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/crypto-tax', icon: FileText, title: 'Crypto Tax Estimator', desc: 'Capital gains tax estimator.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/options-profit', icon: BarChart2, title: 'Options Profit/Loss', desc: 'Visualizer for Calls/Puts.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/budget', icon: PiggyBank, title: 'Budget 50/30/20', desc: 'Needs, wants, savings split.', cat: 'wealth' },
    // Regional
    { href: '/calculators/california', icon: Map, title: 'California Closing', desc: 'CA-specific costs.', cat: 'regional' },
    { href: '/calculators/texas', icon: Map, title: 'Texas Closing', desc: 'TX-specific costs.', cat: 'regional' },
    { href: '/calculators/florida', icon: Map, title: 'Florida Closing', desc: 'FL-specific costs.', cat: 'regional' },
    { href: '/calculators/closing-costs', icon: FileText, title: 'General Closing', desc: 'National average estimate.', cat: 'regional' },
];

const QUICK_TOOLS = [
    { href: '/calculators/mortgage', icon: Home, title: 'Mortgage', hot: true },
    { href: '/calculators/affordability', icon: DollarSign, title: 'Affordability', hot: true },
    { href: '/calculators/dti', icon: Scale, title: 'DTI Ratio' },
    { href: '/calculators/refinance', icon: TrendingUp, title: 'Refinance' },
    { href: '/calculators/auto-loan', icon: Car, title: 'Auto Loan' },
    { href: '/calculators/retirement', icon: LineChart, title: 'Retirement' },
    { href: '/calculators/income-tax', icon: FileText, title: 'Income Tax' },
    { href: '/calculators/debt-payoff', icon: Target, title: 'Debt Payoff' },
    { href: '/calculators/amortization', icon: Table2, title: 'Amortization' },
    { href: '/calculators/closing-costs', icon: Calculator, title: 'Closing Costs' },
];

const STATS = [
    { val: '28+', label: 'Free Calculators', src: 'Platform' },
    { val: '$0', label: 'Cost to You', src: 'Always' },
    { val: '0 bytes', label: 'Data Collected', src: 'Privacy' },
    { val: '100%', label: 'Free, Forever', src: 'Promise' },
];

const DIFFS = [
    { icon: Shield, h: 'CFPB-Compliant Math', p: 'Every formula follows Consumer Financial Protection Bureau guidelines.', c: 'di-cyan' },
    { icon: Lock, h: 'Zero Data Collection', p: 'All calculations run client-side — nothing hits our servers.', c: 'di-mag' },
    { icon: Download, h: 'Instant PDF Reports', p: 'One-click professional PDF. Generated in your browser.', c: 'di-vio' },
    { icon: Eye, h: 'No Paywalls or Signup', p: 'Every tool is free forever. No email walls. No lead-gen.', c: 'di-lime' },
    { icon: Zap, h: '2026 Limits Updated', p: '$832,750 conforming · $541,287 FHA floor · Updated monthly.', c: 'di-amb' },
];

const HOME_FAQS = [
    {
        question: 'Are all USFinNexus calculators really free?',
        answer: 'Yes — every <strong>free mortgage calculator</strong> and <strong>financial calculator</strong> on USFinNexus is 100% <strong>free</strong>, forever. There are no premium tiers, no email walls, and no lead-gen forms. PDF and CSV exports are also always free. The site is supported by non-intrusive display ads, not lender referral commissions.',
    },
    {
        question: 'Does USFinNexus sell my data to mortgage lenders?',
        answer: 'No. All calculations run entirely in your browser (client-side). Nothing you type into any calculator is sent to our servers. We do not collect, store, or sell any personally identifiable information. Zero bytes of your financial data leave your device.',
    },
    {
        question: 'What is the 2026 conforming loan limit?',
        answer: 'The 2026 FHFA conforming loan limit is $832,750 for most U.S. counties. In high-cost areas (parts of California, New York, Hawaii, and other high-cost metros), the ceiling rises to $1,249,125. Loans above these limits are classified as jumbo loans and carry different qualification requirements.',
    },
    {
        question: 'How accurate are the mortgage calculators?',
        answer: 'All formulas follow CFPB (Consumer Financial Protection Bureau) guidelines and standard U.S. amortization math. Results are accurate estimates based on the inputs you provide. Actual lender quotes will vary based on your credit score, income, property appraisal, and lender-specific fees. Always confirm final numbers with a licensed mortgage professional.',
    },
    {
        question: 'What is a good debt-to-income ratio for buying a home?',
        answer: 'Conventional lenders generally require a back-end DTI (total monthly debts ÷ gross income) of 43% or lower. The CFPB\'s Qualified Mortgage rule caps back-end DTI at 43%. For the best rates, aim for a front-end DTI (housing costs only) under 28% and a back-end DTI under 36%.',
    },
    {
        question: 'Can I download my mortgage calculation results?',
        answer: 'Yes. Every calculator on USFinNexus includes a free one-click PDF export and CSV download. The PDF includes your full amortization schedule, monthly payment breakdown (principal, interest, taxes, insurance, PMI), and total cost summary — generated entirely in your browser with no server contact.',
    },
];

/* ═══ PAGE ═══ */
export default function HomePage() {
    return (
        <div className="neo-root">

            {/* ═══ ANNOUNCEMENT BAR ═══ */}
            <div className="ph-announce">
                <div className="ph-announce-inner neo-container">
                    <span className="ph-ann-dot" />
                    <span>30-Yr Fixed <strong>6.37%</strong></span>
                    <span className="ph-ann-sep">·</span>
                    <span>15-Yr Fixed <strong>5.72%</strong></span>
                    <span className="ph-ann-sep">·</span>
                    <span>FHA <strong>6.06%</strong></span>
                    <span className="ph-ann-sep">·</span>
                    <span>Conforming <strong>$832,750</strong></span>
                    <span className="ph-ann-tag">May 2026 · CFPB Compliant</span>
                </div>
            </div>

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
                            CFPB Compliant · May 2026
                        </div>
                        <h1 className="neo-h1">
                            <span className="neo-h1-w1">Free Mortgage Calculator</span>
                            <span className="neo-h1-w2">& Finance Tools 2026</span>
                            <span className="neo-h1-w3">— No Signup Required</span>
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
                                { i: Lock, t: 'Zero Data' },
                                { i: Shield, t: 'CFPB Compliant' },
                                { i: Download, t: 'Free PDF Export' },
                            ].map(x => (
                                <span key={x.t} className="neo-trust-pill"><x.i size={12} /> {x.t}</span>
                            ))}
                        </div>
                        {/* Mini stats row */}
                        <div className="ph-hero-stats neo-reveal neo-reveal--d4">
                            <div className="ph-hero-stat"><span className="ph-hs-val">28+</span><span className="ph-hs-lbl">Free Tools</span></div>
                            <div className="ph-hero-stat-div" />
                            <div className="ph-hero-stat"><span className="ph-hs-val">$0</span><span className="ph-hs-lbl">Cost Forever</span></div>
                            <div className="ph-hero-stat-div" />
                            <div className="ph-hero-stat"><span className="ph-hs-val">0 bytes</span><span className="ph-hs-lbl">Data Stored</span></div>
                        </div>
                    </div>

                    {/* Right — Live Interactive Widget */}
                    <div className="neo-hero-right neo-reveal neo-reveal--d3">
                        <HomeHeroWidget />
                    </div>
                </div>
            </section>

            {/* ═══ QUICK ACCESS TOOLS ═══ */}
            <div className="ph-quick-zone">
                <div className="neo-container">
                    <div className="ph-quick-label">Popular Calculators</div>
                    <div className="ph-quick-row">
                        {QUICK_TOOLS.map(t => (
                            <Link key={t.href} href={t.href} className="ph-quick-item">
                                <t.icon size={15} />
                                <span>{t.title}</span>
                                {t.hot && <span className="ph-hot">HOT</span>}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

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
                    <p className="neo-sec-p">Every calculator is CFPB-compliant with instant PDF export.</p>

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
                    <h2 className="neo-sec-h2 neo-sec-h2--light">Used by homebuyers <em>nationwide.</em></h2>
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
                                        <h3>{d.h}</h3>
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
                                { l: 'CFPB Compliant', them: '✕', us: '✓' },
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
                    <p className="neo-cta-p">28+ professional tools. Free PDF exports. Zero lead-gen. Always private.</p>
                    <div className="neo-cta-btns">
                        <Link href="/calculators/mortgage" className="neo-btn-main">
                            <Home size={16} /> Start Mortgage Calculator <ArrowRight size={14} />
                        </Link>
                        <Link href="/guides" className="neo-btn-alt">Financial Guides</Link>
                    </div>
                </div>
            </section>

            {/* ═══ FAQ (LIGHT ZONE — rich snippets) ═══ */}
            <section className="neo-light-zone" aria-labelledby="faq-heading">
                <div className="neo-container" style={{ maxWidth: '800px', paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
                    <div className="neo-sec-tag"><span className="neo-sec-dot" /> FAQ</div>
                    <h2 className="neo-sec-h2" id="faq-heading">Frequently Asked <em>Questions</em></h2>
                    <p className="neo-sec-p">Quick answers about our free mortgage and finance calculators.</p>
                    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {HOME_FAQS.map((faq, i) => (
                            <details key={i} style={{
                                borderTop: i === 0 ? '1px solid var(--color-border)' : undefined,
                                borderBottom: '1px solid var(--color-border)',
                            }}>
                                <summary style={{
                                    padding: '1rem 0',
                                    fontWeight: 700,
                                    fontSize: '0.9375rem',
                                    color: 'var(--color-text)',
                                    cursor: 'pointer',
                                    listStyle: 'none',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '1rem',
                                }}>
                                    {faq.question}
                                    <ChevronRight size={16} style={{ flexShrink: 0, color: 'var(--color-text-muted)', transform: 'rotate(90deg)' }} />
                                </summary>
                                <p style={{
                                    padding: '0 0 1rem',
                                    fontSize: '0.875rem',
                                    lineHeight: '1.7',
                                    color: 'var(--color-text-muted)',
                                    margin: 0,
                                }}>
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                        Have more questions? Visit our <Link href="/methodology" style={{ color: '#0da6f2', fontWeight: 600 }}>Methodology page</Link> or <Link href="/contact" style={{ color: '#0da6f2', fontWeight: 600 }}>Contact us</Link>.
                    </p>
                </div>
            </section>
            {/* FAQPage JSON-LD for rich snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: HOME_FAQS.map(faq => ({
                        '@type': 'Question',
                        name: faq.question,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: faq.answer,
                        },
                    })),
                }) }}
            />
            {/* ItemList JSON-LD — calculator collection (helps Google understand tool breadth) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    name: 'Free Mortgage & Finance Calculators',
                    description: '28+ free, CFPB-compliant mortgage and finance calculators for Americans.',
                    url: 'https://usfinnexus.com',
                    numberOfItems: 28,
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Mortgage Calculator', url: 'https://usfinnexus.com/calculators/mortgage' },
                        { '@type': 'ListItem', position: 2, name: 'Home Affordability Calculator', url: 'https://usfinnexus.com/calculators/affordability' },
                        { '@type': 'ListItem', position: 3, name: 'Refinance Calculator', url: 'https://usfinnexus.com/calculators/refinance' },
                        { '@type': 'ListItem', position: 4, name: 'Debt-to-Income (DTI) Calculator', url: 'https://usfinnexus.com/calculators/dti' },
                        { '@type': 'ListItem', position: 5, name: 'Amortization Schedule Calculator', url: 'https://usfinnexus.com/calculators/amortization' },
                        { '@type': 'ListItem', position: 6, name: 'Rent vs. Buy Calculator', url: 'https://usfinnexus.com/calculators/rent-vs-buy' },
                        { '@type': 'ListItem', position: 7, name: 'FHA Loan Calculator', url: 'https://usfinnexus.com/calculators/fha' },
                        { '@type': 'ListItem', position: 8, name: 'VA Loan Calculator', url: 'https://usfinnexus.com/calculators/va' },
                        { '@type': 'ListItem', position: 9, name: 'Closing Costs Calculator', url: 'https://usfinnexus.com/calculators/closing-costs' },
                        { '@type': 'ListItem', position: 10, name: 'Auto Loan Calculator', url: 'https://usfinnexus.com/calculators/auto-loan' },
                        { '@type': 'ListItem', position: 11, name: 'Debt Payoff Planner', url: 'https://usfinnexus.com/calculators/debt-payoff' },
                        { '@type': 'ListItem', position: 12, name: 'Retirement Planner', url: 'https://usfinnexus.com/calculators/retirement' },
                        { '@type': 'ListItem', position: 13, name: 'Income Tax Calculator 2026', url: 'https://usfinnexus.com/calculators/income-tax' },
                        { '@type': 'ListItem', position: 14, name: 'HELOC Calculator', url: 'https://usfinnexus.com/calculators/heloc' },
                        { '@type': 'ListItem', position: 15, name: 'Down Payment Savings Calculator', url: 'https://usfinnexus.com/calculators/down-payment' },
                    ],
                }) }}
            />
            {/* HowTo JSON-LD for How It Works steps */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'HowTo',
                    name: 'How to Use USFinNexus Financial Calculators',
                    description: 'Get a professional PDF mortgage or finance calculation in four simple steps — no signup, no email required.',
                    totalTime: 'PT1M',
                    tool: [{ '@type': 'HowToTool', name: 'Web browser' }],
                    step: [
                        {
                            '@type': 'HowToStep',
                            position: 1,
                            name: 'Pick a Calculator',
                            text: 'Choose from 28+ CFPB-compliant mortgage and finance calculators covering home buying, refinancing, debt payoff, retirement, and more.',
                            url: 'https://usfinnexus.com/#tools',
                        },
                        {
                            '@type': 'HowToStep',
                            position: 2,
                            name: 'Enter Your Numbers',
                            text: 'Fill in simple inputs like home price, down payment, and interest rate. No signup or email address required — ever.',
                            url: 'https://usfinnexus.com/calculators/mortgage',
                        },
                        {
                            '@type': 'HowToStep',
                            position: 3,
                            name: 'Get Instant Results',
                            text: 'See a full breakdown of your mortgage payment with charts and amortization tables, calculated instantly in your browser.',
                            url: 'https://usfinnexus.com/calculators/mortgage',
                        },
                        {
                            '@type': 'HowToStep',
                            position: 4,
                            name: 'Download Free PDF Report',
                            text: 'Click the PDF button to download a professional report with your full amortization schedule. Generated in your browser — zero server contact.',
                            url: 'https://usfinnexus.com/calculators/mortgage',
                        },
                    ],
                }) }}
            />
        </div>
    );
}
