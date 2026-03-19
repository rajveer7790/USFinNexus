'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ChartRow = { year: number; balance: number; principal: number; interest: number };

export default function InvestmentChart({ chartData }: { chartData: ChartRow[] }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorPrincipal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1e293b" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#1e293b" stopOpacity={0.2} />
                    </linearGradient>
                    <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00C853" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#00C853" stopOpacity={0.2} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="year" stroke="#94a3b8" tickFormatter={(val) => `Yr ${val}`} />
                <YAxis stroke="#94a3b8" tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`} width={60} />
                <Tooltip
                    formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name.charAt(0).toUpperCase() + name.slice(1)]}
                    labelFormatter={(label) => `Year ${label}`}
                    contentStyle={{ backgroundColor: 'rgba(6, 15, 30, 0.95)', borderColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: '#fff' }}
                />
                <Area type="monotone" dataKey="principal" stackId="1" stroke="#475569" fill="url(#colorPrincipal)" animationDuration={1000} />
                <Area type="monotone" dataKey="interest" stackId="1" stroke="#00C853" fill="url(#colorInterest)" animationDuration={1000} />
            </AreaChart>
        </ResponsiveContainer>
    );
}
