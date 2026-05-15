import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import AmortizationSeoContent from './AmortizationSeoContent';

const MortgageCalculator = nextDynamic(() => import('../mortgage/MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Amortization Schedule Calculator 2026 | USFinNexus',
    description: 'Free mortgage amortization schedule calculator. See exact month-by-month breakdown of principal vs interest, extra payments impact, and total interest over 15 or 30 years.',
    keywords: [
        'amortization schedule calculator', 'mortgage amortization calculator',
        'amortization table', 'loan amortization schedule', 'amortization calculator 2026',
        'principal vs interest calculator', 'extra payment mortgage calculator',
        'mortgage payoff calculator', 'amortization schedule with extra payments',
        'monthly amortization breakdown', 'mortgage principal calculator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/amortization' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Amortization Schedule Calculator 2026 | USFinNexus',
        description: 'Full month-by-month amortization table with extra payments. See exactly how much interest you can save. Free PDF export.',
        url: 'https://usfinnexus.com/calculators/amortization',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Amortization Schedule Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Amortization Schedule Calculator 2026 | USFinNexus',
        description: 'Full month-by-month amortization table. See principal vs interest every month. Free PDF export.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function AmortizationPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Amortization Schedule Calculator 2026"
                description="Generate a full month-by-month amortization schedule showing principal vs. interest and extra payment impacts."
                url="https://usfinnexus.com/calculators/amortization"
                dateModified="2026-03-01"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Amortization Calculator', item: '/calculators/amortization' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Last updated: March 2026 &middot; Standard US mortgage amortization formula</p>
                            <MortgageCalculator initialTab="amortization" />
            <AmortizationSeoContent />
        </main>
    );
}
