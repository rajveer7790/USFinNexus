import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import MortgageSeoContent from './MortgageSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const MortgageCalculatorClient = nextDynamic(() => import('./MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Calculator | USFinNexus',
    description:
        'Estimate your monthly mortgage payment including principal, interest, property taxes, homeowners insurance, PMI and HOA fees. View an amortization schedule and compare scenarios.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/mortgage' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Calculator | USFinNexus',
        description: 'Estimate monthly PITI, PMI, HOA costs and amortization for a home loan.',
        url: 'https://usfinnexus.com/calculators/mortgage',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Mortgage Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Calculator | USFinNexus',
        description: 'Estimate monthly mortgage payment, PITI, PMI and amortization.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const MORTGAGE_FAQS = [
    {
        question: 'What does a mortgage calculator include?',
        answer: 'A useful mortgage estimate can include principal and interest plus property taxes, homeowners insurance, mortgage insurance when applicable, and HOA dues. These added costs are often called the all-in housing payment; taxes, insurance and HOA amounts vary by property and location.',
    },
    {
        question: 'How much is the monthly principal and interest on a $400,000 mortgage?',
        answer: 'As an illustration, a $400,000 principal balance at 7% fixed interest for 30 years has principal-and-interest payments of about $2,661 per month. Property taxes, homeowners insurance, mortgage insurance and HOA dues would be additional. Use your actual rate and costs for a more relevant estimate.',
    },
    {
        question: 'When can conventional PMI be canceled?',
        answer: 'For many borrower-paid conventional PMI arrangements covered by the Homeowners Protection Act, a borrower may request cancellation when the principal balance is scheduled to reach 80% of the original value if applicable conditions are met, and automatic termination generally occurs at 78% when the borrower is current. Rules differ by loan type, so check your servicer and loan documents.',
    },
    {
        question: 'What are the 2026 conforming loan limits?',
        answer: 'FHFA set the 2026 one-unit baseline conforming loan limit at $832,750, with a high-cost-area ceiling of $1,249,125. County limits can vary, so use the applicable FHFA limit for the property location.',
    },
    {
        question: 'Does a mortgage calculator tell me whether I will qualify?',
        answer: 'No. A calculator estimates payment math. Mortgage approval depends on the lender, loan program, credit profile, income documentation, assets, debts, property, loan-to-value ratio and other underwriting factors.',
    },
    {
        question: 'Should I use a 15-year or 30-year term?',
        answer: 'A shorter term usually produces a higher required monthly payment and lower total interest, while a longer term usually lowers the required monthly payment but increases total interest if held to maturity. Compare both using the same loan amount and realistic rates.',
    },
];

export default function MortgagePage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WebApplicationSchema
                name="Mortgage Calculator"
                description="Estimate monthly mortgage payment including principal, interest, taxes, insurance, PMI and HOA costs."
                url="https://usfinnexus.com/calculators/mortgage"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Mortgage Calculator', item: '/calculators/mortgage' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · 2026 FHFA conforming loan limits referenced</p>
            <h1 className="sr-only">Mortgage Calculator</h1>
            <MortgageCalculatorClient />
            <MortgageSeoContent />
            <CalculatorFAQ faqs={MORTGAGE_FAQS} title="Mortgage Calculator FAQ" />
        </main>
    );
}
