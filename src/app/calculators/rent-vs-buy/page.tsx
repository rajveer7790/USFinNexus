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
    title: 'Rent vs Buy Calculator 2026 — Should I Rent or Buy a Home? | USFinNexus',
    description: 'Free rent vs buy calculator. Compare total 5-year costs, home equity, and break-even year. Uses real 2026 appreciation, tax benefits, and investment return data.',
    keywords: [
        'rent vs buy calculator', 'should I rent or buy', 'rent vs buy 2026',
        'renting vs buying a home calculator', 'is it better to rent or buy',
        'rent or buy calculator 2026', 'home buying break even calculator',
        'rent vs mortgage calculator', 'buy vs rent comparison',
        'cost of renting vs buying', 'renting vs buying comparison',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/rent-vs-buy' },
    openGraph: {
        type: 'website',
        title: 'Rent vs Buy Calculator 2026 | USFinNexus',
        description: 'Should you rent or buy? Compare 5-year total costs, equity growth, and break-even point with real 2026 data.',
        url: 'https://usfinnexus.com/calculators/rent-vs-buy',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Rent vs Buy Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rent vs Buy Calculator 2026 | Should I Rent or Buy?',
        description: 'Compare total 5-year costs, equity growth, and break-even year. Find out if buying makes sense for you.',
        images: ['https://usfinnexus.com/icon-512.png'],
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
