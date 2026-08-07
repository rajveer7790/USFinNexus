import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import ComparisonSeoContent from './ComparisonSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const ComparisonClient = nextDynamic(() => import('./ComparisonClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Comparison Calculator | USFinNexus',
    description: 'Compare mortgage scenarios side by side using different loan amounts, rates, terms and down payments. Review modeled monthly payment and total interest.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/comparison' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Comparison Calculator | USFinNexus',
        description: 'Compare modeled mortgage payments and interest across multiple scenarios.',
        url: 'https://usfinnexus.com/calculators/comparison',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Mortgage Comparison Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Comparison Calculator | USFinNexus',
        description: 'Compare multiple mortgage scenarios side by side.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const COMPARISON_FAQS = [
    {
        question: 'Is a 15-year or 30-year mortgage better?',
        answer: 'A shorter term generally has a higher required monthly payment and lower total interest if held to maturity, while a longer term generally lowers the required payment but can increase total interest. The better fit depends on cash flow, rate quotes, other financial priorities and how long you expect to keep the loan.',
    },
    {
        question: 'Should I put 10% or 20% down on a house?',
        answer: 'A larger down payment reduces the amount financed and can affect mortgage-insurance requirements and pricing, but it also uses more cash. Conventional PMI rules depend on the loan and federal cancellation requirements; 20% down is not legally required for a mortgage. Compare payment, reserves, rate and cash-to-close for both scenarios.',
    },
    {
        question: 'Should I buy mortgage points to lower my rate?',
        answer: 'Mortgage discount points are upfront charges that can be associated with a lower rate. Compare the quoted cost and rate reduction, calculate a simple break-even period, and consider how long you expect to keep the loan. The rate reduction per point is not fixed across lenders or market conditions.',
    },
];

export default function ComparisonPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Comparison Calculator"
                description="Compare multiple mortgage scenarios side by side using user-entered rates, terms and down payments."
                url="https://usfinnexus.com/calculators/comparison"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Mortgage Comparison Calculator', item: '/calculators/comparison' }]} />
            <div className="pt-8">
                <h1 className="sr-only">Mortgage Comparison Calculator</h1>
                <ComparisonClient />
            </div>
            <ComparisonSeoContent />
            <CalculatorFAQ faqs={COMPARISON_FAQS} title="Mortgage Comparison Calculator FAQ" />
        </main>
    );
}
