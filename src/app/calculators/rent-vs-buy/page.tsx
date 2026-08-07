import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import RentVsBuySeoContent from './RentVsBuySeoContent';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const RentVsBuyClient = nextDynamic(() => import('./RentVsBuyClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Rent vs. Buy Calculator | USFinNexus',
    description: 'Compare modeled renting and homeownership costs over time using your rent, home price, mortgage, taxes, insurance, appreciation, investment-return and selling-cost assumptions.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/rent-vs-buy' },
    openGraph: {
        type: 'website',
        title: 'Rent vs. Buy Calculator | USFinNexus',
        description: 'Compare renting and homeownership scenarios using assumptions you control.',
        url: 'https://usfinnexus.com/calculators/rent-vs-buy',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Rent vs. Buy Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rent vs. Buy Calculator | USFinNexus',
        description: 'Compare modeled renting and homeownership costs over time.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function RentVsBuyPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Rent vs. Buy Calculator"
                description="Compare modeled renting and homeownership costs over a selected time horizon using user-entered assumptions."
                url="https://usfinnexus.com/calculators/rent-vs-buy"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Rent vs. Buy Calculator', item: '/calculators/rent-vs-buy' }]} />
            <RentVsBuyClient />
            <RentVsBuySeoContent />
        </main>
    );
}
