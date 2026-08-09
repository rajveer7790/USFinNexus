import type { Metadata } from 'next';
import Link from 'next/link';
import {
    Home, DollarSign, TrendingUp, ArrowLeftRight, Landmark,
    Star, Activity, Percent, Table2, PiggyBank, BarChart2, Scale,
    Car, BookOpen, Target, Calculator, LineChart, FileText, Map, ArrowRight
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'All Free Mortgage & Finance Calculators',
    description: 'Browse our complete library of 35 free, CFPB-compliant mortgage and financial calculators. Instant PDF reports, no signup, and zero data collected.',
    alternates: { canonical: 'https://usfinnexus.com/calculators' },
    openGraph: {
        type: 'website',
        title: 'All Free Mortgage & Finance Calculators',
        description: 'Browse our complete library of 35 free, CFPB-compliant mortgage and financial calculators.',
        url: 'https://usfinnexus.com/calculators',
        siteName: 'USFinNexus',
    },
};

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
    { href: '/calculators/mortgage-payoff', icon: TrendingUp, title: 'Mortgage Payoff Calculator', desc: 'Model extra principal, payoff time and interest saved.', badge: 'new', cat: 'mortgage' },
    { href: '/calculators/investment', icon: LineChart, title: 'Compound Interest', desc: 'Investment growth calculator.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/trump-account', icon: PiggyBank, title: 'Trump Account 2026', desc: '$1,000 seed + family contribution growth.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/drip', icon: LineChart, title: 'DRIP Forecaster', desc: 'Dividend reinvestment plan.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/income-tax', icon: FileText, title: 'Income Tax 2026', desc: '2026 brackets + TCJA sunset.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/crypto-tax', icon: FileText, title: 'Crypto Tax Estimator', desc: 'Capital gains tax estimator.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/options-profit', icon: BarChart2, title: 'Options Profit/Loss', desc: 'Visualizer for Calls/Puts.', badge: 'new', cat: 'wealth' },
    { href: '/calculators/budget', icon: PiggyBank, title: 'Budget 50/30/20', desc: 'Needs, wants, savings split.', cat: 'wealth' },
    // Canada & Regional
    { href: '/canada/mortgage-calculator', icon: Map, title: 'Canada Mortgage', desc: 'CAD payment, insurance & stress test.', badge: 'new', cat: 'regional' },
    { href: '/calculators/california', icon: Map, title: 'California Closing', desc: 'CA-specific costs.', cat: 'regional' },
    { href: '/calculators/texas', icon: Map, title: 'Texas Closing', desc: 'TX-specific costs.', cat: 'regional' },
    { href: '/calculators/florida', icon: Map, title: 'Florida Closing', desc: 'FL-specific costs.', cat: 'regional' },
    { href: '/calculators/closing-costs', icon: FileText, title: 'General Closing', desc: 'National average estimate.', cat: 'regional' },
];

export default function CalculatorsPage() {
    return (
        <main className="neo-root">
            <section className="neo-light-zone py-12">
                <div className="neo-container">
                    <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }]} />
                    
                    <header className="mb-12">
                        <div className="neo-sec-tag"><span className="neo-sec-dot" /> All Tools</div>
                        <h1 className="neo-sec-h2">The Complete <em>Calculator Library</em></h1>
                        <p className="neo-sec-p">
                            Browse our complete library of 35 free, CFPB-compliant calculators.
                            Zero signup, instant PDF reports, and zero data collection.
                        </p>
                    </header>

                    <div className="neo-tools-grid">
                        {TOOLS.map((t) => (
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

            {/* ItemList JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        name: 'All Financial Calculators',
                        description: 'Library of free mortgage and financial calculators.',
                        url: 'https://usfinnexus.com/calculators',
                        numberOfItems: TOOLS.length,
                        itemListElement: TOOLS.map((t, i) => ({
                            '@type': 'ListItem',
                            position: i + 1,
                            name: t.title,
                            url: `https://usfinnexus.com${t.href}`,
                        })),
                    }),
                }}
            />
        </main>
    );
}
