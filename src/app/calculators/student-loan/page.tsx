import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import StudentLoanSeoContent from './StudentLoanSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const StudentLoanClient = nextDynamic(() => import('./StudentLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Student Loan Payoff Calculator | USFinNexus',
    description: 'Estimate student-loan payoff time and total interest, and compare an extra-payment scenario using the balance, APR, payment and additional amount you enter.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/student-loan' },
    openGraph: {
        type: 'website',
        title: 'Student Loan Payoff Calculator | USFinNexus',
        description: 'Estimate student-loan payoff time, interest and extra-payment scenarios.',
        url: 'https://usfinnexus.com/calculators/student-loan',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Student Loan Payoff Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Student Loan Payoff Calculator | USFinNexus',
        description: 'Estimate student-loan payoff time and interest under different payment scenarios.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const STUDENT_LOAN_FAQS = [
    {
        question: 'How do extra student-loan payments affect payoff?',
        answer: 'Additional payments can reduce principal faster and therefore reduce future interest when the servicer applies them after any accrued interest and fees according to the loan terms. Servicing rules and payment allocation can vary, so check how the servicer applies amounts above the scheduled payment.',
    },
    {
        question: 'What does it mean when a student-loan due date is advanced?',
        answer: 'Some servicers can place an account in paid-ahead status after receiving more than the amount due. That does not necessarily prevent the extra amount from reducing principal, but payment allocation and future required payments can differ. Review the servicer instructions if your goal is faster payoff.',
    },
    {
        question: 'What happens if I refinance federal student loans with a private lender?',
        answer: 'A private refinance replaces federal loans with a private loan. That can permanently give up federal benefits and protections associated with the refinanced loans, which may include federal repayment options, deferment or forbearance rules and forgiveness programs. Compare both the interest cost and the value of federal benefits before refinancing.',
    },
];

export default function StudentLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Student Loan Payoff Calculator"
                description="Estimate student-loan payoff time and interest under standard and extra-payment scenarios."
                url="https://usfinnexus.com/calculators/student-loan"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Student Loan Payoff Calculator', item: '/calculators/student-loan' }]} />
            <h1 className="sr-only">Student Loan Payoff Calculator</h1>
            <StudentLoanClient />
            <StudentLoanSeoContent />
            <CalculatorFAQ faqs={STUDENT_LOAN_FAQS} title="Student Loan Payoff Calculator FAQ" />
        </main>
    );
}
