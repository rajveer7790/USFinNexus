import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
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
    title: 'Mortgage Points Buy-Down Calculator 2026 - Break-Even Analysis',
    description: 'Free mortgage points calculator for 2026. Calculate if paying discount points upfront is worth it. See monthly savings and find your break-even point.',
    openGraph: {
        type: 'website',
        title: 'Mortgage Points Buy-Down Calculator 2026',
        description: 'Calculate if paying discount points upfront is worth it. Find your break-even point and total interest savings from buying down your mortgage rate. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/points-buydown',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Mortgage Points Buy-Down Calculator 2026 - USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/points-buydown' },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Points Buy-Down Calculator 2026',
        description: 'Is paying points worth it? Find your break-even month and total interest savings. Free mortgage points calculator.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const POINTS_FAQS = [
    {
        question: 'What is a mortgage discount point?',
        answer: 'A discount point is an optional upfront fee you pay the bank at closing to permanently lower your interest rate. One point costs exactly 1% of your total loan amount (e.g., 1 point on a $300,000 loan costs $3,000).',
    },
    {
        question: 'What is the Break-Even Point?',
        answer: 'The Break-Even Point is the exact month where the accumulated monthly savings from the lower interest rate finally equal the upfront cash you paid to buy the points. If your break-even point is 5 years, you must stay in the house (without refinancing) for more than 5 years for the points to be a good investment.',
    },
    {
        question: 'Should I buy points in a high interest rate environment?',
        answer: 'Usually, no. If rates are currently high, most buyers plan to refinance within 2 to 3 years when rates inevitably drop. If you buy points today, but refinance in 2 years, you will not reach your break-even point, meaning you threw that upfront cash away.',
    },
];

export default function PointsBuyDownPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Points Buy-Down Calculator 2026"
                description="Calculate if paying discount points is worth it. Find your break-even point and total interest savings."
                url="https://usfinnexus.com/calculators/points-buydown"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Points Buy-Down Calculator', item: '/calculators/points-buydown' }]} />
            <PointsBuyDownClient />
            <PointsBuydownSeoContent />
            <CalculatorFAQ faqs={POINTS_FAQS} title="Mortgage Points — Frequently Asked Questions" />
        <ContextualInternalLinks currentSlug="points-buydown" showBlogs showCalculators={false} />
        </main>
    );
}
