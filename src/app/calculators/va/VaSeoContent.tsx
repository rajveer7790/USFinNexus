import Link from 'next/link';

export default function VaSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">How a VA Loan Calculator Works</h2>
                <p className="lead text-xl text-gray-600">
                    VA-backed home loans are available to eligible Veterans, service members and certain surviving spouses. A qualifying purchase can be made without a required down payment from VA, and VA-backed loans do not require monthly private mortgage insurance. The actual loan still depends on entitlement, lender underwriting, property requirements and the borrower&apos;s finances.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">VA Funding Fee</h3>
                <p>
                    Many VA-backed loans include a one-time VA funding fee. The percentage depends on the loan type, down payment and whether the borrower is using the VA home-loan benefit for the first time or after a prior use. VA&apos;s current purchase-loan chart, effective April 7, 2023, lists the following rates for borrowers who are not exempt:
                </p>
                <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border border-gray-200">
                        <thead className="bg-gray-50"><tr><th className="px-3 py-2 text-left">Down payment</th><th className="px-3 py-2 text-left">First use</th><th className="px-3 py-2 text-left">After first use</th></tr></thead>
                        <tbody>
                            <tr className="border-t"><td className="px-3 py-2">Less than 5%</td><td className="px-3 py-2">2.15%</td><td className="px-3 py-2">3.30%</td></tr>
                            <tr className="border-t"><td className="px-3 py-2">5% or more</td><td className="px-3 py-2">1.50%</td><td className="px-3 py-2">1.50%</td></tr>
                            <tr className="border-t"><td className="px-3 py-2">10% or more</td><td className="px-3 py-2">1.25%</td><td className="px-3 py-2">1.25%</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    The funding fee can generally be paid at closing or financed into the loan. Some borrowers are exempt, including certain Veterans receiving or eligible to receive VA compensation for a service-connected disability and other categories identified by VA. Confirm exemption status with the Certificate of Eligibility and lender rather than relying on a checkbox alone.
                </p>
                <p><a href="https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/" target="_blank" rel="noopener noreferrer">VA: funding fee and closing costs</a></p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Down Payment and Loan Limits</h3>
                <p>
                    VA itself does not require a down payment for an eligible borrower with sufficient entitlement, but a lender can still have underwriting requirements and a down payment may be needed in some entitlement or purchase-price situations. Veterans with full entitlement generally are not subject to a VA county loan limit, although the lender still determines how much it will lend based on income, credit, assets and other factors.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">No Monthly VA Mortgage Insurance</h3>
                <p>
                    VA-backed loans do not charge monthly PMI or FHA-style annual MIP. That does not mean the loan has no additional costs: the funding fee, lender charges, discount points, title/settlement charges, taxes, homeowners insurance and other closing costs can still apply.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Eligibility and Occupancy</h3>
                <p>
                    A Certificate of Eligibility helps establish entitlement, but it is not a loan approval. The lender also evaluates the borrower and property. VA purchase loans are intended for a home the borrower will occupy as a primary residence under VA occupancy rules; special circumstances can have different timing or requirements.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">VA vs. Conventional or FHA</h3>
                <p>
                    There is no universally best mortgage. Compare the actual rate, points, funding fee or mortgage insurance, closing costs, required cash, monthly payment and total cost under the period you expect to keep the loan. Use the <Link href="/calculators/mortgage">Mortgage Calculator</Link> and <Link href="/calculators/fha">FHA Mortgage Calculator</Link> for side-by-side scenarios.
                </p>

                <p className="text-sm text-gray-500">
                    Educational estimate only. VA and the lender determine entitlement, funding-fee exemption, underwriting, occupancy and loan terms.
                </p>
            </div>
        </section>
    );
}
