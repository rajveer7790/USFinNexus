import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import RentalPropertySeoContent from './RentalPropertySeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const RentalPropertyClient = nextDynamic(() => import('./RentalPropertyClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Rental Property Calculator | USFinNexus',
    description: 'Estimate rental-property cash flow, net operating income, cap rate and cash-on-cash return using your purchase, financing, rent, vacancy and expense assumptions.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/rental-property' },
    openGraph: {
        type: 'website',
        title: 'Rental Property Calculator | USFinNexus',
        description: 'Model rental-property cash flow and return metrics using assumptions you control.',
        url: 'https://usfinnexus.com/calculators/rental-property',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus Rental Property Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rental Property Calculator | USFinNexus',
        description: 'Estimate rental cash flow, NOI, cap rate and cash-on-cash return.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const RENTAL_FAQS = [
    {
        question: 'What is a good cap rate for a rental property?',
        answer: 'There is no universal good cap rate. Cap rates vary by property type, location, condition, financing environment and risk. Compare a property with relevant local alternatives and make sure the net operating income assumptions include realistic vacancy and operating expenses.',
    },
    {
        question: 'What is a good cash-on-cash return?',
        answer: 'The appropriate cash-on-cash target depends on risk, financing, investor objectives and alternative uses of capital. Use the metric to compare scenarios on a consistent basis rather than treating one percentage as a guaranteed or universally acceptable return.',
    },
    {
        question: 'How should I estimate maintenance and capital expenditures?',
        answer: 'Use property-specific evidence when possible: age and condition of the roof, HVAC and appliances, inspection findings, service history and local repair costs. Percentage-of-rent reserves can be useful for rough scenarios, but they are not a substitute for property-specific budgeting.',
    },
    {
        question: 'Should I include property-management fees?',
        answer: 'Include management fees if you expect to hire a manager or want to compare the property on a professionally managed basis. Fees and services vary by market and contract, so use an actual local quote rather than a universal percentage.',
    },
];

export default function RentalPropertyPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <WebApplicationSchema
                name="Rental Property Calculator"
                description="Estimate rental-property cash flow, NOI, cap rate and cash-on-cash return using user-entered assumptions."
                url="https://usfinnexus.com/calculators/rental-property"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Rental Property Calculator', item: '/calculators/rental-property' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Scenario analysis, not an investment-return forecast</p>
            <h1 className="sr-only">Rental Property Calculator</h1>
            <RentalPropertyClient />
            <RentalPropertySeoContent />
            <CalculatorFAQ faqs={RENTAL_FAQS} title="Rental Property Calculator FAQ" />
        </main>
    );
}
