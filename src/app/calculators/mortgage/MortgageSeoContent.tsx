'use client';

import React from 'react';
import Link from 'next/link';

export default function MortgageSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-16 mt-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">

                <h2 className="text-3xl font-black text-navy-900 mb-6">
                    How to Use Our US Mortgage Calculator (2026 Guide)
                </h2>
                <p className="lead text-xl text-gray-600">
                    Buying a home is one of the most significant financial decisions you&apos;ll ever make. Knowing exactly how much house you can afford — and what your monthly payments will actually look like — is the crucial first step. Our free, CFPB-verified 2026 mortgage calculator goes beyond a simple principal-and-interest estimate. It delivers a complete <strong>PITI breakdown</strong> (Principal, Interest, Taxes, and Insurance) so you see the true, all-in monthly cost of homeownership before you step into a lender&apos;s office.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Understanding the Inputs: Step-by-Step
                </h3>
                <p>
                    Don&apos;t let mortgage math intimidate you. Here is exactly what each input means and how to estimate it if you aren&apos;t sure yet:
                </p>
                <ul>
                    <li>
                        <strong>Home Price:</strong> The total purchase price of the property. If you don&apos;t have a specific home in mind, use the median home price in your target neighborhood as a baseline.
                    </li>
                    <li>
                        <strong>Down Payment:</strong> The upfront cash you pay toward the purchase. While 20% is ideal to avoid Private Mortgage Insurance (PMI), many first-time buyer programs require as little as 3% or 3.5% down. Enter it as a dollar amount or a percentage.
                    </li>
                    <li>
                        <strong>Interest Rate:</strong> The annual cost to borrow from your lender. Mortgage rates fluctuate daily based on the economy and Federal Reserve policy. For the most accurate result, check today&apos;s rates or get pre-approved.
                    </li>
                    <li>
                        <strong>Loan Term:</strong> How long you have to repay the loan. The 30-year fixed-rate mortgage is most common in the US, offering lower monthly payments. A 15-year term carries higher payments but saves you substantial interest over the life of the loan.
                    </li>
                    <li>
                        <strong>ZIP Code (Auto-Tax):</strong> Property taxes vary dramatically by location — even between neighboring ZIP codes. Entering your target ZIP lets our calculator pull an estimated local tax rate for a more accurate monthly cost.
                    </li>
                    <li>
                        <strong>HOA Fees:</strong> Condos, townhouses, and many planned communities charge monthly Homeowners Association dues that cover exterior maintenance, amenities, and community insurance.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    The True Cost of a Mortgage: What Is PITI?
                </h3>
                <p>
                    Many simplified calculators only show Principal and Interest. But your lender actually collects your taxes and insurance monthly through an escrow account. The combined total is called <strong>PITI</strong> — and it is the number that matters for your budget and your loan approval.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <ul className="mb-0 space-y-2">
                        <li><strong>P — Principal:</strong> The portion of your payment that reduces the actual loan balance. Early in your mortgage, this is a small slice of the total payment.</li>
                        <li><strong>I — Interest:</strong> What the lender charges for borrowing their money. In the early years, interest can represent 80–90% of each payment.</li>
                        <li><strong>T — Taxes:</strong> Your local property taxes divided into 12 monthly installments and held in escrow.</li>
                        <li><strong>I — Insurance:</strong> Your annual homeowners insurance premium divided into 12 monthly installments, also held in escrow.</li>
                    </ul>
                </div>
                <p>
                    <strong>Why it matters:</strong> When lenders calculate your Debt-to-Income (DTI) ratio, they use the full PITI amount plus any HOA fees and PMI. Per the{' '}
                    <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Consumer Financial Protection Bureau (CFPB)
                    </a>
                    , most qualified mortgages cap your back-end DTI at 43%. Knowing your true PITI prevents you from becoming &quot;house poor.&quot;
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    2026 Conforming Loan Limits (Updated)
                </h3>
                <p>
                    Every year the{' '}
                    <a href="https://www.fhfa.gov/data/conforming-loan-limit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Federal Housing Finance Agency (FHFA)
                    </a>{' '}
                    sets conforming loan limits — the maximum mortgage size that Fannie Mae and Freddie Mac will purchase. For 2026:
                </p>
                <ul>
                    <li><strong>Baseline (most US counties):</strong> $832,750 for a single-family home</li>
                    <li><strong>High-cost areas</strong> (parts of CA, NY, HI, AK): up to $1,249,125</li>
                    <li><strong>FHA floor:</strong> $541,287 in most areas (set by HUD based on 65% of the FHFA baseline)</li>
                    <li><strong>FHA ceiling (high-cost):</strong> $1,249,125</li>
                </ul>
                <p>
                    Loans above these limits are classified as <strong>Jumbo loans</strong> and carry stricter credit, income, and reserve requirements. Our calculator automatically flags which category your loan falls into.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    What Is PMI and When Can You Cancel It?
                </h3>
                <p>
                    Private Mortgage Insurance (PMI) is required when your down payment is less than 20% of the purchase price. PMI protects the <em>lender</em> if you default — but you pay the premium. Typical PMI costs range from 0.5% to 1.5% of the original loan amount per year, added to your monthly payment.
                </p>
                <p>
                    The good news: PMI is not permanent. Under the{' '}
                    <a href="https://www.consumerfinance.gov/ask-cfpb/when-can-i-stop-paying-for-private-mortgage-insurance-pmi-en-202/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Homeowners Protection Act (HPA)
                    </a>
                    , you have the right to request PMI cancellation once your loan balance reaches <strong>80% of the original home value</strong> (20% equity). Your lender must automatically cancel PMI when the balance reaches 78% LTV. Our calculator&apos;s amortization table shows you exactly when that milestone occurs.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    15-Year vs. 30-Year Mortgage: Which Is Right for You?
                </h3>
                <p>
                    Choosing the right loan term is one of the most impactful decisions in your mortgage. Here is a quick comparison using our calculator with a $400,000 loan at current rates:
                </p>
                <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-gray-700">Factor</th>
                                <th className="px-4 py-2 text-center text-gray-700">30-Year Fixed</th>
                                <th className="px-4 py-2 text-center text-gray-700">15-Year Fixed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="px-4 py-2 text-gray-600">Monthly P&amp;I payment</td>
                                <td className="px-4 py-2 text-center">~$2,661</td>
                                <td className="px-4 py-2 text-center">~$3,487</td>
                            </tr>
                            <tr className="border-t bg-gray-50">
                                <td className="px-4 py-2 text-gray-600">Total interest paid</td>
                                <td className="px-4 py-2 text-center">~$558,000</td>
                                <td className="px-4 py-2 text-center">~$227,000</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 text-gray-600">Interest rate (typical)</td>
                                <td className="px-4 py-2 text-center">~6.84%</td>
                                <td className="px-4 py-2 text-center">~6.12%</td>
                            </tr>
                            <tr className="border-t bg-gray-50">
                                <td className="px-4 py-2 text-gray-600">Best for</td>
                                <td className="px-4 py-2 text-center">Cash flow flexibility</td>
                                <td className="px-4 py-2 text-center">Maximum interest savings</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    The 30-year mortgage&apos;s lower monthly payment provides flexibility — the difference can go to retirement savings, investments, or an emergency fund. The 15-year saves roughly <strong>$331,000 in interest</strong> on this example loan. Use the loan term toggle in our calculator to compare both scenarios side by side for your exact numbers. You can also run a detailed side-by-side with our{' '}
                    <Link href="/calculators/comparison" className="text-blue-600 hover:underline">Loan Comparison Calculator</Link>.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    How Extra Payments Can Save You Thousands
                </h3>
                <p>
                    You are not locked into your original schedule. Our calculator shows the dramatic impact of extra principal payments through a full amortization table:
                </p>
                <ul>
                    <li><strong>Extra Monthly Payment:</strong> Even $100/month extra on a $400,000 loan at 6.84% saves over $58,000 in interest and pays the loan off 3 years early.</li>
                    <li><strong>Bi-Weekly Payments:</strong> Switching to bi-weekly (half your payment every two weeks) results in 26 half-payments per year — the equivalent of one extra full monthly payment annually. This alone can cut 4–5 years off a 30-year loan.</li>
                    <li><strong>Lump-Sum Payments:</strong> Tax refunds, bonuses, or inheritance applied to your principal can have an outsized impact because they immediately reduce the balance on which interest compounds.</li>
                </ul>
                <p>
                    Toggle the <strong>Extra Monthly Payment</strong> field and watch the amortization schedule update in real time to see your new payoff date and total interest saved.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    How to Get the Best Mortgage Rate in 2026
                </h3>
                <p>
                    Your interest rate is the single biggest lever you can pull to reduce your total loan cost. Here is what lenders look at when setting your rate:
                </p>
                <ul>
                    <li><strong>Credit Score:</strong> Borrowers with scores of 740+ typically receive the best rates. Scores below 620 may limit you to FHA or subprime options. Check yours at annualcreditreport.com (free, federally mandated).</li>
                    <li><strong>Loan-to-Value (LTV) Ratio:</strong> The larger your down payment, the lower your LTV and the lower your rate. A 20%+ down payment unlocks the best conventional rates and eliminates PMI.</li>
                    <li><strong>Loan Type:</strong> VA loans typically offer the lowest rates (no PMI, no down payment required for eligible veterans). FHA rates are competitive for lower credit scores. Conventional rates are best for borrowers with strong credit.</li>
                    <li><strong>Debt-to-Income Ratio:</strong> Reducing your existing debt load before applying can move you into a better rate tier.</li>
                    <li><strong>Rate Lock:</strong> Once you are under contract, consider locking your rate. Mortgage rates can change daily — even hourly during volatile markets.</li>
                    <li><strong>Mortgage Points:</strong> Paying points (1 point = 1% of loan) upfront permanently lowers your rate. Use our{' '}
                        <Link href="/calculators/points-buydown" className="text-blue-600 hover:underline">Points Buy-Down Calculator</Link>{' '}
                        to find the break-even point for your situation.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    What to Do After Running Your Calculation
                </h3>
                <p>
                    Once you have your PITI estimate, here are the natural next steps:
                </p>
                <ol>
                    <li>
                        <strong>Check affordability against your income.</strong>{' '}
                        Run your gross income and debts through our{' '}
                        <Link href="/calculators/affordability" className="text-blue-600 hover:underline">Home Affordability Calculator</Link>{' '}
                        to confirm you are within CFPB&apos;s 28/43 DTI guidelines.
                    </li>
                    <li>
                        <strong>Calculate your down payment savings timeline.</strong>{' '}
                        If you are not at 20% yet, our{' '}
                        <Link href="/calculators/down-payment" className="text-blue-600 hover:underline">Down Payment Savings Planner</Link>{' '}
                        shows how long it will take to hit your goal.
                    </li>
                    <li>
                        <strong>Compare loan types.</strong>{' '}
                        See if an FHA, VA, or USDA loan beats conventional for your situation using the{' '}
                        <Link href="/calculators/fha-va-usda" className="text-blue-600 hover:underline">Government Loan Comparison Calculator</Link>.
                    </li>
                    <li>
                        <strong>Model a refinance.</strong>{' '}
                        If you already own a home, our{' '}
                        <Link href="/calculators/refinance" className="text-blue-600 hover:underline">Refinance Calculator</Link>{' '}
                        shows your exact break-even point and monthly savings.
                    </li>
                    <li>
                        <strong>Export your report.</strong>{' '}
                        Use the PDF or CSV button above to save a professional copy of your calculation — no email required.
                    </li>
                </ol>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Methodology &amp; Data Sources
                </h3>
                <p>
                    All formulas on this page follow published guidelines from:
                </p>
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
                    <h3 className="text-2xl font-bold mb-3 text-white">Ready to save or share your calculation?</h3>
                    <p className="mb-6 opacity-90">Generate a professional PDF report or export your full amortization schedule to CSV — no email required, no signup, completely free.</p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-white text-navy-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                        style={{ color: '#0A192F' }}
                    >
                        Back to Calculator ↑
                    </button>
                </div>

            </div>
        </section>
    );
}
