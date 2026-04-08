'use client';

import React, { useState, useMemo, useDeferredValue } from 'react';
import dynamic from 'next/dynamic';
import CalculatorLayout from '@/components/ui/CalculatorLayout';

const RetirementChart = dynamic(() => import('./RetirementChart'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-full text-gray-400 text-sm">Loading chart…</div>,
});
import LabeledInput from '@/components/ui/LabeledInput';
import CustomSlider from '@/components/ui/CustomSlider';

export default function RetirementClient() {
    const [currentAge, setCurrentAge] = useState(30);
    const [retireAge, setRetireAge] = useState(65);
    const [lifeExpectancy, _setLifeExpectancy] = useState(90);
    const [currentSavings, setCurrentSavings] = useState(50000);
    const [monthlyContribution, setMonthlyContribution] = useState(500);
    const [annualReturn, setAnnualReturn] = useState(7);
    const [inflationRate, setInflationRate] = useState(2.5);

    // Defer heavy multi-year compound interest simulation
    const dCurrentAge = useDeferredValue(currentAge);
    const dRetireAge = useDeferredValue(retireAge);
    const dLifeExp = useDeferredValue(lifeExpectancy);
    const dSavings = useDeferredValue(currentSavings);
    const dContrib = useDeferredValue(monthlyContribution);
    const dReturn = useDeferredValue(annualReturn);
    const dInflation = useDeferredValue(inflationRate);

    // Calculate growth
    const chartData = useMemo(() => {
        let balance = dSavings;
        const realReturn = (1 + dReturn / 100) / (1 + dInflation / 100) - 1;
        const monthlyRate = realReturn / 12;
        
        const data = [];
        for (let age = dCurrentAge; age <= dLifeExp; age++) {
            data.push({
                age,
                balance: Math.max(0, Math.round(balance))
            });

            if (age < dRetireAge) {
                // Accumulation phase
                for (let m = 0; m < 12; m++) {
                    balance = balance * (1 + monthlyRate) + dContrib;
                }
            } else {
                // Drawdown phase (assuming 4% rule of retirement balance)
                const yearlyWithdrawal = (data.find(d => d.age === dRetireAge)?.balance || 0) * 0.04;
                for (let m = 0; m < 12; m++) {
                    balance = balance * (1 + monthlyRate) - (yearlyWithdrawal / 12);
                }
            }
        }
        return data;
    }, [dCurrentAge, dRetireAge, dLifeExp, dSavings, dContrib, dReturn, dInflation]);

    const nestEggAtRetirement = chartData.find(d => d.age === dRetireAge)?.balance || 0;
    const finalBalance = chartData[chartData.length - 1]?.balance || 0;

    const InputSection = (
        <div className="glass-card p-6 sm:p-8 space-y-6">
            <LabeledInput
                label="Current Age"
                type="number"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                min={18} max={75}
            />
            <CustomSlider min={18} max={75} value={currentAge} onChange={setCurrentAge} />

            <LabeledInput
                label="Retirement Age"
                type="number"
                value={retireAge}
                onChange={(e) => setRetireAge(Number(e.target.value))}
                min={currentAge + 1} max={85}
            />
            <CustomSlider min={currentAge + 1} max={85} value={retireAge} onChange={setRetireAge} />

            <div className="pt-4 border-t border-gray-200 space-y-6">
                <LabeledInput
                    label="Current Savings"
                    prefix="$"
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                />
                <LabeledInput
                    label="Monthly Contribution"
                    prefix="$"
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                />
            </div>

            <div className="pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <LabeledInput
                    label="Annual Return"
                    suffix="%"
                    type="number"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(Number(e.target.value))}
                    step="0.1"
                />
                <LabeledInput
                    label="Inflation Rate"
                    suffix="%"
                    type="number"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                    step="0.1"
                />
            </div>
        </div>
    );

    const ResultsSection = (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="glass-panel p-4 sm:p-6 border-l-4 border-l-[#0da6f2]">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Nest Egg at Age {retireAge}</p>
                    <p className="text-2xl sm:text-4xl font-black text-navy-900 tabular-nums">
                        ${nestEggAtRetirement.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 uppercase">Adjusted for {inflationRate}% inflation</p>
                </div>
                <div className="glass-panel p-4 sm:p-6 border-l-4 border-l-[#00C853]">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Balance at Age {lifeExpectancy}</p>
                    <p className="text-2xl sm:text-3xl font-black text-navy-900 tabular-nums">
                        ${finalBalance.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">4% Safe Withdrawal Rate</p>
                </div>
            </div>

            <div className="glass-card p-4 sm:p-6 h-[280px] sm:h-[380px]">
                <h3 className="text-sm font-bold mb-3 sm:mb-4 text-navy-900 uppercase tracking-wide">Projected Portfolio Growth</h3>
                <RetirementChart chartData={chartData} />
            </div>
        </div>
    );

    return (
        <CalculatorLayout
            title="Retirement Calculator"
            description="Visualize your path to financial freedom. Adjust your contributions, expected returns, and inflation to see exactly what you need to retire comfortably."
            inputs={InputSection}
            results={ResultsSection}
        />
    );
}
