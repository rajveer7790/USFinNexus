import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import VaSeoContent from './VaSeoContent';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const GovLoanClient = nextDynamic(() => import('../fha-va-usda/GovLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'VA Loan Calculator | USFinNexus',
    description:
        'Estimate a VA-backed home-loan payment and funding fee based on purchase price, down payment, rate, term and first-use or subsequent-use assumptions. Funding-fee exemptions may apply.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/va' },
    openGraph: {
        type: 'website',
        title: 'VA Loan Calculator | USFinNexus',
        description: 'Estimate a VA-backed purchase-loan payment and applicable funding-fee scenario.',
        url: 'https://usfinnexus.com/calculators/va',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus VA Loan Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VA Loan Calculator | USFinNexus',
        description: 'Estimate VA-backed home-loan payments and funding-fee scenarios.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function VaLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="VA Loan Calculator"
                description="Estimate a VA-backed purchase-loan payment and funding fee under the assumptions entered."
                url="https://usfinnexus.com/calculators/va"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'VA Loan Calculator', item: '/calculators/va' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · VA purchase funding-fee chart effective April 7, 2023 remains the current VA chart</p>
            <GovLoanClient initialTab="va" />
            <VaSeoContent />
        </main>
    );
}
