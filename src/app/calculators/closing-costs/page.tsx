import type { Metadata } from 'next';
import { Suspense } from 'react';
import ClosingCostsClient from './ClosingCostsClient';

export const metadata: Metadata = {
    title: 'Closing Costs Calculator 2026 — Buyer & Seller Breakdown | USFinNexus',
    description:
        'Estimate buyer and seller closing costs for any US home purchase. State-specific transfer taxes, title fees, prepaid costs, and agent commissions. Free, no signup.',
    keywords: ['closing costs calculator', 'home closing costs 2026', 'buyer closing costs', 'seller closing costs', 'transfer tax by state'],
    openGraph: {
        title: 'Closing Costs Calculator 2026 | USFinNexus',
        description: 'Full closing costs breakdown for all 50 states with buyer and seller estimates.',
        url: 'https://usfinnexus.com/calculators/closing-costs',
        type: 'website',
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/closing-costs' },
};

export default function ClosingCostsPage() {
    return (
        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8 animate-pulse"><div className="h-8 w-64 bg-gray-200 dark:bg-navy-700 rounded mb-4" /><div className="h-96 bg-gray-100 dark:bg-navy-800 rounded-xl" /></div>}>
            <ClosingCostsClient />
        </Suspense>
    );
}
