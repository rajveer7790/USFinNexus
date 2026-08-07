import React from 'react';
import Link from 'next/link';

export default function IncomeTaxSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">
                    2026 Federal Income Tax Brackets and Standard Deduction
                </h2>
                <p className="lead text-xl text-gray-600">
                    This calculator uses the IRS tax-year 2026 ordinary-income brackets and standard deductions published in Revenue Procedure 2025-32. The seven ordinary federal rates for 2026 are <strong>10%, 12%, 22%, 24%, 32%, 35%, and 37%</strong>. The income thresholds vary by filing status.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 Standard Deduction</h3>
                <p>
                    For tax year 2026, the basic standard deduction is <strong>$16,100 for single filers</strong>, <strong>$32,200 for married couples filing jointly</strong>, and <strong>$24,150 for heads of household</strong>. Additional standard-deduction amounts can apply to some taxpayers, including certain taxpayers who are age 65 or older or blind; this simplified calculator does not model every additional deduction or eligibility rule.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Marginal Tax Rate vs. Effective Tax Rate</h3>
                <p>
                    The United States uses a progressive federal income-tax system. Your <strong>marginal tax rate</strong> is the rate that applies to the top portion of your taxable ordinary income, not to every dollar you earn. Your <strong>effective federal income-tax rate</strong> in this calculator is the estimated federal income tax divided by the gross wage income you entered.
                </p>
                <p>
                    Moving into a higher bracket does not cause all of your income to be taxed at the higher rate. Only the portion of taxable income within that bracket is taxed at that bracket&apos;s rate.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">What This Calculator Includes</h3>
                <ul>
                    <li>IRS 2026 ordinary federal income-tax brackets for Single, Married Filing Jointly, and Head of Household.</li>
                    <li>IRS 2026 basic standard deductions for those filing statuses.</li>
                    <li>An employee-side Social Security estimate using the 2026 taxable wage base of $184,500.</li>
                    <li>Medicare tax plus the Additional Medicare Tax estimate using the applicable threshold for the filing statuses supported here.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">What It Does Not Include</h3>
                <p>
                    A real federal tax return can be affected by tax credits, capital gains, qualified dividends, the Alternative Minimum Tax, Net Investment Income Tax, business income, self-employment tax, retirement-account rules, itemized-deduction limitations, dependents, and other adjustments. State and local income taxes are also excluded. Treat the result as an educational planning estimate, not tax preparation or tax advice.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                    <h4 className="font-bold text-navy-900 mb-2">Primary source</h4>
                    <p className="text-navy-800 m-0">
                        The 2026 federal bracket thresholds and standard-deduction amounts used here are based on IRS Revenue Procedure 2025-32. For filing decisions, verify your circumstances against current IRS instructions or a qualified tax professional.
                    </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">W-2 Wages vs. Self-Employment Income</h3>
                <p>
                    The payroll-tax portion of this tool is designed as an <strong>employee wage-income estimate</strong>. Self-employed taxpayers generally calculate Social Security and Medicare taxes under self-employment-tax rules, which are different from simply doubling an employee withholding amount and can involve deductions and special calculations. This tool therefore should not be used as a self-employment-tax calculator.
                </p>

                <div className="mt-12 p-6 bg-gradient-to-r from-navy-900 to-blue-900 rounded-2xl text-white text-center shadow-lg" style={{ background: 'linear-gradient(135deg, #0A192F, #1a4d9a)' }}>
                    <h3 className="text-2xl font-bold mb-3 text-white">Explore Related Planning Tools</h3>
                    <p className="mb-6 opacity-90">Use the federal tax estimate together with broader budgeting and debt-planning tools. State-specific closing-cost calculators are housing tools and do not calculate state income tax.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/calculators/budget"
                            className="bg-white text-navy-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
                            style={{ color: '#0A192F' }}
                        >
                            Budget Calculator
                        </Link>
                        <Link
                            href="/calculators/retirement"
                            className="bg-white text-navy-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
                            style={{ color: '#0A192F' }}
                        >
                            Retirement Calculator
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
