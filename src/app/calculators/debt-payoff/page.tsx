import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import DebtPayoffSeoContent from './DebtPayoffSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const DebtPayoffClient = nextDynamic(() => import('./DebtPayoffClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Debt Payoff Calculator 2026 — Snowball vs Avalanche Strategy',
    description: 'Compare debt snowball vs avalanche payoff methods across all your debts. See which strategy gets you debt-free fastest and saves the most interest. Free, no signup.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/debt-payoff' },
    openGraph: {
        type: 'website',
        title: 'Debt Payoff Calculator 2026 — Snowball vs Avalanche',
        description: 'Compare snowball vs avalanche across all your debts. Find your debt-free date and total interest savings.',
        url: 'https://usfinnexus.com/calculators/debt-payoff',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Debt Payoff Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Debt Payoff Calculator 2026 | Snowball vs Avalanche',
        description: 'Snowball or avalanche — which gets you debt-free faster? Compare strategies across all your debts.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const DEBT_PAYOFF_FAQS = [
    {
        question: 'What is the Debt Snowball method?',
        answer: 'The Debt Snowball method focuses entirely on psychology. You list your debts from smallest balance to largest balance, regardless of interest rates. You pay the minimum on everything and throw all extra cash at the smallest debt. Once it is paid off, you take that payment and roll it into the next smallest debt, building momentum.',
    },
    {
        question: 'What is the Debt Avalanche method?',
        answer: 'The Debt Avalanche method is the mathematically superior approach. You list your debts from highest interest rate to lowest interest rate, regardless of the balance. You attack the highest interest rate first, which saves you the most money and gets you out of debt the fastest.',
    },
    {
        question: 'Should I use Snowball or Avalanche?',
        answer: 'If you are motivated by quick wins and need psychological momentum, use the Snowball. If you are highly disciplined and want to save the absolute maximum amount of money on interest, use the Avalanche. Run your numbers in our calculator to see exactly how much money the Avalanche will save you.',
    },
];

export default function DebtPayoffPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Debt Payoff Calculator — Snowball vs Avalanche"
                description="Compare debt snowball vs avalanche payoff strategies and find your fastest path to becoming debt-free."
                url="https://usfinnexus.com/calculators/debt-payoff"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Debt Payoff Calculator', item: '/calculators/debt-payoff' }]} />
            <DebtPayoffClient />
            <DebtPayoffSeoContent />
            <CalculatorFAQ faqs={DEBT_PAYOFF_FAQS} title="Debt Payoff — Frequently Asked Questions" />
        <ContextualInternalLinks currentSlug="debt-payoff" showBlogs showCalculators={false} />
        </main>
    );
}
