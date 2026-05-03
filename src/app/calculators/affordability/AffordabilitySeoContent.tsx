import React from 'react';
import Link from 'next/link';

export default function AffordabilitySeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">
                    How Much House Can I Afford? (2026 Complete Guide)
                </h2>
                <p className="lead text-xl text-gray-600">
                    A lender telling you what you qualify for is very different from what you can comfortably afford. Our 2026 Home Affordability Calculator uses the{' '}
                    <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Consumer Financial Protection Bureau (CFPB) Debt-to-Income guidelines
                    </a>{' '}
                    to determine your true maximum budget — without making you &quot;house poor.&quot; Enter your gross income, monthly debts, and down payment to see your conservative and maximum home price in seconds.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    The 28/43 Rule: How Lenders Measure Affordability
                </h3>
                <p>
                    Most mortgage lenders and the CFPB use two Debt-to-Income (DTI) ratios to evaluate how much house you can afford. Understanding both is essential before you start shopping:
                </p>
                <ul>
                    <li>
                        <strong>Front-End DTI (the &quot;28% Rule&quot;):</strong> Your total monthly housing costs — principal, interest, property taxes, homeowners insurance, HOA fees, and PMI — should not exceed <strong>28% of your gross monthly income</strong> (before taxes). This is the classic housing ratio used by conventional lenders.
                    </li>
                    <li>
                        <strong>Back-End DTI (the &quot;43% Rule&quot;):</strong> Your housing payment <em>plus</em> all other monthly debt obligations (car loans, student loans, credit card minimums, alimony, child support) should not exceed <strong>43% of gross income</strong>. Per the CFPB, 43% is generally the maximum back-end DTI allowed for a{' '}
                        <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-qualified-mortgage-en-1789/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Qualified Mortgage
                        </a>
                        .
                    </li>
                </ul>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <p className="mb-0 text-navy-900 font-medium">
                        <strong>Conservative vs. Aggressive Budget:</strong> Using the maximum 43% back-end DTI means nearly half of your pre-tax income goes immediately to debt and housing — before groceries, childcare, retirement, or emergencies. Our calculator shows both scenarios: a conservative budget (closer to 28% front-end) and an aggressive budget (up to 43% back-end) so you can decide where you are comfortable.
                    </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Home Affordability Example: $100,000 Income
                </h3>
                <p>
                    Here is how the math works using a $100,000 annual salary ($8,333/month gross) at a 7% 30-year fixed rate with a 10% down payment and $500/month in existing debts:
                </p>
                <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-gray-700">Budget Type</th>
                                <th className="px-4 py-2 text-center text-gray-700">Max Monthly Housing</th>
                                <th className="px-4 py-2 text-center text-gray-700">Max Home Price (est.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="px-4 py-2 text-gray-600">Conservative (28% front-end)</td>
                                <td className="px-4 py-2 text-center">$2,333/mo</td>
                                <td className="px-4 py-2 text-center">~$285,000</td>
                            </tr>
                            <tr className="border-t bg-gray-50">
                                <td className="px-4 py-2 text-gray-600">Moderate (36% back-end)</td>
                                <td className="px-4 py-2 text-center">$2,500/mo</td>
                                <td className="px-4 py-2 text-center">~$310,000</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 text-gray-600">Aggressive (43% back-end)</td>
                                <td className="px-4 py-2 text-center">$3,083/mo</td>
                                <td className="px-4 py-2 text-center">~$385,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Note that the aggressive scenario assumes your existing $500/month in debts leaves $3,083/month available for housing (43% × $8,333 − $500). This table is illustrative — use our calculator for your exact numbers based on your local property taxes and insurance rates.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Key Factors That Shift Your Maximum Home Price
                </h3>
                <p>
                    Even small changes to any of these inputs can dramatically move your affordable price range up or down:
                </p>
                <ul>
                    <li>
                        <strong>Interest Rate:</strong> Every 1% increase in the mortgage rate reduces how much you can borrow by roughly 10%. At 6%, a $2,333/month P&amp;I payment supports a ~$390,000 loan. At 7.5%, the same payment only supports ~$330,000.
                    </li>
                    <li>
                        <strong>Existing Monthly Debts:</strong> Eliminating a $400/month car loan instantly frees up that cash for housing — which translates to roughly $50,000–$60,000 more in purchasing power at 7%.
                    </li>
                    <li>
                        <strong>Down Payment Amount:</strong> A larger down payment shrinks the loan, reduces or eliminates PMI (if 20%+), and can push you into a better rate tier. Going from 5% down to 20% down on a $350,000 home saves ~$150/month in PMI and lowers the loan amount by $52,500.
                    </li>
                    <li>
                        <strong>Property Tax Rate:</strong> Property taxes vary enormously by location. New Jersey averages over 2% of home value annually, while Hawaii averages under 0.3%. On a $400,000 home, that&apos;s the difference between $667/month and $100/month in taxes — a $567/month swing that directly affects how much loan you can carry.
                    </li>
                    <li>
                        <strong>HOA Fees:</strong> Condos and planned communities often charge $200–$600/month in HOA dues. These are included in your front-end DTI calculation, which directly reduces the loan amount you can support.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    2026 Loan Limits: FHA, Conforming, and Jumbo
                </h3>
                <p>
                    The loan category you fall into depends on your calculated home price and local limits set annually by the{' '}
                    <a href="https://www.fhfa.gov/data/conforming-loan-limit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Federal Housing Finance Agency (FHFA)
                    </a>{' '}
                    and{' '}
                    <a href="https://www.hud.gov/program_offices/housing/sfh/lender/origination/mortgage_limits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        HUD (for FHA limits)
                    </a>
                    :
                </p>
                <ul>
                    <li>
                        <strong>FHA Loan (2026 floor: $541,287):</strong> Best for first-time buyers with credit scores of 580+ and as little as 3.5% down. FHA loans carry mandatory mortgage insurance premium (MIP) for the life of the loan if your down payment is under 10%.
                    </li>
                    <li>
                        <strong>Conforming Conventional (2026 baseline: $832,750):</strong> The standard loan backed by Fannie Mae and Freddie Mac. Requires a minimum 620 credit score; best rates at 740+. PMI is cancellable once you reach 20% equity, unlike FHA MIP.
                    </li>
                    <li>
                        <strong>High-Cost Conforming (up to $1,249,125):</strong> Parts of California, New York, Hawaii, and Alaska qualify for higher conforming limits. Check the FHFA county-level lookup tool for your specific area.
                    </li>
                    <li>
                        <strong>Jumbo Loan (above conforming limit):</strong> If your calculated max home price pushes the loan above the conforming ceiling, you enter jumbo territory. Jumbo loans require excellent credit (typically 720+), 10–20% down, and significant cash reserves — often 12 months of payments.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    How Your Credit Score Affects Affordability
                </h3>
                <p>
                    Your credit score does not just determine whether you qualify for a loan — it directly controls the interest rate you receive, which controls how much house you can afford. Here is how FICO tiers map to typical conventional mortgage rates and monthly payments on a $350,000 loan:
                </p>
                <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-gray-700">Credit Score Range</th>
                                <th className="px-4 py-2 text-center text-gray-700">Typical Rate</th>
                                <th className="px-4 py-2 text-center text-gray-700">Monthly P&amp;I ($350K)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="px-4 py-2 text-gray-600">760–850 (Exceptional)</td>
                                <td className="px-4 py-2 text-center">~6.50%</td>
                                <td className="px-4 py-2 text-center">~$2,213</td>
                            </tr>
                            <tr className="border-t bg-gray-50">
                                <td className="px-4 py-2 text-gray-600">700–759 (Good)</td>
                                <td className="px-4 py-2 text-center">~6.85%</td>
                                <td className="px-4 py-2 text-center">~$2,296</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 text-gray-600">660–699 (Fair)</td>
                                <td className="px-4 py-2 text-center">~7.25%</td>
                                <td className="px-4 py-2 text-center">~$2,388</td>
                            </tr>
                            <tr className="border-t bg-gray-50">
                                <td className="px-4 py-2 text-gray-600">620–659 (Minimum conventional)</td>
                                <td className="px-4 py-2 text-center">~7.75%</td>
                                <td className="px-4 py-2 text-center">~$2,506</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    A 760+ score versus a 620–659 score on a $350,000 loan saves <strong>~$293/month</strong> — over <strong>$105,000</strong> over the life of a 30-year mortgage. You can check your credit score for free at{' '}
                    <a href="https://www.annualcreditreport.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        AnnualCreditReport.com
                    </a>{' '}
                    (federally mandated, no credit card required).
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    First-Time Buyer Programs That Improve Affordability
                </h3>
                <p>
                    If standard affordability limits feel out of reach, these programs can meaningfully change the math:
                </p>
                <ul>
                    <li>
                        <strong>FHA Loan (3.5% down, 580+ score):</strong> The most widely used first-time buyer program. Allows gift funds for the entire down payment. The trade-off is mandatory MIP for the life of the loan.
                    </li>
                    <li>
                        <strong>Fannie Mae HomeReady / Freddie Mac Home Possible (3% down):</strong> Conventional loans with reduced PMI for low-to-moderate income buyers. Income limits apply (typically 80% of Area Median Income). See our{' '}
                        <Link href="/calculators/fha-va-usda" className="text-blue-600 hover:underline">Government Loan Comparison Calculator</Link>{' '}
                        to compare.
                    </li>
                    <li>
                        <strong>VA Loan (0% down, no PMI):</strong> For eligible veterans, active-duty service members, and surviving spouses. No down payment required and no monthly PMI — the most powerful affordability tool for those who qualify.
                    </li>
                    <li>
                        <strong>USDA Rural Development Loan (0% down):</strong> For buyers in eligible rural and suburban areas. No down payment, competitive rates, and an annual guarantee fee that is much lower than FHA MIP. Check eligibility at{' '}
                        <a href="https://www.rd.usda.gov/programs-services/single-family-housing-programs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            USDA Rural Development
                        </a>
                        .
                    </li>
                    <li>
                        <strong>State and Local Down Payment Assistance (DPA):</strong> Most states offer grants or forgivable second mortgages for first-time buyers. The{' '}
                        <a href="https://www.hud.gov/buying/localbuying" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            HUD local homebuying programs directory
                        </a>{' '}
                        lists programs by state.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Next Steps After Calculating Affordability
                </h3>
                <ol>
                    <li>
                        <strong>Get a mortgage pre-approval.</strong> Once you know your target price range, a lender pre-approval confirms what a real institution will actually lend you, locks in a rate for 60–90 days, and strengthens your offer in competitive markets.
                    </li>
                    <li>
                        <strong>Calculate your full monthly payment.</strong> Run your specific home price, down payment, and ZIP code through our{' '}
                        <Link href="/calculators/mortgage" className="text-blue-600 hover:underline">Full PITI Mortgage Calculator</Link>{' '}
                        to get the exact all-in monthly cost including taxes, insurance, and PMI.
                    </li>
                    <li>
                        <strong>Build your down payment plan.</strong> Our{' '}
                        <Link href="/calculators/down-payment" className="text-blue-600 hover:underline">Down Payment Savings Planner</Link>{' '}
                        shows exactly how many months it will take to reach 3%, 10%, or 20% down given your current monthly savings rate.
                    </li>
                    <li>
                        <strong>Estimate closing costs.</strong> Closing costs typically add 2%–5% on top of your down payment. Use our{' '}
                        <Link href="/calculators/closing-costs" className="text-blue-600 hover:underline">Closing Costs Calculator</Link>{' '}
                        to budget every fee by state before you make an offer.
                    </li>
                    <li>
                        <strong>Compare loan types.</strong> See whether FHA, VA, USDA, or a conventional loan gives you the lowest total cost for your credit profile using the{' '}
                        <Link href="/calculators/fha-va-usda" className="text-blue-600 hover:underline">Government Loan Comparison Calculator</Link>.
                    </li>
                </ol>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Methodology &amp; Data Sources
                </h3>
                <p>All calculations on this page follow published guidelines from:</p>
                <ul>
                    <li>
                        <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Consumer Financial Protection Bureau (CFPB) — Owning a Home
                        </a>
                    </li>
                    <li>
                        <a href="https://www.fhfa.gov/data/conforming-loan-limit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            FHFA 2026 Conforming Loan Limits
                        </a>
                    </li>
                    <li>
                        <a href="https://www.hud.gov/program_offices/housing/sfh/lender/origination/mortgage_limits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            HUD 2026 FHA Mortgage Limits
                        </a>
                    </li>
                    <li>Standard US mortgage amortization math: monthly compounding on outstanding principal balance</li>
                    <li>PMI estimates based on Freddie Mac published ranges (0.5%–1.5% annually depending on LTV and credit score)</li>
                </ul>

                <div className="mt-12 p-6 bg-gradient-to-r from-navy-900 to-blue-900 rounded-2xl text-white text-center shadow-lg" style={{ background: 'linear-gradient(135deg, #0A192F, #1a4d9a)' }}>
                    <h3 className="text-2xl font-bold mb-3 text-white">Know your budget. Run your full payment.</h3>
                    <p className="mb-6 opacity-90">Once you have your max home price, plug it into our full PITI mortgage calculator to see the exact monthly cost — taxes, insurance, and PMI included.</p>
                    <Link
                        href="/calculators/mortgage"
                        className="bg-white text-navy-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                        style={{ color: '#0A192F' }}
                    >
                        Open Mortgage Calculator →
                    </Link>
                </div>
            </div>
        </section>
    );
}
