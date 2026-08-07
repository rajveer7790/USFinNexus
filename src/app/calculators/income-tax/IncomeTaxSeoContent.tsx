import Link from 'next/link';

export default function IncomeTaxSeoContent() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 className="text-3xl font-black text-navy-900 mb-6">2026 Federal Income Tax Brackets and Standard Deduction</h2>
                <p className="lead text-xl text-gray-600">
                    For tax year 2026, the ordinary federal income-tax rates are 10%, 12%, 22%, 24%, 32%, 35% and 37%. The IRS also set the basic standard deduction at $16,100 for Single filers, $32,200 for Married Filing Jointly, and $24,150 for Head of Household.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 Ordinary Income Tax Brackets</h3>
                <p>
                    The United States uses a progressive tax system. A higher bracket applies only to taxable income within that bracket, not to all income. This calculator applies the IRS 2026 ordinary-income rate schedules after the selected standard or itemized deduction.
                </p>
                <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-3 py-2 text-left">Rate</th>
                                <th className="px-3 py-2 text-left">Single</th>
                                <th className="px-3 py-2 text-left">Married Filing Jointly</th>
                                <th className="px-3 py-2 text-left">Head of Household</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['10%', '$0–$12,400', '$0–$24,800', '$0–$17,700'],
                                ['12%', '$12,401–$50,400', '$24,801–$100,800', '$17,701–$67,450'],
                                ['22%', '$50,401–$105,700', '$100,801–$211,400', '$67,451–$105,700'],
                                ['24%', '$105,701–$201,775', '$211,401–$403,550', '$105,701–$201,750'],
                                ['32%', '$201,776–$256,225', '$403,551–$512,450', '$201,751–$256,200'],
                                ['35%', '$256,226–$640,600', '$512,451–$768,700', '$256,201–$640,600'],
                                ['37%', 'Over $640,600', 'Over $768,700', 'Over $640,600'],
                            ].map((row) => (
                                <tr className="border-t" key={row[0]}>
                                    {row.map((cell) => <td key={cell} className="px-3 py-2">{cell}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 Standard Deduction</h3>
                <ul>
                    <li><strong>Single:</strong> $16,100</li>
                    <li><strong>Married Filing Jointly:</strong> $32,200</li>
                    <li><strong>Head of Household:</strong> $24,150</li>
                </ul>
                <p>
                    These are the basic standard-deduction amounts. Additional deduction amounts can apply for age or blindness and are not modeled by this simplified calculator. Itemized deductions can also be more appropriate for some taxpayers.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Marginal vs. Effective Federal Income Tax Rate</h3>
                <ul>
                    <li><strong>Marginal rate:</strong> the rate applied to the next dollar of taxable ordinary income within the current bracket.</li>
                    <li><strong>Effective federal income-tax rate:</strong> the modeled federal income tax divided by the gross wage input. It is typically lower than the marginal rate because lower slices of taxable income are taxed at lower rates.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">2026 Social Security and Medicare Estimate</h3>
                <p>
                    For an employee-wage scenario, the calculator separately estimates the employee share of Social Security and Medicare taxes. The 2026 Social Security contribution and benefit base is <strong>$184,500</strong>. The employee Social Security rate is 6.2% up to that wage base, and the regular employee Medicare rate is 1.45% of covered wages.
                </p>
                <p>
                    The Additional Medicare Tax rate is 0.9% above the applicable statutory threshold. This simplified calculator uses $250,000 for Married Filing Jointly and $200,000 for Single and Head of Household scenarios. Payroll withholding rules and final tax-return liability can differ.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">What This Calculator Does Not Model</h3>
                <p>
                    A real federal return can include many items that materially change tax liability. This tool does not attempt to model every tax credit, dependent rule, capital-gain rate, alternative minimum tax, net investment income tax, self-employment tax, qualified business income deduction, retirement-account rule, special deduction or state/local tax.
                </p>
                <p>
                    In particular, do not use the employee payroll-tax estimate for self-employment or 1099 business income. Self-employment tax and related deductions use different rules.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Official Sources</h3>
                <ul>
                    <li><a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="noopener noreferrer">IRS: Tax year 2026 inflation adjustments</a></li>
                    <li><a href="https://www.irs.gov/pub/irs-pdf/p505.pdf" target="_blank" rel="noopener noreferrer">IRS Publication 505: 2026 rate schedules and withholding guidance</a></li>
                    <li><a href="https://www.ssa.gov/OACT/COLA/cbbdet.html" target="_blank" rel="noopener noreferrer">Social Security Administration: contribution and benefit base</a></li>
                    <li><a href="https://www.irs.gov/taxtopics/tc560" target="_blank" rel="noopener noreferrer">IRS: Additional Medicare Tax</a></li>
                </ul>

                <div className="mt-10 p-5 rounded-xl bg-blue-50 border border-blue-100">
                    <p className="m-0 text-sm text-blue-900">
                        For calculation assumptions and update standards, see <Link href="/methodology" className="font-bold">USFinNexus Methodology &amp; Data Sources</Link>. This calculator is for education and estimation, not tax-return preparation or personalized tax advice.
                    </p>
                </div>
            </div>
        </section>
    );
}
