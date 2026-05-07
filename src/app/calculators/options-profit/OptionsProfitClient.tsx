'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function OptionsProfitClient() {
    const [strategy, setStrategy] = useState<string>('long_call');
    const [stockPrice, setStockPrice] = useState<number>(150);
    const [strikePrice, setStrikePrice] = useState<number>(155);
    const [premium, setPremium] = useState<number>(3.50);
    const [contracts, setContracts] = useState<number>(1);

    const [chartData, setChartData] = useState<any[]>([]);
    const [maxProfit, setMaxProfit] = useState<number | string>(0);
    const [maxLoss, setMaxLoss] = useState<number | string>(0);
    const [breakEven, setBreakEven] = useState<number>(0);

    useEffect(() => {
        calculateOptions();
    }, [strategy, stockPrice, strikePrice, premium, contracts]);

    const calculateOptions = () => {
        const numShares = contracts * 100;
        const totalPremium = premium * numShares;

        let data = [];
        let calculatedMaxProfit: number | string = 0;
        let calculatedMaxLoss: number | string = 0;
        let calculatedBreakEven = 0;

        // Generate a range of stock prices around the current price for the chart
        const startPrice = Math.max(0, stockPrice * 0.5);
        const endPrice = stockPrice * 1.5;
        const step = (endPrice - startPrice) / 50;

        for (let p = startPrice; p <= endPrice; p += step) {
            let profit = 0;

            if (strategy === 'long_call') {
                // Buy Call
                profit = (Math.max(0, p - strikePrice) * numShares) - totalPremium;
            } else if (strategy === 'short_call') {
                // Sell Call (Naked)
                profit = totalPremium - (Math.max(0, p - strikePrice) * numShares);
            } else if (strategy === 'long_put') {
                // Buy Put
                profit = (Math.max(0, strikePrice - p) * numShares) - totalPremium;
            } else if (strategy === 'short_put') {
                // Sell Put (Cash Secured)
                profit = totalPremium - (Math.max(0, strikePrice - p) * numShares);
            }

            data.push({ price: Number(p.toFixed(2)), profit: Number(profit.toFixed(2)) });
        }

        if (strategy === 'long_call') {
            calculatedMaxProfit = 'Unlimited';
            calculatedMaxLoss = totalPremium;
            calculatedBreakEven = strikePrice + premium;
        } else if (strategy === 'short_call') {
            calculatedMaxProfit = totalPremium;
            calculatedMaxLoss = 'Unlimited';
            calculatedBreakEven = strikePrice + premium;
        } else if (strategy === 'long_put') {
            calculatedMaxProfit = (strikePrice * numShares) - totalPremium; // Max profit is if stock goes to 0
            calculatedMaxLoss = totalPremium;
            calculatedBreakEven = strikePrice - premium;
        } else if (strategy === 'short_put') {
            calculatedMaxProfit = totalPremium;
            calculatedMaxLoss = (strikePrice * numShares) - totalPremium;
            calculatedBreakEven = strikePrice - premium;
        }

        setChartData(data);
        setMaxProfit(calculatedMaxProfit);
        setMaxLoss(calculatedMaxLoss);
        setBreakEven(calculatedBreakEven);
    };

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            const isProfit = payload[0].value >= 0;
            return (
                <div className="bg-white p-3 border border-gray-200 shadow-md rounded">
                    <p className="font-semibold text-gray-800">Stock Price: ${label}</p>
                    <p className={isProfit ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                        {isProfit ? 'Profit' : 'Loss'}: ${payload[0].value}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-6 bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
                <h2 className="text-2xl font-bold mb-2">Options Profit/Loss Visualizer</h2>
                <p className="text-blue-100">Visualize potential returns and break-even points for basic options strategies.</p>
            </div>
            
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Strategy Setup</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Strategy</label>
                            <select 
                                value={strategy} 
                                onChange={(e) => setStrategy(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="long_call">Long Call (Buy Call)</option>
                                <option value="short_call">Short Call (Sell Call)</option>
                                <option value="long_put">Long Put (Buy Put)</option>
                                <option value="short_put">Short Put (Sell/Cash Secured Put)</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Stock $</label>
                                <input type="number" step="0.01" value={stockPrice} onChange={(e) => setStockPrice(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Strike Price $</label>
                                <input type="number" step="0.01" value={strikePrice} onChange={(e) => setStrikePrice(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Premium/Cost $</label>
                                <input type="number" step="0.01" value={premium} onChange={(e) => setPremium(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Contracts</label>
                                <input type="number" min="1" value={contracts} onChange={(e) => setContracts(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded border border-blue-100 text-sm text-blue-800">
                            <strong>Note:</strong> 1 Contract = 100 Shares. Total premium paid/received is ${(premium * contracts * 100).toFixed(2)}.
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200 shadow-sm">
                            <p className="text-sm font-medium text-gray-600 mb-1">Max Profit</p>
                            <p className="text-xl font-bold text-green-700">
                                {typeof maxProfit === 'number' ? `$${maxProfit.toLocaleString()}` : maxProfit}
                            </p>
                        </div>
                        <div className="p-4 bg-red-50 rounded-lg border border-red-200 shadow-sm">
                            <p className="text-sm font-medium text-gray-600 mb-1">Max Loss</p>
                            <p className="text-xl font-bold text-red-700">
                                {typeof maxLoss === 'number' ? `$${maxLoss.toLocaleString()}` : maxLoss}
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                            <p className="text-sm font-medium text-gray-600 mb-1">Break-Even Point</p>
                            <p className="text-xl font-bold text-gray-900">${breakEven.toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-96 relative">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">P&L at Expiration</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData} margin={{ top: 5, right: 20, left: 20, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis 
                                    dataKey="price" 
                                    type="number" 
                                    domain={['dataMin', 'dataMax']} 
                                    name="Stock Price" 
                                    label={{ value: 'Underlying Stock Price at Expiration', position: 'insideBottom', offset: -10 }}
                                />
                                <YAxis 
                                    tickFormatter={(value) => `$${value}`} 
                                    domain={['auto', 'auto']}
                                />
                                <RechartsTooltip content={<CustomTooltip />} />
                                <ReferenceLine y={0} stroke="#64748b" strokeWidth={2} />
                                <ReferenceLine x={currentStockPriceMarker(stockPrice)} stroke="#3b82f6" strokeDasharray="3 3" label={{ position: 'top', value: 'Current Price', fill: '#3b82f6', fontSize: 12 }} />
                                <ReferenceLine x={breakEven} stroke="#10b981" strokeDasharray="3 3" label={{ position: 'top', value: 'Break-Even', fill: '#10b981', fontSize: 12 }} />
                                
                                <Line 
                                    type="monotone" 
                                    dataKey="profit" 
                                    stroke={chartData.length > 0 && chartData[chartData.length - 1].profit > chartData[0].profit ? "#10b981" : "#3b82f6"} 
                                    strokeWidth={3} 
                                    dot={false} 
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

function currentStockPriceMarker(price: number) {
    return price;
}
