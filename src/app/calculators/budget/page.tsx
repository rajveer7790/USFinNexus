import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const BudgetClient = nextDynamic(() => import('./BudgetClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Budget Calculator 2026 — 50/30/20 Rule Planner | USFinNexus',
    description:
        'Plan your monthly budget using the 50/30/20 rule. See where your money goes across needs, wants, and savings. Free budget planner, no signup required.',
    keywords: ['50 30 20 budget calculator', 'budget planner', 'monthly budget calculator', 'budgeting tool free', '50 30 20 rule'],
    openGraph: {
        type: 'website',
        title: '50/30/20 Budget Calculator 2026 | USFinNexus',
        description: 'Free monthly budget planner using the 50/30/20 rule. Categorize your spending across needs, wants, and savings. Find opportunities to save more. No signup.',
        url: 'https://usfinnexus.com/calculators/budget',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: '50/30/20 Budget Calculator 2026 — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/budget' },
};

export default function BudgetPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="50/30/20 Budget Calculator 2026"
                description="Free monthly budget planner using the 50/30/20 rule. Categorize spending and find savings opportunities."
                url="https://usfinnexus.com/calculators/budget"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Budget Planner', item: '/calculators/budget' }]} />
            <BudgetClient />
        </main>
    );
}
