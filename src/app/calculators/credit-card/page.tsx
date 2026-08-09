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
    title: 'Credit Card Payoff Calculator 2026 — Find Your Debt-Free Date',
    description: 'Calculate how long to pay off your credit card balance and see exactly how much interest you save by increasing monthly payments. Free credit card payoff calculator.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/credit-card' },
    openGraph: {
        type: 'website',
        title: 'Credit Card Payoff Calculator 2026',
        description: 'Find your debt-free date and total interest cost. See how paying more each month saves you thousands.',
        url: 'https://usfinnexus.com/calculators/credit-card',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Credit Card Payoff Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Credit Card Payoff Calculator 2026',
        description: 'When will your credit card be paid off? See your debt-free date and total interest cost.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const CREDIT_CARD_FAQS = [
    {
        question: 'Why is my credit card balance barely going down?',
        answer: 'Because of compound interest. If you have a 25% APR and only make the minimum payment, roughly 80% of your payment goes directly to the bank as interest profit. Only a tiny fraction is actually applied to the principal balance.',
    },
    {
        question: 'Should I use savings to pay off my credit card?',
        answer: 'Mathematically, yes. If you have $10,000 sitting in a savings account earning 5% interest, you are making $500 a year. But if you have $10,000 in credit card debt at 25% APR, you are losing $2,500 a year. The debt is destroying your wealth 5 times faster than your savings can grow. Pay off the card immediately.',
    },
    {
        question: 'Will closing a paid-off credit card hurt my credit score?',
        answer: 'Yes. Closing a credit card reduces your Total Available Credit and increases your Credit Utilization Ratio, which will actively lower your FICO score. It also shortens your Average Age of Accounts. Unless the card charges a massive annual fee, you should keep the account open but cut the physical card up so you cannot use it.',
    },
];

export default function CreditCardPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Credit Card Payoff Calculator"
                description="Calculate how long it takes to pay off your credit card balance and see how much interest you can save."
                url="https://usfinnexus.com/calculators/credit-card"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Credit Card', item: '/calculators/credit-card' }]} />
            <CreditCardClient />
            <CreditCardSeoContent />
            <CalculatorFAQ faqs={CREDIT_CARD_FAQS} title="Credit Card Payoff — Frequently Asked Questions" />
        </main>
    );
}
