import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import FhaSeoContent from './FhaSeoContent';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const GovLoanClient = nextDynamic(() => import('../fha-va-usda/GovLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'FHA Mortgage Calculator | USFinNexus',
    description:
        'Estimate an FHA mortgage payment including principal, interest, property taxes, homeowners insurance, upfront MIP and annual mortgage insurance under the assumptions entered.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/fha' },
    openGraph: {
        type: 'website',
        title: 'FHA Mortgage Calculator | USFinNexus',
        description: 'Estimate an FHA mortgage payment with upfront and annual mortgage-insurance assumptions.',
        url: 'https://usfinnexus.com/calculators/fha',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus FHA Mortgage Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FHA Mortgage Calculator | USFinNexus',
        description: 'Estimate FHA principal, interest, taxes, insurance and mortgage-insurance costs.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function FhaLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="FHA Mortgage Calculator"
                description="Estimate an FHA mortgage payment including principal, interest, property taxes, insurance and mortgage-insurance assumptions."
                url="https://usfinnexus.com/calculators/fha"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'FHA Mortgage Calculator', item: '/calculators/fha' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · FHA estimates are subject to HUD program rules and case-specific mortgage-insurance treatment</p>
            <GovLoanClient initialTab="fha" />
            <FhaSeoContent />
        </main>
    );
}
