import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import HelocSeoContent from './HelocSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const HELOCClient = nextDynamic(() => import('./HELOCClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'HELOC Calculator | USFinNexus',
    description: 'Estimate HELOC available credit, draw-period interest payments and repayment-period payments using your home value, mortgage balance, credit-line limit and rate assumptions.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/heloc' },
    openGraph: {
        type: 'website',
        title: 'HELOC Calculator | USFinNexus',
        description: 'Model home-equity line of credit draw and repayment scenarios.',
        url: 'https://usfinnexus.com/calculators/heloc',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus HELOC Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'HELOC Calculator | USFinNexus',
        description: 'Estimate HELOC available credit, draw-period interest and repayment payments.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const HELOC_FAQS = [
    {
        question: 'What is the difference between a HELOC draw period and repayment period?',
        answer: 'A HELOC agreement can provide a draw period when the borrower may access the credit line, followed by a repayment period when additional draws generally stop and the outstanding balance is repaid. Payment rules vary by product; some draw periods allow interest-only minimum payments while others require principal as well. Check the actual HELOC agreement.',
    },
    {
        question: 'Does a HELOC have a fixed or variable interest rate?',
        answer: 'Many HELOCs use a variable rate based on an index plus a lender margin, although product structures differ and some lenders offer fixed-rate conversion options. A variable-rate HELOC payment can change when the applicable index changes.',
    },
    {
        question: 'How much home equity can I borrow with a HELOC?',
        answer: 'Lenders often set a maximum combined loan-to-value ratio, or CLTV, but the permitted percentage varies by lender, borrower, occupancy and property. The calculator lets you enter a CLTV assumption rather than treating 80% or 85% as a universal limit.',
    },
    {
        question: 'Is HELOC interest tax deductible?',
        answer: 'Tax treatment depends on current law and how the borrowed funds are used. Do not assume every HELOC interest payment is deductible; review current IRS guidance or consult a qualified tax professional for your situation.',
    },
];

export default function HELOCPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="HELOC Calculator"
                description="Estimate home-equity line of credit availability and modeled draw and repayment payments."
                url="https://usfinnexus.com/calculators/heloc"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'HELOC Calculator', item: '/calculators/heloc' }]} />
            <h1 className="sr-only">HELOC Calculator</h1>
            <HELOCClient />
            <HelocSeoContent />
            <CalculatorFAQ faqs={HELOC_FAQS} title="HELOC Calculator FAQ" />
        </main>
    );
}
