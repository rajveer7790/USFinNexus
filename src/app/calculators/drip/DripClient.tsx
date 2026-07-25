'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';

export default function DripClient() {
    const [initialInvestment, setInitialInvestment] = useState<number>(10000);
    const [annualContribution, setAnnualContribution] = useState<number>(6000);
    const [dividendYield, setDividendYield] = useState<number>(3.5);
    const [annualDividendGrowth, setAnnualDividendGrowth] = useState<number>(6.0); // How much the dividend payout grows each year
    const [annualStockAppreciation, setAnnualStockAppreciation] = useState<number>(5.0); // Stock price growth
    const [years, setYears] = useState<number>(20);
    const [dripEnabled, setDripEnabled] = useState<boolean>(true); // Dividend Reinvestment Plan
    const [taxRate, setTaxRate] = useState<number>(15); // Tax on dividends
    const [inTaxAdvantagedAccount, setInTaxAdvantagedAccount] = useState<boolean>(true); // If true, taxRate is ignored

    const [chartData, setChartData] = useState<any[]>([]);
    const [finalBalance, setFinalBalance] = useState<number>(0);
    const [totalContributions, setTotalContributions] = useState<number>(0);
    const [totalDividendsPaid, setTotalDividendsPaid] = useState<number>(0);
    const [finalAnnualDividendIncome, setFinalAnnualDividendIncome] = useState<number>(0);

    useEffect(() => {
        calculateDRIP();
    }, [
        initialInvestment, annualContribution, dividendYield, annualDividendGrowth,
        annualStockAppreciation, years, dripEnabled, taxRate, inTaxAdvantagedAccount
    ]);

    const calculateDRIP = () => {
        let balance = initialInvestment;
        let totalContribs = initialInvestment;
        let totalDivs = 0;
        let currentYield = dividendYield / 100;
        const currentStockAppreciation = annualStockAppreciation / 100;
        const dividendGrowth = annualDividendGrowth / 100;
        const effectiveTaxRate = inTaxAdvantagedAccount ? 0 : (taxRate / 100);

        let data = [];
        data.push({
            year: 0,
            Balance: balance,
            TotalContributions: totalContribs,
            AnnualDividendIncome: balance * currentYield
        });

        let currentAnnualDividend = 0;

        for (let i = 1; i <= years; i++) {
            // Add contribution at start of year
            balance += annualContribution;
            totalContribs += annualContribution;

            // Calculate dividend for the year
            const grossDividend = balance * currentYield;
            const netDividend = grossDividend * (1 - effectiveTaxRate);
            totalDivs += grossDividend;
            currentAnnualDividend = grossDividend;

            // Reinvest dividend (if enabled)
            if (dripEnabled) {
                balance += netDividend;
            }

            // Stock appreciation
            balance = balance * (1 + currentStockAppreciation);

            // Dividend Yield grows relative to original price, so effective yield on CURRENT balance might change slightly.
            // A simpler model: The dividend amount grows by dividendGrowth, while stock grows by stockAppreciation.
            // If dividend growth > stock appreciation, yield goes up. If stock appreciation > dividend growth, yield goes down.
            currentYield = currentYield * (1 + dividendGrowth) / (1 + currentStockAppreciation);

            data.push({
                year: i,
                Balance: balance,
                TotalContributions: totalContribs,
                AnnualDividendIncome: balance * currentYield
            });
        }

        setChartData(data);
        setFinalBalance(balance);
        setTotalContributions(totalContribs);
        setTotalDividendsPaid(totalDivs);
        setFinalAnnualDividendIncome(currentAnnualDividend);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
                <h2 className="text-2xl font-bold mb-2">Dividend Reinvestment (DRIP) Forecaster</h2>
                <p className="text-purple-100">Visualize the snowball effect of compounding dividends over time.</p>
            </div>
            
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Investment Details</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Initial Investment ($)</label>
                            <input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Contribution ($)</label>
                            <input type="number" value={annualContribution} onChange={(e) => setAnnualContribution(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Years to Grow</label>
                            <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Dividend & Stock Assumptions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Initial Div. Yield (%)</label>
                                <input type="number" step="0.1" value={dividendYield} onChange={(e) => setDividendYield(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Annual Div. Growth (%)</label>
                                <input type="number" step="0.1" value={annualDividendGrowth} onChange={(e) => setAnnualDividendGrowth(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Stock Appreciation (%)</label>
                            <input type="number" step="0.1" value={annualStockAppreciation} onChange={(e) => setAnnualStockAppreciation(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Settings</h3>
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="dripEnabled" 
                                checked={dripEnabled} 
                                onChange={(e) => setDripEnabled(e.target.checked)} 
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="dripEnabled" className="ml-2 block text-sm text-gray-900">
                                Reinvest Dividends (DRIP)
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="taxAdvantaged" 
                                checked={inTaxAdvantagedAccount} 
                                onChange={(e) => setInTaxAdvantagedAccount(e.target.checked)} 
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="taxAdvantaged" className="ml-2 block text-sm text-gray-900">
                                Tax-Advantaged Account (IRA/401k)
                            </label>
                        </div>
                        {!inTaxAdvantagedAccount && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Dividend Tax Rate (%)</label>
                                <input type="number" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                                <p className="text-xs text-gray-500 mt-1">Usually 15% for qualified dividends in the US.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 shadow-sm col-span-2 md:col-span-1">
                            <p className="text-sm font-medium text-gray-600 mb-1">Final Balance</p>
                            <p className="text-2xl font-bold text-purple-700">
                                ${finalBalance.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm col-span-2 md:col-span-1">
                            <p className="text-sm font-medium text-gray-600 mb-1">Final Annual Divs</p>
                            <p className="text-2xl font-bold text-indigo-600">
                                ${finalAnnualDividendIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm col-span-2 md:col-span-1">
                            <p className="text-sm font-medium text-gray-600 mb-1">Total Contributions</p>
                            <p className="text-2xl font-bold text-gray-900">
                                ${totalContributions.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm col-span-2 md:col-span-1">
                            <p className="text-sm font-medium text-gray-600 mb-1">Total Divs Received</p>
                            <p className="text-2xl font-bold text-gray-900">
                                ${totalDividendsPaid.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-96">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Portfolio Value Over Time</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="year" name="Year" tickFormatter={(v) => `Yr ${v}`} />
                                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                                <RechartsTooltip 
                                    formatter={(value: number) => `$${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`}
                                    labelFormatter={(label) => `Year: ${label}`}
                                />
                                <Legend />
                                <Line type="monotone" dataKey="Balance" stroke="#7e22ce" strokeWidth={3} dot={false} />
                                <Line type="monotone" dataKey="TotalContributions" stroke="#64748b" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
