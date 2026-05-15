import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Mortgage, Housing Market & Finance Blog | USFinNexus',
    description: 'Free guides on mortgage rates, housing market trends, homeowner tax deductions, home buying programs, and personal finance - written for everyday Americans in 2026.',
    keywords: ['mortgage blog 2026', 'home buying guides', 'personal finance articles', 'mortgage calculator guides', 'housing market news 2026', 'refinance guides', 'real estate investing blog'],
    alternates: { canonical: 'https://usfinnexus.com/blog' },
    openGraph: { title: 'Mortgage, Housing Market & Finance Blog | USFinNexus', description: 'Free guides on mortgage rates, housing market trends, and personal finance for everyday Americans.', url: 'https://usfinnexus.com/blog', type: 'website', siteName: 'USFinNexus' },
};

const POSTS = [
    // --- Housing Market & Real Estate ---
    { slug: 'spring-2026-housing-market-forecast', title: 'Spring 2026 Housing Market Forecast: Rates, Prices & Buyer Strategy', date: 'Apr 2026', category: 'Housing Market', readTime: '10 min' },
    { slug: 'tariffs-housing-market-impact-2026', title: 'How Tariffs Are Raising Home Prices in 2026 — $10,000+ Per New Home', date: 'Apr 2026', category: 'Housing Market', readTime: '9 min' },
    { slug: 'global-conflict-real-estate-impact-2026', title: 'How Global Conflicts Are Impacting US Real Estate in 2026', date: 'May 2026', category: 'Housing Market', readTime: '8 min' },
    { slug: 'silver-tsunami-housing-shift-2026', title: 'The Silver Tsunami Housing Shift: Aging Boomers in 2026', date: 'May 2026', category: 'Housing Market', readTime: '6 min' },
    { slug: 'top-sunbelt-real-estate-markets-2026', title: 'Top 5 Sunbelt Cities for Real Estate Investment in 2026', date: 'May 2026', category: 'Real Estate Investment', readTime: '8 min' },
    { slug: 'commercial-real-estate-reset-2026', title: 'Navigating the 2026 Commercial Real Estate Reset', date: 'May 2026', category: 'Real Estate Investment', readTime: '7 min' },
    { slug: 'house-hacking-guide-2026', title: 'House Hacking in 2026: The Ultimate Guide to Living for Free', date: 'May 2026', category: 'Real Estate Investment', readTime: '9 min' },
    { slug: 'fractional-real-estate-investing-2026', title: 'Fractional Real Estate Investing: The Best Platforms in 2026', date: 'May 2026', category: 'Real Estate Investment', readTime: '5 min' },
    { slug: 'short-term-rental-regulations-2026', title: 'Short-Term Rental Regulations in 2026: The End of the Airbnb Arbitrage?', date: 'May 2026', category: 'Real Estate Investment', readTime: '6 min' },

    // --- Mortgage Fundamentals ---
    { slug: '30-year-vs-15-year-mortgage-2026', title: '30-Year vs 15-Year Mortgage 2026: Which Saves More? Real Numbers', date: 'Apr 2026', category: 'Mortgage', readTime: '8 min' },
    { slug: 'how-to-calculate-monthly-mortgage-payment', title: 'How to Calculate a Monthly Mortgage Payment — Step-by-Step', date: 'May 2026', category: 'Mortgage', readTime: '7 min' },
    { slug: 'adjustable-rate-mortgage-trends-2026', title: 'ARM Trends 2026: Is An Adjustable Rate Mortgage Right For You?', date: 'May 2026', category: 'Mortgage', readTime: '7 min' },
    { slug: 'conventional-fha-va-mortgages-guide', title: 'Conventional vs FHA vs VA Mortgages: 2026 Comparison', date: 'May 2026', category: 'Mortgage', readTime: '8 min' },
    { slug: 'jumbo-mortgages-over-loan-limit', title: 'Jumbo Mortgages Explained: Financing Homes Over the Loan Limit', date: 'May 2026', category: 'Mortgage', readTime: '6 min' },
    { slug: '2026-loan-limits-conforming', title: '2026 Loan Limits: What Changed for Conventional, FHA, and VA Loans', date: 'May 2026', category: 'Mortgage', readTime: '5 min' },
    { slug: 'assumable-mortgages-2026-strategy', title: "Assumable Mortgages in 2026: A Home Seller's Secret Weapon", date: 'May 2026', category: 'Mortgage', readTime: '6 min' },
    { slug: 'interest-only-mortgages-explained', title: "Interest-Only Mortgages: When They Make Sense (and When They Don't)", date: 'May 2026', category: 'Mortgage', readTime: '6 min' },
    { slug: 'reverse-mortgage-hecm-explained', title: 'Reverse Mortgage: How HECM Works and When It Makes Sense', date: 'May 2026', category: 'Mortgage', readTime: '7 min' },
    { slug: 'chattel-mortgages-mobile-homes-financing', title: 'Chattel Mortgages and Mobile Homes: How Financing Works', date: 'May 2026', category: 'Mortgage', readTime: '5 min' },
    { slug: 'mortgage-help-guide-2026', title: "Mortgage Help Guide 2026: What To Do If You Can't Afford Your Payment", date: 'May 2026', category: 'Mortgage', readTime: '8 min' },
    { slug: 'forbearance-deferment-loan-modification-2026', title: 'Forbearance, Deferment, and Loan Modification: 2026 Relief Options', date: 'May 2026', category: 'Mortgage', readTime: '7 min' },
    { slug: 'biweekly-mortgage-payments-savings', title: 'Biweekly Mortgage Payments: Do They Actually Save You Money?', date: 'May 2026', category: 'Mortgage', readTime: '5 min' },
    { slug: 'pay-off-mortgage-early-strategy', title: 'How to Pay Off Your Mortgage in 10 Years (Without Refinancing)', date: 'May 2026', category: 'Mortgage', readTime: '7 min' },
    { slug: 'mortgage-amortization-schedule', title: 'Mortgage Amortization Explained: Where Your Payment Goes', date: 'May 2026', category: 'Mortgage', readTime: '6 min' },
    { slug: 'mortgage-amortization-schedule-guide', title: 'How to Read a Mortgage Amortization Schedule — Complete 2026 Guide', date: 'Feb 2026', category: 'Education', readTime: '6 min' },
    { slug: 'piggyback-mortgage-80-10-10-strategy', title: 'Piggyback Mortgages (80/10/10): A Strategy to Avoid PMI', date: 'May 2026', category: 'Mortgage', readTime: '6 min' },

    // --- PMI ---
    { slug: 'pmi-explained-avoid-cancel', title: 'PMI Explained 2026: What It Is, How to Avoid It, and How to Cancel It', date: 'Feb 2026', category: 'Mortgage', readTime: '6 min' },
    { slug: 'pmi-explained-cost-removal-2026', title: 'PMI Explained: What It Is, How Much It Costs, and When It Ends', date: 'May 2026', category: 'Mortgage', readTime: '6 min' },
    { slug: 'no-pmi-mortgages-down-payment', title: 'No PMI Mortgages: 10% Down vs 20% Down vs 0% Down', date: 'May 2026', category: 'Mortgage', readTime: '5 min' },
    { slug: 'lender-paid-pmi-vs-borrower-paid', title: 'Lender-Paid PMI vs Borrower-Paid PMI: Which Costs Less?', date: 'May 2026', category: 'Mortgage', readTime: '5 min' },
    { slug: 'remove-pmi-mortgage-hpa-rules-2026', title: 'How to Remove PMI From Your Mortgage (HPA Rules 2026)', date: 'May 2026', category: 'Mortgage', readTime: '5 min' },

    // --- Mortgage Rates & Points ---
    { slug: 'mortgage-points-buydown-calculator', title: 'Should You Buy Down Your Mortgage Rate? The Math on Points', date: 'May 2026', category: 'Mortgage', readTime: '6 min' },
    { slug: 'lender-quote-vs-online-calculator', title: 'Why Your Lender Quote Differs from Online Calculators', date: 'May 2026', category: 'Mortgage', readTime: '5 min' },
    { slug: 'mortgage-calculator-comparison-2026', title: 'Mortgage Calculator Comparison: 5 Key Numbers You Need', date: 'May 2026', category: 'Mortgage', readTime: '5 min' },
    { slug: 'fed-rates-unchanged-april-2026', title: 'Fed Keeps Rates Unchanged (April 2026): Mortgage Impact Guide', date: 'May 2026', category: 'Mortgage', readTime: '7 min' },

    // --- Home Buying ---
    { slug: 'how-much-house-can-i-afford-2026', title: 'How Much House Can I Afford in 2026? The 28/36 Rule with Real Numbers', date: 'Feb 2026', category: 'Affordability', readTime: '7 min' },
    { slug: 'how-much-house-can-afford-2026', title: 'How Much House Can You Afford? The Real-World Calculation', date: 'May 2026', category: 'Affordability', readTime: '7 min' },
    { slug: '28-36-rule-explained-lender-standards', title: 'The 28/36 Rule Explained: How Lenders Size Your Mortgage', date: 'May 2026', category: 'Mortgage', readTime: '6 min' },
    { slug: 'mortgage-affordability-28-36-rule', title: 'What the 28/36 Rule Means for Your Mortgage Budget', date: 'May 2026', category: 'Mortgage', readTime: '5 min' },
    { slug: 'debt-to-income-ratio-dti-calculator-2026', title: 'What Does Debt-to-Income (DTI) Actually Mean? 2026 Lender Standards', date: 'May 2026', category: 'Mortgage', readTime: '6 min' },
    { slug: 'first-time-home-buyer-programs-2026', title: 'First-Time Home Buyer Programs 2026: Every Grant, Loan & Assistance', date: 'Apr 2026', category: 'Home Buying', readTime: '11 min' },
    { slug: 'first-time-homebuyer-mortgage-guide-2026', title: 'First-Time Homebuyer: The Step-by-Step Mortgage Guide', date: 'May 2026', category: 'Home Buying', readTime: '9 min' },
    { slug: 'first-time-homebuyer-programs-grants-2026', title: 'First-Time Homebuyer Programs and Grants 2026 (By State)', date: 'May 2026', category: 'Home Buying', readTime: '8 min' },
    { slug: 'fha-loans-first-time-homebuyers-2026', title: 'FHA Loans for First-Time Homebuyers: Rates, Limits, and Requirements', date: 'May 2026', category: 'Mortgage', readTime: '7 min' },
    { slug: 'no-down-payment-mortgages-va-usda-fha', title: 'No Down Payment Mortgages: VA, USDA, and FHA Loans', date: 'May 2026', category: 'Mortgage', readTime: '7 min' },
    { slug: 'va-loans-military-benefits', title: 'VA Loans Explained: Zero Down Payment and Other Benefits', date: 'May 2026', category: 'Mortgage', readTime: '7 min' },
    { slug: 'usda-loans-rural-suburban-financing', title: 'USDA Loans: 100% Financing for Rural and Suburban Buyers', date: 'May 2026', category: 'Mortgage', readTime: '6 min' },
    { slug: 'mortgage-preapproval-prequalification', title: "Mortgage Pre-Approval vs Pre-Qualification: What's the Difference?", date: 'May 2026', category: 'Home Buying', readTime: '5 min' },
    { slug: 'appraisal-contingency-low-appraisal', title: 'Appraisal Contingency: What Happens if Your Home Appraises Low', date: 'May 2026', category: 'Home Buying', readTime: '6 min' },

    // --- Down Payment ---
    { slug: '20-percent-down-payment-standard-2026', title: 'Is 20% Down Still the Golden Standard in 2026?', date: 'May 2026', category: 'Home Buying', readTime: '6 min' },
    { slug: 'down-payment-strategies-comparison-2026', title: 'Down Payment Strategies: 0%, 5%, 10%, 15%, 20% Comparison', date: 'May 2026', category: 'Home Buying', readTime: '7 min' },
    { slug: 'down-payment-assistance-dpa-programs', title: 'Down Payment Assistance Programs: How to Qualify and Apply', date: 'May 2026', category: 'Home Buying', readTime: '7 min' },
    { slug: 'gifted-down-payment-rules-documentation', title: 'Gifted Down Payments: Rules, Documentation, and Tax Implications', date: 'May 2026', category: 'Home Buying', readTime: '5 min' },
    { slug: 'save-for-down-payment-faster-strategies', title: '5 Proven Ways to Save for a Down Payment Faster', date: 'May 2026', category: 'Home Buying', readTime: '6 min' },

    // --- Closing Costs ---
    { slug: 'closing-costs-itemized-breakdown-2026', title: "Closing Costs: How Much You'll Actually Pay (Itemized)", date: 'May 2026', category: 'Home Buying', readTime: '6 min' },
    { slug: 'mortgage-closing-costs-2026-guide', title: 'Mortgage Closing Costs 2026: What to Expect and How to Negotiate', date: 'May 2026', category: 'Home Buying', readTime: '7 min' },
    { slug: 'negotiate-closing-costs-strategies', title: "Can You Negotiate Your Closing Costs? (Yes, Here's How)", date: 'May 2026', category: 'Home Buying', readTime: '5 min' },

    // --- Refinance ---
    { slug: 'should-i-refinance-2026', title: 'Should You Refinance in 2026? Break-Even Calculator + Complete Guide', date: 'Feb 2026', category: 'Refinance', readTime: '8 min' },
    { slug: 'when-to-refinance-1-percent-rule', title: "When to Refinance: The 1% Rule and When It Doesn't Apply", date: 'May 2026', category: 'Refinance', readTime: '6 min' },
    { slug: 'refinance-break-even-calculator-guide-2026', title: 'Refinance Break-Even Calculator Guide: When Does Refinancing Make Sense?', date: 'May 2026', category: 'Refinance', readTime: '7 min' },
    { slug: 'refinancing-costs-2026-breakdown', title: "Refinancing Costs: What You'll Pay in 2026", date: 'May 2026', category: 'Refinance', readTime: '6 min' },
    { slug: 'cash-out-refinance-guide-2026', title: 'Cash-Out Refinance Guide: Paying Off Debt or Funding Home Upgrades', date: 'May 2026', category: 'Refinance', readTime: '7 min' },
    { slug: 'rate-and-term-vs-cashout-refinance', title: 'Rate-and-Term Refinance vs Cash-Out Refinance: Which Is Right?', date: 'May 2026', category: 'Refinance', readTime: '6 min' },
    { slug: 'streamline-refinance-fha-va-usda', title: 'Streamline Refinance for FHA, VA, and USDA Loans', date: 'May 2026', category: 'Refinance', readTime: '6 min' },
    { slug: 'heloc-vs-home-equity-loan-2026', title: 'HELOC vs Home Equity Loan: 2026 Rates and Comparison', date: 'May 2026', category: 'Mortgage', readTime: '7 min' },

    // --- Taxes ---
    { slug: 'homeowner-tax-deductions-2026', title: 'Every Homeowner Tax Deduction You Can Claim in 2026', date: 'Apr 2026', category: 'Taxes', readTime: '10 min' },
    { slug: 'tcja-tax-sunset-2026-mortgage-impact', title: 'TCJA Tax Sunset 2026: What It Means For Your Mortgage & Taxes', date: 'May 2026', category: 'Taxes', readTime: '8 min' },
    { slug: 'mortgage-interest-tax-deduction-2026', title: 'Mortgage Interest Tax Deduction 2026: How Much Can You Save?', date: 'May 2026', category: 'Taxes', readTime: '6 min' },
    { slug: 'crypto-tax-guide-2026', title: 'The 2026 Crypto Tax Guide: What the IRS New Rules Mean for You', date: 'May 2026', category: 'Taxes', readTime: '6 min' },

    // --- Investing ---
    { slug: 'investing-during-geopolitical-conflict-2026', title: 'Investing During Geopolitical Conflict: Safe Havens in 2026', date: 'May 2026', category: 'Investing', readTime: '8 min' },
    { slug: 'defense-cybersecurity-stocks-2026', title: 'The Rise of Defense and Cybersecurity Stocks in a Volatile World', date: 'May 2026', category: 'Investing', readTime: '7 min' },
    { slug: 'energy-market-investing-crisis-2026', title: 'Energy Markets 2026: Investing in Oil, Gas, and Renewables Amidst Crisis', date: 'May 2026', category: 'Investing', readTime: '7 min' },
    { slug: 'safe-yields-bonds-treasuries-2026', title: 'Safe Yields: US Treasuries vs. Emerging Market Bonds in 2026', date: 'May 2026', category: 'Bonds & Fixed Income', readTime: '6 min' },
    { slug: 'dividend-vs-growth-investing-2026', title: 'Dividend Investing vs. Growth Stocks: Which Wins in 2026?', date: 'May 2026', category: 'Investing', readTime: '7 min' },
    { slug: 'ai-personal-finance-investing-2026', title: 'The AI Revolution in Personal Finance: Top 5 Tools for Smart Investors', date: 'May 2026', category: 'FinTech', readTime: '6 min' },
    { slug: 'high-yield-savings-vs-index-funds-2026', title: 'High-Yield Savings vs. Index Funds: Where to Park Your Cash in 2026', date: 'May 2026', category: 'Investing', readTime: '7 min' },
    { slug: 'direct-indexing-tax-loss-harvesting-2026', title: 'Direct Indexing & Tax-Loss Harvesting 2026 — The Strategy ETFs Cannot Beat', date: 'May 2026', category: 'Investing', readTime: '7 min' },
    { slug: 'compound-interest-calculator-growth', title: 'Compound Interest: How Much Will $10,000 Grow in 30 Years?', date: 'May 2026', category: 'Investing', readTime: '5 min' },
    { slug: '4-percent-rule-safe-withdrawal-rate', title: 'The 4% Rule and Safe Withdrawal Rates Explained', date: 'May 2026', category: 'Retirement', readTime: '6 min' },

    // --- Retirement ---
    { slug: 'mega-backdoor-roth-ira-guide-2026', title: 'The Mega Backdoor Roth IRA Guide for 2026', date: 'May 2026', category: 'Retirement', readTime: '8 min' },
    { slug: 'coast-fire-vs-barista-fire-2026', title: 'Coast FIRE vs. Barista FIRE: Choosing Your Semi-Retirement', date: 'May 2026', category: 'Retirement', readTime: '5 min' },
    { slug: 'roth-ira-vs-401k-comparison-2026', title: 'Roth IRA vs 401(k): Which Retirement Account Wins?', date: 'May 2026', category: 'Retirement', readTime: '7 min' },
    { slug: 'fire-calculator-retirement-goal', title: 'FIRE Calculator: How Much Do You Need to Retire Early?', date: 'May 2026', category: 'Retirement', readTime: '6 min' },

    // --- Banking & Personal Finance ---
    { slug: 'high-yield-checking-accounts-2026', title: "High-Yield Checking Accounts: Beating Inflation Without Locking Up Cash", date: 'May 2026', category: 'Banking', readTime: '4 min' },
    { slug: 'balance-transfer-credit-cards-strategy', title: 'Balance Transfer Credit Cards: Do They Actually Help?', date: 'May 2026', category: 'Credit Cards', readTime: '5 min' },
    { slug: 'credit-card-payoff-calculator-strategies', title: 'Credit Card Payoff Calculator: 3 Strategies for 2026', date: 'May 2026', category: 'Credit Cards', readTime: '5 min' },
    { slug: 'personal-loan-vs-credit-card-comparison', title: 'Personal Loan vs Credit Card: Which Debt is Cheaper?', date: 'May 2026', category: 'Personal Finance', readTime: '5 min' },
    { slug: 'personal-loan-calculator-amount', title: 'Personal Loan Calculator: How Much Should You Borrow?', date: 'May 2026', category: 'Personal Finance', readTime: '5 min' },
    { slug: 'debt-consolidation-loan-when-worthwhile', title: "Debt Consolidation Loan: When It Works (and When It Doesn't)", date: 'May 2026', category: 'Personal Finance', readTime: '5 min' },
    { slug: 'debt-payoff-avalanche-vs-snowball-method', title: 'Avalanche vs Snowball: Which Debt Payoff Method Saves Money?', date: 'May 2026', category: 'Personal Finance', readTime: '5 min' },
    { slug: 'pay-off-student-loans-vs-invest-decision', title: 'Should You Pay Off Student Loans or Invest? The Math', date: 'May 2026', category: 'Personal Finance', readTime: '6 min' },
    { slug: 'student-loan-repayment-plans-2026-income-driven', title: 'Student Loan Repayment Plans 2026: Income-Driven vs Standard', date: 'May 2026', category: 'Personal Finance', readTime: '6 min' },
    { slug: 'usa-people-search-finance', title: 'How to Find Unclaimed Money in the USA (2026 Guide)', date: 'Mar 2026', category: 'Personal Finance', readTime: '8 min' },

    // --- Auto Loans ---
    { slug: '0-percent-apr-auto-loan-dealer-vs-bank', title: '0% APR Auto Loans: When the Dealer Offer Beats Your Bank', date: 'May 2026', category: 'Auto Loans', readTime: '5 min' },
    { slug: 'auto-loan-calculator-car-affordability', title: 'Auto Loan Calculator: How Much Car Can You Afford?', date: 'May 2026', category: 'Auto Loans', readTime: '5 min' },
    { slug: 'auto-loan-terms-60-72-84-month', title: '60 vs 72 vs 84-Month Auto Loan: Which Term Saves the Most?', date: 'May 2026', category: 'Auto Loans', readTime: '5 min' },
    { slug: 'car-trade-in-value-auto-loan', title: 'Trade-In Value and How It Affects Your Auto Loan', date: 'May 2026', category: 'Auto Loans', readTime: '5 min' },
    { slug: 'new-vs-used-car-total-cost-ownership', title: 'New vs Used Car: Total Cost of Ownership Analysis', date: 'May 2026', category: 'Auto Loans', readTime: '6 min' },
    { slug: 'pay-off-car-loan-early-vs-invest', title: 'Pay Off Car Loan Early: The Math on Prepayment vs Investing', date: 'May 2026', category: 'Auto Loans', readTime: '5 min' },
    { slug: 'negative-equity-upside-down-car-loan', title: 'Negative Equity (Upside-Down Car Loan): How to Escape It', date: 'May 2026', category: 'Auto Loans', readTime: '5 min' },

    // --- Mortgage Calculators & Tools ---
    { slug: 'free-mortgage-calculator-2026-pdf', title: 'Best Free Mortgage Calculator 2026 with PDF Download', date: 'Feb 2026', category: 'Mortgage', readTime: '5 min' },
];

const CATEGORIES = ['All', 'Housing Market', 'Real Estate Investment', 'Mortgage', 'Home Buying', 'Affordability', 'Refinance', 'Taxes', 'Investing', 'Bonds & Fixed Income', 'Retirement', 'FinTech', 'Banking', 'Credit Cards', 'Personal Finance', 'Auto Loans', 'Education'];

export default function BlogPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }]} />
            <div className="mb-6 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl font-black mb-2 sm:mb-3" style={{ color: 'var(--color-text)' }}>Mortgage & Finance Resources</h1>
                <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-muted)' }}>
                    Free guides on home buying, mortgage calculations, refinancing, and personal finance - written for everyday Americans.
                </p>
            </div>

            <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                {CATEGORIES.map(c => (
                    <button key={c} className={`px-3 sm:px-4 py-2.5 sm:py-2 min-h-[44px] sm:min-h-[36px] rounded-lg text-xs font-semibold border transition-all whitespace-nowrap flex-shrink-0 ${c === 'All' ? 'text-white border-transparent' : 'border-current'}`}
                        style={{ background: c === 'All' ? 'var(--color-navy)' : 'transparent', color: c === 'All' ? 'white' : 'var(--color-text-muted)' }}>
                        {c}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {POSTS.map(post => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="card p-4 sm:p-6 cursor-pointer hover:-translate-y-1 transition-all duration-200 block no-underline">
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-bold mb-2 sm:mb-3" style={{ background: 'rgba(0,200,83,0.12)', color: '#00C853' }}>
                            {post.category}
                        </span>
                        <h2 className="font-bold text-sm sm:text-base mb-2 leading-snug" style={{ color: 'var(--color-text)' }}>
                            {post.title}
                        </h2>
                        <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime} read</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* SEO-rich calculator links */}
            <div className="mt-8 sm:mt-12 card p-4 sm:p-6">
                <h2 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Free Calculator Tools</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {[
                        ['Mortgage Calculator', '/calculators/mortgage'],
                        ['Affordability Calc', '/calculators/affordability'],
                        ['Refinance Calc', '/calculators/refinance'],
                        ['Rent vs Buy', '/calculators/rent-vs-buy'],
                    ].map(([label, href]) => (
                        <Link key={String(href)} href={String(href)} className="btn-outline text-center text-xs py-2">
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
