'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ChartRow = { age: number; balance: number };

export default function RetirementChart({ chartData }: { chartData: ChartRow[] }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0da6f2" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#0a1628" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                <XAxis
                    dataKey="age"
                    stroke="#94a3b8"
                    tickFormatter={(val) => `Age ${val}`}
                    minTickGap={30}
                />
                <YAxis
                    stroke="#94a3b8"
                    tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                    width={80}
                />
                <Tooltip
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Balance']}
                    labelFormatter={(label) => `Age ${label}`}
                    contentStyle={{ backgroundColor: 'rgba(6, 15, 30, 0.9)', borderColor: 'rgba(13, 166, 242, 0.4)', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ color: '#0da6f2', fontWeight: 'bold' }}
                />
                <Area
                    type="monotone"
                    dataKey="balance"
                    stroke="#0da6f2"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorBalance)"
                    animationDuration={1500}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
