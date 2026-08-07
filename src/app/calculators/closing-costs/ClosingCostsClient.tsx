'use client';

import { useMemo, useState } from 'react';
import { DollarSign, Table2, Info } from 'lucide-react';
import { formatCurrency } from '@/lib/formulas';
import { exportGenericCSV } from '@/lib/csvExporter';
import DisclaimerBanner from '@/components/DisclaimerBanner';

export default function ClosingCostsClient() {
    const [homePrice, setHomePrice] = useState(400000);
    const [downPayment, setDownPayment] = useState(80000);
    const [lenderFees, setLenderFees] = useState(2500);
    const [appraisalCreditOther, setAppraisalCreditOther] = useState(850);
    const [titleEscrow, setTitleEscrow] = useState(1800);
    const [recordingGovernment, setRecordingGovernment] = useState(350);
    const [transferTaxes, setTransferTaxes] = useState(0);
    const [prepaidInterest, setPrepaidInterest] = useState(700);
    const [prepaidTaxesInsurance, setPrepaidTaxesInsurance] = useState(3500);
    const [otherBuyerCosts, setOtherBuyerCosts] = useState(0);
    const [sellerBrokerComp, setSellerBrokerComp] = useState(0);
    const [sellerTransferTaxes, setSellerTransferTaxes] = useState(0);
    const [sellerTitleEscrowAttorney, setSellerTitleEscrowAttorney] = useState(1500);
    const [otherSellerCosts, setOtherSellerCosts] = useState(0);

    const result = useMemo(() => {
        const buyerItems = [
            ['Lender / origination fees', lenderFees],
            ['Appraisal, credit & other services', appraisalCreditOther],
            ['Title / settlement / escrow', titleEscrow],
            ['Recording & government charges', recordingGovernment],
            ['Transfer / stamp taxes paid by buyer', transferTaxes],
            ['Prepaid interest', prepaidInterest],
            ['Initial taxes & insurance / escrow funding', prepaidTaxesInsurance],
            ['Other buyer costs', otherBuyerCosts],
        ] as const;

        const sellerItems = [
            ['Broker compensation paid by seller', sellerBrokerComp],
            ['Transfer / stamp taxes paid by seller', sellerTransferTaxes],
            ['Title / settlement / attorney', sellerTitleEscrowAttorney],
            ['Other seller costs', otherSellerCosts],
        ] as const;

        const buyerTotal = buyerItems.reduce((sum, [, amount]) => sum + Math.max(0, amount), 0);
        const sellerTotal = sellerItems.reduce((sum, [, amount]) => sum + Math.max(0, amount), 0);
        const cashToClose = Math.max(0, downPayment) + buyerTotal;

        return { buyerItems, sellerItems, buyerTotal, sellerTotal, cashToClose };
    }, [
        lenderFees,
        appraisalCreditOther,
        titleEscrow,
        recordingGovernment,
        transferTaxes,
        prepaidInterest,
        prepaidTaxesInsurance,
        otherBuyerCosts,
        sellerBrokerComp,
        sellerTransferTaxes,
        sellerTitleEscrowAttorney,
        otherSellerCosts,
        downPayment,
    ]);

    const loanAmount = Math.max(0, homePrice - downPayment);
    const buyerPercent = homePrice > 0 ? result.buyerTotal / homePrice * 100 : 0;
    const sellerPercent = homePrice > 0 ? result.sellerTotal / homePrice * 100 : 0;

    return (
        <div className="relative bg-white text-navy-900 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 lg:pt-8 pb-8 sm:pb-12">
                <header className="mb-8 sm:mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-[#0da6f2]/10 border border-[#0da6f2]/20">
                            <DollarSign className="text-[#0da6f2]" size={22} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#0da6f2]">Home Purchase Cost Planner</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">Closing Cost Calculator</h1>
                    <p className="text-gray-500 max-w-3xl text-base sm:text-lg">
                        Build a buyer and seller closing-cost estimate from the figures in your Loan Estimate, title quote, local tax schedule, purchase contract and settlement disclosures. State and local charges are entered directly instead of being guessed from a national lookup table.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    <section className="lg:col-span-2 space-y-6" aria-label="Closing cost inputs">
                        <div className="glass-card p-4 sm:p-6 space-y-5">
                            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-400">Purchase & Financing</h2>
                            <MoneyInput label="Home Price" value={homePrice} onChange={setHomePrice} step={5000} />
                            <MoneyInput label="Down Payment" value={downPayment} onChange={setDownPayment} step={5000} />
                            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm">
                                <div className="flex justify-between gap-4"><span className="text-gray-500">Modeled loan amount</span><strong>{formatCurrency(loanAmount)}</strong></div>
                            </div>
                        </div>

                        <div className="glass-card p-4 sm:p-6 space-y-4">
                            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-400">Buyer Closing Costs</h2>
                            <MoneyInput label="Lender / Origination Fees" value={lenderFees} onChange={setLenderFees} />
                            <MoneyInput label="Appraisal, Credit & Other Services" value={appraisalCreditOther} onChange={setAppraisalCreditOther} />
                            <MoneyInput label="Title / Settlement / Escrow" value={titleEscrow} onChange={setTitleEscrow} />
                            <MoneyInput label="Recording & Government Charges" value={recordingGovernment} onChange={setRecordingGovernment} />
                            <MoneyInput label="Transfer / Stamp Taxes Paid by Buyer" value={transferTaxes} onChange={setTransferTaxes} />
                            <MoneyInput label="Prepaid Interest" value={prepaidInterest} onChange={setPrepaidInterest} />
                            <MoneyInput label="Initial Taxes & Insurance / Escrow Funding" value={prepaidTaxesInsurance} onChange={setPrepaidTaxesInsurance} />
                            <MoneyInput label="Other Buyer Costs" value={otherBuyerCosts} onChange={setOtherBuyerCosts} />
                        </div>

                        <div className="glass-card p-4 sm:p-6 space-y-4">
                            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-400">Seller Closing Costs</h2>
                            <MoneyInput label="Broker Compensation Paid by Seller" value={sellerBrokerComp} onChange={setSellerBrokerComp} />
                            <MoneyInput label="Transfer / Stamp Taxes Paid by Seller" value={sellerTransferTaxes} onChange={setSellerTransferTaxes} />
                            <MoneyInput label="Title / Settlement / Attorney" value={sellerTitleEscrowAttorney} onChange={setSellerTitleEscrowAttorney} />
                            <MoneyInput label="Other Seller Costs" value={otherSellerCosts} onChange={setOtherSellerCosts} />
                        </div>
                    </section>

                    <section className="lg:col-span-3 space-y-5 lg:self-start" aria-label="Closing cost estimate">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <SummaryCard label="Buyer Closing Costs" value={formatCurrency(result.buyerTotal)} note={`${buyerPercent.toFixed(1)}% of entered home price`} />
                            <SummaryCard label="Seller Closing Costs" value={formatCurrency(result.sellerTotal)} note={`${sellerPercent.toFixed(1)}% of entered home price`} />
                        </div>

                        <div className="glass-card p-5 sm:p-7">
                            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-gray-400 mb-5">Estimated Buyer Cash to Close</h3>
                            <p className="text-4xl sm:text-5xl font-black tabular-nums text-blue-700">{formatCurrency(result.cashToClose)}</p>
                            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                                <MiniMetric label="Down payment" value={formatCurrency(downPayment)} />
                                <MiniMetric label="Buyer costs" value={formatCurrency(result.buyerTotal)} />
                                <MiniMetric label="Loan amount" value={formatCurrency(loanAmount)} />
                            </div>
                            <p className="text-xs text-gray-500 mt-4">Actual cash to close also reflects deposits, credits, prorations, financed amounts, seller credits and other transaction-specific entries on the Closing Disclosure.</p>
                        </div>

                        <Breakdown title="Buyer Cost Breakdown" items={result.buyerItems} total={result.buyerTotal} />
                        <Breakdown title="Seller Cost Breakdown" items={result.sellerItems} total={result.sellerTotal} />

                        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
                            <div className="flex items-start gap-3">
                                <Info size={18} className="mt-0.5 shrink-0" />
                                <p>
                                    Transfer taxes, recording charges, title practices, attorney requirements and who pays a particular item vary by state, county, municipality, contract and local custom. Use the figures from the professionals handling your transaction rather than assuming one statewide percentage.
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => exportGenericCSV(
                                ['Side', 'Item', 'Amount'],
                                [
                                    ...result.buyerItems.map(([label, amount]) => ['Buyer', label, Math.max(0, amount).toFixed(2)]),
                                    ...result.sellerItems.map(([label, amount]) => ['Seller', label, Math.max(0, amount).toFixed(2)]),
                                ],
                                'USFinNexus-Closing-Cost-Estimate.csv'
                            )}
                            className="btn-outline w-full"
                        >
                            <Table2 size={16} /> Download Closing Cost Estimate (CSV)
                        </button>

                        <DisclaimerBanner calculatorName="the Closing Cost Calculator" />
                    </section>
                </div>
            </div>
        </div>
    );
}

function MoneyInput({ label, value, onChange, step = 50 }: { label: string; value: number; onChange: (value: number) => void; step?: number }) {
    return (
        <div>
            <label className="input-label">{label}</label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                    type="number"
                    min={0}
                    step={step}
                    value={Number.isFinite(value) ? value : 0}
                    onChange={(event) => onChange(Math.max(0, Number(event.target.value) || 0))}
                    className="glass-input pl-8"
                />
            </div>
        </div>
    );
}

function SummaryCard({ label, value, note }: { label: string; value: string; note: string }) {
    return (
        <div className="glass-card p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-3">{label}</p>
            <p className="text-3xl font-black tabular-nums">{value}</p>
            <p className="text-xs text-gray-500 mt-2">{note}</p>
        </div>
    );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
    return <div className="rounded-xl bg-slate-50 border border-slate-200 p-3"><p className="text-xs text-gray-500 mb-1">{label}</p><p className="font-black tabular-nums">{value}</p></div>;
}

function Breakdown({ title, items, total }: { title: string; items: readonly (readonly [string, number])[]; total: number }) {
    return (
        <div className="glass-card p-5 sm:p-7">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-gray-400 mb-5">{title}</h3>
            <div className="space-y-3">
                {items.map(([label, amount]) => (
                    <div key={label} className="flex justify-between gap-4 text-sm border-b border-gray-100 pb-3">
                        <span className="text-gray-600">{label}</span><strong className="tabular-nums">{formatCurrency(Math.max(0, amount))}</strong>
                    </div>
                ))}
                <div className="flex justify-between gap-4 pt-2"><span className="font-black">Total</span><strong className="text-xl tabular-nums">{formatCurrency(total)}</strong></div>
            </div>
        </div>
    );
}
