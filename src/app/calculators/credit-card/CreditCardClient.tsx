'use client';

import React, { useState, useMemo } from 'react';
import CreditCardChart from './CreditCardChart';
import CalculatorLayout from '@/components/ui/CalculatorLayout';
import { calcCardPayoff, formatCurrency } from '@/lib/formulas';
import Link from 'next/link';

import LabeledInput from '@/components/ui/LabeledInput';
import CustomSlider from '@/components/ui/CustomSlider';

export default function CreditCardClient() {
    const [balance, setBalance] = useState(5000);
    const [interestRate, setInterestRate] = useState(21.5);
    const [monthlyPayment, setMonthlyPayment] = useState(150);
    const [extra, setExtra] = useState(150);
    const [floor, setFloor] = useState(25);
    const [percent, setPercent] = useState(1);
    const { calculation, minimum, accelerated } = useMemo(() => {
        const minimumPayment = (b: number, interest: number) => Math.max(floor, b * percent / 100 + interest);
        return {
            calculation: calcCardPayoff(balance, interestRate, () => monthlyPayment),
            minimum: calcCardPayoff(balance, interestRate, minimumPayment),
            accelerated: calcCardPayoff(balance, interestRate, (b, i) => minimumPayment(b, i) + extra),
        };
    }, [balance, interestRate, monthlyPayment, extra, floor, percent]);
    const duration = (months: number) => `${Math.floor(months / 12)}y ${months % 12}m`;

    const InputSection = (
        <div className="glass-card p-4 sm:p-6 space-y-6">
            <LabeledInput
                label="Credit Card Balance"
                prefix="$"
                type="number"
                value={balance}
                onChange={(e) => setBalance(Math.max(0, Number(e.target.value)))}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <LabeledInput
                    label="Interest Rate (APR)"
                    suffix="%"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Math.max(0, Number(e.target.value)))}
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
                        onChange={(e) => setMonthlyPayment(Math.max(0, Number(e.target.value)))}
                        className="w-full sm:w-1/2"
                    />
                </div>
                <CustomSlider label="Monthly payment slider" min={0} max={Math.max(25, balance)} step={5} value={monthlyPayment} onChange={setMonthlyPayment} />
            </div>

            <h2 className="font-bold">Minimum payment comparison</h2>
            <div className="grid gap-3 sm:grid-cols-2">
                <LabeledInput label="Minimum payment floor ($)" type="number" value={floor} onChange={e => setFloor(Math.max(0, +e.target.value))} />
                <LabeledInput label="Percent of balance + interest (%)" type="number" value={percent} onChange={e => setPercent(Math.max(0, +e.target.value))} />
                <LabeledInput label="Extra above minimum each month ($)" type="number" value={extra} onChange={e => setExtra(Math.max(0, +e.target.value))} />
            </div>
            <p className="text-sm text-slate-600">The modeled minimum is the greater of the floor or the balance percentage plus interest. Use your issuer’s actual formula where it matches this structure. Assumes no new purchases, fees or APR changes.</p>
            {!calculation.paidOff && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-sm font-semibold">
                    Fixed payment does not pay off this balance within the model. Check that it exceeds monthly interest.
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
                        {calculation.paidOff ? duration(calculation.months) : 'Not paid off'}
                    </p>
                </div>
                <div className="glass-panel p-6 border-l-4 border-l-[#dc2626]">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Total Interest Paid</p>
                    <p className="text-4xl font-black text-[#dc2626] tabular-nums">
                        {calculation.paidOff ? formatCurrency(calculation.totalInterest) : '—'}
                    </p>
                </div>
            </div>

            <section className="glass-card p-5 space-y-3">
                <h2 className="text-lg font-bold">Minimum only vs. minimum plus extra</h2>
                <p>Minimum only: <strong>{minimum.paidOff ? `${duration(minimum.months)} · ${formatCurrency(minimum.totalInterest)} interest` : 'Not paid off in the model'}</strong></p>
                <p>Minimum plus extra: <strong>{accelerated.paidOff ? `${duration(accelerated.months)} · ${formatCurrency(accelerated.totalInterest)} interest` : 'Not paid off in the model'}</strong></p>
                {minimum.paidOff && accelerated.paidOff && <p><strong>{duration(minimum.months - accelerated.months)} sooner</strong> · {formatCurrency(minimum.totalInterest - accelerated.totalInterest)} interest saved</p>}
                <Link href="/calculators/debt-payoff" className="underline text-sky-700">Compare snowball and avalanche for multiple debts</Link>
            </section>
            {calculation.paidOff && calculation.data.length > 0 && (
                <div className="glass-card p-6 h-[400px]">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-500">Balance Drop Timeline</h3>
                    <CreditCardChart chartData={calculation.data} />
                </div>
            )}
        </div>
    );

    return (
        <CalculatorLayout
            title="Credit Card Debt Payoff Calculator"
            description="Find out how long it will take to pay off your credit card balance, and see how much interest you can save by increasing your monthly payment."
            inputs={InputSection}
            results={ResultsSection}
        />
    );
}
