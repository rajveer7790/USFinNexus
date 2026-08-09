import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import AmortizationSeoContent from './AmortizationSeoContent';

const MortgageCalculator = nextDynamic(() => import('../mortgage/MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Amortization Calculator',
    description: 'Generate a month-by-month mortgage amortization schedule showing principal, interest, remaining balance and the effect of extra principal payments.',
    alternates: { canonical: '/calculators/amortization' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Amortization Calculator',
        description: 'View a month-by-month mortgage amortization schedule and model extra principal payments.',
        url: 'https://usfinnexus.com/calculators/amortization',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Mortgage Amortization Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Amortization Calculator',
        description: 'View principal, interest and remaining balance month by month.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function AmortizationPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Amortization Calculator"
                description="Generate a month-by-month mortgage amortization schedule showing principal, interest, remaining balance and extra-payment impacts."
                url="https://usfinnexus.com/calculators/amortization"
                dateModified="2026-08-09"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Mortgage Amortization Calculator', item: '/calculators/amortization' }]} />
            <MortgageCalculator initialTab="amortization" />
            <SemrushIntentSection slug="amortization" />
            <AmortizationSeoContent />
        </main>
    );
}
