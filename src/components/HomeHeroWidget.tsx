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
                <span style={{ fontSize: 9, color: '#4ade80', fontWeight: 700, letterSpacing: '0.05em' }}>
                    ● LIVE
                </span>
            </div>

            {/* Live monthly payment */}
            <div className="neo-dash-amount" style={{ fontSize: '2.2rem', transition: 'all 0.2s ease' }}>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '14px 0' }}>
                {/* Home Price */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700 }}>
                            Home Price
                        </span>
                        <span style={{ fontSize: 11, color: '#00E8FC', fontWeight: 800 }}>
                            ${(price / 1000).toFixed(0)}K
                        </span>
                    </div>
                    <input
                        type="range" min={100000} max={1500000} step={10000} value={price}
                        onChange={e => setPrice(+e.target.value)}
                        style={{ width: '100%', accentColor: '#00E8FC', cursor: 'pointer' }}
                    />
                </div>

                {/* Down Payment */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700 }}>
                            Down Payment
                        </span>
                        <span style={{ fontSize: 11, color: dp >= 20 ? '#4ade80' : '#FFC23E', fontWeight: 800 }}>
                            {dp}%{dp >= 20 ? ' ✓' : ' (PMI)'}
                        </span>
                    </div>
                    <input
                        type="range" min={3} max={40} step={1} value={dp}
                        onChange={e => setDp(+e.target.value)}
                        style={{ width: '100%', accentColor: dp >= 20 ? '#28CA41' : '#FFC23E', cursor: 'pointer' }}
                    />
                </div>

                {/* Interest Rate */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700 }}>
                            Interest Rate
                        </span>
                        <span style={{ fontSize: 11, color: '#B88AFF', fontWeight: 800 }}>
                            {rate.toFixed(2)}%
                        </span>
                    </div>
                    <input
                        type="range" min={3} max={12} step={0.05} value={rate}
                        onChange={e => setRate(+e.target.value)}
                        style={{ width: '100%', accentColor: '#9B5CFF', cursor: 'pointer' }}
                    />
                </div>

                {/* Loan Term */}
                <div style={{ display: 'flex', gap: 6 }}>
                    {[15, 20, 30].map(t => (
                        <button
                            key={t}
                            onClick={() => setTerm(t)}
                            style={{
                                flex: 1, padding: '5px 0', borderRadius: 8,
                                fontSize: 12, fontWeight: 700,
                                border: `1px solid ${term === t ? '#00E8FC' : 'rgba(255,255,255,0.06)'}`,
                                background: term === t ? 'rgba(0,232,252,0.1)' : 'rgba(255,255,255,0.02)',
                                color: term === t ? '#00E8FC' : 'rgba(255,255,255,0.25)',
                                cursor: 'pointer', transition: 'all 0.15s',
                            }}
                        >
                            {t}yr
                        </button>
                    ))}
                </div>
            </div>

            {/* Dynamic PITI breakdown bars (animation:none to allow live updates) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
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
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    marginTop: 14, padding: '11px 16px', borderRadius: 10,
                    background: 'linear-gradient(135deg, #00E8FC 0%, #0da6f2 55%, #1a4d9a 100%)',
                    color: '#050810', fontWeight: 800, fontSize: 13, textDecoration: 'none',
                    letterSpacing: '0.01em', transition: 'opacity 0.2s',
                }}
            >
                Full Analysis + PDF Report <ArrowRight size={14} />
            </Link>
        </div>
    );
}
