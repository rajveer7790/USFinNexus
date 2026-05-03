import React from 'react';

export default function CaliforniaSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">
                    Buying a Home in California: Jumbo Loans and Prop 13
                </h2>
                <p className="lead text-xl text-gray-600">
                    The California housing market is notoriously expensive, meaning buyers often need specialized &quot;Jumbo&quot; mortgages to secure a home. However, California also offers some of the most powerful property tax protections in the entire world. Our California Mortgage Calculator accounts for both of these unique market realities.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Prop 13: Your Shield Against Massive Tax Bills
                </h3>
                <p>
                    In many states, if the value of your home doubles over ten years, your property taxes will also double. This forces many retirees out of their homes. California&apos;s <strong>Proposition 13</strong> permanently prevents this from happening.
                </p>
                <ul>
                    <li>
                        <strong>The Base Rate:</strong> When you buy a home in California, your property tax is generally assessed at <strong>1% of the purchase price</strong> (plus smaller local voter-approved bonds).
                    </li>
                    <li>
                        <strong>The 2% Cap:</strong> Prop 13 mandates that the assessed value of your home cannot increase by more than <strong>2% per year</strong> for property tax purposes, regardless of how fast the market inflates.
                    </li>
                </ul>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <p className="mb-0 text-navy-900 font-medium">
                        <strong>Why you must manually enter your target purchase price:</strong> Because of Prop 13, the previous owner&apos;s tax bill is irrelevant to you. If they bought the house in 1990 for $200,000, they might be paying $2,500 a year in taxes. If you buy it from them today for $1,000,000, the home will instantly trigger a &quot;reassessment&quot; at the new purchase price, and your tax bill will be roughly <strong>$10,000+ a year</strong>.
                    </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Conforming vs. Jumbo Loans in California (2026)
                </h3>
                <p>
                    Because home prices in coastal California (Los Angeles, San Francisco, San Diego) are so incredibly high, most buyers blow right past the standard federal loan limits. 
                </p>
                <ul>
                    <li>
                        <strong>Standard Baseline Limit (2026):</strong> Approximately $832,750.
                    </li>
                    <li>
                        <strong>High-Cost Area Limit (2026):</strong> In expensive California counties, Fannie Mae &amp; Freddie Mac allow &quot;super conforming&quot; loans all the way up to <strong>$1,249,125</strong>. If you stay under this ceiling, you still get favorable conforming interest rates.
                    </li>
                    <li>
                         <strong>Jumbo Loans:</strong> If your loan balance exceeds that high-cost limit, you must get a Jumbo Loan. These are held directly by private banks. They usually require <strong>higher credit scores (700+), larger down payments (often 20%), and extensive cash reserves</strong> (6-12 months of mortgage payments sitting in your bank).
                     </li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Frequently Asked Questions
                </h3>
                
                <div className="space-y-6 mt-6">
                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">What is Mello-Roos?</h4>
                        <p className="text-gray-600">
                            A &quot;Mello-Roos&quot; is a special tax assessment district common in newer California housing developments (built after 1982). If you buy a newer home, you might have to pay a Mello-Roos fee on top of your normal 1% property tax. This repays bonds used to build local infrastructure like schools and roads. Always ask your realtor if the home is in a Mello-Roos district before making an offer.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">How much is earthquake insurance?</h4>
                        <p className="text-gray-600">
                            Standard California homeowners insurance <strong>does not cover earthquake damage</strong>. You must buy a separate policy (often through the California Earthquake Authority). The premiums vary wildly based on proximity to fault lines and the age/construction of the home, but expect it to add $50 to $200+ to your monthly housing costs if you choose to buy it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
