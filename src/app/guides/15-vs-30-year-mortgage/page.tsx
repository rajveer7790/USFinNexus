import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: '15-Year vs. 30-Year Mortgage: Full Breakdown & Math | USFinNexus',
    description: 'Compare a 15-year vs 30-year mortgage. See the exact math on monthly payments, total interest saved, and investment opportunity costs.',
    alternates: { canonical: 'https://usfinnexus.com/guides/15-vs-30-year-mortgage' },
    openGraph: {
        title: '15-Year vs 30-Year Mortgage Comparison | USFinNexus',
        description: 'Should you take the massive monthly savings of a 30-year, or the massive lifetime interest savings of a 15-year?',
        url: 'https://usfinnexus.com/guides/15-vs-30-year-mortgage',
    },
};

export default function FifteenVsThirtyPage() {
    return (
        <main className="bg-white min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Breadcrumbs items={[{ name: 'Guides', item: '/guides' }, { name: '15 vs 30 Year Mortgage', item: '/guides/15-vs-30-year-mortgage' }]} />
            </div>
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-navy-900 mb-4">
                        15-Year vs. 30-Year Mortgage: The Ultimate Financial Breakdown
                    </h1>
                    <p className="text-xl text-gray-500">
                        It&apos;s the biggest housing debate in personal finance. Do you lock in the lowest monthly payment possible, or do you violently attack the debt to save hundreds of thousands in interest?
                    </p>
                </header>

                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 my-8">
                    <h2 className="text-2xl font-bold text-navy-900 mt-0 mb-4">The Short Answer</h2>
                    <p className="mb-0">
                        If raw <strong>cash flow and investment leverage</strong> are your primary goals, the <strong>30-year mortgage</strong> wins. If <strong>guaranteed returns and debt-free peace of mind</strong> are your goals, the <strong>15-year mortgage</strong> wins. We&apos;ll prove it with the math.
                    </p>
                </div>

                <h2>The 30-Year Mortgage: The Power of Inflation</h2>
                <p>
                    The 30-year fixed-rate mortgage is an anomaly. In most countries outside the US, getting a government-backed fixed interest rate for three decades is impossible. It is the ultimate tool for inflation hedging.
                </p>
                <ul>
                    <li><strong>Pros:</strong> The absolute lowest mandatory monthly payment. This drastically reduces your Debt-to-Income (DTI) ratio, making it much easier to qualify for a larger home. Crucially, as inflation devalues the US dollar over 30 years, your fixed payment stays exactly the same, meaning you are paying back the bank with &quot;cheaper&quot; dollars decades from now.</li>
                    <li><strong>Cons:</strong> The amortization schedule is brutal. For the first 7 to 10 years, almost your entire payment goes straight to interest. You build equity very slowly. Over the 30-year lifespan, you will likely pay more in interest than the actual original purchase price of the home.</li>
                </ul>

                <h2>The 15-Year Mortgage: The Interest Killer</h2>
                <p>
                    A 15-year mortgage forces you to pay double the principal every month compared to a 30-year loan. 
                </p>
                <ul>
                    <li><strong>Pros:</strong> You get a lower interest rate (usually 0.5% to 0.75% lower than the 30-year rate). Because the term is cut in half and the rate is lower, you save hundreds of thousands of dollars in lifetime interest. You build massive equity instantly.</li>
                    <li><strong>Cons:</strong> The monthly payment is significantly higher (usually 40% to 50% higher). This makes budgeting much tighter. If you lose your job, the bank still expects that massive 15-year payment every single month.</li>
                </ul>

                <h2>The Math: Side-by-Side Comparison</h2>
                <p>
                    Let&apos;s assume you are borrowing <strong>$400,000</strong>.
                </p>
                <div className="overflow-x-auto my-8">
                    <table className="min-w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-4 border">Metric</th>
                                <th className="p-4 border">30-Year (at 6.5%)</th>
                                <th className="p-4 border">15-Year (at 5.8%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border font-bold">Monthly PI Payment</td>
                                <td className="p-4 border">$2,528</td>
                                <td className="p-4 border font-bold text-red-600">$3,330</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">Total Interest Paid</td>
                                <td className="p-4 border font-bold text-red-600">$510,183</td>
                                <td className="p-4 border">$199,419</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">Interest Savings</td>
                                <td className="p-4 border">—</td>
                                <td className="p-4 border font-bold text-green-600">+$310,764</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    Looking at that chart, the 15-year mortgage looks like a no-brainer. You save $310,000! However, this ignores <strong>opportunity cost</strong>.
                </p>

                <h2>The Opportunity Cost Counter-Argument</h2>
                <p>
                    Look at the monthly payment difference: $3,330 vs $2,528. The 15-year mortgage requires you to spend an extra <strong>$802 per month</strong>.
                </p>
                <p>
                    What if you took the 30-year mortgage, and instead of giving the bank that extra $802, you invested it in an S&P 500 index fund returning a historical average of 8% annually?
                </p>
                <ul>
                    <li>After 15 years, that $802/month investment would grow to roughly <strong>$277,000</strong>.</li>
                    <li>By year 30, compounding interest takes over, and that investment portfolio would explode to over <strong>$1.1 Million</strong>.</li>
                </ul>
                <p>
                    Financially maximizing your net worth almost always favors taking the massive 30-year loan and investing the difference in the stock market. However, this assumes you have the discipline to actually invest the $802 every month instead of spending it on cars and vacations.
                </p>

                <h2>The &quot;Hack&quot;: A 30-Year Loan Paid Like a 15-Year</h2>
                <p>
                    If you are torn between the two, the best compromise is to <strong>take the 30-year mortgage, but pay it like a 15-year mortgage</strong>. 
                </p>
                <p>
                    You take the higher 30-year interest rate, but you artificially double your principal payments. This pays the house off in ~15 years, saving you hundreds of thousands in interest. The massive benefit? <strong>Flexibility.</strong> If you ever lose your job or face a medical emergency, you can immediately drop your payments back down to the cheap 30-year mandatory minimum. You maintain control of your cash flow.
                </p>
                <p>
                    Run your own custom scenarios using our <Link href="/calculators/mortgage" className="text-blue-600 hover:underline">Mortgage Amortization Calculator</Link> to see exactly how extra payments affect your timeline.
                </p>
            </article>
        </main>
    );
}
