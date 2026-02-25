import type { Metadata } from 'next';
import { Suspense } from 'react';
import HELOCClient from './HELOCClient';

export const metadata: Metadata = {
    title: 'Free HELOC Calculator 2026 — Home Equity Line of Credit | USFinNexus',
    description:
        'Calculate your HELOC payments, available equity, and total interest. See draw-period vs repayment-period costs instantly. Free, no signup required.',
    keywords: ['heloc calculator', 'home equity line of credit', 'heloc payments', 'heloc 2026', 'home equity calculator'],
    openGraph: {
        title: 'Free HELOC Calculator 2026 | USFinNexus',
        description: 'Home equity line of credit calculator with draw and repayment period breakdown.',
        url: 'https://usfinnexus.com/calculators/heloc',
        type: 'website',
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/heloc' },
};

export default function HELOCPage() {
    return (
        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8 animate-pulse"><div className="h-8 w-64 bg-gray-200 dark:bg-navy-700 rounded mb-4" /><div className="h-96 bg-gray-100 dark:bg-navy-800 rounded-xl" /></div>}>
            <HELOCClient />
        </Suspense>
    );
}
