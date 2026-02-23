import type { Metadata } from 'next';
import { Suspense } from 'react';
import RefinanceClient from './RefinanceClient';

export const metadata: Metadata = {
    title: 'Refinance Calculator 2026 — Break-Even Analysis | USFinNexus',
    description: 'Free mortgage refinance calculator. See your monthly savings, break-even point, and lifetime savings instantly. No signup needed. Updated for 2026 rates.',
    openGraph: {
        title: 'Refinance Calculator 2026 | USFinNexus',
        description: 'Compare your current mortgage to a new loan. Find your break-even point in seconds.',
        url: 'https://usfinnexus.com/calculators/refinance',
    },
};

export default function RefinancePage() {
    return (
        <Suspense fallback={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-black mb-2" style={{ color: 'var(--color-text)' }}>Refinance Savings Calculator</h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>Compare your current mortgage to a new loan and find your break-even point.</p>
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
            <RefinanceClient />
        </Suspense>
    );
}
