'use client';

import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function RentalPropertyClient() {
    const [purchasePrice, setPurchasePrice] = useState<number>(300000);
    const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
    const [interestRate, setInterestRate] = useState<number>(6.5);
    const [loanTerm, setLoanTerm] = useState<number>(30);
    
    const [monthlyRent, setMonthlyRent] = useState<number>(2500);
    const [vacancyRate, setVacancyRate] = useState<number>(5);
    const [propertyManagement, setPropertyManagement] = useState<number>(8);
    const [maintenance, setMaintenance] = useState<number>(5);
    const [capEx, setCapEx] = useState<number>(5);
    
    const [annualTaxes, setAnnualTaxes] = useState<number>(3600);
    const [annualInsurance, setAnnualInsurance] = useState<number>(1200);
    const [monthlyHoa, setMonthlyHoa] = useState<number>(0);

    const [closingCosts, setClosingCosts] = useState<number>(6000);
    const [repairCosts, setRepairCosts] = useState<number>(10000); // Initial rehab

    // Calculated values
    const [mortgagePayment, setMortgagePayment] = useState<number>(0);
    const [totalMonthlyExpenses, setTotalMonthlyExpenses] = useState<number>(0);
    const [netOperatingIncome, setNetOperatingIncome] = useState<number>(0);
    const [monthlyCashFlow, setMonthlyCashFlow] = useState<number>(0);
    const [capRate, setCapRate] = useState<number>(0);
    const [cashOnCashReturn, setCashOnCashReturn] = useState<number>(0);

    useEffect(() => {
        calculateReturns();
    }, [
        purchasePrice, downPaymentPercent, interestRate, loanTerm,
        monthlyRent, vacancyRate, propertyManagement, maintenance, capEx,
        annualTaxes, annualInsurance, monthlyHoa, closingCosts, repairCosts
    ]);

    const calculateReturns = () => {
        const downPayment = purchasePrice * (downPaymentPercent / 100);
        const loanAmount = purchasePrice - downPayment;
        
        // Mortgage Math
        const monthlyRate = (interestRate / 100) / 12;
        const numPayments = loanTerm * 12;
        let monthlyPI = 0;
        if (monthlyRate > 0) {
            monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
        } else {
            monthlyPI = loanAmount / numPayments;
        }

        // Monthly Income
        const grossMonthlyIncome = monthlyRent;
        const vacancyLoss = grossMonthlyIncome * (vacancyRate / 100);
        const effectiveGrossIncome = grossMonthlyIncome - vacancyLoss;

        // Monthly Operating Expenses
        const monthlyTaxes = annualTaxes / 12;
        const monthlyIns = annualInsurance / 12;
        const monthlyMgmt = effectiveGrossIncome * (propertyManagement / 100);
        const monthlyMaint = effectiveGrossIncome * (maintenance / 100);
        const monthlyCapEx = effectiveGrossIncome * (capEx / 100);
        
        const totalOperatingExpenses = monthlyTaxes + monthlyIns + monthlyHoa + monthlyMgmt + monthlyMaint + monthlyCapEx;
        
        // Net Operating Income (NOI) - Monthly and Annual
        const monthlyNOI = effectiveGrossIncome - totalOperatingExpenses;
        const annualNOI = monthlyNOI * 12;

        // Cash Flow
        const cashFlow = monthlyNOI - monthlyPI;

        // Total Initial Investment
        const totalInvestment = downPayment + closingCosts + repairCosts;

        // Returns
        const currentCapRate = purchasePrice > 0 ? (annualNOI / purchasePrice) * 100 : 0;
        const cocReturn = totalInvestment > 0 ? ((cashFlow * 12) / totalInvestment) * 100 : 0;

        setMortgagePayment(monthlyPI);
        setTotalMonthlyExpenses(totalOperatingExpenses + monthlyPI);
        setNetOperatingIncome(monthlyNOI);
        setMonthlyCashFlow(cashFlow);
        setCapRate(currentCapRate);
        setCashOnCashReturn(cocReturn);
    };

    const expenseData = [
        { name: 'Mortgage (P&I)', value: mortgagePayment },
        { name: 'Taxes', value: annualTaxes / 12 },
        { name: 'Insurance', value: annualInsurance / 12 },
        { name: 'Management', value: (monthlyRent * (1 - vacancyRate/100)) * (propertyManagement/100) },
        { name: 'Maint/CapEx', value: (monthlyRent * (1 - vacancyRate/100)) * ((maintenance + capEx)/100) },
        { name: 'HOA/Other', value: monthlyHoa },
        { name: 'Vacancy Loss', value: monthlyRent * (vacancyRate/100) }
    ];

    const COLORS = ['#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6', '#64748b', '#ec4899'];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold mb-2">Rental Property ROI Analyzer</h2>
                <p className="text-blue-100">Calculate cash flow, cap rate, and cash-on-cash return for your real estate investment.</p>
            </div>
            
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Property & Loan</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price ($)</label>
                            <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (%)</label>
                                <input type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
                                <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Initial Repairs/Rehab ($)</label>
                            <input type="number" value={repairCosts} onChange={(e) => setRepairCosts(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Income & Expenses</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Gross Rent ($)</label>
                            <input type="number" value={monthlyRent} onChange={(e) => setMonthlyRent(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Annual Taxes ($)</label>
                                <input type="number" value={annualTaxes} onChange={(e) => setAnnualTaxes(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Annual Ins ($)</label>
                                <input type="number" value={annualInsurance} onChange={(e) => setAnnualInsurance(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Property Mgmt (%)</label>
                                <input type="number" value={propertyManagement} onChange={(e) => setPropertyManagement(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Vacancy Rate (%)</label>
                                <input type="number" value={vacancyRate} onChange={(e) => setVacancyRate(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance (%)</label>
                                <input type="number" value={maintenance} onChange={(e) => setMaintenance(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">CapEx (%)</label>
                                <input type="number" value={capEx} onChange={(e) => setCapEx(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className={`p-4 rounded-lg shadow-sm ${monthlyCashFlow >= 0 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                            <p className="text-sm font-medium text-gray-600 mb-1">Monthly Cash Flow</p>
                            <p className={`text-2xl font-bold ${monthlyCashFlow >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                                ${monthlyCashFlow.toFixed(2)}
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                            <p className="text-sm font-medium text-gray-600 mb-1">Cash on Cash Return</p>
                            <p className="text-2xl font-bold text-blue-700">{cashOnCashReturn.toFixed(2)}%</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                            <p className="text-sm font-medium text-gray-600 mb-1">Cap Rate</p>
                            <p className="text-2xl font-bold text-gray-900">{capRate.toFixed(2)}%</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                            <p className="text-sm font-medium text-gray-600 mb-1">Monthly NOI</p>
                            <p className="text-2xl font-bold text-gray-900">${netOperatingIncome.toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Income & Expenses Breakdown</h3>
                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={expenseData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {expenseData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <RechartsTooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 mt-4 text-sm">
                            {expenseData.map((entry, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                                    <span className="text-gray-600 truncate mr-2">{entry.name}:</span>
                                    <span className="font-semibold">${entry.value.toFixed(0)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
