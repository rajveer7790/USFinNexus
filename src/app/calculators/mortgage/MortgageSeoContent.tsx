import Link from 'next/link';

export default function MortgageSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">How a Mortgage Calculator Works</h2>
                <p className="lead text-xl text-gray-600">
                    A mortgage calculator starts with standard amortization math to estimate principal and interest, then adds the housing costs you choose to model. For a realistic monthly budget, include property taxes, homeowners insurance, mortgage insurance when applicable, and HOA dues instead of looking only at principal and interest.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Mortgage Calculator Inputs</h3>
                <ul>
                    <li><strong>Home price:</strong> the purchase price or property value used for the scenario.</li>
                    <li><strong>Down payment:</strong> cash paid toward the purchase. A larger down payment generally reduces the loan amount and loan-to-value ratio.</li>
                    <li><strong>Interest rate:</strong> the annual mortgage rate for your scenario. Use a lender quote or a clearly dated market reference rather than an old default rate.</li>
                    <li><strong>Loan term:</strong> the repayment period, commonly 15 or 30 years for fixed-rate mortgages.</li>
                    <li><strong>Property taxes and insurance:</strong> location- and property-specific costs. A calculator estimate is not a tax bill or insurance quote.</li>
                    <li><strong>Mortgage insurance:</strong> conventional PMI or government-program mortgage insurance can apply depending on loan type, down payment and other conditions.</li>
                    <li><strong>HOA dues:</strong> recurring association charges that can materially affect the monthly housing budget.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">What PITI Means</h3>
                <p>
                    PITI stands for <strong>principal, interest, taxes and insurance</strong>. Principal and interest come from the loan amortization schedule. Property taxes and homeowners insurance are separate ownership costs, and an escrowed mortgage may collect them as part of the monthly payment. PMI, MIP and HOA dues may also need to be added to the household budget.
                </p>
                <p>
                    A payment estimate is not a mortgage approval. Lenders evaluate income, debts, credit, assets, the property, loan-to-value and program-specific rules. Debt-to-income ratio is one part of underwriting, but there is no current universal 43% DTI ceiling for the CFPB&apos;s General Qualified Mortgage category; the CFPB removed the former fixed 43% element and replaced it with price-based thresholds.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 Conforming and FHA Loan Limits</h3>
                <p>
                    For 2026, the Federal Housing Finance Agency set the one-unit baseline conforming loan limit at <strong>$832,750</strong>, with a <strong>$1,249,125</strong> ceiling in high-cost areas. HUD&apos;s 2026 one-unit FHA limits use a <strong>$541,287</strong> low-cost floor and a <strong>$1,249,125</strong> high-cost ceiling. The applicable county limit can differ, so use the official agency lookup for a specific property.
                </p>
                <div className="flex flex-wrap gap-3 not-prose my-5">
                    <a href="https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">FHFA 2026 limits</a>
                    <a href="https://www.hud.gov/hud-partners/single-family-mortgage-limits" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">HUD FHA limits</a>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">PMI and the 80% / 78% Rules</h3>
                <p>
                    Conventional borrower-paid PMI is often associated with mortgages above 80% loan-to-value, but the exact requirement and price depend on the loan. For mortgages covered by the Homeowners Protection Act, borrowers can generally request cancellation when the principal balance is scheduled to reach 80% of the original value if the statutory conditions are satisfied. Automatic termination generally occurs when the scheduled balance reaches 78% and the borrower is current. FHA mortgage insurance and other programs follow different rules.
                </p>
                <p>
                    <a href="https://www.consumerfinance.gov/ask-cfpb/when-can-i-stop-paying-for-private-mortgage-insurance-pmi-en-202/" target="_blank" rel="noopener noreferrer">Read the CFPB&apos;s PMI cancellation explanation.</a>
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">15-Year vs. 30-Year Mortgage</h3>
                <p>
                    A 15-year fixed mortgage typically has a higher required monthly payment but repays principal faster and can reduce lifetime interest. A 30-year term generally lowers the required payment but can produce substantially more interest over the full term. Compare both with the same principal and realistic interest-rate assumptions; do not assume a fixed spread between 15- and 30-year market rates.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Extra Payments</h3>
                <p>
                    Extra principal payments can shorten payoff time and reduce interest, but the savings depend on loan balance, rate, timing and whether the loan has any relevant restrictions. Use the amortization schedule to compare the standard path with an extra-payment scenario instead of relying on a generic savings claim.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Useful Next Calculations</h3>
                <ul>
                    <li><Link href="/calculators/affordability">Home Affordability Calculator</Link> — model a housing budget from income, debts and assumptions.</li>
                    <li><Link href="/calculators/dti">Debt-to-Income Ratio Calculator</Link> — calculate the ratio without treating it as an approval guarantee.</li>
                    <li><Link href="/calculators/amortization">Mortgage Amortization Calculator</Link> — see principal and interest by payment.</li>
                    <li><Link href="/calculators/refinance">Mortgage Refinance Calculator</Link> — compare payment savings, costs and break-even.</li>
                    <li><Link href="/calculators/points-buydown">Mortgage Points Calculator</Link> — compare upfront points with payment savings.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Methodology</h3>
                <p>
                    USFinNexus uses standard monthly amortization math and treats taxes, insurance, mortgage insurance and HOA dues as separate inputs or estimates. See our <Link href="/methodology">Calculation Methodology &amp; Data Sources</Link> page for formulas, primary sources and limitations.
                </p>
            </div>
        </section>
    );
}
