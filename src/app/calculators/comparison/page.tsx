import type { Metadata } from 'next';
import { Suspense } from 'react';
import ComparisonClient from './ComparisonClient';

export const metadata: Metadata = {
    title: 'Mortgage Loan Comparison Calculator — Side-by-Side | USFinNexus',
    description: 'Compare up to 3 mortgage scenarios side by side. Instantly compare monthly payments, total interest, and loan costs with different rates, terms, and down payments.',
    openGraph: {
        title: 'Mortgage Loan Comparison Calculator | USFinNexus',
        description: 'Compare up to 3 mortgage scenarios simultaneously to find the best terms.',
        url: 'https://usfinnexus.com/calculators/comparison',
    },
};

export default function ComparisonPage() {
    return (
        <Suspense fallback={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-black mb-2" style={{ color: 'var(--color-text)' }}>Side-by-Side Loan Comparison</h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>Compare up to 3 mortgage scenarios simultaneously.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="card p-5 animate-pulse h-96" />
                    <div className="card p-5 animate-pulse h-96" />
                    <div className="card p-5 animate-pulse h-96" />
                </div>
            </div>
        }>
            <ComparisonClient />
        </Suspense>
    );
}
