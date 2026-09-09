'use client';

import { useMemo, useState } from 'react';

export default function PmiRemovalClient() {
  const [originalValue, setOriginalValue] = useState(400000);
  const [balance, setBalance] = useState(330000);
  const [annualPmi, setAnnualPmi] = useState(2400);

  const result = useMemo(() => {
    const value = Math.max(0, originalValue);
    const owed = Math.max(0, balance);
    const target = value * 0.8;
    const ltv = value ? (owed / value) * 100 : 0;
    return { target, ltv, monthly: annualPmi > 0 ? annualPmi / 12 : 0, aboveTarget: Math.max(0, owed - target) };
  }, [originalValue, balance, annualPmi]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" aria-label="PMI removal calculator inputs">
      <div className="grid gap-5 md:grid-cols-3">
        <label className="text-sm font-semibold text-slate-700">Original home value
          <span className="mt-1 flex items-center rounded-lg border border-slate-300 bg-white px-3"><span>$</span><input className="w-full border-0 p-2 outline-none" type="number" min="0" value={originalValue} onChange={(e) => setOriginalValue(Number(e.target.value))} /></span>
        </label>
        <label className="text-sm font-semibold text-slate-700">Current loan balance
          <span className="mt-1 flex items-center rounded-lg border border-slate-300 bg-white px-3"><span>$</span><input className="w-full border-0 p-2 outline-none" type="number" min="0" value={balance} onChange={(e) => setBalance(Number(e.target.value))} /></span>
        </label>
        <label className="text-sm font-semibold text-slate-700">Annual PMI premium
          <span className="mt-1 flex items-center rounded-lg border border-slate-300 bg-white px-3"><span>$</span><input className="w-full border-0 p-2 outline-none" type="number" min="0" value={annualPmi} onChange={(e) => setAnnualPmi(Number(e.target.value))} /></span>
        </label>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs uppercase tracking-wide text-slate-500">Estimated LTV</p><p className="mt-1 text-2xl font-black text-slate-900">{result.ltv.toFixed(1)}%</p></div>
        <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs uppercase tracking-wide text-slate-500">80% target balance</p><p className="mt-1 text-2xl font-black text-slate-900">${result.target.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p></div>
        <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs uppercase tracking-wide text-slate-500">Current PMI estimate</p><p className="mt-1 text-2xl font-black text-slate-900">${result.monthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo</p></div>
      </div>
      <p className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950"><strong>Planning result:</strong> {result.ltv <= 80 ? 'Your balance is at or below 80% of the original value. Ask the servicer for its PMI-cancellation process and documentation.' : `About $${result.aboveTarget.toLocaleString(undefined, { maximumFractionDigits: 0 })} of principal remains above the 80% target. This is an estimate, not an automatic cancellation decision.`}</p>
    </section>
  );
}
