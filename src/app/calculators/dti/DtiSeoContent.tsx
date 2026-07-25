import React from 'react';
import Link from 'next/link';

export default function DtiSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">
                    What is a Good Debt-to-Income (DTI) Ratio?
                </h2>
                <p className="lead text-xl text-gray-600">
                    A good DTI ratio for a mortgage is 36% or below. Most lenders approve loans up to 43% back-end DTI—the CFPB&apos;s qualified mortgage ceiling. Your front-end DTI (housing costs only) should stay at or below 28%. Enter your income and monthly debts above to see exactly where you stand.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    What DTI Ratio Do Mortgage Lenders Require?
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

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    What Is the Difference Between Front-End and Back-End DTI?
                </h3>
                <p>
                    Lenders actually calculate two distinct DTI numbers when you apply for a mortgage:
                </p>
                <ul>
                    <li>
                        <strong>Front-End DTI (The Housing Ratio):</strong> This is the percentage of your income dedicated solely to your new housing payment (PITI: Principal, Interest, Taxes, and Insurance). Most conventional lenders want this below 28%.
                    </li>
                    <li>
                        <strong>Back-End DTI (The Total Debt Ratio):</strong> This is the percentage of your income dedicated to your housing payment <em>plus</em> all other recurring monthly debts (car loans, student loans, credit cards). This is the number that typically cannot exceed 43%.
                    </li>
                </ul>
                <p className="mt-6 mb-8">
                    To learn more about how these ratios impact your mortgage approval chances in 2026, read our comprehensive guide on <Link href="/blog/front-end-vs-back-end-dti-2026" className="text-blue-600 hover:underline font-bold">Front-End vs Back-End DTI (CFPB Guidelines)</Link>.
                </p>
            </div>
        </section>
    );
}
