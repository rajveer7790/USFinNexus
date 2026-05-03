import React from 'react';

export default function DtiSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">
                    What is a Good Debt-to-Income (DTI) Ratio?
                </h2>
                <p className="lead text-xl text-gray-600">
                    Your Debt-to-Income (DTI) ratio is the single most important metric a mortgage lender evaluates alongside your credit score. It measures the percentage of your gross monthly income that goes toward paying your recurring monthly debts.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    The Magic Numbers: 36% and 43%
                </h3>
                <p>
                    Lenders generally adhere strictly to the &quot;28/36 Rule&quot;:
                </p>
                <ul>
                    <li><strong>Ideal (≤ 36%):</strong> This is the golden standard. If your <em>total</em> monthly debt (including your new proposed mortgage payment, car loans, and credit cards) is 36% or less of your gross income, lenders view you as extremely low risk.</li>
                    <li><strong>The Cutoff (43%):</strong> Under Consumer Financial Protection Bureau (CFPB) guidelines, 43% is the absolute maximum DTI ratio for what is considered a &quot;Qualified Mortgage&quot; (a loan with the strongest federal protections against predatory lending).</li>
                    <li><strong>Exceptions (Up to 50%):</strong> Some FHA lenders and specific Fannie Mae automated underwriting systems will approve borrowers with DTIs approaching 50%, provided they have massive &quot;compensating factors&quot; (like perfect credit or vast cash reserves). </li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    What Counts as &quot;Debt&quot; in the Formula?
                </h3>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <p className="mb-2 font-bold text-navy-900">Lenders DO Include:</p>
                    <ul className="mb-4">
                        <li>Proposed Mortgage Payment (PITI: Principal, Interest, Taxes, Insurance, HOA)</li>
                        <li>Auto Loan Payments</li>
                        <li>Student Loan Minimums</li>
                        <li>Credit Card <strong>Minimum</strong> Monthly Payments</li>
                        <li>Child Support or Alimony Obligations</li>
                    </ul>
                    <p className="mb-2 font-bold text-navy-900">Lenders do NOT Include:</p>
                    <ul className="mb-0">
                        <li>Groceries and Utilities (Water, Trash, Electric)</li>
                        <li>Health Insurance or Car Insurance</li>
                        <li>Cell Phone Bills or Streaming Subscriptions</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
