import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import TexasSeoContent from './TexasSeoContent';

const MortgageCalculator = nextDynamic(() => import('../mortgage/MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Texas Mortgage Calculator 2026 — Property Taxes & No State Income Tax | USFinNexus',
    description: 'Free Texas Mortgage Calculator tailored for 2026. Includes the notoriously high Texas property taxes (up to 2-3%) and the impact of having no state income tax.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/texas' },
    openGraph: {
        type: 'website',
        title: 'Texas Mortgage Calculator 2026 — No State Income Tax | USFinNexus',
        description: 'Free Texas mortgage calculator for 2026. Factors in Texas\'s high property tax rates (2–3%) and zero state income tax. See your true monthly PITI payment.',
        url: 'https://usfinnexus.com/calculators/texas',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Texas Mortgage Calculator 2026 — USFinNexus' }],
    },
};

export default function TexasPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Texas Mortgage Calculator 2026"
                description="Free Texas mortgage calculator factoring in high property tax rates and zero state income tax."
                url="https://usfinnexus.com/calculators/texas"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Texas Mortgage', item: '/calculators/texas' }]} />
                            <div className="max-w-7xl mx-auto pt-8">
                    <h1 className="text-3xl font-black mb-2">Texas Mortgage Calculator</h1>
                    <p className="text-gray-600 mb-8">Enter your Texas zip code below to automatically estimate your local property taxes.</p>
                </div>
                <MortgageCalculator />
            <TexasSeoContent />
        </main>
    );
}
