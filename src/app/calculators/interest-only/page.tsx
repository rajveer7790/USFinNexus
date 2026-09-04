import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';
import InterestOnlySeoContent from './InterestOnlySeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const InterestOnlyClient = nextDynamic(() => import('./InterestOnlyClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Interest-Only Mortgage Calculator 2026',
    description: 'Calculate your interest-only mortgage payments and see exactly how much your payment will jump when the loan fully amortizes.',
    openGraph: {
        type: 'website',
        title: 'Interest-Only Mortgage Calculator 2026',
        description: 'Calculate interest-only mortgage payments and see exactly how much your payment jumps when the loan fully amortizes. Compare IO vs standard payments side by side.',
        url: 'https://usfinnexus.com/calculators/interest-only',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Interest-Only Mortgage Calculator 2026 - USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/interest-only' },
    twitter: {
        card: 'summary_large_image',
        title: 'Interest-Only Mortgage Calculator 2026',
        description: 'Calculate interest-only payments and see exactly how much your payment jumps when full amortization kicks in.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const INTEREST_ONLY_FAQS = [
    {
        question: 'Why does my principal balance never go down on an IO loan?',
        answer: 'During the initial IO period (e.g., the first 10 years), the bank only requires you to pay the exact amount of interest the loan generates that month. Because you are not paying a single dollar extra toward the principal, the core balance of the debt remains completely frozen.',
    },
    {
        question: 'What is payment shock?',
        answer: 'Payment shock occurs at the end of the interest-only period. For a 30-year loan with a 10-year IO period, you suddenly have to pay off the entire principal balance in just 20 years. Your payment instantly spikes by hundreds or thousands of dollars a month, which catches many homeowners off guard and can lead to foreclosure.',
    },
    {
        question: 'Are interest-only loans a good idea?',
        answer: 'For the average homebuyer, they are a terrible idea. They are highly risky and rely on the hope that your income will dramatically increase or the home will rapidly appreciate. They are best used strategically by wealthy investors or individuals with variable, bonus-heavy compensation structures.',
    },
];

export default function InterestOnlyPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Interest-Only Mortgage Calculator 2026"
                description="Calculate interest-only mortgage payments and see the payment jump when the loan fully amortizes."
                url="https://usfinnexus.com/calculators/interest-only"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Interest-Only Calculator', item: '/calculators/interest-only' }]} />
            <InterestOnlyClient />
            <SemrushIntentSection slug="interest-only" />
            <InterestOnlySeoContent />
            <CalculatorFAQ faqs={INTEREST_ONLY_FAQS} title="Interest-Only Mortgages — Frequently Asked Questions" />
        <ContextualInternalLinks currentSlug="interest-only" showBlogs showCalculators={false} />
        </main>
    );
}
