import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const InvestmentClient = nextDynamic(() => import('./InvestmentClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Free Compound Interest & Investment Calculator 2026',
    description: 'Calculate your investment growth with our free compound interest calculator. Visualize total interest earned vs principal deposits over time.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/investment' },
    openGraph: {
        type: 'website',
        title: 'Free Compound Interest & Investment Calculator 2026 | USFinNexus',
        description: 'Visualize how your investments grow with compound interest. Compare total interest earned vs. principal deposits over any time period. Free interactive charts.',
        url: 'https://usfinnexus.com/calculators/investment',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Compound Interest Investment Calculator 2026 — USFinNexus' }],
    },
};

export default function InvestmentPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Compound Interest & Investment Calculator 2026"
                description="Visualize how your investments grow with compound interest over any time period."
                url="https://usfinnexus.com/calculators/investment"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Compound Interest', item: '/calculators/investment' }]} />
            <InvestmentClient />
        </main>
    );
}
