import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import ClosingCostsSeoContent from './ClosingCostsSeoContent';

const ClosingCostsClient = nextDynamic(() => import('./ClosingCostsClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Closing Costs Calculator 2026 — Buyer & Seller Breakdown | USFinNexus',
    description: 'Estimate buyer and seller closing costs for any US home purchase. State-specific transfer taxes, title fees, prepaid items, and agent commissions. Free, no signup.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/closing-costs' },
    openGraph: {
        type: 'website',
        title: 'Closing Costs Calculator 2026 — Buyer & Seller Breakdown | USFinNexus',
        description: 'Estimate your full closing costs breakdown — title, transfer taxes, prepaids, and agent fees. Free for any US home purchase.',
        url: 'https://usfinnexus.com/calculators/closing-costs',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Closing Costs Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Closing Costs Calculator 2026 | USFinNexus',
        description: 'Full buyer and seller closing cost breakdown. Title fees, transfer taxes, and prepaids for any US home.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const CLOSING_COSTS_FAQS = [
    {
        question: 'How much are closing costs on a $300,000 home purchase?',
        answer: 'Buyer closing costs on a $300,000 home typically range from $6,000–$15,000 (2%–5% of the purchase price). This includes lender origination fees ($1,500–3,000), title insurance ($700–1,500), appraisal ($350–$600), prepaid property taxes and insurance (1–2 months), and government recording fees. Use our calculator to get a state-specific estimate.',
    },
    {
        question: 'Who pays closing costs — buyer or seller?',
        answer: 'Both buyer and seller pay closing costs, but different amounts. Buyers typically pay 2%–5% of the purchase price (lender fees, title insurance, prepaid items). Sellers typically pay 5%–9% (6% real estate agent commissions plus transfer taxes and attorney fees). In buyer\'s markets, sellers may agree to cover some buyer closing costs as a concession.',
    },
    {
        question: 'Can closing costs be rolled into the mortgage?',
        answer: 'In most cases, no — standard purchase mortgages require closing costs to be paid upfront. However, some loan programs allow a “no-closing-cost” option where the costs are added to the loan amount or exchanged for a higher interest rate. VA loans allow sellers to pay all closing costs, and FHA allows sellers to contribute up to 6% of the purchase price.',
    },
    {
        question: 'What is lender\'s title insurance vs. owner\'s title insurance?',
        answer: 'Lender\'s title insurance protects the mortgage lender against title defects and is typically required for all financed purchases. Owner\'s title insurance protects the buyer and is optional but strongly recommended. Lender\'s title insurance is usually $500–$1,000; owner\'s is $800–$2,000 depending on the home price and state.',
    },
    {
        question: 'What states have the highest transfer taxes on real estate?',
        answer: 'States with the highest real estate transfer taxes include: Delaware (4%), Pennsylvania (2% + local), New York City (1%–1.425% + state), Vermont (1.25%), and Connecticut (0.75%–1.25%). States with no transfer tax include: Texas, Florida, Missouri, and Montana. Our closing costs calculator applies the correct state-specific rate automatically.',
    },
];

export default function ClosingCostsPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Closing Costs Calculator 2026"
                description="Estimate buyer and seller closing costs for any US home purchase with state-specific transfer taxes and title fees."
                url="https://usfinnexus.com/calculators/closing-costs"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Closing Costs Calculator', item: '/calculators/closing-costs' }]} />
                            <ClosingCostsClient />
            <ClosingCostsSeoContent />
            <CalculatorFAQ faqs={CLOSING_COSTS_FAQS} title="Closing Costs — Frequently Asked Questions" />
        </main>
    );
}
