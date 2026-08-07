import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import AmortizationSeoContent from './AmortizationSeoContent';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const MortgageCalculator = nextDynamic(() => import('../mortgage/MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Amortization Calculator | USFinNexus',
    description: 'Generate a mortgage amortization schedule showing principal, interest, remaining balance and the impact of extra principal payments.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/amortization' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Amortization Calculator | USFinNexus',
        description: 'View a mortgage amortization schedule with principal, interest, balance and extra-payment scenarios.',
        url: 'https://usfinnexus.com/calculators/amortization',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Mortgage Amortization Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Amortization Calculator | USFinNexus',
        description: 'View principal, interest and remaining balance by mortgage payment.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function AmortizationPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Amortization Calculator"
                description="Generate a mortgage amortization schedule showing principal, interest, remaining balance and extra-payment impacts."
                url="https://usfinnexus.com/calculators/amortization"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Mortgage Amortization Calculator', item: '/calculators/amortization' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Standard fixed-rate amortization math</p>
            <h1 className="sr-only">Mortgage Amortization Calculator</h1>
            <MortgageCalculator initialTab="amortization" />
            <AmortizationSeoContent />
        </main>
    );
}
