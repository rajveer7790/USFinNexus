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
    title: '2026 Federal Income Tax Calculator — Post-TCJA Brackets | USFinNexus',
    description: 'Estimate your 2026 federal income taxes under new post-TCJA sunset brackets. Calculate effective and marginal tax rates, standard deduction, and take-home pay.',
    keywords: [
        'income tax calculator 2026', 'federal income tax calculator',
        'TCJA sunset tax brackets 2026', 'tax calculator 2026',
        'effective tax rate calculator', 'marginal tax rate calculator',
        'federal tax estimator 2026', 'how much federal tax do I owe',
        'income tax estimator', 'tax bracket calculator 2026',
        'IRS tax calculator 2026', 'take home pay calculator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/income-tax' },
    openGraph: {
        type: 'website',
        title: '2026 Federal Income Tax Calculator — Post-TCJA Sunset Brackets | USFinNexus',
        description: 'Calculate your 2026 federal income tax under new post-TCJA brackets. Effective rate, marginal rate, and take-home pay.',
        url: 'https://usfinnexus.com/calculators/income-tax',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: '2026 Income Tax Calculator — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '2026 Income Tax Calculator | Post-TCJA Brackets | USFinNexus',
        description: 'What will you owe in 2026? Calculate your federal taxes under the new post-TCJA brackets.',
        images: ['https://usfinnexus.com/icon-512.png'],
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
