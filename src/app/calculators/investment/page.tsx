import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import InvestmentSeoContent from './InvestmentSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';

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
        answer: 'There is no universally realistic rate. Use several scenarios based on the investment type, fees, taxes, inflation and time horizon. Historical market returns and today’s savings yields are not guaranteed future returns.',
    },
    {
        question: 'Is it better to invest a lump sum or monthly?',
        answer: 'A lump sum has more time exposed to market returns, while phased investing can reduce timing anxiety and fit cash flow. The appropriate choice depends on liquidity needs, risk tolerance, taxes and whether the money is already available.',
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
            <SemrushIntentSection slug="investment" />
            <CalculatorFAQ faqs={INVESTMENT_FAQS} title="Compound Interest — Frequently Asked Questions" />
        </main>
    );
}
