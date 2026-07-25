import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import FhaVaUsdaSeoContent from './FhaVaUsdaSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const GovLoanClient = nextDynamic(() => import('./GovLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'FHA vs VA vs USDA Loan Calculator 2026 — Compare Government Loans | USFinNexus',
    description: 'Side-by-side comparison of FHA, VA, and USDA loan programs. See which government mortgage fits your budget with the lowest down payment and total cost.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/fha-va-usda' },
    openGraph: {
        type: 'website',
        title: 'FHA vs VA vs USDA Loan Calculator 2026 | USFinNexus',
        description: 'Compare FHA, VA, and USDA government loans side by side. Find which program gives you the lowest payment.',
        url: 'https://usfinnexus.com/calculators/fha-va-usda',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'FHA VA USDA Loan Comparison Calculator — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FHA vs VA vs USDA Loan Calculator 2026 | USFinNexus',
        description: 'Which government loan saves you more? Compare FHA, VA, and USDA side by side.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const GOV_LOAN_FAQS = [
    {
        question: 'What is the minimum down payment for an FHA loan?',
        answer: 'In 2026, the minimum down payment for an FHA loan is 3.5%, provided you have a credit score of at least 580. If your credit score is between 500 and 579, you are required to put down 10%.',
    },
    {
        question: 'Do VA loans require mortgage insurance?',
        answer: 'No. VA loans do not require any monthly mortgage insurance (PMI or MIP), which drastically lowers your monthly payment. However, they do require a one-time upfront VA Funding Fee, which is typically rolled into the loan balance. Veterans receiving VA disability are exempt from this fee.',
    },
    {
        question: 'Can anyone get a USDA loan?',
        answer: 'No. USDA loans have two strict requirements: geographical and financial. The home must be located in an eligible rural or suburban area designated by the USDA. Additionally, your total household income cannot exceed 115% of the median income for that specific area.',
    },
];

export default function GovLoanComparisonPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="FHA vs VA vs USDA Loan Calculator 2026"
                description="Side-by-side comparison of FHA, VA, and USDA government loan programs. Compare down payments, fees, and monthly costs."
                url="https://usfinnexus.com/calculators/fha-va-usda"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Gov Loan Comparison', item: '/calculators/fha-va-usda' }]} />
            <h1 className="sr-only">FHA vs VA vs USDA Loan Comparison Calculator</h1>
            <GovLoanClient />
            <FhaVaUsdaSeoContent />
            <CalculatorFAQ faqs={GOV_LOAN_FAQS} title="Government Loans — Frequently Asked Questions" />
        </main>
    );
}
