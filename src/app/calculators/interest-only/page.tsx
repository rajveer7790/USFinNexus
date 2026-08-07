import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import InterestOnlySeoContent from './InterestOnlySeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const InterestOnlyClient = nextDynamic(() => import('./InterestOnlyClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Interest-Only Mortgage Calculator | USFinNexus',
    description: 'Estimate payments during an interest-only mortgage period and compare the modeled payment after principal-and-interest amortization begins.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/interest-only' },
    openGraph: {
        type: 'website',
        title: 'Interest-Only Mortgage Calculator | USFinNexus',
        description: 'Model interest-only and later amortizing mortgage payments.',
        url: 'https://usfinnexus.com/calculators/interest-only',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Interest-Only Mortgage Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Interest-Only Mortgage Calculator | USFinNexus',
        description: 'Compare modeled interest-only and amortizing mortgage payments.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const INTEREST_ONLY_FAQS = [
    {
        question: 'Why can the principal balance stay unchanged during an interest-only period?',
        answer: 'If the required payment during the interest-only period covers only accrued interest and no optional principal is paid, the principal balance generally does not decline during that period. The exact payment rules depend on the loan contract.',
    },
    {
        question: 'What is payment shock on an interest-only mortgage?',
        answer: 'Payment shock describes a material increase in the required payment after the interest-only period ends. If the remaining balance must then amortize over a shorter remaining term, the principal-and-interest payment can rise substantially. The size of the change depends on the loan terms and rate structure.',
    },
    {
        question: 'Are interest-only mortgages appropriate for every borrower?',
        answer: 'No. They can create higher future payments and slower principal reduction, and some products also have variable-rate risk. Suitability depends on the borrower, loan terms, cash-flow needs and ability to handle future payments. Compare the complete loan disclosures rather than relying only on the initial payment.',
    },
];

export default function InterestOnlyPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Interest-Only Mortgage Calculator"
                description="Estimate modeled interest-only mortgage payments and the payment after amortization begins."
                url="https://usfinnexus.com/calculators/interest-only"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Interest-Only Mortgage Calculator', item: '/calculators/interest-only' }]} />
            <h1 className="sr-only">Interest-Only Mortgage Calculator</h1>
            <InterestOnlyClient />
            <InterestOnlySeoContent />
            <CalculatorFAQ faqs={INTEREST_ONLY_FAQS} title="Interest-Only Mortgage Calculator FAQ" />
        </main>
    );
}
