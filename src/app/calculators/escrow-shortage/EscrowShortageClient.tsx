'use client';

import { useState } from 'react';

const dollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export default function EscrowShortageClient() {
  const [oldEscrow, setOldEscrow] = useState(450);
  const [tax, setTax] = useState(6000);
  const [insurance, setInsurance] = useState(1800);
  const [shortage, setShortage] = useState(1200);
  const [months, setMonths] = useState(12);
  const ongoing = (tax + insurance) / 12;
  const repayment = shortage / months;
  const fields = [
    ['Old monthly escrow', oldEscrow, setOldEscrow],
    ['New annual property tax', tax, setTax],
    ['New annual insurance', insurance, setInsurance],
    ['Escrow shortage on your notice', shortage, setShortage],
  ] as const;

  return (
    <section aria-label="Escrow shortage comparison" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map(([label, value, update]) => (
          <label key={label} className="text-sm font-semibold">
            {label} ($)
            <input className="mt-1 w-full rounded-lg border p-2" type="number" min="0" step="0.01" value={value}
              onChange={event => update(Math.max(0, Number(event.target.value) || 0))} />
          </label>
        ))}
        <label className="text-sm font-semibold">
          Repayment period from your notice
          <select className="mt-1 w-full rounded-lg border p-2" value={months} onChange={event => setMonths(Number(event.target.value))}>
            {[12, 18, 24, 36, 48, 60].map(term => <option key={term} value={term}>{term} months</option>)}
          </select>
        </label>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2" aria-live="polite">
        <div className="rounded-xl bg-slate-50 p-4">
          <h2 className="font-bold">Pay the shortage upfront</h2>
          <p className="mt-2 text-xl font-black">{dollars.format(shortage)} once</p>
          <p>{dollars.format(ongoing)}/mo estimated ongoing escrow, if the servicer accepts and applies the payment.</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <h2 className="font-bold">Spread the shortage over {months} months</h2>
          <p className="mt-2 text-xl font-black">{dollars.format(ongoing + repayment)}/mo</p>
          <p>Includes {dollars.format(repayment)}/mo in temporary shortage repayment.</p>
        </div>
        <p className="rounded-xl bg-blue-50 p-4 text-sm sm:col-span-2">
          Compared with your old escrow, the estimated monthly change is {dollars.format(ongoing - oldEscrow)} after upfront payment or after installments end, and {dollars.format(ongoing + repayment - oldEscrow)} while installments are active.
        </p>
      </div>
      <p className="mt-5 text-sm text-slate-700">Escrow only: add principal and interest and any other billed charges for the full mortgage payment. This model assumes taxes and insurance are the only ongoing escrow expenses. Your servicer sets the actual options and amounts.</p>
    </section>
  );
}
