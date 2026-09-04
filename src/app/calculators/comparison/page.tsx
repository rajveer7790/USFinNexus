import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
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
    title: 'Mortgage Loan Comparison Calculator 2026 — Side-by-Side Analysis',
    description: 'Compare up to 3 mortgage loan scenarios side by side. Instantly see total interest, monthly payments, and lifetime costs across different rates, terms, and down payments.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/comparison' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Loan Comparison Calculator 2026',
        description: 'Compare up to 3 mortgage scenarios side by side. Monthly payments, total interest, and lifetime costs.',
        url: 'https://usfinnexus.com/calculators/comparison',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Mortgage Comparison Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Comparison Calculator 2026',
        description: 'Compare up to 3 mortgage scenarios side by side. Find the best loan for your budget.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const COMPARISON_FAQS = [
    {
        question: 'Is a 15-year or 30-year mortgage better?',
        answer: 'A 30-year mortgage gives you flexibility. The monthly payment is low, which protects you if you lose your job. A 15-year mortgage has a significantly higher monthly payment, but it destroys the loan balance twice as fast. A 15-year mortgage will literally save you hundreds of thousands of dollars in interest, but you must be mathematically certain you can afford the massive monthly payment.',
    },
    {
        question: 'Should I put 10% or 20% down on a house?',
        answer: 'If you put 10% down, the bank will force you to pay Private Mortgage Insurance (PMI) every single month, which is essentially a useless penalty fee. If you put 20% down, PMI is completely outlawed. You can use our calculator to see exactly how much money a 20% down payment saves you every month by removing the PMI line item.',
    },
    {
        question: 'Should I buy mortgage points to lower my rate?',
        answer: 'When you buy "points," you are giving the bank extra cash upfront (usually thousands of dollars) in exchange for a permanently lower interest rate. You must run the math to find your "break-even" point. If the points cost $4,000 upfront, but they only save you $40 a month, it will take 100 months (over 8 years) just to break even. If you plan to sell the house in 5 years, buying points is a terrible financial decision.',
    },
];

export default function ComparisonPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Loan Comparison Calculator 2026"
                description="Compare up to 3 mortgage scenarios side by side with different rates, terms, and down payments."
                url="https://usfinnexus.com/calculators/comparison"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Loan Comparison', item: '/calculators/comparison' }]} />
            <div className="pt-8">
                <ComparisonClient />
            </div>
            <ComparisonSeoContent />
            <CalculatorFAQ faqs={COMPARISON_FAQS} title="Loan Comparison — Frequently Asked Questions" />
        <ContextualInternalLinks currentSlug="comparison" showBlogs showCalculators={false} />
        </main>
    );
}
