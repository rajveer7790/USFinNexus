import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import RentVsBuySeoContent from './RentVsBuySeoContent';

const RentVsBuyClient = nextDynamic(() => import('./RentVsBuyClient'), {
    loading: () => <CalculatorSkeleton />,
});
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Rent vs Buy Calculator 2026 — Should I Rent or Buy a Home?',
    description: 'Free rent vs. buy calculator. Compare total costs, home equity, and break-even year over your planned time horizon. Uses real 2026 appreciation, tax, and investment data.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/rent-vs-buy' },
    openGraph: {
        type: 'website',
        title: 'Rent vs. Buy Calculator 2026 | USFinNexus',
        description: 'Compare total renting vs. buying costs over any time horizon. Includes home appreciation, tax savings, and investment opportunity cost. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/rent-vs-buy',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Rent vs Buy Calculator 2026 — USFinNexus' }],
    },
};

export default function RentVsBuyPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Rent vs. Buy Calculator 2026"
                description="Compare total renting vs. buying costs over any time horizon. Includes home appreciation, tax savings, and opportunity cost."
                url="https://usfinnexus.com/calculators/rent-vs-buy"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Rent vs Buy', item: '/calculators/rent-vs-buy' }]} />
            <RentVsBuyClient />
            <RentVsBuySeoContent />
        </main>
    );
}
