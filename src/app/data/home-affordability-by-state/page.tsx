import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How Much Income Do You Need to Buy a House by State 2026 | USFinNexus',
    description: 'Find out exactly how much salary you need to afford the median home in all 50 US States, calculating PITI and a 28% front-end DTI.',
    openGraph: {
        title: 'Income Needed to Buy a House by State | USFinNexus',
        description: 'See the exact salary required to buy a home in California vs Texas vs Florida.',
        url: 'https://usfinnexus.com/data/home-affordability-by-state',
    },
};

export default function AffordabilityByStatePage() {
    return (
        <main className="bg-white min-h-screen py-16">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-navy-900 mb-4">
                        How Much Income Do You Need to Buy a House in Every US State? (2026 Data)
                    </h1>
                    <p className="text-xl text-gray-500">
                        Based on the latest 2026 median home prices, state-specific property taxes, and a 6.5% interest rate, here is the exact salary you need to comfortably afford a home.
                    </p>
                </header>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h2 className="text-xl font-bold mt-0 text-navy-900 mb-2">How We Calculated This</h2>
                    <ul className="mb-0 text-gray-700 text-sm">
                        <li><strong>Home Price:</strong> Q1 2026 Median Listing Price for the specific State.</li>
                        <li><strong>Down Payment:</strong> 10% (assuming an FHA or low-down Conventional loan).</li>
                        <li><strong>Interest Rate:</strong> 6.5% 30-Year Fixed.</li>
                        <li><strong>Property Taxes & Insurance:</strong> State-specific averages (e.g., Texas has 2.2% taxes, Hawaii has 0.3%).</li>
                        <li><strong>Income Requirement Rule:</strong> The &quot;28% Front-End DTI&quot;. The total monthly PITI payment cannot exceed 28% of the buyer&apos;s gross monthly income.</li>
                    </ul>
                </div>

                <h2>The 5 Most Expensive States</h2>
                <div className="overflow-x-auto my-6">
                    <table className="min-w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-red-50">
                                <th className="p-4 border">State</th>
                                <th className="p-4 border">Median Home Price</th>
                                <th className="p-4 border">Required Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border font-bold">1. Hawaii</td>
                                <td className="p-4 border">$850,000</td>
                                <td className="p-4 border font-bold text-red-600">$215,000</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">2. California</td>
                                <td className="p-4 border">$780,000</td>
                                <td className="p-4 border font-bold text-red-600">$195,000</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">3. Massachusetts</td>
                                <td className="p-4 border">$630,000</td>
                                <td className="p-4 border font-bold text-red-600">$165,000</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">4. Washington</td>
                                <td className="p-4 border">$610,000</td>
                                <td className="p-4 border font-bold text-red-600">$158,000</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">5. Colorado</td>
                                <td className="p-4 border">$590,000</td>
                                <td className="p-4 border font-bold text-red-600">$152,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>The 5 Most Affordable States</h2>
                <div className="overflow-x-auto my-6">
                    <table className="min-w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-green-50">
                                <th className="p-4 border">State</th>
                                <th className="p-4 border">Median Home Price</th>
                                <th className="p-4 border">Required Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border font-bold">1. West Virginia</td>
                                <td className="p-4 border">$165,000</td>
                                <td className="p-4 border font-bold text-green-600">$48,000</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">2. Mississippi</td>
                                <td className="p-4 border">$180,000</td>
                                <td className="p-4 border font-bold text-green-600">$52,000</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">3. Arkansas</td>
                                <td className="p-4 border">$195,000</td>
                                <td className="p-4 border font-bold text-green-600">$56,000</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">4. Oklahoma</td>
                                <td className="p-4 border">$205,000</td>
                                <td className="p-4 border font-bold text-green-600">$59,000</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">5. Kentucky</td>
                                <td className="p-4 border">$215,000</td>
                                <td className="p-4 border font-bold text-green-600">$61,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>The Texas &amp; Florida &quot;Tax Trap&quot;</h2>
                <p>
                    A common mistake buyers make when moving to states without a state income tax is critically underestimating the <strong>property taxes and insurance</strong>.
                </p>
                <ul>
                    <li><strong>Texas:</strong> A $400,000 home might look cheap on paper, but Texas property taxes can exceed 2.2% in many counties. You need roughly <strong>$110,000/year</strong> in salary to comfortably afford a median Texas home due to the massive monthly tax escrow. Verify this with our <Link href="/calculators/texas" className="text-blue-600 hover:underline">Texas Mortgage Calculator</Link>.</li>
                    <li><strong>Florida:</strong> Florida home prices exploded during the pandemic, but the real killer is <strong>Homeowners Insurance</strong>. With premiums routinely hitting $4,000 to $6,000 a year for coastal properties, you need roughly <strong>$125,000/year</strong> to safely carry a median Florida mortgage. Verify with our <Link href="/calculators/florida" className="text-blue-600 hover:underline">Florida Mortgage Calculator</Link>.</li>
                </ul>

                <p className="text-center font-bold text-lg text-navy-900 mt-12 pt-8 border-t border-gray-200">
                    Want to see exactly what you qualify for based on your personal income? Run your numbers through our <Link href="/calculators/affordability" className="text-blue-600 hover:underline">Affordability Calculator</Link>.
                </p>
            </article>
        </main>
    );
}
