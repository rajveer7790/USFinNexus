'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { calcMonthlyPI } from '@/lib/formulas';

const dollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2, minimumFractionDigits: 2 });

export default function QuickMortgageEstimate() {
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState('');

    function calculate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const read = (id: string) => (event.currentTarget.elements.namedItem(id) as HTMLInputElement | HTMLSelectElement | null)?.value ?? '';
        const price = Number(read('quick-price'));
        const down = Number(read('quick-down'));
        const rateText = read('quick-rate');
        const rate = Number(rateText);
        const term = Number(read('quick-term'));
        if (!rateText || ![price, down, rate, term].every(Number.isFinite) || price <= 0 || down < 0 || down >= price || rate < 0 || rate > 30 || ![15, 20, 30].includes(term)) {
            setResult(null);
            setError(down >= price && price > 0 ? 'Enter a down payment lower than the home price.' : 'Enter a valid home price, down payment, interest rate and term.');
            return;
        }
        const payment = calcMonthlyPI(price - down, rate, term);
        setError('');
        setResult(payment);
    }

    return <section className="fn-quick" aria-labelledby="quick-estimate-heading">
        <div className="fn-quick-body">
            <h2 id="quick-estimate-heading">Quick mortgage estimate</h2>
            <form onSubmit={calculate} onChange={() => { setResult(null); setError(''); }}>
                <div className="fn-fields">
                    <label htmlFor="quick-price">Home price <span><b aria-hidden="true">$</b><input id="quick-price" type="number" min="1" max="100000000" step="0.01" placeholder="—" required /></span></label>
                    <label htmlFor="quick-down">Down payment <span><b aria-hidden="true">$</b><input id="quick-down" type="number" min="0" max="100000000" step="0.01" placeholder="—" /></span></label>
                    <label htmlFor="quick-term">Loan term <select id="quick-term" defaultValue="30"><option value="15">15 years</option><option value="20">20 years</option><option value="30">30 years</option></select></label>
                    <label htmlFor="quick-rate">Interest rate <span className="fn-unit-end"><input id="quick-rate" type="number" min="0" max="30" step="0.001" inputMode="decimal" placeholder="—" required /><b aria-hidden="true">%</b></span></label>
                </div>
                <button className="fn-button fn-button-primary" type="submit">Calculate payment</button>
                <div aria-live="polite" aria-atomic="true">
                    {error && <p className="fn-estimate-error">{error}</p>}
                    {result !== null && <div className="fn-estimate-result">
                        <p><strong>{dollars.format(result)}</strong> / month</p>
                        <p>Principal and interest only. For taxes, insurance, PMI and HOA, <Link href="/calculators/mortgage">open the full mortgage calculator</Link>.</p>
                    </div>}
                </div>
            </form>
        </div>
        {/* Decorative image; the form remains the first reading and focus order. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="fn-quick-photo" src="/images/redesign/mortgage-home.webp" alt="" width="520" height="650" fetchPriority="high" />
    </section>;
}
