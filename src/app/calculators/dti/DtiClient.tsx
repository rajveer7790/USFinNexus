'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle, Percent } from 'lucide-react';

export default function DtiClient() {
    const [grossIncome, setGrossIncome] = useState(8000);
    const [monthlyDebt, setMonthlyDebt] = useState(1200);

    const dti = grossIncome > 0 ? (monthlyDebt / grossIncome) * 100 : 0;

    const status = dti < 20
        ? { label: 'Low Debt Load', tone: 'text-emerald-600', icon: CheckCircle }
        : dti < 36
            ? { label: 'Moderate Debt Load', tone: 'text-blue-600', icon: CheckCircle }
            : dti < 43
                ? { label: 'Elevated Debt Load', tone: 'text-amber-600', icon: AlertCircle }
                : { label: 'High Debt Load', tone: 'text-rose-600', icon: AlertCircle };

    const StatusIcon = status.icon;

    return (
        <div className="relative bg-white text-navy-900 pb-16">
            <div className="max-w-3xl mx-auto px-4 pt-5 sm:pt-7 lg:pt-8 pb-8 sm:pb-12">
                <header className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-[#0da6f2]/10 border border-[#0da6f2]/20">
                            <Percent className="text-[#0da6f2]" size={22} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#0da6f2]">Debt Analysis</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">Debt-to-Income Ratio Calculator</h1>
                    <p className="text-gray-500 text-base sm:text-lg">
                        Calculate monthly debt payments as a percentage of gross monthly income. Use the ratio as a planning metric, not as a guaranteed mortgage-approval result.
                    </p>
                </header>

                <div className="space-y-5">
                    <div className="glass-card p-5 sm:p-7 space-y-5">
                        <div>
                            <label className="input-label">Gross Monthly Income (Before Taxes)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                <input
                                    type="number"
                                    min={0}
                                    step={100}
                                    value={grossIncome || ''}
                                    onChange={(event) => setGrossIncome(Math.max(0, Number(event.target.value) || 0))}
                                    className="glass-input pl-8"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="input-label">Recurring Monthly Debt Payments</label>
                            <p className="text-xs text-gray-500 mb-2">Use the monthly obligations relevant to the ratio you are planning, such as auto, student, personal-loan and credit-card minimum payments.</p>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                <input
                                    type="number"
                                    min={0}
                                    step={50}
                                    value={monthlyDebt || ''}
                                    onChange={(event) => setMonthlyDebt(Math.max(0, Number(event.target.value) || 0))}
                                    className="glass-input pl-8"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 sm:p-8 text-center">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-5 ${status.tone}`}>
                            <StatusIcon size={14} /> {status.label}
                        </div>
                        <p className={`text-5xl sm:text-7xl font-black tracking-tight tabular-nums ${status.tone}`}>{dti.toFixed(1)}%</p>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mt-2">Calculated DTI</p>
                        <p className="text-sm text-gray-500 mt-5 max-w-xl mx-auto">
                            DTI is one underwriting factor. Higher debt loads generally leave less room for a new payment, but acceptable ratios vary by lender, mortgage program and the rest of the borrower profile.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                        <div className="flex items-start gap-3">
                            <AlertCircle size={18} className="mt-0.5 shrink-0" />
                            <div>
                                <p className="font-bold mb-1">Important mortgage-rule update</p>
                                <p>
                                    The CFPB removed the former fixed 43% DTI limit from the General Qualified Mortgage definition. Do not treat 43% as a universal current General QM maximum. Lenders and specific loan programs can still use DTI thresholds in underwriting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
