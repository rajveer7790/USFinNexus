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
    title: 'FHA vs. VA vs. USDA Loan Calculator | USFinNexus',
    description: 'Compare modeled FHA, VA and USDA purchase-loan payments, down payments, mortgage-insurance or guarantee-fee assumptions, taxes and insurance.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/fha-va-usda' },
    openGraph: {
        type: 'website',
        title: 'FHA vs. VA vs. USDA Loan Calculator | USFinNexus',
        description: 'Compare FHA, VA and USDA purchase-loan scenarios under the assumptions you enter.',
        url: 'https://usfinnexus.com/calculators/fha-va-usda',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus FHA VA USDA Loan Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FHA vs. VA vs. USDA Loan Calculator | USFinNexus',
        description: 'Compare modeled government-backed home-loan payment scenarios.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const GOV_LOAN_FAQS = [
    {
        question: 'What is the minimum down payment for an FHA purchase loan?',
        answer: 'FHA program rules permit a 3.5% minimum investment for borrowers meeting the applicable minimum decision credit-score requirement; a lower score band can require 10%. Meeting a score or down-payment threshold does not guarantee approval because lender underwriting and other FHA requirements still apply.',
    },
    {
        question: 'Do VA-backed loans require monthly mortgage insurance?',
        answer: 'VA-backed home loans do not require monthly private mortgage insurance. Many borrowers instead pay a one-time VA funding fee unless an exemption applies. The percentage depends on loan type, down payment and first or subsequent use of the benefit.',
    },
    {
        question: 'Who can use a USDA guaranteed home loan?',
        answer: 'USDA Single Family Housing Guaranteed Loans have borrower, income, property-location and occupancy requirements. Eligibility is determined using USDA rules and the approved lender; an online payment comparison cannot determine program eligibility.',
    },
    {
        question: 'Which program has the lowest total cost?',
        answer: 'There is no universal winner. Compare the actual interest rate, upfront fees, ongoing mortgage-insurance or guarantee fees, taxes, insurance, down payment, closing costs and expected holding period for the programs you are eligible to use.',
    },
];

export default function GovLoanComparisonPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="FHA vs. VA vs. USDA Loan Calculator"
                description="Compare modeled FHA, VA and USDA purchase-loan costs under the assumptions entered."
                url="https://usfinnexus.com/calculators/fha-va-usda"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'FHA vs. VA vs. USDA', item: '/calculators/fha-va-usda' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Program eligibility and exact fees must be confirmed with the responsible agency and lender</p>
            <h1 className="sr-only">FHA vs. VA vs. USDA Loan Calculator</h1>
            <GovLoanClient />
            <FhaVaUsdaSeoContent />
            <CalculatorFAQ faqs={GOV_LOAN_FAQS} title="FHA, VA & USDA Loan FAQ" />
        </main>
    );
}
