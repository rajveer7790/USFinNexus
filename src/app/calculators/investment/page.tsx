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
    title: 'Compound Interest & Investment Growth Calculator 2026 | USFinNexus',
    description: 'Calculate investment growth with compound interest. See how regular contributions grow over time with interactive charts. Free investment calculator with PDF export.',
    keywords: [
        'compound interest calculator', 'investment calculator', 'investment growth calculator',
        'compound interest calculator 2026', 'savings growth calculator',
        'compound interest with monthly contributions', 'investment return calculator',
        'how does compound interest work', 'compound growth calculator',
        'interest on investment calculator', 'future value calculator',
        'stock market return calculator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/investment' },
    openGraph: {
        type: 'website',
        title: 'Compound Interest & Investment Growth Calculator 2026 | USFinNexus',
        description: 'See how your investments compound over time. Interactive charts with monthly contributions. Free calculator.',
        url: 'https://usfinnexus.com/calculators/investment',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Investment Compound Interest Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Compound Interest Calculator 2026 | USFinNexus',
        description: 'Watch your investments grow with the power of compounding. Free investment growth calculator.',
        images: ['https://usfinnexus.com/icon-512.png'],
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
