import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import OptionsProfitSeoContent from './OptionsProfitSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const OptionsProfitClient = nextDynamic(() => import('./OptionsProfitClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Options Profit Calculator | USFinNexus',
    description: 'Visualize expiration payoff, break-even, maximum modeled profit and maximum modeled loss for selected call and put option positions.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/options-profit' },
    openGraph: {
        type: 'website',
        title: 'Options Profit Calculator | USFinNexus',
        description: 'Model expiration payoff and break-even for selected call and put positions.',
        url: 'https://usfinnexus.com/calculators/options-profit',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Options Profit Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Options Profit Calculator | USFinNexus',
        description: 'Visualize option payoff and break-even at expiration.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const OPTIONS_FAQS = [
    {
        question: 'What happens if a long option expires out of the money?',
        answer: 'An out-of-the-money long option generally expires with no intrinsic value, so the buyer can lose the premium paid plus transaction costs. Brokerage exercise and expiration procedures can differ, so review the broker’s rules for positions near the strike price.',
    },
    {
        question: 'Why can an uncovered short call have very large loss risk?',
        answer: 'A short call obligates the writer to deliver the underlying if assigned. Because an underlying asset’s price can rise far above the strike, an uncovered short call has theoretically unlimited loss potential before considering premiums and transaction costs.',
    },
    {
        question: 'Does one listed equity option contract always represent 100 shares?',
        answer: 'Standard U.S. equity option contracts commonly use a 100-share multiplier, but adjusted contracts after corporate actions can have different deliverables or multipliers. Confirm the contract specifications before relying on a 100-share assumption.',
    },
    {
        question: 'Does this calculator show the option’s value before expiration?',
        answer: 'The payoff visualizer focuses on expiration outcomes unless the calculator explicitly models option pricing. Before expiration, option value can also reflect time remaining, volatility, interest rates, dividends and other factors, so expiration payoff is not the same as current market value.',
    },
];

export default function OptionsProfitPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <WebApplicationSchema
                name="Options Profit Calculator"
                description="Visualize expiration payoff and break-even for selected call and put option positions."
                url="https://usfinnexus.com/calculators/options-profit"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Options Profit Calculator', item: '/calculators/options-profit' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Expiration payoff model, not a recommendation or live option-pricing model</p>
            <h1 className="sr-only">Options Profit Calculator</h1>
            <OptionsProfitClient />
            <OptionsProfitSeoContent />
            <CalculatorFAQ faqs={OPTIONS_FAQS} title="Options Profit Calculator FAQ" />
        </main>
    );
}
