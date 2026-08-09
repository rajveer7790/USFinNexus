import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import IncomeTaxSeoContent from './IncomeTaxSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';

const IncomeTaxClient = nextDynamic(() => import('./IncomeTaxClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: "2026 Federal Income Tax Calculator | Free Tool",
    description: 'Estimate 2026 U.S. federal income tax using official IRS tax brackets and standard deductions. Includes marginal rate, effective rate and an employee FICA estimate.',
    alternates: { canonical: '/calculators/income-tax' },
    openGraph: {
        type: 'website',
        title: '2026 Federal Income Tax Calculator',
        description: 'Estimate 2026 federal income tax with official IRS brackets and standard deductions.',
        url: 'https://usfinnexus.com/calculators/income-tax',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: '2026 Federal Income Tax Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '2026 Federal Income Tax Calculator',
        description: 'Estimate 2026 federal income tax with official IRS brackets and standard deductions.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const INCOME_TAX_FAQS = [
    {
        question: 'What are the federal income tax rates for 2026?',
        answer: 'For tax year 2026, the seven individual federal income tax rates remain 10%, 12%, 22%, 24%, 32%, 35% and 37%. Tax brackets are progressive, so each rate applies only to the portion of taxable income inside that bracket.',
    },
    {
        question: 'What is the 2026 standard deduction?',
        answer: 'For tax year 2026, the standard deduction is $16,100 for single filers, $32,200 for married couples filing jointly, and $24,150 for heads of household. These amounts come from IRS Revenue Procedure 2025-32.',
    },
    {
        question: 'Did the individual TCJA tax rates expire in 2026?',
        answer: 'No. Legislation enacted in 2025 made the individual rate structure permanent. For 2026 the rates remain 10%, 12%, 22%, 24%, 32%, 35% and 37%, subject to the 2026 inflation-adjusted bracket thresholds.',
    },
    {
        question: 'What is the difference between marginal and effective tax rates?',
        answer: 'Your marginal rate is the rate applied to your next dollar of taxable income. Your effective federal income-tax rate is total federal income tax divided by gross income in this calculator. Because the U.S. system is progressive, the effective rate is usually lower than the marginal rate.',
    },
    {
        question: 'Does this calculator include self-employment tax and tax credits?',
        answer: 'No. The tool is a simplified federal estimate for wage-like income. It does not model self-employment tax, tax credits, AMT, NIIT, state or local taxes, or every payroll adjustment. Use official IRS resources or a qualified tax professional for filing decisions.',
    },
];

export default function IncomeTaxPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="2026 Federal Income Tax Calculator"
                description="Estimate 2026 federal income tax using official IRS brackets and standard deductions."
                url="https://usfinnexus.com/calculators/income-tax"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Income Tax Calculator', item: '/calculators/income-tax' }]} />
            <IncomeTaxClient />
            <IncomeTaxSeoContent />
            <SemrushIntentSection slug="income-tax" />
            <CalculatorFAQ faqs={INCOME_TAX_FAQS} title="2026 Federal Income Tax Calculator FAQs" />
        </main>
    );
}
