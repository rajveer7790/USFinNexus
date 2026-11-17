import Link from 'next/link';
import { getRelatedBlogPosts, type BlogPostEntry } from '@/lib/blogs';
import { EDITORIAL_LINKS } from '@/lib/editorial-links';
import { editorialTopic, TOPIC_CALCULATORS } from '@/lib/editorial-topics';

interface ContextualInternalLinksProps {
    currentSlug: string;
    showBlogs?: boolean;
    showCalculators?: boolean;
}

interface CalculatorLink {
    href: string;
    label: string;
    description: string;
    keywords: string[];
}

const CALCULATORS: CalculatorLink[] = [
    { href: '/calculators/mortgage', label: 'Mortgage Calculator', description: 'Estimate payment, interest and amortization.', keywords: ['mortgage', 'home', 'housing', 'house', 'jumbo', 'fha', 'va', 'usda', 'loan-limit', 'closing', 'pmi', 'refinance', 'escrow', 'down-payment', 'appraisal', 'broker', 'seller', 'buy'] },
    { href: '/calculators/affordability', label: 'Home Affordability Calculator', description: 'Estimate a home price that fits your budget.', keywords: ['affordability', 'home', 'housing', 'house', 'buyer', 'buy', 'mortgage', 'down-payment', 'income'] },
    { href: '/calculators/refinance', label: 'Refinance Calculator', description: 'Compare break-even timing and potential savings.', keywords: ['refinance', 'mortgage', 'rate', 'heloc', 'equity', 'loan'] },
    { href: '/calculators/dti', label: 'DTI Calculator', description: 'Check housing and total debt-to-income ratios.', keywords: ['dti', 'debt', 'mortgage', 'income', 'qualification', 'credit', 'loan'] },
    { href: '/calculators/closing-costs', label: 'Closing Costs Calculator', description: 'Plan buyer and seller costs before closing.', keywords: ['closing', 'mortgage', 'home', 'seller', 'buyer', 'broker', 'refinance'] },
    { href: '/calculators/down-payment', label: 'Down Payment Calculator', description: 'Plan savings milestones for a home purchase.', keywords: ['down-payment', 'home', 'buyer', 'mortgage', 'fha', 'va', 'usda', 'pmi'] },
    { href: '/calculators/heloc', label: 'HELOC Calculator', description: 'Explore home-equity borrowing and payments.', keywords: ['heloc', 'equity', 'home', 'second-mortgage', 'refinance'] },
    { href: '/calculators/auto-loan', label: 'Auto Loan Calculator', description: 'Compare car-loan payments and total interest.', keywords: ['auto', 'car', 'vehicle', 'loan', 'trade-in'] },
    { href: '/calculators/student-loan', label: 'Student Loan Calculator', description: 'Model student-loan payments and payoff cost.', keywords: ['student', 'loan', 'fafsa', 'pell', 'college', 'education'] },
    { href: '/calculators/personal-loan', label: 'Personal Loan Calculator', description: 'Compare payment and total cost for personal debt.', keywords: ['personal-loan', 'debt', 'credit', 'consolidation', 'loan'] },
    { href: '/calculators/credit-card', label: 'Credit Card Calculator', description: 'Estimate interest, payoff time and minimum-payment risk.', keywords: ['credit', 'card', 'balance', 'apr', 'debt', 'payoff'] },
    { href: '/calculators/debt-payoff', label: 'Debt Payoff Calculator', description: 'Compare avalanche and snowball payoff plans.', keywords: ['debt', 'payoff', 'credit', 'loan', 'interest', 'budget'] },
    { href: '/calculators/income-tax', label: 'Income Tax Calculator', description: 'Estimate federal income tax and withholding.', keywords: ['tax', 'irs', 'income', 'deduction', 'credit', 'withholding', 'overtime', 'tips', 'mileage', 'salt', 'capital-gains'] },
    { href: '/calculators/crypto-tax', label: 'Crypto Tax Calculator', description: 'Estimate taxable gains and losses from crypto activity.', keywords: ['crypto', 'tax', 'capital-gains', 'investing'] },
    { href: '/calculators/retirement', label: 'Retirement Calculator', description: 'Project savings, contributions and retirement income.', keywords: ['retirement', '401k', 'ira', 'social-security', 'medicare', 'rmd', 'fire', 'pension'] },
    { href: '/calculators/investment', label: 'Investment Calculator', description: 'Project long-term growth and compound returns.', keywords: ['invest', 'investment', 'bond', 'stock', 'ira', '401k', 'roth', 'capital-gains', 'savings'] },
    { href: '/calculators/budget', label: 'Budget Calculator', description: 'Organize monthly income, bills and spending goals.', keywords: ['budget', 'income', 'expense', 'snap', 'fafsa', 'college', 'savings', 'debt'] },
    { href: '/calculators/fire-planner', label: 'FIRE Planner', description: 'Estimate an early-retirement savings timeline.', keywords: ['fire', 'retirement', 'invest', 'savings', 'withdrawal'] },
];

const CALCULATOR_OVERRIDES: Record<string, string[]> = {
    pmi: ['/calculators/mortgage', '/calculators/fha', '/calculators/refinance'],
    'extra-payment': ['/calculators/mortgage', '/calculators/mortgage-payoff', '/calculators/debt-payoff'],
    'biweekly-mortgage': ['/calculators/mortgage', '/calculators/mortgage-payoff', '/calculators/amortization'],
    fha: ['/calculators/mortgage', '/calculators/down-payment', '/calculators/dti'],
    'personal-loan': ['/calculators/debt-payoff', '/calculators/credit-card', '/calculators/budget'],
    'credit-card': ['/calculators/debt-payoff', '/calculators/personal-loan', '/calculators/budget'],
    heloc: ['/calculators/mortgage', '/calculators/refinance', '/calculators/closing-costs'],
    affordability: ['/calculators/mortgage', '/calculators/dti', '/calculators/down-payment'],
    'closing-costs': ['/calculators/mortgage', '/calculators/down-payment', '/calculators/refinance'],
    refinance: ['/calculators/mortgage', '/calculators/closing-costs', '/calculators/heloc'],
    'student-loan': ['/calculators/debt-payoff', '/calculators/budget', '/calculators/personal-loan'],
    'mortgage-interest-tax-deduction-2026': ['/calculators/income-tax', '/calculators/mortgage', '/calculators/affordability'],
    'negative-equity-upside-down-car-loan': ['/calculators/auto-loan', '/calculators/debt-payoff', '/calculators/dti'],
    'pay-off-student-loans-vs-invest-decision': ['/calculators/student-loan', '/calculators/investment', '/calculators/debt-payoff'],
    'personal-loan-calculator-amount': ['/calculators/personal-loan', '/calculators/debt-payoff', '/calculators/budget'],
    'personal-loan-vs-credit-card-comparison': ['/calculators/personal-loan', '/calculators/credit-card', '/calculators/debt-payoff'],
    'roth-ira-vs-401k-comparison-2026': ['/calculators/retirement', '/calculators/investment', '/calculators/fire-planner'],
    'student-loan-repayment-plans-2026-income-driven': ['/calculators/student-loan', '/calculators/debt-payoff', '/calculators/budget'],
    'snap-benefits-2027': ['/calculators/budget', '/calculators/income-tax', '/calculators/debt-payoff'],
};

function getBlogSuggestions(currentSlug: string): BlogPostEntry[] {
    return getRelatedBlogPosts(currentSlug, 3);
}

function getCalculatorSuggestions(currentSlug: string): CalculatorLink[] {
    const overrideHrefs = CALCULATOR_OVERRIDES[currentSlug] || TOPIC_CALCULATORS[editorialTopic(currentSlug)]?.map(slug => `/calculators/${slug}`);
    if (overrideHrefs) {
        return overrideHrefs
            .filter((href) => href !== `/calculators/${currentSlug}`)
            .map((href) => CALCULATORS.find((calculator) => calculator.href === href) || {
                href, label: href.split('/').pop()!.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ' Calculator',
                description: 'Explore an educational estimate with your own inputs.', keywords: [],
            })
            .filter((calculator): calculator is CalculatorLink => Boolean(calculator));
    }
    return [];
}

export default function ContextualInternalLinks({ currentSlug, showBlogs = true, showCalculators = true }: ContextualInternalLinksProps) {
    const blogs = showBlogs ? getBlogSuggestions(currentSlug) : [];
    const calculators = showCalculators ? getCalculatorSuggestions(currentSlug) : [];
    const nextSteps = EDITORIAL_LINKS[currentSlug] || [];
    if (blogs.length === 0 && calculators.length === 0) return null;

    return (
        <section className="not-prose mt-10 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5" aria-label="Related financial guides and calculators" data-nosnippet="true">
            <h2 className="text-lg font-black text-slate-900">Continue your financial research</h2>
            <p className="mt-1 text-sm text-slate-600">Use these closely related USFinNexus guides and tools to plan your next step.</p>
            {nextSteps.length > 0 && <div className="mt-4 space-y-3 text-sm text-slate-700">{nextSteps.map(link => <p key={link.href}>{link.before}<Link prefetch={false} className="text-blue-700 underline" href={link.href}>{link.anchor}</Link>{link.after}</p>)}</div>}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {blogs.length > 0 && (
                    <div>
                        <h3 className="text-sm font-bold text-slate-900">Related guides</h3>
                        <ul className="mt-2 space-y-2">
                            {blogs.map((blog) => <li key={blog.slug}><Link prefetch={false} className="text-sm font-semibold text-blue-700 hover:underline" href={`/blog/${blog.slug}`}>{blog.title}</Link></li>)}
                        </ul>
                    </div>
                )}
                {calculators.length > 0 && (
                    <div>
                        <h3 className="text-sm font-bold text-slate-900">Related calculators</h3>
                        <ul className="mt-2 space-y-2">
                            {calculators.map((calculator) => <li key={calculator.href}><Link prefetch={false} className="text-sm font-semibold text-blue-700 hover:underline" href={calculator.href}>{calculator.label}</Link><span className="block text-xs text-slate-500">{calculator.description}</span></li>)}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}
