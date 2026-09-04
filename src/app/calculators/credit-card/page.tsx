import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import CreditCardSeoContent from './CreditCardSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';

const CreditCardClient = nextDynamic(() => import('./CreditCardClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Credit Card Debt Calculator: Payoff Date & Interest',
    description: 'Use this credit card debt calculator to estimate payoff time, total interest and the effect of a larger fixed monthly payment or balance transfer.',
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
        answer: 'A high APR and a low minimum payment can direct a large share of early payments to interest. Issuer minimum-payment formulas vary, so use the current statement balance, APR and required minimum for an accurate estimate.',
    },
    {
        question: 'Should I use savings to pay off my credit card?',
        answer: 'Compare the card APR with the after-tax savings yield, but keep enough emergency cash for essential expenses. Using every dollar of savings can cause new borrowing when an unexpected bill arrives.',
    },
    {
        question: 'Will closing a paid-off credit card hurt my credit score?',
        answer: 'It can affect utilization and account-age factors, but the result depends on the full credit file and scoring model. Weigh any annual fee, fraud exposure and spending risk before deciding whether to keep an unused account open.',
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
            <SemrushIntentSection slug="credit-card" />
            <CalculatorFAQ faqs={CREDIT_CARD_FAQS} title="Credit Card Payoff — Frequently Asked Questions" />
        <ContextualInternalLinks currentSlug="credit-card" showBlogs showCalculators={false} />
        </main>
    );
}
