import React from 'react';
import Link from 'next/link';

export default function DtiSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">How to Understand Your Debt-to-Income Ratio</h2>
                <p className="lead text-xl text-gray-600">
                    Debt-to-income ratio (DTI) compares recurring monthly debt obligations with gross monthly income. Lower ratios generally leave more room in a household budget, but mortgage eligibility cannot be reduced to one universal percentage.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Is 43% the Qualified Mortgage DTI Limit?</h3>
                <p>
                    No. The CFPB removed the old 43% debt-to-income limit from the General Qualified Mortgage definition and replaced that framework with price-based thresholds. You may still see 43% used as a planning benchmark or in particular underwriting contexts, but it should not be described as the universal current General QM maximum.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Front-End vs. Back-End DTI</h3>
                <ul>
                    <li><strong>Front-end DTI:</strong> compares proposed housing expenses with gross monthly income.</li>
                    <li><strong>Back-end DTI:</strong> compares housing plus other recurring monthly debt obligations with gross monthly income.</li>
                </ul>
                <p>
                    Traditional 28% housing and 36% total-debt ratios can be useful budgeting references. They are not universal legal limits or guarantees of mortgage approval.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">What Debts Can Affect Mortgage DTI?</h3>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <p className="mb-2 font-bold text-navy-900">Common recurring obligations can include:</p>
                    <ul className="mb-0">
                        <li>The proposed housing payment used by the loan program</li>
                        <li>Auto and personal-loan payments</li>
                        <li>Student-loan obligations</li>
                        <li>Credit-card minimum payments</li>
                        <li>Certain alimony, child-support, or other recurring obligations</li>
                    </ul>
                </div>
                <p>
                    The exact payment used for a debt can differ by mortgage program and documentation. Student loans are a common example: the qualifying payment may depend on repayment status and the applicable FHA, VA, USDA, Fannie Mae, Freddie Mac, or lender rules.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Use DTI as One Part of the Affordability Picture</h3>
                <p>
                    DTI does not capture every household expense. Utilities, maintenance, childcare, health costs, retirement savings and emergency reserves can materially affect what feels affordable even when they are not all included in a mortgage DTI calculation.
                </p>
                <p className="mt-6 mb-8">
                    After calculating DTI, use the <Link href="/calculators/affordability" className="text-blue-600 hover:underline font-bold">Home Affordability Calculator</Link> and <Link href="/calculators/mortgage" className="text-blue-600 hover:underline font-bold">Mortgage Calculator</Link> to test a complete housing-cost scenario.
                </p>

                <div className="mt-8 p-5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700">
                    <strong>Important:</strong> This is an educational ratio calculator, not a loan approval, pre-qualification, Qualified Mortgage determination, or lender underwriting system.
                </div>
            </div>
        </section>
    );
}
