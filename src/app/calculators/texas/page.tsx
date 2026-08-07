import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import TexasSeoContent from './TexasSeoContent';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const MortgageCalculator = nextDynamic(() => import('../mortgage/MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Texas Mortgage Calculator | USFinNexus',
    description: 'Estimate a Texas mortgage payment and model property taxes, homeowners insurance, PMI and HOA costs. Learn how homestead exemptions and appraisal caps affect property-tax planning.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/texas' },
    openGraph: {
        type: 'website',
        title: 'Texas Mortgage Calculator | USFinNexus',
        description: 'Estimate a Texas mortgage payment with current homestead and property-tax planning context.',
        url: 'https://usfinnexus.com/calculators/texas',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Texas Mortgage Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Texas Mortgage Calculator | USFinNexus',
        description: 'Estimate a Texas mortgage payment and property-tax costs using your assumptions.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function TexasPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Texas Mortgage Calculator"
                description="Estimate a Texas mortgage payment and model property taxes, insurance, PMI and HOA costs."
                url="https://usfinnexus.com/calculators/texas"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Texas Mortgage Calculator', item: '/calculators/texas' }]} />
            <div className="max-w-7xl mx-auto pt-8">
                <h1 className="text-3xl font-black mb-2">Texas Mortgage Calculator</h1>
                <p className="text-gray-600 mb-2">Estimate principal, interest and ownership costs using the local property-tax rate, insurance and HOA amounts relevant to the Texas home you are considering.</p>
                <p className="text-xs text-gray-500 mb-8">Reviewed August 7, 2026 · Texas property taxes are local; use appraisal-district and taxing-unit data for a property-specific estimate.</p>
            </div>
            <MortgageCalculator />
            <TexasSeoContent />
        </main>
    );
}
