import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import RefinanceSeoContent from './RefinanceSeoContent';

const RefinanceClient = nextDynamic(() => import('./RefinanceClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Refinance Calculator | USFinNexus',
    description: 'Compare your current mortgage with a refinance scenario. Estimate monthly payment savings, closing-cost break-even time, lifetime interest and net savings.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/refinance' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Refinance Calculator | USFinNexus',
        description: 'Estimate refinance monthly savings, closing-cost break-even time and lifetime cost differences.',
        url: 'https://usfinnexus.com/calculators/refinance',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Mortgage Refinance Calculator — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Refinance Calculator | USFinNexus',
        description: 'Compare a current mortgage with a refinance scenario and estimate break-even time.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const REFINANCE_FAQS = [
    {
        question: 'When can refinancing a mortgage make sense?',
        answer: 'Refinancing can be worth evaluating when a new loan improves your rate, payment, term, risk profile, or cash-flow goals enough to justify closing costs and any extension of the repayment period. The decision depends on the offered APR and fees, how long you expect to keep the loan, your current remaining term, and your goals—not on a universal rate-drop rule.',
    },
    {
        question: 'How is the refinance break-even point calculated?',
        answer: 'A simple break-even estimate divides refinance closing costs by monthly payment savings. For example, $4,000 of costs divided by $200 of monthly savings gives a 20-month simple break-even. A more complete decision should also compare the remaining term, total interest, cash paid at closing, financed costs, taxes, and any change in loan features.',
    },
    {
        question: 'Is refinancing worth it if I only save $100 per month?',
        answer: 'It can be, but monthly savings alone are not enough to decide. Compare total refinance costs with expected savings over the period you expect to keep the loan, and check whether a new longer term increases lifetime interest even while lowering the monthly payment.',
    },
    {
        question: 'How much are mortgage refinance closing costs?',
        answer: 'Refinance costs vary widely by lender, loan amount, location, title requirements, points, appraisal needs and third-party fees. Enter the actual Loan Estimate or quoted closing costs when possible rather than relying on a national percentage assumption.',
    },
    {
        question: 'What is a cash-out refinance?',
        answer: 'A cash-out refinance replaces the existing mortgage with a larger loan and provides part of the difference as cash, subject to equity, loan-program and underwriting limits. Maximum loan-to-value, pricing and eligibility vary by program and lender, so use current loan documents and lender guidance for an actual transaction.',
    },
];

export default function RefinancePage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Refinance Calculator"
                description="Compare a current mortgage with a refinance scenario and estimate monthly savings, lifetime cost differences, and break-even time."
                url="https://usfinnexus.com/calculators/refinance"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Mortgage Refinance Calculator', item: '/calculators/refinance' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Last reviewed: August 7, 2026 · Enter your actual refinance quote for decision-quality estimates</p>
            <h1 className="sr-only">Mortgage Refinance Calculator</h1>
            <RefinanceClient />
            <RefinanceSeoContent />
            <CalculatorFAQ faqs={REFINANCE_FAQS} title="Mortgage Refinance Calculator — Frequently Asked Questions" />
        </main>
    );
}
