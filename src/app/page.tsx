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
    title: 'Mortgage & Finance Calculators | USFinNexus',
    description: 'Free mortgage and personal finance calculators for U.S. consumers. Estimate mortgage payments, affordability, refinance, debt, taxes, retirement and more with clear assumptions.',
    alternates: { canonical: 'https://usfinnexus.com/' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://usfinnexus.com/',
        siteName: 'USFinNexus',
        title: 'Mortgage & Finance Calculators | USFinNexus',
        description: 'Free mortgage and personal finance calculators with source-linked rules, clear assumptions and browser-based calculation tools.',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus mortgage and finance calculators' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage & Finance Calculators | USFinNexus',
        description: 'Free mortgage and personal finance calculators for U.S. consumers with clear assumptions and planning estimates.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

/* ═══ DATA ═══ */
const RATES = [
    { l: '2026 CONFORMING', v: '$832,750' },
    { l: 'HIGH-COST CEILING', v: '$1,249,125' },
    { l: '2026 FHA FLOOR', v: '$541,287' },
    { l: 'FHA CEILING', v: '$1,249,125' },
    { l: 'TAX STD · SINGLE', v: '$16,100' },
    { l: 'TAX STD · MFJ', v: '$32,200' },
    { l: 'SOCIAL SECURITY BASE', v: '$184,500' },
    { l: 'PMI HPA AUTO', v: '78%*' },
];

const STEPS = [
    { n: '01', h: 'Pick a Calculator', p: 'Choose the tool that matches your planning question.' },
    { n: '02', h: 'Enter Numbers', p: 'Use your own assumptions — no calculator signup required.' },
    { n: '03', h: 'Review Results', p: 'See breakdowns, charts, ratios and planning estimates.' },
    { n: '04', h: 'Export When Available', p: 'Use browser-generated PDF or CSV exports on supported tools.' },
];

const TOOLS = [
    // Mortgage & Housing
    { href: '/calculators/mortgage', icon: Home, title: 'Mortgage Calculator', desc: 'PITI, PMI, HOA and amortization estimates.', badge: 'hot', cat: 'mortgage' },
    { href: '/calculators/affordability', icon: DollarSign, title: 'Home Affordability', desc: 'Income, debt and planning DTI scenarios.', badge: 'hot', cat: 'mortgage' },
    { href: '/calculators/refinance', icon: TrendingUp, title: 'Refinance Calculator', desc: 'Monthly savings and break-even scenarios.', badge: 'hot', cat: 'mortgage' },
    { href: '/calculators/rent-vs-buy', icon: ArrowLeftRight, title: 'Rent vs. Buy', desc: 'Compare estimated ownership and renting costs.', cat: 'mortgage' },
    { href: '/calculators/rental-property', icon: Home, title: 'Rental Property ROI', desc: 'Cash flow and cap-rate planning.', badge: 'new', cat: 'mortgage' },
    { href: '/calculators/fha-va-usda', icon: Landmark, title: 'FHA / VA / USDA', desc: 'Compare government-backed loan scenarios.', cat: 'mortgage' },
    { href: '/calculators/heloc', icon: Home, title: 'HELOC', desc: 'Home-equity line planning estimate.', cat: 'mortgage' },
    { href: '/calculators/fha', icon: Home, title: 'FHA Calculator', desc: 'FHA-focused payment and MIP estimates.', cat: 'mortgage' },
    { href: '/calculators/va', icon: Star, title: 'VA Calculator', desc: 'VA-focused mortgage planning.', cat: 'mortgage' },
    { href: '/calculators/arm', icon: Activity, title: 'ARM Calculator', desc: 'Adjustable-rate mortgage scenarios.', cat: 'mortgage' },
    { href: '/calculators/interest-only', icon: Percent, title: 'Interest-Only', desc: 'Interest-only period vs amortizing payment.', cat: 'mortgage' },
    { href: '/calculators/amortization', icon: Table2, title: 'Amortization', desc: 'Payment schedule with extra-payment scenarios.', cat: 'mortgage' },
    { href: '/calculators/down-payment', icon: PiggyBank, title: 'Down Payment', desc: 'Savings timeline and target planning.', cat: 'mortgage' },
    { href: '/calculators/points-buydown', icon: BarChart2, title: 'Points Buy-Down', desc: 'Rate buy-down break-even estimate.', cat: 'mortgage' },
    { href: '/calculators/dti', icon: Scale, title: 'DTI Calculator', desc: 'Front-end and back-end debt ratios.', cat: 'mortgage' },
    // Loans & Debt
    { href: '/calculators/auto-loan', icon: Car, title: 'Auto Loan', desc: 'Monthly payment and total interest estimate.', cat: 'loans' },
    { href: '/calculators/student-loan', icon: BookOpen, title: 'Student Loan', desc: 'Repayment planning scenarios.', badge: 'new', cat: 'loans' },
    { href: '/calculators/credit-card', icon: Target, title: 'Credit Card Payoff', desc: 'Payoff timeline and interest estimate.', badge: 'new', cat: 'loans' },
    { href: '/calculators/personal-loan', icon: Calculator, title: 'Personal Loan', desc: 'Payment and APR comparison tool.', cat: 'loans' },
    { href: '/calculators/debt-payoff', icon: Target, title: 'Debt Payoff Planner', desc: 'Snowball and avalanche scenarios.', badge: 'hot', cat: 'loans' },
    { href: '/calculators/comparison', icon: Scale, title: 'Loan Comparison', desc: 'Side-by-side loan-cost analysis.', cat: 'loans' },
    // Wealth & Tax
    { href: '/calculators/retirement', icon: TrendingUp, title: 'Retirement Planner', desc: 'Long-term growth projections.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/fire-planner', icon: TrendingUp, title: 'FIRE Planner', desc: 'Early-retirement planning scenarios.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/investment', icon: LineChart, title: 'Compound Interest', desc: 'Investment growth calculator.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/drip', icon: LineChart, title: 'DRIP Forecaster', desc: 'Dividend reinvestment projection.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/income-tax', icon: FileText, title: 'Income Tax 2026', desc: 'IRS 2026 federal brackets and standard deductions.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/crypto-tax', icon: FileText, title: 'Crypto Tax Estimator', desc: 'Capital-gains planning estimate.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/options-profit', icon: BarChart2, title: 'Options Profit/Loss', desc: 'Calls and puts payoff visualization.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/budget', icon: PiggyBank, title: 'Budget 50/30/20', desc: 'Needs, wants and savings planning split.', cat: 'wealth' },
    // Regional
    { href: '/calculators/california', icon: Map, title: 'California Closing', desc: 'California closing-cost planning.', cat: 'regional' },
    { href: '/calculators/texas', icon: Map, title: 'Texas Closing', desc: 'Texas closing-cost planning.', cat: 'regional' },
    { href: '/calculators/florida', icon: Map, title: 'Florida Closing', desc: 'Florida closing-cost planning.', cat: 'regional' },
    { href: '/calculators/closing-costs', icon: FileText, title: 'General Closing', desc: 'National closing-cost planning estimate.', cat: 'regional' },
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
    { val: '$0', label: 'Calculator Cost', src: 'Core Tools' },
    { val: 'Local', label: 'Input Processing', src: 'Calculator Fields' },
    { val: '2026', label: 'Federal Limits', src: 'Source-Checked' },
];

const DIFFS = [
    { icon: Shield, h: 'Source-Linked Rules', p: 'Time-sensitive federal limits and tax inputs are checked against primary agency sources.', c: 'di-cyan' },
    { icon: Lock, h: 'Calculator Inputs Stay Local', p: 'Calculator values are designed to be processed in your browser rather than submitted as lender leads.', c: 'di-mag' },
    { icon: Download, h: 'Browser Exports', p: 'Supported tools can generate PDF or CSV reports without a calculator account.', c: 'di-vio' },
    { icon: Eye, h: 'No Calculator Signup', p: 'Core calculation results are available without an email or phone-number gate.', c: 'di-lime' },
    { icon: Zap, h: '2026 Limits Verified', p: '$832,750 conforming baseline · $541,287 FHA floor · source-reviewed August 2026.', c: 'di-amb' },
];

const HOME_FAQS = [
    {
        question: 'Are USFinNexus calculators free to use?',
        answer: 'Yes. Core USFinNexus calculators are free to use without a calculator account gate. Some tools also provide browser-generated PDF or CSV exports. The site may be supported by advertising.',
    },
    {
        question: 'What happens to the financial numbers I enter into a calculator?',
        answer: 'Calculator input values are designed to be processed in your browser rather than submitted as mortgage-lender leads. This does not mean the entire website has zero data processing: advertising, analytics, security, or other third-party services may process browser or usage data as described in the Privacy Policy.',
    },
    {
        question: 'What is the 2026 conforming loan limit?',
        answer: 'For 2026, the FHFA one-unit baseline conforming loan limit is $832,750 in most of the United States and the one-unit high-cost-area ceiling is $1,249,125. County-specific limits and special statutory areas can differ, so verify the property location with FHFA data.',
    },
    {
        question: 'How accurate are the mortgage calculators?',
        answer: 'Mortgage principal-and-interest calculations use standard amortization math. Total payment and affordability results depend on the assumptions you enter for rates, taxes, insurance, PMI, HOA dues, closing costs, income and debts. Calculator outputs are planning estimates, not lender quotes or approvals.',
    },
    {
        question: 'Is 43% DTI the CFPB Qualified Mortgage limit?',
        answer: 'No. The current General Qualified Mortgage definition does not use a universal 43% debt-to-income cap. A 43% back-end DTI may still be shown as a planning benchmark or used in some underwriting contexts, but actual requirements vary by loan program, lender and borrower profile.',
    },
    {
        question: 'Can I download calculator results?',
        answer: 'Many USFinNexus calculators include browser-generated PDF or CSV export features. Availability and report contents depend on the specific calculator.',
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
                    <span>2026 Conforming <strong>$832,750</strong></span>
                    <span className="ph-ann-sep">·</span>
                    <span>High-Cost <strong>$1,249,125</strong></span>
                    <span className="ph-ann-sep">·</span>
                    <span>FHA Floor <strong>$541,287</strong></span>
                    <span className="ph-ann-sep">·</span>
                    <span>Tax Std. Deduction <strong>$16,100 single</strong></span>
                    <span className="ph-ann-tag">Verified Aug 2026</span>
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
                            Source-reviewed · August 2026
                        </div>
                        <h1 className="neo-h1">
                            <span className="neo-h1-w1">Mortgage & Finance Calculators</span>
                            <span className="neo-h1-w2">for U.S. Consumers</span>
                            <span className="neo-h1-w3">— Free to Use</span>
                        </h1>
                        <p className="neo-hero-p neo-reveal neo-reveal--d2">
                            28+ planning calculators for mortgages, debt, taxes and long-term finance.
                            Clear assumptions, source-linked rules and <strong>no calculator signup required.</strong>
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
                                { i: Lock, t: 'Local Calculator Inputs' },
                                { i: Shield, t: 'Source-Linked Rules' },
                                { i: Download, t: 'Browser Exports' },
                            ].map(x => (
                                <span key={x.t} className="neo-trust-pill"><x.i size={12} /> {x.t}</span>
                            ))}
                        </div>
                        {/* Mini stats row */}
                        <div className="ph-hero-stats neo-reveal neo-reveal--d4">
                            <div className="ph-hero-stat"><span className="ph-hs-val">28+</span><span className="ph-hs-lbl">Free Tools</span></div>
                            <div className="ph-hero-stat-div" />
                            <div className="ph-hero-stat"><span className="ph-hs-val">$0</span><span className="ph-hs-lbl">Core Tool Cost</span></div>
                            <div className="ph-hero-stat-div" />
                            <div className="ph-hero-stat"><span className="ph-hs-val">Local</span><span className="ph-hs-lbl">Input Processing</span></div>
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
                    <p className="neo-sec-p">From question to a structured planning estimate in a few inputs.</p>
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
                    <p className="neo-sec-p">Mortgage and finance calculators with clear inputs, assumptions and educational outputs.</p>

                    {/* Spotlight hero card */}
                    <Link href="/calculators/mortgage" className="neo-tool-hero">
                        <div>
                            <span className="neo-tool-badge neo-badge-hot">Most Popular</span>
                            <h3>Mortgage Calculator</h3>
                            <p>Estimate principal, interest, taxes, insurance, PMI, HOA dues and an amortization schedule.</p>
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
                    <h2 className="neo-sec-h2 neo-sec-h2--light">Built for financial <em>planning clarity.</em></h2>
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
                    <h2 className="neo-sec-h2">Designed for <em>clear estimates.</em></h2>
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
                        <div className="neo-diff-visual flex flex-col justify-between">
                            <div>
                                <div className="neo-dv-glow" />
                                <div className="neo-dv-title">Platform Approach</div>
                                <div className="neo-dv-header">
                                    <span>Common Variation</span>
                                    <span>USFinNexus</span>
                                </div>
                                {[
                                    { l: 'Calculator Cost', them: 'Varies by provider', us: 'Core tools free' },
                                    { l: 'Calculator Signup', them: 'Varies by provider', us: 'Not required' },
                                    { l: 'Calculator Inputs', them: 'Varies by provider', us: 'Browser processed' },
                                    { l: 'Export', them: 'Varies by tool', us: 'Available on many tools' },
                                    { l: 'Regulatory Claims', them: 'Varies', us: 'No certification claim' },
                                ].map(r => (
                                    <div key={r.l} className="neo-dv-row">
                                        <span className="neo-dv-label">{r.l}</span>
                                        <span className="neo-dv-them">{r.them}</span>
                                        <span className="neo-dv-us">{r.us}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <Link href="/privacy" className="text-blue-600 hover:text-blue-800 font-bold text-sm inline-flex items-center gap-1 transition-colors">
                                    Read our Privacy Policy <ArrowRight size={14} />
                                </Link>
                            </div>
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
                    <p className="neo-cta-p">28+ planning tools. No calculator signup. Clear assumptions and educational estimates.</p>
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
                    <p className="neo-sec-p">Quick answers about our mortgage and finance calculators.</p>
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

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: HOME_FAQS.map(faq => ({
                        '@type': 'Question',
                        name: faq.question,
                        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                    })),
                }) }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    name: 'Mortgage & Finance Calculators',
                    description: 'Free mortgage and personal finance calculators for U.S. consumers.',
                    url: 'https://usfinnexus.com/',
                    numberOfItems: 28,
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Mortgage Calculator', url: 'https://usfinnexus.com/calculators/mortgage' },
                        { '@type': 'ListItem', position: 2, name: 'Home Affordability Calculator', url: 'https://usfinnexus.com/calculators/affordability' },
                        { '@type': 'ListItem', position: 3, name: 'Mortgage Refinance Calculator', url: 'https://usfinnexus.com/calculators/refinance' },
                        { '@type': 'ListItem', position: 4, name: 'Debt-to-Income Ratio Calculator', url: 'https://usfinnexus.com/calculators/dti' },
                        { '@type': 'ListItem', position: 5, name: 'Mortgage Amortization Calculator', url: 'https://usfinnexus.com/calculators/amortization' },
                        { '@type': 'ListItem', position: 6, name: 'Rent vs. Buy Calculator', url: 'https://usfinnexus.com/calculators/rent-vs-buy' },
                        { '@type': 'ListItem', position: 7, name: 'FHA Loan Calculator', url: 'https://usfinnexus.com/calculators/fha' },
                        { '@type': 'ListItem', position: 8, name: 'VA Loan Calculator', url: 'https://usfinnexus.com/calculators/va' },
                        { '@type': 'ListItem', position: 9, name: 'Closing Cost Calculator', url: 'https://usfinnexus.com/calculators/closing-costs' },
                        { '@type': 'ListItem', position: 10, name: 'Auto Loan Calculator', url: 'https://usfinnexus.com/calculators/auto-loan' },
                        { '@type': 'ListItem', position: 11, name: 'Debt Payoff Calculator', url: 'https://usfinnexus.com/calculators/debt-payoff' },
                        { '@type': 'ListItem', position: 12, name: 'Retirement Calculator', url: 'https://usfinnexus.com/calculators/retirement' },
                        { '@type': 'ListItem', position: 13, name: '2026 Federal Income Tax Calculator', url: 'https://usfinnexus.com/calculators/income-tax' },
                        { '@type': 'ListItem', position: 14, name: 'HELOC Calculator', url: 'https://usfinnexus.com/calculators/heloc' },
                        { '@type': 'ListItem', position: 15, name: 'Down Payment Calculator', url: 'https://usfinnexus.com/calculators/down-payment' },
                    ],
                }) }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'HowTo',
                    name: 'How to Use USFinNexus Financial Calculators',
                    description: 'Use a USFinNexus mortgage or finance calculator in four simple steps.',
                    totalTime: 'PT1M',
                    tool: [{ '@type': 'HowToTool', name: 'Web browser' }],
                    step: [
                        {
                            '@type': 'HowToStep',
                            position: 1,
                            name: 'Pick a Calculator',
                            text: 'Choose the mortgage or finance calculator that matches your planning question.',
                            url: 'https://usfinnexus.com/#tools',
                        },
                        {
                            '@type': 'HowToStep',
                            position: 2,
                            name: 'Enter Your Numbers',
                            text: 'Fill in the relevant inputs such as home price, down payment, income, debt or interest rate. No calculator signup is required.',
                            url: 'https://usfinnexus.com/calculators/mortgage',
                        },
                        {
                            '@type': 'HowToStep',
                            position: 3,
                            name: 'Review the Estimate',
                            text: 'Review the calculated breakdown, ratios, charts or amortization table provided by the selected tool.',
                            url: 'https://usfinnexus.com/calculators/mortgage',
                        },
                        {
                            '@type': 'HowToStep',
                            position: 4,
                            name: 'Export When Available',
                            text: 'Use PDF or CSV export features when the selected calculator provides them.',
                            url: 'https://usfinnexus.com/calculators/mortgage',
                        },
                    ],
                }) }}
            />
        </div>
    );
}
