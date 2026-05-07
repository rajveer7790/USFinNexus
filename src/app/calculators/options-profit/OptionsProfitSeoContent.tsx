import React from 'react';

export default function OptionsProfitSeoContent() {
    return (
        <article className="prose prose-blue max-w-none mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mt-0">Understanding Options Trading Profit and Loss</h2>
            <p className="text-gray-600">
                Options trading allows investors to speculate on the future direction of a stock or generate income, but it comes with unique risks. Unlike buying stock outright, options have an expiration date and nonlinear payoff structures. This free Options Profit Calculator helps you visualize your maximum risk, maximum reward, and break-even points before entering a trade.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">The 4 Basic Options Strategies</h3>
            
            <div className="space-y-6 mt-4">
                <div>
                    <h4 className="text-lg font-medium text-gray-900 inline">1. Long Call (Buying a Call): </h4>
                    <span className="text-gray-600">You pay a premium for the right to buy 100 shares at the Strike Price. You want the stock to go <strong>UP</strong>. Your maximum loss is the premium paid. Your maximum profit is theoretically unlimited.</span>
                </div>
                <div>
                    <h4 className="text-lg font-medium text-gray-900 inline">2. Short Call (Selling a Call): </h4>
                    <span className="text-gray-600">You receive a premium for taking on the obligation to sell 100 shares at the Strike Price. You want the stock to go <strong>DOWN or STAY FLAT</strong>. Your maximum profit is the premium received. Your maximum loss is theoretically unlimited (if the stock skyrockets).</span>
                </div>
                <div>
                    <h4 className="text-lg font-medium text-gray-900 inline">3. Long Put (Buying a Put): </h4>
                    <span className="text-gray-600">You pay a premium for the right to sell 100 shares at the Strike Price. You want the stock to go <strong>DOWN</strong>. Your maximum loss is the premium paid. Your maximum profit is substantial (limited only by the stock going to zero).</span>
                </div>
                <div>
                    <h4 className="text-lg font-medium text-gray-900 inline">4. Short Put (Selling a Put): </h4>
                    <span className="text-gray-600">You receive a premium for taking on the obligation to buy 100 shares at the Strike Price. You want the stock to go <strong>UP or STAY FLAT</strong>. Your maximum profit is the premium received. Your maximum loss is substantial (if the stock drops to zero).</span>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">What is a Break-Even Point?</h3>
            <p className="text-gray-600">
                Because you pay (or receive) a premium for an option, the stock hitting the strike price does not mean you are profitable. 
                For example, if you buy a Call option with a $150 strike price and pay $3.00 in premium, your break-even point at expiration is $153.00. The stock must rise above $153 for you to make a profit.
            </p>

            <div className="bg-red-50 p-4 border border-red-200 mt-8 rounded text-sm text-red-800">
                <strong>Disclaimer:</strong> Options trading entails significant risk and is not appropriate for all investors. The calculations provided by this tool are for educational purposes only, assume expiration (no time value/greeks), and do not include brokerage commissions or fees.
            </div>
        </article>
    );
}
