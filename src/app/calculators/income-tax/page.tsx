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
    title: '2026 Federal Income Tax Calculator | USFinNexus',
    description:
        'Estimate 2026 U.S. federal income tax using official IRS ordinary-income brackets and standard deductions. Includes a simplified employee Social Security and Medicare estimate.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/income-tax' },
    openGraph: {
        type: 'website',
        title: '2026 Federal Income Tax Calculator | USFinNexus',
        description: 'Estimate tax-year 2026 federal income tax with official IRS brackets and standard deductions.',
        url: 'https://usfinnexus.com/calculators/income-tax',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus 2026 Federal Income Tax Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '2026 Federal Income Tax Calculator | USFinNexus',
        description: 'Estimate 2026 federal income tax using official IRS brackets and standard deductions.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const INCOME_TAX_FAQS = [
    {
        question: 'What are the federal income tax rates for 2026?',
        answer: 'For tax year 2026, the ordinary federal income-tax rates are 10%, 12%, 22%, 24%, 32%, 35% and 37%. The dollar thresholds depend on filing status. USFinNexus uses the 2026 IRS rate schedules for Single, Married Filing Jointly and Head of Household in this simplified calculator.',
    },
    {
        question: 'What is the 2026 standard deduction?',
        answer: 'For tax year 2026, the basic standard deduction is $16,100 for Single filers, $32,200 for Married Filing Jointly, and $24,150 for Head of Household, before additional deductions that may apply for age or blindness.',
    },
    {
        question: 'Did federal tax rates automatically revert to pre-TCJA rates in 2026?',
        answer: 'No. Current 2026 IRS guidance uses the 10%, 12%, 22%, 24%, 32%, 35% and 37% rate structure. The calculator does not use the old assumption that the individual rate schedule would automatically revert to the pre-TCJA brackets in 2026.',
    },
    {
        question: 'Does this calculator handle self-employment tax or 1099 income?',
        answer: 'No. The payroll-tax portion is a simplified employee-wage model. Self-employment tax, the deductible portion of self-employment tax, business deductions, QBI and other rules require a different calculation.',
    },
    {
        question: 'Is this the same as preparing a federal tax return?',
        answer: 'No. It is an educational estimate. It does not model every credit, deduction, preferential capital-gain rate, AMT, NIIT, dependent rule, special deduction, state tax or Form 1040 provision. Use current IRS forms or qualified tax software/professional advice for filing.',
    },
];

export default function IncomeTaxPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="2026 Federal Income Tax Calculator"
                description="Estimate 2026 federal income tax using official IRS ordinary-income brackets and standard deductions."
                url="https://usfinnexus.com/calculators/income-tax"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Federal Income Tax Calculator', item: '/calculators/income-tax' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Tax year 2026 IRS rate schedules</p>
            <h1 className="sr-only">2026 Federal Income Tax Calculator</h1>
            <IncomeTaxClient />
            <IncomeTaxSeoContent />
            <CalculatorFAQ faqs={INCOME_TAX_FAQS} title="2026 Federal Income Tax Calculator FAQ" />
        </main>
    );
}
