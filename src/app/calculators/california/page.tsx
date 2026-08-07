import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import CaliforniaSeoContent from './CaliforniaSeoContent';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const MortgageCalculator = nextDynamic(() => import('../mortgage/MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'California Mortgage Calculator | USFinNexus',
    description: 'Estimate a California mortgage payment and model property taxes, insurance, PMI and HOA costs. Learn how Proposition 13 assessed-value limits and 2026 conforming loan limits affect planning.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/california' },
    openGraph: {
        type: 'website',
        title: 'California Mortgage Calculator | USFinNexus',
        description: 'Estimate a California mortgage payment with Prop 13 and 2026 loan-limit context.',
        url: 'https://usfinnexus.com/calculators/california',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus California Mortgage Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'California Mortgage Calculator | USFinNexus',
        description: 'Estimate a California mortgage payment and model property-tax and ownership costs.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function CaliforniaPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="California Mortgage Calculator"
                description="Estimate a California mortgage payment and model property taxes, insurance, PMI and HOA costs."
                url="https://usfinnexus.com/calculators/california"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'California Mortgage Calculator', item: '/calculators/california' }]} />
            <div className="max-w-7xl mx-auto pt-8">
                <h1 className="text-3xl font-black mb-2">California Mortgage Calculator</h1>
                <p className="text-gray-600 mb-2">Estimate principal, interest and other housing costs using the property-tax, insurance and HOA amounts relevant to the California home you are considering.</p>
                <p className="text-xs text-gray-500 mb-8">Reviewed August 7, 2026 · Property-tax bills can include the Proposition 13 base levy plus voter-approved debt and local assessments.</p>
            </div>
            <MortgageCalculator />
            <CaliforniaSeoContent />
        </main>
    );
}
