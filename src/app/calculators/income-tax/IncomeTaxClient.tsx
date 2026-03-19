'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from '@/components/ui/CalculatorLayout';
import LabeledInput from '@/components/ui/LabeledInput';
import SegmentedControl from '@/components/ui/SegmentedControl';

// Approximated 2026 Brackets (Post-TCJA Sunset assuming ~3-4% inflation adjustment from 2017 baseline)
const BRACKETS_2026 = {
    single: [
        { rate: 0.10, limit: 12500 },
        { rate: 0.15, limit: 50000 },
        { rate: 0.25, limit: 115000 },
        { rate: 0.28, limit: 250000 },
        { rate: 0.33, limit: 500000 },
        { rate: 0.35, limit: 550000 },
        { rate: 0.396, limit: Infinity },
    ],
    married: [
        { rate: 0.10, limit: 25000 },
        { rate: 0.15, limit: 100000 },
        { rate: 0.25, limit: 230000 },
        { rate: 0.28, limit: 350000 },
        { rate: 0.33, limit: 600000 },
        { rate: 0.35, limit: 650000 },
        { rate: 0.396, limit: Infinity },
    ],
    hoh: [
        { rate: 0.10, limit: 18000 },
        { rate: 0.15, limit: 70000 },
        { rate: 0.25, limit: 160000 },
        { rate: 0.28, limit: 280000 },
        { rate: 0.33, limit: 550000 },
        { rate: 0.35, limit: 600000 },
        { rate: 0.396, limit: Infinity },
    ]
};

// 2026 estimated standard deductions (reverting to pre-TCJA + inflation, eliminating the doubled standard deduction)
const DEDUCTIONS_2026 = {
    single: 8500,
    married: 17000,
    hoh: 12500
};

export default function IncomeTaxClient() {
    const [income, setIncome] = useState(100000);
    const [status, setStatus] = useState<keyof typeof BRACKETS_2026>('single');
    const [useItemized, setUseItemized] = useState('standard');
    const [itemizedAmount, setItemizedAmount] = useState(15000);

    const taxCalculation = useMemo(() => {
        const deduction = useItemized === 'itemized' ? itemizedAmount : DEDUCTIONS_2026[status];
        const taxableIncome = Math.max(0, income - deduction);
        
        let totalTax = 0;
        let prevLimit = 0;
        let marginalRate = 0;
        const brackets = BRACKETS_2026[status];

        for (const bracket of brackets) {
            if (taxableIncome > prevLimit) {
                const amountInBracket = Math.min(taxableIncome - prevLimit, bracket.limit - prevLimit);
                totalTax += amountInBracket * bracket.rate;
                marginalRate = bracket.rate;
                prevLimit = bracket.limit;
            } else {
                break;
            }
        }

        const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;
        
        // FICA Taxes (Social Security 6.2% up to limit, Medicare 1.45%)
        const ssLimit = 175000; // estimated 2026
        const ssTax = Math.min(income, ssLimit) * 0.062;
        const medicareTax = income * 0.0145;
        const additionalMedicare = income > 200000 ? (income - 200000) * 0.009 : 0;
        const totalFica = ssTax + medicareTax + additionalMedicare;

        const takeHomePay = income - totalTax - totalFica;

        return {
            taxableIncome,
            totalTax,
            marginalRate: marginalRate * 100,
            effectiveRate,
            totalFica,
            takeHomePay
        };
    }, [income, status, useItemized, itemizedAmount]);

    const InputSection = (
        <div className="glass-card p-6 sm:p-8 space-y-8">
            <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Gross Income</span>
                <LabeledInput
                    label=""
                    prefix="$"
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="text-xl"
                />
            </div>

            <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Filing Status</span>
                <SegmentedControl
                    options={[
                        { label: 'Single', value: 'single' },
                        { label: 'Married Joint', value: 'married' },
                        { label: 'Head of Household', value: 'hoh' },
                    ]}
                    selectedValue={status}
                    onChange={(val) => setStatus(val as keyof typeof BRACKETS_2026)}
                />
            </div>

            <div className="pt-6 border-t border-gray-200 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Deduction Type</span>
                <SegmentedControl
                    options={[
                        { label: `Standard ($${DEDUCTIONS_2026[status].toLocaleString()})`, value: 'standard' },
                        { label: 'Itemized', value: 'itemized' },
                    ]}
                    selectedValue={useItemized}
                    onChange={(val) => setUseItemized(val as string)}
                />

                {useItemized === 'itemized' && (
                    <div className="animate-fade-in">
                        <LabeledInput
                            label="Itemized Amount"
                            prefix="$"
                            type="number"
                            value={itemizedAmount}
                            onChange={(e) => setItemizedAmount(Number(e.target.value))}
                        />
                    </div>
                )}
            </div>
        </div>
    );

    const ResultsSection = (
        <div className="space-y-6">
            <div className="glass-panel p-8 border-l-4 border-l-[#00C853] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="text-8xl">💰</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Estimated Take-Home Pay</p>
                <p className="text-5xl sm:text-6xl font-black text-navy-900 tabular-nums tracking-tighter shadow-sm">
                    ${taxCalculation.takeHomePay.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
                <p className="text-sm font-medium text-gray-500 mt-2">After Federal & FICA taxes</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Estimated Federal Tax</p>
                    <p className="text-2xl font-black text-[#dc2626] tabular-nums">
                        ${taxCalculation.totalTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                </div>
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Estimated FICA</p>
                    <p className="text-2xl font-black text-[#dc2626] tabular-nums">
                        ${taxCalculation.totalFica.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Effective Tax Rate</p>
                    <p className="text-xl font-bold text-navy-900 tabular-nums">
                        {taxCalculation.effectiveRate.toFixed(1)}%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Percent of gross paid to Fed</p>
                </div>
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Marginal Tax Rate</p>
                    <p className="text-xl font-bold text-navy-900 tabular-nums">
                        {taxCalculation.marginalRate.toFixed(1)}%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Tax bracket you fall into</p>
                </div>
            </div>
            
            <div className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 text-yellow-800 text-xs font-medium">
                Note: This uses strictly estimated <strong>post-TCJA sunset 2026 brackets</strong> (reverting to 10%, 15%, 25%, 28%, 33%, 35%, 39.6%) and halves the standard deduction compared to 2025. Does not include state taxes.
            </div>
        </div>
    );

    return (
        <CalculatorLayout
            title="2026 Income Tax Estimator"
            description="See exactly how the expiration of the Tax Cuts and Jobs Act (TCJA) sunset will impact your federal income taxes and take-home pay in 2026."
            inputs={InputSection}
            results={ResultsSection}
        />
    );
}
