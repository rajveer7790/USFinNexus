import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import InvestmentSeoContent from './InvestmentSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const InvestmentClient = nextDynamic(() => import('./InvestmentClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Compound Interest Calculator | USFinNexus',
    description: 'Calculate compound growth using an initial balance, recurring contributions, return assumption, compounding frequency and time horizon. Compare multiple scenarios.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/investment' },
    openGraph: {
        type: 'website',
        title: 'Compound Interest Calculator | USFinNexus',
        description: 'Project compound growth with recurring contributions and user-entered return assumptions.',
        url: 'https://usfinnexus.com/calculators/investment',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Compound Interest Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Compound Interest Calculator | USFinNexus',
        description: 'Project compound growth using assumptions you control.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const INVESTMENT_FAQS = [
    {
        question: 'What is compound interest?',
        answer: 'Compounding means growth is calculated on the starting principal plus prior accumulated growth. With a positive rate, reinvesting prior earnings can make the balance grow faster over time than simple interest on the original principal alone.',
    },
    {
        question: 'What rate of return should I use in a compound interest calculator?',
        answer: 'Use a scenario assumption rather than treating a historical average or current savings rate as a guaranteed future return. The appropriate assumption depends on the asset, fees, taxes, inflation, risk and time horizon. Testing conservative, middle and optimistic scenarios is usually more informative than using one forecast.',
    },
    {
        question: 'Is a lump-sum investment always better than investing monthly?',
        answer: 'Not always. Investing available cash earlier gives it more time in the market, but actual outcomes depend on subsequent returns and risk. Recurring contributions can be appropriate for ongoing income and can reduce timing concentration. This calculator can model either approach; it does not predict which future market path will occur.',
    },
];

export default function InvestmentPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Compound Interest Calculator"
                description="Project compound growth using an initial balance, recurring contributions and user-entered return assumptions."
                url="https://usfinnexus.com/calculators/investment"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Compound Interest Calculator', item: '/calculators/investment' }]} />
            <h1 className="sr-only">Compound Interest Calculator</h1>
            <InvestmentClient />
            <InvestmentSeoContent />
            <CalculatorFAQ faqs={INVESTMENT_FAQS} title="Compound Interest Calculator FAQ" />
        </main>
    );
}
