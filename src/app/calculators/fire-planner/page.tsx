import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import FirePlannerSeoContent from './FirePlannerSeoContent';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

const FirePlannerClient = nextDynamic(() => import('./FirePlannerClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'FIRE Calculator | USFinNexus',
    description: 'Estimate a financial-independence target and modeled timeline using annual spending, savings, current investments, return assumptions and a withdrawal-rate scenario.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/fire-planner' },
    openGraph: {
        type: 'website',
        title: 'FIRE Calculator | USFinNexus',
        description: 'Model a financial-independence target and timeline using assumptions you control.',
        url: 'https://usfinnexus.com/calculators/fire-planner',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus FIRE Calculator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FIRE Calculator | USFinNexus',
        description: 'Estimate a financial-independence target and timeline under different scenarios.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const FIRE_FAQS = [
    {
        question: 'What is a FIRE number?',
        answer: 'A FIRE number is a planning target for the investment portfolio needed to support a chosen level of annual spending. A common shorthand divides annual spending by an assumed withdrawal rate. At 4%, that is 25 times annual spending. The target is not a guarantee because taxes, other income, market returns, inflation and retirement length can change the outcome.',
    },
    {
        question: 'Is the 4% rule guaranteed to work for early retirement?',
        answer: 'No. The 4% rule is a historical planning heuristic based on specific portfolio, withdrawal and time-horizon assumptions. Early retirement can last substantially longer than 30 years, so test multiple withdrawal rates and return assumptions rather than treating 4% as a guaranteed safe rate.',
    },
    {
        question: 'What does real investment return mean?',
        answer: 'A real return is an investment return after accounting for inflation. Using a real-return assumption allows a projection to be expressed in roughly today’s purchasing power. Future nominal returns and inflation are uncertain, so the selected rate should be treated as a scenario rather than a forecast.',
    },
    {
        question: 'Does a higher savings rate always guarantee an earlier retirement?',
        answer: 'A higher savings rate can improve a modeled financial-independence timeline by increasing contributions and potentially lowering required spending, but actual results also depend on taxes, investment returns, inflation, healthcare, major expenses and the withdrawal strategy. The calculator is a scenario tool, not a retirement guarantee.',
    },
];

export default function FirePlannerPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <WebApplicationSchema
                name="FIRE Calculator"
                description="Estimate a financial-independence target and modeled timeline using user-entered spending, savings, return and withdrawal-rate assumptions."
                url="https://usfinnexus.com/calculators/fire-planner"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'FIRE Calculator', item: '/calculators/fire-planner' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Scenario analysis, not a retirement-return forecast</p>
            <h1 className="sr-only">FIRE Calculator</h1>
            <FirePlannerClient />
            <FirePlannerSeoContent />
            <CalculatorFAQ faqs={FIRE_FAQS} title="FIRE Calculator FAQ" />
        </main>
    );
}
