import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import FirePlannerSeoContent from './FirePlannerSeoContent';

const FirePlannerClient = nextDynamic(() => import('./FirePlannerClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'FIRE Calculator 2026 — Financial Independence Retire Early | USFinNexus',
    description: 'Calculate your FIRE number and early retirement timeline. Free financial independence calculator with safe withdrawal rate modeling and Coast FIRE analysis.',
    keywords: [
        'FIRE calculator', 'financial independence retire early calculator',
        'FIRE number calculator', 'early retirement calculator',
        'how much to retire early', 'FIRE retirement planner 2026',
        'coast FIRE calculator', 'lean FIRE calculator', 'fat FIRE calculator',
        'safe withdrawal rate calculator', '4 percent rule calculator',
        'financial independence calculator', 'FIRE savings calculator',
    ],
    alternates: { canonical: 'https://usfinnexus.com/calculators/fire-planner' },
    openGraph: {
        type: 'website',
        title: 'FIRE Calculator 2026 — Financial Independence Retire Early | USFinNexus',
        description: 'Calculate your FIRE number and how many years to early retirement. Free financial independence planner.',
        url: 'https://usfinnexus.com/calculators/fire-planner',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'FIRE Calculator 2026 — USFinNexus' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FIRE Calculator 2026 | Financial Independence | USFinNexus',
        description: 'What is your FIRE number? Calculate how many years to financial independence and early retirement.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const FIRE_FAQS = [
    {
        question: 'What is the 4% Rule?',
        answer: 'The 4% rule is a rule of thumb used to determine a safe withdrawal rate for retirement. It suggests that you can withdraw 4% of your investment portfolio in your first year of retirement, and then adjust that amount for inflation each year, without running out of money for at least 30 years. It is based on the Trinity Study.',
    },
    {
        question: 'Is the 4% rule still safe in 2026?',
        answer: 'Many financial advisors still use the 4% rule as a baseline, but some argue for a more conservative 3.5% or 3.3% withdrawal rate if you are retiring very early (e.g., in your 30s or 40s), because your money needs to last 40-50 years instead of 30. Our calculator lets you adjust the safe withdrawal rate to test different scenarios.',
    },
    {
        question: 'What does "Real Investment Return" mean?',
        answer: '"Real return" is your investment return minus inflation. Historically, the S&P 500 has returned about 10% annually before inflation. With average inflation around 3%, the "real" return is roughly 7%. Using real returns allows you to calculate everything in today\'s dollars.',
    },
    {
        question: 'How do I speed up my FIRE timeline?',
        answer: 'There are only two ways: increase your income or decrease your expenses. Decreasing expenses is actually twice as powerful because it not only increases your savings rate (allowing you to invest more), but it also lowers your target FIRE number (because you need less money to live on).',
    }
];

export default function FirePlannerPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <WebApplicationSchema
                name="FIRE Timeline Planner Calculator"
                description="Calculate your FIRE number and early retirement timeline. Free advanced financial independence calculator."
                url="https://usfinnexus.com/calculators/fire-planner"
                dateModified="2026-03-01"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'FIRE Planner', item: '/calculators/fire-planner' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Last updated: March 2026</p>
            <h1 className="sr-only">FIRE Calculator: Financial Independence Retire Early</h1>
            <FirePlannerClient />
            <FirePlannerSeoContent />
            <CalculatorFAQ faqs={FIRE_FAQS} title="FIRE Movement — Frequently Asked Questions" />
        </main>
    );
}
