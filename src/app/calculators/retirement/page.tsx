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
    title: 'Retirement Calculator | USFinNexus',
    description: 'Project retirement savings using your current balance, contributions, time horizon and return assumptions. Compare a modeled nest egg with your retirement-income goal.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/retirement' },
    openGraph: {
        type: 'website',
        title: 'Retirement Calculator | USFinNexus',
        description: 'Project retirement savings and compare scenarios using assumptions you control.',
        url: 'https://usfinnexus.com/calculators/retirement',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Retirement Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Retirement Calculator | USFinNexus',
        description: 'Project retirement savings under different contribution and return assumptions.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const RETIREMENT_FAQS = [
    {
        question: 'What is the 4% retirement withdrawal rule?',
        answer: 'The 4% rule is a historical planning heuristic, not a guarantee. It is commonly associated with withdrawing about 4% of a portfolio in the first retirement year and adjusting withdrawals for inflation, based on particular historical portfolio and time-horizon assumptions. Taxes, asset allocation, market sequence, retirement length and future returns can produce different outcomes.',
    },
    {
        question: 'How is a simple FIRE number estimated?',
        answer: 'A common shorthand divides desired annual portfolio withdrawals by a chosen withdrawal rate. At 4%, that is equivalent to about 25 times annual spending. The appropriate target can be higher or lower depending on taxes, other income, retirement length, portfolio risk and the withdrawal rate you choose.',
    },
    {
        question: 'Why use an inflation-adjusted return assumption?',
        answer: 'A real, or inflation-adjusted, return assumption can make long-term projections easier to interpret in today’s purchasing power. Future market returns and inflation are uncertain, so test several assumptions instead of treating one historical average as a forecast.',
    },
];

export default function RetirementPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Retirement Calculator"
                description="Project retirement savings using user-entered contribution, time-horizon and return assumptions."
                url="https://usfinnexus.com/calculators/retirement"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Retirement Calculator', item: '/calculators/retirement' }]} />
            <h1 className="sr-only">Retirement Calculator</h1>
            <RetirementClient />
            <RetirementSeoContent />
            <CalculatorFAQ faqs={RETIREMENT_FAQS} title="Retirement Calculator FAQ" />
        </main>
    );
}
