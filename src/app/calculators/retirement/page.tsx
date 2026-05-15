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
    title: 'Free Retirement Calculator 2026 — Plan Your Nest Egg | USFinNexus',
    description: 'Calculate how much you need to retire comfortably and see if your savings are on track. Free retirement planner with compound growth projections and PDF export.',
    keywords: [
        'retirement calculator', 'retirement savings calculator', 'how much to retire',
        'retirement planner 2026', 'nest egg calculator', 'retirement income calculator',
        'retire at 65 calculator', '401k retirement calculator',
        'retirement fund calculator', 'how much do I need to retire',
        'retirement projection calculator', 'compound growth retirement calculator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/retirement' },
    openGraph: {
        type: 'website',
        title: 'Retirement Calculator 2026 — Plan Your Nest Egg | USFinNexus',
        description: 'How much do you need to retire? See if your savings are on track with free compound growth projections.',
        url: 'https://usfinnexus.com/calculators/retirement',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Retirement Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Retirement Calculator 2026 | Plan Your Nest Egg | USFinNexus',
        description: 'Are your retirement savings on track? See how much you need and when you can retire.',
        images: ['https://usfinnexus.com/icon-512.png'],
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
