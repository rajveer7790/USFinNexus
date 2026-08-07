import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import AffordabilitySeoContent from './AffordabilitySeoContent';

const AffordabilityClient = nextDynamic(() => import('./AffordabilityClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Home Affordability Calculator | USFinNexus',
    description: 'Estimate how much house you may be able to afford using income, monthly debts, down payment, interest rate, taxes, insurance and planning DTI scenarios.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/affordability' },
    openGraph: {
        type: 'website',
        title: 'Home Affordability Calculator | USFinNexus',
        description: 'Estimate a home-price range and monthly housing cost using income, debt, down payment and mortgage assumptions.',
        url: 'https://usfinnexus.com/calculators/affordability',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Home Affordability Calculator — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Home Affordability Calculator | USFinNexus',
        description: 'Estimate how much house you may be able to afford using income, debts and mortgage assumptions.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const AFFORDABILITY_FAQS = [
    {
        question: 'How much house can I afford on a $100,000 salary?',
        answer: 'There is no single correct home price for a $100,000 salary. Affordability depends on monthly debts, down payment, mortgage rate, property taxes, insurance, HOA costs, cash reserves, loan program and lender underwriting. This calculator lets you test those inputs rather than relying on a salary-only rule of thumb.',
    },
    {
        question: 'Is 43% DTI the CFPB Qualified Mortgage limit?',
        answer: 'No. The current General Qualified Mortgage definition does not use a universal 43% debt-to-income cap. A 43% back-end DTI can still be used as a planning benchmark or lender guideline in some contexts, but actual underwriting limits vary by loan program, lender, automated underwriting results and borrower profile.',
    },
    {
        question: 'What does the 28/36 rule mean?',
        answer: 'The 28/36 rule is a traditional budgeting benchmark: roughly 28% of gross monthly income for housing costs and 36% for total recurring debt. It is a planning rule of thumb, not a universal legal or mortgage-approval requirement.',
    },
    {
        question: 'Does my down payment affect how much house I can afford?',
        answer: 'Yes. A larger down payment reduces the loan amount and typically lowers principal-and-interest payments. It may also change mortgage-insurance costs and loan eligibility. The exact effect depends on loan program, interest rate and other housing expenses.',
    },
    {
        question: 'What debts usually count toward back-end DTI?',
        answer: 'Mortgage underwriting commonly considers recurring monthly debt obligations such as the proposed housing payment, auto loans, student loans, personal loans, credit-card minimum payments and certain support obligations. The exact treatment of a debt can vary by loan program and underwriting rules.',
    },
];

export default function AffordabilityPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Home Affordability Calculator"
                description="Estimate a home-price range using income, monthly debts, down payment, mortgage rate and housing-cost assumptions."
                url="https://usfinnexus.com/calculators/affordability"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Home Affordability Calculator', item: '/calculators/affordability' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Last reviewed: August 7, 2026 · DTI values are planning scenarios, not universal approval limits</p>
            <h1 className="sr-only">Home Affordability Calculator</h1>
            <AffordabilityClient />
            <AffordabilitySeoContent />
            <CalculatorFAQ faqs={AFFORDABILITY_FAQS} title="Home Affordability Calculator — Frequently Asked Questions" />
        </main>
    );
}
