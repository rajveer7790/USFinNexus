import React from 'react';

export default function AmortizationSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-16 mt-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">
                    How an Amortization Schedule Works
                </h2>
                <p className="lead text-xl text-gray-600">
                    When you take out a 30-year fixed mortgage, your monthly payment never changes, but <em>what that payment is applied to</em> changes drastically every single month. An amortization schedule reveals exactly how much of your hard-earned money is paying down the home (Principal) versus going to the bank (Interest).
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    The Pain of the First 10 Years
                </h3>
                <p>
                    Because interest is calculated based on your <strong>outstanding loan balance</strong>, your highest interest payments occur at the very beginning of the loan. 
                </p>
                <ul>
                    <li><strong>Years 1-7:</strong> The massive majority of your monthly payment goes directly to interest. You are building equity at a painfully slow pace.</li>
                    <li><strong>Years 15-20:</strong> The &quot;tipping point.&quot; The scales finally balance, and your payment starts going more toward principal than interest.</li>
                    <li><strong>Years 25-30:</strong> Your loan balance is incredibly low, meaning very little interest is generated. Almost your entire monthly payment goes directly to principal.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Why Making Extra Payments is a Cheat Code
                </h3>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <p className="mb-0 text-navy-900 font-medium">
                        When you make an &quot;Extra Principal&quot; payment, you instantly jump forward in the amortization schedule. Every $100 you pay early directly reduces the outstanding balance, meaning the bank can never charge you compound interest on that $100 again.
                    </p>
                </div>
                <p>
                    By looking at our amortization chart, you can clearly see the impact of adding just $200 a month in extra payments. On a $400,000 mortgage at 7%, paying an extra $200 a month will shave roughly <strong>6 years off the loan</strong> and save you tens of thousands of dollars in lifetime interest.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Frequently Asked Questions
                </h3>
                
                <div className="space-y-6 mt-6">
                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">Can an amortization schedule change?</h4>
                        <p className="text-gray-600">
                            Only under three circumstances: 1) You have an Adjustable-Rate Mortgage (ARM) where the rate resets, 2) You &quot;recast&quot; your loan by making a massive lump-sum payment and having the lender recalculate the payment, or 3) You refinance into an entirely new loan.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">Are bi-weekly payments worth it?</h4>
                        <p className="text-gray-600">
                            Yes. By dividing your monthly payment in half and paying it every two weeks, you end up making 26 half-payments a year (which equals 13 full payments). That one &quot;hidden&quot; extra payment per year dramatically speeds up your amortization schedule. Try toggling the &quot;Bi-Weekly&quot; switch in our calculator to see the math.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
