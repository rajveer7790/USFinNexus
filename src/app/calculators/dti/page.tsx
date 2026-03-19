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
    title: 'Debt to Income Ratio Calculator (DTI) 2026 | USFinNexus',
    description: 'Free DTI Calculator. See if your Debt-to-Income ratio meets the 36% or 43% guidelines for mortgage approval.',
    openGraph: {
        type: 'website',
        title: 'Debt-to-Income (DTI) Calculator 2026 | USFinNexus',
        description: 'Free DTI calculator. See if your debt-to-income ratio meets the 28%/43% CFPB guidelines for mortgage approval. Works for front-end and back-end DTI. No signup.',
        url: 'https://usfinnexus.com/calculators/dti',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Debt to Income DTI Calculator 2026 — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/dti' },
};

const DTI_FAQS = [
    {
        question: 'What DTI ratio do I need to get a mortgage?',
        answer: 'Most conventional lenders require a back-end DTI of 43% or lower for a Qualified Mortgage (CFPB standard). Some lenders go up to 50% for borrowers with strong credit and assets. FHA loans allow up to 43% DTI with a 580+ credit score, or up to 50% with compensating factors. VA loans technically have no DTI limit, but most lenders cap at 41%.',
    },
    {
        question: 'What is included in the front-end DTI ratio?',
        answer: 'Front-end DTI (also called the "housing ratio") includes only housing-related costs: your mortgage principal, interest, property taxes, homeowners insurance, HOA fees, and PMI if applicable. The CFPB guideline is to keep this under 28% of gross monthly income for a Qualified Mortgage.',
    },
    {
        question: 'How can I lower my DTI before applying for a mortgage?',
        answer: 'The two ways to lower DTI are: (1) Pay off or pay down existing debts — even eliminating a small monthly car payment can move your DTI significantly. (2) Increase your income — a documented pay raise, side income, or added co-borrower income all reduce DTI. Avoid taking on new debt (car loans, credit cards) in the 6 months before applying for a mortgage.',
    },
    {
        question: 'Does student loan debt hurt my DTI for a mortgage?',
        answer: 'Yes. Student loan monthly payments are counted in your back-end DTI. If your student loans are in income-driven repayment (IDR) with $0 payments, FHA uses 0.5% of the outstanding balance as a monthly payment proxy. Conventional loans use the actual payment amount shown on your credit report.',
    },
    {
        question: 'What is a good DTI ratio for financial health?',
        answer: 'As a general rule: under 20% DTI is excellent, 20–35% is good, 36–43% is manageable but watch for new debt, over 43% signals financial stress and limits loan options. The 2026 Consumer Financial Protection Bureau standard for Qualified Mortgages caps back-end DTI at 43%.',
    },
];

export default function DtiPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Debt-to-Income (DTI) Calculator 2026"
                description="Free DTI calculator showing front-end and back-end ratios to check your mortgage readiness."
                url="https://usfinnexus.com/calculators/dti"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'DTI Calculator', item: '/calculators/dti' }]} />
                            <div className="pt-8">
                    <DtiClient />
                </div>
            <DtiSeoContent />
            <CalculatorFAQ faqs={DTI_FAQS} title="DTI Ratio — Frequently Asked Questions" />
        </main>
    );
}
