'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Baby, DollarSign, TrendingUp, ShieldCheck } from 'lucide-react';

const money = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
});

function projectBalance(startingBalance: number, annualContribution: number, annualReturn: number, years: number) {
    const monthlyRate = annualReturn / 100 / 12;
    const monthlyContribution = annualContribution / 12;
    let balance = startingBalance;

    for (let month = 0; month < years * 12; month += 1) {
        balance = balance * (1 + monthlyRate) + monthlyContribution;
    }
    return balance;
}

export default function TrumpAccountCalculator() {
    const [age, setAge] = useState(0);
    const [seedEligible, setSeedEligible] = useState(true);
    const [familyContribution, setFamilyContribution] = useState(1000);
    const [employerContribution, setEmployerContribution] = useState(0);
    const [returnRate, setReturnRate] = useState(7);

    const annualContribution = Math.min(5000, Math.max(0, familyContribution + employerContribution));
    const contributionWarning = familyContribution + employerContribution > 5000;

    const projections = useMemo(() => {
        const startingBalance = seedEligible ? 1000 : 0;
        return [18, 28, 65].map((targetAge) => {
            const years = Math.max(0, targetAge - age);
            const balance = projectBalance(startingBalance, annualContribution, returnRate, years);
            const contributed = startingBalance + annualContribution * years;
            return {
                age: targetAge,
                years,
                balance,
                contributed,
                growth: Math.max(0, balance - contributed),
            };
        });
    }, [age, seedEligible, annualContribution, returnRate]);

    return (
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700"><Baby size={24} /></div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900">Account assumptions</h2>
                        <p className="text-sm text-slate-500">Adjust the inputs to model a child&apos;s potential balance.</p>
                    </div>
                </div>

                <div className="space-y-5">
                    <label className="block">
                        <span className="mb-2 block text-sm font-bold text-slate-700">Child&apos;s current age</span>
                        <input type="number" min="0" max="17" value={age}
                            onChange={(event) => setAge(Math.min(17, Math.max(0, Number(event.target.value))))}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100" />
                    </label>

                    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-4">
                        <span>
                            <span className="block text-sm font-bold text-slate-800">Eligible for the federal $1,000 pilot contribution</span>
                            <span className="mt-1 block text-xs text-slate-500">Generally for eligible U.S. citizen children born in 2025–2028.</span>
                        </span>
                        <input type="checkbox" checked={seedEligible} onChange={(event) => setSeedEligible(event.target.checked)}
                            className="h-5 w-5 rounded border-slate-300 text-blue-600" />
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-bold text-slate-700">Family contribution per year</span>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            <input type="number" min="0" max="5000" step="100" value={familyContribution}
                                onChange={(event) => setFamilyContribution(Math.max(0, Number(event.target.value)))}
                                className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100" />
                        </div>
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-bold text-slate-700">Employer contribution per year</span>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            <input type="number" min="0" max="2500" step="100" value={employerContribution}
                                onChange={(event) => setEmployerContribution(Math.max(0, Number(event.target.value)))}
                                className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <span className="mt-1 block text-xs text-slate-500">Employer contributions can receive separate tax treatment; ask your plan or tax professional.</span>
                    </label>

                    {contributionWarning && (
                        <p className="rounded-xl bg-amber-50 p-3 text-sm font-semibold text-amber-800">
                            The projection caps combined regular contributions at the 2026 $5,000 annual limit.
                        </p>
                    )}

                    <label className="block">
                        <span className="mb-2 flex items-center justify-between text-sm font-bold text-slate-700">
                            Assumed annual return <span>{returnRate.toFixed(1)}%</span>
                        </span>
                        <input type="range" min="0" max="12" step="0.5" value={returnRate}
                            onChange={(event) => setReturnRate(Number(event.target.value))}
                            className="w-full accent-blue-600" />
                    </label>
                </div>
            </div>

            <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl sm:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Growth projection</p>
                        <h2 className="mt-2 text-2xl font-black">What the account could become</h2>
                    </div>
                    <TrendingUp className="text-emerald-400" size={30} />
                </div>

                <div className="space-y-4">
                    {projections.map((projection, index) => (
                        <article key={projection.age} className={`rounded-2xl border p-5 ${index === 0 ? 'border-blue-400/50 bg-blue-500/10' : 'border-white/10 bg-white/5'}`}>
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-sm text-slate-300">Estimated balance at age {projection.age}</p>
                                    <p className="mt-1 text-3xl font-black text-white">{money.format(projection.balance)}</p>
                                </div>
                                <p className="text-right text-xs text-slate-400">{projection.years} years invested</p>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                                <div className="rounded-xl bg-black/20 p-3">
                                    <p className="text-slate-400">Contributions</p>
                                    <p className="font-bold">{money.format(projection.contributed)}</p>
                                </div>
                                <div className="rounded-xl bg-black/20 p-3">
                                    <p className="text-slate-400">Estimated growth</p>
                                    <p className="font-bold text-emerald-300">{money.format(projection.growth)}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-6 flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-300">
                    <ShieldCheck className="shrink-0 text-blue-300" size={20} />
                    <p>This is an educational estimate, not a guarantee. It assumes monthly compounding and even monthly contributions; actual returns, fees, taxes, eligibility, contribution categories and withdrawal rules can differ.</p>
                </div>
                <Link href="/blog/trump-accounts-2026-guide" className="mt-5 inline-flex font-bold text-blue-300 hover:text-blue-200">
                    Read the complete 2026 rules guide →
                </Link>
            </div>
        </section>
    );
}
