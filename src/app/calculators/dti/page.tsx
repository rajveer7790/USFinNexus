import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import DtiSeoContent from './DtiSeoContent';

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
    description: 'Calculate your debt-to-income ratio (DTI) from gross monthly income and recurring monthly debt. Compare the result with common planning benchmarks while recognizing that mortgage underwriting varies by program and lender.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/dti' },
    openGraph: {
        type: 'website',
        title: 'Debt-to-Income Ratio Calculator | USFinNexus',
        description: 'Calculate DTI and compare it with common mortgage-planning benchmarks. Actual underwriting limits vary by loan program and lender.',
        url: 'https://usfinnexus.com/calculators/dti',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Debt-to-Income Ratio Calculator — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Debt-to-Income Ratio Calculator | USFinNexus',
        description: 'Calculate your DTI and review common mortgage-planning benchmarks.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const DTI_FAQS = [
    {
        question: 'What DTI ratio do I need to get a mortgage?',
        answer: 'There is no single DTI limit that applies to every mortgage. Acceptable ratios depend on the loan program, lender, automated underwriting findings, credit profile, reserves, loan-to-value ratio and other compensating factors. Use the calculator for planning, then confirm the applicable underwriting rules with the lender or program.',
    },
    {
        question: 'Is 43% DTI the current CFPB Qualified Mortgage maximum?',
        answer: 'No. The current General Qualified Mortgage definition does not impose a universal 43% debt-to-income cap. The older General QM rule used a 43% DTI threshold, but the CFPB replaced that framework with price-based thresholds. A 43% ratio can still be a useful planning benchmark or appear in some underwriting contexts.',
    },
    {
        question: 'What is the difference between front-end and back-end DTI?',
        answer: 'Front-end DTI compares housing expenses with gross monthly income. Back-end DTI compares housing plus other recurring monthly debt obligations with gross monthly income. Mortgage programs and lenders can define qualifying obligations differently.',
    },
    {
        question: 'How can I lower my DTI before applying for a mortgage?',
        answer: 'Reducing recurring monthly debt obligations or increasing stable, documentable qualifying income can lower DTI. Before changing debt or credit accounts for a mortgage application, consider how the action could affect credit, cash reserves and underwriting, and confirm the strategy with the lender.',
    },
    {
        question: 'Does student loan debt count in mortgage DTI?',
        answer: 'Student-loan obligations can be included in mortgage DTI, but the payment used for underwriting depends on the loan program and the borrower’s repayment status. Do not assume a single percentage or treatment applies to FHA, VA, USDA, Fannie Mae and Freddie Mac loans; use the current program guidance for the application.',
    },
];

export default function DtiPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Debt-to-Income Ratio Calculator"
                description="Calculate debt-to-income ratio from gross monthly income and recurring monthly debt and compare it with common planning benchmarks."
                url="https://usfinnexus.com/calculators/dti"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Debt-to-Income Ratio Calculator', item: '/calculators/dti' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Last reviewed: August 7, 2026 · Planning benchmarks are not universal mortgage approval limits</p>
            <div className="pt-8">
                <DtiClient />
            </div>
            <DtiSeoContent />
            <CalculatorFAQ faqs={DTI_FAQS} title="Debt-to-Income Ratio — Frequently Asked Questions" />
        </main>
    );
}
