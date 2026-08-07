import type { Metadata } from 'next';
import Link from 'next/link';
import {
    Home, DollarSign, TrendingUp, ArrowLeftRight, Landmark,
    Star, Activity, Percent, Table2, PiggyBank, BarChart2, Scale,
    Car, BookOpen, Target, Calculator, LineChart, FileText, Map, ArrowRight
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Financial Calculators | USFinNexus',
    description: 'Browse mortgage, home affordability, refinance, loan, debt, retirement, tax and other financial calculators. Standard results require no email or phone number.',
    alternates: { canonical: 'https://usfinnexus.com/calculators' },
    openGraph: {
        type: 'website',
        title: 'Financial Calculators | USFinNexus',
        description: 'Mortgage, loan, debt, tax and personal finance calculators with documented assumptions and source references.',
        url: 'https://usfinnexus.com/calculators',
        siteName: 'USFinNexus',
    },
};

const TOOLS = [
    { href: '/calculators/mortgage', icon: Home, title: 'Mortgage Calculator', desc: 'Estimate PITI, PMI, HOA costs and amortization.', badge: 'popular', cat: 'mortgage' },
    { href: '/calculators/affordability', icon: DollarSign, title: 'Home Affordability Calculator', desc: 'Model a home-price range from income, debts and housing costs.', badge: 'popular', cat: 'mortgage' },
    { href: '/calculators/refinance', icon: TrendingUp, title: 'Mortgage Refinance Calculator', desc: 'Compare payment savings, costs and simple break-even.', badge: 'popular', cat: 'mortgage' },
    { href: '/calculators/rent-vs-buy', icon: ArrowLeftRight, title: 'Rent vs. Buy Calculator', desc: 'Compare modeled renting and ownership costs.', cat: 'mortgage' },
    { href: '/calculators/rental-property', icon: Home, title: 'Rental Property Calculator', desc: 'Estimate cash flow, cap rate and rental returns.', cat: 'mortgage' },
    { href: '/calculators/fha-va-usda', icon: Landmark, title: 'FHA vs. VA vs. USDA Calculator', desc: 'Compare selected government-loan cost assumptions.', cat: 'mortgage' },
    { href: '/calculators/heloc', icon: Home, title: 'HELOC Calculator', desc: 'Estimate equity-line payments and borrowing scenarios.', cat: 'mortgage' },
    { href: '/calculators/fha', icon: Home, title: 'FHA Mortgage Calculator', desc: 'Estimate FHA payment and mortgage-insurance costs.', cat: 'mortgage' },
    { href: '/calculators/va', icon: Star, title: 'VA Loan Calculator', desc: 'Estimate VA loan payment and funding-fee scenarios.', cat: 'mortgage' },
    { href: '/calculators/arm', icon: Activity, title: 'ARM Mortgage Calculator', desc: 'Compare adjustable-rate mortgage payment scenarios.', cat: 'mortgage' },
    { href: '/calculators/interest-only', icon: Percent, title: 'Interest-Only Mortgage Calculator', desc: 'Compare interest-only and amortizing payment periods.', cat: 'mortgage' },
    { href: '/calculators/amortization', icon: Table2, title: 'Mortgage Amortization Calculator', desc: 'View principal, interest and balance by payment.', cat: 'mortgage' },
    { href: '/calculators/down-payment', icon: PiggyBank, title: 'Down Payment Calculator', desc: 'Plan a home down-payment savings target.', cat: 'mortgage' },
    { href: '/calculators/points-buydown', icon: BarChart2, title: 'Mortgage Points Calculator', desc: 'Compare upfront points with modeled payment savings.', cat: 'mortgage' },
    { href: '/calculators/dti', icon: Scale, title: 'Debt-to-Income Ratio Calculator', desc: 'Calculate recurring monthly debt as a share of gross income.', cat: 'mortgage' },
    { href: '/calculators/closing-costs', icon: FileText, title: 'Closing Cost Calculator', desc: 'Estimate selected buyer and seller closing-cost items.', cat: 'mortgage' },

    { href: '/calculators/auto-loan', icon: Car, title: 'Auto Loan Calculator', desc: 'Estimate car payment and total interest.', cat: 'loans' },
    { href: '/calculators/personal-loan', icon: Calculator, title: 'Personal Loan Calculator', desc: 'Estimate payment and compare loan scenarios.', cat: 'loans' },
    { href: '/calculators/student-loan', icon: BookOpen, title: 'Student Loan Calculator', desc: 'Model repayment scenarios and payment totals.', cat: 'loans' },
    { href: '/calculators/credit-card', icon: Target, title: 'Credit Card Payoff Calculator', desc: 'Estimate payoff time and interest under a payment plan.', cat: 'loans' },
    { href: '/calculators/debt-payoff', icon: Target, title: 'Debt Payoff Calculator', desc: 'Compare debt payoff ordering strategies.', cat: 'loans' },
    { href: '/calculators/comparison', icon: Scale, title: 'Loan Comparison Calculator', desc: 'Compare loan payments and total borrowing costs.', cat: 'loans' },

    { href: '/calculators/income-tax', icon: FileText, title: '2026 Federal Income Tax Calculator', desc: 'Estimate 2026 ordinary federal income tax and employee payroll taxes.', cat: 'wealth' },
    { href: '/calculators/retirement', icon: TrendingUp, title: 'Retirement Calculator', desc: 'Project retirement savings under selected assumptions.', cat: 'wealth' },
    { href: '/calculators/investment', icon: LineChart, title: 'Compound Interest Calculator', desc: 'Project investment growth with recurring contributions.', cat: 'wealth' },
    { href: '/calculators/fire-planner', icon: TrendingUp, title: 'FIRE Calculator', desc: 'Model an early-retirement savings target.', cat: 'wealth' },
    { href: '/calculators/drip', icon: LineChart, title: 'Dividend Reinvestment Calculator', desc: 'Model dividend reinvestment under selected assumptions.', cat: 'wealth' },
    { href: '/calculators/budget', icon: PiggyBank, title: '50/30/20 Budget Calculator', desc: 'Split take-home income into planning categories.', cat: 'wealth' },
    { href: '/calculators/crypto-tax', icon: FileText, title: 'Crypto Tax Estimator', desc: 'Estimate selected cryptocurrency capital-gain scenarios.', cat: 'wealth' },
    { href: '/calculators/options-profit', icon: BarChart2, title: 'Options Profit Calculator', desc: 'Visualize selected call and put profit/loss scenarios.', cat: 'wealth' },
    { href: '/calculators/trump-account', icon: PiggyBank, title: 'Trump Account Calculator', desc: 'Model contributions and growth assumptions for eligible accounts.', cat: 'wealth' },

    { href: '/canada/mortgage-calculator', icon: Map, title: 'Canada Mortgage Calculator', desc: 'Estimate CAD mortgage payments and selected Canadian rules.', cat: 'regional' },
    { href: '/calculators/california', icon: Map, title: 'California Closing Cost Calculator', desc: 'Estimate selected California closing costs.', cat: 'regional' },
    { href: '/calculators/texas', icon: Map, title: 'Texas Closing Cost Calculator', desc: 'Estimate selected Texas closing costs.', cat: 'regional' },
    { href: '/calculators/florida', icon: Map, title: 'Florida Closing Cost Calculator', desc: 'Estimate selected Florida closing costs.', cat: 'regional' },
];

const GROUPS = [
    { key: 'mortgage', title: 'Mortgage & Home Buying' },
    { key: 'loans', title: 'Loans & Debt' },
    { key: 'wealth', title: 'Tax, Saving & Investing' },
    { key: 'regional', title: 'Regional Calculators' },
];

export default function CalculatorsPage() {
    return (
        <main className="neo-root">
            <section className="neo-light-zone py-12">
                <div className="neo-container">
                    <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }]} />
                    <header className="mb-12">
                        <div className="neo-sec-tag"><span className="neo-sec-dot" /> Financial Tools</div>
                        <h1 className="neo-sec-h2">Financial <em>Calculators</em></h1>
                        <p className="neo-sec-p max-w-3xl">
                            Browse mortgage, home-buying, loan, debt, tax and savings calculators. Standard calculator results do not require an email or phone number. Time-sensitive assumptions and regulatory context are documented on the relevant pages and in our methodology.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3 text-sm">
                            <Link href="/methodology" className="font-bold text-blue-700 hover:underline">Methodology &amp; sources</Link>
                            <Link href="/editorial-guidelines" className="font-bold text-blue-700 hover:underline">Editorial guidelines</Link>
                            <Link href="/privacy" className="font-bold text-blue-700 hover:underline">Privacy</Link>
                        </div>
                    </header>

                    <div className="space-y-12">
                        {GROUPS.map((group) => {
                            const tools = TOOLS.filter((tool) => tool.cat === group.key);
                            return (
                                <section key={group.key} aria-labelledby={`${group.key}-tools`}>
                                    <h2 id={`${group.key}-tools`} className="text-2xl font-black mb-5 text-navy-900">{group.title}</h2>
                                    <div className="neo-tools-grid">
                                        {tools.map((tool) => (
                                            <Link key={tool.href} href={tool.href} className="neo-tool-card">
                                                {tool.badge ? <span className="neo-tool-badge neo-badge-hot">Popular</span> : null}
                                                <h3><tool.icon size={15} className="neo-tool-card-icon" /> {tool.title}</h3>
                                                <p>{tool.desc}</p>
                                                <span className="neo-tool-go"><ArrowRight size={12} /></span>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        name: 'USFinNexus Financial Calculators',
                        url: 'https://usfinnexus.com/calculators',
                        numberOfItems: TOOLS.length,
                        itemListElement: TOOLS.map((tool, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            name: tool.title,
                            url: `https://usfinnexus.com${tool.href}`,
                        })),
                    }),
                }}
            />
        </main>
    );
}
