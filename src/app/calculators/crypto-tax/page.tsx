import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import CryptoTaxSeoContent from './CryptoTaxSeoContent';

const CryptoTaxClient = nextDynamic(() => import('./CryptoTaxClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Crypto Tax Calculator: Estimate Capital Gains 2026 | USFinNexus',
    description: 'Estimate your cryptocurrency taxes instantly. Free US federal capital gains tax calculator for Bitcoin, Ethereum, and crypto trading.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/crypto-tax' },
    openGraph: {
        type: 'website',
        title: 'Crypto Capital Gains Tax Estimator 2026',
        description: 'Calculate your short-term and long-term crypto tax liability. Free federal tax estimator.',
        url: 'https://usfinnexus.com/calculators/crypto-tax',
        images: [{ url: 'https://usfinnexus.com/images/calculators-hero.png', width: 1200, height: 630, alt: 'Crypto Tax Calculator — USFinNexus' }],
    },
};

const CRYPTO_FAQS = [
    {
        question: 'Do I have to pay taxes if I trade one crypto for another?',
        answer: 'Yes. In the US, trading one cryptocurrency for another (e.g., trading Bitcoin for Ethereum) is considered a taxable event. You must calculate the fair market value in USD at the time of the trade, and you will owe capital gains tax on the profit made on the coin you gave up.',
    },
    {
        question: 'What if I just buy and hold crypto?',
        answer: 'If you only buy cryptocurrency with USD and hold it in your wallet or exchange account, you do not owe any taxes. Taxes are only triggered when you sell, trade, or use the crypto.',
    },
    {
        question: 'Is it better to hold crypto for over a year?',
        answer: 'Yes, from a tax perspective. Holding a cryptocurrency for more than 365 days qualifies you for Long-Term Capital Gains tax rates (0%, 15%, or 20%), which are significantly lower than Short-Term rates (your ordinary income tax bracket).',
    },
    {
        question: 'How do crypto losses work?',
        answer: 'Crypto losses can offset your crypto gains. If you have a net loss for the year, you can use up to $3,000 of it to reduce your ordinary income (like your W-2 salary). Any losses beyond $3,000 roll over to the next tax year indefinitely.',
    }
];

export default function CryptoTaxPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <WebApplicationSchema
                name="Crypto Capital Gains Tax Estimator"
                description="Estimate your cryptocurrency taxes instantly. Free US federal capital gains tax calculator."
                url="https://usfinnexus.com/calculators/crypto-tax"
                dateModified="2026-03-01"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Crypto Tax Estimator', item: '/calculators/crypto-tax' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Last updated: March 2026</p>
            <h1 className="sr-only">Crypto Tax Calculator: Estimate Capital Gains</h1>
            <CryptoTaxClient />
            <CryptoTaxSeoContent />
            <CalculatorFAQ faqs={CRYPTO_FAQS} title="Cryptocurrency Taxes — Frequently Asked Questions" />
        </main>
    );
}
