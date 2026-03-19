import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const InterestOnlyClient = nextDynamic(() => import('./InterestOnlyClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Interest-Only Mortgage Calculator 2026 | USFinNexus',
    description: 'Calculate your interest-only mortgage payments and see exactly how much your payment will jump when the loan fully amortizes.',
    keywords: ['interest only mortgage calculator', 'interest only payment', 'io mortgage', 'interest only vs amortized'],
    openGraph: {
        type: 'website',
        title: 'Interest-Only Mortgage Calculator 2026 | USFinNexus',
        description: 'Calculate interest-only mortgage payments and see exactly how much your payment jumps when the loan fully amortizes. Compare IO vs standard payments side by side.',
        url: 'https://usfinnexus.com/calculators/interest-only',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Interest-Only Mortgage Calculator 2026 — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/interest-only' },
};

export default function InterestOnlyPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Interest-Only Mortgage Calculator 2026"
                description="Calculate interest-only mortgage payments and see the payment jump when the loan fully amortizes."
                url="https://usfinnexus.com/calculators/interest-only"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Interest-Only Calculator', item: '/calculators/interest-only' }]} />
                            <InterestOnlyClient />
        </main>
    );
}
