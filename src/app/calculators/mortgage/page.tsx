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
    title: 'Mortgage Calculator | USFinNexus',
    description: 'Estimate your monthly mortgage payment including principal, interest, property taxes, homeowners insurance, PMI and HOA fees. View amortization and extra-payment scenarios.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/mortgage' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Calculator | USFinNexus',
        description: 'Estimate a complete monthly mortgage payment with principal, interest, taxes, insurance, PMI and HOA fees.',
        url: 'https://usfinnexus.com/calculators/mortgage',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Mortgage Calculator — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Calculator | USFinNexus',
        description: 'Estimate monthly PITI, PMI and HOA costs and review an amortization schedule.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const MORTGAGE_FAQS = [
    {
        question: 'What is PITI in a mortgage payment?',
        answer: 'PITI stands for principal, interest, taxes, and insurance. Principal reduces the loan balance, interest is the cost of borrowing, and taxes and homeowners insurance are commonly included in an escrowed monthly payment. PMI, HOA dues, and other costs may also affect the total monthly housing payment.',
    },
    {
        question: 'How much does a $400,000 mortgage cost per month at 7%?',
        answer: 'For a $400,000 loan amount at 7% interest over 30 years, principal and interest are about $2,661 per month. If instead the home price is $400,000 with 20% down, the $320,000 loan has principal and interest of about $2,129 per month. Property taxes, homeowners insurance, HOA dues, and mortgage insurance can increase the total payment.',
    },
    {
        question: 'What credit score do I need for a mortgage?',
        answer: 'Minimum and preferred credit scores vary by loan program, lender, automated underwriting results, down payment, and borrower profile. Higher scores can improve pricing, but there is no single credit-score threshold that guarantees the best mortgage rate across all lenders and programs.',
    },
    {
        question: 'How does PMI work and when can I cancel it?',
        answer: 'Private mortgage insurance commonly applies to conventional loans with higher loan-to-value ratios. Under the federal Homeowners Protection Act, borrower-requested cancellation can generally become available at 80% of the home’s original value when applicable conditions are met, and automatic termination generally occurs at the scheduled 78% point when applicable requirements are satisfied. Different rules apply to FHA mortgage insurance.',
    },
    {
        question: 'Is a 15-year or 30-year mortgage better?',
        answer: 'A 15-year fixed mortgage generally has a higher monthly principal-and-interest payment but can reduce total interest and build equity faster. A 30-year term usually lowers the required monthly payment but can produce more lifetime interest. The better option depends on cash flow, rate, goals, and how long you expect to keep the loan.',
    },
    {
        question: 'What is the 2026 conforming loan limit?',
        answer: 'The FHFA 2026 baseline conforming loan limit for a one-unit property is $832,750 in most of the United States. The one-unit high-cost-area ceiling is $1,249,125. County-specific limits can differ, so confirm the applicable limit for the property location.',
    },
];

export default function MortgagePage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WebApplicationSchema
                name="Mortgage Calculator"
                description="Estimate monthly mortgage principal, interest, taxes, insurance, PMI and HOA costs and review an amortization schedule."
                url="https://usfinnexus.com/calculators/mortgage"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Mortgage Calculator', item: '/calculators/mortgage' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Last reviewed: August 7, 2026 · 2026 FHFA conforming loan limits verified</p>
            <h1 className="sr-only">Mortgage Calculator</h1>
            <MortgageCalculatorClient />
            <MortgageSeoContent />
            <CalculatorFAQ faqs={MORTGAGE_FAQS} title="Mortgage Calculator — Frequently Asked Questions" />
        </main>
    );
}
