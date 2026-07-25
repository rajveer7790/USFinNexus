import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import TrumpAccountCalculator from './TrumpAccountCalculator';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Trump Account Calculator 2026: Project the $1,000 Seed | USFinNexus',
    description: 'Estimate how a Trump Account could grow from the federal $1,000 seed plus family or employer contributions. Free 2026 projection calculator.',
    alternates: { canonical: 'https://usfinnexus.com/calculators/trump-account' },
    openGraph: {
        type: 'website',
        title: 'Trump Account Growth Calculator 2026',
        description: 'Project a child’s balance at ages 18, 28 and 65 using the new 2026 Trump Account rules.',
        url: 'https://usfinnexus.com/calculators/trump-account',
        images: [{ url: 'https://usfinnexus.com/images/trump-accounts-2026.webp', width: 1200, height: 630, alt: 'Trump Account growth calculator illustration' }],
    },
    twitter: { card: 'summary_large_image', images: ['https://usfinnexus.com/images/trump-accounts-2026.webp'] },
};

const FAQS = [
    { question: 'Who may qualify for the $1,000 Trump Account contribution?', answer: 'The federal pilot contribution generally applies to eligible U.S. citizen children born from January 1, 2025 through December 31, 2028 who have a valid Social Security number. Confirm eligibility with the IRS and Form 4547 instructions.' },
    { question: 'What is the 2026 annual contribution limit?', answer: 'IRS guidance sets a $5,000 aggregate annual limit during the growth period for regular contributions. Certain categories—including the federal pilot contribution, qualified general contributions and rollovers—are excluded from that limit.' },
    { question: 'Are calculator returns guaranteed?', answer: 'No. The return is only an assumption. Market performance, investment options, fees, timing, taxes and future law changes can make actual results materially different.' },
    { question: 'Can I contribute more than the child receives from the federal government?', answer: 'Yes, eligible family members, employers and other permitted contributors may add funds, subject to applicable limits and rules. Contributions began July 4, 2026.' },
];

export default function TrumpAccountPage() {
    return (
        <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            <WebApplicationSchema
                name="Trump Account Growth Calculator 2026"
                description="Estimate the future value of a Trump Account using the federal pilot contribution and recurring contributions."
                url="https://usfinnexus.com/calculators/trump-account"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Trump Account', item: '/calculators/trump-account' }]} />

            <header className="mx-auto mb-10 max-w-3xl text-center">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-blue-700">New for 2026</p>
                <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Trump Account Calculator</h1>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Model how the federal $1,000 pilot contribution and ongoing deposits could grow for a child—without signup or personal-data collection.
                </p>
            </header>

            <TrumpAccountCalculator />

            <section className="mx-auto mt-14 max-w-4xl space-y-8 text-slate-700">
                <div>
                    <h2 className="text-3xl font-black text-slate-950">How this calculator works</h2>
                    <p className="mt-3 leading-7">The model starts with an optional $1,000 federal pilot contribution, adds the annual family and employer amount in equal monthly installments, and compounds the selected hypothetical return monthly. It reports estimated balances at ages 18, 28 and 65 so parents can see both the near-term and long-term effect of compounding.</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                    <h2 className="text-xl font-black text-slate-950">Use official rules before acting</h2>
                    <p className="mt-2 leading-7">Trump Accounts are new and guidance can evolve. Review the <a className="font-bold text-blue-700 underline" href="https://www.irs.gov/trumpaccounts" target="_blank" rel="noopener noreferrer">IRS Trump Accounts hub</a>, the <a className="font-bold text-blue-700 underline" href="https://www.irs.gov/forms-pubs/about-form-4547" target="_blank" rel="noopener noreferrer">Form 4547 page</a>, and your financial or tax professional before contributing or withdrawing.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Link href="/blog/trump-accounts-2026-guide" className="rounded-2xl border border-slate-200 p-5 font-bold text-slate-900 hover:border-blue-400">Trump Accounts 2026 complete guide →</Link>
                    <Link href="/blog/trump-account-vs-529-plan" className="rounded-2xl border border-slate-200 p-5 font-bold text-slate-900 hover:border-blue-400">Trump Account vs. 529 comparison →</Link>
                </div>
            </section>

            <div className="mt-12">
                <CalculatorFAQ faqs={FAQS} title="Trump Account Calculator FAQs" />
            </div>
        </main>
    );
}
