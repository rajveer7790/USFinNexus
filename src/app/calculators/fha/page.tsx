import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import FhaSeoContent from './FhaSeoContent';

const GovLoanClient = nextDynamic(() => import('../fha-va-usda/GovLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'FHA Loan Calculator 2026 — MIP, PMI, and Payment Breakdown | USFinNexus',
    description:
        'Calculate your exact FHA mortgage payment including the upfront and annual Mortgage Insurance Premium (MIP). Free FHA calculator with 3.5% down payment options.',
    keywords: ['fha loan calculator', 'fha mortgage calculator', 'fha mip calculator', 'fha monthly payment', 'fha loans 2026'],
    openGraph: {
        type: 'website',
        title: 'FHA Loan Calculator 2026 with MIP | USFinNexus',
        description: 'Calculate your exact FHA loan monthly payment including upfront MIP (1.75%) and annual MIP fees. See the true cost of FHA financing with 3.5% down in 2026.',
        url: 'https://usfinnexus.com/calculators/fha',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'FHA Loan Calculator 2026 with MIP — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/fha' },
};

export default function FhaLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="FHA Loan Calculator 2026"
                description="Calculate your exact FHA loan monthly payment including upfront and annual MIP fees."
                url="https://usfinnexus.com/calculators/fha"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'FHA Loan Calculator', item: '/calculators/fha' }]} />
                            <GovLoanClient initialTab="fha" />
            <FhaSeoContent />
        </main>
    );
}
