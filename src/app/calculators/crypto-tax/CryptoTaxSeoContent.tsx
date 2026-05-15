import React from 'react';

export default function CryptoTaxSeoContent() {
    return (
        <article className="prose prose-orange max-w-none mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mt-0">How Cryptocurrency is Taxed in the US</h2>
            <p className="text-gray-600">
                In the United States, the IRS treats cryptocurrency as <strong>property</strong>, not currency, for tax purposes. This means that every time you sell, trade, or dispose of crypto, it is a taxable event subject to Capital Gains tax. Our free Crypto Tax Estimator helps you calculate your potential federal tax liability.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">What is a Taxable Event in Crypto?</h3>
            <p className="text-gray-600">You owe taxes on your cryptocurrency when you:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-2">
                <li><strong>Sell crypto for fiat currency</strong> (like USD).</li>
                <li><strong>Trade one crypto for another crypto</strong> (e.g., trading Bitcoin for Ethereum). This is a common trap-you owe taxes on the gains of the Bitcoin you traded away, even if you never cashed out to a bank account!</li>
                <li><strong>Use crypto to buy goods or services.</strong> If you buy a coffee with Bitcoin, you technically "sold" the Bitcoin to buy the coffee, triggering capital gains.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Short-Term vs. Long-Term Capital Gains</h3>
            <p className="text-gray-600">The length of time you hold your cryptocurrency dictates your tax rate:</p>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-4">
                <h4 className="font-semibold text-orange-900 m-0">Short-Term Capital Gains (Held Less Than 1 Year)</h4>
                <p className="text-orange-800 text-sm mt-1 mb-0">
                    If you hold a coin for less than 365 days before selling or trading it, any profit is taxed at your <strong>ordinary income tax rate</strong>. This is the same rate applied to your day job\'s salary and can be as high as 37%.
                </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h4 className="font-semibold text-blue-900 m-0">Long-Term Capital Gains (Held 1 Year or More)</h4>
                <p className="text-blue-800 text-sm mt-1 mb-0">
                    If you hold a coin for over a year, you are rewarded with significantly lower tax rates. Depending on your total income, your long-term capital gains tax rate will be 0%, 15%, or 20%.
                </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Tax-Loss Harvesting</h3>
            <p className="text-gray-600">
                If you sell cryptocurrency for a loss, you can use those losses to offset your gains. If your total losses exceed your total gains for the year, you can use up to $3,000 of the remaining loss to offset your ordinary income (like your salary). Any losses beyond that $3,000 can be carried forward to future tax years. Unlike stocks, the IRS "Wash Sale" rule currently does not explicitly apply to cryptocurrencies, making crypto tax-loss harvesting a powerful tool.
            </p>
        </article>
    );
}
