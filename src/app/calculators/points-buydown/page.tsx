import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import PointsBuydownSeoContent from './PointsBuydownSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const PointsBuyDownClient = nextDynamic(() => import('./PointsBuyDownClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Points Calculator | USFinNexus',
    description: 'Compare the upfront cost of mortgage discount points with modeled monthly payment savings and estimate a simple break-even period under the rate assumptions entered.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/points-buydown' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Points Calculator | USFinNexus',
        description: 'Estimate discount-point cost, monthly savings and simple break-even.',
        url: 'https://usfinnexus.com/calculators/points-buydown',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Mortgage Points Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Points Calculator | USFinNexus',
        description: 'Compare mortgage discount-point cost with modeled payment savings.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const POINTS_FAQS = [
    {
        question: 'What is a mortgage discount point?',
        answer: 'One mortgage discount point generally represents an upfront charge equal to 1% of the loan amount. Paying points can be associated with a lower interest rate, but the rate reduction per point is not fixed and depends on lender pricing at the time of the quote.',
    },
    {
        question: 'What is the break-even point for mortgage points?',
        answer: 'A simple break-even estimate divides the upfront cost of the points by the modeled monthly payment savings. It tells you how many months of savings are needed to recover the upfront cost, but it does not capture every tax, opportunity-cost, refinance or home-sale consideration.',
    },
    {
        question: 'Should I buy mortgage points when rates are high?',
        answer: 'There is no universal answer. Compare the lender quote with and without points, your expected time in the loan, cash available at closing and the possibility that you could sell or refinance before the break-even point. Future mortgage rates cannot be known in advance.',
    },
];

export default function PointsBuyDownPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Points Calculator"
                description="Compare upfront mortgage discount-point cost with modeled monthly payment savings and simple break-even."
                url="https://usfinnexus.com/calculators/points-buydown"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Mortgage Points Calculator', item: '/calculators/points-buydown' }]} />
            <h1 className="sr-only">Mortgage Points Calculator</h1>
            <PointsBuyDownClient />
            <PointsBuydownSeoContent />
            <CalculatorFAQ faqs={POINTS_FAQS} title="Mortgage Points Calculator FAQ" />
        </main>
    );
}
