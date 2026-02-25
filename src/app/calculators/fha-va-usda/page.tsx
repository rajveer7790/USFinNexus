import type { Metadata } from 'next';
import { Suspense } from 'react';
import GovLoanClient from './GovLoanClient';

export const metadata: Metadata = {
    title: 'FHA, VA & USDA Loan Calculator 2026 — Government Loan Comparison | USFinNexus',
    description:
        'Compare FHA, VA, and USDA loan payments with upfront MIP, VA funding fees, and USDA guarantee fees. Free government mortgage calculator with full PITI breakdown.',
    keywords: ['fha loan calculator', 'va loan calculator', 'usda loan calculator', 'government loan comparison', 'fha mip 2026', 'va funding fee'],
    openGraph: {
        title: 'FHA / VA / USDA Loan Calculator 2026 | USFinNexus',
        description: 'Government loan calculator with MIP, VA funding fee, and USDA guarantee fee comparisons.',
        url: 'https://usfinnexus.com/calculators/fha-va-usda',
        type: 'website',
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/fha-va-usda' },
};

export default function GovLoanPage() {
    return (
        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8 animate-pulse"><div className="h-8 w-64 bg-gray-200 dark:bg-navy-700 rounded mb-4" /><div className="h-96 bg-gray-100 dark:bg-navy-800 rounded-xl" /></div>}>
            <GovLoanClient />
        </Suspense>
    );
}
