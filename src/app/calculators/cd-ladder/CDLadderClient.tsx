'use client';

import { useState } from 'react';
import { calculateCDLadder } from '@/lib/cd-ladder';
import { formatCurrency } from '@/lib/formulas';
import DisclaimerBanner from '@/components/DisclaimerBanner';

const initial = [6, 12, 36].map(months => ({ principal: 5000, apy: 4, months }));

export default function CDLadderClient() {
    const [rungs, setRungs] = useState(initial);
    let result;
    try {
        result = calculateCDLadder(rungs);
    } catch {
        result = null;
    }
    return (
        <section aria-label="CD ladder calculator" className="space-y-5">
            <div className="grid gap-4 md:grid-cols-3">
                {rungs.map((rung, index) => (
                    <fieldset key={index} className="glass-card space-y-3 p-4">
                        <legend className="px-2 font-bold">CD {index + 1}</legend>
                        {([
                            ['principal', 'Deposit ($)', 0, 1e7, 0.01],
                            ['apy', 'APY (%)', 0, 30, 0.01],
                            ['months', 'Term (months)', 1, 120, 1],
                        ] as const).map(([key, label, min, max, step]) => (
                            <label className="block text-sm font-semibold" key={key}>
                                {label}
                                <input className="glass-input mt-1 w-full" type="number" min={min} max={max} step={step}
                                    value={Number.isFinite(rung[key]) ? rung[key] : ''}
                                    onChange={event => {
                                        const value = event.currentTarget.valueAsNumber;
                                        setRungs(current => current.map((item, i) => i === index ? { ...item, [key]: value } : item));
                                    }} />
                            </label>
                        ))}
                    </fieldset>
                ))}
            </div>
            <div aria-live="polite" className="glass-card overflow-x-auto p-4">
                {result ? <>
                    <p className="mb-3 font-semibold">Total interest at scheduled maturities: {formatCurrency(result.interest)}</p>
                    <table className="w-full text-left text-sm">
                        <caption className="sr-only">Estimated CD maturity schedule</caption>
                        <thead><tr><th scope="col">Months</th><th scope="col">Deposit</th><th scope="col">APY</th><th scope="col">Interest</th><th scope="col">At maturity</th></tr></thead>
                        <tbody>{result.schedule.map((rung, index) => (
                            <tr className="border-t" key={index}><td>{rung.months}</td><td>{formatCurrency(rung.principal)}</td><td>{rung.apy}%</td><td>{formatCurrency(rung.interest)}</td><td>{formatCurrency(rung.maturity)}</td></tr>
                        ))}</tbody>
                    </table>
                </> : <p>Enter a valid deposit, APY, and whole-month term for each CD.</p>}
            </div>
            <DisclaimerBanner calculatorName="the CD Ladder Calculator" />
        </section>
    );
}
