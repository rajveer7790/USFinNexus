import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import DtiSeoContent from './DtiSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const DtiClient = nextDynamic(() => import('./DtiClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Debt-to-Income Ratio Calculator | USFinNexus',
    description:
        'Calculate your debt-to-income ratio from gross monthly income and recurring debt payments. Learn how mortgage lenders use DTI without treating 43% as a universal General QM cutoff.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/dti' },
    openGraph: {
        type: 'website',
        title: 'Debt-to-Income Ratio Calculator | USFinNexus',
        description: 'Calculate DTI and understand how lenders use the ratio in mortgage underwriting.',
        url: 'https://usfinnexus.com/calculators/dti',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Debt-to-Income Ratio Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Debt-to-Income Ratio Calculator | USFinNexus',
        description: 'Calculate DTI and understand lender underwriting context.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const DTI_FAQS = [
    {
        question: 'How do I calculate my debt-to-income ratio?',
        answer: 'Divide the monthly debt payments included in your scenario by gross monthly income, then multiply by 100. For example, $1,800 in monthly debt obligations divided by $6,000 of gross monthly income equals a 30% DTI.',
    },
    {
        question: 'Is 43% the maximum DTI for a Qualified Mortgage?',
        answer: 'No. The CFPB removed the former fixed 43% DTI limit from the General Qualified Mortgage definition and replaced it with price-based thresholds. Mortgage lenders and individual loan programs can still use DTI requirements, so the relevant threshold varies by loan and borrower.',
    },
    {
        question: 'What is front-end versus back-end DTI?',
        answer: 'Front-end DTI generally compares monthly housing obligations with gross monthly income. Back-end DTI generally adds other recurring monthly debts to the housing obligation. Exact definitions and treatment of individual obligations can vary by lender or program.',
    },
    {
        question: 'Does student-loan debt count in mortgage DTI?',
        answer: 'Student-loan obligations can be included in mortgage underwriting, but the payment amount used can depend on the loan program, repayment status and documentation. Use the payment a prospective lender or program would recognize rather than assuming one universal rule.',
    },
    {
        question: 'Can a high DTI prevent mortgage approval?',
        answer: 'A higher DTI can reduce borrowing capacity or affect eligibility, but DTI is not the only factor. Credit, assets, reserves, loan-to-value, property, income stability, automated underwriting findings and program rules can all matter.',
    },
];

export default function DtiPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Debt-to-Income Ratio Calculator"
                description="Calculate monthly debt payments as a percentage of gross monthly income."
                url="https://usfinnexus.com/calculators/dti"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Debt-to-Income Ratio Calculator', item: '/calculators/dti' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Current CFPB General QM context applied</p>
            <DtiClient />
            <DtiSeoContent />
            <CalculatorFAQ faqs={DTI_FAQS} title="Debt-to-Income Ratio Calculator FAQ" />
        </main>
    );
}
