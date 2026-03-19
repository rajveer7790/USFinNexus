import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const ComparisonClient = nextDynamic(() => import('./ComparisonClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Loan Comparison Calculator 2026 — Side-by-Side | USFinNexus',
    description: 'Compare up to 3 mortgage scenarios side by side in 2026. Instantly compare monthly payments, total interest, and loan costs with different rates, terms, and down payments.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/comparison' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Loan Comparison Calculator 2026 | USFinNexus',
        description: 'Compare up to 3 mortgage scenarios side by side — different rates, terms, and down payments — to find the best loan for your 2026 home purchase.',
        url: 'https://usfinnexus.com/calculators/comparison',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Mortgage Loan Comparison Calculator 2026 — USFinNexus' }],
    },
};

export default function ComparisonPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Loan Comparison Calculator 2026"
                description="Compare up to 3 mortgage scenarios side by side with different rates, terms, and down payments."
                url="https://usfinnexus.com/calculators/comparison"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Loan Comparison', item: '/calculators/comparison' }]} />
            <div className="pt-8">
                    <ComparisonClient />
                </div>
        </main>
    );
}
