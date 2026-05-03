import React from 'react';
import Link from 'next/link';

export default function ClosingCostsSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">
                    What Are Closing Costs and Who Pays Them?
                </h2>
                <p className="lead text-xl text-gray-600">
                    Closing costs are the massive bundle of fees, taxes, and prepaid expenses required to finalize a real estate transaction. Whether you are buying or selling a home, these costs can catch you entirely off guard if you haven&apos;t budgeted for them. Our calculator breaks down exact 2026 state transfer taxes, title fees, and typical agent commissions so you aren&apos;t surprised at the closing table.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Buyer Closing Costs (The Breakdown)
                </h3>
                <p>
                    Buyers typically pay between <strong>2% to 5%</strong> of the the total loan amount in closing costs. These are generally split into three main categories:
                </p>
                <ul>
                    <li>
                        <strong>Lender Fees:</strong> Origination fees, application fees, points, and underwriting fees. This is what you pay the bank to process and approve your loan.
                    </li>
                    <li>
                        <strong>Third-Party Fees:</strong> Appraisal fees (to verify the home&apos;s value), home inspection fees, and Title fees (Title Search and Lender&apos;s Title Insurance) required to ensure no one else legally owns the property.
                    </li>
                    <li>
                        <strong>Prepaids and Escrow:</strong> Your lender will usually require you to deposit several months&apos; worth of property taxes and homeowners insurance upfront into an escrow account. You also pre-pay setting up the daily interest from the day you close to the end of the month.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Seller Closing Costs (The Breakdown)
                </h3>
                <p>
                    Sellers usually face a much larger closing cost burden—typically <strong>6% to 10%</strong> of the total home sale price. The massive majority of this is realtor commissions.
                </p>
                <ul>
                    <li>
                        <strong>Agent Commissions:</strong> Historically averaging 5% to 6% of the sale price, split between the buyer&apos;s agent and the seller&apos;s agent. *(Note: Post-2024 NAR settlement rules have made these commissions more negotiable, but sellers still frequently pay them to attract buyers).*
                    </li>
                    <li>
                        <strong>State & Local Transfer Taxes:</strong> Some states (like New York or Washington) charge massive transfer or &quot;stamp&quot; taxes when property changes hands. Our calculator dynamically estimates these based on the state you select.
                    </li>
                    <li>
                        <strong>Owner&apos;s Title Insurance & Escrow:</strong> In many markets, it is customary for the seller to pay for the new buyer&apos;s Owner&apos;s Title Insurance policy and split the physical escrow/closing fee with the buyer.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Can You Negotiate Closing Costs?
                </h3>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <p className="mb-0 text-navy-900 font-medium">
                        <strong>Yes!</strong> While you cannot negotiate government taxes or the appraisal fee, you absolutely <em>can</em> negotiate lender origination fees, title insurance providers, and realtor commissions. 
                    </p>
                </div>
                <p>
                    <strong>Seller Concessions:</strong> In a buyer&apos;s market, buyers often ask sellers to pay a portion of their closing costs (e.g., &quot;Seller to contribute $5,000 to buyer&apos;s closing costs&quot;). This helps cash-strapped buyers close on the home while allowing the seller to maintain the headline purchase price.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Frequently Asked Questions
                </h3>
                
                <div className="space-y-6 mt-6">
                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">Do closing costs include my down payment?</h4>
                        <p className="text-gray-600">
                            No. Your &quot;Cash to Close&quot; is the sum of your Down Payment + Your Closing Costs. If you buy a $400,000 home with a $80,000 down payment (20%), and your closing costs are $8,000, you must wire $88,000 cash to the title company on closing day. Check our <Link href="/calculators/down-payment" className="text-blue-600 hover:underline">Down Payment Calculator</Link> for savings goals.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">What is a Loan Estimate (LE)?</h4>
                        <p className="text-gray-600">
                            By law, within 3 days of applying for a mortgage, your lender must provide a standardized 3-page document called a Loan Estimate. This completely breaks down exactly what your closing costs will be. Three days before you physically close, they provide a &quot;Closing Disclosure&quot; (CD) with the final, locked-in numbers.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">Are closing costs tax deductible?</h4>
                        <p className="text-gray-600">
                            Mostly no. The majority of closing costs (like appraisals, title insurance, and lender fees) are not tax-deductible. However, the <em>prepaid</em> items like property taxes and prepaid mortgage interest can generally be deducted in the year you pay them. If you paid &quot;Points&quot; to buy down your interest rate, those are also fully deductible.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
