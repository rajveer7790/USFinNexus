'use client';

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

export default function CryptoTaxClient() {
    const [filingStatus, setFilingStatus] = useState<string>('single');
    const [ordinaryIncome, setOrdinaryIncome] = useState<number>(85000); // W2 income, etc.
    
    // Transactions
    const [shortTermGains, setShortTermGains] = useState<number>(5000);
    const [shortTermLosses, setShortTermLosses] = useState<number>(2000);
    const [longTermGains, setLongTermGains] = useState<number>(10000);
    const [longTermLosses, setLongTermLosses] = useState<number>(1000);

    // Results
    const [netShortTerm, setNetShortTerm] = useState<number>(0);
    const [netLongTerm, setNetLongTerm] = useState<number>(0);
    const [shortTermTax, setShortTermTax] = useState<number>(0);
    const [longTermTax, setLongTermTax] = useState<number>(0);
    const [totalTaxLiability, setTotalTaxLiability] = useState<number>(0);
    const [effectiveTaxRate, setEffectiveTaxRate] = useState<number>(0);

    useEffect(() => {
        calculateCryptoTax();
    }, [filingStatus, ordinaryIncome, shortTermGains, shortTermLosses, longTermGains, longTermLosses]);

    const calculateCryptoTax = () => {
        // 1. Calculate Net Gains/Losses
        let nst = shortTermGains - shortTermLosses;
        let nlt = longTermGains - longTermLosses;

        // 2. Netting them together if they are opposite signs
        if (nst < 0 && nlt > 0) {
            // Apply short term loss to long term gain
            nlt = nlt + nst; // nst is negative
            nst = 0;
            if (nlt < 0) {
                nst = nlt;
                nlt = 0;
            }
        } else if (nlt < 0 && nst > 0) {
            // Apply long term loss to short term gain
            nst = nst + nlt; // nlt is negative
            nlt = 0;
            if (nst < 0) {
                nlt = nst;
                nst = 0;
            }
        }

        // At this point, either both are positive, both are negative, or one is zero.
        // For tax purposes, we only care if they are > 0.
        // If net total is negative, up to $3000 can be deducted against ordinary income.
        
        let taxableShortTerm = Math.max(0, nst);
        let taxableLongTerm = Math.max(0, nlt);

        setNetShortTerm(nst);
        setNetLongTerm(nlt);

        // 3. Calculate Short Term Tax (Taxes as Ordinary Income)
        // Approximate 2024/2025/2026 tax brackets (simplified for estimation)
        // We find the marginal rate based on ordinary income.
        let stMarginalRate = 0;
        const totalIncome = ordinaryIncome + taxableShortTerm;
        
        if (filingStatus === 'single') {
            if (totalIncome <= 11600) stMarginalRate = 0.10;
            else if (totalIncome <= 47150) stMarginalRate = 0.12;
            else if (totalIncome <= 100525) stMarginalRate = 0.22;
            else if (totalIncome <= 191950) stMarginalRate = 0.24;
            else if (totalIncome <= 243725) stMarginalRate = 0.32;
            else if (totalIncome <= 609350) stMarginalRate = 0.35;
            else stMarginalRate = 0.37;
        } else { // married
            if (totalIncome <= 23200) stMarginalRate = 0.10;
            else if (totalIncome <= 94300) stMarginalRate = 0.12;
            else if (totalIncome <= 201050) stMarginalRate = 0.22;
            else if (totalIncome <= 383900) stMarginalRate = 0.24;
            else if (totalIncome <= 487450) stMarginalRate = 0.32;
            else if (totalIncome <= 731200) stMarginalRate = 0.35;
            else stMarginalRate = 0.37;
        }

        const calculatedStTax = taxableShortTerm * stMarginalRate;
        setShortTermTax(calculatedStTax);

        // 4. Calculate Long Term Tax (0%, 15%, or 20% based on total taxable income)
        let ltRate = 0;
        const incomeForLt = totalIncome; // Income including ordinary and ST gains
        
        if (filingStatus === 'single') {
            if (incomeForLt <= 47025) ltRate = 0;
            else if (incomeForLt <= 518900) ltRate = 0.15;
            else ltRate = 0.20;
        } else { // married
            if (incomeForLt <= 94050) ltRate = 0;
            else if (incomeForLt <= 583750) ltRate = 0.15;
            else ltRate = 0.20;
        }

        const calculatedLtTax = taxableLongTerm * ltRate;
        setLongTermTax(calculatedLtTax);

        // 5. Net Investment Income Tax (NIIT) - 3.8% for high earners
        let niit = 0;
        const threshold = filingStatus === 'single' ? 200000 : 250000;
        const magi = totalIncome + taxableLongTerm;
        if (magi > threshold) {
            const excess = magi - threshold;
            const netInvestmentIncome = taxableShortTerm + taxableLongTerm;
            niit = Math.min(excess, netInvestmentIncome) * 0.038;
        }

        const finalTax = calculatedStTax + calculatedLtTax + niit;
        setTotalTaxLiability(finalTax);

        const totalGains = taxableShortTerm + taxableLongTerm;
        setEffectiveTaxRate(totalGains > 0 ? (finalTax / totalGains) * 100 : 0);
    };

    const totalNetGains = Math.max(0, netShortTerm) + Math.max(0, netLongTerm);
    const chartData = [
        { name: 'Estimated Tax', value: totalTaxLiability },
        { name: 'Your Keep', value: totalNetGains - totalTaxLiability }
    ];
    const COLORS = ['#ef4444', '#10b981'];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-6 bg-gradient-to-r from-orange-500 to-red-600 text-white">
                <h2 className="text-2xl font-bold mb-2">Crypto Capital Gains Tax Estimator</h2>
                <p className="text-orange-100">Estimate your US federal tax liability on cryptocurrency trades.</p>
            </div>
            
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Your Profile</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Filing Status</label>
                            <select 
                                value={filingStatus} 
                                onChange={(e) => setFilingStatus(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            >
                                <option value="single">Single / Married Filing Separately</option>
                                <option value="married">Married Filing Jointly</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Other Ordinary Income ($)</label>
                            <input type="number" value={ordinaryIncome} onChange={(e) => setOrdinaryIncome(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" />
                            <p className="text-xs text-gray-500 mt-1">W-2 Salary, business income, etc. Determines your tax bracket.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Short-Term (Held &lt; 1 Year)</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Gains ($)</label>
                                <input type="number" value={shortTermGains} onChange={(e) => setShortTermGains(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-green-600" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Losses ($)</label>
                                <input type="number" value={shortTermLosses} onChange={(e) => setShortTermLosses(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-red-600" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Long-Term (Held &ge; 1 Year)</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Gains ($)</label>
                                <input type="number" value={longTermGains} onChange={(e) => setLongTermGains(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-green-600" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Losses ($)</label>
                                <input type="number" value={longTermLosses} onChange={(e) => setLongTermLosses(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-red-600" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 shadow-sm col-span-2">
                            <p className="text-sm font-medium text-gray-600 mb-1">Est. Total Tax Liability</p>
                            <p className="text-4xl font-bold text-red-600">
                                ${totalTaxLiability.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm col-span-2 md:col-span-1">
                            <p className="text-sm font-medium text-gray-600 mb-1">Effective Tax Rate</p>
                            <p className="text-2xl font-bold text-gray-900">{effectiveTaxRate.toFixed(1)}%</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm col-span-2 md:col-span-1">
                            <p className="text-sm font-medium text-gray-600 mb-1">Total Net Gains</p>
                            <p className="text-2xl font-bold text-green-600">
                                ${totalNetGains.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-1/2 h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={totalNetGains > 0 ? chartData : [{ name: 'No Gains', value: 1 }]}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {(totalNetGains > 0 ? chartData : [{ name: 'No Gains', value: 1 }]).map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={totalNetGains > 0 ? COLORS[index % COLORS.length] : '#cbd5e1'} />
                                        ))}
                                    </Pie>
                                    <RechartsTooltip formatter={(value: number) => `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="w-full md:w-1/2 space-y-3">
                            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Tax Breakdown</h3>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Short-Term Capital Gains Tax:</span>
                                <span className="font-semibold text-red-600">${shortTermTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Long-Term Capital Gains Tax:</span>
                                <span className="font-semibold text-red-600">${longTermTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                            </div>
                            <div className="flex justify-between text-sm border-t pt-2 mt-2">
                                <span className="text-gray-800 font-medium">Total Tax Owed:</span>
                                <span className="font-bold text-red-600">${totalTaxLiability.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                            </div>
                            {netShortTerm + netLongTerm < 0 && (
                                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-sm text-green-800">
                                    You have a net capital loss. You can deduct up to $3,000 of this loss against your ordinary income, and carry the rest forward to future years.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-4 text-xs text-gray-500 text-center">
                Disclaimer: This calculator provides an estimate for educational purposes only. It uses simplified federal brackets and does not account for state taxes, local taxes, or highly specific tax situations. Always consult a CPA.
            </div>
        </div>
    );
}
