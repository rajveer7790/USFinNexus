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
    title: 'Auto Loan Calculator 2026 — Monthly Car Payment & Total Cost | USFinNexus',
    description: 'Free auto loan calculator for 2026. Calculate monthly car payments, total interest paid, sales tax estimate, and download a full amortization schedule.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/auto-loan' },
    openGraph: {
        type: 'website',
        title: 'Auto Loan Calculator 2026 — Monthly Car Payment | USFinNexus',
        description: 'Calculate your monthly car payment, total interest, and full amortization schedule. Free auto loan calculator.',
        url: 'https://usfinnexus.com/calculators/auto-loan',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Auto Loan Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Auto Loan Calculator 2026 | Monthly Car Payment | USFinNexus',
        description: 'Monthly car payment, total interest, and full amortization. Free auto loan calculator.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const AUTO_LOAN_FAQS = [
    {
        question: 'How do you calculate a car payment with tax and fees?',
        answer: 'To calculate the true out-the-door car payment, you must take the negotiated price of the vehicle, subtract your down payment and trade-in value, and then add your state sales tax (e.g., 7%) and dealership fees to the final principal balance. Our calculator handles this complex math automatically if you input your tax rate.',
    },
    {
        question: 'What is a good interest rate for a car loan in 2026?',
        answer: 'For a new car in 2026, borrowers with excellent credit (740+) should expect interest rates between 5.5% and 7.0%. Used car rates are typically 1% to 2% higher. Dealership promotional rates (like 1.9% or 2.9%) are sometimes available but require pristine credit and usually mandate a shorter 36- or 48-month term.',
    },
    {
        question: 'Is it better to get a 60-month or 72-month car loan?',
        answer: 'A 60-month (5-year) loan is mathematically superior. While a 72-month loan drops your monthly payment, it dramatically increases the total interest you pay to the bank. More importantly, cars depreciate rapidly. With a 72-month loan, you are at extreme risk of being "underwater" (owing more than the car is worth) for the first four years of the loan.',
    },
    {
        question: 'Does paying extra on my car loan reduce the monthly payment?',
        answer: 'No. Unless you formally refinance the loan, your required monthly payment will never change. However, paying extra directly reduces your principal balance, which drastically cuts the total interest you pay over the life of the loan and allows you to pay off the car months or years early.',
    },
];

export default function AutoLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Auto Loan Calculator 2026"
                description="Calculate your monthly car payment with taxes and trade-in. Get a full amortization schedule instantly."
                url="https://usfinnexus.com/calculators/auto-loan"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Auto Loan Calculator', item: '/calculators/auto-loan' }]} />
            <h1 className="sr-only">Auto Loan Calculator 2026</h1>
            <AutoLoanClient />
            <AutoLoanSeoContent />
            <CalculatorFAQ faqs={AUTO_LOAN_FAQS} title="Auto Loan Calculator — Frequently Asked Questions" />
        </main>
    );
}
