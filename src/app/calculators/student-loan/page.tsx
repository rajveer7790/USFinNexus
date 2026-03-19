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
    title: 'Free Student Loan Payoff Calculator | Extra Payments Estimator',
    description: 'Calculate your student loan payoff schedule and see how much time and interest you can save by making extra monthly payments. Free PDF export.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/student-loan' },
    openGraph: {
        type: 'website',
        title: 'Free Student Loan Payoff Calculator 2026 | USFinNexus',
        description: 'Calculate your student loan payoff schedule and see exactly how much time and interest you save with extra monthly payments. Free PDF export, no signup needed.',
        url: 'https://usfinnexus.com/calculators/student-loan',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Student Loan Payoff Calculator — USFinNexus' }],
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
