'use client';
import { useState } from 'react';
export default function StudentDebtDecision() {
    const [rate,setRate]=useState(6.5),[deductible,setDeductible]=useState(0),[tax,setTax]=useState(22),[fee,setFee]=useState(.1),[investmentTax,setInvestmentTax]=useState(15);
    const avoided=rate*(1-deductible/100*tax/100);
    const gross=avoided/(1-investmentTax/100)+fee;
    return <section className="not-prose rounded-xl border bg-blue-50 p-5 my-8" aria-label="Student debt versus investing break-even estimator"><h2 className="text-xl font-bold mb-3">Compare an illustrative break-even return</h2><div className="grid sm:grid-cols-2 gap-3">{[
        {id:'debt-rate',label:'Student loan rate (%)',v:rate,set:setRate,max:40},
        {id:'deductible',label:'Share of interest actually deductible (%)',v:deductible,set:setDeductible,max:100},
        {id:'tax-rate',label:'Marginal tax rate on deductible interest (%)',v:tax,set:setTax,max:50},
        {id:'fund-fee',label:'Annual investment fee (%)',v:fee,set:setFee,max:10},
        {id:'investment-tax',label:'Illustrative tax drag on investment return (%)',v:investmentTax,set:setInvestmentTax,max:50},
    ].map(f=><label key={f.id} htmlFor={f.id} className="text-sm">{f.label}<input id={f.id} type="number" min={0} max={f.max} step={.1} value={f.v} onChange={e=>f.set(Math.max(0,Math.min(f.max,+e.target.value)))} className="block w-full rounded border p-2" /></label>)}</div><p className="mt-4 font-bold" aria-live="polite">Estimated after-tax debt cost: {avoided.toFixed(2)}%. Illustrative gross investment hurdle: {gross.toFixed(2)}%.</p><p className="text-sm mt-2">Approximation, not an investment forecast or tax calculation. Formula: debt rate × (1 − deductible share × marginal tax rate); hurdle = debt cost ÷ (1 − investment tax assumption) + fee. Tax deferral, capital-loss rules, forgiveness, contribution limits and employer match are not modeled. Investment returns can be negative.</p></section>;
}
