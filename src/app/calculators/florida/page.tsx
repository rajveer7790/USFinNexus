import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import FloridaSeoContent from './FloridaSeoContent';

const MortgageCalculator = nextDynamic(() => import('../mortgage/MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Florida Mortgage Calculator 2026 — Hurricane Insurance & Property Taxes | USFinNexus',
    description: 'Free Florida mortgage calculator. Factors in rapidly rising FL homeowners and flood insurance, no state income tax benefit, and 2026 Florida property tax rates.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/florida' },
    openGraph: {
        type: 'website',
        title: 'Florida Mortgage Calculator 2026 — Hurricane Insurance & Taxes | USFinNexus',
        description: 'FL mortgage calculator with rising homeowners and flood insurance, property taxes, and no income tax benefit.',
        url: 'https://usfinnexus.com/calculators/florida',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Florida Mortgage Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Florida Mortgage Calculator 2026 | USFinNexus',
        description: 'FL mortgage with hurricane insurance, flood insurance, and property taxes. Built for Florida buyers.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

export default function FloridaPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Florida Mortgage Calculator 2026"
                description="Free Florida mortgage calculator factoring in hurricane insurance, flood insurance, and property taxes."
                url="https://usfinnexus.com/calculators/florida"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Florida Mortgage', item: '/calculators/florida' }]} />
                            <div className="max-w-7xl mx-auto pt-8">
                    <h1 className="text-3xl font-black mb-2">Florida Mortgage Calculator</h1>
                    <p className="text-gray-600 mb-8">Homeowners insurance in Florida is volatile. Manually adjust the insurance field below as needed.</p>
                </div>
                <MortgageCalculator />
            <FloridaSeoContent />
        </main>
    );
}
