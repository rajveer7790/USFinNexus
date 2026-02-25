import type { Metadata } from 'next';
import { Suspense } from 'react';
import BudgetClient from './BudgetClient';

export const metadata: Metadata = {
    title: 'Budget Calculator 2026 — 50/30/20 Rule Planner | USFinNexus',
    description:
        'Plan your monthly budget using the 50/30/20 rule. See where your money goes across needs, wants, and savings. Free budget planner, no signup required.',
    keywords: ['50 30 20 budget calculator', 'budget planner', 'monthly budget calculator', 'budgeting tool free', '50 30 20 rule'],
    openGraph: {
        title: '50/30/20 Budget Calculator 2026 | USFinNexus',
        description: 'Free budget planner based on the 50/30/20 rule. Categorize spending and find savings opportunities.',
        url: 'https://usfinnexus.com/calculators/budget',
        type: 'website',
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/budget' },
};

export default function BudgetPage() {
    return (
        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8 animate-pulse"><div className="h-8 w-64 bg-gray-200 dark:bg-navy-700 rounded mb-4" /><div className="h-96 bg-gray-100 dark:bg-navy-800 rounded-xl" /></div>}>
            <BudgetClient />
        </Suspense>
    );
}
