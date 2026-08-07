import Link from 'next/link';

export default function MortgageSeoContentV2() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2>Mortgage Calculator: Monthly Payment, PITI and Amortization</h2>
                <p>
                    Use the mortgage calculator to estimate a monthly home payment from the loan amount, interest rate and term, then add property taxes, homeowners insurance, PMI and HOA fees when they apply. The principal-and-interest portion uses standard fixed-rate amortization math; taxes, insurance, PMI and HOA are estimates based on the values you enter.
                </p>

                <h3>What is included in a mortgage payment?</h3>
                <p><strong>PITI</strong> means principal, interest, taxes and insurance. Many borrowers also need to budget for private mortgage insurance, HOA dues, maintenance and utilities. Escrow practices vary by loan and lender, so the calculator is a planning estimate rather than a lender quote.</p>

                <h3>2026 conforming and FHA loan limits</h3>
                <p>
                    For 2026, the FHFA baseline conforming loan limit for a one-unit property in most of the United States is <strong>$832,750</strong>. The one-unit high-cost ceiling can reach <strong>$1,249,125</strong>, with the actual limit determined by location. HUD&apos;s 2026 FHA one-unit national floor is <strong>$541,287</strong> and the standard high-cost ceiling is <strong>$1,249,125</strong>. Always check the applicable county limit for a real transaction.
                </p>

                <h3>Debt-to-income ratio: use it as a planning measure</h3>
                <p>
                    Debt-to-income ratio (DTI) compares recurring monthly debt with gross monthly income. Lenders and loan programs can use different underwriting thresholds. The current CFPB General Qualified Mortgage definition does <strong>not</strong> impose a universal 43% DTI cap; the former fixed 43% General QM limit was replaced with price-based thresholds. Treat common DTI percentages shown in planning tools as scenarios, not guaranteed approval standards.
                </p>
                <p>For a focused estimate, use the <Link href="/calculators/dti">Debt-to-Income Ratio Calculator</Link> or the <Link href="/calculators/affordability">Home Affordability Calculator</Link>.</p>

                <h3>PMI and cancellation</h3>
                <p>
                    Conventional private mortgage insurance may apply when the borrower has a smaller down payment. Under the federal Homeowners Protection Act, eligible borrowers can generally request cancellation when the principal balance is scheduled to reach 80% of the original value, subject to statutory conditions, and automatic termination generally occurs at 78% for covered loans when the borrower is current. FHA mortgage insurance follows different rules and should not be treated as conventional PMI.
                </p>

                <h3>How to compare mortgage options</h3>
                <ul>
                    <li><strong>30-year vs. 15-year:</strong> a longer term usually lowers the required monthly principal-and-interest payment but increases total interest if rate and loan amount are otherwise equal.</li>
                    <li><strong>Extra payments:</strong> additional principal can reduce total interest and shorten payoff time; verify your servicer&apos;s payment application rules.</li>
                    <li><strong>Discount points:</strong> compare the upfront cost with monthly savings and how long you expect to keep the loan.</li>
                    <li><strong>Refinancing:</strong> include closing costs and calculate a break-even period instead of comparing rates alone.</li>
                </ul>

                <h3>Related mortgage calculators</h3>
                <p>
                    Continue with the <Link href="/calculators/refinance">Mortgage Refinance Calculator</Link>, <Link href="/calculators/amortization">Mortgage Amortization Calculator</Link>, <Link href="/calculators/closing-costs">Closing Cost Calculator</Link>, <Link href="/calculators/down-payment">Down Payment Calculator</Link> or <Link href="/calculators/fha-va-usda">FHA, VA &amp; USDA Loan Calculator</Link>.
                </p>

                <h3>Sources and limitations</h3>
                <p>
                    Year-specific limits are based on 2026 FHFA and HUD publications. Mortgage consumer and ability-to-repay guidance is cross-checked against the Consumer Financial Protection Bureau. Figures are estimates for education and planning, not a Loan Estimate, approval decision or financial advice. Reviewed August 7, 2026.
                </p>
            </div>
        </section>
    );
}
