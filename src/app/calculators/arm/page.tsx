import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import ArmSeoContent from './ArmSeoContent';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const ArmCalculatorClient = nextDynamic(() => import('./ArmCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'ARM Mortgage Calculator | USFinNexus',
    description: 'Estimate adjustable-rate mortgage payments and test rate-reset and cap scenarios for an ARM using the loan amount, initial rate, index, margin and cap assumptions you enter.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/arm' },
    openGraph: {
        type: 'website',
        title: 'ARM Mortgage Calculator | USFinNexus',
        description: 'Model adjustable-rate mortgage payments, rate resets and cap scenarios.',
        url: 'https://usfinnexus.com/calculators/arm',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus ARM Mortgage Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ARM Mortgage Calculator | USFinNexus',
        description: 'Estimate adjustable-rate mortgage payment and rate-cap scenarios.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function ArmCalculatorPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="ARM Mortgage Calculator"
                description="Estimate adjustable-rate mortgage payments and rate-reset scenarios using the assumptions entered."
                url="https://usfinnexus.com/calculators/arm"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'ARM Mortgage Calculator', item: '/calculators/arm' }]} />
            <ArmCalculatorClient />
            <ArmSeoContent />
        </main>
    );
}
