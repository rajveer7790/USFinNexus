'use client';

import React, { useState, useMemo, useDeferredValue } from 'react';
import dynamic from 'next/dynamic';
import CalculatorLayout from '@/components/ui/CalculatorLayout';

const StudentLoanChart = dynamic(() => import('./StudentLoanChart'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-full text-gray-400 text-sm">Loading chart…</div>,
});
import LabeledInput from '@/components/ui/LabeledInput';
import CustomSlider from '@/components/ui/CustomSlider';

export default function StudentLoanClient() {
    const [balance, setBalance] = useState(35000);
    const [interestRate, setInterestRate] = useState(5.5);
    const [years, setYears] = useState(10);
    const [extraPayment, setExtraPayment] = useState(100);

    // Defer heavy dual-amortization simulation
    const dBalance = useDeferredValue(balance);
    const dRate = useDeferredValue(interestRate);
    const dYears = useDeferredValue(years);
    const dExtra = useDeferredValue(extraPayment);

    const calculation = useMemo(() => {
        const monthlyRate = dRate / 100 / 12;
        const totalMonths = dYears * 12;

        // Base payment calculation (standard amortization)
        const baseMonthlyPayment = (dBalance * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));

        // Create amort schedules
        let standardBalance = dBalance;
        let accelBalance = dBalance;
        
        let standardInterest = 0;
        let accelInterest = 0;
        
        let standardMonths = 0;
        let accelMonths = 0;

        const data = [];
        data.push({ month: 0, year: 0, standardBalance: Math.round(standardBalance), accelBalance: Math.round(accelBalance) });

        for (let m = 1; m <= totalMonths * 2; m++) { // * 2 just in case, but loops will break early
            // Standard path
            if (standardBalance > 0) {
                const interestThisMonth = standardBalance * monthlyRate;
                const principalThisMonth = baseMonthlyPayment - interestThisMonth;
                standardInterest += interestThisMonth;
                standardBalance -= principalThisMonth;
                standardMonths++;
                if (standardBalance < 0) standardBalance = 0;
            }

            // Accelerated path
            if (accelBalance > 0) {
                const interestThisMonth = accelBalance * monthlyRate;
                const totalPayment = baseMonthlyPayment + dExtra;
                const principalThisMonth = totalPayment - interestThisMonth;
                accelInterest += interestThisMonth;
                accelBalance -= principalThisMonth;
                accelMonths++;
                if (accelBalance < 0) accelBalance = 0;
            }

            if (m % 12 === 0 || (standardBalance === 0 && accelBalance === 0)) {
                data.push({
                    month: m,
                    year: parseFloat((m / 12).toFixed(1)),
                    standardBalance: Math.max(0, Math.round(standardBalance)),
                    accelBalance: Math.max(0, Math.round(accelBalance))
                });
            }

            if (standardBalance === 0 && accelBalance === 0) break;
        }

        return {
            baseMonthlyPayment,
            standardInterest,
            accelInterest,
            interestSaved: standardInterest - accelInterest,
            monthsSaved: standardMonths - accelMonths,
            standardYears: standardMonths / 12,
            accelYears: accelMonths / 12,
            chartData: data
        };
    }, [dBalance, dRate, dYears, dExtra]);

    const InputSection = (
        <div className="glass-card p-4 sm:p-6 space-y-6">
            <LabeledInput
                label="Current Loan Balance"
                prefix="$"
                type="number"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <LabeledInput
                    label="Interest Rate"
                    suffix="%"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    step="0.1"
                />
                <LabeledInput
                    label="Original Term"
                    suffix="Yrs"
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                />
            </div>

            <div className="pt-6 border-t border-gray-200 space-y-4">
                <div className="flex justify-between items-center mb-2">
                    <LabeledInput
                        label="Extra Monthly Payment"
                        prefix="$"
                        type="number"
                        value={extraPayment}
                        onChange={(e) => setExtraPayment(Number(e.target.value))}
                        className="w-full sm:w-1/2"
                    />
                </div>
                <CustomSlider min={0} max={1000} step={10} value={extraPayment} onChange={setExtraPayment} />
            </div>
            
            <div className="p-4 rounded-xl bg-navy-900/5 border border-navy-900/10">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Standard Min Payment</p>
                <p className="text-xl font-bold text-navy-900">${Math.round(calculation.baseMonthlyPayment).toLocaleString()}/mo</p>
            </div>
        </div>
    );

    const ResultsSection = (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel p-6 border-l-4 border-l-[#0da6f2]">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Time Saved</p>
                    <p className="text-4xl font-black text-navy-900 tabular-nums">
                        {Math.floor(calculation.monthsSaved / 12)} yrs {Math.round(calculation.monthsSaved % 12)} mos
                    </p>
                    <p className="text-xs text-gray-400 mt-2 uppercase">Payoff drops from {calculation.standardYears.toFixed(1)}y to {calculation.accelYears.toFixed(1)}y</p>
                </div>
                <div className="glass-panel p-6 border-l-4 border-l-[#00C853]">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Interest Saved</p>
                    <p className="text-4xl font-black text-navy-900 tabular-nums">
                        ${Math.round(calculation.interestSaved).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400 mt-2 uppercase">Total interest drops to ${Math.round(calculation.accelInterest).toLocaleString()}</p>
                </div>
            </div>

            <div className="glass-card p-6 h-[400px]">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-500">Payoff Timeline Comparison</h3>
                <StudentLoanChart chartData={calculation.chartData} />
            </div>
        </div>
    );

    return (
        <CalculatorLayout
            title="Student Loan Payoff Calculator"
            description="Find out exactly how much time and money you can save by adding a little extra to your monthly student loan payments."
            inputs={InputSection}
            results={ResultsSection}
        />
    );
}
