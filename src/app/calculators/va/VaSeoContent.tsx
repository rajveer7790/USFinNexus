import Link from 'next/link';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const faqs = [
 { question: 'How do I calculate the VA funding fee?', answer: 'For a standard purchase, multiply the base loan after the down payment by the applicable fee. First use with less than 5% down generally uses 2.15%; subsequent use uses 3.3%. Verified exempt borrowers owe no funding fee.' },
 { question: 'Does 5% or 10% down reduce the funding fee?', answer: 'For standard purchases, at least 5% but less than 10% down generally reduces the fee to 1.5%. At least 10% down reduces it to 1.25%. These tiers apply to first and subsequent use, not cash-out refinancing.' },
 { question: 'Who is exempt from the VA funding fee?', answer: 'VA exemptions include qualifying service-connected compensation recipients, certain borrowers entitled to compensation but receiving retirement or active-duty pay, qualifying DIC surviving spouses, qualifying pre-discharge ratings received before closing and qualifying active-duty Purple Heart recipients. VA and the lender must verify status.' },
 { question: 'Can I roll the funding fee into my loan?', answer: 'Yes. Financing adds the fee to the base loan and means paying interest on it over time. Paying cash lowers the financed balance but increases cash required at closing.' },
 { question: 'Does this tool calculate IRRRL funding fees?', answer: 'No. This tool models standard purchase tiers. VA lists a 0.5% fee for an IRRRL unless exempt. Cash-out refinancing and other loan types use their own schedules.' },
 { question: 'Can a funding fee be refunded after a disability award?', answer: 'Potentially. VA says a later compensation award may qualify if its effective date is retroactive to before closing. A proposed or memorandum rating received after closing alone does not qualify. Contact VA for review.' },
];
export default function VaSeoContent() {
 return <><article className="prose prose-slate mx-auto max-w-3xl py-8">
 <p className="text-sm">Reviewed <time dateTime="2026-11-17">November 17, 2026</time> · USFinNexus Editorial Team · <Link href="/methodology">Methodology</Link></p>
 <h2 id="va-funding-fee">VA funding fee calculator: rate, exemption and financed balance</h2>
 <p><strong>Quick answer:</strong> A non-exempt standard VA purchase with less than 5% down generally has a 2.15% funding fee for first use or 3.3% after first use. At least 5% down reduces the purchase fee to 1.5%; at least 10% down reduces it to 1.25%. Apply the rate to the base loan after the down payment, not the full home price.</p>
 <p>This VA loan calculator combines the purchase funding fee with estimated principal and interest, taxes and homeowners insurance. VA loans do not require monthly mortgage insurance. A $0 mortgage-insurance line does not mean there are no fees or cash-to-close requirements.</p>
 <h2>How to use the VA funding fee calculator</h2>
 <ol><li>Enter the price, down payment, quoted rate and term.</li><li>Select first use of the VA benefit, not simply first home ownership.</li><li>Select exemption only after VA or your lender confirms eligibility.</li><li>Compare financing the fee with paying it at closing.</li><li>Replace taxes and insurance, then compare the payment and financed balance.</li></ol>
 <p>The default rate is illustrative, not a live VA quote. This is a standard purchase model. It does not calculate entitlement, residual-income approval, credit eligibility, appraisal gaps or a lender's maximum loan. Compare the result with a written Loan Estimate.</p>
 <h2>VA purchase funding fee chart</h2>
 <p>The <a href="https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/">official VA schedule</a> lists these purchase and construction rates, effective April 7, 2023. They are not newly created each calendar year.</p>
 <div className="overflow-x-auto"><table><caption>Non-exempt standard purchase or construction loans</caption><thead><tr><th>Down payment</th><th>First use</th><th>After first use</th></tr></thead><tbody><tr><td>Less than 5%</td><td>2.15%</td><td>3.30%</td></tr><tr><td>5% to under 10%</td><td>1.50%</td><td>1.50%</td></tr><tr><td>10% or more</td><td>1.25%</td><td>1.25%</td></tr><tr><td>Verified exemption</td><td>0%</td><td>0%</td></tr></tbody></table></div>
 <h2>Example: $300,000 purchase, first use, zero down</h2>
 <p>The base loan is $300,000. At 2.15%, the funding fee is $6,450. Financing it produces a $306,450 starting balance. Paying it at closing leaves a $300,000 loan but requires another $6,450 in cash. At the same rate and term, financing increases principal-and-interest payments and total interest.</p>
 <h3>What changes at 5% down?</h3>
 <p>A $15,000 down payment leaves a $285,000 base loan. The 1.5% purchase tier produces a $4,275 fee and a $289,275 balance if financed. Compare the $15,000 cash commitment with reserves, moving costs and other goals. A lower fee alone does not establish that the larger down payment is best.</p>
 <h2>Funding fee exemptions: verify before closing</h2>
 <p>VA's list includes borrowers receiving compensation for a service-connected disability; certain borrowers entitled to compensation but receiving retirement or active-duty pay; qualifying surviving spouses receiving Dependency and Indemnity Compensation; qualifying proposed or memorandum pre-discharge ratings received before closing; and active-duty Purple Heart recipients providing evidence by closing.</p>
 <p>A checkbox on this website does not establish eligibility. Ask the lender to confirm the Certificate of Eligibility and required VA documentation. A pending claim alone is not a verified exemption. Retain closing records if a later award could have an effective date before closing, because VA may review a funding-fee refund.</p>
 <h2>Purchase, cash-out refinance and IRRRL fees differ</h2>
 <p>Do not apply purchase down-payment tiers to every VA loan. VA lists 2.15% for first-use cash-out refinancing and 3.3% after first use; an interest rate reduction refinance loan (IRRRL) generally has a 0.5% fee unless exempt. Assumptions, Native American Direct Loans and other categories have separate schedules.</p>
 <p>This tool intentionally models purchase tiers. Read the <Link href="/blog/va-funding-fee-2026">VA funding-fee guide</Link>, verify loan type with VA and use the <Link href="/calculators/refinance">refinance calculator</Link> for a separate cost comparison. A purchase result is not an IRRRL quote.</p>
 <h2>No monthly PMI does not mean zero closing costs</h2>
 <p>Taxes, property insurance, title, recording charges, discount points and permitted lender charges can still apply. VA says a purchase or construction/permanent loan may finance the funding fee, not all other closing charges. Seller or lender credits have their own conditions.</p>
 <p>Use the <Link href="/calculators/closing-costs">closing-costs calculator</Link> for additional cash needs and the <Link href="/calculators/affordability">affordability calculator</Link> for a budget screen. Full entitlement removes VA's county loan-limit down-payment requirement, but lenders still review repayment ability and property value. A high calculator price is not approval.</p>
 <h2>Compare VA with FHA and conventional financing</h2>
 <p>Use actual quotes, the same home price and holding period, and include the fee, mortgage insurance, closing costs and retained cash. VA financing can be attractive without being best in every circumstance. Exemption status, rates, points and down payment can change the comparison.</p>
 <p>The <Link href="/calculators/fha">FHA mortgage insurance calculator</Link> models upfront and annual MIP. The <Link href="/calculators/mortgage">mortgage calculator</Link> models a conventional payment; <Link href="/calculators/pmi-removal">PMI removal</Link> covers eligible conventional borrower-paid insurance. These systems are not interchangeable.</p>
 <p><strong>Educational estimate:</strong> VA rates and exemptions checked November 17, 2026. Your lender and VA determine final eligibility and charges. Not a lending offer, Certificate of Eligibility or individualized financial/legal advice.</p>
 </article><CalculatorFAQ faqs={faqs} title="VA funding fee FAQs" /></>;
}
