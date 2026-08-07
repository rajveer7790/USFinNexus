import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import DtiSeoContentV2 from './DtiSeoContentV2';

const DtiClient = nextDynamic(() => import('./DtiClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Debt-to-Income Ratio Calculator | USFinNexus',
    description: 'Calculate your debt-to-income ratio from recurring monthly debt and gross monthly income. Compare planning benchmarks without treating 43% as a universal mortgage approval limit.',
    alternates: { canonical: '/calculators/dti' },
    openGraph: {
        type: 'website',
        title: 'Debt-to-Income Ratio Calculator | USFinNexus',
        description: 'Calculate DTI and understand how lenders may use debt-to-income ratios in mortgage underwriting.',
        url: 'https://usfinnexus.com/calculators/dti',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Debt-to-Income Ratio Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Debt-to-Income Ratio Calculator | USFinNexus',
        description: 'Calculate your debt-to-income ratio and compare planning benchmarks.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const DTI_FAQS = [
    {
        question: 'What is a debt-to-income ratio?',
        answer: 'DTI is recurring monthly debt divided by gross monthly income. It is one factor lenders may consider when evaluating mortgage ability to repay.',
    },
    {
        question: 'Does the CFPB General Qualified Mortgage rule cap DTI at 43%?',
        answer: 'No. The CFPB replaced the former fixed 43% DTI limit in the General Qualified Mortgage definition with price-based thresholds. Specific mortgage programs, automated underwriting systems and lenders can still apply their own DTI requirements.',
    },
    {
        question: 'What is a good DTI ratio?',
        answer: 'There is no single ratio that guarantees approval or financial health. Lower DTI generally provides more room in a budget, while mortgage qualification depends on the loan program, housing payment, credit, assets, income documentation and lender underwriting.',
    },
    {
        question: 'What debt should I include in this calculator?',
        answer: 'For a planning estimate, include recurring required debt payments such as auto loans, student loans and minimum revolving-debt payments. Mortgage underwriting rules can count some obligations differently, so a lender-calculated DTI may differ.',
    },
    {
        question: 'How can I lower my DTI?',
        answer: 'Reducing recurring debt payments or increasing documented gross income can lower DTI. Before changing debt or credit specifically to qualify for a mortgage, consider discussing the timing with your lender because underwriting and credit effects vary.',
    },
];

export default function DtiPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Debt-to-Income Ratio Calculator"
                description="Calculate recurring monthly debt as a percentage of gross monthly income."
                url="https://usfinnexus.com/calculators/dti"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Debt-to-Income Ratio Calculator', item: '/calculators/dti' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 &middot; Current CFPB General Qualified Mortgage rule reflected</p>
            <div className="pt-8"><DtiClient /></div>
            <DtiSeoContentV2 />
            <CalculatorFAQ faqs={DTI_FAQS} title="Debt-to-Income Ratio Calculator FAQs" />
        </main>
    );
}
