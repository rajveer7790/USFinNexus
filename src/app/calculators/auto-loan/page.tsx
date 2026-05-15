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
    title: 'Auto Loan Calculator 2026 — Monthly Car Payment & Total Cost | USFinNexus',
    description: 'Free auto loan calculator for 2026. Calculate monthly car payments, total interest paid, sales tax estimate, and download a full amortization schedule.',
    keywords: [
        'auto loan calculator', 'car payment calculator', 'auto loan calculator 2026',
        'monthly car payment calculator', 'car loan interest calculator',
        'vehicle loan calculator', 'auto financing calculator',
        'car loan amortization', 'car payment with tax and fees',
        'used car loan calculator', 'auto loan payment estimator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/auto-loan' },
    openGraph: {
        type: 'website',
        title: 'Auto Loan Calculator 2026 — Monthly Car Payment | USFinNexus',
        description: 'Calculate your monthly car payment, total interest, and full amortization schedule. Free auto loan calculator.',
        url: 'https://usfinnexus.com/calculators/auto-loan',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Auto Loan Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Auto Loan Calculator 2026 | Monthly Car Payment | USFinNexus',
        description: 'Monthly car payment, total interest, and full amortization. Free auto loan calculator.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
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
