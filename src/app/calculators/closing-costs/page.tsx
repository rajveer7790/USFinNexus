import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import ClosingCostsSeoContent from './ClosingCostsSeoContent';

const ClosingCostsClient = nextDynamic(() => import('./ClosingCostsClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Closing Cost Calculator | USFinNexus',
    description: 'Estimate home-buying closing costs including lender charges, title and settlement fees, prepaid items, taxes and other assumptions. Actual costs vary by transaction and location.',
    alternates: { canonical: '/calculators/closing-costs' },
    openGraph: {
        type: 'website',
        title: 'Closing Cost Calculator | USFinNexus',
        description: 'Estimate buyer closing-cost categories for a U.S. home purchase using your own assumptions.',
        url: 'https://usfinnexus.com/calculators/closing-costs',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Closing Cost Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Closing Cost Calculator | USFinNexus',
        description: 'Estimate common home-purchase closing-cost categories.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const CLOSING_COSTS_FAQS = [
    {
        question: 'What costs can appear at a home closing?',
        answer: 'Depending on the transaction, costs can include lender charges, appraisal or valuation fees, title and settlement services, recording charges, prepaid interest, initial escrow deposits, property taxes, homeowners insurance and other state or local charges. Your Loan Estimate and Closing Disclosure are the best transaction-specific sources for a financed purchase.',
    },
    {
        question: 'Who pays buyer-agent and seller-agent compensation?',
        answer: 'Real-estate broker compensation is negotiable and transaction-specific. Do not assume a universal percentage or that one party always pays both sides. Review the applicable representation agreement, purchase contract and closing documents.',
    },
    {
        question: 'Can a seller contribute toward a buyer’s closing costs?',
        answer: 'Seller concessions can be permitted, but limits and eligible costs depend on the mortgage program, occupancy, loan-to-value and transaction terms. Confirm the current rules for your specific loan with the lender.',
    },
    {
        question: 'Can closing costs be financed?',
        answer: 'Treatment varies by loan and cost type. Some costs may be financed when program rules and appraisal constraints allow, while others are paid at closing or offset through lender credits or seller concessions. A higher-rate lender-credit structure is not literally cost-free.',
    },
    {
        question: 'Why can the calculator differ from my Closing Disclosure?',
        answer: 'Actual fees depend on lender, title provider, location, property, closing date, taxes, insurance, credits and negotiated terms. Use the calculator for planning and the official transaction disclosures for the final numbers.',
    },
];

export default function ClosingCostsPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Closing Cost Calculator"
                description="Estimate common home-purchase closing-cost categories using transaction and location assumptions."
                url="https://usfinnexus.com/calculators/closing-costs"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Closing Cost Calculator', item: '/calculators/closing-costs' }]} />
            <ClosingCostsClient />
            <ClosingCostsSeoContent />
            <CalculatorFAQ faqs={CLOSING_COSTS_FAQS} title="Closing Cost Calculator FAQs" />
        </main>
    );
}
