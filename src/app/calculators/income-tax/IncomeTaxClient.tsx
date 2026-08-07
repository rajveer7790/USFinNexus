'use client';

import React, { useMemo, useState } from 'react';
import CalculatorLayout from '@/components/ui/CalculatorLayout';
import LabeledInput from '@/components/ui/LabeledInput';
import SegmentedControl from '@/components/ui/SegmentedControl';

type FilingStatus = 'single' | 'married' | 'hoh';

// Official tax year 2026 federal income-tax thresholds from IRS Rev. Proc. 2025-32.
// Limits below are the upper bound of each bracket; the final bracket is unbounded.
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

// Official 2026 standard deductions from IRS Rev. Proc. 2025-32.
const DEDUCTIONS_2026: Record<FilingStatus, number> = {
    single: 16_100,
    married: 32_200,
    hoh: 24_150,
};

// Official 2026 Social Security taxable wage base from SSA.
const SOCIAL_SECURITY_WAGE_BASE_2026 = 184_500;

export default function IncomeTaxClient() {
    const [income, setIncome] = useState(100000);
    const [status, setStatus] = useState<FilingStatus>('single');
    const [useItemized, setUseItemized] = useState('standard');
    const [itemizedAmount, setItemizedAmount] = useState(15000);

    const taxCalculation = useMemo(() => {
        const grossIncome = Math.max(0, income);
        const deduction = useItemized === 'itemized'
            ? Math.max(0, itemizedAmount)
            : DEDUCTIONS_2026[status];
        const taxableIncome = Math.max(0, grossIncome - deduction);

        let totalTax = 0;
        let prevLimit = 0;
        let marginalRate = 0;

        for (const bracket of BRACKETS_2026[status]) {
            if (taxableIncome <= prevLimit) break;
            const amountInBracket = Math.min(taxableIncome, bracket.limit) - prevLimit;
            if (amountInBracket > 0) {
                totalTax += amountInBracket * bracket.rate;
                marginalRate = bracket.rate;
            }
            prevLimit = bracket.limit;
        }

        const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;

        // Employee-side FICA estimate. This calculator does not model self-employment tax,
        // credits, AMT, NIIT, pre-tax payroll deductions, or state/local taxes.
        const ssTax = Math.min(grossIncome, SOCIAL_SECURITY_WAGE_BASE_2026) * 0.062;
        const medicareTax = grossIncome * 0.0145;
        const additionalMedicareThreshold = status === 'married' ? 250_000 : 200_000;
        const additionalMedicare = Math.max(0, grossIncome - additionalMedicareThreshold) * 0.009;
        const totalFica = ssTax + medicareTax + additionalMedicare;
        const takeHomePay = Math.max(0, grossIncome - totalTax - totalFica);

        return { taxableIncome, totalTax, marginalRate: marginalRate * 100, effectiveRate, totalFica, takeHomePay };
    }, [income, status, useItemized, itemizedAmount]);

    const InputSection = (
        <div className="glass-card p-4 sm:p-6 space-y-5">
            <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Gross earned income</span>
                <LabeledInput label="" prefix="$" type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="text-xl" />
            </div>

            <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Filing status</span>
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
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Deduction type</span>
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
                        <LabeledInput label="Itemized amount" prefix="$" type="number" value={itemizedAmount} onChange={(e) => setItemizedAmount(Number(e.target.value))} />
                    </div>
                )}
            </div>
        </div>
    );

    const ResultsSection = (
        <div className="space-y-6">
            <div className="glass-panel p-4 sm:p-6 border-l-4 border-l-[#00C853] relative overflow-hidden">
                <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Estimated after federal income tax & employee FICA</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tabular-nums tracking-tighter">
                    ${taxCalculation.takeHomePay.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Federal income tax</p>
                    <p className="text-2xl font-black text-[#dc2626] tabular-nums">${taxCalculation.totalTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Employee FICA</p>
                    <p className="text-2xl font-black text-[#dc2626] tabular-nums">${taxCalculation.totalFica.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Effective federal rate</p>
                    <p className="text-xl font-bold text-navy-900 tabular-nums">{taxCalculation.effectiveRate.toFixed(1)}%</p>
                </div>
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Marginal federal rate</p>
                    <p className="text-xl font-bold text-navy-900 tabular-nums">{taxCalculation.marginalRate.toFixed(1)}%</p>
                </div>
            </div>

            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-900 text-xs font-medium space-y-1">
                <p><strong>Tax year 2026:</strong> IRS rates remain 10%, 12%, 22%, 24%, 32%, 35% and 37%. The 2026 standard deduction is $16,100 single, $32,200 married filing jointly and $24,150 head of household.</p>
                <p>This is an educational estimate, not a tax return. It excludes credits, AMT, investment taxes, most payroll adjustments, state/local tax and self-employment tax.</p>
            </div>
        </div>
    );

    return (
        <CalculatorLayout
            title="2026 Federal Income Tax Calculator"
            description="Estimate 2026 federal income tax using official IRS brackets and standard deductions, plus an employee-side FICA estimate using the 2026 Social Security wage base."
            inputs={InputSection}
            results={ResultsSection}
        />
    );
}
