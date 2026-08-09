import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import RefinanceSeoContentV2 from './RefinanceSeoContentV2';

const RefinanceClient = nextDynamic(() => import('./RefinanceClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Refinance Calculator',
    description: 'Compare your current mortgage with a new loan. Estimate monthly payment savings, refinance costs and a simple break-even period using your own rate and fee assumptions.',
    alternates: { canonical: '/calculators/refinance' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Refinance Calculator',
        description: 'Estimate refinance payment savings, costs and break-even timing using your own loan assumptions.',
        url: 'https://usfinnexus.com/calculators/refinance',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Mortgage Refinance Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Refinance Calculator',
        description: 'Compare current and proposed mortgage scenarios and estimate break-even timing.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const REFINANCE_FAQS = [
    {
        question: 'How is a refinance break-even period calculated?',
        answer: 'A simple break-even period divides upfront refinance costs by the monthly payment savings. For example, $4,000 of costs divided by $200 of monthly savings equals 20 months. This simple measure does not capture every economic effect of refinancing.',
    },
    {
        question: 'Does a lower mortgage rate always mean I should refinance?',
        answer: 'No. Closing costs, points, the new loan term, how long you expect to keep the loan, cash-out, and changes in total interest can all matter. Compare the complete scenarios rather than the rate alone.',
    },
    {
        question: 'What rate should I enter?',
        answer: 'Use the rate from a current lender quote for the loan structure you are considering. Market averages are useful for context but are not individualized offers and can become stale quickly.',
    },
    {
        question: 'What refinance costs should I include?',
        answer: 'Include the lender and third-party costs you expect to pay to obtain the new loan. Some charges may be financed or offset by lender credits, which changes the economics. Use the actual Loan Estimate when available.',
    },
    {
        question: 'Should I compare the remaining term of my current loan?',
        answer: 'Yes. Replacing a loan with a new longer term can reduce the monthly payment while extending repayment. Compare remaining balance, remaining term, new term, costs and total projected interest rather than monthly payment alone.',
    },
];

export default function RefinancePage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Refinance Calculator"
                description="Compare a current mortgage with a proposed refinance and estimate payment savings, costs and break-even timing."
                url="https://usfinnexus.com/calculators/refinance"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Mortgage Refinance Calculator', item: '/calculators/refinance' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 &middot; Use a current lender quote for rate and fee assumptions</p>
            <RefinanceClient />
            <RefinanceSeoContentV2 />
            <CalculatorFAQ faqs={REFINANCE_FAQS} title="Mortgage Refinance Calculator FAQs" />
        </main>
    );
}
