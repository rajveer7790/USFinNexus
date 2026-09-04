import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import AutoLoanSeoContent from './AutoLoanSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';

const AutoLoanClient = nextDynamic(() => import('./AutoLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Auto Loan Calculator',
    description: 'Estimate a monthly car payment, total interest and loan amortization using vehicle price, down payment, trade-in, taxes, fees, APR and loan term.',
    alternates: { canonical: '/calculators/auto-loan' },
    openGraph: {
        type: 'website',
        title: 'Auto Loan Calculator',
        description: 'Estimate monthly car payments, total interest and amortization from your own auto-loan assumptions.',
        url: 'https://usfinnexus.com/calculators/auto-loan',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Auto Loan Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Auto Loan Calculator',
        description: 'Estimate a monthly car payment and total interest.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const AUTO_LOAN_FAQS = [
    {
        question: 'How is a monthly car payment calculated?',
        answer: 'For a standard amortizing auto loan, the payment depends on the amount financed, APR and number of monthly payments. Taxes, registration, dealer charges, trade-in treatment and rebates can change the amount financed and vary by state and transaction.',
    },
    {
        question: 'What APR should I use in the calculator?',
        answer: 'Use the APR or interest rate from a current lender or dealer financing quote for your credit profile and vehicle. Broad market averages are not individualized offers and can become stale quickly.',
    },
    {
        question: 'Does a longer auto-loan term reduce the payment?',
        answer: 'A longer term generally lowers the required monthly payment for the same principal and rate, but it usually increases total interest and can keep the loan balance above the vehicle value for longer.',
    },
    {
        question: 'What happens if I pay extra principal?',
        answer: 'If the loan permits principal prepayments and the servicer applies them correctly, extra principal can reduce the balance faster and lower future interest. It does not necessarily reduce the scheduled monthly payment unless the loan is recast or refinanced.',
    },
];

export default function AutoLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Auto Loan Calculator"
                description="Estimate monthly car payments, total interest and amortization using vehicle and loan assumptions."
                url="https://usfinnexus.com/calculators/auto-loan"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Auto Loan Calculator', item: '/calculators/auto-loan' }]} />
            <AutoLoanClient />
            <AutoLoanSeoContent />
            <SemrushIntentSection slug="auto-loan" />
            <CalculatorFAQ faqs={AUTO_LOAN_FAQS} title="Auto Loan Calculator FAQs" />
        <ContextualInternalLinks currentSlug="auto-loan" showBlogs showCalculators={false} />
        </main>
    );
}
