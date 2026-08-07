'use client';

import { useMemo, useState } from 'react';
import CalculatorLayout from '@/components/ui/CalculatorLayout';
import LabeledInput from '@/components/ui/LabeledInput';
import SegmentedControl from '@/components/ui/SegmentedControl';

type FilingStatus = 'single' | 'married' | 'hoh';

type TaxBracket = {
    rate: number;
    limit: number;
};

// Tax year 2026 federal ordinary-income rate schedules.
// Source: IRS Revenue Procedure 2025-32 / IRS 2026 inflation adjustments.
const BRACKETS_2026: Record<FilingStatus, TaxBracket[]> = {
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

const STANDARD_DEDUCTION_2026: Record<FilingStatus, number> = {
    single: 16_100,
    married: 32_200,
    hoh: 24_150,
};

const SOCIAL_SECURITY_WAGE_BASE_2026 = 184_500;
const SOCIAL_SECURITY_EMPLOYEE_RATE = 0.062;
const MEDICARE_EMPLOYEE_RATE = 0.0145;
const ADDITIONAL_MEDICARE_RATE = 0.009;

function additionalMedicareThreshold(status: FilingStatus) {
    return status === 'married' ? 250_000 : 200_000;
}

function calculateProgressiveTax(taxableIncome: number, brackets: TaxBracket[]) {
    let totalTax = 0;
    let previousLimit = 0;
    let marginalRate = 0;

    for (const bracket of brackets) {
        if (taxableIncome <= previousLimit) break;
        const amountInBracket = Math.min(taxableIncome, bracket.limit) - previousLimit;
        totalTax += Math.max(0, amountInBracket) * bracket.rate;
        marginalRate = bracket.rate;
        previousLimit = bracket.limit;
    }

    return { totalTax, marginalRate };
}

export default function IncomeTaxClient() {
    const [wages, setWages] = useState(100000);
    const [status, setStatus] = useState<FilingStatus>('single');
    const [deductionType, setDeductionType] = useState<'standard' | 'itemized'>('standard');
    const [itemizedAmount, setItemizedAmount] = useState(20_000);

    const taxCalculation = useMemo(() => {
        const deduction = deductionType === 'itemized' ? Math.max(0, itemizedAmount) : STANDARD_DEDUCTION_2026[status];
        const taxableIncome = Math.max(0, wages - deduction);
        const { totalTax, marginalRate } = calculateProgressiveTax(taxableIncome, BRACKETS_2026[status]);

        const socialSecurityTax = Math.min(wages, SOCIAL_SECURITY_WAGE_BASE_2026) * SOCIAL_SECURITY_EMPLOYEE_RATE;
        const medicareTax = wages * MEDICARE_EMPLOYEE_RATE;
        const additionalThreshold = additionalMedicareThreshold(status);
        const additionalMedicareTax = Math.max(0, wages - additionalThreshold) * ADDITIONAL_MEDICARE_RATE;
        const employeePayrollTaxes = socialSecurityTax + medicareTax + additionalMedicareTax;

        const effectiveFederalIncomeTaxRate = wages > 0 ? (totalTax / wages) * 100 : 0;
        const estimatedAfterFederal = wages - totalTax - employeePayrollTaxes;

        return {
            deduction,
            taxableIncome,
            totalTax,
            marginalRate: marginalRate * 100,
            effectiveFederalIncomeTaxRate,
            socialSecurityTax,
            medicareTax,
            additionalMedicareTax,
            employeePayrollTaxes,
            estimatedAfterFederal,
        };
    }, [wages, status, deductionType, itemizedAmount]);

    const InputSection = (
        <div className="glass-card p-4 sm:p-6 space-y-5">
            <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">W-2 Wage Income</span>
                <LabeledInput
                    label=""
                    prefix="$"
                    type="number"
                    value={wages}
                    onChange={(event) => setWages(Math.max(0, Number(event.target.value) || 0))}
                    className="text-xl"
                />
                <p className="text-xs text-gray-500">This simplified model treats the input as employee wage income for payroll-tax estimates.</p>
            </div>

            <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">Filing Status</span>
                <SegmentedControl
                    options={[
                        { label: 'Single', value: 'single' },
                        { label: 'Married Joint', value: 'married' },
                        { label: 'Head of Household', value: 'hoh' },
                    ]}
                    selectedValue={status}
                    onChange={(value) => setStatus(value as FilingStatus)}
                />
            </div>

            <div className="pt-5 border-t border-gray-200 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">Deduction</span>
                <SegmentedControl
                    options={[
                        { label: `Standard ($${STANDARD_DEDUCTION_2026[status].toLocaleString('en-US')})`, value: 'standard' },
                        { label: 'Itemized', value: 'itemized' },
                    ]}
                    selectedValue={deductionType}
                    onChange={(value) => setDeductionType(value as 'standard' | 'itemized')}
                />

                {deductionType === 'itemized' ? (
                    <LabeledInput
                        label="Itemized Deduction Amount"
                        prefix="$"
                        type="number"
                        value={itemizedAmount}
                        onChange={(event) => setItemizedAmount(Math.max(0, Number(event.target.value) || 0))}
                    />
                ) : null}
            </div>
        </div>
    );

    const ResultsSection = (
        <div className="space-y-5">
            <div className="glass-panel p-4 sm:p-6 border-l-4 border-l-[#00C853]">
                <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Estimated After Federal Income & Employee Payroll Taxes</p>
                <p className="text-3xl sm:text-5xl font-black text-navy-900 tabular-nums tracking-tight">
                    ${taxCalculation.estimatedAfterFederal.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
                <p className="text-xs text-gray-500 mt-2">Before state/local taxes, benefits, credits and other payroll deductions.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ResultCard label="Taxable Income" value={taxCalculation.taxableIncome} />
                <ResultCard label="Federal Income Tax" value={taxCalculation.totalTax} negative />
                <ResultCard label="Employee Payroll Taxes" value={taxCalculation.employeePayrollTaxes} negative />
                <ResultCard label="Standard / Itemized Deduction" value={taxCalculation.deduction} />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Effective Federal Income Tax Rate</p>
                    <p className="text-xl font-black text-navy-900 tabular-nums">{taxCalculation.effectiveFederalIncomeTaxRate.toFixed(1)}%</p>
                </div>
                <div className="glass-card p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Marginal Federal Rate</p>
                    <p className="text-xl font-black text-navy-900 tabular-nums">{taxCalculation.marginalRate.toFixed(0)}%</p>
                </div>
            </div>

            <div className="glass-card p-5 text-sm text-gray-600 space-y-2">
                <p><strong>Social Security:</strong> ${taxCalculation.socialSecurityTax.toLocaleString('en-US', { maximumFractionDigits: 0 })} at 6.2% up to the 2026 wage base of $184,500.</p>
                <p><strong>Medicare:</strong> ${taxCalculation.medicareTax.toLocaleString('en-US', { maximumFractionDigits: 0 })} at 1.45% of modeled wages.</p>
                <p><strong>Additional Medicare Tax:</strong> ${taxCalculation.additionalMedicareTax.toLocaleString('en-US', { maximumFractionDigits: 0 })} at 0.9% above the applicable modeled filing-status threshold.</p>
            </div>

            <div className="p-4 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 text-xs leading-relaxed">
                <strong>Scope:</strong> This is a simplified tax-year 2026 estimate using ordinary-income brackets and the selected deduction. It does not model tax credits, preferential capital-gain rates, AMT, NIIT, self-employment tax, qualified business income, special 2025-2028 deductions, dependents, state/local tax or every Form 1040 rule. Use IRS forms/software or a qualified tax professional for filing.
            </div>
        </div>
    );

    return (
        <CalculatorLayout
            title="2026 Federal Income Tax Calculator"
            description="Estimate tax-year 2026 federal income tax using official IRS rate schedules, 2026 standard deductions and employee payroll-tax thresholds."
            inputs={InputSection}
            results={ResultsSection}
        />
    );
}

function ResultCard({ label, value, negative = false }: { label: string; value: number; negative?: boolean }) {
    return (
        <div className="glass-card p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{label}</p>
            <p className={`text-2xl font-black tabular-nums ${negative ? 'text-[#dc2626]' : 'text-navy-900'}`}>
                ${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </p>
        </div>
    );
}
