import Link from 'next/link';
import type { Metadata } from 'next';
import {
    Home, DollarSign, TrendingUp, Car, Calculator, Scale, ArrowLeftRight,
    BarChart2, Table2, Landmark, FileText, Target, PiggyBank, Activity,
    Percent, LineChart, Map, ChevronDown, BookOpen, Star, RefreshCw, Layers,
    ArrowRight,
} from 'lucide-react';
import QuickMortgageEstimate from '@/components/QuickMortgageEstimate';
import { getAllBlogPosts } from '@/lib/blogs';

export const metadata: Metadata = {
    title: 'Free U.S. Mortgage & Finance Calculators 2026',
    description: 'Free U.S. financial calculators for mortgages, home affordability, refinancing, debt, loans, retirement and federal taxes. No account required.',
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://usfinnexus.com/',
        siteName: 'USFinNexus',
        title: 'Free U.S. Mortgage & Finance Calculators 2026',
        description: 'Free U.S. mortgage and personal-finance calculators with clear assumptions and no account required.',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus financial calculators' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free U.S. Mortgage & Finance Calculators 2026',
        description: 'Free U.S. mortgage and personal-finance calculators with clear assumptions and no account required.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

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
    { href: '/calculators/california', icon: Map, title: 'California Mortgage Calculator', desc: 'Estimate California mortgage payments, taxes and insurance.', cat: 'regional' },
    { href: '/calculators/texas', icon: Map, title: 'Texas Mortgage Calculator', desc: 'Estimate Texas mortgage payments, taxes and insurance.', cat: 'regional' },
    { href: '/calculators/florida', icon: Map, title: 'Florida Mortgage Calculator', desc: 'Estimate Florida mortgage payments, taxes and insurance.', cat: 'regional' },
];

const DECISIONS = [
    { href: '/calculators/affordability', label: 'Buy a home', icon: Home },
    { href: '/calculators/refinance', label: 'Refinance', icon: RefreshCw },
    { href: '/calculators/budget', label: 'Plan a budget', icon: Calculator },
    { href: '/calculators/comparison', label: 'Compare loans', icon: Layers },
];

const INSIGHTS = [
    { href: '/blog/closing-costs-itemized-breakdown-2026', topic: 'Closing costs', title: 'A practical guide to mortgage closing costs', image: 'closing-costs.webp' },
    { href: '/blog/heloc-vs-home-equity-loan-2026', topic: 'Home equity', title: 'How home equity works and ways to use it', image: 'home-equity.webp' },
    { href: '/blog/rent-vs-buy-calculator-2026-housing-market', topic: 'Rent vs. buy', title: 'Rent vs. buy: Key factors to consider', image: 'rent-buy.webp' },
];

const REPORTS = [
    { href: '/data/home-affordability-by-state', title: 'Affordability by state', summary: 'Compare home affordability across U.S. states.', image: 'affordability-state.webp' },
    { href: '/data/home-affordability-by-city', title: 'Affordability by city', summary: 'See how home affordability varies across major U.S. cities.', image: 'affordability-city.webp' },
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

function Photo({ file, lead = false }: { file: string; lead?: boolean }) {
    // Photos illustrate the linked topic; the adjacent text names the destination.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={`/images/redesign/${file}`} alt="" width={lead ? 1000 : 600} height={lead ? 400 : 300} loading="lazy" decoding="async" />;
}

export default function HomePage() {
    const itemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'USFinNexus Financial Calculators',
        url: 'https://usfinnexus.com/',
        numberOfItems: TOOLS.length,
        itemListElement: TOOLS.map((tool, index) => ({
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
    const selected = new Set(INSIGHTS.map(item => item.href));
    const recent = getAllBlogPosts().filter(post => post.dateISO && !selected.has(`/blog/${post.slug}`)).slice(0, 3);

    return <div className="fn-home fn-shell">
        <section className="fn-hero" aria-labelledby="home-heading">
            <div className="fn-hero-copy">
                <h1 id="home-heading">Free U.S. financial calculators</h1>
                <p>Make more informed money decisions with free calculators, practical guides and data on mortgages, homeownership, budgeting and consumer loans.</p>
                <div className="fn-hero-actions">
                    <Link href="/calculators" className="fn-button fn-button-primary">Browse calculators <ArrowRight size={19} aria-hidden="true" /></Link>
                    <Link href="/mortgage-rates" className="fn-button fn-button-secondary">Explore mortgage rates <ArrowRight size={19} aria-hidden="true" /></Link>
                </div>
            </div>
            <QuickMortgageEstimate />
        </section>

        <nav aria-label="Plan your next move" className="fn-decisions">
            {DECISIONS.map(({ href, label, icon: Icon }) => <Link className="fn-card fn-decision" href={href} key={href}>
                <Icon size={34} strokeWidth={1.8} aria-hidden="true" /><span>{label}</span><ArrowRight size={17} aria-hidden="true" />
            </Link>)}
        </nav>

        <section className="fn-home-section" aria-labelledby="insights-heading">
            <div className="fn-section-heading"><h2 id="insights-heading">Latest insights</h2><Link href="/blog">View all insights <ArrowRight size={16} aria-hidden="true" /></Link></div>
            <div className="fn-insight-grid">
                {INSIGHTS.map((item, index) => <Link key={item.href} href={item.href} className={`fn-card fn-insight ${index === 0 ? 'fn-insight-lead' : ''}`}>
                    <Photo file={item.image} lead={index === 0} />
                    <div><span className="fn-card-topic">{item.topic}</span><h3>{item.title}</h3></div>
                </Link>)}
            </div>
        </section>

        <section className="fn-home-section fn-reports" aria-labelledby="reports-heading">
            <div className="fn-section-heading"><h2 id="reports-heading">Data &amp; reports</h2></div>
            <div className="fn-report-grid">
                {REPORTS.map(report => <Link href={report.href} className="fn-card fn-report" key={report.href}>
                    <Photo file={report.image} />
                    <div><h3>{report.title}</h3><p>{report.summary}</p></div><ArrowRight size={16} aria-hidden="true" />
                </Link>)}
            </div>
        </section>

        {recent.length > 0 && <section className="fn-home-section" aria-labelledby="recent-heading">
            <div className="fn-section-heading"><h2 id="recent-heading">Recently published</h2><Link href="/blog">Browse the blog <ArrowRight size={16} aria-hidden="true" /></Link></div>
            <div className="fn-recent-grid">
                {recent.map(post => <Link href={`/blog/${post.slug}`} className="fn-card fn-recent" key={post.slug}>
                    <time className="fn-card-topic" dateTime={post.dateISO}>{post.date}</time><h3>{post.title}</h3>
                </Link>)}
            </div>
        </section>}

        <section id="tools" className="fn-home-section" aria-labelledby="tools-heading">
            <div className="fn-section-heading"><h2 id="tools-heading">Find a calculator</h2><Link href="/calculators">All calculators <ArrowRight size={16} aria-hidden="true" /></Link></div>
            <div className="fn-recent-grid">
                {[TOOLS[0], TOOLS[1], TOOLS[2], TOOLS[6], TOOLS[15], TOOLS[19]].map(({ href, title, desc, icon: Icon }) => <Link className="fn-card fn-recent" key={href} href={href}><Icon size={22} aria-hidden="true" /><h3>{title}</h3><p>{desc}</p></Link>)}
            </div>
            <details className="fn-disclosure"><summary>More mortgage, loan and money tools <ChevronDown size={17} aria-hidden="true" /></summary>
                <ul className="fn-more-tools">{TOOLS.map(tool => <li key={tool.href}><Link href={tool.href}>{tool.title}</Link></li>)}</ul>
            </details>
        </section>

        <section className="fn-home-section fn-faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Frequently asked questions</h2>
            {HOME_FAQS.map(faq => <details className="fn-disclosure" key={faq.question}><summary>{faq.question} <ChevronDown size={17} aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}
            <p className="fn-source-links"><Link href="/methodology">Methodology</Link> · <Link href="/privacy">Privacy policy</Link> · <Link href="/contact">Contact</Link></p>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
    </div>;
}
