'use client';

import { useMemo, useState } from 'react';
import { AlertTriangle, Bitcoin, Calculator } from 'lucide-react';

type FilingStatus = 'single' | 'married' | 'mfs' | 'hoh';

type Bracket = { limit: number; rate: number };

const ORDINARY_2026: Record<FilingStatus, Bracket[]> = {
    single: [
        { limit: 12_400, rate: 0.10 }, { limit: 50_400, rate: 0.12 }, { limit: 105_700, rate: 0.22 },
        { limit: 201_775, rate: 0.24 }, { limit: 256_225, rate: 0.32 }, { limit: 640_600, rate: 0.35 }, { limit: Infinity, rate: 0.37 },
    ],
    married: [
        { limit: 24_800, rate: 0.10 }, { limit: 100_800, rate: 0.12 }, { limit: 211_400, rate: 0.22 },
        { limit: 403_550, rate: 0.24 }, { limit: 512_450, rate: 0.32 }, { limit: 768_700, rate: 0.35 }, { limit: Infinity, rate: 0.37 },
    ],
    mfs: [
        { limit: 12_400, rate: 0.10 }, { limit: 50_400, rate: 0.12 }, { limit: 105_700, rate: 0.22 },
        { limit: 201_775, rate: 0.24 }, { limit: 256_225, rate: 0.32 }, { limit: 384_350, rate: 0.35 }, { limit: Infinity, rate: 0.37 },
    ],
    hoh: [
        { limit: 17_700, rate: 0.10 }, { limit: 67_450, rate: 0.12 }, { limit: 105_700, rate: 0.22 },
        { limit: 201_750, rate: 0.24 }, { limit: 256_200, rate: 0.32 }, { limit: 640_600, rate: 0.35 }, { limit: Infinity, rate: 0.37 },
    ],
};

const CAPITAL_GAINS_2026: Record<FilingStatus, { zero: number; fifteen: number }> = {
    single: { zero: 49_450, fifteen: 545_500 },
    married: { zero: 98_900, fifteen: 613_700 },
    mfs: { zero: 49_450, fifteen: 306_850 },
    hoh: { zero: 66_200, fifteen: 579_600 },
};

const NIIT_THRESHOLD: Record<FilingStatus, number> = {
    single: 200_000,
    married: 250_000,
    mfs: 125_000,
    hoh: 200_000,
};

function ordinaryTax(income: number, brackets: Bracket[]) {
    let tax = 0;
    let floor = 0;
    for (const bracket of brackets) {
        if (income <= floor) break;
        const taxed = Math.min(income, bracket.limit) - floor;
        tax += Math.max(0, taxed) * bracket.rate;
        floor = bracket.limit;
    }
    return tax;
}

function longTermCapitalGainsTax(baseTaxableIncome: number, longTermGain: number, status: FilingStatus) {
    if (longTermGain <= 0) return { tax: 0, zeroAmount: 0, fifteenAmount: 0, twentyAmount: 0 };
    const thresholds = CAPITAL_GAINS_2026[status];
    const zeroRoom = Math.max(0, thresholds.zero - baseTaxableIncome);
    const zeroAmount = Math.min(longTermGain, zeroRoom);
    const remainingAfterZero = longTermGain - zeroAmount;

    const incomeAfterZero = baseTaxableIncome + zeroAmount;
    const fifteenRoom = Math.max(0, thresholds.fifteen - incomeAfterZero);
    const fifteenAmount = Math.min(remainingAfterZero, fifteenRoom);
    const twentyAmount = Math.max(0, remainingAfterZero - fifteenAmount);

    return {
        tax: fifteenAmount * 0.15 + twentyAmount * 0.20,
        zeroAmount,
        fifteenAmount,
        twentyAmount,
    };
}

export default function CryptoTaxClient() {
    const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
    const [otherTaxableIncome, setOtherTaxableIncome] = useState(70_000);
    const [shortTermGains, setShortTermGains] = useState(5_000);
    const [shortTermLosses, setShortTermLosses] = useState(2_000);
    const [longTermGains, setLongTermGains] = useState(10_000);
    const [longTermLosses, setLongTermLosses] = useState(1_000);

    const result = useMemo(() => {
        let netShort = shortTermGains - shortTermLosses;
        let netLong = longTermGains - longTermLosses;

        if (netShort < 0 && netLong > 0) {
            const offset = Math.min(-netShort, netLong);
            netShort += offset;
            netLong -= offset;
        } else if (netLong < 0 && netShort > 0) {
            const offset = Math.min(-netLong, netShort);
            netLong += offset;
            netShort -= offset;
        }

        const netCapital = netShort + netLong;
        const shortTermTaxable = Math.max(0, netShort);
        const longTermTaxable = Math.max(0, netLong);

        const ordinaryTaxWithoutShort = ordinaryTax(otherTaxableIncome, ORDINARY_2026[filingStatus]);
        const ordinaryTaxWithShort = ordinaryTax(otherTaxableIncome + shortTermTaxable, ORDINARY_2026[filingStatus]);
        const incrementalShortTermTax = Math.max(0, ordinaryTaxWithShort - ordinaryTaxWithoutShort);

        const ltcg = longTermCapitalGainsTax(otherTaxableIncome + shortTermTaxable, longTermTaxable, filingStatus);
        const estimatedMAGI = otherTaxableIncome + shortTermTaxable + longTermTaxable;
        const netInvestmentIncome = shortTermTaxable + longTermTaxable;
        const niit = Math.max(0, Math.min(netInvestmentIncome, estimatedMAGI - NIIT_THRESHOLD[filingStatus])) * 0.038;
        const estimatedFederalTaxOnGains = incrementalShortTermTax + ltcg.tax + niit;

        const capitalLossDeductionLimit = filingStatus === 'mfs' ? 1_500 : 3_000;
        const currentYearLossDeduction = netCapital < 0 ? Math.min(-netCapital, capitalLossDeductionLimit) : 0;
        const capitalLossCarryforward = netCapital < 0 ? Math.max(0, -netCapital - currentYearLossDeduction) : 0;

        return {
            netShort,
            netLong,
            netCapital,
            incrementalShortTermTax,
            longTermTax: ltcg.tax,
            ltcg,
            niit,
            estimatedFederalTaxOnGains,
            currentYearLossDeduction,
            capitalLossCarryforward,
        };
    }, [filingStatus, otherTaxableIncome, shortTermGains, shortTermLosses, longTermGains, longTermLosses]);

    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                <div className="flex items-center gap-3 mb-3"><Bitcoin size={28} /><span className="text-xs font-black uppercase tracking-[0.2em]">Tax Year 2026</span></div>
                <h1 className="text-3xl sm:text-5xl font-black mb-3">Crypto Tax Calculator</h1>
                <p className="text-orange-50 max-w-3xl">Estimate federal tax attributable to net short-term and long-term capital gains from digital assets using 2026 ordinary-income and capital-gain thresholds. This is a simplified Schedule D-style planning estimate, not tax-return preparation.</p>
            </div>

            <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-5 gap-7">
                <section className="lg:col-span-2 space-y-5" aria-label="Crypto tax inputs">
                    <div>
                        <label className="input-label">Filing Status</label>
                        <select value={filingStatus} onChange={(event) => setFilingStatus(event.target.value as FilingStatus)} className="glass-input">
                            <option value="single">Single</option>
                            <option value="married">Married Filing Jointly</option>
                            <option value="mfs">Married Filing Separately</option>
                            <option value="hoh">Head of Household</option>
                        </select>
                    </div>
                    <MoneyInput label="Other Taxable Income (after deductions)" value={otherTaxableIncome} onChange={setOtherTaxableIncome} help="Enter taxable income excluding the digital-asset capital gains/losses modeled below. This avoids guessing your deductions." />

                    <div className="rounded-2xl border border-gray-200 p-5 space-y-4">
                        <h2 className="font-black">Short-Term Capital Transactions</h2>
                        <MoneyInput label="Short-Term Gains" value={shortTermGains} onChange={setShortTermGains} />
                        <MoneyInput label="Short-Term Losses" value={shortTermLosses} onChange={setShortTermLosses} />
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-5 space-y-4">
                        <h2 className="font-black">Long-Term Capital Transactions</h2>
                        <MoneyInput label="Long-Term Gains" value={longTermGains} onChange={setLongTermGains} />
                        <MoneyInput label="Long-Term Losses" value={longTermLosses} onChange={setLongTermLosses} />
                    </div>
                </section>

                <section className="lg:col-span-3 space-y-5" aria-label="Crypto tax estimate">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Metric label="Net Short-Term" value={money(result.netShort)} />
                        <Metric label="Net Long-Term" value={money(result.netLong)} />
                    </div>

                    {result.netCapital >= 0 ? (
                        <>
                            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
                                <div className="flex items-center gap-2 text-orange-700 mb-2"><Calculator size={18} /><span className="text-xs font-black uppercase tracking-[0.2em]">Estimated Federal Tax on Modeled Gains</span></div>
                                <p className="text-4xl sm:text-5xl font-black text-orange-800 tabular-nums">{money(result.estimatedFederalTaxOnGains)}</p>
                            </div>
                            <div className="rounded-2xl border border-gray-200 divide-y divide-gray-100">
                                <Row label="Incremental ordinary tax on net short-term gain" value={money(result.incrementalShortTermTax)} />
                                <Row label="Long-term capital-gain tax" value={money(result.longTermTax)} />
                                <Row label="Estimated NIIT" value={money(result.niit)} />
                            </div>
                            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
                                <p className="font-bold mb-2">2026 long-term gain stacking in this estimate</p>
                                <ul className="space-y-1">
                                    <li>Modeled at 0%: {money(result.ltcg.zeroAmount)}</li>
                                    <li>Modeled at 15%: {money(result.ltcg.fifteenAmount)}</li>
                                    <li>Modeled at 20%: {money(result.ltcg.twentyAmount)}</li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
                            <p className="text-xs font-black uppercase tracking-[0.2em] mb-2">Modeled Net Capital Loss</p>
                            <p className="text-4xl font-black tabular-nums mb-4">{money(-result.netCapital)}</p>
                            <p className="text-sm">Potential current-year capital-loss deduction against ordinary income: up to {money(result.currentYearLossDeduction)} under the simplified limit modeled here. Remaining modeled loss carryforward: {money(result.capitalLossCarryforward)}.</p>
                        </div>
                    )}

                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                        <div className="flex items-start gap-3"><AlertTriangle size={18} className="mt-0.5 shrink-0" /><p>This estimator does not reproduce every Schedule D worksheet rule, basis-identification rule, collectible/28% gain, unrecaptured Section 1250 gain, qualified dividends, state tax, self-employment income, charitable gifts, staking/mining income, wash-sale developments or every NIIT adjustment. Use IRS forms or qualified tax software/professional advice for filing.</p></div>
                    </div>
                </section>
            </div>
        </div>
    );
}

function MoneyInput({ label, value, onChange, help }: { label: string; value: number; onChange: (value: number) => void; help?: string }) {
    return (
        <div>
            <label className="input-label">{label}</label>
            <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span><input type="number" min={0} step={100} value={Number.isFinite(value) ? value : 0} onChange={(event) => onChange(Math.max(0, Number(event.target.value) || 0))} className="glass-input pl-8" /></div>
            {help ? <p className="text-xs text-gray-500 mt-1.5">{help}</p> : null}
        </div>
    );
}

function Metric({ label, value }: { label: string; value: string }) {
    return <div className="rounded-2xl border border-gray-200 p-5"><p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-2">{label}</p><p className="text-2xl font-black tabular-nums">{value}</p></div>;
}

function Row({ label, value }: { label: string; value: string }) {
    return <div className="flex justify-between gap-4 p-4 text-sm"><span className="text-gray-600">{label}</span><strong className="tabular-nums">{value}</strong></div>;
}

function money(value: number) {
    const sign = value < 0 ? '-' : '';
    return `${sign}$${Math.abs(value).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
}
