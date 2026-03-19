import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Home Affordability Index by City (2026 Data) | USFinNexus',
    description: 'Compare the median household income to the median home price in the 50 largest US Metro areas to see where buying a house is actually possible in 2026.',
    openGraph: {
        title: 'Home Affordability Index by City | USFinNexus',
        description: 'Discover the most and least affordable cities in America based on localized income data.',
        url: 'https://usfinnexus.com/data/home-affordability-by-city',
    },
};

export default function AffordabilityByCityPage() {
    return (
        <main className="bg-white min-h-screen py-16">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-navy-900 mb-4">
                        2026 Home Affordability Index by Major US City
                    </h1>
                    <p className="text-xl text-gray-500">
                        The true measure of affordability isn&apos;t just the price of the house—it&apos;s the price of the house compared to what local companies pay their workers.
                    </p>
                </header>

                <p>
                    Below, we calculate the <strong>Housing Affordability Ratio (HAR)</strong>. This ratio divides the Median Home Price by the Median Household Income. 
                    Historically, a ratio of <strong>3.0 or less</strong> (a home costs 3 years of gross salary) was considered healthy and &quot;Affordable.&quot; In 2026, finding a city with a ratio under 4.0 is incredibly difficult.
                </p>

                <h2>&quot;Severely Unaffordable&quot; Metros (Ratio &gt; 8.0)</h2>
                <p>
                    In these markets, the local median income has completely detached from real estate values. Without generational wealth, tech stock options, or moving from out of state with massive equity, a local worker earning the median salary cannot buy a home.
                </p>
                <div className="overflow-x-auto my-6">
                    <table className="min-w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-red-50">
                                <th className="p-4 border">Metro Area</th>
                                <th className="p-4 border">Median Income</th>
                                <th className="p-4 border">Median Home</th>
                                <th className="p-4 border">Affordability Ratio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border font-bold">San Jose, CA</td>
                                <td className="p-4 border">$150,000</td>
                                <td className="p-4 border">$1,450,000</td>
                                <td className="p-4 border font-bold text-red-600">9.6x</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">Los Angeles, CA</td>
                                <td className="p-4 border">$85,000</td>
                                <td className="p-4 border">$820,000</td>
                                <td className="p-4 border font-bold text-red-600">9.6x</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">San Diego, CA</td>
                                <td className="p-4 border">$95,000</td>
                                <td className="p-4 border">$890,000</td>
                                <td className="p-4 border font-bold text-red-600">9.3x</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">Miami, FL</td>
                                <td className="p-4 border">$68,000</td>
                                <td className="p-4 border">$590,000</td>
                                <td className="p-4 border font-bold text-red-600">8.6x</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-500 italic">Check out our <Link href="/calculators/california" className="text-blue-600 hover:underline">California Mortgage Calculator</Link> to see how Prop 13 affects these massive CA home prices.</p>

                <h2>&quot;Affordable&quot; Metros (Ratio &lt; 4.0)</h2>
                <p>
                    These are the last bastions of the traditional middle-class dream in America. In these midwestern and rust-belt cities, housing prices have largely stayed tethered to local wages.
                </p>
                <div className="overflow-x-auto my-6">
                    <table className="min-w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-green-50">
                                <th className="p-4 border">Metro Area</th>
                                <th className="p-4 border">Median Income</th>
                                <th className="p-4 border">Median Home</th>
                                <th className="p-4 border">Affordability Ratio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border font-bold">Cleveland, OH</td>
                                <td className="p-4 border">$63,000</td>
                                <td className="p-4 border">$195,000</td>
                                <td className="p-4 border font-bold text-green-600">3.1x</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">Pittsburgh, PA</td>
                                <td className="p-4 border">$68,000</td>
                                <td className="p-4 border">$215,000</td>
                                <td className="p-4 border font-bold text-green-600">3.1x</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">St. Louis, MO</td>
                                <td className="p-4 border">$72,000</td>
                                <td className="p-4 border">$240,000</td>
                                <td className="p-4 border font-bold text-green-600">3.3x</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">Detroit, MI</td>
                                <td className="p-4 border">$70,000</td>
                                <td className="p-4 border">$235,000</td>
                                <td className="p-4 border font-bold text-green-600">3.3x</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>The DTI Reality Check</h2>
                <p>
                    Regardless of the ratio in your city, no bank will approve your loan if your personal Debt-to-Income (DTI) ratio is too high. 
                    Generally, your total monthly debt payments (including the new mortgage) cannot exceed 43% of your gross monthly income. Calculate your personal chances of approval instantly using our <Link href="/calculators/dti" className="text-blue-600 hover:underline">DTI Calculator</Link>.
                </p>
            </article>
        </main>
    );
}
