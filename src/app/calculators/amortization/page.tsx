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
    title: 'Amortization Schedule Calculator 2026 — See Your Principal and Interest | USFinNexus',
    description: 'Free mortgage amortization schedule calculator. See exact month-by-month breakdown of principal vs interest over 15 or 30 years.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/amortization' },
    openGraph: {
        type: 'website',
        title: 'Amortization Schedule Calculator 2026 | USFinNexus',
        description: 'Generate a full month-by-month mortgage amortization schedule. See principal vs. interest breakdown and the impact of extra payments over 15 or 30 years.',
        url: 'https://usfinnexus.com/calculators/amortization',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Mortgage Amortization Schedule Calculator 2026 — USFinNexus' }],
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
