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
                    Buying a home is one of the most significant financial decisions you&apos;ll ever make. Knowing exactly how much house you can afford—and what your monthly payments will actually look like—is the crucial first step. Our free, advanced 2026 mortgage calculator doesn&apos;t just calculate your principal and interest; it provides a comprehensive PITI (Principal, Interest, Taxes, and Insurance) breakdown to give you the true cost of homeownership.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Understanding the Inputs: Step-by-Step
                </h3>
                <p>
                    Don&apos;t let mortgage math intimidate you. Here is exactly what each input in our calculator means and how to estimate them if you aren&apos;t sure yet:
                </p>
                <ul>
                    <li>
                        <strong>Home Price:</strong> The total purchase price of the property you want to buy. If you don&apos;t have a specific home in mind, use the median home price in your target neighborhood as a baseline.
                    </li>
                    <li>
                        <strong>Down Payment:</strong> The upfront cash you pay toward the home purchase. While a 20% down payment is ideal to avoid Private Mortgage Insurance (PMI), many first-time buyer programs require as little as 3% or 3.5% down. Our calculator lets you enter this as a dollar amount or a percentage.
                    </li>
                    <li>
                        <strong>Interest Rate:</strong> The annual cost to borrow the money from your lender. Mortgage rates fluctuate daily based on the economy and the Federal Reserve. For the most accurate calculation, check current daily rates or get pre-approved by a lender.
                    </li>
                    <li>
                        <strong>Loan Term:</strong> How long you have to pay back the loan. The 30-year fixed-rate mortgage is the most common in the US, offering lower monthly payments. A 15-year term will have higher monthly payments but saves you massive amounts of interest over the life of the loan.
                    </li>
                    <li>
                        <strong>ZIP Code (Auto-Tax):</strong> Property taxes vary wildly strictly by location—even from one neighborhood to the next. By entering your target ZIP code, our calculator instantly pulls an average local tax rate and estimated homeowners insurance premium to make your calculation remarkably accurate.
                    </li>
                    <li>
                        <strong>HOA Fees:</strong> If you are buying a condo, townhouse, or a house in a planned community, you may owe monthly Homeowners Association (HOA) dues. These cover exterior maintenance, amenities, and community insurance.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    The True Cost of a Mortgage: What is PITI?
                </h3>
                <p>
                    Many simplified calculators only show you the Principal and Interest payments. However, your lender will actually collect your taxes and insurance monthly through an escrow account. This combined total is called <strong>PITI</strong>.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <ul className="mb-0 space-y-2">
                        <li><strong>P = Principal:</strong> The portion of your payment that goes toward paying down the actual loan balance.</li>
                        <li><strong>I = Interest:</strong> What the lender charges you for borrowing their money. Early in your loan, most of your payment goes toward interest.</li>
                        <li><strong>T = Taxes:</strong> Your local property taxes, divided into 12 monthly installments.</li>
                        <li><strong>I = Insurance:</strong> Your annual homeowners insurance premium, also divided into 12 monthly installments.</li>
                    </ul>
                </div>
                <p>
                    <strong>Why it matters:</strong> When lenders calculate your Debt-to-Income (DTI) ratio to approve your loan, they use the full PITI amount, plus any HOA fees and PMI. Knowing your true total monthly cost ensures you don&apos;t become &quot;house poor.&quot;
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    What is PMI (Private Mortgage Insurance)?
                </h3>
                <p>
                    If your down payment is less than 20% of the home&apos;s purchase price, lenders usually require you to pay Private Mortgage Insurance (PMI). PMI protects the <em>lender</em> if you default on the loan, but you foot the bill. 
                </p>
                <p>
                    PMI typically costs between 0.5% and 1.5% of the original loan amount annually. Our calculator dynamically estimates your PMI rate based on your Loan-to-Value (LTV) ratio. The good news? Under the Homeowners Protection Act, you can usually request PMI cancellation once you&apos;ve built 20% equity in your home, and lenders must automatically cancel it when you reach 22% equity.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    How Extra Payments Can Save You Thousands
                </h3>
                <p>
                    You aren&apos;t locked into your 30-year schedule. By generating an advanced amortization schedule, our calculator shows you the dramatic impact of making extra principal payments. 
                </p>
                <p>
                    Try updating the <strong>Extra Monthly Payment</strong> field, or check the <strong>Bi-Weekly Payments</strong> toggle. Moving to a bi-weekly schedule means you make half your normal payment every two weeks. Because there are 52 weeks in a year, you end up making 26 half-payments, which equals 13 full payments per year. That single extra monthly payment per year can shave years off your mortgage and save tens of thousands of dollars in interest.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Frequently Asked Questions (FAQ)
                </h3>
                
                <div className="space-y-6 mt-6">
                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">How much house can I afford?</h4>
                        <p className="text-gray-600">
                            A general rule of thumb is the 28/36 rule: your housing-related expenses (PITI + HOA) shouldn&apos;t exceed 28% of your gross monthly income, and your total monthly debt payments (housing plus credit cards, car loans, etc.) shouldn&apos;t exceed 36%. To get a precise number based on your income, try our <Link href="/calculators/affordability" className="text-blue-600 hover:underline">Home Affordability Calculator</Link>.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">Are mortgage rates going down in 2026?</h4>
                        <p className="text-gray-600">
                            While exact rate predictions are impossible, many economists expect rates to remain relatively stabilized in 2026 as the Federal Reserve balances inflation data with employment growth. It is highly recommended to secure the best current rate and consider using our <Link href="/calculators/refinance" className="text-blue-600 hover:underline">Mortgage Refinance Calculator</Link> later if rates drop significantly.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">What is an amortization schedule?</h4>
                        <p className="text-gray-600">
                            An amortization schedule is a complete table of periodic loan payments showing the amount of principal and the amount of interest that comprise each payment until the loan is paid off. At the beginning of your loan, the vast majority of your payment goes to interest. Toward the end of the term, almost the entire payment goes toward principal. You can view, export, and print yours using the &quot;Amortization&quot; tab above.
                        </p>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-navy-900 to-blue-900 rounded-2xl text-white text-center shadow-lg">
                    <h3 className="text-2xl font-bold mb-3 text-white">Ready to share or save your calculation?</h3>
                    <p className="mb-6 opacity-90">Our calculator lets you instantly generate a professional PDF report or export your complete amortization schedule to an Excel CSV file—no email required.</p>
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                        className="bg-white text-navy-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                    >
                        Back to Calculator 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
