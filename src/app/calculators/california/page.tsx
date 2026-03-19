import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import CaliforniaSeoContent from './CaliforniaSeoContent';

const MortgageCalculator = nextDynamic(() => import('../mortgage/MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'California Mortgage Calculator 2026 — Prop 13 Taxes & Jumbo Loans | USFinNexus',
    description: 'Free California Mortgage Calculator tailored for 2026. Learn how Prop 13 protects your property taxes and see current CA Jumbo loan limits.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/california' },
    openGraph: {
        type: 'website',
        title: 'California Mortgage Calculator 2026 | USFinNexus',
        description: 'Free California mortgage calculator tailored for 2026. Factors in Prop 13 property tax limits, jumbo loan thresholds, and CA-specific insurance costs.',
        url: 'https://usfinnexus.com/calculators/california',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'California Mortgage Calculator 2026 — USFinNexus' }],
    },
};

export default function CaliforniaPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="California Mortgage Calculator 2026"
                description="Free California mortgage calculator with Prop 13 tax limits and jumbo loan thresholds for 2026."
                url="https://usfinnexus.com/calculators/california"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'California Mortgage', item: '/calculators/california' }]} />
                            <div className="max-w-7xl mx-auto pt-8">
                    <h1 className="text-3xl font-black mb-2">California Mortgage Calculator</h1>
                    <p className="text-gray-600 mb-8">Enter your California zip code below to pull accurate property tax estimates governed by Prop 13.</p>
                </div>
                <MortgageCalculator />
            <CaliforniaSeoContent />
        </main>
    );
}
