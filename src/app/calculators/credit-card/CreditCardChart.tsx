'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ChartRow = { month: number; yearStr?: string; balance: number };

export default function CreditCardChart({ chartData }: { chartData: ChartRow[] }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorCardBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="yearStr" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" tickFormatter={(val) => `$${val}`} width={60} />
                <Tooltip
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Remaining Balance']}
                    contentStyle={{ backgroundColor: 'rgba(6, 15, 30, 0.95)', borderColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: '#fff' }}
                />
                <Area type="monotone" dataKey="balance" stroke="#f59e0b" strokeWidth={3} fill="url(#colorCardBalance)" animationDuration={1000} />
            </AreaChart>
        </ResponsiveContainer>
    );
}
