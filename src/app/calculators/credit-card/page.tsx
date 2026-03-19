import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const CreditCardClient = nextDynamic(() => import('./CreditCardClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Free Credit Card Payoff Calculator | Find Your Debt Free Date',
    description: 'Calculate how long it will take to pay off your credit card balance. See exactly how much interest you can save by increasing your monthly payments.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/credit-card' },
    openGraph: {
        type: 'website',
        title: 'Free Credit Card Payoff Calculator 2026 | USFinNexus',
        description: 'Calculate how long it takes to pay off your credit card balance. See total interest paid and how much you save by increasing monthly payments. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/credit-card',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Credit Card Payoff Calculator — USFinNexus' }],
    },
};

export default function CreditCardPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Credit Card Payoff Calculator"
                description="Calculate how long it takes to pay off your credit card balance and see how much interest you can save."
                url="https://usfinnexus.com/calculators/credit-card"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Credit Card', item: '/calculators/credit-card' }]} />
            <CreditCardClient />
        </main>
    );
}
