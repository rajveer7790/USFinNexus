import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import InvestmentSeoContent from './InvestmentSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const InvestmentClient = nextDynamic(() => import('./InvestmentClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Compound Interest & Investment Growth Calculator 2026',
    description: 'Calculate investment growth with compound interest. See how regular contributions grow over time with interactive charts. Free investment calculator with PDF export.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/investment' },
    openGraph: {
        type: 'website',
        title: 'Compound Interest & Investment Growth Calculator 2026',
        description: 'See how your investments compound over time. Interactive charts with monthly contributions. Free calculator.',
        url: 'https://usfinnexus.com/calculators/investment',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Investment Compound Interest Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Compound Interest Calculator 2026',
        description: 'Watch your investments grow with the power of compounding. Free investment growth calculator.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const INVESTMENT_FAQS = [
    {
        question: 'What is compound interest?',
        answer: 'Compound interest is the interest on your interest. Unlike simple interest (which only pays on your original deposit), compound interest pays you returns on both your initial principal AND the accumulated interest from previous years. This causes your wealth to grow exponentially over time.',
    },
    {
        question: 'What is a realistic interest rate to use?',
        answer: 'If you are investing in a broad US Stock Market index fund (like the S&P 500) over a 20+ year horizon, financial planners often use an inflation-adjusted return rate of 7% to 8%. If you are saving money in a High-Yield Savings Account or CDs, expect 4% to 5%.',
    },
    {
        question: 'Is it better to invest a lump sum or monthly?',
        answer: 'Mathematically, investing a lump sum immediately (Time in the Market) usually beats spreading it out. However, most people do not have massive lump sums laying around. Consistently investing a smaller amount every single month out of your paycheck (Dollar Cost Averaging) is the most reliable way to build massive wealth over 30 years.',
    },
];

export default function InvestmentPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Compound Interest & Investment Calculator 2026"
                description="Visualize how your investments grow with compound interest over any time period."
                url="https://usfinnexus.com/calculators/investment"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Compound Interest', item: '/calculators/investment' }]} />
            <InvestmentClient />
            <InvestmentSeoContent />
            <CalculatorFAQ faqs={INVESTMENT_FAQS} title="Compound Interest — Frequently Asked Questions" />
        </main>
    );
}
