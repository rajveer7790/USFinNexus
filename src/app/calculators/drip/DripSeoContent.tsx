import React from 'react';

export default function DripSeoContent() {
    return (
        <article className="prose prose-purple max-w-none mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mt-0">What is a Dividend Reinvestment Plan (DRIP)?</h2>
            <p className="text-gray-600">
                A Dividend Reinvestment Plan, or DRIP, is an investment strategy where the cash dividends you receive from a company or fund are automatically used to buy more shares of that same company. Over time, this creates a powerful "snowball effect" through the magic of compound interest. Our free DRIP Calculator helps you visualize this compounding over decades.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">The Magic of Dividend Growth Investing</h3>
            <p className="text-gray-600">
                When forecasting dividend returns, many investors only look at the <strong>current dividend yield</strong>. However, high-quality companies (like Dividend Aristocrats or Kings) raise their dividends every single year. This is known as <strong>Dividend Growth</strong>. 
            </p>
            <p className="text-gray-600">
                If you buy a stock today with a 3% yield, but they raise their dividend payout by 8% every year, your "Yield on Cost" (the yield based on your original purchase price) will skyrocket over time. A 3% yield today could effectively become a 10% or 15% yield on your original investment in 15 years.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Taxes and DRIPs</h3>
            <p className="text-gray-600">
                One crucial factor to consider when reinvesting dividends is taxes. Unless your investments are held in a tax-advantaged account like a Roth IRA or traditional 401(k), you will owe taxes on the dividends you receive every year-<strong>even if you automatically reinvest them</strong>.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4 text-purple-900">
                <p className="m-0 font-medium text-sm">
                    <strong>Pro Tip:</strong> For most investors in the US, "qualified dividends" are taxed at the long-term capital gains rate, which is typically 15% (or 0% if your income is low enough, and 20% for high earners). "Ordinary dividends" are taxed at your regular income tax rate.
                </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Why Turn DRIP On?</h3>
            <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-2">
                <li><strong>Dollar-Cost Averaging:</strong> Reinvesting dividends means you automatically buy more shares when the price is low, and fewer when the price is high.</li>
                <li><strong>Zero Commissions:</strong> Most modern brokerages don't charge fees to reinvest dividends.</li>
                <li><strong>Fractional Shares:</strong> DRIPs allow you to buy fractional shares, meaning every single penny of your dividend goes to work immediately.</li>
            </ul>
        </article>
    );
}
