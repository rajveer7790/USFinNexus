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
    title: 'Debt Payoff Calculator 2026 — Snowball vs Avalanche | USFinNexus',
    description:
        'Compare debt snowball and avalanche payoff strategies. See which method saves more interest and gets you debt-free faster. Free, no signup required.',
    keywords: ['debt payoff calculator', 'snowball vs avalanche', 'debt free calculator', 'debt snowball', 'debt avalanche method'],
    openGraph: {
        type: 'website',
        title: 'Debt Payoff Calculator 2026 — Snowball vs Avalanche | USFinNexus',
        description: 'Compare debt snowball vs. avalanche payoff strategies. See which method saves more interest and gets you debt-free faster. Free interactive calculator, no signup.',
        url: 'https://usfinnexus.com/calculators/debt-payoff',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Debt Payoff Snowball vs Avalanche Calculator 2026 — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/debt-payoff' },
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
