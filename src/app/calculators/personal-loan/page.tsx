import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import PersonalLoanSeoContent from './PersonalLoanSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const PersonalLoanClient = nextDynamic(() => import('./PersonalLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Personal Loan Calculator 2026 - Payment & Interest Estimator | USFinNexus',
    description: 'Free personal loan calculator for 2026. Calculate monthly payments, total interest, and payday loan or debt consolidation payoff schedules.',
    openGraph: {
        type: 'website',
        title: 'Personal Loan Calculator 2026 - Payment & Interest | USFinNexus',
        description: 'Calculate your monthly personal loan payment, total interest cost, and full payoff schedule. Works for debt consolidation and general loans. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/personal-loan',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Personal Loan Calculator 2026 - USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/personal-loan' },
    twitter: {
        card: 'summary_large_image',
        title: 'Personal Loan Calculator 2026 — Payment & APR Comparison | USFinNexus',
        description: 'Calculate personal loan monthly payments, total interest, and compare APRs. Free personal loan estimator.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const PERSONAL_LOAN_FAQS = [
    {
        question: 'Are personal loan rates fixed or variable?',
        answer: 'Most personal loans have fixed interest rates. This means your monthly payment will remain exactly the same for the entire life of the loan (e.g., $450 a month for exactly 36 months). This predictability makes them excellent for debt consolidation.',
    },
    {
        question: 'What is an Origination Fee?',
        answer: 'An origination fee is an upfront charge taken by the lender to process the personal loan. It usually ranges from 1% to 8% of the loan amount. If you borrow $10,000 with a 5% fee, the bank takes $500 immediately and only gives you $9,500. You must still pay back the full $10,000.',
    },
    {
        question: 'Can I pay off a personal loan early?',
        answer: 'Yes, but you must check the loan agreement for a "Prepayment Penalty." Many reputable lenders allow you to pay off the loan early with zero penalties, which saves you money on interest. Always ask the lender explicitly if they charge a prepayment penalty before signing the contract.',
    },
];

export default function PersonalLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Personal Loan Calculator 2026"
                description="Calculate your monthly personal loan payment, total interest, and full payoff schedule."
                url="https://usfinnexus.com/calculators/personal-loan"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Personal Loan Calculator', item: '/calculators/personal-loan' }]} />
            <h1 className="sr-only">Personal Loan Calculator</h1>
            <PersonalLoanClient />
            <PersonalLoanSeoContent />
            <CalculatorFAQ faqs={PERSONAL_LOAN_FAQS} title="Personal Loans — Frequently Asked Questions" />
        </main>
    );
}
