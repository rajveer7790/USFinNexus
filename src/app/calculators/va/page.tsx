import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import VaSeoContent from './VaSeoContent';

const GovLoanClient = nextDynamic(() => import('../fha-va-usda/GovLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'VA Loan Calculator 2026 — VA Funding Fee and Payments | USFinNexus',
    description:
        'Calculate your VA loan monthly payment with 0% down. Automatically calculates the 2026 VA Funding Fee based on your military service and down payment.',
    keywords: ['va loan calculator', 'va mortgage calculator', 'va funding fee calculator', 'va loan limits 2026', '0 down mortgage'],
    openGraph: {
        type: 'website',
        title: 'VA Loan Calculator 2026 — Zero Down Payment | USFinNexus',
        description: 'Calculate your VA loan monthly payment with 0% down. Automatically calculates 2026 VA Funding Fee based on your service type and down payment. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/va',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'VA Loan Calculator 2026 Zero Down — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/va' },
};

export default function VaLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="VA Loan Calculator 2026"
                description="Calculate your VA loan monthly payment with 0% down including the 2026 VA Funding Fee."
                url="https://usfinnexus.com/calculators/va"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'VA Loan Calculator', item: '/calculators/va' }]} />
                            <GovLoanClient initialTab="va" />
            <VaSeoContent />
        </main>
    );
}
