import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import RefinanceSeoContent from './RefinanceSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const RefinanceClient = nextDynamic(() => import('./RefinanceClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Refinance Calculator | USFinNexus',
    description: 'Compare your current mortgage with a refinance scenario. Estimate monthly payment savings, closing-cost break-even and total modeled cost under the assumptions you enter.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/refinance' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Refinance Calculator | USFinNexus',
        description: 'Estimate refinance payment savings, closing-cost break-even and modeled total cost.',
        url: 'https://usfinnexus.com/calculators/refinance',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Mortgage Refinance Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Refinance Calculator | USFinNexus',
        description: 'Compare mortgage refinance payment savings and break-even under your assumptions.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const REFINANCE_FAQS = [
    {
        question: 'How is a simple refinance break-even point calculated?',
        answer: 'A simple break-even estimate divides refinance costs by monthly payment savings. For example, $4,000 of costs divided by $200 of monthly savings equals 20 months. This is only a first-pass measure because a refinance can also reset the loan term, change total interest, finance closing costs or alter cash paid at closing.',
    },
    {
        question: 'Does a lower monthly payment always mean refinancing saves money?',
        answer: 'No. A lower payment can come from a lower interest rate, a longer repayment term, or both. Compare remaining cost on the current loan with the new loan term, closing costs and how long you expect to keep the mortgage.',
    },
    {
        question: 'What refinance closing costs should I enter?',
        answer: 'Use the lender estimate or Loan Estimate when available. Fees can include origination or underwriting charges, appraisal, title services, recording fees, prepaid interest and other settlement costs. Costs vary by loan, lender and location, so a generic percentage should not replace an actual quote.',
    },
    {
        question: 'Should I use today’s advertised mortgage rate as my refinance rate?',
        answer: 'Use the rate and points you realistically expect to receive. Advertised market averages can be useful context but borrower pricing varies with credit, loan-to-value, loan type, occupancy, points and lender pricing. If a page shows a market average, it should identify its source date.',
    },
    {
        question: 'Is this calculator a refinance approval or lender quote?',
        answer: 'No. It is a scenario calculator. Approval, rate, fees, cash-out limits and underwriting requirements are determined by the lender and applicable loan program.',
    },
];

export default function RefinancePage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Refinance Calculator"
                description="Compare a current mortgage with a refinance scenario and estimate payment savings and simple break-even."
                url="https://usfinnexus.com/calculators/refinance"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Mortgage Refinance Calculator', item: '/calculators/refinance' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Enter the rate and closing costs relevant to your scenario</p>
            <RefinanceClient />
            <RefinanceSeoContent />
            <CalculatorFAQ faqs={REFINANCE_FAQS} title="Mortgage Refinance Calculator FAQ" />
        </main>
    );
}
