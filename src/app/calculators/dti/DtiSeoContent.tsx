import Link from 'next/link';

export default function DtiSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">What Is a Debt-to-Income Ratio?</h2>
                <p className="lead text-xl text-gray-600">
                    Debt-to-income ratio (DTI) is the percentage of gross monthly income used for the monthly debt obligations included in the calculation. Mortgage lenders use DTI as one part of underwriting, but an online DTI result does not determine whether a loan will be approved.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">DTI Formula</h3>
                <p><strong>DTI = monthly debt payments ÷ gross monthly income × 100.</strong></p>
                <p>
                    Example: $1,800 of recurring monthly debt divided by $6,000 of gross monthly income produces a 30% DTI.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Is 43% the Current General QM Maximum?</h3>
                <p>
                    No. The CFPB&apos;s earlier General Qualified Mortgage framework contained a 43% DTI limit, but the Bureau removed that fixed limit from the General QM definition and replaced it with price-based thresholds. Lenders and specific loan programs can still evaluate DTI and may have their own requirements.
                </p>
                <p>
                    <a href="https://www.consumerfinance.gov/rules-policy/final-rules/qualified-mortgage-definition-under-truth-lending-act-regulation-z-general-qm-loan-definition/" target="_blank" rel="noopener noreferrer">CFPB: General QM Loan Definition</a>
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Front-End vs. Back-End DTI</h3>
                <ul>
                    <li><strong>Front-end or housing ratio:</strong> generally compares monthly housing obligations with gross monthly income.</li>
                    <li><strong>Back-end or total-debt ratio:</strong> generally includes housing plus other recurring monthly debts evaluated by the lender.</li>
                </ul>
                <p>
                    The exact obligations and payment amounts used can vary by mortgage product and underwriting guide. For example, student-loan treatment can differ by program and repayment status.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">How to Use DTI as a Planning Metric</h3>
                <p>
                    Instead of assuming one ratio guarantees approval, use DTI to compare scenarios. You can see how paying off a monthly obligation, changing a proposed housing payment or increasing documented income changes the ratio. Then compare your scenario with the requirements of the actual lender and loan program you plan to use.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">What Can Change a Mortgage DTI?</h3>
                <ul>
                    <li>Recurring credit-card, auto, student-loan and personal-loan obligations.</li>
                    <li>The proposed mortgage payment and other housing expenses used by the underwriter.</li>
                    <li>Verified gross income and the lender&apos;s rules for counting variable or self-employment income.</li>
                    <li>Program-specific treatment of deferred, contingent or nontraditional obligations.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Related Calculators</h3>
                <ul>
                    <li><Link href="/calculators/affordability">Home Affordability Calculator</Link></li>
                    <li><Link href="/calculators/mortgage">Mortgage Calculator</Link></li>
                    <li><Link href="/calculators/debt-payoff">Debt Payoff Calculator</Link></li>
                </ul>

                <p className="text-sm text-gray-500">
                    Educational estimate only. For a mortgage application, use the definitions and documentation requirements of the applicable lender and loan program.
                </p>
            </div>
        </section>
    );
}
