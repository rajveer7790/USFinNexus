import CalculatorBenchmarks from '@/components/CalculatorBenchmarks';
import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import FhaSeoContent from './FhaSeoContent';

import GovLoanClient from '../fha-va-usda/GovLoanClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'FHA Mortgage Insurance Calculator: Upfront & Monthly MIP',
    description:
        'Estimate FHA upfront MIP, monthly mortgage insurance and total payment. Compare loan terms, down payments and financing the 1.75% upfront premium.',

    openGraph: {
        type: 'website',
        title: 'FHA Mortgage Insurance Calculator',
        description: 'Estimate upfront and annual FHA mortgage insurance with payment, tax and insurance breakdowns.',
        url: 'https://usfinnexus.com/calculators/fha',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'FHA Mortgage Insurance Calculator - USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/fha' },
    twitter: {
        card: 'summary_large_image',
        title: 'FHA Mortgage Insurance Calculator',
        description: 'Estimated FHA payment with upfront and annual MIP. 3.5% down options. Free FHA mortgage calculator.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function FhaLoanPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="FHA Mortgage Insurance Calculator"
                description="Calculate your estimated FHA loan monthly payment including upfront and annual MIP fees."
                url="https://usfinnexus.com/calculators/fha"
                dateModified="2026-11-17"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'FHA Loan Calculator', item: '/calculators/fha' }]} />
                            <GovLoanClient initialTab="fha" heading="FHA Mortgage Insurance Calculator" />
            <FhaSeoContent />
        <ContextualInternalLinks currentSlug="fha" showBlogs showCalculators />
        <CalculatorBenchmarks slug="fha" /></div>
    );
}
