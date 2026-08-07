import Link from 'next/link';

export default function CaliforniaSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">California Mortgage and Property-Tax Planning</h2>
                <p className="lead text-xl text-gray-600">
                    A California housing budget can include mortgage principal and interest, property taxes, homeowners insurance, mortgage insurance when applicable, HOA dues and special assessments. Property-tax estimates require care because Proposition 13 limits assessed-value growth but does not make every California property-tax bill exactly 1% of purchase price.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">How Proposition 13 Works</h3>
                <p>
                    California&apos;s Proposition 13 generally limits the ad valorem property-tax levy to <strong>1% of assessed value</strong>, plus amounts needed to pay voter-approved indebtedness and other charges that can appear on the tax bill. When a property changes ownership, it is generally reassessed to its current market value unless an exclusion applies.
                </p>
                <p>
                    After the base-year value is established, annual inflation adjustments to assessed value are generally limited to the lower of <strong>2%</strong> or the applicable inflation factor, subject to reassessment rules for new construction and other events. That is an assessed-value rule, not a promise that the total tax bill can rise by only 2%, because local debt and assessments can change.
                </p>
                <p><a href="https://www.boe.ca.gov/proptaxes/prop13.htm" target="_blank" rel="noopener noreferrer">California State Board of Equalization: Proposition 13</a></p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Do Not Use the Seller&apos;s Tax Bill as Your Estimate</h3>
                <p>
                    A long-time owner may have a much lower assessed value than a new purchaser. A purchase can establish a new base-year value near current market value, so the seller&apos;s existing tax bill can materially understate the buyer&apos;s future bill. For a property-specific estimate, review the county assessor and tax collector records and ask about supplemental assessments, exemptions and special districts.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Mello-Roos and Other Special Assessments</h3>
                <p>
                    Some California properties are located in Community Facilities Districts commonly associated with Mello-Roos special taxes. These charges can fund public facilities and services and are separate from the basic 1% ad valorem levy. Amounts and duration vary by district, so verify the parcel-specific tax bill and disclosures rather than assuming a statewide amount.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 Conforming Loan Limits</h3>
                <p>
                    FHFA set the 2026 one-unit baseline conforming loan limit at <strong>$832,750</strong>, with a high-cost-area ceiling of <strong>$1,249,125</strong>. Not every California county uses the ceiling. Check the FHFA county limit for the property before labeling a loan conforming or jumbo.
                </p>
                <p><a href="https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026" target="_blank" rel="noopener noreferrer">FHFA: 2026 conforming loan limits</a></p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Jumbo Mortgage Underwriting Varies</h3>
                <p>
                    A loan above the applicable conforming limit is generally considered jumbo for conventional secondary-market purposes. Jumbo products are lender-specific; credit, down-payment, reserve and debt-to-income requirements are not one universal set of numbers. Compare actual lender guidelines and quotes for the loan amount you need.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Homeowners and Earthquake Insurance</h3>
                <p>
                    Standard homeowners policies generally exclude earthquake damage, and earthquake coverage is a separate decision. Availability, deductible structure and premiums depend on the property and insurer. Use property-specific insurance quotes rather than a statewide monthly estimate in a mortgage budget.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Related Calculators</h3>
                <ul>
                    <li><Link href="/calculators/mortgage">Mortgage Calculator</Link></li>
                    <li><Link href="/calculators/affordability">Home Affordability Calculator</Link></li>
                    <li><Link href="/calculators/closing-costs">Closing Cost Calculator</Link></li>
                </ul>

                <p className="text-sm text-gray-500">Educational estimate only. County assessor, tax collector, lender, insurer and transaction documents determine the actual California costs for a specific property.</p>
            </div>
        </section>
    );
}
