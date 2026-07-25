import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import IncomeTaxSeoContent from './IncomeTaxSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const IncomeTaxClient = nextDynamic(() => import('./IncomeTaxClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: '2026 Federal Income Tax Calculator — Post-TCJA Brackets | USFinNexus',
    description: 'Estimate your 2026 federal income taxes under new post-TCJA sunset brackets. Calculate effective and marginal tax rates, standard deduction, and take-home pay.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/income-tax' },
    openGraph: {
        type: 'website',
        title: '2026 Federal Income Tax Calculator — Post-TCJA Sunset Brackets | USFinNexus',
        description: 'Calculate your 2026 federal income tax under new post-TCJA brackets. Effective rate, marginal rate, and take-home pay.',
        url: 'https://usfinnexus.com/calculators/income-tax',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: '2026 Income Tax Calculator — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '2026 Income Tax Calculator | Post-TCJA Brackets | USFinNexus',
        description: 'What will you owe in 2026? Calculate your federal taxes under the new post-TCJA brackets.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const INCOME_TAX_FAQS = [
    {
        question: 'What is the difference between a Marginal Tax Rate and an Effective Tax Rate?',
        answer: 'Your Marginal Tax Rate is the highest tax bracket your last dollar falls into (e.g., 24%). However, because the US uses a progressive tax system, you don’t pay 24% on all your income. Your Effective Tax Rate is the true average percentage you actually pay across all brackets, which is always much lower than your Marginal rate.',
    },
    {
        question: 'What happens when the TCJA expires in 2026?',
        answer: 'The Tax Cuts and Jobs Act of 2017 lowered individual tax rates. Many of these provisions expire at the end of 2025. In 2026, without new legislation, the top marginal rate returns to 39.6% and the massive Standard Deduction will be cut roughly in half, pushing more Americans back to itemizing deductions.',
    },
    {
        question: 'Do 1099 contractors pay more taxes than W-2 employees?',
        answer: 'Yes. W-2 employees split FICA taxes (Social Security and Medicare) with their employer, paying only 7.65%. If you are a 1099 independent contractor, you are both the employer and employee, meaning you must pay the full 15.3% Self-Employment Tax on top of your standard federal income tax.',
    },
];

export default function IncomeTaxPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Free 2026 Federal Income Tax Calculator"
                description="Estimate your 2026 federal income taxes with post-TCJA brackets. See effective and marginal rates instantly."
                url="https://usfinnexus.com/calculators/income-tax"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Income Tax', item: '/calculators/income-tax' }]} />
            <h1 className="sr-only">2026 Federal Income Tax Calculator</h1>
            <IncomeTaxClient />
            <IncomeTaxSeoContent />
            <CalculatorFAQ faqs={INCOME_TAX_FAQS} title="Income Tax — Frequently Asked Questions" />
        </main>
    );
}
