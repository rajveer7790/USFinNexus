import Link from 'next/link';

export default function RefinanceSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">How to Evaluate a Mortgage Refinance</h2>
                <p className="lead text-xl text-gray-600">
                    A refinance can lower a payment, shorten a term, change loan type or provide cash from home equity. The useful comparison is not a generic “one-percent rule”; it is the cost of your current remaining loan versus the new loan under the rate, term, fees and time horizon that apply to you.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Simple Refinance Break-Even</h3>
                <p>
                    A simple break-even calculation divides refinance costs by monthly payment savings. If closing costs are $4,000 and the modeled payment falls by $200 per month, the simple break-even is 20 months.
                </p>
                <p>
                    That calculation is intentionally simple. It can miss the effect of resetting the repayment term, financing closing costs, changing mortgage insurance, changing taxes or escrow, and differences in total interest. Use it as a first comparison rather than a complete refinance decision.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Use a Rate Quote Relevant to You</h3>
                <p>
                    Mortgage rates move frequently and borrower pricing varies. Instead of relying on an undated national average, enter the rate and points from a lender quote or a realistic scenario. Credit profile, loan-to-value, occupancy, loan type, points and lender pricing can all affect the actual rate and fees.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Compare the Remaining Term</h3>
                <p>
                    A lower monthly payment is not automatically a lower total cost. Refinancing a loan with fewer years remaining into a new 30-year term can reduce the required monthly payment while extending repayment. Compare the current months remaining with the new term and consider how long you expect to keep the loan.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Cash-Out Refinance</h3>
                <p>
                    A cash-out refinance replaces the existing mortgage with a larger loan and provides part of the difference in cash, subject to lender and loan-program requirements. Because it increases the balance secured by the home, compare it with alternatives such as a <Link href="/calculators/heloc">HELOC</Link> and consider rate, fees, repayment term and risk to home equity.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Closing Costs</h3>
                <p>
                    Refinance costs vary substantially by lender, property and transaction. Use the lender&apos;s estimate when available rather than assuming every refinance costs a fixed percentage of the balance. If fees are rolled into the new loan or exchanged for a higher rate, include that structure in the comparison.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Related Calculators</h3>
                <ul>
                    <li><Link href="/calculators/mortgage">Mortgage Calculator</Link> — compare all-in payment assumptions.</li>
                    <li><Link href="/calculators/amortization">Mortgage Amortization Calculator</Link> — compare remaining principal and interest over time.</li>
                    <li><Link href="/calculators/points-buydown">Mortgage Points Calculator</Link> — compare upfront points with modeled monthly savings.</li>
                    <li><Link href="/calculators/heloc">HELOC Calculator</Link> — model a home-equity line scenario.</li>
                </ul>

                <p className="text-sm text-gray-500">
                    Educational estimate only. A lender determines the actual rate, fees, eligibility, cash-out limits and required disclosures.
                </p>
            </div>
        </section>
    );
}
