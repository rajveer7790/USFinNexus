'use client';

import {
    PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine,
} from 'recharts';
import { calcYearlyAmortization, formatCurrency, type AmortizationRow } from '@/lib/formulas';

const PIE_COLORS = ['#0da6f2', '#10b981', '#6366f1', '#f59e0b', '#ef4444'];

interface MortgageChartsProps {
    pieData: { name: string; value: number }[];
    amortization: AmortizationRow[];
}

export default function MortgageCharts({ pieData, amortization }: MortgageChartsProps) {
    const yearly = calcYearlyAmortization(amortization);
    const flip = yearly.find(row => row.principalPaid > row.interestPaid);
    return (
        <div className="space-y-12">
            {/* Payment Pie */}
            <div className="flex flex-col items-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-500">
                    Monthly Payment Composition
                </p>
                <div className="relative w-full max-w-md aspect-square">
                    {/* Background glow behind pie */}
                    <div className="absolute inset-0 bg-[#0da6f2]/5 rounded-full blur-3xl" />
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius="65%"
                                outerRadius="85%"
                                paddingAngle={4}
                                dataKey="value"
                                stroke="none"
                            >
                                {pieData.map((_, i) => (
                                    <Cell 
                                        key={i} 
                                        fill={PIE_COLORS[i % PIE_COLORS.length]} 
                                        className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(val: number) => formatCurrency(val)}
                                contentStyle={{ 
                                    background: 'rgba(15, 23, 42, 0.9)', 
                                    backdropFilter: 'blur(12px)',
                                    borderRadius: '16px', 
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 20px 50px -12px rgba(0,0,0,0.5)',
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    padding: '12px 16px'
                                }}
                                itemStyle={{ color: '#fff' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Centered Total Display */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Total</p>
                        <p className="text-3xl font-black text-navy-900 tabular-nums">
                            ${pieData.reduce((acc, curr) => acc + curr.value, 0).toFixed(0)}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
                    {pieData.map((d, i) => (
                        <div key={d.name} className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{d.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-500 text-center">
                    Equity flip: annual principal vs. interest
                </p>
                <p className="text-center mb-4 text-sm text-slate-600">{flip ? `Principal first exceeds interest in year ${flip.year} of this schedule.` : 'No annual crossover in this schedule.'} Extra principal is included; home-price changes and escrow are not.</p>
                <div className="glass-panel p-6 overflow-hidden">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={yearly} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis
                                dataKey="year"
                                minTickGap={60}
                                tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }}
                                axisLine={false}
                                tickLine={false}
                                dy={10}
                            />
                            <YAxis
                                tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                                tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }}
                                axisLine={false}
                                tickLine={false}
                                width={50}
                            />
                            <Tooltip
                                labelFormatter={(label) => 'Year ' + label}
                                formatter={(val: number, name: string) => [formatCurrency(val), name]}
                                contentStyle={{ 
                                    background: 'rgba(15, 23, 42, 0.9)', 
                                    backdropFilter: 'blur(12px)',
                                    borderRadius: '16px', 
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 20px 50px -12px rgba(0,0,0,0.5)',
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    padding: '12px 16px'
                                }}
                            />
                            <Legend />
                            <Bar dataKey="principalPaid" name="Principal" stackId="payment" fill="#059669" />
                            <Bar dataKey="interestPaid" name="Interest" stackId="payment" fill="#2563eb" />
                            {flip && <ReferenceLine x={flip.year} stroke="#0f172a" strokeDasharray="4 3" />}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
