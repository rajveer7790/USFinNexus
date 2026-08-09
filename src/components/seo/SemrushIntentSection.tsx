import Link from 'next/link';

type IntentPage = {
  title: string;
  answer: string;
  points: { title: string; detail: string }[];
  scenarios: string[];
  links: { href: string; label: string }[];
};

const intentPages = {
  mortgage: {
    title: 'Mortgage payment, PITI and loan-cost guide',
    answer: 'A complete mortgage estimate starts with principal and interest, then adds property tax, homeowners insurance, mortgage insurance and HOA dues when applicable. Use a current rate quote and local cost assumptions—the result is a planning estimate, not a lender offer.',
    points: [
      { title: 'Monthly payment formula', detail: 'Principal and interest use the standard amortizing-loan formula. Taxes, insurance, PMI or MIP and HOA dues are separate housing costs.' },
      { title: 'Loan amount versus home price', detail: 'Loan amount equals purchase price minus down payment. Closing costs are normally modeled separately unless they are financed.' },
      { title: 'Qualification is broader than payment', detail: 'Lenders may review income, recurring debts, credit, assets, property details and program rules. A payment result does not guarantee approval.' },
    ],
    scenarios: ['Compare 15-year and 30-year terms at the same loan amount.', 'Test taxes, insurance, PMI and HOA instead of looking only at principal and interest.', 'Add extra principal and compare the payoff date and total interest.'],
    links: [
      { href: '/calculators/amortization', label: 'build an amortization schedule' },
      { href: '/calculators/affordability', label: 'estimate how much house you can afford' },
      { href: '/mortgage-rates', label: 'review mortgage-rate context' },
    ],
  },
  amortization: {
    title: 'Mortgage amortization schedule, formula and examples',
    answer: 'An amortization schedule divides each fixed payment between interest and principal. Early payments are interest-heavy because interest is calculated on a larger balance; the principal share grows as the balance declines.',
    points: [
      { title: 'What the schedule shows', detail: 'Each row should identify payment, interest, principal and remaining balance so you can audit the loan month by month.' },
      { title: 'Extra-payment effect', detail: 'Additional principal reduces the balance used for later interest calculations. Confirm that your servicer applies extra funds to principal.' },
      { title: '30-year versus 15-year', detail: 'A shorter term usually raises the required payment but can reduce lifetime interest. Compare both payment and total cost.' },
    ],
    scenarios: ['Generate a 30-year mortgage amortization table.', 'Compare one extra payment per year with a fixed monthly extra amount.', 'Model the remaining balance before a sale or refinance.'],
    links: [
      { href: '/calculators/mortgage', label: 'estimate the complete mortgage payment' },
      { href: '/calculators/mortgage-payoff', label: 'plan an early mortgage payoff' },
      { href: '/calculators/refinance', label: 'compare a refinance scenario' },
    ],
  },
  dti: {
    title: 'DTI calculation for mortgage planning',
    answer: 'Debt-to-income ratio equals recurring monthly debt payments divided by gross monthly income. Front-end DTI looks at housing expense; back-end DTI adds other recurring debts. Program and lender calculations can differ from a consumer estimate.',
    points: [
      { title: 'Use gross monthly income', detail: 'Convert stable annual gross income to a monthly amount before taxes. Underwriters determine which income is eligible and documented.' },
      { title: 'Include recurring obligations', detail: 'Common inputs include the proposed housing payment, auto loans, student loans, minimum card payments and other required debts.' },
      { title: 'Avoid a universal approval claim', detail: 'The former fixed 43% General Qualified Mortgage DTI limit was replaced by price-based thresholds. Loan programs and lenders still apply their own underwriting rules.' },
    ],
    scenarios: ['Compare front-end and back-end DTI.', 'Test how paying off a recurring debt changes the ratio.', 'Model FHA, VA or conventional planning scenarios without treating the result as approval.'],
    links: [
      { href: '/calculators/affordability', label: 'estimate mortgage affordability' },
      { href: '/blog/front-end-vs-back-end-dti-2026', label: 'compare front-end and back-end DTI' },
      { href: '/calculators/fha-va-usda', label: 'compare government-backed loan costs' },
    ],
  },
  affordability: {
    title: 'How much mortgage and house can you afford?',
    answer: 'Affordability depends on income, recurring debt, down payment, rate, term, taxes, insurance, mortgage insurance, HOA dues and the monthly budget you choose. The calculator is a planning range, not a preapproval or promise of a loan amount.',
    points: [
      { title: '28/36 is a planning framework', detail: 'The ratios can help create a first estimate, but they are not universal approval limits and do not replace program-specific underwriting.' },
      { title: 'Cash needed matters', detail: 'Down payment, closing costs, reserves, repairs and moving expenses can limit a purchase even when the monthly payment appears manageable.' },
      { title: 'Stress-test the payment', detail: 'Try a higher rate, insurance premium, tax bill or HOA amount and keep room for maintenance and non-housing goals.' },
    ],
    scenarios: ['Estimate a home price from monthly income and debt.', 'Compare 3%, 5%, 10% and 20% down-payment scenarios.', 'Test how mortgage rates and property taxes change the affordable range.'],
    links: [
      { href: '/calculators/dti', label: 'calculate debt-to-income ratio' },
      { href: '/blog/mortgage-preapproval-prequalification', label: 'understand preapproval and prequalification' },
      { href: '/calculators/down-payment', label: 'plan a down payment' },
    ],
  },
  refinance: {
    title: 'Refinance costs, savings and break-even guide',
    answer: 'A simple refinance break-even period is upfront refinance cost divided by monthly payment savings. Also compare the new term, total projected interest, cash-out, financed costs and how long you expect to keep the mortgage.',
    points: [
      { title: 'Include the full cost', detail: 'Use lender and third-party charges from a current Loan Estimate. Points, lender credits and financed fees change the comparison.' },
      { title: 'Do not reset the clock blindly', detail: 'A new 30-year loan may lower the payment while extending repayment. Compare it with the remaining term of the current loan.' },
      { title: 'Rates are quote-specific', detail: 'Enter a current quote for the loan type, credit profile, points and lock period you are evaluating. A market average is not an offer.' },
    ],
    scenarios: ['$6,000 cost and $300 monthly savings produces a simple 20-month break-even.', 'Compare rate-and-term refinance with cash-out refinance.', 'Test paying costs in cash versus financing them into the balance.'],
    links: [
      { href: '/blog/refinancing-costs-2026-breakdown', label: 'review refinance closing costs' },
      { href: '/blog/refinance-break-even-calculator-guide-2026', label: 'understand break-even analysis' },
      { href: '/mortgage-rates', label: 'review current rate context' },
    ],
  },
  heloc: {
    title: 'HELOC, home equity and second-mortgage planning',
    answer: 'A HELOC is generally a revolving line secured by home equity, while a home equity loan is typically a closed-end second mortgage. Rates, draw rules, repayment periods, fees and variable-rate risk determine the real cost.',
    points: [
      { title: 'Estimate usable equity', detail: 'Lenders may limit combined loan-to-value. Subtract existing mortgage balances from the lender-supported property value and applicable borrowing limit.' },
      { title: 'Model the repayment period', detail: 'A draw-period payment can rise when principal repayment begins. Variable rates can also change the payment.' },
      { title: 'Your home secures the debt', detail: 'Borrowing to pay other debts can convert unsecured obligations into debt secured by the home. Compare risks, fees and alternatives.' },
    ],
    scenarios: ['Compare a HELOC with a fixed home equity loan.', 'Stress-test a higher variable interest rate.', 'Estimate combined loan-to-value after a proposed draw.'],
    links: [
      { href: '/blog/heloc-vs-home-equity-loan-2026', label: 'compare HELOCs and home equity loans' },
      { href: '/calculators/refinance', label: 'compare cash-out refinancing' },
      { href: '/calculators/debt-payoff', label: 'model debt-payoff alternatives' },
    ],
  },
  'mortgage-payoff': {
    title: 'How to pay off a mortgage faster',
    answer: 'Extra principal can shorten the payoff period and reduce interest because later interest is calculated on a smaller balance. Compare a sustainable extra amount, keep emergency reserves and verify how the servicer applies additional payments.',
    points: [
      { title: 'Use the remaining loan', detail: 'Enter the current principal balance, note rate and remaining term—not the original purchase price and original term.' },
      { title: 'Compare exact targets', detail: 'Test $100, $250 or $500 monthly, one extra payment a year, or the amount required to finish five years earlier.' },
      { title: 'Payoff versus investing', detail: 'Interest avoided is relatively certain; investment returns are uncertain and may be taxable. Liquidity and risk tolerance matter.' },
    ],
    scenarios: ['Pay the mortgage off 5 years early.', 'Compare biweekly-equivalent payments with monthly extra principal.', 'Estimate the payment needed for a 10-year or 15-year payoff target.'],
    links: [
      { href: '/blog/pay-off-mortgage-early-strategy', label: 'review payoff strategies' },
      { href: '/blog/paying-off-mortgage-early-vs-investing', label: 'compare payoff versus investing' },
      { href: '/calculators/amortization', label: 'view an amortization schedule' },
    ],
  },
  arm: {
    title: 'Adjustable-rate mortgage payment scenarios',
    answer: 'An ARM begins with an initial rate for a fixed period, then adjusts using the loan index, margin and contractual caps. Model the first adjustment and a higher-rate case instead of relying only on the introductory payment.',
    points: [
      { title: 'Read the adjustment terms', detail: 'Identify the initial period, index, margin, adjustment frequency, periodic cap and lifetime cap in the loan documents.' },
      { title: 'Stress-test payment shock', detail: 'A higher rate applied to the remaining balance and term can materially increase the payment after the fixed period.' },
      { title: 'Compare the expected holding period', detail: 'Selling or refinancing before adjustment is not guaranteed. Include transaction costs and the possibility that future rates are unfavorable.' },
    ],
    scenarios: ['Compare a 5/6 ARM with a 30-year fixed mortgage.', 'Model the first adjustment at the periodic cap.', 'Model the lifetime-cap rate as a severe stress test.'],
    links: [
      { href: '/blog/adjustable-rate-mortgage-trends-2026', label: 'read the ARM risk and rate guide' },
      { href: '/calculators/mortgage', label: 'compare a fixed-rate payment' },
      { href: '/calculators/refinance', label: 'model a possible refinance' },
    ],
  },
  'fha-va-usda': {
    title: 'FHA, VA and USDA mortgage cost comparison',
    answer: 'Government-backed mortgages differ in eligibility, down payment, upfront charges and recurring mortgage insurance or guarantee fees. Compare the complete monthly payment and cash needed—not only the advertised down payment.',
    points: [
      { title: 'FHA', detail: 'Model the FHA upfront mortgage insurance premium and annual MIP using current program rules and the applicable county loan limit.' },
      { title: 'VA', detail: 'Eligible borrowers may have no required down payment, but a VA funding fee can apply unless exempt. Taxes, insurance and closing costs still matter.' },
      { title: 'USDA', detail: 'Eligibility depends on property location, household income and other rules. Upfront and annual guarantee fees may apply.' },
    ],
    scenarios: ['Compare identical purchase prices across FHA, VA, USDA and conventional assumptions.', 'Test financed versus cash-paid upfront fees.', 'Include taxes, insurance and recurring program charges.'],
    links: [
      { href: '/calculators/fha', label: 'use the dedicated FHA calculator' },
      { href: '/calculators/va', label: 'use the dedicated VA calculator' },
      { href: '/blog/no-down-payment-mortgages-va-usda-fha', label: 'review low-down-payment options' },
    ],
  },
  'student-loan': {
    title: 'Student loan payment and payoff planning',
    answer: 'Estimate payment and interest from balance, rate and term, then compare extra-payment scenarios. Federal repayment plans, forgiveness rules, capitalization and servicer calculations can produce results that differ from a simple amortizing-loan model.',
    points: [
      { title: 'Use a weighted rate when needed', detail: 'For multiple loans, model each loan separately or use a balance-weighted average rate for a simplified combined estimate.' },
      { title: 'Extra payments need instructions', detail: 'Confirm how the servicer applies extra funds and whether you want the highest-rate loan targeted first.' },
      { title: 'Federal benefits have value', detail: 'Refinancing federal loans into private debt can permanently remove federal protections and repayment options.' },
    ],
    scenarios: ['Compare the standard term with accelerated payoff.', 'Target the highest-interest loan first.', 'Estimate the effect of refinancing only after valuing lost federal benefits.'],
    links: [
      { href: '/blog/student-loan-repayment-plans-2026-income-driven', label: 'review repayment-plan context' },
      { href: '/calculators/debt-payoff', label: 'compare avalanche and snowball methods' },
      { href: '/calculators/amortization', label: 'inspect an amortization schedule' },
    ],
  },
  'interest-only': {
    title: 'Interest-only mortgage payment and reset risk',
    answer: 'During an interest-only period, the required payment may cover interest without reducing principal. When amortization begins, the same balance must be repaid over fewer years, which can create substantial payment shock.',
    points: [
      { title: 'Interest-only payment', detail: 'A simplified monthly interest-only payment is principal multiplied by annual rate divided by 12.' },
      { title: 'Post-reset payment', detail: 'After the interest-only period, calculate a fully amortizing payment using the remaining balance and shorter remaining term.' },
      { title: 'Do not assume appreciation or refinance', detail: 'Home values and future credit conditions are uncertain. Stress-test the payment you could face without a sale or refinance.' },
    ],
    scenarios: ['Compare the introductory payment with the fully amortizing payment.', 'Test a higher rate at the reset date.', 'Compare total interest with a standard fixed-rate mortgage.'],
    links: [
      { href: '/blog/interest-only-mortgage-pros-cons', label: 'review interest-only mortgage risks' },
      { href: '/calculators/mortgage', label: 'compare a standard mortgage' },
      { href: '/calculators/arm', label: 'model adjustable-rate scenarios' },
    ],
  },
} satisfies Record<string, IntentPage>;

export type SemrushIntentSlug = keyof typeof intentPages;

export default function SemrushIntentSection({ slug }: { slug: SemrushIntentSlug }) {
  const page = intentPages[slug];
  return (
    <section className="max-w-5xl mx-auto mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby={`${slug}-intent-guide`}>
      <h2 id={`${slug}-intent-guide`} className="text-2xl sm:text-3xl font-bold text-slate-900">{page.title}</h2>
      <p className="mt-4 text-slate-700 leading-7"><strong>Quick answer:</strong> {page.answer}</p>
      <div className="grid gap-4 md:grid-cols-3 mt-7">
        {page.points.map((point) => (
          <div key={point.title} className="rounded-xl bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-900">{point.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">{point.detail}</p>
          </div>
        ))}
      </div>
      <h3 className="mt-8 text-xl font-semibold text-slate-900">Scenarios to calculate</h3>
      <ul className="mt-3 grid gap-2 sm:grid-cols-3 text-slate-700">
        {page.scenarios.map((scenario) => <li key={scenario} className="rounded-lg border border-slate-200 p-3">{scenario}</li>)}
      </ul>
      <p className="mt-7 text-slate-700">
        Next: {page.links.map((link, index) => (
          <span key={link.href}>{index > 0 ? ', ' : ''}<Link className="font-medium text-blue-700 hover:underline" href={link.href}>{link.label}</Link></span>
        ))}.
      </p>
    </section>
  );
}
