/** Curated next steps: one source topic, a specific reader need and a canonical destination. */
export interface EditorialLink { before: string; anchor: string; href: string; after: string }
const blog = (slug: string) => `/blog/${slug}`;
const item = (before: string, anchor: string, slug: string, after: string): EditorialLink => ({ before, anchor, href: blog(slug), after });
export const EDITORIAL_LINKS: Record<string, EditorialLink[]> = {
 mortgage: [
  item('If your estimate differs from a quote, compare ', 'the calculator with your lender’s payment breakdown', 'lender-quote-vs-online-calculator', ' before changing the loan amount.'),
  item('To understand the formula behind the result, read ', 'how monthly mortgage payments are calculated', 'how-to-calculate-monthly-mortgage-payment', '.'),
  item('Before choosing a loan term, compare ', '15-year and 30-year mortgage costs', '30-year-vs-15-year-mortgage-2026', ' using the same borrowing amount.'),
 ],
 affordability: [
  item('Separate lender qualification from your household budget with ', 'this home-affordability planning guide', 'how-much-house-can-i-afford-2026', '.'),
  item('If you are using percentage rules, see why ', '28/36 is a planning scenario rather than an approval guarantee', '28-36-rule-explained-lender-standards', '.'),
  item('Before you commit to a purchase, understand ', 'prequalification versus mortgage preapproval', 'mortgage-preapproval-prequalification', '.'),
 ],
 'down-payment': [
  item('Before waiting for a larger deposit, compare ', 'the trade-offs of a 20% down payment', '20-percent-down-payment-standard-2026', '.'),
  item('If cash is the obstacle, investigate ', 'down-payment assistance programs and their conditions', 'down-payment-assistance-dpa-programs', '.'),
  item('Eligible buyers can also compare ', 'VA, USDA and FHA low-down-payment options', 'no-down-payment-mortgages-va-usda-fha', '.'),
 ],
 'closing-costs': [item('To prepare cash for settlement, work through ', 'the itemized closing-cost breakdown', 'closing-costs-itemized-breakdown-2026', '.'), item('Compare the lender fee with ongoing interest using ', 'the mortgage points and buydown guide', 'mortgage-points-buydown-calculator', '.')],
 refinance: [item('A rate reduction alone does not settle the decision. Read ', 'when refinancing can make financial sense', 'should-i-refinance-2026', '.'), item('Program rules differ, so check ', 'FHA, VA and USDA streamline refinance options', 'streamline-refinance-fha-va-usda', ' before assuming the same process applies.')],
 'pmi-removal': [item('For the distinction between requesting cancellation and automatic termination, see ', 'PMI cost and removal rules', 'pmi-explained-cost-removal-2026', '.'), item('If you are comparing how premiums are paid, read ', 'lender-paid versus borrower-paid PMI', 'lender-paid-pmi-vs-borrower-paid', '.'), item('Before choosing a “no PMI” offer, examine ', 'the costs that can replace monthly mortgage insurance', 'no-pmi-mortgages-down-payment', '.')],
 comparison: [item('A second loan changes the risk as well as the payment. Compare ', 'the 80-10-10 piggyback mortgage structure', 'piggyback-mortgage-80-10-10-strategy', '.'), item('If a quoted loan is outside standard underwriting, read ', 'portfolio and non-QM mortgage trade-offs', 'portfolio-loans-non-qm-mortgages-2026', '.')],
 va: [item('Check the program distinctions in ', 'the VA loan benefits guide', 'va-loan-benefits-2026-military-guide', ' alongside your lender’s eligibility review.')],
 'interest-only': [item('A low initial payment does not show the later obligation. Review ', 'interest-only mortgage risks and payment changes', 'interest-only-mortgage-pros-cons', '.')],
 'mortgage-payoff': [item('Before sending extra principal, compare ', 'early mortgage payoff with other uses of cash', 'pay-off-mortgage-early-strategy', '.')],
 'rent-vs-buy': [item('Test the time horizon and ownership expenses in ', 'this rent-versus-buy planning guide', 'rent-vs-buy-calculator-2026-housing-market', '.'), item('Broader market stories need local evidence; see ', 'the limits of the “silver tsunami” housing narrative', 'silver-tsunami-housing-shift-2026', '.')],
 'rental-property': [item('Financing a rental differs from financing your residence. Check ', 'investment-property mortgage pricing factors', 'investment-property-mortgage-rates-2026', '.'), item('For multiple units, compare ', 'multifamily investing costs and risks', 'multifamily-real-estate-investing-2026', '.'), item('Fractional ownership has a different structure; read ', 'the fractional real estate investing guide', 'fractional-real-estate-investing-2026', '.')],
 'auto-loan': [item('A low advertised rate can involve a trade-off. Compare ', '0% APR dealer financing with a bank loan', '0-percent-apr-auto-loan-dealer-vs-bank', '.'), item('To test a lower payment against total interest, compare ', '60-, 72- and 84-month car loans', 'auto-loan-terms-60-72-84-month', '.')],
 'personal-loan': [item('Before consolidating a balance, compare ', 'personal loans with credit cards on total cost', 'personal-loan-vs-credit-card-comparison', '.')],
 'credit-card': [item('Turn the estimate into a repayment plan with ', 'credit card payoff strategies', 'credit-card-payoff-calculator-strategies', '.')],
 'debt-payoff': [item('Choose a repayment order by comparing ', 'the debt avalanche and snowball methods', 'debt-payoff-avalanche-vs-snowball-method', '.')],
 retirement: [item('Choose where to direct new savings with ', 'the Roth IRA versus 401(k) comparison', 'roth-ira-vs-401k-comparison-2026', '.'), item('If your workplace plan permits after-tax contributions, check ', 'the mega backdoor Roth process and limits', 'mega-backdoor-roth-ira-guide-2026', '.'), item('For benefit cash flow, check ', 'the 2027 Social Security payment calendar', 'social-security-payment-schedule-2027', '.')],
 budget: [item('If benefits support your budget, read ', 'the confirmed 2027 Social Security COLA update', 'social-security-cola-2027', '.'), item('Before choosing health coverage, compare ', 'Medicare plans for 2027 open enrollment', 'medicare-plan-compare-2027-open-enrollment', '.')],
 'income-tax': [item('If income is not fully covered by withholding, review ', 'the January 15, 2027 estimated-tax installment', 'estimated-tax-payment-january-15-2027', '.'), item('Homeowners should distinguish deductible items from cash costs using ', 'the homeowner tax-deduction guide', 'homeowner-tax-deductions-2026', '.')],
 investment: [item('For money needed soon, compare ', 'Treasury bills and high-yield savings', 'treasury-bills-vs-high-yield-savings-2026', '.'), item('For longer-term choices, consider ', 'stock index investing versus direct real estate', 'sp500-vs-real-estate-investing-2026', '.'), item('Before following an automated recommendation, read ', 'the limits of AI investing tools', 'ai-personal-finance-investing-2026', '.')],
 'crypto-tax': [item('Before relying on the estimate, organize records using ', 'the crypto tax reporting guide', 'crypto-tax-guide-2026', '.')],
 'student-loan': [item('Check your servicer’s instructions alongside ', 'the IDR recertification checklist', 'student-loan-idr-recertification-2026', '.')],
 'treasury-bills-vs-high-yield-savings-2026': [item('If you choose a bank account, verify ', 'FDIC deposit-insurance ownership categories and limits', 'fdic-deposit-insurance-limits-2026', '.')],
 'how-much-house-can-i-afford-2026': [
  { before: 'For a state-specific payment scenario, start with the ', anchor: 'Arizona mortgage calculator', href: '/calculators/arizona', after: ' and replace assumptions with your property’s actual costs.' },
  { before: 'Buying in Ohio? Use the ', anchor: 'Ohio mortgage calculator', href: '/calculators/ohio', after: ' with a local tax bill and an insurance quote.' },
 ],
};
