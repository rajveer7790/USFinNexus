import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import OptionsProfitSeoContent from './OptionsProfitSeoContent';

const OptionsProfitClient = nextDynamic(() => import('./OptionsProfitClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Options Profit Calculator & Payoff Visualizer | USFinNexus',
    description: 'Visualize your options trades before you make them. Calculate max profit, max loss, and break-even points for Calls and Puts.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/options-profit' },
    openGraph: {
        type: 'website',
        title: 'Options Trading Profit & Loss Calculator',
        description: 'Free tool to visualize options strategies. Calculate returns for Long Calls, Short Calls, Long Puts, and Short Puts.',
        url: 'https://usfinnexus.com/calculators/options-profit',
        images: [{ url: 'https://usfinnexus.com/images/calculators-hero.png', width: 1200, height: 630, alt: 'Options Profit Calculator — USFinNexus' }],
    },
};

const OPTIONS_FAQS = [
    {
        question: 'What happens if my option expires out of the money?',
        answer: 'If you bought an option (Long Call or Long Put) and it expires out of the money, it becomes worthless. You lose 100% of the premium you paid. If you sold the option, you keep 100% of the premium as profit.',
    },
    {
        question: 'Why is selling a naked call so risky?',
        answer: 'When you sell a naked call (a short call without owning the underlying stock), you are obligated to sell the stock at the strike price if assigned. Since a stock\'s price can theoretically rise infinitely, your potential maximum loss is also theoretically infinite.',
    },
    {
        question: 'What does 1 contract mean?',
        answer: 'In standard equity options trading, 1 contract represents 100 shares of the underlying stock. So if the premium is listed as $2.50, buying 1 contract will actually cost you $250 ($2.50 x 100).',
    }
];

export default function OptionsProfitPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <WebApplicationSchema
                name="Options Profit/Loss Visualizer"
                description="Visualize your options trades. Calculate max profit, max loss, and break-even points."
                url="https://usfinnexus.com/calculators/options-profit"
                dateModified="2026-03-01"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Options Profit Calculator', item: '/calculators/options-profit' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Last updated: March 2026</p>
            <h1 className="sr-only">Options Profit Calculator & Payoff Visualizer</h1>
            <OptionsProfitClient />
            <OptionsProfitSeoContent />
            <CalculatorFAQ faqs={OPTIONS_FAQS} title="Options Trading — Frequently Asked Questions" />
        </main>
    );
}
