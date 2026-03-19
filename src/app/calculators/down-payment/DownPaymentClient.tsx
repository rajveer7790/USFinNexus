'use client';

import { useState } from 'react';
import { Shield, Target, CheckCircle } from 'lucide-react';
import { formatCurrency } from '@/lib/formulas';

export default function DownPaymentClient() {
    const [homePrice, setHomePrice] = useState(400000);
    const [downPct, setDownPct] = useState(20);
    const [monthlySavings, setMonthlySavings] = useState(1000);
    const [currentSavings, setCurrentSavings] = useState(5000);

    const targetDownPayment = (homePrice * downPct) / 100;
    const remainingToSave = Math.max(0, targetDownPayment - currentSavings);
    const monthsToSave = monthlySavings > 0 ? Math.ceil(remainingToSave / monthlySavings) : 0;
    const years = Math.floor(monthsToSave / 12);
    const months = monthsToSave % 12;
    const progressPct = Math.min(100, (currentSavings / targetDownPayment) * 100) || 0;

    return (
        <div className="relative min-h-screen bg-white text-navy-900 pb-20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0da6f2]/8 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 relative z-10">
                <div className="mb-6 sm:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                            <Target className="text-emerald-500" size={22} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Savings Goal</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-navy-900 via-emerald-500 to-navy-900 bg-clip-text text-transparent">
                        Down Payment Goal
                    </h1>
                    <p className="text-gray-500 font-medium text-lg">
                        See how long it will take to save for your dream home.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Inputs */}
                    <div className="glass-card p-5 sm:p-10 space-y-6">
                        <div>
                            <label className="input-label">Target Home Price</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-emerald-500 transition-colors">$</span>
                                <input type="number" value={homePrice || ''} onChange={(e) => setHomePrice(Number(e.target.value))} className="glass-input pl-8" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-3">
                                <label className="input-label mb-0">Down Payment %</label>
                                <span className="text-sm font-black text-emerald-500">{formatCurrency(targetDownPayment)}</span>
                            </div>
                            <div className="relative group mb-3">
                                <input type="number" value={downPct || ''} onChange={(e) => setDownPct(Number(e.target.value))} className="glass-input pr-8" />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-emerald-500 transition-colors">%</span>
                            </div>
                            <div className="glass-tab-list p-1 flex gap-1">
                                {[3.5, 5, 10, 20].map((pct) => (
                                    <button key={pct} onClick={() => setDownPct(pct)}
                                        className={`flex-1 py-2.5 rounded-lg text-xs font-black transition-all ${downPct === pct ? 'bg-emerald-500 text-white' : 'text-gray-500 hover:bg-white/5'}`}>
                                        {pct}%
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="input-label">Current Savings Dedicated to House</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-emerald-500 transition-colors">$</span>
                                <input type="number" value={currentSavings || ''} onChange={(e) => setCurrentSavings(Number(e.target.value))} className="glass-input pl-8" />
                            </div>
                        </div>

                        <div>
                            <label className="input-label">Monthly Contributions</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-base font-semibold text-gray-500 group-focus-within:text-emerald-500 transition-colors">$</span>
                                <input type="number" value={monthlySavings || ''} onChange={(e) => setMonthlySavings(Number(e.target.value))} className="glass-input pl-8" />
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-6">
                        <div className="glass-card p-5 sm:p-10 flex flex-col justify-center min-h-[240px] sm:min-h-[260px]">
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8 text-center">Time to Reach Your Goal</h3>
                            {remainingToSave <= 0 ? (
                                <div className="text-center">
                                    <span className="text-6xl block mb-4">🎉</span>
                                    <h4 className="text-2xl font-black text-emerald-500 mb-3">You hit your goal!</h4>
                                    <p className="text-gray-500 font-medium">
                                        You have enough saved for a {downPct}% down payment on a {formatCurrency(homePrice)} home.
                                    </p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="text-4xl sm:text-6xl font-black mb-2 tabular-nums tracking-tighter">
                                        {years > 0 && <span>{years} <span className="text-3xl text-gray-400 font-bold">yrs </span></span>}
                                        <span>{months} <span className="text-3xl text-gray-400 font-bold">mo</span></span>
                                    </div>
                                    <p className="text-gray-500 mt-4 font-medium">
                                        Still need to save:<br/>
                                        <strong className="text-[#0da6f2] text-xl">{formatCurrency(remainingToSave)}</strong>
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Progress Bar */}
                        <div className="glass-card p-8">
                            <div className="flex justify-between text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                                <span>Progress</span>
                                <span className="text-emerald-500">{progressPct.toFixed(1)}%</span>
                            </div>
                            <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-700"
                                    style={{ width: `${progressPct}%` }}
                                />
                            </div>
                            <div className="flex justify-between text-xs font-black text-gray-500 mt-3">
                                <span>{formatCurrency(currentSavings)}</span>
                                <span>{formatCurrency(targetDownPayment)}</span>
                            </div>
                        </div>

                        <div className="glass-panel p-5 border-[#0da6f2]/20 bg-[#0da6f2]/5">
                            <div className="flex gap-3">
                                <Shield className="flex-shrink-0 text-[#0da6f2]" size={18} />
                                <p className="text-sm font-medium text-gray-600">
                                    Remember closing costs (2–5% of home price) and emergency reserves, typically 3–6 months expenses.
                                </p>
                            </div>
                        </div>

                        {/* Milestone Reference */}
                        <div className="glass-card p-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-5">Down Payment Milestones</h4>
                            <div className="space-y-3">
                                {[
                                    { pct: '3.5%', label: 'FHA Minimum', val: homePrice * 0.035 },
                                    { pct: '5%', label: 'Conventional Minimum', val: homePrice * 0.05 },
                                    { pct: '10%', label: '10% — PMI Reduction', val: homePrice * 0.10 },
                                    { pct: '20%', label: '20% — No PMI', val: homePrice * 0.20 },
                                ].map(m => (
                                    <div key={m.pct} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                        <div className="flex items-center gap-2">
                                            {currentSavings >= m.val && <CheckCircle size={14} className="text-emerald-500" />}
                                            <span className="text-xs font-medium text-gray-500">{m.label}</span>
                                        </div>
                                        <span className="text-xs font-black text-emerald-500">{formatCurrency(m.val)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
