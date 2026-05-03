import React from 'react';
import Link from 'next/link';

export default function DownPaymentSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">
                    Do You Really Need 20% Down in 2026?
                </h2>
                <p className="lead text-xl text-gray-600">
                    The biggest myth in real estate is that you must have a 20% down payment to buy a house. In 2026, the National Association of Realtors reports that the median down payment for first-time buyers is actually around <strong>8%</strong>. Our calculator helps you map out your savings timeline whether you are aiming for 3%, 10%, or the full 20%.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Average Minimum Down Payments by Loan Type
                </h3>
                <p>
                    Depending on your credit profile and military status, you might qualify for programs requiring drastically less cash upfront:
                </p>
                <ul>
                    <li><strong>VA Loans: 0% minimum.</strong> Available only to eligible veterans and active-duty military.</li>
                    <li><strong>USDA Loans: 0% minimum.</strong> Available for rural and suburban homebuyers who meet certain income limits.</li>
                    <li><strong>Conventional Loans: 3% minimum.</strong> Best for buyers with strong credit scores (620+). Often requires PMI.</li>
                    <li><strong>FHA Loans: 3.5% minimum.</strong> The most popular choice for buyers with lower credit scores (580+).</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    The Cost of Putting Down Less Than 20% (PMI)
                </h3>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <p className="mb-0 text-navy-900 font-medium">
                        If you put down less than 20% on a conventional loan, your lender will charge you <strong>Private Mortgage Insurance (PMI)</strong>. This fee protects the lender in case you default on the loan. It typically costs between 0.3% and 1.5% of the original loan amount per year.
                    </p>
                </div>
                <p>
                    However, many financial advisors argue that it is better to pay PMI and buy a home sooner with a 5% down payment, rather than waiting 5 extra years to save 20% while home prices and rents continue to rise. Use our <Link href="/calculators/mortgage" className="text-blue-600 hover:underline">Mortgage Payment Calculator</Link> to see exactly how much PMI will cost you each month.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Don&apos;t Forget About Closing Costs
                </h3>
                <p>
                    Your down payment is not the only cash you need on closing day. You must also pay &quot;Closing Costs&quot;—the massive bundle of fees for appraisals, taxes, title insurance, and lender underwriting.
                </p>
                <p>
                    Closing costs typically run between <strong>2% to 5% of the home&apos;s purchase price</strong>. This means if you are buying a $400,000 home with a 5% down payment ($20,000), you realistically need to have $32,000 to $40,000 in your bank account to actually close the deal. Check our <Link href="/calculators/closing-costs" className="text-blue-600 hover:underline">Closing Costs Calculator</Link> for a state-specific breakdown.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Frequently Asked Questions
                </h3>
                
                <div className="space-y-6 mt-6">
                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">Can I use gift money for a down payment?</h4>
                        <p className="text-gray-600">
                            Yes. Both FHA and Conventional loans allow you to use cash gifts from family members to cover 100% of your down payment. However, the giver must sign a formal &quot;Gift Letter&quot; assuring the lender that the money is not secretly a loan that needs to be paid back.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">What happens when I hit 20% equity?</h4>
                        <p className="text-gray-600">
                            If you have a Conventional loan, your PMI will automatically fall off once your loan balance reaches 78% of the home&apos;s original purchase price. You can also request it be removed manually at 80%. (Note: FHA MIP works differently and often cannot be removed without refinancing).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
