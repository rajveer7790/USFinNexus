import CalculatorBenchmarks from '@/components/CalculatorBenchmarks';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';
import HelocSeoContent from './HelocSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

import HELOCClient from './HELOCClient';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'HELOC & Home Equity Loan Calculator',
    description:
        'Compare HELOC draw and repayment payments against a fixed home equity loan. Estimate available borrowing at your lender’s combined loan-to-value limit.',
    openGraph: {
        type: 'website',
        title: 'HELOC & Home Equity Loan Calculator',
        description: 'Calculate your HELOC payments, available equity, and total interest. Compare draw-period interest-only payments vs full repayment period costs. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/heloc',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'HELOC Home Equity Line of Credit Calculator 2026 - USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/heloc' },
    twitter: {
        card: 'summary_large_image',
        title: 'HELOC & Home Equity Loan Calculator',
        description: 'Calculate your HELOC available equity, draw-period payments, and repayment-period costs. Free, no signup.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const HELOC_FAQS = [
    {
        question: 'What is the difference between the Draw Period and Repayment Period?',
        answer: 'During the draw period you can usually withdraw up to your available limit. Some plans require only interest while others require principal payments too. In repayment, you generally stop drawing and repay principal and interest. The calculator defaults to a 10-year draw and 20-year repayment; check your contract.',
    },
    {
        question: 'Does a HELOC have a fixed or variable interest rate?',
        answer: 'Many HELOCs have variable rates that track a published index plus a lender margin. The contract controls the index, reset frequency, caps and any fixed-rate options.',
    },
    {
        question: 'How much of my home equity can I borrow?',
        answer: 'Multiply the home value by the lender’s CLTV cap and subtract all existing liens. At an illustrative 80% cap on a $500,000 home with $300,000 of existing debt, the modeled capacity is $100,000. This is not an approval.',
    },
];

export default function HELOCPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="HELOC Calculator 2026"
                description="Calculate your HELOC payments, available equity, and total interest across draw and repayment periods."
                url="https://usfinnexus.com/calculators/heloc"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'HELOC Calculator', item: '/calculators/heloc' }]} />
            <HELOCClient />
            <SemrushIntentSection slug="heloc" />

            <p className="mx-auto mt-6 max-w-4xl text-sm text-slate-600">Compare HELOCs with other second-lien options in our <Link className="font-semibold text-blue-700 hover:underline" href="/blog/second-mortgage-guide">second-mortgage guide</Link>.</p>
            <CalculatorFAQ faqs={HELOC_FAQS} title="HELOC — Frequently Asked Questions" />
        <ContextualInternalLinks currentSlug="heloc" showBlogs showCalculators />
        <CalculatorBenchmarks slug="heloc" /></div>
    );
}
