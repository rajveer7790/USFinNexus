import type { Metadata } from 'next';
import { Suspense } from 'react';
import RentVsBuyClient from './RentVsBuyClient';

export const metadata: Metadata = {
    title: 'Rent vs Buy Calculator 2026 — Should I Rent or Buy a Home?',
    description: 'Free rent vs. buy calculator. Compare total costs, home equity, and break-even year over your planned time horizon. Uses real 2026 appreciation, tax, and investment data.',
    openGraph: {
        title: 'Rent vs. Buy Calculator 2026 | USFinNexus',
        description: 'Make the most important financial decision with real numbers. Compare renting vs. buying side by side.',
        url: 'https://usfinnexus.com/calculators/rent-vs-buy',
    },
};

export default function RentVsBuyPage() {
    return (
        <Suspense fallback={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-black mb-2" style={{ color: 'var(--color-text)' }}>Rent vs. Buy Calculator</h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>Find out whether buying or renting makes more financial sense for your situation.</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                    <div className="xl:col-span-2 space-y-4">
                        <div className="card p-6 animate-pulse h-72" />
                        <div className="card p-6 animate-pulse h-48" />
                    </div>
                    <div className="xl:col-span-3 card p-6 animate-pulse h-80" />
                </div>
            </div>
        }>
            <RentVsBuyClient />
        </Suspense>
    );
}
