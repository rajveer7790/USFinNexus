import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import CryptoTaxSeoContent from './CryptoTaxSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const CryptoTaxClient = nextDynamic(() => import('./CryptoTaxClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Crypto Tax Calculator 2026 | USFinNexus',
    description: 'Estimate 2026 U.S. federal tax attributable to net short-term and long-term cryptocurrency capital gains using current ordinary-income, capital-gain and NIIT thresholds.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/crypto-tax' },
    openGraph: {
        type: 'website',
        title: 'Crypto Tax Calculator 2026 | USFinNexus',
        description: 'Estimate federal tax on modeled cryptocurrency capital gains using 2026 thresholds.',
        url: 'https://usfinnexus.com/calculators/crypto-tax',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Crypto Tax Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Crypto Tax Calculator 2026 | USFinNexus',
        description: 'Estimate 2026 federal tax on modeled cryptocurrency capital gains.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const CRYPTO_FAQS = [
    {
        question: 'Does the IRS treat cryptocurrency as property?',
        answer: 'Yes. The IRS treats digital assets as property for U.S. federal tax purposes, so general tax principles for property transactions apply. Selling digital assets for dollars, exchanging one digital asset for another materially different digital asset, or otherwise disposing of a capital asset can create a reportable capital gain or loss.',
    },
    {
        question: 'What are the 2026 long-term capital-gain thresholds used here?',
        answer: 'This estimator uses the 2026 Qualified Dividends and Capital Gain Tax Worksheet thresholds published in IRS Publication 505. The 0% ceiling is $49,450 for Single and Married Filing Separately, $98,900 for Married Filing Jointly, and $66,200 for Head of Household. The 15% ceiling is $545,500, $306,850, $613,700, and $579,600 respectively.',
    },
    {
        question: 'Are short-term cryptocurrency gains taxed as ordinary income?',
        answer: 'Net short-term capital gains are generally subject to ordinary graduated income-tax rates. This estimator calculates the incremental ordinary federal income tax caused by the modeled net short-term gain after the other taxable-income amount you enter.',
    },
    {
        question: 'Does swapping one cryptocurrency for another create a taxable event?',
        answer: 'It can. Current IRS digital-asset FAQs state that exchanging a digital asset for other property, including materially different digital assets, can produce a recognized gain or loss measured using amount realized and adjusted basis.',
    },
    {
        question: 'Does this calculator prepare Form 8949 or Schedule D?',
        answer: 'No. It is a planning estimator, not tax-return software. Digital-asset basis identification, transaction costs, loss netting, qualified dividends, special capital-gain categories, NIIT adjustments and other rules can require the actual IRS forms and worksheets.',
    },
];

export default function CryptoTaxPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Crypto Tax Calculator 2026"
                description="Estimate 2026 federal tax attributable to modeled digital-asset capital gains using current federal thresholds."
                url="https://usfinnexus.com/calculators/crypto-tax"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Crypto Tax Calculator', item: '/calculators/crypto-tax' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · IRS digital-asset guidance and 2026 federal tax thresholds</p>
            <CryptoTaxClient />
            <CryptoTaxSeoContent />
            <CalculatorFAQ faqs={CRYPTO_FAQS} title="Crypto Tax Calculator FAQ" />
        </main>
    );
}
