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
    title: 'Texas Mortgage Calculator 2026 — Property Taxes & No Income Tax',
    description: 'Free Texas mortgage calculator. Accounts for high TX property taxes (1.6%–2.5%), no state income tax savings, and homestead exemption. Built for Texas homebuyers.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/texas' },
    openGraph: {
        type: 'website',
        title: 'Texas Mortgage Calculator 2026 — Property Taxes & No Income Tax',
        description: 'TX mortgage calculator with high property tax rates, homestead exemption, and no state income tax impact.',
        url: 'https://usfinnexus.com/calculators/texas',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Texas Mortgage Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Texas Mortgage Calculator 2026',
        description: 'TX mortgage with high property taxes, homestead exemption, and no state income tax. Built for Texas buyers.',
        images: ['https://usfinnexus.com/icon-512.png'],
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
                <MortgageCalculator heading="Texas Mortgage Calculator" intro="Model a Texas mortgage using your own tax and insurance assumptions." />
            <TexasSeoContent />
        </main>
    );
}
