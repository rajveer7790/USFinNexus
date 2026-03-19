'use client';

import { formatCurrency, formatMonthYear, type AmortizationRow } from '@/lib/formulas';

interface YearlyRow {
    year: number;
    principalPaid: number;
    interestPaid: number;
    endingBalance: number;
    cumulativeInterest: number;
}

interface Props {
    showYearly: boolean;
    setShowYearly: (v: boolean) => void;
    amortFilter: string;
    setAmortFilter: (v: string) => void;
    yearOptions: number[];
    filteredAmort: AmortizationRow[];
    yearlyAmort: YearlyRow[];
}

export default function MortgageAmortTable({
    showYearly, setShowYearly,
    amortFilter, setAmortFilter,
    yearOptions, filteredAmort, yearlyAmort,
}: Props) {
    return (
        <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div className="flex gap-2 p-1 rounded-xl bg-gray-100/50 border border-gray-200">
                    <button
                        onClick={() => setShowYearly(false)}
                        className={`px-4 py-2 min-h-[36px] rounded-lg text-xs font-bold transition-all ${!showYearly ? 'bg-white text-[#0da6f2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setShowYearly(true)}
                        className={`px-4 py-2 min-h-[36px] rounded-lg text-xs font-bold transition-all ${showYearly ? 'bg-white text-[#0da6f2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Yearly
                    </button>
                </div>
                {!showYearly && (
                    <select
                        value={amortFilter}
                        onChange={e => setAmortFilter(e.target.value)}
                        className="glass-input py-2 pl-4 pr-8 text-sm w-auto font-medium appearance-none cursor-pointer"
                        aria-label="Filter amortization by year"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                    >
                        <option value="all">All Years</option>
                        {yearOptions.map(y => (
                            <option key={y} value={y}>Year {y}</option>
                        ))}
                    </select>
                )}
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200" style={{ maxHeight: '500px' }}>
                <table className="w-full text-sm text-left font-medium">
                    {showYearly ? (
                        <>
                            <thead className="text-xs uppercase bg-gray-50 sticky top-0 z-10 backdrop-blur-md">
                                <tr>
                                    <th className="px-4 py-3 font-bold text-gray-500">Year</th>
                                    <th className="px-4 py-3 font-bold text-gray-500 text-right">Principal</th>
                                    <th className="px-4 py-3 font-bold text-gray-500 text-right">Interest</th>
                                    <th className="px-4 py-3 font-bold text-gray-500 text-right">Ending Balance</th>
                                    <th className="px-4 py-3 font-bold text-gray-500 text-right">Cumulative Int</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {yearlyAmort.map(r => (
                                    <tr key={r.year} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-4 py-3 font-bold text-navy-900">{r.year}</td>
                                        <td className="px-4 py-3 text-emerald-500 text-right">{formatCurrency(r.principalPaid)}</td>
                                        <td className="px-4 py-3 text-rose-500 text-right">{formatCurrency(r.interestPaid)}</td>
                                        <td className="px-4 py-3 text-navy-900 font-bold text-right">{formatCurrency(r.endingBalance)}</td>
                                        <td className="px-4 py-3 text-rose-400 text-right">{formatCurrency(r.cumulativeInterest)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    ) : (
                        <>
                            <thead className="text-xs uppercase bg-gray-50 sticky top-0 z-10 backdrop-blur-md">
                                <tr>
                                    <th className="px-4 py-3 font-bold text-gray-500">Month</th>
                                    <th className="px-4 py-3 font-bold text-gray-500">Date</th>
                                    <th className="px-4 py-3 font-bold text-gray-500 text-right">Principal</th>
                                    <th className="px-4 py-3 font-bold text-gray-500 text-right">Interest</th>
                                    <th className="px-4 py-3 font-bold text-gray-500 text-right">Balance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredAmort.map(r => (
                                    <tr key={r.month} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-4 py-3 text-xs text-gray-500">{r.month}</td>
                                        <td className="px-4 py-3 font-bold text-navy-900 whitespace-nowrap">{formatMonthYear(r.date)}</td>
                                        <td className="px-4 py-3 text-emerald-500 text-right">{formatCurrency(r.principal)}</td>
                                        <td className="px-4 py-3 text-rose-500 text-right">{formatCurrency(r.interest)}</td>
                                        <td className="px-4 py-3 font-bold text-navy-900 text-right">{formatCurrency(r.balance)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    )}
                </table>
            </div>
        </div>
    );
}
