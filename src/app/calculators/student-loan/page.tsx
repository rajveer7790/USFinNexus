import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';
import StudentLoanSeoContent from './StudentLoanSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const StudentLoanClient = nextDynamic(() => import('./StudentLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Student Loan Payoff Calculator 2026 — Extra Payment Estimator',
    description: 'Calculate your student loan payoff date and see how extra monthly payments save years and thousands in interest. Free student loan calculator with PDF export.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/student-loan' },
    openGraph: {
        type: 'website',
        title: 'Student Loan Payoff Calculator 2026',
        description: 'See your exact student loan payoff date and how much extra payments save. Free calculator with PDF export.',
        url: 'https://usfinnexus.com/calculators/student-loan',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Student Loan Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Student Loan Payoff Calculator 2026',
        description: 'When will your student loans be paid off? See how extra payments cut years off your debt.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const STUDENT_LOAN_FAQS = [
    {
        question: 'How exactly do extra payments work?',
        answer: 'When you make an extra payment on a student loan, the entire extra amount goes directly to reducing the principal balance. This bypasses the interest schedule entirely, which means you will pay less total interest over the life of the loan and reach a $0 balance years ahead of schedule.',
    },
    {
        question: 'What is the "advance due date" trap?',
        answer: 'Many student loan servicers will automatically take your extra payment and use it to push your next due date into the future. This does NOT help you pay off the loan faster. You must explicitly tell the servicer to apply the extra funds directly to the principal balance.',
    },
    {
        question: 'Should I refinance my Federal student loans?',
        answer: 'Refinancing to a lower rate can mathematically save you money, but it is incredibly risky if you have Federal loans. By refinancing with a private lender, you permanently lose all federal protections, including Income-Driven Repayment (IDR), forbearance options, and Public Service Loan Forgiveness (PSLF).',
    },
];

export default function StudentLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Student Loan Payoff Calculator"
                description="Calculate your student loan payoff schedule and see how much interest you save with extra payments."
                url="https://usfinnexus.com/calculators/student-loan"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Student Loan', item: '/calculators/student-loan' }]} />
            <StudentLoanClient />
            <SemrushIntentSection slug="student-loan" />
            <StudentLoanSeoContent />
            <CalculatorFAQ faqs={STUDENT_LOAN_FAQS} title="Student Loans — Frequently Asked Questions" />
        </main>
    );
}
