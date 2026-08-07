'use client';

import { useMemo, useState } from 'react';
import { AlertCircle, Home, Info, Scale } from 'lucide-react';
import { calcMonthlyPI, formatCurrency } from '@/lib/formulas';

function solveHomePrice({
    monthlyHousingBudget,
    downPayment,
    annualRate,
    termYears,
    propertyTaxRate,
    annualInsurance,
    monthlyHOA,
    monthlyMortgageInsurance,
}: {
    monthlyHousingBudget: number;
    downPayment: number;
    annualRate: number;
    termYears: number;
    propertyTaxRate: number;
    annualInsurance: number;
    monthlyHOA: number;
    monthlyMortgageInsurance: number;
}) {
    if (monthlyHousingBudget <= 0) return 0;

    const fixedMonthlyCosts = annualInsurance / 12 + monthlyHOA + monthlyMortgageInsurance;
    if (fixedMonthlyCosts >= monthlyHousingBudget) return 0;

    let low = Math.max(0, downPayment);
    let high = Math.max(1_000_000, downPayment + monthlyHousingBudget * termYears * 20);

    const monthlyCost = (homePrice: number) => {
        const loanAmount = Math.max(0, homePrice - downPayment);
        const principalAndInterest = loanAmount > 0 ? calcMonthlyPI(loanAmount, annualRate, termYears) : 0;
        const propertyTax = homePrice * (propertyTaxRate / 100) / 12;
        return principalAndInterest + propertyTax + fixedMonthlyCosts;
    };

    while (monthlyCost(high) < monthlyHousingBudget && high < 20_000_000) high *= 1.5;

    for (let i = 0; i < 80; i += 1) {
        const mid = (low + high) / 2;
        if (monthlyCost(mid) <= monthlyHousingBudget) low = mid;
        else high = mid;
    }

    return low;
}

export default function AffordabilityClient() {
    const [grossMonthlyIncome, setGrossMonthlyIncome] = useState(7500);
    const [monthlyDebts, setMonthlyDebts] = useState(500);
    const [downPayment, setDownPayment] = useState(50000);
    const [interestRate, setInterestRate] = useState(6.75);
    const [termYears, setTermYears] = useState(30);
    const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
    const [annualInsurance, setAnnualInsurance] = useState(1800);
    const [monthlyHOA, setMonthlyHOA] = useState(0);
    const [monthlyMortgageInsurance, setMonthlyMortgageInsurance] = useState(0);
    const [targetDTI, setTargetDTI] = useState(36);

    const result = useMemo(() => {
        const maxTotalDebt = grossMonthlyIncome * (targetDTI / 100);
        const monthlyHousingBudget = Math.max(0, maxTotalDebt - monthlyDebts);
        const homePrice = solveHomePrice({
            monthlyHousingBudget,
            downPayment,
            annualRate: interestRate,
            termYears,
            propertyTaxRate,
            annualInsurance,
            monthlyHOA,
            monthlyMortgageInsurance,
        });

        const loanAmount = Math.max(0, homePrice - downPayment);
        const principalAndInterest = loanAmount > 0 ? calcMonthlyPI(loanAmount, interestRate, termYears) : 0;
        const monthlyPropertyTax = homePrice * (propertyTaxRate / 100) / 12;
        const monthlyInsurance = annualInsurance / 12;
        const totalHousing = principalAndInterest + monthlyPropertyTax + monthlyInsurance + monthlyHOA + monthlyMortgageInsurance;
        const resultingDTI = grossMonthlyIncome > 0 ? ((totalHousing + monthlyDebts) / grossMonthlyIncome) * 100 : 0;

        return {
            homePrice,
            loanAmount,
            monthlyHousingBudget,
            principalAndInterest,
            monthlyPropertyTax,
            monthlyInsurance,
            totalHousing,
            resultingDTI,
        };
    }, [
        grossMonthlyIncome,
        monthlyDebts,
        downPayment,
        interestRate,
        termYears,
        propertyTaxRate,
        annualInsurance,
        monthlyHOA,
        monthlyMortgageInsurance,
        targetDTI,
    ]);

    return (
        <div className="relative bg-white text-navy-900 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 lg:pt-8">
                <header className="mb-8 sm:mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                            <Home className="text-indigo-500" size={24} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-indigo-500">Home Buying Planner</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">Home Affordability Calculator</h1>
                    <p className="text-gray-500 max-w-3xl text-sm sm:text-lg">
                        Estimate a home-price range from your income, monthly debts and housing-cost assumptions. Choose your own planning DTI target instead of treating one percentage as a universal mortgage-approval rule.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    <section className="lg:col-span-2 glass-card p-4 sm:p-6 space-y-5" aria-label="Affordability inputs">
                        <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-400">Your Planning Assumptions</h2>

                        <NumberInput label="Gross Monthly Income" prefix="$" value={grossMonthlyIncome} onChange={setGrossMonthlyIncome} step={500} />
                        <NumberInput label="Monthly Debt Payments" prefix="$" value={monthlyDebts} onChange={setMonthlyDebts} step={50} />
                        <NumberInput label="Down Payment" prefix="$" value={downPayment} onChange={setDownPayment} step={5000} />

                        <div className="grid grid-cols-2 gap-4">
                            <NumberInput label="Interest Rate" suffix="%" value={interestRate} onChange={setInterestRate} step={0.125} />
                            <div>
                                <label className="input-label">Loan Term</label>
                                <select className="glass-input" value={termYears} onChange={(event) => setTermYears(Number(event.target.value))}>
                                    <option value={15}>15 years</option>
                                    <option value={20}>20 years</option>
                                    <option value={30}>30 years</option>
                                </select>
                            </div>
                        </div>

                        <NumberInput label="Property Tax Rate" suffix="% / year" value={propertyTaxRate} onChange={setPropertyTaxRate} step={0.1} />
                        <NumberInput label="Homeowners Insurance" prefix="$" suffix="/ year" value={annualInsurance} onChange={setAnnualInsurance} step={100} />
                        <NumberInput label="HOA Dues" prefix="$" suffix="/ month" value={monthlyHOA} onChange={setMonthlyHOA} step={25} />
                        <NumberInput label="Mortgage Insurance Estimate" prefix="$" suffix="/ month" value={monthlyMortgageInsurance} onChange={setMonthlyMortgageInsurance} step={25} />

                        <div>
                            <div className="flex items-center justify-between gap-3 mb-2">
                                <label className="input-label mb-0">Planning DTI Target</label>
                                <span className="font-black text-indigo-600 tabular-nums">{targetDTI}%</span>
                            </div>
                            <input
                                aria-label="Planning DTI target"
                                type="range"
                                min={20}
                                max={50}
                                step={1}
                                value={targetDTI}
                                onChange={(event) => setTargetDTI(Number(event.target.value))}
                                className="w-full"
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                This is your scenario target, not a lender approval cutoff. Actual underwriting varies by lender, loan program and borrower profile.
                            </p>
                        </div>
                    </section>

                    <section className="lg:col-span-3 space-y-5" aria-label="Affordability estimate">
                        <div className="glass-card p-5 sm:p-8 border-indigo-500/20">
                            <div className="flex items-center gap-2 mb-3 text-indigo-600">
                                <Scale size={18} />
                                <p className="text-xs font-black uppercase tracking-[0.25em]">Estimated Home Price at Selected DTI</p>
                            </div>
                            <p className="text-4xl sm:text-6xl font-black tracking-tight tabular-nums">{formatCurrency(result.homePrice, 0)}</p>
                            <p className="text-sm text-gray-500 mt-3">
                                Estimated loan amount: <strong>{formatCurrency(result.loanAmount, 0)}</strong>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Metric label="Monthly Housing Budget" value={formatCurrency(result.monthlyHousingBudget)} />
                            <Metric label="Resulting Total DTI" value={`${result.resultingDTI.toFixed(1)}%`} />
                            <Metric label="Principal & Interest" value={formatCurrency(result.principalAndInterest)} />
                            <Metric label="Property Tax Estimate" value={formatCurrency(result.monthlyPropertyTax)} />
                            <Metric label="Homeowners Insurance" value={formatCurrency(result.monthlyInsurance)} />
                            <Metric label="Total Modeled Housing Cost" value={formatCurrency(result.totalHousing)} />
                        </div>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                            <div className="flex items-start gap-3">
                                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-bold mb-1">Planning estimate, not prequalification</p>
                                    <p>
                                        This model uses the costs you enter. It does not model every underwriting item, credit adjustment, reserve requirement, loan-program rule, closing cost or lender overlay. General Qualified Mortgage rules no longer use a universal 43% DTI maximum.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
                            <div className="flex items-start gap-3">
                                <Info size={18} className="mt-0.5 shrink-0" />
                                <p>
                                    For a stronger estimate, replace every default with a property-specific tax rate, an insurance quote, actual HOA dues, a realistic mortgage-insurance amount if applicable, and the interest rate you expect to receive.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function NumberInput({
    label,
    value,
    onChange,
    prefix,
    suffix,
    step = 1,
}: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    prefix?: string;
    suffix?: string;
    step?: number;
}) {
    return (
        <div>
            <label className="input-label">{label}</label>
            <div className="relative">
                {prefix ? <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">{prefix}</span> : null}
                <input
                    type="number"
                    min={0}
                    step={step}
                    value={Number.isFinite(value) ? value : 0}
                    onChange={(event) => onChange(Math.max(0, Number(event.target.value) || 0))}
                    className={`glass-input ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-20' : ''}`}
                />
                {suffix ? <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500">{suffix}</span> : null}
            </div>
        </div>
    );
}

function Metric({ label, value }: { label: string; value: string }) {
    return (
        <div className="glass-card p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{label}</p>
            <p className="text-2xl font-black tabular-nums">{value}</p>
        </div>
    );
}
