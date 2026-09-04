import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import BudgetSeoContent from './BudgetSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const BudgetClient = nextDynamic(() => import('./BudgetClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Budget Calculator 2026 - 50/30/20 Rule Planner',
    description:
        'Plan your monthly budget using the 50/30/20 rule. See where your money goes across needs, wants, and savings. Free budget planner, no signup required.',
    openGraph: {
        type: 'website',
        title: '50/30/20 Budget Calculator 2026',
        description: 'Free monthly budget planner using the 50/30/20 rule. Categorize your spending across needs, wants, and savings. Find opportunities to save more. No signup.',
        url: 'https://usfinnexus.com/calculators/budget',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: '50/30/20 Budget Calculator 2026 - USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/budget' },
    twitter: {
        card: 'summary_large_image',
        title: 'Budget Calculator 2026 — 50/30/20 Rule Planner',
        description: 'Plan your monthly budget with the 50/30/20 rule. See needs, wants, and savings split instantly. Free budget planner.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const BUDGET_FAQS = [
    {
        question: 'What is the 50/30/20 rule?',
        answer: 'The 50/30/20 rule is a massively popular budgeting framework that divides your after-tax income into three buckets: 50% for absolute needs (housing, groceries, utilities), 30% for wants (dining out, entertainment, shopping), and 20% dedicated entirely to savings and debt payoff.',
    },
    {
        question: 'Do I use my gross income or net income for the 50/30/20 rule?',
        answer: 'You must always use your net (after-tax) income. If you make $100,000 a year before taxes, but your actual take-home pay is only $70,000, you base your 50/30/20 calculations strictly on the $70,000 that hits your bank account.',
    },
    {
        question: 'Does paying off a credit card count as a Need or Savings?',
        answer: 'Making the absolute minimum payment required by the bank counts as a 50% "Need" because it prevents you from defaulting. However, any extra money you throw at the debt to destroy the principal balance counts as a 20% "Savings" action.',
    },
    {
        question: 'What if my rent is more than 50% of my income?',
        answer: 'In expensive 2026 housing markets, this is very common. If your "Needs" bucket hits 60%, do not reduce your savings. Instead, you must pull the extra 10% out of your "Wants" bucket, temporarily operating on a stricter 60/20/20 rule until you can increase your income.',
    },
];

export default function BudgetPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="50/30/20 Budget Calculator 2026"
                description="Free monthly budget planner using the 50/30/20 rule. Categorize spending and find savings opportunities."
                url="https://usfinnexus.com/calculators/budget"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Budget Planner', item: '/calculators/budget' }]} />
            <BudgetClient />
            <BudgetSeoContent />
            <CalculatorFAQ faqs={BUDGET_FAQS} title="Budget Planner — Frequently Asked Questions" />
        <ContextualInternalLinks currentSlug="budget" showBlogs showCalculators={false} />
        </main>
    );
}
