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
    title: 'California Mortgage Calculator 2026 — Prop 13, Jumbo Loans & Taxes | USFinNexus',
    description: 'Free California mortgage calculator. Includes Proposition 13 property tax protection, CA jumbo loan limits, and 2026 conforming limits for high-cost CA counties.',
    keywords: [
        'California mortgage calculator', 'CA mortgage calculator 2026',
        'California home loan calculator', 'Proposition 13 property tax calculator',
        'California jumbo loan calculator', 'Los Angeles mortgage calculator',
        'San Francisco mortgage calculator', 'California conforming loan limits 2026',
        'California property tax rate', 'California home buying calculator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/california' },
    openGraph: {
        type: 'website',
        title: 'California Mortgage Calculator 2026 — Prop 13 & Jumbo Loans | USFinNexus',
        description: 'CA-specific mortgage calculator with Prop 13 property tax protection and high-cost county jumbo loan limits.',
        url: 'https://usfinnexus.com/calculators/california',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'California Mortgage Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'California Mortgage Calculator 2026 | USFinNexus',
        description: 'CA mortgage calculator with Prop 13 taxes, jumbo loan limits, and 2026 high-cost county limits.',
        images: ['https://usfinnexus.com/icon-512.png'],
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
