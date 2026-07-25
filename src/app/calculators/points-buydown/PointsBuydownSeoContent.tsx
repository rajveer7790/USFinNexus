'use client';

import React from 'react';
import Link from 'next/link';

export default function PointsBuydownSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">
                    Mortgage Points: When to Buy Down Your Rate in 2026
                </h2>
                <p className="lead text-xl text-gray-600">
                    When you get a mortgage quote, the lender will often offer you a seemingly fantastic low interest rate. But read the fine print: that rate usually requires you to pay "Discount Points." A discount point is a massive upfront cash fee you pay the bank in exchange for a permanently lower interest rate. Our calculator forces you to do the one thing the bank hopes you won't do: calculate the exact Break-Even Point.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    The Mathematics of a Mortgage Point
                </h3>
                <p>
                    The math behind discount points is very strict. 
                </p>
                <ul>
                    <li><strong>1 Point = 1% of your total loan amount.</strong></li>
                </ul>
                <p>
                    If you are taking out a $400,000 mortgage, buying 1 point will cost you exactly <strong>$4,000 in cash</strong> at closing. In exchange for handing the bank $4,000, they will permanently lower your interest rate (usually by 0.25%).
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <h4 className="font-bold text-navy-900 mb-2">The Break-Even Calculation</h4>
                    <p className="text-navy-800 m-0">
                        Assume your loan is $400,000.
                        <br/><br/>
                        <strong>Scenario A (No Points):</strong> You get a 6.5% rate. Your monthly payment is $2,528.
                        <br/>
                        <strong>Scenario B (Buy 1 Point):</strong> You pay $4,000 cash upfront to get a 6.25% rate. Your new monthly payment is $2,462.
                        <br/><br/>
                        By paying $4,000, you save exactly $66 a month.
                        <br/>
                        To find your Break-Even Point, divide the upfront cost by the monthly savings: $4,000 / $66 = <strong>60 Months (5 Years).</strong>
                    </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    The Ultimate Question: How Long Will You Stay?
                </h3>
                <p>
                    The Break-Even Point is the most important number in this calculation. If your break-even point is 5 years, you <strong>must not sell the house or refinance the loan for at least 5 years</strong>. 
                </p>
                <p>
                    If you buy the points, and then interest rates drop in Year 3 and you decide to refinance, you just lost thousands of dollars. You never recovered the upfront cash you gave the bank. 
                </p>
                <p>
                    <strong>Rule of Thumb:</strong> Only buy discount points if you are mathematically certain you will keep the exact same mortgage for at least 2 years beyond the break-even date.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Discount Points vs. Origination Points
                </h3>
                <p>
                    When reviewing your Loan Estimate document, be incredibly careful not to confuse the two types of points:
                </p>
                <ul>
                    <li><strong>Discount Points:</strong> These are optional. You pay money to lower your interest rate.</li>
                    <li><strong>Origination Points (or Fees):</strong> This is just the bank charging you a fee for doing the paperwork to create the loan. This does <em>not</em> lower your interest rate. It is pure profit for the lender. Always negotiate to have origination fees removed or reduced.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">
                    Seller Concessions (The Best Way to Buy Points)
                </h3>
                <p>
                    In a buyer's market, the absolute best way to use discount points is to have the seller pay for them. 
                </p>
                <p>
                    When negotiating the purchase of the home, you can ask the seller for a "$5,000 credit toward closing costs." You then take that $5,000 and use it entirely to buy down your interest rate. You get the permanent benefit of a lower monthly payment, but you didn't have to use your own cash to achieve it. Your break-even point is essentially Day 1.
                </p>

                <div className="mt-12 p-6 bg-gradient-to-r from-navy-900 to-blue-900 rounded-2xl text-white text-center shadow-lg" style={{ background: 'linear-gradient(135deg, #0A192F, #1a4d9a)' }}>
                    <h3 className="text-2xl font-bold mb-3 text-white">Compare Full Loan Scenarios</h3>
                    <p className="mb-6 opacity-90">If you want to view the full amortization schedules of the "No Points" vs "Points" scenarios side-by-side to see the exact lifetime interest savings, use our Loan Comparison tool.</p>
                    <Link
                        href="/calculators/comparison"
                        className="bg-white text-navy-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                        style={{ color: '#0A192F' }}
                    >
                        Go to Advanced Loan Comparison
                    </Link>
                </div>
            </div>
        </section>
    );
}
