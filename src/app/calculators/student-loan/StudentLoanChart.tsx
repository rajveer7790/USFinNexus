'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ChartRow = { month: number; year: number; standardBalance: number; accelBalance: number };

export default function StudentLoanChart({ chartData }: { chartData: ChartRow[] }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorStandard" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorAccel" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00C853" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#0a1628" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="year" stroke="#94a3b8" tickFormatter={(val) => `Yr ${val}`} />
                <YAxis stroke="#94a3b8" tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`} width={60} />
                <Tooltip
                    formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name === 'standardBalance' ? 'Standard Balance' : 'Accelerated Balance']}
                    labelFormatter={(label) => `Year ${label}`}
                    contentStyle={{ backgroundColor: 'rgba(6, 15, 30, 0.95)', borderColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: '#fff' }}
                />
                <Area type="monotone" dataKey="standardBalance" stroke="#ef4444" strokeWidth={3} fill="url(#colorStandard)" animationDuration={1000} />
                <Area type="monotone" dataKey="accelBalance" stroke="#00C853" strokeWidth={3} fill="url(#colorAccel)" animationDuration={1000} />
            </AreaChart>
        </ResponsiveContainer>
    );
}
