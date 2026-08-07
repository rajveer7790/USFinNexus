import type { Metadata } from 'next';
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
    title: '50/30/20 Budget Calculator | USFinNexus',
    description: 'Use the 50/30/20 budgeting framework to split take-home income into needs, wants, and savings or debt-paydown categories, then adjust the targets to your situation.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/budget' },
    openGraph: {
        type: 'website',
        title: '50/30/20 Budget Calculator | USFinNexus',
        description: 'Model a monthly budget using the 50/30/20 framework and adjust it to your cash flow.',
        url: 'https://usfinnexus.com/calculators/budget',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus 50/30/20 Budget Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '50/30/20 Budget Calculator | USFinNexus',
        description: 'Model needs, wants, and savings categories from take-home income.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const BUDGET_FAQS = [
    {
        question: 'What is the 50/30/20 budgeting rule?',
        answer: 'The 50/30/20 framework is a budgeting guideline that allocates about 50% of take-home income to needs, 30% to wants, and 20% to savings and debt repayment goals. It is a starting point rather than a rule that fits every household.',
    },
    {
        question: 'Should I use gross income or take-home income for 50/30/20?',
        answer: 'The framework is commonly applied to after-tax or take-home income. Payroll deductions, taxes and benefit elections can make take-home definitions differ, so use a consistent monthly cash-flow number and adjust the targets to match your actual obligations.',
    },
    {
        question: 'How should debt payments fit into the framework?',
        answer: 'Required debt payments are often treated as obligations within the needs side of a budget, while extra principal payments can be treated as a financial goal. The exact category matters less than making sure the budget includes every required payment and reflects your priorities.',
    },
    {
        question: 'What if my needs exceed 50% of take-home income?',
        answer: 'The 50% figure is not a legal or financial requirement. High housing, childcare, medical, transportation or debt costs can make a different split more realistic. Use the calculator as a benchmark, then build a budget that covers required expenses, emergency needs and achievable savings goals.',
    },
];

export default function BudgetPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="50/30/20 Budget Calculator"
                description="Model a monthly budget using the 50/30/20 framework and user-entered take-home income."
                url="https://usfinnexus.com/calculators/budget"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: '50/30/20 Budget Calculator', item: '/calculators/budget' }]} />
            <h1 className="sr-only">50/30/20 Budget Calculator</h1>
            <BudgetClient />
            <BudgetSeoContent />
            <CalculatorFAQ faqs={BUDGET_FAQS} title="50/30/20 Budget Calculator FAQ" />
        </main>
    );
}
