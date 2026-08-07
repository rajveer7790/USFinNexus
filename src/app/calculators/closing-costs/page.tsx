import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import ClosingCostsSeoContent from './ClosingCostsSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const ClosingCostsClient = nextDynamic(() => import('./ClosingCostsClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Closing Cost Calculator | USFinNexus',
    description: 'Estimate buyer and seller closing costs using the lender, title, recording, transfer-tax, prepaid, broker and other transaction-specific amounts you enter.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/closing-costs' },
    openGraph: {
        type: 'website',
        title: 'Closing Cost Calculator | USFinNexus',
        description: 'Build a buyer and seller closing-cost estimate from transaction-specific fees, taxes and prepaid items.',
        url: 'https://usfinnexus.com/calculators/closing-costs',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Closing Cost Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Closing Cost Calculator | USFinNexus',
        description: 'Estimate buyer and seller closing costs using your transaction-specific amounts.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const CLOSING_COSTS_FAQS = [
    {
        question: 'How much are closing costs on a home purchase?',
        answer: 'There is no single percentage that applies to every transaction. Closing costs depend on the loan, lender, property, title or settlement provider, state and local taxes, prepaid interest, escrow funding, insurance, contract credits and other items. The lender’s Loan Estimate and final Closing Disclosure are the best transaction-specific sources for a financed purchase.',
    },
    {
        question: 'Who pays closing costs, the buyer or seller?',
        answer: 'Both sides can have closing costs, and allocation varies by law, contract and local custom. Buyers can pay lender, appraisal, title, recording and prepaid items. Sellers can pay transfer charges, settlement or attorney costs, agreed broker compensation and concessions. Use the purchase contract and settlement documents for the actual allocation.',
    },
    {
        question: 'When should I receive a Loan Estimate and Closing Disclosure?',
        answer: 'For mortgages covered by the CFPB Loan Estimate and Closing Disclosure rules, the lender generally provides the Loan Estimate within three business days after receiving an application, and the borrower must receive the Closing Disclosure at least three business days before closing. Some loan types are subject to different disclosure rules.',
    },
    {
        question: 'Are all closing costs tax deductible?',
        answer: 'No. IRS rules distinguish deductible items, costs that can be added to the home’s basis, and costs that are neither deductible nor added to basis. Mortgage interest and certain real estate taxes can be deductible when applicable requirements are met; other settlement costs can receive different treatment. Review current IRS guidance for your transaction.',
    },
    {
        question: 'Why does this calculator not automatically apply a state transfer-tax rate?',
        answer: 'Transfer and recording charges can depend on state, county, municipality, property type, exemptions, consideration, mortgage amount and who pays under the contract. A single statewide lookup can produce a materially wrong estimate, so this calculator lets you enter the amount from the applicable local source or settlement professional.',
    },
];

export default function ClosingCostsPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Closing Cost Calculator"
                description="Estimate buyer and seller closing costs using transaction-specific fees, taxes and prepaid items entered by the user."
                url="https://usfinnexus.com/calculators/closing-costs"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Closing Cost Calculator', item: '/calculators/closing-costs' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Enter local transfer taxes and settlement charges from your transaction documents</p>
            <ClosingCostsClient />
            <ClosingCostsSeoContent />
            <CalculatorFAQ faqs={CLOSING_COSTS_FAQS} title="Closing Cost Calculator FAQ" />
        </main>
    );
}
