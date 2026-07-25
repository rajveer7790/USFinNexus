import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import CanadaMortgageCalculatorClient from './CanadaMortgageCalculatorClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Canadian Mortgage Calculator 2026: CMHC & Stress Test',
    description: 'Free Canadian mortgage calculator with CAD payments, minimum down payment, CMHC insurance estimate and federal mortgage stress test. No signup.',
    alternates: { canonical: 'https://usfinnexus.com/canada/mortgage-calculator' },
    openGraph: {
        type: 'website',
        title: 'Canadian Mortgage Calculator 2026',
        description: 'Estimate Canadian mortgage payments, default-insurance premium and stress-test payment.',
        url: 'https://usfinnexus.com/canada/mortgage-calculator',
        siteName: 'USFinNexus',
    },
};

const FAQS = [
    {
        question: 'How is a Canadian mortgage payment calculated?',
        answer: 'For a typical Canadian fixed-rate mortgage, the quoted nominal annual interest rate is converted using semi-annual compounding, then applied to the selected monthly amortization schedule. This differs from the monthly-compounding convention commonly used by US calculators.',
    },
    {
        question: 'What is the minimum down payment in Canada?',
        answer: 'For an eligible owner-occupied home below $1.5 million, the federal minimum is 5% of the first $500,000 plus 10% of the portion from $500,000 to $1.5 million. A home priced at $1.5 million or more generally requires at least 20% down because it is outside the insured-mortgage price cap.',
    },
    {
        question: 'How does the Canadian mortgage stress test work?',
        answer: 'Federally regulated lenders generally qualify borrowers at the higher of 5.25% or the negotiated contract rate plus 2 percentage points. The test applies to both insured and uninsured mortgages, subject to specific renewal and switching rules.',
    },
    {
        question: 'When is mortgage default insurance required?',
        answer: 'Mortgage loan insurance is generally required when the down payment is below 20% on an eligible property. The premium depends on loan-to-value and can normally be added to the mortgage, although applicable provincial tax on the premium cannot be added.',
    },
    {
        question: 'Can every Canadian borrower choose a 30-year insured amortization?',
        answer: 'No. Thirty-year insured amortizations are available to eligible first-time homebuyers and buyers of newly constructed homes. Other borrowers with high loan-to-value insured mortgages may be limited to a 25-year amortization.',
    },
];

export default function CanadaMortgagePage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Canadian Mortgage Calculator 2026',
        description: 'Calculate Canadian mortgage payments, minimum down payment, mortgage loan insurance and stress-test payment.',
        url: 'https://usfinnexus.com/canada/mortgage-calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        isAccessibleForFree: true,
        inLanguage: 'en-CA',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
        provider: { '@type': 'Organization', name: 'USFinNexus', url: 'https://usfinnexus.com' },
    };

    return (
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Breadcrumbs items={[
                { name: 'Canada', item: '/canada' },
                { name: 'Mortgage Calculator', item: '/canada/mortgage-calculator' },
            ]} />
            <p className="mt-1 text-xs text-gray-500">Reviewed July 25, 2026 · Canadian federal rules and CMHC premium schedule</p>
            <CanadaMortgageCalculatorClient />

            <section className="prose prose-slate mx-auto max-w-4xl py-10">
                <h2>What this Canadian mortgage calculator includes</h2>
                <p>
                    The tool calculates principal and interest using the Canadian fixed-rate convention, estimates the federal minimum down payment and adds the standard mortgage-default insurance premium when the loan-to-value ratio is above 80%.
                </p>
                <h2>How to read the stress-test result</h2>
                <p>
                    Your contract payment is what the selected rate produces. The qualification payment uses the higher of 5.25% or your contract rate plus two percentage points. Estimated GDS and TDS ratios provide context, but a lender will verify income, debts, credit, property expenses and insurer requirements.
                </p>
                <h2>Primary sources</h2>
                <ul>
                    <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages/preparing-mortgage.html" rel="noopener noreferrer">Financial Consumer Agency of Canada: stress test and mortgage preparation</a></li>
                    <li><a href="https://www.canada.ca/en/department-finance/news/2024/09/delivering-the-boldest-mortgage-reforms-in-decades.html" rel="noopener noreferrer">Department of Finance Canada: insured-mortgage and down-payment reforms</a></li>
                    <li><a href="https://www.cmhc-schl.gc.ca/consumers/home-buying/mortgage-loan-insurance-for-consumers/cmhc-mortgage-loan-insurance-cost" rel="noopener noreferrer">CMHC: mortgage loan insurance premium schedule</a></li>
                </ul>
                <p>
                    Looking for all Canadian resources? Visit the <Link href="/canada">Canada finance hub</Link>.
                </p>
            </section>

            <CalculatorFAQ faqs={FAQS} title="Canadian Mortgage Calculator — Frequently Asked Questions" />
        </main>
    );
}
