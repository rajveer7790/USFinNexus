import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import DripSeoContent from './DripSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const DripClient = nextDynamic(() => import('./DripClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Dividend Reinvestment Calculator | USFinNexus',
    description: 'Project dividend-reinvestment growth using your starting balance, dividend yield, dividend-growth, share-price growth, contributions and tax assumptions.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/drip' },
    openGraph: {
        type: 'website',
        title: 'Dividend Reinvestment Calculator | USFinNexus',
        description: 'Model dividend reinvestment using assumptions you control.',
        url: 'https://usfinnexus.com/calculators/drip',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Dividend Reinvestment Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dividend Reinvestment Calculator | USFinNexus',
        description: 'Project dividend reinvestment under different yield and growth assumptions.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const DRIP_FAQS = [
    {
        question: 'What is dividend yield?',
        answer: 'Dividend yield is the annual cash dividend per share divided by the current share price. It changes when either the dividend or share price changes and should not be treated as a guaranteed future return.',
    },
    {
        question: 'What is yield on cost?',
        answer: 'Yield on cost compares current annual dividends with the original amount invested. It can be useful for looking back at an investment, but it does not replace current yield, total return or an opportunity-cost comparison.',
    },
    {
        question: 'Do brokerages always reinvest dividends for free?',
        answer: 'No universal rule applies. Many U.S. brokerages offer automatic dividend reinvestment without a separate commission for eligible securities, but eligibility, fractional-share treatment, fees and execution methods vary by broker and security. Check the broker’s current terms.',
    },
    {
        question: 'Are reinvested dividends still taxable?',
        answer: 'In a taxable account, reinvesting a dividend generally does not by itself make the dividend tax-free. Federal tax treatment depends on whether a dividend is qualified or nonqualified and on the taxpayer’s circumstances. Tax-advantaged accounts have different rules.',
    },
];

export default function DripPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <WebApplicationSchema
                name="Dividend Reinvestment Calculator"
                description="Project dividend reinvestment using user-entered yield, growth, contribution and tax assumptions."
                url="https://usfinnexus.com/calculators/drip"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Dividend Reinvestment Calculator', item: '/calculators/drip' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Scenario analysis, not an investment-return forecast</p>
            <h1 className="sr-only">Dividend Reinvestment Calculator</h1>
            <DripClient />
            <DripSeoContent />
            <CalculatorFAQ faqs={DRIP_FAQS} title="Dividend Reinvestment Calculator FAQ" />
        </main>
    );
}
