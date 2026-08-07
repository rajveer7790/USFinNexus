import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import AutoLoanSeoContent from './AutoLoanSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const AutoLoanClient = nextDynamic(() => import('./AutoLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Auto Loan Calculator | USFinNexus',
    description: 'Estimate a monthly car payment, total interest and amortization using vehicle price, down payment, trade-in, tax, fees, APR and loan term.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/auto-loan' },
    openGraph: {
        type: 'website',
        title: 'Auto Loan Calculator | USFinNexus',
        description: 'Estimate car payments, total interest and amortization under the assumptions you enter.',
        url: 'https://usfinnexus.com/calculators/auto-loan',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Auto Loan Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Auto Loan Calculator | USFinNexus',
        description: 'Estimate monthly car payment, total interest and amortization.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const AUTO_LOAN_FAQS = [
    {
        question: 'How do you calculate a car payment with tax and fees?',
        answer: 'Start with the vehicle purchase price, then apply the transaction items relevant to your state and deal, such as taxable trade-in treatment, down payment, sales or use tax and financed fees. Because states handle taxes and trade-ins differently, enter the tax and fee amounts that apply to your transaction rather than relying on one national rule.',
    },
    {
        question: 'What is a good auto-loan interest rate?',
        answer: 'There is no single rate that is good for every borrower. Auto-loan APR depends on credit profile, vehicle, new-versus-used status, term, lender and market conditions. Compare current lender or credit-union quotes using the same amount and term.',
    },
    {
        question: 'Is a 60-month or 72-month auto loan better?',
        answer: 'A shorter term usually has a higher required monthly payment but can reduce total interest and the time spent owing more than the vehicle is worth. A longer term can lower the payment but may increase total borrowing cost. Compare both using the same vehicle price and realistic APRs.',
    },
    {
        question: 'Does paying extra on an auto loan reduce the required monthly payment?',
        answer: 'Extra principal payments often reduce the balance and future interest rather than automatically changing the contractual monthly payment. Exact treatment depends on the loan agreement and how the lender applies additional payments, so confirm there is no prepayment restriction and that extra funds are applied as intended.',
    },
];

export default function AutoLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Auto Loan Calculator"
                description="Estimate a monthly car payment, total interest and amortization using user-entered loan assumptions."
                url="https://usfinnexus.com/calculators/auto-loan"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Auto Loan Calculator', item: '/calculators/auto-loan' }]} />
            <h1 className="sr-only">Auto Loan Calculator</h1>
            <AutoLoanClient />
            <AutoLoanSeoContent />
            <CalculatorFAQ faqs={AUTO_LOAN_FAQS} title="Auto Loan Calculator FAQ" />
        </main>
    );
}
