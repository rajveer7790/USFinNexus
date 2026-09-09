import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';
import HelocSeoContent from './HelocSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const HELOCClient = nextDynamic(() => import('./HELOCClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Free HELOC Calculator 2026 - Home Equity Line of Credit',
    description:
        'Calculate your HELOC payments, available equity, and total interest. See draw-period vs repayment-period costs instantly. Free, no signup required.',
    openGraph: {
        type: 'website',
        title: 'Free HELOC Calculator 2026 - Home Equity Line of Credit',
        description: 'Calculate your HELOC payments, available equity, and total interest. Compare draw-period interest-only payments vs full repayment period costs. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/heloc',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'HELOC Home Equity Line of Credit Calculator 2026 - USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/heloc' },
    twitter: {
        card: 'summary_large_image',
        title: 'HELOC Calculator 2026 — Home Equity Line of Credit',
        description: 'Calculate your HELOC available equity, draw-period payments, and repayment-period costs. Free, no signup.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const HELOC_FAQS = [
    {
        question: 'What is the difference between the Draw Period and Repayment Period?',
        answer: 'During the Draw Period (usually the first 10 years), you can withdraw money from your HELOC, and the bank only requires you to make interest-only payments. When the Draw Period ends, the Repayment Period begins (usually 20 years). You can no longer withdraw money, and your payment drastically jumps because you must now pay back the principal plus interest.',
    },
    {
        question: 'Does a HELOC have a fixed or variable interest rate?',
        answer: 'Almost all HELOCs have a variable interest rate tied to the Prime Rate. If the Federal Reserve raises interest rates, your HELOC payment will increase automatically. This makes them risky in an inflationary environment.',
    },
    {
        question: 'How much of my home equity can I borrow?',
        answer: 'Most banks limit your total debt to a Combined Loan-to-Value (CLTV) ratio of 80% to 85%. If your home is worth $500,000, 80% is $400,000. If you owe $300,000 on your primary mortgage, the bank will only approve a HELOC for the remaining $100,000.',
    },
];

export default function HELOCPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="HELOC Calculator 2026"
                description="Calculate your HELOC payments, available equity, and total interest across draw and repayment periods."
                url="https://usfinnexus.com/calculators/heloc"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'HELOC Calculator', item: '/calculators/heloc' }]} />
            <HELOCClient />
            <SemrushIntentSection slug="heloc" />
            <HelocSeoContent />
            <CalculatorFAQ faqs={HELOC_FAQS} title="HELOC — Frequently Asked Questions" />
        </main>
    );
}
