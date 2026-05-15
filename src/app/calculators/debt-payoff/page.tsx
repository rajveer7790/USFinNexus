import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const DebtPayoffClient = nextDynamic(() => import('./DebtPayoffClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Debt Payoff Calculator 2026 — Snowball vs Avalanche Strategy | USFinNexus',
    description: 'Compare debt snowball vs avalanche payoff methods across all your debts. See which strategy gets you debt-free fastest and saves the most interest. Free, no signup.',
    keywords: [
        'debt payoff calculator', 'debt snowball calculator', 'debt avalanche calculator',
        'debt payoff planner', 'get out of debt calculator', 'debt free calculator',
        'snowball vs avalanche debt', 'debt payoff plan calculator',
        'multiple debt payoff calculator', 'debt repayment calculator 2026',
        'how to pay off debt faster', 'debt reduction calculator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/debt-payoff' },
    openGraph: {
        type: 'website',
        title: 'Debt Payoff Calculator 2026 — Snowball vs Avalanche | USFinNexus',
        description: 'Compare snowball vs avalanche across all your debts. Find your debt-free date and total interest savings.',
        url: 'https://usfinnexus.com/calculators/debt-payoff',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Debt Payoff Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Debt Payoff Calculator 2026 | Snowball vs Avalanche | USFinNexus',
        description: 'Snowball or avalanche — which gets you debt-free faster? Compare strategies across all your debts.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function DebtPayoffPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Debt Payoff Calculator — Snowball vs Avalanche"
                description="Compare debt snowball vs avalanche payoff strategies and find your fastest path to becoming debt-free."
                url="https://usfinnexus.com/calculators/debt-payoff"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Debt Payoff Calculator', item: '/calculators/debt-payoff' }]} />
            <DebtPayoffClient />
        </main>
    );
}
