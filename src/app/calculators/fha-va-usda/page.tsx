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
    description: 'Side-by-side comparison of FHA, VA, and USDA loans. See which mortgage program fits your budget with lowest down payment and interest costs.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/fha-va-usda' },
    openGraph: {
        type: 'website',
        title: 'FHA vs VA vs USDA Loan Calculator 2026 | USFinNexus',
        description: 'Side-by-side comparison of FHA, VA, and USDA government loan programs. See down payments, MIP/funding fees, and monthly costs for each. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/fha-va-usda',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'FHA VA USDA Government Loan Comparison 2026 — USFinNexus' }],
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
