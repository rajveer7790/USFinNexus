'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function calcPI(price: number, dpPct: number, ratePct: number, termYr: number): number {
    const P = price * (1 - dpPct / 100);
    const r = ratePct / 100 / 12;
    const n = termYr * 12;
    if (r === 0 || n === 0) return P / (n || 1);
    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function fmtK(n: number): string {
    return Math.round(n / 1000).toLocaleString('en-US');
}

function fmt(n: number): string {
    return Math.round(n).toLocaleString('en-US');
}

export default function HomeHeroWidget() {
    const [price, setPrice] = useState(450000);
    const [dp, setDp] = useState(20);
    const [rate, setRate] = useState(6.84);
    const [term, setTerm] = useState(30);

    const loanAmt = price * (1 - dp / 100);
    const monthly = calcPI(price, dp, rate, term);
    const taxes = (price * 0.011) / 12;
    const insurance = (price * 0.005) / 12;
    const pmi = dp < 20 ? (loanAmt * 0.01) / 12 : 0;
    const piti = monthly + taxes + insurance + pmi;
    const totalInterest = monthly * term * 12 - loanAmt;

    const piW = Math.max(1, Math.round((monthly / piti) * 100));
    const txW = Math.max(1, Math.round((taxes / piti) * 100));
    const insW = Math.max(1, Math.round((insurance / piti) * 100));
    const pmiW = Math.max(0, 100 - piW - txW - insW);

    return (
        <div className="neo-dash" style={{ minWidth: 0 }}>
            {/* Title bar */}
            <div className="neo-dash-top">
                <div className="neo-dash-dots">
                    <span className="dd-red" /><span className="dd-yel" /><span className="dd-grn" />
                </div>
                <span className="neo-dash-title">QUICK CALCULATOR</span>
                <span className="text-[10px] font-bold tracking-wide" style={{ color: '#4ade80' }}>
                    ● LIVE
                </span>
            </div>

            {/* Live monthly payment */}
            <div className="neo-dash-amount transition-all duration-200">
                ${fmt(monthly)}<span>/mo</span>
            </div>
            <div className="neo-dash-sub" style={{ marginBottom: 0 }}>
                Full PITI est:{' '}
                <strong style={{ color: '#00E8FC' }}>${fmt(piti)}/mo</strong>
                {pmi > 0 && (
                    <span style={{ color: '#FFC23E', marginLeft: 6 }}>⚠ PMI included</span>
                )}
            </div>

            {/* Sliders */}
            <div className="flex flex-col gap-2.5 my-3">
                {/* Home Price */}
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
                            Home Price
                        </span>
                        <span className="text-xs font-extrabold" style={{ color: '#00E8FC' }}>
                            ${(price / 1000).toFixed(0)}K
                        </span>
                    </div>
                    <input
                        type="range" min={100000} max={1500000} step={10000} value={price}
                        onChange={e => setPrice(+e.target.value)}
                        className="w-full cursor-pointer"
                        style={{ accentColor: '#00E8FC' }}
                    />
                </div>

                {/* Down Payment */}
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
                            Down Payment
                        </span>
                        <span className="text-xs font-extrabold" style={{ color: dp >= 20 ? '#4ade80' : '#FFC23E' }}>
                            {dp}%{dp >= 20 ? ' ✓' : ' (PMI)'}
                        </span>
                    </div>
                    <input
                        type="range" min={3} max={40} step={1} value={dp}
                        onChange={e => setDp(+e.target.value)}
                        className="w-full cursor-pointer"
                        style={{ accentColor: dp >= 20 ? '#28CA41' : '#FFC23E' }}
                    />
                </div>

                {/* Interest Rate */}
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
                            Interest Rate
                        </span>
                        <span className="text-xs font-extrabold" style={{ color: '#B88AFF' }}>
                            {rate.toFixed(2)}%
                        </span>
                    </div>
                    <input
                        type="range" min={3} max={12} step={0.05} value={rate}
                        onChange={e => setRate(+e.target.value)}
                        className="w-full cursor-pointer"
                        style={{ accentColor: '#9B5CFF' }}
                    />
                </div>

                {/* Loan Term */}
                <div className="flex gap-1.5">
                    {[15, 20, 30].map(t => (
                        <button
                            key={t}
                            onClick={() => setTerm(t)}
                            className="flex-1 min-h-[44px] sm:min-h-[36px] rounded-lg text-xs font-bold transition-all duration-150"
                            style={{
                                border: `1px solid ${term === t ? '#00E8FC' : 'rgba(255,255,255,0.06)'}`,
                                background: term === t ? 'rgba(0,232,252,0.1)' : 'rgba(255,255,255,0.02)',
                                color: term === t ? '#00E8FC' : 'rgba(255,255,255,0.25)',
                                cursor: 'pointer',
                            }}
                        >
                            {t}yr
                        </button>
                    ))}
                </div>
            </div>

            {/* Dynamic PITI breakdown bars */}
            <div className="flex flex-col gap-1.5 mb-3">
                {[
                    { l: 'P & I', w: piW, c: 'bar-neo' },
                    { l: 'Taxes', w: txW, c: 'bar-mag' },
                    { l: 'Insur.', w: insW, c: 'bar-vio' },
                    ...(pmi > 0 ? [{ l: 'PMI', w: pmiW, c: 'bar-amb' }] : []),
                ].map(b => (
                    <div key={b.l} className="neo-bar-row">
                        <span className="neo-bar-label">{b.l}</span>
                        <div className="neo-bar-track">
                            <div
                                className={`neo-bar-fill ${b.c}`}
                                style={{ width: `${b.w}%`, animation: 'none', transition: 'width 0.25s ease' }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary chips */}
            <div className="neo-dash-chips">
                <div className="neo-chip">
                    <span className="neo-chip-val">${fmtK(loanAmt)}K</span>
                    <span className="neo-chip-lbl">Loan Amount</span>
                </div>
                <div className="neo-chip">
                    <span className="neo-chip-val">${fmtK(totalInterest)}K</span>
                    <span className="neo-chip-lbl">Total Interest</span>
                </div>
                <div className="neo-chip">
                    <span className="neo-chip-val">{term * 12}</span>
                    <span className="neo-chip-lbl">Payments</span>
                </div>
            </div>

            {/* CTA */}
            <Link
                href="/calculators/mortgage"
                className="flex items-center justify-center gap-1.5 mt-3 min-h-[44px] rounded-xl font-extrabold text-[13px] tracking-wide transition-opacity hover:opacity-90 no-underline"
                style={{
                    background: 'linear-gradient(135deg, #00E8FC 0%, #0da6f2 55%, #1a4d9a 100%)',
                    color: '#050810',
                }}
            >
                Full Analysis + PDF Report <ArrowRight size={14} />
            </Link>
        </div>
    );
}
