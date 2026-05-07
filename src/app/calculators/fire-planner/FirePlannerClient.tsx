'use client';

import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function FirePlannerClient() {
    const [currentAge, setCurrentAge] = useState<number>(30);
    const [currentSavings, setCurrentSavings] = useState<number>(100000);
    const [annualIncome, setAnnualIncome] = useState<number>(120000);
    const [annualExpenses, setAnnualExpenses] = useState<number>(60000);
    const [annualSavingsRate, setAnnualSavingsRate] = useState<number>(50); // Derived from income - expenses
    
    const [expectedReturn, setExpectedReturn] = useState<number>(7); // After inflation (real return)
    const [safeWithdrawalRate, setSafeWithdrawalRate] = useState<number>(4);

    const [fireNumber, setFireNumber] = useState<number>(0);
    const [yearsToFire, setYearsToFire] = useState<number>(0);
    const [fireAge, setFireAge] = useState<number>(0);
    
    const [chartData, setChartData] = useState<any[]>([]);

    useEffect(() => {
        // Calculate Savings based on rate or expenses
        const savings = annualIncome - annualExpenses;
        setAnnualSavingsRate((savings / annualIncome) * 100);
    }, [annualIncome, annualExpenses]);

    useEffect(() => {
        calculateFIRE();
    }, [currentAge, currentSavings, annualIncome, annualExpenses, expectedReturn, safeWithdrawalRate]);

    const calculateFIRE = () => {
        // FIRE Number = Annual Expenses / Safe Withdrawal Rate
        const targetFireNumber = annualExpenses / (safeWithdrawalRate / 100);
        setFireNumber(targetFireNumber);

        const annualSavings = annualIncome - annualExpenses;
        const realReturn = expectedReturn / 100;
        
        let balance = currentSavings;
        let years = 0;
        let data = [];
        
        data.push({
            age: currentAge,
            portfolio: balance,
            fireTarget: targetFireNumber
        });

        // Cap at 60 years of simulation
        while (balance < targetFireNumber && years < 60) {
            years++;
            balance = balance * (1 + realReturn) + annualSavings;
            data.push({
                age: currentAge + years,
                portfolio: balance > targetFireNumber * 1.5 ? targetFireNumber * 1.5 : balance, // Cap chart slightly above target
                actualPortfolio: balance,
                fireTarget: targetFireNumber
            });
        }

        setYearsToFire(years);
        setFireAge(currentAge + years);
        setChartData(data);
    };

    const handleSavingsRateChange = (rate: number) => {
        const savings = annualIncome * (rate / 100);
        setAnnualExpenses(annualIncome - savings);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
                <h2 className="text-2xl font-bold mb-2">FIRE Timeline Planner</h2>
                <p className="text-emerald-100">Calculate your Financial Independence / Retire Early number and timeline.</p>
            </div>
            
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Current Situation</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Age</label>
                                <input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Savings ($)</label>
                                <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Income (After Tax) ($)</label>
                            <input type="number" value={annualIncome} onChange={(e) => setAnnualIncome(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Expenses ($)</label>
                            <input type="number" value={annualExpenses} onChange={(e) => setAnnualExpenses(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" />
                            <p className="text-xs text-gray-500 mt-1">Current Savings Rate: {annualSavingsRate.toFixed(1)}%</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Adjust Savings Rate (%)</label>
                            <input type="range" min="0" max="99" value={annualSavingsRate} onChange={(e) => handleSavingsRateChange(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Assumptions</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Real Inv. Return (%)</label>
                            <input type="number" step="0.1" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" />
                            <p className="text-xs text-gray-500 mt-1">Return after accounting for inflation (typically 5-7%)</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Safe Withdrawal Rate (%)</label>
                            <input type="number" step="0.1" value={safeWithdrawalRate} onChange={(e) => setSafeWithdrawalRate(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" />
                            <p className="text-xs text-gray-500 mt-1">Commonly 3.5% - 4.0%</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 shadow-sm">
                            <p className="text-sm font-medium text-gray-600 mb-1">Your FIRE Number</p>
                            <p className="text-3xl font-bold text-emerald-700">
                                ${fireNumber.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                            <p className="text-sm font-medium text-gray-600 mb-1">Years to FIRE</p>
                            <p className="text-3xl font-bold text-teal-700">{yearsToFire} Years</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                            <p className="text-sm font-medium text-gray-600 mb-1">Retirement Age</p>
                            <p className="text-3xl font-bold text-gray-900">{fireAge} Years Old</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-96">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Portfolio Growth vs. FIRE Target</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="age" name="Age" />
                                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <RechartsTooltip 
                                    formatter={(value: number) => `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
                                    labelFormatter={(label) => `Age: ${label}`}
                                />
                                <ReferenceLine y={fireNumber} label="FIRE TARGET" stroke="#ef4444" strokeDasharray="3 3" />
                                <Area type="monotone" dataKey="portfolio" stroke="#10b981" fillOpacity={1} fill="url(#colorPortfolio)" name="Portfolio Value" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
