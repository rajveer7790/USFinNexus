import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import MortgageSeoContentV2 from './MortgageSeoContentV2';

const MortgageCalculatorClient = nextDynamic(() => import('./MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Mortgage Calculator',
    description: 'Estimate your monthly mortgage payment with principal, interest, property taxes, homeowners insurance, PMI and HOA fees. View amortization and extra-payment scenarios.',
    alternates: { canonical: '/calculators/mortgage' },
    openGraph: {
        type: 'website',
        title: 'Mortgage Calculator',
        description: 'Estimate monthly mortgage payments including principal, interest, taxes, insurance, PMI and HOA fees.',
        url: 'https://usfinnexus.com/calculators/mortgage',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Mortgage Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Calculator',
        description: 'Estimate monthly mortgage payments and view an amortization schedule.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const MORTGAGE_FAQS = [
    {
        question: 'What is PITI in a mortgage payment?',
        answer: 'PITI stands for principal, interest, taxes and insurance. Depending on the loan and property, your housing budget may also include PMI or other mortgage insurance, HOA dues, maintenance and utilities.',
    },
    {
        question: 'How is a fixed-rate mortgage payment calculated?',
        answer: 'The principal-and-interest payment is calculated from the loan amount, monthly interest rate and number of monthly payments using the standard amortization formula. Property taxes, insurance, PMI and HOA costs are added separately when applicable.',
    },
    {
        question: 'Does a Qualified Mortgage have a universal 43% DTI limit?',
        answer: 'No. The CFPB replaced the former fixed 43% DTI limit in the General Qualified Mortgage definition with price-based thresholds. Lenders and specific loan programs may still use DTI guidelines, so planning percentages are not guaranteed approval thresholds.',
    },
    {
        question: 'When can conventional PMI be cancelled?',
        answer: 'For covered conventional loans under the Homeowners Protection Act, a borrower can generally request PMI cancellation when the principal balance is scheduled to reach 80% of the original value, subject to statutory conditions. Automatic termination generally occurs at 78% when required conditions are met. FHA mortgage insurance follows different rules.',
    },
    {
        question: 'What is the 2026 conforming loan limit?',
        answer: 'The 2026 FHFA baseline conforming loan limit for a one-unit property in most of the United States is $832,750. The one-unit high-cost ceiling can reach $1,249,125, but the applicable limit depends on location.',
    },
    {
        question: 'What are the 2026 FHA one-unit loan limits?',
        answer: 'HUD set the 2026 FHA one-unit national floor at $541,287 and the standard high-cost ceiling at $1,249,125. County-specific limits apply, and special statutory areas can follow different rules.',
    },
];

export default function MortgagePage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WebApplicationSchema
                name="Mortgage Calculator"
                description="Estimate your monthly mortgage payment with principal, interest, taxes, insurance, PMI and HOA fees."
                url="https://usfinnexus.com/calculators/mortgage"
                dateModified="2026-08-09"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Mortgage Calculator', item: '/calculators/mortgage' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 9, 2026 &middot; 2026 FHFA and HUD loan limits referenced where applicable</p>
            <MortgageCalculatorClient />
            <SemrushIntentSection slug="mortgage" />
            <MortgageSeoContentV2 />
            <CalculatorFAQ faqs={MORTGAGE_FAQS} title="Mortgage Calculator FAQs" />
        </main>
    );
}
