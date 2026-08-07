import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import DebtPayoffSeoContent from './DebtPayoffSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const DebtPayoffClient = nextDynamic(() => import('./DebtPayoffClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Debt Payoff Calculator | USFinNexus',
    description: 'Compare debt snowball and debt avalanche payoff scenarios using your balances, APRs, minimum payments and extra monthly payment amount.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/debt-payoff' },
    openGraph: {
        type: 'website',
        title: 'Debt Payoff Calculator | USFinNexus',
        description: 'Compare modeled debt snowball and avalanche payoff timelines and interest.',
        url: 'https://usfinnexus.com/calculators/debt-payoff',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Debt Payoff Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Debt Payoff Calculator | USFinNexus',
        description: 'Compare debt snowball and avalanche payoff scenarios.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const DEBT_PAYOFF_FAQS = [
    {
        question: 'What is the debt snowball method?',
        answer: 'The debt snowball method generally directs extra money to the smallest balance while required payments continue on the other debts. After one balance is paid, the amount available for the next debt can increase. Its appeal is often behavioral because it can create earlier account payoffs.',
    },
    {
        question: 'What is the debt avalanche method?',
        answer: 'The debt avalanche method generally directs extra money to the debt with the highest interest rate while required payments continue on other debts. When balances, rates and payment timing are otherwise fixed, prioritizing the highest rate can reduce modeled interest compared with a lower-rate-first order.',
    },
    {
        question: 'Should I use snowball or avalanche?',
        answer: 'The better method depends on your goals and ability to follow the plan. Avalanche can reduce modeled interest in many scenarios, while snowball can create faster small-balance wins. Fees, promotional APR expirations, minimum-payment formulas and account terms can change the result, so compare your actual debts.',
    },
];

export default function DebtPayoffPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Debt Payoff Calculator"
                description="Compare debt snowball and avalanche payoff scenarios using user-entered balances, rates and payments."
                url="https://usfinnexus.com/calculators/debt-payoff"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Debt Payoff Calculator', item: '/calculators/debt-payoff' }]} />
            <h1 className="sr-only">Debt Payoff Calculator</h1>
            <DebtPayoffClient />
            <DebtPayoffSeoContent />
            <CalculatorFAQ faqs={DEBT_PAYOFF_FAQS} title="Debt Payoff Calculator FAQ" />
        </main>
    );
}
