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
    description: 'Estimate 2026 U.S. federal income tax using the IRS 2026 ordinary-income brackets and standard deductions. See marginal rate, effective rate and an employee payroll-tax estimate.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/income-tax' },
    openGraph: {
        type: 'website',
        title: '2026 Federal Income Tax Calculator | USFinNexus',
        description: 'Estimate 2026 federal income tax using IRS tax-year 2026 brackets and standard deductions.',
        url: 'https://usfinnexus.com/calculators/income-tax',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: '2026 Federal Income Tax Calculator — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '2026 Federal Income Tax Calculator | USFinNexus',
        description: 'Estimate federal income tax using the official IRS 2026 ordinary-income brackets and standard deductions.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const INCOME_TAX_FAQS = [
    {
        question: 'What is the difference between a marginal tax rate and an effective tax rate?',
        answer: 'Your marginal tax rate is the rate applied to your last dollars of taxable ordinary income. Because the U.S. federal income tax is progressive, lower portions of taxable income are taxed at lower rates. Your effective federal income tax rate is your estimated federal income tax divided by gross income in this calculator.',
    },
    {
        question: 'What are the federal income tax rates for 2026?',
        answer: 'For tax year 2026, the ordinary federal income tax rates are 10%, 12%, 22%, 24%, 32%, 35%, and 37%. The income thresholds depend on filing status. This calculator uses the IRS tax-year 2026 thresholds published in Revenue Procedure 2025-32.',
    },
    {
        question: 'What is the 2026 standard deduction?',
        answer: 'For tax year 2026, the standard deduction is $16,100 for single filers, $32,200 for married couples filing jointly, and $24,150 for heads of household. Additional deduction rules can apply in some situations, so use this calculator as an estimate rather than tax-filing software.',
    },
    {
        question: 'Does this calculator include self-employment tax, credits, or state taxes?',
        answer: 'No. The calculator estimates federal ordinary income tax and employee-side payroll taxes for wage income. It does not calculate self-employment tax, tax credits, AMT, NIIT, state or local taxes, or every adjustment and deduction that may affect an actual tax return.',
    },
];

export default function IncomeTaxPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="2026 Federal Income Tax Calculator"
                description="Estimate 2026 federal income tax using IRS tax-year 2026 ordinary-income brackets and standard deductions."
                url="https://usfinnexus.com/calculators/income-tax"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#tools' }, { name: 'Federal Income Tax Calculator', item: '/calculators/income-tax' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Last reviewed: August 7, 2026 · IRS tax-year 2026 rules</p>
            <h1 className="sr-only">2026 Federal Income Tax Calculator</h1>
            <IncomeTaxClient />
            <IncomeTaxSeoContent />
            <CalculatorFAQ faqs={INCOME_TAX_FAQS} title="2026 Federal Income Tax Calculator — Frequently Asked Questions" />
        </main>
    );
}
