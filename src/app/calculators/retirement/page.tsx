import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import RetirementSeoContent from './RetirementSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const RetirementClient = nextDynamic(() => import('./RetirementClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Free Retirement Calculator 2026 — Plan Your Nest Egg | USFinNexus',
    description: 'Calculate how much you need to retire comfortably and see if your savings are on track. Free retirement planner with compound growth projections and PDF export.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/retirement' },
    openGraph: {
        type: 'website',
        title: 'Retirement Calculator 2026 — Plan Your Nest Egg | USFinNexus',
        description: 'How much do you need to retire? See if your savings are on track with free compound growth projections.',
        url: 'https://usfinnexus.com/calculators/retirement',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Retirement Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Retirement Calculator 2026 | Plan Your Nest Egg | USFinNexus',
        description: 'Are your retirement savings on track? See how much you need and when you can retire.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const RETIREMENT_FAQS = [
    {
        question: 'What is the 4% Rule?',
        answer: 'The 4% Rule is a retirement benchmark stating that if you invest your money in a balanced portfolio (like 60% stocks and 40% bonds), you can withdraw 4% of the total balance in your first year of retirement. You then adjust that dollar amount for inflation every year, and theoretically, your money will last for at least 30 years without running out.',
    },
    {
        question: 'How do I calculate my FIRE number?',
        answer: 'To find your FIRE (Financial Independence, Retire Early) number, simply take your desired annual retirement income and multiply it by 25. For example, if you need $80,000 a year to live comfortably, your target nest egg is $2,000,000.',
    },
    {
        question: 'Why should I use an inflation-adjusted return rate?',
        answer: 'Because a million dollars today will buy significantly less 30 years from now. If the stock market historically returns 10%, but inflation averages 3%, your "real" return is 7%. Using 7% in the calculator ensures the final number shown is represented in today’s purchasing power, making it much easier to understand your future wealth.',
    },
];

export default function RetirementPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Free Retirement Calculator 2026"
                description="Calculate how much you need to retire and see if your savings are on track with projected nest egg growth."
                url="https://usfinnexus.com/calculators/retirement"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Retirement Planner', item: '/calculators/retirement' }]} />
            <h1 className="sr-only">Retirement Calculator</h1>
            <RetirementClient />
            <RetirementSeoContent />
            <CalculatorFAQ faqs={RETIREMENT_FAQS} title="Retirement Planning — Frequently Asked Questions" />
        </main>
    );
}
