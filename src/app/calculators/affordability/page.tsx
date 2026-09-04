import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import AffordabilitySeoContentV2 from './AffordabilitySeoContentV2';

const AffordabilityClient = nextDynamic(() => import('./AffordabilityClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: "Home Affordability Calculator | Free Tool",
    description: 'Estimate how much house you can afford using income, recurring debt, down payment, mortgage rate, term and property-tax assumptions. Compare 28% and 43% planning scenarios.',
    alternates: { canonical: '/calculators/affordability' },
    openGraph: {
        type: 'website',
        title: 'Home Affordability Calculator',
        description: 'Estimate a home-price range from income, debt, down payment, mortgage rate and property-tax assumptions.',
        url: 'https://usfinnexus.com/calculators/affordability',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Home Affordability Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Home Affordability Calculator',
        description: 'Estimate how much house you can afford and compare planning scenarios.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const AFFORDABILITY_FAQS = [
    {
        question: 'How does a home affordability calculator work?',
        answer: 'It combines gross income, recurring debt, a proposed housing-payment share, down payment, mortgage rate, loan term, property taxes and other assumptions to estimate a home-price range. It is a planning estimate, not a lender preapproval.',
    },
    {
        question: 'Is 43% DTI the current CFPB Qualified Mortgage maximum?',
        answer: 'No. The CFPB removed the former fixed 43% DTI limit from the General Qualified Mortgage definition and replaced it with price-based thresholds. Specific loan programs, automated underwriting systems and lenders can use different DTI requirements.',
    },
    {
        question: 'Why does this calculator show 28% and 43%?',
        answer: 'They are familiar planning reference points. The 28% output models a more conservative housing-cost share and the 43% output models a higher total-debt scenario. Neither percentage guarantees mortgage approval or defines a universal current lending limit.',
    },
    {
        question: 'Does a larger down payment increase affordability?',
        answer: 'A larger down payment generally reduces the amount financed and the monthly principal-and-interest payment for the same home price. It can also affect mortgage-insurance costs. The actual effect depends on the loan program, rate, taxes, insurance and other factors.',
    },
    {
        question: 'What should I include in recurring monthly debt?',
        answer: 'For a planning estimate, include required recurring obligations such as auto loans, student loans and minimum revolving-debt payments. Mortgage underwriting can count certain obligations and income differently, so a lender-calculated DTI can differ from this tool.',
    },
];

export default function AffordabilityPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Home Affordability Calculator"
                description="Estimate a home-price range using income, recurring debt, down payment, mortgage rate and housing-cost assumptions."
                url="https://usfinnexus.com/calculators/affordability"
                dateModified="2026-08-09"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Home Affordability Calculator', item: '/calculators/affordability' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 9, 2026 &middot; 28% and 43% are planning scenarios, not universal approval limits</p>
            <AffordabilityClient />
            <SemrushIntentSection slug="affordability" />
            <AffordabilitySeoContentV2 />
            <CalculatorFAQ faqs={AFFORDABILITY_FAQS} title="Home Affordability Calculator FAQs" />
        <ContextualInternalLinks currentSlug="affordability" showBlogs showCalculators={false} />
        </main>
    );
}
