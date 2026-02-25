import type { Metadata } from 'next';
import { Suspense } from 'react';
import InterestOnlyClient from './InterestOnlyClient';

export const metadata: Metadata = {
    title: 'Interest-Only Mortgage Calculator 2026 | USFinNexus',
    description: 'Calculate your interest-only mortgage payments and see exactly how much your payment will jump when the loan fully amortizes.',
    keywords: ['interest only mortgage calculator', 'interest only payment', 'io mortgage', 'interest only vs amortized'],
    openGraph: {
        title: 'Interest-Only Mortgage Calculator 2026 | USFinNexus',
        description: 'Compare interest-only period payments vs fully amortized payments.',
        url: 'https://usfinnexus.com/calculators/interest-only',
        type: 'website',
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/interest-only' },
};

export default function InterestOnlyPage() {
    return (
        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8 animate-pulse"><div className="h-8 w-64 bg-gray-200 dark:bg-navy-700 rounded mb-4" /><div className="h-96 bg-gray-100 dark:bg-navy-800 rounded-xl" /></div>}>
            <InterestOnlyClient />
        </Suspense>
    );
}
