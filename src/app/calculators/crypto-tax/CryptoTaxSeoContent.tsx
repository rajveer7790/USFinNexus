import Link from 'next/link';

export default function CryptoTaxSeoContent() {
    return (
        <article className="prose prose-orange max-w-none mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mt-0">How Cryptocurrency Is Taxed in the U.S.</h2>
            <p className="text-gray-600">
                The IRS treats digital assets as <strong>property</strong> for federal tax purposes. If a digital asset is held as a capital asset, selling it, exchanging it for another materially different digital asset, or otherwise disposing of it can create a capital gain or loss based on the amount realized and adjusted basis.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Common Digital-Asset Tax Events</h3>
            <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-2">
                <li>Selling a digital asset for U.S. dollars or another currency.</li>
                <li>Exchanging one digital asset for another materially different digital asset.</li>
                <li>Using a digital asset to acquire property or services.</li>
                <li>Receiving digital assets as compensation, rewards, mining or staking income, which can involve ordinary income rather than only capital-gain treatment.</li>
            </ul>
            <p className="text-gray-600">
                The tax treatment depends on how the asset was acquired and held. This calculator models capital gains and losses; it does not calculate ordinary income from mining, staking, compensation or business activity.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Short-Term vs. Long-Term Capital Gains</h3>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-4">
                <h4 className="font-semibold text-orange-900 m-0">Short-Term Capital Gain</h4>
                <p className="text-orange-800 text-sm mt-1 mb-0">Net short-term capital gain is generally taxed using the ordinary graduated federal income-tax rates. The estimator uses the 2026 ordinary-income schedules and calculates the incremental tax caused by the modeled net short-term gain.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h4 className="font-semibold text-blue-900 m-0">Long-Term Capital Gain</h4>
                <p className="text-blue-800 text-sm mt-1 mb-0">Most net long-term capital gain is taxed using preferential 0%, 15% or 20% rates, but the applicable rate depends on taxable-income stacking and there are special categories with different maximum rates. The estimator uses the 2026 thresholds in IRS Publication 505 for ordinary long-term capital gain.</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">2026 Long-Term Capital-Gain Thresholds Used by the Calculator</h3>
            <div className="overflow-x-auto">
                <table>
                    <thead><tr><th>Filing status</th><th>Top of 0% range</th><th>Top of 15% range</th></tr></thead>
                    <tbody>
                        <tr><td>Single</td><td>$49,450</td><td>$545,500</td></tr>
                        <tr><td>Married Filing Jointly</td><td>$98,900</td><td>$613,700</td></tr>
                        <tr><td>Married Filing Separately</td><td>$49,450</td><td>$306,850</td></tr>
                        <tr><td>Head of Household</td><td>$66,200</td><td>$579,600</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="text-gray-600">Capital gains are stacked on top of other taxable income, so a long-term gain can span more than one capital-gain rate band.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Capital Losses</h3>
            <p className="text-gray-600">
                Capital losses are netted under federal capital-gain rules. If allowable net capital losses exceed capital gains, an individual can generally deduct up to $3,000 of the excess against other income for the year, or $1,500 if Married Filing Separately, with unused loss carried forward subject to the tax rules. The actual Schedule D netting process can be more complex than this calculator.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Net Investment Income Tax</h3>
            <p className="text-gray-600">
                The 3.8% Net Investment Income Tax can apply when a taxpayer has net investment income and modified adjusted gross income above the statutory threshold: $200,000 for Single or Head of Household, $250,000 for Married Filing Jointly, and $125,000 for Married Filing Separately. This estimator includes a simplified NIIT calculation but does not reproduce every Form 8960 adjustment.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Form 1099-DA and Basis Records</h3>
            <p className="text-gray-600">
                Digital-asset broker reporting is expanding. Receiving Form 1099-DA does not remove the taxpayer&apos;s responsibility to report taxable income, gains and losses correctly, and basis information can still require the taxpayer&apos;s own records. Keep transaction dates, quantity, proceeds, fees and basis information needed for Form 8949 and Schedule D.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Official IRS Resources</h3>
            <ul>
                <li><a href="https://www.irs.gov/filing/digital-assets" target="_blank" rel="noopener noreferrer">IRS Digital Assets</a></li>
                <li><a href="https://www.irs.gov/publications/p505" target="_blank" rel="noopener noreferrer">IRS Publication 505 (2026)</a></li>
                <li><a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer">IRS Topic 559: Net Investment Income Tax</a></li>
            </ul>

            <p className="text-sm text-gray-500">For the general 2026 ordinary-income estimate, use the <Link href="/calculators/income-tax">2026 Federal Income Tax Calculator</Link>. This page is educational and does not replace current IRS forms, qualified tax software or professional advice.</p>
        </article>
    );
}
