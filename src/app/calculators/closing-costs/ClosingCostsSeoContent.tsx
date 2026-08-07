import Link from 'next/link';

export default function ClosingCostsSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">What Are Closing Costs?</h2>
                <p className="lead text-xl text-gray-600">
                    Closing costs are the lender, settlement, title, government, prepaid and other transaction charges associated with completing a home purchase or sale. The exact amount is transaction-specific, so a national percentage or automatic state lookup should be treated as a rough shortcut rather than a final estimate.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Buyer Closing-Cost Categories</h3>
                <ul>
                    <li><strong>Lender charges:</strong> origination, underwriting, discount points and other lender fees shown in the mortgage disclosures.</li>
                    <li><strong>Services:</strong> appraisal, credit-related services, title search, lender&apos;s title policy, settlement or escrow services and other required providers.</li>
                    <li><strong>Government charges:</strong> recording, transfer, stamp or similar charges applicable to the property and transaction.</li>
                    <li><strong>Prepaids:</strong> prepaid interest, homeowners insurance and other amounts due before or at closing.</li>
                    <li><strong>Initial escrow funding:</strong> amounts collected for future property-tax and insurance payments when an escrow account is established.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Seller Closing-Cost Categories</h3>
                <p>
                    Seller costs can include transfer charges, settlement or attorney fees, lien or payoff-related items, contract credits and any broker compensation the seller has agreed to pay. Since the 2024 real-estate commission practice changes, broker compensation should not be hard-coded as a universal percentage; it is negotiable and transaction-specific.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Use the Loan Estimate and Closing Disclosure</h3>
                <p>
                    For covered mortgage transactions, the CFPB&apos;s Loan Estimate is a standardized three-page form showing the expected loan terms and estimated costs. A lender generally must provide it within three business days after receiving the information that constitutes an application. The Closing Disclosure is a five-page form with final loan terms and closing costs, and the borrower must receive it at least three business days before closing.
                </p>
                <p>
                    Compare the final Closing Disclosure with the most recent Loan Estimate and ask the lender or settlement professional about unexpected changes before signing.
                </p>
                <p>
                    <a href="https://www.consumerfinance.gov/owning-a-home/compare/review-loan-estimates/" target="_blank" rel="noopener noreferrer">CFPB: Review Loan Estimates</a>{' · '}
                    <a href="https://www.consumerfinance.gov/owning-a-home/close/review-documents-before-closing/" target="_blank" rel="noopener noreferrer">CFPB: Review Documents Before Closing</a>
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Why Transfer Taxes Are Entered Manually</h3>
                <p>
                    Real-estate transfer and recording charges are not reliably represented by one percentage per state. State law can be only one layer; counties and municipalities can impose additional charges, and exemptions, property type, consideration, mortgage amount and contract allocation can affect the result. Enter the amount from the applicable local government source, title company, attorney or settlement provider.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Closing Costs and Federal Taxes</h3>
                <p>
                    IRS Publication 530 explains that closing costs can receive different tax treatment. Certain home mortgage interest and real estate taxes may be deductible when the applicable requirements are met. Some settlement costs can be included in the property&apos;s basis, while other mortgage-related fees are neither currently deductible nor added to basis. Do not assume that every prepaid amount or every point is automatically deductible.
                </p>
                <p><a href="https://www.irs.gov/publications/p530" target="_blank" rel="noopener noreferrer">IRS Publication 530: Tax Information for Homeowners</a></p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Cash to Close vs. Closing Costs</h3>
                <p>
                    Closing costs and cash to close are not the same number. Cash to close can include the down payment plus closing costs, then reflect earnest-money deposits, lender or seller credits, prorations, financed charges and other transaction-specific adjustments. The final Closing Disclosure is the authoritative transaction document for a covered mortgage closing.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Related Tools</h3>
                <ul>
                    <li><Link href="/calculators/down-payment">Down Payment Calculator</Link></li>
                    <li><Link href="/calculators/mortgage">Mortgage Calculator</Link></li>
                    <li><Link href="/calculators/affordability">Home Affordability Calculator</Link></li>
                </ul>

                <p className="text-sm text-gray-500">
                    Educational estimate only. Use your lender, title/settlement provider, attorney where applicable, contract and government fee schedules for the actual transaction.
                </p>
            </div>
        </section>
    );
}
