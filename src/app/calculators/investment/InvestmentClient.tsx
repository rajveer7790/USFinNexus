'use client';

import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import CalculatorLayout from '@/components/ui/CalculatorLayout';

const InvestmentChart = dynamic(() => import('./InvestmentChart'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-full text-gray-400 text-sm">Loading chart…</div>,
});
import LabeledInput from '@/components/ui/LabeledInput';
import CustomSlider from '@/components/ui/CustomSlider';

export default function InvestmentClient() {
    const [initialDeposit, setInitialDeposit] = useState(10000);
    const [monthlyDeposit, setMonthlyDeposit] = useState(500);
    const [interestRate, setInterestRate] = useState(8);
    const [years, setYears] = useState(20);
    const [frequency,setFrequency]=useState(12);
    const [expenseRatio,setExpenseRatio]=useState(0);

    // Calculate growth
    const chartData = useMemo(() => {
        let balance = initialDeposit;
        let totalPrincipal = initialDeposit;
        const monthlyRate = Math.pow(Math.pow(1 + interestRate / 100 / frequency, frequency) * (1 - expenseRatio / 100), 1 / 12) - 1;

        const data = [];
        data.push({ year: 0, balance, principal: totalPrincipal, interest: 0 });

        for (let y = 1; y <= years; y++) {
            for (let m = 0; m < 12; m++) {
                balance = balance * (1 + monthlyRate) + monthlyDeposit;
                totalPrincipal += monthlyDeposit;
            }
            data.push({
                year: y,
                balance: Math.round(balance),
                principal: Math.round(totalPrincipal),
                interest: Math.round(balance - totalPrincipal)
            });
        }
        return data;
    }, [initialDeposit, monthlyDeposit, interestRate, years, frequency, expenseRatio]);

    const finalData = chartData[chartData.length - 1];

    const InputSection = (
        <div className="glass-card p-4 sm:p-6 space-y-6"><label htmlFor="compound-frequency">Compounding frequency<select id="compound-frequency" value={frequency} onChange={e=>setFrequency(+e.target.value)} className="input-field">{[[1,"Annual"],[4,"Quarterly"],[12,"Monthly"],[365,"Daily"]].map(([v,label])=><option key={v} value={v}>{label}</option>)}</select></label><label htmlFor="expense-ratio">Annual investment expense ratio (%)<input id="expense-ratio" type="number" min={0} max={10} step={.01} value={expenseRatio} onChange={e=>setExpenseRatio(Math.max(0,Math.min(10,+e.target.value)))} className="input-field" /></label><p className="text-xs">Nominal annual return compounded at the selected frequency; fees applied as annual percentage drag and contributions at month end. Not a forecast. Taxes and inflation excluded.</p>
            <div className="space-y-4">
                <LabeledInput
                    label="Initial Deposit"
                    prefix="$"
                    type="number"
                    value={initialDeposit}
                    onChange={(e) => setInitialDeposit(Number(e.target.value))}
                />
            </div>

            <div className="space-y-4">
                <LabeledInput
                    label="Monthly Deposit"
                    prefix="$"
                    type="number"
                    value={monthlyDeposit}
                    onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                />
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-4">
                <div className="flex justify-between items-center mb-2">
                    <LabeledInput
                        label="Interest Rate"
                        suffix="%"
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        step="0.1"
                        className="w-1/2"
                    />
                </div>
                <CustomSlider min={0} max={20} step={0.1} value={interestRate} onChange={setInterestRate} />
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-4">
                <div className="flex justify-between items-center mb-2">
                    <LabeledInput
                        label="Years to Grow"
                        suffix="Yrs"
                        type="number"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="w-1/2"
                    />
                </div>
                <CustomSlider min={1} max={50} value={years} onChange={setYears} />
            </div>
        </div>
    );

    const ResultsSection = (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="glass-panel p-4 sm:p-6 border-l-4 border-l-[#0da6f2]">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Total Future Value</p>
                    <p className="text-3xl sm:text-5xl font-black text-navy-900 tabular-nums">
                        ${finalData?.balance.toLocaleString('en-US')}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="glass-panel p-4 border-l-4 border-l-[#0a1628]">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Principal</p>
                        <p className="text-lg sm:text-xl font-bold text-navy-900">${finalData?.principal.toLocaleString('en-US')}</p>
                    </div>
                    <div className="glass-panel p-4 border-l-4 border-l-[#00C853]">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Interest Earned</p>
                        <p className="text-lg sm:text-2xl font-black text-[#00C853]">${finalData?.interest.toLocaleString('en-US')}</p>
                    </div>
                </div>
            </div>

            <div className="glass-card p-4 sm:p-6 h-[260px] sm:h-[340px]">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 text-gray-500">Balance History</h3>
                <InvestmentChart chartData={chartData} />
            </div>
        </div>
    );

    return (
        <CalculatorLayout
            title="Investment Growth Calculator"
            description="See how the power of compound interest multiplies your money over time. Compare your total deposits against the total interest earned."
            inputs={InputSection}
            results={ResultsSection}
        />
    );
}
