'use client';

import {
    PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { formatCurrency, formatMonthYear, type AmortizationRow } from '@/lib/formulas';

const PIE_COLORS = ['#0da6f2', '#10b981', '#6366f1', '#f59e0b', '#ef4444'];

interface MortgageChartsProps {
    pieData: { name: string; value: number }[];
    amortization: AmortizationRow[];
}

export default function MortgageCharts({ pieData, amortization }: MortgageChartsProps) {
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

            {/* Amortization Line */}
            <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-500 text-center">
                    Projected Equity Growth
                </p>
                <div className="glass-panel p-6 overflow-hidden">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={amortization} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#0da6f2" />
                                    <stop offset="100%" stopColor="#10b981" />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis
                                dataKey="date"
                                tickFormatter={(d) => formatMonthYear(new Date(d))}
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
                                labelFormatter={(label) => formatMonthYear(new Date(label))}
                                formatter={(val: number) => [formatCurrency(val), 'Ending Balance']}
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
                            <Line
                                type="monotone"
                                dataKey="endingBalance"
                                stroke="url(#lineGradient)"
                                strokeWidth={4}
                                dot={false}
                                activeDot={{ r: 6, fill: '#0da6f2', stroke: '#fff', strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
