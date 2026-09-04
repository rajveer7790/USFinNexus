import Link from 'next/link';
import { getAllBlogPosts, type BlogPostEntry } from '@/lib/blogs';

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

const CLUSTERS: Record<string, string[]> = {
    housing: ['home', 'house', 'housing', 'mortgage', 'refinance', 'pmi', 'heloc', 'equity', 'fha', 'va', 'usda', 'jumbo', 'closing', 'down-payment', 'loan-limit', 'appraisal', 'escrow', 'buyer', 'seller', 'real-estate'],
    debt: ['loan', 'debt', 'credit', 'card', 'payoff', 'apr', 'personal', 'student', 'auto', 'car', 'refinance'],
    tax: ['tax', 'irs', 'deduction', 'credit', 'income', 'capital-gains', 'withholding', 'salt', 'mileage', 'overtime', 'tips'],
    investing: ['invest', 'investment', 'bond', 'stock', 'ira', '401k', 'roth', 'dividend', 'portfolio', 'capital-gains'],
    retirement: ['retire', 'retirement', 'social-security', 'medicare', 'rmd', 'fire', '401k', 'ira', 'pension'],
    education: ['fafsa', 'pell', 'student', 'college', 'education', '529'],
    benefits: ['snap', 'medicare', 'social-security', 'benefit', 'disability', 'aca'],
};

const STOP_WORDS = new Set(['2026', '2027', '2028', 'guide', 'calculator', 'explained', 'complete', 'rules', 'rule', 'how', 'what', 'which', 'and', 'the', 'for', 'with', 'vs', 'v2']);

const CALCULATOR_TOPIC_TERMS: Record<string, string> = {
    affordability: 'home house mortgage buyer down-payment affordability',
    amortization: 'mortgage payment amortization payoff interest',
    arm: 'mortgage adjustable-rate refinance rate',
    'auto-loan': 'auto car vehicle loan affordability',
    budget: 'budget savings debt income expenses',
    california: 'california mortgage home housing jumbo',
    'closing-costs': 'closing mortgage home buyer seller',
    comparison: 'mortgage 15-year 30-year points down-payment pmi',
    'credit-card': 'credit card debt payoff balance apr',
    'crypto-tax': 'crypto tax capital-gains investing',
    'debt-payoff': 'debt payoff credit loan avalanche snowball',
    'down-payment': 'down-payment home buyer mortgage pmi',
    drip: 'investment dividend investing retirement',
    dti: 'dti debt mortgage income qualification',
    fha: 'fha mortgage home buyer loan limits',
    'fha-va-usda': 'fha va usda mortgage home buyer',
    'fire-planner': 'fire retirement investing savings withdrawal',
    florida: 'florida mortgage home housing',
    heloc: 'heloc equity home second-mortgage refinance',
    'income-tax': 'tax irs income deduction credit withholding',
    'interest-only': 'interest-only mortgage home loan',
    investment: 'investment investing stocks bonds compound interest',
    mortgage: 'mortgage home housing buyer loan payment',
    'mortgage-payoff': 'mortgage payoff extra payment refinance',
    'options-profit': 'investing options stock profit',
    'personal-loan': 'personal loan debt credit payoff',
    'points-buydown': 'mortgage points buydown rate closing',
    refinance: 'refinance mortgage rate break-even equity',
    'rent-vs-buy': 'rent buy home mortgage housing',
    'rental-property': 'rental property real-estate mortgage investing',
    retirement: 'retirement 401k ira social-security investing',
    'student-loan': 'student loan college education fafsa pell',
    texas: 'texas mortgage home housing',
    'trump-account': 'trump accounts 529 college education',
    va: 'va mortgage veteran home loan',
};

const CALCULATOR_OVERRIDES: Record<string, string[]> = {
    'mortgage-interest-tax-deduction-2026': ['/calculators/income-tax', '/calculators/mortgage', '/calculators/affordability'],
    'negative-equity-upside-down-car-loan': ['/calculators/auto-loan', '/calculators/debt-payoff', '/calculators/dti'],
    'pay-off-student-loans-vs-invest-decision': ['/calculators/student-loan', '/calculators/investment', '/calculators/debt-payoff'],
    'personal-loan-calculator-amount': ['/calculators/personal-loan', '/calculators/debt-payoff', '/calculators/budget'],
    'personal-loan-vs-credit-card-comparison': ['/calculators/personal-loan', '/calculators/credit-card', '/calculators/debt-payoff'],
    'roth-ira-vs-401k-comparison-2026': ['/calculators/retirement', '/calculators/investment', '/calculators/fire-planner'],
    'student-loan-repayment-plans-2026-income-driven': ['/calculators/student-loan', '/calculators/debt-payoff', '/calculators/budget'],
};

function tokens(value: string): Set<string> {
    return new Set(value.toLowerCase().split(/[^a-z0-9]+/).filter((token) => token.length > 2 && !STOP_WORDS.has(token)));
}

function clusterMatches(value: string): Set<string> {
    const source = tokens(value);
    return new Set(Object.entries(CLUSTERS).filter(([, terms]) => terms.some((term) => source.has(term))).map(([cluster]) => cluster));
}

function linkSource(currentSlug: string): string {
    return `${currentSlug} ${CALCULATOR_TOPIC_TERMS[currentSlug] || ''}`;
}

function scoreBlog(currentSlug: string, candidate: BlogPostEntry): number {
    const currentTokens = tokens(linkSource(currentSlug));
    const candidateTokens = tokens(candidate.slug);
    const sharedTokens = [...currentTokens].filter((token) => candidateTokens.has(token)).length;
    const currentClusters = clusterMatches(linkSource(currentSlug));
    const candidateClusters = clusterMatches(candidate.slug);
    const sharedClusters = [...currentClusters].filter((cluster) => candidateClusters.has(cluster)).length;
    const sameCategory = candidate.category === getAllBlogPosts().find((post) => post.slug === currentSlug)?.category;
    return sharedTokens * 4 + sharedClusters * 5 + (sameCategory ? 2 : 0);
}

function getBlogSuggestions(currentSlug: string): BlogPostEntry[] {
    const all = getAllBlogPosts();
    return all
        .filter((post) => post.slug !== currentSlug)
        .map((post, index) => ({ post, score: scoreBlog(currentSlug, post), index }))
        .sort((a, b) => b.score - a.score || a.index - b.index)
        .slice(0, 3)
        .map(({ post }) => post);
}

function getCalculatorSuggestions(currentSlug: string): CalculatorLink[] {
    const overrideHrefs = CALCULATOR_OVERRIDES[currentSlug];
    if (overrideHrefs) {
        return overrideHrefs.map((href) => CALCULATORS.find((calculator) => calculator.href === href)).filter((calculator): calculator is CalculatorLink => Boolean(calculator));
    }
    const source = currentSlug.toLowerCase();
    const sourceClusters = clusterMatches(source);
    return CALCULATORS
        .map((calculator, index) => {
            const directMatches = calculator.keywords.reduce((total, keyword) => total + (source.includes(keyword) ? 1 : 0), 0);
            const calculatorClusters = clusterMatches(calculator.keywords.join(' '));
            const sharedClusters = [...sourceClusters].filter((cluster) => calculatorClusters.has(cluster)).length;
            return { calculator, score: directMatches * 3 + sharedClusters * 2, index };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score || a.index - b.index)
        .slice(0, 3)
        .map(({ calculator }) => calculator);
}

export default function ContextualInternalLinks({ currentSlug, showBlogs = true, showCalculators = true }: ContextualInternalLinksProps) {
    const blogs = showBlogs ? getBlogSuggestions(currentSlug) : [];
    const calculators = showCalculators ? getCalculatorSuggestions(currentSlug) : [];
    if (blogs.length === 0 && calculators.length === 0) return null;

    return (
        <section className="not-prose mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5" aria-labelledby="contextual-links-heading">
            <h2 id="contextual-links-heading" className="text-lg font-black text-slate-900">Continue your financial research</h2>
            <p className="mt-1 text-sm text-slate-600">Use these closely related USFinNexus guides and tools to plan your next step.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {blogs.length > 0 && (
                    <div>
                        <h3 className="text-sm font-bold text-slate-900">Related guides</h3>
                        <ul className="mt-2 space-y-2">
                            {blogs.map((blog) => <li key={blog.slug}><Link className="text-sm font-semibold text-blue-700 hover:underline" href={`/blog/${blog.slug}`}>{blog.title}</Link></li>)}
                        </ul>
                    </div>
                )}
                {calculators.length > 0 && (
                    <div>
                        <h3 className="text-sm font-bold text-slate-900">Related calculators</h3>
                        <ul className="mt-2 space-y-2">
                            {calculators.map((calculator) => <li key={calculator.href}><Link className="text-sm font-semibold text-blue-700 hover:underline" href={calculator.href}>{calculator.label}</Link><span className="block text-xs text-slate-500">{calculator.description}</span></li>)}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}
