import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const PointsBuyDownClient = nextDynamic(() => import('./PointsBuyDownClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Points Buy-Down Calculator 2026 — Break-Even Analysis | USFinNexus',
    description: 'Free mortgage points calculator for 2026. Calculate if paying discount points upfront is worth it. See monthly savings and find your break-even point.',
    keywords: ['mortgage points calculator', 'discount points calculator', 'points vs rate', 'buy down interest rate', 'mortgage rate calculator'],
    openGraph: {
        type: 'website',
        title: 'Mortgage Points Buy-Down Calculator 2026 | USFinNexus',
        description: 'Calculate if paying discount points upfront is worth it. Find your break-even point and total interest savings from buying down your mortgage rate. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/points-buydown',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Mortgage Points Buy-Down Calculator 2026 — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/points-buydown' },
};

export default function PointsBuyDownPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Points Buy-Down Calculator 2026"
                description="Calculate if paying discount points is worth it. Find your break-even point and total interest savings."
                url="https://usfinnexus.com/calculators/points-buydown"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Points Buy-Down Calculator', item: '/calculators/points-buydown' }]} />
                            <PointsBuyDownClient />
        </main>
    );
}
