import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const HELOCClient = nextDynamic(() => import('./HELOCClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Free HELOC Calculator 2026 — Home Equity Line of Credit | USFinNexus',
    description:
        'Calculate your HELOC payments, available equity, and total interest. See draw-period vs repayment-period costs instantly. Free, no signup required.',
    keywords: ['heloc calculator', 'home equity line of credit', 'heloc payments', 'heloc 2026', 'home equity calculator'],
    openGraph: {
        type: 'website',
        title: 'Free HELOC Calculator 2026 — Home Equity Line of Credit | USFinNexus',
        description: 'Calculate your HELOC payments, available equity, and total interest. Compare draw-period interest-only payments vs full repayment period costs. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/heloc',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'HELOC Home Equity Line of Credit Calculator 2026 — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/heloc' },
};

export default function HELOCPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="HELOC Calculator 2026"
                description="Calculate your HELOC payments, available equity, and total interest across draw and repayment periods."
                url="https://usfinnexus.com/calculators/heloc"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'HELOC Calculator', item: '/calculators/heloc' }]} />
                            <HELOCClient />
        </main>
    );
}
