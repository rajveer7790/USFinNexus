import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import RentalPropertySeoContent from './RentalPropertySeoContent';

const RentalPropertyClient = nextDynamic(() => import('./RentalPropertyClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Rental Property ROI & Cash Flow Calculator 2026',
    description: 'Analyze rental property investments instantly. Calculate cash flow, cap rate, cash-on-cash return, and NOI for any US rental property. Free real estate investment calculator.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/rental-property' },
    openGraph: {
        type: 'website',
        title: 'Rental Property ROI & Cash Flow Calculator 2026',
        description: 'Calculate cash flow, cap rate, and cash-on-cash return for any rental property instantly. Free real estate investment analyzer.',
        url: 'https://usfinnexus.com/calculators/rental-property',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Rental Property ROI Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rental Property ROI Calculator 2026',
        description: 'Cash flow, cap rate, and cash-on-cash return for any rental property. Free real estate investment calculator.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const RENTAL_FAQS = [
    {
        question: 'What is a good Cap Rate for a rental property?',
        answer: 'A "good" Cap Rate typically ranges from 5% to 10%, but it heavily depends on the market. Properties in high-appreciation, low-risk areas (like prime locations in major cities) often have lower cap rates (4-6%). Properties in higher-risk or lower-appreciation areas may offer higher cap rates (8-12%+).',
    },
    {
        question: 'What is a good Cash-on-Cash Return?',
        answer: 'Many real estate investors aim for a Cash-on-Cash return of 8% to 12% or higher. This metric tells you how hard your initial invested cash is working for you during the first year of ownership.',
    },
    {
        question: 'How do I estimate CapEx and Maintenance?',
        answer: 'CapEx (Capital Expenditures) covers big-ticket replacements like a new roof, HVAC, or appliances. Maintenance covers smaller, routine fixes. A conservative estimate is setting aside 5% to 10% of gross rent for CapEx, and another 5% to 10% for Maintenance.',
    },
    {
        question: 'Should I use a property manager?',
        answer: 'Property managers typically charge 8% to 12% of collected rent. If you live far from the property or want a truly passive investment, the fee is usually worth it. If you house-hack or live locally and want to maximize cash flow, managing it yourself saves money but costs time.',
    }
];

export default function RentalPropertyPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <WebApplicationSchema
                name="Rental Property ROI & Cash Flow Calculator"
                description="Analyze rental property investments instantly. Calculate Cash Flow, Cap Rate, Cash-on-Cash Return, and NOI."
                url="https://usfinnexus.com/calculators/rental-property"
                dateModified="2026-03-01"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Rental Property Calculator', item: '/calculators/rental-property' }]} />
            <h1 className="sr-only">Rental Property Calculator</h1>
            <p className="text-xs text-gray-500 mt-1 mb-4">Last updated: March 2026</p>
            <RentalPropertyClient />
            <RentalPropertySeoContent />
            <CalculatorFAQ faqs={RENTAL_FAQS} title="Rental Property Investment — Frequently Asked Questions" />
        <ContextualInternalLinks currentSlug="rental-property" showBlogs showCalculators={false} />
        </main>
    );
}
