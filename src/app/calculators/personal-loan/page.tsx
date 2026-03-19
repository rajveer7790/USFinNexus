import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const PersonalLoanClient = nextDynamic(() => import('./PersonalLoanClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Personal Loan Calculator 2026 — Payment & Interest Estimator | USFinNexus',
    description: 'Free personal loan calculator for 2026. Calculate monthly payments, total interest, and payday loan or debt consolidation payoff schedules.',
    keywords: ['personal loan calculator', 'loan payment calculator', 'debt consolidation calculator', 'interest estimator', 'loan payoff schedule'],
    openGraph: {
        type: 'website',
        title: 'Personal Loan Calculator 2026 — Payment & Interest | USFinNexus',
        description: 'Calculate your monthly personal loan payment, total interest cost, and full payoff schedule. Works for debt consolidation and general loans. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/personal-loan',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Personal Loan Calculator 2026 — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/personal-loan' },
};

export default function PersonalLoanPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Personal Loan Calculator 2026"
                description="Calculate your monthly personal loan payment, total interest, and full payoff schedule."
                url="https://usfinnexus.com/calculators/personal-loan"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Personal Loan Calculator', item: '/calculators/personal-loan' }]} />
                            <PersonalLoanClient />
        </main>
    );
}
