import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const IncomeTaxClient = nextDynamic(() => import('./IncomeTaxClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Free 2026 Income Tax Calculator | TCJA Sunset Brackets',
    description: 'Estimate your 2026 federal income taxes under the new post-TCJA sunset tax brackets. Calculate your effective and marginal tax rates instantly.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/income-tax' },
    openGraph: {
        type: 'website',
        title: 'Free 2026 Federal Income Tax Calculator | TCJA Sunset | USFinNexus',
        description: 'Estimate your 2026 federal income taxes under new post-TCJA sunset tax brackets. See your effective rate, marginal rate, and take-home pay instantly. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/income-tax',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Free 2026 Income Tax Calculator — USFinNexus' }],
    },
};

export default function IncomeTaxPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Free 2026 Federal Income Tax Calculator"
                description="Estimate your 2026 federal income taxes with post-TCJA brackets. See effective and marginal rates instantly."
                url="https://usfinnexus.com/calculators/income-tax"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Income Tax', item: '/calculators/income-tax' }]} />
            <IncomeTaxClient />
        </main>
    );
}
