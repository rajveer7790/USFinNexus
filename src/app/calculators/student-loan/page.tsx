import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const StudentLoanClient = nextDynamic(() => import('./StudentLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Student Loan Payoff Calculator 2026 — Extra Payment Estimator | USFinNexus',
    description: 'Calculate your student loan payoff date and see how extra monthly payments save years and thousands in interest. Free student loan calculator with PDF export.',
    keywords: [
        'student loan calculator', 'student loan payoff calculator',
        'student loan extra payment calculator', 'student loan interest calculator',
        'how to pay off student loans faster', 'student loan repayment calculator',
        'student loan amortization', 'student debt payoff calculator',
        'federal student loan calculator', 'student loan payment estimator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/student-loan' },
    openGraph: {
        type: 'website',
        title: 'Student Loan Payoff Calculator 2026 | USFinNexus',
        description: 'See your exact student loan payoff date and how much extra payments save. Free calculator with PDF export.',
        url: 'https://usfinnexus.com/calculators/student-loan',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Student Loan Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Student Loan Payoff Calculator 2026 | USFinNexus',
        description: 'When will your student loans be paid off? See how extra payments cut years off your debt.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

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
        </main>
    );
}
