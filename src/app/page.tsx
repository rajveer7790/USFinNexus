import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import {
    Home, DollarSign, TrendingUp, Car, Calculator, Scale, ArrowLeftRight,
    BarChart2, Table2, Landmark, FileText, Target, PiggyBank, Activity,
    Percent, LineChart, Map, ChevronRight, BookOpen, Star, Lock, Shield,
    Zap, ArrowRight, Eye, Download,
} from 'lucide-react';

const HomeHeroWidget = dynamic(() => import('@/components/HomeHeroWidget'));

export const metadata: Metadata = {
    title: 'Financial Calculators for Mortgages, Loans & Money',
    description: 'Free U.S. financial calculators for mortgages, home affordability, refinancing, debt, loans, retirement and federal taxes. No account required.',
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://usfinnexus.com/',
        siteName: 'USFinNexus',
        title: 'Financial Calculators for Mortgages, Loans & Money',
        description: 'Free U.S. mortgage and personal-finance calculators with clear assumptions and no account required.',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus financial calculators' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Financial Calculators for Mortgages, Loans & Money',
        description: 'Free U.S. mortgage and personal-finance calculators with clear assumptions and no account required.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const VERIFIED_2026 = [
    { l: 'CONFORMING BASELINE', v: '$832,750' },
    { l: 'CONFORMING HIGH-COST CEILING', v: '$1,249,125' },
    { l: 'FHA ONE-UNIT FLOOR', v: '$541,287' },
    { l: 'FHA STANDARD CEILING', v: '$1,249,125' },
];

const STEPS = [
    { n: '01', h: 'Choose a Calculator', p: 'Pick the tool that matches the question you are trying to answer.' },
    { n: '02', h: 'Enter Your Assumptions', p: 'Use your own rate, income, debt, loan or property assumptions.' },
    { n: '03', h: 'Review the Estimate', p: 'See the calculation, breakdown and assumptions before making a decision.' },
    { n: '04', h: 'Check the Source Notes', p: 'For year-specific rules and limits, verify the cited government source.' },
];

const TOOLS = [
    { href: '/calculators/mortgage', icon: Home, title: 'Mortgage Calculator', desc: 'Estimate monthly PITI and view amortization.', badge: 'hot', cat: 'mortgage' },
    { href: '/calculators/affordability', icon: DollarSign, title: 'Home Affordability Calculator', desc: 'Estimate a home-price range from income, debt and housing assumptions.', badge: 'hot', cat: 'mortgage' },
    { href: '/calculators/refinance', icon: TrendingUp, title: 'Mortgage Refinance Calculator', desc: 'Compare payment savings, costs and break-even timing.', badge: 'hot', cat: 'mortgage' },
    { href: '/calculators/rent-vs-buy', icon: ArrowLeftRight, title: 'Rent vs. Buy Calculator', desc: 'Compare estimated renting and ownership costs.', cat: 'mortgage' },
    { href: '/calculators/rental-property', icon: Home, title: 'Rental Property Calculator', desc: 'Estimate cash flow, cap rate and return metrics.', cat: 'mortgage' },
    { href: '/calculators/fha-va-usda', icon: Landmark, title: 'FHA, VA & USDA Calculator', desc: 'Compare common government-backed loan scenarios.', cat: 'mortgage' },
    { href: '/calculators/heloc', icon: Home, title: 'HELOC Calculator', desc: 'Estimate home-equity line payments and borrowing scenarios.', cat: 'mortgage' },
    { href: '/calculators/fha', icon: Home, title: 'FHA Mortgage Calculator', desc: 'Estimate an FHA mortgage with applicable assumptions.', cat: 'mortgage' },
    { href: '/calculators/va', icon: Star, title: 'VA Loan Calculator', desc: 'Estimate a VA loan payment and funding-fee scenario.', cat: 'mortgage' },
    { href: '/calculators/arm', icon: Activity, title: 'ARM Mortgage Calculator', desc: 'Model adjustable-rate mortgage payment changes.', cat: 'mortgage' },
    { href: '/calculators/interest-only', icon: Percent, title: 'Interest-Only Mortgage Calculator', desc: 'Compare interest-only and amortizing periods.', cat: 'mortgage' },
    { href: '/calculators/amortization', icon: Table2, title: 'Mortgage Amortization Calculator', desc: 'View principal, interest and payoff schedule.', cat: 'mortgage' },
    { href: '/calculators/down-payment', icon: PiggyBank, title: 'Down Payment Calculator', desc: 'Plan a down-payment savings target.', cat: 'mortgage' },
    { href: '/calculators/points-buydown', icon: BarChart2, title: 'Mortgage Points Calculator', desc: 'Estimate discount-point cost and break-even.', cat: 'mortgage' },
    { href: '/calculators/dti', icon: Scale, title: 'Debt-to-Income Ratio Calculator', desc: 'Calculate recurring debt as a share of gross income.', cat: 'mortgage' },
    { href: '/calculators/closing-costs', icon: FileText, title: 'Closing Cost Calculator', desc: 'Estimate buyer closing-cost categories.', cat: 'mortgage' },
    { href: '/calculators/auto-loan', icon: Car, title: 'Auto Loan Calculator', desc: 'Estimate car payment and total interest.', cat: 'loans' },
    { href: '/calculators/student-loan', icon: BookOpen, title: 'Student Loan Calculator', desc: 'Compare repayment assumptions.', cat: 'loans' },
    { href: '/calculators/credit-card', icon: Target, title: 'Credit Card Payoff Calculator', desc: 'Estimate payoff time and interest.', cat: 'loans' },
    { href: '/calculators/personal-loan', icon: Calculator, title: 'Personal Loan Calculator', desc: 'Estimate payment, interest and APR scenarios.', cat: 'loans' },
    { href: '/calculators/debt-payoff', icon: Target, title: 'Debt Payoff Calculator', desc: 'Compare debt-payoff strategies.', cat: 'loans' },
    { href: '/calculators/comparison', icon: Scale, title: 'Loan Comparison Calculator', desc: 'Compare loan offers side by side.', cat: 'loans' },
    { href: '/calculators/retirement', icon: TrendingUp, title: 'Retirement Calculator', desc: 'Project retirement savings under stated assumptions.', cat: 'wealth' },
    { href: '/calculators/fire-planner', icon: TrendingUp, title: 'FIRE Retirement Calculator', desc: 'Explore financial-independence scenarios.', cat: 'wealth' },
    { href: '/calculators/investment', icon: LineChart, title: 'Compound Interest Calculator', desc: 'Project compounding with contributions.', cat: 'wealth' },
    { href: '/calculators/drip', icon: LineChart, title: 'Dividend Reinvestment Calculator', desc: 'Model dividend reinvestment assumptions.', cat: 'wealth' },
    { href: '/calculators/income-tax', icon: FileText, title: '2026 Federal Income Tax Calculator', desc: 'Uses official 2026 IRS brackets and standard deductions.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/crypto-tax', icon: FileText, title: 'Crypto Tax Estimator', desc: 'Estimate capital-gain scenarios; verify filing treatment with current IRS guidance.', cat: 'wealth' },
    { href: '/calculators/options-profit', icon: BarChart2, title: 'Options Profit Calculator', desc: 'Visualize call and put payoff scenarios.', cat: 'wealth' },
    { href: '/calculators/budget', icon: PiggyBank, title: 'Budget Calculator', desc: 'Explore a 50/30/20 budgeting scenario.', cat: 'wealth' },
    { href: '/calculators/california', icon: Map, title: 'California Closing Cost Calculator', desc: 'Estimate California-specific closing-cost assumptions.', cat: 'regional' },
    { href: '/calculators/texas', icon: Map, title: 'Texas Closing Cost Calculator', desc: 'Estimate Texas-specific closing-cost assumptions.', cat: 'regional' },
    { href: '/calculators/florida', icon: Map, title: 'Florida Closing Cost Calculator', desc: 'Estimate Florida-specific closing-cost assumptions.', cat: 'regional' },
];

const QUICK_TOOLS = [
    { href: '/calculators/mortgage', icon: Home, title: 'Mortgage', hot: true },
    { href: '/calculators/affordability', icon: DollarSign, title: 'Affordability', hot: true },
    { href: '/calculators/dti', icon: Scale, title: 'DTI Ratio' },
    { href: '/calculators/refinance', icon: TrendingUp, title: 'Refinance' },
    { href: '/calculators/auto-loan', icon: Car, title: 'Auto Loan' },
    { href: '/calculators/retirement', icon: LineChart, title: 'Retirement' },
    { href: '/calculators/income-tax', icon: FileText, title: 'Income Tax' },
    { href: '/calculators/amortization', icon: Table2, title: 'Amortization' },
];

const STATS = [
    { val: '30+', label: 'Financial Tools', src: 'Calculator Library' },
    { val: '$0', label: 'Core Tool Cost', src: 'No Account Required' },
    { val: '2026', label: 'Current Limit Set', src: 'FHFA / HUD / IRS' },
    { val: 'U.S.', label: 'Primary Audience', src: 'Consumer Finance' },
];

const DIFFS = [
    { icon: Shield, h: 'Source-Aware Calculations', p: 'Year-specific federal values are tied to named sources such as IRS, FHFA, HUD, SSA and CFPB guidance.', c: 'di-cyan' },
    { icon: Lock, h: 'Browser-Side Calculator Inputs', p: 'Core calculator inputs are designed to be processed in the browser; see the Privacy Policy for advertising and technical-data disclosures.', c: 'di-mag' },
    { icon: Download, h: 'Useful Output', p: 'Selected tools include printable or downloadable calculation results where supported.', c: 'di-vio' },
    { icon: Eye, h: 'No Account Required', p: 'Use the core calculators without creating an account or submitting a lender lead form.', c: 'di-lime' },
    { icon: Zap, h: 'Current 2026 Reference Values', p: 'Key 2026 FHFA, HUD, IRS and SSA values are reviewed against first-party publications.', c: 'di-amb' },
];

const HOME_FAQS = [
    {
        question: 'What calculators are available on USFinNexus?',
        answer: 'USFinNexus includes mortgage payment, home affordability, refinance, amortization, DTI, closing-cost, loan, debt, retirement and tax-planning calculators. Each tool has its own assumptions and limitations.',
    },
    {
        question: 'Do I need an account to use the calculators?',
        answer: 'No account is required for the core USFinNexus calculators. The website may use advertising and ordinary technical services as described in the Privacy Policy.',
    },
    {
        question: 'What is the 2026 conforming loan limit?',
        answer: 'For a one-unit property, the 2026 FHFA baseline conforming loan limit is $832,750 in most U.S. counties. The one-unit high-cost ceiling can reach $1,249,125 depending on location.',
    },
    {
        question: 'Is 43% DTI the current CFPB Qualified Mortgage maximum?',
        answer: 'No. The CFPB removed the former fixed 43% DTI cap from the General Qualified Mortgage definition and replaced it with price-based thresholds. Loan programs and lenders can apply different underwriting requirements.',
    },
    {
        question: 'Are calculator results the same as a lender quote or approval?',
        answer: 'No. Calculator results are estimates based on the inputs and assumptions shown. Actual rates, fees, taxes, insurance, loan eligibility and underwriting decisions can differ materially.',
    },
    {
        question: 'How current is the 2026 federal tax calculator?',
        answer: 'The 2026 federal income-tax calculator uses the official 2026 IRS tax-rate structure and standard deductions, and the 2026 Social Security wage base for its simplified employee FICA estimate. It is educational and does not replace tax-preparation software or professional advice.',
    },
];

export default function HomePage() {
    const itemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'USFinNexus Financial Calculators',
        url: 'https://usfinnexus.com/',
        numberOfItems: TOOLS.length,
        itemListElement: TOOLS.slice(0, 20).map((tool, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: tool.title,
            url: `https://usfinnexus.com${tool.href}`,
        })),
    };

    const faqPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://usfinnexus.com/#faq',
        mainEntity: HOME_FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <div className="neo-root">
            <div className="ph-announce">
                <div className="ph-announce-inner neo-container">
                    <span className="ph-ann-dot" />
                    <span>2026 Conforming Baseline <strong>$832,750</strong></span>
                    <span className="ph-ann-sep">·</span>
                    <span>FHA Floor <strong>$541,287</strong></span>
                    <span className="ph-ann-tag">Reviewed Aug 7, 2026</span>
                </div>
            </div>

            <section className="neo-hero">
                <div className="neo-orb neo-orb-a" />
                <div className="neo-orb neo-orb-b" />
                <div className="neo-orb neo-orb-c" />
                <div className="neo-hero-grid neo-container">
                    <div className="neo-hero-left">
                        <div className="neo-status neo-reveal"><span className="neo-status-pulse" /> U.S. Financial Planning Tools</div>
                        <h1 className="neo-h1">
                            <span className="neo-h1-w1">Free U.S. Financial</span>
                            <span className="neo-h1-w3">Calculators</span>
                        </h1>
                        <p className="neo-hero-p neo-reveal neo-reveal--d2">
                            Estimate mortgage payments, affordability, debt, loans, retirement and taxes with tools built for U.S. consumers. <strong>Check the assumptions before you act.</strong>
                        </p>
                        <div className="neo-hero-actions neo-reveal neo-reveal--d3">
                            <Link href="/calculators/mortgage" className="neo-btn-main"><Home size={17} /> Mortgage Calculator <ArrowRight size={15} /></Link>
                            <Link href="#tools" className="neo-btn-alt">Browse All Tools <ChevronRight size={15} /></Link>
                        </div>
                        <div className="neo-hero-trust neo-reveal neo-reveal--d4">
                            {[
                                { i: Lock, t: 'No Account Required' },
                                { i: Shield, t: 'Primary Sources' },
                                { i: FileText, t: 'Clear Limitations' },
                            ].map((item) => <span key={item.t} className="neo-trust-pill"><item.i size={12} /> {item.t}</span>)}
                        </div>
                    </div>
                    <div className="neo-hero-right neo-reveal neo-reveal--d3"><HomeHeroWidget /></div>
                </div>
            </section>

            <div className="ph-quick-zone">
                <div className="neo-container">
                    <div className="ph-quick-label">Popular Calculators</div>
                    <div className="ph-quick-row">
                        {QUICK_TOOLS.map((tool) => (
                            <Link key={tool.href} href={tool.href} className="ph-quick-item"><tool.icon size={15} /><span>{tool.title}</span>{tool.hot && <span className="ph-hot">HOT</span>}</Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="neo-ticker">
                <div className="neo-ticker-track">
                    {[...VERIFIED_2026, ...VERIFIED_2026].map((item, index) => <span key={index} className="neo-ticker-item"><span className="neo-ticker-dot" />{item.l} <strong>{item.v}</strong></span>)}
                </div>
            </div>

            <section className="neo-light-zone">
                <div className="neo-container neo-steps-section">
                    <div className="neo-sec-tag"><span className="neo-sec-dot" /> How It Works</div>
                    <h2 className="neo-sec-h2">Useful estimates in <em>four clear steps.</em></h2>
                    <p className="neo-sec-p">Use the tool, understand the assumptions, then verify important decisions against the relevant official source or professional.</p>
                    <div className="neo-steps-grid">{STEPS.map((step) => <div key={step.n} className="neo-step-card"><div className="neo-step-num">{step.n}</div><h3>{step.h}</h3><p>{step.p}</p></div>)}</div>
                </div>

                <div className="neo-container neo-tools-section" id="tools">
                    <div className="neo-sec-tag"><span className="neo-sec-dot" /> Calculator Library</div>
                    <h2 className="neo-sec-h2">Mortgage, loan and <em>money calculators.</em></h2>
                    <p className="neo-sec-p">Each URL targets a distinct financial question to keep the site useful for people and clear for search engines.</p>
                    <Link href="/calculators/mortgage" className="neo-tool-hero">
                        <div><span className="neo-tool-badge neo-badge-hot">Most Popular</span><h3>Mortgage Calculator</h3><p>Estimate principal, interest, taxes, insurance, PMI and HOA, with amortization details.</p></div>
                        <span className="neo-hero-launch"><Home size={15} /> Open Calculator <ArrowRight size={14} /></span>
                    </Link>
                    <div className="neo-tools-grid">
                        {TOOLS.filter((tool) => tool.href !== '/calculators/mortgage').map((tool) => (
                            <Link key={tool.href} href={tool.href} className="neo-tool-card">
                                {tool.badge && <span className={`neo-tool-badge ${tool.badge === 'hot' ? 'neo-badge-hot' : 'neo-badge-new'}`}>{tool.badge === 'hot' ? 'Popular' : 'Updated'}</span>}
                                <h3><tool.icon size={15} className="neo-tool-card-icon" /> {tool.title}</h3><p>{tool.desc}</p><span className="neo-tool-go"><ArrowRight size={12} /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="neo-stats-band">
                <div className="neo-stats-bg" />
                <div className="neo-container neo-stats-inner">
                    <div className="neo-sec-tag neo-sec-tag--dark"><span className="neo-sec-dot" /> Site Focus</div>
                    <h2 className="neo-sec-h2 neo-sec-h2--light">Built for <em>U.S. financial planning.</em></h2>
                    <div className="neo-stats-row">{STATS.map((stat) => <div key={stat.label} className="neo-stat-block"><div className="neo-stat-val">{stat.val}</div><div className="neo-stat-name">{stat.label}</div><div className="neo-stat-src">{stat.src}</div></div>)}</div>
                </div>
            </section>

            <section className="neo-light-zone">
                <div className="neo-container neo-diff-section">
                    <div className="neo-sec-tag"><span className="neo-sec-dot" /> Why USFinNexus</div>
                    <h2 className="neo-sec-h2">Designed for <em>transparent estimates.</em></h2>
                    <div className="neo-diff-grid">
                        <div className="neo-diff-list">{DIFFS.map((item) => <div key={item.h} className="neo-diff-item"><div className={`neo-diff-icon ${item.c}`}><item.icon size={18} /></div><div><h3>{item.h}</h3><p>{item.p}</p></div></div>)}</div>
                        <div className="neo-diff-visual flex flex-col justify-between">
                            <div>
                                <div className="neo-dv-glow" /><div className="neo-dv-title">What We Prioritize</div>
                                <div className="mb-6 flex items-center gap-4">
                                    <Image
                                        src="/images/home-hero.png"
                                        alt="Illustrated home and financial planning dashboard with charts"
                                        width={144}
                                        height={144}
                                        className="h-24 w-24 shrink-0 rounded-xl border border-white/10 object-cover"
                                    />
                                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,.55)' }}>
                                        Plan with transparent assumptions, then verify year-specific limits against the official sources.
                                    </p>
                                </div>
                                {[
                                    ['Primary keyword', 'One main intent per page'],
                                    ['Year-specific values', 'Named official sources'],
                                    ['Calculator output', 'Estimate, not approval'],
                                    ['Core access', 'No account required'],
                                    ['Privacy', 'Clear policy disclosure'],
                                ].map(([label, value]) => <div key={label} className="neo-dv-row"><span className="neo-dv-label">{label}</span><span className="neo-dv-us">{value}</span></div>)}
                            </div>
                            <div className="mt-8 text-center"><Link href="/methodology" className="text-blue-600 hover:text-blue-800 font-bold text-sm inline-flex items-center gap-1">Read our methodology <ArrowRight size={14} /></Link></div>
                        </div>
                    </div>
                    <p className="mt-6 text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                        Official reference links:{' '}
                        <a href="https://www.fhfa.gov/data/conforming-loan-limit" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">FHFA conforming loan limits</a>,{' '}
                        <a href="https://www.hud.gov/program_offices/housing/sfh/lender/origination/mortgage_limits" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">HUD FHA mortgage limits</a>, and{' '}
                        <a href="https://www.irs.gov/filing" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IRS filing guidance</a>.
                    </p>
                </div>
            </section>

            <section className="neo-cta">
                <div className="neo-cta-glow-a" /><div className="neo-cta-glow-b" />
                <div className="neo-container neo-cta-inner">
                    <div className="neo-sec-tag neo-sec-tag--dark"><span className="neo-sec-dot" /> Get Started</div>
                    <h2 className="neo-sec-h2 neo-sec-h2--light">Start with the <em>number you need.</em></h2>
                    <p className="neo-cta-p">Mortgage payments, affordability, debt, loans, retirement and taxes — each with its own dedicated calculator.</p>
                    <div className="neo-cta-btns"><Link href="/calculators/mortgage" className="neo-btn-main"><Home size={16} /> Mortgage Calculator <ArrowRight size={14} /></Link><Link href="/methodology" className="neo-btn-alt">Methodology</Link></div>
                </div>
            </section>

            <section className="neo-light-zone" aria-labelledby="faq-heading">
                <div className="neo-container" style={{ maxWidth: '800px', paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
                    <div className="neo-sec-tag"><span className="neo-sec-dot" /> FAQ</div>
                    <h2 className="neo-sec-h2" id="faq-heading">Frequently Asked <em>Questions</em></h2>
                    <div style={{ marginTop: '2rem' }}>
                        {HOME_FAQS.map((faq, index) => (
                            <details key={faq.question} style={{ borderTop: index === 0 ? '1px solid var(--color-border)' : undefined, borderBottom: '1px solid var(--color-border)' }}>
                                <summary style={{ padding: '1rem 0', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>{faq.question}<ChevronRight size={16} style={{ flexShrink: 0, color: 'var(--color-text-muted)', transform: 'rotate(90deg)' }} /></summary>
                                <p style={{ padding: '0 0 1rem', fontSize: '0.875rem', lineHeight: '1.7', color: 'var(--color-text-muted)', margin: 0 }}>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>See our <Link href="/methodology" style={{ color: '#0da6f2', fontWeight: 600 }}>Methodology</Link>, <Link href="/privacy" style={{ color: '#0da6f2', fontWeight: 600 }}>Privacy Policy</Link> and <Link href="/contact" style={{ color: '#0da6f2', fontWeight: 600 }}>Contact page</Link>.</p>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
        </div>
    );
}
