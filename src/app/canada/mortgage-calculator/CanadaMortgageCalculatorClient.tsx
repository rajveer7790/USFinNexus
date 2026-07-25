'use client';

import { useMemo, useState } from 'react';
import { Calculator, CheckCircle2, Home, Info, ShieldCheck } from 'lucide-react';

const cad = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
});

function minimumDownPayment(price: number) {
    if (price >= 1_500_000) return price * 0.2;
    if (price <= 500_000) return price * 0.05;
    return 25_000 + (price - 500_000) * 0.1;
}

function insuranceRate(loanToValue: number) {
    if (loanToValue <= 0.8) return 0;
    if (loanToValue <= 0.85) return 0.028;
    if (loanToValue <= 0.9) return 0.031;
    return 0.04;
}

// Canadian fixed-rate mortgages quote a nominal annual rate compounded semi-annually.
function monthlyPayment(principal: number, annualRate: number, years: number) {
    const monthlyRate = Math.pow(1 + annualRate / 200, 1 / 6) - 1;
    const payments = years * 12;
    if (monthlyRate === 0) return principal / payments;
    return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -payments));
}

export default function CanadaMortgageCalculatorClient() {
    const [price, setPrice] = useState(750_000);
    const [downPayment, setDownPayment] = useState(50_000);
    const [rate, setRate] = useState(4.7);
    const [amortization, setAmortization] = useState(25);
    const [annualTax, setAnnualTax] = useState(4_500);
    const [monthlyHeat, setMonthlyHeat] = useState(150);
    const [condoFees, setCondoFees] = useState(0);
    const [grossIncome, setGrossIncome] = useState(130_000);
    const [monthlyDebt, setMonthlyDebt] = useState(500);

    const result = useMemo(() => {
        const safePrice = Math.max(0, price);
        const minimum = minimumDownPayment(safePrice);
        const validDownPayment = Math.min(Math.max(0, downPayment), safePrice);
        const baseLoan = Math.max(0, safePrice - validDownPayment);
        const ltv = safePrice > 0 ? baseLoan / safePrice : 0;
        const premiumRate = safePrice < 1_500_000 ? insuranceRate(ltv) : 0;
        const insurance = baseLoan * premiumRate;
        const insuredLoan = baseLoan + insurance;
        const payment = monthlyPayment(insuredLoan, Math.max(0, rate), amortization);
        const qualifyingRate = Math.max(5.25, Math.max(0, rate) + 2);
        const qualifyingPayment = monthlyPayment(insuredLoan, qualifyingRate, amortization);
        const housingCosts = qualifyingPayment + annualTax / 12 + monthlyHeat + condoFees * 0.5;
        const monthlyIncome = grossIncome / 12;
        const gds = monthlyIncome > 0 ? housingCosts / monthlyIncome * 100 : 0;
        const tds = monthlyIncome > 0 ? (housingCosts + monthlyDebt) / monthlyIncome * 100 : 0;
        const downPaymentValid = validDownPayment >= minimum;

        return {
            minimum,
            baseLoan,
            ltv,
            premiumRate,
            insurance,
            insuredLoan,
            payment,
            qualifyingRate,
            qualifyingPayment,
            gds,
            tds,
            downPaymentValid,
        };
    }, [price, downPayment, rate, amortization, annualTax, monthlyHeat, condoFees, grossIncome, monthlyDebt]);

    const inputClass = 'mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100';

    return (
        <section className="py-8">
            <div className="mb-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
                    <span aria-hidden="true">🇨🇦</span> Canada finance tool
                </span>
                <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    Canadian Mortgage Calculator
                </h1>
                <p className="mt-3 max-w-3xl text-gray-600">
                    Estimate your payment in Canadian dollars, minimum down payment, mortgage-default insurance and federal stress-test payment.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                    <h2 className="flex items-center gap-2 text-lg font-black text-slate-900">
                        <Home size={19} className="text-red-600" /> Property and mortgage
                    </h2>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Home price (CAD)
                            <input className={inputClass} type="number" min="0" step="5000" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                        </label>
                        <label className="text-sm font-semibold text-gray-700">
                            Down payment (CAD)
                            <input className={inputClass} type="number" min="0" step="1000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />
                        </label>
                        <label className="text-sm font-semibold text-gray-700">
                            Contract rate (%)
                            <input className={inputClass} type="number" min="0" max="25" step="0.05" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
                        </label>
                        <label className="text-sm font-semibold text-gray-700">
                            Amortization
                            <select className={inputClass} value={amortization} onChange={(e) => setAmortization(Number(e.target.value))}>
                                <option value={25}>25 years</option>
                                <option value={30}>30 years</option>
                            </select>
                        </label>
                    </div>

                    <h2 className="mt-7 flex items-center gap-2 text-lg font-black text-slate-900">
                        <Calculator size={19} className="text-red-600" /> Qualification inputs
                    </h2>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Gross household income/year
                            <input className={inputClass} type="number" min="0" step="1000" value={grossIncome} onChange={(e) => setGrossIncome(Number(e.target.value))} />
                        </label>
                        <label className="text-sm font-semibold text-gray-700">
                            Other monthly debt
                            <input className={inputClass} type="number" min="0" step="50" value={monthlyDebt} onChange={(e) => setMonthlyDebt(Number(e.target.value))} />
                        </label>
                        <label className="text-sm font-semibold text-gray-700">
                            Property tax/year
                            <input className={inputClass} type="number" min="0" step="100" value={annualTax} onChange={(e) => setAnnualTax(Number(e.target.value))} />
                        </label>
                        <label className="text-sm font-semibold text-gray-700">
                            Heating/month
                            <input className={inputClass} type="number" min="0" step="10" value={monthlyHeat} onChange={(e) => setMonthlyHeat(Number(e.target.value))} />
                        </label>
                        <label className="text-sm font-semibold text-gray-700 sm:col-span-2">
                            Condo fees/month (50% included in ratios)
                            <input className={inputClass} type="number" min="0" step="25" value={condoFees} onChange={(e) => setCondoFees(Number(e.target.value))} />
                        </label>
                    </div>
                </div>

                <div className="space-y-5">
                    {!result.downPaymentValid && (
                        <div role="alert" className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
                            Minimum down payment for this price is <strong>{cad.format(result.minimum)}</strong>. Increase the down payment to produce an eligible insured-mortgage estimate.
                        </div>
                    )}

                    <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-xl">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Estimated monthly payment</p>
                        <p className="mt-2 text-4xl font-black">{cad.format(result.payment)}</p>
                        <p className="mt-2 text-sm text-slate-300">Principal and interest · Canadian semi-annual compounding</p>
                        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                            <div>
                                <p className="text-xs text-slate-400">Total mortgage</p>
                                <p className="mt-1 font-bold">{cad.format(result.insuredLoan)}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Insurance premium</p>
                                <p className="mt-1 font-bold">{cad.format(result.insurance)} ({(result.premiumRate * 100).toFixed(2)}%)</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Down payment required</p>
                                <p className="mt-1 font-bold">{cad.format(result.minimum)}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Loan-to-value</p>
                                <p className="mt-1 font-bold">{(result.ltv * 100).toFixed(1)}%</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="mt-0.5 shrink-0 text-red-700" size={22} />
                            <div>
                                <h2 className="font-black text-slate-900">Federal stress-test estimate</h2>
                                <p className="mt-1 text-sm text-gray-600">Qualification rate: <strong>{result.qualifyingRate.toFixed(2)}%</strong></p>
                            </div>
                        </div>
                        <p className="mt-4 text-3xl font-black text-slate-950">{cad.format(result.qualifyingPayment)}<span className="text-base font-semibold text-gray-500">/mo</span></p>
                        <div className="mt-5 grid grid-cols-2 gap-3">
                            <RatioCard label="GDS estimate" value={result.gds} target="Common benchmark: 39%" />
                            <RatioCard label="TDS estimate" value={result.tds} target="Common benchmark: 44%" />
                        </div>
                    </div>

                    <div className="flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
                        <Info size={18} className="mt-0.5 shrink-0" />
                        <p>This is an educational estimate, not a lender approval. Provincial sales tax on an insurance premium, closing costs and lender-specific underwriting are not included.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RatioCard({ label, value, target }: { label: string; value: number; target: string }) {
    const looksWithinBenchmark = value > 0 && value <= (label.startsWith('GDS') ? 39 : 44);
    return (
        <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-gray-500">{label}</p>
            <p className="mt-1 flex items-center gap-1.5 text-2xl font-black text-slate-900">
                {value.toFixed(1)}%
                {looksWithinBenchmark && <CheckCircle2 size={16} className="text-emerald-600" aria-label="Within common benchmark" />}
            </p>
            <p className="mt-1 text-[11px] text-gray-500">{target}</p>
        </div>
    );
}
