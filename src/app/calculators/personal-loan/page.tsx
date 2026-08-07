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
    title: 'Personal Loan Calculator | USFinNexus',
    description: 'Estimate a personal-loan monthly payment, total interest and payoff schedule using the loan amount, APR, term and fee assumptions you enter.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/personal-loan' },
    openGraph: {
        type: 'website',
        title: 'Personal Loan Calculator | USFinNexus',
        description: 'Estimate personal-loan payments, interest and payoff schedule.',
        url: 'https://usfinnexus.com/calculators/personal-loan',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Personal Loan Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Personal Loan Calculator | USFinNexus',
        description: 'Estimate monthly personal-loan payments and total interest.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const PERSONAL_LOAN_FAQS = [
    {
        question: 'Are personal-loan interest rates fixed or variable?',
        answer: 'Many unsecured personal loans use a fixed APR and fixed payment, but product terms vary by lender. Confirm whether the offered APR is fixed or variable and whether fees are included in the disclosed APR before comparing loans.',
    },
    {
        question: 'What is a personal-loan origination fee?',
        answer: 'An origination fee is a lender charge that may be deducted from loan proceeds or otherwise reflected in the transaction. The fee amount and treatment vary by lender. Compare the APR, amount actually received and total repayment rather than assuming one fee range applies to every loan.',
    },
    {
        question: 'Can I pay off a personal loan early?',
        answer: 'Many loans permit early payoff, but prepayment terms depend on the contract and applicable law. Review the loan agreement for any prepayment charge and confirm how additional payments are applied before assuming an early payoff will work a particular way.',
    },
];

export default function PersonalLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Personal Loan Calculator"
                description="Estimate personal-loan monthly payment, total interest and payoff schedule using user-entered assumptions."
                url="https://usfinnexus.com/calculators/personal-loan"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Personal Loan Calculator', item: '/calculators/personal-loan' }]} />
            <h1 className="sr-only">Personal Loan Calculator</h1>
            <PersonalLoanClient />
            <PersonalLoanSeoContent />
            <CalculatorFAQ faqs={PERSONAL_LOAN_FAQS} title="Personal Loan Calculator FAQ" />
        </main>
    );
}
