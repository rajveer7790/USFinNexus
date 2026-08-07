import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import CreditCardSeoContent from './CreditCardSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const CreditCardClient = nextDynamic(() => import('./CreditCardClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Credit Card Payoff Calculator | USFinNexus',
    description: 'Estimate how long it may take to pay off a credit-card balance and compare total interest under different monthly payment assumptions.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/credit-card' },
    openGraph: {
        type: 'website',
        title: 'Credit Card Payoff Calculator | USFinNexus',
        description: 'Estimate credit-card payoff time and modeled interest under different payment amounts.',
        url: 'https://usfinnexus.com/calculators/credit-card',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Credit Card Payoff Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Credit Card Payoff Calculator | USFinNexus',
        description: 'Estimate payoff time and interest under different credit-card payments.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const CREDIT_CARD_FAQS = [
    {
        question: 'Why can a credit-card balance decline slowly when I make only small payments?',
        answer: 'Interest is charged according to the card agreement, so part of each payment can go to interest and fees before reducing principal. The exact allocation depends on the APR, balance, transaction types, fees, daily-balance method and payment amount.',
    },
    {
        question: 'Should I use savings to pay off credit-card debt?',
        answer: 'That decision depends on the card APR, savings yield, emergency-fund needs, taxes, upcoming expenses and other debts. A higher credit-card APR can make repayment financially attractive, but using all available cash can create liquidity risk. Compare both the interest math and your need for emergency reserves.',
    },
    {
        question: 'Will closing a paid-off credit card always lower my credit score?',
        answer: 'Not necessarily. Closing an account can reduce available revolving credit and may affect utilization, but credit-score impact depends on the full credit file and scoring model. Closed accounts can also remain on credit reports for a period of time. Consider fees, fraud risk, account management and credit profile rather than assuming one outcome is guaranteed.',
    },
];

export default function CreditCardPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Credit Card Payoff Calculator"
                description="Estimate credit-card payoff time and total interest under different monthly payment assumptions."
                url="https://usfinnexus.com/calculators/credit-card"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Credit Card Payoff Calculator', item: '/calculators/credit-card' }]} />
            <h1 className="sr-only">Credit Card Payoff Calculator</h1>
            <CreditCardClient />
            <CreditCardSeoContent />
            <CalculatorFAQ faqs={CREDIT_CARD_FAQS} title="Credit Card Payoff Calculator FAQ" />
        </main>
    );
}
