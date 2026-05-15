import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const GovLoanClient = nextDynamic(() => import('./GovLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'FHA vs VA vs USDA Loan Calculator 2026 — Compare Government Loans | USFinNexus',
    description: 'Side-by-side comparison of FHA, VA, and USDA loan programs. See which government mortgage fits your budget with the lowest down payment and total cost.',
    keywords: [
        'FHA vs VA vs USDA loan calculator', 'government loan comparison',
        'FHA VA USDA comparison calculator', 'best government mortgage program',
        'FHA loan requirements 2026', 'VA loan eligibility calculator',
        'USDA loan calculator', 'zero down payment mortgage calculator',
        'low down payment mortgage comparison', 'government backed mortgage calculator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/fha-va-usda' },
    openGraph: {
        type: 'website',
        title: 'FHA vs VA vs USDA Loan Calculator 2026 | USFinNexus',
        description: 'Compare FHA, VA, and USDA government loans side by side. Find which program gives you the lowest payment.',
        url: 'https://usfinnexus.com/calculators/fha-va-usda',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'FHA VA USDA Loan Comparison Calculator — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FHA vs VA vs USDA Loan Calculator 2026 | USFinNexus',
        description: 'Which government loan saves you more? Compare FHA, VA, and USDA side by side.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function GovLoanComparisonPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="FHA vs VA vs USDA Loan Calculator 2026"
                description="Side-by-side comparison of FHA, VA, and USDA government loan programs. Compare down payments, fees, and monthly costs."
                url="https://usfinnexus.com/calculators/fha-va-usda"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Gov Loan Comparison', item: '/calculators/fha-va-usda' }]} />
                            <GovLoanClient />
        </main>
    );
}
