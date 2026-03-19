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
    description: 'Free Florida Mortgage Calculator for 2026. Explicitly factor in Florida\'s rapidly rising homeowners and flood insurance premiums alongside property taxes.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/florida' },
    openGraph: {
        type: 'website',
        title: 'Florida Mortgage Calculator 2026 | USFinNexus',
        description: 'Free Florida mortgage calculator for 2026. Factor in Florida\'s rising hurricane and flood insurance costs alongside property taxes to get your true PITI payment.',
        url: 'https://usfinnexus.com/calculators/florida',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Florida Mortgage Calculator 2026 — USFinNexus' }],
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
