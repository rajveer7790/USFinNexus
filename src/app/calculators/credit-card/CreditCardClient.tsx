'use client';

import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import CalculatorLayout from '@/components/ui/CalculatorLayout';

const CreditCardChart = dynamic(() => import('./CreditCardChart'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-full text-gray-400 text-sm">Loading chart…</div>,
});
import LabeledInput from '@/components/ui/LabeledInput';
import CustomSlider from '@/components/ui/CustomSlider';

export default function CreditCardClient() {
    const [balance, setBalance] = useState(5000);
    const [interestRate, setInterestRate] = useState(21.5);
    const [monthlyPayment, setMonthlyPayment] = useState(150);

    const calculation = useMemo(() => {
        const monthlyRate = interestRate / 100 / 12;
        let currentBalance = balance;
        let totalInterest = 0;
        let months = 0;

        const data = [];
        data.push({ month: 0, balance: Math.round(currentBalance) });

        // Min payment protection to prevent infinite loops (standard is ~2% of balance or $25)
        const minPaymentReq = Math.max(balance * 0.02, 25);
        let actualPayment = monthlyPayment;

        if (monthlyPayment <= (balance * monthlyRate)) {
            // Payment doesn't even cover interest
            return {
                months: Infinity,
                totalInterest: Infinity,
                chartData: [],
                warning: 'Your payment is too low to cover the monthly interest. Your balance will grow indefinitely.'
            };
        }

        while (currentBalance > 0 && months < 600) { // Max 50 years to cap infinite loop
            const interest = currentBalance * monthlyRate;
            
            // Adjust final payment
            if (currentBalance + interest < actualPayment) {
                actualPayment = currentBalance + interest;
            }

            const principal = actualPayment - interest;
            totalInterest += interest;
            currentBalance -= principal;
            months++;

            if (months % 6 === 0 || currentBalance <= 0) {
                data.push({
                    month: months,
                    yearStr: `Month ${months}`,
                    balance: Math.max(0, Math.round(currentBalance))
                });
            }
        }

        return {
            months,
            totalInterest,
            chartData: data,
            warning: monthlyPayment < minPaymentReq ? `Warning: Your payment is below the typical minimum requirement ($${Math.round(minPaymentReq)}).` : null
        };
    }, [balance, interestRate, monthlyPayment]);

    const InputSection = (
        <div className="glass-card p-6 sm:p-8 space-y-6">
            <LabeledInput
                label="Credit Card Balance"
                prefix="$"
                type="number"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <LabeledInput
                    label="Interest Rate (APR)"
                    suffix="%"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    step="0.1"
                />
            </div>

            <div className="pt-6 border-t border-gray-200 space-y-4">
                <div className="flex justify-between items-center mb-2">
                    <LabeledInput
                        label="Monthly Payment"
                        prefix="$"
                        type="number"
                        value={monthlyPayment}
                        onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                        className="w-full sm:w-1/2"
                    />
                </div>
                <CustomSlider min={25} max={balance} step={10} value={monthlyPayment} onChange={setMonthlyPayment} />
            </div>

            {calculation.warning && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-sm font-semibold">
                    {calculation.warning}
                </div>
            )}
        </div>
    );

    const ResultsSection = (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel p-6 border-l-4 border-l-[#f59e0b]">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Time to Payoff</p>
                    <p className="text-4xl font-black text-navy-900 tabular-nums">
                        {calculation.months === Infinity ? 'Never' : `${Math.floor(calculation.months / 12)}y ${calculation.months % 12}m`}
                    </p>
                </div>
                <div className="glass-panel p-6 border-l-4 border-l-[#dc2626]">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Total Interest Paid</p>
                    <p className="text-4xl font-black text-[#dc2626] tabular-nums">
                        {calculation.totalInterest === Infinity ? 'Infinite' : `$${Math.round(calculation.totalInterest).toLocaleString()}`}
                    </p>
                </div>
            </div>

            {calculation.months !== Infinity && calculation.chartData.length > 0 && (
                <div className="glass-card p-6 h-[400px]">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-500">Balance Drop Timeline</h3>
                    <CreditCardChart chartData={calculation.chartData} />
                </div>
            )}
        </div>
    );

    return (
        <CalculatorLayout
            title="Credit Card Payoff Calculator"
            description="Find out how long it will take to pay off your credit card balance, and see how much interest you can save by increasing your monthly payment."
            inputs={InputSection}
            results={ResultsSection}
        />
    );
}
