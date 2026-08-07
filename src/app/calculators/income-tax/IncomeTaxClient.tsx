'use client';

import React, { useMemo, useState } from 'react';
import CalculatorLayout from '@/components/ui/CalculatorLayout';
import LabeledInput from '@/components/ui/LabeledInput';
import SegmentedControl from '@/components/ui/SegmentedControl';

type FilingStatus = 'single' | 'married' | 'hoh';

// IRS tax year 2026 ordinary-income brackets.
// Source: IRS Revenue Procedure 2025-32.
const BRACKETS_2026: Record<FilingStatus, { rate: number; limit: number }[]> = {
    single: [
        { rate: 0.10, limit: 12_400 },
        { rate: 0.12, limit: 50_400 },
        { rate: 0.22, limit: 105_700 },
        { rate: 0.24, limit: 201_775 },
        { rate: 0.32, limit: 256_225 },
        { rate: 0.35, limit: 640_600 },
        { rate: 0.37, limit: Infinity },
    ],
    married: [
        { rate: 0.10, limit: 24_800 },
        { rate: 0.12, limit: 100_800 },
        { rate: 0.22, limit: 211_400 },
        { rate: 0.24, limit: 403_550 },
        { rate: 0.32, limit: 512_450 },
        { rate: 0.35, limit: 768_700 },
        { rate: 0.37, limit: Infinity },
    ],
    hoh: [
        { rate: 0.10, limit: 17_700 },
        { rate: 0.12, limit: 67_450 },
        { rate: 0.22, limit: 105_700 },
        { rate: 0.24, limit: 201_750 },
        { rate: 0.32, limit: 256_200 },
        { rate: 0.35, limit: 640_600 },
        { rate: 0.37, limit: Infinity },
    ],
};

// IRS tax year 2026 standard deductions, Rev. Proc. 2025-32.
const DEDUCTIONS_2026: Record<FilingStatus, number> = {
    single: 16_100,
    married: 32_200,
    hoh: 24_150,
};

// 2026 Social Security taxable wage base.
const SOCIAL_SECURITY_WAGE_BASE_2026 = 184_500;

// Additional Medicare Tax employee thresholds for filing statuses supported here.
const ADDITIONAL_MEDICARE_THRESHOLDS: Record<FilingStatus, number> = {
    single: 200_000,
    married: 250_000,
    hoh: 200_000,
};

export default function IncomeTaxClient() {
    const [income, setIncome] = useState(100_000);
    const [status, setStatus] = useState<FilingStatus>('single');
    const [useItemized, setUseItemized] = useState('standard');
    const [itemizedAmount, setItemizedAmount] = useState(15_000);

    const taxCalculation = useMemo(() => {
        const deduction = useItemized === 'itemized' ? itemizedAmount : DEDUCTIONS_2026[status];
        const taxableIncome = Math.max(0, income - Math.max(0, deduction));

        let totalTax = 0;
        let previousLimit = 0;
        let marginalRate = 0;

        for (const bracket of BRACKETS_2026[status]) {
            if (taxableIncome <= previousLimit) break;

            const upperLimit = bracket.limit;
            const amountInBracket = Math.min(taxableIncome, upperLimit) - previousLimit;
            if (amountInBracket > 0) {
                totalTax += amountInBracket * bracket.rate;
                marginalRate = bracket.rate;
            }
            previousLimit = upperLimit;
        }

        const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;

        // Employee-side payroll-tax estimate assuming the entered income is wages.
        const socialSecurityTax = Math.min(Math.max(0, income), SOCIAL_SECURITY_WAGE_BASE_2026) * 0.062;
        const medicareTax = Math.max(0, income) * 0.0145;
        const additionalMedicareThreshold = ADDITIONAL_MEDICARE_THRESHOLDS[status];
        const additionalMedicareTax = Math.max(0, income - additionalMedicareThreshold) * 0.009;
        const totalFica = socialSecurityTax + medicareTax + additionalMedicareTax;

        const takeHomePay = income - totalTax - totalFica;

        return {
            taxableIncome,
            totalTax,
            marginalRate: marginalRate * 100,
            effectiveRate,
            totalFica,
            takeHomePay,
        };
    }, [income, status, useItemized, itemizedAmount]);

    const InputSection = (
        <div className="glass-card p-4 sm:p-6 space-y-5">
            <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Gross Wage Income</span>
                <LabeledInput
                    label=""
                    prefix="$"
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Math.max(0, Number(e.target.value) || 0))}
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
                    onChange={(val) => setStatus(val as FilingStatus)}
                />
            </div>

            <div className="pt-6 border-t border-gray-200 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Deduction Type</span>
                <SegmentedControl
                    options={[
                        { label: `Standard ($${DEDUCTIONS_2026[status].toLocaleString('en-US')})`, value: 'standard' },
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
                            onChange={(e) => setItemizedAmount(Math.max(0, Number(e.target.value) || 0))}
                        />
                    </div>
                )}
            </div>
        </div>
    );

    const ResultsSection = (
        <div className="space-y-6">
            <div className="glass-panel p-4 sm:p-6 border-l-4 border-l-[#00C853] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="text-5xl sm:text-6xl">💰</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Estimated After-Tax Wage Income</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tabular-nums tracking-tighter shadow-sm">
                    ${taxCalculation.takeHomePay.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
                <p className="text-sm font-medium text-gray-500 mt-2">After estimated federal income tax and employee payroll taxes</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Estimated Federal Tax</p>
                    <p className="text-2xl font-black text-[#dc2626] tabular-nums">
                        ${taxCalculation.totalTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </p>
                </div>
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Estimated Payroll Tax</p>
                    <p className="text-2xl font-black text-[#dc2626] tabular-nums">
                        ${taxCalculation.totalFica.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Effective Federal Rate</p>
                    <p className="text-xl font-bold text-navy-900 tabular-nums">
                        {taxCalculation.effectiveRate.toFixed(1)}%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Federal income tax as a share of gross wage income</p>
                </div>
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Marginal Tax Rate</p>
                    <p className="text-xl font-bold text-navy-900 tabular-nums">
                        {taxCalculation.marginalRate.toFixed(1)}%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Top ordinary-income bracket reached</p>
                </div>
            </div>

            <div className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 text-yellow-800 text-xs font-medium">
                Uses IRS tax-year 2026 ordinary-income brackets and standard deductions from Revenue Procedure 2025-32. This is an educational estimate, not a tax return. It excludes credits, many adjustments, AMT, NIIT, self-employment tax, and state or local taxes. Payroll-tax estimates assume the entered income is employee wage income.
            </div>
        </div>
    );

    return (
        <CalculatorLayout
            title="2026 Federal Income Tax Calculator"
            description="Estimate 2026 federal income tax and employee payroll taxes using the IRS 2026 ordinary-income brackets and standard deductions."
            inputs={InputSection}
            results={ResultsSection}
        />
    );
}
