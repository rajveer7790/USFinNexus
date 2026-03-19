import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import AffordabilitySeoContent from './AffordabilitySeoContent';

const AffordabilityClient = nextDynamic(() => import('./AffordabilityClient'), {
    loading: () => <CalculatorSkeleton />,
});
import CalculatorFAQ from '@/components/CalculatorFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Home Affordability Calculator 2026 — How Much House Can I Afford?',
    description: 'Free CFPB-compliant home affordability calculator. Know your max home price, monthly payment, front-end & back-end DTI in seconds. No signup, no spam.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/affordability' },
    openGraph: {
        type: 'website',
        title: 'Home Affordability Calculator 2026 | USFinNexus',
        description: 'Free CFPB-compliant home affordability calculator. Know your max home price, monthly payment, and DTI ratios in seconds. No signup, no spam.',
        url: 'https://usfinnexus.com/calculators/affordability',
        images: [{ url: 'https://usfinnexus.com/images/home-hero-v2.png', width: 1200, height: 630, alt: 'Home Affordability Calculator 2026 — USFinNexus' }],
    },
};

const AFFORDABILITY_FAQS = [
    {
        question: 'How much house can I afford on a $100,000 salary?',
        answer: 'On a $100,000 annual salary (roughly $8,333/month gross), the CFPB\'s 28% front-end DTI guideline allows up to $2,333/month for housing (PITI). At a 7% rate on a 30-year mortgage, that supports a home price of roughly $290,000–$320,000 depending on taxes and insurance in your area. Use our affordability calculator for your exact situation.',
    },
    {
        question: 'What is the CFPB 28/43 rule for mortgage qualification?',
        answer: 'The CFPB\'s Qualified Mortgage guidelines use two DTI limits: the "front-end" ratio caps your housing costs (PITI) at 28% of gross monthly income, and the "back-end" ratio caps all monthly debt payments (housing + car loans + student loans + credit cards) at 43% of gross monthly income. Lenders may allow higher ratios for strong borrowers.',
    },
    {
        question: 'Does my down payment affect how much house I can afford?',
        answer: 'Yes — a larger down payment reduces your loan amount, which lowers your monthly payment and may eliminate PMI (if 20%+). A $50,000 larger down payment on a 30-year 7% loan reduces monthly payments by about $333/month and could increase your affordable home price by $50,000–$60,000.',
    },
    {
        question: 'What debts count toward my back-end DTI?',
        answer: 'Back-end DTI includes all monthly minimum debt payments: your proposed mortgage PITI, car loans, student loans, personal loans, credit card minimum payments, alimony, and child support. It does not include utilities, groceries, insurance premiums, or subscription services.',
    },
    {
        question: 'Can I afford a house with a 50% DTI?',
        answer: 'Some lenders allow DTI ratios up to 50% for borrowers with strong compensating factors (high credit score, large cash reserves, low LTV). However, a 50% DTI leaves less financial buffer for emergencies and lifestyle expenses. Financial planners generally recommend keeping total housing costs under 30% of gross income.',
    },
];

export default function AffordabilityPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <WebApplicationSchema
                name="Home Affordability Calculator 2026"
                description="Free CFPB-compliant home affordability calculator. Know your max home price, monthly payment, and DTI ratios instantly."
                url="https://usfinnexus.com/calculators/affordability"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/#calculators' }, { name: 'Affordability Calculator', item: '/calculators/affordability' }]} />
            <AffordabilityClient />
            <AffordabilitySeoContent />
            <CalculatorFAQ faqs={AFFORDABILITY_FAQS} title="Home Affordability — Frequently Asked Questions" />
        </main>
    );
}

