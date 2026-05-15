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
    title: 'Mortgage Loan Comparison Calculator 2026 — Side-by-Side Analysis | USFinNexus',
    description: 'Compare up to 3 mortgage loan scenarios side by side. Instantly see total interest, monthly payments, and lifetime costs across different rates, terms, and down payments.',
    keywords: [
        'mortgage comparison calculator', 'loan comparison calculator',
        'compare mortgage rates calculator', 'mortgage side by side comparison',
        'loan comparison tool 2026', '15 vs 30 year mortgage comparison',
        'mortgage rate comparison', 'compare loan scenarios',
        'best mortgage comparison calculator', 'mortgage deal comparison',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/comparison' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Loan Comparison Calculator 2026 | USFinNexus',
        description: 'Compare up to 3 mortgage scenarios side by side. Monthly payments, total interest, and lifetime costs.',
        url: 'https://usfinnexus.com/calculators/comparison',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Mortgage Comparison Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Comparison Calculator 2026 | USFinNexus',
        description: 'Compare up to 3 mortgage scenarios side by side. Find the best loan for your budget.',
        images: ['https://usfinnexus.com/icon-512.png'],
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
