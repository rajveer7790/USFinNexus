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
      { title: 'Qualification is broader than payment', detail: 'Lenders may review income, recurring debts, credit score, assets, property details and program rules. For an FHA loan, use the dedicated FHA loan calculator to model minimum down payment and mortgage insurance premium (MIP) assumptions.' },
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
      { title: 'What the schedule shows', detail: 'For fixed-rate loans, each row should identify payment, interest, principal and remaining balance so you can audit how the mortgage loan amortizes and the total interest paid.' },
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
      { title: 'Include recurring obligations', detail: 'Add up your monthly mortgage payment, auto and student loan payments, minimum card payments and other existing debt. Mortgage lenders may also review credit score, assets and program rules.' },
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
      { title: 'Stress-test the payment', detail: 'Try a higher interest rate, monthly mortgage payment, insurance premium, tax bill or HOA amount. Include private mortgage insurance for a low-down-payment conventional loan and compare an FHA loan separately.' },
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
      { title: 'Estimate usable equity', detail: 'Lenders may limit combined loan-to-value and maximum loan amounts. Subtract the outstanding balance of existing mortgages from the supported property value and applicable borrowing limit.' },
      { title: 'Model the repayment period', detail: 'A draw-period minimum payment can rise when principal repayment begins. Variable rates can change the loan payment; compare a fixed-rate home equity loan for major expenses.' },
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
      { href: '/blog/pay-off-mortgage-early-strategy', label: 'compare payoff versus investing' },
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
      { title: 'Use the correct loan terms', detail: 'For multiple federal or private student loans, model each loan amount and interest rate separately or use a balance-weighted rate for a simplified estimate. Credit score can affect private refinancing offers.' },
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
      { title: 'Post-reset payment', detail: 'After you pay only the interest, calculate principal and interest using the remaining balance and shorter term. This monthly mortgage payment can be much higher over the remaining life of the loan.' },
      { title: 'Do not assume appreciation or refinance', detail: 'Home values and future credit conditions are uncertain. Stress-test the payment you could face without a sale or refinance.' },
    ],
    scenarios: ['Compare the introductory payment with the fully amortizing payment.', 'Test a higher rate at the reset date.', 'Compare total interest with a standard fixed-rate mortgage.'],
    links: [
      { href: '/blog/interest-only-mortgage-pros-cons', label: 'review interest-only mortgage risks' },
      { href: '/calculators/mortgage', label: 'compare a standard mortgage' },
      { href: '/calculators/arm', label: 'model adjustable-rate scenarios' },
    ],
  },
  'personal-loan': {
    title: 'Personal loan payment, APR and total-cost guide',
    answer: 'A personal loan calculator estimates the monthly payment and interest paid from the loan amount, annual percentage rate (APR) and repayment term. Compare the amount received after any origination fee with the amount you must repay.',
    points: [
      { title: 'APR versus interest rate', detail: 'APR can reflect certain lender fees as well as interest, so it is usually more useful than the note rate when comparing offers with the same term.' },
      { title: 'Credit profile matters', detail: 'Credit scores, income, existing debt and lender rules can affect eligibility and pricing. A calculator result is not a rate quote or approval.' },
      { title: 'Automatic payments', detail: 'Some lenders offer a rate discount for automatic payments. Confirm the conditions and compare the disclosed APR rather than assuming a discount.' },
    ],
    scenarios: ['Compare 36-, 48- and 60-month loan terms.', 'Model the proceeds after an origination fee.', 'Compare a personal loan with existing credit-card debt.'],
    links: [
      { href: '/calculators/comparison', label: 'compare loan offers' },
      { href: '/calculators/debt-payoff', label: 'build a debt-payoff plan' },
      { href: '/calculators/credit-card', label: 'estimate credit-card payoff' },
    ],
  },
  drip: {
    title: 'DRIP calculator assumptions and dividend reinvestment',
    answer: 'A dividend reinvestment plan, or DRIP, automatically reinvests a dividend payment into additional shares. This forecast combines starting value, dividend yield, dividend growth rate, share-price growth and recurring contributions; it does not predict an investment return.',
    points: [
      { title: 'Reinvestment compounds shares', detail: 'Reinvested dividend income purchases additional shares, which may generate later dividends. Taxes may still apply in a taxable account.' },
      { title: 'Separate growth assumptions', detail: 'Dividend growth and share-price growth are different inputs. Neither is guaranteed, and a dividend can be reduced or suspended.' },
      { title: 'Use conservative scenarios', detail: 'Compare flat, lower and higher assumptions over consecutive years instead of treating one forecast as an expected outcome.' },
    ],
    scenarios: ['Model dividends without price growth.', 'Compare reinvested dividends with cash distributions.', 'Add monthly contributions and review total contributed capital.'],
    links: [
      { href: '/calculators/investment', label: 'model general investment growth' },
      { href: '/calculators/retirement', label: 'build a retirement projection' },
      { href: '/blog/dividend-vs-growth-investing-2026', label: 'compare dividend and growth investing' },
    ],
  },
  investment: {
    title: 'Investment growth calculator assumptions',
    answer: 'An investment growth calculator projects a future value from the starting balance, additional contributions, time horizon and assumed annual return. The result is a scenario, not a forecast, and does not include every fee, tax or market risk.',
    points: [
      { title: 'Rate of return', detail: 'Test more than one average annual return. Actual returns vary by investment type and can be negative, especially over shorter periods.' },
      { title: 'Contribution timing', detail: 'A recurring additional contribution can materially change the projection. Match the calculator frequency to the schedule you can sustain.' },
      { title: 'Nominal versus real value', detail: 'A nominal balance does not show future purchasing power. Consider inflation, taxes and fees before using the result for a goal.' },
    ],
    scenarios: ['Compare monthly and annual contributions.', 'Stress-test a lower annual return.', 'Compare nominal growth with an inflation-adjusted goal.'],
    links: [
      { href: '/calculators/retirement', label: 'estimate retirement savings' },
      { href: '/calculators/fire-planner', label: 'model a financial-independence goal' },
      { href: '/calculators/drip', label: 'model dividend reinvestment' },
    ],
  },
  'auto-loan': {
    title: 'Auto financing estimator and total car-loan cost',
    answer: 'An auto financing estimator should use purchase price, down payment, trade-in, taxes, fees, APR and term to calculate the amount financed, estimated monthly payment and total interest. Compare the complete transaction, not only the payment.',
    points: [
      { title: 'Longer terms cost more', detail: 'Longer terms can reduce the required payment but normally increase interest paid and the time the outstanding balance may exceed the vehicle value.' },
      { title: 'Use a current quote', detail: 'Rates depend on credit, vehicle, term and lender. Enter an actual preapproval or dealer quote rather than a generic advertised rate.' },
      { title: 'Separate price and financing', detail: 'Negotiate the purchase price, trade-in and financing as separate figures so a lower payment does not hide a higher total cost.' },
    ],
    scenarios: ['Compare 48-, 60- and 72-month terms.', 'Test a larger down payment.', 'Compare a rebate with promotional financing.'],
    links: [
      { href: '/blog/auto-loan-terms-60-72-84-month', label: 'compare auto-loan terms' },
      { href: '/blog/new-vs-used-car-total-cost-ownership', label: 'compare new and used car costs' },
      { href: '/calculators/comparison', label: 'compare financing offers' },
    ],
  },
  'credit-card': {
    title: 'Credit card debt calculator and payoff strategy',
    answer: 'A credit card debt calculator estimates payoff time and interest from the balance, APR and planned payment. Interest accrues according to the issuer agreement, so the statement balance and issuer payoff quote remain authoritative.',
    points: [
      { title: 'Pay above the minimum', detail: 'Minimum-payment formulas used by credit card companies vary and can produce a long payoff period. A fixed payment above the minimum generally reduces interest.' },
      { title: 'Consider transfer costs', detail: 'Balance transfer credit cards may charge a transfer fee and revert to a higher APR after the promotional period. Model both the fee and deadline.' },
      { title: 'Protect liquidity', detail: 'Paying off debt is important, but keep enough emergency cash to avoid immediately borrowing again for an unexpected expense.' },
    ],
    scenarios: ['Compare the minimum with a fixed monthly payment.', 'Model a 0% transfer fee and promotional deadline.', 'Compare avalanche and snowball ordering across cards.'],
    links: [
      { href: '/calculators/debt-payoff', label: 'compare multiple debts' },
      { href: '/blog/balance-transfer-credit-cards-strategy', label: 'review balance-transfer strategy' },
      { href: '/blog/credit-card-payoff-calculator-strategies', label: 'review payoff methods' },
    ],
  },
  california: {
    title: 'California mortgage calculator assumptions',
    answer: 'A California mortgage estimate should combine principal and interest with property taxes, homeowners insurance, mortgage insurance, HOA dues and transaction-specific costs. Proposition 13 affects assessed-value rules, but it does not make every owner’s tax bill identical.',
    points: [
      { title: 'Use local tax information', detail: 'Supplemental assessments, voter-approved debt and local charges can affect the bill. Verify the parcel and county information before relying on an estimate.' },
      { title: 'Model insurance separately', detail: 'Home insurance availability and price vary by property and location. Use a property-specific quote, not a statewide average.' },
      { title: 'Check current loan limits', detail: 'Conforming and high-cost limits can vary by county and year. Compare conventional mortgages and jumbo mortgage loans using current lender terms.' },
    ],
    scenarios: ['Compare 30-year and 15-year terms.', 'Stress-test a higher insurance quote.', 'Add HOA dues and mortgage insurance where applicable.'],
    links: [
      { href: '/calculators/closing-costs', label: 'estimate closing costs' },
      { href: '/calculators/affordability', label: 'estimate affordability' },
      { href: '/mortgage-rates', label: 'review mortgage-rate context' },
    ],
  },
  'closing-costs': {
    title: 'Closing costs calculator categories and estimates',
    answer: 'Estimated closing costs can include lender charges, appraisal, title and settlement services, recording, taxes, insurance premiums and prepaid interest. Costs vary depending on the loan, property, location, providers, credits and closing date.',
    points: [
      { title: 'Loan costs', detail: 'Origination charges, points, appraisal and other lender-required services should be compared using the Loan Estimate.' },
      { title: 'Prepaids are timing items', detail: 'Prepaid interest, property taxes and insurance reserves are cash due at closing but are not always fees paid to the lender.' },
      { title: 'Compensation is negotiable', detail: 'Real estate agent and broker compensation is contract-specific. Do not insert a universal commission percentage into the estimate.' },
    ],
    scenarios: ['Compare lender credits with upfront fees.', 'Estimate prepaid taxes and insurance by closing date.', 'Model seller concessions permitted by the loan program.'],
    links: [
      { href: '/blog/closing-costs-itemized-breakdown-2026', label: 'review an itemized closing-cost guide' },
      { href: '/blog/mortgage-broker-fees', label: 'review mortgage broker fees' },
      { href: '/calculators/mortgage', label: 'estimate the monthly mortgage payment' },
    ],
  },
  'income-tax': {
    title: '2026 tax calculator scope, deductions and credits',
    answer: 'This 2026 tax calculator estimates federal income tax from filing status, income and the standard deduction. It is a planning tool and does not model every itemized deduction, tax credit, estimated tax payment, eligibility requirement or state tax rule.',
    points: [
      { title: 'Deductions reduce taxable income', detail: 'Compare the standard deduction with eligible itemized deductions. A deduction is not a dollar-for-dollar reduction of tax.' },
      { title: 'Credits reduce calculated tax', detail: 'Deductions and credits work differently. Credits such as the Child Tax Credit have separate eligibility and phase-out rules.' },
      { title: 'Payments affect the balance due', detail: 'Withholding and estimated tax payments do not change tax liability; they change how much may be due or refunded at filing.' },
    ],
    scenarios: ['Compare filing statuses only when legally eligible.', 'Estimate taxable income after the standard deduction.', 'Review withholding separately from total tax liability.'],
    links: [
      { href: '/blog/2026-federal-tax-brackets-standard-deduction', label: 'review the 2026 brackets' },
      { href: '/blog/child-tax-credit-2026', label: 'review the Child Tax Credit' },
      { href: '/blog/earned-income-tax-credit-2026', label: 'review the Earned Income Tax Credit' },
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
