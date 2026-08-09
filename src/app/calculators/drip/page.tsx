import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import DripSeoContent from './DripSeoContent';

const DripClient = nextDynamic(() => import('./DripClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'DRIP Calculator 2026 — Dividend Reinvestment Forecaster',
    description: 'Calculate the compound growth of dividend reinvestment over time. Model dividend growth rates, yield on cost, and tax-adjusted returns. Free DRIP forecaster.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/drip' },
    openGraph: {
        type: 'website',
        title: 'DRIP Dividend Reinvestment Calculator 2026',
        description: 'Model dividend reinvestment compounding over decades. Dividend growth, yield on cost, and tax modeling.',
        url: 'https://usfinnexus.com/calculators/drip',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'DRIP Dividend Reinvestment Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DRIP Dividend Reinvestment Calculator 2026',
        description: 'How powerful is dividend reinvestment? Model your DRIP portfolio growth over decades.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const DRIP_FAQS = [
    {
        question: 'What is Dividend Yield?',
        answer: 'Dividend yield is the financial ratio that shows how much a company pays out in dividends each year relative to its stock price. For example, if a stock trades at $100 and pays a $3 annual dividend, the yield is 3%.',
    },
    {
        question: 'What is Yield on Cost (YOC)?',
        answer: 'Yield on Cost is the annual dividend payout divided by the original price you paid for the stock, rather than its current price. If you bought a stock for $50 and it now pays a $5 dividend, your Yield on Cost is 10%, even if the current stock price is $100 (which would make the current yield 5%).',
    },
    {
        question: 'Are DRIP programs really free?',
        answer: 'Yes, today almost all major US brokerages (Fidelity, Schwab, Vanguard, Robinhood) offer automatic dividend reinvestment for free with absolutely zero commission fees.',
    },
    {
        question: 'Do I have to pay taxes if I reinvest my dividends?',
        answer: 'Yes. Unless the stock is held inside a tax-advantaged retirement account (like an IRA or 401k), the IRS treats reinvested dividends the exact same as cash dividends. You will owe taxes on them in the year they are paid.',
    }
];

export default function DripPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <WebApplicationSchema
                name="Dividend Reinvestment (DRIP) Forecaster"
                description="Calculate the compound growth of your dividend investing portfolio over time."
                url="https://usfinnexus.com/calculators/drip"
                dateModified="2026-03-01"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'DRIP Forecaster', item: '/calculators/drip' }]} />
            <h1 className="sr-only">Dividend Reinvestment Calculator</h1>
            <p className="text-xs text-gray-500 mt-1 mb-4">Last updated: March 2026</p>
            <DripClient />
            <DripSeoContent />
            <CalculatorFAQ faqs={DRIP_FAQS} title="Dividend Investing — Frequently Asked Questions" />
        </main>
    );
}
