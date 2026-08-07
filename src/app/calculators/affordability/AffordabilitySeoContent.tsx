import React from 'react';
import Link from 'next/link';

export default function AffordabilitySeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">How Much House Can I Afford?</h2>
                <p className="lead text-xl text-gray-600">
                    Home affordability depends on more than salary. A useful estimate should include your gross income, recurring monthly debts, down payment, mortgage rate, loan term, property taxes, homeowners insurance, HOA dues, mortgage insurance, and the amount of monthly cash flow you want to keep after housing costs.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">How Debt-to-Income Ratios Fit Into Affordability</h3>
                <p>
                    Debt-to-income ratio (DTI) compares recurring monthly debt obligations with gross monthly income. Mortgage lenders use DTI as one part of underwriting, but there is no single DTI percentage that guarantees approval or denial across every loan program and borrower.
                </p>
                <ul>
                    <li><strong>Front-end or housing ratio:</strong> compares the proposed monthly housing cost with gross monthly income.</li>
                    <li><strong>Back-end or total DTI:</strong> compares housing plus other recurring monthly debt obligations with gross monthly income.</li>
                </ul>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <p className="mb-0 text-navy-900 font-medium">
                        <strong>Important:</strong> the current CFPB General Qualified Mortgage definition does not impose a universal 43% DTI cap. USFinNexus may show 28%, 36%, or 43% as planning scenarios or traditional rules of thumb, but those values are not universal CFPB approval thresholds.
                    </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Why the Calculator Shows More Than One Scenario</h3>
                <p>
                    A lender&apos;s maximum approval amount and a household&apos;s comfortable budget are not necessarily the same. A lower housing ratio can leave more room for retirement savings, childcare, maintenance, utilities, healthcare, travel, and unexpected costs. A higher DTI scenario can illustrate an upper planning boundary, but it should not be read as a recommendation.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Factors That Can Change Your Affordable Home Price</h3>
                <ul>
                    <li><strong>Mortgage rate:</strong> a higher rate increases the payment for the same loan amount and generally reduces purchasing power.</li>
                    <li><strong>Down payment:</strong> a larger down payment reduces the amount financed and can affect mortgage-insurance requirements and loan pricing.</li>
                    <li><strong>Property taxes and insurance:</strong> these costs vary substantially by location, property, insurer, coverage, and assessment rules.</li>
                    <li><strong>HOA dues:</strong> recurring association dues can materially reduce the amount of mortgage payment that fits within the same budget.</li>
                    <li><strong>Existing debt:</strong> auto, student, personal-loan, credit-card, and other qualifying monthly obligations can reduce available room for housing.</li>
                    <li><strong>Loan program and underwriting:</strong> conventional, FHA, VA, USDA, jumbo, and lender-specific programs can treat risk and DTI differently.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 Federal Loan-Limit Context</h3>
                <p>
                    For 2026, the FHFA one-unit baseline conforming loan limit is <strong>$832,750</strong>, with a one-unit high-cost-area ceiling of <strong>$1,249,125</strong>. HUD&apos;s 2026 one-unit FHA floor is <strong>$541,287</strong> and the high-cost ceiling is <strong>$1,249,125</strong>. County-specific limits can differ, so always verify the property&apos;s applicable limit before relying on a loan-category estimate.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Affordability Is Not the Same as Loan Approval</h3>
                <p>
                    This calculator is a planning tool. Actual approval can depend on credit history, verified income and assets, employment, property type, appraisal, reserves, loan-to-value ratio, mortgage insurance, automated underwriting, lender overlays, and program-specific rules. A pre-approval or underwriting decision from a lender is different from a calculator estimate.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Useful Next Steps</h3>
                <ol>
                    <li>Use the <Link href="/calculators/mortgage" className="text-blue-600 hover:underline">Mortgage Calculator</Link> to estimate the full monthly payment for a specific home price.</li>
                    <li>Use the <Link href="/calculators/dti" className="text-blue-600 hover:underline">Debt-to-Income Ratio Calculator</Link> to understand how recurring debts affect the ratio.</li>
                    <li>Use the <Link href="/calculators/down-payment" className="text-blue-600 hover:underline">Down Payment Calculator</Link> to test savings targets.</li>
                    <li>Use the <Link href="/calculators/closing-costs" className="text-blue-600 hover:underline">Closing Cost Calculator</Link> to budget for costs beyond the down payment.</li>
                    <li>Verify loan limits and underwriting requirements with the applicable agency, lender, and current program documentation.</li>
                </ol>

                <div className="mt-10 p-5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700">
                    <strong>Methodology note:</strong> affordability results are estimates based on the inputs and planning ratios shown by the calculator. They are not a credit decision, pre-qualification, pre-approval, or Qualified Mortgage determination.
                </div>
            </div>
        </section>
    );
}
