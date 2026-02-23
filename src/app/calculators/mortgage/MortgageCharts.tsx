'use client';

import {
    PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis,
    CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { formatCurrency, formatMonthYear, type AmortizationRow } from '@/lib/formulas';

const PIE_COLORS = ['#0A2540', '#00C853', '#1a4d9a', '#f59e0b', '#ef4444'];

interface MortgageChartsProps {
    pieData: { name: string; value: number }[];
    amortization: AmortizationRow[];
}

export default function MortgageCharts({ pieData, amortization }: MortgageChartsProps) {
    return (
        <div className="space-y-8">
            {/* Payment Pie */}
            <div>
                <p className="text-xs font-bold uppercase tracking-wide mb-4" style={{ color: 'var(--color-text-muted)' }}>
                    Monthly Payment Breakdown
                </p>
                <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={3}
                            dataKey="value"
                        >
                            {pieData.map((_, i) => (
                                <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(val: number) => formatCurrency(val)}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)' }}
                        />
                        <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Amortization Line */}
            <div>
                <p className="text-xs font-bold uppercase tracking-wide mb-4" style={{ color: 'var(--color-text-muted)' }}>
                    Loan Balance Over Time
                </p>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-navy-700 bg-white dark:bg-navy-900">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={amortization} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                            <XAxis
                                dataKey="date"
                                tickFormatter={(d) => formatMonthYear(new Date(d))}
                                minTickGap={50}
                                tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                                tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }}
                                axisLine={false}
                                tickLine={false}
                                width={60}
                            />
                            <Tooltip
                                labelFormatter={(label) => formatMonthYear(new Date(label))}
                                formatter={(val: number) => [formatCurrency(val), 'Balance']}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="endingBalance"
                                stroke="#1a4d9a"
                                strokeWidth={3}
                                dot={false}
                                activeDot={{ r: 6, fill: '#1a4d9a', stroke: '#fff', strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
