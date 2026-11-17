import CalculatorBenchmarks from '@/components/CalculatorBenchmarks';
import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import VaSeoContent from './VaSeoContent';

import GovLoanClient from '../fha-va-usda/GovLoanClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'VA Funding Fee Calculator: Exemptions & Loan Payment',
    description:
        'Calculate VA purchase funding fees by first or subsequent use, down payment and exemption. Compare financing the fee with cash at closing and monthly payments.',
    openGraph: {
        type: 'website',
        title: 'VA Funding Fee & Loan Payment Calculator',
        description: 'Estimate VA purchase funding fees, exemptions and financed payments. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/va',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'VA Funding Fee Calculator - USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/va' },
    twitter: {
        card: 'summary_large_image',
        title: 'VA Funding Fee Calculator',
        description: 'Estimate VA purchase funding fees, exemption scenarios and monthly payments. Free VA mortgage calculator.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function VaLoanPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="VA Funding Fee Calculator"
                description="Estimate VA purchase funding fees and monthly payments with a verified exemption option."
                url="https://usfinnexus.com/calculators/va"
                dateModified="2026-11-17"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'VA Loan Calculator', item: '/calculators/va' }]} />
                            <GovLoanClient initialTab="va" heading="VA Funding Fee & Loan Calculator" />
            <VaSeoContent />
        <ContextualInternalLinks currentSlug="va" showBlogs showCalculators />
        <CalculatorBenchmarks slug="va" /></div>
    );
}
