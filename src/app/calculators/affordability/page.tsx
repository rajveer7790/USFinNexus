import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import AffordabilitySeoContent from './AffordabilitySeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const AffordabilityClient = nextDynamic(() => import('./AffordabilityClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Home Affordability Calculator | USFinNexus',
    description:
        'Estimate how much house you can afford from income, monthly debts, down payment, rate, property taxes, insurance, HOA and your own planning DTI target.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/affordability' },
    openGraph: {
        type: 'website',
        title: 'Home Affordability Calculator | USFinNexus',
        description: 'Estimate a home-price range using your income, debts and housing-cost assumptions.',
        url: 'https://usfinnexus.com/calculators/affordability',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Home Affordability Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Home Affordability Calculator | USFinNexus',
        description: 'Model a home-price range using income, debts and property-specific cost assumptions.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const AFFORDABILITY_FAQS = [
    {
        question: 'How does the home affordability calculator estimate a home price?',
        answer: 'The calculator starts with gross monthly income and your selected planning DTI target, subtracts recurring monthly debts, and treats the remainder as a modeled housing budget. It then solves for a home price using the interest rate, term, down payment, property-tax rate, insurance, HOA dues and mortgage-insurance estimate you enter.',
    },
    {
        question: 'Is 43% the maximum DTI for a Qualified Mortgage?',
        answer: 'No. The CFPB removed the former fixed 43% DTI limit from the General Qualified Mortgage definition and replaced it with price-based thresholds. Lenders and loan programs can use different DTI requirements. This calculator lets you choose a DTI percentage as a planning scenario rather than presenting one percentage as a universal approval cutoff.',
    },
    {
        question: 'Does a larger down payment increase the home price I can model?',
        answer: 'Usually, yes. A larger down payment reduces the amount financed and therefore the principal-and-interest payment for a given home price. It can also affect mortgage-insurance requirements and loan pricing, which should be modeled separately when applicable.',
    },
    {
        question: 'What debts should I include in DTI planning?',
        answer: 'Use recurring monthly debt obligations that a mortgage underwriter is likely to evaluate, such as auto loans, student-loan obligations, personal loans and minimum credit-card payments. The exact treatment of individual obligations varies by lender and loan program.',
    },
    {
        question: 'Is this calculator a mortgage prequalification?',
        answer: 'No. It is a planning tool. Actual mortgage eligibility and pricing depend on credit, verified income, assets, debts, property, loan-to-value, reserves, program rules and lender underwriting.',
    },
];

export default function AffordabilityPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Home Affordability Calculator"
                description="Estimate a home-price range from income, debts, down payment and housing-cost assumptions."
                url="https://usfinnexus.com/calculators/affordability"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Home Affordability Calculator', item: '/calculators/affordability' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Planning tool, not lender prequalification</p>
            <AffordabilityClient />
            <AffordabilitySeoContent />
            <CalculatorFAQ faqs={AFFORDABILITY_FAQS} title="Home Affordability Calculator FAQ" />
        </main>
    );
}
