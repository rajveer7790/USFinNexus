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
    title: 'Credit Card Payoff Calculator 2026 — Find Your Debt-Free Date | USFinNexus',
    description: 'Calculate how long to pay off your credit card balance and see exactly how much interest you save by increasing monthly payments. Free credit card payoff calculator.',
    keywords: [
        'credit card payoff calculator', 'credit card debt calculator',
        'credit card interest calculator', 'how long to pay off credit card',
        'credit card minimum payment calculator', 'credit card payoff date',
        'pay off credit card faster calculator', 'credit card debt free date',
        'credit card amortization', 'high interest debt payoff calculator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/credit-card' },
    openGraph: {
        type: 'website',
        title: 'Credit Card Payoff Calculator 2026 | USFinNexus',
        description: 'Find your debt-free date and total interest cost. See how paying more each month saves you thousands.',
        url: 'https://usfinnexus.com/calculators/credit-card',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Credit Card Payoff Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Credit Card Payoff Calculator 2026 | USFinNexus',
        description: 'When will your credit card be paid off? See your debt-free date and total interest cost.',
        images: ['https://usfinnexus.com/icon-512.png'],
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
