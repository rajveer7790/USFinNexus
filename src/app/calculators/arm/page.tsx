import type { Metadata } from 'next';
import { Suspense } from 'react';
import ArmCalculatorClient from './ArmCalculatorClient';

export const metadata: Metadata = {
    title: 'ARM Calculator 2026 — Adjustable Rate Mortgage Worst-Case Analysis | USFinNexus',
    description: 'Free ARM mortgage calculator. Instantly see your worst-case payment scenario, fully-indexed rate, and understand rate caps (5/1, 7/1 ARMs).',
    keywords: ['arm calculator', 'adjustable rate mortgage', '5/1 arm', '7/1 arm', 'arm worst case payment', 'arm rate caps'],
    openGraph: {
        title: 'ARM Calculator 2026 | USFinNexus',
        description: 'Adjustable rate mortgage calculator with worst-case scenarios and rate cap analysis.',
        url: 'https://usfinnexus.com/calculators/arm',
        type: 'website',
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/arm' },
};

export default function ArmCalculatorPage() {
    return (
        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8 animate-pulse"><div className="h-8 w-64 bg-gray-200 dark:bg-navy-700 rounded mb-4" /><div className="h-96 bg-gray-100 dark:bg-navy-800 rounded-xl" /></div>}>
            <ArmCalculatorClient />
        </Suspense>
    );
}
