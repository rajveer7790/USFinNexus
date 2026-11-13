import CalculatorBenchmarks from '@/components/CalculatorBenchmarks';
import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import RentVsBuySeoContent from './RentVsBuySeoContent';

import RentVsBuyClient from './RentVsBuyClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Rent vs Buy Calculator: Costs, Equity & Break-Even',
    description: 'Compare renting and buying with your own rent, mortgage, maintenance, closing-cost and investment assumptions. Explore equity and year-end break-even scenarios.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/rent-vs-buy' },
    openGraph: {
        type: 'website',
        title: 'Rent vs Buy Calculator: Costs, Equity & Break-Even',
        description: 'Compare housing costs, estimated sale equity and invested cash differences using your own assumptions—not a market forecast.',
        url: 'https://usfinnexus.com/calculators/rent-vs-buy',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Rent vs Buy Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rent vs Buy Calculator: Costs, Equity & Break-Even',
        description: 'Model renting and buying costs over your chosen horizon. Includes transaction costs and opportunity-cost assumptions.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function RentVsBuyPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Rent vs. Buy Calculator"
                description="Compare estimated renting and buying costs over a selected horizon using home-price growth, transaction costs and investment assumptions. Tax deductions and PMI are not modeled."
                dateModified="2026-11-13"
                url="https://usfinnexus.com/calculators/rent-vs-buy"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Rent vs Buy', item: '/calculators/rent-vs-buy' }]} />
            <RentVsBuyClient />
            <RentVsBuySeoContent />
        <ContextualInternalLinks currentSlug="rent-vs-buy" showBlogs showCalculators />
        <CalculatorBenchmarks slug="rent-vs-buy" /></div>
    );
}
