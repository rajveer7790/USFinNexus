import Link from 'next/link';

export default function AffordabilitySeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">How Much House Can I Afford?</h2>
                <p className="lead text-xl text-gray-600">
                    Home affordability is not one universal salary multiple or one regulatory DTI cutoff. A useful estimate starts with the monthly housing cost you are comfortable carrying, then models principal and interest together with property taxes, homeowners insurance, HOA dues and mortgage insurance when applicable.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">How the Calculator Uses DTI</h3>
                <p>
                    Debt-to-income ratio (DTI) compares recurring monthly debt obligations with gross monthly income. USFinNexus lets you choose a <strong>planning DTI target</strong> and uses that percentage to create a scenario. The result is not a lender prequalification.
                </p>
                <p>
                    The former 43% DTI limit in the CFPB&apos;s General Qualified Mortgage definition was removed and replaced with price-based thresholds. Lenders and loan programs can still evaluate DTI, but the acceptable ratio can vary with the program, automated underwriting findings, credit profile and other factors.
                </p>
                <p>
                    <a href="https://www.consumerfinance.gov/rules-policy/final-rules/qualified-mortgage-definition-under-truth-lending-act-regulation-z-general-qm-loan-definition/" target="_blank" rel="noopener noreferrer">Read the CFPB General QM rule explanation.</a>
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Costs That Should Be Included</h3>
                <ul>
                    <li><strong>Principal and interest:</strong> calculated from loan amount, interest rate and loan term.</li>
                    <li><strong>Property taxes:</strong> use a property- or locality-specific estimate when possible.</li>
                    <li><strong>Homeowners insurance:</strong> use an actual quote when you have one rather than a national average.</li>
                    <li><strong>HOA dues:</strong> include recurring association charges for the property.</li>
                    <li><strong>Mortgage insurance:</strong> add an estimate if the scenario is likely to require PMI, FHA MIP or another program fee.</li>
                    <li><strong>Other monthly debts:</strong> include recurring obligations that affect total DTI planning.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Why Interest Rate Changes Affordability</h3>
                <p>
                    When the interest rate rises, more of a fixed monthly housing budget is consumed by interest, so the loan amount supported by that budget falls. When the rate falls, the same payment can support a larger principal balance. Because mortgage rates move over time and borrower pricing varies, use the rate you actually expect to receive instead of relying on an undated “current rate.”
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Why Property Taxes and Insurance Matter</h3>
                <p>
                    Two buyers with identical income and mortgage terms can have very different affordable home prices if one property has higher taxes, insurance or HOA dues. That is why this calculator solves the home price using the housing-cost assumptions you enter rather than estimating only principal and interest.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 Loan-Limit Context</h3>
                <p>
                    FHFA set the 2026 one-unit baseline conforming loan limit at <strong>$832,750</strong>, with a high-cost-area ceiling of <strong>$1,249,125</strong>. HUD&apos;s 2026 one-unit FHA floor is <strong>$541,287</strong>, with a high-cost ceiling of <strong>$1,249,125</strong>. These are loan limits, not affordability targets, and county-specific rules can matter.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">How to Improve the Estimate</h3>
                <ol>
                    <li>Use a lender-quoted or realistically expected interest rate.</li>
                    <li>Enter the property&apos;s actual tax rate or a local estimate.</li>
                    <li>Request a homeowners-insurance quote.</li>
                    <li>Add HOA dues and a mortgage-insurance estimate if applicable.</li>
                    <li>Include all recurring debts you expect an underwriter to evaluate.</li>
                    <li>Try more than one DTI target to see how a more conservative budget changes the result.</li>
                </ol>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Next Steps</h3>
                <ul>
                    <li><Link href="/calculators/mortgage">Mortgage Calculator</Link> — model the payment for a specific home price.</li>
                    <li><Link href="/calculators/dti">Debt-to-Income Ratio Calculator</Link> — calculate your current ratio separately.</li>
                    <li><Link href="/calculators/down-payment">Down Payment Calculator</Link> — plan a target down payment.</li>
                    <li><Link href="/calculators/closing-costs">Closing Cost Calculator</Link> — estimate cash needed beyond the down payment.</li>
                </ul>

                <p className="text-sm text-gray-500">
                    This calculator is for planning and education only. Actual approval, rate, loan amount and cash-to-close are determined by the lender and applicable loan program.
                </p>
            </div>
        </section>
    );
}
