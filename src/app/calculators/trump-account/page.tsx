import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import TrumpAccountCalculator from './TrumpAccountCalculator';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Trump Account Calculator | USFinNexus',
    description: 'Project a child’s Trump Account balance using the $1,000 federal pilot contribution when eligible, regular contributions up to the 2026 limit, employer contributions and a hypothetical return.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/trump-account' },
    openGraph: {
        type: 'website',
        title: 'Trump Account Calculator | USFinNexus',
        description: 'Project a Trump Account balance using current 2026 IRS contribution rules and hypothetical investment returns.',
        url: 'https://usfinnexus.com/calculators/trump-account',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/images/trump-accounts-2026.webp', width: 1200, height: 630, alt: 'Trump Account calculator illustration' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trump Account Calculator | USFinNexus',
        description: 'Project a Trump Account using current 2026 IRS contribution rules.',
        images: ['https://usfinnexus.com/images/trump-accounts-2026.webp'],
    },
};

const FAQS = [
    {
        question: 'Who can receive the $1,000 Trump Account pilot contribution?',
        answer: 'The pilot contribution is available for an eligible child who is a U.S. citizen, has a valid Social Security number, and was born in calendar year 2025, 2026, 2027 or 2028, if a qualifying election is made and no prior pilot-program contribution has been processed for that child. Check current IRS Form 4547 instructions for the election requirements.',
    },
    {
        question: 'What is the regular Trump Account contribution limit for 2026?',
        answer: 'During the growth period, the aggregate annual limit for contributions from other sources plus Section 128 employer contributions is $5,000. The $1,000 federal pilot contribution, qualified general contributions and qualified rollover contributions do not count toward that annual limit. The $5,000 limit is scheduled for cost-of-living adjustments after 2027.',
    },
    {
        question: 'How much can an employer contribute in 2026?',
        answer: 'A Section 128 employer contribution can be excluded from the employee’s gross income up to $2,500 for 2026, subject to the program rules. That amount counts toward the $5,000 aggregate annual limit for regular and employer contributions.',
    },
    {
        question: 'When could contributions start?',
        answer: 'IRS guidance states that contributions to Trump Accounts could not be made before July 4, 2026. This calculator is a long-term projection and does not attempt to model the exact partial-year contribution timing for 2026.',
    },
    {
        question: 'Are the projected returns guaranteed?',
        answer: 'No. The selected return is only a hypothetical assumption. Eligible investments, fees, market performance, contribution timing, taxes and future law changes can make actual results materially different.',
    },
];

export default function TrumpAccountPage() {
    return (
        <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            <WebApplicationSchema
                name="Trump Account Calculator"
                description="Project a Trump Account using the federal pilot contribution, regular contributions and a hypothetical investment return."
                url="https://usfinnexus.com/calculators/trump-account"
                dateModified="2026-08-07"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Trump Account Calculator', item: '/calculators/trump-account' }]} />
            <p className="text-xs text-gray-500 mt-1 mb-4">Reviewed August 7, 2026 · Current IRS Trump Account and Form 4547 guidance</p>

            <header className="mx-auto mb-10 max-w-3xl text-center">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-blue-700">Tax-advantaged account for eligible children</p>
                <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Trump Account Calculator</h1>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Model how an eligible $1,000 Treasury pilot contribution and future permitted deposits could grow for a child. Standard calculator results do not require an email or phone number; see our Privacy Policy for website-service data disclosures.
                </p>
            </header>

            <TrumpAccountCalculator />

            <section className="mx-auto mt-14 max-w-4xl space-y-8 text-slate-700">
                <div>
                    <h2 className="text-3xl font-black text-slate-950">How this calculator works</h2>
                    <p className="mt-3 leading-7">The model starts with an optional $1,000 federal pilot contribution, adds the selected family and employer amount in equal monthly installments for the modeled future years, and compounds the hypothetical return monthly. It shows balances at ages 18, 28 and 65. This is a planning model, not an IRS account statement or investment forecast.</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                    <h2 className="text-xl font-black text-slate-950">Current 2026 rules to know</h2>
                    <ul className="mt-3 space-y-2 leading-7">
                        <li>Regular contributions plus Section 128 employer contributions are generally limited to $5,000 during the growth period for 2026.</li>
                        <li>Section 128 employer contributions can receive an income exclusion up to $2,500 for 2026 and count toward the $5,000 aggregate limit.</li>
                        <li>Contributions could not be made before July 4, 2026.</li>
                        <li>During the growth period, investments are restricted to eligible broad U.S. equity index mutual funds or ETFs meeting statutory requirements, including limits on leverage and expenses.</li>
                        <li>Distributions are generally restricted during the growth period, subject to specified rollover, excess-contribution, ABLE and death exceptions.</li>
                    </ul>
                    <p className="mt-4 leading-7">Review the <a className="font-bold text-blue-700 underline" href="https://www.irs.gov/trumpaccounts" target="_blank" rel="noopener noreferrer">IRS Trump Accounts hub</a> and <a className="font-bold text-blue-700 underline" href="https://www.irs.gov/forms-pubs/about-form-4547" target="_blank" rel="noopener noreferrer">Form 4547 page</a> before acting.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Link href="/blog/trump-accounts-2026-guide" className="rounded-2xl border border-slate-200 p-5 font-bold text-slate-900 hover:border-blue-400">Trump Accounts 2026 guide →</Link>
                    <Link href="/blog/trump-account-vs-529-plan" className="rounded-2xl border border-slate-200 p-5 font-bold text-slate-900 hover:border-blue-400">Trump Account vs. 529 comparison →</Link>
                </div>
            </section>

            <div className="mt-12"><CalculatorFAQ faqs={FAQS} title="Trump Account Calculator FAQ" /></div>
        </main>
    );
}
