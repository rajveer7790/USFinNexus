import type { Metadata } from 'next';
import { Suspense } from 'react';
import DebtPayoffClient from './DebtPayoffClient';

export const metadata: Metadata = {
    title: 'Debt Payoff Calculator 2026 — Snowball vs Avalanche | USFinNexus',
    description:
        'Compare debt snowball and avalanche payoff strategies. See which method saves more interest and gets you debt-free faster. Free, no signup required.',
    keywords: ['debt payoff calculator', 'snowball vs avalanche', 'debt free calculator', 'debt snowball', 'debt avalanche method'],
    openGraph: {
        title: 'Debt Payoff Calculator — Snowball vs Avalanche | USFinNexus',
        description: 'Add your debts and compare snowball vs avalanche strategies to find your fastest path to debt-free.',
        url: 'https://usfinnexus.com/calculators/debt-payoff',
        type: 'website',
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/debt-payoff' },
};

export default function DebtPayoffPage() {
    return (
        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8 animate-pulse"><div className="h-8 w-64 bg-gray-200 dark:bg-navy-700 rounded mb-4" /><div className="h-96 bg-gray-100 dark:bg-navy-800 rounded-xl" /></div>}>
            <DebtPayoffClient />
        </Suspense>
    );
}
