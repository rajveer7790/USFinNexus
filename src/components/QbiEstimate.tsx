'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatCurrency } from '@/lib/formulas';

export default function QbiEstimate() {
    const [joint, setJoint] = useState(false);
    const [qbi, setQbi] = useState('50000');
    const [taxable, setTaxable] = useState('60000');
    const [gains, setGains] = useState('0');
    const limit = joint ? 403500 : 201750;
    const valid = [qbi, taxable, gains].every(value => value.trim() && Number.isFinite(Number(value)) && Number(value) >= 0)
        && Number(taxable) <= limit && Number(gains) <= Number(taxable);
    const result = Math.min(Number(qbi), Number(taxable) - Number(gains)) * 0.2;
    return <section aria-labelledby="qbi-example" className="not-prose glass-card my-6 space-y-3 p-5">
        <h2 id="qbi-example" className="text-xl font-bold">2026 QBI deduction illustration below the threshold</h2>
        <label className="flex gap-2"><input type="checkbox" checked={joint} onChange={event => setJoint(event.target.checked)} /> Married filing jointly</label>
        <div className="grid gap-3 md:grid-cols-3">
            {([
                ['Qualified business income', qbi, setQbi],
                ['Taxable income before QBI deduction', taxable, setTaxable],
                ['Net capital gain, including qualified dividends', gains, setGains],
            ] as const).map(([label, value, setter]) =>
                <label className="block text-sm font-medium" key={label}>{label}
                    <input className="glass-input mt-1 w-full" type="number" min={0} value={value} onChange={event => setter(event.target.value)} />
                </label>
            )}
        </div>
        <p aria-live="polite" className="font-semibold">{valid ? `Regular 20% calculation: ${formatCurrency(result)}` : `Enter valid amounts with taxable income at or below ${formatCurrency(limit)}.`}</p>
        <p className="text-sm">The example uses the lesser of 20% of QBI or 20% of taxable income after net capital gain. It excludes the separate minimum-deduction rule, carryovers, REIT/PTP items, and above-threshold limitations. It does not establish eligibility or compute tax savings.</p>
        <Link className="underline" href="/calculators/income-tax">Review federal income-tax brackets</Link>
    </section>;
}
