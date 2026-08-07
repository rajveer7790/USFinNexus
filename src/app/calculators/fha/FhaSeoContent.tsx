import Link from 'next/link';

export default function FhaSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-green">
                <h2 className="text-3xl font-black text-navy-900 mb-6">How an FHA Mortgage Calculator Works</h2>
                <p className="lead text-xl text-gray-600">
                    FHA-insured mortgages can allow a smaller minimum down payment than many conventional scenarios, but the payment can also include upfront and annual mortgage insurance. Use this calculator as a planning estimate and confirm eligibility, mortgage-insurance treatment and county loan limits with an FHA-approved lender and current HUD guidance.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">FHA Down Payment and Credit Context</h3>
                <p>
                    HUD&apos;s FHA program rules permit a minimum 3.5% down payment for borrowers meeting the applicable minimum decision credit-score requirement, while borrowers in a lower score band can be subject to a 10% minimum investment. That does not mean every borrower meeting a score threshold will be approved: lenders can apply underwriting requirements and overlays, and the complete borrower and property file must qualify.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 FHA Loan Limits</h3>
                <p>
                    For 2026, HUD&apos;s one-unit FHA mortgage-limit floor is <strong>$541,287</strong> and the high-cost ceiling is <strong>$1,249,125</strong>. The actual limit depends on the property location and unit count, so use HUD&apos;s official lookup for a specific county rather than assuming the national ceiling applies everywhere.
                </p>
                <p>
                    <a href="https://www.hud.gov/hud-partners/single-family-mortgage-limits" target="_blank" rel="noopener noreferrer">HUD: FHA mortgage limits</a>
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">FHA Mortgage Insurance</h3>
                <p>
                    FHA mortgage insurance is called MIP, not conventional PMI. FHA loans can include an upfront mortgage insurance premium (UFMIP) and an annual MIP that is collected in monthly installments. The applicable annual rate depends on factors including loan term, loan amount and loan-to-value ratio; the exact premium should be confirmed against the current FHA Single Family Housing Policy Handbook and the loan documents.
                </p>
                <p>
                    The commonly used upfront MIP rate for standard forward FHA mortgages is <strong>1.75% of the base loan amount</strong>. Annual MIP treatment is more nuanced than one universal percentage, especially when comparing 15-year and longer-term loans.
                </p>
                <p>
                    <a href="https://www.hud.gov/hud-partners/housing-upfront-late-charges" target="_blank" rel="noopener noreferrer">HUD: upfront MIP information</a>{' · '}
                    <a href="https://www.hud.gov/hud-partners/housing-premium-calculation" target="_blank" rel="noopener noreferrer">HUD: monthly MIP calculation</a>
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">How Long FHA MIP Can Last</h3>
                <p>
                    For many modern FHA mortgages, annual MIP duration depends on the original loan-to-value ratio and term. A common 30-year purchase scenario with less than 10% down can carry annual MIP for the mortgage term, while an original LTV of 90% or less can have an 11-year duration. Older FHA loans can follow different rules, so do not apply this rule to every FHA mortgage ever originated.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">FHA vs. Conventional Mortgage</h3>
                <p>
                    The better option depends on the borrower and the available quotes. Compare the interest rate, upfront fees, monthly mortgage insurance, down payment, credit-based pricing, total cash needed and expected holding period. Conventional borrower-paid PMI may be cancellable under federal law when statutory conditions are met; FHA MIP follows separate HUD rules.
                </p>
                <p>
                    Use the <Link href="/calculators/mortgage">Mortgage Calculator</Link> for a conventional scenario and the <Link href="/calculators/refinance">Mortgage Refinance Calculator</Link> if you are comparing a future refinance.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">DTI Is Not One Universal FHA Approval Number</h3>
                <p>
                    FHA underwriting considers debt-to-income ratios, but approval is not determined by one website threshold. Automated underwriting findings, compensating factors, lender requirements, credit history, reserves and other details can affect the result. Use the <Link href="/calculators/dti">Debt-to-Income Ratio Calculator</Link> as a planning tool rather than an approval test.
                </p>

                <p className="text-sm text-gray-500">
                    Educational estimate only. HUD and the FHA-approved lender determine the applicable program rules, loan limits, mortgage-insurance treatment and underwriting outcome.
                </p>
            </div>
        </section>
    );
}
