'use client';
import { useMemo,useState } from 'react';
import { calcMonthlyPI,calcAmortization,formatCurrency } from '@/lib/formulas';

export default function PayoffClient(){
    const [balance,setBalance]=useState(300000),[rate,setRate]=useState(6.5),[months,setMonths]=useState(300),[extra,setExtra]=useState(250),[annual,setAnnual]=useState(0),[lump,setLump]=useState(0);
    const result=useMemo(()=>{
        const initial={homePrice:balance,downPayment:0,annualInterestRate:rate,loanTermYears:months/12,annualPropertyTax:0,annualInsurance:0,monthlyHOA:0,pmiRate:0,startDate:new Date('2026-10-24T12:00:00Z')};
        const base=calcAmortization(initial), payment=calcMonthlyPI(balance,rate,months/12);
        // Keep the original required P&I after the immediate principal payment; this is not a recast.
        let remaining=Math.max(0,balance-lump),interest=0,n=0;
        while(remaining>.005&&n<months){const charge=remaining*rate/1200;n++;remaining=Math.max(0,remaining+charge-payment-extra-(n%12===0?annual:0));interest+=charge;}
        return {payment,months:n,interest,interestSaved:Math.max(0,base.reduce((s,r)=>s+r.interest,0)-interest),monthsSaved:Math.max(0,base.length-n)};
    },[balance,rate,months,extra,annual,lump]);
    return <section className="mb-8"><h1 className="text-3xl font-bold mb-4">Mortgage Payoff Calculator</h1><p className="mb-5"><strong>Quick answer:</strong> Enter your current principal balance and remaining months. Extra monthly, annual and immediate one-time principal reduce interest while the original required P&amp;I payment stays unchanged.</p><div className="grid md:grid-cols-2 gap-6"><div className="rounded-xl border p-5 space-y-4">{[
        {id:'payoff-balance',label:'Current principal balance ($)',v:balance,set:setBalance,max:10000000,min:1},
        {id:'payoff-rate',label:'Note rate (%)',v:rate,set:setRate,max:30,min:0},
        {id:'payoff-months',label:'Remaining term (months)',v:months,set:setMonths,max:600,min:1},
        {id:'payoff-extra',label:'Extra monthly principal ($)',v:extra,set:setExtra,max:10000000,min:0},
        {id:'payoff-annual',label:'Extra annual principal, month 12 ($)',v:annual,set:setAnnual,max:10000000,min:0},
        {id:'payoff-lump',label:'One-time principal payment now ($)',v:lump,set:setLump,max:balance,min:0},
    ].map(f=><label key={f.id} htmlFor={f.id} className="block text-sm font-semibold">{f.label}<input id={f.id} type="number" min={f.min} max={f.max} step={f.id==='payoff-rate'?.125:1} value={f.v} onChange={e=>f.set(Math.max(f.min,Math.min(f.max,+e.target.value)))} className="input-field mt-1" /></label>)}</div><div className="rounded-xl border bg-blue-50 p-5" aria-live="polite"><h2 className="text-xl font-bold">Estimated payoff result</h2><dl className="space-y-3 mt-4"><div><dt>Original required monthly P&amp;I</dt><dd className="font-bold">{formatCurrency(result.payment)}</dd></div><div><dt>Remaining payments with extra principal</dt><dd className="font-bold">{result.months} months</dd></div><div><dt>Time saved</dt><dd className="font-bold">{result.monthsSaved} months</dd></div><div><dt>Interest saved</dt><dd className="font-bold">{formatCurrency(result.interestSaved)}</dd></div></dl><p className="text-sm mt-5">Monthly accrual approximation; taxes, insurance, penalties, interest deductions and investment alternatives excluded. No recast is assumed. Ask the servicer how to designate extra principal and request a dated payoff statement before paying the loan in full.</p><p className="text-sm mt-3"><a href="/disclaimer" className="underline">Calculator limitations</a></p></div></div></section>;
}
