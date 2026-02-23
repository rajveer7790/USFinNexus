'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '@/lib/formulas';

interface Props {
    yearlyData: { year: number; buyCumulative: number; rentCumulative: number }[];
}

export default function RentVsBuyChart({ yearlyData }: Props) {
    return (
        <>
            <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: 'var(--color-text-muted)' }}>Cumulative Cost Over Time</p>
            <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={yearlyData} margin={{ left: 10, right: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="year" tickFormatter={v => `Yr ${v}`} tick={{ fontSize: 10, fill: 'var(--color-text-muted)' }} />
                    <YAxis tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 10, fill: 'var(--color-text-muted)' }} width={55} />
                    <Tooltip formatter={(v: number) => formatCurrency(v)} />
                    <Legend iconType="circle" iconSize={10} />
                    <Area type="monotone" dataKey="buyCumulative" name="Buy (Cumulative)" stroke="#0A2540" fill="rgba(10,37,64,0.1)" strokeWidth={2} />
                    <Area type="monotone" dataKey="rentCumulative" name="Rent (Cumulative)" stroke="#3b82f6" fill="rgba(59,130,246,0.1)" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}
