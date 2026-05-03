import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import MortgageSeoContent from './MortgageSeoContent';

const MortgageCalculatorClient = nextDynamic(() => import('./MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Free Mortgage Calculator 2026 with PDF Download | USFinNexus',
    description: 'Calculate your full PITI mortgage payment instantly — principal, interest, taxes, insurance & PMI. Free PDF & CSV download. No signup, no email required.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/mortgage' },
    openGraph: {
        type: 'website',
        title: 'Free Mortgage Calculator 2026 with PDF Download | USFinNexus',
        description: 'Full PITI breakdown, amortization schedule, extra payments, and instant free PDF + CSV exports. No signup needed. Updated for 2026 conforming loan limits.',
        url: 'https://usfinnexus.com/calculators/mortgage',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Free Mortgage Calculator 2026 — USFinNexus' }],
    },
};

const MORTGAGE_FAQS = [
    {
        question: 'What is PITI in a mortgage payment?',
        answer: 'PITI stands for Principal, Interest, Taxes, and Insurance — the four components of a full monthly mortgage payment. Principal reduces your loan balance, interest is the lender\'s fee, property taxes are collected monthly into escrow, and insurance covers homeowners insurance (and PMI if your down payment is under 20%).',
    },
    {
        question: 'How much does a $400,000 mortgage cost per month in 2026?',
        answer: 'At a 7% interest rate on a 30-year fixed mortgage with $80,000 down (20%), the principal and interest payment is approximately $2,129/month. Adding typical property taxes ($400/mo) and insurance ($120/mo), total PITI is roughly $2,650/month. Use our calculator for your exact figures.',
    },
    {
        question: 'What credit score do I need for the best mortgage rate?',
        answer: 'To qualify for the best conventional mortgage rates, you typically need a credit score of 740 or higher. Scores of 720–739 are still excellent. FHA loans accept scores as low as 580 with 3.5% down, or 500 with 10% down. VA loans have no minimum score set by the VA, though lenders often require 620+.',
    },
    {
        question: 'How does PMI work and when can I cancel it?',
        answer: 'Private Mortgage Insurance (PMI) is required when your down payment is less than 20% of the home price. It costs 0.5%–1.5% of the loan annually. Under the Homeowners Protection Act, your lender must automatically cancel PMI when your loan balance reaches 78% of the original home value. You can request cancellation at 80% LTV.',
    },
    {
        question: 'Is it better to get a 15-year or 30-year mortgage?',
        answer: 'A 15-year mortgage has higher monthly payments but significantly lower total interest paid — often 50–60% less. A 30-year mortgage has lower monthly payments, giving more cash flow flexibility. If you can comfortably afford the 15-year payments, it builds equity faster and saves tens of thousands in interest. Use our mortgage calculator to compare both scenarios.',
    },
    {
        question: 'What is the 2026 conforming loan limit?',
        answer: 'The 2026 FHFA conforming loan limit is $806,500 for most US counties (baseline), increasing from $766,550 in 2025. In high-cost areas (like parts of California, New York, and Hawaii), the ceiling is $1,209,750. Loans above these limits are "jumbo" loans.',
    },
];

export default function MortgagePage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WebApplicationSchema
                name="Free Mortgage Calculator 2026"
                description="Calculate your full PITI mortgage payment instantly — principal, interest, taxes, insurance & PMI. Free PDF & CSV download."
                url="https://usfinnexus.com/calculators/mortgage"
                dateModified="2026-03-01"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Mortgage Calculator', item: '/calculators/mortgage' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Last updated: March 2026 &middot; 2026 FHFA conforming loan limits applied</p>
            <h1 className="sr-only">Free Mortgage Calculator 2026 with PDF Download</h1>
            <MortgageCalculatorClient />
            <MortgageSeoContent />
            <CalculatorFAQ faqs={MORTGAGE_FAQS} title="Mortgage Calculator — Frequently Asked Questions" />
        </main>
    );
}
