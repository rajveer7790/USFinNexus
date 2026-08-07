'use client';

import React from 'react';
import Link from 'next/link';

export default function IncomeTaxSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">How the 2026 Federal Income Tax Calculator Works</h2>
                <p className="lead text-xl text-gray-600">
                    This calculator estimates U.S. federal income tax for tax year 2026 using the official inflation-adjusted tax brackets and standard deductions published by the IRS in Revenue Procedure 2025-32. It also estimates the employee share of Social Security and Medicare payroll taxes using the 2026 Social Security taxable wage base published by the Social Security Administration.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 Federal Tax Rates</h3>
                <p>
                    The individual federal income-tax rates for 2026 are <strong>10%, 12%, 22%, 24%, 32%, 35% and 37%</strong>. The U.S. uses a progressive tax system: moving into a higher bracket does not cause all of your income to be taxed at the higher rate.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 Standard Deduction</h3>
                <p>The IRS published these standard deduction amounts for tax year 2026:</p>
                <ul>
                    <li><strong>Single:</strong> $16,100</li>
                    <li><strong>Married filing jointly:</strong> $32,200</li>
                    <li><strong>Head of household:</strong> $24,150</li>
                </ul>
                <p>
                    The calculator subtracts the selected standard deduction from gross income before applying the progressive federal brackets. If you choose the itemized option, it instead uses the amount you enter. Whether itemizing is appropriate depends on your individual tax situation.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Marginal vs. Effective Tax Rate</h3>
                <ul>
                    <li><strong>Marginal tax rate:</strong> the rate applied to the highest portion of taxable income in this estimate.</li>
                    <li><strong>Effective federal income-tax rate:</strong> estimated federal income tax divided by gross income.</li>
                </ul>
                <p>
                    These numbers answer different questions. Your marginal rate is useful for thinking about the tax effect of additional taxable income, while your effective rate summarizes the federal income tax estimate across all brackets.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 Social Security and Medicare Estimate</h3>
                <p>
                    For employees, Social Security tax is 6.2% of covered wages up to the 2026 taxable maximum of <strong>$184,500</strong>. Medicare tax is generally 1.45% of covered wages with no wage cap. An additional 0.9% Medicare tax can apply above statutory thresholds. The calculator uses $200,000 for single/head-of-household inputs and $250,000 for married filing jointly when estimating that additional employee tax.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h4 className="font-bold text-navy-900 mb-2">Important limitations</h4>
                    <p className="text-navy-800 m-0">
                        This is an educational estimate, not tax-preparation software. It does not calculate tax credits, Alternative Minimum Tax, Net Investment Income Tax, qualified dividends/capital gains, self-employment tax, every adjustment or deduction, or state and local taxes. Payroll withholding can also differ from final tax liability.
                    </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Primary Sources</h3>
                <p>
                    The 2026 federal rates and standard deductions are based on IRS Revenue Procedure 2025-32 and the IRS 2026 inflation-adjustment release. The Social Security wage base is based on the Social Security Administration&apos;s 2026 COLA and contribution-base guidance. Values on this page were reviewed for tax year 2026 on August 7, 2026.
                </p>

                <div className="mt-12 p-6 bg-gradient-to-r from-navy-900 to-blue-900 rounded-2xl text-white text-center shadow-lg" style={{ background: 'linear-gradient(135deg, #0A192F, #1a4d9a)' }}>
                    <h3 className="text-2xl font-bold mb-3 text-white">Explore More Calculators</h3>
                    <p className="mb-6 opacity-90">Compare the federal estimate with other planning tools. State-specific tools may use different assumptions and should be checked against current state guidance.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/calculators/retirement" className="bg-white text-navy-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center" style={{ color: '#0A192F' }}>
                            Retirement Calculator
                        </Link>
                        <Link href="/calculators/budget" className="bg-white text-navy-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center" style={{ color: '#0A192F' }}>
                            Budget Calculator
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
