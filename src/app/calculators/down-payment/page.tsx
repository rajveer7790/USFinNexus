import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import DownPaymentSeoContent from './DownPaymentSeoContent';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const DownPaymentClient = nextDynamic(() => import('./DownPaymentClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Down Payment Calculator | USFinNexus',
    description: 'Calculate a home down-payment target and estimate how long it may take to reach the goal using your current savings and monthly contribution assumptions.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/down-payment' },
    openGraph: {
        type: 'website',
        title: 'Down Payment Calculator | USFinNexus',
        description: 'Plan a home down-payment savings goal and modeled timeline.',
        url: 'https://usfinnexus.com/calculators/down-payment',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Down Payment Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Down Payment Calculator | USFinNexus',
        description: 'Estimate a home down-payment savings target and timeline.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function DownPaymentPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Down Payment Calculator"
                description="Calculate a home down-payment target and modeled savings timeline."
                url="https://usfinnexus.com/calculators/down-payment"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Down Payment Calculator', item: '/calculators/down-payment' }]} />
            <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
                <div className="mb-8 max-w-2xl">
                    <h1 className="text-3xl font-black mb-2">Down Payment Calculator</h1>
                    <p className="text-gray-600">Set a home-price and down-payment goal, then estimate the savings timeline using your current balance and monthly contribution.</p>
                </div>
                <DownPaymentClient />
            </div>
            <DownPaymentSeoContent />
        </main>
    );
}
