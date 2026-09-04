import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
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
    title: 'Florida Mortgage Calculator 2026 — Hurricane Insurance & Property Taxes',
    description: 'Free Florida mortgage calculator. Factors in rapidly rising FL homeowners and flood insurance, no state income tax benefit, and 2026 Florida property tax rates.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/florida' },
    openGraph: {
        type: 'website',
        title: 'Florida Mortgage Calculator 2026 — Hurricane Insurance & Taxes',
        description: 'FL mortgage calculator with rising homeowners and flood insurance, property taxes, and no income tax benefit.',
        url: 'https://usfinnexus.com/calculators/florida',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Florida Mortgage Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Florida Mortgage Calculator 2026',
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
                <MortgageCalculator heading="Florida Mortgage Calculator" intro="Model a Florida mortgage using your own tax and insurance assumptions." />
            <FloridaSeoContent />
        <ContextualInternalLinks currentSlug="florida" showBlogs showCalculators={false} />
        </main>
    );
}
