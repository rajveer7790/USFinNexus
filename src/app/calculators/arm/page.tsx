import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import ArmSeoContent from './ArmSeoContent';

const ArmCalculatorClient = nextDynamic(() => import('./ArmCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'ARM Calculator 2026 — Adjustable Rate Mortgage Worst-Case Analysis | USFinNexus',
    description: 'Free ARM mortgage calculator. Instantly see your worst-case payment scenario, fully-indexed rate, and understand rate caps (5/1, 7/1 ARMs).',
    keywords: ['arm calculator', 'adjustable rate mortgage', '5/1 arm', '7/1 arm', 'arm worst case payment', 'arm rate caps'],
    openGraph: {
        type: 'website',
        title: 'ARM Calculator 2026 | USFinNexus',
        description: 'Adjustable rate mortgage calculator with worst-case payment scenarios and rate cap analysis for 5/1 and 7/1 ARMs. Free, no signup required.',
        url: 'https://usfinnexus.com/calculators/arm',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'ARM Adjustable Rate Mortgage Calculator 2026 — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/arm' },
};

export default function ArmCalculatorPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="ARM Calculator 2026"
                description="Adjustable rate mortgage calculator with worst-case scenarios and rate cap analysis."
                url="https://usfinnexus.com/calculators/arm"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'ARM Calculator', item: '/calculators/arm' }]} />
                            <ArmCalculatorClient />
            <ArmSeoContent />
        </main>
    );
}
