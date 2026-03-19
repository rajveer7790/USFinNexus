import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const RetirementClient = nextDynamic(() => import('./RetirementClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Free Retirement Calculator 2026 | Plan Your Nest Egg',
    description: 'Calculate how much you need to retire and see if your current savings are on track. Free instant PDF and CSV exports. No signup required.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/retirement' },
    openGraph: {
        type: 'website',
        title: 'Free Retirement Calculator 2026 | Plan Your Nest Egg | USFinNexus',
        description: 'Calculate how much you need to retire and whether your savings are on track. See projected nest egg growth and find out your retirement age. Free PDF export.',
        url: 'https://usfinnexus.com/calculators/retirement',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Free Retirement Calculator 2026 — USFinNexus' }],
    },
};

export default function RetirementPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Free Retirement Calculator 2026"
                description="Calculate how much you need to retire and see if your savings are on track with projected nest egg growth."
                url="https://usfinnexus.com/calculators/retirement"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Retirement Planner', item: '/calculators/retirement' }]} />
            <RetirementClient />
        </main>
    );
}
