import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import RefinanceSeoContent from './RefinanceSeoContent';

const RefinanceClient = nextDynamic(() => import('./RefinanceClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Refinance Calculator 2026 — Break-Even Analysis | USFinNexus',
    description: 'Free mortgage refinance calculator. See your monthly savings, break-even point, and lifetime savings instantly. No signup needed. Updated for 2026 rates.',
    openGraph: {
        type: 'website',
        title: 'Refinance Calculator 2026 | USFinNexus',
        description: 'Compare your current mortgage to a new loan. Find your monthly savings, lifetime savings, and exact break-even point in seconds. Free, no signup.',
        url: 'https://usfinnexus.com/calculators/refinance',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Mortgage Refinance Calculator 2026 — USFinNexus' }],
    },
    alternates: { canonical: 'https://usfinnexus.com/calculators/refinance' },
};

const REFINANCE_FAQS = [
    {
        question: 'When does it make sense to refinance your mortgage in 2026?',
        answer: 'Refinancing typically makes sense when the new interest rate is at least 0.5%–1% lower than your current rate, you plan to stay in the home past the break-even point, and your credit score qualifies you for a better rate. Use our break-even calculator — if you recoup closing costs within 2–3 years, refinancing is generally worth it.',
    },
    {
        question: 'How is the refinance break-even point calculated?',
        answer: 'Break-even point = Total closing costs ÷ Monthly payment savings. For example, if refinancing costs $4,000 in closing costs and saves you $200/month, your break-even is 20 months. If you plan to stay in the home longer than 20 months, refinancing makes financial sense.',
    },
    {
        question: 'Is it worth refinancing if I only save $100 per month?',
        answer: 'It depends on the closing costs and how long you plan to stay. If closing costs are $3,000 and you save $100/month, break-even is 30 months (2.5 years). If you will stay 5+ more years, that is $3,000+ in net savings. Factor in how many years remain on your current loan too — refinancing a 25-year-old 30-year loan into a new 30-year loan restarts the clock.',
    },
    {
        question: 'What are typical refinance closing costs in 2026?',
        answer: 'Refinance closing costs typically range from 2%–5% of the loan amount. On a $300,000 loan, expect $6,000–$15,000 in closing costs. Key fees include loan origination (0.5%–1%), appraisal ($300–$600), title search and insurance ($500–$1,500), and prepaid interest. Some lenders offer no-closing-cost refinancing by folding costs into the rate.',
    },
    {
        question: 'Can I do a cash-out refinance in 2026?',
        answer: 'Yes. A cash-out refinance replaces your current mortgage with a larger loan, and you receive the difference in cash. Most lenders allow up to 80% LTV on a cash-out refi. For a home worth $500,000 with a $300,000 mortgage, you could potentially access up to $100,000 in cash. Rates on cash-out refis are typically 0.25%–0.5% higher than standard rate-and-term refinances.',
    },
];

export default function RefinancePage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Mortgage Refinance Calculator 2026"
                description="Compare your current mortgage to a new loan. Find your monthly savings, lifetime savings, and exact break-even point."
                url="https://usfinnexus.com/calculators/refinance"
                dateModified="2026-03-01"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Refinance Calculator', item: '/calculators/refinance' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Last updated: March 2026 &middot; 2026 average mortgage rates applied</p>
            <RefinanceClient />
            <RefinanceSeoContent />
            <CalculatorFAQ faqs={REFINANCE_FAQS} title="Mortgage Refinance — Frequently Asked Questions" />
        </main>
    );
}
