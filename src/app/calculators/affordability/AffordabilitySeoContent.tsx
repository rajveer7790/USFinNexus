import React from 'react';
import Link from 'next/link';

export default function AffordabilitySeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-16 mt-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">
                    How Much House Can I Afford? (2026 Guidelines)
                </h2>
                <p className="lead text-xl text-gray-600">
                    A lender telling you what you qualify for is incredibly different from what you can comfortably afford. Our 2026 Home Affordability Calculator uses strict Consumer Financial Protection Bureau (CFPB) guidelines to determine your maximum budget without making you &quot;house poor.&quot;
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    The 28/36 Rule Explained
                </h3>
                <p>
                    This calculator is built on the industry-standard &quot;28/36 Rule,&quot; the benchmark most mortgage lenders use to determine your risk profile:
                </p>
                <ul>
                    <li>
                        <strong>Front-End DTI (The 28% Rule):</strong> Your total monthly housing expenses (principal, interest, property taxes, homeowners insurance, HOA fees, and PMI) should not exceed 28% of your gross monthly income (before taxes).
                    </li>
                    <li>
                        <strong>Back-End DTI (The 36% to 43% Rule):</strong> Your housing expenses <em>plus</em> all your other monthly debt payments (car loans, student loans, credit card minimums, alimony) should not exceed 36% of your gross income. The CFPB states that 43% is generally the highest back-end DTI you can have to get a &quot;Qualified Mortgage.&quot;
                    </li>
                </ul>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <p className="mb-0 text-navy-900 font-medium">
                        <strong>The &quot;Aggressive&quot; vs &quot;Conservative&quot; Budget:</strong> If you use the maximum 43% back-end DTI, you are on the aggressive edge of affordability. It means essentially half of your income before taxes goes instantly to debt and housing. The Conservative budget shown in the calculator sticks closer to the 28% front-end threshold, leaving room for groceries, savings, vacations, and emergencies.
                    </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Factors That Impact Your Affordability
                </h3>
                <p>
                    Changing even one variable can drastically alter your maximum home price:
                </p>
                <ul>
                    <li><strong>Interest Rates:</strong> As rates rise, the loan amount you can afford drops sharply, even if your income stays exactly the same.</li>
                    <li><strong>Monthly Debts:</strong> Paying off a $400/month car loan will instantly increase your home-buying power by tens of thousands of dollars.</li>
                    <li><strong>Property Taxes:</strong> Buying a home in New Jersey (high taxes) versus Hawaii (low taxes) completely changes how much of your monthly budget goes to the actual loan principal.</li>
                    <li><strong>Down Payment:</strong> A larger down payment means a smaller loan, but it also lowers or entirely removes PMI (Private Mortgage Insurance), freeing up more of your monthly budget for the actual house.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Lender Limits (FHA, Conforming, Jumbo)
                </h3>
                <p>
                    Depending on the size of the loan you qualify for, you will fall into different mortgage categories in 2026:
                </p>
                <ul>
                    <li><strong>FHA Eligible:</strong> Best for lower credit scores and smaller budgets. The 2026 FHA floor is $541,287 in most areas.</li>
                    <li><strong>Conforming Conventional:</strong> The standard loan for good credit borrowers, backed by Fannie Mae and Freddie Mac. The 2026 baseline limit is $832,750.</li>
                    <li><strong>Jumbo Loan:</strong> If your calculated affordability pushes your loan amount beyond the conforming limits (or up to $1,249,125 in high-cost areas), you enter Jumbo territory. Jumbo loans require excellent credit, significant cash reserves, and strict appraisals.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Frequently Asked Questions
                </h3>
                
                <div className="space-y-6 mt-6">
                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">Should I buy at my maximum budget?</h4>
                        <p className="text-gray-600">
                            Financial advisors almost universally recommend against it. Lenders do not factor in groceries, daycare, retirement savings, or healthcare into DTI. Buying at the very top of your approval limit often leaves you &quot;house poor.&quot; It is best practice to buy well below your max threshold.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">How can I afford more house?</h4>
                        <p className="text-gray-600">
                            The three fastest ways to increase your home purchasing power are: 1) Eliminate monthly debts (like auto loans or credit cards), 2) Save a larger down payment, and 3) Improve your credit score so you qualify for a lower interest rate.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">How does a 15-year term affect affordability?</h4>
                        <p className="text-gray-600">
                            A 15-year mortgage will drastically reduce the maximum home price you can afford because the monthly payments are much higher. However, you will save hundreds of thousands of dollars in interest over the life of the loan. Try running your numbers with our <Link href="/calculators/mortgage" className="text-blue-600 hover:underline">Mortgage Payment Calculator</Link> to see the difference side-by-side.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
