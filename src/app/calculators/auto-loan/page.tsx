import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const AutoLoanClient = nextDynamic(() => import('./AutoLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Auto Loan Calculator 2026 — Monthly Car Payment & Taxes | USFinNexus',
    description: 'Free auto loan calculator for 2026. Calculate monthly car payments, estimate sales tax, trade-in value, and download a full amortization schedule.',
    keywords: ['auto loan calculator', 'car payment calculator', 'car loan with taxes', 'amortization car loan', 'vehicle finance calculator'],
    openGraph: {
        type: 'website',
        title: 'Auto Loan Calculator 2026 | USFinNexus',
        description: 'Calculate your monthly car payment with sales tax, trade-in value, and fees. Get a full amortization schedule instantly. Free auto loan calculator, no signup.',
        url: 'https://usfinnexus.com/calculators/auto-loan',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Auto Loan Calculator 2026 — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/auto-loan' },
};

export default function AutoLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Auto Loan Calculator 2026"
                description="Calculate your monthly car payment with taxes and trade-in. Get a full amortization schedule instantly."
                url="https://usfinnexus.com/calculators/auto-loan"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Auto Loan Calculator', item: '/calculators/auto-loan' }]} />
                            <AutoLoanClient />
        </main>
    );
}
